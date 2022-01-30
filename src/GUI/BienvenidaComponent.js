/**
 * Pagina de inicio que reciba al visitante
 */
import {Container, List, ListItem, Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import NavBarComponent from './NavBarComponent';

const useStyles = makeStyles((theme) => ({
    paper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    listItem: {
        alignItems: 'center',
        justifyContent: 'center'
        
    },
    boldFont: {
        fontWeight: 'bold'
    }
}));

export default function BienvenidaComponent(){

    const classes = useStyles();

    return (

        
        <Container component="main">
            <NavBarComponent></NavBarComponent>
            <div className={classes.paper}>

                    <List>
                        <ListItem className={classes.listItem}>
                            <Typography variant="h2" className={classes.boldFont} gutterBottom>
                                Bienvenidos al Sistema de Administracion de Calles
                            </Typography>
                        </ListItem>
                    </List>
                </div>
        </Container>
        
    );
}