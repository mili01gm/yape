'use strict';

const RegOne = (data, update) => {
    const section = $('<section class="container register"></section>');

    const step = $('<div class="step"></div>');
    const icon = $('<img src="img/icons/phone.png"/>');
    const divText = $('<div class="page-text"></div>');
    const h2 = $('<h3>Para comenzar validemos tu <br>número</h3>');
    const p = $('<p class="text-grey">Recibirás un SMS con un código de validación</p>');
    divText.append(h2);
    divText.append(p);
    step.append(icon);
    step.append(divText);

    const form = $('<form id="register-number"></form>');
    const input = $('<input type="tel" name="reg-phone" id="tel" class="form-input"/>');
    const areaCode = $('<i src="img/icons/phoneandnumber.png">');
    const box = $('<input type="checkbox" name="terms" id="terms" class="checkbox"> Acepto los <a href="#">Términos y Condiciones</a>');
    input.append(areaCode);
    form.append(input);
    form.append(box);

    const button = $('<button type="submit" class="btn" disabled>Continuar</button>');

    box.on('change', _ => {
        if ($(this).is('checked')) {
            const num = input.val();
            if (num.length > 0) {
                button.removeProp('disabled');
            } else { alert("no no"); }
        }
    });

    form.append(button);
    section.append(step);
    section.append(form);

    return section;
}