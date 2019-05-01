$(function() {
    // 表示/非表示 状態を切り替える
    // @param [in] 表示/非表示 番号
    // @isShow [in] trueは表示。falseは非表示
    function setShowHide(number, isShow)
    {
        var switchShowHide = '#show-hide-switch-' + number;
        var targetShowHide = '#show-hide-target-' + number;
        if (isShow) {
            // トグルスイッチのクラス切り替え
            $(switchShowHide).removeClass('show-hide-hide').addClass('show-hide-show');
            // 表示/非表示 対象を表示
            $(targetShowHide).css('display', '');
        } else {
            // トグルスイッチのクラス切り替え
            $(switchShowHide).removeClass('show-hide-show').addClass('show-hide-hide');
            // 表示/非表示 対象を非表示
            $(targetShowHide).css('display', 'none');
        }
    }
    // 表示/非表示 対象の初期状態設定
    $('[id^="show-hide-switch-"]').each(function() {
        // 表示/非表示 対象の番号取得
        var number = $(this).attr('id').substr(new String('show-hide-switch-').length);
       // トグルスイッチに 'show-hide-default-show' クラスが設定されている場合、初期表示は表示
        setShowHide(number, $(this).hasClass('show-hide-default-show'));
    });
    // トグルスイッチタグがクリックされた場合
    $('[id^="show-hide-switch-"]').click(function() {
        // 表示/非表示のトグル対象の番号取得
        var number = $(this).attr('id').substr(new String('show-hide-switch-').length);
        // 表示/非表示のトグル対象の表示状態で、表示/非表示 状態をトグル
        setShowHide(number, $('#show-hide-target-' + number).css('display') == 'none');
    });
});
