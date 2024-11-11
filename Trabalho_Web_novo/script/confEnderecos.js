
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
    return

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

    novaLinha.innerHTML = `<td>${title}</td><td>${cep}</td><td>${address}</td><td>${numero}</td><td>${complemento}</td> <button><a href="../index/atualize_endereco.html?id=${id}">atualizar</a><td></button><button onclick="removerEndereco(${id})"><a>remover</a></buttom></td>`;
    atualizarEndereco()

    

  

  });
 }
 
 
}

 async function atualizarEndereco(){
  const url = new URL(window.location.href);
  const id = url.searchParams.get('id');
  
  
  
  
   
   let urlID = "https://go-wash-api.onrender.com/api/auth/address/" + id

   let resposta = await fetch(urlID,{
    method: "GET",
    headers:{
      'Content-Type': 'application/json',
      'Authorization':'Bearer ' +JSON.parse(localStorage.getItem('user')).access_token,
    }

  });
  
  
  if(resposta.ok){
    let teste = await resposta.json();
    console.log(teste.data);
    listar(teste.data)
    return

  }else{
    //alert("Erro ao listar endereços");
  }
  

  
  async function listar(teste){
    


  for(i in teste){
    let id = teste.id
    let title = teste.title
    let cep = teste.cep 
    let address = teste.address
    let numero = teste.number 
    let complemento = teste.complement
    console.log(id, title, cep, address, numero, complemento)
    document.getElementById('title').value = title
    document.getElementById('cep').value = cep
    document.getElementById('endereco').value = address
    document.getElementById('numero').value = numero
    document.getElementById('complemento').value = complemento
  }
    
        
}
 
}
  async function enviar(){
    const url = new URL(window.location.href);
  const id = url.searchParams.get('id');
  
  
  
  
   
   let urlID = "https://go-wash-api.onrender.com/api/auth/address/" + id
    let title = document.getElementById('title').value;
    let cep = document.getElementById('cep').value;
    let address = document.getElementById('endereco').value;
    let number = document.getElementById('numero').value;
    let complement = document.getElementById('complemento').value;

    if(!title){
        alert('Por favor, preencha o campo title')
        return
    }
    if(!cep){
        alert('Por favor, preencha o campo cep')
        return
    }
    if(!address){
        alert('Por favor, preencha o campo address')
        return
    }   
    if(!number){
        alert('Por favor, preencha o campo number')
        return
    }
    if(!cep){
        alert('Por favor, preencha o campo number')
        return
    }
     let token = JSON.parse(localStorage.getItem("user"));
   let api = await fetch(urlID,{
        method:"POST",
        body:JSON.stringify(
            {
                "title": title,
                "cep": cep,
                "address": address,
                "number": number,
                "complement": complement 
            }
        ),
        headers:{
            'Content-Type': 'application/json',
            'Authorization':'Bearer '+token.access_token
        }
    })
    if(api.ok){
        let resposta = await api.json();
        console.log(resposta)
        alert("atualizaçao feita com sucesso!")
        location.href = "../index/home_cadastroender.html"
        return
    }
}

async function removerEndereco(id){
  
  
  let token = JSON.parse(localStorage.getItem("user"));
  const urlID = `https://go-wash-api.onrender.com/api/auth/address/`+id
  
  let api = await fetch(urlID,{
       method: "DELETE",
       headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer' + token.access_token
       }
       
   })
   if(api.ok){
       let resposta = await api.json();
       alert("Seu endereço foi removido com sucesso!")
}else{
  alert("Erro ao remover o endereço")
}



}