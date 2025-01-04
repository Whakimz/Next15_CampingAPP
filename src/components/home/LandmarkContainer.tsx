import { fecthLandmarks, fecthLandmarksHero } from "../../../actions/actions";
import LandmarkList from "./LandmarkList";
import { LandmarksCardProps } from "../../../utils/types";
import Hero from "../hero/Hero";
import CategoriesList from "./CategoriesList";
import EmptyList from "./EmptyList";

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
  const LandmarksHero: LandmarksCardProps[] = await fecthLandmarksHero();
  // if (landmarks.length === 0) {
  //   return <EmptyList />;
  // }
  return (
    <div>
      <Hero landmarks={LandmarksHero} />
      <CategoriesList search={search} category={category} />
      {landmarks.length === 0 ? (
        <EmptyList />
      ) : (
        <LandmarkList landmarks={landmarks} />
      )}
    </div>
  );
};
export default LandmarkContainer;
