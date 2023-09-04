import 'bootstrap/dist/css/bootstrap.css';
import 'react-toastify/dist/ReactToastify.css';
import DashboardScreen from './home/page';
import HeaderScreen from '@/components/layouts/header.layout';
import FooterScreen from '@/components/layouts/footer.layout';
import Layout from '@/components/layouts/layout';
import AboutScreen from '@/pages/about.screen';
import ContactScreen from '@/pages/contact.screen';
import FAQScreen from '@/pages/faq.screen';
import BlogScreen from '@/pages/blog.screen';

export default function Home() {
  return (
    <main >
      <Layout>
      <DashboardScreen/>
      </Layout>
    </main>
  )
}
