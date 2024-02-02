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
    '1': ['', '', '', ''],
    '2': ['', '', '', ''],
    '3': ['', '', '', ''],
    '4': ['', '', '', ''],
  });
  const correctAnswers: AnswersType = {
    '1': ['50', '97', '80', '97'],
    '2': ['39', '23', '13', '55'],
    '3': ['40', '66', '61', '14'],
    '4': ['40', '21', '8', '21'],
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
        key: 'fifthGrade05Answers',
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
    getKeyValue({ key: 'fifthGrade05Answers' })
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
      <div className="grid1222">
        <div className="gridyoso1224">
          <div className="flexRow asdfawef">
            <p className="quizNumber1227">
              ①{' '}
              {showResults && (
                <div>
                  {isCorrect('1') ? (
                    <div>
                      <img
                        className="answerImg1"
                        src={correctimg}
                        alt="Correct"
                      />
                    </div>
                  ) : (
                    <div>
                      <img
                        className="answerImg2"
                        src={incorrectimg}
                        alt="Incorrect"
                      />
                    </div>
                  )}
                </div>
              )}
            </p>
            <div>
              <div className="nottt1123">
                17 + 33 + 47 ={' '}
                <input
                  disabled={isInputDisabled}
                  type="text"
                  value={answers['1'][0]}
                  onChange={e => handleChange('1', 0, e.target.value)}
                  className="input1123"
                />{' '}
                + 47
                <div className="d-line122"></div>
              </div>
              <div className="nottt1123 marginwtwtt">
                ={' '}
                <input
                  disabled={isInputDisabled}
                  type="text"
                  value={answers['1'][1]}
                  onChange={e => handleChange('1', 1, e.target.value)}
                  className="input1123"
                />
              </div>
            </div>
            <div>
              <div className="nottt1123">
                17 + (33 + 47) = 17 +{' '}
                <input
                  disabled={isInputDisabled}
                  type="text"
                  value={answers['1'][2]}
                  onChange={e => handleChange('1', 2, e.target.value)}
                  className="input1123"
                />
                <div className="d-line123"></div>
              </div>
              <div className="nottt1123 marginwtwt">
                ={' '}
                <input
                  disabled={isInputDisabled}
                  type="text"
                  value={answers['1'][3]}
                  onChange={e => handleChange('1', 3, e.target.value)}
                  className="input1123"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="gridyoso1222">
          <div className="flexRow asdfawef">
            <p className="quizNumber1227">
              ②{' '}
              {showResults && (
                <div>
                  {isCorrect('2') ? (
                    <div>
                      <img
                        className="answerImg1"
                        src={correctimg}
                        alt="Correct"
                      />
                    </div>
                  ) : (
                    <div>
                      <img
                        className="answerImg2"
                        src={incorrectimg}
                        alt="Incorrect"
                      />
                    </div>
                  )}
                </div>
              )}
            </p>
            <div>
              <div className="nottt1123">
                68 - 29 - 16 ={' '}
                <input
                  disabled={isInputDisabled}
                  type="text"
                  value={answers['2'][0]}
                  onChange={e => handleChange('2', 0, e.target.value)}
                  className="input1123"
                />{' '}
                - 16
                <div className="d-line122"></div>
              </div>
              <div className="nottt1123 marginwtwt123t">
                ={' '}
                <input
                  disabled={isInputDisabled}
                  type="text"
                  value={answers['2'][1]}
                  onChange={e => handleChange('2', 1, e.target.value)}
                  className="input1123"
                />
              </div>
            </div>
            <div>
              <div className="nottt1123">
                68 - (29 - 16) = 68 -{' '}
                <div className="d-line123 line12222"></div>
                <input
                  disabled={isInputDisabled}
                  type="text"
                  value={answers['2'][2]}
                  onChange={e => handleChange('2', 2, e.target.value)}
                  className="input1123"
                />
              </div>
              <div className="nottt1123 marginwtwtt12">
                ={' '}
                <input
                  disabled={isInputDisabled}
                  type="text"
                  value={answers['2'][3]}
                  onChange={e => handleChange('2', 3, e.target.value)}
                  className="input1123"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="gridyoso1223">
          <div className="flexRow asdfawef">
            <p className="quizNumber1227">
              ③{' '}
              {showResults && (
                <div>
                  {isCorrect('3') ? (
                    <div>
                      <img
                        className="answerImg1"
                        src={correctimg}
                        alt="Correct"
                      />
                    </div>
                  ) : (
                    <div>
                      <img
                        className="answerImg2"
                        src={incorrectimg}
                        alt="Incorrect"
                      />
                    </div>
                  )}
                </div>
              )}
            </p>
            <div>
              <div className="nottt1123">
                75 - 35 + 26 ={' '}
                <input
                  disabled={isInputDisabled}
                  type="text"
                  value={answers['3'][0]}
                  onChange={e => handleChange('3', 0, e.target.value)}
                  className="input1123"
                />{' '}
                + 26
                <div className="d-line122"></div>
              </div>
              <div className="nottt1123 marginwtwtt">
                ={' '}
                <input
                  disabled={isInputDisabled}
                  type="text"
                  value={answers['3'][1]}
                  onChange={e => handleChange('3', 1, e.target.value)}
                  className="input1123"
                />
              </div>
            </div>
            <div>
              <div className="nottt1123">
                75 - (35 + 26) = 75 -{' '}
                <input
                  disabled={isInputDisabled}
                  type="text"
                  value={answers['3'][2]}
                  onChange={e => handleChange('3', 2, e.target.value)}
                  className="input1123"
                />
                <div className="d-line123"></div>
              </div>
              <div className="nottt1123 marginwtwt">
                ={' '}
                <input
                  disabled={isInputDisabled}
                  type="text"
                  value={answers['3'][3]}
                  onChange={e => handleChange('3', 3, e.target.value)}
                  className="input1123"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="gridyoso1224">
          {' '}
          <div className="flexRow asdfawef">
            <p className="quizNumber1227">
              ④{' '}
              {showResults && (
                <div>
                  {isCorrect('4') ? (
                    <div>
                      <img
                        className="answerImg1"
                        src={correctimg}
                        alt="Correct"
                      />
                    </div>
                  ) : (
                    <div>
                      <img
                        className="answerImg2"
                        src={incorrectimg}
                        alt="Incorrect"
                      />
                    </div>
                  )}
                </div>
              )}
            </p>
            <div>
              <div className="nottt1123">
                13 + 27 - 19 ={' '}
                <input
                  disabled={isInputDisabled}
                  type="text"
                  value={answers['4'][0]}
                  onChange={e => handleChange('4', 0, e.target.value)}
                  className="input1123"
                />{' '}
                - 19
                <div className="d-line122"></div>
              </div>
              <div className="nottt1123 marginwtwtt13">
                ={' '}
                <input
                  disabled={isInputDisabled}
                  type="text"
                  value={answers['4'][1]}
                  onChange={e => handleChange('4', 1, e.target.value)}
                  className="input1123"
                />
              </div>
            </div>
            <div>
              <div className="nottt1123">
                13 + (27 - 19) = 13 +{' '}
                <input
                  disabled={isInputDisabled}
                  type="text"
                  value={answers['4'][2]}
                  onChange={e => handleChange('4', 2, e.target.value)}
                  className="input1123"
                />
                <div className="d-line123 line12222"></div>
              </div>
              <div className="nottt1123 marginwtwtt12">
                ={' '}
                <input
                  disabled={isInputDisabled}
                  type="text"
                  value={answers['4'][3]}
                  onChange={e => handleChange('4', 3, e.target.value)}
                  className="input1123"
                />
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
