import React from 'react';

import './App.css';
import { AlgoliaProvider, defineAlgoliaApp } from './lib';

const {
  REACT_APP_ALGOLIA_APP_ID,
  REACT_APP_ALGOLIA_API_KEY,
  REACT_APP_ALGOLIA_INDEX_NAME
} = process.env;

const App = () => {
  return (
    <AlgoliaProvider
      applications={[
        defineAlgoliaApp(
          REACT_APP_ALGOLIA_APP_ID,
          REACT_APP_ALGOLIA_API_KEY,
          REACT_APP_ALGOLIA_INDEX_NAME
        )
      ]}
    >
      <h1>React Algolia</h1>
    </AlgoliaProvider>
  );
};

export default App;
