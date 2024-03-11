export interface IProfile {
  _id: string;
  name: { uk: string; _type: string; en: string };
  profession: string;
  email: string;
  location: { uk: string; _type: string; en: string };
  image: string;
  cv: string;
}

export interface IHero {
  _id?: string;
  section?: {
    uk: string;
    _type: string;
    en: string;
  };
  title?: any;

  description?: {
    uk: string;
    _type: string;
    en: string;
  };
}

export interface IAbout {
  _id?: string;
  section?: {
    uk: string;
    _type: string;
    en: string;
  };
  description?: any;
  image?: string;
}
export interface ISkillsTitle {
  title: {
    uk: string;
    _type: string;
    en: string;
  };
}
export interface ISkills {
  _id: string;
  name: string;
  image: string;
}

interface IProfSkills {
  skill: string;
}

interface ISkillsItem {
  skill: string;
}

interface ISectionPortfolio {
  sectionName: string;
  desc: string;
}

interface IPortfolio {
  name: string;
  desc: string;
}
