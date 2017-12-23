require('./assets/stylesheets/styles.scss');

import React from 'react'; // import the main react dependecy
import ReactDOM from 'react-dom'; // import reactDom
import App from './app/App.jsx'; // import the main app component

ReactDOM.render(<App />, document.getElementById('root')) // render our App component and mount it to our #root element