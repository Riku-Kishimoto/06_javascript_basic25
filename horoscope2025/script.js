document.addEventListener('DOMContentLoaded', () => {
    const fortuneList = [
        '最高に良い月になりそうです。今月は特に、積極的に行動することで運気が大きく上昇します。気になっていたことへの挑戦や新しい場所へ足を運ぶことで、思いがけないチャンスを掴めるはず。自分の直感を信じて動いてみてください。',
        '新しい出会いに恵まれる月になりそうです。人との交流が増え、価値観の広がる出来事が起こるでしょう。柔軟な姿勢で相手の意見を受け入れることが成功のカギになります。自分から話しかけたり、誘いに乗ったりする勇気が大切です。',
        '努力が実りやすい1ヶ月です。これまで積み重ねてきた行動や学びが形になり、結果として表れ始めるでしょう。コツコツ続ける姿勢がチャンスを呼び込むので、焦らず着実に取り組むことが重要です。努力は必ず自信につながります。',
        '今はリラックスが必要な時期。頑張りすぎず、自分を休ませる時間を意識的に作りましょう。無理をすると心身が疲れてしまうため、好きなことに没頭したり、自然に触れたりするのがおすすめです。休むことで運気も整っていきます。',
        '学びや成長のチャンスが多い月です。新しい知識やスキルを吸収する絶好のタイミングなので、興味のあることには思い切って挑戦してみてください。最初は不安でも、挑戦することで未来が大きく開ける可能性があります。',
        '予想外の嬉しい出来事が訪れそうです。願っていたことが思いがけない形で叶ったり、サプライズのような幸運が舞い込むかもしれません。日々の中で笑顔を忘れず前向きに過ごすことで、幸運がさらに引き寄せられます。',
        '過去の努力がついに評価される月です。頑張り続けてきたことが周囲に認められ、自信につながる結果が出るでしょう。遠慮せず胸を張って進むことで、次のステージへの扉が開きます。自分を信じて堂々と歩んでください。',
        '人間関係が良好になる時期です。家族や友人、職場の人との関係がより温かくなり、支えられていると実感できるでしょう。感謝の気持ちを言葉にして伝えると、運気はさらに上向きます。小さな優しさが大きな絆を作ります。',
        '金運が上昇しやすい月です。臨時収入や良い買い物に恵まれる可能性がありますが、同時に無駄遣いには注意して。必要なものと衝動買いの区別を意識することで、運気がさらに安定します。計画的な行動が成功の鍵です。',
        '新しい趣味を始めると運気がアップする月です。前から興味があったことに挑戦してみたり、誰かのおすすめを試してみるのも良いでしょう。楽しみながら学ぶことで新しい出会いが生まれる可能性も。ワクワクする選択を大切に。',
        '小さな幸せに気づける1ヶ月になりそうです。毎日の中で何気ない瞬間に喜びを感じ、心が自然と満たされるでしょう。感謝の気持ちを持って過ごすことで、さらに良い出来事が引き寄せられます。笑顔で穏やかに進んでください。',
        '目標がはっきりする月です。自分が本当に目指したいものや、大切にしたいことが見えてきます。覚悟を決めて一歩踏み出すことで、大きな成果につながるでしょう。迷いが消えたときこそ、運気は強く味方してくれます。'
    ];
    const numberList = [3, 7, 9, 11, 14, 17, 20, 23, 25, 28, 30, 33];

    const itemList = [
        '飛び出しナイフ', 'ジンジャーエール', '猫缶', 'ピエロの仮面',
        '日傘', 'ハサミ', 'オレンジ', 'ギター',
        'チーズバーガー', 'ヘビ', 'ヘッドホン', '時計'
    ];
    const constellations = [
        'Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo',
        'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'
    ];

    const fortuneBox = document.querySelector('#fortuneBox');
    const sky = document.querySelector("#sky");

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }

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
    for (let i = 0; i < constellations.length; i++) {
        resultMapping[constellations[i]] = combinedFortunes[i];
    }

    function setupConstellationWheel() {
        const svg = document.querySelector('#constellationWheelSVG');

        const radius = 310;
        const center = 300;
        const angleStep = 360 / constellations.length;

        for (let i = 0; i < constellations.length; i++) {
            const sign = constellations[i];
            const angle = angleStep * i - 90;
            const rad = angle * Math.PI / 180;

            const x = center + radius * Math.cos(rad);
            const y = center + radius * Math.sin(rad);

            //星座アイコン
            const icon = document.createElementNS("http://www.w3.org/2000/svg", "image");

            icon.setAttribute("href", `./images/${sign}.svg`);
            icon.setAttribute("width", "100");
            icon.setAttribute("height", "100");

            icon.setAttribute("x", x - 50);
            icon.setAttribute("y", y - 50);

            icon.classList.add("constellation-icon");
            icon.setAttribute("data-name", sign);

            icon.addEventListener("click", displayFortune);
            svg.appendChild(icon);

            //星座名
            const label = document.createElementNS("http://www.w3.org/2000/svg", "text");
            label.textContent = sign;

            label.setAttribute("x", x);
            label.setAttribute("y", y + 70);

            label.setAttribute("fill", "#fff");
            label.setAttribute("font-size", "14");
            label.setAttribute("font-family", "Rajdhani, sans-serif");
            label.setAttribute("text-anchor", "middle");
            label.setAttribute("class", "constellation-label");

            svg.appendChild(label);
        }
    }

    //占い結果を表示
    const displayFortune = function (event) {
        const name = event.currentTarget.getAttribute('data-name');

        const buttons = document.querySelectorAll('.constellation-icon');

        for (let i = 0; i < buttons.length; i++) {
            buttons[i].classList.remove('is-active');
        }

        event.currentTarget.classList.add('is-active');

        const result = resultMapping[name];

        if (fortuneBox) {
            fortuneBox.innerHTML = `
            <h3 class="fade-in">${name}</h3>
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
        }
    };

    //星をランダム配置
    for (let i = 0; i < 400; i++) {
        const star = document.createElement("div");
        star.classList.add("star");
        star.style.top = Math.random() * 160 - 30 + "vh";
        star.style.left = Math.random() * 160 - 30 + "vw";
        sky.appendChild(star);
    }

    //流れ星
    function createShootingStar() {
        const area = document.querySelector('.shooting-stars');
        const star = document.createElement("div");
        star.classList.add("shooting-star");

        star.style.top = Math.random() * 30 + "vh";
        star.style.left = Math.random() * 30 + "vw";

        area.appendChild(star);

        setTimeout(() => star.remove(), 1500);
    }

    setInterval(function () {
        if (Math.random() < 0.6) {
            createShootingStar();
        }
    }, 1500);

    //実行
    setupConstellationWheel();
});