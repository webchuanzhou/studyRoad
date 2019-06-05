(function(doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function() {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            // docEl.style.fontSize = 20 * (clientWidth / 320) + 'px';
            docEl.style.fontSize = 20 * (clientWidth / 375) + 'px';
        };
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);
// window.onload=function(){
//     //设置适配rem
//     var change_rem = ((window.screen.width > 450) ? 450 : window.screen.width)/375*100;
//     document.getElementsByTagName("html")[0].style.fontSize=change_rem+"px";
//     window.onresize = function(){
//         change_rem = ((window.screen.width > 450) ? 450 : window.screen.width)/375*100;
//         document.getElementsByTagName("html")[0].style.fontSize=change_rem+"px";
//     }
// }    