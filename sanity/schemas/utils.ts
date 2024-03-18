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

export async function getAboutMe() {
  return createClient(clientConfig).fetch(
    groq`*[_type == "about"]{
    _id, section, description, "image":image.asset->url
      }`
  );
}

export async function getSkillsTitle() {
  return createClient(clientConfig).fetch(
    groq`*[_type == "skills-title"]{
    title
      }`
  );
}

export async function getSkills() {
  return createClient(clientConfig).fetch(
    groq`*[_type == "skills"]{
    _id, name, "image":image.asset->url
      }`
  );
}

export async function getPortfolio() {
  return createClient(clientConfig).fetch(
    groq`*[_type == "portfolio"]{
    _id, description, title, roles, libraries, "image":image.asset->url, link
      }`
  );
}

export async function getPortfolioSection() {
  return createClient(clientConfig).fetch(
    groq`*[_type == "portfolio-section"]{
    description, section
      }`
  );
}

export async function getPortfolioId(id: string) {
  return createClient(clientConfig).fetch(
    groq`*[_id ==  "${id}"]{
    _id, description, title, roles, libraries, "image":image.asset->url, link, gitHub
      }`
  );
}
