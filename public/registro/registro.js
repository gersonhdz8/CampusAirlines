//Se obtiene los datos del formulario y se agregan al json-server "clientes"
let myForm = document.querySelector("#form");
myForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    let data = Object.fromEntries(new FormData(e.target));
    console.log(data);
    opc[e.submitter.dataset.accion](data)    
})

const opc = {
    "POST": (data) => postUser(data)
}

let config = {
    headers:new Headers({
        "Content-Type": "application/json"
    }), 
};

const postUser = async(data)=>{
    config.method = "POST";
    config.body = JSON.stringify(data);
    let res = await ( await fetch("http://localhost:4009/clientes",config)).json();
    console.log(res);
    alert("Registro exitoso")
}
