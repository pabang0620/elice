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

const FifthGrade04: React.FC = () => {
  const [isInputDisabled, setIsInputDisabled] = useState(false);
  const [type, setType] = useState(true);
  const [answers, setAnswers] = useState<AnswersType>({
    '1': [''],
    '2': [''],
    '3': [''],
    '4': [''],
    '5': [''],
  });
  const correctAnswers: AnswersType = {
    '1': ['3'],
    '2': ['1'],
    '3': ['5'],
    '4': ['2'],
    '5': ['1'],
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
        key: 'fifthGrade34Answers',
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
    getKeyValue({ key: 'fifthGrade34Answers' })
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
          분모와 분자를 1을 제외한 그들의 공약수로 나누는 것을 약분한다고
          합니다.
        </div>
        <div>
          <div className="flexRow fontSize25 alignCenter paddingExp">
            <div className="fontSize25">
              <div className="textCenter">8</div>
              <div className="divlineCSS"></div>
              <div className="textCenter">12</div>
            </div>
            <div className="margintopbotom5px fontSize17 marginRight231">
              약분하기
            </div>
            <img className="allowRight marginRight231" src={fifthimg} alt="" />
            <div className="fontSize25">
              <div className="justifyCenter flexRow">
                8 <div className="colorRedOnly">÷ 2</div>
              </div>
              <div className="divlineCSS4"></div>
              <div className="justifyCenter flexRow">
                12 <div className="colorRedOnly">÷ 2</div>
              </div>
            </div>
            <div className="margintopbotom5px">=</div>
            <div className="fontSize25 marginRight231">
              <div className="fontSize25 marginRight231">
                <div className="textCenter">4</div>
                <div className="divlineCSS1"></div>
                <div className="textCenter">6</div>
              </div>
            </div>
            <div className="fontSize25">
              <div className="justifyCenter flexRow">
                8 <div className="colorRedOnly">÷ 4</div>
              </div>
              <div className="divlineCSS4"></div>
              <div className="justifyCenter flexRow">
                12 <div className="colorRedOnly">÷ 4</div>
              </div>
            </div>
            <div className="margintopbotom5px">=</div>
            <div className="fontSize25">
              <div className="fontSize25">
                <div className="textCenter">2</div>
                <div className="divlineCSS1"></div>
                <div className="textCenter">3</div>
              </div>
            </div>
          </div>
        </div>
        <div className="flexRow">
          <div className="fontSize17">
            다음과 같이 분모와 분자의 공약수가 1뿐이어서 더 이상 약분할 수 없는
            분수를 기약분수라고 합니다.
          </div>
        </div>
      </div>
      <div className="quiz32131">
        <div className="flexRow justtispaceArout borderBalck marginbottom666">
          <div className="flexRow">
            <div className="fontSize25 marginRight231"></div>
            <div>
              <div className="fontSize25">
                <div className="textCenter">1</div>
                <div className="divlineCSS1"></div>
                <div className="textCenter">8</div>
              </div>
            </div>
          </div>
          <div className="flexRow">
            <div className="fontSize25 marginRight231"></div>
            <div>
              <div className="fontSize25">
                <div className="textCenter">8</div>
                <div className="divlineCSS"></div>
                <div className="textCenter">12</div>
              </div>
            </div>
          </div>
          <div className="flexRow">
            <div className="fontSize25 marginRight231"></div>
            <div>
              <div className="fontSize25">
                <div className="textCenter">11</div>
                <div className="divlineCSS"></div>
                <div className="textCenter">15</div>
              </div>
            </div>
          </div>
          <div className="flexRow">
            <div className="fontSize25 marginRight231"></div>
            <div>
              <div className="fontSize25">
                <div className="textCenter">4</div>
                <div className="divlineCSS"></div>
                <div className="textCenter">19</div>
              </div>
            </div>
          </div>
          <div className="flexRow">
            <div className="fontSize25 marginRight231"></div>
            <div>
              <div className="fontSize25">
                <div className="textCenter">9</div>
                <div className="divlineCSS"></div>
                <div className="textCenter">24</div>
              </div>
            </div>
          </div>
          <div className="afwe3513">
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
            <input
              disabled={isInputDisabled}
              value={answers['1'][0]}
              onChange={e => handleChange('1', 0, e.target.value)}
              className="averageInput"
              type="text"
              placeholder=""
            />
          </div>
        </div>
        <div className="flexRow justtispaceArout borderBalck marginbottom666">
          <div className="flexRow">
            <div className="fontSize25 marginRight231"></div>
            <div>
              <div className="fontSize25">
                <div className="textCenter">4</div>
                <div className="divlineCSS1"></div>
                <div className="textCenter">6</div>
              </div>
            </div>
          </div>
          <div className="flexRow">
            <div className="fontSize25 marginRight231"></div>
            <div>
              <div className="fontSize25">
                <div className="textCenter">7</div>
                <div className="divlineCSS"></div>
                <div className="textCenter">10</div>
              </div>
            </div>
          </div>
          <div className="flexRow">
            <div className="fontSize25 marginRight231"></div>
            <div>
              <div className="fontSize25">
                <div className="textCenter">6</div>
                <div className="divlineCSS"></div>
                <div className="textCenter">15</div>
              </div>
            </div>
          </div>
          <div className="flexRow">
            <div className="fontSize25 marginRight231"></div>
            <div>
              <div className="fontSize25">
                <div className="textCenter">8</div>
                <div className="divlineCSS"></div>
                <div className="textCenter">32</div>
              </div>
            </div>
          </div>
          <div className="flexRow">
            <div className="fontSize25 marginRight231"></div>
            <div>
              <div className="fontSize25">
                <div className="textCenter">49</div>
                <div className="divlineCSS"></div>
                <div className="textCenter">56</div>
              </div>
            </div>
          </div>
          <div className="afwe3513">
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
            <input
              disabled={isInputDisabled}
              value={answers['2'][0]}
              onChange={e => handleChange('2', 0, e.target.value)}
              className="averageInput"
              type="text"
              placeholder=""
            />
          </div>
        </div>
        <div className="flexRow justtispaceArout borderBalck marginbottom666">
          <div className="flexRow">
            <div className="fontSize25 marginRight231"></div>
            <div>
              <div className="fontSize25">
                <div className="textCenter">3</div>
                <div className="divlineCSS1"></div>
                <div className="textCenter">7</div>
              </div>
            </div>
          </div>
          <div className="flexRow">
            <div className="fontSize25 marginRight231"></div>
            <div>
              <div className="fontSize25">
                <div className="textCenter">9</div>
                <div className="divlineCSS"></div>
                <div className="textCenter">14</div>
              </div>
            </div>
          </div>
          <div className="flexRow">
            <div className="fontSize25 marginRight231"></div>
            <div>
              <div className="fontSize25">
                <div className="textCenter">16</div>
                <div className="divlineCSS"></div>
                <div className="textCenter">27</div>
              </div>
            </div>
          </div>
          <div className="flexRow">
            <div className="fontSize25 marginRight231"></div>
            <div>
              <div className="fontSize25">
                <div className="textCenter">9</div>
                <div className="divlineCSS"></div>
                <div className="textCenter">35</div>
              </div>
            </div>
          </div>
          <div className="flexRow">
            <div className="fontSize25 marginRight231"></div>
            <div>
              <div className="fontSize25">
                <div className="textCenter">17</div>
                <div className="divlineCSS"></div>
                <div className="textCenter">60</div>
              </div>
            </div>
          </div>
          <div className="afwe3513">
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
            <input
              disabled={isInputDisabled}
              value={answers['3'][0]}
              onChange={e => handleChange('3', 0, e.target.value)}
              className="averageInput"
              type="text"
              placeholder=""
            />
          </div>
        </div>
        <div className="flexRow justtispaceArout borderBalck marginbottom666">
          <div className="flexRow">
            <div className="fontSize25 marginRight231"></div>
            <div>
              <div className="fontSize25">
                <div className="textCenter">1</div>
                <div className="divlineCSS1"></div>
                <div className="textCenter">9</div>
              </div>
            </div>
          </div>
          <div className="flexRow">
            <div className="fontSize25 marginRight231"></div>
            <div>
              <div className="fontSize25">
                <div className="textCenter">2</div>
                <div className="divlineCSS"></div>
                <div className="textCenter">14</div>
              </div>
            </div>
          </div>
          <div className="flexRow">
            <div className="fontSize25 marginRight231"></div>
            <div>
              <div className="fontSize25">
                <div className="textCenter">11</div>
                <div className="divlineCSS"></div>
                <div className="textCenter">22</div>
              </div>
            </div>
          </div>
          <div className="flexRow">
            <div className="fontSize25 marginRight231"></div>
            <div>
              <div className="fontSize25">
                <div className="textCenter">13</div>
                <div className="divlineCSS"></div>
                <div className="textCenter">16</div>
              </div>
            </div>
          </div>
          <div className="flexRow">
            <div className="fontSize25 marginRight231"></div>
            <div>
              <div className="fontSize25">
                <div className="textCenter">39</div>
                <div className="divlineCSS"></div>
                <div className="textCenter">91</div>
              </div>
            </div>
          </div>
          <div className="afwe3513">
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
            <input
              disabled={isInputDisabled}
              value={answers['4'][0]}
              onChange={e => handleChange('4', 0, e.target.value)}
              className="averageInput"
              type="text"
              placeholder=""
            />
          </div>
        </div>
        <div className="flexRow justtispaceArout borderBalck marginbottom666">
          <div className="flexRow">
            <div className="fontSize25 marginRight231"></div>
            <div>
              <div className="fontSize25">
                <div className="textCenter">3</div>
                <div className="divlineCSS1"></div>
                <div className="textCenter">9</div>
              </div>
            </div>
          </div>
          <div className="flexRow">
            <div className="fontSize25 marginRight231"></div>
            <div>
              <div className="fontSize25">
                <div className="textCenter">4</div>
                <div className="divlineCSS"></div>
                <div className="textCenter">12</div>
              </div>
            </div>
          </div>
          <div className="flexRow">
            <div className="fontSize25 marginRight231"></div>
            <div>
              <div className="fontSize25">
                <div className="textCenter">5</div>
                <div className="divlineCSS"></div>
                <div className="textCenter">20</div>
              </div>
            </div>
          </div>
          <div className="flexRow">
            <div className="fontSize25 marginRight231"></div>
            <div>
              <div className="fontSize25">
                <div className="textCenter">14</div>
                <div className="divlineCSS"></div>
                <div className="textCenter">61</div>
              </div>
            </div>
          </div>
          <div className="flexRow">
            <div className="fontSize25 marginRight231"></div>
            <div>
              <div className="fontSize25">
                <div className="textCenter">17</div>
                <div className="divlineCSS"></div>
                <div className="textCenter">51</div>
              </div>
            </div>
          </div>
          <div className="afwe3513">
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
            <input
              disabled={isInputDisabled}
              value={answers['5'][0]}
              onChange={e => handleChange('5', 0, e.target.value)}
              className="averageInput"
              type="text"
              placeholder=""
            />
          </div>
        </div>
      </div>
      <ConfirmBtn type={type} day={2} handleGrade={handleGrade} />
    </Styled.OneToNine>
  );
};

export default FifthGrade04;
