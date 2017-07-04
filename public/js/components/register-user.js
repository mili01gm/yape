'use strict';

const RegUser = (update) => {
    const section = $('<section class="container register-user"></section>');

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

    const divInputName = $('<div class="div-input"></div>');
    const iIconName = $('<img src="img/icons/user.png">');
    const inputName = $('<input type="text" name="user-name" id="uName" class="form-input" placeholder="Nombre" required/>');
    divInputName.append(iIconName);
    divInputName.append(inputName);

    const divInputMail = $('<div class="div-input"></div>');
    const iIconMail = $('<img src="img/icons/message-gray.png">');
    const inputMail = $('<input type="email" name="user-email" id="uEmail" class="form-input" placeholder="Email" required/>');
    divInputMail.append(iIconMail);
    divInputMail.append(inputMail);

    const divInputPass = $('<div class="div-input"></div>');
    const iIconPass = $('<img src="img/icons/lock.png">');
    const inputPass = $('<input type="password" name="user-pass" id="uPass" class="form-input" placeholder="Contraseña de 6 dígitos" maxlength="6"required/>');
    divInputPass.append(iIconPass);
    divInputPass.append(inputPass);

    const uButton = $('<button type="button" class="btn" disabled>Crear cuenta</button>');
    const msgMail = $('<p class="msg"></p>');

    form.append(divInputName);
    form.append(divInputMail);
    form.append(divInputPass);
    form.append(uButton);
    form.append(msgMail);
    section.append(step);
    section.append(form);

    inputName.LetterOnly();

    inputName.on('keyup', () => {
        if (inputName.val() != "") {
            return true;
        } else {
            return false;
        }
    });

    let isIt = false;
    inputMail.on('keyup', () => {
        let regex = /^\S+@\S+\.\S+/;
        if (regex.test(inputMail.val())) {
            isIt = true;
            msgMail.text('');
        } else {
            msgMail.text('Ingrese un correo válido');
        }
    });

    inputPass.NumberOnly();
    inputPass.on('keyup', () => {
        if (inputPass.val() > 0 && inputPass.val() < 7) {
            return true;
        } else {
            return false;
        }
    });

    form.on("change keyup", function() {
        if (inputName.val().trim().length > 1 && isIt == true && inputPass.val().length == 6) {
            uButton.removeAttr("disabled");
        } else {
            uButton.attr("disabled", "false");
        }
    });


    uButton.on('click', (e) => {
        e.preventDefault();

        $.post('./api/createUser', {
            "phone": state.phone,
            "name": inputName.val(),
            "email": inputMail.val(),
            "password": inputPass.val()
        }, (result) => {
            if (result.succes != false) {
                state.name = inputName.val();
                state.email = inputMail.val();
                state.password = inputPass.val();
                state.page = 4;
                console.log(state.code);
                update();
            }
        });
    });

    return section;
}