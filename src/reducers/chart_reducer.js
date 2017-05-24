import { FETCH_CHART } from '../actions/index';

const INITIAL_STATE = {
"Data": {
"Name": "",
"Symbol": "",
"Series": {
"open": {
"min": 0,
"max": 0,
"maxDate": 0,
"minDate": 0,
"values": [
0
]
},
"high": {
"min": 0,
"max": 0,
"maxDate": 0,
"minDate": 0,
"values": [
0
]
},
"low": {
"min": 0,
"max": 0,
"maxDate": 0,
"minDate": 0,
"values": [
0
]
},
"close": {
"min": 0,
"max": 0,
"maxDate": 0,
"minDate": 0,
"values": [
0
]
}
},
"SeriesLabels": {
"x": {
"text": [

],
"dates": [
0
],
"utcDates": [
0
],
"pos": [
0
],
"priorities": [
0
]
}
},
"SeriesLabelCoordinates": [
0
],
"SeriesDuration": 0,
"SeriesDates": []
},
"Matches": true
}

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
  case FETCH_CHART:
    return action.payload;
  }
  return state;
}
