import React, { useState } from 'react';
import { sendScore } from '@elice/extcontent-apis';
import { postKeyValue } from '@elice/extcontent-apis';
import { getKeyValue } from '@elice/extcontent-apis';

import Styled from '../../style';
import ConfirmBtn from '../../utils/ConfirmBtn';

import type { AnswersType } from '../../Type/Type1';

import correctimg from 'src/contents/FifthGrade/fifthImage/correct.png';
import incorrectimg from 'src/contents/FifthGrade/fifthImage/incorrect.png';

const FifthGrade03: React.FC = () => {
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
  });
  const correctAnswers: AnswersType = {
    '1': ['24'],
    '2': ['6'],
    '3': ['30'],
    '4': ['67'],
    '5': ['13'],
    '6': ['82'],
    '7': ['10'],
    '8': ['30'],
    '9': ['24'],
    '10': ['256'],
    '11': ['30'],
    '12': ['3'],
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
        key: 'fifthGrade03Answers',
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
    getKeyValue({ key: 'fifthGrade03Answers' })
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
        <div className="quiz1">
          <div className="quizCardnocolor">
            <div className="marginTop18 flexRow">
              <p className="quizMargin1131">
                ①{' '}
                {showResults && (
                  <div>
                    {isCorrect('1') ? (
                      <div>
                        <img
                          className="answerImg101"
                          src={correctimg}
                          alt="Correct"
                        />
                      </div>
                    ) : (
                      <div>
                        <img
                          className="answerImg101"
                          src={incorrectimg}
                          alt="Incorrect"
                        />
                      </div>
                    )}
                  </div>
                )}
              </p>
              37 + 15 - 28 ={' '}
              <input
                disabled={isInputDisabled}
                className="inputSize1"
                type="text"
                value={answers['1'][0]}
                onChange={e => handleChange('1', 0, e.target.value)}
              />
            </div>
          </div>
          <div className="quizCardnocolor">
            <div className="marginTop18 flexRow">
              <p className="quizMargin1131">
                ②{' '}
                {showResults && (
                  <div>
                    {isCorrect('2') ? (
                      <div>
                        <img
                          className="answerImg101"
                          src={correctimg}
                          alt="Correct"
                        />
                      </div>
                    ) : (
                      <div>
                        <img
                          className="answerImg101"
                          src={incorrectimg}
                          alt="Incorrect"
                        />
                      </div>
                    )}
                  </div>
                )}
              </p>
              17 + 12 - 8 - 15 ={' '}
              <input
                disabled={isInputDisabled}
                className="inputSize1"
                type="text"
                value={answers['2'][0]}
                onChange={e => handleChange('2', 0, e.target.value)}
              />
            </div>
          </div>
          <div className="quizCardnocolor">
            <div className="marginTop18 flexRow">
              <p className="quizMargin1131">
                ③{' '}
                {showResults && (
                  <div>
                    {isCorrect('3') ? (
                      <div>
                        <img
                          className="answerImg101"
                          src={correctimg}
                          alt="Correct"
                        />
                      </div>
                    ) : (
                      <div>
                        <img
                          className="answerImg101"
                          src={incorrectimg}
                          alt="Incorrect"
                        />
                      </div>
                    )}
                  </div>
                )}
              </p>
              15 - 8 + 23 ={' '}
              <input
                disabled={isInputDisabled}
                className="inputSize1"
                type="text"
                value={answers['3'][0]}
                onChange={e => handleChange('3', 0, e.target.value)}
              />
            </div>
          </div>
          <div className="quizCardnocolor">
            <div className="marginTop18 flexRow">
              <p className="quizMargin1131">
                ④{' '}
                {showResults && (
                  <div>
                    {isCorrect('4') ? (
                      <div>
                        <img
                          className="answerImg101"
                          src={correctimg}
                          alt="Correct"
                        />
                      </div>
                    ) : (
                      <div>
                        <img
                          className="answerImg101"
                          src={incorrectimg}
                          alt="Incorrect"
                        />
                      </div>
                    )}
                  </div>
                )}
              </p>
              45 - 16 + 55 - 7 ={' '}
              <input
                disabled={isInputDisabled}
                className="inputSize1"
                type="text"
                value={answers['4'][0]}
                onChange={e => handleChange('4', 0, e.target.value)}
              />
            </div>
          </div>

          <div className="quizCardnocolor">
            <div className="marginTop18 flexRow">
              <p className="quizMargin1131">
                ⑤{' '}
                {showResults && (
                  <div>
                    {isCorrect('5') ? (
                      <div>
                        <img
                          className="answerImg101"
                          src={correctimg}
                          alt="Correct"
                        />
                      </div>
                    ) : (
                      <div>
                        <img
                          className="answerImg101"
                          src={incorrectimg}
                          alt="Incorrect"
                        />
                      </div>
                    )}
                  </div>
                )}
              </p>
              4 + 17 - 8 ={' '}
              <input
                disabled={isInputDisabled}
                className="inputSize1"
                type="text"
                value={answers['5'][0]}
                onChange={e => handleChange('5', 0, e.target.value)}
              />
            </div>
          </div>
          <div className="quizCardnocolor">
            <div className="marginTop18 flexRow">
              <p className="quizMargin1131">
                ⑥{' '}
                {showResults && (
                  <div>
                    {isCorrect('6') ? (
                      <div>
                        <img
                          className="answerImg101"
                          src={correctimg}
                          alt="Correct"
                        />
                      </div>
                    ) : (
                      <div>
                        <img
                          className="answerImg101"
                          src={incorrectimg}
                          alt="Incorrect"
                        />
                      </div>
                    )}
                  </div>
                )}
              </p>
              110 - 56 - 7 + 35 ={' '}
              <input
                disabled={isInputDisabled}
                className="inputSize1"
                type="text"
                value={answers['6'][0]}
                onChange={e => handleChange('6', 0, e.target.value)}
              />
            </div>
          </div>
          <div className="quizCardnocolor">
            <div className="marginTop18 flexRow">
              <p className="quizMargin1131">
                ⑦{' '}
                {showResults && (
                  <div>
                    {isCorrect('7') ? (
                      <div>
                        <img
                          className="answerImg101"
                          src={correctimg}
                          alt="Correct"
                        />
                      </div>
                    ) : (
                      <div>
                        <img
                          className="answerImg101"
                          src={incorrectimg}
                          alt="Incorrect"
                        />
                      </div>
                    )}
                  </div>
                )}
              </p>
              15 × 6 ÷ 9 ={' '}
              <input
                disabled={isInputDisabled}
                className="inputSize1"
                type="text"
                value={answers['7'][0]}
                onChange={e => handleChange('7', 0, e.target.value)}
              />
            </div>
          </div>
          <div className="quizCardnocolor">
            <div className="marginTop18 flexRow">
              <p className="quizMargin1131">
                ⑧{' '}
                {showResults && (
                  <div>
                    {isCorrect('8') ? (
                      <div>
                        <img
                          className="answerImg101"
                          src={correctimg}
                          alt="Correct"
                        />
                      </div>
                    ) : (
                      <div>
                        <img
                          className="answerImg101"
                          src={incorrectimg}
                          alt="Incorrect"
                        />
                      </div>
                    )}
                  </div>
                )}
              </p>
              48 ÷ 4 × 5 ÷ 2 ={' '}
              <input
                disabled={isInputDisabled}
                className="inputSize1"
                type="text"
                value={answers['8'][0]}
                onChange={e => handleChange('8', 0, e.target.value)}
              />
            </div>
          </div>

          <div className="quizCardnocolor">
            <div className="marginTop18 flexRow">
              <p className="quizMargin1131">
                ⑨{' '}
                {showResults && (
                  <div>
                    {isCorrect('9') ? (
                      <div>
                        <img
                          className="answerImg101"
                          src={correctimg}
                          alt="Correct"
                        />
                      </div>
                    ) : (
                      <div>
                        <img
                          className="answerImg101"
                          src={incorrectimg}
                          alt="Incorrect"
                        />
                      </div>
                    )}
                  </div>
                )}
              </p>
              8 × 12 ÷ 4 ={' '}
              <input
                disabled={isInputDisabled}
                className="inputSize1"
                type="text"
                value={answers['9'][0]}
                onChange={e => handleChange('9', 0, e.target.value)}
              />
            </div>
          </div>
          <div className="quizCardnocolor">
            <div className="marginTop18 flexRow">
              <p className="quizMargin1131">
                ⑩{' '}
                {showResults && (
                  <div>
                    {isCorrect('10') ? (
                      <div>
                        <img
                          className="answerImg101"
                          src={correctimg}
                          alt="Correct"
                        />
                      </div>
                    ) : (
                      <div>
                        <img
                          className="answerImg101"
                          src={incorrectimg}
                          alt="Incorrect"
                        />
                      </div>
                    )}
                  </div>
                )}
              </p>
              56 ÷ 7 × 8 × 4 ={' '}
              <input
                disabled={isInputDisabled}
                className="inputSize1"
                type="text"
                value={answers['10'][0]}
                onChange={e => handleChange('10', 0, e.target.value)}
              />
            </div>
          </div>
          <div className="quizCardnocolor">
            <div className="marginTop18 flexRow">
              <p className="quizMargin1131">
                ⑪{' '}
                {showResults && (
                  <div>
                    {isCorrect('11') ? (
                      <div>
                        <img
                          className="answerImg101"
                          src={correctimg}
                          alt="Correct"
                        />
                      </div>
                    ) : (
                      <div>
                        <img
                          className="answerImg101"
                          src={incorrectimg}
                          alt="Incorrect"
                        />
                      </div>
                    )}
                  </div>
                )}
              </p>
              36 ÷ 6 × 5 ={' '}
              <input
                disabled={isInputDisabled}
                className="inputSize1"
                type="text"
                value={answers['11'][0]}
                onChange={e => handleChange('11', 0, e.target.value)}
              />
            </div>
          </div>
          <div className="quizCardnocolor">
            <div className="marginTop18 flexRow">
              <p className="quizMargin1131">
                ⑫{' '}
                {showResults && (
                  <div>
                    {isCorrect('12') ? (
                      <div>
                        <img
                          className="answerImg101"
                          src={correctimg}
                          alt="Correct"
                        />
                      </div>
                    ) : (
                      <div>
                        <img
                          className="answerImg101"
                          src={incorrectimg}
                          alt="Incorrect"
                        />
                      </div>
                    )}
                  </div>
                )}
              </p>
              5 × 14 × 3 ÷ 70 ={' '}
              <input
                disabled={isInputDisabled}
                className="inputSize1"
                type="text"
                value={answers['12'][0]}
                onChange={e => handleChange('12', 0, e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>
      <ConfirmBtn type={type} day={1} handleGrade={handleGrade} />
    </Styled.OneToNine>
  );
};

export default FifthGrade03;
