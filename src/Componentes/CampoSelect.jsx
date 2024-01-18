import styled from 'styled-components'
import { Select, FormControl, InputLabel, MenuItem, FormHelperText } from '@mui/material'
import { useState, useEffect } from 'react'
import { buscar } from '../datos'

const StyledFormControl = styled(FormControl)`
  && {
    color: white;
    margin-top: 4px;
  }
`

const StyledInputLabel = styled(InputLabel)`
  && {
    color: white;
    font-family: courier; // Cambia el color del label
    font-size:1.5rem;

    /* Cambia el color del label en su estado reducido */
    &.MuiInputLabel-shrink {
      color: white;
    }
  }
`

const StyledSelect = styled(Select)`
  && {
    color: #bc2525;
    font-size: 1.6rem;
    font-family: courier;
    text-shadow: 1px 1px 10px #ff0000;
    &::before {
      border-bottom: 2px solid white;
    }
    &::after {
      border-bottom: 2px solid white;
    }

    /* Cambia el color del icono de triángulo a blanco */
    .MuiSvgIcon-root {
      fill: white;
    }
  }
`

const StyledMenuItem = styled(MenuItem)`
  && {
    background-color: #212121;
    color: #b01515;   // Cambia el color del texto
      font-family: courier;
      font-size:1.5rem;
      text-shadow: 1px 1px 10px #ff0000;
    &:focus {
      background-color: #212121;
    }
    &:hover {
      background-color: black;
    }
    &.Mui-selected {
      background-color: black !important;
    }
    &.MuiList-root {
      background-color: #212121;
    }
  }
`

const SelectCategoria = (props) => {
  const { value, manejarChange, manejarBlur, isValid } = props

  const [data, setData] = useState({ categorias: [] })

  useEffect(() => {
    buscar('/db', setData)
  }, [])

  const categorias = data.categorias

  return (
    <>
      <StyledFormControl variant='filled' error={isValid === false}>
        <StyledInputLabel id='demo-simple-select-filled-label'>
          Categoria
        </StyledInputLabel>
        <StyledSelect
          labelId='demo-simple-select-filled-label'
          id='demo-simple-select-filled'
          MenuProps={{ PaperProps: { style: { backgroundColor: '#212121' } } }}
          value={value}
          onChange={manejarChange}
          onBlur={manejarBlur}
        >
          {categorias.map((categoria, index) => (
            <StyledMenuItem key={index} value={categoria.nombre}>{categoria.nombre}</StyledMenuItem>
          ))}
        </StyledSelect>
        {isValid === false ? <FormHelperText>Debes escoger una categoria</FormHelperText> : <div />}
      </StyledFormControl>
    </>
  )
}

export default SelectCategoria
