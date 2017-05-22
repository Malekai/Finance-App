const ROOT_URL = 'http://dev.markitondemand.com/MODApis/Api/v2/Quote/jsonp';
const SELECT_URL = 'http://dev.markitondemand.com/MODApis/Api/Timeseries/jsonp?symbol=';

export const FETCH_TICKER = 'FETCH_TICKER';
export const TICKER_SELECTED = 'TICKER_SELECTED';
export const DELETE_TICKER = 'DELETE_TICKER';

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

export function deleteTicker(ticker) {
  return {
    type: DELETE_TICKER,
    payload: ticker
  }
}
