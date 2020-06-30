import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App.jsx'; //eslint-disable-line

const listing = '001';

ReactDOM.render(<App listing={listing} />, document.getElementById('reviews'));
