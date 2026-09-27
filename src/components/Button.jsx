import Stack from '@mui/material/Stack';
import { Button } from '@mui/material';
export default function ButtonMy({text, handler}) {
  return (
    <Stack spacing={2} direction="row"  sx={
        {
            marginTop: "13px"
        }
    }>
    
      <Button sx={{width:"100%", marginTop:"10px" , m:1}} onClick={()=> handler()} variant="contained">{text}</Button>
   
    </Stack>
  );
}
