import { useState, useEffect } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { Typography, Box } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";
import InputAdornment from "@mui/material/InputAdornment";
import MenuItem from "@mui/material/MenuItem";
import Swal from "sweetalert2";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { db } from "../../lms-firebase-config";
import { useAppStore } from "../../Apps";

export default function AddUserList({closeEvent}) {
    
    const [lastname, setLastname] = useState("");
    const [firstname, setFirstname] = useState("");
    const [middlename, setMiddlename] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const setRows = useAppStore ((state) => state.setRows);
    const empCollectionRef = collection(db, "tb_teacher");

    useEffect(() => {
        getUsers();
    }, []);


    const handleLastnamePage = (event) => {
        setLastname(event.target.value);
    };

    const handleFirstnamePage = (event) => {
        setFirstname(event.target.value);
    };

    const handleMiddlenamePage = (event) => {
        setMiddlename(event.target.value);
    };

    const handleEmailPage = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordPage = (event) => {
        setPassword(event.target.value);
    };
    
    const createUser = async () => {
        await addDoc (empCollectionRef, {
            lastname: lastname,
            firstname: firstname,
            middlename: middlename,
            email: email,
            password: password,
        });
        getUsers();
        closeEvent();
        Swal.fire("Submitted!", "Your Record has been submitted.", "success");
    };

    const getUsers = async () => {
        const data = await getDocs(empCollectionRef);
        setRows(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };    


  return (
    <>
        <Box sx={{ m: 2 }} />
        <Typography variant='h5' align='center'> Add User </Typography>
        <IconButton style={{ position: "absolute", top: "0", right: "0"}} onClick={closeEvent}>
            <CloseIcon />
        </IconButton>
        <Box height={20}/>
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <TextField 
                    id="outlined-basic" 
                    label="Lastname" 
                    variant="outlined" 
                    size="small" 
                    type="text"
                    value={lastname}
                    onChange={handleLastnamePage}
                    sx={{ minWidth: "100%" }} 
                />
            </Grid>
            <Grid item xs={12}>
                <TextField 
                    id="outlined-basic" 
                    label="Firstname" 
                    variant="outlined" 
                    size="small" 
                    type="text"
                    value={firstname}
                    onChange={handleFirstnamePage}
                    sx={{ minWidth: "100%" }} 
                />
            </Grid>
            <Grid item xs={12}>
                <TextField 
                    id="outlined-basic" 
                    label="Middlename" 
                    variant="outlined" 
                    size="small" 
                    type="text"
                    value={middlename}
                    onChange={handleMiddlenamePage}
                    sx={{ minWidth: "100%" }} 
                />
            </Grid>
            <Grid item xs={12}>
                <TextField 
                    id="outlined-basic" 
                    label="Email" 
                    variant="outlined" 
                    size="small" 
                    type="email"
                    value={email}
                    onChange={handleEmailPage}
                    sx={{ minWidth: "100%" }} 
                />
            </Grid>
            <Grid item xs={12}>
                <TextField 
                    id="outlined-basic" 
                    label="Passowrd" 
                    variant="outlined" 
                    size="small"
                    type="text" 
                    value={password}
                    onChange={handlePasswordPage}
                    sx={{ minWidth: "100%" }} 
                />
            </Grid>
            <Grid item xs={12}>
                <Typography variant="h5" align="center">
                    <Button variant="contained" onClick={createUser}> Submit </Button>
                </Typography>
            </Grid>
        </Grid>
    </>
  )
}
