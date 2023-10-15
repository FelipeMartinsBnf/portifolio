import styled from 'styled-components'

type BotaoProps = {
  principal: boolean
  FontSize?: string
}

const Botao = styled.button<BotaoProps>`
  background-color: ${(props) => (props.principal ? 'green' : 'blue')};
  font-size: ${(props) => props.FontSize || '16px'};
`
const BotaoPerigo = styled(Botao)`
  background-color: red;
  color: white;
  span {
    text-decoration: line-through;
  }
`

function Teste() {
  return (
    <>
      <Botao principal>Olá</Botao>
      <Botao FontSize="14px" principal={false}>
        Olá
      </Botao>
      <BotaoPerigo as="a" principal>
        <span>Não clique aqui!</span>
      </BotaoPerigo>
    </>
  )
}

export default Teste
