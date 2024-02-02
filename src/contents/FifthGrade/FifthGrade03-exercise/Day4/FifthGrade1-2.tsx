import DayLayout from '../../Layout/Day4';
import { FifthGrade3Day42 } from '../../utils/handleTitle';
import FifthGrade11 from './FifthGrade11';

const FifthGrade12Exercise: React.FC = () => {
  return (
    <DayLayout
      title={FifthGrade3Day42.title}
      subTitle={FifthGrade3Day42.subTitle}
    >
      <FifthGrade11 />
    </DayLayout>
  );
};

export default FifthGrade12Exercise;
