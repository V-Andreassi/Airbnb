async function logout() {
    let url = 'https://go-wash-api.onrender.com/api/auth/logout'

    

let token = JSON.parse(localStorage.getItem("user"));
let api = await fetch(url,{
     method:"POST",
     headers:{
         'Content-Type': 'application/json',
         'Authorization':'Bearer '+token.access_token
     }
 })
 if(api.ok){
    let resposta = await api.json();
    localStorage.removeItem('user')
    alert(resposta.data)
    window.location.href = "../index/home.html"
    

}
}