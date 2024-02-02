import DayLayout from '../../Layout/Day5';
import { FifthGrade1Day5 } from '../../utils/handleTitle';
import FifthGrade14 from './FifthGrade14';

const FifthGrade12Exercise: React.FC = () => {
  return (
    <DayLayout
      title={FifthGrade1Day5.title}
      subTitle={FifthGrade1Day5.subTitle}
    >
      <FifthGrade14 />
    </DayLayout>
  );
};

export default FifthGrade12Exercise;
