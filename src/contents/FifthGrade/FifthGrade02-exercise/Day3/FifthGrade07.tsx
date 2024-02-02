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

const FifthGrade07: React.FC = () => {
  const [isInputDisabled, setIsInputDisabled] = useState(false);
  const [type, setType] = useState(true);
  const [answers, setAnswers] = useState<AnswersType>({
    '1': ['', '', '', '', ''],
    '2': ['', '', '', '', ''],
    '3': ['', '', '', '', ''],
    '4': ['', '', '', '', ''],
    '5': ['', '', '', '', ''],
  });
  const correctAnswers: AnswersType = {
    '1': ['3', '6', '9', '12', '15'],
    '2': ['4', '8', '12', '16', '20'],
    '3': ['6', '12', '18', '24', '30'],
    '4': ['8', '16', '24', '32', '40'],
    '5': ['10', '20', '30', '40', '50'],
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
        key: 'fifthGrade22Answers',
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
    getKeyValue({ key: 'fifthGrade22Answers' })
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
        <div className="quiz211">
          <div className="conclusion">
            <p>
              <span className="fontSize20">
                어떤 수를 1배, 2배, 3배, 4배, …… 한 수를 그 수의 배수라고
                합니다.
              </span>
            </p>
            <p className="fontSize20">5를 1배, 2배, 3배, 4배, …… 하면</p>
          </div>
          <div className="division-examples">
            <div className="example">
              5 × 1 = <div>5</div>
            </div>
            <div className="example">
              5 × 2 = <div>10</div>
            </div>
            <div className="example">
              5 × 3 = <div>15</div>
            </div>
            <div className="example">
              5 × 4 = <div>20</div>
            </div>
            <div className="example">
              5 × 5 = <div>25</div>
            </div>
            <div className="example">
              5 × 6 = <div>30</div>
            </div>
          </div>
          <div className="conclusion">
            <p className="fontSize20">
              5, 10, 15, 20, 25, 30, …… 은 5의 배수입니다
            </p>
          </div>
        </div>
        <div>
          <div>
            <div className="flexRow noWrap1 marginTop231 fawef3532">
              <p className="fontSize25 marginRight231 afwe3513">
                ①
                {showResults && (
                  <div>
                    {isCorrect('1') ? (
                      <div>
                        <img
                          className="answerImg55"
                          src={correctimg}
                          alt="Correct"
                        />
                      </div>
                    ) : (
                      <div>
                        <img
                          className="answerImg55"
                          src={incorrectimg}
                          alt="Incorrect"
                        />
                      </div>
                    )}
                  </div>
                )}
              </p>
              <div className="fontSize25">3의 배수</div>
              <img className="allowRight" src={fifthimg} alt="" />
              <input
                disabled={isInputDisabled}
                value={answers['1'][0]}
                onChange={e => handleChange('1', 0, e.target.value)}
                className="fifthQuiz231Input marginLeft30 fontSize25"
                type="text"
              />
              <p className="fontSize25">,</p>
              <input
                disabled={isInputDisabled}
                value={answers['1'][1]}
                onChange={e => handleChange('1', 1, e.target.value)}
                className="fifthQuiz231Input marginLeft30 fontSize25"
                type="text"
              />
              <p className="fontSize25">,</p>
              <input
                disabled={isInputDisabled}
                value={answers['1'][2]}
                onChange={e => handleChange('1', 2, e.target.value)}
                className="fifthQuiz231Input marginLeft30 fontSize25"
                type="text"
              />
              <p className="fontSize25">,</p>
              <input
                disabled={isInputDisabled}
                value={answers['1'][3]}
                onChange={e => handleChange('1', 3, e.target.value)}
                className="fifthQuiz231Input marginLeft30 fontSize25"
                type="text"
              />
              <p className="fontSize25">,</p>
              <input
                disabled={isInputDisabled}
                value={answers['1'][4]}
                onChange={e => handleChange('1', 4, e.target.value)}
                className="fifthQuiz231Input marginLeft30 fontSize25"
                type="text"
              />
              <p className="fontSize25">,</p>
              ......
            </div>
            <div className="flexRow noWrap1 marginTop231 fawef3532">
              <p className="fontSize25 marginRight231 afwe3513">
                ②
                {showResults && (
                  <div>
                    {isCorrect('2') ? (
                      <div>
                        <img
                          className="answerImg55"
                          src={correctimg}
                          alt="Correct"
                        />
                      </div>
                    ) : (
                      <div>
                        <img
                          className="answerImg55"
                          src={incorrectimg}
                          alt="Incorrect"
                        />
                      </div>
                    )}
                  </div>
                )}
              </p>
              <div className="fontSize25">4의 배수</div>
              <img className="allowRight" src={fifthimg} alt="" />
              <input
                disabled={isInputDisabled}
                value={answers['2'][0]}
                onChange={e => handleChange('2', 0, e.target.value)}
                className="fifthQuiz231Input marginLeft30 fontSize25"
                type="text"
              />
              <p className="fontSize25">,</p>
              <input
                disabled={isInputDisabled}
                value={answers['2'][1]}
                onChange={e => handleChange('2', 1, e.target.value)}
                className="fifthQuiz231Input marginLeft30 fontSize25"
                type="text"
              />
              <p className="fontSize25">,</p>
              <input
                disabled={isInputDisabled}
                value={answers['2'][2]}
                onChange={e => handleChange('2', 2, e.target.value)}
                className="fifthQuiz231Input marginLeft30 fontSize25"
                type="text"
              />
              <p className="fontSize25">,</p>
              <input
                disabled={isInputDisabled}
                value={answers['2'][3]}
                onChange={e => handleChange('2', 3, e.target.value)}
                className="fifthQuiz231Input marginLeft30 fontSize25"
                type="text"
              />
              <p className="fontSize25">,</p>
              <input
                disabled={isInputDisabled}
                value={answers['2'][4]}
                onChange={e => handleChange('2', 4, e.target.value)}
                className="fifthQuiz231Input marginLeft30 fontSize25"
                type="text"
              />
              <p className="fontSize25">,</p>
              ......
            </div>{' '}
            <div className="flexRow noWrap1 marginTop231 fawef3532">
              <p className="fontSize25 marginRight231 afwe3513">
                ③
                {showResults && (
                  <div>
                    {isCorrect('3') ? (
                      <div>
                        <img
                          className="answerImg55"
                          src={correctimg}
                          alt="Correct"
                        />
                      </div>
                    ) : (
                      <div>
                        <img
                          className="answerImg55"
                          src={incorrectimg}
                          alt="Incorrect"
                        />
                      </div>
                    )}
                  </div>
                )}
              </p>
              <div className="fontSize25">6의 배수</div>
              <img className="allowRight" src={fifthimg} alt="" />
              <input
                disabled={isInputDisabled}
                value={answers['3'][0]}
                onChange={e => handleChange('3', 0, e.target.value)}
                className="fifthQuiz231Input marginLeft30 fontSize25"
                type="text"
              />
              <p className="fontSize25">,</p>
              <input
                disabled={isInputDisabled}
                value={answers['3'][1]}
                onChange={e => handleChange('3', 1, e.target.value)}
                className="fifthQuiz231Input marginLeft30 fontSize25"
                type="text"
              />
              <p className="fontSize25">,</p>
              <input
                disabled={isInputDisabled}
                value={answers['3'][2]}
                onChange={e => handleChange('3', 2, e.target.value)}
                className="fifthQuiz231Input marginLeft30 fontSize25"
                type="text"
              />
              <p className="fontSize25">,</p>
              <input
                disabled={isInputDisabled}
                value={answers['3'][3]}
                onChange={e => handleChange('3', 3, e.target.value)}
                className="fifthQuiz231Input marginLeft30 fontSize25"
                type="text"
              />
              <p className="fontSize25">,</p>
              <input
                disabled={isInputDisabled}
                value={answers['3'][4]}
                onChange={e => handleChange('3', 4, e.target.value)}
                className="fifthQuiz231Input marginLeft30 fontSize25"
                type="text"
              />
              <p className="fontSize25">,</p>
              ......
            </div>{' '}
            <div className="flexRow noWrap1 marginTop231 fawef3532">
              <p className="fontSize25 marginRight231 afwe3513">
                ④
                {showResults && (
                  <div>
                    {isCorrect('4') ? (
                      <div>
                        <img
                          className="answerImg55"
                          src={correctimg}
                          alt="Correct"
                        />
                      </div>
                    ) : (
                      <div>
                        <img
                          className="answerImg55"
                          src={incorrectimg}
                          alt="Incorrect"
                        />
                      </div>
                    )}
                  </div>
                )}
              </p>
              <div className="fontSize25">8의 배수</div>
              <img className="allowRight" src={fifthimg} alt="" />
              <input
                disabled={isInputDisabled}
                value={answers['4'][0]}
                onChange={e => handleChange('4', 0, e.target.value)}
                className="fifthQuiz231Input marginLeft30 fontSize25"
                type="text"
              />
              <p className="fontSize25">,</p>
              <input
                disabled={isInputDisabled}
                value={answers['4'][1]}
                onChange={e => handleChange('4', 1, e.target.value)}
                className="fifthQuiz231Input marginLeft30 fontSize25"
                type="text"
              />
              <p className="fontSize25">,</p>
              <input
                disabled={isInputDisabled}
                value={answers['4'][2]}
                onChange={e => handleChange('4', 2, e.target.value)}
                className="fifthQuiz231Input marginLeft30 fontSize25"
                type="text"
              />
              <p className="fontSize25">,</p>
              <input
                disabled={isInputDisabled}
                value={answers['4'][3]}
                onChange={e => handleChange('4', 3, e.target.value)}
                className="fifthQuiz231Input marginLeft30 fontSize25"
                type="text"
              />
              <p className="fontSize25">,</p>
              <input
                disabled={isInputDisabled}
                value={answers['4'][4]}
                onChange={e => handleChange('4', 4, e.target.value)}
                className="fifthQuiz231Input marginLeft30 fontSize25"
                type="text"
              />
              <p className="fontSize25">,</p>
              ......
            </div>{' '}
            <div className="flexRow noWrap1 marginTop231 fawef3532">
              <p className="fontSize25 marginRight231 afwe3513">
                ⑤
                {showResults && (
                  <div>
                    {isCorrect('5') ? (
                      <div>
                        <img
                          className="answerImg55"
                          src={correctimg}
                          alt="Correct"
                        />
                      </div>
                    ) : (
                      <div>
                        <img
                          className="answerImg55"
                          src={incorrectimg}
                          alt="Incorrect"
                        />
                      </div>
                    )}
                  </div>
                )}
              </p>
              <div className="fontSize25">10의 배수</div>
              <img className="allowRight" src={fifthimg} alt="" />
              <input
                disabled={isInputDisabled}
                value={answers['5'][0]}
                onChange={e => handleChange('5', 0, e.target.value)}
                className="fifthQuiz231Input marginLeft30 fontSize25"
                type="text"
              />
              <p className="fontSize25">,</p>
              <input
                disabled={isInputDisabled}
                value={answers['5'][1]}
                onChange={e => handleChange('5', 1, e.target.value)}
                className="fifthQuiz231Input marginLeft30 fontSize25"
                type="text"
              />
              <p className="fontSize25">,</p>
              <input
                disabled={isInputDisabled}
                value={answers['5'][2]}
                onChange={e => handleChange('5', 2, e.target.value)}
                className="fifthQuiz231Input marginLeft30 fontSize25"
                type="text"
              />
              <p className="fontSize25">,</p>
              <input
                disabled={isInputDisabled}
                value={answers['5'][3]}
                onChange={e => handleChange('5', 3, e.target.value)}
                className="fifthQuiz231Input marginLeft30 fontSize25"
                type="text"
              />
              <p className="fontSize25">,</p>
              <input
                disabled={isInputDisabled}
                value={answers['5'][4]}
                onChange={e => handleChange('5', 4, e.target.value)}
                className="fifthQuiz231Input marginLeft30 fontSize25"
                type="text"
              />
              <p className="fontSize25">,</p>
              ......
            </div>
          </div>
        </div>
      </div>
      <ConfirmBtn type={type} day={3} handleGrade={handleGrade} />
    </Styled.OneToNine>
  );
};

export default FifthGrade07;
