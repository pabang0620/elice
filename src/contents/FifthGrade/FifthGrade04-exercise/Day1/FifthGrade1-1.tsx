import DayLayout from '../../Layout/Day1';
import Styled from '../../style';
import { FifthGrade4Day11 } from '../../utils/handleTitle';
import FifthGrade01 from './FifthGrade01';

const FifthGrade11Exercise: React.FC = () => {
  return (
    <DayLayout
      title={FifthGrade4Day11.title}
      subTitle={FifthGrade4Day11.subTitle}
    >
      <Styled.RowWrapBox8>
        <FifthGrade01 />
      </Styled.RowWrapBox8>
    </DayLayout>
  );
};

export default FifthGrade11Exercise;
