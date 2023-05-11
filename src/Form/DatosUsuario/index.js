import React from "react";
import { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import { validarEmail, validarPassword } from "./validaciones";

const DatosUsuario = ({udapteStep}) => {
  const [email, setEmail] = useState({
    value: "",
    valido: null,
    }
  )
  const [password, setPassword] = useState({
    value: "",
    valido: null,
  });


    return (
      <Box
      component="form"
      autocomplete="off"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
      onSubmit={(e) =>{
        e.preventDefault()
        if(email.valido && password.valido){
            console.log('siguiente formulario')
            udapteStep(1)
        }else{
            console.log('error')
        }
        console.log(email, password);
        }
      } 
      >
        <TextField
          label="Correo electrónico"
          variant="outlined"
          fullWidth
          margin="dense"
          type="email"
          error={email.valido===false}
          helperText={email.valido===false && "Ingresa un correo electrónico válido"}
          value={email.value}
          onChange={(e) => {
            const email = e.target.value;
            const valido = validarEmail(email);
            setEmail({ value: email, valido: valido });
          }
          }
        />
        <TextField
          label="Contraseña"
          variant="outlined"
          fullWidth
          margin="dense"
          type="password"
          error={password.valido===false}
          helperText={password.valido===false && "Ingresa una contraseña válida, al menos 8 caracteres y maximo 20"}
          value={password.value}
          onChange={(e) =>{
            const password = e.target.value;
            const valido = validarPassword(password);
            setPassword({ value: password, valido: valido });
          }  
          } 
        />
        <Button variant="contained" type="submit">
          Siguiente
        </Button>
      </Box>
    );
  }

export default DatosUsuario;
