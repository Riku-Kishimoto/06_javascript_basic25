document.addEventListener('DOMContentLoaded', () => {
    const fortuneList = [
        '最高に良い月になりそうです。積極的に行動すると運気が上がります。',
        '新しい出会いに恵まれる月。柔軟な姿勢が成功のカギ。',
        '努力が実りやすい1ヶ月。コツコツを大切にしましょう。',
        'リラックスが必要な時期。無理をしないでゆっくり休んで。',
        '学びや成長のチャンスが多い月。挑戦してみて。',
        '予想外の嬉しい出来事が訪れそう。笑顔を忘れずに。',
        '過去の努力が評価される月。自信を持って進もう。',
        '人間関係が良好になる時期。感謝を伝えるとさらに良くなる。',
        '金運が上昇しやすい月。無駄遣いだけ注意。',
        '新しい趣味を始めると運気がアップ。',
        '小さな幸せに気づける1ヶ月。心が満たされます。',
        '目標がはっきりする月。覚悟を決めると吉。'
    ];
    const numberList = [3, 7, 9, 11, 14, 17, 20, 23, 25, 28, 30, 33];
    const itemList = [
        '飛び出しナイフ', 'ジンジャーエール', '猫缶', 'ピエロの仮面',
        '日傘', 'アロマキャンドル', 'キーホルダー', 'ブレスレット',
        'スマホスタンド', 'バッグ', 'イヤホン', 'ノート'
    ];
    const constellations = [
        'Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo',
        'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'
    ];

    const constellationButtons = document.querySelectorAll('.constellation__item');
    const fortuneBox = document.querySelector('#fortuneBox');
    const sky = document.querySelector("#sky");

    fortuneBox.innerHTML = '左のボタンからあなたの星座を選んで、12月の運勢をチェック！';


    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    };

    const combinedFortunes = [];
    for (let i = 0; i < fortuneList.length; i++) {
        combinedFortunes.push({
            fortune: fortuneList[i],
            number: numberList[i],
            item: itemList[i]
        });
    }

    shuffleArray(combinedFortunes);

    const resultMapping = {};
    constellations.forEach((sign, index) => {
        resultMapping[sign] = combinedFortunes[index];
    });


    // 背景の星
    for (let i = 0; i < 200; i++) {
        const star = document.createElement("div");
        star.className = "star";
        star.style.top = Math.random() * 100 + "vh";
        star.style.left = Math.random() * 100 + "vw";
        sky.appendChild(star);
    }


    constellationButtons.forEach(button => {
        button.addEventListener('click', () => {
            const selectedConstellation = button.getAttribute('data-name');

            const result = resultMapping[selectedConstellation];

            if (fortuneBox && result) {
                fortuneBox.innerHTML = `
                    <h3>${selectedConstellation} の運勢</h3>
                    <hr>
                    <h4>総合運</h4>
                    <p>${result.fortune}</p>
                    <hr>
                    <h4>ラッキーアイテム</h4>
                    <p><strong>${result.item}</strong></p>
                    <hr>
                    <h4>ラッキーナンバー</h4>
                    <p><strong>${result.number}</strong></p>
                `;
            } else if (fortuneBox) {
                fortuneBox.innerHTML = 'エラー：運勢情報が見つかりませんでした。';
            }
        });
    });
});