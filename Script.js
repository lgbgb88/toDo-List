const agregarBoton = document.querySelector('.agregarBoton');
const input = document.querySelector('.input');
const container = document.querySelector('.container');

class ToDo{
    constructor(contenidoToDo){
        this.crearDiv(contenidoToDo);
    }

    crearDiv(contenidoToDo){
        //Asignarle propiedades y elementos al input
        let input = document.createElement('input');
        input.value = contenidoToDo;
        input.disabled = true;
        input.classList.add('ToDo_input');
        input.type = "text";

        //Crear el div ToDo
        let ToDoBox = document.createElement('div');
        ToDoBox.classList.add('ToDo');
        //Se crea un boton que acciona la funcion Modificar
        let modificarButton = document.createElement('button');
        modificarButton.innerHTML = "MODIFICAR";
        modificarButton.classList.add('modificarButton');
        //Se crea un boton que acciona la funcion Eliminar
        let eliminarButton = document.createElement('button');
        eliminarButton.innerHTML = "ELIMINAR";
        eliminarButton.classList.add('eliminarButton');

        //Nodos
        container.appendChild(ToDoBox);
        ToDoBox.appendChild(input);
        ToDoBox.appendChild(modificarButton);
        ToDoBox.appendChild(eliminarButton);

        //Accionar las funciones con un click
        modificarButton.addEventListener('click', () => this.modificar(input));
        eliminarButton.addEventListener('click', () => this.eliminar(ToDoBox));
    }

    //Funcion Modificar
    //Habilita y deshabilita el contenedor para ser modificado
    modificar(input){
        input.disabled = !input.disabled;
    }

    //Funcion Eliminar
    eliminar(ToDo){
        container.removeChild(ToDo);
    }
}

//Checar el contenido del input
//Si el input esta vacio, entonces no se agregara a la lista
function checar(){
    if(input.value != ""){
        new ToDo (input.value);
        input.value = "";
    }
}

//Al dar click en el boton 'agregar' se creara un nuevo div
//Al mismo tiempo checa si existe contenido o si esta en blanco
agregarBoton.addEventListener('click', checar);