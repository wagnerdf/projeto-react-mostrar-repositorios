import React, { useEffect, useState } from "react";
import * as S from './styled';
import { useNavigate } from 'react-router-dom';

export default function Repositories(){
  const navigate = useNavigate();
  const [ repositories, setRepositories ] = useState([]);
  const [views, setViews] = useState(0);

  useEffect(() => {
    setViews((v) => v + 1);
    let repositoriesName = localStorage.getItem('repositoriesName');
    if(repositoriesName != null){
      repositoriesName = JSON.parse(repositoriesName);
      setRepositories(repositoriesName);
      localStorage.clear();
    } else {
      navigate('/');
    }
  }, [navigate]);

    return(
      <S.Container>  
        <S.Titled>Repositórios</S.Titled>
       <S.List>
           { repositories.map(repository => {
             return(
               <S.ListItem>Repositório: { repository }</S.ListItem>
             )
           })}
       </S.List>
       <S.LinkHome to="/">Voltar</S.LinkHome>
      </S.Container>
    )
}




