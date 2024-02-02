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

const FifthGrade13: React.FC = () => {
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
    '11': [''],
    '12': [''],
    '13': [''],
    '14': [''],
    '15': [''],
  });
  const correctAnswers: AnswersType = {
    '1': ['>'],
    '2': ['>'],
    '3': ['<'],
    '4': ['<'],
    '5': ['>'],
    '6': ['>'],
    '7': ['>'],
    '8': ['<'],
    '9': ['>'],
    '10': ['>'],
    '11': ['<'],
    '12': ['>'],
    '13': ['<'],
    '14': ['>'],
    '15': ['<'],
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
        key: 'fifthGrade43Answers',
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
    getKeyValue({ key: 'fifthGrade43Answers' })
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
          분모가 다른 두 분수의 크기를 비교할 때에는 통분하여 분모를 같게 한
          다음
          <br />
          분자의 크기를 비교합니다.
        </div>
        <div></div>
        <div className="flexRow">
          <div className="flexRow fontSize17 justifyCenter">
            <div>(</div>
            <div className="fontSize17 marginlR10px">
              <div className="textCenter">2</div>
              <div className="divlineCSS1"></div>
              <div className="textCenter">5</div>
            </div>
            <div className="commaHeight">,</div>
            <div className="fontSize17 marginRighttic">
              <div className="textCenter">7</div>
              <div className="divlineCSS1"></div>
              <div className="textCenter">15</div>
            </div>
            <div>)</div>
            <img
              className="allowRight awemaraalow"
              src={fifthimg}
              alt=""
            />{' '}
          </div>
          <div className="flexRow fontSize17 justifyCenter">
            <div>(</div>
            <div className="fontSize17 marginlR10px">
              <div className="textCenter">6</div>
              <div className="divlineCSS1"></div>
              <div className="textCenter">15</div>
            </div>
            <input
              disabled={isInputDisabled}
              type="text"
              className="averageInput redeinptueq colrrwrinput"
              value="<"
            />
            <div className="fontSize17 marginRighttic">
              <div className="textCenter">7</div>
              <div className="divlineCSS1"></div>
              <div className="textCenter">15</div>
            </div>
            <div>)</div>
            <img
              className="allowRight awemaraalow"
              src={fifthimg}
              alt=""
            />{' '}
          </div>
          <div className="flexRow fontSize17 justifyCenter">
            <div>(</div>

            <div className="fontSize17 marginlR10px">
              <div className="textCenter">2</div>
              <div className="divlineCSS1"></div>
              <div className="textCenter">5</div>
            </div>
            <input
              disabled={isInputDisabled}
              type="text"
              className="averageInput redeinptueq colrrwrinput"
              value="<"
            />
            <div className="fontSize17 marginRighttic">
              <div className="textCenter">7</div>
              <div className="divlineCSS1"></div>
              <div className="textCenter">15</div>
            </div>
            <div>)</div>
          </div>
        </div>
      </div>
      {/* 문제시작  */}
      <div className="quizRow3case minwidwer900px">
        <div className="flexRow fontSize17 justifyCenter mairgin-wef">
          <p className="fontSize20 afwe3513">
            ①{' '}
            {showResults && (
              <div>
                {isCorrect('1') ? (
                  <div>
                    <img
                      className="answerImg13"
                      src={correctimg}
                      alt="Correct"
                    />
                  </div>
                ) : (
                  <div>
                    <img
                      className="answerImg13"
                      src={incorrectimg}
                      alt="Incorrect"
                    />
                  </div>
                )}
              </div>
            )}{' '}
          </p>
          <div className="fontSize17 marginlR10px">
            <div className="textCenter">5</div>
            <div className="divlineCSS10"></div>
            <div className="textCenter">8</div>
          </div>
          <input
            disabled={isInputDisabled}
            value={answers['1'][0]}
            onChange={e => handleChange('1', 0, e.target.value)}
            type="text"
            className="averageInput redeinptueq"
          />
          <div className="fontSize17 marginRighttic">
            <div className="textCenter">4</div>
            <div className="divlineCSS10"></div>
            <div className="textCenter">9</div>
          </div>
          {/* 예제  */}
          <div className="fontSize14 marginlR10px">
            <div className="textCenter colrrwrinput">45</div>
            <div className="divlineCSS10 arfgawefawbort"></div>
            <div className="textCenter colrrwrinput">72</div>
          </div>
          <input
            disabled={isInputDisabled}
            type="text"
            value=">"
            className="awefinbptu"
          />
          <div className="fontSize14 marginRighttic">
            <div className="textCenter colrrwrinput">32</div>
            <div className="divlineCSS10 arfgawefawbort"></div>
            <div className="textCenter colrrwrinput">72</div>
          </div>
        </div>
        <div className="flexRow fontSize17 justifyCenter">
          <p className="fontSize20 afwe3513">
            ②{' '}
            {showResults && (
              <div>
                {isCorrect('2') ? (
                  <div>
                    <img
                      className="answerImg13"
                      src={correctimg}
                      alt="Correct"
                    />
                  </div>
                ) : (
                  <div>
                    <img
                      className="answerImg13"
                      src={incorrectimg}
                      alt="Incorrect"
                    />
                  </div>
                )}
              </div>
            )}{' '}
          </p>
          <div className="fontSize17 marginlR10px">
            <div className="textCenter">3</div>
            <div className="divlineCSS10"></div>
            <div className="textCenter">7</div>
          </div>
          <input
            disabled={isInputDisabled}
            value={answers['2'][0]}
            onChange={e => handleChange('2', 0, e.target.value)}
            type="text"
            className="averageInput redeinptueq"
          />
          <div className="fontSize17 marginRighttic">
            <div className="textCenter">8</div>
            <div className="divlineCSS1"></div>
            <div className="textCenter">21</div>
          </div>
        </div>
        <div className="flexRow fontSize17 justifyCenter">
          <p className="fontSize20 afwe3513">
            ③{' '}
            {showResults && (
              <div>
                {isCorrect('3') ? (
                  <div>
                    <img
                      className="answerImg13"
                      src={correctimg}
                      alt="Correct"
                    />
                  </div>
                ) : (
                  <div>
                    <img
                      className="answerImg13"
                      src={incorrectimg}
                      alt="Incorrect"
                    />
                  </div>
                )}
              </div>
            )}{' '}
          </p>
          <div className="fontSize17 marginlR10px">
            <div className="textCenter">5</div>
            <div className="divlineCSS10"></div>
            <div className="textCenter">6</div>
          </div>
          <input
            disabled={isInputDisabled}
            value={answers['3'][0]}
            onChange={e => handleChange('3', 0, e.target.value)}
            type="text"
            className="averageInput redeinptueq"
          />
          <div className="fontSize17 marginRighttic">
            <div className="textCenter">7</div>
            <div className="divlineCSS10"></div>
            <div className="textCenter">8</div>
          </div>
        </div>
        <div className="flexRow fontSize17 justifyCenter">
          <p className="fontSize20 afwe3513">
            ④{' '}
            {showResults && (
              <div>
                {isCorrect('4') ? (
                  <div>
                    <img
                      className="answerImg13"
                      src={correctimg}
                      alt="Correct"
                    />
                  </div>
                ) : (
                  <div>
                    <img
                      className="answerImg13"
                      src={incorrectimg}
                      alt="Incorrect"
                    />
                  </div>
                )}
              </div>
            )}{' '}
          </p>
          <div className="fontSize17 marginlR10px">
            <div className="textCenter">17</div>
            <div className="divlineCSS1"></div>
            <div className="textCenter">20</div>
          </div>
          <input
            disabled={isInputDisabled}
            value={answers['4'][0]}
            onChange={e => handleChange('4', 0, e.target.value)}
            type="text"
            className="averageInput redeinptueq"
          />
          <div className="fontSize17 marginRighttic">
            <div className="textCenter">9</div>
            <div className="divlineCSS1"></div>
            <div className="textCenter">10</div>
          </div>
        </div>
        <div className="flexRow fontSize17 justifyCenter">
          <p className="fontSize20 afwe3513">
            ⑤{' '}
            {showResults && (
              <div>
                {isCorrect('5') ? (
                  <div>
                    <img
                      className="answerImg13"
                      src={correctimg}
                      alt="Correct"
                    />
                  </div>
                ) : (
                  <div>
                    <img
                      className="answerImg13"
                      src={incorrectimg}
                      alt="Incorrect"
                    />
                  </div>
                )}
              </div>
            )}{' '}
          </p>
          <div className="fontSize17 marginlR10px">
            <div className="textCenter">7</div>
            <div className="divlineCSS10"></div>
            <div className="textCenter">9</div>
          </div>
          <input
            disabled={isInputDisabled}
            value={answers['5'][0]}
            onChange={e => handleChange('5', 0, e.target.value)}
            type="text"
            className="averageInput redeinptueq"
          />
          <div className="fontSize17 marginRighttic">
            <div className="textCenter">7</div>
            <div className="divlineCSS1"></div>
            <div className="textCenter">12</div>
          </div>
        </div>
        <div className="flexRow fontSize17 justifyCenter">
          <p className="fontSize20 afwe3513">
            ⑥{' '}
            {showResults && (
              <div>
                {isCorrect('6') ? (
                  <div>
                    <img
                      className="answerImg13"
                      src={correctimg}
                      alt="Correct"
                    />
                  </div>
                ) : (
                  <div>
                    <img
                      className="answerImg13"
                      src={incorrectimg}
                      alt="Incorrect"
                    />
                  </div>
                )}
              </div>
            )}{' '}
          </p>
          <div className="fontSize17 marginlR10px">
            <div className="textCenter">13</div>
            <div className="divlineCSS1"></div>
            <div className="textCenter">15</div>
          </div>
          <input
            disabled={isInputDisabled}
            value={answers['6'][0]}
            onChange={e => handleChange('6', 0, e.target.value)}
            type="text"
            className="averageInput redeinptueq"
          />
          <div className="fontSize17 marginRighttic">
            <div className="textCenter">17</div>
            <div className="divlineCSS1"></div>
            <div className="textCenter">20</div>
          </div>
        </div>
        <div className="flexRow fontSize17 justifyCenter">
          <p className="fontSize20 afwe3513">
            ⑦{' '}
            {showResults && (
              <div>
                {isCorrect('7') ? (
                  <div>
                    <img
                      className="answerImg13"
                      src={correctimg}
                      alt="Correct"
                    />
                  </div>
                ) : (
                  <div>
                    <img
                      className="answerImg13"
                      src={incorrectimg}
                      alt="Incorrect"
                    />
                  </div>
                )}
              </div>
            )}{' '}
          </p>
          <div className="fontSize17 marginlR10px">
            <div className="textCenter">13</div>
            <div className="divlineCSS10"></div>
            <div className="textCenter">18</div>
          </div>
          <input
            disabled={isInputDisabled}
            value={answers['7'][0]}
            onChange={e => handleChange('7', 0, e.target.value)}
            type="text"
            className="averageInput redeinptueq"
          />
          <div className="fontSize17 marginRighttic">
            <div className="textCenter">11</div>
            <div className="divlineCSS1"></div>
            <div className="textCenter">20</div>
          </div>
        </div>
        <div className="flexRow fontSize17 justifyCenter">
          <p className="fontSize20 afwe3513">
            ⑧{' '}
            {showResults && (
              <div>
                {isCorrect('8') ? (
                  <div>
                    <img
                      className="answerImg13"
                      src={correctimg}
                      alt="Correct"
                    />
                  </div>
                ) : (
                  <div>
                    <img
                      className="answerImg13"
                      src={incorrectimg}
                      alt="Incorrect"
                    />
                  </div>
                )}
              </div>
            )}{' '}
          </p>
          <div className="fontSize17 marginlR10px">
            <div className="textCenter">7</div>
            <div className="divlineCSS1"></div>
            <div className="textCenter">12</div>
          </div>
          <input
            disabled={isInputDisabled}
            value={answers['8'][0]}
            onChange={e => handleChange('8', 0, e.target.value)}
            type="text"
            className="averageInput redeinptueq"
          />
          <div className="fontSize17 marginRighttic">
            <div className="textCenter">5</div>
            <div className="divlineCSS10"></div>
            <div className="textCenter">6</div>
          </div>
        </div>
        <div className="flexRow fontSize17 justifyCenter">
          <p className="fontSize20 afwe3513">
            ⑨{' '}
            {showResults && (
              <div>
                {isCorrect('9') ? (
                  <div>
                    <img
                      className="answerImg13"
                      src={correctimg}
                      alt="Correct"
                    />
                  </div>
                ) : (
                  <div>
                    <img
                      className="answerImg13"
                      src={incorrectimg}
                      alt="Incorrect"
                    />
                  </div>
                )}
              </div>
            )}{' '}
          </p>
          <div className="fontSize17 marginlR10px">
            <div className="textCenter">39</div>
            <div className="divlineCSS1"></div>
            <div className="textCenter">72</div>
          </div>
          <input
            disabled={isInputDisabled}
            value={answers['9'][0]}
            onChange={e => handleChange('9', 0, e.target.value)}
            type="text"
            className="averageInput redeinptueq"
          />
          <div className="fontSize17 marginRighttic">
            <div className="textCenter">19</div>
            <div className="divlineCSS1"></div>
            <div className="textCenter">36</div>
          </div>
        </div>
        <div className="flexRow fontSize17 justifyCenter">
          <p className="fontSize20 afwe3513">
            ⑩{' '}
            {showResults && (
              <div>
                {isCorrect('10') ? (
                  <div>
                    <img
                      className="answerImg13"
                      src={correctimg}
                      alt="Correct"
                    />
                  </div>
                ) : (
                  <div>
                    <img
                      className="answerImg13"
                      src={incorrectimg}
                      alt="Incorrect"
                    />
                  </div>
                )}
              </div>
            )}{' '}
          </p>
          <div className="fontSize17 marginlR10px">
            <div className="textCenter">7</div>
            <div className="divlineCSS1"></div>
            <div className="textCenter">16</div>
          </div>
          <input
            disabled={isInputDisabled}
            value={answers['10'][0]}
            onChange={e => handleChange('10', 0, e.target.value)}
            type="text"
            className="averageInput redeinptueq"
          />
          <div className="fontSize17 marginRighttic">
            <div className="textCenter">5</div>
            <div className="divlineCSS1"></div>
            <div className="textCenter">12</div>
          </div>
        </div>{' '}
        <div className="flexRow fontSize17 justifyCenter">
          <p className="fontSize20 afwe3513">
            ⑪{' '}
            {showResults && (
              <div>
                {isCorrect('11') ? (
                  <div>
                    <img
                      className="answerImg13"
                      src={correctimg}
                      alt="Correct"
                    />
                  </div>
                ) : (
                  <div>
                    <img
                      className="answerImg13"
                      src={incorrectimg}
                      alt="Incorrect"
                    />
                  </div>
                )}
              </div>
            )}{' '}
          </p>
          <div className="fontSize17 marginlR10px">
            <div className="textCenter">4</div>
            <div className="divlineCSS1"></div>
            <div className="textCenter">15</div>
          </div>
          <input
            disabled={isInputDisabled}
            value={answers['11'][0]}
            onChange={e => handleChange('11', 0, e.target.value)}
            type="text"
            className="averageInput redeinptueq"
          />
          <div className="fontSize17 marginRighttic">
            <div className="textCenter">11</div>
            <div className="divlineCSS1"></div>
            <div className="textCenter">30</div>
          </div>
        </div>{' '}
        <div className="flexRow fontSize17 justifyCenter">
          <p className="fontSize20 afwe3513">
            ⑫{' '}
            {showResults && (
              <div>
                {isCorrect('12') ? (
                  <div>
                    <img
                      className="answerImg13"
                      src={correctimg}
                      alt="Correct"
                    />
                  </div>
                ) : (
                  <div>
                    <img
                      className="answerImg13"
                      src={incorrectimg}
                      alt="Incorrect"
                    />
                  </div>
                )}
              </div>
            )}{' '}
          </p>
          <div className="fontSize17 marginlR10px">
            <div className="textCenter">5</div>
            <div className="divlineCSS1"></div>
            <div className="textCenter">12</div>
          </div>
          <input
            disabled={isInputDisabled}
            value={answers['12'][0]}
            onChange={e => handleChange('12', 0, e.target.value)}
            type="text"
            className="averageInput redeinptueq"
          />
          <div className="fontSize17 marginRighttic">
            <div className="textCenter">4</div>
            <div className="divlineCSS1"></div>
            <div className="textCenter">15</div>
          </div>
        </div>{' '}
        <div className="flexRow fontSize17 justifyCenter">
          <p className="fontSize20 afwe3513">
            ⑬{' '}
            {showResults && (
              <div>
                {isCorrect('13') ? (
                  <div>
                    <img
                      className="answerImg13"
                      src={correctimg}
                      alt="Correct"
                    />
                  </div>
                ) : (
                  <div>
                    <img
                      className="answerImg13"
                      src={incorrectimg}
                      alt="Incorrect"
                    />
                  </div>
                )}
              </div>
            )}{' '}
          </p>
          <div className="fontSize17 marginlR10px">
            <div className="textCenter">23</div>
            <div className="divlineCSS1"></div>
            <div className="textCenter">24</div>
          </div>
          <input
            disabled={isInputDisabled}
            value={answers['13'][0]}
            onChange={e => handleChange('13', 0, e.target.value)}
            type="text"
            className="averageInput redeinptueq"
          />
          <div className="fontSize17 marginRighttic">
            <div className="textCenter">47</div>
            <div className="divlineCSS1"></div>
            <div className="textCenter">48</div>
          </div>
        </div>{' '}
        <div className="flexRow fontSize17 justifyCenter">
          <p className="fontSize20 afwe3513">
            ⑭{' '}
            {showResults && (
              <div>
                {isCorrect('14') ? (
                  <div>
                    <img
                      className="answerImg13"
                      src={correctimg}
                      alt="Correct"
                    />
                  </div>
                ) : (
                  <div>
                    <img
                      className="answerImg13"
                      src={incorrectimg}
                      alt="Incorrect"
                    />
                  </div>
                )}
              </div>
            )}{' '}
          </p>
          <div className="fontSize17 marginlR10px">
            <div className="textCenter">11</div>
            <div className="divlineCSS1"></div>
            <div className="textCenter">16</div>
          </div>
          <input
            disabled={isInputDisabled}
            value={answers['14'][0]}
            onChange={e => handleChange('14', 0, e.target.value)}
            type="text"
            className="averageInput redeinptueq"
          />
          <div className="fontSize17 marginRighttic">
            <div className="textCenter">27</div>
            <div className="divlineCSS1"></div>
            <div className="textCenter">40</div>
          </div>
        </div>{' '}
        <div className="flexRow fontSize17 justifyCenter">
          <p className="fontSize20 afwe3513">
            ⑮{' '}
            {showResults && (
              <div>
                {isCorrect('15') ? (
                  <div>
                    <img
                      className="answerImg13"
                      src={correctimg}
                      alt="Correct"
                    />
                  </div>
                ) : (
                  <div>
                    <img
                      className="answerImg13"
                      src={incorrectimg}
                      alt="Incorrect"
                    />
                  </div>
                )}
              </div>
            )}{' '}
          </p>
          <div className="fontSize17 marginlR10px">
            <div className="textCenter">23</div>
            <div className="divlineCSS1"></div>
            <div className="textCenter">30</div>
          </div>
          <input
            disabled={isInputDisabled}
            value={answers['15'][0]}
            onChange={e => handleChange('15', 0, e.target.value)}
            type="text"
            className="averageInput redeinptueq"
          />
          <div className="fontSize17 marginRighttic">
            <div className="textCenter">13</div>
            <div className="divlineCSS1"></div>
            <div className="textCenter">15</div>
          </div>
        </div>{' '}
      </div>
      <ConfirmBtn type={type} day={5} handleGrade={handleGrade} />
    </Styled.OneToNine>
  );
};

export default FifthGrade13;
