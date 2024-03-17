import { defineType, defineField, defineArrayMember } from "sanity";

export const articleType = defineType({
  title: "Article",
  name: "article",
  type: "document",
  fields: [
    defineField({
      name: "tags",
      type: "array",
      title: "Tags for item",
      of: [
        defineArrayMember({
          type: "object",
          name: "role",
          fields: [{ type: "string", name: "name" }],
        }),
      ],
    }),
    defineField({
      name: "title",
      type: "string",
    }),
    defineField({
      name: "body",
      type: "array",
      of: [{ type: "block" }],
    }),
  ],
});
