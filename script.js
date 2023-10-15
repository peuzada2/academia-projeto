$(document).ready(function () {
    $(".hamburguer").click(function () {
        $(this).toggleClass("active");
        $(".navegacao").toggleClass("active");
    });
});
