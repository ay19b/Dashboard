import { makeStyles } from '@mui/styles';



const useStyles = makeStyles((theme) => ({
   
    root: {
        width: '93%',
        margin: 'auto',
        height: '71% !important',
		borderBottom: '0.7px solid rgb(202, 190, 190) !important',
        "& .MuiDataGrid-footerContainer": {
           display: 'none !important',
        },
        "& .MuiDataGrid-row": {
            color: `var(--text)`
        },
		"& .MuiDataGrid-row": {
            color: `var(--text)`
        },
		"& .MuiDataGrid-columnHeaderTitle": {
            fontSize:'1.1rem',
        },
    },

}));

export default useStyles