import LandmarkList from "@/components/home/LandmarkList";
import { fecthFavorite } from "../../../actions/actions";

const favoritsPage = async () => {
  const favorites = await fecthFavorite();

  return <LandmarkList landmarks={favorites} />;
};
export default favoritsPage;
