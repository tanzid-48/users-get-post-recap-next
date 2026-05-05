import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import RecentUsers from "@/components/RecentUsers";
import StatsSection from "@/components/StatsSection";


export default function Home() {
  return (
    <>
   <Navbar></Navbar>
   <HeroSection></HeroSection>
   <StatsSection></StatsSection>
   <RecentUsers />
   <Footer></Footer>
    </>
   
  );
}
