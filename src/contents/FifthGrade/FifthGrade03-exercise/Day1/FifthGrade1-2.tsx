import DayLayout from '../../Layout/Day1';
import Styled from '../../style';
import { FifthGrade3Day12 } from '../../utils/handleTitle';
import FifthGrade02 from './FifthGrade02';

const FifthGrade12Exercise: React.FC = () => {
  return (
    <DayLayout
      title={FifthGrade3Day12.title}
      subTitle={FifthGrade3Day12.subTitle}
    >
      <Styled.RowWrapBox9>
        <FifthGrade02 />
      </Styled.RowWrapBox9>
    </DayLayout>
  );
};

export default FifthGrade12Exercise;
