// submenu
$(function () {
    $(".submenu").hide()
    $(".gnb li a").mouseenter(function () {
        $(".submenu").stop().slideDown()
    });
    $(".nav").mouseleave(function () {
        $(".submenu").stop().slideUp()
    });
    // top버튼을 누르면,
    $(".top_btn").click(function () {
        // 문서 전체가 움직인다.
        $("body,html").animate({
            scrollTop: '0'
        }, 500);
    });
    // top버튼을 안보이게 한다
    $(".top_btn").hide();
    // 브라우저 창에서 스크롤하면,
    $(window).scroll(function () {
        if ($(this).scrollTop() > 500) {
            //top버튼이 보인다.
            $(".top_btn").fadeIn()
        } else {
            // top버튼이 안보인다.
            $(".top_btn").fadeOut()
        }
    });


});
