import DayLayout from '../../Layout/Day1';
import Styled from '../../style';
import { FifthGrade2Day11 } from '../../utils/handleTitle';
import FifthGrade01 from './FifthGrade01';

const FifthGrade11Exercise: React.FC = () => {
  return (
    <DayLayout
      title={FifthGrade2Day11.title}
      subTitle={FifthGrade2Day11.subTitle}
    >
      <Styled.RowWrapBox10>
        <FifthGrade01 />
      </Styled.RowWrapBox10>
    </DayLayout>
  );
};

export default FifthGrade11Exercise;
