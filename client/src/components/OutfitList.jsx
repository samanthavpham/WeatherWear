import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

function OutfitList ({ outfit }) {
  return (
    <div>
      <Typography gutterBottom variant="h4" component="div" id="suggestion">
        Outfit Suggestions
      </Typography>
      <Box sx={{ width: '100%' }}>
        <Grid container alignItems="stretch" justify="center" rowSpacing={0} columnSpacing={{ xs: 0, sm: 0, md: 0 }}>
          <Grid item component={Card} xs={6}>
            <CardMedia
              component="img"
              height="200"
              image={outfit.tops.img}
              alt="tops img"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Tops
              </Typography>
              <Typography variant="body2" color="text.secondary" component="div">
                <ul>
                  {outfit.tops.items.map((top) => (
                    <li>{top}</li>
                  ))}
                </ul>
              </Typography>
            </CardContent>
          </Grid>
          <Grid item component={Card} xs={6}>
            <CardMedia
              component="img"
              height="200"
              image={outfit.bottoms.img}
              alt="bottoms img"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Bottoms
              </Typography>
              <Typography variant="body2" color="text.secondary" component="div">
                <ul>
                  {outfit.bottoms.items.map((bottom) => (
                    <li>{bottom}</li>
                  ))}
                </ul>
              </Typography>
            </CardContent>
          </Grid>
          <Grid item component={Card} xs={6}s>
            <CardMedia
              component="img"
              height="200"
              image={outfit.outerwear.img}
              alt="outerwear img"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Outerwear
              </Typography>
              <Typography variant="body2" color="text.secondary" component="div">
                <ul>
                  {outfit.outerwear.items.map((accessory) => (
                    <li>{accessory}</li>
                  ))}
                </ul>
              </Typography>
            </CardContent>
          </Grid>
          <Grid item component={Card} xs={6}s>
            <CardMedia
              component="img"
              height="200"
              image={outfit.footwear.img}
              alt="footwear img"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" component="div">
                Footwear
              </Typography>
              <Typography variant="body2" color="text.secondary" component="div">
                <ul>
                  {outfit.footwear.items.map((shoe) => (
                    <li>{shoe}</li>
                  ))}
                </ul>
              </Typography>
            </CardContent>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default OutfitList;