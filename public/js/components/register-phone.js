'use strict';

const RegOne = (data,update) => {
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

    const form = $('<form></form>');
    const input = $('<input type="tel" id="tel" class="tel"/>');
    const areaCode = $('<i src="img/icons/phoneandnumber.png">');
    const box = $('<input type="checkbox" id="terms" class="checkbox" required> Acepto los <a href="#">Términos y' +
        ' Condiciones</a>');
    input.append(areaCode);
    form.append(input);
    form.append(box);

    box.on('click', _ => {
        if ( $('#terms').is( ":checked" ) ) {
            $('#terms').removeProp('checked');
        } else { $('#terms').prop('checked');}
    });

    const button = $('<button type="submit" class="btn"disabled>Continuar</button>');

    button.on('click',(e) => {
        e.preventDefault();
        if(input.val().lenght()!== 0 && box.attr('checked')) {
            button.removeAttr('disabled');
            state.page = 2;
            update();
        }
    });



    form.append(button);
    section.append(step);
    section.append(form);
    return section;
}