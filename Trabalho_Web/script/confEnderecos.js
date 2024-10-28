
async function listarendereco(){

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

  }else{
    alert("Erro ao listar endereços");
  }
  

  
 async function listar(teste){
 let end = await teste.forEach(endereco => {
   
    let id = endereco.id
    let title = endereco.title
    let cep = endereco.cep 
    let address = endereco.address
    let numero = endereco.number 
    let complemento = endereco.complement
    console.log(id,title,cep,address,numero,complemento)
    const tabelaBody = document.getElementById("minhaTabela");
    const novaLinha = tabelaBody.insertRow();

    novaLinha.innerHTML = `<td>${title}</td><td>${cep}</td><td>${address}</td><td>${numero}</td><td>${complemento}</td> <button><a href="../index/atualize_endereco.html?id=${id}">atualizar</a></button>`;
  
  });
 }
 let chamar = listar();
 console.log(chamar)
 
}

 async function atualizarEndereco(){
   let id = 1730;
   let urlID ="https://go-wash-api.onrender.com/api/auth/address/"+id

   let resposta = await fetch(urlID,{
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

  }else{
    alert("Erro ao listar endereços");
  }
  

  
 async function listar(teste){
 let end = await teste.forEach(endereco => {
   
    let id = endereco.id
    let title = endereco.title
    let cep = endereco.cep 
    let address = endereco.address
    let numero = endereco.number 
    let complemento = endereco.complement
    console.log(id,title,cep,address,numero,complemento)
    

  
  });

}
 
}