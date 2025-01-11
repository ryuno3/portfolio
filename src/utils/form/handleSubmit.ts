"use server";
import { ContactFormData } from "@/../types/form/type";

const sendFormContents = async (formData: FormData) => {
  const data = {
    name: formData.get("name"),
    age: formData.get("age"),
    email: formData.get("email"),
    message: formData.get("message"),
  } as ContactFormData;

  if (!data.name || !data.age || !data.email || !data.message) {
    data.error = "必須項目が不足しています";
    return data;
  }
  return data;
};

export default sendFormContents;
