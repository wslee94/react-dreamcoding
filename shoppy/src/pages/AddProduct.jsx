import React, { useState } from "react";
import InputText from "../components/InputText";
import InputImage from "../components/InputImage";
import { writeProductData } from "../firebase";
import { useNavigate } from "react-router-dom";

export default function AddProduct() {
  const [form, setForm] = useState({
    productImage: "",
    productName: "",
    productPrice: "",
    productCategory: "",
    productDescription: "",
    productOptions: "",
  });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const {
      productImage,
      productName,
      productPrice,
      productCategory,
      productDescription,
      productOptions,
    } = form;

    const id = await writeProductData(
      productImage,
      productName,
      productPrice,
      productCategory,
      productDescription,
      productOptions
    );

    navigate(`/products/${id}`);
  };

  const handleFormData = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div>
      <p className="text-2xl font-bold text-center my-2 text-sky-500">
        새로운 제품 등록
      </p>
      {form.productImage && (
        <img className="mx-auto my-2" width={300} src={form.productImage} />
      )}

      <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
        <InputImage name="productImage" onUpload={handleFormData} />
        <InputText
          value={form.productName}
          name="productName"
          onChange={handleFormData}
          placeholder="제품명"
        />
        <InputText
          value={form.productPrice}
          name="productPrice"
          onChange={handleFormData}
          placeholder="가격"
        />
        <InputText
          value={form.productCategory}
          name="productCategory"
          onChange={handleFormData}
          placeholder="카테고리"
        />
        <InputText
          value={form.productDescription}
          name="productDescription"
          onChange={handleFormData}
          placeholder="제품 설명"
        />
        <InputText
          value={form.productOptions}
          name="productOptions"
          onChange={handleFormData}
          placeholder="옵션들(콤마(,)로 구분)"
        />
        <button
          className="bg-sky-500/80 hover:bg-sky-500/100 text-white px-1 py-2"
          type="submit"
        >
          제품 등록하기
        </button>
      </form>
    </div>
  );
}
