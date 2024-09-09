function pesquisar(){
    let pesquisa = document.getElementById("resultados-pesquisa");    

    let resultados = "";
    let titulo = "";
    let descricao = "";


    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    campoPesquisa = campoPesquisa.toLowerCase()

    
    

for (let p of mitologias){
    titulo = p.titulo.toLowerCase()
    descricao = p.descricao.toLowerCase()

    if(p.titulo.includes(campoPesquisa) || 
       p.descricao.includes(campoPesquisa)){
        resultados += `
         <div class="item-resultado">
                <h2>
                    ${p.titulo}
                </h2>
                <p class="descricao-meta">
                    ${p.descricao}
                </p>
                <a target="_blank" href= ${p.link}>
                    Mais informações
                </a>
         </div>
    `
    }
    if(!campoPesquisa){
        pesquisa.innerHTML = "<h2>Por favor, escreva a mitologia que deseja conhecer!</h2>"
        return
    }
   
    
}
if(!resultados){
    resultados = "<h2>Mitologia não encontrada!</h2>"
    return
}

pesquisa.innerHTML = resultados
}

