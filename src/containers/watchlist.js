import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchChart, deleteTicker } from '../actions/index';
import classNames from 'classnames';
import FontAwesome from 'react-fontawesome';

class WatchList extends Component {
  computeClass(val) {
    return classNames({
      green: val > 0,
      red: val < 0,
    });
  }

  renderList() {
    return this.props.stocks.map((stock) => {
      return (
        <tr className="stocks" key={stock.Symbol}>
          <td onClick={() => this.props.fetchChart(stock)}>{stock.Symbol}</td>
          <td onClick={() => this.props.fetchChart(stock)}>{stock.Name}</td>
          <td onClick={() => this.props.fetchChart(stock)}>{stock.LastPrice}</td>
          <td onClick={() => this.props.fetchChart(stock)} className={this.computeClass((stock.ChangePercent).toFixed(2))}>{(stock.ChangePercent).toFixed(2)}%</td>
          <td onClick={() => this.props.fetchChart(stock)}>{stock.MarketCap}</td>
          <td onClick={() => this.props.fetchChart(stock)}>{stock.Volume}</td>
          <td onClick={() => this.props.fetchChart(stock)}>{stock.High}</td>
          <td onClick={() => this.props.fetchChart(stock)}>{stock.Low}</td>
          <td onClick={() => this.props.fetchChart(stock)}>{stock.Open}</td>
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

function mapStateToProps(state) {
  return { stocks: state.tickers };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchChart, deleteTicker }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(WatchList);
