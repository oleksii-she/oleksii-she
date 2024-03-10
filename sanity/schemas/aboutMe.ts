import { defineType, defineField } from "sanity";
import { baseLanguage } from "./localeType";

export const aboutMe = defineType({
  title: "About",
  name: "about",
  type: "document",
  fields: [
    defineField({
      name: "section",
      type: "localeString",
      title: "Section",
      preview: {
        select: {
          title: "section",
          subtitle: `section.${baseLanguage?.id}`,
        },
      },
    }),

    defineField({
      name: "description",
      type: "localeArrayBlock",
      title: "Description",
      preview: {
        select: {
          title: "Description",
          subtitle: `description.${baseLanguage?.id}`,
        },
      },
    }),

    defineField({
      name: "image",
      type: "image",
      title: "image",
    }),
  ],
});
