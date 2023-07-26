import { Box } from "@mui/material";
import { FaPinterestP } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { RiFacebookFill } from "react-icons/ri";

const SocialIcons = () => {
  const handleInstagram = () => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile) {
      window.location.href = "instagram://user?username=condeparadela";
      setTimeout(() => {
        window.location.href = "https://www.instagram.com/condeparadela/";
      }, 1000);
    } else {
      window.open("https://www.instagram.com/condeparadela/", "_blank");
    }
  };

  const handleFacebook = () => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isMobile) {
      // For mobile devices, try to open the Facebook app first
      window.location.href = "fb://page/100063358957679";

      // If the Facebook app is not installed or fails to open, redirect to the Facebook page in the browser
      setTimeout(() => {
        window.location.href =
          "https://www.facebook.com/p/CONDE-PARADELA-architects-100063358957679/";
      }, 1000); // Wait for 1 second before redirecting to allow the Facebook app to open
    } else {
      // For non-mobile devices, open the Facebook page in a new tab/window
      window.open(
        "https://www.facebook.com/p/CONDE-PARADELA-architects-100063358957679/",
        "_blank"
      );
    }
  };

  const handlePinterest = () => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isMobile) {
      // For mobile devices, try to open the Facebook app first
      window.location.href = "pinterest://user/condeparadela";

      // If the Facebook app is not installed or fails to open, redirect to the Facebook page in the browser
      setTimeout(() => {
        window.location.href = "https://www.pinterest.pt/condeparadela/";
      }, 1000); // Wait for 1 second before redirecting to allow the Facebook app to open
    } else {
      // For non-mobile devices, open the Facebook page in a new tab/window
      window.open("https://www.pinterest.pt/condeparadela/", "_blank");
    }
  };

  return (
    <Box display="flex" columnGap={1}>
      <FiInstagram
        color="black"
        size="1.5em"
        onClick={() => handleInstagram()}
      />
      <RiFacebookFill
        color="black"
        size="1.5em"
        onClick={() => handleFacebook()}
      />
      <FaPinterestP
        color="black"
        size="1.5em"
        onClick={() => handlePinterest()}
      />
    </Box>
  );
};

export default SocialIcons;
