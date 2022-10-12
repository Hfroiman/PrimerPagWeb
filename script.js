function Saludar()
{
    var User = document.getElementById("txtuser").value;
    var pass = document.getElementById("txtpass").value;
    alert("Te doy la bienvenida a mi pagina Web "+ User);
    console.log("Tu contraseña no es secreta... "+ pass);
}