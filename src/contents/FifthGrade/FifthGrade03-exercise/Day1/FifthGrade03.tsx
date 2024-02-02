import React, { useState } from 'react';
import { sendScore } from '@elice/extcontent-apis';
import { postKeyValue } from '@elice/extcontent-apis';
import { getKeyValue } from '@elice/extcontent-apis';

import Styled from '../../style';
import ConfirmBtn from '../../utils/ConfirmBtn';

import type { AnswersType } from '../../Type/Type1';

import correctimg from 'src/contents/FifthGrade/fifthImage/correct.png';
import incorrectimg from 'src/contents/FifthGrade/fifthImage/incorrect.png';

const FifthGrade03: React.FC = () => {
  const [isInputDisabled, setIsInputDisabled] = useState(false);
  const [type, setType] = useState(true);
  const [answers, setAnswers] = useState<AnswersType>({
    '1': ['', ''],
    '2': ['', ''],
    '3': ['', ''],
    '4': ['', ''],
    '5': ['', ''],
    '6': ['', ''],
    '7': ['', ''],
    '8': ['', ''],
    '9': ['', ''],
    '10': ['', ''],
    '11': ['', ''],
    '12': ['', ''],
    '13': ['', ''],
    '14': ['', ''],
  });
  const correctAnswers: AnswersType = {
    '1': ['2', '12'],
    '2': ['18', '4'],
    '3': ['3', '30'],
    '4': ['6', '12'],
    '5': ['9', '30'],
    '6': ['9', '8'],
    '7': ['15', '48'],
    '8': ['6', '2'],
    '9': ['35', '70'],
    '10': ['8', '5'],
    '11': ['10', '84'],
    '12': ['15', '4'],
    '13': ['33', '80'],
    '14': ['10', '3'],
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
        key: 'fifthGrade33Answers',
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
    getKeyValue({ key: 'fifthGrade33Answers' })
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
      <div className="quiz31231">
        <div className="flexRow fontSize25 alignCenter quizMargin1922 marginLeft3121">
          <p className="margintopbotom5px afwe3513">
            {' '}
            {showResults && (
              <div>
                {isCorrect('1') ? (
                  <div>
                    <img
                      className="answerImg50"
                      src={correctimg}
                      alt="Correct"
                    />
                  </div>
                ) : (
                  <div>
                    <img
                      className="answerImg50"
                      src={incorrectimg}
                      alt="Incorrect"
                    />
                  </div>
                )}
              </div>
            )}{' '}
            ①&nbsp;&nbsp;&nbsp;
          </p>
          <div className="fontSize25">
            <div className="textCenter">1</div>
            <div className="divlineCSS1"></div>
            <div className="textCenter">4</div>
          </div>
          <div className="margintopbotom5px">=</div>
          <div className="fontSize25">
            <div>
              <input
                disabled={isInputDisabled}
                value={answers['1'][0]}
                onChange={e => handleChange('1', 0, e.target.value)}
                type="text"
                className="averageInput"
              />
            </div>
            <div className="divlineCSS"></div>
            <div className="textCenter">8</div>
          </div>
          <div className="margintopbotom5px">=</div>
          <div>
            <div>
              <div className="textCenter">3</div>
            </div>
            <div className="divlineCSS"></div>
            <div>
              <input
                disabled={isInputDisabled}
                value={answers['1'][1]}
                onChange={e => handleChange('1', 1, e.target.value)}
                type="text"
                className="averageInput"
              />
            </div>
          </div>
        </div>
        <div className="flexRow fontSize25 alignCenter quizMargin1922 marginLeft3121">
          <p className="margintopbotom5px afwe3513">
            {' '}
            {showResults && (
              <div>
                {isCorrect('2') ? (
                  <div>
                    <img
                      className="answerImg50"
                      src={correctimg}
                      alt="Correct"
                    />
                  </div>
                ) : (
                  <div>
                    <img
                      className="answerImg50"
                      src={incorrectimg}
                      alt="Incorrect"
                    />
                  </div>
                )}
              </div>
            )}{' '}
            ②&nbsp;&nbsp;&nbsp;
          </p>
          <div className="fontSize25">
            <div className="textCenter">36</div>
            <div className="divlineCSS"></div>
            <div className="textCenter">48</div>
          </div>
          <div className="margintopbotom5px">=</div>
          <div className="fontSize25">
            <div>
              <input
                disabled={isInputDisabled}
                value={answers['2'][0]}
                onChange={e => handleChange('2', 0, e.target.value)}
                type="text"
                className="averageInput"
              />
            </div>
            <div className="divlineCSS"></div>
            <div className="textCenter">24</div>
          </div>
          <div className="margintopbotom5px">=</div>
          <div>
            <div>
              <div className="textCenter">3</div>
            </div>
            <div className="divlineCSS"></div>
            <div>
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
        <div className="flexRow fontSize25 alignCenter quizMargin1922 marginLeft3121">
          <p className="margintopbotom5px afwe3513">
            {' '}
            {showResults && (
              <div>
                {isCorrect('3') ? (
                  <div>
                    <img
                      className="answerImg50"
                      src={correctimg}
                      alt="Correct"
                    />
                  </div>
                ) : (
                  <div>
                    <img
                      className="answerImg50"
                      src={incorrectimg}
                      alt="Incorrect"
                    />
                  </div>
                )}
              </div>
            )}{' '}
            ③&nbsp;&nbsp;&nbsp;
          </p>
          <div className="fontSize25">
            <div className="textCenter">1</div>
            <div className="divlineCSS1"></div>
            <div className="textCenter">6</div>
          </div>
          <div className="margintopbotom5px">=</div>
          <div className="fontSize25">
            <div>
              <input
                disabled={isInputDisabled}
                value={answers['3'][0]}
                onChange={e => handleChange('3', 0, e.target.value)}
                type="text"
                className="averageInput"
              />
            </div>
            <div className="divlineCSS"></div>
            <div className="textCenter">18</div>
          </div>
          <div className="margintopbotom5px">=</div>
          <div>
            <div>
              <div className="textCenter">5</div>
            </div>
            <div className="divlineCSS"></div>
            <div>
              <input
                disabled={isInputDisabled}
                value={answers['3'][1]}
                onChange={e => handleChange('3', 1, e.target.value)}
                type="text"
                className="averageInput"
              />
            </div>
          </div>
        </div>
        <div className="flexRow fontSize25 alignCenter quizMargin1922 marginLeft3121">
          <p className="margintopbotom5px afwe3513">
            {' '}
            {showResults && (
              <div>
                {isCorrect('4') ? (
                  <div>
                    <img
                      className="answerImg50"
                      src={correctimg}
                      alt="Correct"
                    />
                  </div>
                ) : (
                  <div>
                    <img
                      className="answerImg50"
                      src={incorrectimg}
                      alt="Incorrect"
                    />
                  </div>
                )}
              </div>
            )}{' '}
            ④&nbsp;&nbsp;&nbsp;
          </p>
          <div className="fontSize25">
            <div className="textCenter">12</div>
            <div className="divlineCSS"></div>
            <div className="textCenter">36</div>
          </div>
          <div className="margintopbotom5px">=</div>
          <div className="fontSize25">
            <div>
              <input
                disabled={isInputDisabled}
                value={answers['4'][0]}
                onChange={e => handleChange('4', 0, e.target.value)}
                type="text"
                className="averageInput"
              />
            </div>
            <div className="divlineCSS"></div>
            <div className="textCenter">18</div>
          </div>
          <div className="margintopbotom5px">=</div>
          <div>
            <div>
              <div className="textCenter">4</div>
            </div>
            <div className="divlineCSS"></div>
            <div>
              <input
                disabled={isInputDisabled}
                value={answers['4'][1]}
                onChange={e => handleChange('4', 1, e.target.value)}
                type="text"
                className="averageInput"
              />
            </div>
          </div>
        </div>
        <div className="flexRow fontSize25 alignCenter quizMargin1922 marginLeft3121">
          <p className="margintopbotom5px afwe3513">
            {' '}
            {showResults && (
              <div>
                {isCorrect('5') ? (
                  <div>
                    <img
                      className="answerImg50"
                      src={correctimg}
                      alt="Correct"
                    />
                  </div>
                ) : (
                  <div>
                    <img
                      className="answerImg50"
                      src={incorrectimg}
                      alt="Incorrect"
                    />
                  </div>
                )}
              </div>
            )}{' '}
            ⑤&nbsp;&nbsp;&nbsp;
          </p>
          <div className="fontSize25">
            <div className="textCenter">3</div>
            <div className="divlineCSS1"></div>
            <div className="textCenter">5</div>
          </div>
          <div className="margintopbotom5px">=</div>
          <div className="fontSize25">
            <div>
              <input
                disabled={isInputDisabled}
                value={answers['5'][0]}
                onChange={e => handleChange('5', 0, e.target.value)}
                type="text"
                className="averageInput"
              />
            </div>
            <div className="divlineCSS"></div>
            <div className="textCenter">15</div>
          </div>
          <div className="margintopbotom5px">=</div>
          <div>
            <div>
              <div className="textCenter">18</div>
            </div>
            <div className="divlineCSS"></div>
            <div>
              <input
                disabled={isInputDisabled}
                value={answers['5'][1]}
                onChange={e => handleChange('5', 1, e.target.value)}
                type="text"
                className="averageInput"
              />
            </div>
          </div>
        </div>
        <div className="flexRow fontSize25 alignCenter quizMargin1922 marginLeft3121">
          <p className="margintopbotom5px afwe3513">
            {' '}
            {showResults && (
              <div>
                {isCorrect('6') ? (
                  <div>
                    <img
                      className="answerImg50"
                      src={correctimg}
                      alt="Correct"
                    />
                  </div>
                ) : (
                  <div>
                    <img
                      className="answerImg50"
                      src={incorrectimg}
                      alt="Incorrect"
                    />
                  </div>
                )}
              </div>
            )}{' '}
            ⑥&nbsp;&nbsp;&nbsp;
          </p>
          <div className="fontSize25">
            <div className="textCenter">54</div>
            <div className="divlineCSS"></div>
            <div className="textCenter">72</div>
          </div>
          <div className="margintopbotom5px">=</div>
          <div className="fontSize25">
            <div>
              <input
                disabled={isInputDisabled}
                value={answers['6'][0]}
                onChange={e => handleChange('6', 0, e.target.value)}
                type="text"
                className="averageInput"
              />
            </div>
            <div className="divlineCSS"></div>
            <div className="textCenter">12</div>
          </div>
          <div className="margintopbotom5px">=</div>
          <div>
            <div>
              <div className="textCenter">6</div>
            </div>
            <div className="divlineCSS"></div>
            <div>
              <input
                disabled={isInputDisabled}
                value={answers['6'][1]}
                onChange={e => handleChange('6', 1, e.target.value)}
                type="text"
                className="averageInput"
              />
            </div>
          </div>
        </div>
        <div className="flexRow fontSize25 alignCenter quizMargin1922 marginLeft3121">
          <p className="margintopbotom5px afwe3513">
            {' '}
            {showResults && (
              <div>
                {isCorrect('7') ? (
                  <div>
                    <img
                      className="answerImg50"
                      src={correctimg}
                      alt="Correct"
                    />
                  </div>
                ) : (
                  <div>
                    <img
                      className="answerImg50"
                      src={incorrectimg}
                      alt="Incorrect"
                    />
                  </div>
                )}
              </div>
            )}{' '}
            ⑦&nbsp;&nbsp;&nbsp;
          </p>
          <div className="fontSize25">
            <div className="textCenter">3</div>
            <div className="divlineCSS1"></div>
            <div className="textCenter">8</div>
          </div>
          <div className="margintopbotom5px">=</div>
          <div className="fontSize25">
            <div>
              <input
                disabled={isInputDisabled}
                value={answers['7'][0]}
                onChange={e => handleChange('7', 0, e.target.value)}
                type="text"
                className="averageInput"
              />
            </div>
            <div className="divlineCSS"></div>
            <div className="textCenter">40</div>
          </div>
          <div className="margintopbotom5px">=</div>
          <div>
            <div>
              <div className="textCenter">18</div>
            </div>
            <div className="divlineCSS"></div>
            <div>
              <input
                disabled={isInputDisabled}
                value={answers['7'][1]}
                onChange={e => handleChange('7', 1, e.target.value)}
                type="text"
                className="averageInput"
              />
            </div>
          </div>
        </div>
        <div className="flexRow fontSize25 alignCenter quizMargin1922 marginLeft3121">
          <p className="margintopbotom5px afwe3513">
            {' '}
            {showResults && (
              <div>
                {isCorrect('8') ? (
                  <div>
                    <img
                      className="answerImg50"
                      src={correctimg}
                      alt="Correct"
                    />
                  </div>
                ) : (
                  <div>
                    <img
                      className="answerImg50"
                      src={incorrectimg}
                      alt="Incorrect"
                    />
                  </div>
                )}
              </div>
            )}{' '}
            ⑧&nbsp;&nbsp;&nbsp;
          </p>
          <div className="fontSize25">
            <div className="textCenter">30</div>
            <div className="divlineCSS"></div>
            <div className="textCenter">60</div>
          </div>
          <div className="margintopbotom5px">=</div>
          <div className="fontSize25">
            <div>
              <input
                disabled={isInputDisabled}
                value={answers['8'][0]}
                onChange={e => handleChange('8', 0, e.target.value)}
                type="text"
                className="averageInput"
              />
            </div>
            <div className="divlineCSS"></div>
            <div className="textCenter">12</div>
          </div>
          <div className="margintopbotom5px">=</div>
          <div>
            <div>
              <div className="textCenter">1</div>
            </div>
            <div className="divlineCSS"></div>
            <div>
              <input
                disabled={isInputDisabled}
                value={answers['8'][1]}
                onChange={e => handleChange('8', 1, e.target.value)}
                type="text"
                className="averageInput"
              />
            </div>
          </div>
        </div>
        <div className="flexRow fontSize25 alignCenter quizMargin1922 marginLeft3121">
          <p className="margintopbotom5px afwe3513">
            {' '}
            {showResults && (
              <div>
                {isCorrect('9') ? (
                  <div>
                    <img
                      className="answerImg50"
                      src={correctimg}
                      alt="Correct"
                    />
                  </div>
                ) : (
                  <div>
                    <img
                      className="answerImg50"
                      src={incorrectimg}
                      alt="Incorrect"
                    />
                  </div>
                )}
              </div>
            )}{' '}
            ⑨&nbsp;&nbsp;&nbsp;
          </p>
          <div className="fontSize25">
            <div className="textCenter">7</div>
            <div className="divlineCSS"></div>
            <div className="textCenter">10</div>
          </div>
          <div className="margintopbotom5px">=</div>
          <div className="fontSize25">
            <div>
              <input
                disabled={isInputDisabled}
                value={answers['9'][0]}
                onChange={e => handleChange('9', 0, e.target.value)}
                type="text"
                className="averageInput"
              />
            </div>
            <div className="divlineCSS"></div>
            <div className="textCenter">50</div>
          </div>
          <div className="margintopbotom5px">=</div>
          <div>
            <div>
              <div className="textCenter">49</div>
            </div>
            <div className="divlineCSS"></div>
            <div>
              <input
                disabled={isInputDisabled}
                value={answers['9'][1]}
                onChange={e => handleChange('9', 1, e.target.value)}
                type="text"
                className="averageInput"
              />
            </div>
          </div>
        </div>
        <div className="flexRow fontSize25 alignCenter quizMargin1922 marginLeft3121">
          <p className="margintopbotom5px afwe3513">
            {' '}
            {showResults && (
              <div>
                {isCorrect('10') ? (
                  <div>
                    <img
                      className="answerImg50"
                      src={correctimg}
                      alt="Correct"
                    />
                  </div>
                ) : (
                  <div>
                    <img
                      className="answerImg50"
                      src={incorrectimg}
                      alt="Incorrect"
                    />
                  </div>
                )}
              </div>
            )}{' '}
            ⑩&nbsp;&nbsp;&nbsp;
          </p>
          <div className="fontSize25">
            <div className="textCenter">56</div>
            <div className="divlineCSS"></div>
            <div className="textCenter">70</div>
          </div>
          <div className="margintopbotom5px">=</div>
          <div className="fontSize25">
            <div>
              <input
                disabled={isInputDisabled}
                value={answers['10'][0]}
                onChange={e => handleChange('10', 0, e.target.value)}
                type="text"
                className="averageInput"
              />
            </div>
            <div className="divlineCSS"></div>
            <div className="textCenter">10</div>
          </div>
          <div className="margintopbotom5px">=</div>
          <div>
            <div>
              <div className="textCenter">4</div>
            </div>
            <div className="divlineCSS"></div>
            <div>
              <input
                disabled={isInputDisabled}
                value={answers['10'][1]}
                onChange={e => handleChange('10', 1, e.target.value)}
                type="text"
                className="averageInput"
              />
            </div>
          </div>
        </div>
        <div className="flexRow fontSize25 alignCenter quizMargin1922 marginLeft3121">
          <p className="margintopbotom5px afwe3513">
            {' '}
            {showResults && (
              <div>
                {isCorrect('11') ? (
                  <div>
                    <img
                      className="answerImg50"
                      src={correctimg}
                      alt="Correct"
                    />
                  </div>
                ) : (
                  <div>
                    <img
                      className="answerImg50"
                      src={incorrectimg}
                      alt="Incorrect"
                    />
                  </div>
                )}
              </div>
            )}{' '}
            ⑪&nbsp;&nbsp;&nbsp;
          </p>
          <div className="fontSize25">
            <div className="textCenter">5</div>
            <div className="divlineCSS"></div>
            <div className="textCenter">12</div>
          </div>
          <div className="margintopbotom5px">=</div>
          <div className="fontSize25">
            <div>
              <input
                disabled={isInputDisabled}
                value={answers['11'][0]}
                onChange={e => handleChange('11', 0, e.target.value)}
                type="text"
                className="averageInput"
              />
            </div>
            <div className="divlineCSS"></div>
            <div className="textCenter">24</div>
          </div>
          <div className="margintopbotom5px">=</div>
          <div>
            <div>
              <div className="textCenter">35</div>
            </div>
            <div className="divlineCSS"></div>
            <div>
              <input
                disabled={isInputDisabled}
                value={answers['11'][1]}
                onChange={e => handleChange('11', 1, e.target.value)}
                type="text"
                className="averageInput"
              />
            </div>
          </div>
        </div>
        <div className="flexRow fontSize25 alignCenter quizMargin1922 marginLeft3121">
          <p className="margintopbotom5px afwe3513">
            {' '}
            {showResults && (
              <div>
                {isCorrect('12') ? (
                  <div>
                    <img
                      className="answerImg50"
                      src={correctimg}
                      alt="Correct"
                    />
                  </div>
                ) : (
                  <div>
                    <img
                      className="answerImg50"
                      src={incorrectimg}
                      alt="Incorrect"
                    />
                  </div>
                )}
              </div>
            )}{' '}
            ⑫&nbsp;&nbsp;&nbsp;
          </p>
          <div className="fontSize25">
            <div className="textCenter">75</div>
            <div className="divlineCSS"></div>
            <div className="textCenter">100</div>
          </div>
          <div className="margintopbotom5px">=</div>
          <div className="fontSize25">
            <div>
              <input
                disabled={isInputDisabled}
                value={answers['12'][0]}
                onChange={e => handleChange('12', 0, e.target.value)}
                type="text"
                className="averageInput"
              />
            </div>
            <div className="divlineCSS"></div>
            <div className="textCenter">20</div>
          </div>
          <div className="margintopbotom5px">=</div>
          <div>
            <div>
              <div className="textCenter">3</div>
            </div>
            <div className="divlineCSS"></div>
            <div>
              <input
                disabled={isInputDisabled}
                value={answers['12'][1]}
                onChange={e => handleChange('12', 1, e.target.value)}
                type="text"
                className="averageInput"
              />
            </div>
          </div>
        </div>
        <div className="flexRow fontSize25 alignCenter quizMargin1922 marginLeft3121">
          <p className="margintopbotom5px afwe3513">
            {' '}
            {showResults && (
              <div>
                {isCorrect('13') ? (
                  <div>
                    <img
                      className="answerImg50"
                      src={correctimg}
                      alt="Correct"
                    />
                  </div>
                ) : (
                  <div>
                    <img
                      className="answerImg50"
                      src={incorrectimg}
                      alt="Incorrect"
                    />
                  </div>
                )}
              </div>
            )}{' '}
            ⑬&nbsp;&nbsp;&nbsp;
          </p>
          <div className="fontSize25">
            <div className="textCenter">11</div>
            <div className="divlineCSS"></div>
            <div className="textCenter">16</div>
          </div>
          <div className="margintopbotom5px">=</div>
          <div className="fontSize25">
            <div>
              <input
                disabled={isInputDisabled}
                value={answers['13'][0]}
                onChange={e => handleChange('13', 0, e.target.value)}
                type="text"
                className="averageInput"
              />
            </div>
            <div className="divlineCSS"></div>
            <div className="textCenter">48</div>
          </div>
          <div className="margintopbotom5px">=</div>
          <div>
            <div>
              <div className="textCenter">55</div>
            </div>
            <div className="divlineCSS"></div>
            <div>
              <input
                disabled={isInputDisabled}
                value={answers['13'][1]}
                onChange={e => handleChange('13', 1, e.target.value)}
                type="text"
                className="averageInput"
              />
            </div>
          </div>
        </div>
        <div className="flexRow fontSize25 alignCenter quizMargin1922 marginLeft3121">
          <p className="margintopbotom5px afwe3513">
            {' '}
            {showResults && (
              <div>
                {isCorrect('14') ? (
                  <div>
                    <img
                      className="answerImg50"
                      src={correctimg}
                      alt="Correct"
                    />
                  </div>
                ) : (
                  <div>
                    <img
                      className="answerImg50"
                      src={incorrectimg}
                      alt="Incorrect"
                    />
                  </div>
                )}
              </div>
            )}{' '}
            ⑭&nbsp;&nbsp;&nbsp;
          </p>
          <div className="fontSize25">
            <div className="textCenter">50</div>
            <div className="divlineCSS"></div>
            <div className="textCenter">75</div>
          </div>
          <div className="margintopbotom5px">=</div>
          <div className="fontSize25">
            <div>
              <input
                disabled={isInputDisabled}
                value={answers['14'][0]}
                onChange={e => handleChange('14', 0, e.target.value)}
                type="text"
                className="averageInput"
              />
            </div>
            <div className="divlineCSS"></div>
            <div className="textCenter">15</div>
          </div>
          <div className="margintopbotom5px">=</div>
          <div>
            <div>
              <div className="textCenter">2</div>
            </div>
            <div className="divlineCSS"></div>
            <div>
              <input
                disabled={isInputDisabled}
                value={answers['14'][1]}
                onChange={e => handleChange('14', 1, e.target.value)}
                type="text"
                className="averageInput"
              />
            </div>
          </div>
        </div>
      </div>
      <ConfirmBtn type={type} day={1} handleGrade={handleGrade} />
    </Styled.OneToNine>
  );
};

export default FifthGrade03;
