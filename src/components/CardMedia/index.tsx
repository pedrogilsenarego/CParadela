import { useState } from "react";
import { CardMedia as MuiCardMedia, Typography } from "@mui/material";

import debounce from 'lodash/debounce';

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
  const [hovera, setHover] = useState(false)


  const handleHover = debounce((signal) => {
    setHover(signal);

  }, 100);


  const handleClick = () => {
    if (onClick) onClick();
  };
  return (
    <div style={{ position: "relative" }}>
      {imageLoading && (
        <Typography
          color='white'
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            marginTop: "auto",
            marginBottom: "auto",
            left: 0,
            right: 0,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          Loading...
        </Typography>
      )}
      <MuiCardMedia
        onLoad={() => setImageLoading(false)}
        style={{
          borderRadius: borderRadius ?? "0px",
          //cursor: "pointer",
          opacity: imageLoading ? 0 : 1,

        }}
        component='img'
        height={height || "auto"}
        image={image}
        alt={alt || ""}
        onClick={handleClick}
        onMouseEnter={(e) => {
          e.preventDefault();
          e.stopPropagation();

          handleHover(true)
        }}
        onMouseLeave={(e) => {
          e.preventDefault();
          e.stopPropagation();

          handleHover(false)
        }}

      />
      {title && (
        <Typography
          style={{
            position: "absolute",
            bottom: "-30px",
            left: "5px",
            opacity: hovera ? 1 : 0,
            transition: "all 0.1s ease-in",
            zIndex: -1000,

          }}
        >
          {title}
        </Typography>
      )}
    </div>
  );
};

export default CardMedia;
