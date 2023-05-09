//SE guarda toda la informacion del formulario y con los diferentes botones interactua con la información para su manipulación requerida
let myForm = document.querySelector("#form");
let listado= document.getElementById("listado");
myForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    let data = Object.fromEntries(new FormData(e.target));    
    opc[e.submitter.dataset.accion](data)    
})

const opc = {
    "GET": () => getUserAll(),
    "PUT": (data) => putUser(data),
    "DELETE": (data) => deleteUser(data),
    "SEARCH": (data) => searchUser(data),
    "POST": (data) => postUser(data)
}

let config = {
    headers:new Headers({
        "Content-Type": "application/json"
    }), 
};
const getUserAll = async()=>{
    config.method = "GET";
    let res = await ( await fetch("http://localhost:4009/clientes",config)).json();
    console.log(res);
}
const postUser = async(data)=>{
    config.method = "POST";
    config.body = JSON.stringify(data);
    let res = await ( await fetch("http://localhost:4009/clientes",config)).json();
    console.log(res);
}
const putUser = async(data)=>{
    config.method = "PUT";
    config.body = JSON.stringify(data);
    let res = await ( await fetch(`http://localhost:4009/clientes/${data.id}`,config)).json();
    console.log(res);
}
const deleteUser = async(data)=>{
    config.method = "DELETE";
    let res = await ( await fetch(`http://localhost:4009/clientes/${data.id}`,config)).json();
    console.log(res);
}
const searchUser = async(data)=>{
    config.method = "GET";
    let res = await ( await fetch(`http://localhost:4009/clientes?q=${Object.values(data).join("")}`,config)).json();
    let info= document.createElement("p");
    listado.appendChild(info);
    info.innerHTML=`${Object.fromEntries(res)}`
    console.log(res);
}