//SE guarda toda la informacion del formulario y con los diferentes botones interactua con la información para su manipulación requerida
let myForm = document.querySelector("#form");
let myForm2 = document.querySelector("#form2");
let tableUsuarios= document.getElementById("tableUsuarios");
let spanResult= document.getElementById("spanResult");




myForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    let data = Object.fromEntries(new FormData(e.target));    
    opc[e.submitter.dataset.accion](data)    
})


myForm2.addEventListener("submit", (e)=>{
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
    let user = ""
    tableUsuarios.innerHTML=""

    for( let i=0; i<res.length; i++)
    {        
        user += ` <tr id="${i}">
            <td class="flex flex-row items-center justify-center text-center border align-ce-middle border-slate-300 p-3">
            <button class="flex items-center justify-center w-10 p-1 mx-2 my-2 font-medium text-white bg-red-600 border-red-500 rounded-lg h-7 hover:bg-red-500 hover:shadow">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                </svg>
            </button><p class="p-3">${res[i]["documento"]}</p>
            </td>
            <td id="nombre" class="text-center border border-slate-300 p-3">${res[i]["nombre"]}</td>
            <td id="apellido" class="text-center border border-slate-300 p-3">${res[i]["apellido"]}</td>
            <td id="telefono" class="text-center border border-slate-300 p-3">${res[i]["telefono"]}</td>
            <td id="fechaNacimiento" class="text-center border border-slate-300 p-3">${res[i]["fechaNacimiento"]}</td>
            <td id="ciudad" class="text-center border border-slate-300 p-3">${res[i]["ciudad"]}</td>
            <td id="pais" class="text-center border border-slate-300 p-3">${res[i]["pais"]}</td>
            <td id="correo" class="text-center border border-slate-300 p-3">${res[i]["correo"]}</td>
            </tr>`
    }
    tableUsuarios.innerHTML=user
    
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
    let res = await ( await fetch(`http://localhost:4009/clientes/${data.documento}`,config)).json();
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
    console.log(res); 
    let infoUsuarios = ""
    tableUsuarios.innerHTML=infoUsuarios   

    if(res.length > 0)
    {
        spanResult.innerHTML=""
        for( let i=0; i<res.length; i++)
        {
            
            infoUsuarios += ` <tr>
            <td id="documento" class="text-center border border-slate-300 p-5">${res[i]["documento"]}</td>
            <td id="nombre" class="text-center border border-slate-300 p-5">${res[i]["nombre"]}</td>
            <td id="apellido" class="text-center border border-slate-300 p-5">${res[i]["apellido"]}</td>
            <td id="telefono" class="text-center border border-slate-300 p-5">${res[i]["telefono"]}</td>
            <td id="fechaNacimiento" class="text-center border border-slate-300 p-5">${res[i]["fechaNacimiento"]}</td>
            <td id="ciudad" class="text-center border border-slate-300 p-5">${res[i]["ciudad"]}</td>
            <td id="pais" class="text-center border border-slate-300 p-5">${res[i]["pais"]}</td>
            <td id="correo" class="text-center border border-slate-300 p-5">${res[i]["correo"]}</td>
            </tr>`// Agrega el contenido al elemento           
            

        }
        tableUsuarios.innerHTML=infoUsuarios
        
    }
    else 
    {
        spanResult.innerHTML="No se encontraron resultados"
    }


    
    

    //info.innerHTML=`${}`
    //console.log(res);
}