'use strict';

const Code = (data, update) => {
    const section = $('<section class="container register"></section>');

    const step = $('<div class="step"></div>');
    const icon = $('<img src="img/icons/message.png"/>');
    const divText = $('<div class="page-text"></div>');
    const h3 = $('<h3>Ahora ingresa tu código/h3>');
    const p = $('<p class="text-grey">Enviamos un SMS con el código de validación <br>al número <strong>${data.phone}</strong></p>');
    divText.append(h3);
    divText.append(p);
    step.append(icon);
    step.append(divText);

    const form = $('<form id="send-code"></form>');
    const input = $('<input type="tel" name="reg-phone" id="tel" class="form-input"/><i src="img/icons/lock.png">');
    // const areaCode = $('<i src="img/icons/phoneandnumber.png">');
    const timer = $('');

    // input.append(areaCode);
    form.append(input);
    form append(timer);
    section.append(step);
    section.append(form);

    return section;


}