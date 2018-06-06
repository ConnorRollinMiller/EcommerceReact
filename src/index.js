import React from 'react';
import ReactDOM from 'react-dom';
import Root from './Components/Root';

import '@fortawesome/fontawesome';
import '@fortawesome/fontawesome-free-brands';
import '@fortawesome/fontawesome-free-regular';
import '@fortawesome/fontawesome-free-solid';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

ReactDOM.render(
	<Root />,
	document.querySelector('#root')
);
