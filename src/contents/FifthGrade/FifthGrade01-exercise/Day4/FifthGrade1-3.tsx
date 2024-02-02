import DayLayout from '../../Layout/Day4';
import Styled from '../../style';
import { FifthGrade1Day43 } from '../../utils/handleTitle';
import FifthGrade12 from './FifthGrade12';

const FifthGrade13Exercise: React.FC = () => {
  return (
    <DayLayout
      title={FifthGrade1Day43.title}
      subTitle={FifthGrade1Day43.subTitle}
    >
      <Styled.RowWrapBox10>
        <FifthGrade12 />
      </Styled.RowWrapBox10>
    </DayLayout>
  );
};

export default FifthGrade13Exercise;
