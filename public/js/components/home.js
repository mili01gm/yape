'use strict';

const Home = (update) => {
    const section = $('<section class="container home"></section>');

    const divSlide = $('<div class="slide"></div>');
    const figOne = $('<figure></figure>');
    const img1 = $('<img src="img/icons/icon-people.png"/>');
    const figCap1 = $('<figcaption></figcaption>');
    const fig1H2 = $('<h2>Paga a tus amigos</h2>');
    const fig1P = $('<p>Paga a quien quieras desde donde <br>quieras, sin usar efectivo</p>');
    figCap1.append(fig1H2);
    figCap1.append(fig1P);
    figOne.append(img1);
    figOne.append(figCap1);

    const figTwo = $('<figure></figure>');
    const img2 = $('<img src="img/icons/happy-person.png"/>');
    const figCap2 = $('<figcaption></figcaption>');
    const fig2H2 = $('<h2>Sin número de cuenta</h2>');
    const fig2P = $('<p>Elige a quien pagar desde tu lista <br>de contactos</p>');
    // figTwo.append(img2);
    // figTwo.append(figCap2);

    const figThree = $('<figure></figure>');
    const img3 = $('<img src="img/icons/happy-person.png"/>');
    const figCap3 = $('<figcaption></figcaption>');
    const fig3H2 = $('<h2>Gratis y Seguro</h2>');
    const fig3P = $('<p>La transferencia es inmediata y <br>gratuita de una cuenta a otra</p>');

    divSlide.append(figOne);

    const button = $('<button type="button" class="btn btn-register">Registrarme</button>');

    button.on('click', (e) => {
       e.preventDefault();
       state.page = 1;
       update();
    });

    section.append(divSlide);
    section.append(button);
    return section;
}