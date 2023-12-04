import React from "react";
import SidebarMenu from "../components/SidebarMenu";
import NavbarMenu from "../components/NavbarMenu";

import { Box } from "@mui/material";
import Grid from '@mui/material/Grid';

import '../Dashboard.css'

import Settings from "../components/Settings/List";

export default function UserManagement() {
    return(
        <>
        <div className="bg_color">
        <NavbarMenu />
            <Box height={70} />
            <Box sx={{ display: "flex" }}>
                <SidebarMenu />
                <Box component="main" sx={{ flexGrow: 1, p: 3, m: 3 }}>
                    <Box height={2} />
                    <Grid container spacing={2}>
                        <Settings />                       
                    </Grid>
                </Box>
            </Box>
        </div>

        </>
    )
}