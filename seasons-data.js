/**
 * ひととせ - 二十四節気・七十二候データ
 * 2026年（令和8年）版
 * 出典：国立天文台暦計算室、本朝七十二候（現代版）
 *
 * データ構造：
 * - startMonth / startDay: 候の開始月日
 * - sekki: 二十四節気名
 * - sekkiReading: 節気の読み
 * - kou: 候の名称
 * - kouReading: 候の読み
 * - kouNumber: 候の番号（1〜72）
 * - position: 初候・次候・末候
 * - color1: 襲の色目メインカラー（背景グラデーション用）
 * - color2: 襲の色目サブカラー
 * - kasaneNa: 襲の色目の名称
 * - kasaneReading: 襲の色目の読み
 * - info: 生活情報（候の説明、過ごし方、旬の食材など）
 * - imageFile: 対応する画像ファイル名（ユーザー提供）
 */

const SEASONS_DATA = [

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // 小寒（しょうかん）1月5日〜
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    startMonth: 1, startDay: 5,
    sekki: "小寒", sekkiReading: "しょうかん",
    kou: "芹乃栄", kouReading: "せりすなわちさかう",
    kouNumber: 67, position: "初候",
    color1: "#8B9DC3", color2: "#C8D4E8",
    kasaneNa: "薄色", kasaneReading: "うすいろ",
    info: {
      description: "水辺でセリが盛んに育つ頃。春の七草のひとつ、セリが青々と茂り始めます。",
      lifestyle: "寒さが本格的になる時期。温かい鍋料理やお粥で体の芯から温めましょう。",
      customs: "七草粥（1月7日）の準備をする時期。全国各地で初詣の参拝が続きます。",
      fish: "タラ、ブリ、カキ",
      vegetable: "セリ、ほうれん草、白菜",
      flower: "福寿草、蝋梅（ろうばい）"
    },
    imageFile: "photos/shokan-shoko.jpg",
    kotoba: "水辺に芹の香り、\n冬の清らかな息吹。",
    aroma: "芹・白梅・冷水"
  },
  {
    startMonth: 1, startDay: 10,
    sekki: "小寒", sekkiReading: "しょうかん",
    kou: "泉水温潤", kouReading: "しみずあたたかをふくむ",
    kouNumber: 68, position: "次候",
    color1: "#7BA7BC", color2: "#B8D4E0",
    kasaneNa: "氷重", kasaneReading: "こおりがさね",
    info: {
      description: "地中の泉が少しずつ温もりを帯びてくる頃。厳冬の中にも春の兆しが感じられます。",
      lifestyle: "乾燥が厳しい時期。加湿器を活用し、こまめな水分補給を心がけましょう。",
      customs: "成人の日（1月第2月曜日）。各地で成人式が行われます。",
      fish: "ブリ、ヒラメ、アンコウ",
      vegetable: "大根、ネギ、ゴボウ",
      flower: "水仙、梅（早咲き）"
    },
    imageFile: "photos/shokan-jiko.jpg",
    kotoba: "地の底より温もりが、\nそっと湧き上がる。",
    aroma: "白梅・清水・ひのき"
  },
  {
    startMonth: 1, startDay: 15,
    sekki: "小寒", sekkiReading: "しょうかん",
    kou: "雉始雊", kouReading: "きじはじめてなく",
    kouNumber: 69, position: "末候",
    color1: "#6B8E6B", color2: "#A8C4A8",
    kasaneNa: "松重", kasaneReading: "まつがさね",
    info: {
      description: "雄のキジが鳴き始める頃。日本の国鳥であるキジの声が山野に響きます。",
      lifestyle: "小正月（1月15日）。小豆粥を食べて一年の無病息災を祈る風習があります。",
      customs: "どんど焼き（左義長）が全国各地で行われます。正月飾りを焚き上げる伝統行事です。",
      fish: "タラ、スケソウダラ、ズワイガニ",
      vegetable: "小松菜、春菊、カブ",
      flower: "蝋梅、水仙"
    },
    imageFile: "photos/shokan-makko.jpg",
    kotoba: "山野に響く雉の声、\n冬の静寂を破る。",
    aroma: "松・杉・冷気"
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // 大寒（だいかん）1月20日〜
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    startMonth: 1, startDay: 20,
    sekki: "大寒", sekkiReading: "だいかん",
    kou: "款冬華", kouReading: "ふきのはなさく",
    kouNumber: 70, position: "初候",
    color1: "#9B8EA8", color2: "#C8BED4",
    kasaneNa: "薄紫", kasaneReading: "うすむらさき",
    info: {
      description: "フキノトウが雪の下から顔を出す頃。一年で最も寒い時期ですが、春の使者が芽吹きます。",
      lifestyle: "大寒は寒仕込みの季節。味噌、醤油、日本酒など、発酵食品の仕込みに最適な時期です。",
      customs: "大寒の卵（大寒の日に産まれた卵）を食べると縁起が良いとされています。",
      fish: "フグ、アンコウ、牡蠣",
      vegetable: "フキノトウ、ほうれん草、白菜",
      flower: "梅（白梅）、水仙"
    },
    imageFile: "photos/daikan-shoko.jpg",
    kotoba: "雪の下からふきのとう、\n春の使者が顔を出す。",
    aroma: "ふき・白梅・土"
  },
  {
    startMonth: 1, startDay: 25,
    sekki: "大寒", sekkiReading: "だいかん",
    kou: "水沢腹堅", kouReading: "さわみずこおりつめる",
    kouNumber: 71, position: "次候",
    color1: "#6B8EA8", color2: "#A8C4D4",
    kasaneNa: "薄氷", kasaneReading: "うすらい",
    info: {
      description: "沢の水が厚く凍りつく頃。一年で最も寒さが厳しくなります。",
      lifestyle: "防寒対策を万全に。重ね着の工夫や、生姜・根菜類を使った温かい料理で体を温めましょう。",
      customs: "寒稽古の季節。武道や芸事の稽古始めが行われます。",
      fish: "ブリ、タラ、ヒラメ",
      vegetable: "大根、ネギ、ゴボウ",
      flower: "梅（紅梅）、蝋梅"
    },
    imageFile: "photos/daikan-jiko.jpg",
    kotoba: "沢の水が凍りつき、\n大地は静かに眠る。",
    aroma: "氷・松・白檀"
  },
  {
    startMonth: 1, startDay: 30,
    sekki: "大寒", sekkiReading: "だいかん",
    kou: "鶏始乳", kouReading: "にわとりはじめてとやにつく",
    kouNumber: 72, position: "末候",
    color1: "#C8B87A", color2: "#E8D8A0",
    kasaneNa: "萌黄", kasaneReading: "もえぎ",
    info: {
      description: "鶏が卵を産み始める頃。春の訪れが近いことを告げます。",
      lifestyle: "節分（2月3日）の準備を始める時期。恵方巻きの予約や豆の準備をしましょう。",
      customs: "各地の梅まつりが始まる頃。梅の開花情報をチェックしてみましょう。",
      fish: "イワシ（節分に向けて）、ブリ",
      vegetable: "ほうれん草、小松菜、春菊",
      flower: "梅（早咲き）、福寿草"
    },
    imageFile: "photos/daikan-makko.jpg",
    kotoba: "鶏が卵を産み始め、\n命の循環が始まる。",
    aroma: "藁・土・白梅"
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // 立春（りっしゅん）2月4日〜
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    startMonth: 2, startDay: 4,
    sekki: "立春", sekkiReading: "りっしゅん",
    kou: "東風解凍", kouReading: "はるかぜこおりをとく",
    kouNumber: 1, position: "初候",
    color1: "#E8A0A0", color2: "#F8D0D0",
    kasaneNa: "紅梅", kasaneReading: "こうばい",
    info: {
      description: "東から吹く春風が、凍った大地を解かし始める頃。暦の上では春の始まりです。",
      lifestyle: "春の気配を感じながら、冬物の整理を少しずつ始めましょう。梅の花を愛でる散歩もおすすめです。",
      customs: "節分（前日）の翌日。「春立つ」と言われ、年賀状の代わりに「余寒見舞い」を出す習慣があります。",
      fish: "サワラ、メバル、ホタルイカ（早いもの）",
      vegetable: "菜の花、ふきのとう、うど",
      flower: "梅、福寿草、菜の花"
    },
    imageFile: "photos/risshun-shoko.jpg",
    kotoba: "東から吹く春の風、\n氷がそっと溶け始める。",
    aroma: "梅・春風・土"
  },
  {
    startMonth: 2, startDay: 9,
    sekki: "立春", sekkiReading: "りっしゅん",
    kou: "黄鶯睍睆", kouReading: "うぐいすなく",
    kouNumber: 2, position: "次候",
    color1: "#C8D870", color2: "#E8F0A0",
    kasaneNa: "若草", kasaneReading: "わかくさ",
    info: {
      description: "ウグイスが鳴き始める頃。「春告鳥」とも呼ばれるウグイスの声が、春の訪れを告げます。",
      lifestyle: "花粉症の季節の始まり。早めの対策を心がけましょう。外出時はマスクや眼鏡の準備を。",
      customs: "梅まつりが各地で開催される時期。梅の香りを楽しみながら春を感じましょう。",
      fish: "サヨリ、メバル、ハマグリ",
      vegetable: "菜の花、春キャベツ（早いもの）、ふきのとう",
      flower: "梅、菜の花、ミモザ"
    },
    imageFile: "photos/risshun-jiko.jpg",
    kotoba: "梅の枝に鶯の声、\n春告げ鳥の初音。",
    aroma: "梅・鶯・春霞"
  },
  {
    startMonth: 2, startDay: 14,
    sekki: "立春", sekkiReading: "りっしゅん",
    kou: "魚上氷", kouReading: "うおこおりをいずる",
    kouNumber: 3, position: "末候",
    color1: "#7ABCD4", color2: "#B0D8E8",
    kasaneNa: "青磁", kasaneReading: "せいじ",
    info: {
      description: "氷が割れ、魚が水面に上がってくる頃。川や湖の氷が解け始め、魚が活発になります。",
      lifestyle: "バレンタインデー（2月14日）。チョコレートを贈る日本独自の文化が定着しています。",
      customs: "涅槃会（2月15日）。お釈迦様の入滅を悼む法要が各地の寺院で行われます。",
      fish: "ワカサギ、ヒラメ、カレイ",
      vegetable: "春菊、ほうれん草、菜の花",
      flower: "梅、スイートピー、チューリップ（早いもの）"
    },
    imageFile: "photos/risshun-makko.jpg",
    kotoba: "氷の下から魚が跳ね、\n春の水が動き出す。",
    aroma: "水・梅・春霞"
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // 雨水（うすい）2月19日〜
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    startMonth: 2, startDay: 19,
    sekki: "雨水", sekkiReading: "うすい",
    kou: "土脉潤起", kouReading: "つちのしょううるおいおこる",
    kouNumber: 4, position: "初候",
    color1: "#6B9E6B", color2: "#A0C8A0",
    kasaneNa: "萌黄", kasaneReading: "もえぎ",
    info: {
      description: "雪が雨に変わり、大地が潤い始める頃。春の雨が土を柔らかくし、草木の芽吹きを促します。",
      lifestyle: "雛人形を飾る時期。「雨水の日に飾ると良縁に恵まれる」という言い伝えがあります。",
      customs: "各地で梅まつりが最盛期を迎えます。梅の花見を楽しみましょう。",
      fish: "ホタルイカ、サワラ、アサリ",
      vegetable: "菜の花、うど、タラの芽",
      flower: "梅、沈丁花、ミモザ"
    },
    imageFile: "photos/usui-shoko.jpg",
    kotoba: "雨が大地を潤し、\n眠っていた命が目覚める。",
    aroma: "土・雨・沈丁花"
  },
  {
    startMonth: 2, startDay: 23,
    sekki: "雨水", sekkiReading: "うすい",
    kou: "霞始靆", kouReading: "かすみはじめてたなびく",
    kouNumber: 5, position: "次候",
    color1: "#B8A8C8", color2: "#D8CDE8",
    kasaneNa: "霞", kasaneReading: "かすみ",
    info: {
      description: "春霞がたなびき始める頃。山や野に霞がかかり、幻想的な春の景色が広がります。",
      lifestyle: "天皇誕生日（2月23日）。国民の祝日です。",
      customs: "春霞の季節は花粉が多く飛散します。外出時の対策を忘れずに。",
      fish: "サヨリ、ハマグリ、ホタルイカ",
      vegetable: "菜の花、春キャベツ、アスパラガス（早いもの）",
      flower: "沈丁花、梅（遅咲き）、桃（早いもの）"
    },
    imageFile: "photos/usui-jiko.jpg",
    kotoba: "春霞がたなびき、\n遠山がやわらかく霞む。",
    aroma: "沈丁花・春霞・白梅"
  },
  {
    startMonth: 2, startDay: 28,
    sekki: "雨水", sekkiReading: "うすい",
    kou: "草木萌動", kouReading: "そうもくめばえいずる",
    kouNumber: 6, position: "末候",
    color1: "#78B878", color2: "#A8D8A8",
    kasaneNa: "若芽", kasaneReading: "わかめ",
    info: {
      description: "草木が芽吹き始める頃。大地のあちこちで新芽が顔を出し、春の息吹が感じられます。",
      lifestyle: "ひな祭り（3月3日）の準備を整える時期。ちらし寿司や菱餅の材料を揃えましょう。",
      customs: "各地で春の野草摘みが楽しめる時期。ふきのとうやつくしを探してみましょう。",
      fish: "ハマグリ、サワラ、イサキ",
      vegetable: "ふきのとう、タラの芽、菜の花",
      flower: "桃、沈丁花、スイートピー"
    },
    imageFile: "photos/usui-makko.jpg",
    kotoba: "草も木も芽吹き始め、\n大地が緑に染まる。",
    aroma: "若草・沈丁花・春雨"
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // 啓蟄（けいちつ）3月5日〜
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    startMonth: 3, startDay: 5,
    sekki: "啓蟄", sekkiReading: "けいちつ",
    kou: "蟄虫啓戸", kouReading: "すごもりむしとをひらく",
    kouNumber: 7, position: "初候",
    color1: "#8BC88B", color2: "#B8E8B8",
    kasaneNa: "青柳", kasaneReading: "あおやぎ",
    info: {
      description: "冬ごもりしていた虫たちが地中から出てくる頃。春の暖かさに誘われ、生き物たちが活動を始めます。",
      lifestyle: "虫の季節の始まり。庭の手入れや農作業を始める時期です。",
      customs: "ひな祭り（3月3日）が過ぎたら、雛人形は早めに片付けましょう。",
      fish: "サワラ、ホタルイカ、アサリ",
      vegetable: "タラの芽、ふきのとう、うど",
      flower: "桃、菜の花、チューリップ"
    },
    imageFile: "photos/keichitsu-shoko.jpg",
    kotoba: "土の中の虫たちが、\n春の扉を開ける。",
    aroma: "土・若草・春風"
  },
  {
    startMonth: 3, startDay: 10,
    sekki: "啓蟄", sekkiReading: "けいちつ",
    kou: "桃始笑", kouReading: "ももはじめてさく",
    kouNumber: 8, position: "次候",
    color1: "#F0A0B8", color2: "#F8D0DC",
    kasaneNa: "桃", kasaneReading: "もも",
    info: {
      description: "桃の花が咲き始める頃。淡いピンクの桃の花が、春の野を彩ります。",
      lifestyle: "東日本大震災の記憶を胸に（3月11日）。防災グッズの点検をする機会にしましょう。",
      customs: "桃の節句（ひな祭り）の余韻が残る時期。桃の花を生けて春を楽しみましょう。",
      fish: "イサキ、ハマグリ、ホタルイカ",
      vegetable: "春キャベツ、菜の花、アスパラガス",
      flower: "桃、チューリップ、スイセン"
    },
    imageFile: "photos/keichitsu-jiko.jpg",
    kotoba: "桃の花が笑うように、\nほころび始める。",
    aroma: "桃・春霞・若草"
  },
  {
    startMonth: 3, startDay: 15,
    sekki: "啓蟄", sekkiReading: "けいちつ",
    kou: "菜虫化蝶", kouReading: "なむしちょうとなる",
    kouNumber: 9, position: "末候",
    color1: "#F8D870", color2: "#FCF0A8",
    kasaneNa: "蒲公英", kasaneReading: "たんぽぽ",
    info: {
      description: "青虫が蝶へと変わる頃。さなぎから美しい蝶が羽化し、春の野を舞います。",
      lifestyle: "春のお彼岸（3月17日頃）。お墓参りをして先祖を供養しましょう。",
      customs: "春分の日（3月20日）に向けて、お彼岸の準備をする時期。ぼたもちを作る家庭も多いです。",
      fish: "サクラマス、アサリ、ハマグリ",
      vegetable: "春キャベツ、タラの芽、うど",
      flower: "チューリップ、菜の花、桜（早咲き）"
    },
    imageFile: "photos/keichitsu-makko.jpg",
    kotoba: "青虫が蝶となって、\n春の空へ舞い上がる。",
    aroma: "菜の花・蝶・春風"
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // 春分（しゅんぶん）3月20日〜
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    startMonth: 3, startDay: 20,
    sekki: "春分", sekkiReading: "しゅんぶん",
    kou: "雀始巣", kouReading: "すずめはじめてすくう",
    kouNumber: 10, position: "初候",
    color1: "#E8C0A0", color2: "#F8E0C8",
    kasaneNa: "桜重", kasaneReading: "さくらがさね",
    info: {
      description: "スズメが巣を作り始める頃。春分を迎え、昼と夜の長さが等しくなります。",
      lifestyle: "春分の日（3月20日）は国民の祝日。自然をたたえ、生き物を慈しむ日です。",
      customs: "春のお彼岸の中日。お墓参りをして先祖を供養します。ぼたもちを供える習慣があります。",
      fish: "サクラマス、ハマグリ、アサリ",
      vegetable: "春キャベツ、菜の花、アスパラガス",
      flower: "桜、チューリップ、スミレ"
    },
    imageFile: "photos/shunbun-shoko.jpg",
    kotoba: "雀が巣を作り始め、\n新しい命が宿る。",
    aroma: "桜・若草・春風"
  },
  {
    startMonth: 3, startDay: 26,
    sekki: "春分", sekkiReading: "しゅんぶん",
    kou: "桜始開", kouReading: "さくらはじめてひらく",
    kouNumber: 11, position: "次候",
    color1: "#F0B8C8", color2: "#F8D8E0",
    kasaneNa: "桜", kasaneReading: "さくら",
    info: {
      description: "桜の花が咲き始める頃。日本の春を代表する桜の開花が始まります。",
      lifestyle: "お花見の計画を立てましょう。桜の開花情報をチェックして、最高の花見スポットを探しましょう。",
      customs: "花見の季節。家族や友人と桜の下でお弁当を広げる日本の春の風物詩です。",
      fish: "サクラダイ、ハマグリ、ホタルイカ",
      vegetable: "春キャベツ、タケノコ（早いもの）、アスパラガス",
      flower: "桜、チューリップ、パンジー"
    },
    imageFile: "photos/shunbun-jiko.jpg",
    kotoba: "桜の花が開き始め、\n春の喜びが溢れる。",
    aroma: "桜・春霞・甘い風"
  },
  {
    startMonth: 3, startDay: 31,
    sekki: "春分", sekkiReading: "しゅんぶん",
    kou: "雷乃発声", kouReading: "かみなりすなわちこえをはっす",
    kouNumber: 12, position: "末候",
    color1: "#9898D8", color2: "#C0C0EC",
    kasaneNa: "藤", kasaneReading: "ふじ",
    info: {
      description: "春雷が鳴り始める頃。遠くで雷の音が聞こえ、春の嵐が訪れます。",
      lifestyle: "年度末・年度始め。新生活の準備を整える時期です。",
      customs: "入学式・入社式の季節。新しい出発を祝う行事が各地で行われます。",
      fish: "サワラ、タイ、ハマグリ",
      vegetable: "タケノコ、春キャベツ、山菜",
      flower: "桜（満開）、チューリップ、スミレ"
    },
    imageFile: "photos/shunbun-makko.jpg",
    kotoba: "春雷が轟き、\n大地に恵みの雨が降る。",
    aroma: "雨・桜・若草"
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // 清明（せいめい）4月5日〜
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    startMonth: 4, startDay: 5,
    sekki: "清明", sekkiReading: "せいめい",
    kou: "玄鳥至", kouReading: "つばめいたる",
    kouNumber: 13, position: "初候",
    color1: "#70B870", color2: "#A0D4A0",
    kasaneNa: "若緑", kasaneReading: "わかみどり",
    info: {
      description: "ツバメが南から渡ってくる頃。春の使者ツバメの到来が、本格的な春の訪れを告げます。",
      lifestyle: "清明節（中国の伝統行事）。沖縄ではシーミーと呼ばれる先祖供養の行事が行われます。",
      customs: "ツバメが巣を作る家は縁起が良いとされています。ツバメの巣を大切に守りましょう。",
      fish: "タイ、サワラ、ホタルイカ",
      vegetable: "タケノコ、山菜、春キャベツ",
      flower: "桜（散り始め）、藤、チューリップ"
    },
    imageFile: "photos/seimei-shoko.jpg",
    kotoba: "燕が海を渡り、\n春の知らせを届ける。",
    aroma: "桜・春風・若葉"
  },
  {
    startMonth: 4, startDay: 10,
    sekki: "清明", sekkiReading: "せいめい",
    kou: "鴻雁北", kouReading: "こうがんかえる",
    kouNumber: 14, position: "次候",
    color1: "#A8C870", color2: "#C8E098",
    kasaneNa: "若苗", kasaneReading: "わかなえ",
    info: {
      description: "雁が北へ帰っていく頃。冬の間日本に滞在していた雁が、繁殖のために北へ旅立ちます。",
      lifestyle: "春の遠足・花見の季節。新緑の中でのピクニックを楽しみましょう。",
      customs: "花まつり（4月8日）。お釈迦様の誕生を祝う行事で、甘茶をかけます。",
      fish: "タイ、カツオ（初鰹）、アジ",
      vegetable: "タケノコ、山菜、アスパラガス",
      flower: "藤、ハナミズキ、チューリップ"
    },
    imageFile: "photos/seimei-jiko.jpg",
    kotoba: "雁が北へ帰り、\n春の空が広がる。",
    aroma: "若葉・春霞・桜"
  },
  {
    startMonth: 4, startDay: 15,
    sekki: "清明", sekkiReading: "せいめい",
    kou: "虹始見", kouReading: "にじはじめてあらわる",
    kouNumber: 15, position: "末候",
    color1: "#D870A8", color2: "#ECA8C8",
    kasaneNa: "虹", kasaneReading: "にじ",
    info: {
      description: "春の雨上がりに虹が見られるようになる頃。七色の虹が春の空に美しくかかります。",
      lifestyle: "春の嵐（春一番）が過ぎた後、晴れた日には虹が見られることがあります。",
      customs: "春祭りの季節。各地の神社で春の例大祭が行われます。",
      fish: "カツオ（初鰹）、タイ、アジ",
      vegetable: "タケノコ、新玉ねぎ、アスパラガス",
      flower: "藤、ライラック、ハナミズキ"
    },
    imageFile: "photos/seimei-makko.jpg",
    kotoba: "春雨の後に虹が現れ、\n空に橋が架かる。",
    aroma: "雨・若葉・藤"
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // 穀雨（こくう）4月20日〜
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    startMonth: 4, startDay: 20,
    sekki: "穀雨", sekkiReading: "こくう",
    kou: "葭始生", kouReading: "あしはじめてしょうず",
    kouNumber: 16, position: "初候",
    color1: "#78B878", color2: "#A8D8A8",
    kasaneNa: "青葦", kasaneReading: "あおあし",
    info: {
      description: "葦が芽を出し始める頃。水辺に葦が芽吹き、春の湿地に緑が広がります。",
      lifestyle: "穀雨は農作業の始まりを告げる節気。田植えの準備を始める農家が多い時期です。",
      customs: "各地で春祭りが最盛期を迎えます。",
      fish: "カツオ（初鰹）、アジ、イサキ",
      vegetable: "新玉ねぎ、アスパラガス、タケノコ",
      flower: "藤、ツツジ、ライラック"
    },
    imageFile: "photos/kokuu-shoko.jpg",
    kotoba: "水辺に葦が芽吹き、\n春の水が輝く。",
    aroma: "若葉・水・藤"
  },
  {
    startMonth: 4, startDay: 25,
    sekki: "穀雨", sekkiReading: "こくう",
    kou: "霜止出苗", kouReading: "しもやんでなえいずる",
    kouNumber: 17, position: "次候",
    color1: "#90C870", color2: "#B8E098",
    kasaneNa: "若葉", kasaneReading: "わかば",
    info: {
      description: "霜が降りなくなり、苗が育ち始める頃。農作物の苗が元気に育つ季節です。",
      lifestyle: "ゴールデンウィーク前の準備期間。旅行の計画を立てましょう。",
      customs: "昭和の日（4月29日）に向けて、ゴールデンウィークが始まります。",
      fish: "カツオ（初鰹）、アジ、サバ",
      vegetable: "新玉ねぎ、そら豆、アスパラガス",
      flower: "ツツジ、藤、バラ（早いもの）"
    },
    imageFile: "photos/kokuu-jiko.jpg",
    kotoba: "霜が止み苗が育ち、\n田んぼに命が満ちる。",
    aroma: "若草・土・雨"
  },
  {
    startMonth: 4, startDay: 30,
    sekki: "穀雨", sekkiReading: "こくう",
    kou: "牡丹華", kouReading: "ぼたんはなさく",
    kouNumber: 18, position: "末候",
    color1: "#D870A0", color2: "#ECA8C4",
    kasaneNa: "牡丹", kasaneReading: "ぼたん",
    info: {
      description: "牡丹の花が咲く頃。「百花の王」と称される牡丹が、豪華に咲き誇ります。",
      lifestyle: "ゴールデンウィーク真っ只中。各地の牡丹園が見頃を迎えます。",
      customs: "各地の牡丹まつりが開催される時期。島根の由志園など、有名な牡丹の名所を訪れましょう。",
      fish: "カツオ（初鰹）、アジ、イサキ",
      vegetable: "そら豆、新玉ねぎ、グリーンピース",
      flower: "牡丹、ツツジ、バラ"
    },
    imageFile: "photos/kokuu-makko.jpg",
    kotoba: "牡丹が豪華に咲き誇り、\n春の女王が君臨する。",
    aroma: "牡丹・薔薇・甘い香り"
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // 立夏（りっか）5月5日〜
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    startMonth: 5, startDay: 5,
    sekki: "立夏", sekkiReading: "りっか",
    kou: "蛙始鳴", kouReading: "かわずはじめてなく",
    kouNumber: 19, position: "初候",
    color1: "#58A858", color2: "#90C890",
    kasaneNa: "緑", kasaneReading: "みどり",
    info: {
      description: "カエルが鳴き始める頃。暦の上では夏の始まり。田んぼや水辺からカエルの声が聞こえます。",
      lifestyle: "こどもの日（5月5日）。こいのぼりを飾り、子どもの健やかな成長を祈ります。",
      customs: "端午の節句。柏餅やちまきを食べ、菖蒲湯に入る習慣があります。",
      fish: "カツオ、アジ、スズキ",
      vegetable: "新玉ねぎ、そら豆、アスパラガス",
      flower: "菖蒲、バラ、ツツジ"
    },
    imageFile: "photos/rikka-shoko.jpg",
    kotoba: "蛙の声が響き渡り、\n夏の始まりを告げる。",
    aroma: "若葉・雨・土"
  },
  {
    startMonth: 5, startDay: 11,
    sekki: "立夏", sekkiReading: "りっか",
    kou: "蚯蚓出", kouReading: "みみずいずる",
    kouNumber: 20, position: "次候",
    color1: "#70A870", color2: "#A0C8A0",
    kasaneNa: "常磐", kasaneReading: "ときわ",
    info: {
      description: "ミミズが地面に出てくる頃。大地が温まり、土の中の生き物が活発になります。",
      lifestyle: "母の日（5月第2日曜日）。感謝の気持ちをカーネーションとともに伝えましょう。",
      customs: "新緑の季節。ハイキングや山歩きを楽しむのに最適な時期です。",
      fish: "カツオ、アジ、サバ",
      vegetable: "新じゃがいも、そら豆、えんどう豆",
      flower: "カーネーション、バラ、スズラン"
    },
    imageFile: "photos/rikka-jiko.jpg",
    kotoba: "ミミズが土から出て、\n大地が柔らかくなる。",
    aroma: "土・若葉・雨"
  },
  {
    startMonth: 5, startDay: 16,
    sekki: "立夏", sekkiReading: "りっか",
    kou: "竹笋生", kouReading: "たけのこしょうず",
    kouNumber: 21, position: "末候",
    color1: "#88B858", color2: "#B0D088",
    kasaneNa: "竹", kasaneReading: "たけ",
    info: {
      description: "竹の子（タケノコ）が生え出る頃。孟宗竹のタケノコが終わり、真竹のタケノコが出始めます。",
      lifestyle: "初夏の爽やかな季節。窓を開けて新鮮な空気を取り込みましょう。",
      customs: "葵祭（京都・賀茂神社）が5月15日に行われます。平安時代から続く優雅な行列が見どころです。",
      fish: "カツオ、アジ、スズキ",
      vegetable: "タケノコ（真竹）、新じゃがいも、えんどう豆",
      flower: "バラ、スズラン、ジャスミン"
    },
    imageFile: "photos/rikka-makko.jpg",
    kotoba: "竹の子が一夜で伸び、\n初夏の力強さを見せる。",
    aroma: "竹・土・若葉"
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // 小満（しょうまん）5月21日〜
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    startMonth: 5, startDay: 21,
    sekki: "小満", sekkiReading: "しょうまん",
    kou: "蚕起食桑", kouReading: "かいこおきてくわをはむ",
    kouNumber: 22, position: "初候",
    color1: "#F0E870", color2: "#F8F4A8",
    kasaneNa: "黄朽葉", kasaneReading: "きくちば",
    info: {
      description: "蚕が桑の葉を食べ始める頃。かつて日本の基幹産業だった養蚕の季節が始まります。",
      lifestyle: "初夏の陽気が続く時期。紫外線対策を忘れずに。",
      customs: "各地で田植えが始まる時期。水田に苗が植えられ、初夏の風景が広がります。",
      fish: "アジ、カツオ、スズキ",
      vegetable: "新じゃがいも、えんどう豆、そら豆",
      flower: "バラ（最盛期）、クレマチス、ジャスミン"
    },
    imageFile: "photos/shoman-shoko.jpg",
    kotoba: "蚕が桑を食べ、\n絹の糸が生まれる。",
    aroma: "桑・若葉・初夏の風"
  },
  {
    startMonth: 5, startDay: 26,
    sekki: "小満", sekkiReading: "しょうまん",
    kou: "紅花栄", kouReading: "べにばなさかう",
    kouNumber: 23, position: "次候",
    color1: "#F08030", color2: "#F8B870",
    kasaneNa: "紅花", kasaneReading: "べにばな",
    info: {
      description: "紅花が咲き誇る頃。山形県などで紅花が鮮やかに咲き、初夏の野を彩ります。",
      lifestyle: "梅雨入り前の晴れた日を有効活用しましょう。衣替えや大掃除に最適な時期です。",
      customs: "山形の紅花まつりが開催される時期。紅花は染料や化粧品の原料として古くから珍重されてきました。",
      fish: "アジ、サバ、スズキ",
      vegetable: "トマト（早いもの）、きゅうり、ズッキーニ",
      flower: "紅花、バラ、ラベンダー（早いもの）"
    },
    imageFile: "photos/shoman-jiko.jpg",
    kotoba: "紅花が鮮やかに咲き、\n夏の色が溢れる。",
    aroma: "紅花・薔薇・初夏"
  },
  {
    startMonth: 5, startDay: 31,
    sekki: "小満", sekkiReading: "しょうまん",
    kou: "麦秋至", kouReading: "むぎのときいたる",
    kouNumber: 24, position: "末候",
    color1: "#D8C870", color2: "#ECD898",
    kasaneNa: "麦藁", kasaneReading: "むぎわら",
    info: {
      description: "麦が黄金色に実り、収穫の時期を迎える頃。麦畑が黄金色に輝きます。",
      lifestyle: "衣替えの季節（6月1日）。夏服に衣替えをする時期です。",
      customs: "麦の収穫が始まる時期。各地で麦まつりが開催されます。",
      fish: "アジ、イサキ、スズキ",
      vegetable: "新じゃがいも、トマト、きゅうり",
      flower: "アジサイ（早いもの）、ラベンダー、バラ"
    },
    imageFile: "photos/shoman-makko.jpg",
    kotoba: "麦が黄金色に実り、\n初夏の収穫が始まる。",
    aroma: "麦・土・初夏の風"
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // 芒種（ぼうしゅ）6月6日〜
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    startMonth: 6, startDay: 6,
    sekki: "芒種", sekkiReading: "ぼうしゅ",
    kou: "蟷螂生", kouReading: "かまきりしょうず",
    kouNumber: 25, position: "初候",
    color1: "#58A858", color2: "#90C890",
    kasaneNa: "青", kasaneReading: "あお",
    info: {
      description: "カマキリが生まれる頃。卵から孵ったカマキリの子どもたちが草むらに現れます。",
      lifestyle: "梅雨入りの時期。雨の日の過ごし方を工夫しましょう。読書や室内での趣味を楽しむ機会です。",
      customs: "梅の実が熟す季節。梅酒や梅干しの仕込みを始める時期です。",
      fish: "アジ、イサキ、スズキ",
      vegetable: "梅、トマト、きゅうり",
      flower: "アジサイ、ラベンダー、バラ"
    },
    imageFile: "photos/boshu-shoko.jpg",
    kotoba: "カマキリが生まれ、\n夏の狩人が現れる。",
    aroma: "草・土・夏の風"
  },
  {
    startMonth: 6, startDay: 11,
    sekki: "芒種", sekkiReading: "ぼうしゅ",
    kou: "腐草為蛍", kouReading: "くされたるくさほたるとなる",
    kouNumber: 26, position: "次候",
    color1: "#C8E870", color2: "#E0F4A0",
    kasaneNa: "蛍", kasaneReading: "ほたる",
    info: {
      description: "蛍が飛び始める頃。古人は腐った草が蛍になると考えていました。幻想的な蛍の光が夜を彩ります。",
      lifestyle: "蛍観賞の季節。清流のある場所で蛍の乱舞を楽しみましょう。",
      customs: "入梅（梅雨入りの目安）の頃。梅の実を漬けて梅干しや梅酒を作る時期です。",
      fish: "アジ、スズキ、ハモ",
      vegetable: "梅（完熟）、トマト、きゅうり",
      flower: "アジサイ（最盛期）、ラベンダー、ハナショウブ"
    },
    imageFile: "photos/boshu-jiko.jpg",
    kotoba: "草むらに蛍が舞い、\n夏の夜が輝く。",
    aroma: "蛍・草・夜露"
  },
  {
    startMonth: 6, startDay: 16,
    sekki: "芒種", sekkiReading: "ぼうしゅ",
    kou: "梅子黄", kouReading: "うめのみきばむ",
    kouNumber: 27, position: "末候",
    color1: "#D8E870", color2: "#ECF4A0",
    kasaneNa: "黄梅", kasaneReading: "こうばい",
    info: {
      description: "梅の実が黄色く熟す頃。梅雨の雨を受けて、梅の実が黄金色に色づきます。",
      lifestyle: "梅干し・梅酒・梅シロップの仕込みに最適な時期。完熟梅を使って手作りしてみましょう。",
      customs: "父の日（6月第3日曜日）。感謝の気持ちを伝えましょう。",
      fish: "アジ、ハモ、スズキ",
      vegetable: "梅（完熟）、トマト、ナス",
      flower: "アジサイ、ラベンダー、ハスの花（早いもの）"
    },
    imageFile: "photos/boshu-makko.jpg",
    kotoba: "梅の実が黄色く熟し、\n梅雨の季節が来る。",
    aroma: "梅・雨・緑"
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // 夏至（げし）6月21日〜
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    startMonth: 6, startDay: 21,
    sekki: "夏至", sekkiReading: "げし",
    kou: "乃東枯", kouReading: "なつかれくさかるる",
    kouNumber: 28, position: "初候",
    color1: "#D87040", color2: "#ECA870",
    kasaneNa: "夏草", kasaneReading: "なつくさ",
    info: {
      description: "夏枯草（ウツボグサ）が枯れる頃。一年で最も昼が長い夏至を迎えます。",
      lifestyle: "夏至の日は一年で最も日照時間が長い日。キャンドルナイトなどのイベントが各地で開催されます。",
      customs: "夏至には関西でタコを食べる習慣があります。田の神様に豊作を祈る行事です。",
      fish: "ハモ、アジ、スズキ",
      vegetable: "トマト、ナス、きゅうり",
      flower: "ハス、ラベンダー、ヒマワリ（早いもの）"
    },
    imageFile: "photos/geshi-shoko.jpg",
    kotoba: "夏枯草が枯れ始め、\n夏至の光が降り注ぐ。",
    aroma: "草・夏の光・土"
  },
  {
    startMonth: 6, startDay: 26,
    sekki: "夏至", sekkiReading: "げし",
    kou: "菖蒲華", kouReading: "あやめはなさく",
    kouNumber: 29, position: "次候",
    color1: "#9870C8", color2: "#C0A0E0",
    kasaneNa: "菖蒲", kasaneReading: "あやめ",
    info: {
      description: "アヤメが咲く頃。紫色の美しいアヤメが、梅雨の晴れ間に咲き誇ります。",
      lifestyle: "梅雨の中休みを利用して、アヤメ園や花菖蒲園を訪れてみましょう。",
      customs: "各地でアヤメまつりや花菖蒲まつりが開催されます。",
      fish: "ハモ、アジ、イサキ",
      vegetable: "トマト、ナス、ピーマン",
      flower: "アヤメ、ハナショウブ、ハス"
    },
    imageFile: "photos/geshi-jiko.jpg",
    kotoba: "菖蒲が凛と咲き、\n夏の清々しさを纏う。",
    aroma: "菖蒲・雨・清水"
  },
  {
    startMonth: 7, startDay: 2,
    sekki: "夏至", sekkiReading: "げし",
    kou: "半夏生", kouReading: "はんげしょうず",
    kouNumber: 30, position: "末候",
    color1: "#F0F0F0", color2: "#FFFFFF",
    kasaneNa: "白", kasaneReading: "しろ",
    info: {
      description: "半夏（カラスビシャク）が生える頃。農家では田植えを終える目安とされてきました。",
      lifestyle: "半夏生（7月2日頃）には関西でタコを食べる習慣があります。田植えの労をねぎらう行事食です。",
      customs: "各地で夏祭りの準備が始まる時期。祇園祭（京都）の山鉾建てが始まります。",
      fish: "タコ、ハモ、アジ",
      vegetable: "トマト、ナス、ゴーヤ",
      flower: "ハス、ハンゲショウ、ヒマワリ"
    },
    imageFile: "photos/geshi-makko.jpg",
    kotoba: "半夏が白く染まり、\n夏の盛りを告げる。",
    aroma: "草・土・夏雨"
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // 小暑（しょうしょ）7月7日〜
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    startMonth: 7, startDay: 7,
    sekki: "小暑", sekkiReading: "しょうしょ",
    kou: "温風至", kouReading: "あつかぜいたる",
    kouNumber: 31, position: "初候",
    color1: "#F07030", color2: "#F8A870",
    kasaneNa: "赤", kasaneReading: "あか",
    info: {
      description: "熱風が吹き始める頃。梅雨が明けに近づき、本格的な夏の暑さが訪れます。",
      lifestyle: "七夕（7月7日）。短冊に願いを書いて笹に飾る日本の夏の風物詩です。",
      customs: "祇園祭（京都）が最盛期を迎えます。山鉾巡行（7月17日）は圧巻の見どころです。",
      fish: "ハモ、アジ、スズキ",
      vegetable: "トマト、ナス、ゴーヤ",
      flower: "ヒマワリ、ハス、朝顔"
    },
    imageFile: "photos/shosho-shoko.jpg",
    kotoba: "温かい風が吹き始め、\n本格的な夏が来る。",
    aroma: "海・夏の風・塩"
  },
  {
    startMonth: 7, startDay: 12,
    sekki: "小暑", sekkiReading: "しょうしょ",
    kou: "蓮始開", kouReading: "はすはじめてひらく",
    kouNumber: 32, position: "次候",
    color1: "#F0A0C0", color2: "#F8D0DC",
    kasaneNa: "蓮", kasaneReading: "はす",
    info: {
      description: "蓮の花が咲き始める頃。夜明けとともに開く蓮の花は、清浄さの象徴です。",
      lifestyle: "蓮の花は早朝に開きます。早起きして蓮池を訪れてみましょう。",
      customs: "お盆の準備が始まる時期（新盆の地域）。精霊棚の用意をする家庭もあります。",
      fish: "ハモ、アジ、ウナギ",
      vegetable: "ゴーヤ、トマト、オクラ",
      flower: "ハス（最盛期）、ヒマワリ、朝顔"
    },
    imageFile: "photos/shosho-jiko.jpg",
    kotoba: "蓮の花が水面に開き、\n清らかな夏の朝。",
    aroma: "蓮・水・朝露"
  },
  {
    startMonth: 7, startDay: 17,
    sekki: "小暑", sekkiReading: "しょうしょ",
    kou: "鷹乃学習", kouReading: "たかすなわちわざをならう",
    kouNumber: 33, position: "末候",
    color1: "#7898C8", color2: "#A8B8E0",
    kasaneNa: "空色", kasaneReading: "そらいろ",
    info: {
      description: "鷹の雛が飛ぶ練習をする頃。夏の青空に鷹が舞い、力強く羽ばたく姿が見られます。",
      lifestyle: "海の日（7月第3月曜日）。海水浴や海辺のレジャーを楽しみましょう。",
      customs: "土用の丑の日（7月下旬）が近づきます。ウナギを食べて夏の暑さに備えましょう。",
      fish: "ウナギ、アジ、スズキ",
      vegetable: "トウモロコシ、ゴーヤ、オクラ",
      flower: "ヒマワリ、朝顔、百日草"
    },
    imageFile: "photos/shosho-makko.jpg",
    kotoba: "若い鷹が飛び方を学び、\n夏の空を羽ばたく。",
    aroma: "夏の風・草・土"
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // 大暑（たいしょ）7月23日〜
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    startMonth: 7, startDay: 23,
    sekki: "大暑", sekkiReading: "たいしょ",
    kou: "桐始結花", kouReading: "きりはじめてはなをむすぶ",
    kouNumber: 34, position: "初候",
    color1: "#9870B8", color2: "#C0A0D8",
    kasaneNa: "桐", kasaneReading: "きり",
    info: {
      description: "桐の木が花芽を結ぶ頃。一年で最も暑い大暑を迎えます。",
      lifestyle: "熱中症対策を万全に。こまめな水分補給と適切な休憩を心がけましょう。",
      customs: "土用の丑の日。ウナギを食べて夏バテを防ぐ日本の伝統的な習慣です。",
      fish: "ウナギ、アジ、スズキ",
      vegetable: "トウモロコシ、スイカ、ゴーヤ",
      flower: "ヒマワリ、朝顔、フヨウ"
    },
    imageFile: "photos/taisho-shoko.jpg",
    kotoba: "桐が花芽を結び、\n来年の春を準備する。",
    aroma: "桐・夏の風・土"
  },
  {
    startMonth: 7, startDay: 28,
    sekki: "大暑", sekkiReading: "たいしょ",
    kou: "土潤溽暑", kouReading: "つちうるおいてむしあつし",
    kouNumber: 35, position: "次候",
    color1: "#D87840", color2: "#ECA870",
    kasaneNa: "夏", kasaneReading: "なつ",
    info: {
      description: "大地が湿気を帯び、蒸し暑くなる頃。日本の夏特有の蒸し暑さが最高潮に達します。",
      lifestyle: "夏祭りの季節。各地で花火大会や盆踊りが開催されます。",
      customs: "各地で夏祭りが最盛期を迎えます。浴衣を着て夏の夜を楽しみましょう。",
      fish: "アジ、スズキ、タチウオ",
      vegetable: "スイカ、トウモロコシ、ナス",
      flower: "ヒマワリ、フヨウ、百日草"
    },
    imageFile: "photos/taisho-jiko.jpg",
    kotoba: "土が蒸し暑く湿り、\n夏の熱気が満ちる。",
    aroma: "土・夏雨・草"
  },
  {
    startMonth: 8, startDay: 2,
    sekki: "大暑", sekkiReading: "たいしょ",
    kou: "大雨時行", kouReading: "たいうときどきにふる",
    kouNumber: 36, position: "末候",
    color1: "#5878B8", color2: "#88A8D8",
    kasaneNa: "雨", kasaneReading: "あめ",
    info: {
      description: "大きな雨が時々降る頃。夏の夕立が激しく降り、大地を潤します。",
      lifestyle: "夕立の後は気温が下がり、少し過ごしやすくなります。夕涼みを楽しみましょう。",
      customs: "各地で花火大会が最盛期を迎えます。夏の夜空を彩る花火を楽しみましょう。",
      fish: "アジ、スズキ、タチウオ",
      vegetable: "スイカ、ゴーヤ、オクラ",
      flower: "ヒマワリ、フヨウ、ミソハギ"
    },
    imageFile: "photos/taisho-makko.jpg",
    kotoba: "時折大雨が降り注ぎ、\n夏の大地を洗う。",
    aroma: "雨・土・草"
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // 立秋（りっしゅう）8月7日〜
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    startMonth: 8, startDay: 7,
    sekki: "立秋", sekkiReading: "りっしゅう",
    kou: "涼風至", kouReading: "すずかぜいたる",
    kouNumber: 37, position: "初候",
    color1: "#88B8D8", color2: "#B8D4E8",
    kasaneNa: "秋空", kasaneReading: "あきぞら",
    info: {
      description: "涼しい風が吹き始める頃。暦の上では秋の始まり。朝夕に少し涼しさが感じられます。",
      lifestyle: "残暑見舞いを出す時期。立秋を過ぎたら「残暑見舞い」に切り替えましょう。",
      customs: "お盆（8月13〜16日）の準備を始める時期。迎え火・送り火の準備をしましょう。",
      fish: "アジ、サンマ（早いもの）、スズキ",
      vegetable: "ナス、トウモロコシ、枝豆",
      flower: "ヒマワリ、フヨウ、ミソハギ"
    },
    imageFile: "photos/risshu-shoko.jpg",
    kotoba: "涼しい風が吹き始め、\n秋の気配が漂う。",
    aroma: "秋風・草・土"
  },
  {
    startMonth: 8, startDay: 13,
    sekki: "立秋", sekkiReading: "りっしゅう",
    kou: "寒蝉鳴", kouReading: "ひぐらしなく",
    kouNumber: 38, position: "次候",
    color1: "#D8A858", color2: "#ECC888",
    kasaneNa: "秋草", kasaneReading: "あきくさ",
    info: {
      description: "ヒグラシが鳴く頃。夕暮れ時に「カナカナ」と鳴くヒグラシの声が、秋の訪れを告げます。",
      lifestyle: "お盆（8月13〜16日）。ご先祖様を迎え、家族で過ごす時間を大切にしましょう。",
      customs: "迎え火（8月13日）・送り火（8月16日）。京都の大文字送り火は有名です。",
      fish: "アジ、サンマ、スズキ",
      vegetable: "ナス、ピーマン、枝豆",
      flower: "ミソハギ、オミナエシ、キキョウ"
    },
    imageFile: "photos/risshu-jiko.jpg",
    kotoba: "ひぐらしが鳴き始め、\n夕暮れに秋を感じる。",
    aroma: "草・夕暮れ・秋風"
  },
  {
    startMonth: 8, startDay: 18,
    sekki: "立秋", sekkiReading: "りっしゅう",
    kou: "蒙霧升降", kouReading: "ふかききりまとう",
    kouNumber: 39, position: "末候",
    color1: "#A8B8C8", color2: "#C8D4DC",
    kasaneNa: "霧", kasaneReading: "きり",
    info: {
      description: "深い霧が立ち込める頃。朝晩に霧が発生し、秋の気配が濃くなります。",
      lifestyle: "夏の疲れが出やすい時期。十分な睡眠と栄養補給を心がけましょう。",
      customs: "各地で秋祭りの準備が始まります。",
      fish: "サンマ（早いもの）、アジ、スズキ",
      vegetable: "ナス、ピーマン、シシトウ",
      flower: "ハギ、キキョウ、オミナエシ"
    },
    imageFile: "photos/risshu-makko.jpg",
    kotoba: "深い霧が立ち込め、\n秋の神秘が漂う。",
    aroma: "霧・草・秋風"
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // 処暑（しょしょ）8月23日〜
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    startMonth: 8, startDay: 23,
    sekki: "処暑", sekkiReading: "しょしょ",
    kou: "綿柎開", kouReading: "わたのはなしべひらく",
    kouNumber: 40, position: "初候",
    color1: "#F0F0E8", color2: "#FFFFFF",
    kasaneNa: "白綿", kasaneReading: "しろわた",
    info: {
      description: "綿の花のガクが開く頃。白い綿毛が広がり、秋の訪れを感じさせます。",
      lifestyle: "処暑は暑さが収まる頃。夏の疲れをリセットして、秋に向けた準備を始めましょう。",
      customs: "二百十日（9月1日頃）は台風の特異日。防災グッズの点検をしましょう。",
      fish: "サンマ、アジ、スズキ",
      vegetable: "ナス、ピーマン、オクラ",
      flower: "ハギ、キキョウ、コスモス（早いもの）"
    },
    imageFile: "photos/shosho-2-shoko.jpg",
    kotoba: "綿の花が開き始め、\n秋の白さが広がる。",
    aroma: "綿・秋風・草"
  },
  {
    startMonth: 8, startDay: 28,
    sekki: "処暑", sekkiReading: "しょしょ",
    kou: "天地始粛", kouReading: "てんちはじめてさむし",
    kouNumber: 41, position: "次候",
    color1: "#A8C8A8", color2: "#C8E0C8",
    kasaneNa: "秋緑", kasaneReading: "あきみどり",
    info: {
      description: "天地の気が引き締まり始める頃。夏の勢いが衰え、秋の静けさが訪れます。",
      lifestyle: "夏休みが終わり、新学期が始まる時期。生活リズムを整えましょう。",
      customs: "各地で秋の収穫祭の準備が始まります。",
      fish: "サンマ、アジ、カツオ（戻り鰹）",
      vegetable: "サツマイモ（早いもの）、ナス、ピーマン",
      flower: "コスモス、ハギ、彼岸花（早いもの）"
    },
    imageFile: "photos/shosho-2-jiko.jpg",
    kotoba: "天地が静まり始め、\n秋の静寂が訪れる。",
    aroma: "秋風・土・草"
  },
  {
    startMonth: 9, startDay: 2,
    sekki: "処暑", sekkiReading: "しょしょ",
    kou: "禾乃登", kouReading: "こくものすなわちみのる",
    kouNumber: 42, position: "末候",
    color1: "#D8C870", color2: "#ECD898",
    kasaneNa: "稲穂", kasaneReading: "いなほ",
    info: {
      description: "稲が実る頃。黄金色の稲穂が頭を垂れ、秋の収穫の季節が近づきます。",
      lifestyle: "防災の日（9月1日）。防災訓練に参加し、緊急時の備えを確認しましょう。",
      customs: "各地で稲刈りが始まる時期。新米の季節が待ち遠しいですね。",
      fish: "サンマ、カツオ（戻り鰹）、アジ",
      vegetable: "サツマイモ、栗（早いもの）、ナス",
      flower: "コスモス、彼岸花、ハギ"
    },
    imageFile: "photos/shosho-2-makko.jpg",
    kotoba: "稲穂が黄金色に実り、\n秋の収穫を迎える。",
    aroma: "稲・土・秋風"
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // 白露（はくろ）9月7日〜
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    startMonth: 9, startDay: 7,
    sekki: "白露", sekkiReading: "はくろ",
    kou: "草露白", kouReading: "くさつゆしろし",
    kouNumber: 43, position: "初候",
    color1: "#D8E8F0", color2: "#ECF4F8",
    kasaneNa: "白露", kasaneReading: "しらつゆ",
    info: {
      description: "草に白い露が宿る頃。朝晩の冷え込みが増し、草の葉に白い露が光ります。",
      lifestyle: "朝晩の気温差が大きくなる時期。体調管理に気をつけましょう。",
      customs: "重陽の節句（9月9日）。菊の花を飾り、菊酒を飲んで長寿を祈ります。",
      fish: "サンマ、カツオ（戻り鰹）、アジ",
      vegetable: "栗、サツマイモ、松茸（早いもの）",
      flower: "彼岸花、コスモス、菊"
    },
    imageFile: "photos/hakuro-shoko.jpg",
    kotoba: "草に白い露が宿り、\n秋の朝が輝く。",
    aroma: "露・草・秋風"
  },
  {
    startMonth: 9, startDay: 13,
    sekki: "白露", sekkiReading: "はくろ",
    kou: "鶺鴒鳴", kouReading: "せきれいなく",
    kouNumber: 44, position: "次候",
    color1: "#88A8C8", color2: "#B0C8DC",
    kasaneNa: "秋空", kasaneReading: "あきぞら",
    info: {
      description: "セキレイが鳴き始める頃。水辺でセキレイが尾を上下に振りながら鳴く姿が見られます。",
      lifestyle: "中秋の名月（旧暦8月15日）が近い時期。お月見の準備をしましょう。",
      customs: "お月見（十五夜）。ススキを飾り、月見団子を供えて月を愛でる日本の秋の風物詩です。",
      fish: "サンマ（最盛期）、カツオ（戻り鰹）、アジ",
      vegetable: "栗、サツマイモ、松茸",
      flower: "コスモス、彼岸花、菊"
    },
    imageFile: "photos/hakuro-jiko.jpg",
    kotoba: "セキレイが鳴き始め、\n秋の水辺が賑わう。",
    aroma: "水・草・秋風"
  },
  {
    startMonth: 9, startDay: 18,
    sekki: "白露", sekkiReading: "はくろ",
    kou: "玄鳥去", kouReading: "つばめさる",
    kouNumber: 45, position: "末候",
    color1: "#7888B8", color2: "#A8B4D4",
    kasaneNa: "秋空", kasaneReading: "あきぞら",
    info: {
      description: "ツバメが南へ帰る頃。春に渡ってきたツバメが、南の国へ旅立ちます。",
      lifestyle: "秋のお彼岸（9月20日頃）。お墓参りをして先祖を供養しましょう。",
      customs: "秋分の日（9月23日）に向けて、お彼岸の準備をする時期。おはぎを作る家庭も多いです。",
      fish: "サンマ、カツオ（戻り鰹）、ブリ（早いもの）",
      vegetable: "栗、サツマイモ、松茸",
      flower: "彼岸花（最盛期）、コスモス、菊"
    },
    imageFile: "photos/hakuro-makko.jpg",
    kotoba: "燕が南へ旅立ち、\n秋の空が広がる。",
    aroma: "秋風・草・空"
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // 秋分（しゅうぶん）9月23日〜
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    startMonth: 9, startDay: 23,
    sekki: "秋分", sekkiReading: "しゅうぶん",
    kou: "雷乃収声", kouReading: "かみなりすなわちこえをおさむ",
    kouNumber: 46, position: "初候",
    color1: "#A8A8A8", color2: "#C8C8C8",
    kasaneNa: "薄墨", kasaneReading: "うすずみ",
    info: {
      description: "雷が鳴らなくなる頃。秋分を迎え、昼と夜の長さが等しくなります。",
      lifestyle: "秋分の日（9月23日）は国民の祝日。自然をたたえ、生き物を慈しむ日です。",
      customs: "秋のお彼岸の中日。お墓参りをして先祖を供養します。おはぎを供える習慣があります。",
      fish: "サンマ、カツオ（戻り鰹）、ブリ",
      vegetable: "栗、サツマイモ、松茸",
      flower: "コスモス、菊、ダリア"
    },
    imageFile: "photos/shubun-shoko.jpg",
    kotoba: "雷が静まり、\n秋の静けさが戻る。",
    aroma: "秋風・草・土"
  },
  {
    startMonth: 9, startDay: 28,
    sekki: "秋分", sekkiReading: "しゅうぶん",
    kou: "蟄虫坏戸", kouReading: "むしかくれてとをふさぐ",
    kouNumber: 47, position: "次候",
    color1: "#B8A870", color2: "#D4C898",
    kasaneNa: "朽葉", kasaneReading: "くちば",
    info: {
      description: "虫たちが土の中に隠れ始める頃。秋が深まり、虫たちが冬ごもりの準備を始めます。",
      lifestyle: "秋の夜長を楽しむ時期。読書や芸術鑑賞など、文化的な活動を楽しみましょう。",
      customs: "各地で秋祭りが最盛期を迎えます。",
      fish: "サンマ、ブリ、カキ（早いもの）",
      vegetable: "サツマイモ、栗、キノコ類",
      flower: "コスモス（最盛期）、菊、ダリア"
    },
    imageFile: "photos/shubun-jiko.jpg",
    kotoba: "虫たちが土に戻り、\n秋の深まりを感じる。",
    aroma: "土・草・秋風"
  },
  {
    startMonth: 10, startDay: 3,
    sekki: "秋分", sekkiReading: "しゅうぶん",
    kou: "水始涸", kouReading: "みずはじめてかるる",
    kouNumber: 48, position: "末候",
    color1: "#C8A858", color2: "#E0C888",
    kasaneNa: "黄葉", kasaneReading: "もみじ",
    info: {
      description: "田んぼの水が干上がり始める頃。稲刈りが終わり、田んぼが乾いていきます。",
      lifestyle: "秋の行楽シーズン。紅葉の便りが届き始める頃です。",
      customs: "各地で稲刈りが終わり、収穫祭が行われます。",
      fish: "サンマ、ブリ、カキ",
      vegetable: "サツマイモ、栗、柿",
      flower: "菊、コスモス、ダリア"
    },
    imageFile: "photos/shubun-makko.jpg",
    kotoba: "水が少なくなり始め、\n秋の乾燥が訪れる。",
    aroma: "土・秋風・草"
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // 寒露（かんろ）10月8日〜
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    startMonth: 10, startDay: 8,
    sekki: "寒露", sekkiReading: "かんろ",
    kou: "鴻雁来", kouReading: "こうがんきたる",
    kouNumber: 49, position: "初候",
    color1: "#8898C8", color2: "#B0B8DC",
    kasaneNa: "秋空", kasaneReading: "あきぞら",
    info: {
      description: "雁が北から渡ってくる頃。秋の空に雁の群れが「V」字を描いて飛んでいきます。",
      lifestyle: "体育の日（10月第2月曜日）。スポーツの秋を楽しみましょう。",
      customs: "秋祭りの季節。各地の神社で秋の例大祭が行われます。",
      fish: "サンマ、ブリ、カキ",
      vegetable: "栗、サツマイモ、柿",
      flower: "菊、コスモス、ダリア"
    },
    imageFile: "photos/kanro-shoko.jpg",
    kotoba: "雁が南へ渡り来て、\n秋の空を彩る。",
    aroma: "秋風・草・土"
  },
  {
    startMonth: 10, startDay: 13,
    sekki: "寒露", sekkiReading: "かんろ",
    kou: "菊花開", kouReading: "きくのはなひらく",
    kouNumber: 50, position: "次候",
    color1: "#D8C840", color2: "#ECE070",
    kasaneNa: "菊", kasaneReading: "きく",
    info: {
      description: "菊の花が咲く頃。日本の国花のひとつ、菊が秋の野を彩ります。",
      lifestyle: "菊まつりの季節。各地で菊の品評会や菊人形展が開催されます。",
      customs: "重陽の節句（9月9日）の名残で、菊を愛でる習慣が続きます。",
      fish: "ブリ、カキ、サバ",
      vegetable: "柿、栗、サツマイモ",
      flower: "菊（最盛期）、コスモス、ダリア"
    },
    imageFile: "photos/kanro-jiko.jpg",
    kotoba: "菊の花が咲き誇り、\n秋の香りが漂う。",
    aroma: "菊・秋風・土"
  },
  {
    startMonth: 10, startDay: 18,
    sekki: "寒露", sekkiReading: "かんろ",
    kou: "蟋蟀在戸", kouReading: "きりぎりすとにあり",
    kouNumber: 51, position: "末候",
    color1: "#B8A888", color2: "#D4C8A8",
    kasaneNa: "枯野", kasaneReading: "かれの",
    info: {
      description: "コオロギが戸口で鳴く頃。秋の夜長に虫の声が響き、秋の深まりを感じます。",
      lifestyle: "秋の夜長に虫の音を楽しみましょう。読書や芸術鑑賞にも最適な季節です。",
      customs: "各地で紅葉が始まる時期。紅葉狩りの計画を立てましょう。",
      fish: "ブリ、カキ、サバ",
      vegetable: "柿、栗、ゴボウ",
      flower: "菊、ダリア、山茶花（早いもの）"
    },
    imageFile: "photos/kanro-makko.jpg",
    kotoba: "コオロギが戸口で鳴き、\n秋の夜長を奏でる。",
    aroma: "草・土・秋風"
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // 霜降（そうこう）10月23日〜
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    startMonth: 10, startDay: 23,
    sekki: "霜降", sekkiReading: "そうこう",
    kou: "霜始降", kouReading: "しもはじめてふる",
    kouNumber: 52, position: "初候",
    color1: "#C8C8D8", color2: "#E0E0EC",
    kasaneNa: "霜", kasaneReading: "しも",
    info: {
      description: "霜が降り始める頃。朝の気温が下がり、野原に白い霜が降ります。",
      lifestyle: "霜降りの季節。朝晩の冷え込みが厳しくなります。暖房器具の準備をしましょう。",
      customs: "各地で紅葉が最盛期を迎える時期。紅葉狩りを楽しみましょう。",
      fish: "ブリ、カキ、サバ",
      vegetable: "柿、ゴボウ、レンコン",
      flower: "菊、山茶花、ダリア"
    },
    imageFile: "photos/soko-shoko.jpg",
    kotoba: "初霜が降り始め、\n秋の終わりを告げる。",
    aroma: "霜・土・秋風"
  },
  {
    startMonth: 10, startDay: 28,
    sekki: "霜降", sekkiReading: "そうこう",
    kou: "霎時施", kouReading: "こさめときどきふる",
    kouNumber: 53, position: "次候",
    color1: "#9898A8", color2: "#B8B8C4",
    kasaneNa: "時雨", kasaneReading: "しぐれ",
    info: {
      description: "小雨がときどき降る頃。秋の時雨が降り、紅葉を一層美しく彩ります。",
      lifestyle: "時雨の季節。傘を持ち歩く習慣をつけましょう。",
      customs: "紅葉狩りの最盛期。各地の紅葉名所が見頃を迎えます。",
      fish: "ブリ、カキ、タラ（早いもの）",
      vegetable: "柿、ゴボウ、レンコン",
      flower: "山茶花、菊、ツワブキ"
    },
    imageFile: "photos/soko-jiko.jpg",
    kotoba: "小雨が時折降り、\n秋の空が泣く。",
    aroma: "雨・土・秋風"
  },
  {
    startMonth: 11, startDay: 2,
    sekki: "霜降", sekkiReading: "そうこう",
    kou: "楓蔦黄", kouReading: "もみじつたきばむ",
    kouNumber: 54, position: "末候",
    color1: "#D87040", color2: "#ECA870",
    kasaneNa: "紅葉", kasaneReading: "もみじ",
    info: {
      description: "モミジやツタが黄色く色づく頃。秋の紅葉が最も美しい時期を迎えます。",
      lifestyle: "紅葉狩りの最盛期。各地の紅葉名所を訪れましょう。",
      customs: "文化の日（11月3日）。各地で文化的なイベントが開催されます。",
      fish: "ブリ、カキ、タラ",
      vegetable: "柿、ゴボウ、レンコン",
      flower: "山茶花、ツワブキ、菊"
    },
    imageFile: "photos/soko-makko.jpg",
    kotoba: "紅葉と蔦が黄金に染まり、\n秋の絵巻が広がる。",
    aroma: "紅葉・土・秋風"
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // 立冬（りっとう）11月7日〜
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    startMonth: 11, startDay: 7,
    sekki: "立冬", sekkiReading: "りっとう",
    kou: "山茶始開", kouReading: "つばきはじめてひらく",
    kouNumber: 55, position: "初候",
    color1: "#D85870", color2: "#ECA0B0",
    kasaneNa: "山茶花", kasaneReading: "さざんか",
    info: {
      description: "山茶花（サザンカ）が咲き始める頃。暦の上では冬の始まり。サザンカの花が冬の到来を告げます。",
      lifestyle: "冬支度を始める時期。コートや手袋など、防寒具を準備しましょう。",
      customs: "七五三（11月15日）。子どもの成長を祝い、神社に参拝する日本の伝統行事です。",
      fish: "ブリ、カキ、タラ",
      vegetable: "白菜、大根、ネギ",
      flower: "山茶花（サザンカ）、菊、ツワブキ"
    },
    imageFile: "photos/ritto-shoko.jpg",
    kotoba: "山茶花が咲き始め、\n冬の訪れを告げる。",
    aroma: "山茶花・冬風・土"
  },
  {
    startMonth: 11, startDay: 12,
    sekki: "立冬", sekkiReading: "りっとう",
    kou: "地始凍", kouReading: "ちはじめてこおる",
    kouNumber: 56, position: "次候",
    color1: "#8898B8", color2: "#B0B8D0",
    kasaneNa: "冬空", kasaneReading: "ふゆぞら",
    info: {
      description: "大地が凍り始める頃。朝の気温が氷点下になり、地面が凍りつきます。",
      lifestyle: "路面凍結に注意する時期。滑りにくい靴を選び、足元に気をつけましょう。",
      customs: "七五三（11月15日）。千歳飴を持って神社に参拝する子どもたちの姿が見られます。",
      fish: "ブリ、タラ、カキ",
      vegetable: "白菜、大根、ほうれん草",
      flower: "山茶花、菊（晩菊）、ビオラ"
    },
    imageFile: "photos/ritto-jiko.jpg",
    kotoba: "大地が凍り始め、\n冬の静寂が訪れる。",
    aroma: "土・冬風・霜"
  },
  {
    startMonth: 11, startDay: 17,
    sekki: "立冬", sekkiReading: "りっとう",
    kou: "金盞香", kouReading: "きんせんかさく",
    kouNumber: 57, position: "末候",
    color1: "#E8C840", color2: "#F4E070",
    kasaneNa: "金盞花", kasaneReading: "きんせんか",
    info: {
      description: "水仙の花が咲く頃（金盞花は水仙の別名）。冬の寒さの中、水仙が清楚に咲きます。",
      lifestyle: "勤労感謝の日（11月23日）が近い時期。日頃の感謝を伝えましょう。",
      customs: "酉の市（11月の酉の日）。熊手を買って商売繁盛を祈る江戸の風物詩です。",
      fish: "ブリ、タラ、カキ",
      vegetable: "白菜、大根、ネギ",
      flower: "水仙、山茶花、ビオラ"
    },
    imageFile: "photos/ritto-makko.jpg",
    kotoba: "水仙の香りが漂い、\n冬の清らかさを纏う。",
    aroma: "水仙・冬風・土"
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // 小雪（しょうせつ）11月22日〜
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    startMonth: 11, startDay: 22,
    sekki: "小雪", sekkiReading: "しょうせつ",
    kou: "虹蔵不見", kouReading: "にじかくれてみえず",
    kouNumber: 58, position: "初候",
    color1: "#A8B8C8", color2: "#C8D4DC",
    kasaneNa: "冬空", kasaneReading: "ふゆぞら",
    info: {
      description: "虹が見えなくなる頃。冬の曇り空が続き、虹が現れにくくなります。",
      lifestyle: "小雪の頃から冬の準備を本格化。鍋料理や温かい飲み物で体を温めましょう。",
      customs: "勤労感謝の日（11月23日）。収穫に感謝し、勤労を尊ぶ国民の祝日です。",
      fish: "ブリ、タラ、カキ",
      vegetable: "白菜、大根、ほうれん草",
      flower: "水仙、山茶花、ビオラ"
    },
    imageFile: "photos/shosetsu-shoko.jpg",
    kotoba: "虹が隠れて見えなくなり、\n冬の空が広がる。",
    aroma: "冬風・土・松"
  },
  {
    startMonth: 11, startDay: 27,
    sekki: "小雪", sekkiReading: "しょうせつ",
    kou: "朔風払葉", kouReading: "きたかぜこのはをはらう",
    kouNumber: 59, position: "次候",
    color1: "#7888A8", color2: "#A8B4C8",
    kasaneNa: "北風", kasaneReading: "きたかぜ",
    info: {
      description: "北風が木の葉を吹き払う頃。冷たい北風が吹き、落ち葉が舞い散ります。",
      lifestyle: "師走（12月）に向けて、年末の準備を始める時期。大掃除の計画を立てましょう。",
      customs: "各地でイルミネーションが始まる時期。冬の夜を彩る光の祭典を楽しみましょう。",
      fish: "ブリ、タラ、フグ",
      vegetable: "白菜、大根、ネギ",
      flower: "水仙、山茶花、クリスマスローズ"
    },
    imageFile: "photos/shosetsu-jiko.jpg",
    kotoba: "北風が葉を払い、\n冬の木立が現れる。",
    aroma: "松・冬風・土"
  },
  {
    startMonth: 12, startDay: 2,
    sekki: "小雪", sekkiReading: "しょうせつ",
    kou: "橘始黄", kouReading: "たちばなはじめてきばむ",
    kouNumber: 60, position: "末候",
    color1: "#E8A840", color2: "#F4C870",
    kasaneNa: "橘", kasaneReading: "たちばな",
    info: {
      description: "橘の実が黄色く色づく頃。日本固有の柑橘類、橘の実が冬の庭を彩ります。",
      lifestyle: "年末に向けて慌ただしくなる時期。計画的に準備を進めましょう。",
      customs: "各地でクリスマスイルミネーションが最盛期を迎えます。",
      fish: "ブリ、タラ、フグ",
      vegetable: "白菜、大根、カブ",
      flower: "水仙、山茶花、ポインセチア"
    },
    imageFile: "photos/shosetsu-makko.jpg",
    kotoba: "橘が黄色く色づき、\n冬の彩りを添える。",
    aroma: "橘・柚子・冬風"
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // 大雪（たいせつ）12月7日〜
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    startMonth: 12, startDay: 7,
    sekki: "大雪", sekkiReading: "たいせつ",
    kou: "閉塞成冬", kouReading: "そらさむくふゆとなる",
    kouNumber: 61, position: "初候",
    color1: "#9898B8", color2: "#B8B8D0",
    kasaneNa: "冬", kasaneReading: "ふゆ",
    info: {
      description: "天地が閉ざされ、本格的な冬になる頃。空が重く曇り、雪が降り始めます。",
      lifestyle: "大雪の季節。雪国では除雪の準備が必要です。スタッドレスタイヤへの交換を忘れずに。",
      customs: "各地でクリスマスの準備が最盛期を迎えます。",
      fish: "ブリ、タラ、フグ",
      vegetable: "白菜、大根、ほうれん草",
      flower: "水仙、山茶花、クリスマスローズ"
    },
    imageFile: "photos/taisetsu-shoko.jpg",
    kotoba: "天地が閉ざされ、\n本格的な冬が来る。",
    aroma: "松・冬風・雪"
  },
  {
    startMonth: 12, startDay: 12,
    sekki: "大雪", sekkiReading: "たいせつ",
    kou: "熊蟄穴", kouReading: "くまあなにこもる",
    kouNumber: 62, position: "次候",
    color1: "#7878A8", color2: "#A8A8C8",
    kasaneNa: "冬空", kasaneReading: "ふゆぞら",
    info: {
      description: "熊が冬眠に入る頃。山の動物たちが冬ごもりを始め、山が静かになります。",
      lifestyle: "年賀状を書く時期。12月15日が年賀状の受付開始日です。",
      customs: "各地で年末の大掃除が始まります。",
      fish: "ブリ、タラ、カキ",
      vegetable: "白菜、大根、ネギ",
      flower: "水仙、山茶花、シクラメン"
    },
    imageFile: "photos/taisetsu-jiko.jpg",
    kotoba: "熊が穴に籠り、\n冬の眠りにつく。",
    aroma: "松・雪・冬風"
  },
  {
    startMonth: 12, startDay: 17,
    sekki: "大雪", sekkiReading: "たいせつ",
    kou: "鱖魚群", kouReading: "さけのうおむらがる",
    kouNumber: 63, position: "末候",
    color1: "#6888A8", color2: "#98B0C8",
    kasaneNa: "冬川", kasaneReading: "ふゆかわ",
    info: {
      description: "鮭が川を遡上する頃。産卵のために鮭が群れをなして川を上ります。",
      lifestyle: "冬至（12月22日）が近い時期。かぼちゃを食べてゆず湯に入る準備をしましょう。",
      customs: "各地でクリスマスイベントが開催されます。",
      fish: "サケ、ブリ、タラ",
      vegetable: "白菜、大根、ほうれん草",
      flower: "水仙、山茶花、クリスマスローズ"
    },
    imageFile: "photos/taisetsu-makko.jpg",
    kotoba: "鮭が群れをなして遡り、\n冬の川が賑わう。",
    aroma: "雪・水・松"
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // 冬至（とうじ）12月22日〜
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    startMonth: 12, startDay: 22,
    sekki: "冬至", sekkiReading: "とうじ",
    kou: "乃東生", kouReading: "なつかれくさしょうず",
    kouNumber: 64, position: "初候",
    color1: "#5870A8", color2: "#8898C8",
    kasaneNa: "冬至", kasaneReading: "とうじ",
    info: {
      description: "夏枯草（ウツボグサ）が芽を出す頃。一年で最も夜が長い冬至を迎えます。",
      lifestyle: "冬至（12月22日）。かぼちゃを食べ、ゆず湯に入って無病息災を祈る日本の習慣です。",
      customs: "ゆず湯に入ると風邪をひかないと言われています。冬至の七草（かぼちゃ、こんにゃくなど）を食べましょう。",
      fish: "ブリ、タラ、カキ",
      vegetable: "かぼちゃ、ゆず、白菜",
      flower: "水仙、山茶花、クリスマスローズ"
    },
    imageFile: "photos/toji-shoko.jpg",
    kotoba: "夏枯草が芽吹き始め、\n冬至の光が差す。",
    aroma: "柚子・松・雪"
  },
  {
    startMonth: 12, startDay: 27,
    sekki: "冬至", sekkiReading: "とうじ",
    kou: "麋角解", kouReading: "さわしかのつのおつる",
    kouNumber: 65, position: "次候",
    color1: "#6878A8", color2: "#98A8C8",
    kasaneNa: "冬", kasaneReading: "ふゆ",
    info: {
      description: "大鹿の角が落ちる頃。年の瀬が迫り、一年を締めくくる時期です。",
      lifestyle: "年末の大掃除と正月準備の時期。おせち料理の準備を始めましょう。",
      customs: "年越しそば（12月31日）を食べる習慣があります。細く長い麺が長寿を象徴します。",
      fish: "ブリ、タラ、カキ",
      vegetable: "白菜、大根、ネギ",
      flower: "水仙、山茶花、松"
    },
    imageFile: "photos/toji-jiko.jpg",
    kotoba: "大鹿の角が落ち、\n冬の深まりを感じる。",
    aroma: "松・雪・冬風"
  },
  {
    startMonth: 12, startDay: 32,
    sekki: "冬至", sekkiReading: "とうじ",
    kou: "雪下出麦", kouReading: "ゆきくだりてむぎのびる",
    kouNumber: 66, position: "末候",
    color1: "#E8E8F0", color2: "#F8F8FF",
    kasaneNa: "雪", kasaneReading: "ゆき",
    info: {
      description: "雪の下で麦が芽を出す頃。新年を迎え、雪の下で麦が静かに育っています。",
      lifestyle: "元旦（1月1日）。初日の出を拝み、初詣に出かけましょう。",
      customs: "お正月の行事が続きます。おせち料理を食べ、お雑煮を楽しみましょう。",
      fish: "ブリ、タラ、カキ",
      vegetable: "白菜、大根、ほうれん草",
      flower: "松、梅（早咲き）、水仙"
    },
    imageFile: "photos/toji-makko.jpg",
    kotoba: "雪の下で麦が育ち、\n春への準備が始まる。",
    aroma: "雪・松・土"
  }

];

/**
 * 候のインデックスを返す（0始まり）
 * データは小寒（1/5）から始まり、冬至末候（12/32扱い）で終わる順序
 * 1月1日〜1月4日は配列末尾の冬至末候に対応
 * @param {number} month
 * @param {number} day
 * @returns {number}
 */
function getKouIndex(month, day) {
  // 1月1日〜1月4日は冬至の末候（配列の最後）
  if (month === 1 && day <= 4) {
    return SEASONS_DATA.length - 1;
  }

  const targetValue = month * 100 + day;
  let index = 0;

  for (let i = 0; i < SEASONS_DATA.length; i++) {
    const kou = SEASONS_DATA[i];
    // 12/32は実際には1/1扱いだがここでは到達しない
    const kouValue = kou.startMonth * 100 + kou.startDay;

    if (targetValue >= kouValue) {
      index = i;
    } else {
      break;
    }
  }

  return index;
}

/**
 * 指定した月日から対応する七十二候データを返す
 */
function getKouByDate(month, day) {
  return SEASONS_DATA[getKouIndex(month, day)];
}
