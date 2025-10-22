// Step 1: ボタンとテキストの要素を取得
const button = document.getElementById("btn");
const text = document.getElementById("text");

// Step 2: ボタンがクリックされた時の動作を設定
button.addEventListener("click", function() {
  // Step 3: テキスト内容を書き換える
  text.textContent = "ボタンをクリックしました";
});
