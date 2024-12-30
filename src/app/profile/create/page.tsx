import { SubmitButton } from "@/components/Form/Buttons";
import Formcontainer from "@/components/Form/Formcontainer";
import FormInput from "@/components/Form/FormInput";
import { createProfileAction } from "../../../../actions/actions";
import { redirect } from "next/navigation";
import { currentUser } from "@clerk/nextjs/server";

const CreateProfilePage = async () => {
  const user = await currentUser();
  if (user?.privateMetadata.hasProfile) redirect("/");
  return (
    <section>
      <h1 className="text-2xl font-semibold mb-8 capitalize ">New User</h1>
      <div className="border p-8 rounded-md ">
        <Formcontainer action={createProfileAction}>
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <FormInput
              name="firstName"
              label="First Name"
              type="text"
              placeholder="First Name"
            />
            <FormInput
              name="lastName"
              label="Last Name"
              type="text"
              placeholder="Last Name"
            />
            <FormInput
              name="username"
              label="Username"
              type="text"
              placeholder="Username"
            />
          </div>
          <SubmitButton text="create profile" size="lg" />
        </Formcontainer>
      </div>
    </section>
  );
};
export default CreateProfilePage;
