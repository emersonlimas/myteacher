import { createTheme } from '@mui/material';

const theme = createTheme({
    palette: {
        primary: {
            main: '#F52273',
        },
        secondary: {
            main: '#202022',
        },
        text: {
            primary: '#F52273',
            secondary: '#6c6767',
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    color: '#FFF',
                    borderRadius: '0',
                    backgroundColor: '#F52273',
                    textTransform: 'none',
                    fontWeight: 'bold',
                    paddingTop: '12px',
                    paddingBottom: '12px',
                    ":hover": {
                        backgroundColor: '#F52273',
                    }

                },
            },
        },
        MuiTextField: {
            defaultProps: {
                InputLabelProps: {
                    required: false,
                },
                required: true,
            },
        },
    },
});

export default theme;