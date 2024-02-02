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
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import routes from './App.routes';

//
//
//

const App: React.FC = () => {
  const router = React.useMemo(() => createBrowserRouter(routes()), []);

  //
  //
  //

  return (
    <React.Suspense fallback={<div />}>
      <RouterProvider router={router} />
    </React.Suspense>
  );
};

export default App;
