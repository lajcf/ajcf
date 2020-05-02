import React, { CSSProperties, memo, PropsWithChildren } from "react";
import { ColorProperty } from "csstype";
import cx from "classnames";
import { useIntersectionObserver } from "../../assets/hooks/UI/useIntersectionObserver";
import { useImageBlurPlaceholder } from "../../assets/hooks/UI/useImageBlurPlaceHolder";

interface LazyLoadedImageProps {
  containerClassName?: string;
  widthHeightRatio: number;
  srcLarge: string;
  id: string;
  alt?: string;
  imageStyle?: CSSProperties;
  dominantColor?: ColorProperty;
  containerStyle?: CSSProperties;
}

const placeholderContainerStyle = (
  dominantColor?: ColorProperty,
  imageStyle?: CSSProperties
) => ({
  backgroundColor: dominantColor || "#F6F6F6",
  ...imageStyle,
});

const LazyLoadedImage = memo(
  ({
    containerClassName,
    srcLarge,
    id,
    alt,
    imageStyle,
    dominantColor,
    containerStyle,
    children,
  }: PropsWithChildren<LazyLoadedImageProps>) => {
    const [intersectionEntry, setNode] = useIntersectionObserver({});
    const [loadImage, imageRef, onImageLoad] = useImageBlurPlaceholder(
      id,
      intersectionEntry?.isIntersecting
    );

    return (
      <>
        <div
          ref={setNode}
          id={id}
          data-large={srcLarge}
          style={placeholderContainerStyle(dominantColor, containerStyle)}
          className={cx("image-placeholder", containerClassName)}
        >
          {children}
          {loadImage && (
            <img
              ref={imageRef}
              src={srcLarge}
              onLoad={onImageLoad}
              style={imageStyle}
              alt={alt}
            />
          )}
          {/*<div className="preserve-image-ratio-placeholder" style={ratioPreserveDivStyle(widthHeightRatio)} />*/}
        </div>
      </>
    );
  }
);

export { LazyLoadedImage };
