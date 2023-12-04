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


export default function MyAccount() {
  return (
    <Box sx={{ flexGrow: 1 }}>
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Card sx={{ minWidth: 275, border: 1 }}>
        <CardContent>
            <Typography variant="h5" component="div" borderBottom={1}>
                Account Details
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
                <Typography>Password : admin123</Typography>
            </Box>
        
        </CardContent>
        </Card>
      </Grid>
    </Grid>
  </Box>

  );
}