import React, { useState } from 'react';
import { sendScore } from '@elice/extcontent-apis';
import { postKeyValue } from '@elice/extcontent-apis';
import { getKeyValue } from '@elice/extcontent-apis';

import Styled from '../../style';
import ConfirmBtn from '../../utils/ConfirmBtn';

import type { AnswersType } from '../../Type/Type1';

import correctimg from 'src/contents/FifthGrade/fifthImage/correct.png';
import incorrectimg from 'src/contents/FifthGrade/fifthImage/incorrect.png';

const FifthGrade05: React.FC = () => {
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
  });
  const correctAnswers: AnswersType = {
    '1': ['2', '3'],
    '2': ['3', '4'],
    '3': ['1', '5'],
    '4': ['3', '4'],
    '5': ['1', '3'],
    '6': ['3', '4'],
    '7': ['8', '9'],
    '8': ['25', '32'],
    '9': ['1', '2'],
    '10': ['2', '3'],
    '11': ['1', '4'],
    '12': ['1', '9'],
    '13': ['1', '3'],
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
        key: 'fifthGrade35Answers',
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
    getKeyValue({ key: 'fifthGrade35Answers' })
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
        <div className="quiz1 afwea">
          <div className="justStart322">
            <div className="marginTop18 flexRow">
              <p className="quizNumber1231"></p>
              <div>
                <div className="fontSize25">
                  <div className="textCenter">12</div>
                  <div className="divlineCSS"></div>
                  <div className="textCenter">36</div>
                </div>
              </div>
              <div className="margintopbotom5px">=</div>
              <div>
                <div className="fontSize25 colorRedOnly322">
                  <div className="textCenter">6</div>
                  <div className="divlineCSS divlineRedColor"></div>
                  <div className="textCenter">18</div>
                </div>
              </div>
              <div className="margintopbotom5px colorRedOnly322">=</div>
              <div>
                <div className="fontSize25 colorRedOnly322">
                  <div className="textCenter">3</div>
                  <div className="divlineCSS divlineRedColor"></div>
                  <div className="textCenter">9</div>
                </div>
              </div>
              <div className="margintopbotom5px colorRedOnly322">=</div>
              <div>
                <div className="fontSize25 colorRedOnly322">
                  <div className="textCenter">1</div>
                  <div className="divlineCSS divlineRedColor"></div>
                  <div className="textCenter">3</div>
                </div>
              </div>
              <div className="margintopbotom5px"></div>
            </div>
          </div>
          <div className="justStart322">
            <div className="marginTop18 flexRow">
              <p className="quizNumber1231">
                ①{' '}
                {showResults && (
                  <div>
                    {isCorrect('1') ? (
                      <div>
                        <img
                          className="answerImg46"
                          src={correctimg}
                          alt="Correct"
                        />
                      </div>
                    ) : (
                      <div>
                        <img
                          className="answerImg46"
                          src={incorrectimg}
                          alt="Incorrect"
                        />
                      </div>
                    )}
                  </div>
                )}{' '}
              </p>
              <div>
                <div className="fontSize25">
                  <div className="textCenter">8</div>
                  <div className="divlineCSS"></div>
                  <div className="textCenter">12</div>
                </div>
              </div>
              <div className="margintopbotom5px">=</div>
              <div>
                <div className="fontSize25 colorRedOnly322">
                  <input
                    disabled={isInputDisabled}
                    value={answers['1'][0]}
                    onChange={e => handleChange('1', 0, e.target.value)}
                    className="averageInput"
                  />
                  <div className="divlineCSS"></div>
                  <input
                    disabled={isInputDisabled}
                    value={answers['1'][1]}
                    onChange={e => handleChange('1', 1, e.target.value)}
                    className="averageInput"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="justStart322">
            <div className="marginTop18 flexRow">
              <p className="quizNumber1231">
                ②{' '}
                {showResults && (
                  <div>
                    {isCorrect('2') ? (
                      <div>
                        <img
                          className="answerImg46"
                          src={correctimg}
                          alt="Correct"
                        />
                      </div>
                    ) : (
                      <div>
                        <img
                          className="answerImg46"
                          src={incorrectimg}
                          alt="Incorrect"
                        />
                      </div>
                    )}
                  </div>
                )}{' '}
              </p>
              <div>
                <div className="fontSize25">
                  <div className="textCenter">6</div>
                  <div className="divlineCSS1"></div>
                  <div className="textCenter">8</div>
                </div>
              </div>
              <div className="margintopbotom5px">=</div>
              <div>
                <div className="fontSize25 colorRedOnly322">
                  <input
                    disabled={isInputDisabled}
                    value={answers['2'][0]}
                    onChange={e => handleChange('2', 0, e.target.value)}
                    className="averageInput"
                  />
                  <div className="divlineCSS"></div>
                  <input
                    disabled={isInputDisabled}
                    value={answers['2'][1]}
                    onChange={e => handleChange('2', 1, e.target.value)}
                    className="averageInput"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="justStart322">
            <div className="marginTop18 flexRow">
              <p className="quizNumber1231">
                ③{' '}
                {showResults && (
                  <div>
                    {isCorrect('3') ? (
                      <div>
                        <img
                          className="answerImg46"
                          src={correctimg}
                          alt="Correct"
                        />
                      </div>
                    ) : (
                      <div>
                        <img
                          className="answerImg46"
                          src={incorrectimg}
                          alt="Incorrect"
                        />
                      </div>
                    )}
                  </div>
                )}{' '}
              </p>
              <div>
                <div className="fontSize25">
                  <div className="textCenter">10</div>
                  <div className="divlineCSS"></div>
                  <div className="textCenter">50</div>
                </div>
              </div>
              <div className="margintopbotom5px">=</div>
              <div>
                <div className="fontSize25 colorRedOnly322">
                  <input
                    disabled={isInputDisabled}
                    value={answers['3'][0]}
                    onChange={e => handleChange('3', 0, e.target.value)}
                    className="averageInput"
                  />
                  <div className="divlineCSS"></div>
                  <input
                    disabled={isInputDisabled}
                    value={answers['3'][1]}
                    onChange={e => handleChange('3', 1, e.target.value)}
                    className="averageInput"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="justStart322">
            <div className="marginTop18 flexRow">
              <p className="quizNumber1231">
                ④{' '}
                {showResults && (
                  <div>
                    {isCorrect('4') ? (
                      <div>
                        <img
                          className="answerImg46"
                          src={correctimg}
                          alt="Correct"
                        />
                      </div>
                    ) : (
                      <div>
                        <img
                          className="answerImg46"
                          src={incorrectimg}
                          alt="Incorrect"
                        />
                      </div>
                    )}
                  </div>
                )}{' '}
              </p>
              <div>
                <div className="fontSize25">
                  <div className="textCenter">36</div>
                  <div className="divlineCSS"></div>
                  <div className="textCenter">48</div>
                </div>
              </div>
              <div className="margintopbotom5px">=</div>
              <div>
                <div className="fontSize25 colorRedOnly322">
                  <input
                    disabled={isInputDisabled}
                    value={answers['4'][0]}
                    onChange={e => handleChange('4', 0, e.target.value)}
                    className="averageInput"
                  />
                  <div className="divlineCSS"></div>
                  <input
                    disabled={isInputDisabled}
                    value={answers['4'][1]}
                    onChange={e => handleChange('4', 1, e.target.value)}
                    className="averageInput"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="justStart322">
            <div className="marginTop18 flexRow">
              <p className="quizNumber1231">
                ⑤{' '}
                {showResults && (
                  <div>
                    {isCorrect('5') ? (
                      <div>
                        <img
                          className="answerImg46"
                          src={correctimg}
                          alt="Correct"
                        />
                      </div>
                    ) : (
                      <div>
                        <img
                          className="answerImg46"
                          src={incorrectimg}
                          alt="Incorrect"
                        />
                      </div>
                    )}
                  </div>
                )}{' '}
              </p>
              <div>
                <div className="fontSize25">
                  <div className="textCenter">24</div>
                  <div className="divlineCSS"></div>
                  <div className="textCenter">72</div>
                </div>
              </div>
              <div className="margintopbotom5px">=</div>
              <div>
                <div className="fontSize25 colorRedOnly322">
                  <input
                    disabled={isInputDisabled}
                    value={answers['5'][0]}
                    onChange={e => handleChange('5', 0, e.target.value)}
                    className="averageInput"
                  />
                  <div className="divlineCSS"></div>
                  <input
                    disabled={isInputDisabled}
                    value={answers['5'][1]}
                    onChange={e => handleChange('5', 1, e.target.value)}
                    className="averageInput"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="justStart322">
            <div className="marginTop18 flexRow">
              <p className="quizNumber1231">
                ⑥{' '}
                {showResults && (
                  <div>
                    {isCorrect('6') ? (
                      <div>
                        <img
                          className="answerImg46"
                          src={correctimg}
                          alt="Correct"
                        />
                      </div>
                    ) : (
                      <div>
                        <img
                          className="answerImg46"
                          src={incorrectimg}
                          alt="Incorrect"
                        />
                      </div>
                    )}
                  </div>
                )}{' '}
              </p>
              <div>
                <div className="fontSize25">
                  <div className="textCenter">60</div>
                  <div className="divlineCSS"></div>
                  <div className="textCenter">80</div>
                </div>
              </div>
              <div className="margintopbotom5px">=</div>
              <div>
                <div className="fontSize25 colorRedOnly322">
                  <input
                    disabled={isInputDisabled}
                    value={answers['6'][0]}
                    onChange={e => handleChange('6', 0, e.target.value)}
                    className="averageInput"
                  />
                  <div className="divlineCSS"></div>
                  <input
                    disabled={isInputDisabled}
                    value={answers['6'][1]}
                    onChange={e => handleChange('6', 1, e.target.value)}
                    className="averageInput"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="justStart322">
            <div className="marginTop18 flexRow">
              <p className="quizNumber1231">
                ⑦{' '}
                {showResults && (
                  <div>
                    {isCorrect('7') ? (
                      <div>
                        <img
                          className="answerImg46"
                          src={correctimg}
                          alt="Correct"
                        />
                      </div>
                    ) : (
                      <div>
                        <img
                          className="answerImg46"
                          src={incorrectimg}
                          alt="Incorrect"
                        />
                      </div>
                    )}
                  </div>
                )}{' '}
              </p>
              <div>
                <div className="fontSize25">
                  <div className="textCenter">64</div>
                  <div className="divlineCSS"></div>
                  <div className="textCenter">72</div>
                </div>
              </div>
              <div className="margintopbotom5px">=</div>
              <div>
                <div className="fontSize25 colorRedOnly322">
                  <input
                    disabled={isInputDisabled}
                    value={answers['7'][0]}
                    onChange={e => handleChange('7', 0, e.target.value)}
                    className="averageInput"
                  />
                  <div className="divlineCSS"></div>
                  <input
                    disabled={isInputDisabled}
                    value={answers['7'][1]}
                    onChange={e => handleChange('7', 1, e.target.value)}
                    className="averageInput"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="justStart322">
            <div className="marginTop18 flexRow">
              <p className="quizNumber1231">
                ⑧{' '}
                {showResults && (
                  <div>
                    {isCorrect('8') ? (
                      <div>
                        <img
                          className="answerImg46"
                          src={correctimg}
                          alt="Correct"
                        />
                      </div>
                    ) : (
                      <div>
                        <img
                          className="answerImg46"
                          src={incorrectimg}
                          alt="Incorrect"
                        />
                      </div>
                    )}
                  </div>
                )}{' '}
              </p>
              <div>
                <div className="fontSize25">
                  <div className="textCenter">50</div>
                  <div className="divlineCSS"></div>
                  <div className="textCenter">64</div>
                </div>
              </div>
              <div className="margintopbotom5px">=</div>
              <div>
                <div className="fontSize25 colorRedOnly322">
                  <input
                    disabled={isInputDisabled}
                    value={answers['8'][0]}
                    onChange={e => handleChange('8', 0, e.target.value)}
                    className="averageInput"
                  />
                  <div className="divlineCSS"></div>
                  <input
                    disabled={isInputDisabled}
                    value={answers['8'][1]}
                    onChange={e => handleChange('8', 1, e.target.value)}
                    className="averageInput"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="justStart322">
            <div className="marginTop18 flexRow">
              <p className="quizNumber1231">
                ⑨{' '}
                {showResults && (
                  <div>
                    {isCorrect('9') ? (
                      <div>
                        <img
                          className="answerImg46"
                          src={correctimg}
                          alt="Correct"
                        />
                      </div>
                    ) : (
                      <div>
                        <img
                          className="answerImg46"
                          src={incorrectimg}
                          alt="Incorrect"
                        />
                      </div>
                    )}
                  </div>
                )}{' '}
              </p>
              <div>
                <div className="fontSize25">
                  <div className="textCenter">42</div>
                  <div className="divlineCSS"></div>
                  <div className="textCenter">84</div>
                </div>
              </div>
              <div className="margintopbotom5px">=</div>
              <div>
                <div className="fontSize25 colorRedOnly322">
                  <input
                    disabled={isInputDisabled}
                    value={answers['9'][0]}
                    onChange={e => handleChange('9', 0, e.target.value)}
                    className="averageInput"
                  />
                  <div className="divlineCSS"></div>
                  <input
                    disabled={isInputDisabled}
                    value={answers['9'][1]}
                    onChange={e => handleChange('9', 1, e.target.value)}
                    className="averageInput"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="justStart322">
            <div className="marginTop18 flexRow">
              <p className="quizNumber1231">
                ⑩{' '}
                {showResults && (
                  <div>
                    {isCorrect('10') ? (
                      <div>
                        <img
                          className="answerImg46"
                          src={correctimg}
                          alt="Correct"
                        />
                      </div>
                    ) : (
                      <div>
                        <img
                          className="answerImg46"
                          src={incorrectimg}
                          alt="Incorrect"
                        />
                      </div>
                    )}
                  </div>
                )}{' '}
              </p>
              <div>
                <div className="fontSize25">
                  <div className="textCenter">48</div>
                  <div className="divlineCSS"></div>
                  <div className="textCenter">72</div>
                </div>
              </div>
              <div className="margintopbotom5px">=</div>
              <div>
                <div className="fontSize25 colorRedOnly322">
                  <input
                    disabled={isInputDisabled}
                    value={answers['10'][0]}
                    onChange={e => handleChange('10', 0, e.target.value)}
                    className="averageInput"
                  />
                  <div className="divlineCSS"></div>
                  <input
                    disabled={isInputDisabled}
                    value={answers['10'][1]}
                    onChange={e => handleChange('10', 1, e.target.value)}
                    className="averageInput"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="justStart322">
            <div className="marginTop18 flexRow">
              <p className="quizNumber1231">
                ⑪{' '}
                {showResults && (
                  <div>
                    {isCorrect('11') ? (
                      <div>
                        <img
                          className="answerImg46"
                          src={correctimg}
                          alt="Correct"
                        />
                      </div>
                    ) : (
                      <div>
                        <img
                          className="answerImg46"
                          src={incorrectimg}
                          alt="Incorrect"
                        />
                      </div>
                    )}
                  </div>
                )}{' '}
              </p>
              <div>
                <div className="fontSize25">
                  <div className="textCenter">25</div>
                  <div className="divlineCSS"></div>
                  <div className="textCenter">100</div>
                </div>
              </div>
              <div className="margintopbotom5px">=</div>
              <div>
                <div className="fontSize25 colorRedOnly322">
                  <input
                    disabled={isInputDisabled}
                    value={answers['11'][0]}
                    onChange={e => handleChange('11', 0, e.target.value)}
                    className="averageInput"
                  />
                  <div className="divlineCSS"></div>
                  <input
                    disabled={isInputDisabled}
                    value={answers['11'][1]}
                    onChange={e => handleChange('11', 1, e.target.value)}
                    className="averageInput"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="justStart322">
            <div className="marginTop18 flexRow">
              <p className="quizNumber1231">
                ⑫{' '}
                {showResults && (
                  <div>
                    {isCorrect('12') ? (
                      <div>
                        <img
                          className="answerImg46"
                          src={correctimg}
                          alt="Correct"
                        />
                      </div>
                    ) : (
                      <div>
                        <img
                          className="answerImg46"
                          src={incorrectimg}
                          alt="Incorrect"
                        />
                      </div>
                    )}
                  </div>
                )}{' '}
              </p>
              <div>
                <div className="fontSize25">
                  <div className="textCenter">16</div>
                  <div className="divlineCSS6"></div>
                  <div className="textCenter">144</div>
                </div>
              </div>
              <div className="margintopbotom5px">=</div>
              <div>
                <div className="fontSize25 colorRedOnly322">
                  <input
                    disabled={isInputDisabled}
                    value={answers['12'][0]}
                    onChange={e => handleChange('12', 0, e.target.value)}
                    className="averageInput"
                  />
                  <div className="divlineCSS"></div>
                  <input
                    disabled={isInputDisabled}
                    value={answers['12'][1]}
                    onChange={e => handleChange('12', 1, e.target.value)}
                    className="averageInput"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="justStart322">
            <div className="marginTop18 flexRow">
              <p className="quizNumber1231">
                ⑬{' '}
                {showResults && (
                  <div>
                    {isCorrect('13') ? (
                      <div>
                        <img
                          className="answerImg46"
                          src={correctimg}
                          alt="Correct"
                        />
                      </div>
                    ) : (
                      <div>
                        <img
                          className="answerImg46"
                          src={incorrectimg}
                          alt="Incorrect"
                        />
                      </div>
                    )}
                  </div>
                )}{' '}
              </p>
              <div>
                <div className="fontSize25">
                  <div className="textCenter">18</div>
                  <div className="divlineCSS"></div>
                  <div className="textCenter">54</div>
                </div>
              </div>
              <div className="margintopbotom5px">=</div>
              <div>
                <div className="fontSize25 colorRedOnly322">
                  <input
                    disabled={isInputDisabled}
                    value={answers['13'][0]}
                    onChange={e => handleChange('13', 0, e.target.value)}
                    className="averageInput"
                  />
                  <div className="divlineCSS"></div>
                  <input
                    disabled={isInputDisabled}
                    value={answers['13'][1]}
                    onChange={e => handleChange('13', 1, e.target.value)}
                    className="averageInput"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ConfirmBtn type={type} day={2} handleGrade={handleGrade} />
    </Styled.OneToNine>
  );
};

export default FifthGrade05;
