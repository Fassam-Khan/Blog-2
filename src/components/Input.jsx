import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function Input({label, type, handler, name}) {

  return (
    <Box className=''
      
      sx={{ '& > :not(style)': { marginTop:"16px",    width: '100%' } }}
     
    >
      <TextField name={name} onChange={(e)=> handler(e)} id="outlined-basic" label={label} type={type} variant="outlined" size='small'  className=''/>
      
    </Box>
  );
}
