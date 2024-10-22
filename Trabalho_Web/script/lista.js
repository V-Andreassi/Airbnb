const url = "https://go-wash-api.onrender.com/api/auth/address";

function listar() {
  let token = JSON.parse(localStorage.getItem("user"));

  fetch(url, {
    method: "GET",
    redirect: "follow",
    headers: {
      'Authorization': 'Bearer ' + token.access_token
    }
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json(); // Converte a resposta em JSON
  })
  .then(enderecos => {
    enderecos.forEach(endereco => {
      console.log(endereco);
    });
  })
  .catch(error => {
    console.error('Houve um problema com a requisição:', error);
  });
}
