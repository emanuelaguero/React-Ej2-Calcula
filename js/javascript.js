const numero1 = document.querySelector("#numero1")
const numero2 = document.querySelector("#numero2")
const resultado = document.querySelector("#resultado")
const sumar = document.querySelector("#sumar")
const restar = document.querySelector("#restar")
const multiplicar = document.querySelector("#multiplicar")
const dividir = document.querySelector("#dividir")
const errorN1 = document.querySelector("#error-n1")
const errorN2 = document.querySelector("#error-n2")


validar = (numero1, numero2, op) => {
  
    if (op !== "limpiar") {
        if (numero1.value === "" && numero2.value === "") {
            resultado.innerHTML = ""
            numero1.style.border = "2px solid red"
            numero1.style.background = "#F1D4D4"
            numero2.style.border = "2px solid red"
            numero2.style.background = "#F1D4D4"
        } else if (numero1.value !== "" && numero2.value !== "") {

            numero1.style.border = ""
            numero1.style.background = ""
            numero2.style.border = ""
            numero2.style.background = ""
            if (op === "sumar") {
               
                resultado.innerHTML = (parseInt(numero1.value) + parseInt(numero2.value))
            } else if (op === "restar") {
                resultado.innerHTML = (parseInt(numero1.value) - parseInt(numero2.value))
            } else if (op === "multiplicar") {
                resultado.innerHTML = (parseInt(numero1.value) * parseInt(numero2.value))
            } else {
                if (parseInt(numero1.value) === 0 && parseInt(numero2.value) === 0) {
                    document.resultado.value=
                    resultado.innerHTML = "0/0 es Indeterminado"
                    resultado.style.color = "red"
                } else if (parseInt(numero2.value) === 0) {
                    resultado.innerHTML = (parseInt(numero1.value) / parseInt(numero2.value))
                    resultado.style.color = "red"

                } else {
                    resultado.innerHTML = (parseInt(numero1.value) / parseInt(numero2.value))
                }

            }


        } else if (numero2.value === "") {

            resultado.innerHTML = ""
            numero1.style.border = ""
            numero1.style.background = ""
            numero2.style.border = "2px solid red"
            numero2.style.background = "#F1D4D4"
        } else {


            resultado.innerHTML = ""
            numero1.style.border = "2px solid red"
            numero1.style.background = "#F1D4D4"
            numero2.style.border = ""
            numero2.style.background = ""
        }
    } else {
        
        numero1.value = ""
        numero2.value = ""
    }
}
sumarDatos = () => {
    validar(numero1, numero2, "sumar")
}

restarDatos = () => {
    validar(numero1, numero2, "restar")
}

multiplicarDatos = () => {
    validar(numero1, numero2, "multiplicar")
}

dividirDatos = () => {
    validar(numero1, numero2, "dividir")
}
limpiarDatos = () => {
    validar(numero1, numero2, "limpiar")
}
