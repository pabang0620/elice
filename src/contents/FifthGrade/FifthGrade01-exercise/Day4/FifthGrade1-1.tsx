import DayLayout from '../../Layout/Day4';
import { FifthGrade1Day41 } from '../../utils/handleTitle';
import FifthGrade10 from './FifthGrade10';

const FifthGrade11Exercise: React.FC = () => {
  return (
    <DayLayout
      title={FifthGrade1Day41.title}
      subTitle={FifthGrade1Day41.subTitle}
    >
      <FifthGrade10 />
    </DayLayout>
  );
};

export default FifthGrade11Exercise;
