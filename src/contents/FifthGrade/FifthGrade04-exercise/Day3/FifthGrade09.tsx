import React, { useState } from 'react';
import { sendScore } from '@elice/extcontent-apis';
import { postKeyValue } from '@elice/extcontent-apis';
import { getKeyValue } from '@elice/extcontent-apis';

import Styled from '../../style';
import ConfirmBtn from '../../utils/ConfirmBtn';

import type { AnswersType } from '../../Type/Type1';

import correctimg from 'src/contents/FifthGrade/fifthImage/correct.png';
import incorrectimg from 'src/contents/FifthGrade/fifthImage/incorrect.png';

const FifthGrade09: React.FC = () => {
  const [isInputDisabled, setIsInputDisabled] = useState(false);
  const [type, setType] = useState(true);
  const [answers, setAnswers] = useState<AnswersType>({
    '1': ['', '', ''],
    '2': ['', '', ''],
    '3': ['', '', ''],
    '4': ['', '', ''],
    '5': ['', '', ''],
    '6': ['', '', ''],
    '7': [''],
    '8': ['', '', ''],
    '9': ['', '', ''],
    '10': ['', '', ''],
    '11': ['', '', ''],
    '12': ['', '', ''],
    '13': ['', '', ''],
    '14': ['', '', ''],
    '15': ['', '', ''],
    '16': ['', '', ''],
    '17': ['', '', ''],
    '18': ['', '', ''],
  });
  const correctAnswers: AnswersType = {
    '1': ['2', '1', '2'],
    '2': ['3', '1', '2'],
    '3': ['2', '1', '4'],
    '4': ['2', '1', '2'],
    '5': ['2', '4', '7'],
    '6': ['1', '1', '2'],
    '7': ['1'],
    '8': ['4', '1', '2'],
    '9': ['3', '3', '4'],
    '10': ['3', '1', '2'],
    '11': ['4', '1', '2'],
    '12': ['5', '1', '3'],
    '13': ['8', '1', '3'],
    '14': ['4', '1', '2'],
    '15': ['3', '1', '2'],
    '16': ['2', '4', '5'],
    '17': ['4', '4', '5'],
    '18': ['8', '1', '8'],
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
        key: 'fifthGrade54Answers',
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
    getKeyValue({ key: 'fifthGrade54Answers' })
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
      <div className="quizRow3case wafu247234y fontSize25">
        <div className="afwe3513 flexRow awefaweTOp y2429y8">
          <p className="afwoawefoij">① &nbsp;&nbsp;</p>
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
          <div className="quiz121Ex">
            <div className="textCenter">5</div>
            <div className="divlineCSS1"></div>
            <div className="textCenter">8</div>
          </div>
          <div className="marginlR10px">×</div>
          <div className="quiz121Ex">
            <div className="textCenter">4</div>
          </div>
          <div className="marginlR10px">=</div>
          <input
            disabled={isInputDisabled}
            value={answers['1'][0]}
            onChange={e => handleChange('1', 0, e.target.value)}
            type="text"
            className="averageInput marginRight239"
          />
          <div>
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
        </div>
        <div className="afwe3513 flexRow awefaweTOp y2429y8">
          <p className="afwoawefoij">② &nbsp;&nbsp;</p>
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
          <div className="quiz121Ex">
            <div className="textCenter">5</div>
          </div>
          <div className="marginlR10px">×</div>
          <div className="quiz121Ex">
            <div className="textCenter">7</div>
            <div className="divlineCSS7"></div>
            <div className="textCenter">10</div>
          </div>
          <div className="marginlR10px">=</div>
          <input
            disabled={isInputDisabled}
            value={answers['2'][0]}
            onChange={e => handleChange('2', 0, e.target.value)}
            type="text"
            className="averageInput marginRight239"
          />
          <div>
            <input
              disabled={isInputDisabled}
              value={answers['2'][1]}
              onChange={e => handleChange('2', 1, e.target.value)}
              type="text"
              className="averageInput"
            />
            <div className="divlineCSS15"></div>
            <input
              disabled={isInputDisabled}
              value={answers['2'][2]}
              onChange={e => handleChange('2', 2, e.target.value)}
              type="text"
              className="averageInput"
            />
          </div>
        </div>{' '}
        <div className="afwe3513 flexRow awefaweTOp y2429y8">
          <p className="afwoawefoij">③ &nbsp;&nbsp;</p>
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
          <div className="quiz121Ex">
            <div className="textCenter">6</div>
          </div>
          <div className="marginlR10px">×</div>
          <div className="quiz121Ex">
            <div className="textCenter">3</div>
            <div className="divlineCSS1"></div>
            <div className="textCenter">8</div>
          </div>
          <div className="marginlR10px">=</div>
          <input
            disabled={isInputDisabled}
            value={answers['3'][0]}
            onChange={e => handleChange('3', 0, e.target.value)}
            type="text"
            className="averageInput marginRight239"
          />
          <div>
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
        </div>{' '}
        <div className="afwe3513 flexRow awefaweTOp y2429y8">
          <p className="afwoawefoij">④ &nbsp;&nbsp;</p>
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
          <div className="quiz121Ex">
            <div className="textCenter">1</div>
            <div className="divlineCSS1"></div>
            <div className="textCenter">2</div>
          </div>
          <div className="marginlR10px">×</div>
          <div className="quiz121Ex">
            <div className="textCenter">5</div>
          </div>
          <div className="marginlR10px">=</div>
          <input
            disabled={isInputDisabled}
            value={answers['4'][0]}
            onChange={e => handleChange('4', 0, e.target.value)}
            type="text"
            className="averageInput marginRight239"
          />
          <div>
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
        </div>{' '}
        <div className="afwe3513 flexRow awefaweTOp y2429y8">
          <p className="afwoawefoij">⑤ &nbsp;&nbsp;</p>
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
          <div className="quiz121Ex">
            <div className="textCenter">3</div>
          </div>
          <div className="marginlR10px">×</div>
          <div className="quiz121Ex">
            <div className="textCenter">6</div>
            <div className="divlineCSS1"></div>
            <div className="textCenter">7</div>
          </div>
          <div className="marginlR10px">=</div>
          <input
            disabled={isInputDisabled}
            value={answers['5'][0]}
            onChange={e => handleChange('5', 0, e.target.value)}
            type="text"
            className="averageInput marginRight239"
          />
          <div>
            <input
              disabled={isInputDisabled}
              value={answers['5'][1]}
              onChange={e => handleChange('5', 1, e.target.value)}
              type="text"
              className="averageInput"
            />
            <div className="divlineCSS15"></div>
            <input
              disabled={isInputDisabled}
              value={answers['5'][2]}
              onChange={e => handleChange('5', 2, e.target.value)}
              type="text"
              className="averageInput"
            />
          </div>
        </div>
        <div className="afwe3513 flexRow awefaweTOp y2429y8">
          <p className="afwoawefoij">⑥ &nbsp;&nbsp;</p>
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
          <div className="quiz121Ex">
            <div className="textCenter">3</div>
            <div className="divlineCSS1"></div>
            <div className="textCenter">4</div>
          </div>
          <div className="marginlR10px">×</div>
          <div className="quiz121Ex">
            <div className="textCenter">2</div>
          </div>
          <div className="marginlR10px">=</div>
          <input
            disabled={isInputDisabled}
            value={answers['6'][0]}
            onChange={e => handleChange('6', 0, e.target.value)}
            type="text"
            className="averageInput marginRight239"
          />
          <div>
            <input
              disabled={isInputDisabled}
              value={answers['6'][1]}
              onChange={e => handleChange('6', 1, e.target.value)}
              type="text"
              className="averageInput"
            />
            <div className="divlineCSS15"></div>
            <input
              disabled={isInputDisabled}
              value={answers['6'][2]}
              onChange={e => handleChange('6', 2, e.target.value)}
              type="text"
              className="averageInput"
            />
          </div>
        </div>{' '}
        <div className="afwe3513 flexRow awefaweTOp a2a39892">
          <p className="afwoawefoij">⑦ &nbsp;&nbsp;</p>
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
          <div className="quiz121Ex">
            <div className="textCenter">5</div>
          </div>
          <div className="marginlR10px">×</div>
          <div className="quiz121Ex">
            <div className="textCenter">1</div>
            <div className="divlineCSS1"></div>
            <div className="textCenter">5</div>
          </div>
          <div className="marginlR10px">=</div>
          <div>
            <input
              disabled={isInputDisabled}
              value={answers['7'][0]}
              onChange={e => handleChange('7', 0, e.target.value)}
              type="text"
              className="averageInput"
            />
          </div>
        </div>
        <div className="afwe3513 flexRow awefaweTOp y2429y8">
          <p className="afwoawefoij">⑧ &nbsp;&nbsp;</p>
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
          <div className="quiz121Ex">
            <div className="textCenter">1</div>
            <div className="divlineCSS1"></div>
            <div className="textCenter">2</div>
          </div>
          <div className="marginlR10px">×</div>
          <div className="quiz121Ex">
            <div className="textCenter">9</div>
          </div>
          <div className="marginlR10px">=</div>
          <input
            disabled={isInputDisabled}
            value={answers['8'][0]}
            onChange={e => handleChange('8', 0, e.target.value)}
            type="text"
            className="averageInput marginRight239"
          />
          <div>
            <input
              disabled={isInputDisabled}
              value={answers['8'][1]}
              onChange={e => handleChange('8', 1, e.target.value)}
              type="text"
              className="averageInput"
            />
            <div className="divlineCSS15"></div>
            <input
              disabled={isInputDisabled}
              value={answers['8'][2]}
              onChange={e => handleChange('8', 2, e.target.value)}
              type="text"
              className="averageInput"
            />
          </div>
        </div>{' '}
        <div className="afwe3513 flexRow awefaweTOp y2429y8">
          <p className="afwoawefoij">⑨ &nbsp;&nbsp;</p>
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
          <div className="quiz121Ex">
            <div className="textCenter">5</div>
          </div>
          <div className="marginlR10px">×</div>
          <div className="quiz121Ex">
            <div className="textCenter">3</div>
            <div className="divlineCSS1"></div>
            <div className="textCenter">4</div>
          </div>
          <div className="marginlR10px">=</div>
          <input
            disabled={isInputDisabled}
            value={answers['9'][0]}
            onChange={e => handleChange('9', 0, e.target.value)}
            type="text"
            className="averageInput marginRight239"
          />
          <div>
            <input
              disabled={isInputDisabled}
              value={answers['9'][1]}
              onChange={e => handleChange('9', 1, e.target.value)}
              type="text"
              className="averageInput"
            />
            <div className="divlineCSS15"></div>
            <input
              disabled={isInputDisabled}
              value={answers['9'][2]}
              onChange={e => handleChange('9', 2, e.target.value)}
              type="text"
              className="averageInput"
            />
          </div>
        </div>{' '}
        <div className="afwe3513 flexRow awefaweTOp y2429y8">
          <p className="afwoawefoij">⑩ &nbsp;&nbsp;</p>
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
          <div className="quiz121Ex">
            <div className="textCenter">5</div>
          </div>
          <div className="marginlR10px">×</div>
          <div className="quiz121Ex">
            <div className="textCenter">7</div>
            <div className="divlineCSS7"></div>
            <div className="textCenter">10</div>
          </div>
          <div className="marginlR10px">=</div>
          <input
            disabled={isInputDisabled}
            value={answers['10'][0]}
            onChange={e => handleChange('10', 0, e.target.value)}
            type="text"
            className="averageInput marginRight239"
          />
          <div>
            <input
              disabled={isInputDisabled}
              value={answers['10'][1]}
              onChange={e => handleChange('10', 1, e.target.value)}
              type="text"
              className="averageInput"
            />
            <div className="divlineCSS15"></div>
            <input
              disabled={isInputDisabled}
              value={answers['10'][2]}
              onChange={e => handleChange('10', 2, e.target.value)}
              type="text"
              className="averageInput"
            />
          </div>
        </div>
        <div className="afwe3513 flexRow awefaweTOp y2429y8">
          <p className="afwoawefoij">⑪ &nbsp;&nbsp;</p>
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
          <div className="quiz121Ex">
            <div className="textCenter">12</div>
          </div>
          <div className="marginlR10px">×</div>
          <div className="quiz121Ex">
            <div className="textCenter">3</div>
            <div className="divlineCSS1"></div>
            <div className="textCenter">8</div>
          </div>
          <div className="marginlR10px">=</div>
          <input
            disabled={isInputDisabled}
            value={answers['11'][0]}
            onChange={e => handleChange('11', 0, e.target.value)}
            type="text"
            className="averageInput marginRight239"
          />
          <div>
            <input
              disabled={isInputDisabled}
              value={answers['11'][1]}
              onChange={e => handleChange('11', 1, e.target.value)}
              type="text"
              className="averageInput"
            />
            <div className="divlineCSS15"></div>
            <input
              disabled={isInputDisabled}
              value={answers['11'][2]}
              onChange={e => handleChange('11', 2, e.target.value)}
              type="text"
              className="averageInput"
            />
          </div>
        </div>{' '}
        <div className="afwe3513 flexRow awefaweTOp y2429y8">
          <p className="afwoawefoij">⑫ &nbsp;&nbsp;</p>
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
          <div className="quiz121Ex">
            <div className="textCenter">2</div>
            <div className="divlineCSS1"></div>
            <div className="textCenter">9</div>
          </div>
          <div className="marginlR10px">×</div>
          <div className="quiz121Ex">
            <div className="textCenter">24</div>
          </div>
          <div className="marginlR10px">=</div>
          <input
            disabled={isInputDisabled}
            value={answers['12'][0]}
            onChange={e => handleChange('12', 0, e.target.value)}
            type="text"
            className="averageInput marginRight239"
          />
          <div>
            <input
              disabled={isInputDisabled}
              value={answers['12'][1]}
              onChange={e => handleChange('12', 1, e.target.value)}
              type="text"
              className="averageInput"
            />
            <div className="divlineCSS15"></div>
            <input
              disabled={isInputDisabled}
              value={answers['12'][2]}
              onChange={e => handleChange('12', 2, e.target.value)}
              type="text"
              className="averageInput"
            />
          </div>
        </div>{' '}
        <div className="afwe3513 flexRow awefaweTOp y2429y8">
          <p className="afwoawefoij">⑬ &nbsp;&nbsp;</p>
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
          <div className="quiz121Ex">
            <div className="textCenter">5</div>
            <div className="divlineCSS1"></div>
            <div className="textCenter">9</div>
          </div>
          <div className="marginlR10px">×</div>
          <div className="quiz121Ex">
            <div className="textCenter">15</div>
          </div>
          <div className="marginlR10px">=</div>
          <input
            disabled={isInputDisabled}
            value={answers['13'][0]}
            onChange={e => handleChange('13', 0, e.target.value)}
            type="text"
            className="averageInput marginRight239"
          />
          <div>
            <input
              disabled={isInputDisabled}
              value={answers['13'][1]}
              onChange={e => handleChange('13', 1, e.target.value)}
              type="text"
              className="averageInput"
            />
            <div className="divlineCSS15"></div>
            <input
              disabled={isInputDisabled}
              value={answers['13'][2]}
              onChange={e => handleChange('13', 2, e.target.value)}
              type="text"
              className="averageInput"
            />
          </div>
        </div>{' '}
        <div className="afwe3513 flexRow awefaweTOp y2429y8">
          <p className="afwoawefoij">⑭ &nbsp;&nbsp;</p>
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
          <div className="quiz121Ex">
            <div className="textCenter">9</div>
            <div className="divlineCSS7"></div>
            <div className="textCenter">10</div>
          </div>
          <div className="marginlR10px">×</div>
          <div className="quiz121Ex">
            <div className="textCenter">5</div>
          </div>
          <div className="marginlR10px">=</div>
          <input
            disabled={isInputDisabled}
            value={answers['14'][0]}
            onChange={e => handleChange('14', 0, e.target.value)}
            type="text"
            className="averageInput marginRight239"
          />
          <div>
            <input
              disabled={isInputDisabled}
              value={answers['14'][1]}
              onChange={e => handleChange('14', 1, e.target.value)}
              type="text"
              className="averageInput"
            />
            <div className="divlineCSS15"></div>
            <input
              disabled={isInputDisabled}
              value={answers['14'][2]}
              onChange={e => handleChange('14', 2, e.target.value)}
              type="text"
              className="averageInput"
            />
          </div>
        </div>{' '}
        <div className="afwe3513 flexRow awefaweTOp y2429y8">
          <p className="afwoawefoij">⑮ &nbsp;&nbsp;</p>
          {showResults && (
            <div>
              {isCorrect('15') ? (
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
          <div className="quiz121Ex">
            <div className="textCenter">5</div>
          </div>
          <div className="marginlR10px">×</div>
          <div className="quiz121Ex">
            <div className="textCenter">7</div>
            <div className="divlineCSS7"></div>
            <div className="textCenter">10</div>
          </div>
          <div className="marginlR10px">=</div>
          <input
            disabled={isInputDisabled}
            value={answers['15'][0]}
            onChange={e => handleChange('15', 0, e.target.value)}
            type="text"
            className="averageInput marginRight239"
          />
          <div>
            <input
              disabled={isInputDisabled}
              value={answers['15'][1]}
              onChange={e => handleChange('15', 1, e.target.value)}
              type="text"
              className="averageInput"
            />
            <div className="divlineCSS15"></div>
            <input
              disabled={isInputDisabled}
              value={answers['15'][2]}
              onChange={e => handleChange('15', 2, e.target.value)}
              type="text"
              className="averageInput"
            />
          </div>
        </div>{' '}
        <div className="afwe3513 flexRow awefaweTOp y2429y8">
          <p className="afwoawefoij">⑯ &nbsp;&nbsp;</p>
          {showResults && (
            <div>
              {isCorrect('16') ? (
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
          <div className="quiz121Ex">
            <div className="textCenter">21</div>
          </div>
          <div className="marginlR10px">×</div>
          <div className="quiz121Ex">
            <div className="textCenter">2</div>
            <div className="divlineCSS7"></div>
            <div className="textCenter">15</div>
          </div>
          <div className="marginlR10px">=</div>
          <input
            disabled={isInputDisabled}
            value={answers['16'][0]}
            onChange={e => handleChange('16', 0, e.target.value)}
            type="text"
            className="averageInput marginRight239"
          />
          <div>
            <input
              disabled={isInputDisabled}
              value={answers['16'][1]}
              onChange={e => handleChange('16', 1, e.target.value)}
              type="text"
              className="averageInput"
            />
            <div className="divlineCSS15"></div>
            <input
              disabled={isInputDisabled}
              value={answers['16'][2]}
              onChange={e => handleChange('16', 2, e.target.value)}
              type="text"
              className="averageInput"
            />
          </div>
        </div>{' '}
        <div className="afwe3513 flexRow awefaweTOp y2429y8">
          <p className="afwoawefoij">⑰ &nbsp;&nbsp;</p>
          {showResults && (
            <div>
              {isCorrect('17') ? (
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
          <div className="quiz121Ex">
            <div className="textCenter">6</div>
            <div className="divlineCSS7"></div>
            <div className="textCenter">25</div>
          </div>
          <div className="marginlR10px">×</div>
          <div className="quiz121Ex">
            <div className="textCenter">20</div>
          </div>
          <div className="marginlR10px">=</div>
          <input
            disabled={isInputDisabled}
            value={answers['17'][0]}
            onChange={e => handleChange('17', 0, e.target.value)}
            type="text"
            className="averageInput marginRight239"
          />
          <div>
            <input
              disabled={isInputDisabled}
              value={answers['17'][1]}
              onChange={e => handleChange('17', 1, e.target.value)}
              type="text"
              className="averageInput"
            />
            <div className="divlineCSS15"></div>
            <input
              disabled={isInputDisabled}
              value={answers['17'][2]}
              onChange={e => handleChange('17', 2, e.target.value)}
              type="text"
              className="averageInput"
            />
          </div>
        </div>{' '}
        <div className="afwe3513 flexRow awefaweTOp y2429y8">
          <p className="afwoawefoij">⑱ &nbsp;&nbsp;</p>
          {showResults && (
            <div>
              {isCorrect('18') ? (
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
          <div className="quiz121Ex">
            <div className="textCenter">5</div>
            <div className="divlineCSS7"></div>
            <div className="textCenter">24</div>
          </div>
          <div className="marginlR10px">×</div>
          <div className="quiz121Ex">
            <div className="textCenter">39</div>
          </div>
          <div className="marginlR10px">=</div>
          <input
            disabled={isInputDisabled}
            value={answers['18'][0]}
            onChange={e => handleChange('18', 0, e.target.value)}
            type="text"
            className="averageInput marginRight239"
          />
          <div>
            <input
              disabled={isInputDisabled}
              value={answers['18'][1]}
              onChange={e => handleChange('18', 1, e.target.value)}
              type="text"
              className="averageInput"
            />
            <div className="divlineCSS15"></div>
            <input
              disabled={isInputDisabled}
              value={answers['18'][2]}
              onChange={e => handleChange('18', 2, e.target.value)}
              type="text"
              className="averageInput"
            />
          </div>
        </div>
      </div>
      <ConfirmBtn type={type} day={3} handleGrade={handleGrade} />
    </Styled.OneToNine>
  );
};

export default FifthGrade09;
