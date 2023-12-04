import { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Swal from "sweetalert2";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Modal from '@mui/material/Modal';
import AddUserList from "./adduserlist";
import EditUserList from "./edituserlist";
import Grid from '@mui/material/Grid';
import { db } from "../../lms-firebase-config";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { useAppStore } from "../../Apps";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function UsersList() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [open, setOpen] = useState(false);
  const [editopen, setEditOpen] = useState(false);
  const [formid, setFormid] = useState("");

  const handleOpen = () => setOpen(true);
  const handleEditOpen = () => setEditOpen(true);
  const handleClose = () => setOpen(false);
  const handleEditClose = () => setEditOpen(false);

  const setRows = useAppStore ((state) => state.setRows);
  const rows = useAppStore ((state) => state.rows);
  const empCollectionRef = collection(db, "tb_course");

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const data = await getDocs(empCollectionRef);
    setRows(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };


  const deleteUser = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.value) {
        deleteApi(id);
      }
    });
  };

  const deleteApi = async (id) => {
    const userDoc = doc(db, "tb_course", id);
    await deleteDoc(userDoc);
    Swal.fire("Deleted!", "Your Record has been deleted.", "success");
    getUsers();
  };

  const filterData = (v) => {
    if (v) {
      setRows([v]);
    } else {      
      getUsers();
    }
  };

  const editData = (id, coursename, instructorname, enrolled, start_date, end_date, description) => {
    const data ={
      id: id,
      coursename: coursename,
      instructorname: instructorname,
      enrolled: enrolled,
      start_date: start_date,
      end_date: end_date,
      description: description
    };
    setFormid(data);
    handleEditOpen();
  }

  return (
    <>
     <div>      
      <Modal
        open={open}        
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <AddUserList closeEvent={handleClose}/>
        </Box>
      </Modal>
      <Modal
        open={editopen}        
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <EditUserList closeEvent={handleEditClose} fid={formid}/>
        </Box>
      </Modal>
    </div>    
    <Grid container spacing={2} >
        <Grid item xs={12} sm={12} md={12} lg={12}>     
      {rows.length > 0 && (
        <Paper sx={{ width: "100%", overflow: "hidden", padding: "12px" }}>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ padding: "20px" }}
          >
            Course List
          </Typography>
          <Divider />
          <Box height={10} />
          <Stack direction="row" spacing={2} className="my-2 mb-2">
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={rows}
              sx={{ width: 300 }}
              onChange={(e, v) => filterData(v)}
              getOptionLabel={(rows) => rows.lastname || ""}
              renderInput={(params) => (
                <TextField {...params} size="small" label="Search Course name" />
              )}
            />
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
            ></Typography>
            <Button variant="contained" endIcon={<AddCircleIcon />}  onClick={handleOpen}>
              Add
            </Button>
          </Stack>
          <Box height={10} />
          <TableContainer>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  <TableCell align="left" style={{ minWidth: "100px" }}>
                    Course name
                  </TableCell>
                  <TableCell align="left" style={{ minWidth: "100px" }}>
                    Instructor name
                  </TableCell>
                  <TableCell align="left" style={{ minWidth: "100px" }}>
                    Enrolled
                  </TableCell>
                  <TableCell align="left" style={{ minWidth: "100px" }}>
                    Start date
                  </TableCell>
                  <TableCell align="left" style={{ minWidth: "100px" }}>
                    End date
                  </TableCell>
                  <TableCell align="left" style={{ minWidth: "100px" }}>
                    Description
                  </TableCell>
                  <TableCell align="left" style={{ minWidth: "100px" }}>
                    Action
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => {
                    return (
                      <TableRow
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={row.code}
                      >
                        <TableCell align="left">{row.coursename}</TableCell>
                        <TableCell align="left">{row.instructorname}</TableCell>
                        <TableCell align="left">{row.enrolled}</TableCell>
                        <TableCell align="left">{row.start_date}</TableCell>
                        <TableCell align="left">{row.end_date}</TableCell>
                        <TableCell align="left">{row.description}</TableCell>
                        <TableCell align="left">
                          <Stack spacing={2} direction="row">
                            <EditIcon
                              style={{
                                fontSize: "20px",
                                color: "blue",
                                cursor: "pointer",
                              }}
                              className="cursor-pointer"
                              onClick={()=>{
                                editData(
                                  row.id, 
                                  row.coursename, 
                                  row.instructorname, 
                                  row.enrolled, 
                                  row.start_date, 
                                  row.end_date,
                                  row.description);
                              }}  
                            />
                            <DeleteIcon
                              style={{
                                fontSize: "20px",
                                color: "darkred",
                                cursor: "pointer",
                              }}
                              onClick={() => {
                                deleteUser(row.id);
                              }}
                            />
                          </Stack>
                        </TableCell>
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      )}
      </Grid>
      </Grid>
    </>
  );
}
