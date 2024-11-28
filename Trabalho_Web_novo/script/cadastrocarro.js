async function veiculo() {
    



let url ='https://go-wash-api.onrender.com/api/auth/vehicle'

let api = await fetch(url,{
    method:"POST",
    body:JSON.stringify({

        "type": "KLYU",
        "brand": "Lexus",
        "model": "BMW IAC2",
        "color": "Branca",
        "year": '2010',
        "size": "small"
    }),
    headers:{
        'Content-Type': 'application/json',
        'Authorization':'Bearer ' +JSON.parse(localStorage.getItem('user')).access_token,

    }
})
console.log(api)
if(api.ok){
    console.log(api)
    let resposta = await api.json();
  
    console.log(resposta)
    return
    
}
let respostaErro = await api.json();
console.log(respostaErro);


}




async function listarcarro(){

    let url = 'https://go-wash-api.onrender.com/api/auth/vehicle'


    let resposta = await fetch(url,{
      method: "GET",
      headers:{
        'Content-Type': 'application/json',
        'Authorization':'Bearer ' +JSON.parse(localStorage.getItem('user')).access_token,
      }
  
    });
    if(resposta.ok){
      const teste = await resposta.json();
      console.log(teste.data);
      listar(teste.data)
      return
  
    }else{
      alert("Erro ao listar endereços");
    }
    
  
    
   async function listar(teste){
   let end = await teste.forEach(endereco => {
     
      let brand = endereco.brand
      let color = endereco.color
      let id = endereco.id 
      let model = endereco.model
      let type = endereco.type 
      let year = endereco.year
      console.log(brand,color,id,model,type,year)
      const tabelaBody = document.getElementById("minhaTabela");
      const novaLinha = tabelaBody.insertRow();
  
      novaLinha.innerHTML = `<td>${brand}</td><td>${color}</td><td>${id}</td><td>${year}</td><td>${model}</td><td>${type}</td> <button><a href="../index/atualize_endereco.html?id=${id}">atualizar</a><td></button><button onclick="removerEndereco(${id})"><a>remover</a></buttom></td>`;
      atualizarEndereco()
  
      
  
    
  
    });
   }
   
   
  }
  listarcarro()