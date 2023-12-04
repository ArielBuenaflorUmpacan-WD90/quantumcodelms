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
import { collection, updateDoc, getDocs, doc, get } from "firebase/firestore";
import { db } from "../.././lms-firebase-config";
import { useAppStore } from "../.././Apps";

export default function EditUserList({ fid, closeEvent}) {
    
    const [coursename, setCoursename] = useState("");
    const [instructorname, setInstructorname] = useState("");
    const [enrolled, setEnrolled] = useState("");
    const [start_date, setStart_date] = useState("");
    const [end_date, setEnd_date] = useState("");
    const [description, setDescription] = useState("");
    
    const setRows = useAppStore ((state) => state.setRows);
    const empCollectionRef = collection(db, "tb_course");

    useEffect(() => {
        console.log("FID: " + fid.id);
        setCoursename(fid.coursename);
        setInstructorname(fid.instructorname);
        setEnrolled(fid.enrolled);
        setStart_date(fid.start_date);
        setEnd_date(fid.end_date);
        setDescription(fid.description);
    }, []);

    const handleCoursenamePage = (event) => {
        setCoursename(event.target.value);
    };

    const handleInstructornamePage = (event) => {
        setInstructorname(event.target.value);
    };

    const handleEnrolledPage = (event) => {
        setEnrolled(event.target.value);
    };

    const handleStart_datePage = (event) => {
        setStart_date(event.target.value);
    };

    const handleEnd_datePage = (event) => {
        setEnd_date(event.target.value);
    };

    const handleDescriptionPage = (event) => {
        setDescription(event.target.value);
    };
     
    const createUser = async () => {
        const userDoc = doc(db, "tb_course", fid.id);
        const newFields = {
            coursename: coursename,
            instructorname: instructorname,
            enrolled: enrolled,
            start_date: start_date,
            end_date: end_date,
            description: description,
        };
        await updateDoc(userDoc, newFields);
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
            <Typography variant='h5' align='center'> Edit Course </Typography>
            <IconButton style={{ position: "absolute", top: "0", right: "0"}} onClick={closeEvent}>
                <CloseIcon />
            </IconButton>
            <Box height={20}/>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <TextField 
                        id="outlined-basic" 
                        label="Course name" 
                        variant="outlined" 
                        size="small" 
                        type="text"
                        value={coursename}
                        onChange={handleCoursenamePage}
                        sx={{ minWidth: "100%" }} 
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField 
                        id="outlined-basic" 
                        label="Instructor name" 
                        variant="outlined" 
                        size="small" 
                        type="text"
                        value={instructorname}
                        onChange={handleInstructornamePage}
                        sx={{ minWidth: "100%" }} 
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField 
                        id="outlined-basic" 
                        label="Enrolled" 
                        variant="outlined" 
                        size="small" 
                        type="text"
                        value={enrolled}
                        onChange={handleEnrolledPage}
                        sx={{ minWidth: "100%" }} 
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField 
                        id="outlined-basic" 
                        label="" 
                        variant="outlined" 
                        size="small" 
                        type="date"
                        value={start_date}
                        onChange={handleStart_datePage}
                        sx={{ minWidth: "100%" }} 
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField 
                        id="outlined-basic" 
                        label="" 
                        variant="outlined" 
                        size="small"
                        type="date" 
                        value={end_date}
                        onChange={handleEnd_datePage}
                        sx={{ minWidth: "100%" }} 
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField 
                        id="outlined-basic" 
                        label="Description" 
                        variant="outlined" 
                        size="small"
                        type="text" 
                        value={description}
                        onChange={handleDescriptionPage}
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
