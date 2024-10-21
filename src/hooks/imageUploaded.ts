export const AvatarUpload = async (
  file: File
) => {
  const fileAvatar = file;

  if (!file) return;

  const data = new FormData();
  data.append("file", fileAvatar);
  data.append("upload_preset", import.meta.env.VITE_REACT_APP_CLOUDINARY_UPLOAD);
  data.append("cloud_name", import.meta.env.VITE_REACT_APP_CLOUD_NAME);

  const res = await fetch(`https://api.cloudinary.com/v1_1/${import.meta.env.VITE_REACT_APP_CLOUD_NAME  }/image/upload`,
    {
      method: "POST",
      body: data,
    }
  );

  const uploadedImageUrl = await res.json();
  
  return uploadedImageUrl.url
};

// setAvatar: (arg0: string) => void