'use strict';

const Code = (data, update) => {
    const section = $('<section class="container code"></section>');

    const step = $('<div class="step"></div>');
    const icon = $('<img src="img/icons/message.png"/>');
    const divText = $('<div class="page-text"></div>');
    const h3 = $('<h3>Ahora ingresa tu código/h3>');
    const p = $('<p class="text-grey">`Enviamos un SMS con el código de validación <br>al número <strong>${data.phone}</strong>`</p>');
    divText.append(h3);
    divText.append(p);
    step.append(icon);
    step.append(divText);

    const form = $('<form id="register-number"></form>');
    const input = $('<input type="tel" name="reg-phone" id="tel" class="form-input"/>');
    const timer = $('<p id="timer-text">reset code <span id="timer-clock"></span></p>');
    form.append(input);
    form.append(input);
    section.append(step);
    section.append(form);

    return section;


}