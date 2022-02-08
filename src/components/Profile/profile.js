import * as React from "react";
import appConfig from "../../../config.json";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { AiOutlineDownload } from "react-icons/ai";
import { Typography } from "@mui/material";
import Zoom from "@mui/material/Zoom";
import GitHubIcon from '@mui/icons-material/GitHub';
import { BackgroundParticles } from "../Particles/particles";
import "@fontsource/poppins";

const icon = (
    <Box
        sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: '500px',
        }}
    >
        <img
            src="/assets/foto-portfolio.jpg"
            alt="user-default"
            height={"180px"}
            width={"200px"}
            style={{ borderRadius: "50%" }}
        />
    </Box>
);

const text = (
    <Box
        sx={{
            marginTop: '-10%',
            marginBottom: '2%',
            fontFamily: "poppins",
            color: appConfig.colors[200],
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
        }}
    >
        <Typography variant="h5">Henrique Lauar</Typography>
        <Typography variant="h6">Front-End Developer</Typography>
    </Box>
);

const download = (
    <Box
        sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
        }}
    >
        <a href="/assets/henrique-lauar.pdf" download>
            <Button
                variant="outlined"
                sx={{
                    fontFamily: "poppins",
                    backgroundColor: appConfig.colors[500],
                    color: appConfig.colors[200],
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                Download CV
                <AiOutlineDownload size={25} />
            </Button>
        </a>
    </Box>
)

const github = (
    <Box
        sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '5%',
        }} >
        <a 
        href="https://github.com/henriquelauar"
        target='_blank'
        style={{
            color: '#7a86dd',
          }}
        > <GitHubIcon sx={{ fontSize: 40 }} /></a>
    </Box>
)

export default function Profile() {
    const [checked] = React.useState(true);

    return (
        <>
            <Box
                id='profile'
                sx={{ marginTop: '-20%', }}
            >
                <Zoom in={checked} style={{ position: 'relative', zIndex: '1', transitionDelay: checked ? "200ms" : "0ms" }}>
                    {icon}
                </Zoom>
                <Zoom in={checked} style={{  position: 'relative', zIndex: '1', transitionDelay: checked ? "400ms" : "0ms" }}>
                    {text}
                </Zoom>
                <Zoom in={checked} style={{  position: 'relative', zIndex: '1', transitionDelay: checked ? "600ms" : "0ms" }}>
                    {download}
                </Zoom>
                <Zoom in={checked} style={{  position: 'relative', zIndex: '1', transitionDelay: checked ? "800ms" : "0ms" }}>
                    {github}
                </Zoom>
                <BackgroundParticles />
            </Box>
        </>
    );
}
