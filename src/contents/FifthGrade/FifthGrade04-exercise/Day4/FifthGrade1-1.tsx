import DayLayout from '../../Layout/Day4';
import Styled from '../../style';
import { FifthGrade4Day41 } from '../../utils/handleTitle';
import FifthGrade10 from './FifthGrade10';

const FifthGrade11Exercise: React.FC = () => {
  return (
    <DayLayout
      title={FifthGrade4Day41.title}
      subTitle={FifthGrade4Day41.subTitle}
    >
      <Styled.RowWrapBox10>
        <FifthGrade10 />
      </Styled.RowWrapBox10>
    </DayLayout>
  );
};

export default FifthGrade11Exercise;
