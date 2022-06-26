import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Button, Grid, TextField, Typography } from '@mui/material';

import "./Message.css";
import { sendNewMessage } from '../../../store/slices/message';

export const Message = () => {
    const {sendMessage} = useSelector(state => state.message);
  const dispatch = useDispatch();
    const [formState, setFormState] = useState({
        name:'',
        email:'',
        message:''
    });

    const {name, email, message} = formState;

    const onInputChange =  ({target}) => {
        const {name, value} = target;
        setFormState({
            ...formState,
            [name]:value
        });
    }

    const handleSendMessage = () => {
        if(name.length > 0 && email.length > 0 && message.length > 0) {
            dispatch(
                // sendMessage({name, email, message})
                sendNewMessage({name, email, message})
            )
        }
    }
    
  return (
    <Grid id="message" item sx={{
        width:'100%',
        height:'calc(100vh - 64px)',
        backgroundColor:'#FF7F57'
      }}>
         <Grid container direction="column" alignItems="center" sx={{mt:"20px"}}>
            <Typography variant="h2" fontWeight="bold" color="white">Mensaje</Typography>
            <Grid item className="box-shadow" xs={4} sm={6} sx={{backgroundColor:'white', padding:3,borderRadius:2, mt:'20px', width:'40%'}}>
                <Typography variant="h5" color="primary" fontWeight="bold">Feedback</Typography>
                <form>
                    <Grid container direction="column">
                        <Grid item xs={12} sx={{mt:2}}>
                            <TextField 
                                onChange={onInputChange}
                                value={name}
                                name="name"
                                label="Nombre"
                                fullWidth
                                placeholder="Nombre"
                                type="text"
                            ></TextField>
                        </Grid>
                        <Grid item xs={12} sx={{mt:2}}>
                            <TextField onChange={onInputChange}value={email} name="email" label="Email" fullWidth placeholder="correo@mail.com" type="email"></TextField>
                        </Grid>
                        <Grid item xs={12} sx={{mt:2}}>
                            <TextField onChange={onInputChange}value={message} name="message" label="Mensaje" fullWidth placeholder="Mensaje" type="text" multiline minRows={5}></TextField>
                        </Grid>
                        <Grid container direction="row" spacing={2} sx={{mb:2, mt:2}}>
                        <Grid item xs={12} sm={6}>
                                <Button fullWidth>
                                    Cancelar
                                </Button>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Button onClick={() => handleSendMessage()} variant="contained" fullWidth>
                                    Enviar
                                </Button>
                            </Grid>
                            
                            <Grid item></Grid>
                        </Grid>
                    </Grid>
                </form>

            </Grid>

         </Grid>

    </Grid>
  )
}
