import React, { useState } from 'react';
import { sendScore } from '@elice/extcontent-apis';
import { postKeyValue } from '@elice/extcontent-apis';
import { getKeyValue } from '@elice/extcontent-apis';

import Styled from '../../style';
import ConfirmBtn from '../../utils/ConfirmBtn';

import type { AnswersType } from '../../Type/Type1';

import correctimg from 'src/contents/FifthGrade/fifthImage/correct.png';
import incorrectimg from 'src/contents/FifthGrade/fifthImage/incorrect.png';

const FifthGrade11: React.FC = () => {
  const [isInputDisabled, setIsInputDisabled] = useState(false);
  const [type, setType] = useState(true);
  const [answers, setAnswers] = useState<AnswersType>({
    '1': ['', '', ''],
    '2': ['', '', ''],
    '3': ['', '', ''],
    '4': ['', '', ''],
    '5': ['', '', ''],
  });
  const correctAnswers: AnswersType = {
    '1': ['17', '5', '12'],
    '2': ['14', '5', '9'],
    '3': ['12', '6', '6'],
    '4': ['9', '4', '5'],
    '5': ['8', '3', '5'],
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
        key: 'fifthGrade26Answers',
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
    getKeyValue({ key: 'fifthGrade26Answers' })
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
      <div className="quizAll asdfasdf242">
        <div className="quiz241Ex">
          <div className="flexcol nowrap1">
            <div className="flexcol nowrap1">
              <div className="textLLeft fontSize20">
                28보다 크고 57보다 작은 수 중에서 3의 배수의 개수
              </div>
              <div className="flexRow quizNumber123522">
                <div className="borderColor233 margin2410 quizNumber1235">
                  18
                </div>
                -
                <div className="borderColor233 margin2410 quizNumber1235">
                  9
                </div>
                =
                <div className="borderColor233 margin2410 quizNumber1235">
                  9
                </div>
                (개)
              </div>
              <div className="flexRow">
                <div className="Red233 fontSize20">56÷3=18…2</div>
                <div className="Red233 fontSize20 marginwerq2452">28÷3=9…1</div>
              </div>
            </div>
            <div className="flexcol elemet2411">
              <p className="fontSize20">
                1에서 56까지 3의 배수가 18개, 1에서 28까지 3의 배수가 9개이므로
                29에서 56까지의 수에는 3의 배수는 모두 18-9=9(개)가 있습니다.
              </p>
            </div>
          </div>
        </div>
        <div className="marginTop231 lakwerfj3214">
          <div className="quizNumber123887">
            <p className="fontSize20 afwe3513">
              ① 21보다 크고 70보다 작은 수 중에서 4의 배수의 개수
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
          </div>
          <div className="fontSize25 flexRow marginleft2421">
            <input
              disabled={isInputDisabled}
              value={answers['1'][0]}
              onChange={e => handleChange('1', 0, e.target.value)}
              className="borderColor233 quizNumber1235"
              type="text"
              name=""
              id=""
            />
            <div className="">-</div>
            <input
              disabled={isInputDisabled}
              value={answers['1'][1]}
              onChange={e => handleChange('1', 1, e.target.value)}
              className="borderColor233 quizNumber1235"
              type="text"
              name=""
              id=""
            />
            <div className="">=</div>
            <input
              disabled={isInputDisabled}
              value={answers['1'][2]}
              onChange={e => handleChange('1', 2, e.target.value)}
              className="borderColor233 quizNumber1235"
              type="text"
              name=""
              id=""
            />{' '}
            (개)
          </div>
        </div>
        <div className="marginTop231">
          <div className="quizNumber123887">
            <p className="fontSize20 afwe3513">
              ② 35보다 크고 90보다 작은 수 중에서 6의 배수의 개수
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
          </div>
          <div className="fontSize25 flexRow marginleft2421">
            <input
              disabled={isInputDisabled}
              value={answers['2'][0]}
              onChange={e => handleChange('2', 0, e.target.value)}
              className="borderColor233 quizNumber1235"
              type="text"
              name=""
              id=""
            />
            <div className="">-</div>
            <input
              disabled={isInputDisabled}
              value={answers['2'][1]}
              onChange={e => handleChange('2', 1, e.target.value)}
              className="borderColor233 quizNumber1235"
              type="text"
              name=""
              id=""
            />
            <div className="">=</div>
            <input
              disabled={isInputDisabled}
              value={answers['2'][2]}
              onChange={e => handleChange('2', 2, e.target.value)}
              className="borderColor233 quizNumber1235"
              type="text"
              name=""
              id=""
            />{' '}
            (개)
          </div>
        </div>
        <div className="marginTop231">
          <div className="quizNumber123887">
            <p className="fontSize20 afwe3513">
              ③ 50보다 크고 100보다 작은 수 중에서 8의 배수의 개수
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
          </div>
          <div className="fontSize25 flexRow marginleft2421">
            <input
              disabled={isInputDisabled}
              value={answers['3'][0]}
              onChange={e => handleChange('3', 0, e.target.value)}
              className="borderColor233 quizNumber1235"
              type="text"
              name=""
              id=""
            />
            <div className="">-</div>
            <input
              disabled={isInputDisabled}
              value={answers['3'][1]}
              onChange={e => handleChange('3', 1, e.target.value)}
              className="borderColor233 quizNumber1235"
              type="text"
              name=""
              id=""
            />
            <div className="">=</div>
            <input
              disabled={isInputDisabled}
              value={answers['3'][2]}
              onChange={e => handleChange('3', 2, e.target.value)}
              className="borderColor233 quizNumber1235"
              type="text"
              name=""
              id=""
            />{' '}
            (개)
          </div>
        </div>
        <div className="marginTop231">
          <div className="quizNumber123887">
            <p className="fontSize20 afwe3513">
              ④ 40보다 크고 90보다 작은 수 중에서 9의 배수의 개수
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
          </div>
          <div className="fontSize25 flexRow marginleft2421">
            <input
              disabled={isInputDisabled}
              value={answers['4'][0]}
              onChange={e => handleChange('4', 0, e.target.value)}
              className="borderColor233 quizNumber1235"
              type="text"
              name=""
              id=""
            />
            <div className="">-</div>
            <input
              disabled={isInputDisabled}
              value={answers['4'][1]}
              onChange={e => handleChange('4', 1, e.target.value)}
              className="borderColor233 quizNumber1235"
              type="text"
              name=""
              id=""
            />
            <div className="">=</div>
            <input
              disabled={isInputDisabled}
              value={answers['4'][2]}
              onChange={e => handleChange('4', 2, e.target.value)}
              className="borderColor233 quizNumber1235"
              type="text"
              name=""
              id=""
            />{' '}
            (개)
          </div>
        </div>
        <div className="marginTop231">
          <div className="quizNumber123887">
            <p className="fontSize20 afwe3513 awfe139825982">
              ⑤ 37보다 크고 100보다 작은 수 중에서 12의 배수의 개수
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
          </div>
          <div className="fontSize25 flexRow marginleft2421 ">
            <input
              disabled={isInputDisabled}
              value={answers['5'][0]}
              onChange={e => handleChange('5', 0, e.target.value)}
              className="borderColor233 quizNumber1235 awfe139825982"
              type="text"
              name=""
              id=""
            />
            <div className="">-</div>
            <input
              disabled={isInputDisabled}
              value={answers['5'][1]}
              onChange={e => handleChange('5', 1, e.target.value)}
              className="borderColor233 quizNumber1235"
              type="text"
              name=""
              id=""
            />
            <div className="">=</div>
            <input
              disabled={isInputDisabled}
              value={answers['5'][2]}
              onChange={e => handleChange('5', 2, e.target.value)}
              className="borderColor233 quizNumber1235"
              type="text"
              name=""
              id=""
            />{' '}
            (개)
          </div>
        </div>
      </div>
      <ConfirmBtn type={type} day={4} handleGrade={handleGrade} />
    </Styled.OneToNine>
  );
};

export default FifthGrade11;
