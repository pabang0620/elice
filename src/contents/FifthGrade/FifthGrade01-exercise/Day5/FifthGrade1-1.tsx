import DayLayout from '../../Layout/Day5';
import { FifthGrade1Day5 } from '../../utils/handleTitle';
import FifthGrade13 from './FifthGrade13';

const FifthGrade11Exercise: React.FC = () => {
  return (
    <DayLayout
      title={FifthGrade1Day5.title}
      subTitle={FifthGrade1Day5.subTitle}
    >
      <FifthGrade13 />
    </DayLayout>
  );
};

export default FifthGrade11Exercise;
