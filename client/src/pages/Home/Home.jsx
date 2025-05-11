import { Helmet } from 'react-helmet-async'
import Plants from '../../components/Home/Plants'

const Home = () => {
  return (
    <div>
      <Helmet>
        <title> Employee | Home emlpoyee</title>
      </Helmet>
      <Plants />
    </div>
  )
}

export default Home
