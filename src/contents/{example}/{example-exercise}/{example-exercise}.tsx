/* ========================================================
 * !!! 안내 !!!
 * 해당 파일은 예시 실습 파일입니다.
 * 실습 자료 제작에 대한 자세한 내용은 프로젝트 README.md를 참고해주세요.
 *
 * !!! Notice !!!
 * This is an example exercise file.
 * For more information on creating exercise materials,
 * please refer to the project README.md.
 * ======================================================== */

import React from 'react';
import { sendScore } from '@elice/extcontent-apis';
import { useEliceAccount } from '@elice/extcontent-utils';

const ExampleExercise: React.FC = () => {
  const { account } = useEliceAccount();

  return (
    <div>
      <h1>ExampleExercise</h1>
      <p>
        {account?.fullname || 'Anonymous'} 님, 안녕하세요! <br />
        해당 파일은 예시 실습 파일입니다. <br />
        실습 자료 제작에 대한 자세한 내용은 프로젝트 README.md를 참고해주세요.
      </p>
      <p>
        Hello, {account?.fullname || 'Anonymous'}! <br />
        This is an example exercise file. <br />
        For more information on creating exercise materials, please refer to the
        project README.md.
      </p>

      {/*
       * 아래는 예시로 점수를 랜덤으로 생성되어 전송하는 버튼입니다.
       * Below is an example button that randomly generates and sends a score.
       */}
      <button
        onClick={() => {
          const score = 100;
          sendScore({ score }).catch(err => {
            console.error('send score failed', err);
          });
        }}
      >
        Send Score
      </button>
    </div>
  );
};

export default ExampleExercise;
