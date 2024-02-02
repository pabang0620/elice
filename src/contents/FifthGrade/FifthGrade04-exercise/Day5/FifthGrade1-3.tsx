import DayLayout from '../../Layout/Day5';
import { FifthGrade4Day53 } from '../../utils/handleTitle';
import FifthGrade15 from './FifthGrade15';

const FifthGrade13Exercise: React.FC = () => {
  return (
    <DayLayout
      title={FifthGrade4Day53.title}
      subTitle={FifthGrade4Day53.subTitle}
    >
      <FifthGrade15 />
    </DayLayout>
  );
};

export default FifthGrade13Exercise;
