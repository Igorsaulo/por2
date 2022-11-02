function Sim(){
    let sobre =document.getElementById('sim')
    sobre.addEventListener('click',Sim);
    const sobreMim = document.createElement('p')
    const conteudo = document.createTextNode('Sou um programador de 20 anos de idade,apaixonado por tecnologia,usuario avançado de sisemas linux,um verdadeiro administrador,desenhista com mais de 7 anos de experiẽncia,dois anos de atuação na área de programação sempre me aprimorando e buscando novos conhecimentos.')
    sobreMim.appendChild(conteudo);
    const texto = document.getElementById('sobreMim')
    texto.appendChild(sobreMim);
}

function Nao(){
    let sobre =document.getElementById('nao')
    sobre.addEventListener('click',Nao);
    const texto = document.getElementById('sobreMim')

    const sobreMim = document.createElement('p')
    const conteudo = document.createTextNode('Outras sugestões:')
    sobreMim.appendChild(conteudo);
    texto.appendChild(sobreMim);

    const sugestao = document.createElement('p')
    const sugestaoText = document.createTextNode('Veja minhas habilidades')
    sugestao.appendChild(sugestaoText);
    texto.appendChild(sugestao);

    const sugest = document.createElement('p')
    const Text2 = document.createTextNode('Veja meu github')
    sugest.appendChild(Text2);
    texto.appendChild(sugest);

}