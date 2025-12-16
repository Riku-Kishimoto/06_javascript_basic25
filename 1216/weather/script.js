// ボタンを押す
const button = document.querySelector('.loadBtn');
const box = document.querySelector('.box');

const getWeather = function () {

    //読み込み中は読み込み中と表示
    box.innerHTML = '読み込み中...';


    // fetchで APIにアクセス
    //エンドポイント
    fetch('https://www.jma.go.jp/bosai/forecast/data/forecast/230000.json')
        .then(function (response) {
            //取得したJSONをオブジェクトに変換するメゾット.json()
            // JSONを解析
            return response.json();
        })
        .then(function (json) {
            // 画面に表示（確認用）
            //document.body.textContent = JSON.stringify(json);


            //天気：晴れ
            console.log(json[0].timeSeries[0].areas[0].weathers[0]);
            // 最高気温：12℃
            console.log(json[0].timeSeries[2].areas[0].temps[0]);
            // 最低気温：12℃
            console.log(json[0].timeSeries[2].areas[0].temps[1]);
            // 降水確率（午前）：0 %
            console.log(json[0].timeSeries[1].areas[0].pops[0]);
            // 降水確率（午後）：0 %
            console.log(json[0].timeSeries[1].areas[0].pops[1]);


            const weather = json[0].timeSeries[0].areas[0].weathers[0];
            const maxTemp = json[0].timeSeries[2].areas[0].temps[0];
            const minTemp = json[0].timeSeries[2].areas[0].temps[1];
            const popMorning = json[0].timeSeries[1].areas[0].pops[0];
            const popAfternoon = json[0].timeSeries[1].areas[0].pops[1];

            //HTMLに表示する
            box.innerHTML = `
            <ul>
                <li>天気：${weather}</li>
                <li>最高気温：${maxTemp}℃</li>
                <li>最低気温：${minTemp}℃</li>
                <li>降水確率（午前）：${popMorning}％</li>
                <li>降水確率（午後）：${popAfternoon}％</li>
            </ul>
            `;
        })
        .catch(function (error) {
            console.error('エラーが発生しました', error);
        });
};


button.addEventListener('click', function () {

    //console.log('ボタンを押しました');

    //関数を実行
    getWeather();

});

// 必要な情報だけ取り出す
// HTMLに表示する
// 読み込み中は「読み込み中…」を表示
// async / awaitで書き直す
