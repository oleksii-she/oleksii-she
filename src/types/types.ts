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

export interface ISectionPortfolio {
  section: {
    uk: string;
    _type: string;
    en: string;
  };
  description: {
    uk: string;
    _type: string;
    en: string;
  };
}

export interface IPortfolio {
  _id: string;
  title: {
    uk: string;
    _type: string;
    en: string;
  };
  roles: [
    {
      _type: string;
      name: string;
      _key: string;
    }
  ];
  libraries: [
    {
      _type: string;
      name: string;
      _key: string;
    }
  ];
  description: any;
  image: string;
}
