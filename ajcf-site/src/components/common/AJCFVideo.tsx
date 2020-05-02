import React, { CSSProperties, memo, PropsWithChildren, useCallback, useRef, useState, } from "react";
import { Modal } from "semantic-ui-react";
import cx from "classnames";
import { LazyLoadedImage } from "../Shared/LazyLoadedImage";
import { useExitFullScreenEvent } from "../../assets/hooks/UI/useExitFullScreenEvent";

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

const playContainerStyle = {
  zIndex: 2,
  userSelect: "none",
  backgroundColor: "white",
  position: "absolute",
  cursor: "pointer",
  borderRadius: 80,
  top: "calc(50% - 40px)",
  left: "calc(50% - 40px)",
} as const;

const playIconStyle = {
  boxShadow: "none",
  lineHeight: "80px",
  fontSize: 25,
  margin: 0,
  width: 80,
  height: 80,
  paddingLeft: 7,
};

interface VideoProps {
  onExitFullScreen: any;
  videoSource: string;
}

const Video = memo(({ onExitFullScreen, videoSource }: VideoProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useExitFullScreenEvent(videoRef, onExitFullScreen);

  return (
    <video
      autoPlay
      controls
      preload="auto"
      ref={videoRef}
      src={videoSource}
      style={videoStyle}
    />
  );
});

interface LandingVideoProps {
  containerStyle?: CSSProperties;
  videoOverlayImageSource: string;
  videoOverlayImageWidthHeightRatio: number;
  videoOverlayImageDominantColor: string;
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
  videoOverlayImageWidthHeightRatio,
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
    <div
      style={containerStyle}
      className={cx("video-container", containerClassName)}
    >
      <LazyLoadedImage
        widthHeightRatio={videoOverlayImageWidthHeightRatio}
        srcLarge={videoOverlayImageSource}
        imageStyle={videoOverlayImageStyle}
        containerStyle={videoOverlayImageContainerStyle}
        dominantColor={videoOverlayImageDominantColor}
        id={videoOverlayImageId}
        alt={videoOverlayImageAlt}
      />
      <div style={playContainerStyle} className="btn-play">
        <i className="ui icon play" style={playIconStyle} />
      </div>
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
        <Video
          onExitFullScreen={handleOpenVideoDialog}
          videoSource={videoSource}
        />
      </Modal>
    </div>
  );
};

export { AJCFVideo };
