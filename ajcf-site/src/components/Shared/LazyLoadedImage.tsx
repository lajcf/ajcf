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

const ratioPreserveDivStyle = (ratio: number) => ({
  paddingBottom: `${ratio}%`,
});

const LazyLoadedImage = memo(
  (props: PropsWithChildren<LazyLoadedImageProps>) => {
    const [intersectionEntry, setNode] = useIntersectionObserver({});
    const [loadImage, imageRef, onImageLoad] = useImageBlurPlaceholder(
      props.id,
      intersectionEntry?.isIntersecting
    );

    return (
      <>
        <div
          ref={setNode}
          id={props.id}
          data-large={props.srcLarge}
          style={placeholderContainerStyle(
            props.dominantColor,
            props.containerStyle
          )}
          className={cx("image-placeholder", props.containerClassName)}
        >
          {props.children}
          {loadImage && (
            <img
              ref={imageRef}
              src={props.srcLarge}
              onLoad={onImageLoad}
              style={props.imageStyle}
              alt={props.alt}
            />
          )}
          {/*<div className="preserve-image-ratio-placeholder" style={ratioPreserveDivStyle(props.widthHeightRatio)} />*/}
        </div>
      </>
    );
  }
);

export { LazyLoadedImage };
