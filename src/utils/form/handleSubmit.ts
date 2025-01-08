"use server";
import { FormData } from "@/../types/form/type";

const handleSubmit = async (formData: FormData) => {
  if (!formData.name || !formData.email || !formData.message) {
    return alert("全ての項目を入力してください");
  }
  await console.log(formData);
};

export default handleSubmit;
