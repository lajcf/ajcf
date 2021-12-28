import bearer from "@bearer/node";
import { zipObject } from "lodash";
import { EntityIdType, FetchGoogleSheetResponse, GoogleDriveCreationResponse, RowData } from "./resources";

export interface GoogleSheetUpddateValuesResponse {
  spreadsheetId: string;
  updatedRange: string;
  updatedRows: number;
  updatedColumns: number;
  updatedCells: number;
  updatedData?: object;
}

export const addEntitiesToGoogleSheet = async <T extends object>(entities: T[]) => {
  if (entities.length === 0) return 0;
  const bearerClient = bearer(process.env.BEARER_SECRET_KEY);
  const entityKeys = Object.keys(entities[0]);
  const formattedEntities = entities.map((m) => Object.values(m));
  const insertedEntitiesToGSheetNb = await bearerClient
    .integration("google_sheets")
    .auth(process.env.GOOGLE_SHEET_API_BEARER_KEY!)
    .put<GoogleSheetUpddateValuesResponse>(
      `${process.env.GOOGLE_SHEET_MEMBERS_ID}/values/${entities[0].constructor.name}!A1`,
      {
        query: {
          valueInputOption: "RAW",
        },
        body: {
          values: [entityKeys, ...formattedEntities],
        },
      }
    )
    .then((res) => res.data.updatedRows)
    .catch((e) => {
      console.log(e);
      throw new Error(`Error in adding entity to gsheet: ${e.response.data}.`);
    });
  console.log(`Inserted ${insertedEntitiesToGSheetNb} entities into GSheet`);
  return true;
};

export const createGoogleSheet = async (sheetName: string): Promise<string> => {
  const bearerClient = bearer(process.env.BEARER_SECRET_KEY);
  const response = await bearerClient
    .integration("google_drive")
    .auth(process.env.GOOGLE_DRIVE_API_BEARER_KEY!)
    .post<GoogleDriveCreationResponse>(`/files`, {
      body: {
        name: sheetName,
        mimeType: "application/vnd.google-apps.spreadsheet",
        parents: [process.env.GOOGLE_DRIVE_DB_FOLDER_ID],
      },
    });
  console.log(response.data);
  if (response.data?.id) {
    return response.data.id;
  }
  throw new Error("Error while creating file in google drive");
};

export const fetchGoogleSheet = async (sheetId: string): Promise<FetchGoogleSheetResponse | null> => {
  try {
    const bearerClient = bearer(process.env.BEARER_SECRET_KEY);
    const response = await bearerClient
      .integration("google_sheets")
      .auth(process.env.GOOGLE_SHEET_API_BEARER_KEY!)
      .get<FetchGoogleSheetResponse>(`${sheetId}`, {
        query: {
          includeGridData: "true",
        },
      });
    return response.data;
  } catch (e: any) {
    console.log(`Error in fetching gsheet: ${JSON.stringify(e.response.data, null, 2)}.`);
    return null;
  }
};

export const convertGoogleSheetToObjectArray = (rowData: RowData[]) => {
  if (rowData.length === 0) return [];
  const headers = rowData[0].values.map((v) => v.formattedValue);
  const values = rowData.slice(1).map((r) => r.values.map((v) => v.formattedValue)); // [[rowValues], [rowValues]]...
  return values.map((rowValues) => zipObject(headers, rowValues));
};

export const extractEntityFromSheet = (entityId: string, idType: EntityIdType, rowData: RowData[]) => {
  const dataToObjectArray = convertGoogleSheetToObjectArray(rowData);
  const entityRow = dataToObjectArray.find((o) => o[idType]);
  return entityRow;
};
