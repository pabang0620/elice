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

/* eslint-disable @typescript-eslint/no-var-requires */

import path from 'node:path';

import type { CracoConfig } from '@craco/types';

const { CracoElicePlugin, dotenv } = require('@elice/craco-plugin');

//
//
//

dotenv();

const SRC_PATH = path.resolve(__dirname, 'src');

//
//
//

const config: CracoConfig = {
  webpack: {
    alias: {
      '@elice/extcontent-apis': path.join(SRC_PATH, 'elice', 'apis'),
      '@elice/extcontent-utils': path.join(SRC_PATH, 'elice', 'utils'),
    },
  },

  plugins: [
    {
      plugin: CracoElicePlugin,
      options: {
        cdn: {
          endpoint: process.env.CICD_CDN,
          projectRoot: process.env.CICD_CDN_PROJECT_ROOT,
        },
        sharp: false,
        sentry: false,
      },
    },
  ],
};

export default config;
