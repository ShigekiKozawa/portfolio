/* Home画面読み込み時 */
window.onload = function(){
    $(function() {
		$('#loadingBg').delay(2800).fadeOut(3500);
		$('#loading').delay(2800).fadeOut(800);
		$('#main').css('display', 'flex');
    });
}
$(function() {
	var winH = $(window).height();
	$('#main').css('display','none');
	$('#loadingBg ,#loading').height(winH).css('display','block');
});

/* ドロワーメニュー */
$(document).ready(function() {
  $('.drawer').drawer();
});

/* サークルナビゲーション */
$(".trigger").click(function() {
	$(".menu").toggleClass("active"); 
});