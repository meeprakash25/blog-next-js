const dictionaries = {
  en: () =>
    import("./../dictinoaries/en.json").then((module) => module.default),
};

export const getDictionary = async (locale: string) => {
  return dictionaries["en"]();
};
