console.log('Ejercicio B')

var cantidadDeGatos = parseInt(prompt('Ingrese cantidad de gatos: '))
var cantidadDePasos = parseInt(prompt('Ingrese cantidad de pasos: '))

var imagenGato = '🐈'
var imagenPasos = '🐾'

var concatenoPasos = ''

for(var i = 1; i <= cantidadDeGatos; i++){
    concatenoPasos = ''
    for(var j = 1; j <= cantidadDePasos; j++){
        concatenoPasos = concatenoPasos + imagenPasos
    }
    console.log('Gato #' + i + ': ' + imagenGato + concatenoPasos)
    
}