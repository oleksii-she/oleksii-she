import { defineType, defineField } from "sanity";
import { baseLanguage } from "./localeType";

export const heroSchema = defineType({
  name: "hero",
  type: "document",
  title: "Hero",
  fields: [
    defineField({
      name: "section",
      type: "localeString",
      title: "Section",
      preview: {
        select: {
          title: "Section",
          subtitle: `title.${baseLanguage?.id}`,
        },
      },
    }),
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
