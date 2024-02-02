import DayLayout from '../../Layout/Day1';
import Styled from '../../style';
import { FifthGrade2Day13 } from '../../utils/handleTitle';
import FifthGrade03 from './FifthGrade03';

const FifthGrade13Exercise: React.FC = () => {
  return (
    <DayLayout
      title={FifthGrade2Day13.title}
      subTitle={FifthGrade2Day13.subTitle}
    >
      <Styled.RowWrapBox8>
        <FifthGrade03 />
      </Styled.RowWrapBox8>
    </DayLayout>
  );
};

export default FifthGrade13Exercise;
