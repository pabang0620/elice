import DayLayout from '../../Layout/Day4';
import Styled from '../../style';
import { FifthGrade2Day43 } from '../../utils/handleTitle';
import FifthGrade12 from './FifthGrade12';

const FifthGrade13Exercise: React.FC = () => {
  return (
    <DayLayout
      title={FifthGrade2Day43.title}
      subTitle={FifthGrade2Day43.subTitle}
    >
      <Styled.RowWrapBox9>
        <FifthGrade12 />
      </Styled.RowWrapBox9>
    </DayLayout>
  );
};

export default FifthGrade13Exercise;
