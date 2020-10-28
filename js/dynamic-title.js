<!--崩溃欺骗-->
const originTitle = document.title;
let titleTime;
document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        document.title = '(つд⊂)看不见我~';
        clearTimeout(titleTime);
    }
    else {
        // $('[rel="icon"]').attr('href', "/favicon.ico");
        document.title = '(ﾟ3ﾟ)被你发现了~' + originTitle;
        titleTime = setTimeout(function () {
            document.title = originTitle;
        }, 3000);
    }
});