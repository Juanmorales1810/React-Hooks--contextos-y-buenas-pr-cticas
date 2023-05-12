import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import { validarDireccion, validarCiudad, validarEstado } from "./validaciones";

const DatosEntrega = ({udapteStep}) => {
  const [direccion, setDireccion] = useState({
    value: "",
    valido: null
  })
  const [ciudad, setCiudad] = useState({
    value: "",
    valido: null
  })
  const [estado, setEstado] = useState({
    value: "",
    valido: null
  })
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
      onSubmit={(e) => {
        e.preventDefault()
        if(direccion.valido && ciudad.valido && estado.valido){
            console.log('siguiente formulario')
            udapteStep(3)
        }else{
            console.log('error')
        }
        console.log(direccion, ciudad, estado);
      }}
    >
      <TextField
        label="Dirección"
        variant="outlined"
        fullWidth
        margin="dense"
        type="text"
        error={direccion.valido===false}
        helperText={direccion.valido===false && "Menos de 50 caracteres"}
        value={direccion.value}
        onChange={(e) => {
          const direccion = e.target.value;
          const valido = validarDireccion(direccion);
          setDireccion({ value: direccion, valido: valido });
          }
        }
      />
      <TextField
        label="Ciudad"
        variant="outlined"
        fullWidth
        margin="dense"
        type="text"
        error={ciudad.valido===false}
        helperText={ciudad.valido===false && "Menos de 20 caracteres"}
        value={ciudad.value}
        onChange={(e) => {
          const ciudad = e.target.value;
          const valido = validarCiudad(ciudad);
          setCiudad({ value: ciudad, valido: valido });
          }
        }
      />
      <TextField
        label="Estado/Provincia"
        variant="outlined"
        fullWidth
        margin="dense"
        type="text"
        error={estado.valido===false}
        helperText={estado.valido===false && "Menos de 20 caracteres"}
        value={estado.value}
        onChange={(e) => {
          const estado = e.target.value;
          const valido = validarEstado(estado);
          setEstado({ value: estado, valido: valido });
          }
        }
      />
      <Button variant="contained" type="submit">
        Crear cuenta
      </Button>
    </Box>
  );
};

export default DatosEntrega;
