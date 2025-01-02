import { fecthLandmarks } from "../../../actions/actions";
import LandmarkList from "./LandmarkList";
import { LandmarksCardProps } from "../../../utils/types";

const LandmarkContainer = async () => {
  const landmarks: LandmarksCardProps[] = await fecthLandmarks();
  console.log(landmarks);

  return (
    <div>
      <LandmarkList landmarks={landmarks} />
    </div>
  );
};
export default LandmarkContainer;
