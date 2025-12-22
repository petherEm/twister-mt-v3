import "server-only"

const dictionaries = {
  pl: () => import("@/dictionaries/pl.json").then((module) => module.default),
  en: () => import("@/dictionaries/en.json").then((module) => module.default),
  ua: () => import("@/dictionaries/ua.json").then((module) => module.default),
}

export const getDictionary = async (locale: string) => {
  // Fallback to Polish if invalid locale is passed
  const validLocale = locale in dictionaries ? locale as keyof typeof dictionaries : "pl"
  return dictionaries[validLocale]()
}

