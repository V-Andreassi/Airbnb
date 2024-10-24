
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
  
  let tbody = document.querySelector("tbody")
  let row = ""

  
 function listar(teste){
 let end =  teste.forEach(endereco => {
    let id = endereco.id
    let title = endereco.title
    let cep = endereco.cep 
    let address = endereco.address
    let numero = endereco.number 
    let complemento = endereco.complement
    console.log(title,cep,address,numero,complemento)
    row += `<tr>
                <th>${endereco.id}</th>
                <th>${endereco.title}</th>
                <th>${endereco.cep}</th>
                <th>${endereco.address}</th>
                <th>${endereco.id}</th>
    </tr>
    `
  });
  let tbody = document.querySelector("tbody")
  let row = ""

 }
  



/*function atualizacao(){
  let response = await fetch(url,{
    method: "GET",
    headers:{
      'Content-Type': 'application/json',
      'Authorization':'Bearer ' +JSON.parse(localStorage.getItem('user')).access_token,
    }*/
    

}