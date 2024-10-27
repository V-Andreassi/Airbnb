
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
  

  
 function listar(teste){
 let end =  teste.forEach(endereco => {
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

atualizarEndereco(){
  id = 1
  let urlID = window.location.href="https://go-wash-api.onrender.com/api/auth/address/"+id
}