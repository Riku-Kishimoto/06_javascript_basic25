//htmlから表示する要素を取得
const result = document.querySelector('.resultFetch');

//関数化
const loadNews = function () {
    fetch('./news.json')
        .then(function (response) {
            //json()メゾットでJSONデータをオブジェクトに変換して返す
            //１つ目の.then()の返り値が次の.then()の引数になる
            return response.json();
        })
        .then(function (json) {
            //console.log(json)
            result.innerHTML = `<p>${json.news}</p>`;
        });

};

//関数の実行
loadNews();

const Btn = document.querySelector('.loadAjaxBtn');
Btn.addEventListener('click', function () {
    //読み込み直す
    loadNews();
});
