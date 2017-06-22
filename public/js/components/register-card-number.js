'use strict';

const CardNumber = (update) => {
    const section = $('<section class="container card-number"></section>');

    const step = $('<div class="step"></div>');
    const icon = $('<img src="img/icons/bcp-logo.png"/>');
    const divText = $('<div class="page-text"></div>');
    const h4 = $('<h4>Registra tu tarjeta de débito BCP</h4>');
    const p = $('<p>Por ahora solo aceptamos cuentas de ahorro y/o <br>corriente en soles.</p>');
    divText.append(h4);
    divText.append(p);
    step.append(icon);
    step.append(divText);

    const form = $('<form id="card-form"></form>');

    const divInput = $('<div class="div-input"></div>');
    const iIcon = $('<img src="img/icons/lock.png">');
    const cardNumber = $('<input type="text" name="user-name" id="uName" class="form-input"  required/>');
    const scan = $('<p><img src="img/icons/scan.png">Escanear tarjeta</p>');
    divInput.append(iIcon);
    divInput.append(cardNumber);
    divInput.append(scan);

    const divDate = $('<div class="div-date"></div>');
    const label = $('<label class="text-grey">Fecha de Vencimiento</label>');
    const month = $('<input class="card-month">');
    const year = $('<input class="card-year">');


    const button = $('<button type="button" class="btn">Crear cuenta</button>');


    form.append(divInput);
    form.append(divDate);
    form.append(button);
    section.append(step);
    section.append(form);






    return section
}