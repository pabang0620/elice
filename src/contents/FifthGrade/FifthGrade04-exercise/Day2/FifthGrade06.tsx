import React, { useState } from 'react';
import { sendScore } from '@elice/extcontent-apis';
import { postKeyValue } from '@elice/extcontent-apis';
import { getKeyValue } from '@elice/extcontent-apis';

import Styled from '../../style';
import ConfirmBtn from '../../utils/ConfirmBtn';

import type { AnswersType } from '../../Type/Type1';

import fifthimg1 from 'src/contents/FifthGrade/fifthImage/4-2-3.png';
import correctimg from 'src/contents/FifthGrade/fifthImage/correct.png';
import incorrectimg from 'src/contents/FifthGrade/fifthImage/incorrect.png';

const FifthGrade06: React.FC = () => {
  const [isInputDisabled, setIsInputDisabled] = useState(false);
  const [type, setType] = useState(true);
  const [answers, setAnswers] = useState<AnswersType>({
    '1': ['', ''],
    '2': ['', ''],
    '3': ['', ''],
    '4': ['', ''],
    '5': ['', ''],
    '6': ['', ''],
  });
  const correctAnswers: AnswersType = {
    '1': ['1', '6'],
    '2': ['1', '6'],
    '3': ['1', '6'],
    '4': ['3', '7'],
    '5': ['14', '15'],
    '6': ['13', '22'],
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
        key: 'fifthGrade51Answers',
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
    getKeyValue({ key: 'fifthGrade51Answers' })
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
      <div className="quiz3 fontSize25 qwe3929398">
        <div className="">
          <p className="iuaoerij afwe3513">
            ①{' '}
            {showResults && (
              <div>
                {isCorrect('1') ? (
                  <div>
                    <img
                      className="answerImg23"
                      src={correctimg}
                      alt="Correct"
                    />
                  </div>
                ) : (
                  <div>
                    <img
                      className="answerImg23"
                      src={incorrectimg}
                      alt="Incorrect"
                    />
                  </div>
                )}
              </div>
            )}{' '}
          </p>
          <div className="wef213 justifyCenter">
            <img className="awefaSize" src={fifthimg1} alt="" />
            <div className="awefawrpos imgAbp1">
              <div>
                <div className="textCenter">3</div>
                <div className="divlineCSS1"></div>
                <div className="textCenter">8</div>
              </div>
            </div>
            <div className="awefawrpos imgAbp2">
              <div>
                <div className="textCenter">4</div>
                <div className="divlineCSS1"></div>
                <div className="textCenter">9</div>
              </div>
            </div>
            <div className="awefawrpos imgAbp3">
              <div>
                <div className="textCenter">1</div>
                <div className="divlineCSS1"></div>
                <div className="textCenter">6</div>
              </div>
            </div>
            <div className="awefawrpos imgAbp4">
              <div>
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
        <div className="">
          <p className="iuaoerij afwe3513">
            ②{' '}
            {showResults && (
              <div>
                {isCorrect('2') ? (
                  <div>
                    <img
                      className="answerImg23"
                      src={correctimg}
                      alt="Correct"
                    />
                  </div>
                ) : (
                  <div>
                    <img
                      className="answerImg23"
                      src={incorrectimg}
                      alt="Incorrect"
                    />
                  </div>
                )}
              </div>
            )}{' '}
          </p>
          <div className="wef213 justifyCenter">
            <img className="awefaSize" src={fifthimg1} alt="" />
            <div className="awefawrpos imgAbp1">
              <div>
                <div className="textCenter">2</div>
                <div className="divlineCSS1"></div>
                <div className="textCenter">5</div>
              </div>
            </div>
            <div className="awefawrpos imgAbp2">
              <div>
                <div className="textCenter">2</div>
                <div className="divlineCSS1"></div>
                <div className="textCenter">5</div>
              </div>
            </div>
            <div className="awefawrpos imgAbp7">
              <div>
                <div className="textCenter">5</div>
                <div className="divlineCSS7"></div>
                <div className="textCenter">12</div>
              </div>
            </div>
            <div className="awefawrpos imgAbp4">
              <div>
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
              </div>
            </div>
          </div>
        </div>{' '}
        <div className="">
          <p className="iuaoerij afwe3513">
            ③{' '}
            {showResults && (
              <div>
                {isCorrect('3') ? (
                  <div>
                    <img
                      className="answerImg23"
                      src={correctimg}
                      alt="Correct"
                    />
                  </div>
                ) : (
                  <div>
                    <img
                      className="answerImg23"
                      src={incorrectimg}
                      alt="Incorrect"
                    />
                  </div>
                )}
              </div>
            )}{' '}
          </p>
          <div className="wef213 justifyCenter">
            <img className="awefaSize" src={fifthimg1} alt="" />
            <div className="awefawrpos imgAbp1">
              <div>
                <div className="textCenter">3</div>
                <div className="divlineCSS1"></div>
                <div className="textCenter">4</div>
              </div>
            </div>
            <div className="awefawrpos imgAbp2">
              <div>
                <div className="textCenter">2</div>
                <div className="divlineCSS1"></div>
                <div className="textCenter">9</div>
              </div>
            </div>
            <div className="awefawrpos imgAbp7">
              <div>
                <div className="textCenter">1</div>
                <div className="divlineCSS7"></div>
                <div className="textCenter">10</div>
              </div>
            </div>
            <div className="awefawrpos imgAbp4">
              <div>
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
        </div>{' '}
        <div className="">
          <p className="iuaoerij afwe3513">
            ④{' '}
            {showResults && (
              <div>
                {isCorrect('4') ? (
                  <div>
                    <img
                      className="answerImg23"
                      src={correctimg}
                      alt="Correct"
                    />
                  </div>
                ) : (
                  <div>
                    <img
                      className="answerImg23"
                      src={incorrectimg}
                      alt="Incorrect"
                    />
                  </div>
                )}
              </div>
            )}{' '}
          </p>
          <div className="wef213 justifyCenter">
            <img className="awefaSize" src={fifthimg1} alt="" />
            <div className="awefawrpos imgAbp1">
              <div>
                <div className="textCenter">2</div>
                <div className="divlineCSS1"></div>
                <div className="textCenter">5</div>
              </div>
            </div>
            <div className="awefawrpos imgAbp6">
              <div>
                <div className="textCenter">15</div>
                <div className="divlineCSS7"></div>
                <div className="textCenter">14</div>
              </div>
            </div>
            <div className="awefawrpos imgAbp3">
              <div>
                <div className="textCenter">2</div>
                <div className="divlineCSS1"></div>
                <div className="textCenter">7</div>
              </div>
            </div>
            <div className="awefawrpos imgAbp4">
              <div>
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
              </div>
            </div>
          </div>
        </div>{' '}
        <div className="">
          <p className="iuaoerij afwe3513">
            ⑤{' '}
            {showResults && (
              <div>
                {isCorrect('5') ? (
                  <div>
                    <img
                      className="answerImg23"
                      src={correctimg}
                      alt="Correct"
                    />
                  </div>
                ) : (
                  <div>
                    <img
                      className="answerImg23"
                      src={incorrectimg}
                      alt="Incorrect"
                    />
                  </div>
                )}
              </div>
            )}{' '}
          </p>
          <div className="wef213 justifyCenter">
            <img className="awefaSize" src={fifthimg1} alt="" />
            <div className="awefawrpos imgAbp5">
              <div>
                <div className="textCenter">7</div>
                <div className="divlineCSS7"></div>
                <div className="textCenter">12</div>
              </div>
            </div>
            <div className="awefawrpos imgAbp6">
              <div>
                <div className="textCenter">5</div>
                <div className="divlineCSS7"></div>
                <div className="textCenter">14</div>
              </div>
            </div>
            <div className="awefawrpos imgAbp3">
              <div>
                <div className="textCenter">8</div>
                <div className="divlineCSS1"></div>
                <div className="textCenter">5</div>
              </div>
            </div>
            <div className="awefawrpos imgAbp4">
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
            </div>
          </div>
        </div>{' '}
        <div className="">
          <p className="iuaoerij afwe3513">
            ⑥{' '}
            {showResults && (
              <div>
                {isCorrect('6') ? (
                  <div>
                    <img
                      className="answerImg23"
                      src={correctimg}
                      alt="Correct"
                    />
                  </div>
                ) : (
                  <div>
                    <img
                      className="answerImg23"
                      src={incorrectimg}
                      alt="Incorrect"
                    />
                  </div>
                )}
              </div>
            )}{' '}
          </p>
          <div className="wef213 justifyCenter">
            <img className="awefaSize" src={fifthimg1} alt="" />
            <div className="awefawrpos imgAbp5">
              <div>
                <div className="textCenter">13</div>
                <div className="divlineCSS7"></div>
                <div className="textCenter">28</div>
              </div>
            </div>
            <div className="awefawrpos imgAbp2">
              <div>
                <div className="textCenter">2</div>
                <div className="divlineCSS1"></div>
                <div className="textCenter">5</div>
              </div>
            </div>
            <div className="awefawrpos imgAbp7">
              <div>
                <div className="textCenter">14</div>
                <div className="divlineCSS7"></div>
                <div className="textCenter">11</div>
              </div>
            </div>
            <div className="awefawrpos imgAbp4">
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
            </div>
          </div>
        </div>
      </div>
      <ConfirmBtn type={type} day={2} handleGrade={handleGrade} />
    </Styled.OneToNine>
  );
};

export default FifthGrade06;
