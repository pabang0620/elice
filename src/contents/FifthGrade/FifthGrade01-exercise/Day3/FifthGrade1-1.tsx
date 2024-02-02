import DayLayout from '../../Layout/Day3';
import { FifthGrade1Day3 } from '../../utils/handleTitle';
import FifthGrade07 from './FifthGrade07';

const FifthGrade11Exercise: React.FC = () => {
  return (
    <DayLayout
      title={FifthGrade1Day3.title}
      subTitle={FifthGrade1Day3.subTitle}
    >
      <FifthGrade07 />
    </DayLayout>
  );
};

export default FifthGrade11Exercise;
