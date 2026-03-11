/**
 * ひととせ - メインアプリロジック
 * 日付・節気・候・生活情報の完全連動
 * 候スライド帯演出：日付が進むにつれて次の候が右から徐々に現れる
 */

'use strict';

// ===================================================
// 定数
// ===================================================
const WEEKDAYS = ['日', '月', '火', '水', '木', '金', '土'];

// 月の旧名
// 旧暦の月に対応する和風名
const KYUREKI_MONTH_NAMES = [
  '', // 0は使わない
  '睦月',   // 1月
  '如月',   // 2月
  '弥生',   // 3月
  '卯月',   // 4月
  '皐月',   // 5月
  '水無月',  // 6月
  '文月',   // 7月
  '葉月',   // 8月
  '長月',   // 9月
  '神無月',  // 10月
  '霜月',   // 11月
  '師走'    // 12月
];

// 旧月名のふりがな
const KYUREKI_MONTH_READINGS = [
  '', // 0は使わない
  'むつき',   // 睦月
  'きさらぎ', // 如月
  'やよい',   // 弥生
  'うづき',   // 卯月
  'さつき',   // 皐月
  'みなづき',  // 水無月
  'ふみづき',  // 文月
  'はづき',   // 葉月
  'ながつき',  // 長月
  'かんなづき', // 神無月
  'しもつき',  // 霜月
  'しわす'    // 師走
];

// 旧暦月の漢数字
const KYUREKI_MONTH_KANJI = [
  '', '正月', '二月', '三月', '四月', '五月', '六月',
  '七月', '八月', '九月', '十月', '十一月', '十二月'
];

// 旧暦日の和風読み
const KYUREKI_DAY_NAMES = [
  '', '一日', '二日', '三日', '四日', '五日', '六日', '七日', '八日', '九日', '十日',
  '十一日', '十二日', '十三日', '十四日', '十五日', '十六日', '十七日', '十八日', '十九日', '二十日',
  '二十一日', '二十二日', '二十三日', '二十四日', '二十五日', '二十六日', '二十七日', '二十八日', '二十九日', '三十日'
];

// 候ブロック幅：画面幅÷3（常に3つ表示）、最大160px
// letにして初期化時に計算
let KOU_BLOCK_WIDTH = 120;

// 1日あたりのピクセル幅（候の日数に関わらず帯のスライド量の計算用）
const PX_PER_DAY = 56;

// ===================================================
// 二十四節気ごとの固定背景色（候の色から独立）
// 節気の大分類としての色を明確に定義
// ===================================================
const SEKKI_COLORS = {
  '小寒': { bg1: '#6B8BAA', bg2: '#4A6A8A' },
  '大寒': { bg1: '#5A7A9A', bg2: '#3A5A7A' },
  '立春': { bg1: '#8BA88B', bg2: '#6A8A6A' },
  '雨水': { bg1: '#7A9AB0', bg2: '#5A7A90' },
  '啓蟄': { bg1: '#8A9A6A', bg2: '#6A7A4A' },
  '春分': { bg1: '#A89A7A', bg2: '#887A5A' },
  '清明': { bg1: '#9AAA7A', bg2: '#7A8A5A' },
  '穀雨': { bg1: '#7A9A7A', bg2: '#5A7A5A' },
  '立夏': { bg1: '#6A9A6A', bg2: '#4A7A4A' },
  '小満': { bg1: '#7A9A5A', bg2: '#5A7A3A' },
  '芒種': { bg1: '#6A8A4A', bg2: '#4A6A2A' },
  '夏至': { bg1: '#5A8A6A', bg2: '#3A6A4A' },
  '小暑': { bg1: '#9A8A4A', bg2: '#7A6A2A' },
  '大暑': { bg1: '#AA7A3A', bg2: '#8A5A1A' },
  '立秋': { bg1: '#9A8A6A', bg2: '#7A6A4A' },
  '処暑': { bg1: '#8A9A7A', bg2: '#6A7A5A' },
  '白露': { bg1: '#8A9AAA', bg2: '#6A7A8A' },
  '秋分': { bg1: '#9A7A5A', bg2: '#7A5A3A' },
  '寒露': { bg1: '#8A7A6A', bg2: '#6A5A4A' },
  '霜降': { bg1: '#9A8A7A', bg2: '#7A6A5A' },
  '立冬': { bg1: '#7A7A8A', bg2: '#5A5A6A' },
  '小雪': { bg1: '#8A8A9A', bg2: '#6A6A7A' },
  '大雪': { bg1: '#7A8A9A', bg2: '#5A6A7A' },
  '冬至': { bg1: '#6A7A8A', bg2: '#4A5A6A' }
};

// ===================================================
// 二十四節気ごとの和柄パターン画像ファイル名
// ===================================================
const SEKKI_PATTERN_FILES = {
  '小寒': 'shokan-ice-crack.png',
  '大寒': 'daikan-snow-ring.png',
  '立春': 'risshun-plum.png',
  '雨水': 'usui-seigaiha.png',
  '啓蟄': 'keichitsu-butterfly.png',
  '春分': 'shunbun-cherry.png',
  '清明': 'seimei-kasumi.png',
  '穀雨': 'kokuu-rain.png',
  '立夏': 'rikka-wisteria.png',
  '小満': 'shoman-wheat.png',
  '芒種': 'boshu-firefly.png',
  '夏至': 'geshi-iris.png',
  '小暑': 'shosho-morning-glory.png',
  '大暑': 'taisho-wave.png',
  '立秋': 'risshu-shippo.png',
  '処暑': 'shosho-rice-ear.png',
  '白露': 'hakuro-dewdrop.png',
  '秋分': 'shubun-chrysanthemum.png',
  '寒露': 'kanro-maple.png',
  '霜降': 'soko-kikko.png',
  '立冬': 'ritto-hishi.png',
  '小雪': 'shosetsu-uroko.png',
  '大雪': 'taisetsu-pine.png',
  '冬至': 'toji-yuzu.png'
};

// ===================================================
// 状態管理
// ===================================================
let currentDate = new Date();
let todayDate = new Date();

// ===================================================
// 初期化
// ===================================================
document.addEventListener('DOMContentLoaded', function () {
  currentDate = new Date();
  todayDate = new Date();
  // 候ブロック幅を画面幅÷3に動的設定（最大160px）
  const vw = Math.min(window.innerWidth, 480);
  KOU_BLOCK_WIDTH = Math.min(Math.floor(vw / 3), 160);
  buildSekkiBelt(); // 節気帯を一度だけ構築
  buildKouBelt();   // 候帯を一度だけ構築
  renderAll();
});

// ===================================================
// 節気スライド帯の構築（初回のみ）
// 二十四節気のブロックを横一列に並べる
// ===================================================
function buildSekkiBelt() {
  const belt = document.getElementById('sekkiBelt');
  belt.innerHTML = '';

  // 節気のユニークリストを作成（連続する同一節気の候はまとめる）
  const sekkiList = [];
  let lastSekki = null;
  SEASONS_DATA.forEach(function(kou, index) {
    if (kou.sekki !== lastSekki) {
      sekkiList.push({ sekki: kou.sekki, sekkiReading: kou.sekkiReading, startIndex: index });
      lastSekki = kou.sekki;
    }
  });

  // 各節気の幅：その節気に属する候の数 × KOU_BLOCK_WIDTH
  sekkiList.forEach(function(sekki, si) {
    // この節気に属する候の数を数える
    let kouCount = 0;
    for (let i = sekki.startIndex; i < SEASONS_DATA.length; i++) {
      if (SEASONS_DATA[i].sekki === sekki.sekki) {
        kouCount++;
      } else {
        break;
      }
    }
    const width = kouCount * KOU_BLOCK_WIDTH;

    const block = document.createElement('div');
    block.className = 'sekki-block';
    block.style.width = width + 'px';
    block.dataset.sekkiIndex = si;
    block.dataset.kouStartIndex = sekki.startIndex;

    // 節気ブロックに固有の背景色＋和柄パターン画像を設定（日付・候に関係なく常に固定）
    const sc = SEKKI_COLORS[sekki.sekki];
    const patternFile = SEKKI_PATTERN_FILES[sekki.sekki];
    if (sc) {
      if (patternFile) {
        // 和柄パターン画像を薄く重ねる（節気色 + パターンオーバーレイ）
        // multiply blend mode: 白ピクセルは透明、黒ピクセルは暗くなる
        // グラデーション不透明度F5=96%で柄を薄く押え、パターンsize 140px(2倍)
        block.style.backgroundImage =
          'linear-gradient(180deg, ' + sc.bg1 + 'FA 0%, ' + sc.bg2 + 'FA 100%), url(images/patterns/' + patternFile + ')';
        block.style.backgroundBlendMode = 'multiply';
        block.style.backgroundSize = 'auto, 140px 140px';
        block.style.backgroundRepeat = 'repeat, repeat';
      } else {
        block.style.background = 'linear-gradient(180deg, ' + sc.bg1 + ' 0%, ' + sc.bg2 + ' 100%)';
      }
    }

    block.innerHTML =
      '<span class="sekki-name">' + sekki.sekki + '</span>' +
      '<span class="sekki-reading">' + sekki.sekkiReading + '</span>';

    // クリック無効（誤動作防止）
    block.style.cursor = 'default';

    belt.appendChild(block);
  });
}

// ===================================================
// 候スライド帯の構築（初回のみ）
// 全72候のブロックを横一列に並べる
// ===================================================
function buildKouBelt() {
  const belt = document.getElementById('kouBelt');
  belt.innerHTML = '';

  SEASONS_DATA.forEach(function (kou, index) {
    const block = document.createElement('div');
    block.className = 'kou-block';
    // 幅はKOU_BLOCK_WIDTHに従う（画面幅÷3に動的設定）
    block.style.width = KOU_BLOCK_WIDTH + 'px';
    block.dataset.index = index;

    // 候ブロックの背景色：節気の固定色を使い、各候ブロック内で100%→0%のグラデーションで完結
    // 初候・次候・末候の全てが同じグラデーションパターン（帯が3枚並ぶ表現）
    const sc = SEKKI_COLORS[kou.sekki];
    if (sc) {
      // 左端：節気色（不透明100%）→ 右端：節気色を薄くした色（透明感のある0%相当）
      const fadeColor = lightenColor(sc.bg1, 40);
      block.style.background = 'linear-gradient(90deg, ' + sc.bg1 + ' 0%, ' + fadeColor + ' 100%)';
    }

    block.innerHTML =
      '<div class="kou-position-label">' + kou.position + '</div>' +
      '<div class="kou-name">' + kou.kou + '</div>';

    // クリック無効（誤動作防止）
    block.style.cursor = 'default';

    belt.appendChild(block);
  });
}

// ===================================================
// 候の日数を計算する
// 次の候の開始日 - この候の開始日
// ===================================================
function getKouDays(index) {
  const kou = SEASONS_DATA[index];
  const nextIndex = (index + 1) % SEASONS_DATA.length;
  const nextKou = SEASONS_DATA[nextIndex];

  // 日付を通算日数に変換して差を計算
  const start = toAbsoluteDay(kou.startMonth, kou.startDay);
  let end = toAbsoluteDay(nextKou.startMonth, nextKou.startDay);

  // 年をまたぐ場合（12月 → 1月）
  if (end <= start) {
    end += 365;
  }

  const days = end - start;
  // 念のため範囲チェック（4〜7日が正常範囲）
  return (days >= 4 && days <= 7) ? days : 5;
}

// 月日を通算日数（1月1日=1）に変換
function toAbsoluteDay(month, day) {
  const MONTH_DAYS = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
  // 12/32は1/1扱い（冬至末候の特殊処理）
  if (month === 12 && day === 32) return 366;
  return MONTH_DAYS[month - 1] + day;
}

// ===================================================
// メインレンダリング関数
// 日付が変わるたびに全UIを更新する
// ===================================================
function renderAll() {
  const month = currentDate.getMonth() + 1;
  const day = currentDate.getDate();
  const year = currentDate.getFullYear();
  const weekday = WEEKDAYS[currentDate.getDay()];

  // 1. 日付表示を更新
  document.getElementById('yearDisplay').textContent = year + ' 年';
  document.getElementById('dateDisplay').textContent =
    month + ' 月 ' + day + ' 日（' + weekday + '）';
  // 1b. 旧暦・月の旧名を更新
  updateKyureki(currentDate);

  // 2. 「今日に戻る」ボタン（ボトムのみ）を表示/非表示
  const isToday = isSameDay(currentDate, todayDate);
  document.getElementById('bottomTodayBtn').style.display = isToday ? 'none' : 'inline-block';

  // 3. 現在の候インデックスを取得
  const kouIndex = getKouIndex(month, day);
  const kouData = SEASONS_DATA[kouIndex];

  // 4 & 5. 節気スライド帯を更新（候帯と完全同じ引数で呼び出す）
  updateSekkiBelt(kouIndex, month, day);

  // 5b. 候スライド帯を更新
  updateKouBelt(kouIndex, month, day);

  // 6. 候の位置表示は候ブロック内に移動したためここでは何もしない

  // 7. 候帯の背景色は候の襲の色目で更新
  //    節気帯は各ブロックに固有色が設定済みのため、全体背景は中立色に固定
  updateKouBeltBackground(kouData.color1, kouData.color2);

  // 8. 写真フレームを更新
  updateHeroImage(kouData.imageFile);

  // 9. 生活情報パネルの内容を更新
  updateLifePanel(kouData);

  // 10. 襲の色目パネルの内容を更新
  updateKasanePanel(kouData);

  // 11. 今日の一言を更新
  updateKotobaBar(kouData);
}

// ===================================================
// 節気スライド帯の位置を更新
// 候帯と完全同じtranslateXを使用して完全連動
// ===================================================
function updateSekkiBelt(kouIndex, month, day) {
  const belt = document.getElementById('sekkiBelt');
  const viewport = document.getElementById('sekkiViewport');
  const viewportWidth = viewport.offsetWidth;

  // 現在の候が属する節気をハイライト
  const currentSekki = SEASONS_DATA[kouIndex].sekki;
  const blocks = belt.querySelectorAll('.sekki-block');
  blocks.forEach(function(block) {
    const blockSekki = block.querySelector('.sekki-name').textContent;
    if (blockSekki === currentSekki) {
      block.classList.add('sekki-current');
    } else {
      block.classList.remove('sekki-current');
    }
  });

  // 候帯と全く同じ計算でtranslateXを決定
  // 候ブロックは150px固定、節気ブロックは候数×150px
  // なので、候インデックス×150pxが帯内の候の左端座標と一致する
  const blockLeft = kouIndex * KOU_BLOCK_WIDTH;

  // 候の開始日から現在日までの経過日数
  const kouStart = SEASONS_DATA[kouIndex];
  const startAbsDay = toAbsoluteDay(kouStart.startMonth, kouStart.startDay);
  const currentAbsDay = toAbsoluteDay(month, day);
  let elapsedDays = currentAbsDay - startAbsDay;
  if (elapsedDays < 0) elapsedDays += 365;

  const kouDays = getKouDays(kouIndex);
  const progressRatio = elapsedDays / kouDays;
  const posInBlock = progressRatio * KOU_BLOCK_WIDTH;

  // 候帯と完全同じcenterXを使用
  const centerX = blockLeft + posInBlock + (KOU_BLOCK_WIDTH / kouDays * 0.5);
  const translateX = -(centerX - viewportWidth / 2);

  belt.style.transition = 'none';
  belt.style.transform = 'translateX(' + translateX + 'px)';
  requestAnimationFrame(function() {
    belt.style.transition = 'transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
  });
}

// ===================================================
// 候スライド帯の位置を更新
// 現在の候ブロックが中央に来るようにtranslateXを計算
// ===================================================
function updateKouBelt(kouIndex, month, day) {
  const belt = document.getElementById('kouBelt');
  const viewport = document.getElementById('kouViewport');
  const viewportWidth = viewport.offsetWidth;

  // 全ブロックのハイライトをリセット
  const blocks = belt.querySelectorAll('.kou-block');
  blocks.forEach(function (b) {
    b.classList.remove('kou-current');
  });

  // 現在の候ブロックをハイライト
  if (blocks[kouIndex]) {
    blocks[kouIndex].classList.add('kou-current');
  }

  // 候ブロックは150px固定
  // 現在候ブロックの左端ヘ座標
  const blockLeft = kouIndex * KOU_BLOCK_WIDTH;

  // 候の開始日から現在日までの経過日数
  const kouStart = SEASONS_DATA[kouIndex];
  const startAbsDay = toAbsoluteDay(kouStart.startMonth, kouStart.startDay);
  const currentAbsDay = toAbsoluteDay(month, day);
  let elapsedDays = currentAbsDay - startAbsDay;
  if (elapsedDays < 0) elapsedDays += 365;

  // 候の日数（候内での進行割合計算用）
  const kouDays = getKouDays(kouIndex);

  // 候内の進行割合（0.0～1.0）に応じてブロック内の位置を計算
  const progressRatio = elapsedDays / kouDays;
  const posInBlock = progressRatio * KOU_BLOCK_WIDTH;

  // 現在日の位置をビューポートの中央に合わせる
  const centerX = blockLeft + posInBlock + (KOU_BLOCK_WIDTH / kouDays * 0.5);
  const translateX = -(centerX - viewportWidth / 2);

  // transitionを一時無効化して帯の幅を再計算した後にアニメを有効化
  belt.style.transition = 'none';
  belt.style.transform = 'translateX(' + translateX + 'px)';
  // 次のフレームでアニメを再有効化
  requestAnimationFrame(function() {
    belt.style.transition = 'transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
  });
}

// ===================================================
// 候帯の背景：候ブロック自体に固有色が設定済みのため、ビューポート背景は中立色に固定
// ===================================================
function updateKouBeltBackground(color1, color2) {
  // 候ブロック自体に節気固有色が設定済みのため、ビューポートの背景は中立色に固定
  const kouViewport = document.getElementById('kouViewport');
  kouViewport.style.background = '#e8e8e8';
}

// ===================================================
// 写真フレーム更新
// ===================================================
function updateHeroImage(imageFile) {
  const img = document.getElementById('heroImage');
  const placeholder = document.getElementById('heroPlaceholder');

  if (imageFile) {
    img.onload = function () {
      img.style.display = 'block';
      placeholder.style.display = 'none';
    };
    img.onerror = function () {
      img.style.display = 'none';
      placeholder.style.display = 'block';
    };
    img.src = 'images/' + imageFile + '?v=20260222c';
    img.alt = '';
  } else {
    img.style.display = 'none';
    placeholder.style.display = 'block';
  }
}

// ===================================================
// 七十二候のふりがなバーを更新（24節気カラー＋和柄パターン背景）
// ===================================================
function updateKotobaBar(kouData) {
  const bar = document.getElementById('kotobaBar');
  const patternEl = document.getElementById('kotobaPattern');
  const textEl = document.getElementById('kotobaText');
  if (!bar || !textEl) return;

  // 読み仮名のみ表示（漢字なし）
  const kouReading = kouData.kouReading || '';
  textEl.textContent = kouReading;

  // 背景色：透明（背景なし）
  bar.style.background = 'transparent';
  if (patternEl) {
    patternEl.style.backgroundImage = 'none';
  }
}

// 日付を "YYYY-MM-DD" 形式に変換
function formatDateKey(date) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return y + '-' + m + '-' + d;
}

// ===================================================
// 旬の情報パネルの内容を更新
// ===================================================
function updateLifePanel(kouData) {
  const badge = document.getElementById('lifeSekkiBadge');
  if (badge) {
    badge.textContent = kouData.sekki;
    badge.style.background = kouData.color1;
  }

  const setEl = function(id, val) {
    const el = document.getElementById(id);
    if (el) el.textContent = val || '—';
  };

  setEl('lifeKouName', kouData.kou);
  setEl('lifeKouReading', kouData.kouReading);
  setEl('lifeDescription', kouData.info && kouData.info.description);
  setEl('lifeLifestyle', kouData.info && kouData.info.lifestyle);
  setEl('lifeCustoms', kouData.info && kouData.info.customs);
  setEl('lifeFlower', kouData.info && kouData.info.flower);
  setEl('lifeFish', kouData.info && kouData.info.fish);
  setEl('lifeVegetable', kouData.info && kouData.info.vegetable);
  setEl('lifeAroma', kouData.aroma || (kouData.info && kouData.info.aroma));
}

// ===================================================
// 旬の配色パネルの内容を更新（サブカラー自動計算）
// ===================================================
function updateKasanePanel(kouData) {
  const wrap = document.getElementById('iroawaseWrap');
  if (!wrap) return;

  const mainColor = kouData.color1 || '#888888';
  const mainColor2 = kouData.color2 || kouData.color1 || '#aaaaaa';

  // サブカラー3色を自動計算（HSL色彩理論）
  const sub = calcSubColors(mainColor);

  // 着こなしヒントを生成
  const hint = buildCoordHint(kouData.kasaneNa, mainColor, sub);

  wrap.innerHTML =
    '<div class="iroawase-main-block">' +
      '<div class="iroawase-label">この頃の伝統色</div>' +
      '<div class="iroawase-bar" style="background: linear-gradient(90deg, ' + mainColor + ' 0%, ' + mainColor2 + ' 100%)"></div>' +
      '<div class="iroawase-name">' + (kouData.kasaneNa || '—') + '</div>' +
      '<div class="iroawase-reading">' + (kouData.kasaneReading || '') + '</div>' +
      '<div class="iroawase-code">' + mainColor + '</div>' +
    '</div>' +
    '<div class="iroawase-sub-title">合わせたい色</div>' +
    '<div class="iroawase-sub-grid">' +
      '<div class="iroawase-sub-item">' +
        '<div class="iroawase-sub-chip" style="background:' + sub[0].hex + '"></div>' +
        '<div class="iroawase-sub-role">' + sub[0].role + '</div>' +
        '<div class="iroawase-sub-code">' + sub[0].hex + '</div>' +
      '</div>' +
      '<div class="iroawase-sub-item">' +
        '<div class="iroawase-sub-chip" style="background:' + sub[1].hex + '"></div>' +
        '<div class="iroawase-sub-role">' + sub[1].role + '</div>' +
        '<div class="iroawase-sub-code">' + sub[1].hex + '</div>' +
      '</div>' +
      '<div class="iroawase-sub-item">' +
        '<div class="iroawase-sub-chip" style="background:' + sub[2].hex + '"></div>' +
        '<div class="iroawase-sub-role">' + sub[2].role + '</div>' +
        '<div class="iroawase-sub-code">' + sub[2].hex + '</div>' +
      '</div>' +
    '</div>' +
    '<div class="iroawase-hint">' + hint + '</div>';
}

// メインカラーからサブカラー3色を計算する
function calcSubColors(hex) {
  const hsl = hexToHsl(hex);
  const h = hsl[0], s = hsl[1], l = hsl[2];

  // 類似色（色相±30度）
  const analogous = hslToHex((h + 30) % 360, s, l);
  // 補色（色相+180度）
  const complementary = hslToHex((h + 180) % 360, Math.min(s, 60), Math.min(l + 10, 80));
  // トライアド（色相+120度）
  const triadic = hslToHex((h + 120) % 360, Math.min(s, 55), Math.min(l + 5, 75));

  return [
    { hex: analogous, role: '類似色' },
    { hex: complementary, role: '補色' },
    { hex: triadic, role: 'アクセント' }
  ];
}

// 着こなしヒントを生成する
function buildCoordHint(colorName, mainHex, subColors) {
  const name = colorName || 'この色';
  return '「' + name + '」は季節の主役色。' +
    '類似色（' + subColors[0].hex + '）で上品なグラデーションコーデに。' +
    '補色（' + subColors[1].hex + '）を小物にさりげなく添えると引き締まります。' +
    'アクセント（' + subColors[2].hex + '）はワンポイントに。';
}

// HEX → HSL変換
function hexToHsl(hex) {
  let r = parseInt(hex.slice(1,3),16)/255;
  let g = parseInt(hex.slice(3,5),16)/255;
  let b = parseInt(hex.slice(5,7),16)/255;
  const max = Math.max(r,g,b), min = Math.min(r,g,b);
  let h, s, l = (max+min)/2;
  if (max === min) { h = s = 0; }
  else {
    const d = max - min;
    s = l > 0.5 ? d/(2-max-min) : d/(max+min);
    switch(max) {
      case r: h = ((g-b)/d + (g<b?6:0))/6; break;
      case g: h = ((b-r)/d + 2)/6; break;
      case b: h = ((r-g)/d + 4)/6; break;
    }
  }
  return [Math.round(h*360), Math.round(s*100), Math.round(l*100)];
}

// HSL → HEX変換
function hslToHex(h, s, l) {
  h = h % 360; s = s/100; l = l/100;
  const c = (1 - Math.abs(2*l-1)) * s;
  const x = c * (1 - Math.abs((h/60)%2 - 1));
  const m = l - c/2;
  let r=0,g=0,b=0;
  if (h<60){r=c;g=x;b=0;} else if(h<120){r=x;g=c;b=0;}
  else if(h<180){r=0;g=c;b=x;} else if(h<240){r=0;g=x;b=c;}
  else if(h<300){r=x;g=0;b=c;} else{r=c;g=0;b=x;}
  const toH = n => Math.round((n+m)*255).toString(16).padStart(2,'0');
  return '#' + toH(r) + toH(g) + toH(b);
}

// ===================================================
// シェア機能（Web Share API）
// ===================================================
function shareApp() {
  const month = currentDate.getMonth() + 1;
  const day = currentDate.getDate();
  const kouIndex = getKouIndex(month, day);
  const kouData = SEASONS_DATA[kouIndex];

  const text = '【ひととせ】' + kouData.sekki + ' ' + kouData.kou + '\n' +
    (kouData.kotoba ? '\n' + kouData.kotoba + '\n' : '') +
    '\n二十四節気・七十二候アプリ「ひととせ」';

  if (navigator.share) {
    navigator.share({
      title: 'ひととせ — ' + kouData.kou,
      text: text,
      url: window.location.href
    }).catch(function() {});
  } else {
    // フォールバック：クリップボードにコピー
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text + '\n' + window.location.href)
        .then(function() { alert('テキストをコピーしました'); })
        .catch(function() { alert('シェアはスマートフォンでご利用ください'); });
    } else {
      alert('シェアはスマートフォンでご利用ください');
    }
  }
}

// ===================================================
// 日付移動
// ===================================================
function changeDay(delta) {
  const newDate = new Date(currentDate);
  newDate.setDate(newDate.getDate() + delta);
  currentDate = newDate;
  renderAll();
}

// ===================================================
// 日付ボタンの長押し連続送り
// ===================================================
(function() {
  var pressTimer = null;    // 長押し開始待機タイマー
  var repeatTimer = null;   // 連続送りタイマー
  var repeatCount = 0;      // 連続送り回数（スピードアップ用）
  var currentDelta = 0;     // 送り方向

  function getRepeatInterval() {
    // 連続回数に応じてインターバルを短く（スピードアップ）
    if (repeatCount < 5) return 300;   // 最初はジ6日/秒
    if (repeatCount < 15) return 150;  // 中盤はス7日/秒
    return 80;                          // 高速はス12日/秒
  }

  function startRepeat(delta) {
    repeatCount++;
    changeDay(delta);
    repeatTimer = setTimeout(function() {
      startRepeat(delta);
    }, getRepeatInterval());
  }

  function stopRepeat() {
    if (pressTimer) { clearTimeout(pressTimer); pressTimer = null; }
    if (repeatTimer) { clearTimeout(repeatTimer); repeatTimer = null; }
    repeatCount = 0;
  }

  function setupLongPress(btnId, delta) {
    var btn = document.getElementById(btnId);
    if (!btn) return;

    // マウスイベント（PC）
    btn.addEventListener('mousedown', function(e) {
      currentDelta = delta;
      pressTimer = setTimeout(function() {
        startRepeat(delta);
      }, 500); // 500ms長押しで連続送り開始
    });
    btn.addEventListener('mouseup', stopRepeat);
    btn.addEventListener('mouseleave', stopRepeat);

    // タッチイベント（スマホ）
    btn.addEventListener('touchstart', function(e) {
      currentDelta = delta;
      pressTimer = setTimeout(function() {
        startRepeat(delta);
      }, 500);
    }, { passive: true });
    btn.addEventListener('touchend', stopRepeat);
    btn.addEventListener('touchcancel', stopRepeat);
  }

  document.addEventListener('DOMContentLoaded', function() {
    setupLongPress('btnPrevDay', -1);
    setupLongPress('btnNextDay', 1);
  });
})();

// ===================================================
// 候インデックスを指定して開始日に移動
// ===================================================
function navigateToKouByIndex(targetIndex) {
  const targetKou = SEASONS_DATA[targetIndex];
  const currentMonth = currentDate.getMonth() + 1;
  const newDate = new Date(currentDate);

  // 12/32は1/1扱い
  const targetMonth = targetKou.startMonth;
  const targetDay = (targetKou.startDay === 32) ? 1 : targetKou.startDay;

  newDate.setMonth(targetMonth - 1);
  newDate.setDate(targetDay);

  // 年をまたぐ場合の処理
  if (targetMonth < currentMonth && currentMonth === 12) {
    newDate.setFullYear(newDate.getFullYear() + 1);
  }
  if (targetMonth > currentMonth && currentMonth === 1) {
    newDate.setFullYear(newDate.getFullYear() - 1);
  }

  currentDate = newDate;
  renderAll();
}

// ===================================================
// 今日に戻る
// ===================================================
function goToToday() {
  currentDate = new Date(todayDate);
  renderAll();
}

// ===================================================
// カラーユーティリティ
// ===================================================

// hex色を明るくする（amount: 0〜100）
function lightenColor(hex, amount) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  const nr = Math.min(255, r + amount);
  const ng = Math.min(255, g + amount);
  const nb = Math.min(255, b + amount);
  return '#' + toHex(nr) + toHex(ng) + toHex(nb);
}

// 2色を混合する（ratio: 0.0=color1, 1.0=color2）
function blendColors(hex1, hex2, ratio) {
  const r1 = parseInt(hex1.slice(1, 3), 16);
  const g1 = parseInt(hex1.slice(3, 5), 16);
  const b1 = parseInt(hex1.slice(5, 7), 16);
  const r2 = parseInt(hex2.slice(1, 3), 16);
  const g2 = parseInt(hex2.slice(3, 5), 16);
  const b2 = parseInt(hex2.slice(5, 7), 16);
  const nr = Math.round(r1 + (r2 - r1) * ratio);
  const ng = Math.round(g1 + (g2 - g1) * ratio);
  const nb = Math.round(b1 + (b2 - b1) * ratio);
  return '#' + toHex(nr) + toHex(ng) + toHex(nb);
}

function toHex(n) {
  return n.toString(16).padStart(2, '0');
}

// ===================================================
// パネルの開閉
// ===================================================
function showPanel(panelName) {
  const month = currentDate.getMonth() + 1;
  const day = currentDate.getDate();
  const kouIndex = getKouIndex(month, day);
  const kouData = SEASONS_DATA[kouIndex];

  if (panelName === 'life') {
    updateLifePanel(kouData);
    document.getElementById('panelLife').style.display = 'flex';
  } else if (panelName === 'kasane') {
    updateKasanePanel(kouData);
    document.getElementById('panelKasane').style.display = 'flex';
  } else if (panelName === 'about') {
    document.getElementById('panelAbout').style.display = 'flex';
  }

  const panel = document.querySelector('#panel' + capitalize(panelName) + ' .panel-content');
  if (panel) panel.scrollTop = 0;
}

function closePanel(panelName) {
  document.getElementById('panel' + capitalize(panelName)).style.display = 'none';
}

// オーバーレイクリックで閉じる
document.addEventListener('click', function (e) {
  if (e.target.classList.contains('panel-overlay')) {
    e.target.style.display = 'none';
  }
});

// ===================================================
// ユーティリティ
// ===================================================
function isSameDay(date1, date2) {
  return (
    date1.getFullYear() === date2.getFullYear() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getDate() === date2.getDate()
  );
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// ===================================================
// 旧暦計算（近似アルゴリズム）
// 内田正男氏の方法に基づく旧暦近似値
// ===================================================
function getKyureki(date) {
  // ユリウス日数を計算
  const y = date.getFullYear();
  const m = date.getMonth() + 1;
  const d = date.getDate();

  // ユリウス日数（JDN）を計算
  const a = Math.floor((14 - m) / 12);
  const yy = y + 4800 - a;
  const mm = m + 12 * a - 3;
  const jdn = d + Math.floor((153 * mm + 2) / 5) + 365 * yy +
    Math.floor(yy / 4) - Math.floor(yy / 100) + Math.floor(yy / 400) - 32045;

  // 旧暦計算（内田正男氏近似）
  // 新月のJDN = INT(12.37 * (year - 1900 + (month - 0.5) / 12)) + 15日の近似
  // より精度の高い近似式を使用
  const k = Math.floor((jdn - 2451550.5) / 29.530588) + 1;
  const newMoonJdn = Math.round(2451550.5 + 29.530588 * k);

  // 当該日の属する旧暦月の新月を探す
  let monthStartJdn = newMoonJdn;
  if (monthStartJdn > jdn) {
    monthStartJdn = Math.round(2451550.5 + 29.530588 * (k - 1));
  }
  // 当日が新月より少ない場合も導く
  if (jdn < monthStartJdn) {
    monthStartJdn = Math.round(2451550.5 + 29.530588 * (k - 2));
  }

  // 旧暦日：新月からの経過日数 + 1
  const kyurekiDay = jdn - monthStartJdn + 1;

  // 旧暦月を新暦月から近似する（簡易変換）
  // 新暦月と旧暦月の差はおおよそ以下の対応表で近似
  // 新暦月と旧暦月の対応（近似）
  // 1月下旬～2月上旬 → 旧暦正月
  // 2月下旬～3月上旬 → 旧暦二月
  // など、おおよそ1ヶ月遅れ
  let kyurekiMonth = m - 1;
  if (kyurekiMonth < 1) kyurekiMonth = 12;
  // 日付による調整（新月の前後で月が変わる）
  if (d <= 10 && kyurekiDay > 20) {
    kyurekiMonth = m - 2;
    if (kyurekiMonth < 1) kyurekiMonth += 12;
  } else if (d >= 20 && kyurekiDay <= 5) {
    kyurekiMonth = m;
    if (kyurekiMonth > 12) kyurekiMonth = 1;
  }

  return {
    month: kyurekiMonth,
    day: Math.max(1, Math.min(30, kyurekiDay)),
    monthName: KYUREKI_MONTH_NAMES[kyurekiMonth] || '睦月'
  };
}

// ===================================================
// Googleカレンダー連携：今日の予定を読み込む
// events.jsonをfetchしてイベントリストを表示する
// ===================================================
function loadScheduleEvents() {
  // ローディング表示
  document.getElementById('scheduleLoading').style.display = 'block';
  document.getElementById('scheduleEventList').style.display = 'none';
  document.getElementById('scheduleEmpty').style.display = 'none';
  document.getElementById('scheduleError').style.display = 'none';
  document.getElementById('scheduleUpdated').textContent = '';

  // events.jsonをキャッシュバイパスして取得
  fetch('events.json?t=' + Date.now())
    .then(function(res) {
      if (!res.ok) throw new Error('HTTP ' + res.status);
      return res.json();
    })
    .then(function(data) {
      document.getElementById('scheduleLoading').style.display = 'none';

      if (!data.success) {
        showScheduleError('データの取得に失敗しました');
        return;
      }

      var events = data.events || [];
      if (events.length === 0) {
        document.getElementById('scheduleEmpty').style.display = 'block';
      } else {
        renderScheduleEvents(events);
      }

      // 更新日時を表示
      if (data.updated_at) {
        var updatedDate = new Date(data.updated_at);
        var h = updatedDate.getHours().toString().padStart(2, '0');
        var m = updatedDate.getMinutes().toString().padStart(2, '0');
        document.getElementById('scheduleUpdated').textContent =
          '更新: ' + h + ':' + m;
      }
    })
    .catch(function(err) {
      document.getElementById('scheduleLoading').style.display = 'none';
      showScheduleError('データを取得できませんでした');
      console.error('schedule fetch error:', err);
    });
}

function renderScheduleEvents(events) {
  var list = document.getElementById('scheduleEventList');
  list.innerHTML = '';

  events.forEach(function(ev) {
    var item = document.createElement('div');
    item.className = 'schedule-event-item';

    // 時刻表示
    var timeEl = document.createElement('div');
    timeEl.className = 'schedule-event-time' + (ev.is_allday ? ' allday' : '');
    if (ev.is_allday) {
      timeEl.textContent = '終日';
    } else if (ev.end) {
      timeEl.innerHTML = ev.start + '<br><span style="font-size:0.72rem;color:#b0956a;">' + ev.end + '</span>';
    } else {
      timeEl.textContent = ev.start;
    }

    // 本文
    var bodyEl = document.createElement('div');
    bodyEl.className = 'schedule-event-body';

    var titleEl = document.createElement('div');
    titleEl.className = 'schedule-event-title';
    titleEl.textContent = ev.summary;
    bodyEl.appendChild(titleEl);

    // 場所または説明
    var detail = [];
    if (ev.location) detail.push('📍 ' + ev.location);
    if (ev.description) detail.push(ev.description.substring(0, 40) + (ev.description.length > 40 ? '…' : ''));
    if (detail.length > 0) {
      var detailEl = document.createElement('div');
      detailEl.className = 'schedule-event-detail';
      detailEl.textContent = detail.join(' ');
      bodyEl.appendChild(detailEl);
    }

    item.appendChild(timeEl);
    item.appendChild(bodyEl);
    list.appendChild(item);
  });

  list.style.display = 'block';
}

function showScheduleError(msg) {
  document.getElementById('scheduleErrorMsg').textContent = msg;
  document.getElementById('scheduleError').style.display = 'block';
}

// 旧暦表示を更新
function updateKyureki(date) {
  const kyureki = getKyureki(date);
  const dayName = KYUREKI_DAY_NAMES[kyureki.day] || (kyureki.day + '日');
  // 旧暦日付：「正月 六日」の形式（漢字表記）
  const monthKanji = KYUREKI_MONTH_KANJI[kyureki.month] || (kyureki.month + '月');
  document.getElementById('kyurekiDate').textContent = monthKanji + ' ' + dayName;
  // 月の旧名：「睦月」（旧暦行内）
  document.getElementById('kyurekiMonthName').textContent = kyureki.monthName;
  // 旧月名ブロック（日付と旧暦の間）→新暦の月に連動
  const shinreki_m = date.getMonth() + 1; // 1～12
  const shinMonthName = KYUREKI_MONTH_NAMES[shinreki_m] || '';
  const shinMonthReading = KYUREKI_MONTH_READINGS[shinreki_m] || '';
  const monthNameEl = document.getElementById('monthNameDisplay');
  if (monthNameEl) {
    monthNameEl.querySelector('.month-name-kanji').textContent = shinMonthName;
    monthNameEl.querySelector('.month-name-reading').textContent = shinMonthReading;
  }
}
