$('.faq-question').on('click',  function () {
    let answer = $(this).next();

    $('.answer').not(answer).slideUp(400);
    answer.slideToggle(400);
});
