import { projects } from "../../assets/content/projects";
import { useParams } from "react-router";
import { CardMedia, Grid, useMediaQuery, useTheme } from "@mui/material";

const Project = () => {
  const { id } = useParams();
  const Theme = useTheme();
  const mobile = useMediaQuery(Theme.breakpoints.down("sm"));

  return (
    <div
      style={{
        justifyContent: "center",
        marginLeft: mobile ? "20px" : "80px",
        marginRight: mobile ? "20px" : "80px",

      }}
    >


      <img
        style={{ height: mobile ? "auto" : "80vh", maxWidth: "100%" }}
        src={projects[Number(id)].mainImage}
        alt={projects[Number(id)].title}
        loading="lazy"
      />

      {projects[Number(id)].title}

    </div>
  );
};

export default Project;
