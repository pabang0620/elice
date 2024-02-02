import DayLayout from '../../Layout/Day1';
import Styled from '../../style';
import { FifthGrade4Day12 } from '../../utils/handleTitle';
import FifthGrade02 from './FifthGrade02';

const FifthGrade12Exercise: React.FC = () => {
  return (
    <DayLayout
      title={FifthGrade4Day12.title}
      subTitle={FifthGrade4Day12.subTitle}
    >
      <Styled.RowWrapBox8>
        <FifthGrade02 />
      </Styled.RowWrapBox8>
    </DayLayout>
  );
};

export default FifthGrade12Exercise;
