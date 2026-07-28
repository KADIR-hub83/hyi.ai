"use client";

import ProgressBar from "@/components/about/progressBar";
import { Flag } from "lucide-react";
import { getFlagUrl } from "@/components/util/getFlagUrl";

interface CountryApiData {
  country: string;
  count: number;
  flag?: string;
}

interface CountryStatsProps {
  countryData: CountryApiData[];
}

interface CountryData {
  name: string;
  flag?: string;
  count: number;
}

const CountryStats: React.FC<CountryStatsProps> = ({ countryData }) => {
  const countries: CountryData[] = countryData
    .slice(0, 4)
    .map((apiCountry) => ({
      name: apiCountry.country,
      flag: getFlagUrl(apiCountry.country),
      count: apiCountry.count,
    }));

  // Find the highest count for percentage calculations
  const maxCount = Math.max(...countries.map((c) => c.count));

  return (
    <div className="space-y-10">
      {countries.map((country, index) => (
        <ProgressBar
          key={index}
          label={
            <span className="flex items-center gap-2">
              {country.flag ? (
                <img
                  src={country.flag}
                  alt={`${country.name} flag`}
                  width={20}
                  height={12}
                  className="object-cover"
                  style={{ width: "20px", height: "12px" }}
                />
              ) : (
                <Flag size={20} />
              )}
              {country.name}
            </span>
          }
          value={country.count}
          total={maxCount}
        />
      ))}
    </div>
  );
};

export default CountryStats;