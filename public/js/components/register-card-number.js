'use strict';

const CardNumber = (update) => {
    alert("Hola");
    const section = $('<section class="container card-number"></section>');

    const step = $('<div class="step"></div>');
    const icon = $('<img src="img/icons/phone.png"/>');
    const divText = $('<div class="page-text"></div>');
    const h4 = $('<h4>Para comenzar validemos tu <br>número</h4>');
    const p = $('<p>Recibirás un SMS con un código de validación</p>');
    divText.append(h4);
    divText.append(p);
    step.append(icon);
    step.append(divText);

    const form = $('<form id="user-info"></form>');
    const inputName = $('<input type="text" name="user-name" id="uName" class="form-input" placeholder="Nombre" required/>');
    const inputMail = $('<input type="email" name="user-email" id="uEmail" class="form-input" placeholder="Email" required/>');
    const inputPass = $('<input type="password" name="user-pass" id="uPass" class="form-input" placeholder="Contraseña" required/>');
    const uButton = $('<button type="button" class="btn">Crear cuenta</button>');

    form.append(inputName);
    form.append(inputMail);
    form.append(inputPass);
    form.append(uButton);
    section.append(step);
    section.append(form);

    return section
}