import { cn } from "@/lib/utils";
import { CircularProgress } from "@mui/material";
import { useState, type ImgHTMLAttributes, type ReactElement } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

type ImageProps = ImgHTMLAttributes<HTMLImageElement> & {
  skeletonClassName?: string;
};

export const Image = ({
  className,
  height,
  skeletonClassName,
  width,
  ...props
}: ImageProps): ReactElement => {
  const [isImageLoaded, setIsImageLoaded] = useState<boolean>(false);

  const handleImageLoad = (): void => {
    setIsImageLoaded(true);
  };

  return (
    <>
      <div
        style={{ width, height }}
        className={cn(
          className,
          isImageLoaded ? "hidden" : "flex",
          "items-center justify-center",
          skeletonClassName,
        )}
      >
        <CircularProgress />
      </div>
      <LazyLoadImage
        onLoad={handleImageLoad}
        className={cn("object-contain", isImageLoaded ? "flex" : "hidden", className)}
        {...props}
      />
    </>
  );
};
