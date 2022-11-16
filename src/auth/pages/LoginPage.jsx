import { Link as RouterLink } from 'react-router-dom'
import { Google } from '@mui/icons-material';
import { Button, Grid, Link, TextField, Typography } from '@mui/material';
import React from 'react';
import { AuthLayou } from '../layout/AuthLayou';

export const LoginPage = () => {
  return (

    <AuthLayou title='Login'>
        <form>
          <Grid container>
            <Grid item xs={12} sx={{mt:2}}>
              <TextField 
                label="correo" 
                type="email" 
                placeholder="correo@google.com"
                fullWidth
                />
            </Grid>
            <Grid item xs={12} sx={{ mt:2}}>
              <TextField
                label="Contrasena"
                type="password"
                placeholder='Contrasena'
                fullWidth
                />
            </Grid>
            <Grid container spacing={2} sx={{mb:2, mt:1}}>
              <Grid item xs={12} sm={6}>
                <Button variant='contained' fullWidth>
                  Login
                </Button>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Button variant='contained' fullWidth>
                  <Google />
                  <Typography sx={{ml:1}}>Google</Typography>
                </Button>
              </Grid>
            </Grid>

            <Grid container direction ="row" justifyContent='end'>
              <Link component={ RouterLink } color="inherit" to='/auth/register'>
                Crear una cuenta
              </Link>
            </Grid>

          </Grid>

        </form>
    </AuthLayou>
  )
}
