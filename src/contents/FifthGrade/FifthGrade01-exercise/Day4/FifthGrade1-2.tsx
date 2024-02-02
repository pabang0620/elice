import DayLayout from '../../Layout/Day4';
import Styled from '../../style';
import { FifthGrade1Day43 } from '../../utils/handleTitle';
import FifthGrade11 from './FifthGrade11';

const FifthGrade12Exercise: React.FC = () => {
  return (
    <DayLayout
      title={FifthGrade1Day43.title}
      subTitle={FifthGrade1Day43.subTitle}
    >
      <Styled.RowWrapBox10>
        <FifthGrade11 />
      </Styled.RowWrapBox10>
    </DayLayout>
  );
};

export default FifthGrade12Exercise;
