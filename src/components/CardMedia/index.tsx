import { useState } from "react";
import { CardMedia as MuiCardMedia, Typography } from "@mui/material";

import debounce from 'lodash/debounce';
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
  const [hovera, setHover] = useState(false)
  const dispatch = useDispatch()

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
    <div style={{ position: "relative" }}
    >
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
      <div

      >
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
            handleHover2(true)
          }}
          onMouseLeave={(e) => {
            e.preventDefault();
            e.stopPropagation();

            handleHover(false)
            handleHover2(false)
          }}

        />
      </div>
      {
        title && (
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
        )
      }
    </div >
  );
};

export default CardMedia;
