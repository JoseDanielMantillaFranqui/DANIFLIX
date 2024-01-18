import styled from 'styled-components'

const StyledTable = styled.table`
    background-color: #e10b0b33;
    color: white;
    margin-top: 2rem;
    border: 2px solid #252121;
    border-collapse: collapse;
    @media (max-width: 900px) {
        display:none;
}
`

const StyledTh = styled.th`
    border: 2px solid #252121;
    padding: 10px;
    font-size: 1.3rem;
`

const StyledTd = styled.td`
    border: 1px solid #252121;
    padding: 1rem 1rem;
    text-align: center;
    font-size: 1.2rem;
`

const StyledRemoverBtn = styled.div`
    background-color: black;
    color: #b81d1d;
    font-size: 1.2rem;
    border:none;
    padding: 5px 7px;
    border-radius:2rem;
    cursor:pointer;
    &:hover {
        text-shadow: 1px 1px 10px #ff0000;
    }
`

const Tabla = ({ data, manejarClickEliminarCategoria }) => {
  return (
    <StyledTable>
      <thead>
        <tr>
          <StyledTh>Nombre</StyledTh>
          <StyledTh>Descripción</StyledTh>
          <StyledTh>Remover</StyledTh>
        </tr>
      </thead>
      <tbody>
        {data.map((categoriaKey, index) => {
          return (
            <tr key={index}>
              <StyledTd>{categoriaKey.nombre}</StyledTd>
              <StyledTd>{categoriaKey.descripcion}</StyledTd>
              <StyledTd>
                <StyledRemoverBtn onClick={() => {
                  // Llamada para eliminar una categoría
                  manejarClickEliminarCategoria(categoriaKey)
                }}
                >
                  Remover
                </StyledRemoverBtn>
              </StyledTd>
            </tr>
          )
        })}
      </tbody>
    </StyledTable>
  )
}

export default Tabla
