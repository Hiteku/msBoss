const bosses = [
  {
    img: "Kaling",
    name: "咖凌",
    hard: "劇情\n任務|普通",
    level: "275|285",
    health: "1.57兆/1.68兆>1.73兆|400兆/400兆/400兆>500兆>500兆/500兆/500兆\n/500兆",
    defense: "300|380",
    ARCAUT: "AUT 230|AUT 330",
    timeout: "30|30",
    death: "-|-",
    complete: "-|每週",
    other: "-|咖凌機器人",
    furniture: "-|咖凌陽傘",
    equipment: "-|遺留的咖凌意志",
    crystallization: "-|尚無資料",
    crystallizationRB: "-|尚無資料",
    memo: "AUT"
  },
  {
    img: "Kalos",
    name: "監視者卡洛斯",
    hard: "劇情\n任務|混沌",
    level: "275|275>280",
    health: "1.47兆|336兆>720兆",
    defense: "300|380",
    ARCAUT: "AUT 130|AUT 250>300",
    timeout: "30|60",
    death: "5|12",
    complete: "-|每週",
    furniture: "-|卡洛斯吊扇",
    equipment: "-|遺留的卡洛斯意志",
    crystallization: "-|3億",
    crystallizationRB: "-|15億",
    memo: "AUT"
  },
  {
    img: "Seren",
    name: "受選的賽蓮",
    hard: "普通|困難|終極",
    level: "275|275|275",
    health: "63兆>180兆|126兆>360兆|1489兆>5800兆",
    defense: "380|380|380",
    ARCAUT: "AUT 150>200|AUT 150>200|AUT 150>200",
    timeout: "30|30|30",
    death: "5|5|5",
    complete: "每週|λ|λ",
    furniture: "-|聖劍壁掛裝飾|聖劍壁掛裝飾",
    equipment: "破曉墜飾|米特拉的憤怒選擇箱,破曉墜飾|米特拉的憤怒選擇箱,破曉墜飾",
    crystallization: "1億4510萬1237|2億6298萬9400|7億",
    crystallizationRB: "7億2550萬6185|13億1494萬7000|35億",
    memo: "AUT"
  },
  {
    img: "BlackMage",
    name: "黑魔法師",
    hard: "劇情\n任務|困難|終極",
    level: "250|265>275>275>265|275>275>275>280",
    health: "84億>126億>168億>105億|63兆>115.5兆>157.5兆>140兆|1260兆>1470兆>1575兆>1680兆",
    defense: "30|300|300",
    ARCAUT: "ARC 880|ARC 1320|ARC 1320",
    timeout: "60|60|30",
    death: "12|12|12",
    complete: "-|每月|λ",
    furniture: "-|黑魔法師的鏡子|黑魔法師的鏡子",
    equipment: "-|神秘冥界幽靈武器箱,神秘冥界幽靈防具箱,創世的胸章|神秘冥界幽靈武器箱,神秘冥界幽靈防具箱,創世的胸章",
    crystallization: "-|9億9084萬1916|30億",
    crystallizationRB: "-|49億5420萬9580|150億",
  },
  {
    img: "Djunkel",
    name: "頓凱爾",
    hard: "劇情\n任務|普通|困難",
    level: "265|265|265",
    health: "210億|26兆|157.5兆",
    defense: "50|300|300",
    ARCAUT: "-|ARC 850|ARC 850",
    timeout: "30|30|30",
    death: "5|5|5",
    complete: "-|每週|λ",
    furniture: "-|-|頓凱爾的頭盔裝飾",
    equipment: "-|星耀耳環|神秘冥界幽靈武器箱,神秘冥界幽靈防具箱,指揮官力量耳環,星耀耳環",
    crystallization: "-|7790萬8300|1億3819萬1654",
    crystallizationRB: "-|3億8954萬1500|6億0075萬5520",
  },
  {
    img: "Hilla(Real)",
    name: "真希拉",
    hard: "劇情\n任務|普通|困難|創世\n任務",
    level: "210|250|250|250",
    health: "280億|88兆|176兆|132兆",
    defense: "30|300|300|300",
    ARCAUT: "-|ARC 900|ARC 900|ARC 900",
    timeout: "30|30|30|30",
    death: "5|5|5|5",
    complete: "-|每週|λ|-",
    furniture: "-|-|靈魂燃燒的蠟燭|靈魂燃燒的蠟燭",
    equipment: "-|破曉墜飾|神秘冥界幽靈武器箱,神秘冥界幽靈防具箱,苦痛的根源,破曉墜飾|神秘冥界幽靈武器箱,神秘冥界幽靈防具箱,苦痛的根源,破曉墜飾",
    crystallization: "-|1億1848萬9900|1億3819萬1654|1億3819萬1654|",
    crystallizationRB: "-|5億9244萬9500|6億9095萬8270|6億9095萬8270",
  },
  {
    img: "Dusk",
    name: "戴斯克",
    hard: "劇情\n任務|普通|混沌",
    level: "255|255|255",
    health: "210億|25.5兆|127.5兆",
    defense: "30|300|300",
    ARCAUT: "ARC 730|ARC 730|ARC 730",
    timeout: "30|30|30",
    death: "5|5|5",
    complete: "-|每週|λ",
    furniture: "-|-|戴斯克黑暗懶骨頭",
    equipment: "-|星耀耳環|神秘冥界幽靈武器箱,神秘冥界幽靈防具箱,巨大的恐怖,星耀耳環",
    crystallization: "-|7229萬3700|1億1697萬7942",
    crystallizationRB: "-|3億6146萬8500|5億8488萬9710",
  },
  {
    img: "Will",
    name: "威爾",
    hard: "劇情\n任務|簡單|普通|困難",
    level: "235|235|235|235",
    health: "84億>63億>63億|2.8兆+2.8兆>4.2兆>7兆|4.2兆+4.2兆>6.3兆>10.5兆|21兆+21兆>31.5兆>52.5兆",
    defense: "30|300|300|300",
    ARCAUT: "-|ARC 560|ARC 760|ARC 760",
    timeout: "30|30|30|30",
    death: "10|10|10|10",
    complete: "-|每週|λ|λ",
    furniture: "-|-|-|威爾的蜘蛛網狀吊椅",
    equipment: "-|-|克伯威水滴石,暮光印記|克伯威水滴石,神秘冥界幽靈武器箱,神秘冥界幽靈防具箱,受詛咒的魔導書選擇箱,暮光印記",
    crystallization: "-|5213萬9000|6742萬1000|1億0980萬5699",
    crystallizationRB: "-|2億6069萬5000|3億3710萬6000|5億4902萬8495",
  },
  {
    img: "Lucid",
    name: "露希妲",
    hard: "劇情\n任務|簡單|普通|困難",
    level: "230|230|230|230",
    health: "147億>63億|6兆>6兆|12兆>12兆|50.8兆>54兆>11兆9700億\n+5985億",
    defense: "30|300|300|300",
    ARCAUT: "ARC 250|ARC 360|ARC 360|ARC 360",
    timeout: "30|30|30|30",
    death: "10|10|10|10",
    complete: "-|每週|λ|λ",
    other: "-|-|-|露希妲機器人",
    furniture: "-|-|-|露希妲床鋪",
    equipment: "-|-|蝴蝶翅膀水滴石,暮光印記|蝴蝶翅膀水滴石,神秘冥界幽靈武器箱,神秘冥界幽靈防具箱,夢幻的腰帶,暮光印記",
    crystallization: "-|4879萬9200|5845萬7600|9743萬8242",
    crystallizationRB: "-|2億4399萬6000|2億9228萬8000|4億8719萬1210",
  },
  {
    img: "DivineKingSlime",
    name: "守護天使綠水靈",
    hard: "普通|混沌",
    level: "220|220",
    health: "5兆|115.5兆",
    defense: "300|300",
    timeout: "30|30",
    death: "5|5",
    complete: "每週|λ",
    furniture: "-|守護天使綠水靈噴泉",
    equipment: "守護者天使戒指|守護者天使戒指",
    crystallization: "3911萬4492|1億2045萬0252",
    crystallizationRB: "1億9557萬2460|6億0225萬1260",
  },
  {
    img: "Damien",
    name: "戴米安",
    hard: "劇情\n任務|普通|困難",
    level: "150|210|210",
    health: "4.9億>2.1億|8400億>3600億|25.2兆>10.8兆",
    defense: "-|300|300",
    timeout: "30|30|30",
    death: "10|10|10",
    complete: "-|每週|λ",
    furniture: "-|-|戴米安的劍",
    equipment: "-|扭曲烙印的靈魂石,毀滅力量盾牌|扭曲烙印的靈魂石,航海師武器箱,航海師防具箱,毀滅力量盾牌,附有魔力的眼罩",
    crystallization: "-|2884萬3452|8061萬2548",
    crystallizationRB: "-|1億4421萬7260|4億0306萬2740",
  },
  {
    img: "Lotus",
    name: "史烏",
    hard: "劇情\n任務|普通|困難",
    level: "玩家等級|210|210",
    health: "15億>25億>35億|4000億>4000億>7000億|1.6兆>6.8兆>23.1兆",
    defense: "30|300|300",
    timeout: "30|30|30",
    death: "5|5|5",
    complete: "-|每週|λ",
    furniture: "-|-|殺人鯨兔子娃娃抱枕",
    equipment: "-|特殊能量硬幣(S級)|特殊能量硬幣(S級),航海師武器箱,航海師防具箱,受損的黑心臟,口紅控制器標誌",
    crystallization: "-|2720萬7040|8750萬3781",
    crystallizationRB: "-|1億3603萬5200|4億3751萬8905",
  },
  {
    img: "Cygnus",
    name: "西格諾斯",
    hard: "簡單|普通",
    level: "140|190",
    health: "105億|630億",
    defense: "100|100",
    timeout: "30|30",
    death: "5|5",
    complete: "每週|λ",
    furniture: "-|西格諾斯娃娃置物架",
    equipment: "黑色破壞的碎片,黑色守護的碎片|黑色破壞的碎片,黑色守護的碎片,女皇系列肩膀",
    essence: "-|true",
    crystallization: "530萬7400|870萬9400",
    crystallizationRB: "2653萬7000|4354萬7000",
  },
  {
    img: "PinkBean",
    name: "皮卡啾",
    hard: "普通|混沌",
    level: "180|190",
    health: "21億|693億",
    defense: "70|180",
    timeout: "30|30",
    death: "5|5",
    complete: "每日|每週",
    furniture: "-|皮卡啾沙發",
    equipment: "金花草腰帶,粉紅聖杯,黑豆標記|金花草腰帶,粉紅聖杯,黑豆標記",
    essence: "true|true",
    crystallization: "81萬3700|763萬0700",
    crystallizationRB: "406萬8500|3815萬3500",
  },
  {
    img: "Gollux",
    name: "培羅德",
    hard: "初級|中級|高級|頂級",
    level: "170|180|190|200",
    health: "5000萬>5000萬>1000萬|30億>30億>6億|750億>750億>150億|3500億>3500億>700億",
    defense: "10|15|150|250",
    timeout: "30|30|30|30",
    death: "5|5|5|5",
    complete: "每日|λ|λ|λ",
    other: "-|-|-|真正守護者的終章",
    furniture: "-|-|-|培羅德長木椅",
    equipment: "-|-|培羅德硬幣|培羅德硬幣,頂級培羅德耳環,頂級培羅德烙印腰帶",
    crystallization: "-|-|-|-",
    crystallizationRB: "-|-|-|-",
  },
  {
    img: "PrincessNou",
    name: "濃姬",
    hard: "普通",
    level: "160",
    health: "2000億",
    defense: "100",
    timeout: "60",
    death: "20",
    complete: "每日",
    other: "妖蝶姬之座椅,濃姬傷害字型,濃姬特效交換券",
    equipment: "魅惑的碎片",
    crystallization: "895萬3200",
    crystallizationRB: "4476萬6000",
  },
  {
    img: "Arkarium",
    name: "阿卡伊農",
    hard: "簡單|普通",
    level: "130|170",
    health: "21億|126億",
    defense: "60|90",
    timeout: "30|30",
    death: "5|5",
    complete: "每日|λ",
    furniture: "-|阿卡伊農石像",
    equipment: "梅克奈特墜飾|梅克奈特墜飾,支配者墜飾",
    essence: "true|true",
    crystallization: "66萬7400|146萬0300",
    crystallizationRB: "333萬7000|730萬1500",
  },
  {
    img: "Horntail",
    name: "暗黑龍王",
    hard: "簡單|普通|混沌",
    level: "130|160|160",
    health: "1億>1億>8億1760萬|3.3億>3.3億>20.9億|33億>33億>200億",
    defense: "40|40|50",
    timeout: "30|30|30",
    death: "10|5|5",
    complete: "每日|λ|λ",
    furniture: "-|-|闇黑龍王噴泉",
    equipment: "銀花戒指,戴雅希杜斯耳環|闇黑龍王項鍊,銀花戒指,戴雅希杜斯耳環|混沌闇黑龍王的項鍊,銀花戒指,戴雅希杜斯耳環",
    essence: "true|true|true",
    crystallization: "51萬1000|58萬6600|78萬3300",
    crystallizationRB: "255萬5000|293萬3000|391萬6500",
  },
  {
    img: "VonLeon",
    name: "凡雷恩",
    hard: "簡單|普通|困難",
    level: "120|120|120",
    health: "7億|63億|105億",
    defense: "50|80|90",
    timeout: "30|30|30",
    death: "5|5|5",
    complete: "每日|λ|λ",
    furniture: "-|-|凍結的獅子雕像",
    equipment: "-|-|伊菲亞的戒指,伊菲亞的耳環,伊菲亞的項鍊",
    essence: "true|true|true",
    crystallization: "61萬2900|84萬4700|141萬9500",
    crystallizationRB: "306萬4500|422萬3500|709萬7500",
  },
  {
    img: "Vellum",
    name: "貝倫",
    hard: "普通|混沌",
    level: "130|190",
    health: "5.5億|2000億",
    defense: "55|200",
    timeout: "15|20",
    death: "5|5",
    complete: "每日|每週",
    other: "奇岩礦石之椅|奇岩礦石之椅",
    furniture: "-|貝倫熔岩浴缸",
    equipment: "-|破滅的碎片,混沌貝倫的頭盔",
    essence: "true|true",
    crystallization: "56萬0800|907萬0003",
    crystallizationRB: "280萬4000|4535萬0015",
  },
  {
    img: "BloodyQueen",
    name: "血腥皇后",
    hard: "普通|混沌",
    level: "120|190",
    health: "3.15億|1400億",
    defense: "50|120",
    timeout: "15|20",
    death: "5|5",
    complete: "每日|每週",
    other: "怕怕皇后|怕怕皇后",
    furniture: "-|血腥皇后梳妝台",
    equipment: "-|吶喊的碎片,混沌皇后的皇冠",
    essence: "true|true",
    crystallization: "56萬0800|768萬2035",
    crystallizationRB: "280萬4000|3841萬0175",
  },
  {
    img: "VonBon",
    name: "斑斑",
    hard: "普通|混沌",
    level: "120|190",
    health: "3.15億|1000億/8億",
    defense: "50|100",
    timeout: "8|10",
    death: "5|5",
    complete: "每日|每週",
    other: "與斑斑一起|與斑斑一起",
    furniture: "-|斑斑的發條鐘",
    equipment: "-|時間碎片,混沌斑斑頭盔",
    essence: "true|true",
    crystallization: "56萬0800|769萬3781",
    crystallizationRB: "280萬4000|3846萬8905",
  },
  {
    img: "Pierre",
    name: "比艾樂",
    hard: "普通|混沌",
    level: "120|190",
    health: "3.15億|800億",
    defense: "50|80",
    timeout: "15|20",
    death: "5|5",
    complete: "每日|每週",
    other: "開心的比艾樂|開心的比艾樂",
    furniture: "-|比艾樂傘架",
    equipment: "-|嘲弄的碎片,混沌比艾樂帽",
    essence: "true|true",
    crystallization: "56萬0800|731萬3306",
    crystallizationRB: "280萬4000|3656萬6530",
  },
  {
    img: "Papulatus",
    name: "拉圖斯",
    hard: "簡單|普通|混沌",
    level: "125|155|190",
    health: "3億>1億|124.5億>41.5億|3780億>1260億",
    defense: "50|90|250",
    timeout: "30|30|30",
    death: "50|5|5",
    complete: "每日|λ|每週",
    other: "-|拉圖斯的時間椅子|拉圖斯的時間椅子",
    furniture: "-|-|拉圖斯壁鐘",
    equipment: "-|-|拉圖斯標誌",
    crystallization: "39萬6500|154萬3700|2008萬8150",
    crystallizationRB: "198萬2500|771萬8500|1億0044萬0750",
  },
  {
    img: "Kawoong",
    name: "卡翁",
    hard: "普通",
    level: "180",
    health: "16.8億",
    defense: "60",
    timeout: "30",
    death: "5",
    complete: "每日",
    furniture: "卡翁吸塵器",
    crystallization: "72萬4200",
    crystallizationRB: "362萬1000",
  },
  {
    img: "MoriRanmaru",
    name: "森蘭丸",
    hard: "普通|混沌",
    level: "129|195",
    health: "10億|105億",
    defense: "55|55",
    timeout: "60|60",
    death: "無限|無限",
    complete: "每日|λ",
    crystallization: "37萬5500|154萬3700",
    crystallizationRB: "187萬7500|771萬8500",
  },
  {
    img: "Hilla",
    name: "希拉",
    hard: "普通|困難",
    level: "110|190",
    health: "5億|168億",
    defense: "50|100",
    timeout: "30|30",
    death: "無限|15",
    complete: "每日|每週",
    other: "-|[寵物箱子] 暗黑之魂",
    furniture: "-|希拉方尖碑造型立燈",
    equipment: "永生之石|永生之石,地獄火耳環",
    essence: "true|true",
    crystallization: "46萬3500|667萬7700",
    crystallizationRB: "231萬7500|3338萬8500",
  },
  {
    img: "Magnus",
    name: "梅格耐斯",
    hard: "簡單|普通|困難",
    level: "110|130|190",
    health: "4億|60億|1200億",
    defense: "50|50|120",
    timeout: "30|30|30",
    death: "5|10|15",
    complete: "每日|λ|每週",
    furniture: "-|-|梅格耐斯尖角椅子",
    equipment: "皇家暗黑合金護肩,水晶溫杜斯胸章|皇家暗黑合金護肩,水晶溫杜斯胸章|皇家暗黑合金護肩,水晶溫杜斯胸章,被詛咒的凱撒利恩",
    essence: "true|true|true",
    crystallization: "41萬8300|150萬1700|881萬9007",
    crystallizationRB: "209萬1500|750萬8500|4409萬5035",
  },
  {
    img: "Zakum",
    name: "殘暴炎魔",
    hard: "簡單|一般|混沌",
    level: "50|110|180",
    health: "220萬/20.4萬|700萬/70萬|840億/105億",
    defense: "30|40|100",
    timeout: "20|30|30",
    death: "50|5|5",
    complete: "每日|λ|每週",
    essence: "true|true|true",
    furniture: "-|-|炎魔之手桌子",
    equipment: "凝聚力量的結晶石,水中信紙眼飾|凝聚力量的結晶石,水中信紙眼飾|凝聚力量的結晶石,水中信紙眼飾,憤怒的殘暴炎魔的腰帶",
    crystallization: "11萬5800|35萬4800|705萬9750",
    crystallizationRB: "34萬7400|106萬4400|2117萬9250",
  },
  {
    img: "Balrog",
    name: "巴洛古",
    hard: "簡單",
    level: "65",
    health: "478萬7520",
    defense: "25",
    timeout: "20",
    death: "5",
    complete: "每日\n7次",
    furniture: "巴洛古尖角椅子",
    crystallization: "-",
    crystallizationRB: "-",
  },
  {
    img: "Urus",
    name: "烏勒斯",
    hard: "普通",
    level: "130",
    health: "2兆6252億2362萬4000",
    defense: "10",
    timeout: "10",
    death: "1",
    complete: "每日\n3次",
    furniture: "烏勒斯生命的樹木盆栽",
    crystallization: "-",
    crystallizationRB: "-",
  },
];

export default function boss(state = bosses, action) {
    return state;
}
