'use strict';

const RegOne = (update) => {
    const section = $('<section class="container register"></section>');

    const step = $('<div class="step"></div>');
    const icon = $('<img src="img/icons/phone.png"/>');
    const divText = $('<div class="page-text"></div>');
    const h4 = $('<h4>Para comenzar validemos tu <br>número</h4>');
    const p = $('<p>Recibirás un SMS con un código de validación</p>');
    divText.append(h4);
    divText.append(p);
    step.append(icon);
    step.append(divText);

    const form = $('<form id="register-number"></form>');
    const divInput = $('<div class="div-input"></div>');
    const iIcon = $('<img src="img/icons/phoneandnumber.png">');
    const input = $('<input type="tel" name="reg-phone" id="tel" class="form-input" maxlength="9" required/>');
    const box = $('<input type="checkbox" name="terms" id="terms" class="checkbox required"> <span>Acepto los <a href="#">Términos y Condiciones</a></span>');
    const button = $('<button type="submit" class="btn" disabled>Continuar</button>');
    const msg = $('<p class="msg"></p>');
    divInput.append(iIcon);
    divInput.append(input);
    form.append(divInput);
    form.append(box);
    form.append(button);
    form.append(msg);

    //Solo números
    input.NumberOnly();

    form.on("change keyup", function() {
        const valInput = input.val();
        const vb = box.is(':checked');
        if (input.val().trim().length == 9 && input.val().charAt(0) == 9 && box.is(':checked')) {
            msg.text('');
            state.phone = valInput;
            state.term = vb;
            button.removeAttr("disabled");
        } else {
            state.phone = null;
            state.term = false;
            button.attr("disabled", "disabled");
            msg.text('El número debe iniciar en 9 y tener 9 dígitos');
        }
    });

    button.on('click', (e) => {
        e.preventDefault();

        $.post('./api/registerNumber', {
            "phone": state.phone,
            "terms": state.term
        }, (result) => {
            if (result.succes != false) {
                state.code = result.data.code;
                console.log(state.code);
                state.page = 2;
                update();
            }
        });
    });

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