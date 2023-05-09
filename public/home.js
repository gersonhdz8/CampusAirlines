//Se obtienen los elementos del DOM para agregarles el evento click y redireccionar a las interfaces correspondientes.
let modClientes= document.getElementById('modClientes')
let modRutas= document.getElementById('modRutas')
let modFlotas= document.getElementById('modFlotas')
let modTiquetes= document.getElementById('modTiquetes')
let modEmbarque= document.getElementById('modEmbarque')
let modPersonal=document.getElementById('modPersonal')
let registro=document.getElementById('registro')


modClientes.addEventListener("click", modClientesClick)
modRutas.addEventListener("click", modRutasClick)
modFlotas.addEventListener("click", modFlotasClick)
modTiquetes.addEventListener("click", modTiquetesClick)
modEmbarque.addEventListener("click", modEmbarqueClick)
modPersonal.addEventListener("click", modPersonalClick)
registro.addEventListener("click",clickRegistro)

function modClientesClick()
{
    location.href="/public/modClientes/clientes.html"
}
function modRutasClick()
{
    location.href="/public/modRutas/rutas.html"
}
function modFlotasClick()
{
    location.href="/public/modFlotas/flotas.html"
}
function modTiquetesClick()
{
    location.href="/public/login/login.html"
}
function modEmbarqueClick()
{
    location.href="/public/modEmbarque/embarque.html"
}
function modPersonalClick()
{
    location.href="/public/modPersonal/personal.html"
}
function clickRegistro()
{
    location.href="/public/registro/registro.html"

}