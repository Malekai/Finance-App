import { FETCH_CHART } from '../actions/index';

const INITIAL_STATE = {
"Data": {
"Name": "Apple Inc",
"Symbol": "AAPL",
"Series": {
"open": {
"min": 90,
"max": 118.18,
"maxDate": 42661,
"minDate": 42503,
"values": [
100.56,
98.68,
98.55,
98.97,
100.55,
100.32,
97.96,
96.2,
98.41,
95.1,
97.06,
98.63,
101.52,
99.93,
96.04,
93.79,
94.79,
96.47,
95.42,
95,
95.86,
96.52,
93.13,
94.29,
95.92,
93.79,
94.19,
95.02,
96.67,
98.84,
96,
96.31,
96.4,
93.98,
96.05,
97.2,
96.86,
97.65,
100.51,
100.58,
102.37,
102.39,
100.78,
101.31,
101.41,
102.24,
101.91,
103.96,
104.61,
105.52,
106.34,
105.93,
105.25,
106.48,
105.47,
106,
104.89,
108.65,
109.72,
108.78,
110.42,
109.51,
110.23,
109.95,
108.91,
108.97,
109.34,
110.8,
111.62,
112.11,
108.89,
107.88,
106.64,
106.93,
105.01,
105,
103.91,
96,
97.61,
93.99,
93.965,
94.2,
95.2,
94,
93.37,
93,
93.33,
93.48,
92.72,
90,
92.39,
94.55,
94.16,
94.64,
94.64,
95.87,
97.22,
98.67,
99.68,
99.44,
99.6,
99.02,
97.6,
97.79,
97.99,
99.25,
99.02,
98.5,
98.53,
98.69,
97.32,
97.82,
96.45,
96.62,
96,
94.94,
96.25,
95.94,
92.91,
93,
92.9,
93.97,
94.44,
95.49,
95.39,
94.6,
95.7,
96.49,
96.75,
97.17,
97.41,
97.39,
98.92,
98.7,
99.56,
100,
99.83,
99.26,
98.25,
96.82,
104.265,
102.83,
104.19,
104.41,
106.05,
104.81,
105.58,
106.27,
107.52,
108.23,
108.71,
108.52,
107.78,
108.14,
109.63,
109.1,
109.23,
108.77,
108.86,
108.59,
108.565,
107.39,
107.41,
106.62,
105.8,
105.66,
106.14,
107.7,
107.9,
107.83,
107.25,
104.64,
102.65,
107.51,
108.73,
113.86,
115.12,
115.19,
113.05,
113.85,
114.35,
114.42,
111.64,
113,
113.69,
113.16,
112.46,
112.71,
113.06,
113.4,
113.7,
114.31,
115.02,
117.7,
117.35,
116.79,
117.88,
117.33,
118.18,
117.25,
116.86,
116.81,
117.1,
117.95,
114.31,
115.39,
113.87,
113.65,
113.46,
111.4,
110.98,
108.53,
110.08,
110.31,
109.88,
111.09,
107.12,
107.71,
106.57,
106.7,
109.81,
109.72,
110.12,
111.95,
111.36,
111.13,
111.43,
110.78,
111.6,
110.365,
109.17,
110,
109.5,
109.26,
110.86,
112.31,
113.29,
113.84,
115.04,
115.38,
116.47,
115.8,
116.74,
116.8,
116.35,
115.59,
116.52,
117.52,
116.45,
116.65,
115.8,
115.85
]
},
"high": {
"min": 91.67,
"max": 118.69,
"maxDate": 42654,
"minDate": 42503,
"values": [
102.37,
100.13,
99.11,
99.06,
100.69,
101.19,
100.48,
97.71,
98.65,
98.19,
97.88,
101.46,
101.53,
100.88,
96.629,
94.52,
97.34,
96.71,
96.04,
96.84,
97.33,
96.92,
95.7,
95.94,
96.35,
94.72,
94.5,
96.85,
98.21,
98.89,
96.76,
96.9,
96.5,
96.38,
96.76,
98.024,
98.23,
100.77,
100.89,
101.71,
103.75,
102.83,
101.76,
101.58,
102.24,
102.28,
102.91,
105.18,
106.31,
106.47,
106.5,
107.65,
107.29,
107.07,
106.25,
106.19,
107.79,
110.42,
109.9,
110,
112.19,
110.73,
110.98,
110.42,
109.77,
110.61,
110.5,
112.34,
112.39,
112.3,
108.95,
108,
108.09,
106.93,
106.48,
105.65,
105.3,
98.71,
97.88,
94.72,
94.08,
95.74,
95.9,
94.07,
93.45,
93.77,
93.57,
93.57,
92.78,
91.67,
94.39,
94.7,
95.21,
94.64,
95.43,
97.19,
98.09,
99.74,
100.73,
100.47,
100.4,
99.54,
97.84,
98.27,
101.89,
99.87,
99.56,
99.99,
99.346,
99.12,
98.475,
98.41,
97.75,
96.65,
96.57,
96.35,
96.89,
96.29,
94.655,
93.05,
93.66,
94.55,
95.77,
96.465,
95.4,
95.66,
96.5,
96.89,
97.65,
97.7,
97.67,
98.99,
99.3,
100.13,
100,
100.46,
101,
99.3,
98.84,
97.97,
104.35,
104.45,
104.55,
106.15,
106.07,
105.84,
106,
107.65,
108.37,
108.94,
108.9,
108.93,
108.44,
109.54,
110.23,
109.37,
109.6,
109.69,
109.1,
109.32,
108.75,
107.88,
107.95,
107.44,
106.5,
106.57,
106.8,
108,
108.3,
108.76,
107.27,
105.72,
105.72,
108.79,
113.03,
115.73,
116.13,
116.18,
114.12,
113.989,
114.94,
114.79,
113.39,
113.18,
114.64,
113.8,
113.37,
113.05,
114.31,
113.66,
114.34,
114.56,
116.75,
118.69,
117.98,
117.44,
118.17,
117.84,
118.21,
117.76,
117.38,
116.91,
117.74,
118.36,
115.7,
115.86,
115.21,
114.23,
113.77,
112.35,
111.46,
110.25,
110.51,
111.72,
111.32,
111.09,
108.87,
107.809,
107.68,
110.23,
110.35,
110.54,
111.99,
112.42,
111.51,
111.87,
112.465,
112.03,
112.2,
110.94,
110.09,
110.03,
110.36,
111.19,
112.43,
114.7,
115,
115.92,
116.2,
116.73,
116.5,
117.38,
117.5,
117.4,
116.51,
116.52,
117.8,
118.017,
117.11,
117.2,
116.33,
116.51
]
},
"low": {
"min": 89.47,
"max": 117.45,
"maxDate": 42661,
"minDate": 42502,
"values": [
99.87,
96.43,
96.76,
97.34,
98.84,
97.3,
95.74,
95.36,
95.5,
93.42,
94.94,
98.37,
99.21,
98.07,
93.34,
92.39,
94.35,
95.4,
94.28,
94.08,
95.19,
93.69,
93.04,
93.93,
94.1,
92.59,
93.01,
94.61,
96.15,
96.091,
95.8,
95.92,
94.55,
93.32,
95.25,
96.58,
96.65,
97.42,
99.64,
100.45,
101.37,
100.96,
100.4,
100.27,
100.15,
101.5,
101.78,
103.85,
104.59,
104.96,
105.19,
105.14,
105.21,
105.9,
104.89,
105.06,
104.88,
108.6,
108.88,
108.2,
110.27,
109.42,
109.2,
108.121,
108.17,
108.83,
108.66,
110.8,
111.33,
109.73,
106.94,
106.23,
106.06,
105.52,
104.62,
104.51,
103.91,
95.68,
94.25,
92.51,
92.4,
93.68,
93.82,
92.68,
91.85,
92.59,
92.11,
92.46,
89.47,
90,
91.65,
93.01,
93.89,
93.57,
94.52,
95.67,
96.84,
98.11,
98.64,
99.245,
98.82,
98.33,
96.63,
97.45,
97.55,
98.96,
98.68,
98.46,
98.48,
97.1,
96.75,
97.03,
96.07,
95.3,
95.03,
94.676,
95.35,
95.25,
92.65,
91.5,
92.14,
93.63,
94.3,
95.33,
94.46,
94.37,
95.62,
96.05,
96.73,
97.12,
96.84,
97.32,
98.5,
98.6,
99.34,
99.735,
99.13,
98.31,
96.92,
96.42,
102.75,
102.82,
103.68,
104.41,
104,
104.77,
105.28,
106.18,
107.16,
108.01,
107.76,
107.85,
107.78,
108.08,
109.21,
108.34,
109.02,
108.36,
107.85,
108.53,
107.68,
106.68,
106.31,
106.29,
105.5,
105.64,
105.62,
106.82,
107.51,
107.07,
105.24,
103.13,
102.53,
107.24,
108.6,
113.49,
114.04,
113.25,
112.51,
112.441,
114,
111.55,
111.55,
112.34,
113.43,
111.8,
111.8,
112.28,
112.63,
112.69,
113.13,
113.51,
114.72,
116.2,
116.75,
115.72,
117.13,
116.78,
117.45,
113.8,
116.33,
116.28,
117,
117.31,
113.31,
114.1,
113.45,
113.2,
110.53,
111.23,
109.55,
108.11,
109.46,
109.7,
108.05,
105.83,
106.55,
104.08,
106.159,
106.6,
108.83,
109.66,
110.01,
111.4,
110.33,
110.95,
111.39,
110.07,
110.27,
109.03,
108.85,
108.25,
109.19,
109.16,
110.6,
112.31,
112.49,
113.75,
114.98,
115.23,
115.645,
115.75,
116.68,
116.78,
115.64,
115.59,
116.49,
116.2,
116.4,
115.43,
114.76,
115.75
]
},
"close": {
"min": 90.34,
"max": 118.25,
"maxDate": 42668,
"minDate": 42502,
"values": [
100.7,
96.45,
96.96,
98.53,
99.96,
97.39,
99.52,
97.13,
96.66,
96.79,
96.3,
101.42,
99.44,
99.99,
93.42,
94.09,
97.34,
96.43,
94.48,
96.35,
96.6,
94.02,
95.01,
94.99,
94.27,
93.7,
93.99,
96.64,
98.12,
96.26,
96.04,
96.88,
94.69,
96.1,
96.76,
96.91,
96.69,
100.53,
100.75,
101.5,
103.01,
101.87,
101.03,
101.12,
101.17,
102.26,
102.52,
104.58,
105.97,
105.8,
105.92,
105.91,
106.72,
106.13,
105.67,
105.19,
107.68,
109.56,
108.99,
109.99,
111.12,
109.81,
110.96,
108.54,
108.66,
109.02,
110.44,
112.04,
112.1,
109.85,
107.48,
106.91,
107.13,
105.97,
105.68,
105.08,
104.35,
97.82,
94.83,
93.74,
93.64,
95.18,
94.19,
93.24,
92.72,
92.79,
93.42,
92.51,
90.34,
90.52,
93.88,
93.49,
94.56,
94.2,
95.22,
96.43,
97.9,
99.62,
100.41,
100.35,
99.86,
98.46,
97.72,
97.92,
98.63,
99.03,
98.94,
99.65,
98.83,
97.34,
97.46,
97.14,
97.55,
95.33,
95.1,
95.91,
95.55,
96.1,
93.4,
92.04,
93.59,
94.4,
95.6,
95.89,
94.99,
95.53,
95.94,
96.68,
96.98,
97.42,
96.87,
98.79,
98.78,
99.83,
99.87,
99.96,
99.43,
98.66,
97.34,
96.67,
102.95,
104.34,
104.21,
106.05,
104.48,
105.79,
105.87,
107.48,
108.37,
108.81,
108,
107.93,
108.18,
109.48,
109.38,
109.22,
109.08,
109.36,
108.51,
108.85,
108.03,
107.57,
106.94,
106.82,
106,
106.1,
106.73,
107.73,
107.7,
108.36,
105.52,
103.13,
105.44,
107.95,
111.77,
115.57,
114.92,
113.58,
113.57,
113.55,
114.62,
112.71,
112.88,
113.09,
113.95,
112.18,
113.05,
112.52,
113,
113.05,
113.89,
114.06,
116.05,
116.3,
117.34,
116.98,
117.63,
117.55,
117.47,
117.12,
117.06,
116.6,
117.65,
118.25,
115.59,
114.48,
113.72,
113.54,
111.49,
111.59,
109.83,
108.84,
110.41,
111.06,
110.88,
107.79,
108.43,
105.71,
107.11,
109.99,
109.95,
110.06,
111.73,
111.8,
111.23,
111.79,
111.57,
111.46,
110.52,
109.49,
109.9,
109.11,
109.95,
111.03,
112.12,
113.95,
113.3,
115.19,
115.19,
115.82,
115.97,
116.64,
116.95,
117.06,
116.29,
116.52,
117.26,
116.76,
116.73,
115.82,
116.15,
116.02
]
}
},
"SeriesLabels": {
"x": {
"text": [
"Jan 2016",
"Feb 2016",
"Mar 2016",
"Apr 2016",
"May 2016",
"Jun 2016",
"Jul 2016",
"Aug 2016",
"Sep 2016",
"Oct 2016",
"Nov 2016",
"Dec 2016",
"Jan 2017"
],
"dates": [
42375,
42401,
42430,
42461,
42491,
42522,
42552,
42583,
42614,
42644,
42675,
42705,
42736
],
"utcDates": [
42375,
42401,
42430,
42461,
42491,
42522,
42552,
42583,
42614,
42644,
42675,
42705,
42736
],
"pos": [
0,
0.077,
0.154,
0.231,
0.317,
0.404,
0.481,
0.577,
0.654,
0.731,
0.827,
0.904,
0.99
],
"priorities": [
0.001,
0.002,
0.003,
0.004,
0.005,
0.006,
0.007,
0.008,
0.009,
0.01,
0.011,
0.012,
0.013
]
}
},
"SeriesLabelCoordinates": [
0,
0,
0,
0.019,
0.019,
0.019,
0.019,
0.019,
0.038,
0.038,
0.038,
0.038,
0.058,
0.058,
0.058,
0.058,
0.058,
0.077,
0.077,
0.077,
0.077,
0.077,
0.096,
0.096,
0.096,
0.096,
0.096,
0.115,
0.115,
0.115,
0.115,
0.135,
0.135,
0.135,
0.135,
0.135,
0.154,
0.154,
0.154,
0.154,
0.154,
0.173,
0.173,
0.173,
0.173,
0.173,
0.192,
0.192,
0.192,
0.192,
0.192,
0.212,
0.212,
0.212,
0.212,
0.231,
0.231,
0.231,
0.231,
0.231,
0.25,
0.25,
0.25,
0.25,
0.25,
0.269,
0.269,
0.269,
0.269,
0.269,
0.288,
0.288,
0.288,
0.288,
0.288,
0.308,
0.308,
0.308,
0.308,
0.308,
0.327,
0.327,
0.327,
0.327,
0.327,
0.346,
0.346,
0.346,
0.346,
0.346,
0.365,
0.365,
0.365,
0.365,
0.365,
0.385,
0.385,
0.385,
0.385,
0.385,
0.404,
0.404,
0.404,
0.404,
0.423,
0.423,
0.423,
0.423,
0.423,
0.442,
0.442,
0.442,
0.442,
0.442,
0.462,
0.462,
0.462,
0.462,
0.462,
0.481,
0.481,
0.481,
0.481,
0.481,
0.5,
0.5,
0.5,
0.5,
0.519,
0.519,
0.519,
0.519,
0.519,
0.538,
0.538,
0.538,
0.538,
0.538,
0.558,
0.558,
0.558,
0.558,
0.558,
0.577,
0.577,
0.577,
0.577,
0.577,
0.596,
0.596,
0.596,
0.596,
0.596,
0.615,
0.615,
0.615,
0.615,
0.615,
0.635,
0.635,
0.635,
0.635,
0.635,
0.654,
0.654,
0.654,
0.654,
0.654,
0.673,
0.673,
0.673,
0.673,
0.692,
0.692,
0.692,
0.692,
0.692,
0.712,
0.712,
0.712,
0.712,
0.712,
0.731,
0.731,
0.731,
0.731,
0.731,
0.75,
0.75,
0.75,
0.75,
0.75,
0.769,
0.769,
0.769,
0.769,
0.769,
0.788,
0.788,
0.788,
0.788,
0.788,
0.808,
0.808,
0.808,
0.808,
0.808,
0.827,
0.827,
0.827,
0.827,
0.827,
0.846,
0.846,
0.846,
0.846,
0.846,
0.865,
0.865,
0.865,
0.865,
0.865,
0.885,
0.885,
0.885,
0.885,
0.904,
0.904,
0.904,
0.904,
0.904,
0.923,
0.923,
0.923,
0.923,
0.923,
0.942,
0.942,
0.942,
0.942,
0.942,
0.962,
0.962,
0.962,
0.962,
0.962,
0.981,
0.981,
0.981,
0.981,
1,
1
],
"SeriesDuration": 365,
"SeriesDates": [
"Wed Jan 6 2016",
"Thu Jan 7 2016",
"Fri Jan 8 2016",
"Mon Jan 11 2016",
"Tue Jan 12 2016",
"Wed Jan 13 2016",
"Thu Jan 14 2016",
"Fri Jan 15 2016",
"Tue Jan 19 2016",
"Wed Jan 20 2016",
"Thu Jan 21 2016",
"Fri Jan 22 2016",
"Mon Jan 25 2016",
"Tue Jan 26 2016",
"Wed Jan 27 2016",
"Thu Jan 28 2016",
"Fri Jan 29 2016",
"Mon Feb 1 2016",
"Tue Feb 2 2016",
"Wed Feb 3 2016",
"Thu Feb 4 2016",
"Fri Feb 5 2016",
"Mon Feb 8 2016",
"Tue Feb 9 2016",
"Wed Feb 10 2016",
"Thu Feb 11 2016",
"Fri Feb 12 2016",
"Tue Feb 16 2016",
"Wed Feb 17 2016",
"Thu Feb 18 2016",
"Fri Feb 19 2016",
"Mon Feb 22 2016",
"Tue Feb 23 2016",
"Wed Feb 24 2016",
"Thu Feb 25 2016",
"Fri Feb 26 2016",
"Mon Feb 29 2016",
"Tue Mar 1 2016",
"Wed Mar 2 2016",
"Thu Mar 3 2016",
"Fri Mar 4 2016",
"Mon Mar 7 2016",
"Tue Mar 8 2016",
"Wed Mar 9 2016",
"Thu Mar 10 2016",
"Fri Mar 11 2016",
"Mon Mar 14 2016",
"Tue Mar 15 2016",
"Wed Mar 16 2016",
"Thu Mar 17 2016",
"Fri Mar 18 2016",
"Mon Mar 21 2016",
"Tue Mar 22 2016",
"Wed Mar 23 2016",
"Thu Mar 24 2016",
"Mon Mar 28 2016",
"Tue Mar 29 2016",
"Wed Mar 30 2016",
"Thu Mar 31 2016",
"Fri Apr 1 2016",
"Mon Apr 4 2016",
"Tue Apr 5 2016",
"Wed Apr 6 2016",
"Thu Apr 7 2016",
"Fri Apr 8 2016",
"Mon Apr 11 2016",
"Tue Apr 12 2016",
"Wed Apr 13 2016",
"Thu Apr 14 2016",
"Fri Apr 15 2016",
"Mon Apr 18 2016",
"Tue Apr 19 2016",
"Wed Apr 20 2016",
"Thu Apr 21 2016",
"Fri Apr 22 2016",
"Mon Apr 25 2016",
"Tue Apr 26 2016",
"Wed Apr 27 2016",
"Thu Apr 28 2016",
"Fri Apr 29 2016",
"Mon May 2 2016",
"Tue May 3 2016",
"Wed May 4 2016",
"Thu May 5 2016",
"Fri May 6 2016",
"Mon May 9 2016",
"Tue May 10 2016",
"Wed May 11 2016",
"Thu May 12 2016",
"Fri May 13 2016",
"Mon May 16 2016",
"Tue May 17 2016",
"Wed May 18 2016",
"Thu May 19 2016",
"Fri May 20 2016",
"Mon May 23 2016",
"Tue May 24 2016",
"Wed May 25 2016",
"Thu May 26 2016",
"Fri May 27 2016",
"Tue May 31 2016",
"Wed Jun 1 2016",
"Thu Jun 2 2016",
"Fri Jun 3 2016",
"Mon Jun 6 2016",
"Tue Jun 7 2016",
"Wed Jun 8 2016",
"Thu Jun 9 2016",
"Fri Jun 10 2016",
"Mon Jun 13 2016",
"Tue Jun 14 2016",
"Wed Jun 15 2016",
"Thu Jun 16 2016",
"Fri Jun 17 2016",
"Mon Jun 20 2016",
"Tue Jun 21 2016",
"Wed Jun 22 2016",
"Thu Jun 23 2016",
"Fri Jun 24 2016",
"Mon Jun 27 2016",
"Tue Jun 28 2016",
"Wed Jun 29 2016",
"Thu Jun 30 2016",
"Fri Jul 1 2016",
"Tue Jul 5 2016",
"Wed Jul 6 2016",
"Thu Jul 7 2016",
"Fri Jul 8 2016",
"Mon Jul 11 2016",
"Tue Jul 12 2016",
"Wed Jul 13 2016",
"Thu Jul 14 2016",
"Fri Jul 15 2016",
"Mon Jul 18 2016",
"Tue Jul 19 2016",
"Wed Jul 20 2016",
"Thu Jul 21 2016",
"Fri Jul 22 2016",
"Mon Jul 25 2016",
"Tue Jul 26 2016",
"Wed Jul 27 2016",
"Thu Jul 28 2016",
"Fri Jul 29 2016",
"Mon Aug 1 2016",
"Tue Aug 2 2016",
"Wed Aug 3 2016",
"Thu Aug 4 2016",
"Fri Aug 5 2016",
"Mon Aug 8 2016",
"Tue Aug 9 2016",
"Wed Aug 10 2016",
"Thu Aug 11 2016",
"Fri Aug 12 2016",
"Mon Aug 15 2016",
"Tue Aug 16 2016",
"Wed Aug 17 2016",
"Thu Aug 18 2016",
"Fri Aug 19 2016",
"Mon Aug 22 2016",
"Tue Aug 23 2016",
"Wed Aug 24 2016",
"Thu Aug 25 2016",
"Fri Aug 26 2016",
"Mon Aug 29 2016",
"Tue Aug 30 2016",
"Wed Aug 31 2016",
"Thu Sep 1 2016",
"Fri Sep 2 2016",
"Tue Sep 6 2016",
"Wed Sep 7 2016",
"Thu Sep 8 2016",
"Fri Sep 9 2016",
"Mon Sep 12 2016",
"Tue Sep 13 2016",
"Wed Sep 14 2016",
"Thu Sep 15 2016",
"Fri Sep 16 2016",
"Mon Sep 19 2016",
"Tue Sep 20 2016",
"Wed Sep 21 2016",
"Thu Sep 22 2016",
"Fri Sep 23 2016",
"Mon Sep 26 2016",
"Tue Sep 27 2016",
"Wed Sep 28 2016",
"Thu Sep 29 2016",
"Fri Sep 30 2016",
"Mon Oct 3 2016",
"Tue Oct 4 2016",
"Wed Oct 5 2016",
"Thu Oct 6 2016",
"Fri Oct 7 2016",
"Mon Oct 10 2016",
"Tue Oct 11 2016",
"Wed Oct 12 2016",
"Thu Oct 13 2016",
"Fri Oct 14 2016",
"Mon Oct 17 2016",
"Tue Oct 18 2016",
"Wed Oct 19 2016",
"Thu Oct 20 2016",
"Fri Oct 21 2016",
"Mon Oct 24 2016",
"Tue Oct 25 2016",
"Wed Oct 26 2016",
"Thu Oct 27 2016",
"Fri Oct 28 2016",
"Mon Oct 31 2016",
"Tue Nov 1 2016",
"Wed Nov 2 2016",
"Thu Nov 3 2016",
"Fri Nov 4 2016",
"Mon Nov 7 2016",
"Tue Nov 8 2016",
"Wed Nov 9 2016",
"Thu Nov 10 2016",
"Fri Nov 11 2016",
"Mon Nov 14 2016",
"Tue Nov 15 2016",
"Wed Nov 16 2016",
"Thu Nov 17 2016",
"Fri Nov 18 2016",
"Mon Nov 21 2016",
"Tue Nov 22 2016",
"Wed Nov 23 2016",
"Fri Nov 25 2016",
"Mon Nov 28 2016",
"Tue Nov 29 2016",
"Wed Nov 30 2016",
"Thu Dec 1 2016",
"Fri Dec 2 2016",
"Mon Dec 5 2016",
"Tue Dec 6 2016",
"Wed Dec 7 2016",
"Thu Dec 8 2016",
"Fri Dec 9 2016",
"Mon Dec 12 2016",
"Tue Dec 13 2016",
"Wed Dec 14 2016",
"Thu Dec 15 2016",
"Fri Dec 16 2016",
"Mon Dec 19 2016",
"Tue Dec 20 2016",
"Wed Dec 21 2016",
"Thu Dec 22 2016",
"Fri Dec 23 2016",
"Tue Dec 27 2016",
"Wed Dec 28 2016",
"Thu Dec 29 2016",
"Fri Dec 30 2016",
"Tue Jan 3 2017",
"Wed Jan 4 2017"
]
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
