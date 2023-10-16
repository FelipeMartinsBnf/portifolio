import Paragrafo from '../../components/Paragrafo'
import Title from '../../components/Title'
import { Card, LinkBtn } from './style'

const Projeto = () => (
  <Card>
    <Title> Projeto Lista de tarefas</Title>
    <Paragrafo tipo="secondary">Lista de tarefas feita com o VueJs</Paragrafo>
    <LinkBtn>Visualizar</LinkBtn>
  </Card>
)

export default Projeto
