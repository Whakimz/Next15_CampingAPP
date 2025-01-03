// import { Heart } from "lucide-react";
// import { Button } from "../ui/button";
import { auth } from "@clerk/nextjs/server";
import { SignIncardButton } from "../Form/Buttons";
import { fetchFavoriteId } from "../../../actions/actions";
import FavoriteToggleForm from "./FavoriteToggleForm";

const FavoriteToggle = async ({ landmarkId }: { landmarkId: string }) => {
  const { userId } = await auth();
  if (!userId) return <SignIncardButton />;
  const favoriteId = await fetchFavoriteId({ landmarkId });

  return <FavoriteToggleForm favoriteId={favoriteId} landmarkId={landmarkId} />;
};
export default FavoriteToggle;
