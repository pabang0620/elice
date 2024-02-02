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

import { createEliceExtRoutes } from '@elice/extcontent-utils';

//
// =============== 라우트 경로를 추가하려면 여기 아래를 수정하세요 ===============
// =============== Edit below to add route paths ===============
//
import exampleRoutes from './contents/{example}/{example}.routes';
import FifthGradeRoutes from './contents/FifthGrade/FifthGrade.routes';

const routes = createEliceExtRoutes([
  {
    path: '/example',
    component: import('./contents/{example}/{example}'),
    children: exampleRoutes,
  },
  {
    path: '/fifth',
    component: import('./contents/FifthGrade/FifthGrade'),
    children: FifthGradeRoutes,
  },
]);
//
// =============== 라우트 경로를 추가하려면 여기 위를 수정하세요 ===============
// =============== Edit above to add route paths ===============
//

export default () => routes;
