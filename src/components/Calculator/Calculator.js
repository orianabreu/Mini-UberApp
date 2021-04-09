import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Header from '../../sections/Header/Header';
import useStyles, { Container, Description1 } from './styles';

export default function Calculator() {

    const [values, setValues] = useState({
        km: '',
        price: '',
      });
    
      const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
      };

      const { textField, multilineColor, clickedButton } = useStyles();

    return (
        <Container>
            <Header />

            <Description1>
                Introduce distance and fee manually to calculate the cost of your route
            </Description1>

            <form noValidate autoComplete='off'>
                <TextField 
                    value={values.km}
                    onChange={handleChange('km')}
                    variant='outlined'
                    className={textField}
                    InputProps={{
                        className: multilineColor
                    }}
                />
                <TextField 
                    value={values.price}
                    onChange={handleChange('price')}
                    variant='outlined'
                    className={textField}
                    InputProps={{
                        className: multilineColor
                    }}
                />
            </form>

            <Button 
                variant='contained' 
                size='large' 
                className={clickedButton}
            >
                Calculate
            </Button>

            
        </Container>
    );
}