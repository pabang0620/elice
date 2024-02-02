import React, { useState } from 'react';
import { sendScore } from '@elice/extcontent-apis';
import { postKeyValue } from '@elice/extcontent-apis';
import { getKeyValue } from '@elice/extcontent-apis';

import Styled from '../../style';
import ConfirmBtn from '../../utils/ConfirmBtn';

import type { AnswersType } from '../../Type/Type1';

import correctimg from 'src/contents/FifthGrade/fifthImage/correct.png';
import incorrectimg from 'src/contents/FifthGrade/fifthImage/incorrect.png';

const FifthGrade15: React.FC = () => {
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
    '16': [''],
    '17': [''],
    '18': [''],
  });
  const correctAnswers: AnswersType = {
    '1': ['58'],
    '2': ['56'],
    '3': ['78'],
    '4': ['32'],
    '5': ['75'],
    '6': ['144'],
    '7': ['74'],
    '8': ['85'],
    '9': ['61'],
    '10': ['25'],
    '11': ['13'],
    '12': ['24'],
    '13': ['120'],
    '14': ['80'],
    '15': ['142'],
    '16': ['30'],
    '17': ['132'],
    '18': ['192'],
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
        key: 'fifthGrade30Answers',
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
    getKeyValue({ key: 'fifthGrade30Answers' })
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
        <div className="quizRow3case lakwerfj">
          <div className="quizCard11 quizMargin1922">
            <div className="marginTop18 flexcol">
              <div className="flexRow">
                <div className="fif253numb flexRow">
                  <div>4</div>
                  <div>58</div>
                  <div>72</div>
                </div>
                {showResults && (
                  <div>
                    {isCorrect('1') ? (
                      <div>
                        <img
                          className="answerImg47"
                          src={correctimg}
                          alt="Correct"
                        />
                      </div>
                    ) : (
                      <div>
                        <img
                          className="answerImg47"
                          src={incorrectimg}
                          alt="Incorrect"
                        />
                      </div>
                    )}
                  </div>
                )}{' '}
              </div>

              <div className="justAlignCenter">
                <input
                  disabled={isInputDisabled}
                  value={answers['1'][0]}
                  onChange={e => handleChange('1', 0, e.target.value)}
                  className="fifthQuiz231Input"
                  // placeholder="58"
                />
              </div>
            </div>
          </div>
          <div className="quizCard11 quizMargin1922">
            <div className="marginTop18 flexcol">
              <div className="flexRow">
                <div className="fif253numb flexRow">
                  <div>56</div>
                  <div>6</div>
                  <div>78</div>
                </div>
                {showResults && (
                  <div>
                    {isCorrect('2') ? (
                      <div>
                        <img
                          className="answerImg47"
                          src={correctimg}
                          alt="Correct"
                        />
                      </div>
                    ) : (
                      <div>
                        <img
                          className="answerImg47"
                          src={incorrectimg}
                          alt="Incorrect"
                        />
                      </div>
                    )}
                  </div>
                )}{' '}
              </div>

              <div className="justAlignCenter">
                <input
                  disabled={isInputDisabled}
                  value={answers['2'][0]}
                  onChange={e => handleChange('2', 0, e.target.value)}
                  className="fifthQuiz231Input"
                />{' '}
              </div>
            </div>
          </div>
          <div className="quizCard11 quizMargin1922">
            <div className="marginTop18 flexcol">
              <div className="flexRow">
                <div className="fif253numb flexRow">
                  <div>91</div>
                  <div>78</div>
                  <div>7</div>
                </div>
                {showResults && (
                  <div>
                    {isCorrect('3') ? (
                      <div>
                        <img
                          className="answerImg47"
                          src={correctimg}
                          alt="Correct"
                        />
                      </div>
                    ) : (
                      <div>
                        <img
                          className="answerImg47"
                          src={incorrectimg}
                          alt="Incorrect"
                        />
                      </div>
                    )}
                  </div>
                )}{' '}
              </div>

              <div className="justAlignCenter">
                <input
                  disabled={isInputDisabled}
                  value={answers['3'][0]}
                  onChange={e => handleChange('3', 0, e.target.value)}
                  className="fifthQuiz231Input"
                />{' '}
              </div>
            </div>
          </div>
          <div className="quizCard11 quizMargin1922">
            <div className="marginTop18 flexcol">
              <div className="flexRow">
                <div className="fif253numb flexRow">
                  <div>32</div>
                  <div>63</div>
                  <div>9</div>
                </div>
                {showResults && (
                  <div>
                    {isCorrect('4') ? (
                      <div>
                        <img
                          className="answerImg47"
                          src={correctimg}
                          alt="Correct"
                        />
                      </div>
                    ) : (
                      <div>
                        <img
                          className="answerImg47"
                          src={incorrectimg}
                          alt="Incorrect"
                        />
                      </div>
                    )}
                  </div>
                )}{' '}
              </div>

              <div className="justAlignCenter">
                <input
                  disabled={isInputDisabled}
                  value={answers['4'][0]}
                  onChange={e => handleChange('4', 0, e.target.value)}
                  className="fifthQuiz231Input"
                />{' '}
              </div>
            </div>
          </div>
          <div className="quizCard11 quizMargin1922">
            <div className="marginTop18 flexcol">
              <div className="flexRow">
                <div className="fif253numb flexRow">
                  <div>75</div>
                  <div>13</div>
                  <div>65</div>
                </div>
                {showResults && (
                  <div>
                    {isCorrect('5') ? (
                      <div>
                        <img
                          className="answerImg47"
                          src={correctimg}
                          alt="Correct"
                        />
                      </div>
                    ) : (
                      <div>
                        <img
                          className="answerImg47"
                          src={incorrectimg}
                          alt="Incorrect"
                        />
                      </div>
                    )}
                  </div>
                )}{' '}
              </div>

              <div className="justAlignCenter">
                <input
                  disabled={isInputDisabled}
                  value={answers['5'][0]}
                  onChange={e => handleChange('5', 0, e.target.value)}
                  className="fifthQuiz231Input"
                />{' '}
              </div>
            </div>
          </div>
          <div className="quizCard11 quizMargin1922">
            <div className="marginTop18 flexcol">
              <div className="flexRow">
                <div className="fif253numb flexRow">
                  <div>14</div>
                  <div>114</div>
                  <div>70</div>
                </div>
                {showResults && (
                  <div>
                    {isCorrect('6') ? (
                      <div>
                        <img
                          className="answerImg47"
                          src={correctimg}
                          alt="Correct"
                        />
                      </div>
                    ) : (
                      <div>
                        <img
                          className="answerImg47"
                          src={incorrectimg}
                          alt="Incorrect"
                        />
                      </div>
                    )}
                  </div>
                )}{' '}
              </div>

              <div className="justAlignCenter">
                <input
                  disabled={isInputDisabled}
                  value={answers['6'][0]}
                  onChange={e => handleChange('6', 0, e.target.value)}
                  className="fifthQuiz231Input"
                />{' '}
              </div>
            </div>
          </div>
          <div className="quizCard11 quizMargin1922">
            <div className="marginTop18 flexcol">
              <div className="flexRow">
                <div className="fif253numb flexRow">
                  <div>114</div>
                  <div>18</div>
                  <div>74</div>
                </div>
                {showResults && (
                  <div>
                    {isCorrect('7') ? (
                      <div>
                        <img
                          className="answerImg47"
                          src={correctimg}
                          alt="Correct"
                        />
                      </div>
                    ) : (
                      <div>
                        <img
                          className="answerImg47"
                          src={incorrectimg}
                          alt="Incorrect"
                        />
                      </div>
                    )}
                  </div>
                )}{' '}
              </div>

              <div className="justAlignCenter">
                <input
                  disabled={isInputDisabled}
                  value={answers['7'][0]}
                  onChange={e => handleChange('7', 0, e.target.value)}
                  className="fifthQuiz231Input"
                />{' '}
              </div>
            </div>
          </div>
          <div className="quizCard11 quizMargin1922">
            <div className="marginTop18 flexcol">
              <div className="flexRow">
                <div className="fif253numb flexRow">
                  <div>85</div>
                  <div>120</div>
                  <div>15</div>
                </div>
                {showResults && (
                  <div>
                    {isCorrect('8') ? (
                      <div>
                        <img
                          className="answerImg47"
                          src={correctimg}
                          alt="Correct"
                        />
                      </div>
                    ) : (
                      <div>
                        <img
                          className="answerImg47"
                          src={incorrectimg}
                          alt="Incorrect"
                        />
                      </div>
                    )}
                  </div>
                )}{' '}
              </div>

              <div className="justAlignCenter">
                <input
                  disabled={isInputDisabled}
                  value={answers['8'][0]}
                  onChange={e => handleChange('8', 0, e.target.value)}
                  className="fifthQuiz231Input"
                />{' '}
              </div>
            </div>
          </div>
          <div className="quizCard11 quizMargin1922">
            <div className="marginTop18 flexcol">
              <div className="flexRow">
                <div className="fif253numb flexRow">
                  <div>17</div>
                  <div>61</div>
                  <div>119</div>
                </div>
                {showResults && (
                  <div>
                    {isCorrect('9') ? (
                      <div>
                        <img
                          className="answerImg47"
                          src={correctimg}
                          alt="Correct"
                        />
                      </div>
                    ) : (
                      <div>
                        <img
                          className="answerImg47"
                          src={incorrectimg}
                          alt="Incorrect"
                        />
                      </div>
                    )}
                  </div>
                )}{' '}
              </div>

              <div className="justAlignCenter">
                <input
                  disabled={isInputDisabled}
                  value={answers['9'][0]}
                  onChange={e => handleChange('9', 0, e.target.value)}
                  className="fifthQuiz231Input"
                />{' '}
              </div>
            </div>
          </div>
          <div className="quizCard11 quizMargin1922">
            <div className="marginTop18 flexcol">
              <div className="flexRow">
                <div className="fif253numb flexRow">
                  <div>95</div>
                  <div>25</div>
                  <div>19</div>
                </div>
                {showResults && (
                  <div>
                    {isCorrect('10') ? (
                      <div>
                        <img
                          className="answerImg47"
                          src={correctimg}
                          alt="Correct"
                        />
                      </div>
                    ) : (
                      <div>
                        <img
                          className="answerImg47"
                          src={incorrectimg}
                          alt="Incorrect"
                        />
                      </div>
                    )}
                  </div>
                )}{' '}
              </div>

              <div className="justAlignCenter">
                <input
                  disabled={isInputDisabled}
                  value={answers['10'][0]}
                  onChange={e => handleChange('10', 0, e.target.value)}
                  className="fifthQuiz231Input"
                />{' '}
              </div>
            </div>
          </div>
          <div className="quizCard11 quizMargin1922">
            <div className="marginTop18 flexcol">
              <div className="flexRow">
                <div className="fif253numb flexRow">
                  <div>13</div>
                  <div>121</div>
                  <div>11</div>
                </div>
                {showResults && (
                  <div>
                    {isCorrect('11') ? (
                      <div>
                        <img
                          className="answerImg47"
                          src={correctimg}
                          alt="Correct"
                        />
                      </div>
                    ) : (
                      <div>
                        <img
                          className="answerImg47"
                          src={incorrectimg}
                          alt="Incorrect"
                        />
                      </div>
                    )}
                  </div>
                )}{' '}
              </div>

              <div className="justAlignCenter">
                <input
                  disabled={isInputDisabled}
                  value={answers['11'][0]}
                  onChange={e => handleChange('11', 0, e.target.value)}
                  className="fifthQuiz231Input"
                />{' '}
              </div>
            </div>
          </div>
          <div className="quizCard11 quizMargin1922">
            <div className="marginTop18 flexcol">
              <div className="flexRow">
                <div className="fif253numb flexRow">
                  <div>68</div>
                  <div>24</div>
                  <div>136</div>
                </div>
                {showResults && (
                  <div>
                    {isCorrect('12') ? (
                      <div>
                        <img
                          className="answerImg47"
                          src={correctimg}
                          alt="Correct"
                        />
                      </div>
                    ) : (
                      <div>
                        <img
                          className="answerImg47"
                          src={incorrectimg}
                          alt="Incorrect"
                        />
                      </div>
                    )}
                  </div>
                )}{' '}
              </div>

              <div className="justAlignCenter">
                <input
                  disabled={isInputDisabled}
                  value={answers['12'][0]}
                  onChange={e => handleChange('12', 0, e.target.value)}
                  className="fifthQuiz231Input"
                />{' '}
              </div>
            </div>
          </div>
          <div className="quizCard11 quizMargin1922">
            <div className="marginTop18 flexcol">
              <div className="flexRow">
                <div className="fif253numb flexRow">
                  <div>63</div>
                  <div>120</div>
                  <div>21</div>
                </div>
                {showResults && (
                  <div>
                    {isCorrect('13') ? (
                      <div>
                        <img
                          className="answerImg47"
                          src={correctimg}
                          alt="Correct"
                        />
                      </div>
                    ) : (
                      <div>
                        <img
                          className="answerImg47"
                          src={incorrectimg}
                          alt="Incorrect"
                        />
                      </div>
                    )}
                  </div>
                )}{' '}
              </div>

              <div className="justAlignCenter">
                <input
                  disabled={isInputDisabled}
                  value={answers['13'][0]}
                  onChange={e => handleChange('13', 0, e.target.value)}
                  className="fifthQuiz231Input"
                />{' '}
              </div>
            </div>
          </div>
          <div className="quizCard11 quizMargin1922">
            <div className="marginTop18 flexcol">
              <div className="flexRow">
                <div className="fif253numb flexRow">
                  <div>125</div>
                  <div>80</div>
                  <div>25</div>
                </div>
                {showResults && (
                  <div>
                    {isCorrect('14') ? (
                      <div>
                        <img
                          className="answerImg47"
                          src={correctimg}
                          alt="Correct"
                        />
                      </div>
                    ) : (
                      <div>
                        <img
                          className="answerImg47"
                          src={incorrectimg}
                          alt="Incorrect"
                        />
                      </div>
                    )}
                  </div>
                )}{' '}
              </div>

              <div className="justAlignCenter">
                <input
                  disabled={isInputDisabled}
                  value={answers['14'][0]}
                  onChange={e => handleChange('14', 0, e.target.value)}
                  className="fifthQuiz231Input"
                />{' '}
              </div>
            </div>
          </div>
          <div className="quizCard11 quizMargin1922">
            <div className="marginTop18 flexcol">
              <div className="flexRow">
                <div className="fif253numb flexRow">
                  <div>142</div>
                  <div>22</div>
                  <div>198</div>
                </div>
                {showResults && (
                  <div>
                    {isCorrect('15') ? (
                      <div>
                        <img
                          className="answerImg47"
                          src={correctimg}
                          alt="Correct"
                        />
                      </div>
                    ) : (
                      <div>
                        <img
                          className="answerImg47"
                          src={incorrectimg}
                          alt="Incorrect"
                        />
                      </div>
                    )}
                  </div>
                )}{' '}
              </div>

              <div className="justAlignCenter">
                <input
                  disabled={isInputDisabled}
                  value={answers['15'][0]}
                  onChange={e => handleChange('15', 0, e.target.value)}
                  className="fifthQuiz231Input"
                />{' '}
              </div>
            </div>
          </div>
          <div className="quizCard11 quizMargin1922">
            <div className="marginTop18 flexcol">
              <div className="flexRow">
                <div className="fif253numb flexRow">
                  <div>130</div>
                  <div>30</div>
                  <div>65</div>
                </div>
                {showResults && (
                  <div>
                    {isCorrect('16') ? (
                      <div>
                        <img
                          className="answerImg47"
                          src={correctimg}
                          alt="Correct"
                        />
                      </div>
                    ) : (
                      <div>
                        <img
                          className="answerImg47"
                          src={incorrectimg}
                          alt="Incorrect"
                        />
                      </div>
                    )}
                  </div>
                )}{' '}
              </div>

              <div className="justAlignCenter">
                <input
                  disabled={isInputDisabled}
                  value={answers['16'][0]}
                  onChange={e => handleChange('16', 0, e.target.value)}
                  className="fifthQuiz231Input"
                />{' '}
              </div>
            </div>
          </div>
          <div className="quizCard11 quizMargin1922">
            <div className="marginTop18 flexcol">
              <div className="flexRow">
                <div className="fif253numb flexRow">
                  <div>204</div>
                  <div>132</div>
                  <div>34</div>
                </div>
                {showResults && (
                  <div>
                    {isCorrect('17') ? (
                      <div>
                        <img
                          className="answerImg47"
                          src={correctimg}
                          alt="Correct"
                        />
                      </div>
                    ) : (
                      <div>
                        <img
                          className="answerImg47"
                          src={incorrectimg}
                          alt="Incorrect"
                        />
                      </div>
                    )}
                  </div>
                )}{' '}
              </div>

              <div className="justAlignCenter">
                <input
                  disabled={isInputDisabled}
                  value={answers['17'][0]}
                  onChange={e => handleChange('17', 0, e.target.value)}
                  className="fifthQuiz231Input"
                />{' '}
              </div>
            </div>
          </div>
          <div className="quizCard11 quizMargin1922">
            <div className="marginTop18 flexcol">
              <div className="flexRow">
                <div className="fif253numb flexRow">
                  <div>38</div>
                  <div>266</div>
                  <div>192</div>
                </div>
                {showResults && (
                  <div>
                    {isCorrect('18') ? (
                      <div>
                        <img
                          className="answerImg47"
                          src={correctimg}
                          alt="Correct"
                        />
                      </div>
                    ) : (
                      <div>
                        <img
                          className="answerImg47"
                          src={incorrectimg}
                          alt="Incorrect"
                        />
                      </div>
                    )}
                  </div>
                )}{' '}
              </div>
              <div className="justAlignCenter">
                <input
                  disabled={isInputDisabled}
                  value={answers['18'][0]}
                  onChange={e => handleChange('18', 0, e.target.value)}
                  className="fifthQuiz231Input"
                />{' '}
              </div>
            </div>
          </div>
        </div>
      </div>
      <ConfirmBtn type={type} day={5} handleGrade={handleGrade} />
    </Styled.OneToNine>
  );
};

export default FifthGrade15;
