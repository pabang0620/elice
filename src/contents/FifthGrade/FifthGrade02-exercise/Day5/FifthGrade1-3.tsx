import DayLayout from '../../Layout/Day5';
import Styled from '../../style';
import { FifthGrade2Day53 } from '../../utils/handleTitle';
import FifthGrade15 from './FifthGrade15';

const FifthGrade13Exercise: React.FC = () => {
  return (
    <DayLayout
      title={FifthGrade2Day53.title}
      subTitle={FifthGrade2Day53.subTitle}
    >
      <Styled.RowWrapBox10>
        <FifthGrade15 />
      </Styled.RowWrapBox10>
    </DayLayout>
  );
};

export default FifthGrade13Exercise;
