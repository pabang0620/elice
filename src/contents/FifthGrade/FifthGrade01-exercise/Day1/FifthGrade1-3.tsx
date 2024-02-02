import DayLayout from '../../Layout/Day1';
import Styled from '../../style';
import { FifthGrade1Day3 } from '../../utils/handleTitle';
import FifthGrade03 from './FifthGrade03';

const FifthGrade13Exercise: React.FC = () => {
  return (
    <DayLayout
      title={FifthGrade1Day3.title}
      subTitle={FifthGrade1Day3.subTitle}
    >
      <Styled.RowWrapBox10>
        <FifthGrade03 />
      </Styled.RowWrapBox10>
    </DayLayout>
  );
};

export default FifthGrade13Exercise;
