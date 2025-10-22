// ボタンとh2要素を取得
const btn = document.getElementById('btn');
const text = document.getElementById('text');

// クリックイベントを設定
btn.addEventListener('click', () => {
    // 2秒（2000ミリ秒）後に文章を書き換える
    setTimeout(() => {
        text.textContent = 'ボタンをクリックしました';
    }, 2000);
});
