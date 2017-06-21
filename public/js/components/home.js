'use strict';

const Home = (update) => {
    const section = $('<section class="container"></section>');

    const divSlide = $('<div class="slide"></div>');

    const figOne = $('<figure></figure>');
    const img1 = $('<img src="img/icons/icon-people.png" />');
    const figCap1 = $('<figcaption></figcaption>');
    const fig1H3 = $('<h3>Paga a tus amigos</h3>');
    const fig1P = $('<p>Paga a quien quieras desde donde quiera, sin usar efectivo</p>');
    figCap1.append(fig1H3);
    figCap1.append(fig1P);
    figOne.append(img1);
    figOne.append(figCap1);

    const figTwo = $('<figure></figure>');
    const img2 = $('<img src="img/icons/.png" />');
    const figCap2 = $('<figcaption></figcaption>');
    const fig2H3 = $('<h3>Sin número de cuenta</h3>');
    const fig2P = $('<p>Elige a quién pagar desde tu lista de contactos</p>');
    figCap2.append(fig2H3);
    figCap2.append(fig2P);
    figTwo.append(img2);
    figTwo.append(figCap2);

    const figThree = $('<figure></figure>');
    const img3 = $('<img src="img/icons/.png" />');
    const figCap3 = $('<figcaption></figcaption>');
    const fig3H3 = $('<h3>Gratis y Seguro</h3>');
    const fig3P = $('<p>La transferencia es inmediata y gratuita de una cuenta a otra</p>');
    figCap3.append(fig3H3);
    figCap3.append(fig3P);
    figThree.append(img3);
    figThree.append(figCap3);

    divSlide.append(figOne);
    divSlide.append(figTwo);
    divSlide.append(figThree);
    section.append(divSlide);

    const button = $('<button type="button" class="btn">Registrarme</button>');
    button.on('click', (e) => {
        e.preventDefault();
        state.page = 1;
        update();
    });

    section.append(button);

    return section;
}