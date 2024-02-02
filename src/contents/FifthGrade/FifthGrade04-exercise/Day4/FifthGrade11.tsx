import React, { useState } from 'react';
import { sendScore } from '@elice/extcontent-apis';
import { postKeyValue } from '@elice/extcontent-apis';
import { getKeyValue } from '@elice/extcontent-apis';

import Styled from '../../style';
import ConfirmBtn from '../../utils/ConfirmBtn';

import type { AnswersType } from '../../Type/Type1';

import fifthimg2 from 'src/contents/FifthGrade/fifthImage/4-4-2.png';
import correctimg from 'src/contents/FifthGrade/fifthImage/correct.png';
import incorrectimg from 'src/contents/FifthGrade/fifthImage/incorrect.png';

const FifthGrade11: React.FC = () => {
  const [isInputDisabled, setIsInputDisabled] = useState(false);
  const [type, setType] = useState(true);
  const [answers, setAnswers] = useState<AnswersType>({
    '1': ['', '', '', '', '', '', ''],
    '2': ['', '', '', '', '', ''],
    '3': ['', '', '', '', '', '', ''],
    '4': ['', '', '', '', '', ''],
    '5': ['', '', '', '', '', '', ''],
    '6': ['', '', '', '', '', '', ''],
  });
  const correctAnswers: AnswersType = {
    '1': ['2', '1', '1', '1', '5', '2', '5'],
    '2': ['1', '1', '3', '1', '1', '3'],
    '3': ['1', '1', '1', '2', '1', '1', '2'],
    '4': ['1', '1', '7', '1', '1', '7'],
    '5': ['1', '3', '1', '2', '2', '3', '4'],
    '6': ['2', '2', '1', '5', '1', '4', '5'],
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
        key: 'fifthGrade56Answers',
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
    getKeyValue({ key: 'fifthGrade56Answers' })
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
      <div className="exampleBox312 ewwfar">
        <div className="fontSize17">
          자연수는 분모가 1인 분수로 생각하여 분모와 바로 약분한 후 분자끼리,
          분모끼리 곱합니다.
        </div>
        <div className="quiz1546 justifyCenter">
          <img className="awef12368568" src={fifthimg2} alt="" />
        </div>
      </div>
      <div className="quiz fontSize25">
        <div>
          {' '}
          <div className="afwe3513 flexRow awefaweTOp marginwerq245288">
            <p>① &nbsp;&nbsp;</p>
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
            <div className="quiz1546">
              <div className="textCenter">2</div>
              <div className="divlineCSS1"></div>
              <div className="textCenter">9</div>
            </div>
            <div className="marginlR10px">×</div>
            <div className="quiz1546">
              <div className="textCenter">3</div>
            </div>
            <div className="marginlR10px">×</div>
            <div className="quiz1546">
              <div className="textCenter">3</div>
              <div className="divlineCSS1"></div>
              <div className="textCenter">5</div>
            </div>
            <div className="marginlR10px">=</div>
            <div>
              <div className="flexRow">
                {' '}
                <input
                  disabled={isInputDisabled}
                  type="text"
                  className="averageInput"
                  value={answers['1'][0]}
                  onChange={e => handleChange('1', 0, e.target.value)}
                />
                <div className="awkfaui">×</div>
                <input
                  disabled={isInputDisabled}
                  type="text"
                  className="averageInput"
                  value={answers['1'][1]}
                  onChange={e => handleChange('1', 1, e.target.value)}
                />
                <div className="awkfaui">×</div>
                <input
                  disabled={isInputDisabled}
                  type="text"
                  className="averageInput"
                  value={answers['1'][2]}
                  onChange={e => handleChange('1', 2, e.target.value)}
                />
              </div>
              <div className="divlineCSS16"></div>
              <div className="flexRow justifyCenter">
                <input
                  disabled={isInputDisabled}
                  type="text"
                  className="averageInput"
                  value={answers['1'][3]}
                  onChange={e => handleChange('1', 3, e.target.value)}
                />
                <div className="awkfaui">×</div>
                <input
                  disabled={isInputDisabled}
                  type="text"
                  className="averageInput"
                  value={answers['1'][4]}
                  onChange={e => handleChange('1', 4, e.target.value)}
                />
              </div>
            </div>
            <div className="marginlR10px">=</div>
            <div>
              <input
                disabled={isInputDisabled}
                value={answers['1'][5]}
                onChange={e => handleChange('1', 5, e.target.value)}
                type="text"
                className="averageInput"
              />
              <div className="divlineCSS15"></div>
              <input
                disabled={isInputDisabled}
                type="text"
                className="averageInput"
                value={answers['1'][6]}
                onChange={e => handleChange('1', 6, e.target.value)}
              />
            </div>
          </div>
        </div>
        <div>
          {' '}
          <div className="afwe3513 flexRow awefaweTOp marginwerq245288">
            <p>② &nbsp;&nbsp;</p>
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
            <div className="quiz1546">
              <div className="textCenter">4</div>
              <div className="divlineCSS1"></div>
              <div className="textCenter">7</div>
            </div>
            <div className="marginlR10px">×</div>
            <div className="quiz1546">
              <div className="textCenter">7</div>
              <div className="divlineCSS1"></div>
              <div className="textCenter">8</div>
            </div>
            <div className="marginlR10px">×</div>
            <div className="quiz1546">
              <div className="textCenter">6</div>
            </div>
            <div className="marginlR10px">=</div>
            <div>
              <div className="flexRow">
                {' '}
                <input
                  disabled={isInputDisabled}
                  type="text"
                  className="averageInput"
                  value={answers['2'][0]}
                  onChange={e => handleChange('2', 0, e.target.value)}
                />
                <div className="awkfaui">×</div>
                <input
                  disabled={isInputDisabled}
                  type="text"
                  className="averageInput"
                  value={answers['2'][1]}
                  onChange={e => handleChange('2', 1, e.target.value)}
                />
                <div className="awkfaui">×</div>
                <input
                  disabled={isInputDisabled}
                  type="text"
                  className="averageInput"
                  value={answers['2'][2]}
                  onChange={e => handleChange('2', 2, e.target.value)}
                />
              </div>
              <div className="divlineCSS16"></div>
              <div className="flexRow justifyCenter">
                <input
                  disabled={isInputDisabled}
                  type="text"
                  className="averageInput"
                  value={answers['2'][3]}
                  onChange={e => handleChange('2', 3, e.target.value)}
                />
                <div className="awkfaui">×</div>
                <input
                  disabled={isInputDisabled}
                  type="text"
                  className="averageInput"
                  value={answers['2'][4]}
                  onChange={e => handleChange('2', 4, e.target.value)}
                />
              </div>
            </div>
            <div className="marginlR10px">=</div>
            <div>
              <input
                disabled={isInputDisabled}
                value={answers['2'][5]}
                onChange={e => handleChange('2', 5, e.target.value)}
                type="text"
                className="averageInput"
              />
            </div>
          </div>
        </div>{' '}
        <div>
          {' '}
          <div className="afwe3513 flexRow awefaweTOp marginwerq245288">
            <p>③ &nbsp;&nbsp;</p>
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
            <div className="quiz1546">
              <div className="textCenter">5</div>
            </div>
            <div className="marginlR10px">×</div>
            <div className="quiz1546">
              <div className="textCenter">3</div>
              <div className="divlineCSS7"></div>
              <div className="textCenter">10</div>
            </div>
            <div className="marginlR10px">×</div>
            <div className="quiz1546">
              <div className="textCenter">1</div>
              <div className="divlineCSS1"></div>
              <div className="textCenter">3</div>
            </div>
            <div className="marginlR10px">=</div>
            <div>
              <div className="flexRow">
                {' '}
                <input
                  disabled={isInputDisabled}
                  type="text"
                  className="averageInput"
                  value={answers['3'][0]}
                  onChange={e => handleChange('3', 0, e.target.value)}
                />
                <div className="awkfaui">×</div>
                <input
                  disabled={isInputDisabled}
                  type="text"
                  className="averageInput"
                  value={answers['3'][1]}
                  onChange={e => handleChange('3', 1, e.target.value)}
                />
                <div className="awkfaui">×</div>
                <input
                  disabled={isInputDisabled}
                  type="text"
                  className="averageInput"
                  value={answers['3'][2]}
                  onChange={e => handleChange('3', 2, e.target.value)}
                />
              </div>
              <div className="divlineCSS16"></div>
              <div className="flexRow justifyCenter">
                <input
                  disabled={isInputDisabled}
                  type="text"
                  className="averageInput"
                  value={answers['3'][3]}
                  onChange={e => handleChange('3', 3, e.target.value)}
                />
                <div className="awkfaui">×</div>
                <input
                  disabled={isInputDisabled}
                  type="text"
                  className="averageInput"
                  value={answers['3'][4]}
                  onChange={e => handleChange('3', 4, e.target.value)}
                />
              </div>
            </div>
            <div className="marginlR10px">=</div>
            <div>
              <input
                disabled={isInputDisabled}
                value={answers['3'][5]}
                onChange={e => handleChange('3', 5, e.target.value)}
                type="text"
                className="averageInput"
              />
              <div className="divlineCSS15"></div>
              <input
                disabled={isInputDisabled}
                type="text"
                className="averageInput"
                value={answers['3'][6]}
                onChange={e => handleChange('3', 6, e.target.value)}
              />
            </div>
          </div>
        </div>{' '}
        <div>
          {' '}
          <div className="afwe3513 flexRow awefaweTOp marginwerq245288">
            <p>④ &nbsp;&nbsp;</p>
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
            <div className="quiz1546">
              <div className="textCenter">3</div>
              <div className="divlineCSS1"></div>
              <div className="textCenter">4</div>
            </div>
            <div className="marginlR10px">×</div>
            <div className="quiz1546">
              <div className="textCenter">12</div>
            </div>
            <div className="marginlR10px">×</div>
            <div className="quiz1546">
              <div className="textCenter">7</div>
              <div className="divlineCSS1"></div>
              <div className="textCenter">9</div>
            </div>
            <div className="marginlR10px">=</div>
            <div>
              <div className="flexRow">
                {' '}
                <input
                  disabled={isInputDisabled}
                  type="text"
                  className="averageInput"
                  value={answers['4'][0]}
                  onChange={e => handleChange('4', 0, e.target.value)}
                />
                <div className="awkfaui">×</div>
                <input
                  disabled={isInputDisabled}
                  type="text"
                  className="averageInput"
                  value={answers['4'][1]}
                  onChange={e => handleChange('4', 1, e.target.value)}
                />
                <div className="awkfaui">×</div>
                <input
                  disabled={isInputDisabled}
                  type="text"
                  className="averageInput"
                  value={answers['4'][2]}
                  onChange={e => handleChange('4', 2, e.target.value)}
                />
              </div>
              <div className="divlineCSS16"></div>
              <div className="flexRow justifyCenter">
                <input
                  disabled={isInputDisabled}
                  type="text"
                  className="averageInput"
                  value={answers['4'][3]}
                  onChange={e => handleChange('4', 3, e.target.value)}
                />
                <div className="awkfaui">×</div>
                <input
                  disabled={isInputDisabled}
                  type="text"
                  className="averageInput"
                  value={answers['4'][4]}
                  onChange={e => handleChange('4', 4, e.target.value)}
                />
              </div>
            </div>
            <div className="marginlR10px">=</div>
            <div>
              <input
                disabled={isInputDisabled}
                value={answers['4'][5]}
                onChange={e => handleChange('4', 5, e.target.value)}
                type="text"
                className="averageInput"
              />
            </div>
          </div>
        </div>{' '}
        <div>
          {' '}
          <div className="afwe3513 flexRow awefaweTOp marginwerq245288">
            <p>⑤ &nbsp;&nbsp;</p>
            {showResults && (
              <div>
                {isCorrect('5') ? (
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
            <div className="quiz1546">
              <div className="textCenter">7</div>
              <div className="divlineCSS1"></div>
              <div className="textCenter">8</div>
            </div>
            <div className="marginlR10px">×</div>
            <div className="quiz1546">
              <div className="textCenter">3</div>
              <div className="divlineCSS7"></div>
              <div className="textCenter">14</div>
            </div>
            <div className="marginlR10px">×</div>
            <div className="quiz1546">
              <div className="textCenter">4</div>
            </div>
            <div className="marginlR10px">=</div>
            <div>
              <div className="flexRow">
                {' '}
                <input
                  disabled={isInputDisabled}
                  type="text"
                  className="averageInput"
                  value={answers['5'][0]}
                  onChange={e => handleChange('5', 0, e.target.value)}
                />
                <div className="awkfaui">×</div>
                <input
                  disabled={isInputDisabled}
                  type="text"
                  className="averageInput"
                  value={answers['5'][1]}
                  onChange={e => handleChange('5', 1, e.target.value)}
                />
                <div className="awkfaui">×</div>
                <input
                  disabled={isInputDisabled}
                  type="text"
                  className="averageInput"
                  value={answers['5'][2]}
                  onChange={e => handleChange('5', 2, e.target.value)}
                />
              </div>
              <div className="divlineCSS16"></div>
              <div className="flexRow justifyCenter">
                <input
                  disabled={isInputDisabled}
                  type="text"
                  className="averageInput"
                  value={answers['5'][3]}
                  onChange={e => handleChange('5', 3, e.target.value)}
                />
                <div className="awkfaui">×</div>
                <input
                  disabled={isInputDisabled}
                  type="text"
                  className="averageInput"
                  value={answers['5'][4]}
                  onChange={e => handleChange('5', 4, e.target.value)}
                />
              </div>
            </div>
            <div className="marginlR10px">=</div>
            <div>
              <input
                disabled={isInputDisabled}
                value={answers['5'][5]}
                onChange={e => handleChange('5', 5, e.target.value)}
                type="text"
                className="averageInput"
              />
              <div className="divlineCSS15"></div>
              <input
                disabled={isInputDisabled}
                type="text"
                className="averageInput"
                value={answers['5'][6]}
                onChange={e => handleChange('5', 6, e.target.value)}
              />
            </div>
          </div>
        </div>{' '}
        <div>
          {' '}
          <div className="afwe3513 flexRow awefaweTOp marginwerq245288">
            <p>⑥ &nbsp;&nbsp;</p>
            {showResults && (
              <div>
                {isCorrect('6') ? (
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
            <div className="quiz1546">
              <div className="textCenter">26</div>
            </div>
            <div className="marginlR10px">×</div>
            <div className="quiz1546">
              <div className="textCenter">2</div>
              <div className="divlineCSS7"></div>
              <div className="textCenter">15</div>
            </div>
            <div className="marginlR10px">×</div>
            <div className="quiz1546">
              <div className="textCenter">3</div>
              <div className="divlineCSS7"></div>
              <div className="textCenter">13</div>
            </div>
            <div className="marginlR10px">=</div>
            <div>
              <div className="flexRow">
                {' '}
                <input
                  disabled={isInputDisabled}
                  type="text"
                  className="averageInput"
                  value={answers['6'][0]}
                  onChange={e => handleChange('6', 0, e.target.value)}
                />
                <div className="awkfaui">×</div>
                <input
                  disabled={isInputDisabled}
                  type="text"
                  className="averageInput"
                  value={answers['6'][1]}
                  onChange={e => handleChange('6', 1, e.target.value)}
                />
                <div className="awkfaui">×</div>
                <input
                  disabled={isInputDisabled}
                  type="text"
                  className="averageInput"
                  value={answers['6'][2]}
                  onChange={e => handleChange('6', 2, e.target.value)}
                />
              </div>
              <div className="divlineCSS16"></div>
              <div className="flexRow justifyCenter">
                <input
                  disabled={isInputDisabled}
                  type="text"
                  className="averageInput"
                  value={answers['6'][3]}
                  onChange={e => handleChange('6', 3, e.target.value)}
                />
                <div className="awkfaui">×</div>
                <input
                  disabled={isInputDisabled}
                  type="text"
                  className="averageInput"
                  value={answers['6'][4]}
                  onChange={e => handleChange('6', 4, e.target.value)}
                />
              </div>
            </div>
            <div className="marginlR10px">=</div>
            <div>
              <input
                disabled={isInputDisabled}
                value={answers['6'][5]}
                onChange={e => handleChange('6', 5, e.target.value)}
                type="text"
                className="averageInput"
              />
              <div className="divlineCSS15"></div>
              <input
                disabled={isInputDisabled}
                type="text"
                className="averageInput"
                value={answers['6'][6]}
                onChange={e => handleChange('6', 6, e.target.value)}
              />
            </div>
          </div>
        </div>{' '}
      </div>
      <ConfirmBtn type={type} day={4} handleGrade={handleGrade} />
    </Styled.OneToNine>
  );
};

export default FifthGrade11;
