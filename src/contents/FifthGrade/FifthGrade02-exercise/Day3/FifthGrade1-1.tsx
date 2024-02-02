import DayLayout from '../../Layout/Day3';
import Styled from '../../style';
import { FifthGrade2Day31 } from '../../utils/handleTitle';
import FifthGrade07 from './FifthGrade07';

const FifthGrade11Exercise: React.FC = () => {
  return (
    <DayLayout
      title={FifthGrade2Day31.title}
      subTitle={FifthGrade2Day31.subTitle}
    >
      <Styled.RowWrapBox10>
        <FifthGrade07 />
      </Styled.RowWrapBox10>
    </DayLayout>
  );
};

export default FifthGrade11Exercise;
