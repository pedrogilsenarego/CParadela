import { i18n } from "../../translations/i18n";
import { Typography, Container } from "@mui/material";
import { listWorks } from "./constants";

const About = () => {
  return (
    <Container maxWidth='xl'>
      <Typography
        align='justify'
        style={{ whiteSpace: "pre-line", width: "40%" }}
      >
        {i18n.t("modules.about.mainText")}
      </Typography>
      <Typography
        align='justify'
        style={{ marginTop: "60px", whiteSpace: "pre-line", width: "40%" }}
      >
        {i18n.t("modules.about.mainText")}
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
    </Container>
  );
};

export default About;
