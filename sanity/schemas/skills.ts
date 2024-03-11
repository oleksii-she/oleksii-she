import { defineType, defineField } from "sanity";
import { baseLanguage } from "./localeType";

export const skillsTitleSchema = defineType({
  name: "skills-title",
  type: "document",
  title: "Skills-title",
  fields: [
    defineField({
      name: "title",
      type: "localeText",
      title: "Title",
      preview: {
        select: {
          title: "Description",
          subtitle: `title.${baseLanguage?.id}`,
        },
      },
    }),
  ],
});

export const skillsSchema = defineType({
  name: "skills",
  type: "document",
  title: "Skills",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name",
    },
    {
      name: "image",
      type: "image",
      title: "Image",
      options: { hotspot: true },
    },
  ],
});
