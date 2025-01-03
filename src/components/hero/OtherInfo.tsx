import { LandmarksCardProps } from "../../../utils/types";

const OtherInfo = ({ landmark }: { landmark: LandmarksCardProps }) => {
  return (
    <div className="text-white space-y-3">
      {/* Province */}
      <p className="inline-block text-lg text-white bg-green-700 px-4 py-1 rounded-full">
        {landmark.province}
      </p>

      {/* Landmark Name */}
      <p className="text-4xl font-bold md:my-3 md:text-6xl md:leading-[80px]  transition-all duration-300 ease-in-out">
        {landmark.name}
      </p>

      {/* Description */}
      <p className="text-lg text-muted-foreground  ">
        {landmark.description.substring(0, 50) + "..."}
      </p>
    </div>
  );
};

export default OtherInfo;
