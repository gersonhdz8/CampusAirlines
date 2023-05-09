//SE obtiene los datos del formulario, se verifica si el usuario está registrado, en caso de estar registrado,
// se le dirige a una página para completar la información del vuelo a tomar.
//En caso de no esta registrado se redirige a una página para la toma de datos completos.
let myForm = document.querySelector("#form");

myForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    let data = Object.fromEntries(new FormData(e.target));    
    opc[e.submitter.dataset.accion](data)    
})

const opc = {

    "SEARCH": (data) => searchUser(data),
    
}

let config = {
    headers:new Headers({
        "Content-Type": "application/json"
    }), 
};

const searchUser = async(data)=>{
    config.method = "GET";
    let res = await ( await fetch(`http://localhost:4009/clientes?q=${Object.values(data).join("")}`,config)).json();

    //AQuí iría la LÓGICA confirmación O validación si ya está registrado el usuario y lo redirige a la página para seguir comprando el tiquete
    if(res)
    {
        location.href ="/public/modTiquetes/tiquetes.html"
    }
    //-----
    console.log(res);
}