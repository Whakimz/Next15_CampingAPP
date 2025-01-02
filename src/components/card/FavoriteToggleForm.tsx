"use client";

import { usePathname } from "next/navigation";
import { toggleFavoriteAction } from "../../../actions/actions";
import Formcontainer from "../Form/Formcontainer";
import { CardSubmitButton } from "../Form/Buttons";

const FavoriteToggleForm = ({
  favoriteId,
  landmarkId,
}: {
  favoriteId: string | null;
  landmarkId: string;
}) => {
  const pathname = usePathname();
  console.log("id :", favoriteId);
  console.log("pathName:", pathname);

  const toggleAction = toggleFavoriteAction.bind(null, {
    favoriteId,
    landmarkId,
    pathname,
  });
  return (
    <Formcontainer action={toggleAction}>
      <CardSubmitButton isFavorite={favoriteId ? true : false} />
    </Formcontainer>
  );
};
export default FavoriteToggleForm;
