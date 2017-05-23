import React, { Component } from 'react';
import SearchBar from '../containers/search_bar';
import WatchList from '../containers/watchlist';
import StockChart from '../containers/chart';

export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <br />
        <WatchList />
        <br />
        <StockChart />
      </div>
    );
  }
}
