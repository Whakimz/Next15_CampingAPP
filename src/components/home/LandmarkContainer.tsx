import { fecthLandmarks } from "../../../actions/actions";
import LandmarkList from "./LandmarkList";
import { LandmarksCardProps } from "../../../utils/types";
import Hero from "../hero/Hero";
import CategoriesList from "./CategoriesList";

const LandmarkContainer = async ({
  search,
  category,
}: {
  search?: string;
  category?: string;
}) => {
  const landmarks: LandmarksCardProps[] = await fecthLandmarks({
    search,
    category,
  });

  return (
    <div>
      <Hero landmarks={landmarks} />
      <CategoriesList search={search} category={category} />
      <LandmarkList landmarks={landmarks} />
    </div>
  );
};
export default LandmarkContainer;
