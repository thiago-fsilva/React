import './estilo.css' 

const TOpcao = ['Texto 01', 'Texto 02', 'Texto 03']

function OpcoesHeader(){
       return(
  
        <ul className='opcao'>
        { TOpcao.map( (texto) => (
          <li className='opcoes'> <p>{texto}</p> </li>
        ) ) }
       </ul>

       )
}

export default OpcoesHeader