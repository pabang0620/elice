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

import { __eliceinternal_metadata_store__ } from '../utils/_stores/_metadata';
import { __eliceinternal_api_account__ } from './_client';
import { _kvstore_createKey } from './_helper';

import type {
  AccountKvstoreGetRequest,
  KvStorePostRequest,
  ProgressPostRequest,
} from '@elice/openapi-client-external-contents';

//
//
//

/**
 * Send score to elice server.
 */
export async function sendScore(
  params: ProgressPostRequest,
  init?: RequestInit
) {
  await __eliceinternal_api_account__.progressPost(
    {
      progressPostRequest: params,
    },
    init
  );
}

/**
 * Get value from key-value store.
 */
export async function getKeyValue<T extends string | Record<string, any> = any>(
  params: AccountKvstoreGetRequest,
  init?: RequestInit
) {
  const materialId =
    __eliceinternal_metadata_store__.getState().metadata?.materialId;
  if (!materialId || !params.key) {
    throw new Error('material ID and key is required');
  }

  const res = await __eliceinternal_api_account__.accountKvstoreGet(
    {
      key: _kvstore_createKey(params.key),
    },
    init
  );
  return (res.value ?? null) as T | null;
}

/**
 * Post value to key-value store.
 */
export async function postKeyValue(
  params: Omit<Required<KvStorePostRequest>, 'value'> & { value: any },
  init?: RequestInit
) {
  await __eliceinternal_api_account__.accountKvstorePost(
    {
      kvStorePostRequest: {
        ...params,
        key: _kvstore_createKey(params.key),
      },
    },
    init
  );
}
