import DayLayout from '../../Layout/Day2';
import { FifthGrade1Day2 } from '../../utils/handleTitle';
import FifthGrade04 from './FifthGrade04';

const FifthGrade11Exercise: React.FC = () => {
  return (
    <DayLayout
      title={FifthGrade1Day2.title}
      subTitle={FifthGrade1Day2.subTitle}
    >
      <FifthGrade04 />
    </DayLayout>
  );
};

export default FifthGrade11Exercise;
