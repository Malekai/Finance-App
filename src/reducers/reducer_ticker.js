import { FETCH_TICKER } from '../actions/index';
import { DELETE_TICKER } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_TICKER:
      if (state.find(ticker => ticker.Symbol === action.payload.Symbol)) {
        state.filter(ticker => ticker.Symbol !== action.payload.Symbol);
        // Concat
        return [ action.payload, ...state ];
      } else {
        return [ action.payload, ...state ];
      }
    case DELETE_TICKER:
      return state.filter(ticker => ticker.Symbol !== action.payload.Symbol);
  }
  return state;
}
