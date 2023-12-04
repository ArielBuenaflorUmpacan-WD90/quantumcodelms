import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import PlaceIcon from '@mui/icons-material/Place';
import { TextField } from '@mui/material';


export default function Profile() {
  return (
    <Box sx={{ flexGrow: 1 }}>
    <Grid container spacing={2}>
      <Grid item xs={12} sm={12} md={4}>
        <Card sx={{ minWidth: 275, border: 1 }}>
        <CardContent>
            <Typography variant="h5" component="div" borderBottom={1}>
                Contact Details
            </Typography><br />
            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                <EmailIcon sx={{ color: 'none', mr: 2 }} />
                <Typography>Admin@gmail.com</Typography>
            </Box><br />
            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                <PhoneIcon sx={{ color: 'none', mr: 2}} />
                <Typography>+022-2108-0110</Typography>
            </Box><br />
            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                <PlaceIcon sx={{ color: 'none', mr: 2}} />
                <Typography>United Kingdom</Typography>
            </Box>

        </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={12} md={8}>
        <Card sx={{ minWidth: 275, border: 1 }}>
        <CardContent>
            <Typography variant="h5" component="div" borderBottom={1}>
                Details
            </Typography><br />
            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>                
                <Typography>Last name : Umpacan</Typography>
            </Box><br />
            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>                
                <Typography>First name : Ariel</Typography>
            </Box><br />
            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>                  
                <Typography>Middle name : Buenaflor</Typography>
            </Box><br />
            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>                  
                <Typography>User name : Admin</Typography>
            </Box><br />
            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>                  
                <Typography>Skill/Occupation : Full Stack Web Developer</Typography>
            </Box><br />
            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>                  
                <Typography>Bio : I am a web developer with a vast array of knowledge in many different front end and back end languages, responsive frameworks, databases, and best code practices. </Typography>                
            </Box>          
        </CardContent>
        </Card>
      </Grid>
    </Grid>
  </Box>

  );
}