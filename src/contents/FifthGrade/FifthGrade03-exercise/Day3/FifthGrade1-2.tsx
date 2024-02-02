import DayLayout from '../../Layout/Day3';
import Styled from '../../style';
import { FifthGrade3Day32 } from '../../utils/handleTitle';
import FifthGrade08 from './FifthGrade08';

const FifthGrade12Exercise: React.FC = () => {
  return (
    <DayLayout
      title={FifthGrade3Day32.title}
      subTitle={FifthGrade3Day32.subTitle}
    >
      <Styled.RowWrapBox10>
        <FifthGrade08 />
      </Styled.RowWrapBox10>
    </DayLayout>
  );
};

export default FifthGrade12Exercise;
