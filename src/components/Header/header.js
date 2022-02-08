import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import appConfig from '../../../config.json'
import Link from "next/link";
import "@fontsource/poppins"

export default function Header() {
    return (
        <>
            <Box
                component="header"
                sx={{
                    position: 'fixed',
                    zIndex: '2',
                    textAlign: 'center',
                    maxHeight: '80px',
                    color: 'white',
                    width: '100%',
                    backgroundColor: appConfig.colors[100],
                }}>
                <Box component="nav"
                    sx={{
                        height: '80px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-evenly',
                        boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
                        borderRadius: '5px',
                    }}>
                        <Link href="#profile" onSubmit={(e) => { e.preventDefault() }} scroll={false}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Typography
                            sx={{
                                cursor: 'pointer',
                                fontFamily: 'poppins',
                                fontWeight: '900',
                                marginRight: '4px',
                                
                            }}>
                            HENRIQUE
                        </Typography>
                        <Typography
                            sx={{
                                cursor: 'pointer',
                                fontFamily: 'poppins',
                                fontWeight: '800',
                                fontSize: 'smaller',
                                color: appConfig.colors[400]
                            }}>
                            LAUAR
                        </Typography>
                    </Box>
                    </Link>
                    
                    <Link href="/#projects" scroll={false}>
                        <Typography sx={{ fontFamily: 'poppins', cursor: 'pointer' }} >Projects</Typography>
                    </Link>
                    <Link href="/#technologies" scroll={false}>
                        <Typography sx={{ fontFamily: 'poppins', cursor: 'pointer' }} >Technologies</Typography>
                    </Link>
                    <Link href="/#contact" scroll={false}>
                        <Typography sx={{ fontFamily: 'poppins', cursor: 'pointer' }} >Contact</Typography>
                    </Link>
                </Box>
            </Box>
        </>
    );
}