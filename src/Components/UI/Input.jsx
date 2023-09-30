import { TextField } from "@mui/material";
import React from "react";

const InputCom = ({ type,  label, onChange, placeholder, value, variant }) => {
  return (

      <TextField
      // error={error}
        id="outlined-error"
        label={label}
        value={value}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        variant={variant}
      />
  );
};

export default InputCom;
