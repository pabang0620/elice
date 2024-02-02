import DayLayout from '../../Layout/Day2';
import Styled from '../../style';
import { FifthGrade3Day21 } from '../../utils/handleTitle';
import FifthGrade04 from './FifthGrade04';

const FifthGrade11Exercise: React.FC = () => {
  return (
    <DayLayout
      title={FifthGrade3Day21.title}
      subTitle={FifthGrade3Day21.subTitle}
    >
      <Styled.RowWrapBox10>
        <FifthGrade04 />
      </Styled.RowWrapBox10>
    </DayLayout>
  );
};

export default FifthGrade11Exercise;
