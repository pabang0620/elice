import React, { useState } from 'react';
import { sendScore } from '@elice/extcontent-apis';
import { postKeyValue } from '@elice/extcontent-apis';
import { getKeyValue } from '@elice/extcontent-apis';

import Styled from '../../style';
import ConfirmBtn from '../../utils/ConfirmBtn';

import type { AnswersType } from '../../Type/Type1';

import fifthimg2 from 'src/contents/FifthGrade/fifthImage/4-3-1.png';
import correctimg from 'src/contents/FifthGrade/fifthImage/correct.png';
import incorrectimg from 'src/contents/FifthGrade/fifthImage/incorrect.png';

const FifthGrade07: React.FC = () => {
  const [isInputDisabled, setIsInputDisabled] = useState(false);
  const [type, setType] = useState(true);
  const [answers, setAnswers] = useState<AnswersType>({
    '1': ['', ''],
    '2': ['', ''],
    '3': ['', ''],
    '4': ['', ''],
    '5': ['', '', '', '', ''],
    '6': ['', '', '', '', ''],
    '7': ['', '', '', '', ''],
    '8': ['', '', '', '', ''],
    '9': ['', '', '', '', ''],
    '10': ['', '', '', '', ''],
  });
  const correctAnswers: AnswersType = {
    '1': ['3', '4'],
    '2': ['7', '8'],
    '3': ['1', '2'],
    '4': ['1', '2'],
    '5': ['8', '5', '1', '3', '5'],
    '6': ['25', '4', '6', '1', '4'],
    '7': ['5', '3', '1', '2', '3'],
    '8': ['16', '5', '3', '1', '5'],
    '9': ['9', '2', '4', '1', '2'],
    '10': ['27', '2', '13', '1', '2'],
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
        key: 'fifthGrade52Answers',
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
    getKeyValue({ key: 'fifthGrade52Answers' })
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
          분수와 자연수의 곱셈은 분모를 그대로 적고, 분자와 자연수를 곱합니다.
        </div>
        <div className="quiz1546 justifyCenter">
          <img className="imgSize3111" src={fifthimg2} alt="" />
        </div>
        <div className="flexRow">
          <div className="">
            <div className="textCenter">3</div>
            <div className="divlineCSS10"></div>
            <div className="textCenter">4</div>
          </div>
          <div className="flexRow">
            은
            <div className="">
              <div className="textCenter">1</div>
              <div className="divlineCSS10"></div>
              <div className="textCenter">4</div>
            </div>
            이 3개입니다.&nbsp;&nbsp;{' '}
            <div className="">
              <div className="textCenter">3</div>
              <div className="divlineCSS10"></div>
              <div className="textCenter">4</div>
            </div>
            에 3을 곱하면{' '}
            <div className="">
              <div className="textCenter">1</div>
              <div className="divlineCSS10"></div>
              <div className="textCenter">4</div>
            </div>
            이 9개가 됩니다.
          </div>
        </div>
        <div>
          단, 마지막 답은 꼭 기약분수로 쓰고, 가분수 는 대분수로 고칩니다.{' '}
        </div>
      </div>
      <div className="quiz333 fontSize25">
        <div className="flexRow awefaweTOp">
          <p>① &nbsp;&nbsp;</p>
          <div className="quiz1546">
            <div className="textCenter">3</div>
            <div className="divlineCSS1"></div>
            <div className="textCenter">8</div>
          </div>
          <div className="marginlR10px">×</div>
          <div className="quiz1546">
            <div className="textCenter">2</div>
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
            <div className="textCenter">1</div>
            <div className="divlineCSS1"></div>
            <div className="textCenter">8</div>
          </div>
          <div className="marginlR10px">×</div>
          <div className="quiz1546">
            <div className="textCenter">7</div>
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
            <div className="textCenter">1</div>
            <div className="divlineCSS1"></div>
            <div className="textCenter">4</div>
          </div>
          <div className="marginlR10px">×</div>
          <div className="quiz1546">
            <div className="textCenter">2</div>
          </div>
          <div className="marginlR10px">=</div>
          <div className="afwe3513">
            <input
              disabled={isInputDisabled}
              value={answers['3'][0]}
              onChange={e => handleChange('3', 0, e.target.value)}
              type="text"
              className="averageInput"
            />
            <div className="divlineCSS15"></div>
            <input
              disabled={isInputDisabled}
              value={answers['3'][1]}
              onChange={e => handleChange('3', 1, e.target.value)}
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
        <div className="flexRow awefaweTOp">
          <p>④ &nbsp;&nbsp;</p>
          <div className="quiz1546">
            <div className="textCenter">1</div>
            <div className="divlineCSS7"></div>
            <div className="textCenter">14</div>
          </div>
          <div className="marginlR10px">×</div>
          <div className="quiz1546">
            <div className="textCenter">7</div>
          </div>
          <div className="marginlR10px">=</div>
          <div className="afwe3513">
            <input
              disabled={isInputDisabled}
              value={answers['4'][0]}
              onChange={e => handleChange('4', 0, e.target.value)}
              type="text"
              className="averageInput"
            />
            <div className="divlineCSS15"></div>
            <input
              disabled={isInputDisabled}
              value={answers['4'][1]}
              onChange={e => handleChange('4', 1, e.target.value)}
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
        <div className="flexRow awefaweTOp">
          <p>⑤ &nbsp;&nbsp;</p>
          <div className="quiz1546">
            <div className="textCenter">2</div>
            <div className="divlineCSS1"></div>
            <div className="textCenter">5</div>
          </div>
          <div className="marginlR10px">×</div>
          <div className="quiz1546">
            <div className="textCenter">4</div>
          </div>
          <div className="marginlR10px">=</div>
          <div>
            <input
              disabled={isInputDisabled}
              value={answers['5'][0]}
              onChange={e => handleChange('5', 0, e.target.value)}
              type="text"
              className="averageInput"
            />
            <div className="divlineCSS15"></div>
            <input
              disabled={isInputDisabled}
              value={answers['5'][1]}
              onChange={e => handleChange('5', 1, e.target.value)}
              type="text"
              className="averageInput"
            />
          </div>
          <div className="marginlR10px">=</div>
          <input
            disabled={isInputDisabled}
            value={answers['5'][2]}
            onChange={e => handleChange('5', 2, e.target.value)}
            type="text"
            className="averageInput marginawerq"
          />

          <div className="afwe3513">
            <input
              disabled={isInputDisabled}
              value={answers['5'][3]}
              onChange={e => handleChange('5', 3, e.target.value)}
              type="text"
              className="averageInput"
            />
            <div className="divlineCSS15"></div>
            <input
              disabled={isInputDisabled}
              value={answers['5'][4]}
              onChange={e => handleChange('5', 4, e.target.value)}
              type="text"
              className="averageInput"
            />
            {showResults && (
              <div>
                {isCorrect('5') ? (
                  <div>
                    <img
                      className="answerImg81"
                      src={correctimg}
                      alt="Correct"
                    />
                  </div>
                ) : (
                  <div>
                    <img
                      className="answerImg81"
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
          <p>⑥ &nbsp;&nbsp;</p>
          <div className="quiz1546">
            <div className="textCenter">5</div>
            <div className="divlineCSS1"></div>
            <div className="textCenter">8</div>
          </div>
          <div className="marginlR10px">×</div>
          <div className="quiz1546">
            <div className="textCenter">10</div>
          </div>
          <div className="marginlR10px">=</div>
          <div>
            <input
              disabled={isInputDisabled}
              value={answers['6'][0]}
              onChange={e => handleChange('6', 0, e.target.value)}
              type="text"
              className="averageInput"
            />
            <div className="divlineCSS15"></div>
            <input
              disabled={isInputDisabled}
              value={answers['6'][1]}
              onChange={e => handleChange('6', 1, e.target.value)}
              type="text"
              className="averageInput"
            />
          </div>
          <div className="marginlR10px">=</div>
          <input
            disabled={isInputDisabled}
            value={answers['6'][2]}
            onChange={e => handleChange('6', 2, e.target.value)}
            type="text"
            className="averageInput marginawerq"
          />

          <div className="afwe3513">
            <input
              disabled={isInputDisabled}
              value={answers['6'][3]}
              onChange={e => handleChange('6', 3, e.target.value)}
              type="text"
              className="averageInput"
            />
            <div className="divlineCSS15"></div>
            <input
              disabled={isInputDisabled}
              value={answers['6'][4]}
              onChange={e => handleChange('6', 4, e.target.value)}
              type="text"
              className="averageInput"
            />
            {showResults && (
              <div>
                {isCorrect('6') ? (
                  <div>
                    <img
                      className="answerImg81"
                      src={correctimg}
                      alt="Correct"
                    />
                  </div>
                ) : (
                  <div>
                    <img
                      className="answerImg81"
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
          <p>⑦ &nbsp;&nbsp;</p>
          <div className="quiz1546">
            <div className="textCenter">5</div>
            <div className="divlineCSS7"></div>
            <div className="textCenter">12</div>
          </div>
          <div className="marginlR10px">×</div>
          <div className="quiz1546">
            <div className="textCenter">4</div>
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
            <div className="divlineCSS15"></div>
            <input
              disabled={isInputDisabled}
              value={answers['7'][1]}
              onChange={e => handleChange('7', 1, e.target.value)}
              type="text"
              className="averageInput"
            />
          </div>
          <div className="marginlR10px">=</div>
          <input
            disabled={isInputDisabled}
            value={answers['7'][2]}
            onChange={e => handleChange('7', 2, e.target.value)}
            type="text"
            className="averageInput marginawerq"
          />
          <div className="afwe3513">
            <input
              disabled={isInputDisabled}
              value={answers['7'][3]}
              onChange={e => handleChange('7', 3, e.target.value)}
              type="text"
              className="averageInput"
            />
            <div className="divlineCSS15"></div>
            <input
              disabled={isInputDisabled}
              value={answers['7'][4]}
              onChange={e => handleChange('7', 4, e.target.value)}
              type="text"
              className="averageInput"
            />
            {showResults && (
              <div>
                {isCorrect('7') ? (
                  <div>
                    <img
                      className="answerImg81"
                      src={correctimg}
                      alt="Correct"
                    />
                  </div>
                ) : (
                  <div>
                    <img
                      className="answerImg81"
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
          <p>⑧ &nbsp;&nbsp;</p>
          <div className="quiz1546">
            <div className="textCenter">8</div>
            <div className="divlineCSS7"></div>
            <div className="textCenter">15</div>
          </div>
          <div className="marginlR10px">×</div>
          <div className="quiz1546">
            <div className="textCenter">6</div>
          </div>
          <div className="marginlR10px">=</div>
          <div>
            <input
              disabled={isInputDisabled}
              value={answers['8'][0]}
              onChange={e => handleChange('8', 0, e.target.value)}
              type="text"
              className="averageInput"
            />
            <div className="divlineCSS15"></div>
            <input
              disabled={isInputDisabled}
              value={answers['8'][1]}
              onChange={e => handleChange('8', 1, e.target.value)}
              type="text"
              className="averageInput"
            />
          </div>
          <div className="marginlR10px">=</div>
          <input
            disabled={isInputDisabled}
            value={answers['8'][2]}
            onChange={e => handleChange('8', 2, e.target.value)}
            type="text"
            className="averageInput marginawerq"
          />

          <div className="afwe3513">
            <input
              disabled={isInputDisabled}
              value={answers['8'][3]}
              onChange={e => handleChange('8', 3, e.target.value)}
              type="text"
              className="averageInput"
            />
            <div className="divlineCSS15"></div>
            <input
              disabled={isInputDisabled}
              value={answers['8'][4]}
              onChange={e => handleChange('8', 4, e.target.value)}
              type="text"
              className="averageInput"
            />
            {showResults && (
              <div>
                {isCorrect('8') ? (
                  <div>
                    <img
                      className="answerImg81"
                      src={correctimg}
                      alt="Correct"
                    />
                  </div>
                ) : (
                  <div>
                    <img
                      className="answerImg81"
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
          <p>⑨ &nbsp;&nbsp;</p>
          <div className="quiz1546">
            <div className="textCenter">3</div>
            <div className="divlineCSS7"></div>
            <div className="textCenter">14</div>
          </div>
          <div className="marginlR10px">×</div>
          <div className="quiz1546">
            <div className="textCenter">21</div>
          </div>
          <div className="marginlR10px">=</div>
          <div>
            <input
              disabled={isInputDisabled}
              value={answers['9'][0]}
              onChange={e => handleChange('9', 0, e.target.value)}
              type="text"
              className="averageInput"
            />
            <div className="divlineCSS15"></div>
            <input
              disabled={isInputDisabled}
              value={answers['9'][1]}
              onChange={e => handleChange('9', 1, e.target.value)}
              type="text"
              className="averageInput"
            />
          </div>
          <div className="marginlR10px">=</div>
          <input
            disabled={isInputDisabled}
            value={answers['9'][2]}
            onChange={e => handleChange('9', 2, e.target.value)}
            type="text"
            className="averageInput marginawerq"
          />

          <div className="afwe3513">
            <input
              disabled={isInputDisabled}
              value={answers['9'][3]}
              onChange={e => handleChange('9', 3, e.target.value)}
              type="text"
              className="averageInput"
            />
            <div className="divlineCSS15"></div>
            <input
              disabled={isInputDisabled}
              value={answers['9'][4]}
              onChange={e => handleChange('9', 4, e.target.value)}
              type="text"
              className="averageInput"
            />
            {showResults && (
              <div>
                {isCorrect('9') ? (
                  <div>
                    <img
                      className="answerImg81"
                      src={correctimg}
                      alt="Correct"
                    />
                  </div>
                ) : (
                  <div>
                    <img
                      className="answerImg81"
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
          <p>⑩ &nbsp;&nbsp;</p>
          <div className="quiz1546">
            <div className="textCenter">9</div>
            <div className="divlineCSS7"></div>
            <div className="textCenter">22</div>
          </div>
          <div className="marginlR10px">×</div>
          <div className="quiz1546">
            <div className="textCenter">33</div>
          </div>
          <div className="marginlR10px">=</div>
          <div>
            <input
              disabled={isInputDisabled}
              value={answers['10'][0]}
              onChange={e => handleChange('10', 0, e.target.value)}
              type="text"
              className="averageInput"
            />
            <div className="divlineCSS15"></div>
            <input
              disabled={isInputDisabled}
              value={answers['10'][1]}
              onChange={e => handleChange('10', 1, e.target.value)}
              type="text"
              className="averageInput"
            />
          </div>
          <div className="marginlR10px">=</div>
          <input
            disabled={isInputDisabled}
            value={answers['10'][2]}
            onChange={e => handleChange('10', 2, e.target.value)}
            type="text"
            className="averageInput marginawerq"
          />

          <div className="afwe3513">
            <input
              disabled={isInputDisabled}
              value={answers['10'][3]}
              onChange={e => handleChange('10', 3, e.target.value)}
              type="text"
              className="averageInput"
            />
            <div className="divlineCSS15"></div>
            <input
              disabled={isInputDisabled}
              value={answers['10'][4]}
              onChange={e => handleChange('10', 4, e.target.value)}
              type="text"
              className="averageInput"
            />
            {showResults && (
              <div>
                {isCorrect('10') ? (
                  <div>
                    <img
                      className="answerImg81"
                      src={correctimg}
                      alt="Correct"
                    />
                  </div>
                ) : (
                  <div>
                    <img
                      className="answerImg81"
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
      <ConfirmBtn type={type} day={3} handleGrade={handleGrade} />
    </Styled.OneToNine>
  );
};

export default FifthGrade07;
