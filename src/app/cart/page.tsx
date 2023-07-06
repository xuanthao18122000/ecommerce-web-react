import 'bootstrap/dist/css/bootstrap.css';
import HeaderScreen from '@/components/layouts/header.layout';
import FooterScreen from '@/components/layouts/footer.layout';
import Layout from '@/components/layouts/layout';
import TShirtScreen from '@/pages/t-shirt.screen';
import CartScreen from '@/pages/cart.screen';

export default function Home2() {
  return (
    <main >
      <Layout>
      <CartScreen/>
      </Layout>
    </main>
  )
}
