import React, { useState } from 'react';
import { sendScore } from '@elice/extcontent-apis';
import { postKeyValue } from '@elice/extcontent-apis';
import { getKeyValue } from '@elice/extcontent-apis';

import Styled from '../../style';
import ConfirmBtn from '../../utils/ConfirmBtn';

import type { AnswersType } from '../../Type/Type1';

import correctimg from 'src/contents/FifthGrade/fifthImage/correct.png';
import incorrectimg from 'src/contents/FifthGrade/fifthImage/incorrect.png';

const FifthGrade12: React.FC = () => {
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
    '1': ['2'],
    '2': ['3'],
    '3': ['3'],
    '4': ['4'],
    '5': ['2'],
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
        key: 'fifthGrade42Answers',
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
    getKeyValue({ key: 'fifthGrade42Answers' })
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
      <div className="fontSize25 flexCol">
        <div className="flexRow marginTop231 afwe3513">
          {showResults && (
            <div>
              {isCorrect('1') ? (
                <div>
                  <img className="answerImg62" src={correctimg} alt="Correct" />
                </div>
              ) : (
                <div>
                  <img
                    className="answerImg62"
                    src={incorrectimg}
                    alt="Incorrect"
                  />
                </div>
              )}
            </div>
          )}{' '}
          ①&nbsp;&nbsp; 분모가 40보다 크고 50보다 작은 분수 중에서
          <div className="fontSize20 marginLeft10px">
            <div className="textCenter">3</div>
            <div className="divlineCSS1"></div>
            <div className="textCenter">7</div>
          </div>
          &nbsp;&nbsp;과 크기가 같은 분수
        </div>
        <div>
          {' '}
          <input
            disabled={isInputDisabled}
            value={answers['1'][0]}
            onChange={e => handleChange('1', 0, e.target.value)}
            type="text"
            className="averageInput"
          />{' '}
          &nbsp;개
        </div>
        <div className="flexRow marginTop231 afwe3513">
          {showResults && (
            <div>
              {isCorrect('2') ? (
                <div>
                  <img className="answerImg62" src={correctimg} alt="Correct" />
                </div>
              ) : (
                <div>
                  <img
                    className="answerImg62"
                    src={incorrectimg}
                    alt="Incorrect"
                  />
                </div>
              )}
            </div>
          )}{' '}
          ②&nbsp;&nbsp; 분모가 60보다 크고 90보다 작은 분수 중에서
          <div className="fontSize20 marginLeft10px">
            <div className="textCenter">5</div>
            <div className="divlineCSS1"></div>
            <div className="textCenter">9</div>
          </div>
          &nbsp;&nbsp;과 크기가 같은 분수
        </div>
        <div>
          {' '}
          <input
            disabled={isInputDisabled}
            value={answers['2'][0]}
            onChange={e => handleChange('2', 0, e.target.value)}
            type="text"
            className="averageInput"
          />{' '}
          &nbsp;개
        </div>
        <div className="flexRow marginTop231 afwe3513">
          {showResults && (
            <div>
              {isCorrect('3') ? (
                <div>
                  <img className="answerImg62" src={correctimg} alt="Correct" />
                </div>
              ) : (
                <div>
                  <img
                    className="answerImg62"
                    src={incorrectimg}
                    alt="Incorrect"
                  />
                </div>
              )}
            </div>
          )}{' '}
          ③&nbsp;&nbsp; 분모가 30보다 크고 40보다 작은 분수 중에서
          <div className="fontSize20 marginLeft10px">
            <div className="textCenter">1</div>
            <div className="divlineCSS1"></div>
            <div className="textCenter">3</div>
          </div>
          &nbsp;&nbsp;과 크기가 같은 분수
        </div>
        <div>
          {' '}
          <input
            disabled={isInputDisabled}
            value={answers['3'][0]}
            onChange={e => handleChange('3', 0, e.target.value)}
            type="text"
            className="averageInput"
          />{' '}
          &nbsp;개
        </div>
        <div className="flexRow marginTop231 afwe3513">
          {showResults && (
            <div>
              {isCorrect('4') ? (
                <div>
                  <img className="answerImg62" src={correctimg} alt="Correct" />
                </div>
              ) : (
                <div>
                  <img
                    className="answerImg62"
                    src={incorrectimg}
                    alt="Incorrect"
                  />
                </div>
              )}
            </div>
          )}{' '}
          ④&nbsp;&nbsp; 분모가 50보다 크고 60보다 작은 분수 중에서
          <div className="fontSize20 marginLeft10px">
            <div className="textCenter">1</div>
            <div className="divlineCSS1"></div>
            <div className="textCenter">2</div>
          </div>
          &nbsp;&nbsp;과 크기가 같은 분수
        </div>
        <div>
          {' '}
          <input
            disabled={isInputDisabled}
            value={answers['4'][0]}
            onChange={e => handleChange('4', 0, e.target.value)}
            type="text"
            className="averageInput"
          />{' '}
          &nbsp;개
        </div>
        <div className="flexRow marginTop231 afwe3513">
          {showResults && (
            <div>
              {isCorrect('5') ? (
                <div>
                  <img className="answerImg62" src={correctimg} alt="Correct" />
                </div>
              ) : (
                <div>
                  <img
                    className="answerImg62"
                    src={incorrectimg}
                    alt="Incorrect"
                  />
                </div>
              )}
            </div>
          )}{' '}
          ⑤&nbsp;&nbsp; 분모가 20보다 크고 60보다 작은 분수 중에서
          <div className="fontSize20 marginLeft10px">
            <div className="textCenter">7</div>
            <div className="divlineCSS1"></div>
            <div className="textCenter">15</div>
          </div>
          &nbsp;&nbsp;과 크기가 같은 분수
        </div>
        <div>
          {' '}
          <input
            disabled={isInputDisabled}
            value={answers['5'][0]}
            onChange={e => handleChange('5', 0, e.target.value)}
            type="text"
            className="averageInput"
          />{' '}
          &nbsp;개
        </div>
      </div>
      <ConfirmBtn type={type} day={4} handleGrade={handleGrade} />
    </Styled.OneToNine>
  );
};

export default FifthGrade12;
