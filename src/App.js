import React from 'react';
import { Cards, Chart, CountryPicker } from 'src/components';
import { fetchData } from "src/api";
import covid19 from "src/assets/images/covid-19.png";
import styles from 'src/App.module.css';

export default class App extends React.Component {
  state = {
    data: {},
    country: ""
  }

  handleCountryChange = async (country) => {
    const data = await fetchData(country);

    this.setState({ data, country });
  }

  async componentDidMount() {
    const data = await fetchData();
    this.setState({ data });
  }

  render() {
    const { data, country } = this.state;
    const { handleCountryChange } = this;

    return (
      <div className='app'>
        <div className="container">
          <img className={styles.covid19} src={covid19} alt="COVID-19" />
          <Cards data={data} />
          <CountryPicker handleCountryChange={handleCountryChange} />
          <Chart data={data} country={country} />
        </div>
      </div>
    );
  }
}
