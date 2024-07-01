import {
  Box,
  Container,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { projects, references } from "../../assets/content/projects";
import { ROUTE_PATHS } from "../../constants/routes";
import { hover } from "../../slicer/general/general.actions";
import { State } from "../../slicer/types";
import { i18n } from "../../translations/i18n";
import SocialIcons from "./components/SocialIcons";

const About = () => {
  const Theme = useTheme();
  const mobile = useMediaQuery(Theme.breakpoints.down("sm"));
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const lang = useSelector<State, string>(
    (state) => state.general.lang || "PT"
  );

  const renderLaptop = () => {
    return (
      <div
        style={{
          position: "relative",
          marginLeft: "80px",
          marginTop: "20px",
        }}
      >
        <Typography
          align="left"
          style={{ whiteSpace: "pre-line", width: "40%", marginTop: "40px" }}
        >
          {i18n.t("modules.about.mainText")}
        </Typography>
        <Typography
          align="left"
          style={{ marginTop: "40px", whiteSpace: "pre-line", width: "40%" }}
        >
          {i18n.t("modules.about.second")}
        </Typography>
        <Typography
          align="left"
          style={{ marginTop: "40px", whiteSpace: "pre-line", width: "40%" }}
        >
          {i18n.t("modules.about.third")}
        </Typography>
        <Box textAlign="left" mt="50px">
          <Typography>{i18n.t("modules.about.email")}</Typography>
          <Box
            onMouseEnter={() => dispatch(hover(true))}
            onMouseLeave={() => dispatch(hover(false))}
            onClick={() =>
              window.location.replace(
                `http://maps.google.com/?q=${i18n.t("modules.about.address")}`
              )
            }
          >
            <Typography style={{ whiteSpace: "pre-line" }}>
              {i18n.t("modules.about.address")}
            </Typography>
          </Box>
        </Box>
        <Box
          mt="40px"
          onMouseEnter={() => dispatch(hover(true))}
          onMouseLeave={() => dispatch(hover(false))}
        >
          <SocialIcons />
        </Box>
      </div>
    );
  };

  const renderMobile = () => {
    return (
      <Container>
        <Typography align="left" style={{ marginTop: "40px" }}>
          {i18n.t("modules.about.mainText")}
        </Typography>
        <Typography
          align="left"
          style={{ marginTop: "40px", whiteSpace: "pre-line" }}
        >
          {i18n.t("modules.about.second")}
        </Typography>
        <Typography
          align="left"
          style={{ marginTop: "40px", whiteSpace: "pre-line" }}
        >
          {i18n.t("modules.about.third")}
        </Typography>
        <Box textAlign="left" mt="50px">
          <Typography>{i18n.t("modules.about.email")}</Typography>
          <Box
            onClick={() =>
              window.location.replace(
                `http://maps.google.com/?q=${i18n.t("modules.about.address")}`
              )
            }
          >
            <Typography style={{ whiteSpace: "pre-line", marginTop: "10px" }}>
              {i18n.t("modules.about.address")}
            </Typography>
          </Box>
          <Box mt="30px">
            <SocialIcons />
          </Box>
        </Box>
        {/*
        <Typography
          align="left"
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
            <Typography
              align="left"
              key={pos}
              onClick={() =>
                navigate(
                  ROUTE_PATHS.REFERENCES.replace(":id", work?.id?.toString())
                )
              }
            >
              {work?.title}
            </Typography>
          );
        })}*/}
      </Container>
    );
  };

  return <>{mobile ? renderMobile() : renderLaptop()}</>;
};

export default About;
