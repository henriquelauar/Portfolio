import * as React from "react";
import Container from "@mui/material/Container";
import Profile from "../Profile/profile";
import ProjectList from "../ProjectList/projectlist";
import { Box } from "@mui/system";
import appConfig from "../../../config.json"

export default function Menu() {
  return (
    <>
      <Container
        maxWidth="lg"
        sx={{
          height: "100%",
          maxWidth: "100%",
          maxHeight: "100vh",
          padding: "32px",
          marginTop: "13%",
        }}
      >
        <Profile />
        <ProjectList />
        <Box id='technologies'
          sx={{ height: '1000px', color: 'white', backgroundColor: appConfig.colors[600], marginTop: '30%', position: 'relative' }}>
        </Box>
        <Box id='contact'
          sx={{ height: '1000px', color: 'white', backgroundColor: appConfig.colors[600], marginTop: '30%', position: 'relative'}}>
        </Box>
      </Container>
    </>
  );
}
