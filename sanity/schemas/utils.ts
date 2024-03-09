import { createClient, groq } from "next-sanity";

import clientConfig from "../lib/client-config";

export async function getPet() {
  return createClient(clientConfig).fetch(groq`*[_type == "pet"]{
      _id, _createdAt, "image":image.asset->url, sex, breed, name,description
    }`);
}

export async function getHero() {
  return createClient(clientConfig).fetch(
    groq`*[_type == "hero"]{
        _id, title,section,description
      }`
  );
}

export async function getProfile() {
  return createClient(clientConfig).fetch(
    groq`*[_type == "profile"]{
        _id, name,profession,email,location,"image":image.asset->url,"cv":cv.asset->url
      }`
  );
}

//   _id,  "image":image.asset->url, name,description
