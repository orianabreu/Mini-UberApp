import React from 'react';
import Button from '@material-ui/core/Button';
import useStyles from './styles';

export default function Button() {

    const {clickedButton} = useStyles();
    
    return (
        <Button 
            variant='contained' 
            size='large' 
            className={clickedButton}
        />
    );
}