

document.addEventListener("DOMContentLoaded", ()=>{
  todosPosts()
})

function todosPosts(){

    fetch("http://192.168.0.2:3000/api/all")
    .then(res => res.json())
    .then(data => {

   let posts = "";

   let postConteudo = data;

   postConteudo.forEach(element => {

    let conteudo = `
    
    <div id=${element.id} class="card">

    <div class="card-titulo">
        <h5>${element.titulo}</h5>
    </div>

    <div class="card-descricao">
        <div>${element.descricao}</div>
    </div>
</div>
    `

    posts+= conteudo
       
   });

   document.getElementById('posts').innerHTML = posts;


    })
    .catch(error => console.log(error))
}


function newPosts(){

    let titulo = document.querySelector("#titulo").value;
    let descricao = document.querySelector("#desc").value;

    let post = {titulo,descricao}

    fetch("http://192.168.0.2:3000/api/new", {
         
    method:"POST",
    body: JSON.stringify(post),
    headers: {"Content-type":  "application/json; charset=UTF-8"}})

   
    .then(()=> {
        todosPosts()
        document.querySelector("#titulo").value = "";
        descricao = document.querySelector("#desc").value = "";
    }
    
  
    )
    .catch(error => console.log(error))

}