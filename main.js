document.addEventListener('DOMContentLoaded', function() {
    let btnSummary = document.querySelector('.btn-summary');
    let btnDelete = document.querySelector('.btn-delete');

    let studentButton = document.querySelector("#student");
    let traineeButton = document.querySelector("#trainee");
    let juniorButton = document.querySelector("#junior");
    let inputState = document.querySelector("#inputState");

    studentButton.addEventListener("click", function() {
        inputState.value = "Estudiante";
    });

    traineeButton.addEventListener("click", function() {
        inputState.value = "Trainee";
    });

    juniorButton.addEventListener("click", function() {
        inputState.value = "Junior";
    });
    
    btnSummary.addEventListener('click', function() {
        let inputName = document.getElementById('inputName');
        let inputSurname = document.getElementById('inputSurname');
        let inputEmail = document.getElementById('inputEmail');
        let inputCant = document.getElementById('inputCant');
        let inputState = document.getElementById('inputState');
        let outputBox = document.querySelector('.output-box');
        let totalPay = inputCant.value * 200;

        if (inputName.value === '' || inputSurname.value === '' || inputEmail.value === ''){
            alert('Por favor completa todos los campos del formulario');
            return;
        } 

        if (inputState.value === 'Estudiante') {
            totalPay = totalPay * 0.8;
            } else if (inputState.value === 'Trainee'){
                totalPay = totalPay * 0.5;
            } else if (inputState.value === 'Junior'){
                totalPay = totalPay * 0.15;
            } 

            outputBox.textContent = 'Total a Pagar: $' + totalPay.toFixed(2);
            alert('Formulario enviado con éxito!!');
    });

    btnDelete.addEventListener('click', function() {
        document.getElementById('inputName').value = '';
        document.getElementById('inputSurname').value = '';
        document.getElementById('inputEmail').value = '';
        document.getElementById('inputCant').value = '';
        document.getElementById('inputState').value = 'Estudiante';
        document.querySelector('.output-box').textContent = 'Total a Pagar: $';

    });
});