jQuery.fn.LetterOnly = function() {
    return this.each(function() {
        $(this).keydown(function(e) {
            const key = e.charCode || e.keyCode || 0;
            return (
                key == 8 || key == 9 ||
                key == 13 || key == 32 ||
                key == 46 || key == 110 ||
                key == 190 || key == 209 ||
                key == 241 || key == 225 ||
                key == 233 || key == 237 ||
                key == 243 || key == 250 ||
                key == 193 || key == 201 ||
                key == 205 || key == 211 ||
                key == 218 ||
                (key >= 97 && key <= 122) ||
                (key >= 65 && key <= 90));
        });
    });
};