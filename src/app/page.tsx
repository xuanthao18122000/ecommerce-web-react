import Image from 'next/image'
import styles from './page.module.css'
import 'bootstrap/dist/css/bootstrap.css';
import DashboardScreen from '@/screen/dashboard.screen';
import HeaderScreen from '@/components/layouts/header.layout';
import FooterScreen from '@/components/layouts/footer.layout';

export default function Home() {
  return (
    <main >
      <HeaderScreen/>
      <DashboardScreen/>
      <FooterScreen/>
    </main>
  )
}
