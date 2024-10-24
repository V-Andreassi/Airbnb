async function listarendereco(){
  let response = await fetch(url,{
    method: "GET",
    headers:{
      'Content-Type': 'application/json',
      'Authorization':'Bearer ' +JSON.parse(localStorage.getItem('user')).access_token,
    }

  });
  if(response.ok){
    let data = await response.json();
    console.log(data.data);

  }else{
    alert("Erro ao listar endereços");
  }
  
    
  response.forEach(endereco => {
    const title = endereco.title || '';
    const cep = endereco.cep || '';
    const address = endereco.endereco || '';
    const numero = endereco.numero ? `Número: ${endereco.numero}` : ''; 
    const complemento = endereco.complemento ? ` - Complemento: ${endereco.complemento}` : ''; 
    console.log(title)

  });
}
function atualizacao(){
  let response = await fetch(url,{
    method: "GET",
    headers:{
      'Content-Type': 'application/json',
      'Authorization':'Bearer ' +JSON.parse(localStorage.getItem('user')).access_token,
    }
    

}