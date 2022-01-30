/**
 * Para poder ver modificar y todo las calles, pero siento que requieor una pagina aparte con solo ver las paginas para evitar problemas
 * 
 */
/**
 * Esta pagina basicamente sera hacer la matriz de calles que existen en la actualidad. Probablemente redundante
 * De momento identica a Calles Existentes
 */

 import React, {useEffect, useState} from "react";
 import NavBarComponent from "./NavBarComponent";
 import Table from '@mui/material/Table';
 import TableBody from '@mui/material/TableBody';
 import TableCell from '@mui/material/TableCell';
 import TableContainer from '@mui/material/TableContainer';
 import TableHead from '@mui/material/TableHead';
 import TableRow from '@mui/material/TableRow';
 import Paper from '@mui/material/Paper';
 import Button from '@mui/material/Button';
 import Snackbar from '@mui/material/Snackbar';
 import MuiAlert from '@mui/material/Alert'
 import Box from '@mui/material/Box';
 import Typography from '@mui/material/Typography';
 import Modal from '@mui/material/Modal';
 import CrearCalle from "./CrearCalleComponent";
 import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from "@material-ui/core";
 import EditarCalle from "./EditarCalleComponent";
 
 export default function CRUDBase(){

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

    const [severity, setSeverity] = useState("success");

    const [mensaje, setMensaje] = useState("");

    const [open, setOpen] = useState(false);

    const [datosModificar, setDatosModificar] = useState([]);

    const [abierto, setAbierto] = useState(false);
    const handleAbierto = (row) => {setAbierto(true); setDatosModificar(row)};
    const handleCierre = () => setAbierto(false);

    const [notificacion, setNotificacion] = useState(false);

        const handleBorrarDef = () =>{
        borrarCalle(deBoorado);
        setNotificacion(false);
    }
    
    const handleCerrarNotif = () => {
        setNotificacion(false);
    }




    const handleClick = () => {
      setOpen(true);
     };

     const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

         setOpen(false);
     };
    

    const[filas, setFilas] = useState([]);

    const borrarCalle = (deBoorado) =>{
        const response = fetch(`http://backend.test/api/calle/${deBoorado}`, {
            method: 'delete'
        }).then((response) => { 
            if(response.status===200){
                getCalles(); 
                handleClick(); 
                setSeverity('info'); 
                setMensaje('Calle Borrada con Exito');
            }else{
                getCalles(); 
                handleClick(); 
                setSeverity('error'); 
                setMensaje('La Calle no ha sido Borrada');}
            });

    }

    const [deBoorado, setDeBorrado] = useState();

    

    const getCalles = async () => {
        const response = await fetch(`http://backend.test/api/calle/datos`);
        const data = await response.json();
        setFilas(data);
        console.log(data);
        //console.log(data.hits);
    };

    useEffect(()=>{
        getCalles();
    }, []);

    return(
        <div>
            <NavBarComponent></NavBarComponent>
            <Button style={{backgroundColor: "#69a420"}} variant="contained" onClick={handleAbierto}>Ingresar Nueva Calle</Button>
               
            <TableContainer component={Paper}>
            <Table sx={{minWidth: 650 }} aria-label= "Calles Existentes">
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell align='right'>Calle</TableCell>
                            <TableCell align='right'>Ciudad</TableCell>
                            <TableCell align='right'>Provincia</TableCell>
                            <TableCell align='right'>Región</TableCell>
                            <TableCell align='right'>Botones Modificar</TableCell>
                            <TableCell align='right'>Botones Borrar</TableCell>
                        </TableRow>
                    
                    </TableHead>
            
                <TableBody>
                    {filas.map((row) =>(
                        <TableRow
                            key={row[0].ca_id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        <TableCell component="th" scope="row">{row[0].ca_id}</TableCell>
                        <TableCell align='right'>{row[0].ca_nombre}</TableCell>
                        <TableCell align='right'>{row[1].ci_nombre}</TableCell>
                        <TableCell align='right'>{row[2].pr_nombre}</TableCell>
                        <TableCell align='right'>{row[3].re_nombre}</TableCell>
                        <TableCell align='right'><Button variant="contained" onClick={(e)=>{handleAbierto(row)}}>Modificar</Button></TableCell>
                           
                        <TableCell align='right'><Button color="error" variant="contained" onClick={() => {setNotificacion(true); setDeBorrado(row[0].ca_id)}}>Borrar</Button></TableCell>
                        </TableRow>
                    ))}
                    

                </TableBody>
                </Table>
                <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}><MuiAlert onClose={handleClose} severity={severity}>{mensaje}</MuiAlert></Snackbar>
                <CrearCalle abierto={abierto} setAbierto={setAbierto} cerrado={handleCierre} setSeverity={setSeverity} setMensaje={setMensaje} getCalles={getCalles} setOpen={setOpen} datosModificar={datosModificar ?? []}></CrearCalle>
                
                    <Dialog open={notificacion} >
                        <DialogTitle id="alert-dialog-title">
                        {"¿Realmente Deseas Borrar?"}
                          </DialogTitle>
                          <DialogContent>
                            <DialogContentText id="alert-dialog-description">
                              El Borrado es Definitivo y no puede deshacerse.
                              ¿Realmente deseas Borrar?
                            </DialogContentText>
                          </DialogContent>
                          <DialogActions>
                            <Button onClick={handleCerrarNotif}>Cancelar</Button>
                            <Button onClick={handleBorrarDef} autoFocus>
                              Borrar
                            </Button>
                          </DialogActions>
                    </Dialog>
            </TableContainer>
            
            
        </div>
    );
}