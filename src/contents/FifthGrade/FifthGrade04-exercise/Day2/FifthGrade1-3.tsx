import DayLayout from '../../Layout/Day2';
import { FifthGrade4Day23 } from '../../utils/handleTitle';
import FifthGrade06 from './FifthGrade06';

const FifthGrade13Exercise: React.FC = () => {
  return (
    <DayLayout
      title={FifthGrade4Day23.title}
      subTitle={FifthGrade4Day23.subTitle}
    >
      <FifthGrade06 />
    </DayLayout>
  );
};

export default FifthGrade13Exercise;
