import {
    Box,
    Card,
    CardContent,
    CardActions,
    Typography,
    Button,
    CardMedia
  } from '@mui/material'
  
  export const ZCard = (props) => {
    return (
      <Box sx={{ transition: "all .3s ease-in-out", "&:hover": {transform: "scale(1.1) "}}} width='300px'>
        <Card>
          <CardMedia
            component='img'
            height='320px'
            image={props.imgsrc}
            alt='unsplash image'
          />
          <CardContent>
            <Typography gutterBottom variant='h5' component='div'>
              {props.title}
            </Typography>
            <Typography variant='body2' color='text.secondary'>
             {props.desc}
            </Typography>
          </CardContent>
          {/* <CardActions>
            <Button size='small'>Share</Button>
            <Button size='small'>Learn More</Button>
          </CardActions> */}
        </Card>
      </Box>
    )
  }
  export default ZCard