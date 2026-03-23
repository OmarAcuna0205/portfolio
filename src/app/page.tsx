import Navbar from "../components/navbar";
import Header from "../components/header";
import About from "../components/about";
import Services from "@/components/services";

export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <Header></Header>
      <About></About>
      <Services></Services>
    </>
  );
}
