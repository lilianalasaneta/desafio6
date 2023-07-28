console.log('Ejercicio C')

var cantidadDeGatos = parseInt(prompt('Ingrese cantidad de gatos: '))
var cantidadDePasos = parseInt(prompt('Ingrese cantidad de pasos: '))

var imagenGato = '🐈'
var imagenPasos = '🐾'
var imagenCuadrado = '⬛'

var concatenoPasos = ''
var par = 0

for(var i = 1; i <= cantidadDeGatos; i++){
    concatenoPasos = ''
    for(var j = 1; j <= cantidadDePasos; j++){
        concatenoPasos = concatenoPasos + imagenPasos
    }
    par = i%2
    if(par == 0){
        console.log('Gato #' + i + ': ' + imagenGato + imagenCuadrado + concatenoPasos)
    }else{
        console.log('Gato #' + i + ': ' + imagenGato + concatenoPasos)
    }
    
}