// sanity/schemaTypes/index.js

import MultiImageInput from "./MultiImageInput";
import CloudinaryImageInput from "./CloudinaryImageInput";

export const schema = {
  types: [
    {
      name: "category",
      title: "Category",
      type: "document",
      fields: [
        {
          name: "name",
          title: "Category Name",
          type: "string",
          validation: (Rule) =>
            Rule.required().error("Category name is required"),
        },
        {
          name: "slug",
          title: "URL Slug",
          type: "slug",
          options: {
            source: "name",
            maxLength: 96,
            slugify: (input) => {
              const slug = input
                .toLowerCase()
                .trim()
                .replace(/[^\w\s-]/g, "")
                .replace(/\s+/g, "-");
              const timestamp = new Date()
                .toISOString()
                .replace(/[-:.TZ]/g, "")
                .slice(0, 14);
              return `${slug}-${timestamp}`;
            },
          },
          validation: (Rule) => Rule.required().error("Slug is required"),
        },
        {
          name: "description",
          title: "Description",
          type: "text",
          rows: 3,
        },
      ],
      preview: {
        select: {
          title: "name",
          subtitle: "slug.current",
        },
      },
    },

    {
      name: "post",
      title: "Post",
      type: "document",
      fields: [
        {
          name: "title",
          title: "Title",
          type: "string",
          validation: (Rule) =>
            Rule.required()
              .min(10)
              .max(200)
              .error("Title must be between 10-200 characters"),
        },
        {
          name: "slug",
          title: "URL Slug",
          type: "slug",
          options: {
            source: "title",
            maxLength: 96,
            slugify: (input) => {
              const slug = input
                .toLowerCase()
                .trim()
                .replace(/[^\w\s-]/g, "")
                .replace(/\s+/g, "-");
              const timestamp = new Date()
                .toISOString()
                .replace(/[-:.TZ]/g, "")
                .slice(0, 14);
              return `${slug}-${timestamp}`;
            },
          },
          validation: (Rule) => Rule.required().error("URL Slug is required"),
        },
        {
          name: "content",
          title: "Content",
          type: "blockContent",
          validation: (Rule) => Rule.required().error("Content is required"),
        },
        {
          name: "mainImage",
          title: "Main Image (Cloudinary URL)",
          type: "string",
          components: {
            input: CloudinaryImageInput,
          },
        },
        {
          name: "mainImageCaption",
          title: "Main Image Caption",
          type: "string",
        },
        {
          name: "publishedAt",
          title: "Published Date",
          type: "datetime",
          initialValue: () => new Date().toISOString(),
          validation: (Rule) =>
            Rule.required().error("Published date is required"),
        },
        {
          name: "category",
          title: "Category",
          type: "reference",
          to: [{ type: "category" }],
          validation: (Rule) =>
            Rule.required().error("Category selection is required"),
        },
        {
          name: "videoLink",
          title: "Video Link",
          type: "url",
          validation: (Rule) => Rule.uri({ scheme: ["http", "https"] }),
        },
        {
          name: "views",
          title: "Views Count",
          type: "number",
          initialValue: 0,
          validation: (Rule) => Rule.min(0),
        },
      ],
      orderings: [
        {
          title: "Published Date (Newest First)",
          name: "publishedAtDesc",
          by: [{ field: "publishedAt", direction: "desc" }],
        },
        {
          title: "Title (A-Z)",
          name: "titleAsc",
          by: [{ field: "title", direction: "asc" }],
        },
      ],
      preview: {
        select: {
          title: "title",
          media: "mainImage",
          category: "category.name",
          publishedAt: "publishedAt",
        },
        prepare(selection) {
          const { title, category, publishedAt } = selection;
          const formattedDate = publishedAt
            ? new Date(publishedAt).toLocaleDateString("en-US")
            : "No date";
          return {
            title,
            subtitle: `${category || "No category"} • ${formattedDate}`,
          };
        },
      },
    },

    {
      name: "blockContent",
      title: "Block Content",
      type: "array",
      of: [
        {
          title: "Block",
          type: "block",
          styles: [
            { title: "Normal", value: "normal" },
            { title: "Heading 1", value: "h1" },
            { title: "Heading 2", value: "h2" },
            { title: "Heading 3", value: "h3" },
            { title: "Quote", value: "blockquote" },
          ],
          lists: [
            { title: "Bullet", value: "bullet" },
            { title: "Numbered", value: "number" },
          ],
          marks: {
            decorators: [
              { title: "Bold", value: "strong" },
              { title: "Italic", value: "em" },
              { title: "Underline", value: "underline" },
              { title: "Pink", value: "pink" },
            ],
            annotations: [
              {
                title: "Link",
                name: "link",
                type: "object",
                fields: [
                  {
                    title: "URL",
                    name: "href",
                    type: "url",
                    validation: (Rule) =>
                      Rule.uri({
                        scheme: ["http", "https", "mailto", "tel"],
                      }),
                  },
                  {
                    title: "Open in new window",
                    name: "blank",
                    type: "boolean",
                    initialValue: false,
                  },
                ],
              },
            ],
          },
        },
        {
          type: "object",
          name: "cloudinaryImage",
          title: "Image (Cloudinary)",
          fields: [
            {
              name: "url",
              title: "Image URL",
              type: "string",
              components: {
                input: CloudinaryImageInput,
              },
            },
            {
              name: "caption",
              title: "Caption",
              type: "string",
            },
          ],
        },
        {
          type: "object",
          name: "gallery",
          title: "Photo Gallery",
          fields: [
            {
              name: "images",
              title: "Images",
              type: "array",
              of: [
                {
                  type: "object",
                  name: "galleryImage",
                  fields: [
                    {
                      name: "url",
                      title: "Image URL",
                      type: "string",
                    },
                    {
                      name: "alt",
                      title: "Alt Text",
                      type: "string",
                    },
                  ],
                },
              ],
              components: {
                input: MultiImageInput,
              },
              validation: (Rule) => Rule.min(1).error("Add at least one image"),
            },
          ],
        },
        {
          type: "object",
          name: "youtube",
          title: "YouTube Video",
          fields: [
            {
              name: "url",
              title: "YouTube URL",
              type: "url",
              validation: (Rule) =>
                Rule.required().uri({ scheme: ["http", "https"] }),
            },
            {
              name: "caption",
              title: "Caption",
              type: "string",
            },
          ],
        },
        {
          type: "object",
          name: "break",
          title: "Page Break",
          fields: [
            {
              name: "style",
              type: "string",
              options: { list: ["break", "line"] },
            },
          ],
        },
      ],
    },
  ],
};
