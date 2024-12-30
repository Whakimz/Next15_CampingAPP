/* eslint-disable @typescript-eslint/no-explicit-any */
import { SubmitButton } from "@/components/Form/Buttons";
import Formcontainer from "@/components/Form/Formcontainer";
import FormInput from "@/components/Form/FormInput";

const createProfileAction = async (prevState: any, formData: FormData) => {
  "use server";
  const firstName = formData.get("firstName") as string;
  //validate
  // insert to DB
  // return
  console.log("FirstName Function Log:", firstName);
  return { message: "Create Profile Success!!!" };
};

const CreateProfilePage = () => {
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
