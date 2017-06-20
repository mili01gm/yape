'use strict';

const render = (root) => {
    root.empty();

    const wrapper = $('<div class="wrapper"></div>');
    if(state.page == null) {
        wrapper.append(Home(_ => render(root)));
    }
    if(state.page == 1) {
        wrapper.append(RegOne );
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
