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
    const input = $('<input type="tel" name="reg-phone" id="tel" class="form-input" maxlength="9" required/>');
    const areaCode = $('<i src="img/icons/phoneandnumber.png">');
    const box = $('<input type="checkbox" name="terms" id="terms" class="checkbox required"> Acepto los <a href="#">Términos y Condiciones</a>');
    input.append(areaCode);
    form.append(input);
    form.append(box);

    const button = $('<button type="submit" class="btn" disabled>Continuar</button>');

    input.NumberOnly();

    input.on('blur', () => {
        const vb = box.is(':checked');
        if (vb == true) {
            button.removeAttr('disabled');
        }
    });

    box.on('change', () => {
        const vb = box.is(':checked');
        const valInput = input.val();
        if (vb == true && valInput.length === 9) {
            button.removeAttr('disabled');
        }
    });

    form.append(button);
    section.append(step);
    section.append(form);
    return section;
}

//En consola se indica error cuando se escribe con ES6. Verificar.
jQuery.fn.NumberOnly = function() {
    return this.each(function() {
        $(this).keydown(function(e) {
            const key = e.charCode || e.keyCode || 0;
            return (
                key == 8 || key == 9 ||
                key == 13 || key == 110 ||
                key == 190 ||
                (key >= 35 && key <= 40) ||
                (key >= 48 && key <= 57) ||
                (key >= 96 && key <= 105));
        });
    });
};