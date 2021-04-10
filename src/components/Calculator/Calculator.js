import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import MyButton from '../Button/Button';
import Header from '../../sections/Header/Header';
import useStyles, { Container, Description1 } from './styles';
import Dialog from '../Dialog/Dialog';

export default function Calculator() {

    const [values, setValues] = useState({
        km: '',
        price: '',
      });

    const [open, setOpen] = useState(false);
    
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

    const { textField, multilineColor, clickedButton } = useStyles();

    return (
        <>
        <Container>
            <Header />

            <Description1>
                Introduce distance and fee manually to calculate the cost of your route
            </Description1>

            <form noValidate autoComplete='off'>
                <TextField 
                    value={values.km}
                    name='km'
                    onChange={handleChange}
                    variant='outlined'
                    className={textField}
                    InputProps={{
                        className: multilineColor
                    }}
                />
                <TextField 
                    value={values.price}
                    name='price'
                    onChange={handleChange}
                    variant='outlined'
                    className={textField}
                    InputProps={{
                        className: multilineColor
                    }}
                />
            </form>

            <MyButton 
                className={clickedButton}
                onClick={showDialogResult}
            >
                Calculate
            </MyButton>
        </Container>
        <Dialog 
            open={open} 
            setOpen={setOpen}
        />
        </>
    );
}