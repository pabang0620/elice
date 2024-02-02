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

const FifthGrade09: React.FC = () => {
  const [isInputDisabled, setIsInputDisabled] = useState(false);
  const [type, setType] = useState(true);
  const [answers, setAnswers] = useState<AnswersType>({
    '1': ['', '', '', ''],
    '2': ['', '', '', ''],
    '3': ['', '', '', ''],
    '4': ['', '', '', ''],
    '5': ['', '', '', ''],
    '6': ['', '', '', ''],
    '7': ['', '', '', ''],
    '8': ['', '', '', ''],
    '9': ['', '', '', ''],
    '10': ['', '', '', ''],
    '11': ['', '', '', ''],
    '12': ['', '', '', ''],
    '13': ['', '', '', ''],
    '14': ['', '', '', ''],
  });
  const correctAnswers: AnswersType = {
    '1': ['1', '6', '3', '6'],
    '2': ['15', '40', '36', '40'],
    '3': ['16', '36', '15', '36'],
    '4': ['14', '35', '15', '35'],
    '5': ['12', '16', '3', '16'],
    '6': ['33', '60', '35', '60'],
    '7': ['5', '30', '16', '30'],
    '8': ['15', '20', '6', '20'],
    '9': ['12', '30', '17', '30'],
    '10': ['7', '56', '36', '56'],
    '11': ['33', '36', '13', '36'],
    '12': ['9', '63', '49', '63'],
    '13': ['9', '30', '25', '30'],
    '14': ['34', '40', '25', '40'],
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
        key: 'fifthGrade39Answers',
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
    getKeyValue({ key: 'fifthGrade39Answers' })
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
      <div className="textRight332">
        *문제에 적힌 순서대로 답을 입력해주세요.
      </div>
      <div className="quiz33131">
        <div className="flexRow fontSize20 marginTop18 marginbottomtic afwe3513">
          {' '}
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
            <div className="divlineCSS7"></div>
            <div className="textCenter">6</div>
          </div>
          <div className="commaHeight">,</div>
          <div className="fontSize20 marginRighttic">
            <div className="textCenter">1</div>
            <div className="divlineCSS7"></div>
            <div className="textCenter">2</div>
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
            <input
              disabled={isInputDisabled}
              value={answers['1'][1]}
              onChange={e => handleChange('1', 1, e.target.value)}
              type="text"
              className="averageInput331"
            />
          </div>
          <div className="commaHeight">,</div>
          <div className="fontSize20 marginRighttic">
            <input
              disabled={isInputDisabled}
              value={answers['1'][2]}
              onChange={e => handleChange('1', 2, e.target.value)}
              type="text"
              className="averageInput331"
            />
            <div className="divlineCSS7"></div>
            <input
              disabled={isInputDisabled}
              value={answers['1'][3]}
              onChange={e => handleChange('1', 3, e.target.value)}
              type="text"
              className="averageInput331"
            />
          </div>
          <div>)&nbsp;&nbsp;&nbsp;&nbsp;</div>
        </div>
        <div className="flexRow fontSize20 marginTop18 marginbottomtic afwe3513">
          {' '}
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
            <div className="textCenter">3</div>
            <div className="divlineCSS7"></div>
            <div className="textCenter">8</div>
          </div>
          <div className="commaHeight">,</div>
          <div className="fontSize20 marginRighttic">
            <div className="textCenter">9</div>
            <div className="divlineCSS7"></div>
            <div className="textCenter">10</div>
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
            <input
              disabled={isInputDisabled}
              value={answers['2'][1]}
              onChange={e => handleChange('2', 1, e.target.value)}
              type="text"
              className="averageInput331"
            />
          </div>
          <div className="commaHeight">,</div>
          <div className="fontSize20 marginRighttic">
            <input
              disabled={isInputDisabled}
              value={answers['2'][2]}
              onChange={e => handleChange('2', 2, e.target.value)}
              type="text"
              className="averageInput331"
            />
            <div className="divlineCSS7"></div>
            <input
              disabled={isInputDisabled}
              value={answers['2'][3]}
              onChange={e => handleChange('2', 3, e.target.value)}
              type="text"
              className="averageInput331"
            />
          </div>
          <div>)&nbsp;&nbsp;&nbsp;&nbsp;</div>
        </div>
        <div className="flexRow fontSize20 marginTop18 marginbottomtic afwe3513">
          {' '}
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
            <div className="textCenter">4</div>
            <div className="divlineCSS7"></div>
            <div className="textCenter">9</div>
          </div>
          <div className="commaHeight">,</div>
          <div className="fontSize20 marginRighttic">
            <div className="textCenter">5</div>
            <div className="divlineCSS7"></div>
            <div className="textCenter">12</div>
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
            <input
              disabled={isInputDisabled}
              value={answers['3'][1]}
              onChange={e => handleChange('3', 1, e.target.value)}
              type="text"
              className="averageInput331"
            />
          </div>
          <div className="commaHeight">,</div>
          <div className="fontSize20 marginRighttic">
            <input
              disabled={isInputDisabled}
              value={answers['3'][2]}
              onChange={e => handleChange('3', 2, e.target.value)}
              type="text"
              className="averageInput331"
            />
            <div className="divlineCSS7"></div>
            <input
              disabled={isInputDisabled}
              value={answers['3'][3]}
              onChange={e => handleChange('3', 3, e.target.value)}
              type="text"
              className="averageInput331"
            />
          </div>
          <div>)&nbsp;&nbsp;&nbsp;&nbsp;</div>
        </div>
        <div className="flexRow fontSize20 marginTop18 marginbottomtic afwe3513">
          {' '}
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
          <p>④ &nbsp;&nbsp;&nbsp;</p>
          <div>(</div>
          <div className="fontSize20 marginLeft10px">
            <div className="textCenter">2</div>
            <div className="divlineCSS7"></div>
            <div className="textCenter">5</div>
          </div>
          <div className="commaHeight">,</div>
          <div className="fontSize20 marginRighttic">
            <div className="textCenter">3</div>
            <div className="divlineCSS7"></div>
            <div className="textCenter">7</div>
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
            <input
              disabled={isInputDisabled}
              value={answers['4'][1]}
              onChange={e => handleChange('4', 1, e.target.value)}
              type="text"
              className="averageInput331"
            />
          </div>
          <div className="commaHeight">,</div>
          <div className="fontSize20 marginRighttic">
            <input
              disabled={isInputDisabled}
              value={answers['4'][2]}
              onChange={e => handleChange('4', 2, e.target.value)}
              type="text"
              className="averageInput331"
            />
            <div className="divlineCSS7"></div>
            <input
              disabled={isInputDisabled}
              value={answers['4'][3]}
              onChange={e => handleChange('4', 3, e.target.value)}
              type="text"
              className="averageInput331"
            />
          </div>
          <div>)&nbsp;&nbsp;&nbsp;&nbsp;</div>
        </div>
        <div className="flexRow fontSize20 marginTop18 marginbottomtic afwe3513">
          {' '}
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
            <div className="textCenter">3</div>
            <div className="divlineCSS7"></div>
            <div className="textCenter">4</div>
          </div>
          <div className="commaHeight">,</div>
          <div className="fontSize20 marginRighttic">
            <div className="textCenter">3</div>
            <div className="divlineCSS7"></div>
            <div className="textCenter">16</div>
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
            <input
              disabled={isInputDisabled}
              value={answers['5'][1]}
              onChange={e => handleChange('5', 1, e.target.value)}
              type="text"
              className="averageInput331"
            />
          </div>
          <div className="commaHeight">,</div>
          <div className="fontSize20 marginRighttic">
            <input
              disabled={isInputDisabled}
              value={answers['5'][2]}
              onChange={e => handleChange('5', 2, e.target.value)}
              type="text"
              className="averageInput331"
            />
            <div className="divlineCSS7"></div>
            <input
              disabled={isInputDisabled}
              value={answers['5'][3]}
              onChange={e => handleChange('5', 3, e.target.value)}
              type="text"
              className="averageInput331"
            />
          </div>
          <div>)&nbsp;&nbsp;&nbsp;&nbsp;</div>
        </div>
        <div className="flexRow fontSize20 marginTop18 marginbottomtic afwe3513">
          {' '}
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
            <div className="textCenter">11</div>
            <div className="divlineCSS7"></div>
            <div className="textCenter">20</div>
          </div>
          <div className="commaHeight">,</div>
          <div className="fontSize20 marginRighttic">
            <div className="textCenter">7</div>
            <div className="divlineCSS7"></div>
            <div className="textCenter">12</div>
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
            <input
              disabled={isInputDisabled}
              value={answers['6'][1]}
              onChange={e => handleChange('6', 1, e.target.value)}
              type="text"
              className="averageInput331"
            />
          </div>
          <div className="commaHeight">,</div>
          <div className="fontSize20 marginRighttic">
            <input
              disabled={isInputDisabled}
              value={answers['6'][2]}
              onChange={e => handleChange('6', 2, e.target.value)}
              type="text"
              className="averageInput331"
            />
            <div className="divlineCSS7"></div>
            <input
              disabled={isInputDisabled}
              value={answers['6'][3]}
              onChange={e => handleChange('6', 3, e.target.value)}
              type="text"
              className="averageInput331"
            />
          </div>
          <div>)&nbsp;&nbsp;&nbsp;&nbsp;</div>
        </div>
        <div className="flexRow fontSize20 marginTop18 marginbottomtic afwe3513">
          {' '}
          {showResults && (
            <div>
              {isCorrect('7') ? (
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
          <p>⑦&nbsp;&nbsp;&nbsp;&nbsp;</p>
          <div>(</div>
          <div className="fontSize20 marginLeft10px">
            <div className="textCenter">1</div>
            <div className="divlineCSS7"></div>
            <div className="textCenter">6</div>
          </div>
          <div className="commaHeight">,</div>
          <div className="fontSize20 marginRighttic">
            <div className="textCenter">8</div>
            <div className="divlineCSS7"></div>
            <div className="textCenter">15</div>
          </div>
          <div>)&nbsp;&nbsp;&nbsp;&nbsp;</div>
          <img className="allowRight" src={fifthimg} alt="" />
          <div>&nbsp;&nbsp;&nbsp;&nbsp;(</div>
          <div className="fontSize20 marginLeft10px">
            <input
              disabled={isInputDisabled}
              value={answers['7'][0]}
              onChange={e => handleChange('7', 0, e.target.value)}
              type="text"
              className="averageInput331"
            />
            <div className="divlineCSS7"></div>
            <input
              disabled={isInputDisabled}
              value={answers['7'][1]}
              onChange={e => handleChange('7', 1, e.target.value)}
              type="text"
              className="averageInput331"
            />
          </div>
          <div className="commaHeight">,</div>
          <div className="fontSize20 marginRighttic">
            <input
              disabled={isInputDisabled}
              value={answers['7'][2]}
              onChange={e => handleChange('7', 2, e.target.value)}
              type="text"
              className="averageInput331"
            />
            <div className="divlineCSS7"></div>
            <input
              disabled={isInputDisabled}
              value={answers['7'][3]}
              onChange={e => handleChange('7', 3, e.target.value)}
              type="text"
              className="averageInput331"
            />
          </div>
          <div>)&nbsp;&nbsp;&nbsp;&nbsp;</div>
        </div>
        <div className="flexRow fontSize20 marginTop18 marginbottomtic afwe3513">
          {' '}
          {showResults && (
            <div>
              {isCorrect('8') ? (
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
          <p>⑧&nbsp;&nbsp;&nbsp;&nbsp;</p>
          <div>(</div>
          <div className="fontSize20 marginLeft10px">
            <div className="textCenter">3</div>
            <div className="divlineCSS7"></div>
            <div className="textCenter">4</div>
          </div>
          <div className="commaHeight">,</div>
          <div className="fontSize20 marginRighttic">
            <div className="textCenter">3</div>
            <div className="divlineCSS7"></div>
            <div className="textCenter">10</div>
          </div>
          <div>)&nbsp;&nbsp;&nbsp;&nbsp;</div>
          <img className="allowRight" src={fifthimg} alt="" />
          <div>&nbsp;&nbsp;&nbsp;&nbsp;(</div>
          <div className="fontSize20 marginLeft10px">
            <input
              disabled={isInputDisabled}
              value={answers['8'][0]}
              onChange={e => handleChange('8', 0, e.target.value)}
              type="text"
              className="averageInput331"
            />
            <div className="divlineCSS7"></div>
            <input
              disabled={isInputDisabled}
              value={answers['8'][1]}
              onChange={e => handleChange('8', 1, e.target.value)}
              type="text"
              className="averageInput331"
            />
          </div>
          <div className="commaHeight">,</div>
          <div className="fontSize20 marginRighttic">
            <input
              disabled={isInputDisabled}
              value={answers['8'][2]}
              onChange={e => handleChange('8', 2, e.target.value)}
              type="text"
              className="averageInput331"
            />
            <div className="divlineCSS7"></div>
            <input
              disabled={isInputDisabled}
              value={answers['8'][3]}
              onChange={e => handleChange('8', 3, e.target.value)}
              type="text"
              className="averageInput331"
            />
          </div>
          <div>)&nbsp;&nbsp;&nbsp;&nbsp;</div>
        </div>
        <div className="flexRow fontSize20 marginTop18 marginbottomtic afwe3513">
          {' '}
          {showResults && (
            <div>
              {isCorrect('9') ? (
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
          <p>⑨&nbsp;&nbsp;&nbsp;&nbsp;</p>
          <div>(</div>
          <div className="fontSize20 marginLeft10px">
            <div className="textCenter">6</div>
            <div className="divlineCSS7"></div>
            <div className="textCenter">15</div>
          </div>
          <div className="commaHeight">,</div>
          <div className="fontSize20 marginRighttic">
            <div className="textCenter">17</div>
            <div className="divlineCSS7"></div>
            <div className="textCenter">30</div>
          </div>
          <div>)&nbsp;&nbsp;&nbsp;&nbsp;</div>
          <img className="allowRight" src={fifthimg} alt="" />
          <div>&nbsp;&nbsp;&nbsp;&nbsp;(</div>
          <div className="fontSize20 marginLeft10px">
            <input
              disabled={isInputDisabled}
              value={answers['9'][0]}
              onChange={e => handleChange('9', 0, e.target.value)}
              type="text"
              className="averageInput331"
            />
            <div className="divlineCSS7"></div>
            <input
              disabled={isInputDisabled}
              value={answers['9'][1]}
              onChange={e => handleChange('9', 1, e.target.value)}
              type="text"
              className="averageInput331"
            />
          </div>
          <div className="commaHeight">,</div>
          <div className="fontSize20 marginRighttic">
            <input
              disabled={isInputDisabled}
              value={answers['9'][2]}
              onChange={e => handleChange('9', 2, e.target.value)}
              type="text"
              className="averageInput331"
            />
            <div className="divlineCSS7"></div>
            <input
              disabled={isInputDisabled}
              value={answers['9'][3]}
              onChange={e => handleChange('9', 3, e.target.value)}
              type="text"
              className="averageInput331"
            />
          </div>
          <div>)&nbsp;&nbsp;&nbsp;&nbsp;</div>
        </div>
        <div className="flexRow fontSize20 marginTop18 marginbottomtic afwe3513">
          {' '}
          {showResults && (
            <div>
              {isCorrect('10') ? (
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
          <p>⑩&nbsp;&nbsp;&nbsp;&nbsp;</p>
          <div>(</div>
          <div className="fontSize20 marginLeft10px">
            <div className="textCenter">1</div>
            <div className="divlineCSS7"></div>
            <div className="textCenter">8</div>
          </div>
          <div className="commaHeight">,</div>
          <div className="fontSize20 marginRighttic">
            <div className="textCenter">9</div>
            <div className="divlineCSS7"></div>
            <div className="textCenter">14</div>
          </div>
          <div>)&nbsp;&nbsp;&nbsp;&nbsp;</div>
          <img className="allowRight" src={fifthimg} alt="" />
          <div>&nbsp;&nbsp;&nbsp;&nbsp;(</div>
          <div className="fontSize20 marginLeft10px">
            <input
              disabled={isInputDisabled}
              value={answers['10'][0]}
              onChange={e => handleChange('10', 0, e.target.value)}
              type="text"
              className="averageInput331"
            />
            <div className="divlineCSS7"></div>
            <input
              disabled={isInputDisabled}
              value={answers['10'][1]}
              onChange={e => handleChange('10', 1, e.target.value)}
              type="text"
              className="averageInput331"
            />
          </div>
          <div className="commaHeight">,</div>
          <div className="fontSize20 marginRighttic">
            <input
              disabled={isInputDisabled}
              value={answers['10'][2]}
              onChange={e => handleChange('10', 2, e.target.value)}
              type="text"
              className="averageInput331"
            />
            <div className="divlineCSS7"></div>
            <input
              disabled={isInputDisabled}
              value={answers['10'][3]}
              onChange={e => handleChange('10', 3, e.target.value)}
              type="text"
              className="averageInput331"
            />
          </div>
          <div>)&nbsp;&nbsp;&nbsp;&nbsp;</div>
        </div>
        <div className="flexRow fontSize20 marginTop18 marginbottomtic afwe3513">
          {' '}
          {showResults && (
            <div>
              {isCorrect('11') ? (
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
          <p>⑪&nbsp;&nbsp;&nbsp;&nbsp;</p>
          <div>(</div>
          <div className="fontSize20 marginLeft10px">
            <div className="textCenter">11</div>
            <div className="divlineCSS7"></div>
            <div className="textCenter">12</div>
          </div>
          <div className="commaHeight">,</div>
          <div className="fontSize20 marginRighttic">
            <div className="textCenter">13</div>
            <div className="divlineCSS7"></div>
            <div className="textCenter">36</div>
          </div>
          <div>)&nbsp;&nbsp;&nbsp;&nbsp;</div>
          <img className="allowRight" src={fifthimg} alt="" />
          <div>&nbsp;&nbsp;&nbsp;&nbsp;(</div>
          <div className="fontSize20 marginLeft10px">
            <input
              disabled={isInputDisabled}
              value={answers['11'][0]}
              onChange={e => handleChange('11', 0, e.target.value)}
              type="text"
              className="averageInput331"
            />
            <div className="divlineCSS7"></div>
            <input
              disabled={isInputDisabled}
              value={answers['11'][1]}
              onChange={e => handleChange('11', 1, e.target.value)}
              type="text"
              className="averageInput331"
            />
          </div>
          <div className="commaHeight">,</div>
          <div className="fontSize20 marginRighttic">
            <input
              disabled={isInputDisabled}
              value={answers['11'][2]}
              onChange={e => handleChange('11', 2, e.target.value)}
              type="text"
              className="averageInput331"
            />
            <div className="divlineCSS7"></div>
            <input
              disabled={isInputDisabled}
              value={answers['11'][3]}
              onChange={e => handleChange('11', 3, e.target.value)}
              type="text"
              className="averageInput331"
            />
          </div>
          <div>)&nbsp;&nbsp;&nbsp;&nbsp;</div>
        </div>
        <div className="flexRow fontSize20 marginTop18 marginbottomtic afwe3513">
          {' '}
          {showResults && (
            <div>
              {isCorrect('12') ? (
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
          <p>⑫&nbsp;&nbsp;&nbsp;&nbsp;</p>
          <div>(</div>
          <div className="fontSize20 marginLeft10px">
            <div className="textCenter">1</div>
            <div className="divlineCSS7"></div>
            <div className="textCenter">7</div>
          </div>
          <div className="commaHeight">,</div>
          <div className="fontSize20 marginRighttic">
            <div className="textCenter">7</div>
            <div className="divlineCSS7"></div>
            <div className="textCenter">9</div>
          </div>
          <div>)&nbsp;&nbsp;&nbsp;&nbsp;</div>
          <img className="allowRight" src={fifthimg} alt="" />
          <div>&nbsp;&nbsp;&nbsp;&nbsp;(</div>
          <div className="fontSize20 marginLeft10px">
            <input
              disabled={isInputDisabled}
              value={answers['12'][0]}
              onChange={e => handleChange('12', 0, e.target.value)}
              type="text"
              className="averageInput331"
            />
            <div className="divlineCSS7"></div>
            <input
              disabled={isInputDisabled}
              value={answers['12'][1]}
              onChange={e => handleChange('12', 1, e.target.value)}
              type="text"
              className="averageInput331"
            />
          </div>
          <div className="commaHeight">,</div>
          <div className="fontSize20 marginRighttic">
            <input
              disabled={isInputDisabled}
              value={answers['12'][2]}
              onChange={e => handleChange('12', 2, e.target.value)}
              type="text"
              className="averageInput331"
            />
            <div className="divlineCSS7"></div>
            <input
              disabled={isInputDisabled}
              value={answers['12'][3]}
              onChange={e => handleChange('12', 3, e.target.value)}
              type="text"
              className="averageInput331"
            />
          </div>
          <div>)&nbsp;&nbsp;&nbsp;&nbsp;</div>
        </div>
        <div className="flexRow fontSize20 marginTop18 marginbottomtic afwe3513">
          {' '}
          {showResults && (
            <div>
              {isCorrect('13') ? (
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
          <p>⑬&nbsp;&nbsp;&nbsp;&nbsp;</p>
          <div>(</div>
          <div className="fontSize20 marginLeft10px">
            <div className="textCenter">3</div>
            <div className="divlineCSS7"></div>
            <div className="textCenter">10</div>
          </div>
          <div className="commaHeight">,</div>
          <div className="fontSize20 marginRighttic">
            <div className="textCenter">5</div>
            <div className="divlineCSS7"></div>
            <div className="textCenter">6</div>
          </div>
          <div>)&nbsp;&nbsp;&nbsp;&nbsp;</div>
          <img className="allowRight" src={fifthimg} alt="" />
          <div>&nbsp;&nbsp;&nbsp;&nbsp;(</div>
          <div className="fontSize20 marginLeft10px">
            <input
              disabled={isInputDisabled}
              value={answers['13'][0]}
              onChange={e => handleChange('13', 0, e.target.value)}
              type="text"
              className="averageInput331"
            />
            <div className="divlineCSS7"></div>
            <input
              disabled={isInputDisabled}
              value={answers['13'][1]}
              onChange={e => handleChange('13', 1, e.target.value)}
              type="text"
              className="averageInput331"
            />
          </div>
          <div className="commaHeight">,</div>
          <div className="fontSize20 marginRighttic">
            <input
              disabled={isInputDisabled}
              value={answers['13'][2]}
              onChange={e => handleChange('13', 2, e.target.value)}
              type="text"
              className="averageInput331"
            />
            <div className="divlineCSS7"></div>
            <input
              disabled={isInputDisabled}
              value={answers['13'][3]}
              onChange={e => handleChange('13', 3, e.target.value)}
              type="text"
              className="averageInput331"
            />
          </div>
          <div>)&nbsp;&nbsp;&nbsp;&nbsp;</div>
        </div>
        <div className="flexRow fontSize20 marginTop18 marginbottomtic afwe3513">
          {' '}
          {showResults && (
            <div>
              {isCorrect('14') ? (
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
          <p>⑭&nbsp;&nbsp;&nbsp;&nbsp;</p>
          <div>(</div>
          <div className="fontSize20 marginLeft10px">
            <div className="textCenter">17</div>
            <div className="divlineCSS7"></div>
            <div className="textCenter">20</div>
          </div>
          <div className="commaHeight">,</div>
          <div className="fontSize20 marginRighttic">
            <div className="textCenter">5</div>
            <div className="divlineCSS7"></div>
            <div className="textCenter">8</div>
          </div>
          <div>)&nbsp;&nbsp;&nbsp;&nbsp;</div>
          <img className="allowRight" src={fifthimg} alt="" />
          <div>&nbsp;&nbsp;&nbsp;&nbsp;(</div>
          <div className="fontSize20 marginLeft10px">
            <input
              disabled={isInputDisabled}
              value={answers['14'][0]}
              onChange={e => handleChange('14', 0, e.target.value)}
              type="text"
              className="averageInput331"
            />{' '}
            <div className="divlineCSS7"></div>
            <input
              disabled={isInputDisabled}
              value={answers['14'][1]}
              onChange={e => handleChange('14', 1, e.target.value)}
              type="text"
              className="averageInput331"
            />{' '}
          </div>
          <div className="commaHeight">,</div>
          <div className="fontSize20 marginRighttic">
            <input
              disabled={isInputDisabled}
              value={answers['14'][2]}
              onChange={e => handleChange('14', 2, e.target.value)}
              type="text"
              className="averageInput331"
            />{' '}
            <div className="divlineCSS7"></div>
            <input
              disabled={isInputDisabled}
              value={answers['14'][3]}
              onChange={e => handleChange('14', 3, e.target.value)}
              type="text"
              className="averageInput331"
            />{' '}
          </div>
          <div>)&nbsp;&nbsp;&nbsp;&nbsp;</div>
        </div>
      </div>
      <ConfirmBtn type={type} day={3} handleGrade={handleGrade} />
    </Styled.OneToNine>
  );
};

export default FifthGrade09;
