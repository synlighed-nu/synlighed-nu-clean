// app/lib/constants.ts

export type AxiomVisibility = "public" | "internal";

export type AxiomItem = {
  text: string;
  visibility: AxiomVisibility;   // "public" = synlig overalt, "internal" = kun på /axiomer
};

export const AXIOMS: AxiomItem[] = [
  {
    text: "Synlighed begynder først, når man tør erkende sine begrænsninger.",
    visibility: "public"
  },
  {
    text: "Problemet er ikke mangel på data – det er mangel på overblik.",
    visibility: "public"
  },
  {
    text: "Vi kalder det reformer, men det er ofte bare gentagelser.",
    visibility: "public"
  },
  {
    text: "Systemet er ikke designet til at lære – det er designet til at fortsætte.",
    visibility: "public"
  },
  {
    text: "Vi behandler konsekvenser, men ændrer sjældent årsagerne.",
    visibility: "public"
  },
  {
    text: "Hvis børnene ikke udvikler sig, har vi ingen fremtid.",
    visibility: "public"
  },
  {
    text: "Kreativitet skaber løsninger – systemet kvæler den.",
    visibility: "public"
  },
];

export const DEV_VERSION = "DEV 28-05-2026 010";