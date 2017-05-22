import { combineReducers } from 'redux';
import TickerReducer from './reducer_ticker';

const rootReducer = combineReducers({
  tickers: TickerReducer,
});

export default rootReducer;
