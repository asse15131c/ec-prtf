// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

/**
 * Item in *Index → Projects*
 */
export interface IndexDocumentDataProjectsItem {
  /**
   * Project field in *Index → Projects*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: index.projects[].project
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  project: prismic.ContentRelationshipField;
}

type IndexDocumentDataSlicesSlice = never;

/**
 * Content for Index documents
 */
interface IndexDocumentData {
  /**
   * Projects field in *Index*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: index.projects[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  projects: prismic.GroupField<Simplify<IndexDocumentDataProjectsItem>>;

  /**
   * Slice Zone field in *Index*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: index.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<IndexDocumentDataSlicesSlice> /**
   * Meta Description field in *Index*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: index.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Index*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: index.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *Index*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: index.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * Index document from Prismic
 *
 * - **API ID**: `index`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type IndexDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<Simplify<IndexDocumentData>, "index", Lang>;

/**
 * Item in *Project → Gallery*
 */
export interface ProjectDocumentDataGalleryItem {
  /**
   * Media field in *Project → Gallery*
   *
   * - **Field Type**: Link to Media
   * - **Placeholder**: *None*
   * - **API ID Path**: project.gallery[].media
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  media: prismic.LinkToMediaField;
}

type ProjectDocumentDataSlicesSlice = VideoSlice;

/**
 * Content for Project documents
 */
interface ProjectDocumentData {
  /**
   * Title field in *Project*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: project.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Type field in *Project*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: project.type
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  type: prismic.KeyTextField;

  /**
   * Year field in *Project*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: project.year
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  year: prismic.KeyTextField;

  /**
   * Credits title field in *Project*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: project.credits_title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  credits_title: prismic.KeyTextField;

  /**
   * Credits field in *Project*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: project.credits
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  credits: prismic.LinkField;

  /**
   * Website title field in *Project*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: project.website_title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  website_title: prismic.KeyTextField;

  /**
   * Website field in *Project*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: project.website
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  website: prismic.LinkField;

  /**
   * Description field in *Project*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: project.description
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;

  /**
   * Gallery field in *Project*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: project.gallery[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  gallery: prismic.GroupField<Simplify<ProjectDocumentDataGalleryItem>>;

  /**
   * Slice Zone field in *Project*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: project.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<ProjectDocumentDataSlicesSlice> /**
   * Meta Description field in *Project*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: project.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Project*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: project.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *Project*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: project.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * Project document from Prismic
 *
 * - **API ID**: `project`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ProjectDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<ProjectDocumentData>,
    "project",
    Lang
  >;

export type AllDocumentTypes = IndexDocument | ProjectDocument;

/**
 * Item in *MediaRow → Default → Primary → MediaItems*
 */
export interface MediaRowSliceDefaultPrimaryMediaItemsItem {
  /**
   * Media field in *MediaRow → Default → Primary → MediaItems*
   *
   * - **Field Type**: Link to Media
   * - **Placeholder**: *None*
   * - **API ID Path**: media_row.default.primary.media_items[].media
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  media: prismic.LinkToMediaField;
}

/**
 * Primary content in *MediaRow → Default → Primary*
 */
export interface MediaRowSliceDefaultPrimary {
  /**
   * Size field in *MediaRow → Default → Primary*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **API ID Path**: media_row.default.primary.size
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  size: prismic.SelectField<"2" | "3" | "auto">;

  /**
   * MediaItems field in *MediaRow → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: media_row.default.primary.media_items[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  media_items: prismic.GroupField<
    Simplify<MediaRowSliceDefaultPrimaryMediaItemsItem>
  >;
}

/**
 * Default variation for MediaRow Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type MediaRowSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<MediaRowSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *MediaRow*
 */
type MediaRowSliceVariation = MediaRowSliceDefault;

/**
 * MediaRow Shared Slice
 *
 * - **API ID**: `media_row`
 * - **Description**: MediaRow
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type MediaRowSlice = prismic.SharedSlice<
  "media_row",
  MediaRowSliceVariation
>;

/**
 * Primary content in *Video → Default → Primary*
 */
export interface VideoSliceDefaultPrimary {
  /**
   * Main field in *Video → Default → Primary*
   *
   * - **Field Type**: Link to Media
   * - **Placeholder**: *None*
   * - **API ID Path**: video.default.primary.main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  main: prismic.LinkToMediaField;

  /**
   * line field in *Video → Default → Primary*
   *
   * - **Field Type**: Link to Media
   * - **Placeholder**: *None*
   * - **API ID Path**: video.default.primary.line
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  line: prismic.LinkToMediaField;
}

/**
 * Default variation for Video Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type VideoSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<VideoSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Video*
 */
type VideoSliceVariation = VideoSliceDefault;

/**
 * Video Shared Slice
 *
 * - **API ID**: `video`
 * - **Description**: Video
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type VideoSlice = prismic.SharedSlice<"video", VideoSliceVariation>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      IndexDocument,
      IndexDocumentData,
      IndexDocumentDataProjectsItem,
      IndexDocumentDataSlicesSlice,
      ProjectDocument,
      ProjectDocumentData,
      ProjectDocumentDataGalleryItem,
      ProjectDocumentDataSlicesSlice,
      AllDocumentTypes,
      MediaRowSlice,
      MediaRowSliceDefaultPrimaryMediaItemsItem,
      MediaRowSliceDefaultPrimary,
      MediaRowSliceVariation,
      MediaRowSliceDefault,
      VideoSlice,
      VideoSliceDefaultPrimary,
      VideoSliceVariation,
      VideoSliceDefault,
    };
  }
}
