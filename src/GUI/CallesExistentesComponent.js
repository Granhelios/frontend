import React, {useEffect, useState} from "react";
import NavBarComponent from "./NavBarComponent";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



export default function CallesExistentesComponent(){

    
    const[filas, setFilas] = useState([]);

    

    const getCalles = async () => {
        const response = await fetch(`http://backend.test/api/calle/datos`);
        const data = await response.json();
        setFilas(data);
    };

    useEffect(()=>{
        getCalles();
    }, []);

    return(
        <div>
            <NavBarComponent></NavBarComponent>
            
            <TableContainer component={Paper}>
            <Table sx={{minWidth: 650 }} aria-label= "Calles Existentes">
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell align='right'>Calle</TableCell>
                            <TableCell align='right'>Ciudad</TableCell>
                            <TableCell align='right'>Provincia</TableCell>
                            <TableCell align='right'>Región</TableCell>
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
                        </TableRow>
                    ))}
                    

                </TableBody>
                </Table>
            </TableContainer>
        
            
        </div>
    );
}