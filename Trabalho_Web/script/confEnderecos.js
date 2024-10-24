const url = "https://go-wash-api.onrender.com/api/auth/address"
async function listarendereco(){

  let resposta = await fetch(url,{
    method: "GET",
    headers:{
      'Content-Type': 'application/json',
      'Authorization':'Bearer ' +JSON.parse(localStorage.getItem('user')).access_token,
    }

  });
  if(resposta.ok){
    const enderecos = await resposta.json();
    console.log(enderecos.data);

  }else{
    alert("Erro ao listar endereços");
  }
  

  
 
  enderecos.forEach(endereco => {
    const title = endereco.title || '';
    const cep = endereco.cep || '';
    const address = endereco.endereco || '';
    const numero = endereco.numero ? `Número: ${endereco.numero}` : ''; 
    const complemento = endereco.complemento ? ` - Complemento: ${endereco.complemento}` : ''; 
    console.log(title)

  });

/*function atualizacao(){
  let response = await fetch(url,{
    method: "GET",
    headers:{
      'Content-Type': 'application/json',
      'Authorization':'Bearer ' +JSON.parse(localStorage.getItem('user')).access_token,
    }*/
    

}