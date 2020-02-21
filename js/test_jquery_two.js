$(document).ready(function() {
    // 测试一
    $("p").click(function() {
        $(this).hide();
    });
    // 测试二
    $("#show").click(function() {
        $("p").show();
    });
    $("#hide").click(function() {
        $("p").hide();
    });
});
