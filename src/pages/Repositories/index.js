import React, { useEffect, useState } from "react";
import * as S from './styled';

export default function Repositories(){
  const [ repositories, setRepositories ] = useState([]);
  const [views, setViews] = useState(0);

  useEffect(() => {
    setViews((v) => v + 1);
    let repositoriesName = localStorage.getItem('repositoriesName');
    repositoriesName = JSON.parse(repositoriesName);
    setRepositories(repositoriesName);
    localStorage.clear();
  },[]);
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
      </S.Container>
    )
}




