import { Box } from "@mui/material";
import { FiInstagram, FiFacebook } from "react-icons/fi";
import { FaPinterestP } from "react-icons/fa"

const SocialIcons = () => {
  // const IconAvatar = ({ children }: any) => {
  //   return (
  //     <Box
  //       display="flex"
  //       justifyContent="center"
  //       alignItems="center"
  //       style={{
  //         width: "30px",
  //         height: "30px",
  //         backgroundColor: "transparent",
  //         borderRadius: "50%",

  //       }}
  //     >
  //       {children}
  //     </Box>
  //   );
  // };

  return (
    <Box display='flex' columnGap={1}>
      <FiInstagram color="black" size="1.5em" />
      <FiFacebook color="black" size="1.5em" />
      <FaPinterestP color="black" size="1.5em" />

    </Box>
  );
};

export default SocialIcons;
