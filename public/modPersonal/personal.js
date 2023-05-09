//Se obtienen los datos del formulario y se guardan en el json server "empleados"
let myForm = document.querySelector("#form");
myForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    let data = Object.fromEntries(new FormData(e.target));
    opc[e.submitter.dataset.accion](data)    
})

const opc = {    
    
    "DELETE": (data) => deleteUser(data),    
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
    let res = await ( await fetch("http://localhost:4009/empleados",config)).json();
    console.log(res);
}

const deleteUser = async(data)=>{
    config.method = "DELETE";
    let res = await ( await fetch(`http://localhost:4009/empleados/${data}`,config)).json();
    console.log(res);
}
