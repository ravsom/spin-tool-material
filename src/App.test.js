import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/MainApp';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});
