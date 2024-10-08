const url = "https://go-wash-api.onrender.com/api/auth/address"
async function cadastroEndereco(){
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

   let api = await fetch(url,{
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
            'Cookie':'gowash_session=0hGqRHf0q38ETNgEcJGce30LcPtuPKo48uKtb7Oj',    
            'Authorization':'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vYXBpLWdvLXdhc2gtZWZjOWM5NTgyNjg3Lmhlcm9rdWFwcC5jb20vYXBpL2xvZ2luIiwiaWF0IjoxNzEwNDE3MjIyLCJuYmYiOjE3MTA0MTcyMjIsImp0aSI6InBsZll0aENEZ0U1NUNzMHEiLCJzdWIiOiIxIiwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9.z1pdEBkx8Hq01B7jNKa42NGxtFFHwb-7O_0y8krVWUY'
        }
    })
    if(api.ok){
        let resposta = await api.json();
        console.log(resposta)
        alert("Cadastro realizado com sucesso!")
        location.href = "../index/home_cadastroender.html"
        return
    }




}