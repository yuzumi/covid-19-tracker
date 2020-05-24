import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from "@material-ui/core";
import { fetchCountries } from "src/api";
import { prop } from "lodash/fp";
import styles from "src/components/country-picker/CountryPicker.module.css";

const CountryPicker = ({ handleCountryChange }) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchAndSetCountries = async () => {
      setCountries(await fetchCountries());
    };

    fetchAndSetCountries();
  }, [setCountries]);

  return (
    <FormControl className={styles.formControl}>
      <NativeSelect 
        defaultValue="" 
        onChange={event => handleCountryChange(event.target.value)}
      >
        <option value="">Global</option>
        {countries.map(prop("name")).map(name => (
          <option key={name} value={name}>{name}</option>
        ))}
      </NativeSelect>
    </FormControl>
  );
};

export default CountryPicker;