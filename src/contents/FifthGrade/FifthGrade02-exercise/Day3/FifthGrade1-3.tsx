import DayLayout from '../../Layout/Day3';
import Styled from '../../style';
import { FifthGrade2Day33 } from '../../utils/handleTitle';
import FifthGrade09 from './FifthGrade09';

const FifthGrade13Exercise: React.FC = () => {
  return (
    <DayLayout
      title={FifthGrade2Day33.title}
      subTitle={FifthGrade2Day33.subTitle}
    >
      <Styled.RowWrapBox10>
        <FifthGrade09 />
      </Styled.RowWrapBox10>
    </DayLayout>
  );
};

export default FifthGrade13Exercise;
