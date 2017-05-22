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
          <td>{stock.Symbol}</td>
          <td>{stock.Name}</td>
          <td>{stock.LastPrice}</td>
          <td className={this.computeClass((stock.ChangePercent).toFixed(2))}>{(stock.ChangePercent).toFixed(2)}%</td>
          <td>{stock.MarketCap}</td>
          <td>{stock.Volume}</td>
          <td>{stock.High}</td>
          <td>{stock.Low}</td>
          <td>{stock.Open}</td>
          <td className="delete" onClick={() => this.props.deleteTicker(stock)}><FontAwesome name='times-circle' /></td>
        </tr>
      );
    });
  }

  render() {
    return (
      <div>
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
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { stocks: state.tickers };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ deleteTicker }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(WatchList);
