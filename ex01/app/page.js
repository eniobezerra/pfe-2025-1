function Texto1() {
  return <p>um outro paragrafo de texto! </p>;
}

export default function Home(){
  //pra colocar mais de um linha usa div dentro do parentese
  // ou <> <> fragmento
  const aula = 2;
    return(
    <div>

     <h1> Ola turma </h1>

     <p> essa é a nossa  primeira {aula} ª de react</p>
     <Texto1 />
    </div>
    )
  
}
