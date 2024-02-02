import React, { useState } from 'react';
import { sendScore } from '@elice/extcontent-apis';
import { postKeyValue } from '@elice/extcontent-apis';
import { getKeyValue } from '@elice/extcontent-apis';

import Styled from '../../style';
import ConfirmBtn from '../../utils/ConfirmBtn';

import type { AnswersType } from '../../Type/Type1';

import fifthimg1 from 'src/contents/FifthGrade/fifthImage/3-1-1_1.png';
import fifthimg2 from 'src/contents/FifthGrade/fifthImage/3-1-1_2.png';
import fifthimg3 from 'src/contents/FifthGrade/fifthImage/3-1-1_3.png';
import fifthimg4 from 'src/contents/FifthGrade/fifthImage/3-1-1_4.png';
import fifthimg5 from 'src/contents/FifthGrade/fifthImage/3-1-1_5.png';
import fifthimg6 from 'src/contents/FifthGrade/fifthImage/3-1-1_6.png';
import fifthimg7 from 'src/contents/FifthGrade/fifthImage/3-1-1_7.png';
import fifthimg8 from 'src/contents/FifthGrade/fifthImage/3-1-1_8.png';
import fifthimg9 from 'src/contents/FifthGrade/fifthImage/3-1-1_9.png';
import fifthimg10 from 'src/contents/FifthGrade/fifthImage/3-1-1_10.png';
import fifthimg11 from 'src/contents/FifthGrade/fifthImage/3-1-1_11.png';
import fifthimg12 from 'src/contents/FifthGrade/fifthImage/3-1-1_12.png';
import fifthimg13 from 'src/contents/FifthGrade/fifthImage/3-1-1_13.png';
import fifthimg14 from 'src/contents/FifthGrade/fifthImage/3-1-1_14.png';
import fifthimg15 from 'src/contents/FifthGrade/fifthImage/3-1-1_15.png';
import correctimg from 'src/contents/FifthGrade/fifthImage/correct.png';
import incorrectimg from 'src/contents/FifthGrade/fifthImage/incorrect.png';

const FifthGrade01: React.FC = () => {
  const [isInputDisabled, setIsInputDisabled] = useState(false);
  const [type, setType] = useState(true);
  const [answers, setAnswers] = useState<AnswersType>({
    '1': ['', '', '', '', '', ''],
    '2': ['', '', '', '', '', ''],
    '3': ['', '', '', '', '', ''],
    '4': ['', '', '', '', '', ''],
    '5': ['', '', '', '', '', ''],
  });
  const correctAnswers: AnswersType = {
    '1': ['1', '3', '2', '6', '4', '12'],
    '2': ['1', '2', '2', '4', '4', '8'],
    '3': ['3', '4', '6', '8', '12', '16'],
    '4': ['1', '2', '3', '6', '5', '10'],
    '5': ['1', '3', '2', '6', '3', '9'],
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
        key: 'fifthGrade31Answers',
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
    getKeyValue({ key: 'fifthGrade31Answers' })
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
        <div className="quiz3111">
          <div className="flexRow">
            <p className="fontSize25 wef213 number3111 ">
              ①{' '}
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
            </p>
            <div className="box311all">
              <div className="flexRow">
                <img src={fifthimg1} alt="" className="imgSize3111" />
                <div>
                  <div>
                    <input
                      disabled={isInputDisabled}
                      value={answers['1'][0]}
                      onChange={e => handleChange('1', 0, e.target.value)}
                      type="text"
                      className="averageInput"
                      placeholder="1"
                    />
                  </div>
                  <div className="divlineCSS"></div>
                  <div>
                    <input
                      disabled={isInputDisabled}
                      value={answers['1'][1]}
                      onChange={e => handleChange('1', 1, e.target.value)}
                      type="text"
                      className="averageInput"
                      placeholder="3"
                    />
                  </div>
                </div>
              </div>
              <div className="flexRow">
                <img src={fifthimg2} alt="" className="imgSize3111" />
                <div>
                  <div>
                    <input
                      disabled={isInputDisabled}
                      value={answers['1'][2]}
                      onChange={e => handleChange('1', 2, e.target.value)}
                      type="text"
                      className="averageInput"
                    />
                  </div>
                  <div className="divlineCSS"></div>
                  <div>
                    <input
                      disabled={isInputDisabled}
                      value={answers['1'][3]}
                      onChange={e => handleChange('1', 3, e.target.value)}
                      type="text"
                      className="averageInput"
                    />
                  </div>
                </div>
              </div>
              <div className="flexRow">
                <img src={fifthimg3} alt="" className="imgSize3111" />
                <div>
                  <div>
                    <input
                      disabled={isInputDisabled}
                      value={answers['1'][4]}
                      onChange={e => handleChange('1', 4, e.target.value)}
                      type="text"
                      className="averageInput"
                    />
                  </div>
                  <div className="divlineCSS"></div>
                  <div>
                    <input
                      disabled={isInputDisabled}
                      value={answers['1'][5]}
                      onChange={e => handleChange('1', 5, e.target.value)}
                      type="text"
                      className="averageInput"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flexRow">
            <p className="fontSize25 wef213 number3112">
              ②{' '}
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
            </p>
            <div className="box311all">
              <div className="flexRow">
                <img src={fifthimg4} alt="" className="imgSize3111" />
                <div>
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
              <div className="flexRow">
                <img src={fifthimg5} alt="" className="imgSize3111" />
                <div>
                  <div>
                    <input
                      disabled={isInputDisabled}
                      value={answers['2'][2]}
                      onChange={e => handleChange('2', 2, e.target.value)}
                      type="text"
                      className="averageInput"
                    />
                  </div>
                  <div className="divlineCSS"></div>
                  <div>
                    <input
                      disabled={isInputDisabled}
                      value={answers['2'][3]}
                      onChange={e => handleChange('2', 3, e.target.value)}
                      type="text"
                      className="averageInput"
                    />
                  </div>
                </div>
              </div>
              <div className="flexRow">
                <img src={fifthimg6} alt="" className="imgSize3111" />
                <div>
                  <div>
                    <input
                      disabled={isInputDisabled}
                      value={answers['2'][4]}
                      onChange={e => handleChange('2', 4, e.target.value)}
                      type="text"
                      className="averageInput"
                    />
                  </div>
                  <div className="divlineCSS"></div>
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
              </div>
            </div>
          </div>
          <div className="flexRow">
            <p className="fontSize25 wef213 number3111">
              ③{' '}
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
            </p>
            <div className="box311all">
              <div className="flexRow">
                <img src={fifthimg7} alt="" className="imgSize3111" />
                <div>
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
              <div className="flexRow">
                <img src={fifthimg8} alt="" className="imgSize3111" />
                <div>
                  <div>
                    <input
                      disabled={isInputDisabled}
                      value={answers['3'][2]}
                      onChange={e => handleChange('3', 2, e.target.value)}
                      type="text"
                      className="averageInput"
                    />
                  </div>
                  <div className="divlineCSS"></div>
                  <div>
                    <input
                      disabled={isInputDisabled}
                      value={answers['3'][3]}
                      onChange={e => handleChange('3', 3, e.target.value)}
                      type="text"
                      className="averageInput"
                    />
                  </div>
                </div>
              </div>
              <div className="flexRow">
                <img src={fifthimg9} alt="" className="imgSize3111" />
                <div>
                  <div>
                    <input
                      disabled={isInputDisabled}
                      value={answers['3'][4]}
                      onChange={e => handleChange('3', 4, e.target.value)}
                      type="text"
                      className="averageInput"
                    />
                  </div>
                  <div className="divlineCSS"></div>
                  <div>
                    <input
                      disabled={isInputDisabled}
                      value={answers['3'][5]}
                      onChange={e => handleChange('3', 5, e.target.value)}
                      type="text"
                      className="averageInput"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="quiz3112">
          <div className="flexRow">
            <p className="fontSize25 wef213 number3113">
              ④{' '}
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
            </p>
            <div className="box311all box31145 flexCol">
              <div className="flexRow marginBottom18 justifyCenter">
                <img src={fifthimg10} alt="" className="imgSize3111" />
                <div>
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
              <div className="flexRow marginBottom18 justifyCenter">
                <img src={fifthimg11} alt="" className="imgSize3111" />
                <div>
                  <div>
                    <input
                      disabled={isInputDisabled}
                      value={answers['4'][2]}
                      onChange={e => handleChange('4', 2, e.target.value)}
                      type="text"
                      className="averageInput"
                    />
                  </div>
                  <div className="divlineCSS"></div>
                  <div>
                    <input
                      disabled={isInputDisabled}
                      value={answers['4'][3]}
                      onChange={e => handleChange('4', 3, e.target.value)}
                      type="text"
                      className="averageInput"
                    />
                  </div>
                </div>
              </div>
              <div className="flexRow marginBottom18 justifyCenter">
                <img src={fifthimg12} alt="" className="imgSize3111" />
                <div>
                  <div>
                    <input
                      disabled={isInputDisabled}
                      value={answers['4'][4]}
                      onChange={e => handleChange('4', 4, e.target.value)}
                      type="text"
                      className="averageInput"
                    />
                  </div>
                  <div className="divlineCSS"></div>
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
              </div>
            </div>
          </div>
          <div className="flexRow">
            <p className="fontSize25 wef213 number3113">
              ⑤{' '}
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
            </p>
            <div className="box311all box31145 flexCol">
              <div className="flexRow marginBottom18 justifyCenter">
                <img src={fifthimg13} alt="" className="imgSize3115" />
                <div>
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
              <div className="flexRow marginBottom18 justifyCenter justifyCenter">
                <img src={fifthimg14} alt="" className="imgSize3115" />
                <div>
                  <div>
                    <input
                      disabled={isInputDisabled}
                      value={answers['5'][2]}
                      onChange={e => handleChange('5', 2, e.target.value)}
                      type="text"
                      className="averageInput"
                    />
                  </div>
                  <div className="divlineCSS"></div>
                  <div>
                    <input
                      disabled={isInputDisabled}
                      value={answers['5'][3]}
                      onChange={e => handleChange('5', 3, e.target.value)}
                      type="text"
                      className="averageInput"
                    />
                  </div>
                </div>
              </div>
              <div className="flexRow marginBottom18 justifyCenter justifyCenter">
                <img src={fifthimg15} alt="" className="imgSize3115" />
                <div>
                  <div>
                    <input
                      disabled={isInputDisabled}
                      value={answers['5'][4]}
                      onChange={e => handleChange('5', 4, e.target.value)}
                      type="text"
                      className="averageInput"
                    />
                  </div>
                  <div className="divlineCSS"></div>
                  <div>
                    <input
                      disabled={isInputDisabled}
                      value={answers['5'][5]}
                      onChange={e => handleChange('5', 5, e.target.value)}
                      type="text"
                      className="averageInput"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ConfirmBtn type={type} day={1} handleGrade={handleGrade} />
    </Styled.OneToNine>
  );
};

export default FifthGrade01;
