import { defineType, defineField } from "sanity";
import { baseLanguage } from "./localeType";

export const userCard = defineType({
  name: "profile",
  type: "document",
  title: "Profile",
  fields: [
    defineField({
      name: "name",
      type: "localeString",
      title: "Name",
      preview: {
        select: {
          title: "Location",
          subtitle: `title.${baseLanguage?.id}`,
        },
      },
    }),
    {
      name: "profession",
      type: "string",
      title: "Profession",
    },
    {
      name: "email",
      type: "string",
      title: "Email",
    },
    defineField({
      name: "location",
      type: "localeString",
      title: "Location",
      preview: {
        select: {
          title: "Location",
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
      name: "cv",
      type: "file",
      title: "CV",
    },
  ],
});
