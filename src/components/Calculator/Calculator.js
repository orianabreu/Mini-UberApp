import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputAdornment from '@material-ui/core/InputAdornment';
import DirectionsCarIcon from '@material-ui/icons/DirectionsCar';
import EuroIcon from '@material-ui/icons/Euro';
import MyButton from '../Button/Button';
import Header from '../../sections/Header/Header';
import useStyles, { Container, Description1 } from './styles';

export default function Calculator() {

    const [values, setValues] = useState({
        km: '',
        price: '',
      });

    const [open, setOpen] = useState(false);

    const { km, price } = values;
    
    const handleChange = (event) => {
        const { name, value } = event.target;

        setValues((prevValue) => ({
        ...prevValue,
        [name]: value
        }));
      };

    const showDialogResult = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
        setValues({
            km:'',
            price:''
        });
      };

    const { textField, multilineColor, clickedButton, openedDialog } = useStyles();

    return (
        <Container>
            <Header />

            <Description1>
                Introduce distance and fee manually to calculate the cost of your route
            </Description1>

            <form noValidate autoComplete='off'>
                <TextField 
                    value={km}
                    name='km'
                    onChange={handleChange}
                    variant='outlined'
                    className={textField}
                    type="number"
                    placeholder='Introduce distance (Km)'
                    InputProps={{
                        className: multilineColor,
                        shrink: true,
                        endAdornment: (
                            <InputAdornment position='end'>
                                <DirectionsCarIcon />
                            </InputAdornment>
                        ),
                    }}
                />
                <TextField 
                    value={price}
                    name='price'
                    onChange={handleChange}
                    variant='outlined'
                    className={textField}
                    placeholder="Introduce fee (€/Km)"
                    type="number"
                    InputProps={{
                        className: multilineColor,
                        shrink: true,
                        endAdornment: (
                            <InputAdornment position='end'>
                                <EuroIcon />
                            </InputAdornment>
                        ),
                    }}
                />
            </form>

            <MyButton 
                className={clickedButton}
                onClick={showDialogResult}
            >
                Calculate
            </MyButton>

            <Dialog
                open={open}
                setOpen={setOpen}
                keepMounted
                onClose={handleClose}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
                PaperProps={{
                    className: openedDialog,
                }}
            >
                <DialogTitle id="alert-dialog-slide-title">
                    Your route will cost <b>{km*price}€</b>
                </DialogTitle>

                <DialogActions>
                    <MyButton onClick={handleClose} size='small'>
                        Close
                    </MyButton>
                </DialogActions>
            </Dialog>
        </Container>
    );
}