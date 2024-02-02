import React, { useState } from 'react';
import { sendScore } from '@elice/extcontent-apis';
import { postKeyValue } from '@elice/extcontent-apis';
import { getKeyValue } from '@elice/extcontent-apis';

import Styled from '../../style';
import ConfirmBtn from '../../utils/ConfirmBtn';

import type { AnswersType } from '../../Type/Type1';

import fifthimg2 from 'src/contents/FifthGrade/fifthImage/4-2-1.png';
import correctimg from 'src/contents/FifthGrade/fifthImage/correct.png';
import incorrectimg from 'src/contents/FifthGrade/fifthImage/incorrect.png';
import fifthimg from 'src/contents/FifthGrade/fifthImage/화살표.png';

// 약분되는 인풋 답은 아무거나
const FifthGrade04: React.FC = () => {
  const [isInputDisabled, setIsInputDisabled] = useState(false);
  const [type, setType] = useState(true);
  const [answers, setAnswers] = useState<AnswersType>({
    '1': ['', '', '', ''],
    '2': ['', '', '', ''],
    '3': ['', '', '', '', '', ''],
    '4': ['', '', '', ''],
    '5': ['', '', '', '', '', ''],
    '6': ['', '', '', ''],
    '7': ['', '', '', '', '', ''],
    '8': ['', '', '', ''],
    '9': ['', '', '', '', '', ''],
    '10': ['', '', '', ''],
    '11': ['', '', '', '', '', ''],
    '12': ['', '', '', ''],
  });
  const correctAnswers: AnswersType = {
    '1': ['5', '18', '2', '1'],
    '2': ['7', '12', '1', '2'],
    '3': ['1', '1', '5', '2', '2', '5'],
    '4': ['2', '1', '5', '8'],
    '5': ['1', '1', '2', '1', '1', '2'],
    '6': ['3', '1', '1', '9'],
    '7': ['1', '2', '1', '3', '1', '6'],
    '8': ['3', '2', '2', '75'],
    '9': ['2', '7', '1', '1', '2', '7'],
    '10': ['3', '1', '1', '15'],
    '11': ['2', '3', '1', '1', '2', '3'],
    '12': ['3', '1', '3', '10'],
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
        key: 'fifthGrade49Answers',
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
    getKeyValue({ key: 'fifthGrade49Answers' })
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
          분수를 곱한 후 약분이 되는 경우 약분하여 기약분수로 답을 써야 합니다.
          곱하기 전에 약분을 하면 곱셈이 더 간단해집니다.
        </div>
        <div className="quiz1546 justifyCenter">
          <img className="imgSize311777" src={fifthimg2} alt="" />
          <img className="allowRight wefq4212" src={fifthimg} alt="" />
        </div>
      </div>
      <div className="quizRow3case fontSize25 afwef515">
        <div className="flexRow awefaweTOp">
          <p>① &nbsp;&nbsp;</p>
          <div className="quiz1546">
            <div className="textCenter">5</div>
            <div className="divlineCSS1"></div>
            <div className="textCenter">8</div>
            <input
              disabled={isInputDisabled}
              type="text"
              className="averageInput abposweewr1"
              value={answers['1'][2]}
              onChange={e => handleChange('1', 2, e.target.value)}
            />
          </div>
          <div className="marginlR10px">×</div>
          <div className="quiz1546">
            <div className="textCenter">4</div>
            <div className="divlineCSS1"></div>
            <div className="textCenter">9</div>
            <input
              disabled={isInputDisabled}
              type="text"
              className="averageInput abposweewr2"
              value={answers['1'][3]}
              onChange={e => handleChange('1', 3, e.target.value)}
            />
          </div>
          <div className="marginlR10px">=</div>
          <div className="afwe3513">
            <input
              disabled={isInputDisabled}
              value={answers['1'][0]}
              onChange={e => handleChange('1', 0, e.target.value)}
              type="text"
              className="averageInput"
            />
            <div className="divlineCSS15"></div>
            <input
              disabled={isInputDisabled}
              value={answers['1'][1]}
              onChange={e => handleChange('1', 1, e.target.value)}
              type="text"
              className="averageInput"
            />
            {showResults && (
              <div>
                {isCorrect('1') ? (
                  <div>
                    <img
                      className="answerImg80"
                      src={correctimg}
                      alt="Correct"
                    />
                  </div>
                ) : (
                  <div>
                    <img
                      className="answerImg80"
                      src={incorrectimg}
                      alt="Incorrect"
                    />
                  </div>
                )}
              </div>
            )}{' '}
          </div>
        </div>
        <div className="flexRow awefaweTOp">
          <p>② &nbsp;&nbsp;</p>
          <div className="quiz1546">
            <div className="textCenter">5</div>
            <div className="divlineCSS1"></div>
            <div className="textCenter">6</div>
            <input
              disabled={isInputDisabled}
              type="text"
              className="averageInput abposweewr2"
              value={answers['2'][2]}
              onChange={e => handleChange('2', 2, e.target.value)}
            />
          </div>
          <div className="marginlR10px">×</div>
          <div className="quiz1546">
            <div className="textCenter">7</div>
            <div className="divlineCSS7"></div>
            <div className="textCenter">10</div>
            <input
              disabled={isInputDisabled}
              type="text"
              className="averageInput abposweewr1"
              value={answers['2'][3]}
              onChange={e => handleChange('2', 3, e.target.value)}
            />
          </div>
          <div className="marginlR10px">=</div>
          <div className="afwe3513">
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
            {showResults && (
              <div>
                {isCorrect('2') ? (
                  <div>
                    <img
                      className="answerImg80"
                      src={correctimg}
                      alt="Correct"
                    />
                  </div>
                ) : (
                  <div>
                    <img
                      className="answerImg80"
                      src={incorrectimg}
                      alt="Incorrect"
                    />
                  </div>
                )}
              </div>
            )}{' '}
          </div>
        </div>{' '}
        <div className="flexRow awefaweTOp">
          <p>③ &nbsp;&nbsp;</p>
          <div className="quiz1546">
            <div className="textCenter">3</div>
            <div className="divlineCSS1"></div>
            <div className="textCenter">4</div>
            <input
              disabled={isInputDisabled}
              type="text"
              className="averageInput abposweewr2"
              value={answers['3'][0]}
              onChange={e => handleChange('3', 0, e.target.value)}
            />
            <input
              disabled={isInputDisabled}
              type="text"
              className="averageInput abposweewr1"
              value={answers['3'][1]}
              onChange={e => handleChange('3', 1, e.target.value)}
            />
          </div>
          <div className="marginlR10px">×</div>
          <div className="quiz1546">
            <div className="textCenter">8</div>
            <div className="divlineCSS7"></div>
            <div className="textCenter">15</div>
            <input
              disabled={isInputDisabled}
              type="text"
              className="averageInput abposweewr1"
              value={answers['3'][2]}
              onChange={e => handleChange('3', 2, e.target.value)}
            />
            <input
              disabled={isInputDisabled}
              type="text"
              className="averageInput abposweewr2"
              value={answers['3'][3]}
              onChange={e => handleChange('3', 3, e.target.value)}
            />
          </div>
          <div className="marginlR10px">=</div>
          <div className="afwe3513">
            <input
              disabled={isInputDisabled}
              value={answers['3'][4]}
              onChange={e => handleChange('3', 4, e.target.value)}
              type="text"
              className="averageInput"
            />
            <div className="divlineCSS15"></div>
            <input
              disabled={isInputDisabled}
              value={answers['3'][5]}
              onChange={e => handleChange('3', 5, e.target.value)}
              type="text"
              className="averageInput"
            />
            {showResults && (
              <div>
                {isCorrect('3') ? (
                  <div>
                    <img
                      className="answerImg80"
                      src={correctimg}
                      alt="Correct"
                    />
                  </div>
                ) : (
                  <div>
                    <img
                      className="answerImg80"
                      src={incorrectimg}
                      alt="Incorrect"
                    />
                  </div>
                )}
              </div>
            )}{' '}
          </div>
        </div>{' '}
        <div className="flexRow fakwefTop">
          <p>④ &nbsp;&nbsp;</p>
          <div className="quiz1546">
            <div className="textCenter">5</div>
            <div className="divlineCSS1"></div>
            <div className="textCenter">6</div>
            <input
              disabled={isInputDisabled}
              type="text"
              className="averageInput abposweewr1"
              value={answers['4'][0]}
              onChange={e => handleChange('4', 0, e.target.value)}
            />
          </div>
          <div className="marginlR10px">×</div>
          <div className="quiz1546">
            <div className="textCenter">3</div>
            <div className="divlineCSS1"></div>
            <div className="textCenter">4</div>
            <input
              disabled={isInputDisabled}
              type="text"
              className="averageInput abposweewr2"
              value={answers['4'][1]}
              onChange={e => handleChange('4', 1, e.target.value)}
            />
          </div>
          <div className="marginlR10px">=</div>
          <div className="afwe3513">
            <input
              disabled={isInputDisabled}
              value={answers['4'][2]}
              onChange={e => handleChange('4', 2, e.target.value)}
              type="text"
              className="averageInput"
            />
            <div className="divlineCSS15"></div>
            <input
              disabled={isInputDisabled}
              value={answers['4'][3]}
              onChange={e => handleChange('4', 3, e.target.value)}
              type="text"
              className="averageInput"
            />
            {showResults && (
              <div>
                {isCorrect('4') ? (
                  <div>
                    <img
                      className="answerImg80"
                      src={correctimg}
                      alt="Correct"
                    />
                  </div>
                ) : (
                  <div>
                    <img
                      className="answerImg80"
                      src={incorrectimg}
                      alt="Incorrect"
                    />
                  </div>
                )}
              </div>
            )}{' '}
          </div>
        </div>{' '}
        <div className="flexRow fakwefTop">
          <p>⑤ &nbsp;&nbsp;</p>
          <div className="quiz1546">
            <div className="textCenter">4</div>
            <div className="divlineCSS1"></div>
            <div className="textCenter">5</div>
            <input
              disabled={isInputDisabled}
              type="text"
              className="averageInput abposweewr2"
              value={answers['5'][0]}
              onChange={e => handleChange('5', 0, e.target.value)}
            />

            <input
              disabled={isInputDisabled}
              type="text"
              className="averageInput abposweewr1"
              value={answers['5'][1]}
              onChange={e => handleChange('5', 1, e.target.value)}
            />
          </div>
          <div className="marginlR10px">×</div>
          <div className="quiz1546">
            <div className="textCenter">5</div>
            <div className="divlineCSS1"></div>
            <div className="textCenter">8</div>
            <input
              disabled={isInputDisabled}
              type="text"
              className="averageInput abposweewr1"
              value={answers['5'][2]}
              onChange={e => handleChange('5', 2, e.target.value)}
            />
            <input
              disabled={isInputDisabled}
              type="text"
              className="averageInput abposweewr2"
              value={answers['5'][3]}
              onChange={e => handleChange('5', 3, e.target.value)}
            />
          </div>
          <div className="marginlR10px">=</div>
          <div className="afwe3513">
            <input
              disabled={isInputDisabled}
              value={answers['5'][4]}
              onChange={e => handleChange('5', 4, e.target.value)}
              type="text"
              className="averageInput"
            />
            <div className="divlineCSS15"></div>
            <input
              disabled={isInputDisabled}
              value={answers['5'][5]}
              onChange={e => handleChange('5', 5, e.target.value)}
              type="text"
              className="averageInput"
            />
            {showResults && (
              <div>
                {isCorrect('5') ? (
                  <div>
                    <img
                      className="answerImg80"
                      src={correctimg}
                      alt="Correct"
                    />
                  </div>
                ) : (
                  <div>
                    <img
                      className="answerImg80"
                      src={incorrectimg}
                      alt="Incorrect"
                    />
                  </div>
                )}
              </div>
            )}{' '}
          </div>
        </div>{' '}
        <div className="flexRow fakwefTop">
          <p>⑥ &nbsp;&nbsp;</p>
          <div className="quiz1546">
            <div className="textCenter">1</div>
            <div className="divlineCSS1"></div>
            <div className="textCenter">6</div>
            <input
              disabled={isInputDisabled}
              type="text"
              className="averageInput abposweewr1"
              value={answers['6'][0]}
              onChange={e => handleChange('6', 0, e.target.value)}
            />
          </div>
          <div className="marginlR10px">×</div>
          <div className="quiz1546">
            <div className="textCenter">2</div>
            <div className="divlineCSS1"></div>
            <div className="textCenter">3</div>
            <input
              disabled={isInputDisabled}
              type="text"
              className="averageInput abposweewr2"
              value={answers['6'][1]}
              onChange={e => handleChange('6', 1, e.target.value)}
            />
          </div>
          <div className="marginlR10px">=</div>
          <div className="afwe3513">
            <input
              disabled={isInputDisabled}
              value={answers['6'][2]}
              onChange={e => handleChange('6', 2, e.target.value)}
              type="text"
              className="averageInput"
            />
            <div className="divlineCSS15"></div>
            <input
              disabled={isInputDisabled}
              value={answers['6'][3]}
              onChange={e => handleChange('6', 3, e.target.value)}
              type="text"
              className="averageInput"
            />
            {showResults && (
              <div>
                {isCorrect('6') ? (
                  <div>
                    <img
                      className="answerImg80"
                      src={correctimg}
                      alt="Correct"
                    />
                  </div>
                ) : (
                  <div>
                    <img
                      className="answerImg80"
                      src={incorrectimg}
                      alt="Incorrect"
                    />
                  </div>
                )}
              </div>
            )}{' '}
          </div>
        </div>{' '}
        <div className="flexRow fakwefTop">
          <p>⑦ &nbsp;&nbsp;</p>
          <div className="quiz1546">
            <div className="textCenter">3</div>
            <div className="divlineCSS7"></div>
            <div className="textCenter">10</div>
            <input
              disabled={isInputDisabled}
              type="text"
              className="averageInput abposweewr2"
              value={answers['7'][0]}
              onChange={e => handleChange('7', 0, e.target.value)}
            />
            <input
              disabled={isInputDisabled}
              type="text"
              className="averageInput abposweewr1"
              value={answers['7'][1]}
              onChange={e => handleChange('7', 1, e.target.value)}
            />{' '}
          </div>
          <div className="marginlR10px">×</div>
          <div className="quiz1546">
            <div className="textCenter">5</div>
            <div className="divlineCSS1"></div>
            <div className="textCenter">9</div>
            <input
              disabled={isInputDisabled}
              type="text"
              className="averageInput abposweewr2"
              value={answers['7'][2]}
              onChange={e => handleChange('7', 2, e.target.value)}
            />
            <input
              disabled={isInputDisabled}
              type="text"
              className="averageInput abposweewr1"
              value={answers['7'][3]}
              onChange={e => handleChange('7', 3, e.target.value)}
            />{' '}
          </div>
          <div className="marginlR10px">=</div>
          <div className="afwe3513">
            <input
              disabled={isInputDisabled}
              value={answers['7'][4]}
              onChange={e => handleChange('7', 4, e.target.value)}
              type="text"
              className="averageInput"
            />
            <div className="divlineCSS15"></div>
            <input
              disabled={isInputDisabled}
              value={answers['7'][5]}
              onChange={e => handleChange('7', 5, e.target.value)}
              type="text"
              className="averageInput"
            />
            {showResults && (
              <div>
                {isCorrect('7') ? (
                  <div>
                    <img
                      className="answerImg80"
                      src={correctimg}
                      alt="Correct"
                    />
                  </div>
                ) : (
                  <div>
                    <img
                      className="answerImg80"
                      src={incorrectimg}
                      alt="Incorrect"
                    />
                  </div>
                )}
              </div>
            )}{' '}
          </div>
        </div>{' '}
        <div className="flexRow fakwefTop">
          <p>⑧ &nbsp;&nbsp;</p>
          <div className="quiz1546">
            <div className="textCenter">1</div>
            <div className="divlineCSS1"></div>
            <div className="textCenter">9</div>
            <input
              disabled={isInputDisabled}
              type="text"
              className="averageInput abposweewr1"
              value={answers['8'][0]}
              onChange={e => handleChange('8', 0, e.target.value)}
            />
          </div>
          <div className="marginlR10px">×</div>
          <div className="quiz1546">
            <div className="textCenter">6</div>
            <div className="divlineCSS7"></div>
            <div className="textCenter">25</div>
            <input
              disabled={isInputDisabled}
              type="text"
              className="averageInput abposweewr2"
              value={answers['8'][1]}
              onChange={e => handleChange('8', 1, e.target.value)}
            />
          </div>
          <div className="marginlR10px">=</div>
          <div className="afwe3513">
            <input
              disabled={isInputDisabled}
              value={answers['8'][2]}
              onChange={e => handleChange('8', 2, e.target.value)}
              type="text"
              className="averageInput"
            />
            <div className="divlineCSS15"></div>
            <input
              disabled={isInputDisabled}
              value={answers['8'][3]}
              onChange={e => handleChange('8', 3, e.target.value)}
              type="text"
              className="averageInput"
            />
            {showResults && (
              <div>
                {isCorrect('8') ? (
                  <div>
                    <img
                      className="answerImg80"
                      src={correctimg}
                      alt="Correct"
                    />
                  </div>
                ) : (
                  <div>
                    <img
                      className="answerImg80"
                      src={incorrectimg}
                      alt="Incorrect"
                    />
                  </div>
                )}
              </div>
            )}{' '}
          </div>
        </div>{' '}
        <div className="flexRow fakwefTop">
          <p>⑨ &nbsp;&nbsp;</p>
          <div className="quiz1546">
            <div className="textCenter">8</div>
            <div className="divlineCSS7"></div>
            <div className="textCenter">21</div>
            <input
              disabled={isInputDisabled}
              type="text"
              className="averageInput abposweewr2"
              value={answers['9'][0]}
              onChange={e => handleChange('9', 0, e.target.value)}
            />
            <input
              disabled={isInputDisabled}
              type="text"
              className="averageInput abposweewr1"
              value={answers['9'][1]}
              onChange={e => handleChange('9', 1, e.target.value)}
            />{' '}
          </div>
          <div className="marginlR10px">×</div>
          <div className="quiz1546">
            <div className="textCenter">3</div>
            <div className="divlineCSS1"></div>
            <div className="textCenter">4</div>
            <input
              disabled={isInputDisabled}
              type="text"
              className="averageInput abposweewr2"
              value={answers['9'][2]}
              onChange={e => handleChange('9', 2, e.target.value)}
            />
            <input
              disabled={isInputDisabled}
              type="text"
              className="averageInput abposweewr1"
              value={answers['9'][3]}
              onChange={e => handleChange('9', 3, e.target.value)}
            />{' '}
          </div>
          <div className="marginlR10px">=</div>
          <div className="afwe3513">
            <input
              disabled={isInputDisabled}
              value={answers['9'][4]}
              onChange={e => handleChange('9', 4, e.target.value)}
              type="text"
              className="averageInput"
            />
            <div className="divlineCSS15"></div>
            <input
              disabled={isInputDisabled}
              value={answers['9'][5]}
              onChange={e => handleChange('9', 5, e.target.value)}
              type="text"
              className="averageInput"
            />
            {showResults && (
              <div>
                {isCorrect('9') ? (
                  <div>
                    <img
                      className="answerImg80"
                      src={correctimg}
                      alt="Correct"
                    />
                  </div>
                ) : (
                  <div>
                    <img
                      className="answerImg80"
                      src={incorrectimg}
                      alt="Incorrect"
                    />
                  </div>
                )}
              </div>
            )}{' '}
          </div>
        </div>{' '}
        <div className="flexRow fakwefTop barfaww">
          <p>⑩ &nbsp;&nbsp;</p>
          <div className="quiz1546">
            <div className="textCenter">1</div>
            <div className="divlineCSS7"></div>
            <div className="textCenter">12</div>
            <input
              disabled={isInputDisabled}
              type="text"
              className="averageInput abposweewr1"
              value={answers['10'][0]}
              onChange={e => handleChange('10', 0, e.target.value)}
            />
          </div>
          <div className="marginlR10px">×</div>
          <div className="quiz1546">
            <div className="textCenter">4</div>
            <div className="divlineCSS1"></div>
            <div className="textCenter">5</div>
            <input
              disabled={isInputDisabled}
              type="text"
              className="averageInput abposweewr2"
              value={answers['10'][1]}
              onChange={e => handleChange('10', 1, e.target.value)}
            />
          </div>
          <div className="marginlR10px">=</div>
          <div className="afwe3513">
            <input
              disabled={isInputDisabled}
              value={answers['10'][2]}
              onChange={e => handleChange('10', 2, e.target.value)}
              type="text"
              className="averageInput"
            />
            <div className="divlineCSS15"></div>
            <input
              disabled={isInputDisabled}
              value={answers['10'][3]}
              onChange={e => handleChange('10', 3, e.target.value)}
              type="text"
              className="averageInput"
            />
            {showResults && (
              <div>
                {isCorrect('10') ? (
                  <div>
                    <img
                      className="answerImg80"
                      src={correctimg}
                      alt="Correct"
                    />
                  </div>
                ) : (
                  <div>
                    <img
                      className="answerImg80"
                      src={incorrectimg}
                      alt="Incorrect"
                    />
                  </div>
                )}
              </div>
            )}{' '}
          </div>
        </div>{' '}
        <div className="flexRow fakwefTop barfaww">
          <p>⑪ &nbsp;&nbsp;</p>
          <div className="quiz1546">
            <div className="textCenter">14</div>
            <div className="divlineCSS7"></div>
            <div className="textCenter">15</div>
            <input
              disabled={isInputDisabled}
              type="text"
              className="averageInput abposweewr2"
              value={answers['11'][0]}
              onChange={e => handleChange('11', 0, e.target.value)}
            />
            <input
              disabled={isInputDisabled}
              type="text"
              className="averageInput abposweewr1"
              value={answers['11'][1]}
              onChange={e => handleChange('11', 1, e.target.value)}
            />
          </div>
          <div className="marginlR10px">×</div>
          <div className="quiz1546">
            <div className="textCenter">5</div>
            <div className="divlineCSS1"></div>
            <div className="textCenter">7</div>
            <input
              disabled={isInputDisabled}
              type="text"
              className="averageInput abposweewr1"
              value={answers['11'][2]}
              onChange={e => handleChange('11', 2, e.target.value)}
            />
            <input
              disabled={isInputDisabled}
              type="text"
              className="averageInput abposweewr2"
              value={answers['11'][3]}
              onChange={e => handleChange('11', 3, e.target.value)}
            />
          </div>
          <div className="marginlR10px">=</div>
          <div className="afwe3513">
            <input
              disabled={isInputDisabled}
              value={answers['11'][4]}
              onChange={e => handleChange('11', 4, e.target.value)}
              type="text"
              className="averageInput"
            />
            <div className="divlineCSS15"></div>
            <input
              disabled={isInputDisabled}
              value={answers['11'][5]}
              onChange={e => handleChange('11', 5, e.target.value)}
              type="text"
              className="averageInput"
            />
            {showResults && (
              <div>
                {isCorrect('11') ? (
                  <div>
                    <img
                      className="answerImg80"
                      src={correctimg}
                      alt="Correct"
                    />
                  </div>
                ) : (
                  <div>
                    <img
                      className="answerImg80"
                      src={incorrectimg}
                      alt="Incorrect"
                    />
                  </div>
                )}
              </div>
            )}{' '}
          </div>
        </div>{' '}
        <div className="flexRow fakwefTop barfaww">
          <p>⑫ &nbsp;&nbsp;</p>
          <div className="quiz1546">
            <div className="textCenter">9</div>
            <div className="divlineCSS7"></div>
            <div className="textCenter">10</div>
            <input
              disabled={isInputDisabled}
              type="text"
              className="averageInput abposweewr2"
              value={answers['12'][0]}
              onChange={e => handleChange('12', 0, e.target.value)}
            />
          </div>
          <div className="marginlR10px">×</div>
          <div className="quiz1546">
            <div className="textCenter">1</div>
            <div className="divlineCSS1"></div>
            <div className="textCenter">3</div>
            <input
              disabled={isInputDisabled}
              type="text"
              className="averageInput abposweewr1"
              value={answers['12'][1]}
              onChange={e => handleChange('12', 1, e.target.value)}
            />
          </div>
          <div className="marginlR10px">=</div>
          <div className="afwe3513">
            <input
              disabled={isInputDisabled}
              value={answers['12'][2]}
              onChange={e => handleChange('12', 2, e.target.value)}
              type="text"
              className="averageInput"
            />
            <div className="divlineCSS15"></div>
            <input
              disabled={isInputDisabled}
              value={answers['12'][3]}
              onChange={e => handleChange('12', 3, e.target.value)}
              type="text"
              className="averageInput"
            />
            {showResults && (
              <div>
                {isCorrect('12') ? (
                  <div>
                    <img
                      className="answerImg80"
                      src={correctimg}
                      alt="Correct"
                    />
                  </div>
                ) : (
                  <div>
                    <img
                      className="answerImg80"
                      src={incorrectimg}
                      alt="Incorrect"
                    />
                  </div>
                )}
              </div>
            )}{' '}
          </div>
        </div>
      </div>
      <ConfirmBtn type={type} day={2} handleGrade={handleGrade} />
    </Styled.OneToNine>
  );
};

export default FifthGrade04;
