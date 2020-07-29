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
    $('#login-modal').fadeOut();
    $('#signup-modal').fadeOut();
  });

  // レッスン一覧のhoverイベント
  $('.lesson-hover').hover(
    function() {
     // カーソルが乗った時の処理(文字の表示 CSS「text-active」)
     // addClassメソッド: 指定した要素(text-contents)に、クラス(text-active)をjQeury側で追加することができる。※addClassメソッドの引数(追加するクラス)に「.」はつけない！
     $(this).find('.text-contents').addClass('text-active');
    },
    function() {
     // カーソルが外れた時の処理(文字の非表示 CSS「text-contents」)
     // removeClassメソッド: 指定した要素(text-contents)から、追加したクラス(text-active)をjQeury側で削除することができる。※removeClassメソッドの引数(削除するクラス)に「.」はつけない！
     $(this).find('.text-contents').removeClass('text-active');
    }
  );

  // FAQアコーディオンの設定
  $('.faq-list-item').click(function() {
    var $answer = $(this).find('.answer');

    // hasClassメソッド: 引数に指定したクラスを、オブジェクトが持っているか判定するときに使用する。オブジェクトがそのクラスを持っていればtrue、持っていなければfalse
    // if文が「true」だった時、答えを隠す(openを削除)
    if($answer.hasClass('open')) {
      $answer.removeClass('open');
      $answer.slideUp();
      // 質問時の右側のマークを「＋」に変える処理
      $(this).find('span').text('+');
      // if文が「false」だった時、答えを見せる(openを追加)
    } else {
      $answer.addClass('open');
      $answer.slideDown();
      // 質問時の右側のマークを「ー」に変える処理
      $(this).find('span').text('-');
    }
  });
});