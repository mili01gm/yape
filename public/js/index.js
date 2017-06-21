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
    }

    root.append(wrapper);

}

const state = {
    user: null,
    page: null
}

$(_ => {
    const root = $('.root');
    render(root);
});