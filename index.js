function botaoTypescript() {
  document.getElementById('titulo-tecnologia').textContent = descricoes[0].titulo;
  document.getElementById('descricao-tecnologia').textContent = descricoes[0].descricao;
  document.getElementById('link-tecnologia').setAttribute('href', descricoes[0].link);
}

function botaoAngular() {
  document.getElementById('titulo-tecnologia').textContent = descricoes[1].titulo;
  document.getElementById('descricao-tecnologia').textContent = descricoes[1].descricao;
  document.getElementById('link-tecnologia').setAttribute('href', descricoes[1].link);
}

function botaoReact() {
  document.getElementById('titulo-tecnologia').textContent = descricoes[2].titulo;
  document.getElementById('descricao-tecnologia').textContent = descricoes[2].descricao;
  document.getElementById('link-tecnologia').setAttribute('href', descricoes[2].link);
}

let descricoes = [
  {
    titulo: 'Typescript',
    descricao: 'Um superset de javascript que permite a utilização de tipagem e muitas outras ferramentas tornando a linguagem ainda mais poderosa!',
    link: 'https://www.typescriptlang.org/'
  },
  {
    titulo: 'Angular',
    descricao: 'Um poderoso framework para front-ends desenvolvido pelo Google!',
    link: 'https://angular.io/'
  },
  {
    titulo: 'React',
    descricao: 'Um poderoso framework para front-ends desenvolvido pela Meta!',
    link: 'https://reactjs.org/'
  },
];

