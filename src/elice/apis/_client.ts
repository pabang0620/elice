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

import {
  AccountApi as EliceAccountApi,
  AuthApi as EliceAuthApi,
  Configuration,
} from '@elice/openapi-client-external-contents';

import { __eliceinternal_token_store__ } from '../utils/_stores/_token';

//
//
//

const __eliceinternal_api_config__ = new Configuration({
  accessToken: () => __eliceinternal_token_store__.getState().token ?? '',
  basePath: process.env.REACT_APP_ELICE_EXTERNAL_CONTENT_API,
});

//
//
//

export const __eliceinternal_api_account__ = new EliceAccountApi(
  __eliceinternal_api_config__
);
export const __eliceinternal_api_auth__ = new EliceAuthApi(
  __eliceinternal_api_config__
);
