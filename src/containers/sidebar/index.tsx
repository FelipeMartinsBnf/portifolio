import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'
import Title from '../../components/Title'
import { BtnTheme, Desc, SidebarContainer } from './styles'

const Sidebar = () => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Title fontSize={20}>Felipe Martins</Title>
      <Paragrafo tipo="secondary" fontSize={16}>
        FelipeMartinsBnf
      </Paragrafo>
      <Desc tipo="primary" fontSize={12}>
        Desenvolvedor FullStack
      </Desc>
      <BtnTheme>Trocar Tema</BtnTheme>
    </SidebarContainer>
  </aside>
)

export default Sidebar
