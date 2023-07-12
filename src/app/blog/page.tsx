import 'bootstrap/dist/css/bootstrap.css';
import Layout from '@/components/layouts/layout';
import ContactScreen from '@/pages/contact.screen';
import BlogScreen from '@/pages/blog.screen';

export default function Blog() {
  return (
    <main >
      <Layout>
      <BlogScreen/>
      </Layout>
    </main>
  )
}
