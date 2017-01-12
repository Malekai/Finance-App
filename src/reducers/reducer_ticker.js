import { FETCH_TICKER } from '../actions/index';
import { DELETE_TICKER } from '../actions/index';

const INITIAL_STATE = [{
"Status": "SUCCESS",
"Name": "Apple Inc",
"Symbol": "AAPL",
"LastPrice": 118.99,
"Change": 1.08,
"ChangePercent": 0.915952845390551,
"Timestamp": "Mon Jan 9 00:00:00 UTC-05:00 2017",
"MSDate": 42744,
"MarketCap": 625627525840,
"Volume": 33561948,
"ChangeYTD": 115.82,
"ChangePercentYTD": 2.73700569849767,
"High": 119.43,
"Low": 117.94,
"Open": 117.95
}]

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_TICKER:
      if (state.find(ticker => ticker.Symbol === action.payload.Symbol)) {
        state = state.filter(ticker => ticker.Symbol !== action.payload.Symbol);
        return [ action.payload, ...state ];
      } else {
        return [ action.payload, ...state ];
      }
    case DELETE_TICKER:
      return state.filter(ticker => ticker.Symbol !== action.payload.Symbol);
  }
  return state;
}
