import HomeTemplate from '../config/HomeTemplate'
import CardTable from '@/components/CardTable/CardTable'
import Dashboard from '@/components/Dashboard/Dashboard'


const Home = () => {
  return (
      <HomeTemplate>
        <Dashboard />
        <CardTable />
      </HomeTemplate>
  )
}

export default Home;
