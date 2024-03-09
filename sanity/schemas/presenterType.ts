import { defineType, defineField } from "sanity";
import { baseLanguage } from "./localeType";

export const presenterType = defineType({
  title: "Presenter",
  name: "presenter",
  type: "document",
  fields: [
    defineField({
      name: "name",
      type: "string",
      title: "name",
      //   preview: {
      //     select: {
      //       title: "name",
      //     },
      //   },
    }),

    defineField({
      name: "title",
      type: "localeString",
      title: "title",
      preview: {
        select: {
          title: "title",
          subtitle: `title.${baseLanguage?.id}`,
        },
      },
    }),

    defineField({
      name: "firstName",
      type: "localeString",
      title: "First Name",
      preview: {
        select: {
          title: "First Name",
          subtitle: `title.${baseLanguage?.id}`,
        },
      },
    }),
  ],
});
