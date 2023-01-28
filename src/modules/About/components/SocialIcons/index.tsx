import { Box } from "@mui/material";
import { FiInstagram, FiFacebook } from "react-icons/fi";
import { FaPinterestP } from "react-icons/fa"

const SocialIcons = () => {
  const IconAvatar = ({ children }: any) => {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        style={{
          width: "30px",
          height: "30px",
          backgroundColor: "transparent",
          borderRadius: "50%",
          border: "solid 1px black"
        }}
      >
        {children}
      </Box>
    );
  };

  return (
    <Box display='flex' columnGap={1}>
      <IconAvatar><FiInstagram color="black" size="70%" /></IconAvatar>
      <IconAvatar><FiFacebook color="black" size="70%" /></IconAvatar>
      <IconAvatar><FaPinterestP color="black" size="70%" /></IconAvatar>

    </Box>
  );
};

export default SocialIcons;
