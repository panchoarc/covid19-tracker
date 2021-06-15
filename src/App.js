import React from "react";

import { Cards, CountryPicker, Chart } from "./Components";
import { fetchData } from "./api/";
import styles from "./App.module.css";

class App extends React.Component {
  state = {
    data: {},
    country: "",
  };

  async componentDidMount() {
    const data = await fetchData();

    this.setState({ data });
  }

  handleCountryChange = async (country) => {
    const data = await fetchData(country);

    this.setState({ data, country });
  };

  render() {
    const { data, country } = this.state;

    return (
      <div className={styles.container}>
        <img src="images/covid19.png" alt="covid-19" />
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
      </div>
    );
  }
}

export default App;