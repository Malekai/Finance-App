const ROOT_URL = 'https://dev.markitondemand.com/MODApis/Api/v2/Quote/jsonp';
const SELECT_URL = 'https://dev.markitondemand.com/MODApis/Api/Timeseries/jsonp?symbol=';

export const FETCH_TICKER = 'FETCH_TICKER';
export const TICKER_SELECTED = 'TICKER_SELECTED';
export const DELETE_TICKER = 'DELETE_TICKER';
export const FETCH_CHART = 'FETCH_CHART';

export function fetchTicker(ticker) {
  const url = `${ROOT_URL}?symbol=${ticker}`;

  return (dispatch) => {
    $.ajax({
        url: url,
        dataType: 'jsonp',
        success: function(data){
          if (data.Name) {
            dispatch({ type: FETCH_TICKER, payload: data })
          }
        }
    });
  };
}

export function fetchChart(ticker) {
  const selectedUrl = `${SELECT_URL}${ticker.Symbol}`

  return (dispatch) => {
    $.ajax({
        url: selectedUrl,
        dataType: 'jsonp',
        success: function(data){
          dispatch({ type: 'FETCH_CHART', payload: data })
        }
    });
  };
}

export function deleteTicker(ticker) {
  return {
    type: DELETE_TICKER,
    payload: ticker
  }
}
