import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import { validarNombre, validarApellido, validarTelefono } from "./validaciones";

const DatosPersonales = ({udapteStep}) => {

  const[nombre, setNombre] = useState({
    value: "",
    valido: null,
  });
  const[apellido, setApellido] = useState({
    value: "",
    valido: null
  });
  const[telefono, setTelefono] = useState({
    value: "",
    valido: null
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
      onSubmit={(e) => {
        e.preventDefault()
        if(nombre.valido && apellido.valido && telefono.valido){
            console.log('siguiente formulario')
            udapteStep(2)
        }else{
            console.log('error')
        }
        console.log(nombre, apellido, telefono);
      }}
    >
      <TextField
        label="Nombre"
        variant="outlined"
        fullWidth
        margin="dense"
        type="text"
        error={nombre.valido===false}
        helperText={nombre.valido===false && "Mas  de 2 caracteres y menos de 20 caracteres"}
        value={nombre.value}
        onChange={(e) => {
          const nombre = e.target.value;
          const valido = validarNombre(nombre);
          setNombre({ value: nombre, valido: valido });
          }
        }
      />
      <TextField
        label="Apellidos"
        variant="outlined"
        fullWidth
        margin="dense"
        type="text"
        error={apellido.valido===false}
        helperText={apellido.valido===false && "Mas  de 2 caracteres y menos de 20 caracteres"}
        value={apellido.value}
        onChange={(e) => {
          const apellido = e.target.value;
          const valido = validarApellido(apellido);
          setApellido({ value: apellido, valido: valido });
          }
        }
      />
      <TextField
        label="Número telefónico"
        variant="outlined"
        fullWidth
        margin="dense"
        type="number"
        inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
        error={telefono.valido===false}
        helperText={telefono.valido===false && "Sin el 0 y sin 15 , menos de 11 caracteres"}
        value={telefono.value}
        onChange={(e) => {
          const telefono = e.target.value;
          const valido = validarTelefono(telefono);
          setTelefono({ value: telefono, valido: valido });
          }
        }
      />
      <Button variant="contained" type="submit">
        Siguiente
      </Button>
    </Box>
  );
};

export default DatosPersonales;
