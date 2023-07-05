import Footer from './footer.layout';
import Header from './header.layout';
import { ReactNode } from 'react';
import '@/styles/style.css';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
