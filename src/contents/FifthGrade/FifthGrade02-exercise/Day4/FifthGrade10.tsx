import React, { useState } from 'react';
import { sendScore } from '@elice/extcontent-apis';
import { postKeyValue } from '@elice/extcontent-apis';
import { getKeyValue } from '@elice/extcontent-apis';

import Styled from '../../style';
import ConfirmBtn from '../../utils/ConfirmBtn';

import type { AnswersType } from '../../Type/Type1';

import correctimg from 'src/contents/FifthGrade/fifthImage/correct.png';
import incorrectimg from 'src/contents/FifthGrade/fifthImage/incorrect.png';
import fifthimg from 'src/contents/FifthGrade/fifthImage/화살표.png';

const FifthGrade10: React.FC = () => {
  const [isInputDisabled, setIsInputDisabled] = useState(false);
  const [type, setType] = useState(true);
  const [answers, setAnswers] = useState<AnswersType>({
    '1': [''],
    '2': [''],
    '3': [''],
    '4': [''],
    '5': [''],
    '6': [''],
    '7': [''],
    '8': [''],
    '9': [''],
    '10': [''],
  });
  const correctAnswers: AnswersType = {
    '1': ['9'],
    '2': ['8'],
    '3': ['6'],
    '4': ['7'],
    '5': ['7'],
    '6': ['6'],
    '7': ['5'],
    '8': ['5'],
    '9': ['6'],
    '10': ['6'],
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
        key: 'fifthGrade25Answers',
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
    getKeyValue({ key: 'fifthGrade25Answers' })
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
      <div className="quizAll asdfasdf242">
        <div className="quiz241Ex">
          <div className="flexRow nowrap1">
            <div className="flexcol nowrap1">
              <div className="textLLeft fontSize20">
                40보다 작은 6의 배수 개수
              </div>
              <div className="flexRow quizNumber123522">
                <img className="allowRight" src={fifthimg} alt="" />
                <div className="borderColor233 margin2410 quizNumber1235">
                  6
                </div>{' '}
                개
              </div>
              <div className="Red233 fontSize25">39÷6=6…3</div>
            </div>
            <div className="flexcol elemet2411">
              <p className="fontSize20">1부터 39까지의 수에서</p>
              <p className="fontSize20">
                39를 6으로 나누면 몫이 6이고 나머지가 3이므로
              </p>
              <p className="fontSize20">
                6×1에서 6×6까지 모두 6개의 배수가 있습니다.
              </p>
            </div>
          </div>
        </div>
        <div className="quiz1 lakwerfj3214">
          <div className="quizCard1daafa1">
            <div className="marginTop18 flexcol">
              <p className="quizNumber1231">
                ① 50보다 작은 5의 배수의 개수{' '}
                {showResults && (
                  <div>
                    {isCorrect('1') ? (
                      <div>
                        <img
                          className="answerImg46"
                          src={correctimg}
                          alt="Correct"
                        />
                      </div>
                    ) : (
                      <div>
                        <img
                          className="answerImg46"
                          src={incorrectimg}
                          alt="Incorrect"
                        />
                      </div>
                    )}
                  </div>
                )}{' '}
              </p>
              <div className="flexRow">
                <img
                  className="allowRight marginRight231"
                  src={fifthimg}
                  alt=""
                />
                <input
                  disabled={isInputDisabled}
                  value={answers['1'][0]}
                  onChange={e => handleChange('1', 0, e.target.value)}
                  className="borderColor233 quizNumber1235"
                />{' '}
                개<div></div>
              </div>
            </div>
          </div>
          <div className="quizCard1daafa1">
            <div className="marginTop18 flexcol">
              <p className="quizNumber1231">
                ② 60보다 작은 7의 배수의 개수{' '}
                {showResults && (
                  <div>
                    {isCorrect('2') ? (
                      <div>
                        <img
                          className="answerImg46"
                          src={correctimg}
                          alt="Correct"
                        />
                      </div>
                    ) : (
                      <div>
                        <img
                          className="answerImg46"
                          src={incorrectimg}
                          alt="Incorrect"
                        />
                      </div>
                    )}
                  </div>
                )}{' '}
              </p>
              <div className="flexRow">
                <img
                  className="allowRight marginRight231"
                  src={fifthimg}
                  alt=""
                />
                <input
                  disabled={isInputDisabled}
                  value={answers['2'][0]}
                  onChange={e => handleChange('2', 0, e.target.value)}
                  className="borderColor233 quizNumber1235"
                />{' '}
                개<div></div>
              </div>
            </div>
          </div>
          <div className="quizCard1daafa1">
            <div className="marginTop18 flexcol">
              <p className="quizNumber1231">
                ③ 55보다 작은 9의 배수의 개수{' '}
                {showResults && (
                  <div>
                    {isCorrect('3') ? (
                      <div>
                        <img
                          className="answerImg46"
                          src={correctimg}
                          alt="Correct"
                        />
                      </div>
                    ) : (
                      <div>
                        <img
                          className="answerImg46"
                          src={incorrectimg}
                          alt="Incorrect"
                        />
                      </div>
                    )}
                  </div>
                )}{' '}
              </p>
              <div className="flexRow">
                <img
                  className="allowRight marginRight231"
                  src={fifthimg}
                  alt=""
                />
                <input
                  disabled={isInputDisabled}
                  value={answers['3'][0]}
                  onChange={e => handleChange('3', 0, e.target.value)}
                  className="borderColor233 quizNumber1235"
                />{' '}
                개<div></div>
              </div>
            </div>
          </div>
          <div className="quizCard1daafa1">
            <div className="marginTop18 flexcol">
              <p className="quizNumber1231">
                ④ 64보다 작은 8의 배수의 개수{' '}
                {showResults && (
                  <div>
                    {isCorrect('4') ? (
                      <div>
                        <img
                          className="answerImg46"
                          src={correctimg}
                          alt="Correct"
                        />
                      </div>
                    ) : (
                      <div>
                        <img
                          className="answerImg46"
                          src={incorrectimg}
                          alt="Incorrect"
                        />
                      </div>
                    )}
                  </div>
                )}{' '}
              </p>
              <div className="flexRow">
                <img
                  className="allowRight marginRight231"
                  src={fifthimg}
                  alt=""
                />
                <input
                  disabled={isInputDisabled}
                  value={answers['4'][0]}
                  onChange={e => handleChange('4', 0, e.target.value)}
                  className="borderColor233 quizNumber1235"
                />{' '}
                개<div></div>
              </div>
            </div>
          </div>
          <div className="quizCard1daafa1">
            <div className="marginTop18 flexcol">
              <p className="quizNumber1231">
                ⑤ 99보다 작은 13의 배수의 개수{' '}
                {showResults && (
                  <div>
                    {isCorrect('5') ? (
                      <div>
                        <img
                          className="answerImg46"
                          src={correctimg}
                          alt="Correct"
                        />
                      </div>
                    ) : (
                      <div>
                        <img
                          className="answerImg46"
                          src={incorrectimg}
                          alt="Incorrect"
                        />
                      </div>
                    )}
                  </div>
                )}{' '}
              </p>
              <div className="flexRow">
                <img
                  className="allowRight marginRight231"
                  src={fifthimg}
                  alt=""
                />
                <input
                  disabled={isInputDisabled}
                  value={answers['5'][0]}
                  onChange={e => handleChange('5', 0, e.target.value)}
                  className="borderColor233 quizNumber1235"
                />{' '}
                개<div></div>
              </div>
            </div>
          </div>
          <div className="quizCard1daafa1">
            <div className="marginTop18 flexcol">
              <p className="quizNumber1231">
                ⑥ 98보다 작은 15의 배수의 개수{' '}
                {showResults && (
                  <div>
                    {isCorrect('6') ? (
                      <div>
                        <img
                          className="answerImg46"
                          src={correctimg}
                          alt="Correct"
                        />
                      </div>
                    ) : (
                      <div>
                        <img
                          className="answerImg46"
                          src={incorrectimg}
                          alt="Incorrect"
                        />
                      </div>
                    )}
                  </div>
                )}{' '}
              </p>
              <div className="flexRow">
                <img
                  className="allowRight marginRight231"
                  src={fifthimg}
                  alt=""
                />
                <input
                  disabled={isInputDisabled}
                  value={answers['6'][0]}
                  onChange={e => handleChange('6', 0, e.target.value)}
                  className="borderColor233 quizNumber1235"
                />{' '}
                개<div></div>
              </div>
            </div>
          </div>
          <div className="quizCard1daafa1">
            <div className="marginTop18 flexcol">
              <p className="quizNumber1231">
                ⑦ 100보다 작은 18의 배수의 개수{' '}
                {showResults && (
                  <div>
                    {isCorrect('7') ? (
                      <div>
                        <img
                          className="answerImg46"
                          src={correctimg}
                          alt="Correct"
                        />
                      </div>
                    ) : (
                      <div>
                        <img
                          className="answerImg46"
                          src={incorrectimg}
                          alt="Incorrect"
                        />
                      </div>
                    )}
                  </div>
                )}{' '}
              </p>
              <div className="flexRow">
                <img
                  className="allowRight marginRight231"
                  src={fifthimg}
                  alt=""
                />
                <input
                  disabled={isInputDisabled}
                  value={answers['7'][0]}
                  onChange={e => handleChange('7', 0, e.target.value)}
                  className="borderColor233 quizNumber1235"
                />{' '}
                개<div></div>
              </div>
            </div>
          </div>
          <div className="quizCard1daafa1">
            <div className="marginTop18 flexcol">
              <p className="quizNumber1231">
                ⑧ 130보다 작은 22의 배수의 개수{' '}
                {showResults && (
                  <div>
                    {isCorrect('8') ? (
                      <div>
                        <img
                          className="answerImg46"
                          src={correctimg}
                          alt="Correct"
                        />
                      </div>
                    ) : (
                      <div>
                        <img
                          className="answerImg46"
                          src={incorrectimg}
                          alt="Incorrect"
                        />
                      </div>
                    )}
                  </div>
                )}{' '}
              </p>
              <div className="flexRow">
                <img
                  className="allowRight marginRight231"
                  src={fifthimg}
                  alt=""
                />
                <input
                  disabled={isInputDisabled}
                  value={answers['8'][0]}
                  onChange={e => handleChange('8', 0, e.target.value)}
                  className="borderColor233 quizNumber1235"
                />{' '}
                개<div></div>
              </div>
            </div>
          </div>
          <div className="quizCard1daafa1">
            <div className="marginTop18 flexcol">
              <p className="quizNumber1231">
                ⑨ 165보다 작은 26의 배수의 개수{' '}
                {showResults && (
                  <div>
                    {isCorrect('9') ? (
                      <div>
                        <img
                          className="answerImg46"
                          src={correctimg}
                          alt="Correct"
                        />
                      </div>
                    ) : (
                      <div>
                        <img
                          className="answerImg46"
                          src={incorrectimg}
                          alt="Incorrect"
                        />
                      </div>
                    )}
                  </div>
                )}{' '}
              </p>
              <div className="flexRow">
                <img
                  className="allowRight marginRight231"
                  src={fifthimg}
                  alt=""
                />
                <input
                  disabled={isInputDisabled}
                  value={answers['9'][0]}
                  onChange={e => handleChange('9', 0, e.target.value)}
                  className="borderColor233 quizNumber1235"
                />{' '}
                개<div></div>
              </div>
            </div>
          </div>
          <div className="quizCard1daafa1">
            <div className="marginTop18 flexcol">
              <p className="quizNumber1231">
                ⑩ 187보다 작은 31의 배수의 개수{' '}
                {showResults && (
                  <div>
                    {isCorrect('10') ? (
                      <div>
                        <img
                          className="answerImg46"
                          src={correctimg}
                          alt="Correct"
                        />
                      </div>
                    ) : (
                      <div>
                        <img
                          className="answerImg46"
                          src={incorrectimg}
                          alt="Incorrect"
                        />
                      </div>
                    )}
                  </div>
                )}{' '}
              </p>
              <div className="flexRow">
                <img
                  className="allowRight marginRight231"
                  src={fifthimg}
                  alt=""
                />
                <input
                  disabled={isInputDisabled}
                  value={answers['10'][0]}
                  onChange={e => handleChange('10', 0, e.target.value)}
                  className="borderColor233 quizNumber1235"
                />{' '}
                개<div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ConfirmBtn type={type} day={4} handleGrade={handleGrade} />
    </Styled.OneToNine>
  );
};

export default FifthGrade10;
