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

import { __eliceinternal_api_auth__ } from '../apis/_client';
import { __eliceinternal_account_store__ } from './_stores/_account';
import { __eliceinternal_metadata_store__ } from './_stores/_metadata';
import { __eliceinternal_token_store__ } from './_stores/_token';

//
//
//

interface BootstrapParams {
  extToken: string;
  courseId: number | null;
  materialId: number | null;
  parentUrl: string | null;
}

interface BootstrapReturn {
  locale: string;
}

//
//
//

/**
 * resolve search params from url
 */
const resolveSearchParams = async (): Promise<BootstrapParams> => {
  const params = new URLSearchParams(window.location.search);

  return {
    extToken: params.get('extToken') || '',
    courseId: Number(params.get('course_id')) || null,
    materialId: Number(params.get('material_id')) || null,
    parentUrl: params.get('parent_url') || null,
  };
};

/**
 * resolve external token
 */
const resolveExtToken = async (params: BootstrapParams) => {
  if (!params.extToken) {
    return;
  }

  __eliceinternal_token_store__.getState().setToken(
    await __eliceinternal_api_auth__
      .authTokenPost({
        authTokenPostRequest: {
          externalToken: params.extToken,
        },
      })
      .then(res => res.accessToken)
      .catch(() => null)
  );
};

/**
 * resolve account
 */
const resolveAccount = async () => {
  await __eliceinternal_account_store__.getState().refetch();
};

/**
 * resolve metadata
 */
const resolveMetadata = async (params: BootstrapParams) => {
  if (!params.courseId || !params.materialId) {
    throw new Error('both course ID and material ID required');
  }

  __eliceinternal_metadata_store__.getState().setMetadata({
    courseId: params.courseId,
    materialId: params.materialId,
  });
};

//
//
//

export const __eliceinternal_bootstrap__ =
  async (): Promise<BootstrapReturn> => {
    const params = await resolveSearchParams();

    await resolveExtToken(params);
    await resolveAccount();
    await resolveMetadata(params);

    return {
      locale: 'ko',
    };
  };
