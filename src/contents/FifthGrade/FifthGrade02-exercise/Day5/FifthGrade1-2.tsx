import DayLayout from '../../Layout/Day5';
import Styled from '../../style';
import { FifthGrade2Day51 } from '../../utils/handleTitle';
import FifthGrade14 from './FifthGrade14';

const FifthGrade12Exercise: React.FC = () => {
  return (
    <DayLayout
      title={FifthGrade2Day51.title}
      subTitle={FifthGrade2Day51.subTitle}
    >
      <Styled.RowWrapBox8>
        <FifthGrade14 />
      </Styled.RowWrapBox8>
    </DayLayout>
  );
};

export default FifthGrade12Exercise;
