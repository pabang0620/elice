import DayLayout from '../../Layout/Day4';
import Styled from '../../style';
import { FifthGrade2Day42 } from '../../utils/handleTitle';
import FifthGrade11 from './FifthGrade11';

const FifthGrade12Exercise: React.FC = () => {
  return (
    <DayLayout
      title={FifthGrade2Day42.title}
      subTitle={FifthGrade2Day42.subTitle}
    >
      <Styled.RowWrapBox10>
        <FifthGrade11 />
      </Styled.RowWrapBox10>
    </DayLayout>
  );
};

export default FifthGrade12Exercise;
