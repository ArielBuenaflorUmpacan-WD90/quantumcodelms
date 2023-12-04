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


export default function SecurityInfo() {
  return (
    <Box sx={{ flexGrow: 1 }}>
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Card sx={{ minWidth: 275, border: 1 }}>
        <CardContent>
            <Typography variant="h5" component="div" borderBottom={1}>
                Security & Password Details
            </Typography><br />
            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>                                
                <TextField id="outlined-basic" label="Current Password" variant="outlined" size='small' />
            </Box><br />
            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>                                
                <TextField id="outlined-basic" label="New Password" variant="outlined" size='small' />
            </Box><br />      
            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>                                
                <TextField id="outlined-basic" label="Re-type New Password" variant="outlined" size='small' />
            </Box>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <CardActions>
            <Button variant="contained" size="small">Update</Button>
        </CardActions>
        </Box>

        </Card>
      </Grid>
    </Grid>
  </Box>

  );
}