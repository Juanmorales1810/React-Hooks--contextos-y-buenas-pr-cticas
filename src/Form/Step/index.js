import React,{useState} from "react";
import { TextField, Button, Box } from "@mui/material";

const Step = ({data, step}) => {

    const {imputs, buttonText, onSubmit} = data

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
    onSubmit={onSubmit} 
    >
        {
            imputs.map((input, index) => {
                const {label, type, value, valido, onChange, helperText, validator} = input
                return(
                    <TextField
                        key={index}
                        label={label}
                        variant="outlined"
                        fullWidth
                        margin="dense"
                        type={type}
                        error={valido===false}
                        helperText={valido===false && helperText}
                        value={value}
                        onChange={(e) => onChange(e, index, step, validator)}
                    />
                )
            })
        }
    <Button variant="contained" type="submit">
        {buttonText}
    </Button>
    </Box>
);
}

export default Step;
