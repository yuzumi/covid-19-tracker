import React from 'react';
import { Cards, Chart } from 'src/components';
import { initFetch } from "src/api";
import 'src/App.module.css';

export default class App extends React.Component {
  state = {
    data: {}
  }

  async componentDidMount() {
    const data = await initFetch();
    
    this.setState({ data });
  }

  render() {
    const { data } = this.state;

    return (
      <div className='app'>
        <div className="container">
          <Cards data={data} />
          <Chart />
        </div>
      </div>
    );
  }
}
