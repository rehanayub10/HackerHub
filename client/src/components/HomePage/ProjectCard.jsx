import React, {useRef} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
import { CardHeader, Typography, createMuiTheme, ThemeProvider, CardContent } from '@material-ui/core';

export default function ProjectCard({ title, description, maxCap, membersArray, tags}) {     
    const useStyles = makeStyles(theme => ({
        root: {
            marginTop: '2%'
        },
        btn: {
            margin: '1%'
        }
    }))

    const theme = createMuiTheme({
        typography: {
          h5: {
              fontWeight: 700
          },
          body1: {

          },
          body2: {
              fontWeight: 700
          }
        },
      });

    const classes = useStyles();

    return (
       <Card className={classes.root}>
           <CardHeader
                title={
                    <ThemeProvider theme={theme}>
                        <Typography variant="h5">{title}</Typography>
                    </ThemeProvider> 
                }
           />
           <CardContent>
               <ThemeProvider>
                    <Typography variant="body1">{description}</Typography>
               </ThemeProvider>
           </CardContent>
           <CardContent>
               <ThemeProvider>
                    <Typography variant="body2">Members: {membersArray.length} of {maxCap}</Typography>
               </ThemeProvider>
           </CardContent>
           <CardActions>
               {tags.map(tag => {
                   return (
                    <Button variant="outlined" disabled size="small">{tag}</Button>
                   )
               })}
           </CardActions>
           <Button variant="contained" color="secondary" className={classes.btn} size="small">Request to Join</Button>
       </Card>
    )
}