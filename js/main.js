
// スライダー1

function slideSwitch() {
    var $active = $('#slideshow img.active');
    if ( $active.length == 0 ) $active = $('#slideshow img:last');
    var $next =  $active.next().length ? $active.next()
        : $('#slideshow img:first');
    $active.addClass('last-active');
        
    $next.css({opacity: 0.0})
        .addClass('active')
        .animate({opacity: 1.0}, 1500, function() {
            $active.removeClass('active last-active');
        });
}
$(function() {
    setInterval( "slideSwitch()", 4500 );
});


// ヘッダースクロール
$(function () {
    var $body = $('body');

    //開閉用ボタンをクリックでクラスの切替え
    $('#humbgr').on('click', function () {
        $body.toggleClass('open');
    });

    //メニュー名以外の部分をクリックで閉じる
    $('.open #humbgr').on('click', function () {
        $body.removeClass('open');
    });

});
