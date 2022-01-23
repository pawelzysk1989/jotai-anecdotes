import './index.css';

import { Provider } from 'jotai';
import React from 'react';
import ReactDOM from 'react-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import App from './App';

const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <Provider>
      <QueryClientProvider client={queryClient}>
        <App />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
