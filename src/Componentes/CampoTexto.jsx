import styled from 'styled-components'
import { TextField } from '@mui/material'

const StyledCampoTexto = styled(TextField)`
  && {
    margin-bottom: 2rem;
    

    label {
      color: white;
      font-family: courier; // Cambia el color del label
      font-size:1.5rem;
    }

    input {
      color: #b81d1d;
      text-shadow: 1px 1px 10px #ff0000;   // Cambia el color del texto
      font-family: courier;
      font-size:1.5rem; 
    }

    /* Cambia el color de la línea de subrayado */
    & .MuiInputBase-root.MuiFilledInput-root:after {
      border-bottom: 2px solid white !important;
      transform: scaleX(1); // Asegura que la línea esté visible
    }
  }
`

const CampoTexto = (props) => {
  const { label, value, setValue, isValid, helperText, validator } = props
  return (
    <StyledCampoTexto
      variant='filled'
      id='filled-basic'
      label={label}
      value={value}
      onBlur={(e) => setValue({ value: e.target.value, valid: validator(e.target.value) })}
      onChange={(e) => setValue({ value: e.target.value, valid: null })}
      error={isValid === false}
      helperText={isValid === false && helperText}
    />
  )
}

export default CampoTexto
