import { Card } from '@mui/material'
import React from 'react'
import {Box} from '@mui/material'
import {
    
    CardContent,
    CardActions,
    Typography,
    Button,
    CardMedia
  } from '@mui/material'
  
const Collection = (props) => {
  return (
    <div>

<br/>
<Box sx={{ transition: "all .3s ease-in-out", "&:hover": {transform: "scale(1.1) "}}} width='235px'>
        <Card>
          <CardMedia
            component='img'
            height='320px'
            image={props.imgsrc}
            alt='image'
          />
          <CardContent>
            <Typography  variant='h5' component='div'>
              {props.title}
            </Typography>
            <Typography variant='body2' color='text.secondary'>
             {props.desc}
            </Typography>
          </CardContent>
      </Card>    
      </Box>

    </div>
  )
}

export default Collection