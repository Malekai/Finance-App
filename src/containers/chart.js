import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactHighcharts from 'react-highcharts';

class StockChart extends Component {

  render() {
    const prices = `${this.props.chart.Data.Series.close.values}`.split(',').map(Number);
    const dates = `${this.props.chart.Data.SeriesDates}`.split(',');

    const config = {
      title: {
          text: `${this.props.chart.Data.Name}`,
          x: -20 //center
      },
      subtitle: {
          text: `${this.props.chart.Data.Symbol}`,
          x: -20
      },
      xAxis: {
          categories: dates
      },
      yAxis: {
          title: {
              text: 'Price'
          },
          plotLines: [{
              value: 0,
              width: 1,
              color: '#808080'
          }]
      },
      tooltip: {
          valueSuffix: '$'
      },

          plotOptions:{
              series:{
                  turboThreshold: 5000//larger threshold or set to 0 to disable
              }
          },

      series: [{
          name: "Close Price",
          data: prices
      }]
    };

    return (
      <div>
        <ReactHighcharts config={config}></ReactHighcharts>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { chart: state.chart };
}


export default connect(mapStateToProps)(StockChart);
