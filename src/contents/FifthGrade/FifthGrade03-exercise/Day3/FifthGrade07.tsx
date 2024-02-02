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
    '1': ['', ''],
    '2': ['', ''],
    '3': ['', ''],
    '4': ['', ''],
    '5': ['', ''],
    '6': ['', ''],
  });
  const correctAnswers: AnswersType = {
    '1': ['4', '15'],
    '2': ['16', '6'],
    '3': ['18', '44'],
    '4': ['16', '15'],
    '5': ['6', '63'],
    '6': ['28', '39'],
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
        key: 'fifthGrade37Answers',
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
    getKeyValue({ key: 'fifthGrade37Answers' })
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
      <div className="exampleBox312">
        <div className="fontSize17">
          분수의 분모를 같게 하는 것을 통분한다고 하며 통분한 분모를
          공통분모라고 합니다.
        </div>
        <div>
          <div className="flexRow fontSize17 alignCenter paddingExp">
            <div>
              <div className="fontSize17">
                <div className="textCenter">1</div>
                <div className="divlineCSS1"></div>
                <div className="textCenter">2</div>
              </div>
            </div>
            <div className="margintopbotom5px">=</div>
            <div>
              <div className="fontSize17">
                <div className="textCenter">2</div>
                <div className="divlineCSS1"></div>
                <div className="textCenter">4</div>
              </div>
            </div>
            <div className="margintopbotom5px">=</div>
            <div>
              <div className="fontSize17">
                <div className="textCenter">3</div>
                <div className="divlineCSS1"></div>
                <div className="textCenter">6</div>
              </div>
            </div>
            <div className="margintopbotom5px">=</div>
            <div>
              <div className="fontSize17">
                <div className="textCenter">4</div>
                <div className="divlineCSS1"></div>
                <div className="textCenter">8</div>
              </div>
            </div>
            <div className="margintopbotom5px">=</div>
            <div>
              <div className="fontSize17">
                <div className="textCenter">5</div>
                <div className="divlineCSS1"></div>
                <div className="textCenter">10</div>
              </div>
            </div>
            <div className="margintopbotom5px">=</div>
            <div>
              <div className="fontSize17">
                <div className="textCenter">6</div>
                <div className="divlineCSS1"></div>
                <div className="textCenter">12</div>
              </div>
            </div>
            <div className="margintopbotom5px">=</div>
            <div>
              <div className="fontSize17">
                <div className="textCenter">7</div>
                <div className="divlineCSS1"></div>
                <div className="textCenter">14</div>
              </div>
            </div>
            <div className="margintopbotom5px">=</div>
            <div>
              <div className="fontSize17">
                <div className="textCenter">8</div>
                <div className="divlineCSS1"></div>
                <div className="textCenter">16</div>
              </div>
            </div>
            <div className="margintopbotom5px">=</div>
            <div>
              <div className="fontSize17">
                <div className="textCenter">9</div>
                <div className="divlineCSS1"></div>
                <div className="textCenter">18</div>
              </div>
            </div>
            <div className="margintopbotom5px">=</div>......
          </div>
        </div>
        <div className="flexRow">
          <div className="fontSize17 marginRighttic">
            <div className="textCenter">2</div>
            <div className="divlineCSS1"></div>
            <div className="textCenter">3</div>
          </div>
          <div>과</div>
          <div className="fontSize17 marginRighttic">
            <div className="textCenter">2</div>
            <div className="divlineCSS1"></div>
            <div className="textCenter">3</div>
          </div>
          <div className="fontSize17">
            를 분모가 같은 분수끼리 짝지어 통분하면
          </div>
        </div>
        <div className="flexRow">
          <div className="flexRow fontSize17">
            <div>(</div>
            <div className="fontSize17 marginLeft10px">
              <div className="textCenter">3</div>
              <div className="divlineCSS1"></div>
              <div className="textCenter">6</div>
            </div>
            <div className="commaHeight">,</div>
            <div className="fontSize17 marginRighttic">
              <div className="textCenter">4</div>
              <div className="divlineCSS1"></div>
              <div className="textCenter">6</div>
            </div>
            <div>)</div>
            <div className="commaHeight">,</div>
          </div>
          <div className="flexRow fontSize17">
            <div>(</div>
            <div className="fontSize17 marginLeft10px">
              <div className="textCenter">6</div>
              <div className="divlineCSS1"></div>
              <div className="textCenter">12</div>
            </div>
            <div className="commaHeight">,</div>
            <div className="fontSize17 marginRighttic">
              <div className="textCenter">8</div>
              <div className="divlineCSS1"></div>
              <div className="textCenter">12</div>
            </div>
            <div>)</div>
            <div className="commaHeight">,</div>
          </div>
          <div className="flexRow fontSize17">
            <div>(</div>
            <div className="fontSize17 marginLeft10px">
              <div className="textCenter">9</div>
              <div className="divlineCSS1"></div>
              <div className="textCenter">18</div>
            </div>
            <div className="commaHeight">,</div>
            <div className="fontSize17 marginRighttic">
              <div className="textCenter">12</div>
              <div className="divlineCSS1"></div>
              <div className="textCenter">18</div>
            </div>
            <div>)</div>
            <div className="commaHeight">,</div>
            <div>... ... 이 됩니다.</div>
          </div>
        </div>
      </div>
      <div className="quiz33131">
        <div className="flexRow fontSize20 marginTop18 afwe3513">
          {showResults && (
            <div>
              {isCorrect('1') ? (
                <div>
                  <img className="answerImg53" src={correctimg} alt="Correct" />
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
          <p>①&nbsp;&nbsp;&nbsp;&nbsp;</p>
          <div>(</div>
          <div className="fontSize20 marginLeft10px">
            <div className="textCenter">1</div>
            <div className="divlineCSS1"></div>
            <div className="textCenter">6</div>
          </div>
          <div className="commaHeight">,</div>
          <div className="fontSize20 marginRighttic">
            <div className="textCenter">5</div>
            <div className="divlineCSS1"></div>
            <div className="textCenter">8</div>
          </div>
          <div>)&nbsp;&nbsp;&nbsp;&nbsp;</div>
          <img className="allowRight" src={fifthimg} alt="" />
          <div>&nbsp;&nbsp;&nbsp;&nbsp;(</div>
          <div className="fontSize20 marginLeft10px">
            <input
              disabled={isInputDisabled}
              value={answers['1'][0]}
              onChange={e => handleChange('1', 0, e.target.value)}
              type="text"
              className="averageInput331"
            />
            <div className="divlineCSS7"></div>
            <div className="textCenter">24</div>
          </div>
          <div className="commaHeight">,</div>
          <div className="fontSize20 marginRighttic">
            <input
              disabled={isInputDisabled}
              value={answers['1'][1]}
              onChange={e => handleChange('1', 1, e.target.value)}
              type="text"
              className="averageInput331"
            />
            <div className="divlineCSS7"></div>
            <div className="textCenter">24</div>
          </div>
          <div>)&nbsp;&nbsp;&nbsp;&nbsp;</div>
        </div>
        <div className="flexRow fontSize20 marginTop18 afwe3513">
          {showResults && (
            <div>
              {isCorrect('2') ? (
                <div>
                  <img className="answerImg53" src={correctimg} alt="Correct" />
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
          <p>②&nbsp;&nbsp;&nbsp;&nbsp;</p>
          <div>(</div>
          <div className="fontSize20 marginLeft10px">
            <div className="textCenter">4</div>
            <div className="divlineCSS1"></div>
            <div className="textCenter">7</div>
          </div>
          <div className="commaHeight">,</div>
          <div className="fontSize20 marginRighttic">
            <div className="textCenter">3</div>
            <div className="divlineCSS7"></div>
            <div className="textCenter">14</div>
          </div>
          <div>)&nbsp;&nbsp;&nbsp;&nbsp;</div>
          <img className="allowRight" src={fifthimg} alt="" />
          <div>&nbsp;&nbsp;&nbsp;&nbsp;(</div>
          <div className="fontSize20 marginLeft10px">
            <input
              disabled={isInputDisabled}
              value={answers['2'][0]}
              onChange={e => handleChange('2', 0, e.target.value)}
              type="text"
              className="averageInput331"
            />
            <div className="divlineCSS7"></div>
            <div className="textCenter">28</div>
          </div>
          <div className="commaHeight">,</div>
          <div className="fontSize20 marginRighttic">
            <input
              disabled={isInputDisabled}
              value={answers['2'][1]}
              onChange={e => handleChange('2', 1, e.target.value)}
              type="text"
              className="averageInput331"
            />
            <div className="divlineCSS7"></div>
            <div className="textCenter">28</div>
          </div>
          <div>)&nbsp;&nbsp;&nbsp;&nbsp;</div>
        </div>
        <div className="flexRow fontSize20 marginTop18 afwe3513">
          {showResults && (
            <div>
              {isCorrect('3') ? (
                <div>
                  <img className="answerImg53" src={correctimg} alt="Correct" />
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
          <p>③&nbsp;&nbsp;&nbsp;&nbsp;</p>
          <div>(</div>
          <div className="fontSize20 marginLeft10px">
            <div className="textCenter">3</div>
            <div className="divlineCSS1"></div>
            <div className="textCenter">10</div>
          </div>
          <div className="commaHeight">,</div>
          <div className="fontSize20 marginRighttic">
            <div className="textCenter">11</div>
            <div className="divlineCSS7"></div>
            <div className="textCenter">15</div>
          </div>
          <div>)&nbsp;&nbsp;&nbsp;&nbsp;</div>
          <img className="allowRight" src={fifthimg} alt="" />
          <div>&nbsp;&nbsp;&nbsp;&nbsp;(</div>
          <div className="fontSize20 marginLeft10px">
            <input
              disabled={isInputDisabled}
              value={answers['3'][0]}
              onChange={e => handleChange('3', 0, e.target.value)}
              type="text"
              className="averageInput331"
            />
            <div className="divlineCSS7"></div>
            <div className="textCenter">60</div>
          </div>
          <div className="commaHeight">,</div>
          <div className="fontSize20 marginRighttic">
            <input
              disabled={isInputDisabled}
              value={answers['3'][1]}
              onChange={e => handleChange('3', 1, e.target.value)}
              type="text"
              className="averageInput331"
            />
            <div className="divlineCSS7"></div>
            <div className="textCenter">60</div>
          </div>
          <div>)&nbsp;&nbsp;&nbsp;&nbsp;</div>
        </div>
        <div className="flexRow fontSize20 marginTop18 afwe3513">
          {showResults && (
            <div>
              {isCorrect('4') ? (
                <div>
                  <img className="answerImg53" src={correctimg} alt="Correct" />
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
          <p>④ &nbsp;&nbsp;&nbsp;&nbsp;</p>
          <div>(</div>
          <div className="fontSize20 marginLeft10px">
            <div className="textCenter">8</div>
            <div className="divlineCSS1"></div>
            <div className="textCenter">9</div>
          </div>
          <div className="commaHeight">,</div>
          <div className="fontSize20 marginRighttic">
            <div className="textCenter">5</div>
            <div className="divlineCSS1"></div>
            <div className="textCenter">6</div>
          </div>
          <div>)&nbsp;&nbsp;&nbsp;&nbsp;</div>
          <img className="allowRight" src={fifthimg} alt="" />
          <div>&nbsp;&nbsp;&nbsp;&nbsp;(</div>
          <div className="fontSize20 marginLeft10px">
            <input
              disabled={isInputDisabled}
              value={answers['4'][0]}
              onChange={e => handleChange('4', 0, e.target.value)}
              type="text"
              className="averageInput331"
            />
            <div className="divlineCSS7"></div>
            <div className="textCenter">18</div>
          </div>
          <div className="commaHeight">,</div>
          <div className="fontSize20 marginRighttic">
            <input
              disabled={isInputDisabled}
              value={answers['4'][1]}
              onChange={e => handleChange('4', 1, e.target.value)}
              type="text"
              className="averageInput331"
            />
            <div className="divlineCSS7"></div>
            <div className="textCenter">18</div>
          </div>
          <div>)&nbsp;&nbsp;&nbsp;&nbsp;</div>
        </div>
        <div className="flexRow fontSize20 marginTop18 afwe3513">
          {showResults && (
            <div>
              {isCorrect('5') ? (
                <div>
                  <img className="answerImg53" src={correctimg} alt="Correct" />
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
          <p>⑤&nbsp;&nbsp;&nbsp;&nbsp;</p>
          <div>(</div>
          <div className="fontSize20 marginLeft10px">
            <div className="textCenter">1</div>
            <div className="divlineCSS7"></div>
            <div className="textCenter">12</div>
          </div>
          <div className="commaHeight">,</div>
          <div className="fontSize20 marginRighttic">
            <div className="textCenter">7</div>
            <div className="divlineCSS1"></div>
            <div className="textCenter">8</div>
          </div>
          <div>)&nbsp;&nbsp;&nbsp;&nbsp;</div>
          <img className="allowRight" src={fifthimg} alt="" />
          <div>&nbsp;&nbsp;&nbsp;&nbsp;(</div>
          <div className="fontSize20 marginLeft10px">
            <input
              disabled={isInputDisabled}
              value={answers['5'][0]}
              onChange={e => handleChange('5', 0, e.target.value)}
              type="text"
              className="averageInput331"
            />
            <div className="divlineCSS7"></div>
            <div className="textCenter">72</div>
          </div>
          <div className="commaHeight">,</div>
          <div className="fontSize20 marginRighttic">
            <input
              disabled={isInputDisabled}
              value={answers['5'][1]}
              onChange={e => handleChange('5', 1, e.target.value)}
              type="text"
              className="averageInput331"
            />
            <div className="divlineCSS7"></div>
            <div className="textCenter">72</div>
          </div>
          <div>)&nbsp;&nbsp;&nbsp;&nbsp;</div>
        </div>
        <div className="flexRow fontSize20 marginTop18 afwe3513">
          {showResults && (
            <div>
              {isCorrect('6') ? (
                <div>
                  <img className="answerImg53" src={correctimg} alt="Correct" />
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
          <p>⑥&nbsp;&nbsp;&nbsp;&nbsp;</p>
          <div>(</div>
          <div className="fontSize20 marginLeft10px">
            <div className="textCenter">7</div>
            <div className="divlineCSS7"></div>
            <div className="textCenter">15</div>
          </div>
          <div className="commaHeight">,</div>
          <div className="fontSize20 marginRighttic">
            <div className="textCenter">13</div>
            <div className="divlineCSS7"></div>
            <div className="textCenter">20</div>
          </div>
          <div>)&nbsp;&nbsp;&nbsp;&nbsp;</div>
          <img className="allowRight" src={fifthimg} alt="" />
          <div>&nbsp;&nbsp;&nbsp;&nbsp;(</div>
          <div className="fontSize20 marginLeft10px">
            <input
              disabled={isInputDisabled}
              value={answers['6'][0]}
              onChange={e => handleChange('6', 0, e.target.value)}
              type="text"
              className="averageInput331"
            />
            <div className="divlineCSS7"></div>
            <div className="textCenter">60</div>
          </div>
          <div className="commaHeight">,</div>
          <div className="fontSize20 marginRighttic">
            <input
              disabled={isInputDisabled}
              value={answers['6'][1]}
              onChange={e => handleChange('6', 1, e.target.value)}
              type="text"
              className="averageInput331"
            />
            <div className="divlineCSS7"></div>
            <div className="textCenter">60</div>
          </div>
          <div>)&nbsp;&nbsp;&nbsp;&nbsp;</div>
        </div>
      </div>
      <ConfirmBtn type={type} day={3} handleGrade={handleGrade} />
    </Styled.OneToNine>
  );
};

export default FifthGrade07;
