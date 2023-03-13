import { i18n } from "../../translations/i18n";
import {
  Box,
  Container,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import SocialIcons from "./components/SocialIcons";
import { references } from "../../assets/content/projects";
import { ROUTE_PATHS } from "../../constants/routes";
import { useNavigate } from "react-router";

const About = () => {
  const Theme = useTheme();
  const mobile = useMediaQuery(Theme.breakpoints.down("sm"));
  const navigate = useNavigate();

  const renderLaptop = () => {
    return (
      <div
        style={{
          position: "relative",
          marginLeft: "80px",
          marginTop: "20px"

        }}
      >

        <Typography
          align='left'
          style={{ whiteSpace: "pre-line", width: "40%", marginTop: "40px" }}
        >
          {i18n.t("modules.about.mainText")}
        </Typography>
        <Typography
          align='left'
          style={{ marginTop: "40px", whiteSpace: "pre-line", width: "40%" }}
        >
          {i18n.t("modules.about.second")}
        </Typography>
        <Typography
          align='left'
          style={{ marginTop: "40px", whiteSpace: "pre-line", width: "40%" }}
        >
          {i18n.t("modules.about.third")}
        </Typography>
        <Box textAlign='left' mt="50px">
          <Typography>{i18n.t("modules.about.email")}</Typography>
          <Box onClick={() =>
            window.location.replace(
              `http://maps.google.com/?q=${i18n.t("modules.about.address")}`
            )
          }>
            <Typography
              style={{ whiteSpace: "pre-line" }}>
              {i18n.t("modules.about.address")}
            </Typography>
          </Box>

        </Box>
        <Box mt='10px'>
          <SocialIcons />
        </Box>
        <Typography
          align='left'
          style={{
            marginTop: "60px",
            whiteSpace: "pre-line",
            width: "40%",
            fontWeight: "600",
            marginBottom: "10px"
          }}
        >
          {i18n.t("modules.about.works")}
        </Typography>
        {references.map((work, pos) => {
          return (
            <Typography align='left' key={pos} onClick={() => navigate(
              ROUTE_PATHS.REFERENCES.replace(":id", work?.id?.toString())
            )}>
              {work?.description}
            </Typography>
          );
        })}
      </div>
    );
  };

  const renderMobile = () => {
    return (
      <Container>

        <Typography align='left' style={{ marginTop: "40px" }}>
          {i18n.t("modules.about.mainText")}
        </Typography>
        <Typography
          align='left'
          style={{ marginTop: "40px", whiteSpace: "pre-line" }}
        >
          {i18n.t("modules.about.second")}
        </Typography>
        <Typography
          align='left'
          style={{ marginTop: "40px", whiteSpace: "pre-line" }}
        >
          {i18n.t("modules.about.third")}
        </Typography>
        <Box textAlign='left' mt="50px">
          <Typography>{i18n.t("modules.about.email")}</Typography>
          <Box onClick={() =>
            window.location.replace(
              `http://maps.google.com/?q=${i18n.t("modules.about.address")}`
            )
          }>
            <Typography

              style={{ whiteSpace: "pre-line", marginTop: "10px" }}
            >
              {i18n.t("modules.about.address")}
            </Typography>
          </Box>
          <Box mt='10px'>
            <SocialIcons />
          </Box>
        </Box>
        <Typography
          align='left'
          style={{
            marginTop: "60px",
            whiteSpace: "pre-line",
            marginBottom: "10px",
            fontWeight: "600",
          }}
        >
          {i18n.t("modules.about.works")}
        </Typography>
        {references.map((work, pos) => {
          return (
            <Typography align='left' key={pos} onClick={() => navigate(
              ROUTE_PATHS.REFERENCES.replace(":id", work?.id?.toString())
            )}>
              {work?.title}
            </Typography>
          );
        })}
      </Container>
    );
  };

  return <>{mobile ? renderMobile() : renderLaptop()}</>;
};

export default About;
