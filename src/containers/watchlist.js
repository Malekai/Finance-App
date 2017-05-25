import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchChart, deleteTicker } from '../actions/index';
import classNames from 'classnames';
import FontAwesome from 'react-fontawesome';

class WatchList extends Component {
  // Check if the value is negative or positive and make it red or green
  computeClass(val) {
    return classNames({
      // Dynamically assign classes based on value
      green: val > 0,
      red: val < 0,
    });
  }

  renderList() {
    return this.props.stocks.map((stock) => {
      return (
        <tr className="stocks" key={stock.Symbol}>
          <td onClick={() => this.props.fetchChart(stock.Symbol)}>{stock.Symbol}</td>
          <td onClick={() => this.props.fetchChart(stock.Symbol)}>{stock.Name}</td>
          <td onClick={() => this.props.fetchChart(stock.Symbol)}>{stock.LastPrice}</td>
          <td onClick={() => this.props.fetchChart(stock.Symbol)} className={this.computeClass((stock.ChangePercent).toFixed(2))}>{(stock.ChangePercent).toFixed(2)}%</td>
          <td onClick={() => this.props.fetchChart(stock.Symbol)}>{stock.MarketCap}</td>
          <td onClick={() => this.props.fetchChart(stock.Symbol)}>{stock.Volume}</td>
          <td onClick={() => this.props.fetchChart(stock.Symbol)}>{stock.High}</td>
          <td onClick={() => this.props.fetchChart(stock.Symbol)}>{stock.Low}</td>
          <td onClick={() => this.props.fetchChart(stock.Symbol)}>{stock.Open}</td>
          <td className="delete" onClick={() => this.props.deleteTicker(stock)}><FontAwesome name='times-circle' /></td>
        </tr>
      );
    });
  }

  render() {
    return (
      <table>
        <thead>
        <tr>
          <th>Symbol</th>
          <th>Company</th>
          <th>Last Price</th>
          <th>Change</th>
          <th>Market Cap</th>
          <th>Volume</th>
          <th>High</th>
          <th>Low</th>
          <th>Open</th>
        </tr>
      </thead>
      <tbody>
        {this.renderList()}
      </tbody>
      </table>
    );
  }
}

//lightly go over this
const mapStateToProps = state => {
  return { stocks: state.tickers };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchChart, deleteTicker }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(WatchList);
