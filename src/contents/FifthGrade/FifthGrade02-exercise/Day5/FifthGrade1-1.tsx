import DayLayout from '../../Layout/Day5';
import Styled from '../../style';
import { FifthGrade2Day51 } from '../../utils/handleTitle';
import FifthGrade13 from './FifthGrade13';

const FifthGrade11Exercise: React.FC = () => {
  return (
    <DayLayout
      title={FifthGrade2Day51.title}
      subTitle={FifthGrade2Day51.subTitle}
    >
      <Styled.RowWrapBox8>
        <FifthGrade13 />
      </Styled.RowWrapBox8>
    </DayLayout>
  );
};

export default FifthGrade11Exercise;
