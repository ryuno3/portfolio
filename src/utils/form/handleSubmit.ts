"use server";
import { ContactFormData } from "@/../types/form/type";
// import { redirect } from "next/navigation";

const sendFormContents = async (formData: FormData) => {
  const data = {
    name: formData.get("name"),
    age: formData.get("age"),
    email: formData.get("email"),
    message: formData.get("message"),
  } as ContactFormData;

  await setTimeout(() => console.log(data), 5000);
  // redirect("./");
};

export default sendFormContents;
