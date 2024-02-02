import DayLayout from '../../Layout/Day2';
import Styled from '../../style';
import { FifthGrade4Day22 } from '../../utils/handleTitle';
import FifthGrade05 from './FifthGrade05';

const FifthGrade12Exercise: React.FC = () => {
  return (
    <DayLayout
      title={FifthGrade4Day22.title}
      subTitle={FifthGrade4Day22.subTitle}
    >
      <Styled.RowWrapBox10>
        <FifthGrade05 />
      </Styled.RowWrapBox10>
    </DayLayout>
  );
};

export default FifthGrade12Exercise;
