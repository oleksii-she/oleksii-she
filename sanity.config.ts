/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `\src\app\studio\[[...index]]\page.tsx` route
 */

import { visionTool } from "@sanity/vision";
import { defineConfig, defineField } from "sanity";
import { structureTool } from "sanity/structure";
import { documentInternationalization } from "@sanity/document-internationalization";
import { languageFilter } from "@sanity/language-filter";
// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { apiVersion, dataset, projectId } from "./sanity/env";
import { schema } from "./sanity/schemas/schema";

export default defineConfig({
  basePath: "/uk/admin",
  projectId,
  dataset,
  name: "desk",
  title: "My Personal Website",
  locales: [
    { name: "uk", title: "Українська" },
    { name: "en", title: "English" },
  ],
  // Add and edit the content schema in the './sanity/schema' folder
  schema,
  plugins: [
    structureTool(),
    languageFilter({
      supportedLanguages: [
        { id: "en", title: "English" },
        { id: "uk", title: "Ukraine" },
      ],
      // Select Norwegian (Bokmål) by default
      defaultLanguages: ["en"],
      // Only show language filter for document type `page` (schemaType.name)
      documentTypes: ["document"],
      filterField: (enclosingType, member, selectedLanguageIds) =>
        !enclosingType.name.startsWith("locale") ||
        selectedLanguageIds.includes(member.name),
    }),

    // Vision is a tool that lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion }),
  ],
});
