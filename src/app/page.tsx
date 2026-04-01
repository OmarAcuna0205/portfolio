import Navbar from "../components/navbar";
import Header from "../components/header";
import About from "../components/about";
import Services from "@/components/services";
import Work from "@/components/work";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <Header></Header>
      <About></About>
      <Services></Services>
      <Work></Work>
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
}
