import { i18n } from "../../translations/i18n";
import { Typography, useMediaQuery, useTheme } from "@mui/material";
import { listWorks } from "./constants";

const About = () => {

  const Theme = useTheme();
  const mobile = useMediaQuery(Theme.breakpoints.down("sm"));
  return (
    <div style={{

      marginLeft: mobile ? "20px" : "80px",

    }}>
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
    </div>
  );
};

export default About;
