import React, { useState } from 'react';
import { sendScore } from '@elice/extcontent-apis';
import { postKeyValue } from '@elice/extcontent-apis';
import { getKeyValue } from '@elice/extcontent-apis';

import Styled from '../../style';
import ConfirmBtn from '../../utils/ConfirmBtn';

import type { AnswersType } from '../../Type/Type1';

import fifthimg1 from 'src/contents/FifthGrade/fifthImage/4-5-2.png';
import correctimg from 'src/contents/FifthGrade/fifthImage/correct.png';
import incorrectimg from 'src/contents/FifthGrade/fifthImage/incorrect.png';

const FifthGrade14: React.FC = () => {
  const [isInputDisabled, setIsInputDisabled] = useState(false);
  const [type, setType] = useState(true);
  const [answers, setAnswers] = useState<AnswersType>({
    '1': ['', ''],
    '2': ['', '', ''],
    '3': ['', ''],
    '4': ['', '', ''],
    '5': ['', ''],
    '6': ['', ''],
    '7': ['', ''],
  });
  const correctAnswers: AnswersType = {
    '1': ['28', '81'],
    '2': ['2', '1', '4'],
    '3': ['1', '5'],
    '4': ['1', '1', '3'],
    '5': ['2', '15'],
    '6': ['5', '36'],
    '7': ['3', '8'],
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
        key: 'fifthGrade59Answers',
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
    getKeyValue({ key: 'fifthGrade59Answers' })
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
      <div className="quiz fontSize25">
        <div className="quizNumber125787">
          <div className="afwe3513 flexRow wef213">
            <p>
              ①&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </p>{' '}
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
            <div className="eaf4515">
              {' '}
              <div className="quiz1546">
                <div className="textCenter">7</div>
                <div className="divlineCSS1"></div>
                <div className="textCenter">9</div>
              </div>
            </div>
            <div className="eaf4516 flexRow">
              <div className="marginlR10px">×</div>
              <div className="quiz1546">
                <div className="textCenter">2</div>
                <div className="divlineCSS1"></div>
                <div className="textCenter">3</div>
              </div>
            </div>
            <div className="eaf451714 flexRow">
              <div className="marginlR10px">×</div>
              <div className="quiz1546">
                <div className="textCenter">2</div>
                <div className="divlineCSS1"></div>
                <div className="textCenter">3</div>
              </div>
            </div>
            <img className="aweijaow" src={fifthimg1} alt="" />
            <div className="flexRow marginLeft3121">
              <div className="marginlR10px">=</div>
              <div className="quiz1546 flexCol">
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
              </div>
            </div>
          </div>
        </div>
        <div className="quizNumber123887">
          <div className="flexRow wef213 afwe3513">
            <p>②&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>{' '}
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
            <div className="eaf4515">
              {' '}
              <div className="quiz1546">
                <div className="textCenter">9</div>
                <div className="divlineCSS7"></div>
                <div className="textCenter">11</div>
              </div>
            </div>
            <div className="eaf4516 flexRow">
              <div className="marginlR10px">×</div>
              <div className="quiz1546">
                <div className="textCenter">3</div>
              </div>
            </div>
            <div className="eaf4517 flexRow">
              <div className="marginlR10px">×</div>
              <div className="quiz1546">
                <div className="textCenter">11</div>
                <div className="divlineCSS7"></div>
                <div className="textCenter">12</div>
              </div>
            </div>
            <img className="aweijaow" src={fifthimg1} alt="" />
            <div className="flexRow marginLeft3121">
              <div className="marginlR10px">=</div>
              <input
                disabled={isInputDisabled}
                value={answers['2'][0]}
                onChange={e => handleChange('2', 0, e.target.value)}
                type="text"
                className="averageInput marginRight239"
              />

              <div className="quiz1546 flexCol">
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
            </div>
          </div>
        </div>
        <div className="quizNumber123887">
          <div className="afwe3513 flexRow wef213">
            <p>
              ③&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </p>{' '}
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
            <div className="eaf4515">
              {' '}
              <div className="quiz1546">
                <div className="textCenter">7</div>
                <div className="divlineCSS1"></div>
                <div className="textCenter">8</div>
              </div>
            </div>
            <div className="eaf4516 flexRow">
              <div className="marginlR10px">×</div>
              <div className="quiz1546">
                <div className="textCenter">2</div>
                <div className="divlineCSS1"></div>
                <div className="textCenter">7</div>
              </div>
            </div>
            <div className="eaf451789 flexRow">
              <div className="marginlR10px">×</div>
              <div className="quiz1546">
                <div className="textCenter">4</div>
                <div className="divlineCSS1"></div>
                <div className="textCenter">5</div>
              </div>
            </div>
            <img className="aweijaow" src={fifthimg1} alt="" />
            <div className="flexRow marginLeft3121">
              <div className="marginlR10px">=</div>
              <div className="quiz1546 flexCol">
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
              </div>
            </div>
          </div>
        </div>
        <div className="quizNumber123887">
          <div className="afwe3513 flexRow wef213">
            <p>
              ④&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </p>{' '}
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
            <div className="eaf4515">
              {' '}
              <div className="quiz1546">
                <div className="textCenter">1</div>
                <div className="divlineCSS1"></div>
                <div className="textCenter">2</div>
              </div>
            </div>
            <div className="eaf4516 flexRow">
              <div className="marginlR10px">×</div>
              <div className="quiz1546">
                <div className="textCenter">4</div>
                <div className="divlineCSS1"></div>
                <div className="textCenter">9</div>
              </div>
            </div>
            <div className="eaf4517149 flexRow">
              <div className="marginlR10px">×</div>
              <div className="quiz1546">
                <div className="textCenter">6</div>
              </div>
            </div>
            <img className="aweijaow" src={fifthimg1} alt="" />
            <div className="flexRow marginLeft3121">
              <div className="marginlR10px">=</div>
              <input
                disabled={isInputDisabled}
                value={answers['4'][0]}
                onChange={e => handleChange('4', 0, e.target.value)}
                type="text"
                className="averageInput marginRight239"
              />

              <div className="quiz1546 flexCol">
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
            </div>
          </div>
        </div>
        <div className="quizNumber123887">
          <div className="afwe3513 flexRow wef213">
            <p>
              ⑤&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </p>{' '}
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
            <div className="eaf4515">
              {' '}
              <div className="quiz1546">
                <div className="textCenter">2</div>
                <div className="divlineCSS1"></div>
                <div className="textCenter">9</div>
              </div>
            </div>
            <div className="eaf4516 flexRow">
              <div className="marginlR10px">×</div>
              <div className="quiz1546">
                <div className="textCenter">2</div>
                <div className="divlineCSS1"></div>
                <div className="textCenter">3</div>
              </div>
            </div>
            <div className="eaf451714 flexRow">
              <div className="marginlR10px">×</div>
              <div className="quiz1546">
                <div className="textCenter">9</div>
                <div className="divlineCSS7"></div>
                <div className="textCenter">10</div>
              </div>
            </div>
            <img className="aweijaow" src={fifthimg1} alt="" />
            <div className="flexRow marginLeft3121">
              <div className="marginlR10px">=</div>
              <div className="quiz1546 flexCol">
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
            </div>
          </div>
        </div>
        <div className="quizNumber123887">
          <div className="afwe3513 flexRow wef213">
            <p>
              ⑥&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </p>{' '}
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
            <div className="eaf4515">
              {' '}
              <div className="quiz1546">
                <div className="textCenter">2</div>
                <div className="divlineCSS1"></div>
                <div className="textCenter">3</div>
              </div>
            </div>
            <div className="eaf4516 flexRow">
              <div className="marginlR10px">×</div>
              <div className="quiz1546">
                <div className="textCenter">1</div>
                <div className="divlineCSS1"></div>
                <div className="textCenter">4</div>
              </div>
            </div>
            <div className="eaf451714 flexRow">
              <div className="marginlR10px">×</div>
              <div className="quiz1546">
                <div className="textCenter">5</div>
                <div className="divlineCSS1"></div>
                <div className="textCenter">6</div>
              </div>
            </div>
            <img className="aweijaow" src={fifthimg1} alt="" />
            <div className="flexRow marginLeft3121">
              <div className="marginlR10px">=</div>
              <div className="quiz1546 flexCol">
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
            </div>
          </div>
        </div>
        <div className="quizNumber123887">
          <div className="afwe3513 flexRow wef213">
            <p>
              ⑦&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </p>{' '}
            {showResults && (
              <div>
                {isCorrect('7') ? (
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
            <div className="eaf4515">
              {' '}
              <div className="quiz1546">
                <div className="textCenter">3</div>
                <div className="divlineCSS1"></div>
                <div className="textCenter">4</div>
              </div>
            </div>
            <div className="eaf4516 flexRow">
              <div className="marginlR10px">×</div>
              <div className="quiz1546">
                <div className="textCenter">5</div>
              </div>
            </div>
            <div className="eaf4517 flexRow">
              <div className="marginlR10px">×</div>
              <div className="quiz1546">
                <div className="textCenter">1</div>
                <div className="divlineCSS7"></div>
                <div className="textCenter">10</div>
              </div>
            </div>
            <img className="aweijaow" src={fifthimg1} alt="" />
            <div className="flexRow marginLeft3121">
              <div className="marginlR10px">=</div>
              <div className="quiz1546 flexCol">
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
            </div>
          </div>
        </div>
      </div>
      <ConfirmBtn type={type} day={5} handleGrade={handleGrade} />
    </Styled.OneToNine>
  );
};

export default FifthGrade14;
