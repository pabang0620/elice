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

const FifthGrade12: React.FC = () => {
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
    '1': ['14'],
    '2': ['11'],
    '3': ['11'],
    '4': ['8'],
    '5': ['6'],
    '6': ['5'],
    '7': ['23'],
    '8': ['8'],
    '9': ['39'],
    '10': ['5'],
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
        key: 'fifthGrade27Answers',
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
    getKeyValue({ key: 'fifthGrade27Answers' })
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
      <div className="quizAll">
        <div className="quiz1 lakwerfj">
          <div className="quizCard11">
            <div className="flexcol">
              <p className="quizNumber1231">
                ①&nbsp;&nbsp;&nbsp;&nbsp; 9 ＜ ★ ＜ 65
                {showResults && (
                  <div>
                    {isCorrect('1') ? (
                      <div>
                        <img
                          className="answerImg47"
                          src={correctimg}
                          alt="Correct"
                        />
                      </div>
                    ) : (
                      <div>
                        <img
                          className="answerImg47"
                          src={incorrectimg}
                          alt="Incorrect"
                        />
                      </div>
                    )}
                  </div>
                )}{' '}
              </p>
              <div className="flexRow alignCenter">
                <img
                  className="allowRight marginRight231"
                  src={fifthimg}
                  alt=""
                />
                <div className="fontSize20">4의 배수의 개수 : &nbsp;&nbsp;</div>
                <input
                  disabled={isInputDisabled}
                  value={answers['1'][0]}
                  onChange={e => handleChange('1', 0, e.target.value)}
                  className="averageInput"
                />
                <div className="fontSize20">&nbsp;&nbsp;개</div>
              </div>
            </div>
          </div>
          <div className="quizCard11">
            <div className="flexcol">
              <p className="quizNumber1231">
                ②&nbsp;&nbsp;&nbsp;&nbsp; 18 ＜ ★ ＜ 75
                {showResults && (
                  <div>
                    {isCorrect('2') ? (
                      <div>
                        <img
                          className="answerImg47"
                          src={correctimg}
                          alt="Correct"
                        />
                      </div>
                    ) : (
                      <div>
                        <img
                          className="answerImg47"
                          src={incorrectimg}
                          alt="Incorrect"
                        />
                      </div>
                    )}
                  </div>
                )}{' '}
              </p>
              <div className="flexRow alignCenter">
                <img
                  className="allowRight marginRight231"
                  src={fifthimg}
                  alt=""
                />
                <div className="fontSize20">5의 배수의 개수 : &nbsp;&nbsp;</div>
                <input
                  disabled={isInputDisabled}
                  value={answers['2'][0]}
                  onChange={e => handleChange('2', 0, e.target.value)}
                  className="averageInput"
                />
                <div className="fontSize20">&nbsp;&nbsp;개</div>
              </div>
            </div>
          </div>
          <div className="quizCard11">
            <div className="flexcol">
              <p className="quizNumber1231">
                ③&nbsp;&nbsp;&nbsp;&nbsp; 26 ＜ ★ ＜ 96
                {showResults && (
                  <div>
                    {isCorrect('3') ? (
                      <div>
                        <img
                          className="answerImg47"
                          src={correctimg}
                          alt="Correct"
                        />
                      </div>
                    ) : (
                      <div>
                        <img
                          className="answerImg47"
                          src={incorrectimg}
                          alt="Incorrect"
                        />
                      </div>
                    )}
                  </div>
                )}{' '}
              </p>
              <div className="flexRow alignCenter">
                <img
                  className="allowRight marginRight231"
                  src={fifthimg}
                  alt=""
                />
                <div className="fontSize20">6의 배수의 개수 : &nbsp;&nbsp;</div>
                <input
                  disabled={isInputDisabled}
                  value={answers['3'][0]}
                  onChange={e => handleChange('3', 0, e.target.value)}
                  className="averageInput"
                />
                <div className="fontSize20">&nbsp;&nbsp;개</div>
              </div>
            </div>
          </div>
          <div className="quizCard11">
            <div className="flexcol">
              <p className="quizNumber1231">
                ④&nbsp;&nbsp;&nbsp;&nbsp; 32 ＜ ★ ＜ 88
                {showResults && (
                  <div>
                    {isCorrect('4') ? (
                      <div>
                        <img
                          className="answerImg47"
                          src={correctimg}
                          alt="Correct"
                        />
                      </div>
                    ) : (
                      <div>
                        <img
                          className="answerImg47"
                          src={incorrectimg}
                          alt="Incorrect"
                        />
                      </div>
                    )}
                  </div>
                )}{' '}
              </p>
              <div className="flexRow alignCenter">
                <img
                  className="allowRight marginRight231"
                  src={fifthimg}
                  alt=""
                />
                <div className="fontSize20">7의 배수의 개수 : &nbsp;&nbsp;</div>
                <input
                  disabled={isInputDisabled}
                  value={answers['4'][0]}
                  onChange={e => handleChange('4', 0, e.target.value)}
                  className="averageInput"
                />
                <div className="fontSize20">&nbsp;&nbsp;개</div>
              </div>
            </div>
          </div>
          <div className="quizCard11">
            <div className="flexcol">
              <p className="quizNumber1231">
                ⑤&nbsp;&nbsp;&nbsp;&nbsp; 30 ＜ ★ ＜ 90
                {showResults && (
                  <div>
                    {isCorrect('5') ? (
                      <div>
                        <img
                          className="answerImg47"
                          src={correctimg}
                          alt="Correct"
                        />
                      </div>
                    ) : (
                      <div>
                        <img
                          className="answerImg47"
                          src={incorrectimg}
                          alt="Incorrect"
                        />
                      </div>
                    )}
                  </div>
                )}{' '}
              </p>
              <div className="flexRow alignCenter">
                <img
                  className="allowRight marginRight231"
                  src={fifthimg}
                  alt=""
                />
                <div className="fontSize20">9의 배수의 개수 : &nbsp;&nbsp;</div>
                <input
                  disabled={isInputDisabled}
                  value={answers['5'][0]}
                  onChange={e => handleChange('5', 0, e.target.value)}
                  className="averageInput"
                />
                <div className="fontSize20">&nbsp;&nbsp;개</div>
              </div>
            </div>
          </div>
          <div className="quizCard11">
            <div className="flexcol">
              <p className="quizNumber1231">
                ⑥&nbsp;&nbsp;&nbsp;&nbsp; 20 ＜ ★ ＜ 70
                {showResults && (
                  <div>
                    {isCorrect('6') ? (
                      <div>
                        <img
                          className="answerImg47"
                          src={correctimg}
                          alt="Correct"
                        />
                      </div>
                    ) : (
                      <div>
                        <img
                          className="answerImg47"
                          src={incorrectimg}
                          alt="Incorrect"
                        />
                      </div>
                    )}
                  </div>
                )}{' '}
              </p>
              <div className="flexRow alignCenter">
                <img
                  className="allowRight marginRight231"
                  src={fifthimg}
                  alt=""
                />
                <div className="fontSize20">
                  11의 배수의 개수 : &nbsp;&nbsp;
                </div>
                <input
                  disabled={isInputDisabled}
                  value={answers['6'][0]}
                  onChange={e => handleChange('6', 0, e.target.value)}
                  className="averageInput"
                />
                <div className="fontSize20">&nbsp;&nbsp;개</div>
              </div>
            </div>
          </div>
          <div className="quizCard11">
            <div className="flexcol">
              <p className="quizNumber1231">
                ⑦&nbsp;&nbsp;&nbsp;&nbsp; 20 ＜ ★ ＜ 89
                {showResults && (
                  <div>
                    {isCorrect('7') ? (
                      <div>
                        <img
                          className="answerImg47"
                          src={correctimg}
                          alt="Correct"
                        />
                      </div>
                    ) : (
                      <div>
                        <img
                          className="answerImg47"
                          src={incorrectimg}
                          alt="Incorrect"
                        />
                      </div>
                    )}
                  </div>
                )}{' '}
              </p>
              <div className="flexRow alignCenter">
                <img
                  className="allowRight marginRight231"
                  src={fifthimg}
                  alt=""
                />
                <div className="fontSize20">3의 배수의 개수 : &nbsp;&nbsp;</div>
                <input
                  disabled={isInputDisabled}
                  value={answers['7'][0]}
                  onChange={e => handleChange('7', 0, e.target.value)}
                  className="averageInput"
                />
                <div className="fontSize20">&nbsp;&nbsp;개</div>
              </div>
            </div>
          </div>
          <div className="quizCard11">
            <div className="flexcol">
              <p className="quizNumber1231">
                ⑧&nbsp;&nbsp;&nbsp;&nbsp; 17 ＜ ★ ＜ 100
                {showResults && (
                  <div>
                    {isCorrect('8') ? (
                      <div>
                        <img
                          className="answerImg47"
                          src={correctimg}
                          alt="Correct"
                        />
                      </div>
                    ) : (
                      <div>
                        <img
                          className="answerImg47"
                          src={incorrectimg}
                          alt="Incorrect"
                        />
                      </div>
                    )}
                  </div>
                )}{' '}
              </p>
              <div className="flexRow alignCenter">
                <img
                  className="allowRight marginRight231"
                  src={fifthimg}
                  alt=""
                />
                <div className="fontSize20">
                  10의 배수의 개수 : &nbsp;&nbsp;
                </div>
                <input
                  disabled={isInputDisabled}
                  value={answers['8'][0]}
                  onChange={e => handleChange('8', 0, e.target.value)}
                  className="averageInput"
                />
                <div className="fontSize20">&nbsp;&nbsp;개</div>
              </div>
            </div>
          </div>
          <div className="quizCard11">
            <div className="flexcol">
              <p className="quizNumber1231">
                ⑨&nbsp;&nbsp;&nbsp;&nbsp; 10 ＜ ★ ＜ 90
                {showResults && (
                  <div>
                    {isCorrect('9') ? (
                      <div>
                        <img
                          className="answerImg47"
                          src={correctimg}
                          alt="Correct"
                        />
                      </div>
                    ) : (
                      <div>
                        <img
                          className="answerImg47"
                          src={incorrectimg}
                          alt="Incorrect"
                        />
                      </div>
                    )}
                  </div>
                )}{' '}
              </p>
              <div className="flexRow alignCenter">
                <img
                  className="allowRight marginRight231"
                  src={fifthimg}
                  alt=""
                />
                <div className="fontSize20">2의 배수의 개수 : &nbsp;&nbsp;</div>
                <input
                  disabled={isInputDisabled}
                  value={answers['9'][0]}
                  onChange={e => handleChange('9', 0, e.target.value)}
                  className="averageInput"
                />
                <div className="fontSize20">&nbsp;&nbsp;개</div>
              </div>
            </div>
          </div>
          <div className="quizCard11">
            <div className="flexcol">
              <p className="quizNumber1231">
                ⑩&nbsp;&nbsp;&nbsp;&nbsp; 5 ＜ ★ ＜ 70
                {showResults && (
                  <div>
                    {isCorrect('10') ? (
                      <div>
                        <img
                          className="answerImg47"
                          src={correctimg}
                          alt="Correct"
                        />
                      </div>
                    ) : (
                      <div>
                        <img
                          className="answerImg47"
                          src={incorrectimg}
                          alt="Incorrect"
                        />
                      </div>
                    )}
                  </div>
                )}{' '}
              </p>
              <div className="flexRow alignCenter">
                <img
                  className="allowRight marginRight231"
                  src={fifthimg}
                  alt=""
                />
                <div className="fontSize20">
                  12의 배수의 개수 : &nbsp;&nbsp;
                </div>
                <input
                  disabled={isInputDisabled}
                  value={answers['10'][0]}
                  onChange={e => handleChange('10', 0, e.target.value)}
                  className="averageInput"
                />
                <div className="fontSize20">&nbsp;&nbsp;개</div>
              </div>
            </div>
          </div>
        </div>
      </div>{' '}
      <ConfirmBtn type={type} day={4} handleGrade={handleGrade} />
    </Styled.OneToNine>
  );
};

export default FifthGrade12;
