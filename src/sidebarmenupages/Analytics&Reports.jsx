import React from "react";
import SidebarMenu from "../components/SidebarMenu";
import NavbarMenu from "../components/NavbarMenu";

import { Box } from "@mui/material";
import Grid from '@mui/material/Grid';


import '../Dashboard.css'

import AnalyticsReportsBar from "../components/Analytics_&_Reports/Bar1";

export default function AnalyticsAndReports() {
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
                            <AnalyticsReportsBar />
                        </Grid>

                    </Grid>
                </Box>
            </Box>
        </div>

        </>
    )
}