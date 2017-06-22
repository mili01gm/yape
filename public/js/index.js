'use strict';

const render = (root) => {
    root.empty();

    const wrapper = $('<div class="wrapper"></div>');
    if (state.page == null) {
        wrapper.append(Home(_ => render(root)));
    } else if (state.page == 1) {
        wrapper.append(RegOne(_ => render(root)));
    } else if (state.page == 2) {
        wrapper.append(Code(_ => render(root)));
    } else if (state.page == 3) {
        wrapper.append(RegUser(_ => render(root)));
    }
    // else if (state.page == 4) {
    //     wrapper.append(RegUser(_ => render(root)));
    // }

    root.append(wrapper);

}

const state = {
    page: null,
    phone: null,
    term: false,
    code: null,
    name: null,
    email: null,
    password: null
}

$(_ => {
    const root = $('.root');
    render(root);
});