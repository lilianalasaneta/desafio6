console.log('Ejercicio A')

var cantidadDeGatos = parseInt(prompt('Ingrese cantidad de gatos: '))

var arrayImagen = ['😺', '😸', '😹']

var contador = 0

for(var i = 1; i <= cantidadDeGatos; i++){
    console.log('Gato #' + i + ': ' + arrayImagen[contador])
    
    if(contador == 2){
        contador = 0
    }else{
        contador ++
    }
}
