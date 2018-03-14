import React from 'react';
import ReactDOM from 'react-dom';
import InfoBox from '../components/InfoBox';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<InfoBox />, div);
  ReactDOM.unmountComponentAtNode(div);
});
