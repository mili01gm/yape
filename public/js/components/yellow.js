'use strict';

const Yellow = (update) => {
    const section = $('<section class="container yellow"></section>');
    const div = $('<div class="div-yellow"></div>');
    const img = $('<img src="">');
    const h5 = $('<h5>¡Bien!</h5>');
    const p = $('<p>Ahora ya puedes usar Yape</p>');

    div.append(img);
    div.append(h5);
    div.append(p);
    section.append(div);

    return section;
}