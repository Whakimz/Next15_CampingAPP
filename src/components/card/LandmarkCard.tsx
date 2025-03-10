/* eslint-disable @typescript-eslint/no-unused-vars */
import Image from "next/image";
import { LandmarksCardProps } from "../../../utils/types";
import LandmarkStarRating from "./LandmarkStarRating";
import FavoriteToggle from "./FavoriteToggle";
import Link from "next/link";

const LandmarkCard = ({ landmark }: { landmark: LandmarksCardProps }) => {
  const { name, image, id, description, price, province, lat, lng, category } =
    landmark;
  return (
    <article className="group relative bg-white dark:bg-[#1a1a1a] rounded-md shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
      <Link href={`/landmark/${id}`}>
        <div className="relative h-[300px] rounded-md mb-2">
          <Image
            src={image}
            alt={name}
            sizes="(max-width:768px) 100vw, 50vw"
            className="object-cover rounded-md group-hover:scale-105 transition-transform duration-300"
            fill
          />
        </div>
        <div className="flex items-center justify-between p-3">
          <h3 className="text-lg font-semibold text-primary dark:text-primary mt-1">
            {name.substring(0, 30)}
          </h3>
          <LandmarkStarRating />
        </div>

        <p className="text-sm mt-1 ml-3 text-muted-foreground dark:text-muted-foreground line-clamp-2">
          {description}
        </p>

        <div className="mt-2 flex items-center justify-between px-3 pb-3">
          <span className="font-semibold text-sm">
            THB{" "}
            {price.toLocaleString("en-US", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </span>

          <p className="text-sm font-light">{province}</p>
        </div>
      </Link>

      <div className="absolute top-5 right-5">
        <FavoriteToggle landmarkId={id} />
      </div>
    </article>
  );
};

export default LandmarkCard;
