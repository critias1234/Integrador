document.addEventListener('DOMContentLoaded', function() {
    let btnResumen = document.querySelector('.btn-resumen');
    let btnBorrar = document.querySelector('.btn-borrar');

    btnResumen.addEventListener('click', function() {
        let inputCant = document.getElementById('inputCant');
        let inputState = document.getElementById('inputState');
        let outputBox = document.querySelector('.output-box');
        let totalPagar = parseInt(inputCant.value) * 200;

        if (inputState.value === 'Estudiante') {
            totalPagar = totalPagar * 0.8;
            } else if (inputState.value === 'Trainee'){
                totalPagar = totalPagar * 0.5;
            } else if (inputState.value === 'Junior'){
                totalPagar = totalPagar * 0.15;
            } 

            outputBox.textContent = 'Total a Pagar: $' + totalPagar.toFixed(2);
    });

    btnBorrar.addEventListener('click', function() {
        document.getElementById('inputName').value = '';
        document.getElementById('inputSurname').value = '';
        document.getElementById('inputEmail').value = '';
        document.getElementById('inputCant').value = '';
        document.getElementById('inputState').value = 'Estudiante';
        document.querySelector('.output-box').textContent = 'Total a Pagar: $';

    });
});