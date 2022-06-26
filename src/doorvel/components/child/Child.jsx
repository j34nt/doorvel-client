import { Card, CardActionArea, CardContent, Typography } from '@mui/material'
import React from 'react'

export const Child = ({item}) => {
  return (
    <Card sx={{ maxWidth: 175, minWidth:175, mt:'5px', mr:'5px' }}>
      <CardActionArea>
        {/* <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        /> */}
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {item.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {item.seo_friendly}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
