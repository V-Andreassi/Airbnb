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

}