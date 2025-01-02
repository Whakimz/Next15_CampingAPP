import LandmarkCard from "../card/LandmarkCard";
import { LandmarksCardProps } from "../../../utils/types";

const LandmarkList = ({ landmarks }: { landmarks: LandmarksCardProps[] }) => {
  return (
    <section className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-8">
      {landmarks.map((landmark) => {
        console.log(landmark);

        return <LandmarkCard key={landmark.id} landmark={landmark} />;
      })}
    </section>
  );
};
export default LandmarkList;
