# 2025年後期「JavaScript基礎」授業課題

このリポジトリは、授業で学んだ内容をまとめ、取り組みを記録するためのものです。
毎回の授業が終わったらpushして進捗を管理します。

## 📆 授業ログ

### 9月30日
<<<<<<< HEAD

- 変数のキーワード(let,console)

## 要素の取得

```
document.querySelector('cssセレクタ');
```

## テキストの追加

```
Element.textContent = '追加する文字列';
```

## イベント

```
Btn.addEventListner('click',function(){
    //クリックした後の処理
});
```

## 1028

        console.log(Math.round(1.4)); //四捨五入
        console.log(Math.round(1.5)); //四捨五入
        console.log(Math.floor(10.3)); //切り捨て
        console.log(Math.ceil(10.3)); //切り上げ

current = 現在

##　関数の定義と実行　ワンセット
        function makeOnigiri() {
            console.log("おにぎりを握った！");
        }

        makeOnigiri();

## クリックイベント

const makeBtn = document.querySelector('#makeBtn');

makeBtn.addEventListener('click', function () {

    //処理
    //ランダム　配列の要素の数を最大値に
    const index = Math.floor(Math.random() * ingredients.length);
    const result = ingredients[index];
    console.log(result);
})