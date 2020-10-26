import React, { useState } from "react";
import "./Form.css";
import {
  CountryDropdown,
  RegionDropdown,
  CountryRegionData
} from "react-country-region-selector";

function CountryCity() {
  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("");

  return (
    <div className="form__row">
      <CountryDropdown
        value={country}
        onChange={val => setCountry(val)}
        defaultOptionLabel={"Country *"}
        style={{
          padding: 15,
          width: 551,
          marginLeft: 15,
          borderWidth: 2,
          borderStyle: "solid",
          borderColor: "gray",
          fontFamily: "Roboto",
          fontWeight: "bold",
          fontSize: 16,
          color: "gray",
          marginBottom: 32
        }}
      />
      <RegionDropdown
        blankOptionLabel={"City *"}
        defaultOptionLabel={"City *"}
        country={country}
        value={region}
        onChange={val => setRegion(val)}
        style={{
          padding: 15,
          marginLeft: 15,
          width: 552,
          borderWidth: 2,
          borderStyle: "solid",
          borderColor: "gray",
          fontFamily: "Roboto",
          fontWeight: "bold",
          fontSize: 16,
          color: "gray",
          marginBottom: 38
        }}
      />
    </div>
  );
}

export default CountryCity;
