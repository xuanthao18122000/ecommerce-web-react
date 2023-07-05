import 'bootstrap/dist/css/bootstrap.css';
import DashboardScreen from './home/page';
import HeaderScreen from '@/components/layouts/header.layout';
import FooterScreen from '@/components/layouts/footer.layout';
import Layout from '@/components/layouts/layout';

export default function Home() {
  return (
    <main >
      <Layout>
      <DashboardScreen/>
      </Layout>
    </main>
  )
}
