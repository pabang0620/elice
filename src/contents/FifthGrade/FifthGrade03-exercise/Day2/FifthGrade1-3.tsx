import DayLayout from '../../Layout/Day2';
import { FifthGrade3Day22 } from '../../utils/handleTitle';
import FifthGrade06 from './FifthGrade06';

const FifthGrade13Exercise: React.FC = () => {
  return (
    <DayLayout
      title={FifthGrade3Day22.title}
      subTitle={FifthGrade3Day22.subTitle}
    >
      <FifthGrade06 />
    </DayLayout>
  );
};

export default FifthGrade13Exercise;
