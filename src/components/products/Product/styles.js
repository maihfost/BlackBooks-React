import {makeStyles} from '@material-ui/core/styles';
import { findByLabelText } from '@testing-library/dom';

export default makeStyles( () => ({
    root: {
        maxWidth: '100%',
        height: '500px'
    },
    media: {
        height: '50px',
        paddingTop: '56.25%',
    },
    CardContent: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    cardActions: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    description: {
        height:'120px',
        overflow:'auto'
    }
}));
