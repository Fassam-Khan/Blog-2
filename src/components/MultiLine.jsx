import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function MultilineTextFields({label, name, handler}) {
  return (
    <Box
      sx={{ '& .MuiTextField-root': {  width: '100%' } }}
 
    >
      <div>
        
        <TextField
          id="outlined-multiline-static"
          label={label}
          name={name}
          onChange={(e)=> handler(e)}
          multiline
          rows={4}
          defaultValue=""
        />
      </div>
      
    </Box>
  );
}
