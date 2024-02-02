import DayLayout from '../../Layout/Day2';
import Styled from '../../style';
import { FifthGrade3Day22 } from '../../utils/handleTitle';
import FifthGrade05 from './FifthGrade05';

const FifthGrade12Exercise: React.FC = () => {
  return (
    <DayLayout
      title={FifthGrade3Day22.title}
      subTitle={FifthGrade3Day22.subTitle}
    >
      <Styled.RowWrapBox9>
        <FifthGrade05 />
      </Styled.RowWrapBox9>
    </DayLayout>
  );
};

export default FifthGrade12Exercise;
