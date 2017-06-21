'use strict';

const RegUser = (data, update) => {
    const section = $('<section class="container register-user"></section>');

    const step = $('<div class="step"></div>');
    const icon = $('<img src="img/icons/phone.png"/>');
    const divText = $('<div class="page-text"></div>');
    const h2 = $('<h3>Para comenzar validemos tu <br>número</h3>');
    const p = $('<p class="text-grey">Recibirás un SMS con un código de validación</p>');
    divText.append(h2);
    divText.append(p);
    step.append(icon);
    step.append(divText);

    const form = $('<form id="user-info"></form>');
    const inputName = $('<input type="text" name="user-name" id="uName" class="form-input" placeholder="Nombre" required/>');
    const inputMail = $('<input type="email" name="user-email" id="uEmail" class="form-input" placeholder="Email" required/>');
    const inputPass = $('<input type="password" name="user-pass" id="uPass" class="form-input" placeholder="Contraseña" required/>');
    const uButton = $('<button type="submit" class="btn">Crear cuenta</button>');

    inputName.LetterOnly();

    button.on('click', (e) => {
        e.preventDefault();
        state.page = 5;
        update();
    });

    form.append(inputName);
    form.append(inputMail);
    form.append(inputPass);
    form.append(uButton);
    section.append(step);
    section.append(form);

    return section;
}

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

jQuery.fn.LetterOnly = function() {
    return this.each(function() {
        $(this).keydown(function(e) {
            const key = e.charCode || e.keyCode || 0;
            return (
                key == 8 || key == 9 ||
                key == 13 || key == 32 ||
                key == 46 || key == 110 ||
                key == 190 || key == 209 ||
                key == 241 || key == 225 ||
                key == 233 || key == 237 ||
                key == 243 || key == 250 ||
                key == 193 || key == 201 ||
                key == 205 || key == 211 ||
                key == 218 ||
                (key >= 97 && key <= 122) ||
                (key >= 65 && key <= 90));
        });
    });
};