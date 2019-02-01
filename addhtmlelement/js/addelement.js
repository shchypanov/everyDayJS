$(function () {

    $('.items').on('click', 'input[type="text"]', function () {
        $(this).addClass('active');
    });

    $('.addField').on('click', function () {
        let $div = $('<div/>').addClass('item');
        $('<input>').attr('type', 'text').addClass('check').appendTo($div);
        $('.items').append($div);
    });
});

