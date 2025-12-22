const lang: Record<string, string> = {
  english: "Welcome",
  czech: "Vitejte",
  danish: "Velkomst",
  dutch: "Welkom",
  estonian: "Tere tulemas",
  finnish: "Tervetuloa",
  flemish: "Welgekomen",
  french: "Bienvenue",
  german: "Willkommen",
  irish: "Failte",
  italian: "Benvenuto",
  latvian: "Gaidits",
  lithuanian: "Laukiamas",
  polish: "Witamy",
  spanish: "Bienvenido",
  swedish: "Valkommen",
  welsh: "Croeso",
};

export const greet = (language: string): string =>
  !!lang[language] ? lang[language] : "Welcome";
