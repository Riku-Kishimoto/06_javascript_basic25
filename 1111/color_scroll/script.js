//ソースにコピペして、コメントアウトしておきます。

//1 オブジェクトで色を用意
//2 オブジェクトの色をbodyの背景色にする
//3 4色制作して、配列にする
//4 スクロールするたびにイベント
//5 documentの縦の長さ取得
//6 1 / 4進んだら色が変わるようにする
//7 スクロールを4分割
//8 スクロール量を計算
//9 変数scrollableを4分割
//10 関数の定義
//11 関数の呼び出し（実行）の実引数


//1 オブジェクトで色を用意
//const settingColors = { r: 255, g: 0, b: 0 }; //赤

//3 4色制作して、配列にする

const settingColors = [
    { r: 255, g: 0, b: 0 },   // 赤
    { r: 0, g: 255, b: 0 },   // 緑
    { r: 0, g: 0, b: 255 },   // 青
    { r: 255, g: 255, b: 0 }  // 黄
];

//5 documentの縦の長さ取得
const fullHeight = document.documentElement.scrollHeight;
console.log(fullHeight);//2400 単位は書いてないけどpx

// 画面に見えている高さ（ブラウザの表示部分）
const viewHeight = document.documentElement.clientHeight;

// スクロールできる合計の長さを計算
const scrollable = fullHeight - viewHeight;


//2 オブジェクトの色をbodyの背景色にする
const bodyElm = document.body; //ドットで繋いでいるのでオブジェクト

//const bodyElm = document.querySelector('body');
console.log(bodyElm);
document.body.style.backgroundColor =
    'rgb(' +
    settingColors[0].r +
    ',' +
    settingColors[0].g +
    ',' +
    settingColors[0].b +
    ')';

//10 関数の定義

function changeColor(num) {
    //関数の処理を書く
    document.body.style.backgroundColor =
        'rgb(' +
        settingColors[num].r +
        ',' +
        settingColors[num].g +
        ',' +
        settingColors[num].b +
        ')';
}

//4 スクロールするたびにイベント
window.addEventListener('scroll', function () {
    console.log('スクローーーーる');

    //現在のスクロール位置
    const scrollY = window.scrollY;
    console.log(scrollY);
    //6 1 / 4進んだら色が変わるようにする
    //7 スクロールを4分割
    //9 変数scrollableを4分割
    if (scrollY < (scrollable * 1) / 4) {
        document.body.style.backgroundColor =
            'rgb(' +
            settingColors[0].r +
            ',' +
            settingColors[0].g +
            ',' +
            settingColors[0].b +
            ')';
    } else if (scrollY < (scrollable * 1) / 2) {
        document.body.style.backgroundColor =
            'rgb(' +
            settingColors[1].r +
            ',' +
            settingColors[1].g +
            ',' +
            settingColors[1].b +
            ')';
    } else if (scrollY < (scrollable * 3) / 4) {
        document.body.style.backgroundColor =
            'rgb(' +
            settingColors[2].r +
            ',' +
            settingColors[2].g +
            ',' +
            settingColors[2].b +
            ')';
    } else {
        //11 関数の呼び出し（実行）の実引数z
        //関数名() = 関数の呼び出し
        changeColor(3);
    }
})






//上に戻るボタン
window.addEventListener('scroll', function () {
    const button = document.querySelector('.moveToTop');
    if (this.window.scrollY >= 200) {
        button.style.display = 'block';
    } else {
        button.style.display = 'none';

    }
});

const button = document.querySelector('.moveToTop');
button.addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
