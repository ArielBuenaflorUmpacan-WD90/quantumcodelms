import React from "react";
import SidebarMenu from "../components/SidebarMenu";
import NavbarMenu from "../components/NavbarMenu";
import { Box } from "@mui/material";
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import GroupsIcon from '@mui/icons-material/Groups';

import '../Dashboard.css'
import Courselist from "../components/Course/Courselist";

export default function CourseManagement() {
    return(
        <>
        <div className="bg_color">
        <NavbarMenu />
            <Box height={60} />
            <Box sx={{ display: "flex" }}>
                <SidebarMenu />
                <Box component="main" sx={{ flexGrow: 1, p: 2 }}>
                    <Box height={2} />
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Courselist />  
                        </Grid> 
                    </Grid>
                </Box>
            </Box>
        </div>

        </>
    )
}