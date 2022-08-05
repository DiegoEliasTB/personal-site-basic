function apresentaTecnologia(tecnologia) {
  switch(tecnologia) {
    case 'Typescript': alteraTecnologia('Typescript');
      break;
    case 'Java': alteraTecnologia('Java');
      break;
    case 'Angular': alteraTecnologia('Angular');
      break;
    case 'React': alteraTecnologia('React');
      break;
    case 'PostgresSQL': alteraTecnologia('PostgresSQL');
      break;
    case 'Figma': alteraTecnologia('Figma');
      break;
    default: alteraTecnologia('Typescript');
      break;
  }
}

function alteraTecnologia(tecnologia) {
  let objeto = arrayTecnologia.find(it => it.titulo === tecnologia);
  
  document.getElementById('titulo-tecnologia').textContent = objeto.titulo;
  document.getElementById('descricao-tecnologia').textContent = objeto.descricao;
  document.getElementById('link-tecnologia').setAttribute('href', objeto.link);
}

let arrayTecnologia = [
  {
    titulo: 'Typescript',
    descricao: 'Um superset de javascript que permite a utilização de tipagem e muitas outras ferramentas tornando a linguagem ainda mais poderosa!',
    link: 'https://www.typescriptlang.org/'
  },
  {
    titulo: 'Angular',
    descricao: 'Um poderoso framework para front-end desenvolvido pelo Google!',
    link: 'https://angular.io/'
  },
  {
    titulo: 'React',
    descricao: 'Um poderoso framework para front-end desenvolvido pela Meta!',
    link: 'https://reactjs.org/'
  },
  {
    titulo: 'Java',
    descricao: 'Uma linguagem de programação com anos de história, mas ainda muito poderosa e relevante no mercado!',
    link: 'https://openjdk.org/'
  },
  {
    titulo: 'PostgresSQL',
    descricao: 'Um banco de dados relacional amplamente abrangente!',
    link: 'https://www.postgresql.org/'
  },
  {
    titulo: 'Figma',
    descricao: 'Uma ferramenta para criação de design, prototipação e muito mais!',
    link: 'https://www.figma.com/'
  }
];

