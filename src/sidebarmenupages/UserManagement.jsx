import React from "react";
import SidebarMenu from "../components/SidebarMenu";
import NavbarMenu from "../components/NavbarMenu";

import { Box } from "@mui/material";
import Grid from '@mui/material/Grid';


import '../Dashboard.css'

import Tabs from "../Tabs";

export default function UserManagement() {
    return(
        <>
        <div>
        <NavbarMenu />
            <Box height={60} />
            <Box sx={{ display: "flex" }}>
                <SidebarMenu />
                <Box component="main" sx={{ flexGrow: 1, p: 2 }}>
                    <Box height={2} />
                    <Grid container spacing={2} >
                        <Grid item xs={12} sm={12} md={12} lg={12}>   
                            <Tabs />
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </div>

        </>
    )
}