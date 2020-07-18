export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: any }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date string, such as 2007-12-03, compliant with the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};

export type Query = {
  __typename?: "Query";
  file?: Maybe<File>;
  allFile: FileConnection;
  directory?: Maybe<Directory>;
  allDirectory: DirectoryConnection;
  sitePage?: Maybe<SitePage>;
  allSitePage: SitePageConnection;
  site?: Maybe<Site>;
  allSite: SiteConnection;
  imageSharp?: Maybe<ImageSharp>;
  allImageSharp: ImageSharpConnection;
  contentfulAsset?: Maybe<ContentfulAsset>;
  allContentfulAsset: ContentfulAssetConnection;
  contentfulEspace?: Maybe<ContentfulEspace>;
  allContentfulEspace: ContentfulEspaceConnection;
  contentfulPoleDescriptionRichTextNode?: Maybe<ContentfulPoleDescriptionRichTextNode>;
  allContentfulPoleDescriptionRichTextNode: ContentfulPoleDescriptionRichTextNodeConnection;
  contentfulPole?: Maybe<ContentfulPole>;
  allContentfulPole: ContentfulPoleConnection;
  contentfulRichText?: Maybe<ContentfulRichText>;
  allContentfulRichText: ContentfulRichTextConnection;
  contentfulPostContentRichTextNode?: Maybe<ContentfulPostContentRichTextNode>;
  allContentfulPostContentRichTextNode: ContentfulPostContentRichTextNodeConnection;
  contentfulPost?: Maybe<ContentfulPost>;
  allContentfulPost: ContentfulPostConnection;
  contentfulContentType?: Maybe<ContentfulContentType>;
  allContentfulContentType: ContentfulContentTypeConnection;
  siteBuildMetadata?: Maybe<SiteBuildMetadata>;
  allSiteBuildMetadata: SiteBuildMetadataConnection;
  sitePlugin?: Maybe<SitePlugin>;
  allSitePlugin: SitePluginConnection;
};

export type QueryFileArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  publicURL?: Maybe<StringQueryOperatorInput>;
  childImageSharp?: Maybe<ImageSharpFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type QueryAllFileArgs = {
  filter?: Maybe<FileFilterInput>;
  sort?: Maybe<FileSortInput>;
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
};

export type QueryDirectoryArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type QueryAllDirectoryArgs = {
  filter?: Maybe<DirectoryFilterInput>;
  sort?: Maybe<DirectorySortInput>;
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
};

export type QuerySitePageArgs = {
  path?: Maybe<StringQueryOperatorInput>;
  component?: Maybe<StringQueryOperatorInput>;
  internalComponentName?: Maybe<StringQueryOperatorInput>;
  componentChunkName?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
  context?: Maybe<SitePageContextFilterInput>;
  pluginCreator?: Maybe<SitePluginFilterInput>;
  pluginCreatorId?: Maybe<StringQueryOperatorInput>;
  componentPath?: Maybe<StringQueryOperatorInput>;
};

export type QueryAllSitePageArgs = {
  filter?: Maybe<SitePageFilterInput>;
  sort?: Maybe<SitePageSortInput>;
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
};

export type QuerySiteArgs = {
  buildTime?: Maybe<DateQueryOperatorInput>;
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
  port?: Maybe<IntQueryOperatorInput>;
  host?: Maybe<StringQueryOperatorInput>;
  pathPrefix?: Maybe<StringQueryOperatorInput>;
  polyfill?: Maybe<BooleanQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type QueryAllSiteArgs = {
  filter?: Maybe<SiteFilterInput>;
  sort?: Maybe<SiteSortInput>;
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
};

export type QueryImageSharpArgs = {
  fixed?: Maybe<ImageSharpFixedFilterInput>;
  resolutions?: Maybe<ImageSharpResolutionsFilterInput>;
  fluid?: Maybe<ImageSharpFluidFilterInput>;
  sizes?: Maybe<ImageSharpSizesFilterInput>;
  original?: Maybe<ImageSharpOriginalFilterInput>;
  resize?: Maybe<ImageSharpResizeFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type QueryAllImageSharpArgs = {
  filter?: Maybe<ImageSharpFilterInput>;
  sort?: Maybe<ImageSharpSortInput>;
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
};

export type QueryContentfulAssetArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  file?: Maybe<ContentfulAssetFileFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  fixed?: Maybe<ContentfulFixedFilterInput>;
  resolutions?: Maybe<ContentfulResolutionsFilterInput>;
  fluid?: Maybe<ContentfulFluidFilterInput>;
  sizes?: Maybe<ContentfulSizesFilterInput>;
  resize?: Maybe<ContentfulResizeFilterInput>;
};

export type QueryAllContentfulAssetArgs = {
  filter?: Maybe<ContentfulAssetFilterInput>;
  sort?: Maybe<ContentfulAssetSortInput>;
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
};

export type QueryContentfulEspaceArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  espaceId?: Maybe<StringQueryOperatorInput>;
  frenchTitle?: Maybe<StringQueryOperatorInput>;
  chineseTitle?: Maybe<StringQueryOperatorInput>;
  pole?: Maybe<ContentfulPoleFilterListInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulEspaceSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
};

export type QueryAllContentfulEspaceArgs = {
  filter?: Maybe<ContentfulEspaceFilterInput>;
  sort?: Maybe<ContentfulEspaceSortInput>;
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
};

export type QueryContentfulPoleDescriptionRichTextNodeArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  content?: Maybe<ContentfulPoleDescriptionRichTextNodeContentFilterListInput>;
  nodeType?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  json?: Maybe<JsonQueryOperatorInput>;
  childContentfulRichText?: Maybe<ContentfulRichTextFilterInput>;
};

export type QueryAllContentfulPoleDescriptionRichTextNodeArgs = {
  filter?: Maybe<ContentfulPoleDescriptionRichTextNodeFilterInput>;
  sort?: Maybe<ContentfulPoleDescriptionRichTextNodeSortInput>;
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
};

export type QueryContentfulPoleArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  poleId?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  espace?: Maybe<ContentfulEspaceFilterInput>;
  cover?: Maybe<ContentfulAssetFilterInput>;
  post?: Maybe<ContentfulPostFilterListInput>;
  description?: Maybe<ContentfulPoleDescriptionRichTextNodeFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulPoleSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  childContentfulPoleDescriptionRichTextNode?: Maybe<ContentfulPoleDescriptionRichTextNodeFilterInput>;
};

export type QueryAllContentfulPoleArgs = {
  filter?: Maybe<ContentfulPoleFilterInput>;
  sort?: Maybe<ContentfulPoleSortInput>;
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
};

export type QueryContentfulRichTextArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  html?: Maybe<StringQueryOperatorInput>;
  timeToRead?: Maybe<IntQueryOperatorInput>;
};

export type QueryAllContentfulRichTextArgs = {
  filter?: Maybe<ContentfulRichTextFilterInput>;
  sort?: Maybe<ContentfulRichTextSortInput>;
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
};

export type QueryContentfulPostContentRichTextNodeArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  content?: Maybe<StringQueryOperatorInput>;
  nodeType?: Maybe<StringQueryOperatorInput>;
  json?: Maybe<JsonQueryOperatorInput>;
  childContentfulRichText?: Maybe<ContentfulRichTextFilterInput>;
};

export type QueryAllContentfulPostContentRichTextNodeArgs = {
  filter?: Maybe<ContentfulPostContentRichTextNodeFilterInput>;
  sort?: Maybe<ContentfulPostContentRichTextNodeSortInput>;
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
};

export type QueryContentfulPostArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  date?: Maybe<DateQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  pole?: Maybe<ContentfulPoleFilterInput>;
  image?: Maybe<ContentfulAssetFilterListInput>;
  content?: Maybe<ContentfulPostContentRichTextNodeFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulPostSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  author?: Maybe<StringQueryOperatorInput>;
  childContentfulPostContentRichTextNode?: Maybe<ContentfulPostContentRichTextNodeFilterInput>;
};

export type QueryAllContentfulPostArgs = {
  filter?: Maybe<ContentfulPostFilterInput>;
  sort?: Maybe<ContentfulPostSortInput>;
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
};

export type QueryContentfulContentTypeArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  displayField?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
};

export type QueryAllContentfulContentTypeArgs = {
  filter?: Maybe<ContentfulContentTypeFilterInput>;
  sort?: Maybe<ContentfulContentTypeSortInput>;
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
};

export type QuerySiteBuildMetadataArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  buildTime?: Maybe<DateQueryOperatorInput>;
};

export type QueryAllSiteBuildMetadataArgs = {
  filter?: Maybe<SiteBuildMetadataFilterInput>;
  sort?: Maybe<SiteBuildMetadataSortInput>;
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
};

export type QuerySitePluginArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  resolve?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs?: Maybe<StringQueryOperatorInput>;
  browserAPIs?: Maybe<StringQueryOperatorInput>;
  ssrAPIs?: Maybe<StringQueryOperatorInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
};

export type QueryAllSitePluginArgs = {
  filter?: Maybe<SitePluginFilterInput>;
  sort?: Maybe<SitePluginSortInput>;
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
};

export type StringQueryOperatorInput = {
  eq?: Maybe<Scalars["String"]>;
  ne?: Maybe<Scalars["String"]>;
  in?: Maybe<Array<Maybe<Scalars["String"]>>>;
  nin?: Maybe<Array<Maybe<Scalars["String"]>>>;
  regex?: Maybe<Scalars["String"]>;
  glob?: Maybe<Scalars["String"]>;
};

export type IntQueryOperatorInput = {
  eq?: Maybe<Scalars["Int"]>;
  ne?: Maybe<Scalars["Int"]>;
  gt?: Maybe<Scalars["Int"]>;
  gte?: Maybe<Scalars["Int"]>;
  lt?: Maybe<Scalars["Int"]>;
  lte?: Maybe<Scalars["Int"]>;
  in?: Maybe<Array<Maybe<Scalars["Int"]>>>;
  nin?: Maybe<Array<Maybe<Scalars["Int"]>>>;
};

export type DateQueryOperatorInput = {
  eq?: Maybe<Scalars["Date"]>;
  ne?: Maybe<Scalars["Date"]>;
  gt?: Maybe<Scalars["Date"]>;
  gte?: Maybe<Scalars["Date"]>;
  lt?: Maybe<Scalars["Date"]>;
  lte?: Maybe<Scalars["Date"]>;
  in?: Maybe<Array<Maybe<Scalars["Date"]>>>;
  nin?: Maybe<Array<Maybe<Scalars["Date"]>>>;
};

export type FloatQueryOperatorInput = {
  eq?: Maybe<Scalars["Float"]>;
  ne?: Maybe<Scalars["Float"]>;
  gt?: Maybe<Scalars["Float"]>;
  gte?: Maybe<Scalars["Float"]>;
  lt?: Maybe<Scalars["Float"]>;
  lte?: Maybe<Scalars["Float"]>;
  in?: Maybe<Array<Maybe<Scalars["Float"]>>>;
  nin?: Maybe<Array<Maybe<Scalars["Float"]>>>;
};

export type ImageSharpFilterInput = {
  fixed?: Maybe<ImageSharpFixedFilterInput>;
  resolutions?: Maybe<ImageSharpResolutionsFilterInput>;
  fluid?: Maybe<ImageSharpFluidFilterInput>;
  sizes?: Maybe<ImageSharpSizesFilterInput>;
  original?: Maybe<ImageSharpOriginalFilterInput>;
  resize?: Maybe<ImageSharpResizeFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type ImageSharpFixedFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpResolutionsFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpFluidFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
  originalImg?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
  presentationWidth?: Maybe<IntQueryOperatorInput>;
  presentationHeight?: Maybe<IntQueryOperatorInput>;
};

export type ImageSharpSizesFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
  originalImg?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
  presentationWidth?: Maybe<IntQueryOperatorInput>;
  presentationHeight?: Maybe<IntQueryOperatorInput>;
};

export type ImageSharpOriginalFilterInput = {
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpResizeFilterInput = {
  src?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
};

export type NodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type NodeFilterListInput = {
  elemMatch?: Maybe<NodeFilterInput>;
};

export type InternalFilterInput = {
  content?: Maybe<StringQueryOperatorInput>;
  contentDigest?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  fieldOwners?: Maybe<StringQueryOperatorInput>;
  ignoreType?: Maybe<BooleanQueryOperatorInput>;
  mediaType?: Maybe<StringQueryOperatorInput>;
  owner?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
};

export type BooleanQueryOperatorInput = {
  eq?: Maybe<Scalars["Boolean"]>;
  ne?: Maybe<Scalars["Boolean"]>;
  in?: Maybe<Array<Maybe<Scalars["Boolean"]>>>;
  nin?: Maybe<Array<Maybe<Scalars["Boolean"]>>>;
};

export type File = Node & {
  __typename?: "File";
  sourceInstanceName: Scalars["String"];
  absolutePath: Scalars["String"];
  relativePath: Scalars["String"];
  extension: Scalars["String"];
  size: Scalars["Int"];
  prettySize: Scalars["String"];
  modifiedTime: Scalars["Date"];
  accessTime: Scalars["Date"];
  changeTime: Scalars["Date"];
  birthTime: Scalars["Date"];
  root: Scalars["String"];
  dir: Scalars["String"];
  base: Scalars["String"];
  ext: Scalars["String"];
  name: Scalars["String"];
  relativeDirectory: Scalars["String"];
  dev: Scalars["Int"];
  mode: Scalars["Int"];
  nlink: Scalars["Int"];
  uid: Scalars["Int"];
  gid: Scalars["Int"];
  rdev: Scalars["Int"];
  ino: Scalars["Float"];
  atimeMs: Scalars["Float"];
  mtimeMs: Scalars["Float"];
  ctimeMs: Scalars["Float"];
  atime: Scalars["Date"];
  mtime: Scalars["Date"];
  ctime: Scalars["Date"];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars["Date"]>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars["Float"]>;
  blksize?: Maybe<Scalars["Int"]>;
  blocks?: Maybe<Scalars["Int"]>;
  /** Copy file to static directory and return public url to it */
  publicURL?: Maybe<Scalars["String"]>;
  childImageSharp?: Maybe<ImageSharp>;
  id: Scalars["ID"];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type FileModifiedTimeArgs = {
  formatString?: Maybe<Scalars["String"]>;
  fromNow?: Maybe<Scalars["Boolean"]>;
  difference?: Maybe<Scalars["String"]>;
  locale?: Maybe<Scalars["String"]>;
};

export type FileAccessTimeArgs = {
  formatString?: Maybe<Scalars["String"]>;
  fromNow?: Maybe<Scalars["Boolean"]>;
  difference?: Maybe<Scalars["String"]>;
  locale?: Maybe<Scalars["String"]>;
};

export type FileChangeTimeArgs = {
  formatString?: Maybe<Scalars["String"]>;
  fromNow?: Maybe<Scalars["Boolean"]>;
  difference?: Maybe<Scalars["String"]>;
  locale?: Maybe<Scalars["String"]>;
};

export type FileBirthTimeArgs = {
  formatString?: Maybe<Scalars["String"]>;
  fromNow?: Maybe<Scalars["Boolean"]>;
  difference?: Maybe<Scalars["String"]>;
  locale?: Maybe<Scalars["String"]>;
};

export type FileAtimeArgs = {
  formatString?: Maybe<Scalars["String"]>;
  fromNow?: Maybe<Scalars["Boolean"]>;
  difference?: Maybe<Scalars["String"]>;
  locale?: Maybe<Scalars["String"]>;
};

export type FileMtimeArgs = {
  formatString?: Maybe<Scalars["String"]>;
  fromNow?: Maybe<Scalars["Boolean"]>;
  difference?: Maybe<Scalars["String"]>;
  locale?: Maybe<Scalars["String"]>;
};

export type FileCtimeArgs = {
  formatString?: Maybe<Scalars["String"]>;
  fromNow?: Maybe<Scalars["Boolean"]>;
  difference?: Maybe<Scalars["String"]>;
  locale?: Maybe<Scalars["String"]>;
};

/** Node Interface */
export type Node = {
  id: Scalars["ID"];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type Internal = {
  __typename?: "Internal";
  content?: Maybe<Scalars["String"]>;
  contentDigest: Scalars["String"];
  description?: Maybe<Scalars["String"]>;
  fieldOwners?: Maybe<Array<Maybe<Scalars["String"]>>>;
  ignoreType?: Maybe<Scalars["Boolean"]>;
  mediaType?: Maybe<Scalars["String"]>;
  owner: Scalars["String"];
  type: Scalars["String"];
};

export type ImageSharp = Node & {
  __typename?: "ImageSharp";
  fixed?: Maybe<ImageSharpFixed>;
  /** @deprecated Resolutions was deprecated in Gatsby v2. It's been renamed to "fixed" https://example.com/write-docs-and-fix-this-example-link */
  resolutions?: Maybe<ImageSharpResolutions>;
  fluid?: Maybe<ImageSharpFluid>;
  /** @deprecated Sizes was deprecated in Gatsby v2. It's been renamed to "fluid" https://example.com/write-docs-and-fix-this-example-link */
  sizes?: Maybe<ImageSharpSizes>;
  original?: Maybe<ImageSharpOriginal>;
  resize?: Maybe<ImageSharpResize>;
  id: Scalars["ID"];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type ImageSharpFixedArgs = {
  width?: Maybe<Scalars["Int"]>;
  height?: Maybe<Scalars["Int"]>;
  base64Width?: Maybe<Scalars["Int"]>;
  jpegProgressive?: Maybe<Scalars["Boolean"]>;
  pngCompressionSpeed?: Maybe<Scalars["Int"]>;
  grayscale?: Maybe<Scalars["Boolean"]>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars["Int"]>;
  jpegQuality?: Maybe<Scalars["Int"]>;
  pngQuality?: Maybe<Scalars["Int"]>;
  webpQuality?: Maybe<Scalars["Int"]>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars["String"]>;
  rotate?: Maybe<Scalars["Int"]>;
  trim?: Maybe<Scalars["Float"]>;
};

export type ImageSharpResolutionsArgs = {
  width?: Maybe<Scalars["Int"]>;
  height?: Maybe<Scalars["Int"]>;
  base64Width?: Maybe<Scalars["Int"]>;
  jpegProgressive?: Maybe<Scalars["Boolean"]>;
  pngCompressionSpeed?: Maybe<Scalars["Int"]>;
  grayscale?: Maybe<Scalars["Boolean"]>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars["Int"]>;
  jpegQuality?: Maybe<Scalars["Int"]>;
  pngQuality?: Maybe<Scalars["Int"]>;
  webpQuality?: Maybe<Scalars["Int"]>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars["String"]>;
  rotate?: Maybe<Scalars["Int"]>;
  trim?: Maybe<Scalars["Float"]>;
};

export type ImageSharpFluidArgs = {
  maxWidth?: Maybe<Scalars["Int"]>;
  maxHeight?: Maybe<Scalars["Int"]>;
  base64Width?: Maybe<Scalars["Int"]>;
  grayscale?: Maybe<Scalars["Boolean"]>;
  jpegProgressive?: Maybe<Scalars["Boolean"]>;
  pngCompressionSpeed?: Maybe<Scalars["Int"]>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars["Int"]>;
  jpegQuality?: Maybe<Scalars["Int"]>;
  pngQuality?: Maybe<Scalars["Int"]>;
  webpQuality?: Maybe<Scalars["Int"]>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars["String"]>;
  rotate?: Maybe<Scalars["Int"]>;
  trim?: Maybe<Scalars["Float"]>;
  sizes?: Maybe<Scalars["String"]>;
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars["Int"]>>>;
};

export type ImageSharpSizesArgs = {
  maxWidth?: Maybe<Scalars["Int"]>;
  maxHeight?: Maybe<Scalars["Int"]>;
  base64Width?: Maybe<Scalars["Int"]>;
  grayscale?: Maybe<Scalars["Boolean"]>;
  jpegProgressive?: Maybe<Scalars["Boolean"]>;
  pngCompressionSpeed?: Maybe<Scalars["Int"]>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars["Int"]>;
  jpegQuality?: Maybe<Scalars["Int"]>;
  pngQuality?: Maybe<Scalars["Int"]>;
  webpQuality?: Maybe<Scalars["Int"]>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars["String"]>;
  rotate?: Maybe<Scalars["Int"]>;
  trim?: Maybe<Scalars["Float"]>;
  sizes?: Maybe<Scalars["String"]>;
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars["Int"]>>>;
};

export type ImageSharpResizeArgs = {
  width?: Maybe<Scalars["Int"]>;
  height?: Maybe<Scalars["Int"]>;
  quality?: Maybe<Scalars["Int"]>;
  jpegQuality?: Maybe<Scalars["Int"]>;
  pngQuality?: Maybe<Scalars["Int"]>;
  webpQuality?: Maybe<Scalars["Int"]>;
  jpegProgressive?: Maybe<Scalars["Boolean"]>;
  pngCompressionLevel?: Maybe<Scalars["Int"]>;
  pngCompressionSpeed?: Maybe<Scalars["Int"]>;
  grayscale?: Maybe<Scalars["Boolean"]>;
  duotone?: Maybe<DuotoneGradient>;
  base64?: Maybe<Scalars["Boolean"]>;
  traceSVG?: Maybe<Potrace>;
  toFormat?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars["String"]>;
  rotate?: Maybe<Scalars["Int"]>;
  trim?: Maybe<Scalars["Float"]>;
};

export type DuotoneGradient = {
  highlight: Scalars["String"];
  shadow: Scalars["String"];
  opacity?: Maybe<Scalars["Int"]>;
};

export type Potrace = {
  turnPolicy?: Maybe<PotraceTurnPolicy>;
  turdSize?: Maybe<Scalars["Float"]>;
  alphaMax?: Maybe<Scalars["Float"]>;
  optCurve?: Maybe<Scalars["Boolean"]>;
  optTolerance?: Maybe<Scalars["Float"]>;
  threshold?: Maybe<Scalars["Int"]>;
  blackOnWhite?: Maybe<Scalars["Boolean"]>;
  color?: Maybe<Scalars["String"]>;
  background?: Maybe<Scalars["String"]>;
};

export enum PotraceTurnPolicy {
  TURNPOLICY_BLACK = "TURNPOLICY_BLACK",
  TURNPOLICY_WHITE = "TURNPOLICY_WHITE",
  TURNPOLICY_LEFT = "TURNPOLICY_LEFT",
  TURNPOLICY_RIGHT = "TURNPOLICY_RIGHT",
  TURNPOLICY_MINORITY = "TURNPOLICY_MINORITY",
  TURNPOLICY_MAJORITY = "TURNPOLICY_MAJORITY",
}

export enum ImageFormat {
  NO_CHANGE = "NO_CHANGE",
  JPG = "JPG",
  PNG = "PNG",
  WEBP = "WEBP",
}

export enum ImageCropFocus {
  CENTER = "CENTER",
  NORTH = "NORTH",
  NORTHEAST = "NORTHEAST",
  EAST = "EAST",
  SOUTHEAST = "SOUTHEAST",
  SOUTH = "SOUTH",
  SOUTHWEST = "SOUTHWEST",
  WEST = "WEST",
  NORTHWEST = "NORTHWEST",
  ENTROPY = "ENTROPY",
  ATTENTION = "ATTENTION",
}

export enum ImageFit {
  COVER = "COVER",
  CONTAIN = "CONTAIN",
  FILL = "FILL",
  INSIDE = "INSIDE",
  OUTSIDE = "OUTSIDE",
}

export type ImageSharpFixed = {
  __typename?: "ImageSharpFixed";
  base64?: Maybe<Scalars["String"]>;
  tracedSVG?: Maybe<Scalars["String"]>;
  aspectRatio?: Maybe<Scalars["Float"]>;
  width: Scalars["Float"];
  height: Scalars["Float"];
  src: Scalars["String"];
  srcSet: Scalars["String"];
  srcWebp?: Maybe<Scalars["String"]>;
  srcSetWebp?: Maybe<Scalars["String"]>;
  originalName?: Maybe<Scalars["String"]>;
};

export type ImageSharpResolutions = {
  __typename?: "ImageSharpResolutions";
  base64?: Maybe<Scalars["String"]>;
  tracedSVG?: Maybe<Scalars["String"]>;
  aspectRatio?: Maybe<Scalars["Float"]>;
  width: Scalars["Float"];
  height: Scalars["Float"];
  src: Scalars["String"];
  srcSet: Scalars["String"];
  srcWebp?: Maybe<Scalars["String"]>;
  srcSetWebp?: Maybe<Scalars["String"]>;
  originalName?: Maybe<Scalars["String"]>;
};

export type ImageSharpFluid = {
  __typename?: "ImageSharpFluid";
  base64?: Maybe<Scalars["String"]>;
  tracedSVG?: Maybe<Scalars["String"]>;
  aspectRatio: Scalars["Float"];
  src: Scalars["String"];
  srcSet: Scalars["String"];
  srcWebp?: Maybe<Scalars["String"]>;
  srcSetWebp?: Maybe<Scalars["String"]>;
  sizes: Scalars["String"];
  originalImg?: Maybe<Scalars["String"]>;
  originalName?: Maybe<Scalars["String"]>;
  presentationWidth: Scalars["Int"];
  presentationHeight: Scalars["Int"];
};

export type ImageSharpSizes = {
  __typename?: "ImageSharpSizes";
  base64?: Maybe<Scalars["String"]>;
  tracedSVG?: Maybe<Scalars["String"]>;
  aspectRatio: Scalars["Float"];
  src: Scalars["String"];
  srcSet: Scalars["String"];
  srcWebp?: Maybe<Scalars["String"]>;
  srcSetWebp?: Maybe<Scalars["String"]>;
  sizes: Scalars["String"];
  originalImg?: Maybe<Scalars["String"]>;
  originalName?: Maybe<Scalars["String"]>;
  presentationWidth: Scalars["Int"];
  presentationHeight: Scalars["Int"];
};

export type ImageSharpOriginal = {
  __typename?: "ImageSharpOriginal";
  width?: Maybe<Scalars["Float"]>;
  height?: Maybe<Scalars["Float"]>;
  src?: Maybe<Scalars["String"]>;
};

export type ImageSharpResize = {
  __typename?: "ImageSharpResize";
  src?: Maybe<Scalars["String"]>;
  tracedSVG?: Maybe<Scalars["String"]>;
  width?: Maybe<Scalars["Int"]>;
  height?: Maybe<Scalars["Int"]>;
  aspectRatio?: Maybe<Scalars["Float"]>;
  originalName?: Maybe<Scalars["String"]>;
};

export type FileFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  publicURL?: Maybe<StringQueryOperatorInput>;
  childImageSharp?: Maybe<ImageSharpFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type FileSortInput = {
  fields?: Maybe<Array<Maybe<FileFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export enum FileFieldsEnum {
  sourceInstanceName = "sourceInstanceName",
  absolutePath = "absolutePath",
  relativePath = "relativePath",
  extension = "extension",
  size = "size",
  prettySize = "prettySize",
  modifiedTime = "modifiedTime",
  accessTime = "accessTime",
  changeTime = "changeTime",
  birthTime = "birthTime",
  root = "root",
  dir = "dir",
  base = "base",
  ext = "ext",
  name = "name",
  relativeDirectory = "relativeDirectory",
  dev = "dev",
  mode = "mode",
  nlink = "nlink",
  uid = "uid",
  gid = "gid",
  rdev = "rdev",
  ino = "ino",
  atimeMs = "atimeMs",
  mtimeMs = "mtimeMs",
  ctimeMs = "ctimeMs",
  atime = "atime",
  mtime = "mtime",
  ctime = "ctime",
  birthtime = "birthtime",
  birthtimeMs = "birthtimeMs",
  blksize = "blksize",
  blocks = "blocks",
  publicURL = "publicURL",
  childImageSharp___fixed___base64 = "childImageSharp___fixed___base64",
  childImageSharp___fixed___tracedSVG = "childImageSharp___fixed___tracedSVG",
  childImageSharp___fixed___aspectRatio = "childImageSharp___fixed___aspectRatio",
  childImageSharp___fixed___width = "childImageSharp___fixed___width",
  childImageSharp___fixed___height = "childImageSharp___fixed___height",
  childImageSharp___fixed___src = "childImageSharp___fixed___src",
  childImageSharp___fixed___srcSet = "childImageSharp___fixed___srcSet",
  childImageSharp___fixed___srcWebp = "childImageSharp___fixed___srcWebp",
  childImageSharp___fixed___srcSetWebp = "childImageSharp___fixed___srcSetWebp",
  childImageSharp___fixed___originalName = "childImageSharp___fixed___originalName",
  childImageSharp___resolutions___base64 = "childImageSharp___resolutions___base64",
  childImageSharp___resolutions___tracedSVG = "childImageSharp___resolutions___tracedSVG",
  childImageSharp___resolutions___aspectRatio = "childImageSharp___resolutions___aspectRatio",
  childImageSharp___resolutions___width = "childImageSharp___resolutions___width",
  childImageSharp___resolutions___height = "childImageSharp___resolutions___height",
  childImageSharp___resolutions___src = "childImageSharp___resolutions___src",
  childImageSharp___resolutions___srcSet = "childImageSharp___resolutions___srcSet",
  childImageSharp___resolutions___srcWebp = "childImageSharp___resolutions___srcWebp",
  childImageSharp___resolutions___srcSetWebp = "childImageSharp___resolutions___srcSetWebp",
  childImageSharp___resolutions___originalName = "childImageSharp___resolutions___originalName",
  childImageSharp___fluid___base64 = "childImageSharp___fluid___base64",
  childImageSharp___fluid___tracedSVG = "childImageSharp___fluid___tracedSVG",
  childImageSharp___fluid___aspectRatio = "childImageSharp___fluid___aspectRatio",
  childImageSharp___fluid___src = "childImageSharp___fluid___src",
  childImageSharp___fluid___srcSet = "childImageSharp___fluid___srcSet",
  childImageSharp___fluid___srcWebp = "childImageSharp___fluid___srcWebp",
  childImageSharp___fluid___srcSetWebp = "childImageSharp___fluid___srcSetWebp",
  childImageSharp___fluid___sizes = "childImageSharp___fluid___sizes",
  childImageSharp___fluid___originalImg = "childImageSharp___fluid___originalImg",
  childImageSharp___fluid___originalName = "childImageSharp___fluid___originalName",
  childImageSharp___fluid___presentationWidth = "childImageSharp___fluid___presentationWidth",
  childImageSharp___fluid___presentationHeight = "childImageSharp___fluid___presentationHeight",
  childImageSharp___sizes___base64 = "childImageSharp___sizes___base64",
  childImageSharp___sizes___tracedSVG = "childImageSharp___sizes___tracedSVG",
  childImageSharp___sizes___aspectRatio = "childImageSharp___sizes___aspectRatio",
  childImageSharp___sizes___src = "childImageSharp___sizes___src",
  childImageSharp___sizes___srcSet = "childImageSharp___sizes___srcSet",
  childImageSharp___sizes___srcWebp = "childImageSharp___sizes___srcWebp",
  childImageSharp___sizes___srcSetWebp = "childImageSharp___sizes___srcSetWebp",
  childImageSharp___sizes___sizes = "childImageSharp___sizes___sizes",
  childImageSharp___sizes___originalImg = "childImageSharp___sizes___originalImg",
  childImageSharp___sizes___originalName = "childImageSharp___sizes___originalName",
  childImageSharp___sizes___presentationWidth = "childImageSharp___sizes___presentationWidth",
  childImageSharp___sizes___presentationHeight = "childImageSharp___sizes___presentationHeight",
  childImageSharp___original___width = "childImageSharp___original___width",
  childImageSharp___original___height = "childImageSharp___original___height",
  childImageSharp___original___src = "childImageSharp___original___src",
  childImageSharp___resize___src = "childImageSharp___resize___src",
  childImageSharp___resize___tracedSVG = "childImageSharp___resize___tracedSVG",
  childImageSharp___resize___width = "childImageSharp___resize___width",
  childImageSharp___resize___height = "childImageSharp___resize___height",
  childImageSharp___resize___aspectRatio = "childImageSharp___resize___aspectRatio",
  childImageSharp___resize___originalName = "childImageSharp___resize___originalName",
  childImageSharp___id = "childImageSharp___id",
  childImageSharp___parent___id = "childImageSharp___parent___id",
  childImageSharp___parent___parent___id = "childImageSharp___parent___parent___id",
  childImageSharp___parent___parent___children = "childImageSharp___parent___parent___children",
  childImageSharp___parent___children = "childImageSharp___parent___children",
  childImageSharp___parent___children___id = "childImageSharp___parent___children___id",
  childImageSharp___parent___children___children = "childImageSharp___parent___children___children",
  childImageSharp___parent___internal___content = "childImageSharp___parent___internal___content",
  childImageSharp___parent___internal___contentDigest = "childImageSharp___parent___internal___contentDigest",
  childImageSharp___parent___internal___description = "childImageSharp___parent___internal___description",
  childImageSharp___parent___internal___fieldOwners = "childImageSharp___parent___internal___fieldOwners",
  childImageSharp___parent___internal___ignoreType = "childImageSharp___parent___internal___ignoreType",
  childImageSharp___parent___internal___mediaType = "childImageSharp___parent___internal___mediaType",
  childImageSharp___parent___internal___owner = "childImageSharp___parent___internal___owner",
  childImageSharp___parent___internal___type = "childImageSharp___parent___internal___type",
  childImageSharp___children = "childImageSharp___children",
  childImageSharp___children___id = "childImageSharp___children___id",
  childImageSharp___children___parent___id = "childImageSharp___children___parent___id",
  childImageSharp___children___parent___children = "childImageSharp___children___parent___children",
  childImageSharp___children___children = "childImageSharp___children___children",
  childImageSharp___children___children___id = "childImageSharp___children___children___id",
  childImageSharp___children___children___children = "childImageSharp___children___children___children",
  childImageSharp___children___internal___content = "childImageSharp___children___internal___content",
  childImageSharp___children___internal___contentDigest = "childImageSharp___children___internal___contentDigest",
  childImageSharp___children___internal___description = "childImageSharp___children___internal___description",
  childImageSharp___children___internal___fieldOwners = "childImageSharp___children___internal___fieldOwners",
  childImageSharp___children___internal___ignoreType = "childImageSharp___children___internal___ignoreType",
  childImageSharp___children___internal___mediaType = "childImageSharp___children___internal___mediaType",
  childImageSharp___children___internal___owner = "childImageSharp___children___internal___owner",
  childImageSharp___children___internal___type = "childImageSharp___children___internal___type",
  childImageSharp___internal___content = "childImageSharp___internal___content",
  childImageSharp___internal___contentDigest = "childImageSharp___internal___contentDigest",
  childImageSharp___internal___description = "childImageSharp___internal___description",
  childImageSharp___internal___fieldOwners = "childImageSharp___internal___fieldOwners",
  childImageSharp___internal___ignoreType = "childImageSharp___internal___ignoreType",
  childImageSharp___internal___mediaType = "childImageSharp___internal___mediaType",
  childImageSharp___internal___owner = "childImageSharp___internal___owner",
  childImageSharp___internal___type = "childImageSharp___internal___type",
  id = "id",
  parent___id = "parent___id",
  parent___parent___id = "parent___parent___id",
  parent___parent___parent___id = "parent___parent___parent___id",
  parent___parent___parent___children = "parent___parent___parent___children",
  parent___parent___children = "parent___parent___children",
  parent___parent___children___id = "parent___parent___children___id",
  parent___parent___children___children = "parent___parent___children___children",
  parent___parent___internal___content = "parent___parent___internal___content",
  parent___parent___internal___contentDigest = "parent___parent___internal___contentDigest",
  parent___parent___internal___description = "parent___parent___internal___description",
  parent___parent___internal___fieldOwners = "parent___parent___internal___fieldOwners",
  parent___parent___internal___ignoreType = "parent___parent___internal___ignoreType",
  parent___parent___internal___mediaType = "parent___parent___internal___mediaType",
  parent___parent___internal___owner = "parent___parent___internal___owner",
  parent___parent___internal___type = "parent___parent___internal___type",
  parent___children = "parent___children",
  parent___children___id = "parent___children___id",
  parent___children___parent___id = "parent___children___parent___id",
  parent___children___parent___children = "parent___children___parent___children",
  parent___children___children = "parent___children___children",
  parent___children___children___id = "parent___children___children___id",
  parent___children___children___children = "parent___children___children___children",
  parent___children___internal___content = "parent___children___internal___content",
  parent___children___internal___contentDigest = "parent___children___internal___contentDigest",
  parent___children___internal___description = "parent___children___internal___description",
  parent___children___internal___fieldOwners = "parent___children___internal___fieldOwners",
  parent___children___internal___ignoreType = "parent___children___internal___ignoreType",
  parent___children___internal___mediaType = "parent___children___internal___mediaType",
  parent___children___internal___owner = "parent___children___internal___owner",
  parent___children___internal___type = "parent___children___internal___type",
  parent___internal___content = "parent___internal___content",
  parent___internal___contentDigest = "parent___internal___contentDigest",
  parent___internal___description = "parent___internal___description",
  parent___internal___fieldOwners = "parent___internal___fieldOwners",
  parent___internal___ignoreType = "parent___internal___ignoreType",
  parent___internal___mediaType = "parent___internal___mediaType",
  parent___internal___owner = "parent___internal___owner",
  parent___internal___type = "parent___internal___type",
  children = "children",
  children___id = "children___id",
  children___parent___id = "children___parent___id",
  children___parent___parent___id = "children___parent___parent___id",
  children___parent___parent___children = "children___parent___parent___children",
  children___parent___children = "children___parent___children",
  children___parent___children___id = "children___parent___children___id",
  children___parent___children___children = "children___parent___children___children",
  children___parent___internal___content = "children___parent___internal___content",
  children___parent___internal___contentDigest = "children___parent___internal___contentDigest",
  children___parent___internal___description = "children___parent___internal___description",
  children___parent___internal___fieldOwners = "children___parent___internal___fieldOwners",
  children___parent___internal___ignoreType = "children___parent___internal___ignoreType",
  children___parent___internal___mediaType = "children___parent___internal___mediaType",
  children___parent___internal___owner = "children___parent___internal___owner",
  children___parent___internal___type = "children___parent___internal___type",
  children___children = "children___children",
  children___children___id = "children___children___id",
  children___children___parent___id = "children___children___parent___id",
  children___children___parent___children = "children___children___parent___children",
  children___children___children = "children___children___children",
  children___children___children___id = "children___children___children___id",
  children___children___children___children = "children___children___children___children",
  children___children___internal___content = "children___children___internal___content",
  children___children___internal___contentDigest = "children___children___internal___contentDigest",
  children___children___internal___description = "children___children___internal___description",
  children___children___internal___fieldOwners = "children___children___internal___fieldOwners",
  children___children___internal___ignoreType = "children___children___internal___ignoreType",
  children___children___internal___mediaType = "children___children___internal___mediaType",
  children___children___internal___owner = "children___children___internal___owner",
  children___children___internal___type = "children___children___internal___type",
  children___internal___content = "children___internal___content",
  children___internal___contentDigest = "children___internal___contentDigest",
  children___internal___description = "children___internal___description",
  children___internal___fieldOwners = "children___internal___fieldOwners",
  children___internal___ignoreType = "children___internal___ignoreType",
  children___internal___mediaType = "children___internal___mediaType",
  children___internal___owner = "children___internal___owner",
  children___internal___type = "children___internal___type",
  internal___content = "internal___content",
  internal___contentDigest = "internal___contentDigest",
  internal___description = "internal___description",
  internal___fieldOwners = "internal___fieldOwners",
  internal___ignoreType = "internal___ignoreType",
  internal___mediaType = "internal___mediaType",
  internal___owner = "internal___owner",
  internal___type = "internal___type",
}

export enum SortOrderEnum {
  ASC = "ASC",
  DESC = "DESC",
}

export type FileConnection = {
  __typename?: "FileConnection";
  totalCount: Scalars["Int"];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  distinct: Array<Scalars["String"]>;
  group: Array<FileGroupConnection>;
};

export type FileConnectionDistinctArgs = {
  field: FileFieldsEnum;
};

export type FileConnectionGroupArgs = {
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
  field: FileFieldsEnum;
};

export type FileEdge = {
  __typename?: "FileEdge";
  next?: Maybe<File>;
  node: File;
  previous?: Maybe<File>;
};

export type PageInfo = {
  __typename?: "PageInfo";
  currentPage: Scalars["Int"];
  hasPreviousPage: Scalars["Boolean"];
  hasNextPage: Scalars["Boolean"];
  itemCount: Scalars["Int"];
  pageCount: Scalars["Int"];
  perPage?: Maybe<Scalars["Int"]>;
};

export type FileGroupConnection = {
  __typename?: "FileGroupConnection";
  totalCount: Scalars["Int"];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  field: Scalars["String"];
  fieldValue?: Maybe<Scalars["String"]>;
};

export type Directory = Node & {
  __typename?: "Directory";
  sourceInstanceName: Scalars["String"];
  absolutePath: Scalars["String"];
  relativePath: Scalars["String"];
  extension: Scalars["String"];
  size: Scalars["Int"];
  prettySize: Scalars["String"];
  modifiedTime: Scalars["Date"];
  accessTime: Scalars["Date"];
  changeTime: Scalars["Date"];
  birthTime: Scalars["Date"];
  root: Scalars["String"];
  dir: Scalars["String"];
  base: Scalars["String"];
  ext: Scalars["String"];
  name: Scalars["String"];
  relativeDirectory: Scalars["String"];
  dev: Scalars["Int"];
  mode: Scalars["Int"];
  nlink: Scalars["Int"];
  uid: Scalars["Int"];
  gid: Scalars["Int"];
  rdev: Scalars["Int"];
  ino: Scalars["Float"];
  atimeMs: Scalars["Float"];
  mtimeMs: Scalars["Float"];
  ctimeMs: Scalars["Float"];
  atime: Scalars["Date"];
  mtime: Scalars["Date"];
  ctime: Scalars["Date"];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars["Date"]>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars["Float"]>;
  blksize?: Maybe<Scalars["Int"]>;
  blocks?: Maybe<Scalars["Int"]>;
  id: Scalars["ID"];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type DirectoryModifiedTimeArgs = {
  formatString?: Maybe<Scalars["String"]>;
  fromNow?: Maybe<Scalars["Boolean"]>;
  difference?: Maybe<Scalars["String"]>;
  locale?: Maybe<Scalars["String"]>;
};

export type DirectoryAccessTimeArgs = {
  formatString?: Maybe<Scalars["String"]>;
  fromNow?: Maybe<Scalars["Boolean"]>;
  difference?: Maybe<Scalars["String"]>;
  locale?: Maybe<Scalars["String"]>;
};

export type DirectoryChangeTimeArgs = {
  formatString?: Maybe<Scalars["String"]>;
  fromNow?: Maybe<Scalars["Boolean"]>;
  difference?: Maybe<Scalars["String"]>;
  locale?: Maybe<Scalars["String"]>;
};

export type DirectoryBirthTimeArgs = {
  formatString?: Maybe<Scalars["String"]>;
  fromNow?: Maybe<Scalars["Boolean"]>;
  difference?: Maybe<Scalars["String"]>;
  locale?: Maybe<Scalars["String"]>;
};

export type DirectoryAtimeArgs = {
  formatString?: Maybe<Scalars["String"]>;
  fromNow?: Maybe<Scalars["Boolean"]>;
  difference?: Maybe<Scalars["String"]>;
  locale?: Maybe<Scalars["String"]>;
};

export type DirectoryMtimeArgs = {
  formatString?: Maybe<Scalars["String"]>;
  fromNow?: Maybe<Scalars["Boolean"]>;
  difference?: Maybe<Scalars["String"]>;
  locale?: Maybe<Scalars["String"]>;
};

export type DirectoryCtimeArgs = {
  formatString?: Maybe<Scalars["String"]>;
  fromNow?: Maybe<Scalars["Boolean"]>;
  difference?: Maybe<Scalars["String"]>;
  locale?: Maybe<Scalars["String"]>;
};

export type DirectoryFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type DirectorySortInput = {
  fields?: Maybe<Array<Maybe<DirectoryFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export enum DirectoryFieldsEnum {
  sourceInstanceName = "sourceInstanceName",
  absolutePath = "absolutePath",
  relativePath = "relativePath",
  extension = "extension",
  size = "size",
  prettySize = "prettySize",
  modifiedTime = "modifiedTime",
  accessTime = "accessTime",
  changeTime = "changeTime",
  birthTime = "birthTime",
  root = "root",
  dir = "dir",
  base = "base",
  ext = "ext",
  name = "name",
  relativeDirectory = "relativeDirectory",
  dev = "dev",
  mode = "mode",
  nlink = "nlink",
  uid = "uid",
  gid = "gid",
  rdev = "rdev",
  ino = "ino",
  atimeMs = "atimeMs",
  mtimeMs = "mtimeMs",
  ctimeMs = "ctimeMs",
  atime = "atime",
  mtime = "mtime",
  ctime = "ctime",
  birthtime = "birthtime",
  birthtimeMs = "birthtimeMs",
  blksize = "blksize",
  blocks = "blocks",
  id = "id",
  parent___id = "parent___id",
  parent___parent___id = "parent___parent___id",
  parent___parent___parent___id = "parent___parent___parent___id",
  parent___parent___parent___children = "parent___parent___parent___children",
  parent___parent___children = "parent___parent___children",
  parent___parent___children___id = "parent___parent___children___id",
  parent___parent___children___children = "parent___parent___children___children",
  parent___parent___internal___content = "parent___parent___internal___content",
  parent___parent___internal___contentDigest = "parent___parent___internal___contentDigest",
  parent___parent___internal___description = "parent___parent___internal___description",
  parent___parent___internal___fieldOwners = "parent___parent___internal___fieldOwners",
  parent___parent___internal___ignoreType = "parent___parent___internal___ignoreType",
  parent___parent___internal___mediaType = "parent___parent___internal___mediaType",
  parent___parent___internal___owner = "parent___parent___internal___owner",
  parent___parent___internal___type = "parent___parent___internal___type",
  parent___children = "parent___children",
  parent___children___id = "parent___children___id",
  parent___children___parent___id = "parent___children___parent___id",
  parent___children___parent___children = "parent___children___parent___children",
  parent___children___children = "parent___children___children",
  parent___children___children___id = "parent___children___children___id",
  parent___children___children___children = "parent___children___children___children",
  parent___children___internal___content = "parent___children___internal___content",
  parent___children___internal___contentDigest = "parent___children___internal___contentDigest",
  parent___children___internal___description = "parent___children___internal___description",
  parent___children___internal___fieldOwners = "parent___children___internal___fieldOwners",
  parent___children___internal___ignoreType = "parent___children___internal___ignoreType",
  parent___children___internal___mediaType = "parent___children___internal___mediaType",
  parent___children___internal___owner = "parent___children___internal___owner",
  parent___children___internal___type = "parent___children___internal___type",
  parent___internal___content = "parent___internal___content",
  parent___internal___contentDigest = "parent___internal___contentDigest",
  parent___internal___description = "parent___internal___description",
  parent___internal___fieldOwners = "parent___internal___fieldOwners",
  parent___internal___ignoreType = "parent___internal___ignoreType",
  parent___internal___mediaType = "parent___internal___mediaType",
  parent___internal___owner = "parent___internal___owner",
  parent___internal___type = "parent___internal___type",
  children = "children",
  children___id = "children___id",
  children___parent___id = "children___parent___id",
  children___parent___parent___id = "children___parent___parent___id",
  children___parent___parent___children = "children___parent___parent___children",
  children___parent___children = "children___parent___children",
  children___parent___children___id = "children___parent___children___id",
  children___parent___children___children = "children___parent___children___children",
  children___parent___internal___content = "children___parent___internal___content",
  children___parent___internal___contentDigest = "children___parent___internal___contentDigest",
  children___parent___internal___description = "children___parent___internal___description",
  children___parent___internal___fieldOwners = "children___parent___internal___fieldOwners",
  children___parent___internal___ignoreType = "children___parent___internal___ignoreType",
  children___parent___internal___mediaType = "children___parent___internal___mediaType",
  children___parent___internal___owner = "children___parent___internal___owner",
  children___parent___internal___type = "children___parent___internal___type",
  children___children = "children___children",
  children___children___id = "children___children___id",
  children___children___parent___id = "children___children___parent___id",
  children___children___parent___children = "children___children___parent___children",
  children___children___children = "children___children___children",
  children___children___children___id = "children___children___children___id",
  children___children___children___children = "children___children___children___children",
  children___children___internal___content = "children___children___internal___content",
  children___children___internal___contentDigest = "children___children___internal___contentDigest",
  children___children___internal___description = "children___children___internal___description",
  children___children___internal___fieldOwners = "children___children___internal___fieldOwners",
  children___children___internal___ignoreType = "children___children___internal___ignoreType",
  children___children___internal___mediaType = "children___children___internal___mediaType",
  children___children___internal___owner = "children___children___internal___owner",
  children___children___internal___type = "children___children___internal___type",
  children___internal___content = "children___internal___content",
  children___internal___contentDigest = "children___internal___contentDigest",
  children___internal___description = "children___internal___description",
  children___internal___fieldOwners = "children___internal___fieldOwners",
  children___internal___ignoreType = "children___internal___ignoreType",
  children___internal___mediaType = "children___internal___mediaType",
  children___internal___owner = "children___internal___owner",
  children___internal___type = "children___internal___type",
  internal___content = "internal___content",
  internal___contentDigest = "internal___contentDigest",
  internal___description = "internal___description",
  internal___fieldOwners = "internal___fieldOwners",
  internal___ignoreType = "internal___ignoreType",
  internal___mediaType = "internal___mediaType",
  internal___owner = "internal___owner",
  internal___type = "internal___type",
}

export type DirectoryConnection = {
  __typename?: "DirectoryConnection";
  totalCount: Scalars["Int"];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  distinct: Array<Scalars["String"]>;
  group: Array<DirectoryGroupConnection>;
};

export type DirectoryConnectionDistinctArgs = {
  field: DirectoryFieldsEnum;
};

export type DirectoryConnectionGroupArgs = {
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
  field: DirectoryFieldsEnum;
};

export type DirectoryEdge = {
  __typename?: "DirectoryEdge";
  next?: Maybe<Directory>;
  node: Directory;
  previous?: Maybe<Directory>;
};

export type DirectoryGroupConnection = {
  __typename?: "DirectoryGroupConnection";
  totalCount: Scalars["Int"];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  field: Scalars["String"];
  fieldValue?: Maybe<Scalars["String"]>;
};

export type SitePageContextFilterInput = {
  slug?: Maybe<StringQueryOperatorInput>;
  poleId?: Maybe<StringQueryOperatorInput>;
  espaceId?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  resolve?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs?: Maybe<StringQueryOperatorInput>;
  browserAPIs?: Maybe<StringQueryOperatorInput>;
  ssrAPIs?: Maybe<StringQueryOperatorInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
};

export type SitePluginPluginOptionsFilterInput = {
  isTSX?: Maybe<BooleanQueryOperatorInput>;
  allExtensions?: Maybe<BooleanQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  short_name?: Maybe<StringQueryOperatorInput>;
  start_url?: Maybe<StringQueryOperatorInput>;
  background_color?: Maybe<StringQueryOperatorInput>;
  theme_color?: Maybe<StringQueryOperatorInput>;
  display?: Maybe<StringQueryOperatorInput>;
  icon?: Maybe<StringQueryOperatorInput>;
  implementation?: Maybe<SitePluginPluginOptionsImplementationFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  accessToken?: Maybe<StringQueryOperatorInput>;
  host?: Maybe<StringQueryOperatorInput>;
  path?: Maybe<StringQueryOperatorInput>;
  pathCheck?: Maybe<BooleanQueryOperatorInput>;
};

export type SitePluginPluginOptionsImplementationFilterInput = {
  info?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  main?: Maybe<StringQueryOperatorInput>;
  license?: Maybe<StringQueryOperatorInput>;
  dependencies?: Maybe<SitePluginPackageJsonDependenciesFilterListInput>;
  devDependencies?: Maybe<SitePluginPackageJsonDevDependenciesFilterListInput>;
  peerDependencies?: Maybe<SitePluginPackageJsonPeerDependenciesFilterListInput>;
  keywords?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDependenciesFilterInput>;
};

export type SitePluginPackageJsonDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDevDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDevDependenciesFilterInput>;
};

export type SitePluginPackageJsonDevDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>;
};

export type SitePluginPackageJsonPeerDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePage = Node & {
  __typename?: "SitePage";
  path: Scalars["String"];
  component: Scalars["String"];
  internalComponentName: Scalars["String"];
  componentChunkName: Scalars["String"];
  matchPath?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  isCreatedByStatefulCreatePages?: Maybe<Scalars["Boolean"]>;
  context?: Maybe<SitePageContext>;
  pluginCreator?: Maybe<SitePlugin>;
  pluginCreatorId?: Maybe<Scalars["String"]>;
  componentPath?: Maybe<Scalars["String"]>;
};

export type SitePageContext = {
  __typename?: "SitePageContext";
  slug?: Maybe<Scalars["String"]>;
  poleId?: Maybe<Scalars["String"]>;
  espaceId?: Maybe<Scalars["String"]>;
};

export type SitePlugin = Node & {
  __typename?: "SitePlugin";
  id: Scalars["ID"];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  resolve?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  version?: Maybe<Scalars["String"]>;
  pluginOptions?: Maybe<SitePluginPluginOptions>;
  nodeAPIs?: Maybe<Array<Maybe<Scalars["String"]>>>;
  browserAPIs?: Maybe<Array<Maybe<Scalars["String"]>>>;
  ssrAPIs?: Maybe<Array<Maybe<Scalars["String"]>>>;
  pluginFilepath?: Maybe<Scalars["String"]>;
  packageJson?: Maybe<SitePluginPackageJson>;
};

export type SitePluginPluginOptions = {
  __typename?: "SitePluginPluginOptions";
  isTSX?: Maybe<Scalars["Boolean"]>;
  allExtensions?: Maybe<Scalars["Boolean"]>;
  name?: Maybe<Scalars["String"]>;
  short_name?: Maybe<Scalars["String"]>;
  start_url?: Maybe<Scalars["String"]>;
  background_color?: Maybe<Scalars["String"]>;
  theme_color?: Maybe<Scalars["String"]>;
  display?: Maybe<Scalars["String"]>;
  icon?: Maybe<Scalars["String"]>;
  implementation?: Maybe<SitePluginPluginOptionsImplementation>;
  spaceId?: Maybe<Scalars["String"]>;
  accessToken?: Maybe<Scalars["String"]>;
  host?: Maybe<Scalars["String"]>;
  path?: Maybe<Scalars["String"]>;
  pathCheck?: Maybe<Scalars["Boolean"]>;
};

export type SitePluginPluginOptionsImplementation = {
  __typename?: "SitePluginPluginOptionsImplementation";
  info?: Maybe<Scalars["String"]>;
};

export type SitePluginPackageJson = {
  __typename?: "SitePluginPackageJson";
  name?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  version?: Maybe<Scalars["String"]>;
  main?: Maybe<Scalars["String"]>;
  license?: Maybe<Scalars["String"]>;
  dependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDependencies>>>;
  devDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDevDependencies>>>;
  peerDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonPeerDependencies>>>;
  keywords?: Maybe<Array<Maybe<Scalars["String"]>>>;
};

export type SitePluginPackageJsonDependencies = {
  __typename?: "SitePluginPackageJsonDependencies";
  name?: Maybe<Scalars["String"]>;
  version?: Maybe<Scalars["String"]>;
};

export type SitePluginPackageJsonDevDependencies = {
  __typename?: "SitePluginPackageJsonDevDependencies";
  name?: Maybe<Scalars["String"]>;
  version?: Maybe<Scalars["String"]>;
};

export type SitePluginPackageJsonPeerDependencies = {
  __typename?: "SitePluginPackageJsonPeerDependencies";
  name?: Maybe<Scalars["String"]>;
  version?: Maybe<Scalars["String"]>;
};

export type SitePageFilterInput = {
  path?: Maybe<StringQueryOperatorInput>;
  component?: Maybe<StringQueryOperatorInput>;
  internalComponentName?: Maybe<StringQueryOperatorInput>;
  componentChunkName?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
  context?: Maybe<SitePageContextFilterInput>;
  pluginCreator?: Maybe<SitePluginFilterInput>;
  pluginCreatorId?: Maybe<StringQueryOperatorInput>;
  componentPath?: Maybe<StringQueryOperatorInput>;
};

export type SitePageSortInput = {
  fields?: Maybe<Array<Maybe<SitePageFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export enum SitePageFieldsEnum {
  path = "path",
  component = "component",
  internalComponentName = "internalComponentName",
  componentChunkName = "componentChunkName",
  matchPath = "matchPath",
  id = "id",
  parent___id = "parent___id",
  parent___parent___id = "parent___parent___id",
  parent___parent___parent___id = "parent___parent___parent___id",
  parent___parent___parent___children = "parent___parent___parent___children",
  parent___parent___children = "parent___parent___children",
  parent___parent___children___id = "parent___parent___children___id",
  parent___parent___children___children = "parent___parent___children___children",
  parent___parent___internal___content = "parent___parent___internal___content",
  parent___parent___internal___contentDigest = "parent___parent___internal___contentDigest",
  parent___parent___internal___description = "parent___parent___internal___description",
  parent___parent___internal___fieldOwners = "parent___parent___internal___fieldOwners",
  parent___parent___internal___ignoreType = "parent___parent___internal___ignoreType",
  parent___parent___internal___mediaType = "parent___parent___internal___mediaType",
  parent___parent___internal___owner = "parent___parent___internal___owner",
  parent___parent___internal___type = "parent___parent___internal___type",
  parent___children = "parent___children",
  parent___children___id = "parent___children___id",
  parent___children___parent___id = "parent___children___parent___id",
  parent___children___parent___children = "parent___children___parent___children",
  parent___children___children = "parent___children___children",
  parent___children___children___id = "parent___children___children___id",
  parent___children___children___children = "parent___children___children___children",
  parent___children___internal___content = "parent___children___internal___content",
  parent___children___internal___contentDigest = "parent___children___internal___contentDigest",
  parent___children___internal___description = "parent___children___internal___description",
  parent___children___internal___fieldOwners = "parent___children___internal___fieldOwners",
  parent___children___internal___ignoreType = "parent___children___internal___ignoreType",
  parent___children___internal___mediaType = "parent___children___internal___mediaType",
  parent___children___internal___owner = "parent___children___internal___owner",
  parent___children___internal___type = "parent___children___internal___type",
  parent___internal___content = "parent___internal___content",
  parent___internal___contentDigest = "parent___internal___contentDigest",
  parent___internal___description = "parent___internal___description",
  parent___internal___fieldOwners = "parent___internal___fieldOwners",
  parent___internal___ignoreType = "parent___internal___ignoreType",
  parent___internal___mediaType = "parent___internal___mediaType",
  parent___internal___owner = "parent___internal___owner",
  parent___internal___type = "parent___internal___type",
  children = "children",
  children___id = "children___id",
  children___parent___id = "children___parent___id",
  children___parent___parent___id = "children___parent___parent___id",
  children___parent___parent___children = "children___parent___parent___children",
  children___parent___children = "children___parent___children",
  children___parent___children___id = "children___parent___children___id",
  children___parent___children___children = "children___parent___children___children",
  children___parent___internal___content = "children___parent___internal___content",
  children___parent___internal___contentDigest = "children___parent___internal___contentDigest",
  children___parent___internal___description = "children___parent___internal___description",
  children___parent___internal___fieldOwners = "children___parent___internal___fieldOwners",
  children___parent___internal___ignoreType = "children___parent___internal___ignoreType",
  children___parent___internal___mediaType = "children___parent___internal___mediaType",
  children___parent___internal___owner = "children___parent___internal___owner",
  children___parent___internal___type = "children___parent___internal___type",
  children___children = "children___children",
  children___children___id = "children___children___id",
  children___children___parent___id = "children___children___parent___id",
  children___children___parent___children = "children___children___parent___children",
  children___children___children = "children___children___children",
  children___children___children___id = "children___children___children___id",
  children___children___children___children = "children___children___children___children",
  children___children___internal___content = "children___children___internal___content",
  children___children___internal___contentDigest = "children___children___internal___contentDigest",
  children___children___internal___description = "children___children___internal___description",
  children___children___internal___fieldOwners = "children___children___internal___fieldOwners",
  children___children___internal___ignoreType = "children___children___internal___ignoreType",
  children___children___internal___mediaType = "children___children___internal___mediaType",
  children___children___internal___owner = "children___children___internal___owner",
  children___children___internal___type = "children___children___internal___type",
  children___internal___content = "children___internal___content",
  children___internal___contentDigest = "children___internal___contentDigest",
  children___internal___description = "children___internal___description",
  children___internal___fieldOwners = "children___internal___fieldOwners",
  children___internal___ignoreType = "children___internal___ignoreType",
  children___internal___mediaType = "children___internal___mediaType",
  children___internal___owner = "children___internal___owner",
  children___internal___type = "children___internal___type",
  internal___content = "internal___content",
  internal___contentDigest = "internal___contentDigest",
  internal___description = "internal___description",
  internal___fieldOwners = "internal___fieldOwners",
  internal___ignoreType = "internal___ignoreType",
  internal___mediaType = "internal___mediaType",
  internal___owner = "internal___owner",
  internal___type = "internal___type",
  isCreatedByStatefulCreatePages = "isCreatedByStatefulCreatePages",
  context___slug = "context___slug",
  context___poleId = "context___poleId",
  context___espaceId = "context___espaceId",
  pluginCreator___id = "pluginCreator___id",
  pluginCreator___parent___id = "pluginCreator___parent___id",
  pluginCreator___parent___parent___id = "pluginCreator___parent___parent___id",
  pluginCreator___parent___parent___children = "pluginCreator___parent___parent___children",
  pluginCreator___parent___children = "pluginCreator___parent___children",
  pluginCreator___parent___children___id = "pluginCreator___parent___children___id",
  pluginCreator___parent___children___children = "pluginCreator___parent___children___children",
  pluginCreator___parent___internal___content = "pluginCreator___parent___internal___content",
  pluginCreator___parent___internal___contentDigest = "pluginCreator___parent___internal___contentDigest",
  pluginCreator___parent___internal___description = "pluginCreator___parent___internal___description",
  pluginCreator___parent___internal___fieldOwners = "pluginCreator___parent___internal___fieldOwners",
  pluginCreator___parent___internal___ignoreType = "pluginCreator___parent___internal___ignoreType",
  pluginCreator___parent___internal___mediaType = "pluginCreator___parent___internal___mediaType",
  pluginCreator___parent___internal___owner = "pluginCreator___parent___internal___owner",
  pluginCreator___parent___internal___type = "pluginCreator___parent___internal___type",
  pluginCreator___children = "pluginCreator___children",
  pluginCreator___children___id = "pluginCreator___children___id",
  pluginCreator___children___parent___id = "pluginCreator___children___parent___id",
  pluginCreator___children___parent___children = "pluginCreator___children___parent___children",
  pluginCreator___children___children = "pluginCreator___children___children",
  pluginCreator___children___children___id = "pluginCreator___children___children___id",
  pluginCreator___children___children___children = "pluginCreator___children___children___children",
  pluginCreator___children___internal___content = "pluginCreator___children___internal___content",
  pluginCreator___children___internal___contentDigest = "pluginCreator___children___internal___contentDigest",
  pluginCreator___children___internal___description = "pluginCreator___children___internal___description",
  pluginCreator___children___internal___fieldOwners = "pluginCreator___children___internal___fieldOwners",
  pluginCreator___children___internal___ignoreType = "pluginCreator___children___internal___ignoreType",
  pluginCreator___children___internal___mediaType = "pluginCreator___children___internal___mediaType",
  pluginCreator___children___internal___owner = "pluginCreator___children___internal___owner",
  pluginCreator___children___internal___type = "pluginCreator___children___internal___type",
  pluginCreator___internal___content = "pluginCreator___internal___content",
  pluginCreator___internal___contentDigest = "pluginCreator___internal___contentDigest",
  pluginCreator___internal___description = "pluginCreator___internal___description",
  pluginCreator___internal___fieldOwners = "pluginCreator___internal___fieldOwners",
  pluginCreator___internal___ignoreType = "pluginCreator___internal___ignoreType",
  pluginCreator___internal___mediaType = "pluginCreator___internal___mediaType",
  pluginCreator___internal___owner = "pluginCreator___internal___owner",
  pluginCreator___internal___type = "pluginCreator___internal___type",
  pluginCreator___resolve = "pluginCreator___resolve",
  pluginCreator___name = "pluginCreator___name",
  pluginCreator___version = "pluginCreator___version",
  pluginCreator___pluginOptions___isTSX = "pluginCreator___pluginOptions___isTSX",
  pluginCreator___pluginOptions___allExtensions = "pluginCreator___pluginOptions___allExtensions",
  pluginCreator___pluginOptions___name = "pluginCreator___pluginOptions___name",
  pluginCreator___pluginOptions___short_name = "pluginCreator___pluginOptions___short_name",
  pluginCreator___pluginOptions___start_url = "pluginCreator___pluginOptions___start_url",
  pluginCreator___pluginOptions___background_color = "pluginCreator___pluginOptions___background_color",
  pluginCreator___pluginOptions___theme_color = "pluginCreator___pluginOptions___theme_color",
  pluginCreator___pluginOptions___display = "pluginCreator___pluginOptions___display",
  pluginCreator___pluginOptions___icon = "pluginCreator___pluginOptions___icon",
  pluginCreator___pluginOptions___implementation___info = "pluginCreator___pluginOptions___implementation___info",
  pluginCreator___pluginOptions___spaceId = "pluginCreator___pluginOptions___spaceId",
  pluginCreator___pluginOptions___accessToken = "pluginCreator___pluginOptions___accessToken",
  pluginCreator___pluginOptions___host = "pluginCreator___pluginOptions___host",
  pluginCreator___pluginOptions___path = "pluginCreator___pluginOptions___path",
  pluginCreator___pluginOptions___pathCheck = "pluginCreator___pluginOptions___pathCheck",
  pluginCreator___nodeAPIs = "pluginCreator___nodeAPIs",
  pluginCreator___browserAPIs = "pluginCreator___browserAPIs",
  pluginCreator___ssrAPIs = "pluginCreator___ssrAPIs",
  pluginCreator___pluginFilepath = "pluginCreator___pluginFilepath",
  pluginCreator___packageJson___name = "pluginCreator___packageJson___name",
  pluginCreator___packageJson___description = "pluginCreator___packageJson___description",
  pluginCreator___packageJson___version = "pluginCreator___packageJson___version",
  pluginCreator___packageJson___main = "pluginCreator___packageJson___main",
  pluginCreator___packageJson___license = "pluginCreator___packageJson___license",
  pluginCreator___packageJson___dependencies = "pluginCreator___packageJson___dependencies",
  pluginCreator___packageJson___dependencies___name = "pluginCreator___packageJson___dependencies___name",
  pluginCreator___packageJson___dependencies___version = "pluginCreator___packageJson___dependencies___version",
  pluginCreator___packageJson___devDependencies = "pluginCreator___packageJson___devDependencies",
  pluginCreator___packageJson___devDependencies___name = "pluginCreator___packageJson___devDependencies___name",
  pluginCreator___packageJson___devDependencies___version = "pluginCreator___packageJson___devDependencies___version",
  pluginCreator___packageJson___peerDependencies = "pluginCreator___packageJson___peerDependencies",
  pluginCreator___packageJson___peerDependencies___name = "pluginCreator___packageJson___peerDependencies___name",
  pluginCreator___packageJson___peerDependencies___version = "pluginCreator___packageJson___peerDependencies___version",
  pluginCreator___packageJson___keywords = "pluginCreator___packageJson___keywords",
  pluginCreatorId = "pluginCreatorId",
  componentPath = "componentPath",
}

export type SitePageConnection = {
  __typename?: "SitePageConnection";
  totalCount: Scalars["Int"];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars["String"]>;
  group: Array<SitePageGroupConnection>;
};

export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldsEnum;
};

export type SitePageConnectionGroupArgs = {
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
  field: SitePageFieldsEnum;
};

export type SitePageEdge = {
  __typename?: "SitePageEdge";
  next?: Maybe<SitePage>;
  node: SitePage;
  previous?: Maybe<SitePage>;
};

export type SitePageGroupConnection = {
  __typename?: "SitePageGroupConnection";
  totalCount: Scalars["Int"];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  field: Scalars["String"];
  fieldValue?: Maybe<Scalars["String"]>;
};

export type SiteSiteMetadataFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
};

export type Site = Node & {
  __typename?: "Site";
  buildTime?: Maybe<Scalars["Date"]>;
  siteMetadata?: Maybe<SiteSiteMetadata>;
  port?: Maybe<Scalars["Int"]>;
  host?: Maybe<Scalars["String"]>;
  pathPrefix?: Maybe<Scalars["String"]>;
  polyfill?: Maybe<Scalars["Boolean"]>;
  id: Scalars["ID"];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type SiteBuildTimeArgs = {
  formatString?: Maybe<Scalars["String"]>;
  fromNow?: Maybe<Scalars["Boolean"]>;
  difference?: Maybe<Scalars["String"]>;
  locale?: Maybe<Scalars["String"]>;
};

export type SiteSiteMetadata = {
  __typename?: "SiteSiteMetadata";
  title?: Maybe<Scalars["String"]>;
};

export type SiteFilterInput = {
  buildTime?: Maybe<DateQueryOperatorInput>;
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
  port?: Maybe<IntQueryOperatorInput>;
  host?: Maybe<StringQueryOperatorInput>;
  pathPrefix?: Maybe<StringQueryOperatorInput>;
  polyfill?: Maybe<BooleanQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type SiteSortInput = {
  fields?: Maybe<Array<Maybe<SiteFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export enum SiteFieldsEnum {
  buildTime = "buildTime",
  siteMetadata___title = "siteMetadata___title",
  port = "port",
  host = "host",
  pathPrefix = "pathPrefix",
  polyfill = "polyfill",
  id = "id",
  parent___id = "parent___id",
  parent___parent___id = "parent___parent___id",
  parent___parent___parent___id = "parent___parent___parent___id",
  parent___parent___parent___children = "parent___parent___parent___children",
  parent___parent___children = "parent___parent___children",
  parent___parent___children___id = "parent___parent___children___id",
  parent___parent___children___children = "parent___parent___children___children",
  parent___parent___internal___content = "parent___parent___internal___content",
  parent___parent___internal___contentDigest = "parent___parent___internal___contentDigest",
  parent___parent___internal___description = "parent___parent___internal___description",
  parent___parent___internal___fieldOwners = "parent___parent___internal___fieldOwners",
  parent___parent___internal___ignoreType = "parent___parent___internal___ignoreType",
  parent___parent___internal___mediaType = "parent___parent___internal___mediaType",
  parent___parent___internal___owner = "parent___parent___internal___owner",
  parent___parent___internal___type = "parent___parent___internal___type",
  parent___children = "parent___children",
  parent___children___id = "parent___children___id",
  parent___children___parent___id = "parent___children___parent___id",
  parent___children___parent___children = "parent___children___parent___children",
  parent___children___children = "parent___children___children",
  parent___children___children___id = "parent___children___children___id",
  parent___children___children___children = "parent___children___children___children",
  parent___children___internal___content = "parent___children___internal___content",
  parent___children___internal___contentDigest = "parent___children___internal___contentDigest",
  parent___children___internal___description = "parent___children___internal___description",
  parent___children___internal___fieldOwners = "parent___children___internal___fieldOwners",
  parent___children___internal___ignoreType = "parent___children___internal___ignoreType",
  parent___children___internal___mediaType = "parent___children___internal___mediaType",
  parent___children___internal___owner = "parent___children___internal___owner",
  parent___children___internal___type = "parent___children___internal___type",
  parent___internal___content = "parent___internal___content",
  parent___internal___contentDigest = "parent___internal___contentDigest",
  parent___internal___description = "parent___internal___description",
  parent___internal___fieldOwners = "parent___internal___fieldOwners",
  parent___internal___ignoreType = "parent___internal___ignoreType",
  parent___internal___mediaType = "parent___internal___mediaType",
  parent___internal___owner = "parent___internal___owner",
  parent___internal___type = "parent___internal___type",
  children = "children",
  children___id = "children___id",
  children___parent___id = "children___parent___id",
  children___parent___parent___id = "children___parent___parent___id",
  children___parent___parent___children = "children___parent___parent___children",
  children___parent___children = "children___parent___children",
  children___parent___children___id = "children___parent___children___id",
  children___parent___children___children = "children___parent___children___children",
  children___parent___internal___content = "children___parent___internal___content",
  children___parent___internal___contentDigest = "children___parent___internal___contentDigest",
  children___parent___internal___description = "children___parent___internal___description",
  children___parent___internal___fieldOwners = "children___parent___internal___fieldOwners",
  children___parent___internal___ignoreType = "children___parent___internal___ignoreType",
  children___parent___internal___mediaType = "children___parent___internal___mediaType",
  children___parent___internal___owner = "children___parent___internal___owner",
  children___parent___internal___type = "children___parent___internal___type",
  children___children = "children___children",
  children___children___id = "children___children___id",
  children___children___parent___id = "children___children___parent___id",
  children___children___parent___children = "children___children___parent___children",
  children___children___children = "children___children___children",
  children___children___children___id = "children___children___children___id",
  children___children___children___children = "children___children___children___children",
  children___children___internal___content = "children___children___internal___content",
  children___children___internal___contentDigest = "children___children___internal___contentDigest",
  children___children___internal___description = "children___children___internal___description",
  children___children___internal___fieldOwners = "children___children___internal___fieldOwners",
  children___children___internal___ignoreType = "children___children___internal___ignoreType",
  children___children___internal___mediaType = "children___children___internal___mediaType",
  children___children___internal___owner = "children___children___internal___owner",
  children___children___internal___type = "children___children___internal___type",
  children___internal___content = "children___internal___content",
  children___internal___contentDigest = "children___internal___contentDigest",
  children___internal___description = "children___internal___description",
  children___internal___fieldOwners = "children___internal___fieldOwners",
  children___internal___ignoreType = "children___internal___ignoreType",
  children___internal___mediaType = "children___internal___mediaType",
  children___internal___owner = "children___internal___owner",
  children___internal___type = "children___internal___type",
  internal___content = "internal___content",
  internal___contentDigest = "internal___contentDigest",
  internal___description = "internal___description",
  internal___fieldOwners = "internal___fieldOwners",
  internal___ignoreType = "internal___ignoreType",
  internal___mediaType = "internal___mediaType",
  internal___owner = "internal___owner",
  internal___type = "internal___type",
}

export type SiteConnection = {
  __typename?: "SiteConnection";
  totalCount: Scalars["Int"];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  distinct: Array<Scalars["String"]>;
  group: Array<SiteGroupConnection>;
};

export type SiteConnectionDistinctArgs = {
  field: SiteFieldsEnum;
};

export type SiteConnectionGroupArgs = {
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
  field: SiteFieldsEnum;
};

export type SiteEdge = {
  __typename?: "SiteEdge";
  next?: Maybe<Site>;
  node: Site;
  previous?: Maybe<Site>;
};

export type SiteGroupConnection = {
  __typename?: "SiteGroupConnection";
  totalCount: Scalars["Int"];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  field: Scalars["String"];
  fieldValue?: Maybe<Scalars["String"]>;
};

export type ImageSharpSortInput = {
  fields?: Maybe<Array<Maybe<ImageSharpFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export enum ImageSharpFieldsEnum {
  fixed___base64 = "fixed___base64",
  fixed___tracedSVG = "fixed___tracedSVG",
  fixed___aspectRatio = "fixed___aspectRatio",
  fixed___width = "fixed___width",
  fixed___height = "fixed___height",
  fixed___src = "fixed___src",
  fixed___srcSet = "fixed___srcSet",
  fixed___srcWebp = "fixed___srcWebp",
  fixed___srcSetWebp = "fixed___srcSetWebp",
  fixed___originalName = "fixed___originalName",
  resolutions___base64 = "resolutions___base64",
  resolutions___tracedSVG = "resolutions___tracedSVG",
  resolutions___aspectRatio = "resolutions___aspectRatio",
  resolutions___width = "resolutions___width",
  resolutions___height = "resolutions___height",
  resolutions___src = "resolutions___src",
  resolutions___srcSet = "resolutions___srcSet",
  resolutions___srcWebp = "resolutions___srcWebp",
  resolutions___srcSetWebp = "resolutions___srcSetWebp",
  resolutions___originalName = "resolutions___originalName",
  fluid___base64 = "fluid___base64",
  fluid___tracedSVG = "fluid___tracedSVG",
  fluid___aspectRatio = "fluid___aspectRatio",
  fluid___src = "fluid___src",
  fluid___srcSet = "fluid___srcSet",
  fluid___srcWebp = "fluid___srcWebp",
  fluid___srcSetWebp = "fluid___srcSetWebp",
  fluid___sizes = "fluid___sizes",
  fluid___originalImg = "fluid___originalImg",
  fluid___originalName = "fluid___originalName",
  fluid___presentationWidth = "fluid___presentationWidth",
  fluid___presentationHeight = "fluid___presentationHeight",
  sizes___base64 = "sizes___base64",
  sizes___tracedSVG = "sizes___tracedSVG",
  sizes___aspectRatio = "sizes___aspectRatio",
  sizes___src = "sizes___src",
  sizes___srcSet = "sizes___srcSet",
  sizes___srcWebp = "sizes___srcWebp",
  sizes___srcSetWebp = "sizes___srcSetWebp",
  sizes___sizes = "sizes___sizes",
  sizes___originalImg = "sizes___originalImg",
  sizes___originalName = "sizes___originalName",
  sizes___presentationWidth = "sizes___presentationWidth",
  sizes___presentationHeight = "sizes___presentationHeight",
  original___width = "original___width",
  original___height = "original___height",
  original___src = "original___src",
  resize___src = "resize___src",
  resize___tracedSVG = "resize___tracedSVG",
  resize___width = "resize___width",
  resize___height = "resize___height",
  resize___aspectRatio = "resize___aspectRatio",
  resize___originalName = "resize___originalName",
  id = "id",
  parent___id = "parent___id",
  parent___parent___id = "parent___parent___id",
  parent___parent___parent___id = "parent___parent___parent___id",
  parent___parent___parent___children = "parent___parent___parent___children",
  parent___parent___children = "parent___parent___children",
  parent___parent___children___id = "parent___parent___children___id",
  parent___parent___children___children = "parent___parent___children___children",
  parent___parent___internal___content = "parent___parent___internal___content",
  parent___parent___internal___contentDigest = "parent___parent___internal___contentDigest",
  parent___parent___internal___description = "parent___parent___internal___description",
  parent___parent___internal___fieldOwners = "parent___parent___internal___fieldOwners",
  parent___parent___internal___ignoreType = "parent___parent___internal___ignoreType",
  parent___parent___internal___mediaType = "parent___parent___internal___mediaType",
  parent___parent___internal___owner = "parent___parent___internal___owner",
  parent___parent___internal___type = "parent___parent___internal___type",
  parent___children = "parent___children",
  parent___children___id = "parent___children___id",
  parent___children___parent___id = "parent___children___parent___id",
  parent___children___parent___children = "parent___children___parent___children",
  parent___children___children = "parent___children___children",
  parent___children___children___id = "parent___children___children___id",
  parent___children___children___children = "parent___children___children___children",
  parent___children___internal___content = "parent___children___internal___content",
  parent___children___internal___contentDigest = "parent___children___internal___contentDigest",
  parent___children___internal___description = "parent___children___internal___description",
  parent___children___internal___fieldOwners = "parent___children___internal___fieldOwners",
  parent___children___internal___ignoreType = "parent___children___internal___ignoreType",
  parent___children___internal___mediaType = "parent___children___internal___mediaType",
  parent___children___internal___owner = "parent___children___internal___owner",
  parent___children___internal___type = "parent___children___internal___type",
  parent___internal___content = "parent___internal___content",
  parent___internal___contentDigest = "parent___internal___contentDigest",
  parent___internal___description = "parent___internal___description",
  parent___internal___fieldOwners = "parent___internal___fieldOwners",
  parent___internal___ignoreType = "parent___internal___ignoreType",
  parent___internal___mediaType = "parent___internal___mediaType",
  parent___internal___owner = "parent___internal___owner",
  parent___internal___type = "parent___internal___type",
  children = "children",
  children___id = "children___id",
  children___parent___id = "children___parent___id",
  children___parent___parent___id = "children___parent___parent___id",
  children___parent___parent___children = "children___parent___parent___children",
  children___parent___children = "children___parent___children",
  children___parent___children___id = "children___parent___children___id",
  children___parent___children___children = "children___parent___children___children",
  children___parent___internal___content = "children___parent___internal___content",
  children___parent___internal___contentDigest = "children___parent___internal___contentDigest",
  children___parent___internal___description = "children___parent___internal___description",
  children___parent___internal___fieldOwners = "children___parent___internal___fieldOwners",
  children___parent___internal___ignoreType = "children___parent___internal___ignoreType",
  children___parent___internal___mediaType = "children___parent___internal___mediaType",
  children___parent___internal___owner = "children___parent___internal___owner",
  children___parent___internal___type = "children___parent___internal___type",
  children___children = "children___children",
  children___children___id = "children___children___id",
  children___children___parent___id = "children___children___parent___id",
  children___children___parent___children = "children___children___parent___children",
  children___children___children = "children___children___children",
  children___children___children___id = "children___children___children___id",
  children___children___children___children = "children___children___children___children",
  children___children___internal___content = "children___children___internal___content",
  children___children___internal___contentDigest = "children___children___internal___contentDigest",
  children___children___internal___description = "children___children___internal___description",
  children___children___internal___fieldOwners = "children___children___internal___fieldOwners",
  children___children___internal___ignoreType = "children___children___internal___ignoreType",
  children___children___internal___mediaType = "children___children___internal___mediaType",
  children___children___internal___owner = "children___children___internal___owner",
  children___children___internal___type = "children___children___internal___type",
  children___internal___content = "children___internal___content",
  children___internal___contentDigest = "children___internal___contentDigest",
  children___internal___description = "children___internal___description",
  children___internal___fieldOwners = "children___internal___fieldOwners",
  children___internal___ignoreType = "children___internal___ignoreType",
  children___internal___mediaType = "children___internal___mediaType",
  children___internal___owner = "children___internal___owner",
  children___internal___type = "children___internal___type",
  internal___content = "internal___content",
  internal___contentDigest = "internal___contentDigest",
  internal___description = "internal___description",
  internal___fieldOwners = "internal___fieldOwners",
  internal___ignoreType = "internal___ignoreType",
  internal___mediaType = "internal___mediaType",
  internal___owner = "internal___owner",
  internal___type = "internal___type",
}

export type ImageSharpConnection = {
  __typename?: "ImageSharpConnection";
  totalCount: Scalars["Int"];
  edges: Array<ImageSharpEdge>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  distinct: Array<Scalars["String"]>;
  group: Array<ImageSharpGroupConnection>;
};

export type ImageSharpConnectionDistinctArgs = {
  field: ImageSharpFieldsEnum;
};

export type ImageSharpConnectionGroupArgs = {
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
  field: ImageSharpFieldsEnum;
};

export type ImageSharpEdge = {
  __typename?: "ImageSharpEdge";
  next?: Maybe<ImageSharp>;
  node: ImageSharp;
  previous?: Maybe<ImageSharp>;
};

export type ImageSharpGroupConnection = {
  __typename?: "ImageSharpGroupConnection";
  totalCount: Scalars["Int"];
  edges: Array<ImageSharpEdge>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  field: Scalars["String"];
  fieldValue?: Maybe<Scalars["String"]>;
};

export type ContentfulAssetFileFilterInput = {
  url?: Maybe<StringQueryOperatorInput>;
  details?: Maybe<ContentfulAssetFileDetailsFilterInput>;
  fileName?: Maybe<StringQueryOperatorInput>;
  contentType?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulAssetFileDetailsFilterInput = {
  size?: Maybe<IntQueryOperatorInput>;
  image?: Maybe<ContentfulAssetFileDetailsImageFilterInput>;
};

export type ContentfulAssetFileDetailsImageFilterInput = {
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
};

export type ContentfulFixedFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulResolutionsFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulFluidFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulSizesFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulResizeFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
};

export type ContentfulAsset = Node & {
  __typename?: "ContentfulAsset";
  id: Scalars["ID"];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  contentful_id?: Maybe<Scalars["String"]>;
  file?: Maybe<ContentfulAssetFile>;
  title?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  node_locale?: Maybe<Scalars["String"]>;
  fixed?: Maybe<ContentfulFixed>;
  /** @deprecated Resolutions was deprecated in Gatsby v2. It's been renamed to "fixed" https://example.com/write-docs-and-fix-this-example-link */
  resolutions?: Maybe<ContentfulResolutions>;
  fluid?: Maybe<ContentfulFluid>;
  /** @deprecated Sizes was deprecated in Gatsby v2. It's been renamed to "fluid" https://example.com/write-docs-and-fix-this-example-link */
  sizes?: Maybe<ContentfulSizes>;
  resize?: Maybe<ContentfulResize>;
};

export type ContentfulAssetFixedArgs = {
  width?: Maybe<Scalars["Int"]>;
  height?: Maybe<Scalars["Int"]>;
  quality?: Maybe<Scalars["Int"]>;
  toFormat?: Maybe<ContentfulImageFormat>;
  resizingBehavior?: Maybe<ImageResizingBehavior>;
  cropFocus?: Maybe<ContentfulImageCropFocus>;
  background?: Maybe<Scalars["String"]>;
};

export type ContentfulAssetResolutionsArgs = {
  width?: Maybe<Scalars["Int"]>;
  height?: Maybe<Scalars["Int"]>;
  quality?: Maybe<Scalars["Int"]>;
  toFormat?: Maybe<ContentfulImageFormat>;
  resizingBehavior?: Maybe<ImageResizingBehavior>;
  cropFocus?: Maybe<ContentfulImageCropFocus>;
  background?: Maybe<Scalars["String"]>;
};

export type ContentfulAssetFluidArgs = {
  maxWidth?: Maybe<Scalars["Int"]>;
  maxHeight?: Maybe<Scalars["Int"]>;
  quality?: Maybe<Scalars["Int"]>;
  toFormat?: Maybe<ContentfulImageFormat>;
  resizingBehavior?: Maybe<ImageResizingBehavior>;
  cropFocus?: Maybe<ContentfulImageCropFocus>;
  background?: Maybe<Scalars["String"]>;
  sizes?: Maybe<Scalars["String"]>;
};

export type ContentfulAssetSizesArgs = {
  maxWidth?: Maybe<Scalars["Int"]>;
  maxHeight?: Maybe<Scalars["Int"]>;
  quality?: Maybe<Scalars["Int"]>;
  toFormat?: Maybe<ContentfulImageFormat>;
  resizingBehavior?: Maybe<ImageResizingBehavior>;
  cropFocus?: Maybe<ContentfulImageCropFocus>;
  background?: Maybe<Scalars["String"]>;
  sizes?: Maybe<Scalars["String"]>;
};

export type ContentfulAssetResizeArgs = {
  width?: Maybe<Scalars["Int"]>;
  height?: Maybe<Scalars["Int"]>;
  quality?: Maybe<Scalars["Int"]>;
  jpegProgressive?: Maybe<Scalars["Boolean"]>;
  resizingBehavior?: Maybe<ImageResizingBehavior>;
  toFormat?: Maybe<ContentfulImageFormat>;
  cropFocus?: Maybe<ContentfulImageCropFocus>;
  background?: Maybe<Scalars["String"]>;
};

export type ContentfulAssetFile = {
  __typename?: "ContentfulAssetFile";
  url?: Maybe<Scalars["String"]>;
  details?: Maybe<ContentfulAssetFileDetails>;
  fileName?: Maybe<Scalars["String"]>;
  contentType?: Maybe<Scalars["String"]>;
};

export type ContentfulAssetFileDetails = {
  __typename?: "ContentfulAssetFileDetails";
  size?: Maybe<Scalars["Int"]>;
  image?: Maybe<ContentfulAssetFileDetailsImage>;
};

export type ContentfulAssetFileDetailsImage = {
  __typename?: "ContentfulAssetFileDetailsImage";
  width?: Maybe<Scalars["Int"]>;
  height?: Maybe<Scalars["Int"]>;
};

export enum ContentfulImageFormat {
  NO_CHANGE = "NO_CHANGE",
  JPG = "JPG",
  PNG = "PNG",
  WEBP = "WEBP",
}

export enum ImageResizingBehavior {
  NO_CHANGE = "NO_CHANGE",
  /** Same as the default resizing, but adds padding so that the generated image has the specified dimensions. */
  PAD = "PAD",
  /** Crop a part of the original image to match the specified size. */
  CROP = "CROP",
  /** Crop the image to the specified dimensions, if the original image is smaller than these dimensions, then the image will be upscaled. */
  FILL = "FILL",
  /** When used in association with the f parameter below, creates a thumbnail from the image based on a focus area. */
  THUMB = "THUMB",
  /** Scale the image regardless of the original aspect ratio. */
  SCALE = "SCALE",
}

export enum ContentfulImageCropFocus {
  TOP = "TOP",
  TOP_LEFT = "TOP_LEFT",
  TOP_RIGHT = "TOP_RIGHT",
  BOTTOM = "BOTTOM",
  BOTTOM_RIGHT = "BOTTOM_RIGHT",
  BOTTOM_LEFT = "BOTTOM_LEFT",
  RIGHT = "RIGHT",
  LEFT = "LEFT",
  FACE = "FACE",
  FACES = "FACES",
  CENTER = "CENTER",
}

export type ContentfulFixed = {
  __typename?: "ContentfulFixed";
  base64?: Maybe<Scalars["String"]>;
  tracedSVG?: Maybe<Scalars["String"]>;
  aspectRatio?: Maybe<Scalars["Float"]>;
  width: Scalars["Float"];
  height: Scalars["Float"];
  src: Scalars["String"];
  srcSet: Scalars["String"];
  srcWebp?: Maybe<Scalars["String"]>;
  srcSetWebp?: Maybe<Scalars["String"]>;
};

export type ContentfulResolutions = {
  __typename?: "ContentfulResolutions";
  base64?: Maybe<Scalars["String"]>;
  tracedSVG?: Maybe<Scalars["String"]>;
  aspectRatio?: Maybe<Scalars["Float"]>;
  width: Scalars["Float"];
  height: Scalars["Float"];
  src: Scalars["String"];
  srcSet: Scalars["String"];
  srcWebp?: Maybe<Scalars["String"]>;
  srcSetWebp?: Maybe<Scalars["String"]>;
};

export type ContentfulFluid = {
  __typename?: "ContentfulFluid";
  base64?: Maybe<Scalars["String"]>;
  tracedSVG?: Maybe<Scalars["String"]>;
  aspectRatio: Scalars["Float"];
  src: Scalars["String"];
  srcSet: Scalars["String"];
  srcWebp?: Maybe<Scalars["String"]>;
  srcSetWebp?: Maybe<Scalars["String"]>;
  sizes: Scalars["String"];
};

export type ContentfulSizes = {
  __typename?: "ContentfulSizes";
  base64?: Maybe<Scalars["String"]>;
  tracedSVG?: Maybe<Scalars["String"]>;
  aspectRatio: Scalars["Float"];
  src: Scalars["String"];
  srcSet: Scalars["String"];
  srcWebp?: Maybe<Scalars["String"]>;
  srcSetWebp?: Maybe<Scalars["String"]>;
  sizes: Scalars["String"];
};

export type ContentfulResize = {
  __typename?: "ContentfulResize";
  base64?: Maybe<Scalars["String"]>;
  tracedSVG?: Maybe<Scalars["String"]>;
  src?: Maybe<Scalars["String"]>;
  width?: Maybe<Scalars["Int"]>;
  height?: Maybe<Scalars["Int"]>;
  aspectRatio?: Maybe<Scalars["Float"]>;
};

export type ContentfulAssetFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  file?: Maybe<ContentfulAssetFileFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  fixed?: Maybe<ContentfulFixedFilterInput>;
  resolutions?: Maybe<ContentfulResolutionsFilterInput>;
  fluid?: Maybe<ContentfulFluidFilterInput>;
  sizes?: Maybe<ContentfulSizesFilterInput>;
  resize?: Maybe<ContentfulResizeFilterInput>;
};

export type ContentfulAssetSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulAssetFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export enum ContentfulAssetFieldsEnum {
  id = "id",
  parent___id = "parent___id",
  parent___parent___id = "parent___parent___id",
  parent___parent___parent___id = "parent___parent___parent___id",
  parent___parent___parent___children = "parent___parent___parent___children",
  parent___parent___children = "parent___parent___children",
  parent___parent___children___id = "parent___parent___children___id",
  parent___parent___children___children = "parent___parent___children___children",
  parent___parent___internal___content = "parent___parent___internal___content",
  parent___parent___internal___contentDigest = "parent___parent___internal___contentDigest",
  parent___parent___internal___description = "parent___parent___internal___description",
  parent___parent___internal___fieldOwners = "parent___parent___internal___fieldOwners",
  parent___parent___internal___ignoreType = "parent___parent___internal___ignoreType",
  parent___parent___internal___mediaType = "parent___parent___internal___mediaType",
  parent___parent___internal___owner = "parent___parent___internal___owner",
  parent___parent___internal___type = "parent___parent___internal___type",
  parent___children = "parent___children",
  parent___children___id = "parent___children___id",
  parent___children___parent___id = "parent___children___parent___id",
  parent___children___parent___children = "parent___children___parent___children",
  parent___children___children = "parent___children___children",
  parent___children___children___id = "parent___children___children___id",
  parent___children___children___children = "parent___children___children___children",
  parent___children___internal___content = "parent___children___internal___content",
  parent___children___internal___contentDigest = "parent___children___internal___contentDigest",
  parent___children___internal___description = "parent___children___internal___description",
  parent___children___internal___fieldOwners = "parent___children___internal___fieldOwners",
  parent___children___internal___ignoreType = "parent___children___internal___ignoreType",
  parent___children___internal___mediaType = "parent___children___internal___mediaType",
  parent___children___internal___owner = "parent___children___internal___owner",
  parent___children___internal___type = "parent___children___internal___type",
  parent___internal___content = "parent___internal___content",
  parent___internal___contentDigest = "parent___internal___contentDigest",
  parent___internal___description = "parent___internal___description",
  parent___internal___fieldOwners = "parent___internal___fieldOwners",
  parent___internal___ignoreType = "parent___internal___ignoreType",
  parent___internal___mediaType = "parent___internal___mediaType",
  parent___internal___owner = "parent___internal___owner",
  parent___internal___type = "parent___internal___type",
  children = "children",
  children___id = "children___id",
  children___parent___id = "children___parent___id",
  children___parent___parent___id = "children___parent___parent___id",
  children___parent___parent___children = "children___parent___parent___children",
  children___parent___children = "children___parent___children",
  children___parent___children___id = "children___parent___children___id",
  children___parent___children___children = "children___parent___children___children",
  children___parent___internal___content = "children___parent___internal___content",
  children___parent___internal___contentDigest = "children___parent___internal___contentDigest",
  children___parent___internal___description = "children___parent___internal___description",
  children___parent___internal___fieldOwners = "children___parent___internal___fieldOwners",
  children___parent___internal___ignoreType = "children___parent___internal___ignoreType",
  children___parent___internal___mediaType = "children___parent___internal___mediaType",
  children___parent___internal___owner = "children___parent___internal___owner",
  children___parent___internal___type = "children___parent___internal___type",
  children___children = "children___children",
  children___children___id = "children___children___id",
  children___children___parent___id = "children___children___parent___id",
  children___children___parent___children = "children___children___parent___children",
  children___children___children = "children___children___children",
  children___children___children___id = "children___children___children___id",
  children___children___children___children = "children___children___children___children",
  children___children___internal___content = "children___children___internal___content",
  children___children___internal___contentDigest = "children___children___internal___contentDigest",
  children___children___internal___description = "children___children___internal___description",
  children___children___internal___fieldOwners = "children___children___internal___fieldOwners",
  children___children___internal___ignoreType = "children___children___internal___ignoreType",
  children___children___internal___mediaType = "children___children___internal___mediaType",
  children___children___internal___owner = "children___children___internal___owner",
  children___children___internal___type = "children___children___internal___type",
  children___internal___content = "children___internal___content",
  children___internal___contentDigest = "children___internal___contentDigest",
  children___internal___description = "children___internal___description",
  children___internal___fieldOwners = "children___internal___fieldOwners",
  children___internal___ignoreType = "children___internal___ignoreType",
  children___internal___mediaType = "children___internal___mediaType",
  children___internal___owner = "children___internal___owner",
  children___internal___type = "children___internal___type",
  internal___content = "internal___content",
  internal___contentDigest = "internal___contentDigest",
  internal___description = "internal___description",
  internal___fieldOwners = "internal___fieldOwners",
  internal___ignoreType = "internal___ignoreType",
  internal___mediaType = "internal___mediaType",
  internal___owner = "internal___owner",
  internal___type = "internal___type",
  contentful_id = "contentful_id",
  file___url = "file___url",
  file___details___size = "file___details___size",
  file___details___image___width = "file___details___image___width",
  file___details___image___height = "file___details___image___height",
  file___fileName = "file___fileName",
  file___contentType = "file___contentType",
  title = "title",
  description = "description",
  node_locale = "node_locale",
  fixed___base64 = "fixed___base64",
  fixed___tracedSVG = "fixed___tracedSVG",
  fixed___aspectRatio = "fixed___aspectRatio",
  fixed___width = "fixed___width",
  fixed___height = "fixed___height",
  fixed___src = "fixed___src",
  fixed___srcSet = "fixed___srcSet",
  fixed___srcWebp = "fixed___srcWebp",
  fixed___srcSetWebp = "fixed___srcSetWebp",
  resolutions___base64 = "resolutions___base64",
  resolutions___tracedSVG = "resolutions___tracedSVG",
  resolutions___aspectRatio = "resolutions___aspectRatio",
  resolutions___width = "resolutions___width",
  resolutions___height = "resolutions___height",
  resolutions___src = "resolutions___src",
  resolutions___srcSet = "resolutions___srcSet",
  resolutions___srcWebp = "resolutions___srcWebp",
  resolutions___srcSetWebp = "resolutions___srcSetWebp",
  fluid___base64 = "fluid___base64",
  fluid___tracedSVG = "fluid___tracedSVG",
  fluid___aspectRatio = "fluid___aspectRatio",
  fluid___src = "fluid___src",
  fluid___srcSet = "fluid___srcSet",
  fluid___srcWebp = "fluid___srcWebp",
  fluid___srcSetWebp = "fluid___srcSetWebp",
  fluid___sizes = "fluid___sizes",
  sizes___base64 = "sizes___base64",
  sizes___tracedSVG = "sizes___tracedSVG",
  sizes___aspectRatio = "sizes___aspectRatio",
  sizes___src = "sizes___src",
  sizes___srcSet = "sizes___srcSet",
  sizes___srcWebp = "sizes___srcWebp",
  sizes___srcSetWebp = "sizes___srcSetWebp",
  sizes___sizes = "sizes___sizes",
  resize___base64 = "resize___base64",
  resize___tracedSVG = "resize___tracedSVG",
  resize___src = "resize___src",
  resize___width = "resize___width",
  resize___height = "resize___height",
  resize___aspectRatio = "resize___aspectRatio",
}

export type ContentfulAssetConnection = {
  __typename?: "ContentfulAssetConnection";
  totalCount: Scalars["Int"];
  edges: Array<ContentfulAssetEdge>;
  nodes: Array<ContentfulAsset>;
  pageInfo: PageInfo;
  distinct: Array<Scalars["String"]>;
  group: Array<ContentfulAssetGroupConnection>;
};

export type ContentfulAssetConnectionDistinctArgs = {
  field: ContentfulAssetFieldsEnum;
};

export type ContentfulAssetConnectionGroupArgs = {
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
  field: ContentfulAssetFieldsEnum;
};

export type ContentfulAssetEdge = {
  __typename?: "ContentfulAssetEdge";
  next?: Maybe<ContentfulAsset>;
  node: ContentfulAsset;
  previous?: Maybe<ContentfulAsset>;
};

export type ContentfulAssetGroupConnection = {
  __typename?: "ContentfulAssetGroupConnection";
  totalCount: Scalars["Int"];
  edges: Array<ContentfulAssetEdge>;
  nodes: Array<ContentfulAsset>;
  pageInfo: PageInfo;
  field: Scalars["String"];
  fieldValue?: Maybe<Scalars["String"]>;
};

export type ContentfulPoleFilterListInput = {
  elemMatch?: Maybe<ContentfulPoleFilterInput>;
};

export type ContentfulPoleFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  poleId?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  espace?: Maybe<ContentfulEspaceFilterInput>;
  cover?: Maybe<ContentfulAssetFilterInput>;
  post?: Maybe<ContentfulPostFilterListInput>;
  description?: Maybe<ContentfulPoleDescriptionRichTextNodeFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulPoleSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  childContentfulPoleDescriptionRichTextNode?: Maybe<ContentfulPoleDescriptionRichTextNodeFilterInput>;
};

export type ContentfulEspaceFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  espaceId?: Maybe<StringQueryOperatorInput>;
  frenchTitle?: Maybe<StringQueryOperatorInput>;
  chineseTitle?: Maybe<StringQueryOperatorInput>;
  pole?: Maybe<ContentfulPoleFilterListInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulEspaceSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulEspaceSysFilterInput = {
  revision?: Maybe<IntQueryOperatorInput>;
  contentType?: Maybe<ContentfulEspaceSysContentTypeFilterInput>;
};

export type ContentfulEspaceSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulEspaceSysContentTypeSysFilterInput>;
};

export type ContentfulEspaceSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  linkType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulPostFilterListInput = {
  elemMatch?: Maybe<ContentfulPostFilterInput>;
};

export type ContentfulPostFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  date?: Maybe<DateQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  pole?: Maybe<ContentfulPoleFilterInput>;
  image?: Maybe<ContentfulAssetFilterListInput>;
  content?: Maybe<ContentfulPostContentRichTextNodeFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulPostSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  author?: Maybe<StringQueryOperatorInput>;
  childContentfulPostContentRichTextNode?: Maybe<ContentfulPostContentRichTextNodeFilterInput>;
};

export type ContentfulAssetFilterListInput = {
  elemMatch?: Maybe<ContentfulAssetFilterInput>;
};

export type ContentfulPostContentRichTextNodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  content?: Maybe<StringQueryOperatorInput>;
  nodeType?: Maybe<StringQueryOperatorInput>;
  json?: Maybe<JsonQueryOperatorInput>;
  childContentfulRichText?: Maybe<ContentfulRichTextFilterInput>;
};

export type JsonQueryOperatorInput = {
  eq?: Maybe<Scalars["JSON"]>;
  ne?: Maybe<Scalars["JSON"]>;
  in?: Maybe<Array<Maybe<Scalars["JSON"]>>>;
  nin?: Maybe<Array<Maybe<Scalars["JSON"]>>>;
  regex?: Maybe<Scalars["JSON"]>;
  glob?: Maybe<Scalars["JSON"]>;
};

export type ContentfulRichTextFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  html?: Maybe<StringQueryOperatorInput>;
  timeToRead?: Maybe<IntQueryOperatorInput>;
};

export type ContentfulPostSysFilterInput = {
  contentType?: Maybe<ContentfulPostSysContentTypeFilterInput>;
  revision?: Maybe<IntQueryOperatorInput>;
};

export type ContentfulPostSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulPostSysContentTypeSysFilterInput>;
};

export type ContentfulPostSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  linkType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulPoleDescriptionRichTextNodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  content?: Maybe<ContentfulPoleDescriptionRichTextNodeContentFilterListInput>;
  nodeType?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  json?: Maybe<JsonQueryOperatorInput>;
  childContentfulRichText?: Maybe<ContentfulRichTextFilterInput>;
};

export type ContentfulPoleDescriptionRichTextNodeContentFilterListInput = {
  elemMatch?: Maybe<ContentfulPoleDescriptionRichTextNodeContentFilterInput>;
};

export type ContentfulPoleDescriptionRichTextNodeContentFilterInput = {
  content?: Maybe<ContentfulPoleDescriptionRichTextNodeContentContentFilterListInput>;
  nodeType?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulPoleDescriptionRichTextNodeContentContentFilterListInput = {
  elemMatch?: Maybe<ContentfulPoleDescriptionRichTextNodeContentContentFilterInput>;
};

export type ContentfulPoleDescriptionRichTextNodeContentContentFilterInput = {
  value?: Maybe<StringQueryOperatorInput>;
  nodeType?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulPoleSysFilterInput = {
  revision?: Maybe<IntQueryOperatorInput>;
  contentType?: Maybe<ContentfulPoleSysContentTypeFilterInput>;
};

export type ContentfulPoleSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulPoleSysContentTypeSysFilterInput>;
};

export type ContentfulPoleSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  linkType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulEspace = Node & {
  __typename?: "ContentfulEspace";
  id: Scalars["ID"];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  espaceId?: Maybe<Scalars["String"]>;
  frenchTitle?: Maybe<Scalars["String"]>;
  chineseTitle?: Maybe<Scalars["String"]>;
  pole?: Maybe<Array<Maybe<ContentfulPole>>>;
  spaceId?: Maybe<Scalars["String"]>;
  contentful_id?: Maybe<Scalars["String"]>;
  createdAt?: Maybe<Scalars["Date"]>;
  updatedAt?: Maybe<Scalars["Date"]>;
  sys?: Maybe<ContentfulEspaceSys>;
  node_locale?: Maybe<Scalars["String"]>;
};

export type ContentfulEspaceCreatedAtArgs = {
  formatString?: Maybe<Scalars["String"]>;
  fromNow?: Maybe<Scalars["Boolean"]>;
  difference?: Maybe<Scalars["String"]>;
  locale?: Maybe<Scalars["String"]>;
};

export type ContentfulEspaceUpdatedAtArgs = {
  formatString?: Maybe<Scalars["String"]>;
  fromNow?: Maybe<Scalars["Boolean"]>;
  difference?: Maybe<Scalars["String"]>;
  locale?: Maybe<Scalars["String"]>;
};

export type ContentfulPole = Node & {
  __typename?: "ContentfulPole";
  id: Scalars["ID"];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  poleId?: Maybe<Scalars["String"]>;
  title?: Maybe<Scalars["String"]>;
  slug?: Maybe<Scalars["String"]>;
  espace?: Maybe<ContentfulEspace>;
  cover?: Maybe<ContentfulAsset>;
  post?: Maybe<Array<Maybe<ContentfulPost>>>;
  description?: Maybe<ContentfulPoleDescriptionRichTextNode>;
  spaceId?: Maybe<Scalars["String"]>;
  contentful_id?: Maybe<Scalars["String"]>;
  createdAt?: Maybe<Scalars["Date"]>;
  updatedAt?: Maybe<Scalars["Date"]>;
  sys?: Maybe<ContentfulPoleSys>;
  node_locale?: Maybe<Scalars["String"]>;
  childContentfulPoleDescriptionRichTextNode?: Maybe<ContentfulPoleDescriptionRichTextNode>;
};

export type ContentfulPoleCreatedAtArgs = {
  formatString?: Maybe<Scalars["String"]>;
  fromNow?: Maybe<Scalars["Boolean"]>;
  difference?: Maybe<Scalars["String"]>;
  locale?: Maybe<Scalars["String"]>;
};

export type ContentfulPoleUpdatedAtArgs = {
  formatString?: Maybe<Scalars["String"]>;
  fromNow?: Maybe<Scalars["Boolean"]>;
  difference?: Maybe<Scalars["String"]>;
  locale?: Maybe<Scalars["String"]>;
};

export type ContentfulPost = Node & {
  __typename?: "ContentfulPost";
  id: Scalars["ID"];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  title?: Maybe<Scalars["String"]>;
  date?: Maybe<Scalars["Date"]>;
  slug?: Maybe<Scalars["String"]>;
  pole?: Maybe<ContentfulPole>;
  image?: Maybe<Array<Maybe<ContentfulAsset>>>;
  content?: Maybe<ContentfulPostContentRichTextNode>;
  spaceId?: Maybe<Scalars["String"]>;
  contentful_id?: Maybe<Scalars["String"]>;
  createdAt?: Maybe<Scalars["Date"]>;
  updatedAt?: Maybe<Scalars["Date"]>;
  sys?: Maybe<ContentfulPostSys>;
  node_locale?: Maybe<Scalars["String"]>;
  author?: Maybe<Scalars["String"]>;
  childContentfulPostContentRichTextNode?: Maybe<ContentfulPostContentRichTextNode>;
};

export type ContentfulPostDateArgs = {
  formatString?: Maybe<Scalars["String"]>;
  fromNow?: Maybe<Scalars["Boolean"]>;
  difference?: Maybe<Scalars["String"]>;
  locale?: Maybe<Scalars["String"]>;
};

export type ContentfulPostCreatedAtArgs = {
  formatString?: Maybe<Scalars["String"]>;
  fromNow?: Maybe<Scalars["Boolean"]>;
  difference?: Maybe<Scalars["String"]>;
  locale?: Maybe<Scalars["String"]>;
};

export type ContentfulPostUpdatedAtArgs = {
  formatString?: Maybe<Scalars["String"]>;
  fromNow?: Maybe<Scalars["Boolean"]>;
  difference?: Maybe<Scalars["String"]>;
  locale?: Maybe<Scalars["String"]>;
};

export type ContentfulPostContentRichTextNode = Node & {
  __typename?: "contentfulPostContentRichTextNode";
  id: Scalars["ID"];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  content?: Maybe<Scalars["String"]>;
  /** @deprecated This field is deprecated, please use 'json' instead. */
  nodeType?: Maybe<Scalars["String"]>;
  json?: Maybe<Scalars["JSON"]>;
  childContentfulRichText?: Maybe<ContentfulRichText>;
};

export type ContentfulRichText = Node & {
  __typename?: "ContentfulRichText";
  id: Scalars["ID"];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  html?: Maybe<Scalars["String"]>;
  timeToRead?: Maybe<Scalars["Int"]>;
};

export type ContentfulPostSys = {
  __typename?: "ContentfulPostSys";
  contentType?: Maybe<ContentfulPostSysContentType>;
  revision?: Maybe<Scalars["Int"]>;
};

export type ContentfulPostSysContentType = {
  __typename?: "ContentfulPostSysContentType";
  sys?: Maybe<ContentfulPostSysContentTypeSys>;
};

export type ContentfulPostSysContentTypeSys = {
  __typename?: "ContentfulPostSysContentTypeSys";
  type?: Maybe<Scalars["String"]>;
  linkType?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["String"]>;
  contentful_id?: Maybe<Scalars["String"]>;
};

export type ContentfulPoleDescriptionRichTextNode = Node & {
  __typename?: "contentfulPoleDescriptionRichTextNode";
  id: Scalars["ID"];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  content?: Maybe<Array<Maybe<ContentfulPoleDescriptionRichTextNodeContent>>>;
  /** @deprecated This field is deprecated, please use 'json' instead. */
  nodeType?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  json?: Maybe<Scalars["JSON"]>;
  childContentfulRichText?: Maybe<ContentfulRichText>;
};

export type ContentfulPoleDescriptionRichTextNodeContent = {
  __typename?: "contentfulPoleDescriptionRichTextNodeContent";
  content?: Maybe<Array<Maybe<ContentfulPoleDescriptionRichTextNodeContentContent>>>;
  nodeType?: Maybe<Scalars["String"]>;
};

export type ContentfulPoleDescriptionRichTextNodeContentContent = {
  __typename?: "contentfulPoleDescriptionRichTextNodeContentContent";
  value?: Maybe<Scalars["String"]>;
  nodeType?: Maybe<Scalars["String"]>;
};

export type ContentfulPoleSys = {
  __typename?: "ContentfulPoleSys";
  revision?: Maybe<Scalars["Int"]>;
  contentType?: Maybe<ContentfulPoleSysContentType>;
};

export type ContentfulPoleSysContentType = {
  __typename?: "ContentfulPoleSysContentType";
  sys?: Maybe<ContentfulPoleSysContentTypeSys>;
};

export type ContentfulPoleSysContentTypeSys = {
  __typename?: "ContentfulPoleSysContentTypeSys";
  type?: Maybe<Scalars["String"]>;
  linkType?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["String"]>;
  contentful_id?: Maybe<Scalars["String"]>;
};

export type ContentfulEspaceSys = {
  __typename?: "ContentfulEspaceSys";
  revision?: Maybe<Scalars["Int"]>;
  contentType?: Maybe<ContentfulEspaceSysContentType>;
};

export type ContentfulEspaceSysContentType = {
  __typename?: "ContentfulEspaceSysContentType";
  sys?: Maybe<ContentfulEspaceSysContentTypeSys>;
};

export type ContentfulEspaceSysContentTypeSys = {
  __typename?: "ContentfulEspaceSysContentTypeSys";
  type?: Maybe<Scalars["String"]>;
  linkType?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["String"]>;
  contentful_id?: Maybe<Scalars["String"]>;
};

export type ContentfulEspaceSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulEspaceFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export enum ContentfulEspaceFieldsEnum {
  id = "id",
  parent___id = "parent___id",
  parent___parent___id = "parent___parent___id",
  parent___parent___parent___id = "parent___parent___parent___id",
  parent___parent___parent___children = "parent___parent___parent___children",
  parent___parent___children = "parent___parent___children",
  parent___parent___children___id = "parent___parent___children___id",
  parent___parent___children___children = "parent___parent___children___children",
  parent___parent___internal___content = "parent___parent___internal___content",
  parent___parent___internal___contentDigest = "parent___parent___internal___contentDigest",
  parent___parent___internal___description = "parent___parent___internal___description",
  parent___parent___internal___fieldOwners = "parent___parent___internal___fieldOwners",
  parent___parent___internal___ignoreType = "parent___parent___internal___ignoreType",
  parent___parent___internal___mediaType = "parent___parent___internal___mediaType",
  parent___parent___internal___owner = "parent___parent___internal___owner",
  parent___parent___internal___type = "parent___parent___internal___type",
  parent___children = "parent___children",
  parent___children___id = "parent___children___id",
  parent___children___parent___id = "parent___children___parent___id",
  parent___children___parent___children = "parent___children___parent___children",
  parent___children___children = "parent___children___children",
  parent___children___children___id = "parent___children___children___id",
  parent___children___children___children = "parent___children___children___children",
  parent___children___internal___content = "parent___children___internal___content",
  parent___children___internal___contentDigest = "parent___children___internal___contentDigest",
  parent___children___internal___description = "parent___children___internal___description",
  parent___children___internal___fieldOwners = "parent___children___internal___fieldOwners",
  parent___children___internal___ignoreType = "parent___children___internal___ignoreType",
  parent___children___internal___mediaType = "parent___children___internal___mediaType",
  parent___children___internal___owner = "parent___children___internal___owner",
  parent___children___internal___type = "parent___children___internal___type",
  parent___internal___content = "parent___internal___content",
  parent___internal___contentDigest = "parent___internal___contentDigest",
  parent___internal___description = "parent___internal___description",
  parent___internal___fieldOwners = "parent___internal___fieldOwners",
  parent___internal___ignoreType = "parent___internal___ignoreType",
  parent___internal___mediaType = "parent___internal___mediaType",
  parent___internal___owner = "parent___internal___owner",
  parent___internal___type = "parent___internal___type",
  children = "children",
  children___id = "children___id",
  children___parent___id = "children___parent___id",
  children___parent___parent___id = "children___parent___parent___id",
  children___parent___parent___children = "children___parent___parent___children",
  children___parent___children = "children___parent___children",
  children___parent___children___id = "children___parent___children___id",
  children___parent___children___children = "children___parent___children___children",
  children___parent___internal___content = "children___parent___internal___content",
  children___parent___internal___contentDigest = "children___parent___internal___contentDigest",
  children___parent___internal___description = "children___parent___internal___description",
  children___parent___internal___fieldOwners = "children___parent___internal___fieldOwners",
  children___parent___internal___ignoreType = "children___parent___internal___ignoreType",
  children___parent___internal___mediaType = "children___parent___internal___mediaType",
  children___parent___internal___owner = "children___parent___internal___owner",
  children___parent___internal___type = "children___parent___internal___type",
  children___children = "children___children",
  children___children___id = "children___children___id",
  children___children___parent___id = "children___children___parent___id",
  children___children___parent___children = "children___children___parent___children",
  children___children___children = "children___children___children",
  children___children___children___id = "children___children___children___id",
  children___children___children___children = "children___children___children___children",
  children___children___internal___content = "children___children___internal___content",
  children___children___internal___contentDigest = "children___children___internal___contentDigest",
  children___children___internal___description = "children___children___internal___description",
  children___children___internal___fieldOwners = "children___children___internal___fieldOwners",
  children___children___internal___ignoreType = "children___children___internal___ignoreType",
  children___children___internal___mediaType = "children___children___internal___mediaType",
  children___children___internal___owner = "children___children___internal___owner",
  children___children___internal___type = "children___children___internal___type",
  children___internal___content = "children___internal___content",
  children___internal___contentDigest = "children___internal___contentDigest",
  children___internal___description = "children___internal___description",
  children___internal___fieldOwners = "children___internal___fieldOwners",
  children___internal___ignoreType = "children___internal___ignoreType",
  children___internal___mediaType = "children___internal___mediaType",
  children___internal___owner = "children___internal___owner",
  children___internal___type = "children___internal___type",
  internal___content = "internal___content",
  internal___contentDigest = "internal___contentDigest",
  internal___description = "internal___description",
  internal___fieldOwners = "internal___fieldOwners",
  internal___ignoreType = "internal___ignoreType",
  internal___mediaType = "internal___mediaType",
  internal___owner = "internal___owner",
  internal___type = "internal___type",
  espaceId = "espaceId",
  frenchTitle = "frenchTitle",
  chineseTitle = "chineseTitle",
  pole = "pole",
  pole___id = "pole___id",
  pole___parent___id = "pole___parent___id",
  pole___parent___parent___id = "pole___parent___parent___id",
  pole___parent___parent___children = "pole___parent___parent___children",
  pole___parent___children = "pole___parent___children",
  pole___parent___children___id = "pole___parent___children___id",
  pole___parent___children___children = "pole___parent___children___children",
  pole___parent___internal___content = "pole___parent___internal___content",
  pole___parent___internal___contentDigest = "pole___parent___internal___contentDigest",
  pole___parent___internal___description = "pole___parent___internal___description",
  pole___parent___internal___fieldOwners = "pole___parent___internal___fieldOwners",
  pole___parent___internal___ignoreType = "pole___parent___internal___ignoreType",
  pole___parent___internal___mediaType = "pole___parent___internal___mediaType",
  pole___parent___internal___owner = "pole___parent___internal___owner",
  pole___parent___internal___type = "pole___parent___internal___type",
  pole___children = "pole___children",
  pole___children___id = "pole___children___id",
  pole___children___parent___id = "pole___children___parent___id",
  pole___children___parent___children = "pole___children___parent___children",
  pole___children___children = "pole___children___children",
  pole___children___children___id = "pole___children___children___id",
  pole___children___children___children = "pole___children___children___children",
  pole___children___internal___content = "pole___children___internal___content",
  pole___children___internal___contentDigest = "pole___children___internal___contentDigest",
  pole___children___internal___description = "pole___children___internal___description",
  pole___children___internal___fieldOwners = "pole___children___internal___fieldOwners",
  pole___children___internal___ignoreType = "pole___children___internal___ignoreType",
  pole___children___internal___mediaType = "pole___children___internal___mediaType",
  pole___children___internal___owner = "pole___children___internal___owner",
  pole___children___internal___type = "pole___children___internal___type",
  pole___internal___content = "pole___internal___content",
  pole___internal___contentDigest = "pole___internal___contentDigest",
  pole___internal___description = "pole___internal___description",
  pole___internal___fieldOwners = "pole___internal___fieldOwners",
  pole___internal___ignoreType = "pole___internal___ignoreType",
  pole___internal___mediaType = "pole___internal___mediaType",
  pole___internal___owner = "pole___internal___owner",
  pole___internal___type = "pole___internal___type",
  pole___poleId = "pole___poleId",
  pole___title = "pole___title",
  pole___slug = "pole___slug",
  pole___espace___id = "pole___espace___id",
  pole___espace___parent___id = "pole___espace___parent___id",
  pole___espace___parent___children = "pole___espace___parent___children",
  pole___espace___children = "pole___espace___children",
  pole___espace___children___id = "pole___espace___children___id",
  pole___espace___children___children = "pole___espace___children___children",
  pole___espace___internal___content = "pole___espace___internal___content",
  pole___espace___internal___contentDigest = "pole___espace___internal___contentDigest",
  pole___espace___internal___description = "pole___espace___internal___description",
  pole___espace___internal___fieldOwners = "pole___espace___internal___fieldOwners",
  pole___espace___internal___ignoreType = "pole___espace___internal___ignoreType",
  pole___espace___internal___mediaType = "pole___espace___internal___mediaType",
  pole___espace___internal___owner = "pole___espace___internal___owner",
  pole___espace___internal___type = "pole___espace___internal___type",
  pole___espace___espaceId = "pole___espace___espaceId",
  pole___espace___frenchTitle = "pole___espace___frenchTitle",
  pole___espace___chineseTitle = "pole___espace___chineseTitle",
  pole___espace___pole = "pole___espace___pole",
  pole___espace___pole___id = "pole___espace___pole___id",
  pole___espace___pole___children = "pole___espace___pole___children",
  pole___espace___pole___poleId = "pole___espace___pole___poleId",
  pole___espace___pole___title = "pole___espace___pole___title",
  pole___espace___pole___slug = "pole___espace___pole___slug",
  pole___espace___pole___post = "pole___espace___pole___post",
  pole___espace___pole___spaceId = "pole___espace___pole___spaceId",
  pole___espace___pole___contentful_id = "pole___espace___pole___contentful_id",
  pole___espace___pole___createdAt = "pole___espace___pole___createdAt",
  pole___espace___pole___updatedAt = "pole___espace___pole___updatedAt",
  pole___espace___pole___node_locale = "pole___espace___pole___node_locale",
  pole___espace___spaceId = "pole___espace___spaceId",
  pole___espace___contentful_id = "pole___espace___contentful_id",
  pole___espace___createdAt = "pole___espace___createdAt",
  pole___espace___updatedAt = "pole___espace___updatedAt",
  pole___espace___sys___revision = "pole___espace___sys___revision",
  pole___espace___node_locale = "pole___espace___node_locale",
  pole___cover___id = "pole___cover___id",
  pole___cover___parent___id = "pole___cover___parent___id",
  pole___cover___parent___children = "pole___cover___parent___children",
  pole___cover___children = "pole___cover___children",
  pole___cover___children___id = "pole___cover___children___id",
  pole___cover___children___children = "pole___cover___children___children",
  pole___cover___internal___content = "pole___cover___internal___content",
  pole___cover___internal___contentDigest = "pole___cover___internal___contentDigest",
  pole___cover___internal___description = "pole___cover___internal___description",
  pole___cover___internal___fieldOwners = "pole___cover___internal___fieldOwners",
  pole___cover___internal___ignoreType = "pole___cover___internal___ignoreType",
  pole___cover___internal___mediaType = "pole___cover___internal___mediaType",
  pole___cover___internal___owner = "pole___cover___internal___owner",
  pole___cover___internal___type = "pole___cover___internal___type",
  pole___cover___contentful_id = "pole___cover___contentful_id",
  pole___cover___file___url = "pole___cover___file___url",
  pole___cover___file___fileName = "pole___cover___file___fileName",
  pole___cover___file___contentType = "pole___cover___file___contentType",
  pole___cover___title = "pole___cover___title",
  pole___cover___description = "pole___cover___description",
  pole___cover___node_locale = "pole___cover___node_locale",
  pole___cover___fixed___base64 = "pole___cover___fixed___base64",
  pole___cover___fixed___tracedSVG = "pole___cover___fixed___tracedSVG",
  pole___cover___fixed___aspectRatio = "pole___cover___fixed___aspectRatio",
  pole___cover___fixed___width = "pole___cover___fixed___width",
  pole___cover___fixed___height = "pole___cover___fixed___height",
  pole___cover___fixed___src = "pole___cover___fixed___src",
  pole___cover___fixed___srcSet = "pole___cover___fixed___srcSet",
  pole___cover___fixed___srcWebp = "pole___cover___fixed___srcWebp",
  pole___cover___fixed___srcSetWebp = "pole___cover___fixed___srcSetWebp",
  pole___cover___resolutions___base64 = "pole___cover___resolutions___base64",
  pole___cover___resolutions___tracedSVG = "pole___cover___resolutions___tracedSVG",
  pole___cover___resolutions___aspectRatio = "pole___cover___resolutions___aspectRatio",
  pole___cover___resolutions___width = "pole___cover___resolutions___width",
  pole___cover___resolutions___height = "pole___cover___resolutions___height",
  pole___cover___resolutions___src = "pole___cover___resolutions___src",
  pole___cover___resolutions___srcSet = "pole___cover___resolutions___srcSet",
  pole___cover___resolutions___srcWebp = "pole___cover___resolutions___srcWebp",
  pole___cover___resolutions___srcSetWebp = "pole___cover___resolutions___srcSetWebp",
  pole___cover___fluid___base64 = "pole___cover___fluid___base64",
  pole___cover___fluid___tracedSVG = "pole___cover___fluid___tracedSVG",
  pole___cover___fluid___aspectRatio = "pole___cover___fluid___aspectRatio",
  pole___cover___fluid___src = "pole___cover___fluid___src",
  pole___cover___fluid___srcSet = "pole___cover___fluid___srcSet",
  pole___cover___fluid___srcWebp = "pole___cover___fluid___srcWebp",
  pole___cover___fluid___srcSetWebp = "pole___cover___fluid___srcSetWebp",
  pole___cover___fluid___sizes = "pole___cover___fluid___sizes",
  pole___cover___sizes___base64 = "pole___cover___sizes___base64",
  pole___cover___sizes___tracedSVG = "pole___cover___sizes___tracedSVG",
  pole___cover___sizes___aspectRatio = "pole___cover___sizes___aspectRatio",
  pole___cover___sizes___src = "pole___cover___sizes___src",
  pole___cover___sizes___srcSet = "pole___cover___sizes___srcSet",
  pole___cover___sizes___srcWebp = "pole___cover___sizes___srcWebp",
  pole___cover___sizes___srcSetWebp = "pole___cover___sizes___srcSetWebp",
  pole___cover___sizes___sizes = "pole___cover___sizes___sizes",
  pole___cover___resize___base64 = "pole___cover___resize___base64",
  pole___cover___resize___tracedSVG = "pole___cover___resize___tracedSVG",
  pole___cover___resize___src = "pole___cover___resize___src",
  pole___cover___resize___width = "pole___cover___resize___width",
  pole___cover___resize___height = "pole___cover___resize___height",
  pole___cover___resize___aspectRatio = "pole___cover___resize___aspectRatio",
  pole___post = "pole___post",
  pole___post___id = "pole___post___id",
  pole___post___parent___id = "pole___post___parent___id",
  pole___post___parent___children = "pole___post___parent___children",
  pole___post___children = "pole___post___children",
  pole___post___children___id = "pole___post___children___id",
  pole___post___children___children = "pole___post___children___children",
  pole___post___internal___content = "pole___post___internal___content",
  pole___post___internal___contentDigest = "pole___post___internal___contentDigest",
  pole___post___internal___description = "pole___post___internal___description",
  pole___post___internal___fieldOwners = "pole___post___internal___fieldOwners",
  pole___post___internal___ignoreType = "pole___post___internal___ignoreType",
  pole___post___internal___mediaType = "pole___post___internal___mediaType",
  pole___post___internal___owner = "pole___post___internal___owner",
  pole___post___internal___type = "pole___post___internal___type",
  pole___post___title = "pole___post___title",
  pole___post___date = "pole___post___date",
  pole___post___slug = "pole___post___slug",
  pole___post___pole___id = "pole___post___pole___id",
  pole___post___pole___children = "pole___post___pole___children",
  pole___post___pole___poleId = "pole___post___pole___poleId",
  pole___post___pole___title = "pole___post___pole___title",
  pole___post___pole___slug = "pole___post___pole___slug",
  pole___post___pole___post = "pole___post___pole___post",
  pole___post___pole___spaceId = "pole___post___pole___spaceId",
  pole___post___pole___contentful_id = "pole___post___pole___contentful_id",
  pole___post___pole___createdAt = "pole___post___pole___createdAt",
  pole___post___pole___updatedAt = "pole___post___pole___updatedAt",
  pole___post___pole___node_locale = "pole___post___pole___node_locale",
  pole___post___image = "pole___post___image",
  pole___post___image___id = "pole___post___image___id",
  pole___post___image___children = "pole___post___image___children",
  pole___post___image___contentful_id = "pole___post___image___contentful_id",
  pole___post___image___title = "pole___post___image___title",
  pole___post___image___description = "pole___post___image___description",
  pole___post___image___node_locale = "pole___post___image___node_locale",
  pole___post___content___id = "pole___post___content___id",
  pole___post___content___children = "pole___post___content___children",
  pole___post___content___content = "pole___post___content___content",
  pole___post___content___nodeType = "pole___post___content___nodeType",
  pole___post___content___json = "pole___post___content___json",
  pole___post___spaceId = "pole___post___spaceId",
  pole___post___contentful_id = "pole___post___contentful_id",
  pole___post___createdAt = "pole___post___createdAt",
  pole___post___updatedAt = "pole___post___updatedAt",
  pole___post___sys___revision = "pole___post___sys___revision",
  pole___post___node_locale = "pole___post___node_locale",
  pole___post___author = "pole___post___author",
  pole___post___childContentfulPostContentRichTextNode___id = "pole___post___childContentfulPostContentRichTextNode___id",
  pole___post___childContentfulPostContentRichTextNode___children = "pole___post___childContentfulPostContentRichTextNode___children",
  pole___post___childContentfulPostContentRichTextNode___content = "pole___post___childContentfulPostContentRichTextNode___content",
  pole___post___childContentfulPostContentRichTextNode___nodeType = "pole___post___childContentfulPostContentRichTextNode___nodeType",
  pole___post___childContentfulPostContentRichTextNode___json = "pole___post___childContentfulPostContentRichTextNode___json",
  pole___description___id = "pole___description___id",
  pole___description___parent___id = "pole___description___parent___id",
  pole___description___parent___children = "pole___description___parent___children",
  pole___description___children = "pole___description___children",
  pole___description___children___id = "pole___description___children___id",
  pole___description___children___children = "pole___description___children___children",
  pole___description___internal___content = "pole___description___internal___content",
  pole___description___internal___contentDigest = "pole___description___internal___contentDigest",
  pole___description___internal___description = "pole___description___internal___description",
  pole___description___internal___fieldOwners = "pole___description___internal___fieldOwners",
  pole___description___internal___ignoreType = "pole___description___internal___ignoreType",
  pole___description___internal___mediaType = "pole___description___internal___mediaType",
  pole___description___internal___owner = "pole___description___internal___owner",
  pole___description___internal___type = "pole___description___internal___type",
  pole___description___content = "pole___description___content",
  pole___description___content___content = "pole___description___content___content",
  pole___description___content___nodeType = "pole___description___content___nodeType",
  pole___description___nodeType = "pole___description___nodeType",
  pole___description___description = "pole___description___description",
  pole___description___json = "pole___description___json",
  pole___description___childContentfulRichText___id = "pole___description___childContentfulRichText___id",
  pole___description___childContentfulRichText___children = "pole___description___childContentfulRichText___children",
  pole___description___childContentfulRichText___html = "pole___description___childContentfulRichText___html",
  pole___description___childContentfulRichText___timeToRead = "pole___description___childContentfulRichText___timeToRead",
  pole___spaceId = "pole___spaceId",
  pole___contentful_id = "pole___contentful_id",
  pole___createdAt = "pole___createdAt",
  pole___updatedAt = "pole___updatedAt",
  pole___sys___revision = "pole___sys___revision",
  pole___node_locale = "pole___node_locale",
  pole___childContentfulPoleDescriptionRichTextNode___id = "pole___childContentfulPoleDescriptionRichTextNode___id",
  pole___childContentfulPoleDescriptionRichTextNode___parent___id = "pole___childContentfulPoleDescriptionRichTextNode___parent___id",
  pole___childContentfulPoleDescriptionRichTextNode___parent___children = "pole___childContentfulPoleDescriptionRichTextNode___parent___children",
  pole___childContentfulPoleDescriptionRichTextNode___children = "pole___childContentfulPoleDescriptionRichTextNode___children",
  pole___childContentfulPoleDescriptionRichTextNode___children___id = "pole___childContentfulPoleDescriptionRichTextNode___children___id",
  pole___childContentfulPoleDescriptionRichTextNode___children___children = "pole___childContentfulPoleDescriptionRichTextNode___children___children",
  pole___childContentfulPoleDescriptionRichTextNode___internal___content = "pole___childContentfulPoleDescriptionRichTextNode___internal___content",
  pole___childContentfulPoleDescriptionRichTextNode___internal___contentDigest = "pole___childContentfulPoleDescriptionRichTextNode___internal___contentDigest",
  pole___childContentfulPoleDescriptionRichTextNode___internal___description = "pole___childContentfulPoleDescriptionRichTextNode___internal___description",
  pole___childContentfulPoleDescriptionRichTextNode___internal___fieldOwners = "pole___childContentfulPoleDescriptionRichTextNode___internal___fieldOwners",
  pole___childContentfulPoleDescriptionRichTextNode___internal___ignoreType = "pole___childContentfulPoleDescriptionRichTextNode___internal___ignoreType",
  pole___childContentfulPoleDescriptionRichTextNode___internal___mediaType = "pole___childContentfulPoleDescriptionRichTextNode___internal___mediaType",
  pole___childContentfulPoleDescriptionRichTextNode___internal___owner = "pole___childContentfulPoleDescriptionRichTextNode___internal___owner",
  pole___childContentfulPoleDescriptionRichTextNode___internal___type = "pole___childContentfulPoleDescriptionRichTextNode___internal___type",
  pole___childContentfulPoleDescriptionRichTextNode___content = "pole___childContentfulPoleDescriptionRichTextNode___content",
  pole___childContentfulPoleDescriptionRichTextNode___content___content = "pole___childContentfulPoleDescriptionRichTextNode___content___content",
  pole___childContentfulPoleDescriptionRichTextNode___content___nodeType = "pole___childContentfulPoleDescriptionRichTextNode___content___nodeType",
  pole___childContentfulPoleDescriptionRichTextNode___nodeType = "pole___childContentfulPoleDescriptionRichTextNode___nodeType",
  pole___childContentfulPoleDescriptionRichTextNode___description = "pole___childContentfulPoleDescriptionRichTextNode___description",
  pole___childContentfulPoleDescriptionRichTextNode___json = "pole___childContentfulPoleDescriptionRichTextNode___json",
  pole___childContentfulPoleDescriptionRichTextNode___childContentfulRichText___id = "pole___childContentfulPoleDescriptionRichTextNode___childContentfulRichText___id",
  pole___childContentfulPoleDescriptionRichTextNode___childContentfulRichText___children = "pole___childContentfulPoleDescriptionRichTextNode___childContentfulRichText___children",
  pole___childContentfulPoleDescriptionRichTextNode___childContentfulRichText___html = "pole___childContentfulPoleDescriptionRichTextNode___childContentfulRichText___html",
  pole___childContentfulPoleDescriptionRichTextNode___childContentfulRichText___timeToRead = "pole___childContentfulPoleDescriptionRichTextNode___childContentfulRichText___timeToRead",
  spaceId = "spaceId",
  contentful_id = "contentful_id",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  sys___revision = "sys___revision",
  sys___contentType___sys___type = "sys___contentType___sys___type",
  sys___contentType___sys___linkType = "sys___contentType___sys___linkType",
  sys___contentType___sys___id = "sys___contentType___sys___id",
  sys___contentType___sys___contentful_id = "sys___contentType___sys___contentful_id",
  node_locale = "node_locale",
}

export type ContentfulEspaceConnection = {
  __typename?: "ContentfulEspaceConnection";
  totalCount: Scalars["Int"];
  edges: Array<ContentfulEspaceEdge>;
  nodes: Array<ContentfulEspace>;
  pageInfo: PageInfo;
  distinct: Array<Scalars["String"]>;
  group: Array<ContentfulEspaceGroupConnection>;
};

export type ContentfulEspaceConnectionDistinctArgs = {
  field: ContentfulEspaceFieldsEnum;
};

export type ContentfulEspaceConnectionGroupArgs = {
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
  field: ContentfulEspaceFieldsEnum;
};

export type ContentfulEspaceEdge = {
  __typename?: "ContentfulEspaceEdge";
  next?: Maybe<ContentfulEspace>;
  node: ContentfulEspace;
  previous?: Maybe<ContentfulEspace>;
};

export type ContentfulEspaceGroupConnection = {
  __typename?: "ContentfulEspaceGroupConnection";
  totalCount: Scalars["Int"];
  edges: Array<ContentfulEspaceEdge>;
  nodes: Array<ContentfulEspace>;
  pageInfo: PageInfo;
  field: Scalars["String"];
  fieldValue?: Maybe<Scalars["String"]>;
};

export type ContentfulPoleDescriptionRichTextNodeSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulPoleDescriptionRichTextNodeFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export enum ContentfulPoleDescriptionRichTextNodeFieldsEnum {
  id = "id",
  parent___id = "parent___id",
  parent___parent___id = "parent___parent___id",
  parent___parent___parent___id = "parent___parent___parent___id",
  parent___parent___parent___children = "parent___parent___parent___children",
  parent___parent___children = "parent___parent___children",
  parent___parent___children___id = "parent___parent___children___id",
  parent___parent___children___children = "parent___parent___children___children",
  parent___parent___internal___content = "parent___parent___internal___content",
  parent___parent___internal___contentDigest = "parent___parent___internal___contentDigest",
  parent___parent___internal___description = "parent___parent___internal___description",
  parent___parent___internal___fieldOwners = "parent___parent___internal___fieldOwners",
  parent___parent___internal___ignoreType = "parent___parent___internal___ignoreType",
  parent___parent___internal___mediaType = "parent___parent___internal___mediaType",
  parent___parent___internal___owner = "parent___parent___internal___owner",
  parent___parent___internal___type = "parent___parent___internal___type",
  parent___children = "parent___children",
  parent___children___id = "parent___children___id",
  parent___children___parent___id = "parent___children___parent___id",
  parent___children___parent___children = "parent___children___parent___children",
  parent___children___children = "parent___children___children",
  parent___children___children___id = "parent___children___children___id",
  parent___children___children___children = "parent___children___children___children",
  parent___children___internal___content = "parent___children___internal___content",
  parent___children___internal___contentDigest = "parent___children___internal___contentDigest",
  parent___children___internal___description = "parent___children___internal___description",
  parent___children___internal___fieldOwners = "parent___children___internal___fieldOwners",
  parent___children___internal___ignoreType = "parent___children___internal___ignoreType",
  parent___children___internal___mediaType = "parent___children___internal___mediaType",
  parent___children___internal___owner = "parent___children___internal___owner",
  parent___children___internal___type = "parent___children___internal___type",
  parent___internal___content = "parent___internal___content",
  parent___internal___contentDigest = "parent___internal___contentDigest",
  parent___internal___description = "parent___internal___description",
  parent___internal___fieldOwners = "parent___internal___fieldOwners",
  parent___internal___ignoreType = "parent___internal___ignoreType",
  parent___internal___mediaType = "parent___internal___mediaType",
  parent___internal___owner = "parent___internal___owner",
  parent___internal___type = "parent___internal___type",
  children = "children",
  children___id = "children___id",
  children___parent___id = "children___parent___id",
  children___parent___parent___id = "children___parent___parent___id",
  children___parent___parent___children = "children___parent___parent___children",
  children___parent___children = "children___parent___children",
  children___parent___children___id = "children___parent___children___id",
  children___parent___children___children = "children___parent___children___children",
  children___parent___internal___content = "children___parent___internal___content",
  children___parent___internal___contentDigest = "children___parent___internal___contentDigest",
  children___parent___internal___description = "children___parent___internal___description",
  children___parent___internal___fieldOwners = "children___parent___internal___fieldOwners",
  children___parent___internal___ignoreType = "children___parent___internal___ignoreType",
  children___parent___internal___mediaType = "children___parent___internal___mediaType",
  children___parent___internal___owner = "children___parent___internal___owner",
  children___parent___internal___type = "children___parent___internal___type",
  children___children = "children___children",
  children___children___id = "children___children___id",
  children___children___parent___id = "children___children___parent___id",
  children___children___parent___children = "children___children___parent___children",
  children___children___children = "children___children___children",
  children___children___children___id = "children___children___children___id",
  children___children___children___children = "children___children___children___children",
  children___children___internal___content = "children___children___internal___content",
  children___children___internal___contentDigest = "children___children___internal___contentDigest",
  children___children___internal___description = "children___children___internal___description",
  children___children___internal___fieldOwners = "children___children___internal___fieldOwners",
  children___children___internal___ignoreType = "children___children___internal___ignoreType",
  children___children___internal___mediaType = "children___children___internal___mediaType",
  children___children___internal___owner = "children___children___internal___owner",
  children___children___internal___type = "children___children___internal___type",
  children___internal___content = "children___internal___content",
  children___internal___contentDigest = "children___internal___contentDigest",
  children___internal___description = "children___internal___description",
  children___internal___fieldOwners = "children___internal___fieldOwners",
  children___internal___ignoreType = "children___internal___ignoreType",
  children___internal___mediaType = "children___internal___mediaType",
  children___internal___owner = "children___internal___owner",
  children___internal___type = "children___internal___type",
  internal___content = "internal___content",
  internal___contentDigest = "internal___contentDigest",
  internal___description = "internal___description",
  internal___fieldOwners = "internal___fieldOwners",
  internal___ignoreType = "internal___ignoreType",
  internal___mediaType = "internal___mediaType",
  internal___owner = "internal___owner",
  internal___type = "internal___type",
  content = "content",
  content___content = "content___content",
  content___content___value = "content___content___value",
  content___content___nodeType = "content___content___nodeType",
  content___nodeType = "content___nodeType",
  nodeType = "nodeType",
  description = "description",
  json = "json",
  childContentfulRichText___id = "childContentfulRichText___id",
  childContentfulRichText___parent___id = "childContentfulRichText___parent___id",
  childContentfulRichText___parent___parent___id = "childContentfulRichText___parent___parent___id",
  childContentfulRichText___parent___parent___children = "childContentfulRichText___parent___parent___children",
  childContentfulRichText___parent___children = "childContentfulRichText___parent___children",
  childContentfulRichText___parent___children___id = "childContentfulRichText___parent___children___id",
  childContentfulRichText___parent___children___children = "childContentfulRichText___parent___children___children",
  childContentfulRichText___parent___internal___content = "childContentfulRichText___parent___internal___content",
  childContentfulRichText___parent___internal___contentDigest = "childContentfulRichText___parent___internal___contentDigest",
  childContentfulRichText___parent___internal___description = "childContentfulRichText___parent___internal___description",
  childContentfulRichText___parent___internal___fieldOwners = "childContentfulRichText___parent___internal___fieldOwners",
  childContentfulRichText___parent___internal___ignoreType = "childContentfulRichText___parent___internal___ignoreType",
  childContentfulRichText___parent___internal___mediaType = "childContentfulRichText___parent___internal___mediaType",
  childContentfulRichText___parent___internal___owner = "childContentfulRichText___parent___internal___owner",
  childContentfulRichText___parent___internal___type = "childContentfulRichText___parent___internal___type",
  childContentfulRichText___children = "childContentfulRichText___children",
  childContentfulRichText___children___id = "childContentfulRichText___children___id",
  childContentfulRichText___children___parent___id = "childContentfulRichText___children___parent___id",
  childContentfulRichText___children___parent___children = "childContentfulRichText___children___parent___children",
  childContentfulRichText___children___children = "childContentfulRichText___children___children",
  childContentfulRichText___children___children___id = "childContentfulRichText___children___children___id",
  childContentfulRichText___children___children___children = "childContentfulRichText___children___children___children",
  childContentfulRichText___children___internal___content = "childContentfulRichText___children___internal___content",
  childContentfulRichText___children___internal___contentDigest = "childContentfulRichText___children___internal___contentDigest",
  childContentfulRichText___children___internal___description = "childContentfulRichText___children___internal___description",
  childContentfulRichText___children___internal___fieldOwners = "childContentfulRichText___children___internal___fieldOwners",
  childContentfulRichText___children___internal___ignoreType = "childContentfulRichText___children___internal___ignoreType",
  childContentfulRichText___children___internal___mediaType = "childContentfulRichText___children___internal___mediaType",
  childContentfulRichText___children___internal___owner = "childContentfulRichText___children___internal___owner",
  childContentfulRichText___children___internal___type = "childContentfulRichText___children___internal___type",
  childContentfulRichText___internal___content = "childContentfulRichText___internal___content",
  childContentfulRichText___internal___contentDigest = "childContentfulRichText___internal___contentDigest",
  childContentfulRichText___internal___description = "childContentfulRichText___internal___description",
  childContentfulRichText___internal___fieldOwners = "childContentfulRichText___internal___fieldOwners",
  childContentfulRichText___internal___ignoreType = "childContentfulRichText___internal___ignoreType",
  childContentfulRichText___internal___mediaType = "childContentfulRichText___internal___mediaType",
  childContentfulRichText___internal___owner = "childContentfulRichText___internal___owner",
  childContentfulRichText___internal___type = "childContentfulRichText___internal___type",
  childContentfulRichText___html = "childContentfulRichText___html",
  childContentfulRichText___timeToRead = "childContentfulRichText___timeToRead",
}

export type ContentfulPoleDescriptionRichTextNodeConnection = {
  __typename?: "contentfulPoleDescriptionRichTextNodeConnection";
  totalCount: Scalars["Int"];
  edges: Array<ContentfulPoleDescriptionRichTextNodeEdge>;
  nodes: Array<ContentfulPoleDescriptionRichTextNode>;
  pageInfo: PageInfo;
  distinct: Array<Scalars["String"]>;
  group: Array<ContentfulPoleDescriptionRichTextNodeGroupConnection>;
};

export type ContentfulPoleDescriptionRichTextNodeConnectionDistinctArgs = {
  field: ContentfulPoleDescriptionRichTextNodeFieldsEnum;
};

export type ContentfulPoleDescriptionRichTextNodeConnectionGroupArgs = {
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
  field: ContentfulPoleDescriptionRichTextNodeFieldsEnum;
};

export type ContentfulPoleDescriptionRichTextNodeEdge = {
  __typename?: "contentfulPoleDescriptionRichTextNodeEdge";
  next?: Maybe<ContentfulPoleDescriptionRichTextNode>;
  node: ContentfulPoleDescriptionRichTextNode;
  previous?: Maybe<ContentfulPoleDescriptionRichTextNode>;
};

export type ContentfulPoleDescriptionRichTextNodeGroupConnection = {
  __typename?: "contentfulPoleDescriptionRichTextNodeGroupConnection";
  totalCount: Scalars["Int"];
  edges: Array<ContentfulPoleDescriptionRichTextNodeEdge>;
  nodes: Array<ContentfulPoleDescriptionRichTextNode>;
  pageInfo: PageInfo;
  field: Scalars["String"];
  fieldValue?: Maybe<Scalars["String"]>;
};

export type ContentfulPoleSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulPoleFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export enum ContentfulPoleFieldsEnum {
  id = "id",
  parent___id = "parent___id",
  parent___parent___id = "parent___parent___id",
  parent___parent___parent___id = "parent___parent___parent___id",
  parent___parent___parent___children = "parent___parent___parent___children",
  parent___parent___children = "parent___parent___children",
  parent___parent___children___id = "parent___parent___children___id",
  parent___parent___children___children = "parent___parent___children___children",
  parent___parent___internal___content = "parent___parent___internal___content",
  parent___parent___internal___contentDigest = "parent___parent___internal___contentDigest",
  parent___parent___internal___description = "parent___parent___internal___description",
  parent___parent___internal___fieldOwners = "parent___parent___internal___fieldOwners",
  parent___parent___internal___ignoreType = "parent___parent___internal___ignoreType",
  parent___parent___internal___mediaType = "parent___parent___internal___mediaType",
  parent___parent___internal___owner = "parent___parent___internal___owner",
  parent___parent___internal___type = "parent___parent___internal___type",
  parent___children = "parent___children",
  parent___children___id = "parent___children___id",
  parent___children___parent___id = "parent___children___parent___id",
  parent___children___parent___children = "parent___children___parent___children",
  parent___children___children = "parent___children___children",
  parent___children___children___id = "parent___children___children___id",
  parent___children___children___children = "parent___children___children___children",
  parent___children___internal___content = "parent___children___internal___content",
  parent___children___internal___contentDigest = "parent___children___internal___contentDigest",
  parent___children___internal___description = "parent___children___internal___description",
  parent___children___internal___fieldOwners = "parent___children___internal___fieldOwners",
  parent___children___internal___ignoreType = "parent___children___internal___ignoreType",
  parent___children___internal___mediaType = "parent___children___internal___mediaType",
  parent___children___internal___owner = "parent___children___internal___owner",
  parent___children___internal___type = "parent___children___internal___type",
  parent___internal___content = "parent___internal___content",
  parent___internal___contentDigest = "parent___internal___contentDigest",
  parent___internal___description = "parent___internal___description",
  parent___internal___fieldOwners = "parent___internal___fieldOwners",
  parent___internal___ignoreType = "parent___internal___ignoreType",
  parent___internal___mediaType = "parent___internal___mediaType",
  parent___internal___owner = "parent___internal___owner",
  parent___internal___type = "parent___internal___type",
  children = "children",
  children___id = "children___id",
  children___parent___id = "children___parent___id",
  children___parent___parent___id = "children___parent___parent___id",
  children___parent___parent___children = "children___parent___parent___children",
  children___parent___children = "children___parent___children",
  children___parent___children___id = "children___parent___children___id",
  children___parent___children___children = "children___parent___children___children",
  children___parent___internal___content = "children___parent___internal___content",
  children___parent___internal___contentDigest = "children___parent___internal___contentDigest",
  children___parent___internal___description = "children___parent___internal___description",
  children___parent___internal___fieldOwners = "children___parent___internal___fieldOwners",
  children___parent___internal___ignoreType = "children___parent___internal___ignoreType",
  children___parent___internal___mediaType = "children___parent___internal___mediaType",
  children___parent___internal___owner = "children___parent___internal___owner",
  children___parent___internal___type = "children___parent___internal___type",
  children___children = "children___children",
  children___children___id = "children___children___id",
  children___children___parent___id = "children___children___parent___id",
  children___children___parent___children = "children___children___parent___children",
  children___children___children = "children___children___children",
  children___children___children___id = "children___children___children___id",
  children___children___children___children = "children___children___children___children",
  children___children___internal___content = "children___children___internal___content",
  children___children___internal___contentDigest = "children___children___internal___contentDigest",
  children___children___internal___description = "children___children___internal___description",
  children___children___internal___fieldOwners = "children___children___internal___fieldOwners",
  children___children___internal___ignoreType = "children___children___internal___ignoreType",
  children___children___internal___mediaType = "children___children___internal___mediaType",
  children___children___internal___owner = "children___children___internal___owner",
  children___children___internal___type = "children___children___internal___type",
  children___internal___content = "children___internal___content",
  children___internal___contentDigest = "children___internal___contentDigest",
  children___internal___description = "children___internal___description",
  children___internal___fieldOwners = "children___internal___fieldOwners",
  children___internal___ignoreType = "children___internal___ignoreType",
  children___internal___mediaType = "children___internal___mediaType",
  children___internal___owner = "children___internal___owner",
  children___internal___type = "children___internal___type",
  internal___content = "internal___content",
  internal___contentDigest = "internal___contentDigest",
  internal___description = "internal___description",
  internal___fieldOwners = "internal___fieldOwners",
  internal___ignoreType = "internal___ignoreType",
  internal___mediaType = "internal___mediaType",
  internal___owner = "internal___owner",
  internal___type = "internal___type",
  poleId = "poleId",
  title = "title",
  slug = "slug",
  espace___id = "espace___id",
  espace___parent___id = "espace___parent___id",
  espace___parent___parent___id = "espace___parent___parent___id",
  espace___parent___parent___children = "espace___parent___parent___children",
  espace___parent___children = "espace___parent___children",
  espace___parent___children___id = "espace___parent___children___id",
  espace___parent___children___children = "espace___parent___children___children",
  espace___parent___internal___content = "espace___parent___internal___content",
  espace___parent___internal___contentDigest = "espace___parent___internal___contentDigest",
  espace___parent___internal___description = "espace___parent___internal___description",
  espace___parent___internal___fieldOwners = "espace___parent___internal___fieldOwners",
  espace___parent___internal___ignoreType = "espace___parent___internal___ignoreType",
  espace___parent___internal___mediaType = "espace___parent___internal___mediaType",
  espace___parent___internal___owner = "espace___parent___internal___owner",
  espace___parent___internal___type = "espace___parent___internal___type",
  espace___children = "espace___children",
  espace___children___id = "espace___children___id",
  espace___children___parent___id = "espace___children___parent___id",
  espace___children___parent___children = "espace___children___parent___children",
  espace___children___children = "espace___children___children",
  espace___children___children___id = "espace___children___children___id",
  espace___children___children___children = "espace___children___children___children",
  espace___children___internal___content = "espace___children___internal___content",
  espace___children___internal___contentDigest = "espace___children___internal___contentDigest",
  espace___children___internal___description = "espace___children___internal___description",
  espace___children___internal___fieldOwners = "espace___children___internal___fieldOwners",
  espace___children___internal___ignoreType = "espace___children___internal___ignoreType",
  espace___children___internal___mediaType = "espace___children___internal___mediaType",
  espace___children___internal___owner = "espace___children___internal___owner",
  espace___children___internal___type = "espace___children___internal___type",
  espace___internal___content = "espace___internal___content",
  espace___internal___contentDigest = "espace___internal___contentDigest",
  espace___internal___description = "espace___internal___description",
  espace___internal___fieldOwners = "espace___internal___fieldOwners",
  espace___internal___ignoreType = "espace___internal___ignoreType",
  espace___internal___mediaType = "espace___internal___mediaType",
  espace___internal___owner = "espace___internal___owner",
  espace___internal___type = "espace___internal___type",
  espace___espaceId = "espace___espaceId",
  espace___frenchTitle = "espace___frenchTitle",
  espace___chineseTitle = "espace___chineseTitle",
  espace___pole = "espace___pole",
  espace___pole___id = "espace___pole___id",
  espace___pole___parent___id = "espace___pole___parent___id",
  espace___pole___parent___children = "espace___pole___parent___children",
  espace___pole___children = "espace___pole___children",
  espace___pole___children___id = "espace___pole___children___id",
  espace___pole___children___children = "espace___pole___children___children",
  espace___pole___internal___content = "espace___pole___internal___content",
  espace___pole___internal___contentDigest = "espace___pole___internal___contentDigest",
  espace___pole___internal___description = "espace___pole___internal___description",
  espace___pole___internal___fieldOwners = "espace___pole___internal___fieldOwners",
  espace___pole___internal___ignoreType = "espace___pole___internal___ignoreType",
  espace___pole___internal___mediaType = "espace___pole___internal___mediaType",
  espace___pole___internal___owner = "espace___pole___internal___owner",
  espace___pole___internal___type = "espace___pole___internal___type",
  espace___pole___poleId = "espace___pole___poleId",
  espace___pole___title = "espace___pole___title",
  espace___pole___slug = "espace___pole___slug",
  espace___pole___espace___id = "espace___pole___espace___id",
  espace___pole___espace___children = "espace___pole___espace___children",
  espace___pole___espace___espaceId = "espace___pole___espace___espaceId",
  espace___pole___espace___frenchTitle = "espace___pole___espace___frenchTitle",
  espace___pole___espace___chineseTitle = "espace___pole___espace___chineseTitle",
  espace___pole___espace___pole = "espace___pole___espace___pole",
  espace___pole___espace___spaceId = "espace___pole___espace___spaceId",
  espace___pole___espace___contentful_id = "espace___pole___espace___contentful_id",
  espace___pole___espace___createdAt = "espace___pole___espace___createdAt",
  espace___pole___espace___updatedAt = "espace___pole___espace___updatedAt",
  espace___pole___espace___node_locale = "espace___pole___espace___node_locale",
  espace___pole___cover___id = "espace___pole___cover___id",
  espace___pole___cover___children = "espace___pole___cover___children",
  espace___pole___cover___contentful_id = "espace___pole___cover___contentful_id",
  espace___pole___cover___title = "espace___pole___cover___title",
  espace___pole___cover___description = "espace___pole___cover___description",
  espace___pole___cover___node_locale = "espace___pole___cover___node_locale",
  espace___pole___post = "espace___pole___post",
  espace___pole___post___id = "espace___pole___post___id",
  espace___pole___post___children = "espace___pole___post___children",
  espace___pole___post___title = "espace___pole___post___title",
  espace___pole___post___date = "espace___pole___post___date",
  espace___pole___post___slug = "espace___pole___post___slug",
  espace___pole___post___image = "espace___pole___post___image",
  espace___pole___post___spaceId = "espace___pole___post___spaceId",
  espace___pole___post___contentful_id = "espace___pole___post___contentful_id",
  espace___pole___post___createdAt = "espace___pole___post___createdAt",
  espace___pole___post___updatedAt = "espace___pole___post___updatedAt",
  espace___pole___post___node_locale = "espace___pole___post___node_locale",
  espace___pole___post___author = "espace___pole___post___author",
  espace___pole___description___id = "espace___pole___description___id",
  espace___pole___description___children = "espace___pole___description___children",
  espace___pole___description___content = "espace___pole___description___content",
  espace___pole___description___nodeType = "espace___pole___description___nodeType",
  espace___pole___description___description = "espace___pole___description___description",
  espace___pole___description___json = "espace___pole___description___json",
  espace___pole___spaceId = "espace___pole___spaceId",
  espace___pole___contentful_id = "espace___pole___contentful_id",
  espace___pole___createdAt = "espace___pole___createdAt",
  espace___pole___updatedAt = "espace___pole___updatedAt",
  espace___pole___sys___revision = "espace___pole___sys___revision",
  espace___pole___node_locale = "espace___pole___node_locale",
  espace___pole___childContentfulPoleDescriptionRichTextNode___id = "espace___pole___childContentfulPoleDescriptionRichTextNode___id",
  espace___pole___childContentfulPoleDescriptionRichTextNode___children = "espace___pole___childContentfulPoleDescriptionRichTextNode___children",
  espace___pole___childContentfulPoleDescriptionRichTextNode___content = "espace___pole___childContentfulPoleDescriptionRichTextNode___content",
  espace___pole___childContentfulPoleDescriptionRichTextNode___nodeType = "espace___pole___childContentfulPoleDescriptionRichTextNode___nodeType",
  espace___pole___childContentfulPoleDescriptionRichTextNode___description = "espace___pole___childContentfulPoleDescriptionRichTextNode___description",
  espace___pole___childContentfulPoleDescriptionRichTextNode___json = "espace___pole___childContentfulPoleDescriptionRichTextNode___json",
  espace___spaceId = "espace___spaceId",
  espace___contentful_id = "espace___contentful_id",
  espace___createdAt = "espace___createdAt",
  espace___updatedAt = "espace___updatedAt",
  espace___sys___revision = "espace___sys___revision",
  espace___node_locale = "espace___node_locale",
  cover___id = "cover___id",
  cover___parent___id = "cover___parent___id",
  cover___parent___parent___id = "cover___parent___parent___id",
  cover___parent___parent___children = "cover___parent___parent___children",
  cover___parent___children = "cover___parent___children",
  cover___parent___children___id = "cover___parent___children___id",
  cover___parent___children___children = "cover___parent___children___children",
  cover___parent___internal___content = "cover___parent___internal___content",
  cover___parent___internal___contentDigest = "cover___parent___internal___contentDigest",
  cover___parent___internal___description = "cover___parent___internal___description",
  cover___parent___internal___fieldOwners = "cover___parent___internal___fieldOwners",
  cover___parent___internal___ignoreType = "cover___parent___internal___ignoreType",
  cover___parent___internal___mediaType = "cover___parent___internal___mediaType",
  cover___parent___internal___owner = "cover___parent___internal___owner",
  cover___parent___internal___type = "cover___parent___internal___type",
  cover___children = "cover___children",
  cover___children___id = "cover___children___id",
  cover___children___parent___id = "cover___children___parent___id",
  cover___children___parent___children = "cover___children___parent___children",
  cover___children___children = "cover___children___children",
  cover___children___children___id = "cover___children___children___id",
  cover___children___children___children = "cover___children___children___children",
  cover___children___internal___content = "cover___children___internal___content",
  cover___children___internal___contentDigest = "cover___children___internal___contentDigest",
  cover___children___internal___description = "cover___children___internal___description",
  cover___children___internal___fieldOwners = "cover___children___internal___fieldOwners",
  cover___children___internal___ignoreType = "cover___children___internal___ignoreType",
  cover___children___internal___mediaType = "cover___children___internal___mediaType",
  cover___children___internal___owner = "cover___children___internal___owner",
  cover___children___internal___type = "cover___children___internal___type",
  cover___internal___content = "cover___internal___content",
  cover___internal___contentDigest = "cover___internal___contentDigest",
  cover___internal___description = "cover___internal___description",
  cover___internal___fieldOwners = "cover___internal___fieldOwners",
  cover___internal___ignoreType = "cover___internal___ignoreType",
  cover___internal___mediaType = "cover___internal___mediaType",
  cover___internal___owner = "cover___internal___owner",
  cover___internal___type = "cover___internal___type",
  cover___contentful_id = "cover___contentful_id",
  cover___file___url = "cover___file___url",
  cover___file___details___size = "cover___file___details___size",
  cover___file___fileName = "cover___file___fileName",
  cover___file___contentType = "cover___file___contentType",
  cover___title = "cover___title",
  cover___description = "cover___description",
  cover___node_locale = "cover___node_locale",
  cover___fixed___base64 = "cover___fixed___base64",
  cover___fixed___tracedSVG = "cover___fixed___tracedSVG",
  cover___fixed___aspectRatio = "cover___fixed___aspectRatio",
  cover___fixed___width = "cover___fixed___width",
  cover___fixed___height = "cover___fixed___height",
  cover___fixed___src = "cover___fixed___src",
  cover___fixed___srcSet = "cover___fixed___srcSet",
  cover___fixed___srcWebp = "cover___fixed___srcWebp",
  cover___fixed___srcSetWebp = "cover___fixed___srcSetWebp",
  cover___resolutions___base64 = "cover___resolutions___base64",
  cover___resolutions___tracedSVG = "cover___resolutions___tracedSVG",
  cover___resolutions___aspectRatio = "cover___resolutions___aspectRatio",
  cover___resolutions___width = "cover___resolutions___width",
  cover___resolutions___height = "cover___resolutions___height",
  cover___resolutions___src = "cover___resolutions___src",
  cover___resolutions___srcSet = "cover___resolutions___srcSet",
  cover___resolutions___srcWebp = "cover___resolutions___srcWebp",
  cover___resolutions___srcSetWebp = "cover___resolutions___srcSetWebp",
  cover___fluid___base64 = "cover___fluid___base64",
  cover___fluid___tracedSVG = "cover___fluid___tracedSVG",
  cover___fluid___aspectRatio = "cover___fluid___aspectRatio",
  cover___fluid___src = "cover___fluid___src",
  cover___fluid___srcSet = "cover___fluid___srcSet",
  cover___fluid___srcWebp = "cover___fluid___srcWebp",
  cover___fluid___srcSetWebp = "cover___fluid___srcSetWebp",
  cover___fluid___sizes = "cover___fluid___sizes",
  cover___sizes___base64 = "cover___sizes___base64",
  cover___sizes___tracedSVG = "cover___sizes___tracedSVG",
  cover___sizes___aspectRatio = "cover___sizes___aspectRatio",
  cover___sizes___src = "cover___sizes___src",
  cover___sizes___srcSet = "cover___sizes___srcSet",
  cover___sizes___srcWebp = "cover___sizes___srcWebp",
  cover___sizes___srcSetWebp = "cover___sizes___srcSetWebp",
  cover___sizes___sizes = "cover___sizes___sizes",
  cover___resize___base64 = "cover___resize___base64",
  cover___resize___tracedSVG = "cover___resize___tracedSVG",
  cover___resize___src = "cover___resize___src",
  cover___resize___width = "cover___resize___width",
  cover___resize___height = "cover___resize___height",
  cover___resize___aspectRatio = "cover___resize___aspectRatio",
  post = "post",
  post___id = "post___id",
  post___parent___id = "post___parent___id",
  post___parent___parent___id = "post___parent___parent___id",
  post___parent___parent___children = "post___parent___parent___children",
  post___parent___children = "post___parent___children",
  post___parent___children___id = "post___parent___children___id",
  post___parent___children___children = "post___parent___children___children",
  post___parent___internal___content = "post___parent___internal___content",
  post___parent___internal___contentDigest = "post___parent___internal___contentDigest",
  post___parent___internal___description = "post___parent___internal___description",
  post___parent___internal___fieldOwners = "post___parent___internal___fieldOwners",
  post___parent___internal___ignoreType = "post___parent___internal___ignoreType",
  post___parent___internal___mediaType = "post___parent___internal___mediaType",
  post___parent___internal___owner = "post___parent___internal___owner",
  post___parent___internal___type = "post___parent___internal___type",
  post___children = "post___children",
  post___children___id = "post___children___id",
  post___children___parent___id = "post___children___parent___id",
  post___children___parent___children = "post___children___parent___children",
  post___children___children = "post___children___children",
  post___children___children___id = "post___children___children___id",
  post___children___children___children = "post___children___children___children",
  post___children___internal___content = "post___children___internal___content",
  post___children___internal___contentDigest = "post___children___internal___contentDigest",
  post___children___internal___description = "post___children___internal___description",
  post___children___internal___fieldOwners = "post___children___internal___fieldOwners",
  post___children___internal___ignoreType = "post___children___internal___ignoreType",
  post___children___internal___mediaType = "post___children___internal___mediaType",
  post___children___internal___owner = "post___children___internal___owner",
  post___children___internal___type = "post___children___internal___type",
  post___internal___content = "post___internal___content",
  post___internal___contentDigest = "post___internal___contentDigest",
  post___internal___description = "post___internal___description",
  post___internal___fieldOwners = "post___internal___fieldOwners",
  post___internal___ignoreType = "post___internal___ignoreType",
  post___internal___mediaType = "post___internal___mediaType",
  post___internal___owner = "post___internal___owner",
  post___internal___type = "post___internal___type",
  post___title = "post___title",
  post___date = "post___date",
  post___slug = "post___slug",
  post___pole___id = "post___pole___id",
  post___pole___parent___id = "post___pole___parent___id",
  post___pole___parent___children = "post___pole___parent___children",
  post___pole___children = "post___pole___children",
  post___pole___children___id = "post___pole___children___id",
  post___pole___children___children = "post___pole___children___children",
  post___pole___internal___content = "post___pole___internal___content",
  post___pole___internal___contentDigest = "post___pole___internal___contentDigest",
  post___pole___internal___description = "post___pole___internal___description",
  post___pole___internal___fieldOwners = "post___pole___internal___fieldOwners",
  post___pole___internal___ignoreType = "post___pole___internal___ignoreType",
  post___pole___internal___mediaType = "post___pole___internal___mediaType",
  post___pole___internal___owner = "post___pole___internal___owner",
  post___pole___internal___type = "post___pole___internal___type",
  post___pole___poleId = "post___pole___poleId",
  post___pole___title = "post___pole___title",
  post___pole___slug = "post___pole___slug",
  post___pole___espace___id = "post___pole___espace___id",
  post___pole___espace___children = "post___pole___espace___children",
  post___pole___espace___espaceId = "post___pole___espace___espaceId",
  post___pole___espace___frenchTitle = "post___pole___espace___frenchTitle",
  post___pole___espace___chineseTitle = "post___pole___espace___chineseTitle",
  post___pole___espace___pole = "post___pole___espace___pole",
  post___pole___espace___spaceId = "post___pole___espace___spaceId",
  post___pole___espace___contentful_id = "post___pole___espace___contentful_id",
  post___pole___espace___createdAt = "post___pole___espace___createdAt",
  post___pole___espace___updatedAt = "post___pole___espace___updatedAt",
  post___pole___espace___node_locale = "post___pole___espace___node_locale",
  post___pole___cover___id = "post___pole___cover___id",
  post___pole___cover___children = "post___pole___cover___children",
  post___pole___cover___contentful_id = "post___pole___cover___contentful_id",
  post___pole___cover___title = "post___pole___cover___title",
  post___pole___cover___description = "post___pole___cover___description",
  post___pole___cover___node_locale = "post___pole___cover___node_locale",
  post___pole___post = "post___pole___post",
  post___pole___post___id = "post___pole___post___id",
  post___pole___post___children = "post___pole___post___children",
  post___pole___post___title = "post___pole___post___title",
  post___pole___post___date = "post___pole___post___date",
  post___pole___post___slug = "post___pole___post___slug",
  post___pole___post___image = "post___pole___post___image",
  post___pole___post___spaceId = "post___pole___post___spaceId",
  post___pole___post___contentful_id = "post___pole___post___contentful_id",
  post___pole___post___createdAt = "post___pole___post___createdAt",
  post___pole___post___updatedAt = "post___pole___post___updatedAt",
  post___pole___post___node_locale = "post___pole___post___node_locale",
  post___pole___post___author = "post___pole___post___author",
  post___pole___description___id = "post___pole___description___id",
  post___pole___description___children = "post___pole___description___children",
  post___pole___description___content = "post___pole___description___content",
  post___pole___description___nodeType = "post___pole___description___nodeType",
  post___pole___description___description = "post___pole___description___description",
  post___pole___description___json = "post___pole___description___json",
  post___pole___spaceId = "post___pole___spaceId",
  post___pole___contentful_id = "post___pole___contentful_id",
  post___pole___createdAt = "post___pole___createdAt",
  post___pole___updatedAt = "post___pole___updatedAt",
  post___pole___sys___revision = "post___pole___sys___revision",
  post___pole___node_locale = "post___pole___node_locale",
  post___pole___childContentfulPoleDescriptionRichTextNode___id = "post___pole___childContentfulPoleDescriptionRichTextNode___id",
  post___pole___childContentfulPoleDescriptionRichTextNode___children = "post___pole___childContentfulPoleDescriptionRichTextNode___children",
  post___pole___childContentfulPoleDescriptionRichTextNode___content = "post___pole___childContentfulPoleDescriptionRichTextNode___content",
  post___pole___childContentfulPoleDescriptionRichTextNode___nodeType = "post___pole___childContentfulPoleDescriptionRichTextNode___nodeType",
  post___pole___childContentfulPoleDescriptionRichTextNode___description = "post___pole___childContentfulPoleDescriptionRichTextNode___description",
  post___pole___childContentfulPoleDescriptionRichTextNode___json = "post___pole___childContentfulPoleDescriptionRichTextNode___json",
  post___image = "post___image",
  post___image___id = "post___image___id",
  post___image___parent___id = "post___image___parent___id",
  post___image___parent___children = "post___image___parent___children",
  post___image___children = "post___image___children",
  post___image___children___id = "post___image___children___id",
  post___image___children___children = "post___image___children___children",
  post___image___internal___content = "post___image___internal___content",
  post___image___internal___contentDigest = "post___image___internal___contentDigest",
  post___image___internal___description = "post___image___internal___description",
  post___image___internal___fieldOwners = "post___image___internal___fieldOwners",
  post___image___internal___ignoreType = "post___image___internal___ignoreType",
  post___image___internal___mediaType = "post___image___internal___mediaType",
  post___image___internal___owner = "post___image___internal___owner",
  post___image___internal___type = "post___image___internal___type",
  post___image___contentful_id = "post___image___contentful_id",
  post___image___file___url = "post___image___file___url",
  post___image___file___fileName = "post___image___file___fileName",
  post___image___file___contentType = "post___image___file___contentType",
  post___image___title = "post___image___title",
  post___image___description = "post___image___description",
  post___image___node_locale = "post___image___node_locale",
  post___image___fixed___base64 = "post___image___fixed___base64",
  post___image___fixed___tracedSVG = "post___image___fixed___tracedSVG",
  post___image___fixed___aspectRatio = "post___image___fixed___aspectRatio",
  post___image___fixed___width = "post___image___fixed___width",
  post___image___fixed___height = "post___image___fixed___height",
  post___image___fixed___src = "post___image___fixed___src",
  post___image___fixed___srcSet = "post___image___fixed___srcSet",
  post___image___fixed___srcWebp = "post___image___fixed___srcWebp",
  post___image___fixed___srcSetWebp = "post___image___fixed___srcSetWebp",
  post___image___resolutions___base64 = "post___image___resolutions___base64",
  post___image___resolutions___tracedSVG = "post___image___resolutions___tracedSVG",
  post___image___resolutions___aspectRatio = "post___image___resolutions___aspectRatio",
  post___image___resolutions___width = "post___image___resolutions___width",
  post___image___resolutions___height = "post___image___resolutions___height",
  post___image___resolutions___src = "post___image___resolutions___src",
  post___image___resolutions___srcSet = "post___image___resolutions___srcSet",
  post___image___resolutions___srcWebp = "post___image___resolutions___srcWebp",
  post___image___resolutions___srcSetWebp = "post___image___resolutions___srcSetWebp",
  post___image___fluid___base64 = "post___image___fluid___base64",
  post___image___fluid___tracedSVG = "post___image___fluid___tracedSVG",
  post___image___fluid___aspectRatio = "post___image___fluid___aspectRatio",
  post___image___fluid___src = "post___image___fluid___src",
  post___image___fluid___srcSet = "post___image___fluid___srcSet",
  post___image___fluid___srcWebp = "post___image___fluid___srcWebp",
  post___image___fluid___srcSetWebp = "post___image___fluid___srcSetWebp",
  post___image___fluid___sizes = "post___image___fluid___sizes",
  post___image___sizes___base64 = "post___image___sizes___base64",
  post___image___sizes___tracedSVG = "post___image___sizes___tracedSVG",
  post___image___sizes___aspectRatio = "post___image___sizes___aspectRatio",
  post___image___sizes___src = "post___image___sizes___src",
  post___image___sizes___srcSet = "post___image___sizes___srcSet",
  post___image___sizes___srcWebp = "post___image___sizes___srcWebp",
  post___image___sizes___srcSetWebp = "post___image___sizes___srcSetWebp",
  post___image___sizes___sizes = "post___image___sizes___sizes",
  post___image___resize___base64 = "post___image___resize___base64",
  post___image___resize___tracedSVG = "post___image___resize___tracedSVG",
  post___image___resize___src = "post___image___resize___src",
  post___image___resize___width = "post___image___resize___width",
  post___image___resize___height = "post___image___resize___height",
  post___image___resize___aspectRatio = "post___image___resize___aspectRatio",
  post___content___id = "post___content___id",
  post___content___parent___id = "post___content___parent___id",
  post___content___parent___children = "post___content___parent___children",
  post___content___children = "post___content___children",
  post___content___children___id = "post___content___children___id",
  post___content___children___children = "post___content___children___children",
  post___content___internal___content = "post___content___internal___content",
  post___content___internal___contentDigest = "post___content___internal___contentDigest",
  post___content___internal___description = "post___content___internal___description",
  post___content___internal___fieldOwners = "post___content___internal___fieldOwners",
  post___content___internal___ignoreType = "post___content___internal___ignoreType",
  post___content___internal___mediaType = "post___content___internal___mediaType",
  post___content___internal___owner = "post___content___internal___owner",
  post___content___internal___type = "post___content___internal___type",
  post___content___content = "post___content___content",
  post___content___nodeType = "post___content___nodeType",
  post___content___json = "post___content___json",
  post___content___childContentfulRichText___id = "post___content___childContentfulRichText___id",
  post___content___childContentfulRichText___children = "post___content___childContentfulRichText___children",
  post___content___childContentfulRichText___html = "post___content___childContentfulRichText___html",
  post___content___childContentfulRichText___timeToRead = "post___content___childContentfulRichText___timeToRead",
  post___spaceId = "post___spaceId",
  post___contentful_id = "post___contentful_id",
  post___createdAt = "post___createdAt",
  post___updatedAt = "post___updatedAt",
  post___sys___revision = "post___sys___revision",
  post___node_locale = "post___node_locale",
  post___author = "post___author",
  post___childContentfulPostContentRichTextNode___id = "post___childContentfulPostContentRichTextNode___id",
  post___childContentfulPostContentRichTextNode___parent___id = "post___childContentfulPostContentRichTextNode___parent___id",
  post___childContentfulPostContentRichTextNode___parent___children = "post___childContentfulPostContentRichTextNode___parent___children",
  post___childContentfulPostContentRichTextNode___children = "post___childContentfulPostContentRichTextNode___children",
  post___childContentfulPostContentRichTextNode___children___id = "post___childContentfulPostContentRichTextNode___children___id",
  post___childContentfulPostContentRichTextNode___children___children = "post___childContentfulPostContentRichTextNode___children___children",
  post___childContentfulPostContentRichTextNode___internal___content = "post___childContentfulPostContentRichTextNode___internal___content",
  post___childContentfulPostContentRichTextNode___internal___contentDigest = "post___childContentfulPostContentRichTextNode___internal___contentDigest",
  post___childContentfulPostContentRichTextNode___internal___description = "post___childContentfulPostContentRichTextNode___internal___description",
  post___childContentfulPostContentRichTextNode___internal___fieldOwners = "post___childContentfulPostContentRichTextNode___internal___fieldOwners",
  post___childContentfulPostContentRichTextNode___internal___ignoreType = "post___childContentfulPostContentRichTextNode___internal___ignoreType",
  post___childContentfulPostContentRichTextNode___internal___mediaType = "post___childContentfulPostContentRichTextNode___internal___mediaType",
  post___childContentfulPostContentRichTextNode___internal___owner = "post___childContentfulPostContentRichTextNode___internal___owner",
  post___childContentfulPostContentRichTextNode___internal___type = "post___childContentfulPostContentRichTextNode___internal___type",
  post___childContentfulPostContentRichTextNode___content = "post___childContentfulPostContentRichTextNode___content",
  post___childContentfulPostContentRichTextNode___nodeType = "post___childContentfulPostContentRichTextNode___nodeType",
  post___childContentfulPostContentRichTextNode___json = "post___childContentfulPostContentRichTextNode___json",
  post___childContentfulPostContentRichTextNode___childContentfulRichText___id = "post___childContentfulPostContentRichTextNode___childContentfulRichText___id",
  post___childContentfulPostContentRichTextNode___childContentfulRichText___children = "post___childContentfulPostContentRichTextNode___childContentfulRichText___children",
  post___childContentfulPostContentRichTextNode___childContentfulRichText___html = "post___childContentfulPostContentRichTextNode___childContentfulRichText___html",
  post___childContentfulPostContentRichTextNode___childContentfulRichText___timeToRead = "post___childContentfulPostContentRichTextNode___childContentfulRichText___timeToRead",
  description___id = "description___id",
  description___parent___id = "description___parent___id",
  description___parent___parent___id = "description___parent___parent___id",
  description___parent___parent___children = "description___parent___parent___children",
  description___parent___children = "description___parent___children",
  description___parent___children___id = "description___parent___children___id",
  description___parent___children___children = "description___parent___children___children",
  description___parent___internal___content = "description___parent___internal___content",
  description___parent___internal___contentDigest = "description___parent___internal___contentDigest",
  description___parent___internal___description = "description___parent___internal___description",
  description___parent___internal___fieldOwners = "description___parent___internal___fieldOwners",
  description___parent___internal___ignoreType = "description___parent___internal___ignoreType",
  description___parent___internal___mediaType = "description___parent___internal___mediaType",
  description___parent___internal___owner = "description___parent___internal___owner",
  description___parent___internal___type = "description___parent___internal___type",
  description___children = "description___children",
  description___children___id = "description___children___id",
  description___children___parent___id = "description___children___parent___id",
  description___children___parent___children = "description___children___parent___children",
  description___children___children = "description___children___children",
  description___children___children___id = "description___children___children___id",
  description___children___children___children = "description___children___children___children",
  description___children___internal___content = "description___children___internal___content",
  description___children___internal___contentDigest = "description___children___internal___contentDigest",
  description___children___internal___description = "description___children___internal___description",
  description___children___internal___fieldOwners = "description___children___internal___fieldOwners",
  description___children___internal___ignoreType = "description___children___internal___ignoreType",
  description___children___internal___mediaType = "description___children___internal___mediaType",
  description___children___internal___owner = "description___children___internal___owner",
  description___children___internal___type = "description___children___internal___type",
  description___internal___content = "description___internal___content",
  description___internal___contentDigest = "description___internal___contentDigest",
  description___internal___description = "description___internal___description",
  description___internal___fieldOwners = "description___internal___fieldOwners",
  description___internal___ignoreType = "description___internal___ignoreType",
  description___internal___mediaType = "description___internal___mediaType",
  description___internal___owner = "description___internal___owner",
  description___internal___type = "description___internal___type",
  description___content = "description___content",
  description___content___content = "description___content___content",
  description___content___content___value = "description___content___content___value",
  description___content___content___nodeType = "description___content___content___nodeType",
  description___content___nodeType = "description___content___nodeType",
  description___nodeType = "description___nodeType",
  description___description = "description___description",
  description___json = "description___json",
  description___childContentfulRichText___id = "description___childContentfulRichText___id",
  description___childContentfulRichText___parent___id = "description___childContentfulRichText___parent___id",
  description___childContentfulRichText___parent___children = "description___childContentfulRichText___parent___children",
  description___childContentfulRichText___children = "description___childContentfulRichText___children",
  description___childContentfulRichText___children___id = "description___childContentfulRichText___children___id",
  description___childContentfulRichText___children___children = "description___childContentfulRichText___children___children",
  description___childContentfulRichText___internal___content = "description___childContentfulRichText___internal___content",
  description___childContentfulRichText___internal___contentDigest = "description___childContentfulRichText___internal___contentDigest",
  description___childContentfulRichText___internal___description = "description___childContentfulRichText___internal___description",
  description___childContentfulRichText___internal___fieldOwners = "description___childContentfulRichText___internal___fieldOwners",
  description___childContentfulRichText___internal___ignoreType = "description___childContentfulRichText___internal___ignoreType",
  description___childContentfulRichText___internal___mediaType = "description___childContentfulRichText___internal___mediaType",
  description___childContentfulRichText___internal___owner = "description___childContentfulRichText___internal___owner",
  description___childContentfulRichText___internal___type = "description___childContentfulRichText___internal___type",
  description___childContentfulRichText___html = "description___childContentfulRichText___html",
  description___childContentfulRichText___timeToRead = "description___childContentfulRichText___timeToRead",
  spaceId = "spaceId",
  contentful_id = "contentful_id",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  sys___revision = "sys___revision",
  sys___contentType___sys___type = "sys___contentType___sys___type",
  sys___contentType___sys___linkType = "sys___contentType___sys___linkType",
  sys___contentType___sys___id = "sys___contentType___sys___id",
  sys___contentType___sys___contentful_id = "sys___contentType___sys___contentful_id",
  node_locale = "node_locale",
  childContentfulPoleDescriptionRichTextNode___id = "childContentfulPoleDescriptionRichTextNode___id",
  childContentfulPoleDescriptionRichTextNode___parent___id = "childContentfulPoleDescriptionRichTextNode___parent___id",
  childContentfulPoleDescriptionRichTextNode___parent___parent___id = "childContentfulPoleDescriptionRichTextNode___parent___parent___id",
  childContentfulPoleDescriptionRichTextNode___parent___parent___children = "childContentfulPoleDescriptionRichTextNode___parent___parent___children",
  childContentfulPoleDescriptionRichTextNode___parent___children = "childContentfulPoleDescriptionRichTextNode___parent___children",
  childContentfulPoleDescriptionRichTextNode___parent___children___id = "childContentfulPoleDescriptionRichTextNode___parent___children___id",
  childContentfulPoleDescriptionRichTextNode___parent___children___children = "childContentfulPoleDescriptionRichTextNode___parent___children___children",
  childContentfulPoleDescriptionRichTextNode___parent___internal___content = "childContentfulPoleDescriptionRichTextNode___parent___internal___content",
  childContentfulPoleDescriptionRichTextNode___parent___internal___contentDigest = "childContentfulPoleDescriptionRichTextNode___parent___internal___contentDigest",
  childContentfulPoleDescriptionRichTextNode___parent___internal___description = "childContentfulPoleDescriptionRichTextNode___parent___internal___description",
  childContentfulPoleDescriptionRichTextNode___parent___internal___fieldOwners = "childContentfulPoleDescriptionRichTextNode___parent___internal___fieldOwners",
  childContentfulPoleDescriptionRichTextNode___parent___internal___ignoreType = "childContentfulPoleDescriptionRichTextNode___parent___internal___ignoreType",
  childContentfulPoleDescriptionRichTextNode___parent___internal___mediaType = "childContentfulPoleDescriptionRichTextNode___parent___internal___mediaType",
  childContentfulPoleDescriptionRichTextNode___parent___internal___owner = "childContentfulPoleDescriptionRichTextNode___parent___internal___owner",
  childContentfulPoleDescriptionRichTextNode___parent___internal___type = "childContentfulPoleDescriptionRichTextNode___parent___internal___type",
  childContentfulPoleDescriptionRichTextNode___children = "childContentfulPoleDescriptionRichTextNode___children",
  childContentfulPoleDescriptionRichTextNode___children___id = "childContentfulPoleDescriptionRichTextNode___children___id",
  childContentfulPoleDescriptionRichTextNode___children___parent___id = "childContentfulPoleDescriptionRichTextNode___children___parent___id",
  childContentfulPoleDescriptionRichTextNode___children___parent___children = "childContentfulPoleDescriptionRichTextNode___children___parent___children",
  childContentfulPoleDescriptionRichTextNode___children___children = "childContentfulPoleDescriptionRichTextNode___children___children",
  childContentfulPoleDescriptionRichTextNode___children___children___id = "childContentfulPoleDescriptionRichTextNode___children___children___id",
  childContentfulPoleDescriptionRichTextNode___children___children___children = "childContentfulPoleDescriptionRichTextNode___children___children___children",
  childContentfulPoleDescriptionRichTextNode___children___internal___content = "childContentfulPoleDescriptionRichTextNode___children___internal___content",
  childContentfulPoleDescriptionRichTextNode___children___internal___contentDigest = "childContentfulPoleDescriptionRichTextNode___children___internal___contentDigest",
  childContentfulPoleDescriptionRichTextNode___children___internal___description = "childContentfulPoleDescriptionRichTextNode___children___internal___description",
  childContentfulPoleDescriptionRichTextNode___children___internal___fieldOwners = "childContentfulPoleDescriptionRichTextNode___children___internal___fieldOwners",
  childContentfulPoleDescriptionRichTextNode___children___internal___ignoreType = "childContentfulPoleDescriptionRichTextNode___children___internal___ignoreType",
  childContentfulPoleDescriptionRichTextNode___children___internal___mediaType = "childContentfulPoleDescriptionRichTextNode___children___internal___mediaType",
  childContentfulPoleDescriptionRichTextNode___children___internal___owner = "childContentfulPoleDescriptionRichTextNode___children___internal___owner",
  childContentfulPoleDescriptionRichTextNode___children___internal___type = "childContentfulPoleDescriptionRichTextNode___children___internal___type",
  childContentfulPoleDescriptionRichTextNode___internal___content = "childContentfulPoleDescriptionRichTextNode___internal___content",
  childContentfulPoleDescriptionRichTextNode___internal___contentDigest = "childContentfulPoleDescriptionRichTextNode___internal___contentDigest",
  childContentfulPoleDescriptionRichTextNode___internal___description = "childContentfulPoleDescriptionRichTextNode___internal___description",
  childContentfulPoleDescriptionRichTextNode___internal___fieldOwners = "childContentfulPoleDescriptionRichTextNode___internal___fieldOwners",
  childContentfulPoleDescriptionRichTextNode___internal___ignoreType = "childContentfulPoleDescriptionRichTextNode___internal___ignoreType",
  childContentfulPoleDescriptionRichTextNode___internal___mediaType = "childContentfulPoleDescriptionRichTextNode___internal___mediaType",
  childContentfulPoleDescriptionRichTextNode___internal___owner = "childContentfulPoleDescriptionRichTextNode___internal___owner",
  childContentfulPoleDescriptionRichTextNode___internal___type = "childContentfulPoleDescriptionRichTextNode___internal___type",
  childContentfulPoleDescriptionRichTextNode___content = "childContentfulPoleDescriptionRichTextNode___content",
  childContentfulPoleDescriptionRichTextNode___content___content = "childContentfulPoleDescriptionRichTextNode___content___content",
  childContentfulPoleDescriptionRichTextNode___content___content___value = "childContentfulPoleDescriptionRichTextNode___content___content___value",
  childContentfulPoleDescriptionRichTextNode___content___content___nodeType = "childContentfulPoleDescriptionRichTextNode___content___content___nodeType",
  childContentfulPoleDescriptionRichTextNode___content___nodeType = "childContentfulPoleDescriptionRichTextNode___content___nodeType",
  childContentfulPoleDescriptionRichTextNode___nodeType = "childContentfulPoleDescriptionRichTextNode___nodeType",
  childContentfulPoleDescriptionRichTextNode___description = "childContentfulPoleDescriptionRichTextNode___description",
  childContentfulPoleDescriptionRichTextNode___json = "childContentfulPoleDescriptionRichTextNode___json",
  childContentfulPoleDescriptionRichTextNode___childContentfulRichText___id = "childContentfulPoleDescriptionRichTextNode___childContentfulRichText___id",
  childContentfulPoleDescriptionRichTextNode___childContentfulRichText___parent___id = "childContentfulPoleDescriptionRichTextNode___childContentfulRichText___parent___id",
  childContentfulPoleDescriptionRichTextNode___childContentfulRichText___parent___children = "childContentfulPoleDescriptionRichTextNode___childContentfulRichText___parent___children",
  childContentfulPoleDescriptionRichTextNode___childContentfulRichText___children = "childContentfulPoleDescriptionRichTextNode___childContentfulRichText___children",
  childContentfulPoleDescriptionRichTextNode___childContentfulRichText___children___id = "childContentfulPoleDescriptionRichTextNode___childContentfulRichText___children___id",
  childContentfulPoleDescriptionRichTextNode___childContentfulRichText___children___children = "childContentfulPoleDescriptionRichTextNode___childContentfulRichText___children___children",
  childContentfulPoleDescriptionRichTextNode___childContentfulRichText___internal___content = "childContentfulPoleDescriptionRichTextNode___childContentfulRichText___internal___content",
  childContentfulPoleDescriptionRichTextNode___childContentfulRichText___internal___contentDigest = "childContentfulPoleDescriptionRichTextNode___childContentfulRichText___internal___contentDigest",
  childContentfulPoleDescriptionRichTextNode___childContentfulRichText___internal___description = "childContentfulPoleDescriptionRichTextNode___childContentfulRichText___internal___description",
  childContentfulPoleDescriptionRichTextNode___childContentfulRichText___internal___fieldOwners = "childContentfulPoleDescriptionRichTextNode___childContentfulRichText___internal___fieldOwners",
  childContentfulPoleDescriptionRichTextNode___childContentfulRichText___internal___ignoreType = "childContentfulPoleDescriptionRichTextNode___childContentfulRichText___internal___ignoreType",
  childContentfulPoleDescriptionRichTextNode___childContentfulRichText___internal___mediaType = "childContentfulPoleDescriptionRichTextNode___childContentfulRichText___internal___mediaType",
  childContentfulPoleDescriptionRichTextNode___childContentfulRichText___internal___owner = "childContentfulPoleDescriptionRichTextNode___childContentfulRichText___internal___owner",
  childContentfulPoleDescriptionRichTextNode___childContentfulRichText___internal___type = "childContentfulPoleDescriptionRichTextNode___childContentfulRichText___internal___type",
  childContentfulPoleDescriptionRichTextNode___childContentfulRichText___html = "childContentfulPoleDescriptionRichTextNode___childContentfulRichText___html",
  childContentfulPoleDescriptionRichTextNode___childContentfulRichText___timeToRead = "childContentfulPoleDescriptionRichTextNode___childContentfulRichText___timeToRead",
}

export type ContentfulPoleConnection = {
  __typename?: "ContentfulPoleConnection";
  totalCount: Scalars["Int"];
  edges: Array<ContentfulPoleEdge>;
  nodes: Array<ContentfulPole>;
  pageInfo: PageInfo;
  distinct: Array<Scalars["String"]>;
  group: Array<ContentfulPoleGroupConnection>;
};

export type ContentfulPoleConnectionDistinctArgs = {
  field: ContentfulPoleFieldsEnum;
};

export type ContentfulPoleConnectionGroupArgs = {
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
  field: ContentfulPoleFieldsEnum;
};

export type ContentfulPoleEdge = {
  __typename?: "ContentfulPoleEdge";
  next?: Maybe<ContentfulPole>;
  node: ContentfulPole;
  previous?: Maybe<ContentfulPole>;
};

export type ContentfulPoleGroupConnection = {
  __typename?: "ContentfulPoleGroupConnection";
  totalCount: Scalars["Int"];
  edges: Array<ContentfulPoleEdge>;
  nodes: Array<ContentfulPole>;
  pageInfo: PageInfo;
  field: Scalars["String"];
  fieldValue?: Maybe<Scalars["String"]>;
};

export type ContentfulRichTextSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulRichTextFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export enum ContentfulRichTextFieldsEnum {
  id = "id",
  parent___id = "parent___id",
  parent___parent___id = "parent___parent___id",
  parent___parent___parent___id = "parent___parent___parent___id",
  parent___parent___parent___children = "parent___parent___parent___children",
  parent___parent___children = "parent___parent___children",
  parent___parent___children___id = "parent___parent___children___id",
  parent___parent___children___children = "parent___parent___children___children",
  parent___parent___internal___content = "parent___parent___internal___content",
  parent___parent___internal___contentDigest = "parent___parent___internal___contentDigest",
  parent___parent___internal___description = "parent___parent___internal___description",
  parent___parent___internal___fieldOwners = "parent___parent___internal___fieldOwners",
  parent___parent___internal___ignoreType = "parent___parent___internal___ignoreType",
  parent___parent___internal___mediaType = "parent___parent___internal___mediaType",
  parent___parent___internal___owner = "parent___parent___internal___owner",
  parent___parent___internal___type = "parent___parent___internal___type",
  parent___children = "parent___children",
  parent___children___id = "parent___children___id",
  parent___children___parent___id = "parent___children___parent___id",
  parent___children___parent___children = "parent___children___parent___children",
  parent___children___children = "parent___children___children",
  parent___children___children___id = "parent___children___children___id",
  parent___children___children___children = "parent___children___children___children",
  parent___children___internal___content = "parent___children___internal___content",
  parent___children___internal___contentDigest = "parent___children___internal___contentDigest",
  parent___children___internal___description = "parent___children___internal___description",
  parent___children___internal___fieldOwners = "parent___children___internal___fieldOwners",
  parent___children___internal___ignoreType = "parent___children___internal___ignoreType",
  parent___children___internal___mediaType = "parent___children___internal___mediaType",
  parent___children___internal___owner = "parent___children___internal___owner",
  parent___children___internal___type = "parent___children___internal___type",
  parent___internal___content = "parent___internal___content",
  parent___internal___contentDigest = "parent___internal___contentDigest",
  parent___internal___description = "parent___internal___description",
  parent___internal___fieldOwners = "parent___internal___fieldOwners",
  parent___internal___ignoreType = "parent___internal___ignoreType",
  parent___internal___mediaType = "parent___internal___mediaType",
  parent___internal___owner = "parent___internal___owner",
  parent___internal___type = "parent___internal___type",
  children = "children",
  children___id = "children___id",
  children___parent___id = "children___parent___id",
  children___parent___parent___id = "children___parent___parent___id",
  children___parent___parent___children = "children___parent___parent___children",
  children___parent___children = "children___parent___children",
  children___parent___children___id = "children___parent___children___id",
  children___parent___children___children = "children___parent___children___children",
  children___parent___internal___content = "children___parent___internal___content",
  children___parent___internal___contentDigest = "children___parent___internal___contentDigest",
  children___parent___internal___description = "children___parent___internal___description",
  children___parent___internal___fieldOwners = "children___parent___internal___fieldOwners",
  children___parent___internal___ignoreType = "children___parent___internal___ignoreType",
  children___parent___internal___mediaType = "children___parent___internal___mediaType",
  children___parent___internal___owner = "children___parent___internal___owner",
  children___parent___internal___type = "children___parent___internal___type",
  children___children = "children___children",
  children___children___id = "children___children___id",
  children___children___parent___id = "children___children___parent___id",
  children___children___parent___children = "children___children___parent___children",
  children___children___children = "children___children___children",
  children___children___children___id = "children___children___children___id",
  children___children___children___children = "children___children___children___children",
  children___children___internal___content = "children___children___internal___content",
  children___children___internal___contentDigest = "children___children___internal___contentDigest",
  children___children___internal___description = "children___children___internal___description",
  children___children___internal___fieldOwners = "children___children___internal___fieldOwners",
  children___children___internal___ignoreType = "children___children___internal___ignoreType",
  children___children___internal___mediaType = "children___children___internal___mediaType",
  children___children___internal___owner = "children___children___internal___owner",
  children___children___internal___type = "children___children___internal___type",
  children___internal___content = "children___internal___content",
  children___internal___contentDigest = "children___internal___contentDigest",
  children___internal___description = "children___internal___description",
  children___internal___fieldOwners = "children___internal___fieldOwners",
  children___internal___ignoreType = "children___internal___ignoreType",
  children___internal___mediaType = "children___internal___mediaType",
  children___internal___owner = "children___internal___owner",
  children___internal___type = "children___internal___type",
  internal___content = "internal___content",
  internal___contentDigest = "internal___contentDigest",
  internal___description = "internal___description",
  internal___fieldOwners = "internal___fieldOwners",
  internal___ignoreType = "internal___ignoreType",
  internal___mediaType = "internal___mediaType",
  internal___owner = "internal___owner",
  internal___type = "internal___type",
  html = "html",
  timeToRead = "timeToRead",
}

export type ContentfulRichTextConnection = {
  __typename?: "ContentfulRichTextConnection";
  totalCount: Scalars["Int"];
  edges: Array<ContentfulRichTextEdge>;
  nodes: Array<ContentfulRichText>;
  pageInfo: PageInfo;
  distinct: Array<Scalars["String"]>;
  group: Array<ContentfulRichTextGroupConnection>;
};

export type ContentfulRichTextConnectionDistinctArgs = {
  field: ContentfulRichTextFieldsEnum;
};

export type ContentfulRichTextConnectionGroupArgs = {
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
  field: ContentfulRichTextFieldsEnum;
};

export type ContentfulRichTextEdge = {
  __typename?: "ContentfulRichTextEdge";
  next?: Maybe<ContentfulRichText>;
  node: ContentfulRichText;
  previous?: Maybe<ContentfulRichText>;
};

export type ContentfulRichTextGroupConnection = {
  __typename?: "ContentfulRichTextGroupConnection";
  totalCount: Scalars["Int"];
  edges: Array<ContentfulRichTextEdge>;
  nodes: Array<ContentfulRichText>;
  pageInfo: PageInfo;
  field: Scalars["String"];
  fieldValue?: Maybe<Scalars["String"]>;
};

export type ContentfulPostContentRichTextNodeSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulPostContentRichTextNodeFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export enum ContentfulPostContentRichTextNodeFieldsEnum {
  id = "id",
  parent___id = "parent___id",
  parent___parent___id = "parent___parent___id",
  parent___parent___parent___id = "parent___parent___parent___id",
  parent___parent___parent___children = "parent___parent___parent___children",
  parent___parent___children = "parent___parent___children",
  parent___parent___children___id = "parent___parent___children___id",
  parent___parent___children___children = "parent___parent___children___children",
  parent___parent___internal___content = "parent___parent___internal___content",
  parent___parent___internal___contentDigest = "parent___parent___internal___contentDigest",
  parent___parent___internal___description = "parent___parent___internal___description",
  parent___parent___internal___fieldOwners = "parent___parent___internal___fieldOwners",
  parent___parent___internal___ignoreType = "parent___parent___internal___ignoreType",
  parent___parent___internal___mediaType = "parent___parent___internal___mediaType",
  parent___parent___internal___owner = "parent___parent___internal___owner",
  parent___parent___internal___type = "parent___parent___internal___type",
  parent___children = "parent___children",
  parent___children___id = "parent___children___id",
  parent___children___parent___id = "parent___children___parent___id",
  parent___children___parent___children = "parent___children___parent___children",
  parent___children___children = "parent___children___children",
  parent___children___children___id = "parent___children___children___id",
  parent___children___children___children = "parent___children___children___children",
  parent___children___internal___content = "parent___children___internal___content",
  parent___children___internal___contentDigest = "parent___children___internal___contentDigest",
  parent___children___internal___description = "parent___children___internal___description",
  parent___children___internal___fieldOwners = "parent___children___internal___fieldOwners",
  parent___children___internal___ignoreType = "parent___children___internal___ignoreType",
  parent___children___internal___mediaType = "parent___children___internal___mediaType",
  parent___children___internal___owner = "parent___children___internal___owner",
  parent___children___internal___type = "parent___children___internal___type",
  parent___internal___content = "parent___internal___content",
  parent___internal___contentDigest = "parent___internal___contentDigest",
  parent___internal___description = "parent___internal___description",
  parent___internal___fieldOwners = "parent___internal___fieldOwners",
  parent___internal___ignoreType = "parent___internal___ignoreType",
  parent___internal___mediaType = "parent___internal___mediaType",
  parent___internal___owner = "parent___internal___owner",
  parent___internal___type = "parent___internal___type",
  children = "children",
  children___id = "children___id",
  children___parent___id = "children___parent___id",
  children___parent___parent___id = "children___parent___parent___id",
  children___parent___parent___children = "children___parent___parent___children",
  children___parent___children = "children___parent___children",
  children___parent___children___id = "children___parent___children___id",
  children___parent___children___children = "children___parent___children___children",
  children___parent___internal___content = "children___parent___internal___content",
  children___parent___internal___contentDigest = "children___parent___internal___contentDigest",
  children___parent___internal___description = "children___parent___internal___description",
  children___parent___internal___fieldOwners = "children___parent___internal___fieldOwners",
  children___parent___internal___ignoreType = "children___parent___internal___ignoreType",
  children___parent___internal___mediaType = "children___parent___internal___mediaType",
  children___parent___internal___owner = "children___parent___internal___owner",
  children___parent___internal___type = "children___parent___internal___type",
  children___children = "children___children",
  children___children___id = "children___children___id",
  children___children___parent___id = "children___children___parent___id",
  children___children___parent___children = "children___children___parent___children",
  children___children___children = "children___children___children",
  children___children___children___id = "children___children___children___id",
  children___children___children___children = "children___children___children___children",
  children___children___internal___content = "children___children___internal___content",
  children___children___internal___contentDigest = "children___children___internal___contentDigest",
  children___children___internal___description = "children___children___internal___description",
  children___children___internal___fieldOwners = "children___children___internal___fieldOwners",
  children___children___internal___ignoreType = "children___children___internal___ignoreType",
  children___children___internal___mediaType = "children___children___internal___mediaType",
  children___children___internal___owner = "children___children___internal___owner",
  children___children___internal___type = "children___children___internal___type",
  children___internal___content = "children___internal___content",
  children___internal___contentDigest = "children___internal___contentDigest",
  children___internal___description = "children___internal___description",
  children___internal___fieldOwners = "children___internal___fieldOwners",
  children___internal___ignoreType = "children___internal___ignoreType",
  children___internal___mediaType = "children___internal___mediaType",
  children___internal___owner = "children___internal___owner",
  children___internal___type = "children___internal___type",
  internal___content = "internal___content",
  internal___contentDigest = "internal___contentDigest",
  internal___description = "internal___description",
  internal___fieldOwners = "internal___fieldOwners",
  internal___ignoreType = "internal___ignoreType",
  internal___mediaType = "internal___mediaType",
  internal___owner = "internal___owner",
  internal___type = "internal___type",
  content = "content",
  nodeType = "nodeType",
  json = "json",
  childContentfulRichText___id = "childContentfulRichText___id",
  childContentfulRichText___parent___id = "childContentfulRichText___parent___id",
  childContentfulRichText___parent___parent___id = "childContentfulRichText___parent___parent___id",
  childContentfulRichText___parent___parent___children = "childContentfulRichText___parent___parent___children",
  childContentfulRichText___parent___children = "childContentfulRichText___parent___children",
  childContentfulRichText___parent___children___id = "childContentfulRichText___parent___children___id",
  childContentfulRichText___parent___children___children = "childContentfulRichText___parent___children___children",
  childContentfulRichText___parent___internal___content = "childContentfulRichText___parent___internal___content",
  childContentfulRichText___parent___internal___contentDigest = "childContentfulRichText___parent___internal___contentDigest",
  childContentfulRichText___parent___internal___description = "childContentfulRichText___parent___internal___description",
  childContentfulRichText___parent___internal___fieldOwners = "childContentfulRichText___parent___internal___fieldOwners",
  childContentfulRichText___parent___internal___ignoreType = "childContentfulRichText___parent___internal___ignoreType",
  childContentfulRichText___parent___internal___mediaType = "childContentfulRichText___parent___internal___mediaType",
  childContentfulRichText___parent___internal___owner = "childContentfulRichText___parent___internal___owner",
  childContentfulRichText___parent___internal___type = "childContentfulRichText___parent___internal___type",
  childContentfulRichText___children = "childContentfulRichText___children",
  childContentfulRichText___children___id = "childContentfulRichText___children___id",
  childContentfulRichText___children___parent___id = "childContentfulRichText___children___parent___id",
  childContentfulRichText___children___parent___children = "childContentfulRichText___children___parent___children",
  childContentfulRichText___children___children = "childContentfulRichText___children___children",
  childContentfulRichText___children___children___id = "childContentfulRichText___children___children___id",
  childContentfulRichText___children___children___children = "childContentfulRichText___children___children___children",
  childContentfulRichText___children___internal___content = "childContentfulRichText___children___internal___content",
  childContentfulRichText___children___internal___contentDigest = "childContentfulRichText___children___internal___contentDigest",
  childContentfulRichText___children___internal___description = "childContentfulRichText___children___internal___description",
  childContentfulRichText___children___internal___fieldOwners = "childContentfulRichText___children___internal___fieldOwners",
  childContentfulRichText___children___internal___ignoreType = "childContentfulRichText___children___internal___ignoreType",
  childContentfulRichText___children___internal___mediaType = "childContentfulRichText___children___internal___mediaType",
  childContentfulRichText___children___internal___owner = "childContentfulRichText___children___internal___owner",
  childContentfulRichText___children___internal___type = "childContentfulRichText___children___internal___type",
  childContentfulRichText___internal___content = "childContentfulRichText___internal___content",
  childContentfulRichText___internal___contentDigest = "childContentfulRichText___internal___contentDigest",
  childContentfulRichText___internal___description = "childContentfulRichText___internal___description",
  childContentfulRichText___internal___fieldOwners = "childContentfulRichText___internal___fieldOwners",
  childContentfulRichText___internal___ignoreType = "childContentfulRichText___internal___ignoreType",
  childContentfulRichText___internal___mediaType = "childContentfulRichText___internal___mediaType",
  childContentfulRichText___internal___owner = "childContentfulRichText___internal___owner",
  childContentfulRichText___internal___type = "childContentfulRichText___internal___type",
  childContentfulRichText___html = "childContentfulRichText___html",
  childContentfulRichText___timeToRead = "childContentfulRichText___timeToRead",
}

export type ContentfulPostContentRichTextNodeConnection = {
  __typename?: "contentfulPostContentRichTextNodeConnection";
  totalCount: Scalars["Int"];
  edges: Array<ContentfulPostContentRichTextNodeEdge>;
  nodes: Array<ContentfulPostContentRichTextNode>;
  pageInfo: PageInfo;
  distinct: Array<Scalars["String"]>;
  group: Array<ContentfulPostContentRichTextNodeGroupConnection>;
};

export type ContentfulPostContentRichTextNodeConnectionDistinctArgs = {
  field: ContentfulPostContentRichTextNodeFieldsEnum;
};

export type ContentfulPostContentRichTextNodeConnectionGroupArgs = {
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
  field: ContentfulPostContentRichTextNodeFieldsEnum;
};

export type ContentfulPostContentRichTextNodeEdge = {
  __typename?: "contentfulPostContentRichTextNodeEdge";
  next?: Maybe<ContentfulPostContentRichTextNode>;
  node: ContentfulPostContentRichTextNode;
  previous?: Maybe<ContentfulPostContentRichTextNode>;
};

export type ContentfulPostContentRichTextNodeGroupConnection = {
  __typename?: "contentfulPostContentRichTextNodeGroupConnection";
  totalCount: Scalars["Int"];
  edges: Array<ContentfulPostContentRichTextNodeEdge>;
  nodes: Array<ContentfulPostContentRichTextNode>;
  pageInfo: PageInfo;
  field: Scalars["String"];
  fieldValue?: Maybe<Scalars["String"]>;
};

export type ContentfulPostSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulPostFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export enum ContentfulPostFieldsEnum {
  id = "id",
  parent___id = "parent___id",
  parent___parent___id = "parent___parent___id",
  parent___parent___parent___id = "parent___parent___parent___id",
  parent___parent___parent___children = "parent___parent___parent___children",
  parent___parent___children = "parent___parent___children",
  parent___parent___children___id = "parent___parent___children___id",
  parent___parent___children___children = "parent___parent___children___children",
  parent___parent___internal___content = "parent___parent___internal___content",
  parent___parent___internal___contentDigest = "parent___parent___internal___contentDigest",
  parent___parent___internal___description = "parent___parent___internal___description",
  parent___parent___internal___fieldOwners = "parent___parent___internal___fieldOwners",
  parent___parent___internal___ignoreType = "parent___parent___internal___ignoreType",
  parent___parent___internal___mediaType = "parent___parent___internal___mediaType",
  parent___parent___internal___owner = "parent___parent___internal___owner",
  parent___parent___internal___type = "parent___parent___internal___type",
  parent___children = "parent___children",
  parent___children___id = "parent___children___id",
  parent___children___parent___id = "parent___children___parent___id",
  parent___children___parent___children = "parent___children___parent___children",
  parent___children___children = "parent___children___children",
  parent___children___children___id = "parent___children___children___id",
  parent___children___children___children = "parent___children___children___children",
  parent___children___internal___content = "parent___children___internal___content",
  parent___children___internal___contentDigest = "parent___children___internal___contentDigest",
  parent___children___internal___description = "parent___children___internal___description",
  parent___children___internal___fieldOwners = "parent___children___internal___fieldOwners",
  parent___children___internal___ignoreType = "parent___children___internal___ignoreType",
  parent___children___internal___mediaType = "parent___children___internal___mediaType",
  parent___children___internal___owner = "parent___children___internal___owner",
  parent___children___internal___type = "parent___children___internal___type",
  parent___internal___content = "parent___internal___content",
  parent___internal___contentDigest = "parent___internal___contentDigest",
  parent___internal___description = "parent___internal___description",
  parent___internal___fieldOwners = "parent___internal___fieldOwners",
  parent___internal___ignoreType = "parent___internal___ignoreType",
  parent___internal___mediaType = "parent___internal___mediaType",
  parent___internal___owner = "parent___internal___owner",
  parent___internal___type = "parent___internal___type",
  children = "children",
  children___id = "children___id",
  children___parent___id = "children___parent___id",
  children___parent___parent___id = "children___parent___parent___id",
  children___parent___parent___children = "children___parent___parent___children",
  children___parent___children = "children___parent___children",
  children___parent___children___id = "children___parent___children___id",
  children___parent___children___children = "children___parent___children___children",
  children___parent___internal___content = "children___parent___internal___content",
  children___parent___internal___contentDigest = "children___parent___internal___contentDigest",
  children___parent___internal___description = "children___parent___internal___description",
  children___parent___internal___fieldOwners = "children___parent___internal___fieldOwners",
  children___parent___internal___ignoreType = "children___parent___internal___ignoreType",
  children___parent___internal___mediaType = "children___parent___internal___mediaType",
  children___parent___internal___owner = "children___parent___internal___owner",
  children___parent___internal___type = "children___parent___internal___type",
  children___children = "children___children",
  children___children___id = "children___children___id",
  children___children___parent___id = "children___children___parent___id",
  children___children___parent___children = "children___children___parent___children",
  children___children___children = "children___children___children",
  children___children___children___id = "children___children___children___id",
  children___children___children___children = "children___children___children___children",
  children___children___internal___content = "children___children___internal___content",
  children___children___internal___contentDigest = "children___children___internal___contentDigest",
  children___children___internal___description = "children___children___internal___description",
  children___children___internal___fieldOwners = "children___children___internal___fieldOwners",
  children___children___internal___ignoreType = "children___children___internal___ignoreType",
  children___children___internal___mediaType = "children___children___internal___mediaType",
  children___children___internal___owner = "children___children___internal___owner",
  children___children___internal___type = "children___children___internal___type",
  children___internal___content = "children___internal___content",
  children___internal___contentDigest = "children___internal___contentDigest",
  children___internal___description = "children___internal___description",
  children___internal___fieldOwners = "children___internal___fieldOwners",
  children___internal___ignoreType = "children___internal___ignoreType",
  children___internal___mediaType = "children___internal___mediaType",
  children___internal___owner = "children___internal___owner",
  children___internal___type = "children___internal___type",
  internal___content = "internal___content",
  internal___contentDigest = "internal___contentDigest",
  internal___description = "internal___description",
  internal___fieldOwners = "internal___fieldOwners",
  internal___ignoreType = "internal___ignoreType",
  internal___mediaType = "internal___mediaType",
  internal___owner = "internal___owner",
  internal___type = "internal___type",
  title = "title",
  date = "date",
  slug = "slug",
  pole___id = "pole___id",
  pole___parent___id = "pole___parent___id",
  pole___parent___parent___id = "pole___parent___parent___id",
  pole___parent___parent___children = "pole___parent___parent___children",
  pole___parent___children = "pole___parent___children",
  pole___parent___children___id = "pole___parent___children___id",
  pole___parent___children___children = "pole___parent___children___children",
  pole___parent___internal___content = "pole___parent___internal___content",
  pole___parent___internal___contentDigest = "pole___parent___internal___contentDigest",
  pole___parent___internal___description = "pole___parent___internal___description",
  pole___parent___internal___fieldOwners = "pole___parent___internal___fieldOwners",
  pole___parent___internal___ignoreType = "pole___parent___internal___ignoreType",
  pole___parent___internal___mediaType = "pole___parent___internal___mediaType",
  pole___parent___internal___owner = "pole___parent___internal___owner",
  pole___parent___internal___type = "pole___parent___internal___type",
  pole___children = "pole___children",
  pole___children___id = "pole___children___id",
  pole___children___parent___id = "pole___children___parent___id",
  pole___children___parent___children = "pole___children___parent___children",
  pole___children___children = "pole___children___children",
  pole___children___children___id = "pole___children___children___id",
  pole___children___children___children = "pole___children___children___children",
  pole___children___internal___content = "pole___children___internal___content",
  pole___children___internal___contentDigest = "pole___children___internal___contentDigest",
  pole___children___internal___description = "pole___children___internal___description",
  pole___children___internal___fieldOwners = "pole___children___internal___fieldOwners",
  pole___children___internal___ignoreType = "pole___children___internal___ignoreType",
  pole___children___internal___mediaType = "pole___children___internal___mediaType",
  pole___children___internal___owner = "pole___children___internal___owner",
  pole___children___internal___type = "pole___children___internal___type",
  pole___internal___content = "pole___internal___content",
  pole___internal___contentDigest = "pole___internal___contentDigest",
  pole___internal___description = "pole___internal___description",
  pole___internal___fieldOwners = "pole___internal___fieldOwners",
  pole___internal___ignoreType = "pole___internal___ignoreType",
  pole___internal___mediaType = "pole___internal___mediaType",
  pole___internal___owner = "pole___internal___owner",
  pole___internal___type = "pole___internal___type",
  pole___poleId = "pole___poleId",
  pole___title = "pole___title",
  pole___slug = "pole___slug",
  pole___espace___id = "pole___espace___id",
  pole___espace___parent___id = "pole___espace___parent___id",
  pole___espace___parent___children = "pole___espace___parent___children",
  pole___espace___children = "pole___espace___children",
  pole___espace___children___id = "pole___espace___children___id",
  pole___espace___children___children = "pole___espace___children___children",
  pole___espace___internal___content = "pole___espace___internal___content",
  pole___espace___internal___contentDigest = "pole___espace___internal___contentDigest",
  pole___espace___internal___description = "pole___espace___internal___description",
  pole___espace___internal___fieldOwners = "pole___espace___internal___fieldOwners",
  pole___espace___internal___ignoreType = "pole___espace___internal___ignoreType",
  pole___espace___internal___mediaType = "pole___espace___internal___mediaType",
  pole___espace___internal___owner = "pole___espace___internal___owner",
  pole___espace___internal___type = "pole___espace___internal___type",
  pole___espace___espaceId = "pole___espace___espaceId",
  pole___espace___frenchTitle = "pole___espace___frenchTitle",
  pole___espace___chineseTitle = "pole___espace___chineseTitle",
  pole___espace___pole = "pole___espace___pole",
  pole___espace___pole___id = "pole___espace___pole___id",
  pole___espace___pole___children = "pole___espace___pole___children",
  pole___espace___pole___poleId = "pole___espace___pole___poleId",
  pole___espace___pole___title = "pole___espace___pole___title",
  pole___espace___pole___slug = "pole___espace___pole___slug",
  pole___espace___pole___post = "pole___espace___pole___post",
  pole___espace___pole___spaceId = "pole___espace___pole___spaceId",
  pole___espace___pole___contentful_id = "pole___espace___pole___contentful_id",
  pole___espace___pole___createdAt = "pole___espace___pole___createdAt",
  pole___espace___pole___updatedAt = "pole___espace___pole___updatedAt",
  pole___espace___pole___node_locale = "pole___espace___pole___node_locale",
  pole___espace___spaceId = "pole___espace___spaceId",
  pole___espace___contentful_id = "pole___espace___contentful_id",
  pole___espace___createdAt = "pole___espace___createdAt",
  pole___espace___updatedAt = "pole___espace___updatedAt",
  pole___espace___sys___revision = "pole___espace___sys___revision",
  pole___espace___node_locale = "pole___espace___node_locale",
  pole___cover___id = "pole___cover___id",
  pole___cover___parent___id = "pole___cover___parent___id",
  pole___cover___parent___children = "pole___cover___parent___children",
  pole___cover___children = "pole___cover___children",
  pole___cover___children___id = "pole___cover___children___id",
  pole___cover___children___children = "pole___cover___children___children",
  pole___cover___internal___content = "pole___cover___internal___content",
  pole___cover___internal___contentDigest = "pole___cover___internal___contentDigest",
  pole___cover___internal___description = "pole___cover___internal___description",
  pole___cover___internal___fieldOwners = "pole___cover___internal___fieldOwners",
  pole___cover___internal___ignoreType = "pole___cover___internal___ignoreType",
  pole___cover___internal___mediaType = "pole___cover___internal___mediaType",
  pole___cover___internal___owner = "pole___cover___internal___owner",
  pole___cover___internal___type = "pole___cover___internal___type",
  pole___cover___contentful_id = "pole___cover___contentful_id",
  pole___cover___file___url = "pole___cover___file___url",
  pole___cover___file___fileName = "pole___cover___file___fileName",
  pole___cover___file___contentType = "pole___cover___file___contentType",
  pole___cover___title = "pole___cover___title",
  pole___cover___description = "pole___cover___description",
  pole___cover___node_locale = "pole___cover___node_locale",
  pole___cover___fixed___base64 = "pole___cover___fixed___base64",
  pole___cover___fixed___tracedSVG = "pole___cover___fixed___tracedSVG",
  pole___cover___fixed___aspectRatio = "pole___cover___fixed___aspectRatio",
  pole___cover___fixed___width = "pole___cover___fixed___width",
  pole___cover___fixed___height = "pole___cover___fixed___height",
  pole___cover___fixed___src = "pole___cover___fixed___src",
  pole___cover___fixed___srcSet = "pole___cover___fixed___srcSet",
  pole___cover___fixed___srcWebp = "pole___cover___fixed___srcWebp",
  pole___cover___fixed___srcSetWebp = "pole___cover___fixed___srcSetWebp",
  pole___cover___resolutions___base64 = "pole___cover___resolutions___base64",
  pole___cover___resolutions___tracedSVG = "pole___cover___resolutions___tracedSVG",
  pole___cover___resolutions___aspectRatio = "pole___cover___resolutions___aspectRatio",
  pole___cover___resolutions___width = "pole___cover___resolutions___width",
  pole___cover___resolutions___height = "pole___cover___resolutions___height",
  pole___cover___resolutions___src = "pole___cover___resolutions___src",
  pole___cover___resolutions___srcSet = "pole___cover___resolutions___srcSet",
  pole___cover___resolutions___srcWebp = "pole___cover___resolutions___srcWebp",
  pole___cover___resolutions___srcSetWebp = "pole___cover___resolutions___srcSetWebp",
  pole___cover___fluid___base64 = "pole___cover___fluid___base64",
  pole___cover___fluid___tracedSVG = "pole___cover___fluid___tracedSVG",
  pole___cover___fluid___aspectRatio = "pole___cover___fluid___aspectRatio",
  pole___cover___fluid___src = "pole___cover___fluid___src",
  pole___cover___fluid___srcSet = "pole___cover___fluid___srcSet",
  pole___cover___fluid___srcWebp = "pole___cover___fluid___srcWebp",
  pole___cover___fluid___srcSetWebp = "pole___cover___fluid___srcSetWebp",
  pole___cover___fluid___sizes = "pole___cover___fluid___sizes",
  pole___cover___sizes___base64 = "pole___cover___sizes___base64",
  pole___cover___sizes___tracedSVG = "pole___cover___sizes___tracedSVG",
  pole___cover___sizes___aspectRatio = "pole___cover___sizes___aspectRatio",
  pole___cover___sizes___src = "pole___cover___sizes___src",
  pole___cover___sizes___srcSet = "pole___cover___sizes___srcSet",
  pole___cover___sizes___srcWebp = "pole___cover___sizes___srcWebp",
  pole___cover___sizes___srcSetWebp = "pole___cover___sizes___srcSetWebp",
  pole___cover___sizes___sizes = "pole___cover___sizes___sizes",
  pole___cover___resize___base64 = "pole___cover___resize___base64",
  pole___cover___resize___tracedSVG = "pole___cover___resize___tracedSVG",
  pole___cover___resize___src = "pole___cover___resize___src",
  pole___cover___resize___width = "pole___cover___resize___width",
  pole___cover___resize___height = "pole___cover___resize___height",
  pole___cover___resize___aspectRatio = "pole___cover___resize___aspectRatio",
  pole___post = "pole___post",
  pole___post___id = "pole___post___id",
  pole___post___parent___id = "pole___post___parent___id",
  pole___post___parent___children = "pole___post___parent___children",
  pole___post___children = "pole___post___children",
  pole___post___children___id = "pole___post___children___id",
  pole___post___children___children = "pole___post___children___children",
  pole___post___internal___content = "pole___post___internal___content",
  pole___post___internal___contentDigest = "pole___post___internal___contentDigest",
  pole___post___internal___description = "pole___post___internal___description",
  pole___post___internal___fieldOwners = "pole___post___internal___fieldOwners",
  pole___post___internal___ignoreType = "pole___post___internal___ignoreType",
  pole___post___internal___mediaType = "pole___post___internal___mediaType",
  pole___post___internal___owner = "pole___post___internal___owner",
  pole___post___internal___type = "pole___post___internal___type",
  pole___post___title = "pole___post___title",
  pole___post___date = "pole___post___date",
  pole___post___slug = "pole___post___slug",
  pole___post___pole___id = "pole___post___pole___id",
  pole___post___pole___children = "pole___post___pole___children",
  pole___post___pole___poleId = "pole___post___pole___poleId",
  pole___post___pole___title = "pole___post___pole___title",
  pole___post___pole___slug = "pole___post___pole___slug",
  pole___post___pole___post = "pole___post___pole___post",
  pole___post___pole___spaceId = "pole___post___pole___spaceId",
  pole___post___pole___contentful_id = "pole___post___pole___contentful_id",
  pole___post___pole___createdAt = "pole___post___pole___createdAt",
  pole___post___pole___updatedAt = "pole___post___pole___updatedAt",
  pole___post___pole___node_locale = "pole___post___pole___node_locale",
  pole___post___image = "pole___post___image",
  pole___post___image___id = "pole___post___image___id",
  pole___post___image___children = "pole___post___image___children",
  pole___post___image___contentful_id = "pole___post___image___contentful_id",
  pole___post___image___title = "pole___post___image___title",
  pole___post___image___description = "pole___post___image___description",
  pole___post___image___node_locale = "pole___post___image___node_locale",
  pole___post___content___id = "pole___post___content___id",
  pole___post___content___children = "pole___post___content___children",
  pole___post___content___content = "pole___post___content___content",
  pole___post___content___nodeType = "pole___post___content___nodeType",
  pole___post___content___json = "pole___post___content___json",
  pole___post___spaceId = "pole___post___spaceId",
  pole___post___contentful_id = "pole___post___contentful_id",
  pole___post___createdAt = "pole___post___createdAt",
  pole___post___updatedAt = "pole___post___updatedAt",
  pole___post___sys___revision = "pole___post___sys___revision",
  pole___post___node_locale = "pole___post___node_locale",
  pole___post___author = "pole___post___author",
  pole___post___childContentfulPostContentRichTextNode___id = "pole___post___childContentfulPostContentRichTextNode___id",
  pole___post___childContentfulPostContentRichTextNode___children = "pole___post___childContentfulPostContentRichTextNode___children",
  pole___post___childContentfulPostContentRichTextNode___content = "pole___post___childContentfulPostContentRichTextNode___content",
  pole___post___childContentfulPostContentRichTextNode___nodeType = "pole___post___childContentfulPostContentRichTextNode___nodeType",
  pole___post___childContentfulPostContentRichTextNode___json = "pole___post___childContentfulPostContentRichTextNode___json",
  pole___description___id = "pole___description___id",
  pole___description___parent___id = "pole___description___parent___id",
  pole___description___parent___children = "pole___description___parent___children",
  pole___description___children = "pole___description___children",
  pole___description___children___id = "pole___description___children___id",
  pole___description___children___children = "pole___description___children___children",
  pole___description___internal___content = "pole___description___internal___content",
  pole___description___internal___contentDigest = "pole___description___internal___contentDigest",
  pole___description___internal___description = "pole___description___internal___description",
  pole___description___internal___fieldOwners = "pole___description___internal___fieldOwners",
  pole___description___internal___ignoreType = "pole___description___internal___ignoreType",
  pole___description___internal___mediaType = "pole___description___internal___mediaType",
  pole___description___internal___owner = "pole___description___internal___owner",
  pole___description___internal___type = "pole___description___internal___type",
  pole___description___content = "pole___description___content",
  pole___description___content___content = "pole___description___content___content",
  pole___description___content___nodeType = "pole___description___content___nodeType",
  pole___description___nodeType = "pole___description___nodeType",
  pole___description___description = "pole___description___description",
  pole___description___json = "pole___description___json",
  pole___description___childContentfulRichText___id = "pole___description___childContentfulRichText___id",
  pole___description___childContentfulRichText___children = "pole___description___childContentfulRichText___children",
  pole___description___childContentfulRichText___html = "pole___description___childContentfulRichText___html",
  pole___description___childContentfulRichText___timeToRead = "pole___description___childContentfulRichText___timeToRead",
  pole___spaceId = "pole___spaceId",
  pole___contentful_id = "pole___contentful_id",
  pole___createdAt = "pole___createdAt",
  pole___updatedAt = "pole___updatedAt",
  pole___sys___revision = "pole___sys___revision",
  pole___node_locale = "pole___node_locale",
  pole___childContentfulPoleDescriptionRichTextNode___id = "pole___childContentfulPoleDescriptionRichTextNode___id",
  pole___childContentfulPoleDescriptionRichTextNode___parent___id = "pole___childContentfulPoleDescriptionRichTextNode___parent___id",
  pole___childContentfulPoleDescriptionRichTextNode___parent___children = "pole___childContentfulPoleDescriptionRichTextNode___parent___children",
  pole___childContentfulPoleDescriptionRichTextNode___children = "pole___childContentfulPoleDescriptionRichTextNode___children",
  pole___childContentfulPoleDescriptionRichTextNode___children___id = "pole___childContentfulPoleDescriptionRichTextNode___children___id",
  pole___childContentfulPoleDescriptionRichTextNode___children___children = "pole___childContentfulPoleDescriptionRichTextNode___children___children",
  pole___childContentfulPoleDescriptionRichTextNode___internal___content = "pole___childContentfulPoleDescriptionRichTextNode___internal___content",
  pole___childContentfulPoleDescriptionRichTextNode___internal___contentDigest = "pole___childContentfulPoleDescriptionRichTextNode___internal___contentDigest",
  pole___childContentfulPoleDescriptionRichTextNode___internal___description = "pole___childContentfulPoleDescriptionRichTextNode___internal___description",
  pole___childContentfulPoleDescriptionRichTextNode___internal___fieldOwners = "pole___childContentfulPoleDescriptionRichTextNode___internal___fieldOwners",
  pole___childContentfulPoleDescriptionRichTextNode___internal___ignoreType = "pole___childContentfulPoleDescriptionRichTextNode___internal___ignoreType",
  pole___childContentfulPoleDescriptionRichTextNode___internal___mediaType = "pole___childContentfulPoleDescriptionRichTextNode___internal___mediaType",
  pole___childContentfulPoleDescriptionRichTextNode___internal___owner = "pole___childContentfulPoleDescriptionRichTextNode___internal___owner",
  pole___childContentfulPoleDescriptionRichTextNode___internal___type = "pole___childContentfulPoleDescriptionRichTextNode___internal___type",
  pole___childContentfulPoleDescriptionRichTextNode___content = "pole___childContentfulPoleDescriptionRichTextNode___content",
  pole___childContentfulPoleDescriptionRichTextNode___content___content = "pole___childContentfulPoleDescriptionRichTextNode___content___content",
  pole___childContentfulPoleDescriptionRichTextNode___content___nodeType = "pole___childContentfulPoleDescriptionRichTextNode___content___nodeType",
  pole___childContentfulPoleDescriptionRichTextNode___nodeType = "pole___childContentfulPoleDescriptionRichTextNode___nodeType",
  pole___childContentfulPoleDescriptionRichTextNode___description = "pole___childContentfulPoleDescriptionRichTextNode___description",
  pole___childContentfulPoleDescriptionRichTextNode___json = "pole___childContentfulPoleDescriptionRichTextNode___json",
  pole___childContentfulPoleDescriptionRichTextNode___childContentfulRichText___id = "pole___childContentfulPoleDescriptionRichTextNode___childContentfulRichText___id",
  pole___childContentfulPoleDescriptionRichTextNode___childContentfulRichText___children = "pole___childContentfulPoleDescriptionRichTextNode___childContentfulRichText___children",
  pole___childContentfulPoleDescriptionRichTextNode___childContentfulRichText___html = "pole___childContentfulPoleDescriptionRichTextNode___childContentfulRichText___html",
  pole___childContentfulPoleDescriptionRichTextNode___childContentfulRichText___timeToRead = "pole___childContentfulPoleDescriptionRichTextNode___childContentfulRichText___timeToRead",
  image = "image",
  image___id = "image___id",
  image___parent___id = "image___parent___id",
  image___parent___parent___id = "image___parent___parent___id",
  image___parent___parent___children = "image___parent___parent___children",
  image___parent___children = "image___parent___children",
  image___parent___children___id = "image___parent___children___id",
  image___parent___children___children = "image___parent___children___children",
  image___parent___internal___content = "image___parent___internal___content",
  image___parent___internal___contentDigest = "image___parent___internal___contentDigest",
  image___parent___internal___description = "image___parent___internal___description",
  image___parent___internal___fieldOwners = "image___parent___internal___fieldOwners",
  image___parent___internal___ignoreType = "image___parent___internal___ignoreType",
  image___parent___internal___mediaType = "image___parent___internal___mediaType",
  image___parent___internal___owner = "image___parent___internal___owner",
  image___parent___internal___type = "image___parent___internal___type",
  image___children = "image___children",
  image___children___id = "image___children___id",
  image___children___parent___id = "image___children___parent___id",
  image___children___parent___children = "image___children___parent___children",
  image___children___children = "image___children___children",
  image___children___children___id = "image___children___children___id",
  image___children___children___children = "image___children___children___children",
  image___children___internal___content = "image___children___internal___content",
  image___children___internal___contentDigest = "image___children___internal___contentDigest",
  image___children___internal___description = "image___children___internal___description",
  image___children___internal___fieldOwners = "image___children___internal___fieldOwners",
  image___children___internal___ignoreType = "image___children___internal___ignoreType",
  image___children___internal___mediaType = "image___children___internal___mediaType",
  image___children___internal___owner = "image___children___internal___owner",
  image___children___internal___type = "image___children___internal___type",
  image___internal___content = "image___internal___content",
  image___internal___contentDigest = "image___internal___contentDigest",
  image___internal___description = "image___internal___description",
  image___internal___fieldOwners = "image___internal___fieldOwners",
  image___internal___ignoreType = "image___internal___ignoreType",
  image___internal___mediaType = "image___internal___mediaType",
  image___internal___owner = "image___internal___owner",
  image___internal___type = "image___internal___type",
  image___contentful_id = "image___contentful_id",
  image___file___url = "image___file___url",
  image___file___details___size = "image___file___details___size",
  image___file___fileName = "image___file___fileName",
  image___file___contentType = "image___file___contentType",
  image___title = "image___title",
  image___description = "image___description",
  image___node_locale = "image___node_locale",
  image___fixed___base64 = "image___fixed___base64",
  image___fixed___tracedSVG = "image___fixed___tracedSVG",
  image___fixed___aspectRatio = "image___fixed___aspectRatio",
  image___fixed___width = "image___fixed___width",
  image___fixed___height = "image___fixed___height",
  image___fixed___src = "image___fixed___src",
  image___fixed___srcSet = "image___fixed___srcSet",
  image___fixed___srcWebp = "image___fixed___srcWebp",
  image___fixed___srcSetWebp = "image___fixed___srcSetWebp",
  image___resolutions___base64 = "image___resolutions___base64",
  image___resolutions___tracedSVG = "image___resolutions___tracedSVG",
  image___resolutions___aspectRatio = "image___resolutions___aspectRatio",
  image___resolutions___width = "image___resolutions___width",
  image___resolutions___height = "image___resolutions___height",
  image___resolutions___src = "image___resolutions___src",
  image___resolutions___srcSet = "image___resolutions___srcSet",
  image___resolutions___srcWebp = "image___resolutions___srcWebp",
  image___resolutions___srcSetWebp = "image___resolutions___srcSetWebp",
  image___fluid___base64 = "image___fluid___base64",
  image___fluid___tracedSVG = "image___fluid___tracedSVG",
  image___fluid___aspectRatio = "image___fluid___aspectRatio",
  image___fluid___src = "image___fluid___src",
  image___fluid___srcSet = "image___fluid___srcSet",
  image___fluid___srcWebp = "image___fluid___srcWebp",
  image___fluid___srcSetWebp = "image___fluid___srcSetWebp",
  image___fluid___sizes = "image___fluid___sizes",
  image___sizes___base64 = "image___sizes___base64",
  image___sizes___tracedSVG = "image___sizes___tracedSVG",
  image___sizes___aspectRatio = "image___sizes___aspectRatio",
  image___sizes___src = "image___sizes___src",
  image___sizes___srcSet = "image___sizes___srcSet",
  image___sizes___srcWebp = "image___sizes___srcWebp",
  image___sizes___srcSetWebp = "image___sizes___srcSetWebp",
  image___sizes___sizes = "image___sizes___sizes",
  image___resize___base64 = "image___resize___base64",
  image___resize___tracedSVG = "image___resize___tracedSVG",
  image___resize___src = "image___resize___src",
  image___resize___width = "image___resize___width",
  image___resize___height = "image___resize___height",
  image___resize___aspectRatio = "image___resize___aspectRatio",
  content___id = "content___id",
  content___parent___id = "content___parent___id",
  content___parent___parent___id = "content___parent___parent___id",
  content___parent___parent___children = "content___parent___parent___children",
  content___parent___children = "content___parent___children",
  content___parent___children___id = "content___parent___children___id",
  content___parent___children___children = "content___parent___children___children",
  content___parent___internal___content = "content___parent___internal___content",
  content___parent___internal___contentDigest = "content___parent___internal___contentDigest",
  content___parent___internal___description = "content___parent___internal___description",
  content___parent___internal___fieldOwners = "content___parent___internal___fieldOwners",
  content___parent___internal___ignoreType = "content___parent___internal___ignoreType",
  content___parent___internal___mediaType = "content___parent___internal___mediaType",
  content___parent___internal___owner = "content___parent___internal___owner",
  content___parent___internal___type = "content___parent___internal___type",
  content___children = "content___children",
  content___children___id = "content___children___id",
  content___children___parent___id = "content___children___parent___id",
  content___children___parent___children = "content___children___parent___children",
  content___children___children = "content___children___children",
  content___children___children___id = "content___children___children___id",
  content___children___children___children = "content___children___children___children",
  content___children___internal___content = "content___children___internal___content",
  content___children___internal___contentDigest = "content___children___internal___contentDigest",
  content___children___internal___description = "content___children___internal___description",
  content___children___internal___fieldOwners = "content___children___internal___fieldOwners",
  content___children___internal___ignoreType = "content___children___internal___ignoreType",
  content___children___internal___mediaType = "content___children___internal___mediaType",
  content___children___internal___owner = "content___children___internal___owner",
  content___children___internal___type = "content___children___internal___type",
  content___internal___content = "content___internal___content",
  content___internal___contentDigest = "content___internal___contentDigest",
  content___internal___description = "content___internal___description",
  content___internal___fieldOwners = "content___internal___fieldOwners",
  content___internal___ignoreType = "content___internal___ignoreType",
  content___internal___mediaType = "content___internal___mediaType",
  content___internal___owner = "content___internal___owner",
  content___internal___type = "content___internal___type",
  content___content = "content___content",
  content___nodeType = "content___nodeType",
  content___json = "content___json",
  content___childContentfulRichText___id = "content___childContentfulRichText___id",
  content___childContentfulRichText___parent___id = "content___childContentfulRichText___parent___id",
  content___childContentfulRichText___parent___children = "content___childContentfulRichText___parent___children",
  content___childContentfulRichText___children = "content___childContentfulRichText___children",
  content___childContentfulRichText___children___id = "content___childContentfulRichText___children___id",
  content___childContentfulRichText___children___children = "content___childContentfulRichText___children___children",
  content___childContentfulRichText___internal___content = "content___childContentfulRichText___internal___content",
  content___childContentfulRichText___internal___contentDigest = "content___childContentfulRichText___internal___contentDigest",
  content___childContentfulRichText___internal___description = "content___childContentfulRichText___internal___description",
  content___childContentfulRichText___internal___fieldOwners = "content___childContentfulRichText___internal___fieldOwners",
  content___childContentfulRichText___internal___ignoreType = "content___childContentfulRichText___internal___ignoreType",
  content___childContentfulRichText___internal___mediaType = "content___childContentfulRichText___internal___mediaType",
  content___childContentfulRichText___internal___owner = "content___childContentfulRichText___internal___owner",
  content___childContentfulRichText___internal___type = "content___childContentfulRichText___internal___type",
  content___childContentfulRichText___html = "content___childContentfulRichText___html",
  content___childContentfulRichText___timeToRead = "content___childContentfulRichText___timeToRead",
  spaceId = "spaceId",
  contentful_id = "contentful_id",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  sys___contentType___sys___type = "sys___contentType___sys___type",
  sys___contentType___sys___linkType = "sys___contentType___sys___linkType",
  sys___contentType___sys___id = "sys___contentType___sys___id",
  sys___contentType___sys___contentful_id = "sys___contentType___sys___contentful_id",
  sys___revision = "sys___revision",
  node_locale = "node_locale",
  author = "author",
  childContentfulPostContentRichTextNode___id = "childContentfulPostContentRichTextNode___id",
  childContentfulPostContentRichTextNode___parent___id = "childContentfulPostContentRichTextNode___parent___id",
  childContentfulPostContentRichTextNode___parent___parent___id = "childContentfulPostContentRichTextNode___parent___parent___id",
  childContentfulPostContentRichTextNode___parent___parent___children = "childContentfulPostContentRichTextNode___parent___parent___children",
  childContentfulPostContentRichTextNode___parent___children = "childContentfulPostContentRichTextNode___parent___children",
  childContentfulPostContentRichTextNode___parent___children___id = "childContentfulPostContentRichTextNode___parent___children___id",
  childContentfulPostContentRichTextNode___parent___children___children = "childContentfulPostContentRichTextNode___parent___children___children",
  childContentfulPostContentRichTextNode___parent___internal___content = "childContentfulPostContentRichTextNode___parent___internal___content",
  childContentfulPostContentRichTextNode___parent___internal___contentDigest = "childContentfulPostContentRichTextNode___parent___internal___contentDigest",
  childContentfulPostContentRichTextNode___parent___internal___description = "childContentfulPostContentRichTextNode___parent___internal___description",
  childContentfulPostContentRichTextNode___parent___internal___fieldOwners = "childContentfulPostContentRichTextNode___parent___internal___fieldOwners",
  childContentfulPostContentRichTextNode___parent___internal___ignoreType = "childContentfulPostContentRichTextNode___parent___internal___ignoreType",
  childContentfulPostContentRichTextNode___parent___internal___mediaType = "childContentfulPostContentRichTextNode___parent___internal___mediaType",
  childContentfulPostContentRichTextNode___parent___internal___owner = "childContentfulPostContentRichTextNode___parent___internal___owner",
  childContentfulPostContentRichTextNode___parent___internal___type = "childContentfulPostContentRichTextNode___parent___internal___type",
  childContentfulPostContentRichTextNode___children = "childContentfulPostContentRichTextNode___children",
  childContentfulPostContentRichTextNode___children___id = "childContentfulPostContentRichTextNode___children___id",
  childContentfulPostContentRichTextNode___children___parent___id = "childContentfulPostContentRichTextNode___children___parent___id",
  childContentfulPostContentRichTextNode___children___parent___children = "childContentfulPostContentRichTextNode___children___parent___children",
  childContentfulPostContentRichTextNode___children___children = "childContentfulPostContentRichTextNode___children___children",
  childContentfulPostContentRichTextNode___children___children___id = "childContentfulPostContentRichTextNode___children___children___id",
  childContentfulPostContentRichTextNode___children___children___children = "childContentfulPostContentRichTextNode___children___children___children",
  childContentfulPostContentRichTextNode___children___internal___content = "childContentfulPostContentRichTextNode___children___internal___content",
  childContentfulPostContentRichTextNode___children___internal___contentDigest = "childContentfulPostContentRichTextNode___children___internal___contentDigest",
  childContentfulPostContentRichTextNode___children___internal___description = "childContentfulPostContentRichTextNode___children___internal___description",
  childContentfulPostContentRichTextNode___children___internal___fieldOwners = "childContentfulPostContentRichTextNode___children___internal___fieldOwners",
  childContentfulPostContentRichTextNode___children___internal___ignoreType = "childContentfulPostContentRichTextNode___children___internal___ignoreType",
  childContentfulPostContentRichTextNode___children___internal___mediaType = "childContentfulPostContentRichTextNode___children___internal___mediaType",
  childContentfulPostContentRichTextNode___children___internal___owner = "childContentfulPostContentRichTextNode___children___internal___owner",
  childContentfulPostContentRichTextNode___children___internal___type = "childContentfulPostContentRichTextNode___children___internal___type",
  childContentfulPostContentRichTextNode___internal___content = "childContentfulPostContentRichTextNode___internal___content",
  childContentfulPostContentRichTextNode___internal___contentDigest = "childContentfulPostContentRichTextNode___internal___contentDigest",
  childContentfulPostContentRichTextNode___internal___description = "childContentfulPostContentRichTextNode___internal___description",
  childContentfulPostContentRichTextNode___internal___fieldOwners = "childContentfulPostContentRichTextNode___internal___fieldOwners",
  childContentfulPostContentRichTextNode___internal___ignoreType = "childContentfulPostContentRichTextNode___internal___ignoreType",
  childContentfulPostContentRichTextNode___internal___mediaType = "childContentfulPostContentRichTextNode___internal___mediaType",
  childContentfulPostContentRichTextNode___internal___owner = "childContentfulPostContentRichTextNode___internal___owner",
  childContentfulPostContentRichTextNode___internal___type = "childContentfulPostContentRichTextNode___internal___type",
  childContentfulPostContentRichTextNode___content = "childContentfulPostContentRichTextNode___content",
  childContentfulPostContentRichTextNode___nodeType = "childContentfulPostContentRichTextNode___nodeType",
  childContentfulPostContentRichTextNode___json = "childContentfulPostContentRichTextNode___json",
  childContentfulPostContentRichTextNode___childContentfulRichText___id = "childContentfulPostContentRichTextNode___childContentfulRichText___id",
  childContentfulPostContentRichTextNode___childContentfulRichText___parent___id = "childContentfulPostContentRichTextNode___childContentfulRichText___parent___id",
  childContentfulPostContentRichTextNode___childContentfulRichText___parent___children = "childContentfulPostContentRichTextNode___childContentfulRichText___parent___children",
  childContentfulPostContentRichTextNode___childContentfulRichText___children = "childContentfulPostContentRichTextNode___childContentfulRichText___children",
  childContentfulPostContentRichTextNode___childContentfulRichText___children___id = "childContentfulPostContentRichTextNode___childContentfulRichText___children___id",
  childContentfulPostContentRichTextNode___childContentfulRichText___children___children = "childContentfulPostContentRichTextNode___childContentfulRichText___children___children",
  childContentfulPostContentRichTextNode___childContentfulRichText___internal___content = "childContentfulPostContentRichTextNode___childContentfulRichText___internal___content",
  childContentfulPostContentRichTextNode___childContentfulRichText___internal___contentDigest = "childContentfulPostContentRichTextNode___childContentfulRichText___internal___contentDigest",
  childContentfulPostContentRichTextNode___childContentfulRichText___internal___description = "childContentfulPostContentRichTextNode___childContentfulRichText___internal___description",
  childContentfulPostContentRichTextNode___childContentfulRichText___internal___fieldOwners = "childContentfulPostContentRichTextNode___childContentfulRichText___internal___fieldOwners",
  childContentfulPostContentRichTextNode___childContentfulRichText___internal___ignoreType = "childContentfulPostContentRichTextNode___childContentfulRichText___internal___ignoreType",
  childContentfulPostContentRichTextNode___childContentfulRichText___internal___mediaType = "childContentfulPostContentRichTextNode___childContentfulRichText___internal___mediaType",
  childContentfulPostContentRichTextNode___childContentfulRichText___internal___owner = "childContentfulPostContentRichTextNode___childContentfulRichText___internal___owner",
  childContentfulPostContentRichTextNode___childContentfulRichText___internal___type = "childContentfulPostContentRichTextNode___childContentfulRichText___internal___type",
  childContentfulPostContentRichTextNode___childContentfulRichText___html = "childContentfulPostContentRichTextNode___childContentfulRichText___html",
  childContentfulPostContentRichTextNode___childContentfulRichText___timeToRead = "childContentfulPostContentRichTextNode___childContentfulRichText___timeToRead",
}

export type ContentfulPostConnection = {
  __typename?: "ContentfulPostConnection";
  totalCount: Scalars["Int"];
  edges: Array<ContentfulPostEdge>;
  nodes: Array<ContentfulPost>;
  pageInfo: PageInfo;
  distinct: Array<Scalars["String"]>;
  group: Array<ContentfulPostGroupConnection>;
};

export type ContentfulPostConnectionDistinctArgs = {
  field: ContentfulPostFieldsEnum;
};

export type ContentfulPostConnectionGroupArgs = {
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
  field: ContentfulPostFieldsEnum;
};

export type ContentfulPostEdge = {
  __typename?: "ContentfulPostEdge";
  next?: Maybe<ContentfulPost>;
  node: ContentfulPost;
  previous?: Maybe<ContentfulPost>;
};

export type ContentfulPostGroupConnection = {
  __typename?: "ContentfulPostGroupConnection";
  totalCount: Scalars["Int"];
  edges: Array<ContentfulPostEdge>;
  nodes: Array<ContentfulPost>;
  pageInfo: PageInfo;
  field: Scalars["String"];
  fieldValue?: Maybe<Scalars["String"]>;
};

export type ContentfulContentType = Node & {
  __typename?: "ContentfulContentType";
  id: Scalars["ID"];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  name?: Maybe<Scalars["String"]>;
  displayField?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
};

export type ContentfulContentTypeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  displayField?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulContentTypeSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulContentTypeFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export enum ContentfulContentTypeFieldsEnum {
  id = "id",
  parent___id = "parent___id",
  parent___parent___id = "parent___parent___id",
  parent___parent___parent___id = "parent___parent___parent___id",
  parent___parent___parent___children = "parent___parent___parent___children",
  parent___parent___children = "parent___parent___children",
  parent___parent___children___id = "parent___parent___children___id",
  parent___parent___children___children = "parent___parent___children___children",
  parent___parent___internal___content = "parent___parent___internal___content",
  parent___parent___internal___contentDigest = "parent___parent___internal___contentDigest",
  parent___parent___internal___description = "parent___parent___internal___description",
  parent___parent___internal___fieldOwners = "parent___parent___internal___fieldOwners",
  parent___parent___internal___ignoreType = "parent___parent___internal___ignoreType",
  parent___parent___internal___mediaType = "parent___parent___internal___mediaType",
  parent___parent___internal___owner = "parent___parent___internal___owner",
  parent___parent___internal___type = "parent___parent___internal___type",
  parent___children = "parent___children",
  parent___children___id = "parent___children___id",
  parent___children___parent___id = "parent___children___parent___id",
  parent___children___parent___children = "parent___children___parent___children",
  parent___children___children = "parent___children___children",
  parent___children___children___id = "parent___children___children___id",
  parent___children___children___children = "parent___children___children___children",
  parent___children___internal___content = "parent___children___internal___content",
  parent___children___internal___contentDigest = "parent___children___internal___contentDigest",
  parent___children___internal___description = "parent___children___internal___description",
  parent___children___internal___fieldOwners = "parent___children___internal___fieldOwners",
  parent___children___internal___ignoreType = "parent___children___internal___ignoreType",
  parent___children___internal___mediaType = "parent___children___internal___mediaType",
  parent___children___internal___owner = "parent___children___internal___owner",
  parent___children___internal___type = "parent___children___internal___type",
  parent___internal___content = "parent___internal___content",
  parent___internal___contentDigest = "parent___internal___contentDigest",
  parent___internal___description = "parent___internal___description",
  parent___internal___fieldOwners = "parent___internal___fieldOwners",
  parent___internal___ignoreType = "parent___internal___ignoreType",
  parent___internal___mediaType = "parent___internal___mediaType",
  parent___internal___owner = "parent___internal___owner",
  parent___internal___type = "parent___internal___type",
  children = "children",
  children___id = "children___id",
  children___parent___id = "children___parent___id",
  children___parent___parent___id = "children___parent___parent___id",
  children___parent___parent___children = "children___parent___parent___children",
  children___parent___children = "children___parent___children",
  children___parent___children___id = "children___parent___children___id",
  children___parent___children___children = "children___parent___children___children",
  children___parent___internal___content = "children___parent___internal___content",
  children___parent___internal___contentDigest = "children___parent___internal___contentDigest",
  children___parent___internal___description = "children___parent___internal___description",
  children___parent___internal___fieldOwners = "children___parent___internal___fieldOwners",
  children___parent___internal___ignoreType = "children___parent___internal___ignoreType",
  children___parent___internal___mediaType = "children___parent___internal___mediaType",
  children___parent___internal___owner = "children___parent___internal___owner",
  children___parent___internal___type = "children___parent___internal___type",
  children___children = "children___children",
  children___children___id = "children___children___id",
  children___children___parent___id = "children___children___parent___id",
  children___children___parent___children = "children___children___parent___children",
  children___children___children = "children___children___children",
  children___children___children___id = "children___children___children___id",
  children___children___children___children = "children___children___children___children",
  children___children___internal___content = "children___children___internal___content",
  children___children___internal___contentDigest = "children___children___internal___contentDigest",
  children___children___internal___description = "children___children___internal___description",
  children___children___internal___fieldOwners = "children___children___internal___fieldOwners",
  children___children___internal___ignoreType = "children___children___internal___ignoreType",
  children___children___internal___mediaType = "children___children___internal___mediaType",
  children___children___internal___owner = "children___children___internal___owner",
  children___children___internal___type = "children___children___internal___type",
  children___internal___content = "children___internal___content",
  children___internal___contentDigest = "children___internal___contentDigest",
  children___internal___description = "children___internal___description",
  children___internal___fieldOwners = "children___internal___fieldOwners",
  children___internal___ignoreType = "children___internal___ignoreType",
  children___internal___mediaType = "children___internal___mediaType",
  children___internal___owner = "children___internal___owner",
  children___internal___type = "children___internal___type",
  internal___content = "internal___content",
  internal___contentDigest = "internal___contentDigest",
  internal___description = "internal___description",
  internal___fieldOwners = "internal___fieldOwners",
  internal___ignoreType = "internal___ignoreType",
  internal___mediaType = "internal___mediaType",
  internal___owner = "internal___owner",
  internal___type = "internal___type",
  name = "name",
  displayField = "displayField",
  description = "description",
}

export type ContentfulContentTypeConnection = {
  __typename?: "ContentfulContentTypeConnection";
  totalCount: Scalars["Int"];
  edges: Array<ContentfulContentTypeEdge>;
  nodes: Array<ContentfulContentType>;
  pageInfo: PageInfo;
  distinct: Array<Scalars["String"]>;
  group: Array<ContentfulContentTypeGroupConnection>;
};

export type ContentfulContentTypeConnectionDistinctArgs = {
  field: ContentfulContentTypeFieldsEnum;
};

export type ContentfulContentTypeConnectionGroupArgs = {
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
  field: ContentfulContentTypeFieldsEnum;
};

export type ContentfulContentTypeEdge = {
  __typename?: "ContentfulContentTypeEdge";
  next?: Maybe<ContentfulContentType>;
  node: ContentfulContentType;
  previous?: Maybe<ContentfulContentType>;
};

export type ContentfulContentTypeGroupConnection = {
  __typename?: "ContentfulContentTypeGroupConnection";
  totalCount: Scalars["Int"];
  edges: Array<ContentfulContentTypeEdge>;
  nodes: Array<ContentfulContentType>;
  pageInfo: PageInfo;
  field: Scalars["String"];
  fieldValue?: Maybe<Scalars["String"]>;
};

export type SiteBuildMetadata = Node & {
  __typename?: "SiteBuildMetadata";
  id: Scalars["ID"];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  buildTime?: Maybe<Scalars["Date"]>;
};

export type SiteBuildMetadataBuildTimeArgs = {
  formatString?: Maybe<Scalars["String"]>;
  fromNow?: Maybe<Scalars["Boolean"]>;
  difference?: Maybe<Scalars["String"]>;
  locale?: Maybe<Scalars["String"]>;
};

export type SiteBuildMetadataFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  buildTime?: Maybe<DateQueryOperatorInput>;
};

export type SiteBuildMetadataSortInput = {
  fields?: Maybe<Array<Maybe<SiteBuildMetadataFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export enum SiteBuildMetadataFieldsEnum {
  id = "id",
  parent___id = "parent___id",
  parent___parent___id = "parent___parent___id",
  parent___parent___parent___id = "parent___parent___parent___id",
  parent___parent___parent___children = "parent___parent___parent___children",
  parent___parent___children = "parent___parent___children",
  parent___parent___children___id = "parent___parent___children___id",
  parent___parent___children___children = "parent___parent___children___children",
  parent___parent___internal___content = "parent___parent___internal___content",
  parent___parent___internal___contentDigest = "parent___parent___internal___contentDigest",
  parent___parent___internal___description = "parent___parent___internal___description",
  parent___parent___internal___fieldOwners = "parent___parent___internal___fieldOwners",
  parent___parent___internal___ignoreType = "parent___parent___internal___ignoreType",
  parent___parent___internal___mediaType = "parent___parent___internal___mediaType",
  parent___parent___internal___owner = "parent___parent___internal___owner",
  parent___parent___internal___type = "parent___parent___internal___type",
  parent___children = "parent___children",
  parent___children___id = "parent___children___id",
  parent___children___parent___id = "parent___children___parent___id",
  parent___children___parent___children = "parent___children___parent___children",
  parent___children___children = "parent___children___children",
  parent___children___children___id = "parent___children___children___id",
  parent___children___children___children = "parent___children___children___children",
  parent___children___internal___content = "parent___children___internal___content",
  parent___children___internal___contentDigest = "parent___children___internal___contentDigest",
  parent___children___internal___description = "parent___children___internal___description",
  parent___children___internal___fieldOwners = "parent___children___internal___fieldOwners",
  parent___children___internal___ignoreType = "parent___children___internal___ignoreType",
  parent___children___internal___mediaType = "parent___children___internal___mediaType",
  parent___children___internal___owner = "parent___children___internal___owner",
  parent___children___internal___type = "parent___children___internal___type",
  parent___internal___content = "parent___internal___content",
  parent___internal___contentDigest = "parent___internal___contentDigest",
  parent___internal___description = "parent___internal___description",
  parent___internal___fieldOwners = "parent___internal___fieldOwners",
  parent___internal___ignoreType = "parent___internal___ignoreType",
  parent___internal___mediaType = "parent___internal___mediaType",
  parent___internal___owner = "parent___internal___owner",
  parent___internal___type = "parent___internal___type",
  children = "children",
  children___id = "children___id",
  children___parent___id = "children___parent___id",
  children___parent___parent___id = "children___parent___parent___id",
  children___parent___parent___children = "children___parent___parent___children",
  children___parent___children = "children___parent___children",
  children___parent___children___id = "children___parent___children___id",
  children___parent___children___children = "children___parent___children___children",
  children___parent___internal___content = "children___parent___internal___content",
  children___parent___internal___contentDigest = "children___parent___internal___contentDigest",
  children___parent___internal___description = "children___parent___internal___description",
  children___parent___internal___fieldOwners = "children___parent___internal___fieldOwners",
  children___parent___internal___ignoreType = "children___parent___internal___ignoreType",
  children___parent___internal___mediaType = "children___parent___internal___mediaType",
  children___parent___internal___owner = "children___parent___internal___owner",
  children___parent___internal___type = "children___parent___internal___type",
  children___children = "children___children",
  children___children___id = "children___children___id",
  children___children___parent___id = "children___children___parent___id",
  children___children___parent___children = "children___children___parent___children",
  children___children___children = "children___children___children",
  children___children___children___id = "children___children___children___id",
  children___children___children___children = "children___children___children___children",
  children___children___internal___content = "children___children___internal___content",
  children___children___internal___contentDigest = "children___children___internal___contentDigest",
  children___children___internal___description = "children___children___internal___description",
  children___children___internal___fieldOwners = "children___children___internal___fieldOwners",
  children___children___internal___ignoreType = "children___children___internal___ignoreType",
  children___children___internal___mediaType = "children___children___internal___mediaType",
  children___children___internal___owner = "children___children___internal___owner",
  children___children___internal___type = "children___children___internal___type",
  children___internal___content = "children___internal___content",
  children___internal___contentDigest = "children___internal___contentDigest",
  children___internal___description = "children___internal___description",
  children___internal___fieldOwners = "children___internal___fieldOwners",
  children___internal___ignoreType = "children___internal___ignoreType",
  children___internal___mediaType = "children___internal___mediaType",
  children___internal___owner = "children___internal___owner",
  children___internal___type = "children___internal___type",
  internal___content = "internal___content",
  internal___contentDigest = "internal___contentDigest",
  internal___description = "internal___description",
  internal___fieldOwners = "internal___fieldOwners",
  internal___ignoreType = "internal___ignoreType",
  internal___mediaType = "internal___mediaType",
  internal___owner = "internal___owner",
  internal___type = "internal___type",
  buildTime = "buildTime",
}

export type SiteBuildMetadataConnection = {
  __typename?: "SiteBuildMetadataConnection";
  totalCount: Scalars["Int"];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  distinct: Array<Scalars["String"]>;
  group: Array<SiteBuildMetadataGroupConnection>;
};

export type SiteBuildMetadataConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataConnectionGroupArgs = {
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataEdge = {
  __typename?: "SiteBuildMetadataEdge";
  next?: Maybe<SiteBuildMetadata>;
  node: SiteBuildMetadata;
  previous?: Maybe<SiteBuildMetadata>;
};

export type SiteBuildMetadataGroupConnection = {
  __typename?: "SiteBuildMetadataGroupConnection";
  totalCount: Scalars["Int"];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  field: Scalars["String"];
  fieldValue?: Maybe<Scalars["String"]>;
};

export type SitePluginSortInput = {
  fields?: Maybe<Array<Maybe<SitePluginFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export enum SitePluginFieldsEnum {
  id = "id",
  parent___id = "parent___id",
  parent___parent___id = "parent___parent___id",
  parent___parent___parent___id = "parent___parent___parent___id",
  parent___parent___parent___children = "parent___parent___parent___children",
  parent___parent___children = "parent___parent___children",
  parent___parent___children___id = "parent___parent___children___id",
  parent___parent___children___children = "parent___parent___children___children",
  parent___parent___internal___content = "parent___parent___internal___content",
  parent___parent___internal___contentDigest = "parent___parent___internal___contentDigest",
  parent___parent___internal___description = "parent___parent___internal___description",
  parent___parent___internal___fieldOwners = "parent___parent___internal___fieldOwners",
  parent___parent___internal___ignoreType = "parent___parent___internal___ignoreType",
  parent___parent___internal___mediaType = "parent___parent___internal___mediaType",
  parent___parent___internal___owner = "parent___parent___internal___owner",
  parent___parent___internal___type = "parent___parent___internal___type",
  parent___children = "parent___children",
  parent___children___id = "parent___children___id",
  parent___children___parent___id = "parent___children___parent___id",
  parent___children___parent___children = "parent___children___parent___children",
  parent___children___children = "parent___children___children",
  parent___children___children___id = "parent___children___children___id",
  parent___children___children___children = "parent___children___children___children",
  parent___children___internal___content = "parent___children___internal___content",
  parent___children___internal___contentDigest = "parent___children___internal___contentDigest",
  parent___children___internal___description = "parent___children___internal___description",
  parent___children___internal___fieldOwners = "parent___children___internal___fieldOwners",
  parent___children___internal___ignoreType = "parent___children___internal___ignoreType",
  parent___children___internal___mediaType = "parent___children___internal___mediaType",
  parent___children___internal___owner = "parent___children___internal___owner",
  parent___children___internal___type = "parent___children___internal___type",
  parent___internal___content = "parent___internal___content",
  parent___internal___contentDigest = "parent___internal___contentDigest",
  parent___internal___description = "parent___internal___description",
  parent___internal___fieldOwners = "parent___internal___fieldOwners",
  parent___internal___ignoreType = "parent___internal___ignoreType",
  parent___internal___mediaType = "parent___internal___mediaType",
  parent___internal___owner = "parent___internal___owner",
  parent___internal___type = "parent___internal___type",
  children = "children",
  children___id = "children___id",
  children___parent___id = "children___parent___id",
  children___parent___parent___id = "children___parent___parent___id",
  children___parent___parent___children = "children___parent___parent___children",
  children___parent___children = "children___parent___children",
  children___parent___children___id = "children___parent___children___id",
  children___parent___children___children = "children___parent___children___children",
  children___parent___internal___content = "children___parent___internal___content",
  children___parent___internal___contentDigest = "children___parent___internal___contentDigest",
  children___parent___internal___description = "children___parent___internal___description",
  children___parent___internal___fieldOwners = "children___parent___internal___fieldOwners",
  children___parent___internal___ignoreType = "children___parent___internal___ignoreType",
  children___parent___internal___mediaType = "children___parent___internal___mediaType",
  children___parent___internal___owner = "children___parent___internal___owner",
  children___parent___internal___type = "children___parent___internal___type",
  children___children = "children___children",
  children___children___id = "children___children___id",
  children___children___parent___id = "children___children___parent___id",
  children___children___parent___children = "children___children___parent___children",
  children___children___children = "children___children___children",
  children___children___children___id = "children___children___children___id",
  children___children___children___children = "children___children___children___children",
  children___children___internal___content = "children___children___internal___content",
  children___children___internal___contentDigest = "children___children___internal___contentDigest",
  children___children___internal___description = "children___children___internal___description",
  children___children___internal___fieldOwners = "children___children___internal___fieldOwners",
  children___children___internal___ignoreType = "children___children___internal___ignoreType",
  children___children___internal___mediaType = "children___children___internal___mediaType",
  children___children___internal___owner = "children___children___internal___owner",
  children___children___internal___type = "children___children___internal___type",
  children___internal___content = "children___internal___content",
  children___internal___contentDigest = "children___internal___contentDigest",
  children___internal___description = "children___internal___description",
  children___internal___fieldOwners = "children___internal___fieldOwners",
  children___internal___ignoreType = "children___internal___ignoreType",
  children___internal___mediaType = "children___internal___mediaType",
  children___internal___owner = "children___internal___owner",
  children___internal___type = "children___internal___type",
  internal___content = "internal___content",
  internal___contentDigest = "internal___contentDigest",
  internal___description = "internal___description",
  internal___fieldOwners = "internal___fieldOwners",
  internal___ignoreType = "internal___ignoreType",
  internal___mediaType = "internal___mediaType",
  internal___owner = "internal___owner",
  internal___type = "internal___type",
  resolve = "resolve",
  name = "name",
  version = "version",
  pluginOptions___isTSX = "pluginOptions___isTSX",
  pluginOptions___allExtensions = "pluginOptions___allExtensions",
  pluginOptions___name = "pluginOptions___name",
  pluginOptions___short_name = "pluginOptions___short_name",
  pluginOptions___start_url = "pluginOptions___start_url",
  pluginOptions___background_color = "pluginOptions___background_color",
  pluginOptions___theme_color = "pluginOptions___theme_color",
  pluginOptions___display = "pluginOptions___display",
  pluginOptions___icon = "pluginOptions___icon",
  pluginOptions___implementation___info = "pluginOptions___implementation___info",
  pluginOptions___spaceId = "pluginOptions___spaceId",
  pluginOptions___accessToken = "pluginOptions___accessToken",
  pluginOptions___host = "pluginOptions___host",
  pluginOptions___path = "pluginOptions___path",
  pluginOptions___pathCheck = "pluginOptions___pathCheck",
  nodeAPIs = "nodeAPIs",
  browserAPIs = "browserAPIs",
  ssrAPIs = "ssrAPIs",
  pluginFilepath = "pluginFilepath",
  packageJson___name = "packageJson___name",
  packageJson___description = "packageJson___description",
  packageJson___version = "packageJson___version",
  packageJson___main = "packageJson___main",
  packageJson___license = "packageJson___license",
  packageJson___dependencies = "packageJson___dependencies",
  packageJson___dependencies___name = "packageJson___dependencies___name",
  packageJson___dependencies___version = "packageJson___dependencies___version",
  packageJson___devDependencies = "packageJson___devDependencies",
  packageJson___devDependencies___name = "packageJson___devDependencies___name",
  packageJson___devDependencies___version = "packageJson___devDependencies___version",
  packageJson___peerDependencies = "packageJson___peerDependencies",
  packageJson___peerDependencies___name = "packageJson___peerDependencies___name",
  packageJson___peerDependencies___version = "packageJson___peerDependencies___version",
  packageJson___keywords = "packageJson___keywords",
}

export type SitePluginConnection = {
  __typename?: "SitePluginConnection";
  totalCount: Scalars["Int"];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  distinct: Array<Scalars["String"]>;
  group: Array<SitePluginGroupConnection>;
};

export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldsEnum;
};

export type SitePluginConnectionGroupArgs = {
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
  field: SitePluginFieldsEnum;
};

export type SitePluginEdge = {
  __typename?: "SitePluginEdge";
  next?: Maybe<SitePlugin>;
  node: SitePlugin;
  previous?: Maybe<SitePlugin>;
};

export type SitePluginGroupConnection = {
  __typename?: "SitePluginGroupConnection";
  totalCount: Scalars["Int"];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  field: Scalars["String"];
  fieldValue?: Maybe<Scalars["String"]>;
};

export type GatsbyContentfulFixedFragment = { __typename?: "ContentfulFixed" } & Pick<
  ContentfulFixed,
  "base64" | "width" | "height" | "src" | "srcSet"
>;

export type GatsbyContentfulFixed_TracedSvgFragment = { __typename?: "ContentfulFixed" } & Pick<
  ContentfulFixed,
  "tracedSVG" | "width" | "height" | "src" | "srcSet"
>;

export type GatsbyContentfulFixed_NoBase64Fragment = { __typename?: "ContentfulFixed" } & Pick<
  ContentfulFixed,
  "width" | "height" | "src" | "srcSet"
>;

export type GatsbyContentfulFixed_WithWebpFragment = { __typename?: "ContentfulFixed" } & Pick<
  ContentfulFixed,
  "base64" | "width" | "height" | "src" | "srcSet" | "srcWebp" | "srcSetWebp"
>;

export type GatsbyContentfulFixed_WithWebp_NoBase64Fragment = { __typename?: "ContentfulFixed" } & Pick<
  ContentfulFixed,
  "width" | "height" | "src" | "srcSet" | "srcWebp" | "srcSetWebp"
>;

export type GatsbyContentfulFluidFragment = { __typename?: "ContentfulFluid" } & Pick<
  ContentfulFluid,
  "base64" | "aspectRatio" | "src" | "srcSet" | "sizes"
>;

export type GatsbyContentfulFluid_TracedSvgFragment = { __typename?: "ContentfulFluid" } & Pick<
  ContentfulFluid,
  "tracedSVG" | "aspectRatio" | "src" | "srcSet" | "sizes"
>;

export type GatsbyContentfulFluid_NoBase64Fragment = { __typename?: "ContentfulFluid" } & Pick<
  ContentfulFluid,
  "aspectRatio" | "src" | "srcSet" | "sizes"
>;

export type GatsbyContentfulFluid_WithWebpFragment = { __typename?: "ContentfulFluid" } & Pick<
  ContentfulFluid,
  "base64" | "aspectRatio" | "src" | "srcSet" | "srcWebp" | "srcSetWebp" | "sizes"
>;

export type GatsbyContentfulFluid_WithWebp_NoBase64Fragment = { __typename?: "ContentfulFluid" } & Pick<
  ContentfulFluid,
  "aspectRatio" | "src" | "srcSet" | "srcWebp" | "srcSetWebp" | "sizes"
>;

export type GatsbyContentfulResolutionsFragment = { __typename?: "ContentfulResolutions" } & Pick<
  ContentfulResolutions,
  "base64" | "width" | "height" | "src" | "srcSet"
>;

export type GatsbyContentfulResolutions_TracedSvgFragment = { __typename?: "ContentfulResolutions" } & Pick<
  ContentfulResolutions,
  "tracedSVG" | "width" | "height" | "src" | "srcSet"
>;

export type GatsbyContentfulResolutions_NoBase64Fragment = { __typename?: "ContentfulResolutions" } & Pick<
  ContentfulResolutions,
  "width" | "height" | "src" | "srcSet"
>;

export type GatsbyContentfulResolutions_WithWebpFragment = { __typename?: "ContentfulResolutions" } & Pick<
  ContentfulResolutions,
  "base64" | "width" | "height" | "src" | "srcSet" | "srcWebp" | "srcSetWebp"
>;

export type GatsbyContentfulResolutions_WithWebp_NoBase64Fragment = { __typename?: "ContentfulResolutions" } & Pick<
  ContentfulResolutions,
  "width" | "height" | "src" | "srcSet" | "srcWebp" | "srcSetWebp"
>;

export type GatsbyContentfulSizesFragment = { __typename?: "ContentfulSizes" } & Pick<
  ContentfulSizes,
  "base64" | "aspectRatio" | "src" | "srcSet" | "sizes"
>;

export type GatsbyContentfulSizes_TracedSvgFragment = { __typename?: "ContentfulSizes" } & Pick<
  ContentfulSizes,
  "tracedSVG" | "aspectRatio" | "src" | "srcSet" | "sizes"
>;

export type GatsbyContentfulSizes_NoBase64Fragment = { __typename?: "ContentfulSizes" } & Pick<
  ContentfulSizes,
  "aspectRatio" | "src" | "srcSet" | "sizes"
>;

export type GatsbyContentfulSizes_WithWebpFragment = { __typename?: "ContentfulSizes" } & Pick<
  ContentfulSizes,
  "base64" | "aspectRatio" | "src" | "srcSet" | "srcWebp" | "srcSetWebp" | "sizes"
>;

export type GatsbyContentfulSizes_WithWebp_NoBase64Fragment = { __typename?: "ContentfulSizes" } & Pick<
  ContentfulSizes,
  "aspectRatio" | "src" | "srcSet" | "srcWebp" | "srcSetWebp" | "sizes"
>;

export type GatsbyImageSharpFixedFragment = { __typename?: "ImageSharpFixed" } & Pick<
  ImageSharpFixed,
  "base64" | "width" | "height" | "src" | "srcSet"
>;

export type GatsbyImageSharpFixed_TracedSvgFragment = { __typename?: "ImageSharpFixed" } & Pick<
  ImageSharpFixed,
  "tracedSVG" | "width" | "height" | "src" | "srcSet"
>;

export type GatsbyImageSharpFixed_WithWebpFragment = { __typename?: "ImageSharpFixed" } & Pick<
  ImageSharpFixed,
  "base64" | "width" | "height" | "src" | "srcSet" | "srcWebp" | "srcSetWebp"
>;

export type GatsbyImageSharpFixed_WithWebp_TracedSvgFragment = { __typename?: "ImageSharpFixed" } & Pick<
  ImageSharpFixed,
  "tracedSVG" | "width" | "height" | "src" | "srcSet" | "srcWebp" | "srcSetWebp"
>;

export type GatsbyImageSharpFixed_NoBase64Fragment = { __typename?: "ImageSharpFixed" } & Pick<
  ImageSharpFixed,
  "width" | "height" | "src" | "srcSet"
>;

export type GatsbyImageSharpFixed_WithWebp_NoBase64Fragment = { __typename?: "ImageSharpFixed" } & Pick<
  ImageSharpFixed,
  "width" | "height" | "src" | "srcSet" | "srcWebp" | "srcSetWebp"
>;

export type GatsbyImageSharpFluidFragment = { __typename?: "ImageSharpFluid" } & Pick<
  ImageSharpFluid,
  "base64" | "aspectRatio" | "src" | "srcSet" | "sizes"
>;

export type GatsbyImageSharpFluidLimitPresentationSizeFragment = { __typename?: "ImageSharpFluid" } & {
  maxHeight: ImageSharpFluid["presentationHeight"];
  maxWidth: ImageSharpFluid["presentationWidth"];
};

export type GatsbyImageSharpFluid_TracedSvgFragment = { __typename?: "ImageSharpFluid" } & Pick<
  ImageSharpFluid,
  "tracedSVG" | "aspectRatio" | "src" | "srcSet" | "sizes"
>;

export type GatsbyImageSharpFluid_WithWebpFragment = { __typename?: "ImageSharpFluid" } & Pick<
  ImageSharpFluid,
  "base64" | "aspectRatio" | "src" | "srcSet" | "srcWebp" | "srcSetWebp" | "sizes"
>;

export type GatsbyImageSharpFluid_WithWebp_TracedSvgFragment = { __typename?: "ImageSharpFluid" } & Pick<
  ImageSharpFluid,
  "tracedSVG" | "aspectRatio" | "src" | "srcSet" | "srcWebp" | "srcSetWebp" | "sizes"
>;

export type GatsbyImageSharpFluid_NoBase64Fragment = { __typename?: "ImageSharpFluid" } & Pick<
  ImageSharpFluid,
  "aspectRatio" | "src" | "srcSet" | "sizes"
>;

export type GatsbyImageSharpFluid_WithWebp_NoBase64Fragment = { __typename?: "ImageSharpFluid" } & Pick<
  ImageSharpFluid,
  "aspectRatio" | "src" | "srcSet" | "srcWebp" | "srcSetWebp" | "sizes"
>;

export type GatsbyImageSharpResolutionsFragment = { __typename?: "ImageSharpResolutions" } & Pick<
  ImageSharpResolutions,
  "base64" | "width" | "height" | "src" | "srcSet"
>;

export type GatsbyImageSharpResolutions_TracedSvgFragment = { __typename?: "ImageSharpResolutions" } & Pick<
  ImageSharpResolutions,
  "tracedSVG" | "width" | "height" | "src" | "srcSet"
>;

export type GatsbyImageSharpResolutions_WithWebpFragment = { __typename?: "ImageSharpResolutions" } & Pick<
  ImageSharpResolutions,
  "base64" | "width" | "height" | "src" | "srcSet" | "srcWebp" | "srcSetWebp"
>;

export type GatsbyImageSharpResolutions_WithWebp_TracedSvgFragment = { __typename?: "ImageSharpResolutions" } & Pick<
  ImageSharpResolutions,
  "tracedSVG" | "width" | "height" | "src" | "srcSet" | "srcWebp" | "srcSetWebp"
>;

export type GatsbyImageSharpResolutions_NoBase64Fragment = { __typename?: "ImageSharpResolutions" } & Pick<
  ImageSharpResolutions,
  "width" | "height" | "src" | "srcSet"
>;

export type GatsbyImageSharpResolutions_WithWebp_NoBase64Fragment = { __typename?: "ImageSharpResolutions" } & Pick<
  ImageSharpResolutions,
  "width" | "height" | "src" | "srcSet" | "srcWebp" | "srcSetWebp"
>;

export type GatsbyImageSharpSizesFragment = { __typename?: "ImageSharpSizes" } & Pick<
  ImageSharpSizes,
  "base64" | "aspectRatio" | "src" | "srcSet" | "sizes"
>;

export type GatsbyImageSharpSizes_TracedSvgFragment = { __typename?: "ImageSharpSizes" } & Pick<
  ImageSharpSizes,
  "tracedSVG" | "aspectRatio" | "src" | "srcSet" | "sizes"
>;

export type GatsbyImageSharpSizes_WithWebpFragment = { __typename?: "ImageSharpSizes" } & Pick<
  ImageSharpSizes,
  "base64" | "aspectRatio" | "src" | "srcSet" | "srcWebp" | "srcSetWebp" | "sizes"
>;

export type GatsbyImageSharpSizes_WithWebp_TracedSvgFragment = { __typename?: "ImageSharpSizes" } & Pick<
  ImageSharpSizes,
  "tracedSVG" | "aspectRatio" | "src" | "srcSet" | "srcWebp" | "srcSetWebp" | "sizes"
>;

export type GatsbyImageSharpSizes_NoBase64Fragment = { __typename?: "ImageSharpSizes" } & Pick<
  ImageSharpSizes,
  "aspectRatio" | "src" | "srcSet" | "sizes"
>;

export type GatsbyImageSharpSizes_WithWebp_NoBase64Fragment = { __typename?: "ImageSharpSizes" } & Pick<
  ImageSharpSizes,
  "aspectRatio" | "src" | "srcSet" | "srcWebp" | "srcSetWebp" | "sizes"
>;

export type PagesQueryQueryVariables = Exact<{ [key: string]: never }>;

export type PagesQueryQuery = { __typename?: "Query" } & {
  allSitePage: { __typename?: "SitePageConnection" } & {
    nodes: Array<{ __typename?: "SitePage" } & Pick<SitePage, "path">>;
  };
};

export type SiteTitleQueryQueryVariables = Exact<{ [key: string]: never }>;

export type SiteTitleQueryQuery = { __typename?: "Query" } & {
  site?: Maybe<
    { __typename?: "Site" } & {
      siteMetadata?: Maybe<{ __typename?: "SiteSiteMetadata" } & Pick<SiteSiteMetadata, "title">>;
    }
  >;
};

export type ContentfulEspaceFragmentFragment = { __typename?: "ContentfulEspace" } & Pick<
  ContentfulEspace,
  "espaceId" | "frenchTitle" | "chineseTitle"
>;

export type ContentfulPoleFragmentFragment = { __typename?: "ContentfulPole" } & Pick<
  ContentfulPole,
  "poleId" | "title" | "slug"
> & {
    description?: Maybe<
      { __typename?: "contentfulPoleDescriptionRichTextNode" } & {
        childContentfulRichText?: Maybe<{ __typename?: "ContentfulRichText" } & Pick<ContentfulRichText, "html">>;
      }
    >;
    espace?: Maybe<{ __typename?: "ContentfulEspace" } & ContentfulEspaceFragmentFragment>;
    cover?: Maybe<
      { __typename?: "ContentfulAsset" } & {
        fluid?: Maybe<
          { __typename?: "ContentfulFluid" } & Pick<
            ContentfulFluid,
            "base64" | "aspectRatio" | "src" | "srcSet" | "sizes"
          >
        >;
      }
    >;
  };

export type ContentfulPostFragmentFragment = { __typename?: "ContentfulPost" } & Pick<
  ContentfulPost,
  "title" | "author" | "slug" | "createdAt" | "date"
> & {
    pole?: Maybe<
      { __typename?: "ContentfulPole" } & Pick<ContentfulPole, "poleId"> & {
          espace?: Maybe<{ __typename?: "ContentfulEspace" } & ContentfulEspaceFragmentFragment>;
        }
    >;
    content?: Maybe<
      { __typename?: "contentfulPostContentRichTextNode" } & {
        childContentfulRichText?: Maybe<{ __typename?: "ContentfulRichText" } & Pick<ContentfulRichText, "html">>;
      }
    >;
    image?: Maybe<
      Array<
        Maybe<
          { __typename?: "ContentfulAsset" } & {
            fluid?: Maybe<
              { __typename?: "ContentfulFluid" } & Pick<
                ContentfulFluid,
                "base64" | "aspectRatio" | "src" | "srcSet" | "sizes"
              >
            >;
          }
        >
      >
    >;
  };

export type HomePageQueryQueryVariables = Exact<{ [key: string]: never }>;

export type HomePageQueryQuery = { __typename?: "Query" } & {
  site?: Maybe<
    { __typename?: "Site" } & {
      siteMetadata?: Maybe<{ __typename?: "SiteSiteMetadata" } & Pick<SiteSiteMetadata, "title">>;
    }
  >;
  allFile: { __typename?: "FileConnection" } & {
    edges: Array<
      { __typename?: "FileEdge" } & {
        node: { __typename?: "File" } & {
          childImageSharp?: Maybe<
            { __typename?: "ImageSharp" } & {
              fluid?: Maybe<{ __typename?: "ImageSharpFluid" } & GatsbyImageSharpFluidFragment>;
            }
          >;
        };
      }
    >;
  };
  allContentfulPost: { __typename?: "ContentfulPostConnection" } & {
    edges: Array<
      { __typename?: "ContentfulPostEdge" } & {
        node: { __typename?: "ContentfulPost" } & Pick<ContentfulPost, "slug" | "createdAt" | "title" | "author"> & {
            pole?: Maybe<
              { __typename?: "ContentfulPole" } & Pick<ContentfulPole, "poleId"> & {
                  espace?: Maybe<{ __typename?: "ContentfulEspace" } & Pick<ContentfulEspace, "espaceId">>;
                }
            >;
            content?: Maybe<
              { __typename?: "contentfulPostContentRichTextNode" } & {
                childContentfulRichText?: Maybe<
                  { __typename?: "ContentfulRichText" } & Pick<ContentfulRichText, "html">
                >;
              }
            >;
            image?: Maybe<
              Array<
                Maybe<
                  { __typename?: "ContentfulAsset" } & {
                    fluid?: Maybe<
                      { __typename?: "ContentfulFluid" } & Pick<
                        ContentfulFluid,
                        "base64" | "aspectRatio" | "src" | "srcSet" | "sizes"
                      >
                    >;
                  }
                >
              >
            >;
          };
      }
    >;
  };
};

export type NewsPageQueryQueryVariables = Exact<{ [key: string]: never }>;

export type NewsPageQueryQuery = { __typename?: "Query" } & {
  site?: Maybe<
    { __typename?: "Site" } & {
      siteMetadata?: Maybe<{ __typename?: "SiteSiteMetadata" } & Pick<SiteSiteMetadata, "title">>;
    }
  >;
  allContentfulPole: { __typename?: "ContentfulPoleConnection" } & {
    edges: Array<
      { __typename?: "ContentfulPoleEdge" } & {
        node: { __typename?: "ContentfulPole" } & ContentfulPoleFragmentFragment;
      }
    >;
  };
  allContentfulPost: { __typename?: "ContentfulPostConnection" } & {
    edges: Array<
      { __typename?: "ContentfulPostEdge" } & {
        node: { __typename?: "ContentfulPost" } & ContentfulPostFragmentFragment;
      }
    >;
  };
};

export type EspaceByIdQueryVariables = Exact<{
  espaceId: Scalars["String"];
}>;

export type EspaceByIdQuery = { __typename?: "Query" } & {
  site?: Maybe<
    { __typename?: "Site" } & {
      siteMetadata?: Maybe<{ __typename?: "SiteSiteMetadata" } & Pick<SiteSiteMetadata, "title">>;
    }
  >;
  contentfulEspace?: Maybe<
    { __typename?: "ContentfulEspace" } & Pick<ContentfulEspace, "espaceId" | "frenchTitle" | "chineseTitle">
  >;
  allContentfulPole: { __typename?: "ContentfulPoleConnection" } & {
    edges: Array<
      { __typename?: "ContentfulPoleEdge" } & {
        node: { __typename?: "ContentfulPole" } & ContentfulPoleFragmentFragment;
      }
    >;
  };
};

export type PoleByIdQueryVariables = Exact<{
  poleId?: Maybe<Scalars["String"]>;
  espaceId?: Maybe<Scalars["String"]>;
}>;

export type PoleByIdQuery = { __typename?: "Query" } & {
  site?: Maybe<
    { __typename?: "Site" } & {
      siteMetadata?: Maybe<{ __typename?: "SiteSiteMetadata" } & Pick<SiteSiteMetadata, "title">>;
    }
  >;
  allContentfulPole: { __typename?: "ContentfulPoleConnection" } & {
    edges: Array<
      { __typename?: "ContentfulPoleEdge" } & {
        node: { __typename?: "ContentfulPole" } & ContentfulPoleFragmentFragment;
      }
    >;
  };
  contentfulPole?: Maybe<{ __typename?: "ContentfulPole" } & ContentfulPoleFragmentFragment>;
  allContentfulPost: { __typename?: "ContentfulPostConnection" } & {
    edges: Array<
      { __typename?: "ContentfulPostEdge" } & {
        node: { __typename?: "ContentfulPost" } & ContentfulPostFragmentFragment;
      }
    >;
  };
};

export type PostBySlugQueryVariables = Exact<{
  slug: Scalars["String"];
  espaceId: Scalars["String"];
}>;

export type PostBySlugQuery = { __typename?: "Query" } & {
  site?: Maybe<
    { __typename?: "Site" } & {
      siteMetadata?: Maybe<{ __typename?: "SiteSiteMetadata" } & Pick<SiteSiteMetadata, "title">>;
    }
  >;
  allContentfulPole: { __typename?: "ContentfulPoleConnection" } & {
    edges: Array<
      { __typename?: "ContentfulPoleEdge" } & {
        node: { __typename?: "ContentfulPole" } & ContentfulPoleFragmentFragment;
      }
    >;
  };
  contentfulPost?: Maybe<{ __typename?: "ContentfulPost" } & ContentfulPostFragmentFragment>;
};
