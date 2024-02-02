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
    '1': ['', ''],
    '2': ['', ''],
    '3': ['', ''],
    '4': ['', ''],
    '5': ['', ''],
    '6': ['', ''],
  });
  const correctAnswers: AnswersType = {
    '1': ['약수', '배수'],
    '2': ['약수', '배수'],
    '3': ['배수', '약수'],
    '4': ['배수', '배수'],
    '5': ['배수', '약수'],
    '6': ['배수', '약수'],
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
        key: 'fifthGrade29Answers',
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
    getKeyValue({ key: 'fifthGrade29Answers' })
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
        <div className="quiz1 quizMargin2 lakwerfj">
          <div className="quizCard1daafa1 quizMargin1922">
            <div className="flexcol">
              <div className="flexRow">
                <p className="quizNumber1231">
                  ①
                  {showResults && (
                    <div>
                      {isCorrect('1') ? (
                        <div>
                          <img
                            className="answerImg48"
                            src={correctimg}
                            alt="Correct"
                          />
                        </div>
                      ) : (
                        <div>
                          <img
                            className="answerImg48"
                            src={incorrectimg}
                            alt="Incorrect"
                          />
                        </div>
                      )}
                    </div>
                  )}{' '}
                </p>
                <div className="fif251numb">1 × 16 = 16</div>
              </div>
              <div className="flexRow alignCenter textAlignRight">
                <div className="fontSize20">1은 16의&nbsp;&nbsp;</div>
                <input
                  disabled={isInputDisabled}
                  value={answers['1'][0]}
                  onChange={e => handleChange('1', 0, e.target.value)}
                  className="fifthQuiz231Input"
                />
                <div className="fontSize20">&nbsp;&nbsp;입니다.</div>
              </div>
              <div className="flexRow alignCenter margintop2512 textAlignRight">
                <div className="fontSize20">16은 1의&nbsp;&nbsp;</div>
                <input
                  disabled={isInputDisabled}
                  value={answers['1'][1]}
                  onChange={e => handleChange('1', 1, e.target.value)}
                  className="fifthQuiz231Input"
                />
                <div className="fontSize20">&nbsp;&nbsp;입니다.</div>
              </div>
            </div>
          </div>
          <div className="quizCard1daafa1 quizMargin1922">
            <div className="flexcol">
              <div className="flexRow">
                <p className="quizNumber1231">
                  ②
                  {showResults && (
                    <div>
                      {isCorrect('2') ? (
                        <div>
                          <img
                            className="answerImg48"
                            src={correctimg}
                            alt="Correct"
                          />
                        </div>
                      ) : (
                        <div>
                          <img
                            className="answerImg48"
                            src={incorrectimg}
                            alt="Incorrect"
                          />
                        </div>
                      )}
                    </div>
                  )}{' '}
                </p>
                <div className="fif251numb">4 × 6 = 24</div>
              </div>
              <div className="flexRow alignCenter textAlignRight">
                <div className="fontSize20">4는 24의&nbsp;&nbsp;</div>
                <input
                  disabled={isInputDisabled}
                  value={answers['2'][0]}
                  onChange={e => handleChange('2', 0, e.target.value)}
                  className="fifthQuiz231Input"
                />{' '}
                <div className="fontSize20">&nbsp;&nbsp;입니다.</div>
              </div>
              <div className="flexRow alignCenter margintop2512 textAlignRight">
                <div className="fontSize20">24는 6의&nbsp;&nbsp;</div>
                <input
                  disabled={isInputDisabled}
                  value={answers['2'][1]}
                  onChange={e => handleChange('2', 1, e.target.value)}
                  className="fifthQuiz231Input"
                />{' '}
                <div className="fontSize20">&nbsp;&nbsp;입니다.</div>
              </div>
            </div>
          </div>
          <div className="quizCard1daafa1 quizMargin1922">
            <div className="flexcol">
              <div className="flexRow">
                <p className="quizNumber1231">
                  ③
                  {showResults && (
                    <div>
                      {isCorrect('3') ? (
                        <div>
                          <img
                            className="answerImg48"
                            src={correctimg}
                            alt="Correct"
                          />
                        </div>
                      ) : (
                        <div>
                          <img
                            className="answerImg48"
                            src={incorrectimg}
                            alt="Incorrect"
                          />
                        </div>
                      )}
                    </div>
                  )}{' '}
                </p>
                <div className="fif251numb">8 × 8 = 64</div>
              </div>
              <div className="flexRow alignCenter textAlignRight">
                <div className="fontSize20">64는 8의&nbsp;&nbsp;</div>
                <input
                  disabled={isInputDisabled}
                  value={answers['3'][0]}
                  onChange={e => handleChange('3', 0, e.target.value)}
                  className="fifthQuiz231Input"
                />{' '}
                <div className="fontSize20">&nbsp;&nbsp;입니다.</div>
              </div>
              <div className="flexRow alignCenter margintop2512 textAlignRight">
                <div className="fontSize20">8은 64의&nbsp;&nbsp;</div>
                <input
                  disabled={isInputDisabled}
                  value={answers['3'][1]}
                  onChange={e => handleChange('3', 1, e.target.value)}
                  className="fifthQuiz231Input"
                />{' '}
                <div className="fontSize20">&nbsp;&nbsp;입니다.</div>
              </div>
            </div>
          </div>
          <div className="quizCard1daafa1 quizMargin1922">
            <div className="flexcol">
              <div className="flexRow">
                <p className="quizNumber1231">
                  ④
                  {showResults && (
                    <div>
                      {isCorrect('4') ? (
                        <div>
                          <img
                            className="answerImg48"
                            src={correctimg}
                            alt="Correct"
                          />
                        </div>
                      ) : (
                        <div>
                          <img
                            className="answerImg48"
                            src={incorrectimg}
                            alt="Incorrect"
                          />
                        </div>
                      )}
                    </div>
                  )}{' '}
                </p>
                <div className="fif251numb">15 × 7 = 105</div>
              </div>
              <div className="flexRow alignCenter textAlignRight">
                <div className="fontSize20">105는 7의&nbsp;&nbsp;</div>
                <input
                  disabled={isInputDisabled}
                  value={answers['4'][0]}
                  onChange={e => handleChange('4', 0, e.target.value)}
                  className="fifthQuiz231Input"
                />{' '}
                <div className="fontSize20">&nbsp;&nbsp;입니다.</div>
              </div>
              <div className="flexRow alignCenter margintop2512 textAlignRight">
                <div className="fontSize20">105는 15의&nbsp;&nbsp;</div>
                <input
                  disabled={isInputDisabled}
                  value={answers['4'][1]}
                  onChange={e => handleChange('4', 1, e.target.value)}
                  className="fifthQuiz231Input"
                />{' '}
                <div className="fontSize20">&nbsp;&nbsp;입니다.</div>
              </div>
            </div>
          </div>
          <div className="quizCard1daafa1 quizMargin1922">
            <div className="flexcol">
              <div className="flexRow">
                <p className="quizNumber1231">
                  ⑤
                  {showResults && (
                    <div>
                      {isCorrect('5') ? (
                        <div>
                          <img
                            className="answerImg48"
                            src={correctimg}
                            alt="Correct"
                          />
                        </div>
                      ) : (
                        <div>
                          <img
                            className="answerImg48"
                            src={incorrectimg}
                            alt="Incorrect"
                          />
                        </div>
                      )}
                    </div>
                  )}{' '}
                </p>
                <div className="fif251numb">11 × 88 = 88</div>
              </div>
              <div className="flexRow alignCenter textAlignRight">
                <div className="fontSize20">88은 11의&nbsp;&nbsp;</div>
                <input
                  disabled={isInputDisabled}
                  value={answers['5'][0]}
                  onChange={e => handleChange('5', 0, e.target.value)}
                  className="fifthQuiz231Input"
                />{' '}
                <div className="fontSize20">&nbsp;&nbsp;입니다.</div>
              </div>
              <div className="flexRow alignCenter margintop2512 textAlignRight">
                <div className="fontSize20">11은 88의&nbsp;&nbsp;</div>
                <input
                  disabled={isInputDisabled}
                  value={answers['5'][1]}
                  onChange={e => handleChange('5', 1, e.target.value)}
                  className="fifthQuiz231Input"
                />{' '}
                <div className="fontSize20">&nbsp;&nbsp;입니다.</div>
              </div>
            </div>
          </div>
          <div className="quizCard1daafa1 quizMargin1922">
            <div className="flexcol">
              <div className="flexRow">
                <p className="quizNumber1231">
                  ⑥
                  {showResults && (
                    <div>
                      {isCorrect('6') ? (
                        <div>
                          <img
                            className="answerImg48"
                            src={correctimg}
                            alt="Correct"
                          />
                        </div>
                      ) : (
                        <div>
                          <img
                            className="answerImg48"
                            src={incorrectimg}
                            alt="Incorrect"
                          />
                        </div>
                      )}
                    </div>
                  )}{' '}
                </p>
                <div className="fif251numb">4 × 25 = 100</div>
              </div>
              <div className="flexRow alignCenter textAlignRight">
                <div className="fontSize20">100은 25의 &nbsp;&nbsp;</div>
                <input
                  disabled={isInputDisabled}
                  value={answers['6'][0]}
                  onChange={e => handleChange('6', 0, e.target.value)}
                  className="fifthQuiz231Input"
                />{' '}
                <div className="fontSize20">&nbsp;&nbsp;입니다.</div>
              </div>
              <div className="flexRow alignCenter margintop2512 textAlignRight">
                <div className="fontSize20">4는 100의&nbsp;&nbsp;</div>
                <input
                  disabled={isInputDisabled}
                  value={answers['6'][1]}
                  onChange={e => handleChange('6', 1, e.target.value)}
                  className="fifthQuiz231Input"
                />{' '}
                <div className="fontSize20">&nbsp;&nbsp;입니다.</div>
              </div>
            </div>
          </div>
        </div>
      </div>{' '}
      <ConfirmBtn type={type} day={5} handleGrade={handleGrade} />
    </Styled.OneToNine>
  );
};

export default FifthGrade14;
