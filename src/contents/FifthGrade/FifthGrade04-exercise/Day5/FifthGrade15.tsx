import React, { useState } from 'react';
import { sendScore } from '@elice/extcontent-apis';
import { postKeyValue } from '@elice/extcontent-apis';
import { getKeyValue } from '@elice/extcontent-apis';

import Styled from '../../style';
import ConfirmBtn from '../../utils/ConfirmBtn';

import type { AnswersType } from '../../Type/Type1';

import correctimg from 'src/contents/FifthGrade/fifthImage/correct.png';
import incorrectimg from 'src/contents/FifthGrade/fifthImage/incorrect.png';

const FifthGrade15: React.FC = () => {
  const [isInputDisabled, setIsInputDisabled] = useState(false);
  const [type, setType] = useState(true);
  const [answers, setAnswers] = useState<AnswersType>({
    '1': ['', '', ''],
    '2': ['', ''],
    '3': ['', '', ''],
    '4': ['', '', ''],
  });
  const correctAnswers: AnswersType = {
    '1': ['2', '1', '2'],
    '2': ['1', '6'],
    '3': ['2', '2', '5'],
    '4': ['2', '14', '25'],
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
        key: 'fifthGrade60Answers',
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
    getKeyValue({ key: 'fifthGrade60Answers' })
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
            ① &nbsp;&nbsp;어떤 정사각형의 가로를&nbsp;&nbsp;
            <div className="quiz1546">
              <div className="textCenter">1</div>
              <div className="divlineCSS1"></div>
              <div className="textCenter">6</div>
            </div>
            &nbsp;&nbsp;만큼 줄이고, 세로를 3배로 늘려 직사각형을 만들었습니다.
          </div>
          <div> 이 직사각형의 넓이는 처음 정사각형의 몇 배일까요?</div>
          <div className="flexRow">
            정답 : &nbsp;&nbsp;
            <input
              disabled={isInputDisabled}
              value={answers['1'][0]}
              onChange={e => handleChange('1', 0, e.target.value)}
              type="text"
              className="averageInput marginRight239"
            />
            <div className=" ">
              <input
                disabled={isInputDisabled}
                value={answers['1'][1]}
                onChange={e => handleChange('1', 1, e.target.value)}
                type="text"
                className="averageInput"
              />
              <div className="divlineCSS15"></div>
              <input
                disabled={isInputDisabled}
                value={answers['1'][2]}
                onChange={e => handleChange('1', 2, e.target.value)}
                type="text"
                className="averageInput"
              />
            </div>
            &nbsp;&nbsp;배
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
            ② &nbsp;&nbsp; 정호네 반 학생의
            <div className="quiz1546">
              <div className="textCenter">1</div>
              <div className="divlineCSS1"></div>
              <div className="textCenter">2</div>
            </div>
            &nbsp;&nbsp;은 남학생입니다. 남학생 중의&nbsp;&nbsp;
            <div className="quiz1546">
              <div className="textCenter">2</div>
              <div className="divlineCSS1"></div>
              <div className="textCenter">3</div>
            </div>
            &nbsp;&nbsp;는 안경을 썼을 때
          </div>
          <div className="afwe3513 flexRow noWrap1">
            정호네 반에서 안경 을 쓰지 않은 남학생은 전체의 몇 분의 몇일까요?
          </div>
          <div className="flexRow">
            정답 : &nbsp;&nbsp;
            <div className=" ">
              <input
                disabled={isInputDisabled}
                value={answers['2'][0]}
                onChange={e => handleChange('2', 0, e.target.value)}
                type="text"
                className="averageInput"
              />
              <div className="divlineCSS15"></div>
              <input
                disabled={isInputDisabled}
                value={answers['2'][1]}
                onChange={e => handleChange('2', 1, e.target.value)}
                type="text"
                className="averageInput"
              />
            </div>
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
            ③ &nbsp;&nbsp;바닥에 떨어뜨리면 튀어 오르는 높이가 떨어진
            높이의&nbsp;&nbsp;
            <div className="quiz1546">
              <div className="textCenter">4</div>
              <div className="divlineCSS1"></div>
              <div className="textCenter">5</div>
            </div>
            &nbsp;&nbsp;가 되는 공이 있습니다.
          </div>
          <div>
            이 공을 3 m 높이에서 떨어뜨렸을 때 튀어 오르는 높이는 몇 m일까요?
          </div>
          <div className="flexRow">
            정답 : &nbsp;&nbsp;
            <input
              disabled={isInputDisabled}
              value={answers['3'][0]}
              onChange={e => handleChange('3', 0, e.target.value)}
              type="text"
              className="averageInput marginRight239"
            />
            <div className=" ">
              <input
                disabled={isInputDisabled}
                value={answers['3'][1]}
                onChange={e => handleChange('3', 1, e.target.value)}
                type="text"
                className="averageInput"
              />
              <div className="divlineCSS15"></div>
              <input
                disabled={isInputDisabled}
                value={answers['3'][2]}
                onChange={e => handleChange('3', 2, e.target.value)}
                type="text"
                className="averageInput"
              />
            </div>
            &nbsp;&nbsp;m
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
            ④ &nbsp;&nbsp; 한 변의 길이가&nbsp;
            <div className="quiz1546">
              <div className="textCenter">8</div>
              <div className="divlineCSS1"></div>
              <div className="textCenter">5</div>
            </div>
            &nbsp;cm인 정사각형의 넓이는 몇 cm²일까요?
          </div>
          <div className="flexRow">
            정답 : &nbsp;&nbsp;
            <input
              disabled={isInputDisabled}
              value={answers['4'][0]}
              onChange={e => handleChange('4', 0, e.target.value)}
              type="text"
              className="averageInput marginRight239"
            />
            <div className="">
              <input
                disabled={isInputDisabled}
                value={answers['4'][1]}
                onChange={e => handleChange('4', 1, e.target.value)}
                type="text"
                className="averageInput"
              />
              <div className="divlineCSS15"></div>
              <input
                disabled={isInputDisabled}
                value={answers['4'][2]}
                onChange={e => handleChange('4', 2, e.target.value)}
                type="text"
                className="averageInput"
              />
            </div>
            &nbsp;&nbsp;cm²
          </div>
        </div>
      </div>
      <ConfirmBtn type={type} day={5} handleGrade={handleGrade} />
    </Styled.OneToNine>
  );
};

export default FifthGrade15;
