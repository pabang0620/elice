import DayLayout from '../../Layout/Day3';
import Styled from '../../style';
import { FifthGrade4Day31 } from '../../utils/handleTitle';
import FifthGrade07 from './FifthGrade07';

const FifthGrade11Exercise: React.FC = () => {
  return (
    <DayLayout
      title={FifthGrade4Day31.title}
      subTitle={FifthGrade4Day31.subTitle}
    >
      <Styled.RowWrapBox10>
        <FifthGrade07 />
      </Styled.RowWrapBox10>
    </DayLayout>
  );
};

export default FifthGrade11Exercise;
