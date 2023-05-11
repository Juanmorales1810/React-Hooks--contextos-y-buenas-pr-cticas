import React ,{useState} from "react";
import { Box, Typography } from "@mui/material";
import { LogoSpace, MainSpace, FormSpace, Img } from "./styles";
import DatosUsuario from "./DatosUsuario";
import DatosPersonales from "./DatosPersonales";
import DatosEntrega from "./DatosEntrega";
import Complete from "./Complete";
import Stepper from "../Stepper";

const Form = () => {

  const[step, setStep] = useState(0);

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
        {steps[step]}
      </FormSpace>
    </Box>
  );
};

export default Form;
