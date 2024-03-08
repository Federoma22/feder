const procesarNumeros = ()=>{
    let nombre = document.getElementById("nombre")
    let peso = document.getElementById("peso")
    let altura = document.getElementById("altura")
    let salida = document.getElementById("salida")

    let IMC = peso.valueAsNumber / (altura.valueAsNumber * altura.valueAsNumber)

    salida.innerHTML=`
    <tr>
    <th>*peso</th>
    <td>*${peso.value}</td>
    </tr>

    <tr>
    <th>*altura</th>
    <td>*${altura.value}</td>
    </tr>

    <tr>
    <th>*nombre</th>
    <td>*${nombre.value}</td>
    </tr>

    <tr>
    <th>*IMC</th>
    <td>*${IMC.toFixed(2)}</td>
    </tr>
    `
}