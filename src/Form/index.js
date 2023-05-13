import React ,{useState, useEffect} from "react";
import { Box, Typography } from "@mui/material";
import { LogoSpace, MainSpace, FormSpace, Img } from "./styles";
import DatosUsuario from "./DatosUsuario";
import DatosPersonales from "./DatosPersonales";
import DatosEntrega from "./DatosEntrega";
import Complete from "./Complete";
import Stepper from "../Stepper";
import Step from "./Step";

//validaciones
import { validarEmail, validarPassword } from "./DatosUsuario/validaciones";

const Form = () => {

  const[step, setStep] = useState(0);
  const [pass, setPass] = useState({
    
  })
  useEffect(() => {
    console.log('useEffect');
  })
  useEffect(() => {
    console.log('actualizar step', step);
  }, [step])
  // useEffect(async() => {
  //   try{
  //     const data = await fetch('https://jsonplaceholder.typicode.com/posts');
  //     const post = await data.json();
  //     console.log(post);
  //   }catch(error){
  //     console.log(error);
  //   }
  // })
  //step = 0 DatosUsuario
  //step = 1 DatosPersonales
  //step = 2 DatosEntrega
  //step = 3 Complete

  const udapteStep = (step) => {
    console.log('Actualizando step', step);
    setStep(step);
  }

  const steps = {
    0: <DatosUsuario udapteStep= {udapteStep}/>,
    1: <DatosPersonales udapteStep= {udapteStep}/>,
    2: <DatosEntrega udapteStep= {udapteStep}/>,
    3: <Complete/>,
  }
  const onSubmit = (e) => {
    e.preventDefault();
    let nuevoNewStep = step + 1;
    setStep(nuevoNewStep);
    console.log(nuevoNewStep);
    console.log(step);
  }

  const handleChange = (e, position, currentStep, validator) => {
    const value = e.target.value;
    const valido = validator(value);
    console.log('value', value);
    console.log('position', position);
    console.log('currentStep', currentStep);
    console.log('validator', valido);


    stepFlow[0].imputs[0].label='Nombre';
    console.log(stepFlow);
  }

  const stepFlow = {
    0: {
      imputs: [
        {
          label: 'Correo electrónico',
          type: 'email',
          value: '',
          valido: null,
          onChange: handleChange,
          helperText: 'Ingresar un correo electrónico válido',
          validator: validarEmail,
        },
        {
          label: 'Contraseña',
          type: 'password',
          value: '',
          valido: null,
          onChange: handleChange,
          helperText: 'Ingrese una contraseña válida, al menos 8 caracteres y más de 20',
          validator: validarPassword
        }
      ],
      buttonText: 'Siguiente',
      onSubmit,
    },
    1: {
      imputs: [
        {
          label: 'Correo electrónico',
          type: 'email',
          value: '',
          valido: null,
          onChange: handleChange,
          helperText: 'Ingresar un correo electrónico válido',
          validator: validarEmail,
        },
        {
          label: 'Contraseña',
          type: 'password',
          value: '',
          valido: null,
          onChange: handleChange,
          helperText: 'Ingrese una contraseña válida, al menos 8 caracteres y más de 20',
          validator: validarPassword
        }
      ],
      buttonText: 'Siguiente',
      onSubmit,
    }
  }

  return (
    <Box
      sx={{
        padding: "30px",
        display: "flexbox",
        flexDirection: "column",
      }}
    >
      <LogoSpace>
        <Img src={"/favicon.png"} />
        <Typography variant="h1">AluraFood</Typography>
      </LogoSpace>
      <FormSpace>
        {step < 3 && <Stepper step={step}/>}
        {/* {steps[step]} */}
        <Step data={stepFlow[step]} step={step} />
      </FormSpace>
    </Box>
  );
};

export default Form;
