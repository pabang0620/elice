import DayLayout from '../../Layout/Day4';
import Styled from '../../style';
import { FifthGrade2Day41 } from '../../utils/handleTitle';
import FifthGrade10 from './FifthGrade10';

const FifthGrade11Exercise: React.FC = () => {
  return (
    <DayLayout
      title={FifthGrade2Day41.title}
      subTitle={FifthGrade2Day41.subTitle}
    >
      <Styled.RowWrapBox10>
        <FifthGrade10 />
      </Styled.RowWrapBox10>
    </DayLayout>
  );
};

export default FifthGrade11Exercise;
