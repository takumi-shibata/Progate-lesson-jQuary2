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
     // カーソルが乗った時の処理(文字の表示 CSS「text-active」)
     // addClassメソッド: 指定した要素(text-contents)に、クラス(text-active)をjQeury側で擬似的に追加することができる。※addClassメソッドの引数(追加するクラス)に「.」や「＃」はつけない！
     $(this).find('.text-contents').addClass('text-active');
    },
    function() {
     // カーソルが外れた時の処理(文字の非表示 CSS「text-contents」)
     // removeClassメソッド: 指定した要素(text-contents)から、追加した擬似的なクラス(text-active)をjQeury側で削除することができる。※removeClassメソッドの引数(削除するクラス)に「.」や「＃」はつけない！
     $(this).find('.text-contents').removeClass('text-active');
    }
  );
});