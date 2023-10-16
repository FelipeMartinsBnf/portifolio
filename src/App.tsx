import Projetos from './containers/projetos'
import Sidebar from './containers/sidebar'
import About from './containers/sobre'
import GlobalStyle, { Container } from './styles'

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Sidebar />
        <main>
          <About />
          <Projetos />
        </main>
      </Container>
    </>
  )
}

export default App
