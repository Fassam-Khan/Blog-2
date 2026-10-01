import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function Card2({data}) {
  return (
    <Card sx={{ minWidth: 275 ,height:"auto", border:"1px solid black" , backgroundColor:"#FAFAFA"}} className='mb-4'>
      <CardContent>
        {data.img_url && (
 <div className='w-full h-[200px] mb-6' >
 <img src={data.img_url} alt=""  className='rounded object-contain h-full w-full '/>
</div>
        )}
       

        <h2 className='text-xl font-bold'>{data.title}</h2>
       
        <Typography variant="body2 mt-4">
        {data.description.slice(0, 150)}...
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={`/blog/${data.slug}`}>
        <Button size="small">Learn More</Button></Link>
      </CardActions>
    </Card>
  );
}
