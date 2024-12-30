import { SubmitButton } from "@/components/Form/Buttons";
import Formcontainer from "@/components/Form/Formcontainer";
import FormInput from "@/components/Form/FormInput";
import { createLandmarkAction } from "../../../../actions/actions";
import CategoryInput from "@/components/Form/CategoryInput";

import TextAreaInput from "@/components/Form/TextAreaInput";
import ProvincesInput from "../../../components/Form/ProvincesInput";
import MapLandmark from "@/components/map/MapLandmark";
import ImageInput from "@/components/Form/ImageInput";

const CreateProfilePage = async () => {
  return (
    <section>
      <h1 className="text-2xl font-semibold mb-8 capitalize ">
        Create Landmark
      </h1>
      <div className="border p-8 rounded-md ">
        <Formcontainer action={createLandmarkAction}>
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <FormInput
              name="name"
              label="Landmark Name"
              type="text"
              placeholder="Landmark Name"
            />
            {/* Category */}
            <CategoryInput />
          </div>

          <TextAreaInput name="description" />

          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <FormInput
              name="price"
              label="Price"
              type="number"
              placeholder="Price"
            />
            <ProvincesInput />
          </div>
          <ImageInput />
          {/* Divider */}
          <hr className="my-6 border-gray-300" />
          <MapLandmark />

          {/* Divider */}
          <hr className="my-6 border-gray-300" />

          <SubmitButton text="create Landmark" size="lg" />
        </Formcontainer>
      </div>
    </section>
  );
};
export default CreateProfilePage;
