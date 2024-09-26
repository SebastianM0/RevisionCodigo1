const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const txtname = document.getElementById('name'); //Se cambia el nombre de las constantes por algo más legible 
const txtblog = document.getElementById('blog'); //Se quita el # de blog 
const txtlocation = document.getElementById('location'); //Se quita el punto de location

async function displayUser(username) {
  txtname.textContent = 'cargando...';   //Esta línea se pasa al HTML para mejor lectura
  try{
  const response = await fetch(`${usersEndpoint}/${username}`); //Para usar await se tiene que definir la función como async
  console.log(data);
  txtname.textContent = '${data.name}';
  blog.textContent = '${data.blog}';
  location.textContent = '${data.location}';
}catch (err){
  console.log('Error:', err);
  txtname.textContent = `Algo salió mal: ${err}`
}
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
   //Cambiamos esta línea dentro del try-catch para mejroar el codigo
}

displayUser("Stolinski"); //Cambio a comillas doble para no tener problemas :C
//no veo que sirva esto pero no entiendo aaaa