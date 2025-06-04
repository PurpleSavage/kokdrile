import { Image } from "@/modules/main/domain/Image";

export const pollUntilReady = async (
  imageId: string,
  onReady: (image: Image) => void,
  maxRetries = 5,
  delay = 2000
) => {
  let retries = 0;
  while (retries < maxRetries) {
    const res = await fetch(`/api/image/${imageId}`);
    const data = await res.json();
    if (data.url) {
      onReady(data); // reemplaza o actualiza imagen con URL válida
      return;
    }
    retries++;
    await new Promise((res) => setTimeout(res, delay));
  }
  console.warn("La imagen no se generó a tiempo.");
};
