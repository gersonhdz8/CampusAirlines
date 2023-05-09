/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}","./public/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage:{
        "fondo1":"url('images/fondo1.jpg')",
        "fondo2":"url('images/fondo2.jpg')",
        "fondo3":"url('images/fondo3.jpg')",
        "fondo4":"url('images/fondo4.jpg')",
        "fondo5":"url('images/fondo5.jpg')",
        "rutas":"url('images/rutas.jpg')",  
        "embarque":"url('images/abordar.jpg')",  
        "personal":"url('images/personal.eps')",  
        "tiquetes":"url('images/tiquete.jpg')", 
        "flota":"url('images/flota.jpg')",          

      },
    },
  },
  plugins: [],
}

