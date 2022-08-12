import React from "react";
import carrousel from "assets/img/carroussel.png";
import * as S from "./styles";
import { CardComponent } from "components";


const Home = () => {
  return (
    <S.Home>
      <picture>
        <img src={carrousel} alt="Imagens principais" />
      </picture>
      <aside>
        
      </aside>
    </S.Home>
  );
};

export default Home;
