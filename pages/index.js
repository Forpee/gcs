import Nav from "../components/Nav";
import Head from "../components/Head";
import Info from "../components/Info";
import How from "../components/How";
import Footer from "../components/Footer";
import Enlarge from "../components/Enlarge";
import MoreInfo from "../components/MoreInfo";
import Third from "../components/Third";
import Services from "../components/Services";
import Modal from "../components/Modal";

export default function Home() {
  return (
    <div>
      <Nav />
      <Head />
      <Info />
     <Enlarge />
      <MoreInfo />
      <How />
      <Services />
      <Third />
      <Modal/>
      <Footer />
    </div>
  );
}
 