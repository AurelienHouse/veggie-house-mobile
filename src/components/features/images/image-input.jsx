import { Input } from "@/components/ui/input";
import { useState } from "react";

export const ImageInput = ({ image, onChange }) => {
  const [previewImage, setPreviewImage] = useState(image);
  const onInputChange = (e) => {
    const image = e.target.files[0];
    setPreviewImage(URL.createObjectURL(image));
    onChange(image);
  };
  return (
    <div className="flex items-center gap-2">
      <Input type="file" accept="image/*" onChange={onInputChange} />
      {previewImage ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={previewImage}
          className="aspect-square w-12 rounded-md bg-accent"
          alt="image"
        />
      ) : (
        <div>No image</div>
      )}
    </div>
  );
};
