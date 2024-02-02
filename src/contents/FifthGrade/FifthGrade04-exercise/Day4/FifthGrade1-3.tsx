import DayLayout from '../../Layout/Day4';
import { FifthGrade4Day43 } from '../../utils/handleTitle';
import FifthGrade12 from './FifthGrade12';

const FifthGrade13Exercise: React.FC = () => {
  return (
    <DayLayout
      title={FifthGrade4Day43.title}
      subTitle={FifthGrade4Day43.subTitle}
    >
      <FifthGrade12 />
    </DayLayout>
  );
};

export default FifthGrade13Exercise;
