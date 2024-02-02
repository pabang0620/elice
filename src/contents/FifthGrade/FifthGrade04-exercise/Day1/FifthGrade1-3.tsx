import DayLayout from '../../Layout/Day1';
import Styled from '../../style';
import { FifthGrade4Day13 } from '../../utils/handleTitle';
import FifthGrade03 from './FifthGrade03';

const FifthGrade13Exercise: React.FC = () => {
  return (
    <DayLayout
      title={FifthGrade4Day13.title}
      subTitle={FifthGrade4Day13.subTitle}
    >
      <Styled.RowWrapBox10>
        <FifthGrade03 />
      </Styled.RowWrapBox10>
    </DayLayout>
  );
};

export default FifthGrade13Exercise;
