import { handleColor } from '../utils/handleColor';
import { IsTwoLine } from '../utils/handleTitle';
import { LayoutStyled as Styled } from './style';

import type { LayoutProps } from '../Type/Type1';

const Day1Layout = (props: LayoutProps) => {
  const { children, title, subTitle } = props;

  const borderColor = handleColor('border', 1);
  const titleColor = handleColor('title', 1);
  const subColor = handleColor('sub', 1);
  const line = IsTwoLine(subTitle);

  return (
    <Styled.DailyBackgroud color={borderColor}>
      <Styled.QuizTitle color={titleColor}>{title}</Styled.QuizTitle>
      <Styled.QuizSub border={borderColor} color={subColor}>
        {subTitle}
      </Styled.QuizSub>
      <Styled.QuizBox color={borderColor} line={line}>
        {children}
      </Styled.QuizBox>
    </Styled.DailyBackgroud>
  );
};

export default Day1Layout;
