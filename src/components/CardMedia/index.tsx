import { CardMedia as MuiCardMedia, Typography } from "@mui/material";
import { useState } from "react";

import debounce from "lodash/debounce";
import { useDispatch } from "react-redux";
import { hover } from "../../slicer/general/general.actions";

interface Props {
  image: string;
  alt?: string;
  height?: string;
  onClick?: () => void;
  borderRadius?: string;
  title?: string;
}

const CardMedia = ({
  image,
  alt,
  onClick,
  height,
  borderRadius,
  title,
}: Props) => {
  const [imageLoading, setImageLoading] = useState(true);
  const [hovera, setHover] = useState(false);
  const dispatch = useDispatch();

  const modifiedImageUrl = `${image.substring(
    0,
    image.indexOf("/upload/") + 8
  )}q_auto:low/${image.substring(image.indexOf("/upload/") + 8)}`;

  const handleHover = debounce((signal) => {
    setHover(signal);
  }, 100);

  const handleHover2 = debounce((signal) => {
    dispatch(hover(signal));
  }, 100);

  const handleClick = () => {
    if (onClick) onClick();
  };
  return (
    <div
      style={{
        position: "relative",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {imageLoading && (
        <div
          style={{
            height: "50px",
            width: "50px",
            backgroundColor: "#FFFF00",
            position: "absolute",
            opacity: 0.2,
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        ></div>
      )}
      <div>
        <MuiCardMedia
          onLoad={() => setImageLoading(false)}
          style={{
            borderRadius: borderRadius ?? "0px",
            //cursor: "pointer",
            opacity: imageLoading ? 0 : 1,
          }}
          component="img"
          height={height || "auto"}
          image={modifiedImageUrl}
          alt={alt || ""}
          onClick={handleClick}
          onMouseEnter={(e) => {
            e.preventDefault();
            e.stopPropagation();

            handleHover(true);
            handleHover2(true);
          }}
          onMouseLeave={(e) => {
            e.preventDefault();
            e.stopPropagation();

            handleHover(false);
            handleHover2(false);
          }}
        />
      </div>
      {title && (
        <Typography
          style={{
            position: "absolute",
            top: "101%", // Position the element below its container's top edge
            lineHeight: "16px",
            left: "5px",
            fontSize: "12px",
            opacity: hovera ? 1 : 0,
            transition: "all 0.1s ease-in",
            zIndex: -1000,
            textOverflow: "ellipsis",
            textAlign: "start",
          }}
        >
          {title}
        </Typography>
      )}
    </div>
  );
};

export default CardMedia;
