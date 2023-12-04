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
import { db } from "../lms-firebase-config";
import { collection } from "firebase/firestore";
import { useAppStore } from "../Apps";

import '../Dashboard.css'



export default function AdminDashboard() {
    
    const rows = useAppStore ((state) => state.rows);
    const empCollectionRef = collection(db, "tb_student");

    return(
        <>
        <div className="bg_color">
        <NavbarMenu />
            <Box height={60} />
            <Box sx={{ display: "flex" }}>
                <SidebarMenu />
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                   
                    
                    <Grid container spacing={2} >
                      
                        <Grid item xs={12} md={6}> 
                        
                            <Stack spacing={2}>

                            <Card sx={{ width: 100 + "%", height: 100 + "%", border: 1 }}>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div" align="center">
                                <GroupsIcon sx={{ fontSize: 70}}/>
                                </Typography>
                                <Typography variant="body2" textAlign="center">
                                20
                                </Typography>
                                <Typography variant="body2" color="text.secondary" textAlign="center">
                                Total Student
                                </Typography>
                            </CardContent>
                            </Card>  
                            </Stack> 
                        </Grid>
                        
                        <Grid item xs={12} md={6}> 
                            <Stack spacing={2}>
                            <Card sx={{ width: 100 + "%", height: 100 + "%", border: 1 }}>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div" align="center">
                                <GroupsIcon sx={{ fontSize: 70}}/>
                                </Typography>
                                <Typography variant="body2" textAlign="center">
                                20
                                </Typography>
                                <Typography variant="body2" color="text.secondary" textAlign="center">
                                Total Teacher
                                </Typography>
                            </CardContent>
                            </Card>  
                            </Stack> 
                        </Grid>
                        <Grid item xs={12} md={6}> 
                            <Stack spacing={2}>
                            <Card sx={{ width: 100 + "%", height: 100 + "%", border: 1 }}>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div" align="center">
                                <GroupsIcon sx={{ fontSize: 70}}/>
                                </Typography>
                                <Typography variant="body2" textAlign="center">
                                20
                                </Typography>
                                <Typography variant="body2" color="text.secondary" textAlign="center">
                                Total Active Student
                                </Typography>
                            </CardContent>
                            </Card>  
                            </Stack> 
                        </Grid>
                        <Grid item xs={12} md={6}> 
                            <Stack spacing={2}>
                            <Card sx={{ width: 100 + "%", height: 100 + "%", border: 1 }}>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div" align="center">
                                <GroupsIcon sx={{ fontSize: 70}}/>
                                </Typography>
                                <Typography variant="body2" textAlign="center">
                                20
                                </Typography>
                                <Typography variant="body2" color="text.secondary" textAlign="center">
                                Total Active Teacher
                                </Typography>
                            </CardContent>
                            </Card>  
                            </Stack> 
                        </Grid>

                    </Grid>
            
                </Box>
            </Box>
        </div>
        </>
    )
}