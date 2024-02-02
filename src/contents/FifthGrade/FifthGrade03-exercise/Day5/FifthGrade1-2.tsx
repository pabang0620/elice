import DayLayout from '../../Layout/Day5';
import Styled from '../../style';
import { FifthGrade3Day52 } from '../../utils/handleTitle';
import FifthGrade14 from './FifthGrade14';

const FifthGrade12Exercise: React.FC = () => {
  return (
    <DayLayout
      title={FifthGrade3Day52.title}
      subTitle={FifthGrade3Day52.subTitle}
    >
      <Styled.RowWrapBox10>
        <FifthGrade14 />
      </Styled.RowWrapBox10>
    </DayLayout>
  );
};

export default FifthGrade12Exercise;
