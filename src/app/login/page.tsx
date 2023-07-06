import 'bootstrap/dist/css/bootstrap.css';
import HeaderScreen from '@/components/layouts/header.layout';
import FooterScreen from '@/components/layouts/footer.layout';
import Layout from '@/components/layouts/layout';
import TShirtScreen from '@/pages/t-shirt.screen';
import LoginScreen from '@/pages/login.screen';

export default function Cart() {
  return (
    <main >
      <Layout>
      <LoginScreen/>
      </Layout>
    </main>
  )
}
