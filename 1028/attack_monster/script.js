// 初期設定
const MAX_HP = 100;
const DAMAGE_MIN = 8;
const DAMAGE_MAX = 20;

//震えるアニメーション関数の定義
function shakeEnemy() {
  const enemyArea = document.querySelector('.enemy');
  enemyArea.classList.remove('hit');
  enemyArea.offsetWidth; //再描写のためのおまじない
  enemyArea.classList.add('hit');
}

function shakeEnemy2() {
  const enemyArea2 = document.querySelector('.enemysecond');
  enemyArea2.classList.remove('hit');
  enemyArea2.offsetWidth; //再描写のためのおまじない
  enemyArea2.classList.add('hit');
}

// 状態（HP）
let hp = MAX_HP;

// モンスター
const enemy = document.querySelector('.enemyImg');

const enemysecond = document.querySelector('.enemysecondImg');


// HP表示部分
const hpText = document.querySelector('.hpText span');
const hpText2 = document.querySelector('.hpText2 span');

const hpBar = document.querySelector('.hpBar');
const hpBar2 = document.querySelector('.hpBar2');


// 攻撃処理
const attackButton = document.querySelector('.attackBtn');

const attackButton2 = document.querySelector('.attackBtn2');

//効果音を取得
const seHit = document.querySelector('#se-hit');
console.log(seHit);

const seDefeat = document.querySelector('#se-defeat');
console.log(seDefeat);


// ①　ランダムダメージの実装
attackButton.addEventListener('click', function () {
  const damage = Math.floor(Math.random() * (DAMAGE_MAX - DAMAGE_MIN + 1)) + DAMAGE_MIN;
  hp = hp - damage; //最初　100-10
  hpText.textContent = hp; //テキストを書き換える
  //　② HP表示の更新ロジック修正（マイナス値の防止）
  if (hp <= 0) {
    hpText.textContent = 0;
    hpBar.value = 0;
    // ③ 撃破時のエフェクト適用（enemy--fly または enemy--squash）
    enemy.classList.add('enemy--squash');
    // ④ 撃破後のボタン無効化処理
    attackButton.disabled = true;
    // ⑤ 撃破メッセージの表示
    //変数に入れずにそのまま.でつないでもok
    document.querySelector('.log').textContent = 'モンスターを倒した！';

    seDefeat.currentTime = 0;
    seDefeat.play();
  } else {
    hpText.textContent = hp;
    hpBar.value = hp;
    // ⑥　攻撃時の効果を追加
    shakeEnemy();

    // ⑦ 効果音の追加（オプション）
    seHit.currentTime = 0; //current = 現在
    seHit.play();

  }
});

//２体目

attackButton2.addEventListener('click', function () {
  const damege = Math.floor(Math.random() * (DAMAGE_MAX - DAMAGE_MIN + 1)) + DAMAGE_MIN;
  hp = hp - damege;
  hpText2.textContent = hp;

  if (hp <= 0) {
    hpText2.textContent = 0;
    hpBar2.value = 0;
    enemysecond.classList.add('enemy--fly');
    attackButton2.disabled = true;
    document.querySelector('.logsecond').textContent = 'モンスターをまた倒した！';

    seDefeat.currentTime = 0;
    seDefeat.play();
  } else {
    hpText2.textContent = hp;
    hpBar2.value = hp;

    shakeEnemy2();

    seHit.currentTime = 0;
    seHit.play();
  }
})





// リスタート機能の実装（オプション）