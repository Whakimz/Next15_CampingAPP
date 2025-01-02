import { SubmitButton } from "@/components/Form/Buttons";
import Formcontainer from "@/components/Form/Formcontainer";
import FormInput from "@/components/Form/FormInput";
import { createLandmarkAction } from "../../../../actions/actions";
import CategoryInput from "@/components/Form/CategoryInput";
import TextAreaInput from "@/components/Form/TextAreaInput";
import ProvincesInput from "../../../components/Form/ProvincesInput";
import MapLandmark from "@/components/map/MapLandmark";
import ImageInput from "@/components/Form/ImageInput";

const CreateLandmarkPage = async () => {
  return (
    <section className="container mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-8 capitalize">
        Create Landmark
      </h1>
      <div className="border p-8 rounded-md border-gray-200 dark:border-[#27272a] bg-white dark:bg-[#18181b]">
        <Formcontainer action={createLandmarkAction}>
          {/* Basic Information */}
          <fieldset className="mb-6">
            <div className="grid md:grid-cols-2 gap-6">
              <FormInput
                name="name"
                label="Landmark Name"
                type="text"
                placeholder="Enter landmark name"
              />
              <CategoryInput />
            </div>
          </fieldset>

          {/* Description */}
          <fieldset className="mb-6">
            <TextAreaInput
              name="description"
              placeholder="Write a short description..."
            />
          </fieldset>

          {/* Pricing and Location */}
          <fieldset className="mb-6">
            <div className="grid md:grid-cols-2 gap-6">
              <FormInput
                name="price"
                label="Price"
                type="number"
                placeholder="Enter price"
              />
              <ProvincesInput />
            </div>
          </fieldset>

          {/* Images */}
          <fieldset className="mb-6">
            <ImageInput />
          </fieldset>

          {/* Map */}
          <fieldset className="mb-6">
            <MapLandmark />
          </fieldset>

          {/* Submit Button */}
          <div className="flex justify-end">
            <SubmitButton text="Create Landmark" size="lg" />
          </div>
        </Formcontainer>
      </div>
    </section>
  );
};

export default CreateLandmarkPage;
