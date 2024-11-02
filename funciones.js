
function mostrarValores() {

    let nombre = "Carlos";
    let edad= 25;
    let esEstudiante = true;
    document.write("nombre: ", nombre, "<br>");
    document.write("Edad: ", edad, "<br>");
    document.write("¿Es Estudiante?: ", esEstudiante, "<br><br>");


    nombre = "diego";
    edad= 31;
    esEstudiante = false;
    document.write("nombre: ", nombre, "<br>");
    document.write("Edad: ", edad, "<br>");
    document.write("¿Es Estudiante?: ", esEstudiante, "<br><br>");
}

function operacionesMatematicas() {
    let a = 10;
    let b = 5;
    document.write("<strong>Resultados de Operaciones:</strong><br>")
    document.write("suma ", a + b,"<br>" );
    document.write("resta ", a - b, "<br>" );
    document.write("multiplicacion ", a - b,"<br>" );
    document.write("division ", a - b, "<br><br>" );

    document.write("<strong>Comparaciones:</strong><br>")
    document.write("Mayor que ", a > b, "<br>" );
    document.write("Menor que ", a < b, "<br>" );
    document.write("a == b " + (a == b) + "<br>" );
    document.write("a  != b " + (a != b) + "<br>" );

}

function VerificarConducion() {
    let esMayorDeEdad = true;
    let tieneLicencia = false;
    const puedeConducir = esMayorDeEdad&& tieneLicencia;
    document.write("<strong>¿Puede conducir?:</strong> " + puedeConducir + "<br><br>");

    const mensajeBienvenida = '¡Hola Bienvenido al sistema!';

}
