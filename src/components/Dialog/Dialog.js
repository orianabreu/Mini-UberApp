import React from 'react';
import MyButton from '../Button/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import useStyles from './styles';

export default function AlertDialogSlide({open, setOpen}) {

  const handleClose = () => {
    setOpen(false);
  };

  const { openedDialog } = useStyles();

  return (
    <div>
        <Dialog
            open={open}
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
