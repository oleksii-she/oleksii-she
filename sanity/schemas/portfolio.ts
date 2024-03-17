import { defineType, defineField, defineArrayMember } from "sanity";
import { baseLanguage } from "./localeType";

export const portfolioSection = defineType({
  title: "Portfolio-section",
  name: "portfolio-section",
  type: "document",
  fields: [
    defineField({
      name: "section",
      type: "localeString",
      title: "Section",
      preview: {
        select: {
          title: "name",
          subtitle: `name.${baseLanguage?.id}`,
        },
      },
    }),
    defineField({
      name: "description",
      type: "localeText",
      title: "Description",

      preview: {
        select: {
          title: "Description",
          subtitle: `title.${baseLanguage?.id}`,
        },
      },
    }),
  ],
});

export const portfolioSchema = defineType({
  title: "Portfolio",
  name: "portfolio",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "localeString",
      title: "Title",
      preview: {
        select: {
          title: "Title",
          subtitle: `title.${baseLanguage?.id}`,
        },
      },
    }),
    defineField({
      name: "roles",
      type: "array",
      title: "Roles",
      of: [
        defineArrayMember({
          type: "object",
          name: "name",
          fields: [{ type: "string", name: "name" }],
        }),
      ],
    }),
    defineField({
      name: "libraries",
      type: "array",
      title: "Libraries",
      of: [
        defineArrayMember({
          type: "object",
          name: "name",
          fields: [{ type: "string", name: "name" }],
        }),
      ],
    }),
    defineField({
      name: "description",
      type: "localeArrayBlock",
      title: "Description",
      preview: {
        select: {
          title: "Description",
          subtitle: `title.${baseLanguage?.id}`,
        },
      },
    }),
    {
      name: "image",
      type: "image",
      title: "Image",
      options: { hotspot: true },
    },
    {
      title: "Link",
      name: "link",
      type: "url",
    },
  ],
});
