import { i18n } from "../../translations/i18n";
import {
  Box,
  Container,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { listWorks } from "./constants";

const About = () => {
  const Theme = useTheme();
  const mobile = useMediaQuery(Theme.breakpoints.down("sm"));

  const renderLaptop = () => {
    return (
      <div
        style={{
          position: "relative",
          marginLeft: "80px",

        }}
      >
        <Typography
          align='justify'
          style={{ whiteSpace: "pre-line", width: "40%" }}
        >
          {i18n.t("modules.about.mainText")}
        </Typography>
        <Typography
          align='justify'
          style={{ marginTop: "40px", whiteSpace: "pre-line", width: "40%" }}
        >
          {i18n.t("modules.about.second")}
        </Typography>
        <Typography
          align='justify'
          style={{ marginTop: "40px", whiteSpace: "pre-line", width: "40%" }}
        >
          {i18n.t("modules.about.third")}
        </Typography>
        <Typography
          align='justify'
          style={{
            marginTop: "60px",
            whiteSpace: "pre-line",
            width: "40%",
            fontWeight: "600",
          }}
        >
          {i18n.t("modules.about.works")}
        </Typography>
        {listWorks.map((work, pos) => {
          return (
            <Typography align='justify' style={{ marginTop: "10px" }} key={pos}>
              {work}
            </Typography>
          );
        })}
        <Box textAlign='right' style={{ position: "absolute", right: "80px", bottom: "0px" }}>
          <Typography>{i18n.t("modules.about.email")}</Typography>
          <Typography style={{ whiteSpace: "pre-line", marginTop: "20px" }}>
            {i18n.t("modules.about.address")}
          </Typography>
        </Box>
      </div>
    );
  };

  const renderMobile = () => {
    return (
      <Container>
        <Typography align='justify'>
          {i18n.t("modules.about.mainText")}
        </Typography>
        <Typography
          align='justify'
          style={{ marginTop: "40px", whiteSpace: "pre-line" }}
        >
          {i18n.t("modules.about.second")}
        </Typography>
        <Typography
          align='justify'
          style={{ marginTop: "40px", whiteSpace: "pre-line" }}
        >
          {i18n.t("modules.about.third")}
        </Typography>
        <Typography
          align='justify'
          style={{
            marginTop: "60px",
            whiteSpace: "pre-line",

            fontWeight: "600",
          }}
        >
          {i18n.t("modules.about.works")}
        </Typography>
        {listWorks.map((work, pos) => {
          return (
            <Typography align='justify' style={{ marginTop: "10px" }} key={pos}>
              {work}
            </Typography>
          );
        })}
        <Box textAlign='left' style={{ marginTop: "40px" }}>
          <Typography>{i18n.t("modules.about.email")}</Typography>
          <Typography style={{ whiteSpace: "pre-line", marginTop: "10px" }}>
            {i18n.t("modules.about.address")}
          </Typography>
        </Box>
      </Container>
    );
  };

  return <>{mobile ? renderMobile() : renderLaptop()}</>;
};

export default About;
