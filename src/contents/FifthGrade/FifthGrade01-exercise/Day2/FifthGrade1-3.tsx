import DayLayout from '../../Layout/Day2';
import { FifthGrade1Day2, FifthGrade1Day3 } from '../../utils/handleTitle';
import FifthGrade06 from './FifthGrade06';

const FifthGrade13Exercise: React.FC = () => {
  return (
    <DayLayout
      title={FifthGrade1Day2.title}
      subTitle={FifthGrade1Day3.subTitle}
    >
      <FifthGrade06 />
    </DayLayout>
  );
};

export default FifthGrade13Exercise;
