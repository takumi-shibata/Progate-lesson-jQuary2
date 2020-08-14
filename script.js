$(function() {
  // ログインclickイベント(モーダルの表示)
  $('#login-show').click(function() {
    $('#login-modal').fadeIn();
  });


  // サインアップclickイベント(モーダルの表示)
  $('.signup-show').click(function() {
    $('#signup-modal').fadeIn();
  });


  // (ログイン・サインアップ時)モーダル内閉じるボタンclickイベント
  $('.close-modal').click(function() {
    $('#signup-modal').fadeOut();
    $('#login-modal').fadeOut();
  });


  // レッスン一覧のhoverイベント
  $('.lesson-hover').hover(
    function() {
      
    },
    function() {
      
    }
  );
});