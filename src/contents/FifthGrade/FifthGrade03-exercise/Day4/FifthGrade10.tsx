import React, { useState } from 'react';
import { sendScore } from '@elice/extcontent-apis';
import { postKeyValue } from '@elice/extcontent-apis';
import { getKeyValue } from '@elice/extcontent-apis';

import Styled from '../../style';
import ConfirmBtn from '../../utils/ConfirmBtn';

import type { AnswersType } from '../../Type/Type1';

import correctimg from 'src/contents/FifthGrade/fifthImage/correct.png';
import incorrectimg from 'src/contents/FifthGrade/fifthImage/incorrect.png';

const FifthGrade10: React.FC = () => {
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
  });
  const correctAnswers: AnswersType = {
    '1': ['3'],
    '2': ['2'],
    '3': ['3'],
    '4': ['3'],
    '5': ['2'],
    '6': ['2'],
    '7': ['1'],
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
        key: 'fifthGrade40Answers',
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
    getKeyValue({ key: 'fifthGrade40Answers' })
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
      <div className="quizCard11 fontSize25 flexCol gagprajgw">
        <div className="flexRow">
          <div className="add2131 sqerqrmairign cororo">
            <div className="posiAbAb">
              <div className="textCenter heieeiei341">4</div>
              <div className="divlineCSS1"></div>
              <div className="textCenter heiwerlin">8</div>
            </div>
          </div>
          <div className="quxeesw341 flexRow">
            <div className="yosomargin">
              <div className="textCenter">1</div>
              <div className="divlineCSS1"></div>
              <div className="textCenter">2</div>
            </div>
            <div className="yosomargin">
              <div className="textCenter">8</div>
              <div className="divlineCSS"></div>
              <div className="textCenter">16</div>
            </div>
            <div className="yosomargin">
              <div className="textCenter">16</div>
              <div className="divlineCSS"></div>
              <div className="textCenter">40</div>
            </div>
            <div className="yosomargin">
              <div className="textCenter">30</div>
              <div className="divlineCSS"></div>
              <div className="textCenter">80</div>
            </div>
            <div className="yosomargin">
              <div className="textCenter">60</div>
              <div className="divlineCSS6"></div>
              <div className="textCenter">120</div>
            </div>
          </div>
          <div className="afwe3513">
            <input
              disabled={isInputDisabled}
              value={answers['1'][0]}
              onChange={e => handleChange('1', 0, e.target.value)}
              type="text"
              className="averageInput"
            />{' '}
            {showResults && (
              <div>
                {isCorrect('1') ? (
                  <div>
                    <img
                      className="answerImg51"
                      src={correctimg}
                      alt="Correct"
                    />
                  </div>
                ) : (
                  <div>
                    <img
                      className="answerImg51"
                      src={incorrectimg}
                      alt="Incorrect"
                    />
                  </div>
                )}
              </div>
            )}{' '}
          </div>
        </div>
        <div className="flexRow">
          <div className="add2131 sqerqrmairign cororo">
            <div className="posiAbAb">
              <div className="textCenter heieeiei341">15</div>
              <div className="divlineCSS"></div>
              <div className="textCenter heiwerlin">18</div>
            </div>
          </div>
          <div className="quxeesw341 flexRow">
            <div className="yosomargin">
              <div className="textCenter">2</div>
              <div className="divlineCSS1"></div>
              <div className="textCenter">3</div>
            </div>
            <div className="yosomargin">
              <div className="textCenter">5</div>
              <div className="divlineCSS1"></div>
              <div className="textCenter">6</div>
            </div>
            <div className="yosomargin">
              <div className="textCenter">30</div>
              <div className="divlineCSS"></div>
              <div className="textCenter">48</div>
            </div>
            <div className="yosomargin">
              <div className="textCenter">45</div>
              <div className="divlineCSS"></div>
              <div className="textCenter">54</div>
            </div>
            <div className="yosomargin">
              <div className="textCenter">50</div>
              <div className="divlineCSS"></div>
              <div className="textCenter">72</div>
            </div>
          </div>
          <div className="afwe3513">
            <input
              disabled={isInputDisabled}
              value={answers['2'][0]}
              onChange={e => handleChange('2', 0, e.target.value)}
              type="text"
              className="averageInput"
            />{' '}
            {showResults && (
              <div>
                {isCorrect('2') ? (
                  <div>
                    <img
                      className="answerImg51"
                      src={correctimg}
                      alt="Correct"
                    />
                  </div>
                ) : (
                  <div>
                    <img
                      className="answerImg51"
                      src={incorrectimg}
                      alt="Incorrect"
                    />
                  </div>
                )}
              </div>
            )}{' '}
          </div>
        </div>
        <div className="flexRow">
          <div className="add2131 sqerqrmairign cororo">
            <div className="posiAbAb">
              <div className="textCenter heieeiei341">20</div>
              <div className="divlineCSS"></div>
              <div className="textCenter heiwerlin">24</div>
            </div>
          </div>
          <div className="quxeesw341 flexRow">
            <div className="yosomargin">
              <div className="textCenter">5</div>
              <div className="divlineCSS1"></div>
              <div className="textCenter">6</div>
            </div>
            <div className="yosomargin">
              <div className="textCenter">6</div>
              <div className="divlineCSS"></div>
              <div className="textCenter">10</div>
            </div>
            <div className="yosomargin">
              <div className="textCenter">10</div>
              <div className="divlineCSS"></div>
              <div className="textCenter">12</div>
            </div>
            <div className="yosomargin">
              <div className="textCenter">65</div>
              <div className="divlineCSS"></div>
              <div className="textCenter">75</div>
            </div>
            <div className="yosomargin">
              <div className="textCenter">100</div>
              <div className="divlineCSS6"></div>
              <div className="textCenter">120</div>
            </div>
          </div>
          <div className="afwe3513">
            <input
              disabled={isInputDisabled}
              value={answers['3'][0]}
              onChange={e => handleChange('3', 0, e.target.value)}
              type="text"
              className="averageInput"
            />{' '}
            {showResults && (
              <div>
                {isCorrect('3') ? (
                  <div>
                    <img
                      className="answerImg51"
                      src={correctimg}
                      alt="Correct"
                    />
                  </div>
                ) : (
                  <div>
                    <img
                      className="answerImg51"
                      src={incorrectimg}
                      alt="Incorrect"
                    />
                  </div>
                )}
              </div>
            )}{' '}
          </div>
        </div>
        <div className="flexRow">
          <div className="add2131 sqerqrmairign cororo">
            <div className="posiAbAb">
              <div className="textCenter heieeiei341">10</div>
              <div className="divlineCSS"></div>
              <div className="textCenter heiwerlin">15</div>
            </div>
          </div>
          <div className="quxeesw341 flexRow">
            <div className="yosomargin">
              <div className="textCenter">1</div>
              <div className="divlineCSS1"></div>
              <div className="textCenter">2</div>
            </div>
            <div className="yosomargin">
              <div className="textCenter">2</div>
              <div className="divlineCSS"></div>
              <div className="textCenter">3</div>
            </div>
            <div className="yosomargin">
              <div className="textCenter">20</div>
              <div className="divlineCSS"></div>
              <div className="textCenter">30</div>
            </div>
            <div className="yosomargin">
              <div className="textCenter">60</div>
              <div className="divlineCSS"></div>
              <div className="textCenter">90</div>
            </div>
            <div className="yosomargin">
              <div className="textCenter">120</div>
              <div className="divlineCSS6"></div>
              <div className="textCenter">150</div>
            </div>
          </div>
          <div className="afwe3513">
            <input
              disabled={isInputDisabled}
              value={answers['4'][0]}
              onChange={e => handleChange('4', 0, e.target.value)}
              type="text"
              className="averageInput"
            />{' '}
            {showResults && (
              <div>
                {isCorrect('4') ? (
                  <div>
                    <img
                      className="answerImg51"
                      src={correctimg}
                      alt="Correct"
                    />
                  </div>
                ) : (
                  <div>
                    <img
                      className="answerImg51"
                      src={incorrectimg}
                      alt="Incorrect"
                    />
                  </div>
                )}
              </div>
            )}{' '}
          </div>
        </div>
        <div className="flexRow">
          <div className="add2131 sqerqrmairign cororo">
            <div className="posiAbAb">
              <div className="textCenter heieeiei341">5</div>
              <div className="divlineCSS"></div>
              <div className="textCenter heiwerlin">35</div>
            </div>
          </div>
          <div className="quxeesw341 flexRow">
            <div className="yosomargin">
              <div className="textCenter">1</div>
              <div className="divlineCSS1"></div>
              <div className="textCenter">5</div>
            </div>
            <div className="yosomargin">
              <div className="textCenter">1</div>
              <div className="divlineCSS1"></div>
              <div className="textCenter">7</div>
            </div>
            <div className="yosomargin">
              <div className="textCenter">12</div>
              <div className="divlineCSS"></div>
              <div className="textCenter">70</div>
            </div>
            <div className="yosomargin">
              <div className="textCenter">15</div>
              <div className="divlineCSS"></div>
              <div className="textCenter">100</div>
            </div>
            <div className="yosomargin">
              <div className="textCenter">20</div>
              <div className="divlineCSS6"></div>
              <div className="textCenter">140</div>
            </div>
          </div>
          <div className="afwe3513">
            <input
              disabled={isInputDisabled}
              value={answers['5'][0]}
              onChange={e => handleChange('5', 0, e.target.value)}
              type="text"
              className="averageInput"
            />{' '}
            {showResults && (
              <div>
                {isCorrect('5') ? (
                  <div>
                    <img
                      className="answerImg51"
                      src={correctimg}
                      alt="Correct"
                    />
                  </div>
                ) : (
                  <div>
                    <img
                      className="answerImg51"
                      src={incorrectimg}
                      alt="Incorrect"
                    />
                  </div>
                )}
              </div>
            )}{' '}
          </div>
        </div>
        <div className="flexRow">
          <div className="add2131 sqerqrmairign cororo">
            <div className="posiAbAb">
              <div className="textCenter heieeiei341">24</div>
              <div className="divlineCSS7"></div>
              <div className="textCenter heiwerlin">80</div>
            </div>
          </div>
          <div className="quxeesw341 flexRow">
            <div className="yosomargin">
              <div className="textCenter">3</div>
              <div className="divlineCSS1"></div>
              <div className="textCenter">10</div>
            </div>
            <div className="yosomargin">
              <div className="textCenter">12</div>
              <div className="divlineCSS"></div>
              <div className="textCenter">30</div>
            </div>
            <div className="yosomargin">
              <div className="textCenter">12</div>
              <div className="divlineCSS"></div>
              <div className="textCenter">40</div>
            </div>
            <div className="yosomargin">
              <div className="textCenter">46</div>
              <div className="divlineCSS"></div>
              <div className="textCenter">160</div>
            </div>
            <div className="yosomargin">
              <div className="textCenter">124</div>
              <div className="divlineCSS6"></div>
              <div className="textCenter">180</div>
            </div>
          </div>
          <div className="afwe3513">
            <input
              disabled={isInputDisabled}
              value={answers['6'][0]}
              onChange={e => handleChange('6', 0, e.target.value)}
              type="text"
              className="averageInput"
            />{' '}
            {showResults && (
              <div>
                {isCorrect('6') ? (
                  <div>
                    <img
                      className="answerImg51"
                      src={correctimg}
                      alt="Correct"
                    />
                  </div>
                ) : (
                  <div>
                    <img
                      className="answerImg51"
                      src={incorrectimg}
                      alt="Incorrect"
                    />
                  </div>
                )}
              </div>
            )}{' '}
          </div>
        </div>
        <div className="flexRow">
          <div className="add2131 sqerqrmairign cororo">
            <div className="posiAbAb">
              <div className="textCenter heieeiei341">25</div>
              <div className="divlineCSS7"></div>
              <div className="textCenter heiwerlin">60</div>
            </div>
          </div>
          <div className="quxeesw341 flexRow">
            <div className="yosomargin">
              <div className="textCenter">3</div>
              <div className="divlineCSS1"></div>
              <div className="textCenter">4</div>
            </div>
            <div className="yosomargin">
              <div className="textCenter">16</div>
              <div className="divlineCSS"></div>
              <div className="textCenter">30</div>
            </div>
            <div className="yosomargin">
              <div className="textCenter">5</div>
              <div className="divlineCSS"></div>
              <div className="textCenter">12</div>
            </div>
            <div className="yosomargin">
              <div className="textCenter">100</div>
              <div className="divlineCSS"></div>
              <div className="textCenter">180</div>
            </div>
            <div className="yosomargin">
              <div className="textCenter">60</div>
              <div className="divlineCSS6"></div>
              <div className="textCenter">120</div>
            </div>
          </div>
          <div className="afwe3513">
            <input
              disabled={isInputDisabled}
              value={answers['7'][0]}
              onChange={e => handleChange('7', 0, e.target.value)}
              type="text"
              className="averageInput"
            />{' '}
            {showResults && (
              <div>
                {isCorrect('7') ? (
                  <div>
                    <img
                      className="answerImg51"
                      src={correctimg}
                      alt="Correct"
                    />
                  </div>
                ) : (
                  <div>
                    <img
                      className="answerImg51"
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
      <ConfirmBtn type={type} day={4} handleGrade={handleGrade} />
    </Styled.OneToNine>
  );
};

export default FifthGrade10;
