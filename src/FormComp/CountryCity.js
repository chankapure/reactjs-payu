import React, { useState } from "react";
import {
  CountryDropdown,
  RegionDropdown,
  CountryRegionData
} from "react-country-region-selector";

function CountryCity() {
  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("");

  return (
    <div>
      <CountryDropdown value={country} onChange={val => setCountry(val)} />
      <RegionDropdown
        country={country}
        value={region}
        onChange={val => setRegion(val)}
      />
    </div>
  );
}

export default CountryCity;
