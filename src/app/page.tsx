import Header from "@/components/layouts/Header";
import MainPage from "@/components/MainPage";
import SecondPage from "@/components/SecondPage";
import ProductPage from "@/components/ProductPage";
import BannerPage from "@/components/BannerPage";
import Sidebar from "@/components/layouts/Sidebar";
import { SidebarToggleProvider } from "@/hooks/useSidebarToggle";
import DemoPage from "@/components/DemoPage";
import HistoryPage from "@/components/HistoryPage";
import Footer from "@/components/layouts/Footer";
import ChatBox from "@/components/layouts/ChatBox";

export default function Home() {
  return (
    <SidebarToggleProvider>
      <main className="relative">
        <Header />
        <Sidebar />
        <MainPage />
        <SecondPage />
        <ProductPage />
        <BannerPage />
        <DemoPage />
        <HistoryPage />
        <Footer />
        <ChatBox />
      </main>
    </SidebarToggleProvider>
  );
}
