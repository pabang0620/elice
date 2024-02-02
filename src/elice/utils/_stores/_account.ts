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

import { createStore } from 'zustand';

import { __eliceinternal_api_account__ } from '../../apis/_client';

import type { AccountGetResponse } from '@elice/openapi-client-external-contents';

//
//
//

interface EliceAccountStore {
  account: AccountGetResponse | null;
  refetch: (signal?: AbortSignal) => Promise<AccountGetResponse>;
}

//
//
//

export const __eliceinternal_account_store__ = createStore<EliceAccountStore>(
  set => ({
    account: null,
    refetch: async signal => {
      return __eliceinternal_api_account__
        .accountMeGet({ signal })
        .then(account => {
          set({ account });
          return account;
        });
    },
  })
);
