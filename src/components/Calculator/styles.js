import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    textField: {
        margin: '10px 10px 10px 0',
        width: '35ch',
        color: '#fff',
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: '#fff',
            },
            '&:hover fieldset': {
              borderColor: '#9cfcd2',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#49f8af',
            },
          },
    },
    multilineColor: {
        color: '#fff',
    },
    clickedButton: {
        backgroundColor: '#49f8af',
        borderColor: '#49f8af',
        color: '#070808',
        fontWeight: 'bold',
        margin: '10px 10px 10px 0',
    },
    openedDialog: {
      backgroundColor: '#070808',
      color: '#fff',
  },
  }));

export const Container = styled.div`
    width: 40vw;
    display: flex;
    flex-direction: column;
    align-items: start;
    padding: 30px;
`;

export const Description1 = styled.p`
    font-weight: 100;
    font-size: 17px;
    color: #fff;
`;

export default useStyles;