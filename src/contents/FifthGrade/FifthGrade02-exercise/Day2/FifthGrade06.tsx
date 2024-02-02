import React, { useState } from 'react';
import { sendScore } from '@elice/extcontent-apis';
import { postKeyValue } from '@elice/extcontent-apis';
import { getKeyValue } from '@elice/extcontent-apis';

import Styled from '../../style';
import ConfirmBtn from '../../utils/ConfirmBtn';

import type { AnswersType } from '../../Type/Type1';

import correctimg from 'src/contents/FifthGrade/fifthImage/correct.png';
import incorrectimg from 'src/contents/FifthGrade/fifthImage/incorrect.png';

const FifthGrade06: React.FC = () => {
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
  });
  const correctAnswers: AnswersType = {
    '1': ['3'],
    '2': ['3'],
    '3': ['3'],
    '4': ['3'],
    '5': ['4'],
    '6': ['2'],
    '7': ['4'],
    '8': ['3'],
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
        key: 'fifthGrade21Answers',
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
    getKeyValue({ key: 'fifthGrade21Answers' })
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
        <div className="quiz">
          <div className="quizCard223 flexRow">
            <p className="quizNumber1433 marginleft2231 afwe3513">
              ①
              {showResults && (
                <div>
                  {isCorrect('1') ? (
                    <div>
                      <img
                        className="answerImg104"
                        src={correctimg}
                        alt="Correct"
                      />
                    </div>
                  ) : (
                    <div>
                      <img
                        className="answerImg104"
                        src={incorrectimg}
                        alt="Incorrect"
                      />
                    </div>
                  )}
                </div>
              )}
            </p>
            <div className="fifthGrade223Grid">
              <div>12</div>
              <div>28</div>
              <div>2</div>
              <div>33</div>
              <div>21</div>
              <div>3</div>
              <div>8</div>
              <div>37</div>
            </div>
            <input
              disabled={isInputDisabled}
              value={answers['1'][0]}
              onChange={e => handleChange('1', 0, e.target.value)}
              className="fifthGrade223Input"
              type="text"
            />
            개
          </div>
          <div className="quizCard223 flexRow">
            <p className="quizNumber1433 marginleft2231 afwe3513">
              ②
              {showResults && (
                <div>
                  {isCorrect('2') ? (
                    <div>
                      <img
                        className="answerImg104"
                        src={correctimg}
                        alt="Correct"
                      />
                    </div>
                  ) : (
                    <div>
                      <img
                        className="answerImg104"
                        src={incorrectimg}
                        alt="Incorrect"
                      />
                    </div>
                  )}
                </div>
              )}
            </p>
            <div className="fifthGrade223Grid">
              <div>6</div>
              <div>23</div>
              <div>62</div>
              <div>70</div>
              <div>67</div>
              <div>75</div>
              <div>97</div>
              <div>66</div>
            </div>
            <input
              disabled={isInputDisabled}
              value={answers['2'][0]}
              onChange={e => handleChange('2', 0, e.target.value)}
              className="fifthGrade223Input"
              type="text"
            />
            개
          </div>
          <div className="quizCard223 flexRow">
            <p className="quizNumber1433 marginleft2231 afwe3513">
              ③
              {showResults && (
                <div>
                  {isCorrect('3') ? (
                    <div>
                      <img
                        className="answerImg104"
                        src={correctimg}
                        alt="Correct"
                      />
                    </div>
                  ) : (
                    <div>
                      <img
                        className="answerImg104"
                        src={incorrectimg}
                        alt="Incorrect"
                      />
                    </div>
                  )}
                </div>
              )}
            </p>
            <div className="fifthGrade223Grid">
              <div>50</div>
              <div>53</div>
              <div>55</div>
              <div>18</div>
              <div>17</div>
              <div>96</div>
              <div>27</div>
              <div>11</div>
            </div>
            <input
              disabled={isInputDisabled}
              value={answers['3'][0]}
              onChange={e => handleChange('3', 0, e.target.value)}
              className="fifthGrade223Input"
              type="text"
            />
            개
          </div>
          <div className="quizCard223 flexRow">
            <p className="quizNumber1433 marginleft2231 afwe3513">
              ④
              {showResults && (
                <div>
                  {isCorrect('4') ? (
                    <div>
                      <img
                        className="answerImg104"
                        src={correctimg}
                        alt="Correct"
                      />
                    </div>
                  ) : (
                    <div>
                      <img
                        className="answerImg104"
                        src={incorrectimg}
                        alt="Incorrect"
                      />
                    </div>
                  )}
                </div>
              )}
            </p>
            <div className="fifthGrade223Grid">
              <div>35</div>
              <div>29</div>
              <div>69</div>
              <div>83</div>
              <div>85</div>
              <div>41</div>
              <div>80</div>
              <div>24</div>
            </div>
            <input
              disabled={isInputDisabled}
              value={answers['4'][0]}
              onChange={e => handleChange('4', 0, e.target.value)}
              className="fifthGrade223Input"
              type="text"
            />
            개
          </div>
          <div className="quizCard223 flexRow">
            <p className="quizNumber1433 marginleft2231 afwe3513">
              ⑤
              {showResults && (
                <div>
                  {isCorrect('5') ? (
                    <div>
                      <img
                        className="answerImg104"
                        src={correctimg}
                        alt="Correct"
                      />
                    </div>
                  ) : (
                    <div>
                      <img
                        className="answerImg104"
                        src={incorrectimg}
                        alt="Incorrect"
                      />
                    </div>
                  )}
                </div>
              )}
            </p>
            <div className="fifthGrade223Grid">
              <div>71</div>
              <div>25</div>
              <div>5</div>
              <div>74</div>
              <div>73</div>
              <div>51</div>
              <div>32</div>
              <div>47</div>
            </div>
            <input
              disabled={isInputDisabled}
              value={answers['5'][0]}
              onChange={e => handleChange('5', 0, e.target.value)}
              className="fifthGrade223Input"
              type="text"
            />
            개
          </div>
          <div className="quizCard223 flexRow">
            <p className="quizNumber1433 marginleft2231 afwe3513">
              ⑥
              {showResults && (
                <div>
                  {isCorrect('6') ? (
                    <div>
                      <img
                        className="answerImg104"
                        src={correctimg}
                        alt="Correct"
                      />
                    </div>
                  ) : (
                    <div>
                      <img
                        className="answerImg104"
                        src={incorrectimg}
                        alt="Incorrect"
                      />
                    </div>
                  )}
                </div>
              )}
            </p>
            <div className="fifthGrade223Grid">
              <div>13</div>
              <div>30</div>
              <div>9</div>
              <div>15</div>
              <div>59</div>
              <div>77</div>
              <div>4</div>
              <div>58</div>
            </div>
            <input
              disabled={isInputDisabled}
              value={answers['6'][0]}
              onChange={e => handleChange('6', 0, e.target.value)}
              className="fifthGrade223Input"
              type="text"
            />
            개
          </div>
          <div className="quizCard223 flexRow">
            <p className="quizNumber1433 marginleft2231 afwe3513">
              ⑦
              {showResults && (
                <div>
                  {isCorrect('7') ? (
                    <div>
                      <img
                        className="answerImg104"
                        src={correctimg}
                        alt="Correct"
                      />
                    </div>
                  ) : (
                    <div>
                      <img
                        className="answerImg104"
                        src={incorrectimg}
                        alt="Incorrect"
                      />
                    </div>
                  )}
                </div>
              )}
            </p>
            <div className="fifthGrade223Grid">
              <div>26</div>
              <div>89</div>
              <div>31</div>
              <div>63</div>
              <div>79</div>
              <div>36</div>
              <div>7</div>
              <div>64</div>
            </div>
            <input
              disabled={isInputDisabled}
              value={answers['7'][0]}
              onChange={e => handleChange('7', 0, e.target.value)}
              className="fifthGrade223Input"
              type="text"
            />
            개
          </div>
          <div className="quizCard223 flexRow">
            <p className="quizNumber1433 marginleft2231 afwe3513">
              ⑧
              {showResults && (
                <div>
                  {isCorrect('8') ? (
                    <div>
                      <img
                        className="answerImg104"
                        src={correctimg}
                        alt="Correct"
                      />
                    </div>
                  ) : (
                    <div>
                      <img
                        className="answerImg104"
                        src={incorrectimg}
                        alt="Incorrect"
                      />
                    </div>
                  )}
                </div>
              )}
            </p>
            <div className="fifthGrade223Grid">
              <div>52</div>
              <div>43</div>
              <div>22</div>
              <div>19</div>
              <div>65</div>
              <div>61</div>
              <div>49</div>
              <div>10</div>
            </div>
            <input
              disabled={isInputDisabled}
              value={answers['8'][0]}
              onChange={e => handleChange('8', 0, e.target.value)}
              className="fifthGrade223Input"
              type="text"
            />
            개
          </div>
        </div>
      </div>
      <ConfirmBtn type={type} day={2} handleGrade={handleGrade} />
    </Styled.OneToNine>
  );
};

export default FifthGrade06;
