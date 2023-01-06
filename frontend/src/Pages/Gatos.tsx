import BuscaGatos from "../Components/Entidades/Gatos";
import LayoutGeral from "../Components/Layout";

function Gatos () {
  return (
    <LayoutGeral header="none">
      <BuscaGatos/>
    </LayoutGeral>
  )
}

export default Gatos;
