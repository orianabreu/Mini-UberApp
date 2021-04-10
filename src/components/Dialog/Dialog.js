import React, { useState } from 'react';
import MyButton from '../Button/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import useStyles from './styles';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide({open, setOpen}) {

  //const handleClickOpen = () => {
    //setOpen(true);
  //};

  const handleClose = () => {
    setOpen(false);
  };

  const { openedDialog } = useStyles();

  return (
    <div>
        <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-labelledby="alert-dialog-slide-title"
            aria-describedby="alert-dialog-slide-description"
            PaperProps={{
                className: openedDialog,
              }}
        >
        <DialogTitle id="alert-dialog-slide-title">
              Your route will cost
        </DialogTitle>

        <DialogActions>
            <MyButton onClick={handleClose} size='small'>
                Close
            </MyButton>
        </DialogActions>
      </Dialog>
    </div>
  );
}
