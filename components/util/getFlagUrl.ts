// util/getFlagUrl.ts
import { countryCodes } from "../../components/util/countryCodes";

const aliasMap: Record<string, string> = {
  USA: "United States",
  UK: "United Kingdom",
  // future mein aur short names use karo to yahan add karte jao
};

export function getFlagUrl(countryName: string, size: "20" | "40" | "80" = "40"): string {
  const normalized = aliasMap[countryName] || countryName;
  const match = countryCodes.find(
    (c) => c.country.toLowerCase() === normalized.toLowerCase()
  );
  const code = match?.flagCode?.toLowerCase() || "un";
  return `https://flagcdn.com/w${size}/${code}.png`;
}