import { RefObject, useEffect, useRef, useState } from "react";

type UseImageBlurPlaceholderT = (
  id: string,
  isIntersection?: boolean
) => [boolean, RefObject<HTMLImageElement>, () => void];

const useImageBlurPlaceholder: UseImageBlurPlaceholderT = (
  _id,
  isIntersecting
) => {
  const [loadImage, setLoadImage] = useState(false);
  const imageRef = useRef<HTMLImageElement>(null);

  const onImageLoad = () => imageRef.current?.classList.add("image-loaded");

  useEffect(() => {
    if (isIntersecting) setLoadImage(true);
  }, [isIntersecting]);

  return [loadImage, imageRef, onImageLoad];
};

export { useImageBlurPlaceholder };
