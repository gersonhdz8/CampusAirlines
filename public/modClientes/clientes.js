//SE guarda toda la informacion del formulario y con los diferentes botones interactua con la información para su manipulación requerida
let myForm = document.querySelector("#form");
let myForm2 = document.querySelector("#form2");

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
    console.log(res);
    let tableUsuarios= document.getElementById("tableUsuarios");
    let infoUsuarios = ""

    if(res.length > 0)
    {
        for( let i=0; i<res.length; i++)
        {
            
            infoUsuarios += ` <tr>
            <td class="text-center border border-slate-300 p-5">${res[i]["documento"]}</td>
            <td class="text-center border border-slate-300 p-5">${res[i]["nombre"]}</td>
            <td class="text-center border border-slate-300 p-5">${res[i]["apellido"]}</td>
            <td class="text-center border border-slate-300 p-5">${res[i]["telefono"]}</td>
            <td class="text-center border border-slate-300 p-5">${res[i]["fechaNacimiento"]}</td>
            <td class="text-center border border-slate-300 p-5">${res[i]["ciudad"]}</td>
            <td class="text-center border border-slate-300 p-5">${res[i]["pais"]}</td>
            <td class="text-center border border-slate-300 p-5">${res[i]["correo"]}</td>
            </tr>`
            tableUsuarios.innerHTML=infoUsuarios

        }
        
    }
    else 
    {
        infoUsuarios += ` <tr>
            <td class="text-center border border-slate-300 p-5">xx</td>
            <td class="text-center border border-slate-300 p-5">xx</td>
            <td class="text-center border border-slate-300 p-5">xx</td>
            <td class="text-center border border-slate-300 p-5">xx</td>
            <td class="text-center border border-slate-300 p-5">xx</td>
            <td class="text-center border border-slate-300 p-5">xx</td>
            <td class="text-center border border-slate-300 p-5">xx</td>
            <td class="text-center border border-slate-300 p-5">xx</td>
            
            </tr>`
            tableUsuarios.innerHTML=infoUsuarios

    }


    
    

    //info.innerHTML=`${}`
    //console.log(res);
}