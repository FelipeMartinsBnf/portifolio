import Title from '../../components/Title'
import Paragrafo from '../../components/Paragrafo'
import { GitHubSection } from './styles'

const About = () => (
  <section>
    <Title fontSize={16}>Sobre mim</Title>
    <Paragrafo tipo="primary">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi corporis
      debitis animi eum exercitationem doloribus dicta reprehenderit voluptatum
      ipsam, voluptate nisi aperiam atque amet quo minima officia ducimus
      architecto quibusdam!
    </Paragrafo>
    <GitHubSection>
      <img src="https://github-readme-stats.vercel.app/api?username=FelipeMartinsBnf&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=FelipeMartinsBnf&layout=compact&langs_count=7&theme=dracula" />
    </GitHubSection>
  </section>
)

export default About
