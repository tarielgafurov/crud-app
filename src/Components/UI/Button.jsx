import { Button } from "@mui/material";

const ButtonCom = ({variant , onClick , children , color}) => {
  return (
    <Button color={color} variant={variant} onClick={onClick} >{children}</Button>
  )
}

export default ButtonCom;
