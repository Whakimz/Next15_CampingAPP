import Breadcumbs from "@/components/landmark/Breadcumbs";
import { fectLandmarkDetails } from "../../../../actions/actions";
import { redirect } from "next/navigation";
import FavoriteToggle from "@/components/card/FavoriteToggle";
import ImageContainer from "@/components/landmark/ImageContainer";
import Description from "@/components/landmark/Description";
import MapLandmark from "@/components/map/MapLandmark";

const LandmarkDetails = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;
  const landmark = await fectLandmarkDetails({ id });
  if (!landmark) redirect("/");

  return (
    <section>
      <Breadcumbs name={landmark.name} />
      <header className="flex justify-between mt-4 items-center">
        <h1 className="text-4xl font-bold ">{landmark.name}</h1>
        <div className="flex items-center gap-x-4">
          <span>share</span>
          <FavoriteToggle landmarkId={landmark.id} />
        </div>
      </header>
      {/* image  */}
      <ImageContainer mainImage={landmark.image} name={landmark.name} />
      {/* detail  */}
      <section>
        <div>
          <Description description={landmark.description} />
          <MapLandmark Location={{ lat: landmark.lat, lng: landmark.lng }} />
        </div>
      </section>
    </section>
  );
};
export default LandmarkDetails;
