import 'bootstrap/dist/css/bootstrap.css';
import HeaderScreen from '@/components/layouts/header.layout';
import FooterScreen from '@/components/layouts/footer.layout';
import Layout from '@/components/layouts/layout';
import RegisterScreen from '@/pages/register.screen';

export default function Register() {
  return (
    <main >
      <Layout>
      <RegisterScreen/>
      </Layout>
    </main>
  )
}
