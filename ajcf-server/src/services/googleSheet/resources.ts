export interface GoogleDriveCreationResponse {
  kind: string; // "drive#file"
  id: string; // fileId
  name: string; // fileName
  mimeType: string; // mimeType of google file
}

export interface CellData {
  userEnteredValue: {
    stringValue: string;
  };
  effectiveValue: {
    stringValue: string;
  };
  formattedValue: string;
  effectiveFormat: {
    backgroundColor: {
      red: number;
      green: number;
      blue: number;
    };
    padding: {
      top: number;
      right: number;
      bottom: number;
      left: number;
    };
    horizontalAlignment: string;
    verticalAlignment: string;
    wrapStrategy: string;
    textFormat: {
      foregroundColor: object;
      fontFamily: string;
      fontSize: number;
      bold: boolean;
      italic: boolean;
      strikethrough: boolean;
      underline: boolean;
    };
    hyperlinkDisplayType: string;
  };
}

export interface RowData {
  values: CellData[];
}

export interface FetchGoogleSheetResponse {
  spreadsheetId: string;
  properties: {
    title: string;
    locale: string; // language
    autoRecalc: string;
    timeZone: string;
    defaultFormat: {
      backgroundColor: object;
      padding: object;
      verticalAlignment: string;
      wrapStrategy: string;
      textFormat: string;
    };
  };
  sheets: {
    properties: object;
    data: {
      rowData: RowData[];
    }[];
  }[];
  spreadsheetUrl: string;
}

export type EntityIdType = "helloAssoId" | "EMAIL";
