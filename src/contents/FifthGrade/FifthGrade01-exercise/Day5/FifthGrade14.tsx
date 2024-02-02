import React, { useState } from 'react';
import { sendScore } from '@elice/extcontent-apis';
import { postKeyValue } from '@elice/extcontent-apis';
import { getKeyValue } from '@elice/extcontent-apis';

import Styled from '../../style';
import ConfirmBtn from '../../utils/ConfirmBtn';

import type { AnswersType } from '../../Type/Type1';

import correctimg from 'src/contents/FifthGrade/fifthImage/correct.png';
import incorrectimg from 'src/contents/FifthGrade/fifthImage/incorrect.png';

const FifthGrade14: React.FC = () => {
  const [isInputDisabled, setIsInputDisabled] = useState(false);
  const [type, setType] = useState(true);
  const [answers, setAnswers] = useState<AnswersType>({
    '1': [''],
    '2': [''],
    '3': [''],
    '4': [''],
  });
  const correctAnswers: AnswersType = {
    '1': ['21'],
    '2': ['7'],
    '3': ['18'],
    '4': ['8'],
  };
  const handleChange = (questionId: string, index: number, value: string) => {
    setAnswers({
      ...answers,
      [questionId]: answers[questionId].map((item, i) =>
        i === index ? value : item
      ),
    });
  };

  const [showResults, setShowResults] = useState(false);

  const isCorrect = (questionId: string) => {
    return correctAnswers[questionId].every(
      (answer, index) => answer === answers[questionId][index]
    );
  };
  const calculateScore = () => {
    const totalQuestions = Object.keys(correctAnswers).length; // 전체 문제 수
    const scorePerQuestion = 100 / totalQuestions; // 각 문제당 점수

    let correctCount = 0;
    Object.keys(correctAnswers).forEach(questionId => {
      if (isCorrect(questionId)) {
        correctCount++;
      }
    });

    return correctCount * scorePerQuestion; // 총점 계산
  };

  const handleGrade = async () => {
    setShowResults(!showResults);
    setType(!type);

    // 'type'이 true일 때만 점수를 계산하고 서버로 보냄
    if (type) {
      const totalScore = calculateScore();
      sendScore({ score: totalScore }).catch(error => {
        console.error('Error with sendScore:', error);
      });
      postKeyValue({
        key: 'fifthGrade14Answers',
        value: answers,
      }).catch(error => {
        console.error('Error saving answers:', error);
      });
    }

    // 'type'이 false일 경우 (다시 풀기 상태), 이 부분은 실행되지 않음
    setIsInputDisabled(!isInputDisabled);
  };
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  if (!isDataLoaded) {
    getKeyValue({ key: 'fifthGrade14Answers' })
      .then(savedAnswers => {
        if (savedAnswers) {
          setAnswers(savedAnswers);
        }
        setIsDataLoaded(true);
      })
      .catch(error => {
        console.error('Error loading saved answers:', error);
      });
  }
  return (
    <Styled.OneToNine className="sectionSize">
      <div className="quiz fontSize20 lakwerfj3214">
        <div className=" quizNumber123887 awefawufiut">
          <div className="afwe3513 flexRow noWrap1">
            {showResults && (
              <div>
                {isCorrect('1') ? (
                  <div>
                    <img
                      className="answerImg53"
                      src={correctimg}
                      alt="Correct"
                    />
                  </div>
                ) : (
                  <div>
                    <img
                      className="answerImg53"
                      src={incorrectimg}
                      alt="Incorrect"
                    />
                  </div>
                )}
              </div>
            )}{' '}
            ① 버스에 25명의 사람이 타고 있습니다. 한 정류장에서 7명의 사람이
            타고, 11명이 내렸습니다.
          </div>
          <div>정류장을 출발하는 순간 버스에 타고 있는 사람은 몇 명일까요?</div>
          <div className="flexRow">
            정답 : &nbsp;&nbsp;
            <input
              disabled={isInputDisabled}
              value={answers['1'][0]}
              onChange={e => handleChange('1', 0, e.target.value)}
              type="text"
              className="averageInput marginRight239"
            />
            &nbsp;&nbsp;명
          </div>
        </div>
        <div className=" quizNumber123887 awefawufiut">
          <div className="afwe3513 flexRow noWrap1">
            {showResults && (
              <div>
                {isCorrect('2') ? (
                  <div>
                    <img
                      className="answerImg53"
                      src={correctimg}
                      alt="Correct"
                    />
                  </div>
                ) : (
                  <div>
                    <img
                      className="answerImg53"
                      src={incorrectimg}
                      alt="Incorrect"
                    />
                  </div>
                )}
              </div>
            )}{' '}
            ② 냉장고에 귤 23개가 있었는데 형이 7개, 동생이 9개를 먹었습니다.
            냉장고에 남은 귤은 몇 개
          </div>
          <div> 일까요?</div>
          <div className="flexRow">
            정답 : &nbsp;&nbsp;
            <input
              disabled={isInputDisabled}
              value={answers['2'][0]}
              onChange={e => handleChange('2', 0, e.target.value)}
              type="text"
              className="averageInput marginRight239"
            />
            &nbsp;&nbsp;개
          </div>
        </div>
        <div className=" quizNumber123887 awefawufiut">
          <div className="afwe3513 flexRow noWrap1">
            {showResults && (
              <div>
                {isCorrect('3') ? (
                  <div>
                    <img
                      className="answerImg53"
                      src={correctimg}
                      alt="Correct"
                    />
                  </div>
                ) : (
                  <div>
                    <img
                      className="answerImg53"
                      src={incorrectimg}
                      alt="Incorrect"
                    />
                  </div>
                )}
              </div>
            )}{' '}
            ③ 27명의 학생이 3명씩 짝을 지어 보트를 탔고, 각 보트에 노가 2개씩
            있습니다. 학생들이 탄 보
          </div>
          <div>트의 노는 모두 몇 개일까요?</div>
          <div className="flexRow">
            정답 : &nbsp;&nbsp;
            <input
              disabled={isInputDisabled}
              value={answers['3'][0]}
              onChange={e => handleChange('3', 0, e.target.value)}
              type="text"
              className="averageInput marginRight239"
            />
            &nbsp;&nbsp;개
          </div>
        </div>
        <div className=" quizNumber123887 awefawufiut">
          <div className="afwe3513 flexRow noWrap1">
            {showResults && (
              <div>
                {isCorrect('4') ? (
                  <div>
                    <img
                      className="answerImg53"
                      src={correctimg}
                      alt="Correct"
                    />
                  </div>
                ) : (
                  <div>
                    <img
                      className="answerImg53"
                      src={incorrectimg}
                      alt="Incorrect"
                    />
                  </div>
                )}
              </div>
            )}{' '}
            ④ 6개씩 12줄로 놓여 있는 의자를 9줄로 바꾸어 놓으려면 한 줄에 의자를
            몇 개씩 놓아야 할까요
          </div>
          <div>?</div>
          <div className="flexRow">
            정답 : &nbsp;&nbsp;
            <input
              disabled={isInputDisabled}
              value={answers['4'][0]}
              onChange={e => handleChange('4', 0, e.target.value)}
              type="text"
              className="averageInput marginRight239"
            />
            &nbsp;&nbsp;개
          </div>
        </div>
      </div>
      <ConfirmBtn type={type} day={5} handleGrade={handleGrade} />
    </Styled.OneToNine>
  );
};

export default FifthGrade14;
