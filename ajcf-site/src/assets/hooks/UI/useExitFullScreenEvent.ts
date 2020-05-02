import { RefObject, useCallback, useEffect } from "react";
import { useWindowSize } from "./useWindowSize";

const useExitFullScreenEvent = (videoRef: RefObject<HTMLVideoElement>, onExitFullScreen: (...args: any[]) => any) => {
  const windowSize = useWindowSize();

  const onFullscreenChange = useCallback(() => {
    if (!document.fullscreenElement) onExitFullScreen();
  }, [onExitFullScreen]);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.addEventListener("fullscreenchange", () => onFullscreenChange());
    }
    if (windowSize.width && windowSize.width < 800) {
      if (videoRef.current && videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      }
    }
    if (videoRef.current) videoRef.current.removeEventListener("fullscreenchange", () => onFullscreenChange());
  }, [onFullscreenChange, videoRef, windowSize.width]);
};

export { useExitFullScreenEvent };
