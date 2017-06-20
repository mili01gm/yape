'use strict';

const Home = (update) => {
    const section = $('<section class="container"></section>');
    const divSlide = $('<div class="slide"></div>');
    const figOne = $('<figure></figure>');
    const img1 = $('<img src="img/icons/icon-people.png"/>');
    const figCap1 = $('<figcaption>Icon 1</figcaption>');
    figOne.append(img1);
    figOne.append(figCap1);
    const figTwo = $('<figure></figure>');
    const img2 = $('<img/>');
    const figCap2 = $('<figcaption></figcaption>');
    figTwo.append(img2);
    figTwo.append(figCap2);
    const figThree = $('<figure></figure>');
    const img3 = $('<img/>');
    const figCap3 = $('<figcaption></figcaption>');
    const button = $('<button type="button" class="button">Registrarme</button>');

    button.on('click', (e) => {
       e.preventDefault();
       state.page = 1;
       update();
    });
    figOne.append(img1);
    divSlide.append(figOne);
    section.append(divSlide);
    section.append(button);
    return section;
}