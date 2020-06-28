import React, { CSSProperties, memo, PropsWithChildren, useCallback, useRef, useState } from "react";
import { Modal } from "semantic-ui-react";
import cx from "classnames";
import { LazyLoadedImage } from "./LazyLoadedImage";
import { useExitFullScreenEvent } from "../../../assets/hooks/UI/useExitFullScreenEvent";

const videoStyle = {
  marginBottom: -2,
  borderRadius: 4,
  maxHeight: "100%",
  maxWidth: "100%",
  minHeight: "100%",
  minWidth: "100%",
};

const videoModalStyle: CSSProperties = {
  background: "none",
  border: ".28571429rem",
};

interface VideoProps {
  onExitFullScreen: any;
  videoSource: string;
}

const Video = memo(({ onExitFullScreen, videoSource }: VideoProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useExitFullScreenEvent(videoRef, onExitFullScreen);

  return <video autoPlay controls preload="auto" ref={videoRef} src={videoSource} style={videoStyle} />;
});

interface LandingVideoProps {
  containerStyle?: CSSProperties;
  videoOverlayImageSource: string;
  videoOverlayImageDominantColor?: string;
  videoOverlayImageAlt: string;
  videoOverlayImageId: string;
  videoOverlayImageStyle?: CSSProperties;
  videoOverlayImageContainerStyle?: CSSProperties;
  containerClassName?: string;
  videoSource: string;
}

const AJCFVideo = ({
  containerStyle,
  containerClassName,
  videoOverlayImageContainerStyle,
  videoOverlayImageSource,
  videoOverlayImageStyle,
  videoOverlayImageDominantColor,
  videoOverlayImageAlt,
  videoOverlayImageId,
  videoSource,
  children,
}: PropsWithChildren<LandingVideoProps>) => {
  const [openVideoDialog, setOpenVideoDialog] = useState(false);

  const handleOpenVideoDialog = useCallback(() => {
    setOpenVideoDialog(!openVideoDialog);
  }, [openVideoDialog]);

  return (
    <div onClick={handleOpenVideoDialog} style={containerStyle} className={cx("video-container", containerClassName)}>
      <LazyLoadedImage
        srcLarge={videoOverlayImageSource}
        imageStyle={videoOverlayImageStyle}
        containerStyle={videoOverlayImageContainerStyle}
        dominantColor={videoOverlayImageDominantColor}
        id={videoOverlayImageId}
        alt={videoOverlayImageAlt}
      />
      {children}
      <Modal
        basic
        closeOnEscape
        closeOnDimmerClick
        open={openVideoDialog}
        style={videoModalStyle}
        onClose={handleOpenVideoDialog}
        size="large"
        closeIcon
      >
        <Video onExitFullScreen={handleOpenVideoDialog} videoSource={videoSource} />
      </Modal>
    </div>
  );
};

export { AJCFVideo };
