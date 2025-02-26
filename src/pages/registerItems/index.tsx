import React, { useState, ChangeEvent, FormEvent } from "react";
import { useRouter } from "next/router";
import {
  PageContainer,
  RegisterForm,
  Title,
  FormGroup,
  Label,
  Input,
  SubmitButton,
} from "@/styles/shared/forms";
import { createProduct } from "@/services/createProduct";
import { toast } from "react-toastify";
import { uploadImages } from "@/services/uploadImages";

const RegisterItems: React.FC = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [inventory, setInventory] = useState("");
  const [images, setImages] = useState<File[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const router = useRouter();

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImages(Array.from(e.target.files));
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const token = localStorage.getItem("token");
    if (!token) {
      alert("You must be logged in to create a product.");

      return;
    }

    try {
      const createResponse = await createProduct(
        title,
        parseFloat(price),
        parseInt(inventory)
      );

      const productId = createResponse._id;
      console.log("Product created:", productId);

      if (images.length > 0) {
        const formData = new FormData();
        images.forEach((image) => {

          formData.append("file", image);

        });

        await uploadImages(productId, formData)

        toast.success("Product created successfully!", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        console.log("Images uploaded successfully");
      }

      router.push("/home"); 
    } catch (error) {
      console.error("Failed to create product:", error);
      toast.error("Failed to create product. Please try again.", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <PageContainer>
      <RegisterForm onSubmit={handleSubmit}>
        <Title>Create New Product</Title>

        <FormGroup>
          <Label htmlFor="title">Title</Label>
          <Input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="price">Price</Label>
          <Input
            id="price"
            type="number"
            step="0.01"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="inventory">Inventory</Label>
          <Input
            id="inventory"
            type="number"
            value={inventory}
            onChange={(e) => setInventory(e.target.value)}
            required
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="images">Images</Label>
          <Input
            id="images"
            type="file"
            accept="image/*"
            multiple
            onChange={handleImageChange}
          />
        </FormGroup>

        <SubmitButton type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Creating..." : "Create Product"}
        </SubmitButton>
      </RegisterForm>
    </PageContainer>
  );
};

export default RegisterItems;
