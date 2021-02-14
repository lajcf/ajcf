import { GraphQLClient } from "graphql-request";
import { print } from "graphql";
import gql from "graphql-tag";

export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date string, such as 2007-12-03 (YYYY-MM-DD), compliant with ISO 8601 standard for representation of dates using the Gregorian calendar. */
  Date: any;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the date-timeformat outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representationof dates and times using the Gregorian calendar. */
  DateTime: any;
  Hex: any;
  /** Raw JSON value */
  Json: any;
  /** The Long scalar type represents non-fractional signed whole numeric values. Long can represent values between -(2^63) and 2^63 - 1. */
  Long: any;
  RGBAHue: any;
  RGBATransparency: any;
  /** Slate-compatible RichText AST */
  RichTextAST: any;
};

export type Aggregate = {
  __typename?: "Aggregate";
  count: Scalars["Int"];
};

/** Articles for the blog section */
export type Article = Node & {
  __typename?: "Article";
  /** System stage field */
  stage: Stage;
  /** Get the document in other stages */
  documentInStages: Array<Article>;
  /** The unique identifier */
  id: Scalars["ID"];
  /** The time the document was created */
  createdAt: Scalars["DateTime"];
  /** The time the document was updated */
  updatedAt: Scalars["DateTime"];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars["DateTime"]>;
  title: Scalars["String"];
  author: Array<Scalars["String"]>;
  content: RichText;
  blogLabels: Array<BlogLabel>;
  /** Cover image for the article */
  cover?: Maybe<Asset>;
  /** List of Article versions */
  history: Array<Version>;
};

/** Articles for the blog section */
export type ArticledocumentInStagesArgs = {
  stages?: Array<Stage>;
  includeCurrent?: Scalars["Boolean"];
  inheritLocale?: Scalars["Boolean"];
};

/** Articles for the blog section */
export type ArticlecoverArgs = {
  locales?: Maybe<Array<Locale>>;
};

/** Articles for the blog section */
export type ArticlehistoryArgs = {
  limit?: Scalars["Int"];
  skip?: Scalars["Int"];
  stageOverride?: Maybe<Stage>;
};

export type ArticleConnectInput = {
  /** Document to connect */
  where: ArticleWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
};

/** A connection to a list of items. */
export type ArticleConnection = {
  __typename?: "ArticleConnection";
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<ArticleEdge>;
  aggregate: Aggregate;
};

export type ArticleCreateInput = {
  createdAt?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  title: Scalars["String"];
  author?: Maybe<Array<Scalars["String"]>>;
  content: Scalars["RichTextAST"];
  blogLabels?: Maybe<Array<BlogLabel>>;
  cover?: Maybe<AssetCreateOneInlineInput>;
};

export type ArticleCreateManyInlineInput = {
  /** Create and connect multiple existing Article documents */
  create?: Maybe<Array<ArticleCreateInput>>;
  /** Connect multiple existing Article documents */
  connect?: Maybe<Array<ArticleWhereUniqueInput>>;
};

export type ArticleCreateOneInlineInput = {
  /** Create and connect one Article document */
  create?: Maybe<ArticleCreateInput>;
  /** Connect one existing Article document */
  connect?: Maybe<ArticleWhereUniqueInput>;
};

/** An edge in a connection. */
export type ArticleEdge = {
  __typename?: "ArticleEdge";
  /** The item at the end of the edge. */
  node: Article;
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
};

/** Identifies documents */
export type ArticleManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars["String"]>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<ArticleWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<ArticleWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<ArticleWhereInput>>;
  id?: Maybe<Scalars["ID"]>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars["ID"]>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars["ID"]>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars["ID"]>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars["ID"]>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars["ID"]>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars["ID"]>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars["ID"]>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars["ID"]>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars["ID"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars["DateTime"]>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars["DateTime"]>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars["DateTime"]>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars["DateTime"]>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars["DateTime"]>;
  publishedAt?: Maybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars["DateTime"]>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars["DateTime"]>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars["DateTime"]>;
  title?: Maybe<Scalars["String"]>;
  /** All values that are not equal to given value. */
  title_not?: Maybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  title_in?: Maybe<Array<Scalars["String"]>>;
  /** All values that are not contained in given list. */
  title_not_in?: Maybe<Array<Scalars["String"]>>;
  /** All values containing the given string. */
  title_contains?: Maybe<Scalars["String"]>;
  /** All values not containing the given string. */
  title_not_contains?: Maybe<Scalars["String"]>;
  /** All values starting with the given string. */
  title_starts_with?: Maybe<Scalars["String"]>;
  /** All values not starting with the given string. */
  title_not_starts_with?: Maybe<Scalars["String"]>;
  /** All values ending with the given string. */
  title_ends_with?: Maybe<Scalars["String"]>;
  /** All values not ending with the given string */
  title_not_ends_with?: Maybe<Scalars["String"]>;
  /** Matches if the field array contains *all* items provided to the filter and order does match */
  author?: Maybe<Array<Scalars["String"]>>;
  /** Matches if the field array does not contains *all* items provided to the filter or order does not match */
  author_not?: Maybe<Array<Scalars["String"]>>;
  /** Matches if the field array contains *all* items provided to the filter */
  author_contains_all?: Maybe<Array<Scalars["String"]>>;
  /** Matches if the field array contains at least one item provided to the filter */
  author_contains_some?: Maybe<Array<Scalars["String"]>>;
  /** Matches if the field array does not contain any of the items provided to the filter */
  author_contains_none?: Maybe<Array<Scalars["String"]>>;
  /** Matches if the field array contains *all* items provided to the filter and order does match */
  blogLabels?: Maybe<Array<BlogLabel>>;
  /** Matches if the field array does not contains *all* items provided to the filter or order does not match */
  blogLabels_not?: Maybe<Array<BlogLabel>>;
  /** Matches if the field array contains *all* items provided to the filter */
  blogLabels_contains_all?: Maybe<Array<BlogLabel>>;
  /** Matches if the field array contains at least one item provided to the filter */
  blogLabels_contains_some?: Maybe<Array<BlogLabel>>;
  /** Matches if the field array does not contain any of the items provided to the filter */
  blogLabels_contains_none?: Maybe<Array<BlogLabel>>;
  cover?: Maybe<AssetWhereInput>;
};

export enum ArticleOrderByInput {
  id_ASC = "id_ASC",
  id_DESC = "id_DESC",
  createdAt_ASC = "createdAt_ASC",
  createdAt_DESC = "createdAt_DESC",
  updatedAt_ASC = "updatedAt_ASC",
  updatedAt_DESC = "updatedAt_DESC",
  publishedAt_ASC = "publishedAt_ASC",
  publishedAt_DESC = "publishedAt_DESC",
  title_ASC = "title_ASC",
  title_DESC = "title_DESC",
  author_ASC = "author_ASC",
  author_DESC = "author_DESC",
  blogLabels_ASC = "blogLabels_ASC",
  blogLabels_DESC = "blogLabels_DESC",
}

export type ArticleUpdateInput = {
  title?: Maybe<Scalars["String"]>;
  author?: Maybe<Array<Scalars["String"]>>;
  content?: Maybe<Scalars["RichTextAST"]>;
  blogLabels?: Maybe<Array<BlogLabel>>;
  cover?: Maybe<AssetUpdateOneInlineInput>;
};

export type ArticleUpdateManyInlineInput = {
  /** Create and connect multiple Article documents */
  create?: Maybe<Array<ArticleCreateInput>>;
  /** Connect multiple existing Article documents */
  connect?: Maybe<Array<ArticleConnectInput>>;
  /** Override currently-connected documents with multiple existing Article documents */
  set?: Maybe<Array<ArticleWhereUniqueInput>>;
  /** Update multiple Article documents */
  update?: Maybe<Array<ArticleUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Article documents */
  upsert?: Maybe<Array<ArticleUpsertWithNestedWhereUniqueInput>>;
  /** Disconnect multiple Article documents */
  disconnect?: Maybe<Array<ArticleWhereUniqueInput>>;
  /** Delete multiple Article documents */
  delete?: Maybe<Array<ArticleWhereUniqueInput>>;
};

export type ArticleUpdateManyInput = {
  title?: Maybe<Scalars["String"]>;
  author?: Maybe<Array<Scalars["String"]>>;
  content?: Maybe<Scalars["RichTextAST"]>;
  blogLabels?: Maybe<Array<BlogLabel>>;
};

export type ArticleUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: ArticleWhereInput;
  /** Update many input */
  data: ArticleUpdateManyInput;
};

export type ArticleUpdateOneInlineInput = {
  /** Create and connect one Article document */
  create?: Maybe<ArticleCreateInput>;
  /** Update single Article document */
  update?: Maybe<ArticleUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Article document */
  upsert?: Maybe<ArticleUpsertWithNestedWhereUniqueInput>;
  /** Connect existing Article document */
  connect?: Maybe<ArticleWhereUniqueInput>;
  /** Disconnect currently connected Article document */
  disconnect?: Maybe<Scalars["Boolean"]>;
  /** Delete currently connected Article document */
  delete?: Maybe<Scalars["Boolean"]>;
};

export type ArticleUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: ArticleWhereUniqueInput;
  /** Document to update */
  data: ArticleUpdateInput;
};

export type ArticleUpsertInput = {
  /** Create document if it didn't exist */
  create: ArticleCreateInput;
  /** Update document if it exists */
  update: ArticleUpdateInput;
};

export type ArticleUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: ArticleWhereUniqueInput;
  /** Upsert data */
  data: ArticleUpsertInput;
};

/** Identifies documents */
export type ArticleWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars["String"]>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<ArticleWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<ArticleWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<ArticleWhereInput>>;
  id?: Maybe<Scalars["ID"]>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars["ID"]>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars["ID"]>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars["ID"]>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars["ID"]>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars["ID"]>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars["ID"]>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars["ID"]>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars["ID"]>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars["ID"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars["DateTime"]>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars["DateTime"]>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars["DateTime"]>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars["DateTime"]>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars["DateTime"]>;
  publishedAt?: Maybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars["DateTime"]>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars["DateTime"]>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars["DateTime"]>;
  title?: Maybe<Scalars["String"]>;
  /** All values that are not equal to given value. */
  title_not?: Maybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  title_in?: Maybe<Array<Scalars["String"]>>;
  /** All values that are not contained in given list. */
  title_not_in?: Maybe<Array<Scalars["String"]>>;
  /** All values containing the given string. */
  title_contains?: Maybe<Scalars["String"]>;
  /** All values not containing the given string. */
  title_not_contains?: Maybe<Scalars["String"]>;
  /** All values starting with the given string. */
  title_starts_with?: Maybe<Scalars["String"]>;
  /** All values not starting with the given string. */
  title_not_starts_with?: Maybe<Scalars["String"]>;
  /** All values ending with the given string. */
  title_ends_with?: Maybe<Scalars["String"]>;
  /** All values not ending with the given string */
  title_not_ends_with?: Maybe<Scalars["String"]>;
  /** Matches if the field array contains *all* items provided to the filter and order does match */
  author?: Maybe<Array<Scalars["String"]>>;
  /** Matches if the field array does not contains *all* items provided to the filter or order does not match */
  author_not?: Maybe<Array<Scalars["String"]>>;
  /** Matches if the field array contains *all* items provided to the filter */
  author_contains_all?: Maybe<Array<Scalars["String"]>>;
  /** Matches if the field array contains at least one item provided to the filter */
  author_contains_some?: Maybe<Array<Scalars["String"]>>;
  /** Matches if the field array does not contain any of the items provided to the filter */
  author_contains_none?: Maybe<Array<Scalars["String"]>>;
  /** Matches if the field array contains *all* items provided to the filter and order does match */
  blogLabels?: Maybe<Array<BlogLabel>>;
  /** Matches if the field array does not contains *all* items provided to the filter or order does not match */
  blogLabels_not?: Maybe<Array<BlogLabel>>;
  /** Matches if the field array contains *all* items provided to the filter */
  blogLabels_contains_all?: Maybe<Array<BlogLabel>>;
  /** Matches if the field array contains at least one item provided to the filter */
  blogLabels_contains_some?: Maybe<Array<BlogLabel>>;
  /** Matches if the field array does not contain any of the items provided to the filter */
  blogLabels_contains_none?: Maybe<Array<BlogLabel>>;
  cover?: Maybe<AssetWhereInput>;
};

/** References Article record uniquely */
export type ArticleWhereUniqueInput = {
  id?: Maybe<Scalars["ID"]>;
};

/** Asset system model */
export type Asset = Node & {
  __typename?: "Asset";
  /** System stage field */
  stage: Stage;
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<Asset>;
  /** Get the document in other stages */
  documentInStages: Array<Asset>;
  /** The unique identifier */
  id: Scalars["ID"];
  /** The time the document was created */
  createdAt: Scalars["DateTime"];
  /** The time the document was updated */
  updatedAt: Scalars["DateTime"];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars["DateTime"]>;
  /** The file handle */
  handle: Scalars["String"];
  /** The file name */
  fileName: Scalars["String"];
  /** The height of the file */
  height?: Maybe<Scalars["Float"]>;
  /** The file width */
  width?: Maybe<Scalars["Float"]>;
  /** The file size */
  size?: Maybe<Scalars["Float"]>;
  /** The mime type of the file */
  mimeType?: Maybe<Scalars["String"]>;
  coverArticle: Array<Article>;
  assetLabel: Array<AssetLabel>;
  coverEvent: Array<Event>;
  /** List of Asset versions */
  history: Array<Version>;
  /** Get the url for the asset with provided transformations applied. */
  url: Scalars["String"];
};

/** Asset system model */
export type AssetlocalizationsArgs = {
  locales?: Array<Locale>;
  includeCurrent?: Scalars["Boolean"];
};

/** Asset system model */
export type AssetdocumentInStagesArgs = {
  stages?: Array<Stage>;
  includeCurrent?: Scalars["Boolean"];
  inheritLocale?: Scalars["Boolean"];
};

/** Asset system model */
export type AssetcreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};

/** Asset system model */
export type AssetupdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};

/** Asset system model */
export type AssetpublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};

/** Asset system model */
export type AssetcoverArticleArgs = {
  where?: Maybe<ArticleWhereInput>;
  orderBy?: Maybe<ArticleOrderByInput>;
  skip?: Maybe<Scalars["Int"]>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  locales?: Maybe<Array<Locale>>;
};

/** Asset system model */
export type AssetcoverEventArgs = {
  where?: Maybe<EventWhereInput>;
  orderBy?: Maybe<EventOrderByInput>;
  skip?: Maybe<Scalars["Int"]>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  locales?: Maybe<Array<Locale>>;
};

/** Asset system model */
export type AssethistoryArgs = {
  limit?: Scalars["Int"];
  skip?: Scalars["Int"];
  stageOverride?: Maybe<Stage>;
};

/** Asset system model */
export type AsseturlArgs = {
  transformation?: Maybe<AssetTransformationInput>;
};

export type AssetConnectInput = {
  /** Document to connect */
  where: AssetWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
};

/** A connection to a list of items. */
export type AssetConnection = {
  __typename?: "AssetConnection";
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<AssetEdge>;
  aggregate: Aggregate;
};

export type AssetCreateInput = {
  createdAt?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  handle: Scalars["String"];
  fileName: Scalars["String"];
  height?: Maybe<Scalars["Float"]>;
  width?: Maybe<Scalars["Float"]>;
  size?: Maybe<Scalars["Float"]>;
  mimeType?: Maybe<Scalars["String"]>;
  coverArticle?: Maybe<ArticleCreateManyInlineInput>;
  assetLabel?: Maybe<Array<AssetLabel>>;
  coverEvent?: Maybe<EventCreateManyInlineInput>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: Maybe<AssetCreateLocalizationsInput>;
};

export type AssetCreateLocalizationDataInput = {
  createdAt?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  handle: Scalars["String"];
  fileName: Scalars["String"];
  height?: Maybe<Scalars["Float"]>;
  width?: Maybe<Scalars["Float"]>;
  size?: Maybe<Scalars["Float"]>;
  mimeType?: Maybe<Scalars["String"]>;
};

export type AssetCreateLocalizationInput = {
  /** Localization input */
  data: AssetCreateLocalizationDataInput;
  locale: Locale;
};

export type AssetCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: Maybe<Array<AssetCreateLocalizationInput>>;
};

export type AssetCreateManyInlineInput = {
  /** Create and connect multiple existing Asset documents */
  create?: Maybe<Array<AssetCreateInput>>;
  /** Connect multiple existing Asset documents */
  connect?: Maybe<Array<AssetWhereUniqueInput>>;
};

export type AssetCreateOneInlineInput = {
  /** Create and connect one Asset document */
  create?: Maybe<AssetCreateInput>;
  /** Connect one existing Asset document */
  connect?: Maybe<AssetWhereUniqueInput>;
};

/** An edge in a connection. */
export type AssetEdge = {
  __typename?: "AssetEdge";
  /** The item at the end of the edge. */
  node: Asset;
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
};

export enum AssetLabel {
  press = "press",
  press_release = "press_release",
  press_review = "press_review",
}

/** Identifies documents */
export type AssetManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars["String"]>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<AssetWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<AssetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<AssetWhereInput>>;
  id?: Maybe<Scalars["ID"]>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars["ID"]>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars["ID"]>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars["ID"]>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars["ID"]>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars["ID"]>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars["ID"]>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars["ID"]>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars["ID"]>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars["ID"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars["DateTime"]>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars["DateTime"]>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars["DateTime"]>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars["DateTime"]>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars["DateTime"]>;
  publishedAt?: Maybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars["DateTime"]>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars["DateTime"]>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars["DateTime"]>;
  coverArticle_every?: Maybe<ArticleWhereInput>;
  coverArticle_some?: Maybe<ArticleWhereInput>;
  coverArticle_none?: Maybe<ArticleWhereInput>;
  /** Matches if the field array contains *all* items provided to the filter and order does match */
  assetLabel?: Maybe<Array<AssetLabel>>;
  /** Matches if the field array does not contains *all* items provided to the filter or order does not match */
  assetLabel_not?: Maybe<Array<AssetLabel>>;
  /** Matches if the field array contains *all* items provided to the filter */
  assetLabel_contains_all?: Maybe<Array<AssetLabel>>;
  /** Matches if the field array contains at least one item provided to the filter */
  assetLabel_contains_some?: Maybe<Array<AssetLabel>>;
  /** Matches if the field array does not contain any of the items provided to the filter */
  assetLabel_contains_none?: Maybe<Array<AssetLabel>>;
  coverEvent_every?: Maybe<EventWhereInput>;
  coverEvent_some?: Maybe<EventWhereInput>;
  coverEvent_none?: Maybe<EventWhereInput>;
};

export enum AssetOrderByInput {
  id_ASC = "id_ASC",
  id_DESC = "id_DESC",
  createdAt_ASC = "createdAt_ASC",
  createdAt_DESC = "createdAt_DESC",
  updatedAt_ASC = "updatedAt_ASC",
  updatedAt_DESC = "updatedAt_DESC",
  publishedAt_ASC = "publishedAt_ASC",
  publishedAt_DESC = "publishedAt_DESC",
  handle_ASC = "handle_ASC",
  handle_DESC = "handle_DESC",
  fileName_ASC = "fileName_ASC",
  fileName_DESC = "fileName_DESC",
  height_ASC = "height_ASC",
  height_DESC = "height_DESC",
  width_ASC = "width_ASC",
  width_DESC = "width_DESC",
  size_ASC = "size_ASC",
  size_DESC = "size_DESC",
  mimeType_ASC = "mimeType_ASC",
  mimeType_DESC = "mimeType_DESC",
  assetLabel_ASC = "assetLabel_ASC",
  assetLabel_DESC = "assetLabel_DESC",
}

/** Transformations for Assets */
export type AssetTransformationInput = {
  image?: Maybe<ImageTransformationInput>;
  document?: Maybe<DocumentTransformationInput>;
  /** Pass true if you want to validate the passed transformation parameters */
  validateOptions?: Maybe<Scalars["Boolean"]>;
};

export type AssetUpdateInput = {
  handle?: Maybe<Scalars["String"]>;
  fileName?: Maybe<Scalars["String"]>;
  height?: Maybe<Scalars["Float"]>;
  width?: Maybe<Scalars["Float"]>;
  size?: Maybe<Scalars["Float"]>;
  mimeType?: Maybe<Scalars["String"]>;
  coverArticle?: Maybe<ArticleUpdateManyInlineInput>;
  assetLabel?: Maybe<Array<AssetLabel>>;
  coverEvent?: Maybe<EventUpdateManyInlineInput>;
  /** Manage document localizations */
  localizations?: Maybe<AssetUpdateLocalizationsInput>;
};

export type AssetUpdateLocalizationDataInput = {
  handle?: Maybe<Scalars["String"]>;
  fileName?: Maybe<Scalars["String"]>;
  height?: Maybe<Scalars["Float"]>;
  width?: Maybe<Scalars["Float"]>;
  size?: Maybe<Scalars["Float"]>;
  mimeType?: Maybe<Scalars["String"]>;
};

export type AssetUpdateLocalizationInput = {
  data: AssetUpdateLocalizationDataInput;
  locale: Locale;
};

export type AssetUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: Maybe<Array<AssetCreateLocalizationInput>>;
  /** Localizations to update */
  update?: Maybe<Array<AssetUpdateLocalizationInput>>;
  upsert?: Maybe<Array<AssetUpsertLocalizationInput>>;
  /** Localizations to delete */
  delete?: Maybe<Array<Locale>>;
};

export type AssetUpdateManyInlineInput = {
  /** Create and connect multiple Asset documents */
  create?: Maybe<Array<AssetCreateInput>>;
  /** Connect multiple existing Asset documents */
  connect?: Maybe<Array<AssetConnectInput>>;
  /** Override currently-connected documents with multiple existing Asset documents */
  set?: Maybe<Array<AssetWhereUniqueInput>>;
  /** Update multiple Asset documents */
  update?: Maybe<Array<AssetUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Asset documents */
  upsert?: Maybe<Array<AssetUpsertWithNestedWhereUniqueInput>>;
  /** Disconnect multiple Asset documents */
  disconnect?: Maybe<Array<AssetWhereUniqueInput>>;
  /** Delete multiple Asset documents */
  delete?: Maybe<Array<AssetWhereUniqueInput>>;
};

export type AssetUpdateManyInput = {
  fileName?: Maybe<Scalars["String"]>;
  height?: Maybe<Scalars["Float"]>;
  width?: Maybe<Scalars["Float"]>;
  size?: Maybe<Scalars["Float"]>;
  mimeType?: Maybe<Scalars["String"]>;
  assetLabel?: Maybe<Array<AssetLabel>>;
  /** Optional updates to localizations */
  localizations?: Maybe<AssetUpdateManyLocalizationsInput>;
};

export type AssetUpdateManyLocalizationDataInput = {
  fileName?: Maybe<Scalars["String"]>;
  height?: Maybe<Scalars["Float"]>;
  width?: Maybe<Scalars["Float"]>;
  size?: Maybe<Scalars["Float"]>;
  mimeType?: Maybe<Scalars["String"]>;
};

export type AssetUpdateManyLocalizationInput = {
  data: AssetUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type AssetUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: Maybe<Array<AssetUpdateManyLocalizationInput>>;
};

export type AssetUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: AssetWhereInput;
  /** Update many input */
  data: AssetUpdateManyInput;
};

export type AssetUpdateOneInlineInput = {
  /** Create and connect one Asset document */
  create?: Maybe<AssetCreateInput>;
  /** Update single Asset document */
  update?: Maybe<AssetUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Asset document */
  upsert?: Maybe<AssetUpsertWithNestedWhereUniqueInput>;
  /** Connect existing Asset document */
  connect?: Maybe<AssetWhereUniqueInput>;
  /** Disconnect currently connected Asset document */
  disconnect?: Maybe<Scalars["Boolean"]>;
  /** Delete currently connected Asset document */
  delete?: Maybe<Scalars["Boolean"]>;
};

export type AssetUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: AssetWhereUniqueInput;
  /** Document to update */
  data: AssetUpdateInput;
};

export type AssetUpsertInput = {
  /** Create document if it didn't exist */
  create: AssetCreateInput;
  /** Update document if it exists */
  update: AssetUpdateInput;
};

export type AssetUpsertLocalizationInput = {
  update: AssetUpdateLocalizationDataInput;
  create: AssetCreateLocalizationDataInput;
  locale: Locale;
};

export type AssetUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: AssetWhereUniqueInput;
  /** Upsert data */
  data: AssetUpsertInput;
};

/** Identifies documents */
export type AssetWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars["String"]>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<AssetWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<AssetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<AssetWhereInput>>;
  id?: Maybe<Scalars["ID"]>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars["ID"]>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars["ID"]>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars["ID"]>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars["ID"]>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars["ID"]>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars["ID"]>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars["ID"]>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars["ID"]>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars["ID"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars["DateTime"]>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars["DateTime"]>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars["DateTime"]>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars["DateTime"]>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars["DateTime"]>;
  publishedAt?: Maybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars["DateTime"]>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars["DateTime"]>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars["DateTime"]>;
  handle?: Maybe<Scalars["String"]>;
  /** All values that are not equal to given value. */
  handle_not?: Maybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  handle_in?: Maybe<Array<Scalars["String"]>>;
  /** All values that are not contained in given list. */
  handle_not_in?: Maybe<Array<Scalars["String"]>>;
  /** All values containing the given string. */
  handle_contains?: Maybe<Scalars["String"]>;
  /** All values not containing the given string. */
  handle_not_contains?: Maybe<Scalars["String"]>;
  /** All values starting with the given string. */
  handle_starts_with?: Maybe<Scalars["String"]>;
  /** All values not starting with the given string. */
  handle_not_starts_with?: Maybe<Scalars["String"]>;
  /** All values ending with the given string. */
  handle_ends_with?: Maybe<Scalars["String"]>;
  /** All values not ending with the given string */
  handle_not_ends_with?: Maybe<Scalars["String"]>;
  fileName?: Maybe<Scalars["String"]>;
  /** All values that are not equal to given value. */
  fileName_not?: Maybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  fileName_in?: Maybe<Array<Scalars["String"]>>;
  /** All values that are not contained in given list. */
  fileName_not_in?: Maybe<Array<Scalars["String"]>>;
  /** All values containing the given string. */
  fileName_contains?: Maybe<Scalars["String"]>;
  /** All values not containing the given string. */
  fileName_not_contains?: Maybe<Scalars["String"]>;
  /** All values starting with the given string. */
  fileName_starts_with?: Maybe<Scalars["String"]>;
  /** All values not starting with the given string. */
  fileName_not_starts_with?: Maybe<Scalars["String"]>;
  /** All values ending with the given string. */
  fileName_ends_with?: Maybe<Scalars["String"]>;
  /** All values not ending with the given string */
  fileName_not_ends_with?: Maybe<Scalars["String"]>;
  height?: Maybe<Scalars["Float"]>;
  /** All values that are not equal to given value. */
  height_not?: Maybe<Scalars["Float"]>;
  /** All values that are contained in given list. */
  height_in?: Maybe<Array<Scalars["Float"]>>;
  /** All values that are not contained in given list. */
  height_not_in?: Maybe<Array<Scalars["Float"]>>;
  /** All values less than the given value. */
  height_lt?: Maybe<Scalars["Float"]>;
  /** All values less than or equal the given value. */
  height_lte?: Maybe<Scalars["Float"]>;
  /** All values greater than the given value. */
  height_gt?: Maybe<Scalars["Float"]>;
  /** All values greater than or equal the given value. */
  height_gte?: Maybe<Scalars["Float"]>;
  width?: Maybe<Scalars["Float"]>;
  /** All values that are not equal to given value. */
  width_not?: Maybe<Scalars["Float"]>;
  /** All values that are contained in given list. */
  width_in?: Maybe<Array<Scalars["Float"]>>;
  /** All values that are not contained in given list. */
  width_not_in?: Maybe<Array<Scalars["Float"]>>;
  /** All values less than the given value. */
  width_lt?: Maybe<Scalars["Float"]>;
  /** All values less than or equal the given value. */
  width_lte?: Maybe<Scalars["Float"]>;
  /** All values greater than the given value. */
  width_gt?: Maybe<Scalars["Float"]>;
  /** All values greater than or equal the given value. */
  width_gte?: Maybe<Scalars["Float"]>;
  size?: Maybe<Scalars["Float"]>;
  /** All values that are not equal to given value. */
  size_not?: Maybe<Scalars["Float"]>;
  /** All values that are contained in given list. */
  size_in?: Maybe<Array<Scalars["Float"]>>;
  /** All values that are not contained in given list. */
  size_not_in?: Maybe<Array<Scalars["Float"]>>;
  /** All values less than the given value. */
  size_lt?: Maybe<Scalars["Float"]>;
  /** All values less than or equal the given value. */
  size_lte?: Maybe<Scalars["Float"]>;
  /** All values greater than the given value. */
  size_gt?: Maybe<Scalars["Float"]>;
  /** All values greater than or equal the given value. */
  size_gte?: Maybe<Scalars["Float"]>;
  mimeType?: Maybe<Scalars["String"]>;
  /** All values that are not equal to given value. */
  mimeType_not?: Maybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  mimeType_in?: Maybe<Array<Scalars["String"]>>;
  /** All values that are not contained in given list. */
  mimeType_not_in?: Maybe<Array<Scalars["String"]>>;
  /** All values containing the given string. */
  mimeType_contains?: Maybe<Scalars["String"]>;
  /** All values not containing the given string. */
  mimeType_not_contains?: Maybe<Scalars["String"]>;
  /** All values starting with the given string. */
  mimeType_starts_with?: Maybe<Scalars["String"]>;
  /** All values not starting with the given string. */
  mimeType_not_starts_with?: Maybe<Scalars["String"]>;
  /** All values ending with the given string. */
  mimeType_ends_with?: Maybe<Scalars["String"]>;
  /** All values not ending with the given string */
  mimeType_not_ends_with?: Maybe<Scalars["String"]>;
  coverArticle_every?: Maybe<ArticleWhereInput>;
  coverArticle_some?: Maybe<ArticleWhereInput>;
  coverArticle_none?: Maybe<ArticleWhereInput>;
  /** Matches if the field array contains *all* items provided to the filter and order does match */
  assetLabel?: Maybe<Array<AssetLabel>>;
  /** Matches if the field array does not contains *all* items provided to the filter or order does not match */
  assetLabel_not?: Maybe<Array<AssetLabel>>;
  /** Matches if the field array contains *all* items provided to the filter */
  assetLabel_contains_all?: Maybe<Array<AssetLabel>>;
  /** Matches if the field array contains at least one item provided to the filter */
  assetLabel_contains_some?: Maybe<Array<AssetLabel>>;
  /** Matches if the field array does not contain any of the items provided to the filter */
  assetLabel_contains_none?: Maybe<Array<AssetLabel>>;
  coverEvent_every?: Maybe<EventWhereInput>;
  coverEvent_some?: Maybe<EventWhereInput>;
  coverEvent_none?: Maybe<EventWhereInput>;
};

/** References Asset record uniquely */
export type AssetWhereUniqueInput = {
  id?: Maybe<Scalars["ID"]>;
};

export type BatchPayload = {
  __typename?: "BatchPayload";
  /** The number of nodes that have been affected by the Batch operation. */
  count: Scalars["Long"];
};

export enum BlogLabel {
  NewsAJCF = "NewsAJCF",
  RecosAJCF = "RecosAJCF",
  StoriesAJCF = "StoriesAJCF",
}

/** Representing a color value comprising of HEX, RGBA and css color values */
export type Color = {
  __typename?: "Color";
  hex: Scalars["Hex"];
  rgba: RGBA;
  css: Scalars["String"];
};

/** Accepts either HEX or RGBA color value. At least one of hex or rgba value should be passed. If both are passed RGBA is used. */
export type ColorInput = {
  hex?: Maybe<Scalars["Hex"]>;
  rgba?: Maybe<RGBAInput>;
};

export type ConnectPositionInput = {
  /** Connect document after specified document */
  after?: Maybe<Scalars["ID"]>;
  /** Connect document before specified document */
  before?: Maybe<Scalars["ID"]>;
  /** Connect document at first position */
  start?: Maybe<Scalars["Boolean"]>;
  /** Connect document at last position */
  end?: Maybe<Scalars["Boolean"]>;
};

export enum DocumentFileTypes {
  jpg = "jpg",
  odp = "odp",
  ods = "ods",
  odt = "odt",
  png = "png",
  svg = "svg",
  txt = "txt",
  webp = "webp",
  docx = "docx",
  pdf = "pdf",
  html = "html",
  doc = "doc",
  xlsx = "xlsx",
  xls = "xls",
  pptx = "pptx",
  ppt = "ppt",
}

export type DocumentOutputInput = {
  /**
   * Transforms a document into a desired file type.
   * See this matrix for format support:
   *
   * PDF:	jpg, odp, ods, odt, png, svg, txt, and webp
   * DOC:	docx, html, jpg, odt, pdf, png, svg, txt, and webp
   * DOCX:	doc, html, jpg, odt, pdf, png, svg, txt, and webp
   * ODT:	doc, docx, html, jpg, pdf, png, svg, txt, and webp
   * XLS:	jpg, pdf, ods, png, svg, xlsx, and webp
   * XLSX:	jpg, pdf, ods, png, svg, xls, and webp
   * ODS:	jpg, pdf, png, xls, svg, xlsx, and webp
   * PPT:	jpg, odp, pdf, png, svg, pptx, and webp
   * PPTX:	jpg, odp, pdf, png, svg, ppt, and webp
   * ODP:	jpg, pdf, png, ppt, svg, pptx, and webp
   * BMP:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * GIF:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * JPG:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * PNG:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * WEBP:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * TIFF:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * AI:	    jpg, odp, ods, odt, pdf, png, svg, and webp
   * PSD:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * SVG:	jpg, odp, ods, odt, pdf, png, and webp
   * HTML:	jpg, odt, pdf, svg, txt, and webp
   * TXT:	jpg, html, odt, pdf, svg, and webp
   */
  format?: Maybe<DocumentFileTypes>;
};

/** Transformations for Documents */
export type DocumentTransformationInput = {
  /** Changes the output for the file. */
  output?: Maybe<DocumentOutputInput>;
};

export type DocumentVersion = {
  __typename?: "DocumentVersion";
  id: Scalars["ID"];
  stage: Stage;
  revision: Scalars["Int"];
  createdAt: Scalars["DateTime"];
  data?: Maybe<Scalars["Json"]>;
};

/** Event as listed in the agenda page */
export type Event = Node & {
  __typename?: "Event";
  /** System stage field */
  stage: Stage;
  /** Get the document in other stages */
  documentInStages: Array<Event>;
  /** The unique identifier */
  id: Scalars["ID"];
  /** The time the document was created */
  createdAt: Scalars["DateTime"];
  /** The time the document was updated */
  updatedAt: Scalars["DateTime"];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars["DateTime"]>;
  title: Scalars["String"];
  content: RichText;
  date: Scalars["DateTime"];
  cover?: Maybe<Asset>;
  eventLabels: Array<EventLabel>;
  /** List of Event versions */
  history: Array<Version>;
};

/** Event as listed in the agenda page */
export type EventdocumentInStagesArgs = {
  stages?: Array<Stage>;
  includeCurrent?: Scalars["Boolean"];
  inheritLocale?: Scalars["Boolean"];
};

/** Event as listed in the agenda page */
export type EventcoverArgs = {
  locales?: Maybe<Array<Locale>>;
};

/** Event as listed in the agenda page */
export type EventhistoryArgs = {
  limit?: Scalars["Int"];
  skip?: Scalars["Int"];
  stageOverride?: Maybe<Stage>;
};

export type EventConnectInput = {
  /** Document to connect */
  where: EventWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
};

/** A connection to a list of items. */
export type EventConnection = {
  __typename?: "EventConnection";
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<EventEdge>;
  aggregate: Aggregate;
};

export type EventCreateInput = {
  createdAt?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  title: Scalars["String"];
  content: Scalars["RichTextAST"];
  date: Scalars["DateTime"];
  cover?: Maybe<AssetCreateOneInlineInput>;
  eventLabels?: Maybe<Array<EventLabel>>;
};

export type EventCreateManyInlineInput = {
  /** Create and connect multiple existing Event documents */
  create?: Maybe<Array<EventCreateInput>>;
  /** Connect multiple existing Event documents */
  connect?: Maybe<Array<EventWhereUniqueInput>>;
};

export type EventCreateOneInlineInput = {
  /** Create and connect one Event document */
  create?: Maybe<EventCreateInput>;
  /** Connect one existing Event document */
  connect?: Maybe<EventWhereUniqueInput>;
};

/** An edge in a connection. */
export type EventEdge = {
  __typename?: "EventEdge";
  /** The item at the end of the edge. */
  node: Event;
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
};

export enum EventLabel {
  ConferencesAJCF = "ConferencesAJCF",
  CultureLocale = "CultureLocale",
  Gastronomie = "Gastronomie",
  ReunionPublique = "ReunionPublique",
}

/** Identifies documents */
export type EventManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars["String"]>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<EventWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<EventWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<EventWhereInput>>;
  id?: Maybe<Scalars["ID"]>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars["ID"]>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars["ID"]>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars["ID"]>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars["ID"]>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars["ID"]>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars["ID"]>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars["ID"]>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars["ID"]>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars["ID"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars["DateTime"]>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars["DateTime"]>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars["DateTime"]>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars["DateTime"]>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars["DateTime"]>;
  publishedAt?: Maybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars["DateTime"]>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars["DateTime"]>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars["DateTime"]>;
  title?: Maybe<Scalars["String"]>;
  /** All values that are not equal to given value. */
  title_not?: Maybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  title_in?: Maybe<Array<Scalars["String"]>>;
  /** All values that are not contained in given list. */
  title_not_in?: Maybe<Array<Scalars["String"]>>;
  /** All values containing the given string. */
  title_contains?: Maybe<Scalars["String"]>;
  /** All values not containing the given string. */
  title_not_contains?: Maybe<Scalars["String"]>;
  /** All values starting with the given string. */
  title_starts_with?: Maybe<Scalars["String"]>;
  /** All values not starting with the given string. */
  title_not_starts_with?: Maybe<Scalars["String"]>;
  /** All values ending with the given string. */
  title_ends_with?: Maybe<Scalars["String"]>;
  /** All values not ending with the given string */
  title_not_ends_with?: Maybe<Scalars["String"]>;
  date?: Maybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  date_not?: Maybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  date_in?: Maybe<Array<Scalars["DateTime"]>>;
  /** All values that are not contained in given list. */
  date_not_in?: Maybe<Array<Scalars["DateTime"]>>;
  /** All values less than the given value. */
  date_lt?: Maybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  date_lte?: Maybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  date_gt?: Maybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  date_gte?: Maybe<Scalars["DateTime"]>;
  cover?: Maybe<AssetWhereInput>;
  /** Matches if the field array contains *all* items provided to the filter and order does match */
  eventLabels?: Maybe<Array<EventLabel>>;
  /** Matches if the field array does not contains *all* items provided to the filter or order does not match */
  eventLabels_not?: Maybe<Array<EventLabel>>;
  /** Matches if the field array contains *all* items provided to the filter */
  eventLabels_contains_all?: Maybe<Array<EventLabel>>;
  /** Matches if the field array contains at least one item provided to the filter */
  eventLabels_contains_some?: Maybe<Array<EventLabel>>;
  /** Matches if the field array does not contain any of the items provided to the filter */
  eventLabels_contains_none?: Maybe<Array<EventLabel>>;
};

export enum EventOrderByInput {
  id_ASC = "id_ASC",
  id_DESC = "id_DESC",
  createdAt_ASC = "createdAt_ASC",
  createdAt_DESC = "createdAt_DESC",
  updatedAt_ASC = "updatedAt_ASC",
  updatedAt_DESC = "updatedAt_DESC",
  publishedAt_ASC = "publishedAt_ASC",
  publishedAt_DESC = "publishedAt_DESC",
  title_ASC = "title_ASC",
  title_DESC = "title_DESC",
  date_ASC = "date_ASC",
  date_DESC = "date_DESC",
  eventLabels_ASC = "eventLabels_ASC",
  eventLabels_DESC = "eventLabels_DESC",
}

export type EventUpdateInput = {
  title?: Maybe<Scalars["String"]>;
  content?: Maybe<Scalars["RichTextAST"]>;
  date?: Maybe<Scalars["DateTime"]>;
  cover?: Maybe<AssetUpdateOneInlineInput>;
  eventLabels?: Maybe<Array<EventLabel>>;
};

export type EventUpdateManyInlineInput = {
  /** Create and connect multiple Event documents */
  create?: Maybe<Array<EventCreateInput>>;
  /** Connect multiple existing Event documents */
  connect?: Maybe<Array<EventConnectInput>>;
  /** Override currently-connected documents with multiple existing Event documents */
  set?: Maybe<Array<EventWhereUniqueInput>>;
  /** Update multiple Event documents */
  update?: Maybe<Array<EventUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Event documents */
  upsert?: Maybe<Array<EventUpsertWithNestedWhereUniqueInput>>;
  /** Disconnect multiple Event documents */
  disconnect?: Maybe<Array<EventWhereUniqueInput>>;
  /** Delete multiple Event documents */
  delete?: Maybe<Array<EventWhereUniqueInput>>;
};

export type EventUpdateManyInput = {
  title?: Maybe<Scalars["String"]>;
  content?: Maybe<Scalars["RichTextAST"]>;
  date?: Maybe<Scalars["DateTime"]>;
  eventLabels?: Maybe<Array<EventLabel>>;
};

export type EventUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: EventWhereInput;
  /** Update many input */
  data: EventUpdateManyInput;
};

export type EventUpdateOneInlineInput = {
  /** Create and connect one Event document */
  create?: Maybe<EventCreateInput>;
  /** Update single Event document */
  update?: Maybe<EventUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Event document */
  upsert?: Maybe<EventUpsertWithNestedWhereUniqueInput>;
  /** Connect existing Event document */
  connect?: Maybe<EventWhereUniqueInput>;
  /** Disconnect currently connected Event document */
  disconnect?: Maybe<Scalars["Boolean"]>;
  /** Delete currently connected Event document */
  delete?: Maybe<Scalars["Boolean"]>;
};

export type EventUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: EventWhereUniqueInput;
  /** Document to update */
  data: EventUpdateInput;
};

export type EventUpsertInput = {
  /** Create document if it didn't exist */
  create: EventCreateInput;
  /** Update document if it exists */
  update: EventUpdateInput;
};

export type EventUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: EventWhereUniqueInput;
  /** Upsert data */
  data: EventUpsertInput;
};

/** Identifies documents */
export type EventWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars["String"]>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<EventWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<EventWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<EventWhereInput>>;
  id?: Maybe<Scalars["ID"]>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars["ID"]>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars["ID"]>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars["ID"]>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars["ID"]>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars["ID"]>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars["ID"]>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars["ID"]>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars["ID"]>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars["ID"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars["DateTime"]>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars["DateTime"]>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars["DateTime"]>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars["DateTime"]>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars["DateTime"]>;
  publishedAt?: Maybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars["DateTime"]>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars["DateTime"]>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars["DateTime"]>;
  title?: Maybe<Scalars["String"]>;
  /** All values that are not equal to given value. */
  title_not?: Maybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  title_in?: Maybe<Array<Scalars["String"]>>;
  /** All values that are not contained in given list. */
  title_not_in?: Maybe<Array<Scalars["String"]>>;
  /** All values containing the given string. */
  title_contains?: Maybe<Scalars["String"]>;
  /** All values not containing the given string. */
  title_not_contains?: Maybe<Scalars["String"]>;
  /** All values starting with the given string. */
  title_starts_with?: Maybe<Scalars["String"]>;
  /** All values not starting with the given string. */
  title_not_starts_with?: Maybe<Scalars["String"]>;
  /** All values ending with the given string. */
  title_ends_with?: Maybe<Scalars["String"]>;
  /** All values not ending with the given string */
  title_not_ends_with?: Maybe<Scalars["String"]>;
  date?: Maybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  date_not?: Maybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  date_in?: Maybe<Array<Scalars["DateTime"]>>;
  /** All values that are not contained in given list. */
  date_not_in?: Maybe<Array<Scalars["DateTime"]>>;
  /** All values less than the given value. */
  date_lt?: Maybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  date_lte?: Maybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  date_gt?: Maybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  date_gte?: Maybe<Scalars["DateTime"]>;
  cover?: Maybe<AssetWhereInput>;
  /** Matches if the field array contains *all* items provided to the filter and order does match */
  eventLabels?: Maybe<Array<EventLabel>>;
  /** Matches if the field array does not contains *all* items provided to the filter or order does not match */
  eventLabels_not?: Maybe<Array<EventLabel>>;
  /** Matches if the field array contains *all* items provided to the filter */
  eventLabels_contains_all?: Maybe<Array<EventLabel>>;
  /** Matches if the field array contains at least one item provided to the filter */
  eventLabels_contains_some?: Maybe<Array<EventLabel>>;
  /** Matches if the field array does not contain any of the items provided to the filter */
  eventLabels_contains_none?: Maybe<Array<EventLabel>>;
};

/** References Event record uniquely */
export type EventWhereUniqueInput = {
  id?: Maybe<Scalars["ID"]>;
};

export enum ImageFit {
  /** Resizes the image to fit within the specified parameters without distorting, cropping, or changing the aspect ratio. */
  clip = "clip",
  /** Resizes the image to fit the specified parameters exactly by removing any parts of the image that don't fit within the boundaries. */
  crop = "crop",
  /** Resizes the image to fit the specified parameters exactly by scaling the image to the desired size. The aspect ratio of the image is not respected and the image can be distorted using this method. */
  scale = "scale",
  /** Resizes the image to fit within the parameters, but as opposed to 'fit:clip' will not scale the image if the image is smaller than the output size. */
  max = "max",
}

export type ImageResizeInput = {
  /** The width in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  width?: Maybe<Scalars["Int"]>;
  /** The height in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  height?: Maybe<Scalars["Int"]>;
  /** The default value for the fit parameter is fit:clip. */
  fit?: Maybe<ImageFit>;
};

/** Transformations for Images */
export type ImageTransformationInput = {
  /** Resizes the image */
  resize?: Maybe<ImageResizeInput>;
};

/** Locale system enumeration */
export enum Locale {
  /** System locale */
  en = "en",
}

/** Representing a geolocation point with latitude and longitude */
export type Location = {
  __typename?: "Location";
  latitude: Scalars["Float"];
  longitude: Scalars["Float"];
  distance: Scalars["Float"];
};

/** Representing a geolocation point with latitude and longitude */
export type LocationdistanceArgs = {
  from: LocationInput;
};

/** Input for a geolocation point with latitude and longitude */
export type LocationInput = {
  latitude: Scalars["Float"];
  longitude: Scalars["Float"];
};

export type Mutation = {
  __typename?: "Mutation";
  /** Create one article */
  createArticle?: Maybe<Article>;
  /** Update one article */
  updateArticle?: Maybe<Article>;
  /** Delete one article from _all_ existing stages. Returns deleted document. */
  deleteArticle?: Maybe<Article>;
  /** Upsert one article */
  upsertArticle?: Maybe<Article>;
  /** Publish one article */
  publishArticle?: Maybe<Article>;
  /** Unpublish one article from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishArticle?: Maybe<Article>;
  /** Update many Article documents */
  updateManyArticlesConnection: ArticleConnection;
  /** Delete many Article documents, return deleted documents */
  deleteManyArticlesConnection: ArticleConnection;
  /** Publish many Article documents */
  publishManyArticlesConnection: ArticleConnection;
  /** Find many Article documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyArticlesConnection: ArticleConnection;
  /**
   * Update many articles
   * @deprecated Please use the new paginated many mutation (updateManyArticlesConnection)
   */
  updateManyArticles: BatchPayload;
  /**
   * Delete many Article documents
   * @deprecated Please use the new paginated many mutation (deleteManyArticlesConnection)
   */
  deleteManyArticles: BatchPayload;
  /**
   * Publish many Article documents
   * @deprecated Please use the new paginated many mutation (publishManyArticlesConnection)
   */
  publishManyArticles: BatchPayload;
  /**
   * Unpublish many Article documents
   * @deprecated Please use the new paginated many mutation (unpublishManyArticlesConnection)
   */
  unpublishManyArticles: BatchPayload;
  /**
   * Create one asset
   * @deprecated Asset mutations will be overhauled soon
   */
  createAsset?: Maybe<Asset>;
  /** Update one asset */
  updateAsset?: Maybe<Asset>;
  /** Delete one asset from _all_ existing stages. Returns deleted document. */
  deleteAsset?: Maybe<Asset>;
  /** Upsert one asset */
  upsertAsset?: Maybe<Asset>;
  /** Publish one asset */
  publishAsset?: Maybe<Asset>;
  /** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishAsset?: Maybe<Asset>;
  /** Update many Asset documents */
  updateManyAssetsConnection: AssetConnection;
  /** Delete many Asset documents, return deleted documents */
  deleteManyAssetsConnection: AssetConnection;
  /** Publish many Asset documents */
  publishManyAssetsConnection: AssetConnection;
  /** Find many Asset documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyAssetsConnection: AssetConnection;
  /**
   * Update many assets
   * @deprecated Please use the new paginated many mutation (updateManyAssetsConnection)
   */
  updateManyAssets: BatchPayload;
  /**
   * Delete many Asset documents
   * @deprecated Please use the new paginated many mutation (deleteManyAssetsConnection)
   */
  deleteManyAssets: BatchPayload;
  /**
   * Publish many Asset documents
   * @deprecated Please use the new paginated many mutation (publishManyAssetsConnection)
   */
  publishManyAssets: BatchPayload;
  /**
   * Unpublish many Asset documents
   * @deprecated Please use the new paginated many mutation (unpublishManyAssetsConnection)
   */
  unpublishManyAssets: BatchPayload;
  /** Create one event */
  createEvent?: Maybe<Event>;
  /** Update one event */
  updateEvent?: Maybe<Event>;
  /** Delete one event from _all_ existing stages. Returns deleted document. */
  deleteEvent?: Maybe<Event>;
  /** Upsert one event */
  upsertEvent?: Maybe<Event>;
  /** Publish one event */
  publishEvent?: Maybe<Event>;
  /** Unpublish one event from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishEvent?: Maybe<Event>;
  /** Update many Event documents */
  updateManyEventsConnection: EventConnection;
  /** Delete many Event documents, return deleted documents */
  deleteManyEventsConnection: EventConnection;
  /** Publish many Event documents */
  publishManyEventsConnection: EventConnection;
  /** Find many Event documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyEventsConnection: EventConnection;
  /**
   * Update many events
   * @deprecated Please use the new paginated many mutation (updateManyEventsConnection)
   */
  updateManyEvents: BatchPayload;
  /**
   * Delete many Event documents
   * @deprecated Please use the new paginated many mutation (deleteManyEventsConnection)
   */
  deleteManyEvents: BatchPayload;
  /**
   * Publish many Event documents
   * @deprecated Please use the new paginated many mutation (publishManyEventsConnection)
   */
  publishManyEvents: BatchPayload;
  /**
   * Unpublish many Event documents
   * @deprecated Please use the new paginated many mutation (unpublishManyEventsConnection)
   */
  unpublishManyEvents: BatchPayload;
};

export type MutationcreateArticleArgs = {
  data: ArticleCreateInput;
};

export type MutationupdateArticleArgs = {
  where: ArticleWhereUniqueInput;
  data: ArticleUpdateInput;
};

export type MutationdeleteArticleArgs = {
  where: ArticleWhereUniqueInput;
};

export type MutationupsertArticleArgs = {
  where: ArticleWhereUniqueInput;
  upsert: ArticleUpsertInput;
};

export type MutationpublishArticleArgs = {
  where: ArticleWhereUniqueInput;
  to?: Array<Stage>;
};

export type MutationunpublishArticleArgs = {
  where: ArticleWhereUniqueInput;
  from?: Array<Stage>;
};

export type MutationupdateManyArticlesConnectionArgs = {
  where?: Maybe<ArticleManyWhereInput>;
  data: ArticleUpdateManyInput;
  skip?: Maybe<Scalars["Int"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  before?: Maybe<Scalars["ID"]>;
  after?: Maybe<Scalars["ID"]>;
};

export type MutationdeleteManyArticlesConnectionArgs = {
  where?: Maybe<ArticleManyWhereInput>;
  skip?: Maybe<Scalars["Int"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  before?: Maybe<Scalars["ID"]>;
  after?: Maybe<Scalars["ID"]>;
};

export type MutationpublishManyArticlesConnectionArgs = {
  where?: Maybe<ArticleManyWhereInput>;
  from?: Maybe<Stage>;
  to?: Array<Stage>;
  skip?: Maybe<Scalars["Int"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  before?: Maybe<Scalars["ID"]>;
  after?: Maybe<Scalars["ID"]>;
};

export type MutationunpublishManyArticlesConnectionArgs = {
  where?: Maybe<ArticleManyWhereInput>;
  stage?: Maybe<Stage>;
  from?: Array<Stage>;
  skip?: Maybe<Scalars["Int"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  before?: Maybe<Scalars["ID"]>;
  after?: Maybe<Scalars["ID"]>;
};

export type MutationupdateManyArticlesArgs = {
  where?: Maybe<ArticleManyWhereInput>;
  data: ArticleUpdateManyInput;
};

export type MutationdeleteManyArticlesArgs = {
  where?: Maybe<ArticleManyWhereInput>;
};

export type MutationpublishManyArticlesArgs = {
  where?: Maybe<ArticleManyWhereInput>;
  to?: Array<Stage>;
};

export type MutationunpublishManyArticlesArgs = {
  where?: Maybe<ArticleManyWhereInput>;
  from?: Array<Stage>;
};

export type MutationcreateAssetArgs = {
  data: AssetCreateInput;
};

export type MutationupdateAssetArgs = {
  where: AssetWhereUniqueInput;
  data: AssetUpdateInput;
};

export type MutationdeleteAssetArgs = {
  where: AssetWhereUniqueInput;
};

export type MutationupsertAssetArgs = {
  where: AssetWhereUniqueInput;
  upsert: AssetUpsertInput;
};

export type MutationpublishAssetArgs = {
  where: AssetWhereUniqueInput;
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars["Boolean"]>;
  withDefaultLocale?: Maybe<Scalars["Boolean"]>;
  to?: Array<Stage>;
};

export type MutationunpublishAssetArgs = {
  where: AssetWhereUniqueInput;
  from?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  unpublishBase?: Maybe<Scalars["Boolean"]>;
};

export type MutationupdateManyAssetsConnectionArgs = {
  where?: Maybe<AssetManyWhereInput>;
  data: AssetUpdateManyInput;
  skip?: Maybe<Scalars["Int"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  before?: Maybe<Scalars["ID"]>;
  after?: Maybe<Scalars["ID"]>;
};

export type MutationdeleteManyAssetsConnectionArgs = {
  where?: Maybe<AssetManyWhereInput>;
  skip?: Maybe<Scalars["Int"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  before?: Maybe<Scalars["ID"]>;
  after?: Maybe<Scalars["ID"]>;
};

export type MutationpublishManyAssetsConnectionArgs = {
  where?: Maybe<AssetManyWhereInput>;
  from?: Maybe<Stage>;
  to?: Array<Stage>;
  skip?: Maybe<Scalars["Int"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  before?: Maybe<Scalars["ID"]>;
  after?: Maybe<Scalars["ID"]>;
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars["Boolean"]>;
  withDefaultLocale?: Maybe<Scalars["Boolean"]>;
};

export type MutationunpublishManyAssetsConnectionArgs = {
  where?: Maybe<AssetManyWhereInput>;
  stage?: Maybe<Stage>;
  from?: Array<Stage>;
  skip?: Maybe<Scalars["Int"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  before?: Maybe<Scalars["ID"]>;
  after?: Maybe<Scalars["ID"]>;
  locales?: Maybe<Array<Locale>>;
  unpublishBase?: Maybe<Scalars["Boolean"]>;
};

export type MutationupdateManyAssetsArgs = {
  where?: Maybe<AssetManyWhereInput>;
  data: AssetUpdateManyInput;
};

export type MutationdeleteManyAssetsArgs = {
  where?: Maybe<AssetManyWhereInput>;
};

export type MutationpublishManyAssetsArgs = {
  where?: Maybe<AssetManyWhereInput>;
  to?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars["Boolean"]>;
  withDefaultLocale?: Maybe<Scalars["Boolean"]>;
};

export type MutationunpublishManyAssetsArgs = {
  where?: Maybe<AssetManyWhereInput>;
  from?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  unpublishBase?: Maybe<Scalars["Boolean"]>;
};

export type MutationcreateEventArgs = {
  data: EventCreateInput;
};

export type MutationupdateEventArgs = {
  where: EventWhereUniqueInput;
  data: EventUpdateInput;
};

export type MutationdeleteEventArgs = {
  where: EventWhereUniqueInput;
};

export type MutationupsertEventArgs = {
  where: EventWhereUniqueInput;
  upsert: EventUpsertInput;
};

export type MutationpublishEventArgs = {
  where: EventWhereUniqueInput;
  to?: Array<Stage>;
};

export type MutationunpublishEventArgs = {
  where: EventWhereUniqueInput;
  from?: Array<Stage>;
};

export type MutationupdateManyEventsConnectionArgs = {
  where?: Maybe<EventManyWhereInput>;
  data: EventUpdateManyInput;
  skip?: Maybe<Scalars["Int"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  before?: Maybe<Scalars["ID"]>;
  after?: Maybe<Scalars["ID"]>;
};

export type MutationdeleteManyEventsConnectionArgs = {
  where?: Maybe<EventManyWhereInput>;
  skip?: Maybe<Scalars["Int"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  before?: Maybe<Scalars["ID"]>;
  after?: Maybe<Scalars["ID"]>;
};

export type MutationpublishManyEventsConnectionArgs = {
  where?: Maybe<EventManyWhereInput>;
  from?: Maybe<Stage>;
  to?: Array<Stage>;
  skip?: Maybe<Scalars["Int"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  before?: Maybe<Scalars["ID"]>;
  after?: Maybe<Scalars["ID"]>;
};

export type MutationunpublishManyEventsConnectionArgs = {
  where?: Maybe<EventManyWhereInput>;
  stage?: Maybe<Stage>;
  from?: Array<Stage>;
  skip?: Maybe<Scalars["Int"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  before?: Maybe<Scalars["ID"]>;
  after?: Maybe<Scalars["ID"]>;
};

export type MutationupdateManyEventsArgs = {
  where?: Maybe<EventManyWhereInput>;
  data: EventUpdateManyInput;
};

export type MutationdeleteManyEventsArgs = {
  where?: Maybe<EventManyWhereInput>;
};

export type MutationpublishManyEventsArgs = {
  where?: Maybe<EventManyWhereInput>;
  to?: Array<Stage>;
};

export type MutationunpublishManyEventsArgs = {
  where?: Maybe<EventManyWhereInput>;
  from?: Array<Stage>;
};

/** An object with an ID */
export type Node = {
  /** The id of the object. */
  id: Scalars["ID"];
  /** The Stage of an object */
  stage: Stage;
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: "PageInfo";
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars["Boolean"];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars["Boolean"];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars["String"]>;
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars["String"]>;
  /** Number of items in the current page. */
  pageSize?: Maybe<Scalars["Int"]>;
};

export type PublishLocaleInput = {
  /** Locales to publish */
  locale: Locale;
  /** Stages to publish selected locales to */
  stages: Array<Stage>;
};

export type Query = {
  __typename?: "Query";
  /** Fetches an object given its ID */
  node?: Maybe<Node>;
  /** Retrieve multiple articles */
  articles: Array<Article>;
  /** Retrieve a single article */
  article?: Maybe<Article>;
  /** Retrieve multiple articles using the Relay connection interface */
  articlesConnection: ArticleConnection;
  /** Retrieve document version */
  articleVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple assets */
  assets: Array<Asset>;
  /** Retrieve a single asset */
  asset?: Maybe<Asset>;
  /** Retrieve multiple assets using the Relay connection interface */
  assetsConnection: AssetConnection;
  /** Retrieve document version */
  assetVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple events */
  events: Array<Event>;
  /** Retrieve a single event */
  event?: Maybe<Event>;
  /** Retrieve multiple events using the Relay connection interface */
  eventsConnection: EventConnection;
  /** Retrieve document version */
  eventVersion?: Maybe<DocumentVersion>;
};

export type QuerynodeArgs = {
  id: Scalars["ID"];
  stage?: Stage;
  locales?: Array<Locale>;
};

export type QueryarticlesArgs = {
  where?: Maybe<ArticleWhereInput>;
  orderBy?: Maybe<ArticleOrderByInput>;
  skip?: Maybe<Scalars["Int"]>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  stage?: Stage;
  locales?: Array<Locale>;
};

export type QueryarticleArgs = {
  where: ArticleWhereUniqueInput;
  stage?: Stage;
  locales?: Array<Locale>;
};

export type QueryarticlesConnectionArgs = {
  where?: Maybe<ArticleWhereInput>;
  orderBy?: Maybe<ArticleOrderByInput>;
  skip?: Maybe<Scalars["Int"]>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  stage?: Stage;
  locales?: Array<Locale>;
};

export type QueryarticleVersionArgs = {
  where: VersionWhereInput;
};

export type QueryassetsArgs = {
  where?: Maybe<AssetWhereInput>;
  orderBy?: Maybe<AssetOrderByInput>;
  skip?: Maybe<Scalars["Int"]>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  stage?: Stage;
  locales?: Array<Locale>;
};

export type QueryassetArgs = {
  where: AssetWhereUniqueInput;
  stage?: Stage;
  locales?: Array<Locale>;
};

export type QueryassetsConnectionArgs = {
  where?: Maybe<AssetWhereInput>;
  orderBy?: Maybe<AssetOrderByInput>;
  skip?: Maybe<Scalars["Int"]>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  stage?: Stage;
  locales?: Array<Locale>;
};

export type QueryassetVersionArgs = {
  where: VersionWhereInput;
};

export type QueryeventsArgs = {
  where?: Maybe<EventWhereInput>;
  orderBy?: Maybe<EventOrderByInput>;
  skip?: Maybe<Scalars["Int"]>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  stage?: Stage;
  locales?: Array<Locale>;
};

export type QueryeventArgs = {
  where: EventWhereUniqueInput;
  stage?: Stage;
  locales?: Array<Locale>;
};

export type QueryeventsConnectionArgs = {
  where?: Maybe<EventWhereInput>;
  orderBy?: Maybe<EventOrderByInput>;
  skip?: Maybe<Scalars["Int"]>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  stage?: Stage;
  locales?: Array<Locale>;
};

export type QueryeventVersionArgs = {
  where: VersionWhereInput;
};

/** Representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type RGBA = {
  __typename?: "RGBA";
  r: Scalars["RGBAHue"];
  g: Scalars["RGBAHue"];
  b: Scalars["RGBAHue"];
  a: Scalars["RGBATransparency"];
};

/** Input type representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type RGBAInput = {
  r: Scalars["RGBAHue"];
  g: Scalars["RGBAHue"];
  b: Scalars["RGBAHue"];
  a: Scalars["RGBATransparency"];
};

/** Custom type representing a rich text value comprising of raw rich text ast, html, markdown and text values */
export type RichText = {
  __typename?: "RichText";
  /** Returns AST representation */
  raw: Scalars["RichTextAST"];
  /** Returns HTMl representation */
  html: Scalars["String"];
  /** Returns Markdown representation */
  markdown: Scalars["String"];
  /** Returns plain-text contents of RichText */
  text: Scalars["String"];
};

/** Stage system enumeration */
export enum Stage {
  /** The Published stage is where you can publish your content to. */
  PUBLISHED = "PUBLISHED",
  /** The Draft is the default stage for all your content. */
  DRAFT = "DRAFT",
}

export enum SystemDateTimeFieldVariation {
  BASE = "BASE",
  LOCALIZATION = "LOCALIZATION",
  COMBINED = "COMBINED",
}

export type UnpublishLocaleInput = {
  /** Locales to unpublish */
  locale: Locale;
  /** Stages to unpublish selected locales from */
  stages: Array<Stage>;
};

/** System User Kind */
export enum UserKind {
  MEMBER = "MEMBER",
  PAT = "PAT",
  PUBLIC = "PUBLIC",
  WEBHOOK = "WEBHOOK",
}

export type Version = {
  __typename?: "Version";
  id: Scalars["ID"];
  stage: Stage;
  revision: Scalars["Int"];
  createdAt: Scalars["DateTime"];
};

export type VersionWhereInput = {
  id: Scalars["ID"];
  stage: Stage;
  revision: Scalars["Int"];
};

export enum _FilterKind {
  search = "search",
  AND = "AND",
  OR = "OR",
  NOT = "NOT",
  eq = "eq",
  eq_not = "eq_not",
  in = "in",
  not_in = "not_in",
  lt = "lt",
  lte = "lte",
  gt = "gt",
  gte = "gte",
  contains = "contains",
  not_contains = "not_contains",
  starts_with = "starts_with",
  not_starts_with = "not_starts_with",
  ends_with = "ends_with",
  not_ends_with = "not_ends_with",
  contains_all = "contains_all",
  contains_some = "contains_some",
  contains_none = "contains_none",
  relational_single = "relational_single",
  relational_every = "relational_every",
  relational_some = "relational_some",
  relational_none = "relational_none",
}

export enum _MutationInputFieldKind {
  scalar = "scalar",
  richText = "richText",
  enum = "enum",
  relation = "relation",
  union = "union",
  virtual = "virtual",
}

export enum _MutationKind {
  create = "create",
  publish = "publish",
  unpublish = "unpublish",
  update = "update",
  upsert = "upsert",
  delete = "delete",
  updateMany = "updateMany",
  publishMany = "publishMany",
  unpublishMany = "unpublishMany",
  deleteMany = "deleteMany",
}

export enum _OrderDirection {
  asc = "asc",
  desc = "desc",
}

export enum _RelationInputCardinality {
  one = "one",
  many = "many",
}

export enum _RelationInputKind {
  create = "create",
  update = "update",
}

export enum _RelationKind {
  regular = "regular",
  union = "union",
}

export enum _SystemDateTimeFieldVariation {
  base = "base",
  localization = "localization",
  combined = "combined",
}

export type articlePageFragment = { __typename?: "Article" } & Pick<
  Article,
  "id" | "title" | "author" | "createdAt" | "blogLabels"
> & {
    cover?: Maybe<{ __typename?: "Asset" } & Pick<Asset, "id" | "url">>;
    content: { __typename?: "RichText" } & Pick<RichText, "html">;
  };

export type articlePageQueryQueryVariables = Exact<{
  id: Scalars["ID"];
  stage: Stage;
}>;

export type articlePageQueryQuery = { __typename?: "Query" } & {
  article?: Maybe<{ __typename?: "Article" } & articlePageFragment>;
};

export type articlesMetaQueryQueryVariables = Exact<{
  stage: Stage;
}>;

export type articlesMetaQueryQuery = { __typename?: "Query" } & {
  articles: Array<{ __typename?: "Article" } & Pick<Article, "id">>;
};

export type articlePreviewFragment = { __typename?: "Article" } & Pick<
  Article,
  "id" | "title" | "author" | "createdAt" | "blogLabels"
> & {
    cover?: Maybe<{ __typename?: "Asset" } & Pick<Asset, "id" | "url">>;
    content: { __typename?: "RichText" } & Pick<RichText, "text">;
  };

export type articlesPreviewQueryQueryVariables = Exact<{
  stage: Stage;
}>;

export type articlesPreviewQueryQuery = { __typename?: "Query" } & {
  articles: Array<{ __typename?: "Article" } & articlePreviewFragment>;
};

export type pressFileFragment = { __typename?: "Asset" } & Pick<Asset, "fileName" | "url" | "updatedAt" | "assetLabel">;

export type pressFilesQueryQueryVariables = Exact<{
  stage: Stage;
}>;

export type pressFilesQueryQuery = { __typename?: "Query" } & {
  assets: Array<{ __typename?: "Asset" } & pressFileFragment>;
};

export const articlePageFragmentDoc = gql`
  fragment articlePage on Article {
    id
    title
    author
    createdAt
    blogLabels
    cover {
      id
      url
    }
    content {
      html
    }
  }
`;
export const articlePreviewFragmentDoc = gql`
  fragment articlePreview on Article {
    id
    title
    author
    createdAt
    blogLabels
    cover {
      id
      url
    }
    content {
      text
    }
  }
`;
export const pressFileFragmentDoc = gql`
  fragment pressFile on Asset {
    fileName
    url
    updatedAt
    assetLabel
  }
`;
export const articlePageQueryDocument = gql`
  query articlePageQuery($id: ID!, $stage: Stage!) {
    article(where: { id: $id }, stage: $stage) {
      ...articlePage
    }
  }
  ${articlePageFragmentDoc}
`;
export const articlesMetaQueryDocument = gql`
  query articlesMetaQuery($stage: Stage!) {
    articles(stage: $stage) {
      id
    }
  }
`;
export const articlesPreviewQueryDocument = gql`
  query articlesPreviewQuery($stage: Stage!) {
    articles(stage: $stage, orderBy: createdAt_DESC) {
      ...articlePreview
    }
  }
  ${articlePreviewFragmentDoc}
`;
export const pressFilesQueryDocument = gql`
  query pressFilesQuery($stage: Stage!) {
    assets(stage: $stage, where: { assetLabel_contains_some: press }, orderBy: updatedAt_DESC) {
      ...pressFile
    }
  }
  ${pressFileFragmentDoc}
`;

export type SdkFunctionWrapper = <T>(action: () => Promise<T>) => Promise<T>;

const defaultWrapper: SdkFunctionWrapper = (sdkFunction) => sdkFunction();
export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    articlePageQuery(variables: articlePageQueryQueryVariables): Promise<articlePageQueryQuery> {
      return withWrapper(() => client.request<articlePageQueryQuery>(print(articlePageQueryDocument), variables));
    },
    articlesMetaQuery(variables: articlesMetaQueryQueryVariables): Promise<articlesMetaQueryQuery> {
      return withWrapper(() => client.request<articlesMetaQueryQuery>(print(articlesMetaQueryDocument), variables));
    },
    articlesPreviewQuery(variables: articlesPreviewQueryQueryVariables): Promise<articlesPreviewQueryQuery> {
      return withWrapper(() =>
        client.request<articlesPreviewQueryQuery>(print(articlesPreviewQueryDocument), variables)
      );
    },
    pressFilesQuery(variables: pressFilesQueryQueryVariables): Promise<pressFilesQueryQuery> {
      return withWrapper(() => client.request<pressFilesQueryQuery>(print(pressFilesQueryDocument), variables));
    },
  };
}
export type Sdk = ReturnType<typeof getSdk>;
