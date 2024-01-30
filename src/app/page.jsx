import Navbar from "../components/Navbar/navbar";
import Ofrece from "../components/Ofrece/ofrece";
import Datos from "../components/Datos/datos";
import Soluciones from "../components/Soluciones/soluciones";
import Marcas from "../components/Marcas/marcas";
import Agentes from "../components/Agentes/agentes";
import Vigilante from "../components/Vigilante/vigilante";
import Footer from "../components/Footer/footer";

export default function Home() {
  return (
    <div className="home">
      <Navbar />
      <Ofrece />
      <Datos />
      <Soluciones />
      <Marcas />
      <Agentes />
      <Vigilante />
      <Footer />
    </div>
  );
}
