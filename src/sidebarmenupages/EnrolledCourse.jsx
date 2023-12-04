import React from "react";
import SidebarMenu from "../components/SidebarMenu";
import { Box, Typography } from "@mui/material";
import NavbarMenu from "../components/NavbarMenu";


export default function EnrolledCourse() {
    return(
        <>
            <NavbarMenu />
            <Box sx={{ display: "flex" }}>
                <SidebarMenu />
                
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>

                    <Typography paragraph>Enrolled Course</Typography>
                    
                </Box>
            </Box>
        </>
    )
}