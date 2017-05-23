import { combineReducers } from 'redux';
import TickerReducer from './reducer_ticker';
import ChartReducer from './chart_reducer';

const rootReducer = combineReducers({
  tickers: TickerReducer,
  chart: ChartReducer
});

export default rootReducer;
