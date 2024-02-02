/* ========================================================
 * !!! 주의 !!!
 * 해당 파일은 엘리스 외부 콘텐츠 프로젝트의 주요 부분이며, 허가 없이 수정할 수 없습니다.
 * 이와 관련하여 질문이 있으시면 연락 주시기 바랍니다.
 *
 * !!! Warning !!!
 * This file is core part of the Elice external contents project,
 * and should not be modified without permission.
 * If you have any questions, please contact us via contact point.
 * ======================================================== */

import React from 'react';
import { createRoot } from 'react-dom/client';
import { IntlProvider } from 'react-intl';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { __eliceinternal_bootstrap__ } from './elice/utils/_bootstrap';
import App from './App';
import AppStylesheet from './App.stylesheet';

//
//
//

const appQueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
      staleTime: 1 * 1000,
    },
  },
});

//
//
//

const rootEl = document.getElementById('root') ?? document.body;
const root = createRoot(rootEl);

// __eliceinternal_bootstrap__()
//   .then(res => {
//     root.render(
//       <React.StrictMode>
//         <QueryClientProvider client={appQueryClient}>
//           <IntlProvider locale={res.locale}>
//             <App />
//             <AppStylesheet />
//           </IntlProvider>
//         </QueryClientProvider>
//       </React.StrictMode>
//     );
//   })
//   .catch(err => {
//     console.warn('failed to bootstrapping external contents app:', err);
//     rootEl.innerHTML = `<h1>Error</h1>`;
//   });

root.render(
  <React.StrictMode>
    <QueryClientProvider client={appQueryClient}>
      <App />
      <AppStylesheet />
    </QueryClientProvider>
  </React.StrictMode>
);
