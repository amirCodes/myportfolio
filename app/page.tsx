import Image from "next/image";
import HeroSection from "@/components/HeroSection";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import RecentProjects from "@/components/RecentProjects";
import Services from "@/components/Services";
import Footer from "@/components/Footer";
import WorkExperience from "@/components/WorkExperience";
import TechStack from "@/components/TechStack";
const navItems = [
  {
    name: "Home",
    link: "/",
    icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />
  },
  {
    name: "About",
    link: "/about",
    icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />
  },
  {
    name: "Resume",
    link: "/resume",
    icon: <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
  }
];
const Home = () => {
  return (
    <main className=" bg-black text-white-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <HeroSection />
        <WorkExperience />
        <Services />
        <TechStack />
        <RecentProjects />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
