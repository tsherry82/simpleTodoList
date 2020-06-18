$('ul').on('click', 'li', function () {
    $(this).toggleClass('completed')
})

$('ul').on('click', 'span', function (e) {
    $(this).parent().fadeOut(500, function () {
        $(this).remove();
    })
    e.stopPropagation();
});

$('input[type = "text"]').keypress(function (e) {
    if (e.which === 13) {
        const newTodo = ($(this).val());
        $(this).val('')
        $('ul').append('<li><span><i class="fa fa-trash"></i> </span>' + newTodo + '</li>')
    }
})

$('.fa-plus').click(function() {
    $('input[type = "text"]').fadeToggle();
})
