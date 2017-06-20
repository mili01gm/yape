'use strict';

const Home = (update) => {
    const section = $('<section class="container"></section>');
    const divSlide = $('<div class="slide"></div>');
    const figOne = $('<figure></figure>');
    const img1 = $('<img/>');
    const figCap1 = $('<figcaption></figcaption>');
    const figTwo = $('<figure></figure>');
    const img2 = $('<img/>');
    const figCap2 = $('<figcaption></figcaption>');
    const figThree = $('<figure></figure>');
    const img3 = $('<img/>');
    const figCap3 = $('<figcaption></figcaption>');
    const button = $('<button type="button" class="button">Registrarme</button>');

    button.on('click', (e) => {
       e.preventDefault();
       state.page = 1;
       update();
    });

    section.append(divSlide);
    section.append(button);
    return section;
}