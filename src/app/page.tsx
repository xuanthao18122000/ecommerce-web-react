import Image from 'next/image'
import styles from './page.module.css'
import 'bootstrap/dist/css/bootstrap.css';
import DashboardScreen from '@/screen/dashboard.screen';

export default function Home() {
  return (
    <main >
      <DashboardScreen/>
    </main>
  )
}
