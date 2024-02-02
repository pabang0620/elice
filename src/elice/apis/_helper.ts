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

import { decamelize } from 'humps';

import { __eliceinternal_metadata_store__ } from '../utils/_stores/_metadata';

//
//
//

const KVSTORE_KEY_SEPARATOR = '_';

//
//
//

/**
 *
 */
export function _kvstore_createKey(key: string | null | undefined) {
  const materialId =
    __eliceinternal_metadata_store__.getState().metadata?.materialId;
  if (!materialId || !key) {
    throw new Error('material ID and key is required');
  }

  return decamelize(`material${materialId}.${key}`, {
    separator: KVSTORE_KEY_SEPARATOR,
  });
}
