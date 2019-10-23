$(document).ready(function () {
    $(".nav-item").click(function () {
        $(".content").load("about.html");
    });
});