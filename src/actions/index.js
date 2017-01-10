import axios from 'axios';

const ROOT_URL = 'http://dev.markitondemand.com/MODApis/Api/v2/Quote/json';
const SELECT_URL = 'http://dev.markitondemand.com/MODApis/Api/Timeseries/json?symbol=';

export const FETCH_TICKER = 'FETCH_TICKER';
export const TICKER_SELECTED = 'TICKER_SELECTED';
export const DELETE_TICKER = 'DELETE_TICKER';
export const FETCH_CHART = 'FETCH_CHART';

export function fetchTicker(ticker) {
  const url = `${ROOT_URL}?symbol=${ticker}&callback=myFunction`;
  const request = axios.get(url);

  return (dispatch) => {
    request.then(({data}) => {
      if (data.Name) {
        dispatch({ type: 'FETCH_TICKER', payload: data })
      }
    });
  };
}

export function fetchChart(ticker) {
  const selectedUrl = `${SELECT_URL}${ticker.Symbol}&callback=myFunction`
  const new_request = axios.get(selectedUrl);

  return (dispatch) => {
    new_request.then(({data}) => {
      dispatch({ type: 'FETCH_CHART', payload: data })
    });
  };
}

export function deleteTicker(ticker) {
  return {
    type: DELETE_TICKER,
    payload: ticker
  }
}
