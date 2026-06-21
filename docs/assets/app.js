    const prefectures = [
      { id: 'hokkaido', modern: '北海道', old: ['蝦夷地'], region: 'hokkaido', x: 840, y: 95, size: [70, 48, -0.06], summary: '战国时代的北缘大地，严格说并不是战国主战场，但适合作为地理开端。', tags: '蝦夷地 · 松前氏 · 北海道旅行', route: '北方边缘' },
      { id: 'aomori', modern: '青森县', old: ['陆奥国'], region: 'tohoku', x: 840, y: 245, summary: '东北地方最北端的现代行政区，旧时属于陆奥的广阔范围。', tags: '陆奥 · 东北 · 北方战国地理', route: '东北' },
      { id: 'iwate', modern: '岩手县', old: ['陆奥国'], region: 'tohoku', x: 840, y: 300, summary: '奥州武士势力的历史背景很深，适合和陆奥北部一起看。', tags: '陆奥 · 奥州 · 东北', route: '东北' },
      { id: 'akita', modern: '秋田县', old: ['出羽国'], region: 'tohoku', x: 788, y: 292, summary: '出羽北部，和山形一起看最能理解战国北方的版图。', tags: '出羽 · 北方 · 东北', route: '东北' },
      { id: 'miyagi', modern: '宫城县', old: ['陆奥国'], region: 'tohoku', x: 845, y: 360, summary: '仙台所在的区域，后期的伊达政宗时代非常重要。', tags: '陆奥 · 伊达政宗 · 仙台', route: '东北' },
      { id: 'yamagata', modern: '山形县', old: ['出羽国'], region: 'tohoku', x: 790, y: 356, summary: '出羽南部，和陆奥并看可以快速建立东北旧国印象。', tags: '出羽 · 东北 · 山形城', route: '东北' },
      { id: 'fukushima', modern: '福岛县', old: ['陆奥国'], region: 'tohoku', x: 845, y: 414, summary: '会津与白河等地常在战国末期与江户初年的叙事中登场。', tags: '陆奥 · 会津 · 白河', route: '东北' },
      { id: 'niigata', modern: '新潟县', old: ['越後国'], region: 'chubu', x: 705, y: 285, size: [34, 28, 0.08], summary: '上杉谦信的根据地，战国北陆和中部连接点。', tags: '越后 · 上杉谦信 · 春日山城', route: '北陆' },
      { id: 'toyama', modern: '富山县', old: ['越中国'], region: 'chubu', x: 620, y: 350, size: [30, 21, 0.02], summary: '越中与加贺、能登等地联系紧密，常出现在北陆战线里。', tags: '越中 · 北陆 · 富山湾', route: '北陆' },
      { id: 'ishikawa', modern: '石川县', old: ['加贺国', '能登国'], region: 'chubu', x: 560, y: 330, size: [34, 24, -0.12], summary: '一向一揆与手取川一类的北陆战事都很有代表性。', tags: '加贺 · 能登 · 手取川', route: '北陆' },
      { id: 'fukui', modern: '福井县', old: ['越前国'], region: 'chubu', x: 525, y: 400, size: [32, 24, -0.06], summary: '越前是中部与近畿之间的重要门户，常与姊川、贱岳等战线联动。', tags: '越前 · 北陆 · 朝仓氏', route: '北陆' },
      { id: 'yamanashi', modern: '山梨县', old: ['甲斐国'], region: 'chubu', x: 705, y: 520, size: [28, 22, 0.04], summary: '武田信玄的核心根据地，理解武田家势力最重要的地图点。', tags: '甲斐 · 武田信玄 · 甲府', route: '中山道' },
      { id: 'nagano', modern: '长野县', old: ['信浓国'], region: 'chubu', x: 650, y: 470, size: [36, 30, -0.02], summary: '川中岛、上田、善光寺一线，几乎就是武田与上杉对抗的课堂。', tags: '信浓 · 川中岛 · 上田', route: '中山道' },
      { id: 'gifu', modern: '岐阜县', old: ['美浓国', '飞驒国'], region: 'chubu', x: 605, y: 500, size: [36, 29, -0.04], summary: '关原所在的现代县域，也是通向近畿的重要走廊。', tags: '美浓 · 飞驒 · 关原', route: '关原' },
      { id: 'shizuoka', modern: '静冈县', old: ['骏河国', '远江国', '伊豆国'], region: 'chubu', x: 720, y: 590, size: [44, 24, -0.22], summary: '今川、德川、武田的三方角力区域，东海道战国地理最有戏剧性的地方之一。', tags: '骏河 · 远江 · 三方原', route: '东海道' },
      { id: 'aichi', modern: '爱知县', old: ['尾张国', '三河国'], region: 'chubu', x: 605, y: 565, size: [34, 23, 0.06], summary: '织田、丰臣、德川三条线都能从这里切入。名古屋周边是战国旅行最适合入门的区域。', tags: '尾张 · 三河 · 织田信长', route: '东海道' },
      { id: 'mie', modern: '三重县', old: ['伊势国', '志摩国', '伊贺国'], region: 'kansai', x: 640, y: 640, size: [30, 30, -0.06], summary: '伊贺忍者、伊势神宫、北伊势诸势力都能在这里找到影子。', tags: '伊势 · 伊贺 · 忍者', route: '近畿东部' },
      { id: 'gunma', modern: '群马县', old: ['上野国'], region: 'kanto', x: 700, y: 430, size: [26, 22, 0.04], summary: '关东北部的重要旧国，和上杉、武田的北关东路线有关。', tags: '上野 · 北关东 · 箕轮城', route: '关东' },
      { id: 'tochigi', modern: '栃木县', old: ['下野国'], region: 'kanto', x: 760, y: 450, size: [26, 23, 0.02], summary: '下野国的现代位置，适合连着看关东诸国的分布。', tags: '下野 · 关东 · 宇都宫', route: '关东' },
      { id: 'ibaraki', modern: '茨城县', old: ['常陆国'], region: 'kanto', x: 840, y: 455, size: [28, 24, -0.08], summary: '常陆国是关东东侧的大版块，和水户、鹿岛等地有关。', tags: '常陆 · 关东 · 水户', route: '关东' },
      { id: 'saitama', modern: '埼玉县', old: ['武藏国'], region: 'kanto', x: 760, y: 520, size: [24, 18, 0.02], summary: '江户之前的武藏腹地，川越、忍城、岩槻都很适合战国旅行。', tags: '武藏 · 川越 · 忍城', route: '关东' },
      { id: 'chiba', modern: '千叶县', old: ['下总国', '上总国', '安房国'], region: 'kanto', x: 875, y: 535, size: [28, 23, -0.15], summary: '下总、上总、安房三国并列，是关东东端非常典型的旧国拼图。', tags: '下总 · 上总 · 安房', route: '关东' },
      { id: 'tokyo', modern: '东京都', old: ['武藏国'], region: 'kanto', x: 810, y: 530, size: [20, 15, 0], summary: '今天的东京在战国时期属于武藏国的一部分，江户城则是后续叙事的中心。', tags: '武藏 · 江户 · 江户城', route: '关东' },
      { id: 'kanagawa', modern: '神奈川县', old: ['相模国', '武藏国南部'], region: 'kanto', x: 780, y: 590, size: [28, 22, -0.1], summary: '小田原城与北条氏的核心领地，战国后期极其重要。', tags: '相模 · 北条氏 · 小田原', route: '关东' },
      { id: 'shiga', modern: '滋贺县', old: ['近江国'], region: 'kansai', x: 545, y: 510, size: [22, 21, 0.06], summary: '近江国是姊川、贱岳、佐和山等战线的重要舞台。', tags: '近江 · 姊川 · 贱岳', route: '关原' },
      { id: 'kyoto', modern: '京都府', old: ['山城国'], region: 'kansai', x: 500, y: 525, size: [23, 19, -0.04], summary: '京都是中央政权与寺社势力交错之地，战国末期政治故事的核心。', tags: '山城 · 京都 · 本能寺', route: '近畿' },
      { id: 'osaka', modern: '大阪府', old: ['摄津国'], region: 'kansai', x: 485, y: 565, size: [21, 17, -0.02], summary: '大阪城与石山本愿寺一带，是理解织丰时代不可或缺的地点。', tags: '摄津 · 大坂 · 大阪城', route: '近畿' },
      { id: 'hyogo', modern: '兵库县', old: ['播磨国', '但马国', '摄津国西部', '丹波国西部', '淡路国'], region: 'kansai', x: 400, y: 530, size: [38, 23, 0.04], summary: '兵库一县容纳多个旧国，是播磨、摄津与淡路交汇的典型案例。', tags: '播磨 · 赤松 · 姬路城', route: '近畿西部' },
      { id: 'nara', modern: '奈良县', old: ['大和国'], region: 'kansai', x: 520, y: 590, size: [22, 18, 0.04], summary: '大和国是古都周边的重要地域，寺社与战国武装势力关系密切。', tags: '大和 · 奈良 · 多武峰', route: '近畿' },
      { id: 'wakayama', modern: '和歌山县', old: ['纪伊国'], region: 'kansai', x: 470, y: 655, size: [28, 26, 0.06], summary: '纪伊半岛南端，杂贺众与寺院武装等话题都能在这里找到。', tags: '纪伊 · 杂贺 · 和歌山城', route: '近畿' },
      { id: 'tottori', modern: '鸟取县', old: ['因幡国', '伯耆国'], region: 'chugoku', x: 350, y: 485, size: [27, 18, 0.1], summary: '因幡与伯耆并列，是山阴地区战国地理的重要切面。', tags: '因幡 · 伯耆 · 山阴', route: '中国地方' },
      { id: 'shimane', modern: '岛根县', old: ['出云国', '石见国', '隐岐国'], region: 'chugoku', x: 300, y: 500, size: [40, 18, 0.06], summary: '出云大社、石见银山与山阴诸势力都能帮助理解这里的历史层。', tags: '出云 · 石见 · 隐岐', route: '中国地方' },
      { id: 'okayama', modern: '冈山县', old: ['备前国', '备中国', '美作国'], region: 'chugoku', x: 375, y: 555, size: [31, 21, 0.02], summary: '宇喜多氏等战国大名的根据地，临海与山地并存。', tags: '备前 · 备中 · 美作', route: '中国地方' },
      { id: 'hiroshima', modern: '广岛县', old: ['安艺国', '备后国'], region: 'chugoku', x: 280, y: 595, size: [35, 23, -0.02], summary: '毛利氏的核心舞台，安艺的地理位置决定了它在西日本的战略价值。', tags: '安艺 · 毛利元就 · 广岛', route: '中国地方' },
      { id: 'yamaguchi', modern: '山口县', old: ['周防国', '长门国'], region: 'chugoku', x: 210, y: 625, size: [32, 22, -0.03], summary: '周防、长门与大内、毛利两大家族的历史非常紧密。', tags: '周防 · 长门 · 毛利氏', route: '中国地方' },
      { id: 'tokushima', modern: '德岛县', old: ['阿波国'], region: 'shikoku', x: 520, y: 700, size: [24, 17, -0.12], summary: '阿波是四国东部的重要旧国，三好氏等势力相关度高。', tags: '阿波 · 三好氏 · 四国', route: '四国' },
      { id: 'kagawa', modern: '香川县', old: ['赞岐国'], region: 'shikoku', x: 445, y: 670, size: [26, 15, 0.12], summary: '赞岐与东四国的历史联系密切，适合和阿波一起看。', tags: '赞岐 · 四国 · 高松', route: '四国' },
      { id: 'ehime', modern: '爱媛县', old: ['伊予国'], region: 'shikoku', x: 365, y: 690, size: [31, 20, 0.02], summary: '伊予位于四国西部，海路与瀬户内海战线都值得一起看。', tags: '伊予 · 村上水军 · 松山', route: '四国' },
      { id: 'kochi', modern: '高知县', old: ['土佐国'], region: 'shikoku', x: 475, y: 760, size: [38, 18, 0.04], summary: '土佐是长宗我部元亲的故乡，也是四国战国故事的重要一章。', tags: '土佐 · 长宗我部元亲 · 高知', route: '四国' },
      { id: 'fukuoka', modern: '福冈县', old: ['筑前国', '筑后国', '丰前国'], region: 'kyushu', x: 210, y: 770, size: [25, 20, -0.03], summary: '九州北部的核心区域，立花氏与大友氏的故事常从这里切入。', tags: '筑前 · 筑后 · 博多', route: '九州' },
      { id: 'saga', modern: '佐贺县', old: ['肥前国'], region: 'kyushu', x: 180, y: 735, size: [22, 18, -0.1], summary: '肥前国的一部分，适合和长崎、熊本一起理解九州西侧布局。', tags: '肥前 · 佐贺城 · 九州', route: '九州' },
      { id: 'nagasaki', modern: '长崎县', old: ['肥前国', '壱岐国', '对马国'], region: 'kyushu', x: 110, y: 765, size: [28, 20, 0.02], summary: '壹岐、对马与海上交通联系密切，九州西端的海洋性格很强。', tags: '肥前 · 壱岐 · 对马', route: '九州' },
      { id: 'kumamoto', modern: '熊本县', old: ['肥后国'], region: 'kyushu', x: 250, y: 805, size: [30, 22, 0.05], summary: '肥后是加藤清正、岛津北上等叙事的重要地理背景。', tags: '肥后 · 熊本城 · 九州', route: '九州' },
      { id: 'oita', modern: '大分县', old: ['丰后国'], region: 'kyushu', x: 310, y: 760, size: [24, 20, -0.05], summary: '丰后和大友氏密切相关，九州战国史中非常关键。', tags: '丰后 · 大友宗麟 · 九州', route: '九州' },
      { id: 'miyazaki', modern: '宫崎县', old: ['日向国'], region: 'kyushu', x: 300, y: 845, size: [24, 24, 0], summary: '日向位于九州东岸，是岛津势力向北推进的背景之一。', tags: '日向 · 九州南部', route: '九州' },
      { id: 'kagoshima', modern: '鹿儿岛县', old: ['萨摩国', '大隅国'], region: 'kyushu', x: 210, y: 870, size: [32, 24, -0.02], summary: '萨摩、岛津氏的核心地带，理解九州统一前史的关键。', tags: '萨摩 · 大隅 · 岛津氏', route: '九州' },
      { id: 'okinawa', modern: '冲绳县', old: ['琉球王国'], region: 'kyushu', x: 120, y: 955, size: [28, 13, 0], summary: '琉球在时间线上与战国本土不同，但作为海上交流终点很适合一起看。', tags: '琉球 · 海上交流 · 冲绳', route: '九州' }
    ];

    const sites = [
      { id: 'okehazama', kind: 'battle', name: '桶狭间之战', year: '1560', prefecture: 'aichi', label: '桶狭间', x: 464, y: 716, note: '今川义元在尾张南部遭到织田信长奇袭。', exact: '名古屋市绿区 / 天白区一带（桶狭间古战场公园周边）', tags: '尾张 · 织田信长 · 奇袭' },
      { id: 'nagashino', kind: 'battle', name: '长筱之战', year: '1575', prefecture: 'aichi', label: '长筱', x: 493, y: 712, note: '信长与家康联军在设乐原以铁炮战术重创武田军。', exact: '爱知县新城市设乐原 / 长筱城址周边', tags: '铁炮 · 武田胜赖 · 设乐原' },
      { id: 'komaki', kind: 'battle', name: '小牧・长久手之战', year: '1584', prefecture: 'aichi', label: '小牧', x: 462, y: 699, note: '秀吉与家康围绕尾张、三河展开拉锯。', exact: '爱知县小牧市 / 长久手市一带', tags: '德川家康 · 丰臣秀吉 · 尾张三河' },
      { id: 'kiyosu', kind: 'castle', name: '清洲城', year: '16世纪', prefecture: 'aichi', label: '清洲城', x: 459, y: 708, note: '织田家时期的重要据点，清洲会议的记忆也与这里绑定。', exact: '爱知县清须市清洲城址周边', tags: '织田家 · 城郭 · 清洲会议' },
      { id: 'okazaki', kind: 'castle', name: '冈崎城', year: '16世纪', prefecture: 'aichi', label: '冈崎城', x: 477, y: 723, note: '德川家康出生地，是理解三河线最好的实地入口之一。', exact: '爱知县冈崎市冈崎公园', tags: '德川家康 · 三河 · 城郭' },
      { id: 'kawanakajima', kind: 'battle', name: '川中岛之战', year: '1553-1564', prefecture: 'nagano', label: '川中岛', x: 522, y: 617, note: '武田信玄与上杉谦信多次在这里对峙。', exact: '长野市南部一带（犀川与千曲川之间）', tags: '武田信玄 · 上杉谦信 · 北信浓' },
      { id: 'uedahara', kind: 'battle', name: '上田原之战', year: '1548', prefecture: 'nagano', label: '上田原', x: 525, y: 640, note: '武田晴信早期的重要胜利之一。', exact: '长野县上田市周边', tags: '武田晴信 · 北信浓 · 上田' },
      { id: 'ueda-castle', kind: 'castle', name: '上田城', year: '1583', prefecture: 'nagano', label: '上田城', x: 527, y: 646, note: '真田昌幸、真田幸村故事线的关键据点。', exact: '长野县上田市上田城迹公园', tags: '真田氏 · 城郭 · 信浓' },
      { id: 'tsutsujigasaki', kind: 'castle', name: '躑躅崎馆', year: '16世纪', prefecture: 'yamanashi', label: '躑躅崎馆', x: 545, y: 676, note: '武田信玄居馆旧址，是甲斐学习路线的主轴。', exact: '山梨县甲府市武田神社周边', tags: '武田信玄 · 甲府 · 居馆' },
      { id: 'sekigahara', kind: 'battle', name: '关原之战', year: '1600', prefecture: 'gifu', label: '关原', x: 424, y: 683, note: '决定日本政治走向的关键大会战之一。', exact: '岐阜县关原町古战场一带', tags: '德川家康 · 石田三成 · 天下分割' },
      { id: 'gifu-castle', kind: 'castle', name: '岐阜城', year: '16世纪', prefecture: 'gifu', label: '岐阜城', x: 456, y: 680, note: '原名稻叶山城，是信长改名“岐阜”的象征地点。', exact: '岐阜县岐阜市金华山', tags: '稻叶山城 · 织田信长 · 城郭' },
      { id: 'tedorigawa', kind: 'battle', name: '手取川之战', year: '1577', prefecture: 'ishikawa', label: '手取川', x: 441, y: 613, note: '上杉军在北陆压制织田势力的代表性战事。', exact: '石川县白山市附近（手取川流域）', tags: '上杉谦信 · 北陆 · 加贺' },
      { id: 'kanazawa-castle', kind: 'castle', name: '金泽城', year: '16世纪末', prefecture: 'ishikawa', label: '金泽城', x: 449, y: 599, note: '加贺前田家的象征城郭，北陆旅行非常适合作为据点。', exact: '石川县金泽市金泽城公园', tags: '前田家 · 加贺 · 城郭' },
      { id: 'mikatagahara', kind: 'battle', name: '三方原之战', year: '1572', prefecture: 'shizuoka', label: '三方原', x: 505, y: 714, note: '德川家康在三方原遭遇武田信玄。', exact: '静冈县滨松市北部（三方原台地）', tags: '武田信玄 · 德川家康 · 骏河远江' },
      { id: 'sunpu', kind: 'castle', name: '骏府城', year: '16世纪', prefecture: 'shizuoka', label: '骏府城', x: 545, y: 705, note: '今川与德川两条线都会经过骏府。', exact: '静冈县静冈市葵区骏府城公园', tags: '今川氏 · 德川家康 · 城郭' },
      { id: 'hamamatsu', kind: 'castle', name: '滨松城', year: '16世纪', prefecture: 'shizuoka', label: '滨松城', x: 501, y: 724, note: '三方原之后的家康叙事离不开这里。', exact: '静冈县滨松市中央区滨松城公园', tags: '德川家康 · 远江 · 城郭' },
      { id: 'odawara', kind: 'battle', name: '小田原征伐', year: '1590', prefecture: 'kanagawa', label: '小田原', x: 570, y: 708, note: '丰臣秀吉围攻北条氏，根据地是小田原城一带。', exact: '神奈川县小田原市・小田原城周边', tags: '北条氏 · 秀吉 · 城郭围攻' },
      { id: 'odawara-castle', kind: 'castle', name: '小田原城', year: '16世纪', prefecture: 'kanagawa', label: '小田原城', x: 573, y: 713, note: '后北条氏的象征城郭，关东战国旅行必到。', exact: '神奈川县小田原市城内', tags: '后北条氏 · 相模 · 城郭' },
      { id: 'kawagoe', kind: 'castle', name: '川越城', year: '16世纪', prefecture: 'saitama', label: '川越城', x: 568, y: 646, note: '北条、上杉、扇谷三方拉扯的关东节点。', exact: '埼玉县川越市郭町', tags: '关东 · 城郭 · 川越' },
      { id: 'shizugatake', kind: 'battle', name: '贱岳之战', year: '1583', prefecture: 'shiga', label: '贱岳', x: 408, y: 678, note: '羽柴秀吉与柴田胜家争夺织田家继承权的重要战斗。', exact: '滋贺县长滨市北部（贱岳山地一带）', tags: '秀吉 · 柴田胜家 · 近江' },
      { id: 'azuchi', kind: 'castle', name: '安土城', year: '1579', prefecture: 'shiga', label: '安土城', x: 416, y: 701, note: '信长晚年的象征性城郭，今天遗址依然震撼。', exact: '滋贺县近江八幡市安土町', tags: '织田信长 · 近江 · 城郭' },
      { id: 'honnoji', kind: 'battle', name: '本能寺之变', year: '1582', prefecture: 'kyoto', label: '本能寺', x: 383, y: 708, note: '信长人生的终点，也是战国史转折点。', exact: '京都市中京区本能寺周边', tags: '明智光秀 · 织田信长 · 京都' },
      { id: 'nijo', kind: 'castle', name: '二条御所 / 二条城系地', year: '16世纪末', prefecture: 'kyoto', label: '二条', x: 380, y: 704, note: '京都权力中枢空间的一个学习入口。', exact: '京都市中京区二条城周边', tags: '京都政局 · 城郭 · 中央政权' },
      { id: 'osaka-castle', kind: 'castle', name: '大阪城', year: '1583', prefecture: 'osaka', label: '大阪城', x: 374, y: 734, note: '织丰时代最重要的政治与军事舞台之一。', exact: '大阪市中央区大阪城公园', tags: '丰臣秀吉 · 摄津 · 城郭' },
      { id: 'himeji', kind: 'castle', name: '姬路城', year: '16世纪', prefecture: 'hyogo', label: '姬路城', x: 331, y: 727, note: '播磨线旅行的地标，也适合串联三木与神户方向。', exact: '兵库县姬路市本町', tags: '播磨 · 城郭 · 姬路' },
      { id: 'yoshida-koriyama', kind: 'castle', name: '吉田郡山城', year: '16世纪', prefecture: 'hiroshima', label: '郡山城', x: 235, y: 716, note: '毛利元就最重要的根据地之一。', exact: '广岛县安艺高田市吉田町', tags: '毛利元就 · 安艺 · 城郭' },
      { id: 'itsukushima', kind: 'battle', name: '严岛合战', year: '1555', prefecture: 'hiroshima', label: '严岛', x: 222, y: 748, note: '毛利元就最知名的经典胜利之一。', exact: '广岛县廿日市市宫岛周边', tags: '毛利元就 · 严岛 · 海战' },
      { id: 'funaokayama', kind: 'battle', name: '多多良滨之战系地', year: '16世纪', prefecture: 'fukuoka', label: '多多良', x: 118, y: 790, note: '九州北部势力版图演变时常会涉及这一带。', exact: '福冈市东区多多良周边', tags: '九州北部 · 合战地 · 筑前' },
      { id: 'kumamoto-castle', kind: 'castle', name: '熊本城', year: '1601', prefecture: 'kumamoto', label: '熊本城', x: 114, y: 849, note: '严格说建成在关原后，但作为肥后旅行据点价值极高。', exact: '熊本县熊本市中央区本丸', tags: '肥后 · 加藤清正 · 城郭' },
      { id: 'yoshihiro-route', kind: 'battle', name: '关原退口岛津线索地', year: '1600', prefecture: 'kagoshima', label: '岛津线', x: 123, y: 918, note: '从萨摩本领出发理解岛津家兴亡，比单点更容易串联九州史。', exact: '鹿儿岛市城山周边与萨摩旧领学习路线', tags: '岛津氏 · 萨摩 · 九州统一' }
    ];

    const state = {
      mode: 'modern',
      query: '',
      selectedType: 'route',
      selectedId: 'all',
      route: 'all'
    };

    const defaultViewBox = { x: 0, y: 0, width: 1000, height: 1000 };

    const mapSvg = document.getElementById('map');
    const mapShell = document.querySelector('.map-shell');
    const prefLayer = document.getElementById('prefLayer');
    const cityLayer = document.getElementById('cityLayer');
    const detailTitle = document.getElementById('detailTitle');
    const detailSubline = document.getElementById('detailSubline');
    const detailOverview = document.getElementById('detailOverview');
    const detailProvince = document.getElementById('detailProvince');
    const detailRegion = document.getElementById('detailRegion');
    const detailDaimyo = document.getElementById('detailDaimyo');
    const detailHero = document.getElementById('detailHero');
    const resultCount = document.getElementById('resultCount');
    const tooltip = document.getElementById('tooltip');
    const searchInput = document.getElementById('search');

    const prefMap = new Map(prefectures.map(item => [item.id, item]));

    const cityCatalog = {
      hokkaido: [{ name: '札幌', lat: 43.062087, lon: 141.354448 }, { name: '函館', lat: 41.768712, lon: 140.729108 }, { name: '旭川', lat: 43.770824, lon: 142.365019 }],
      aomori: [{ name: '青森', lat: 40.822354, lon: 140.747325 }, { name: '弘前', lat: 40.603141, lon: 140.463126 }, { name: '八戸', lat: 40.512443, lon: 141.488625 }],
      iwate: [{ name: '盛岡', lat: 39.702097, lon: 141.154498 }, { name: '一関', lat: 38.934826, lon: 141.126845 }, { name: '久慈', lat: 40.190429, lon: 141.775580 }],
      akita: [{ name: '秋田', lat: 39.719923, lon: 140.102524 }, { name: '横手', lat: 39.313765, lon: 140.566662 }, { name: '大館', lat: 40.271591, lon: 140.564387 }],
      miyagi: [{ name: '仙台', lat: 38.268102, lon: 140.869294 }, { name: '石巻', lat: 38.427766, lon: 141.306092 }, { name: '白石', lat: 38.002463, lon: 140.619917 }],
      yamagata: [{ name: '山形', lat: 38.255431, lon: 140.339629 }, { name: '米沢', lat: 37.922309, lon: 140.116654 }, { name: '鶴岡', lat: 38.727287, lon: 139.826751 }],
      fukushima: [{ name: '福島', lat: 37.760928, lon: 140.474067 }, { name: '会津若松', lat: 37.494848, lon: 139.929722 }, { name: '白河', lat: 37.126377, lon: 140.210939 }],
      niigata: [{ name: '新潟', lat: 37.916126, lon: 139.036413 }, { name: '長岡', lat: 37.446626, lon: 138.851734 }, { name: '上越', lat: 37.147872, lon: 138.236046 }],
      toyama: [{ name: '富山', lat: 36.695981, lon: 137.213454 }, { name: '高岡', lat: 36.754064, lon: 137.026127 }, { name: '魚津', lat: 36.827366, lon: 137.409195 }],
      ishikawa: [{ name: '金沢', lat: 36.561050, lon: 136.656637 }, { name: '七尾', lat: 37.043329, lon: 136.967425 }, { name: '小松', lat: 36.408356, lon: 136.445591 }],
      fukui: [{ name: '福井', lat: 36.064093, lon: 136.219586 }, { name: '敦賀', lat: 35.642463, lon: 136.058218 }, { name: '越前', lat: 35.903471, lon: 136.168673 }],
      yamanashi: [{ name: '甲府', lat: 35.662124, lon: 138.568213 }, { name: '韮崎', lat: 35.708899, lon: 138.446170 }, { name: '富士吉田', lat: 35.487516, lon: 138.807827 }],
      nagano: [{ name: '長野', lat: 36.648413, lon: 138.194318 }, { name: '松本', lat: 36.238096, lon: 137.971995 }, { name: '上田', lat: 36.402061, lon: 138.249162 }],
      gifu: [{ name: '岐阜', lat: 35.423153, lon: 136.760604 }, { name: '高山', lat: 36.146115, lon: 137.252129 }, { name: '関ケ原', lat: 35.365200, lon: 136.466942 }],
      shizuoka: [{ name: '静岡', lat: 34.975473, lon: 138.382388 }, { name: '浜松', lat: 34.710778, lon: 137.726108 }, { name: '沼津', lat: 35.095646, lon: 138.863556 }],
      aichi: [{ name: '名古屋', lat: 35.181433, lon: 136.906421 }, { name: '岡崎', lat: 34.954796, lon: 137.173081 }, { name: '犬山', lat: 35.378612, lon: 136.944492 }],
      mie: [{ name: '津', lat: 34.718581, lon: 136.505717 }, { name: '伊賀', lat: 34.768829, lon: 136.129908 }, { name: '伊勢', lat: 34.487506, lon: 136.709286 }],
      gunma: [{ name: '前橋', lat: 36.389449, lon: 139.063443 }, { name: '高崎', lat: 36.321910, lon: 139.003246 }, { name: '沼田', lat: 36.646107, lon: 139.044136 }],
      tochigi: [{ name: '宇都宮', lat: 36.555114, lon: 139.882816 }, { name: '足利', lat: 36.340145, lon: 139.449702 }, { name: '日光', lat: 36.719860, lon: 139.698213 }],
      ibaraki: [{ name: '水戸', lat: 36.365852, lon: 140.471602 }, { name: '土浦', lat: 36.078449, lon: 140.203449 }, { name: '鹿嶋', lat: 35.966137, lon: 140.644967 }],
      saitama: [{ name: 'さいたま', lat: 35.861648, lon: 139.645521 }, { name: '川越', lat: 35.925155, lon: 139.485810 }, { name: '秩父', lat: 35.991681, lon: 139.085479 }],
      chiba: [{ name: '千葉', lat: 35.607760, lon: 140.107077 }, { name: '佐倉', lat: 35.723440, lon: 140.223977 }, { name: '館山', lat: 34.996646, lon: 139.869723 }],
      tokyo: [{ name: '東京', lat: 35.693890, lon: 139.703467 }, { name: '八王子', lat: 35.666570, lon: 139.316078 }, { name: '府中', lat: 35.668912, lon: 139.477711 }],
      kanagawa: [{ name: '小田原', lat: 35.264600, lon: 139.152308 }, { name: '鎌倉', lat: 35.319226, lon: 139.546688 }, { name: '横浜', lat: 35.450334, lon: 139.634171 }],
      shiga: [{ name: '大津', lat: 35.015247, lon: 135.857700 }, { name: '彦根', lat: 35.274802, lon: 136.260033 }, { name: '長浜', lat: 35.380602, lon: 136.278191 }],
      kyoto: [{ name: '京都', lat: 35.011631, lon: 135.767721 }, { name: '宇治', lat: 34.884270, lon: 135.799812 }, { name: '亀岡', lat: 35.013780, lon: 135.573752 }],
      osaka: [{ name: '大坂', lat: 34.693891, lon: 135.502046 }, { name: '堺', lat: 34.573354, lon: 135.483020 }, { name: '枚方', lat: 34.814712, lon: 135.651216 }],
      hyogo: [{ name: '姫路', lat: 34.815442, lon: 134.685456 }, { name: '神戸', lat: 34.689495, lon: 135.195728 }, { name: '豊岡', lat: 35.544475, lon: 134.820187 }],
      nara: [{ name: '奈良', lat: 34.685072, lon: 135.804848 }, { name: '郡山', lat: 34.649368, lon: 135.782747 }, { name: '吉野', lat: 34.396046, lon: 135.857612 }],
      wakayama: [{ name: '和歌山', lat: 34.230513, lon: 135.170812 }, { name: '海南', lat: 34.155311, lon: 135.209189 }, { name: '高野山', lat: 34.216077, lon: 135.586536 }],
      tottori: [{ name: '鳥取', lat: 35.494444, lon: 134.222166 }, { name: '倉吉', lat: 35.430182, lon: 133.825561 }, { name: '米子', lat: 35.428136, lon: 133.330939 }],
      shimane: [{ name: '松江', lat: 35.468039, lon: 133.048527 }, { name: '出雲', lat: 35.367081, lon: 132.754831 }, { name: '浜田', lat: 34.899244, lon: 132.079796 }],
      okayama: [{ name: '岡山', lat: 34.655136, lon: 133.919450 }, { name: '倉敷', lat: 34.584673, lon: 133.772237 }, { name: '津山', lat: 35.069131, lon: 134.004345 }],
      hiroshima: [{ name: '広島', lat: 34.385258, lon: 132.455375 }, { name: '尾道', lat: 34.408891, lon: 133.204966 }, { name: '宮島', lat: 34.301792, lon: 132.323236 }],
      yamaguchi: [{ name: '山口', lat: 34.178178, lon: 131.473511 }, { name: '萩', lat: 34.408107, lon: 131.399104 }, { name: '下関', lat: 33.957828, lon: 130.941459 }],
      tokushima: [{ name: '徳島', lat: 34.070234, lon: 134.554713 }, { name: '鳴門', lat: 34.172540, lon: 134.608740 }, { name: '阿南', lat: 33.921935, lon: 134.659508 }],
      kagawa: [{ name: '高松', lat: 34.342600, lon: 134.046537 }, { name: '丸亀', lat: 34.289482, lon: 133.797716 }, { name: '琴平', lat: 34.191420, lon: 133.823303 }],
      ehime: [{ name: '松山', lat: 33.839212, lon: 132.765579 }, { name: '今治', lat: 34.066097, lon: 132.997867 }, { name: '宇和島', lat: 33.223340, lon: 132.560563 }],
      kochi: [{ name: '高知', lat: 33.558788, lon: 133.531166 }, { name: '中村', lat: 32.991698, lon: 132.933905 }, { name: '安芸', lat: 33.502416, lon: 133.907074 }],
      fukuoka: [{ name: '博多', lat: 33.591430, lon: 130.414753 }, { name: '久留米', lat: 33.319294, lon: 130.508350 }, { name: '小倉', lat: 33.880910, lon: 130.873361 }],
      saga: [{ name: '佐賀', lat: 33.260430, lon: 130.302743 }, { name: '唐津', lat: 33.450115, lon: 129.968131 }, { name: '鹿島', lat: 33.104159, lon: 130.098084 }],
      nagasaki: [{ name: '長崎', lat: 32.750310, lon: 129.877905 }, { name: '平戸', lat: 33.368309, lon: 129.553661 }, { name: '島原', lat: 32.788250, lon: 130.370808 }],
      kumamoto: [{ name: '熊本', lat: 32.803078, lon: 130.707897 }, { name: '八代', lat: 32.507412, lon: 130.601888 }, { name: '人吉', lat: 32.210038, lon: 130.762554 }],
      oita: [{ name: '大分', lat: 33.239526, lon: 131.609377 }, { name: '中津', lat: 33.598448, lon: 131.187399 }, { name: '臼杵', lat: 33.125948, lon: 131.804638 }],
      miyazaki: [{ name: '宮崎', lat: 31.907661, lon: 131.420673 }, { name: '延岡', lat: 32.582147, lon: 131.665028 }, { name: '都城', lat: 31.719519, lon: 131.061497 }],
      kagoshima: [{ name: '鹿児島', lat: 31.596775, lon: 130.557215 }, { name: '薩摩川内', lat: 31.813486, lon: 130.303950 }, { name: '霧島', lat: 31.741035, lon: 130.763136 }],
      okinawa: [{ name: '那覇', lat: 26.212312, lon: 127.679187 }, { name: '首里', lat: 26.221740, lon: 127.725393 }, { name: '名護', lat: 26.591554, lon: 127.977474 }]
    };

    const prefGeoBounds = {
      hokkaido: { west: 139.766800, south: 41.398602, east: 145.817398, north: 45.523201 },
      aomori: { west: 139.860504, south: 40.218468, east: 141.683105, north: 41.547001 },
      iwate: { west: 140.654099, south: 38.748402, east: 142.072601, north: 40.450867 },
      akita: { west: 139.693100, south: 38.874134, east: 140.995804, north: 40.511467 },
      miyagi: { west: 140.275208, south: 37.773399, east: 141.674606, north: 39.002934 },
      yamagata: { west: 139.540298, south: 37.734333, east: 140.646301, north: 39.133934 },
      fukushima: { west: 139.164795, south: 36.791801, east: 141.043304, north: 37.976868 },
      niigata: { west: 137.634903, south: 36.736866, east: 139.900101, north: 38.553398 },
      toyama: { west: 136.768799, south: 36.274467, east: 137.762497, north: 36.980331 },
      ishikawa: { west: 136.243698, south: 36.067600, east: 137.360504, north: 37.533466 },
      fukui: { west: 135.449005, south: 35.343735, east: 136.832001, north: 36.295601 },
      yamanashi: { west: 138.180298, south: 35.168465, east: 139.134293, north: 35.971664 },
      nagano: { west: 137.325500, south: 35.198399, east: 138.738708, north: 37.030533 },
      gifu: { west: 136.275894, south: 35.133598, east: 137.652802, north: 36.465134 },
      shizuoka: { west: 137.474808, south: 34.594601, east: 139.147903, north: 35.646000 },
      aichi: { west: 136.671097, south: 34.578266, east: 137.837997, north: 35.424667 },
      mie: { west: 135.853104, south: 33.723335, east: 136.927902, north: 35.257534 },
      gunma: { west: 138.397202, south: 35.985268, east: 139.669296, north: 37.058800 },
      tochigi: { west: 139.327301, south: 36.199799, east: 140.292603, north: 37.154999 },
      ibaraki: { west: 139.687897, south: 35.739597, east: 140.851898, north: 36.945465 },
      saitama: { west: 138.712296, south: 35.753666, east: 139.899994, north: 36.283401 },
      chiba: { west: 139.752899, south: 34.899532, east: 140.870895, north: 36.104134 },
      tokyo: { west: 138.944000, south: 35.501598, east: 139.918701, north: 35.898132 },
      kanagawa: { west: 138.916199, south: 35.136467, east: 139.796295, north: 35.672134 },
      shiga: { west: 135.763702, south: 34.790733, east: 136.454300, north: 35.703732 },
      kyoto: { west: 134.854202, south: 34.705933, east: 136.055206, north: 35.779198 },
      osaka: { west: 135.093109, south: 34.271999, east: 135.745407, north: 35.050865 },
      hyogo: { west: 134.253098, south: 34.625465, east: 135.467102, north: 35.674667 },
      nara: { west: 135.539597, south: 33.858799, east: 136.229004, north: 34.781265 },
      wakayama: { west: 135.056396, south: 33.433266, east: 136.011307, north: 34.384399 },
      tottori: { west: 133.135696, south: 35.057800, east: 134.514603, north: 35.614597 },
      shimane: { west: 131.667206, south: 34.302536, east: 133.325195, north: 35.604000 },
      okayama: { west: 133.266708, south: 34.429733, east: 134.412003, north: 35.352798 },
      hiroshima: { west: 132.035904, south: 34.193733, east: 133.455002, north: 35.105736 },
      yamaguchi: { west: 130.859695, south: 33.831799, east: 132.250305, north: 34.681000 },
      tokushima: { west: 133.660202, south: 33.545734, east: 134.749496, north: 34.239265 },
      kagawa: { west: 133.557098, south: 34.012402, east: 134.439697, north: 34.399734 },
      ehime: { west: 132.011902, south: 32.898067, east: 133.692001, north: 34.141998 },
      kochi: { west: 132.614197, south: 32.721664, east: 134.306000, north: 33.882999 },
      fukuoka: { west: 130.038696, south: 33.000465, east: 131.189102, north: 33.969601 },
      saga: { west: 129.758804, south: 32.956932, east: 130.541000, north: 33.556400 },
      nagasaki: { west: 129.552002, south: 32.569202, east: 130.377304, north: 33.399532 },
      kumamoto: { west: 130.359406, south: 32.094868, east: 131.328598, north: 33.194733 },
      oita: { west: 130.824005, south: 32.736134, east: 132.084595, north: 33.692467 },
      miyazaki: { west: 130.702499, south: 31.360733, east: 131.885101, north: 32.838467 },
      kagoshima: { west: 130.105606, south: 30.994200, east: 131.203796, north: 32.186867 },
      okinawa: { west: 127.635399, south: 26.073935, east: 128.325806, north: 26.874800 }
    };

    const labelAdjustments = {};
    const prefText = {
      hokkaido: { modernJa: '北海道', modernEn: 'Hokkaido', old: [['蝦夷地', 'Ezochi']] },
      aomori: { modernJa: '青森県', modernEn: 'Aomori', old: [['陸奥国', 'Mutsu']] },
      iwate: { modernJa: '岩手県', modernEn: 'Iwate', old: [['陸奥国', 'Mutsu']] },
      akita: { modernJa: '秋田県', modernEn: 'Akita', old: [['出羽国', 'Dewa']] },
      miyagi: { modernJa: '宮城県', modernEn: 'Miyagi', old: [['陸奥国', 'Mutsu']] },
      yamagata: { modernJa: '山形県', modernEn: 'Yamagata', old: [['出羽国', 'Dewa']] },
      fukushima: { modernJa: '福島県', modernEn: 'Fukushima', old: [['陸奥国', 'Mutsu']] },
      niigata: { modernJa: '新潟県', modernEn: 'Niigata', old: [['越後国', 'Echigo']] },
      toyama: { modernJa: '富山県', modernEn: 'Toyama', old: [['越中国', 'Etchu']] },
      ishikawa: { modernJa: '石川県', modernEn: 'Ishikawa', old: [['加賀国', 'Kaga'], ['能登国', 'Noto']] },
      fukui: { modernJa: '福井県', modernEn: 'Fukui', old: [['越前国', 'Echizen']] },
      yamanashi: { modernJa: '山梨県', modernEn: 'Yamanashi', old: [['甲斐国', 'Kai']] },
      nagano: { modernJa: '長野県', modernEn: 'Nagano', old: [['信濃国', 'Shinano']] },
      gifu: { modernJa: '岐阜県', modernEn: 'Gifu', old: [['美濃国', 'Mino'], ['飛騨国', 'Hida']] },
      shizuoka: { modernJa: '静岡県', modernEn: 'Shizuoka', old: [['駿河国', 'Suruga'], ['遠江国', 'Totomi'], ['伊豆国', 'Izu']] },
      aichi: { modernJa: '愛知県', modernEn: 'Aichi', old: [['尾張国', 'Owari'], ['三河国', 'Mikawa']] },
      mie: { modernJa: '三重県', modernEn: 'Mie', old: [['伊勢国', 'Ise'], ['志摩国', 'Shima'], ['伊賀国', 'Iga']] },
      gunma: { modernJa: '群馬県', modernEn: 'Gunma', old: [['上野国', 'Kozuke']] },
      tochigi: { modernJa: '栃木県', modernEn: 'Tochigi', old: [['下野国', 'Shimotsuke']] },
      ibaraki: { modernJa: '茨城県', modernEn: 'Ibaraki', old: [['常陸国', 'Hitachi']] },
      saitama: { modernJa: '埼玉県', modernEn: 'Saitama', old: [['武蔵国', 'Musashi']] },
      chiba: { modernJa: '千葉県', modernEn: 'Chiba', old: [['下総国', 'Shimosa'], ['上総国', 'Kazusa'], ['安房国', 'Awa']] },
      tokyo: { modernJa: '東京都', modernEn: 'Tokyo', old: [['武蔵国', 'Musashi']] },
      kanagawa: { modernJa: '神奈川県', modernEn: 'Kanagawa', old: [['相模国', 'Sagami'], ['武蔵国南部', 'Southern Musashi']] },
      shiga: { modernJa: '滋賀県', modernEn: 'Shiga', old: [['近江国', 'Omi']] },
      kyoto: { modernJa: '京都府', modernEn: 'Kyoto', old: [['山城国', 'Yamashiro']] },
      osaka: { modernJa: '大阪府', modernEn: 'Osaka', old: [['摂津国', 'Settsu']] },
      hyogo: { modernJa: '兵庫県', modernEn: 'Hyogo', old: [['播磨国', 'Harima'], ['但馬国', 'Tajima'], ['摂津国西部', 'Western Settsu'], ['丹波国西部', 'Western Tanba'], ['淡路国', 'Awaji']] },
      nara: { modernJa: '奈良県', modernEn: 'Nara', old: [['大和国', 'Yamato']] },
      wakayama: { modernJa: '和歌山県', modernEn: 'Wakayama', old: [['紀伊国', 'Kii']] },
      tottori: { modernJa: '鳥取県', modernEn: 'Tottori', old: [['因幡国', 'Inaba'], ['伯耆国', 'Hoki']] },
      shimane: { modernJa: '島根県', modernEn: 'Shimane', old: [['出雲国', 'Izumo'], ['石見国', 'Iwami'], ['隠岐国', 'Oki']] },
      okayama: { modernJa: '岡山県', modernEn: 'Okayama', old: [['備前国', 'Bizen'], ['備中国', 'Bitchu'], ['美作国', 'Mimasaka']] },
      hiroshima: { modernJa: '広島県', modernEn: 'Hiroshima', old: [['安芸国', 'Aki'], ['備後国', 'Bingo']] },
      yamaguchi: { modernJa: '山口県', modernEn: 'Yamaguchi', old: [['周防国', 'Suo'], ['長門国', 'Nagato']] },
      tokushima: { modernJa: '徳島県', modernEn: 'Tokushima', old: [['阿波国', 'Awa']] },
      kagawa: { modernJa: '香川県', modernEn: 'Kagawa', old: [['讃岐国', 'Sanuki']] },
      ehime: { modernJa: '愛媛県', modernEn: 'Ehime', old: [['伊予国', 'Iyo']] },
      kochi: { modernJa: '高知県', modernEn: 'Kochi', old: [['土佐国', 'Tosa']] },
      fukuoka: { modernJa: '福岡県', modernEn: 'Fukuoka', old: [['筑前国', 'Chikuzen'], ['筑後国', 'Chikugo'], ['豊前国', 'Buzen']] },
      saga: { modernJa: '佐賀県', modernEn: 'Saga', old: [['肥前国', 'Hizen']] },
      nagasaki: { modernJa: '長崎県', modernEn: 'Nagasaki', old: [['肥前国', 'Hizen'], ['壱岐国', 'Iki'], ['対馬国', 'Tsushima']] },
      kumamoto: { modernJa: '熊本県', modernEn: 'Kumamoto', old: [['肥後国', 'Higo']] },
      oita: { modernJa: '大分県', modernEn: 'Oita', old: [['豊後国', 'Bungo']] },
      miyazaki: { modernJa: '宮崎県', modernEn: 'Miyazaki', old: [['日向国', 'Hyuga']] },
      kagoshima: { modernJa: '鹿児島県', modernEn: 'Kagoshima', old: [['薩摩国', 'Satsuma'], ['大隅国', 'Osumi']] },
      okinawa: { modernJa: '沖縄県', modernEn: 'Okinawa', old: [['琉球王国', 'Ryukyu Kingdom']] }
    };

    const prefHistory = {
      hokkaido: { overview: '蝦夷地として本州戦国圏の外縁にあり、北方交易と松前の成立を入口に見る地域です。', daimyo: '蠣崎氏（松前氏） / Kakizaki (Matsumae)', hero: '蠣崎慶広 / Kakizaki Yoshihiro' },
      aomori: { overview: '北奥の要地で、津軽と南部の緊張関係から戦国末期の北東北像をつかみやすい地域です。', daimyo: '南部氏・津軽氏 / Nanbu, Tsugaru', hero: '津軽為信 / Tsugaru Tamenobu' },
      iwate: { overview: '陸奥北部の広い支配圏を意識しながら、南部氏の勢力基盤として見ると理解しやすい地域です。', daimyo: '南部氏 / Nanbu', hero: '南部信直 / Nanbu Nobunao' },
      akita: { overview: '日本海側の交易圏と結び付いた出羽北部で、安東氏の海上性が見どころです。', daimyo: '安東氏 / Ando', hero: '安東愛季 / Ando Chikasue' },
      miyagi: { overview: '仙台平野を含む陸奥南部の中核で、伊達氏の南奥支配を学ぶ入口になります。', daimyo: '伊達氏 / Date', hero: '伊達政宗 / Date Masamune' },
      yamagata: { overview: '出羽南部の盆地地帯で、最上氏の拡張と奥羽内陸交通を見比べやすい地域です。', daimyo: '最上氏 / Mogami', hero: '最上義光 / Mogami Yoshiaki' },
      fukushima: { overview: '会津・白河・相馬の線が交差し、奥州南端の争奪地として戦国後期を理解しやすい地域です。', daimyo: '蘆名氏・相馬氏 / Ashina, Soma', hero: '蘆名盛氏 / Ashina Moriuji' },
      niigata: { overview: '越後国として知られ、山内と日本海をつなぐ上杉氏の本拠圏として極めて重要です。', daimyo: '上杉氏 / Uesugi', hero: '上杉謙信 / Uesugi Kenshin' },
      toyama: { overview: '越中国として北陸諸国の結節点に位置し、神保氏や一向一揆の動きが重なります。', daimyo: '神保氏 / Jinbo', hero: '神保長職 / Jinbo Nagamoto' },
      ishikawa: { overview: '加賀・能登を抱え、一向一揆から前田支配への移行を見るのに適した地域です。', daimyo: '畠山氏・前田氏 / Hatakeyama, Maeda', hero: '前田利家 / Maeda Toshiie' },
      fukui: { overview: '越前国として朝倉氏の本拠となり、近畿と北陸をつなぐ軍事回廊でした。', daimyo: '朝倉氏 / Asakura', hero: '朝倉義景 / Asakura Yoshikage' },
      yamanashi: { overview: '甲斐国として武田氏の根幹を成し、山国戦略の中心として見るべき地域です。', daimyo: '武田氏 / Takeda', hero: '武田信玄 / Takeda Shingen' },
      nagano: { overview: '信濃国の広域を占め、川中島・上田など多くの戦国舞台が集まる内陸要地です。', daimyo: '村上氏・真田氏 / Murakami, Sanada', hero: '真田昌幸 / Sanada Masayuki' },
      gifu: { overview: '美濃と飛騨を含み、東西交通の喉元として斎藤氏と織田氏の交代劇が起きた地域です。', daimyo: '斎藤氏 / Saito', hero: '斎藤道三 / Saito Dosan' },
      shizuoka: { overview: '駿河・遠江・伊豆にまたがり、今川・武田・徳川がせめぎ合った東海道の要衝です。', daimyo: '今川氏 / Imagawa', hero: '今川義元 / Imagawa Yoshimoto' },
      aichi: { overview: '尾張と三河を軸に、織田氏と徳川氏が台頭した戦国中枢の一つです。', daimyo: '織田氏・徳川氏 / Oda, Tokugawa', hero: '織田信長 / Oda Nobunaga' },
      mie: { overview: '伊勢・志摩・伊賀を抱え、北畠氏や伊賀衆を通じて畿内東縁の複雑さを学べる地域です。', daimyo: '北畠氏 / Kitabatake', hero: '北畠具教 / Kitabatake Tomonori' },
      gunma: { overview: '上野国として関東北縁の防衛線を担い、武田・上杉・北条の接触地帯になりました。', daimyo: '長野氏 / Nagano', hero: '長野業正 / Nagano Narimasa' },
      tochigi: { overview: '下野国の中核で、宇都宮氏を軸に北関東諸勢力の均衡を見ることができます。', daimyo: '宇都宮氏 / Utsunomiya', hero: '宇都宮広綱 / Utsunomiya Hirotsuna' },
      ibaraki: { overview: '常陸国として東関東最大級の版図を持ち、佐竹氏の勢力圏として重要です。', daimyo: '佐竹氏 / Satake', hero: '佐竹義重 / Satake Yoshishige' },
      saitama: { overview: '武蔵国北部として江戸周辺へ通じる要所が多く、関東制圧の基盤地帯でした。', daimyo: '後北条氏 / Go-Hojo', hero: '北条氏康 / Hojo Ujiyasu' },
      chiba: { overview: '下総・上総・安房を含み、海上交通と房総諸勢力の分立を一緒に見られる地域です。', daimyo: '千葉氏・里見氏 / Chiba, Satomi', hero: '里見義堯 / Satomi Yoshitaka' },
      tokyo: { overview: '武蔵国の一角として江戸城の立地が光り、後の天下統治へつながる象徴地域です。', daimyo: '扇谷上杉氏・後北条氏 / Ogigayatsu Uesugi, Go-Hojo', hero: '太田道灌 / Ota Dokan' },
      kanagawa: { overview: '相模国の中核であり、小田原城を中心に後北条氏の政治・軍事が展開した地域です。', daimyo: '後北条氏 / Go-Hojo', hero: '北条氏康 / Hojo Ujiyasu' },
      shiga: { overview: '近江国として京畿を守る前線で、六角氏・浅井氏・織田氏の抗争が集中しました。', daimyo: '六角氏・浅井氏 / Rokkaku, Azai', hero: '浅井長政 / Azai Nagamasa' },
      kyoto: { overview: '山城国として将軍・公家・寺社・大名の思惑が重なる政治中枢でした。', daimyo: '細川氏 / Hosokawa', hero: '明智光秀 / Akechi Mitsuhide' },
      osaka: { overview: '摂津国の要地として石山本願寺から大坂城まで、天下人の拠点が移った地域です。', daimyo: '三好氏・豊臣氏 / Miyoshi, Toyotomi', hero: '豊臣秀吉 / Toyotomi Hideyoshi' },
      hyogo: { overview: '播磨・但馬・淡路など複数旧国を含み、西国進出の玄関口として重要でした。', daimyo: '赤松氏 / Akamatsu', hero: '黒田官兵衛 / Kuroda Kanbei' },
      nara: { overview: '大和国として寺社勢力と国人が密集し、筒井氏の台頭を軸に見やすい地域です。', daimyo: '筒井氏 / Tsutsui', hero: '筒井順慶 / Tsutsui Junkei' },
      wakayama: { overview: '紀伊国として雑賀衆や根来寺勢力が強く、鉄砲傭兵の地域性が際立ちます。', daimyo: '雑賀衆・畠山氏 / Saika-shu, Hatakeyama', hero: '鈴木孫一 / Suzuki Magoichi' },
      tottori: { overview: '因幡・伯耆を含む山陰東部で、山名氏衰退後の攻防と鳥取城戦が象徴的です。', daimyo: '山名氏 / Yamana', hero: '吉川経家 / Kikkawa Tsuneie' },
      shimane: { overview: '出雲・石見・隠岐を抱え、尼子氏と毛利氏の角逐を学ぶうえで欠かせない地域です。', daimyo: '尼子氏 / Amago', hero: '尼子経久 / Amago Tsunehisa' },
      okayama: { overview: '備前・備中・美作を含み、宇喜多氏の下剋上と山陽支配の流れが見やすい地域です。', daimyo: '宇喜多氏 / Ukita', hero: '宇喜多直家 / Ukita Naoie' },
      hiroshima: { overview: '安芸・備後にまたがる毛利氏の本拠圏で、西国統合の中心舞台でした。', daimyo: '毛利氏 / Mori', hero: '毛利元就 / Mori Motonari' },
      yamaguchi: { overview: '周防・長門を含み、大内氏の繁栄から毛利氏への交代を見ることができる地域です。', daimyo: '大内氏・毛利氏 / Ouchi, Mori', hero: '大内義隆 / Ouchi Yoshitaka' },
      tokushima: { overview: '阿波国として三好氏の基盤となり、畿内進出の足場を支えた地域です。', daimyo: '三好氏 / Miyoshi', hero: '三好長慶 / Miyoshi Nagayoshi' },
      kagawa: { overview: '讃岐国として瀬戸内海交通の節点にあり、三好一門や十河氏の動きが重要です。', daimyo: '十河氏・三好氏 / Sogo, Miyoshi', hero: '十河一存 / Sogo Kazumasa' },
      ehime: { overview: '伊予国として瀬戸内海航路と結びつき、河野氏や海賊衆の活動が目立つ地域です。', daimyo: '河野氏 / Kono', hero: '村上武吉 / Murakami Takeyoshi' },
      kochi: { overview: '土佐国として長宗我部氏の統一事業をたどるのに最も分かりやすい地域です。', daimyo: '長宗我部氏 / Chosokabe', hero: '長宗我部元親 / Chosokabe Motochika' },
      fukuoka: { overview: '筑前・筑後・豊前を含み、九州北部の政争と対外交易の入口として重要でした。', daimyo: '大友氏・立花氏 / Otomo, Tachibana', hero: '立花宗茂 / Tachibana Muneshige' },
      saga: { overview: '肥前国西部として龍造寺氏の急成長をたどりやすい地域です。', daimyo: '龍造寺氏 / Ryuzoji', hero: '龍造寺隆信 / Ryuzoji Takanobu' },
      nagasaki: { overview: '肥前の海港圏と壱岐・対馬を含み、南蛮貿易とキリシタン大名の拠点として特徴的です。', daimyo: '大村氏・有馬氏 / Omura, Arima', hero: '有馬晴信 / Arima Harunobu' },
      kumamoto: { overview: '肥後国として九州中央部を押さえ、戦国末から加藤氏の城郭整備へつながる地域です。', daimyo: '相良氏・加藤氏 / Sagara, Kato', hero: '加藤清正 / Kato Kiyomasa' },
      oita: { overview: '豊後国の中核であり、大友氏の南蛮文化と九州覇権争いを学ぶ入口になります。', daimyo: '大友氏 / Otomo', hero: '大友宗麟 / Otomo Sorin' },
      miyazaki: { overview: '日向国として伊東氏と島津氏のせめぎ合いが続いた、九州東岸の前線地域です。', daimyo: '伊東氏・島津氏 / Ito, Shimazu', hero: '伊東義祐 / Ito Yoshisuke' },
      kagoshima: { overview: '薩摩・大隅の本拠圏として、島津氏の九州制覇を支えた核心地域です。', daimyo: '島津氏 / Shimazu', hero: '島津義弘 / Shimazu Yoshihiro' },
      okinawa: { overview: '本土戦国圏とは別系統ですが、琉球王国として海上交流史の南端を補完する地域です。', daimyo: '琉球王国 / Ryukyu Kingdom', hero: '尚寧王 / Sho Nei' }
    };

    const clanRegistry = {
      '蠣崎氏': { label: '蠣崎氏', image: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Maru_ni_Takedabishi_%28No_background_and_Black_color_drawing%29.svg?width=250' },
      '松前氏': { label: '松前氏', image: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Maru_ni_Takedabishi_%28No_background_and_Black_color_drawing%29.svg?width=250' },
      '南部氏': { label: '南部氏', image: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Japanese_Crest_Nanbu_Turu.svg?width=250' },
      '津軽氏': { label: '津軽氏', image: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Japanese_crest_Tugaru_Botann.svg?width=250' },
      '安東氏': { label: '安東氏', image: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Japanese_Crest_Maru_ni_Mokkou%28White_background%29.svg?width=250' },
      '伊達氏': { label: '伊達氏', image: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Take_ni_Suzume.svg?width=250' },
      '最上氏': { label: '最上氏', image: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Ashikaga_mon.svg?width=250' },
      '蘆名氏': { label: '蘆名氏', image: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Marunimitsuhikiryo.svg?width=250' },
      '相馬氏': { label: '相馬氏', image: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Kuyo_%28inverted%29.svg?width=250' },
      '上杉氏': { label: '上杉氏', image: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Japanese_Crest_Uesugi_Sasa.svg?width=250' },
      '神保氏': { label: '神保氏', image: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/MaruniTateFutatsuHikiryou.png?width=250' },
      '畠山氏': { label: '畠山氏', image: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Ashikaga_mon.svg?width=250' },
      '前田氏': { label: '前田氏', image: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Japanese_crest_Kaga_Umebachi.svg?width=250' },
      '朝倉氏': { label: '朝倉氏', image: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Japanese_Crest_mitumori_mokkou.svg?width=250' },
      '武田氏': { label: '武田氏', image: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Japanese_Crest_Takeda_Hisi.svg?width=250' },
      '村上氏': { label: '村上氏', image: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Kamon_Murakami.jpg?width=250' },
      '真田氏': { label: '真田氏', image: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Rokumonsen.svg?width=250' },
      '斎藤氏': { label: '斎藤氏', image: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Nadeshiko_inverted.jpg?width=250' },
      '今川氏': { label: '今川氏', image: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Japanese_crest_Imagawa_Akadori.svg?width=250' },
      '織田氏': { label: '織田氏', image: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Oda_emblem.svg?width=250' },
      '北畠氏': { label: '北畠氏', image: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Sasa_Rind%C5%8D_inverted.png?width=250' },
      '長野氏': { label: '長野氏', image: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Japanese_Crest_ken_Katabami.svg?width=250' },
      '宇都宮氏': { label: '宇都宮氏', image: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Tokikikyo.svg?width=250' },
      '佐竹氏': { label: '佐竹氏', image: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Japanese_Crest_Hinomaru_Oogi.svg?width=250' },
      '後北条氏': { label: '後北条氏', image: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Mitsuuroko.svg?width=250' },
      '千葉氏': { label: '千葉氏', image: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Japanese_crest_Tsuki_ni_Hoshi.svg?width=250' },
      '里見氏': { label: '里見氏', image: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Futatsuhikiryo.svg?width=250' },
      '扇谷上杉氏': { label: '扇谷上杉氏', image: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Japanese_Crest_Uesugi_Sasa.svg?width=250' },
      '六角氏': { label: '六角氏', image: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/So_clan_mon2.svg?width=250' },
      '浅井氏': { label: '浅井氏', image: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Japanese_Crest_mitumori_Kikkou_ni_Hanabishi.svg?width=250' },
      '細川氏': { label: '細川氏', image: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Japanese_Crest_Hosokawa_Kuyou.svg?width=250' },
      '明智氏': { label: '明智氏', image: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Japanese_Crest_Mizuiro_Kikyou.svg?width=250' },
      '三好氏': { label: '三好氏', image: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Japanese_Crest_mitumori_Kikkou_ni_Hanabishi.svg?width=250' },
      '豊臣氏': { label: '豊臣氏', image: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Goshichi_no_kiri_inverted.svg?width=250' },
      '赤松氏': { label: '赤松氏', image: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/%E8%B5%A4%E6%9D%BE%E5%AE%B6%E5%AE%B6%E7%B4%8B.jpg?width=250' },
      '筒井氏': { label: '筒井氏', image: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Japanese_crest_Umebachi.svg?width=250' },
      '雑賀衆': { label: '雑賀衆', image: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Maru_ni_J%C5%AB-monji_-_Miyakonoj%C5%8D_Shimazu.png?width=250' },
      '山名氏': { label: '山名氏', image: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/%E4%BA%94%E4%B8%83%E6%A1%90%E3%81%AB%E4%B8%83%E8%91%89%E6%A0%B9%E7%AC%B9.png?width=250' },
      '尼子氏': { label: '尼子氏', image: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Japanese_crest_Yotumeyui.svg?width=250' },
      '宇喜多氏': { label: '宇喜多氏', image: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Japanese_Crest_ken_Katabami.svg?width=250' },
      '毛利氏': { label: '毛利氏', image: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Ichimonjimitsuboshi.svg?width=250' },
      '大内氏': { label: '大内氏', image: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Japanese_Crest_Oouchi_Hisi.svg?width=250' },
      '十河氏': { label: '十河氏', image: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Japanese_Crest_Kawarijuunihiashi.svg?width=250' },
      '河野氏': { label: '河野氏', image: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Japanese_crest_Umebachi.svg?width=250' },
      '長宗我部氏': { label: '長宗我部氏', image: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Nanatsukatabami.svg?width=250' },
      '大友氏': { label: '大友氏', image: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Japanese_Crest_Daki_hana_Gyouyou.svg?width=250' },
      '立花氏': { label: '立花氏', image: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Japanese_Crest_Tachibana_Mamori.svg?width=250' },
      '龍造寺氏': { label: '龍造寺氏', image: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Japanese_Crest_Kawarijuunihiashi.svg?width=250' },
      '大村氏': { label: '大村氏', image: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Maru_ni_J%C5%AB-monji_-_Miyakonoj%C5%8D_Shimazu.png?width=250' },
      '有馬氏': { label: '有馬氏', image: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Japanese_crest_Arima_Mokkou.svg?width=250' },
      '相良氏': { label: '相良氏', image: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Japanese_crest_Sagara_Umebachi.svg?width=250' },
      '加藤氏': { label: '加藤氏', image: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Kikyo.svg?width=250' },
      '伊東氏': { label: '伊東氏', image: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Japanese_Crest_Iori_ni_Mokkou.svg?width=250' },
      '島津氏': { label: '島津氏', image: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Japanese_Crest_maru_ni_jyuji.svg?width=250' },
      '徳川氏': { label: '徳川氏', image: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Mitsubaaoi.svg?width=250' },
      '琉球王国': { label: '琉球王国', image: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Japanese_Crest_Shimazu_Jujimon.svg?width=250' }
    };

    const kamonImageByMon = {
      wave: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Oda_emblem.svg/250px-Oda_emblem.svg.png',
      crane: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Japanese_Crest_Hinomaru_Oogi.svg/250px-Japanese_Crest_Hinomaru_Oogi.svg.png',
      peony: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Oda_emblem.svg/250px-Oda_emblem.svg.png',
      flower: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Japanese_Crest_Daki_hana_Gyouyou.svg/250px-Japanese_Crest_Daki_hana_Gyouyou.svg.png',
      scale: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Japanese_Crest_Houjou_Uroko.svg/250px-Japanese_Crest_Houjou_Uroko.svg.png',
      horse: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Kuyo_%28inverted%29.svg/250px-Kuyo_%28inverted%29.svg.png',
      crossdiamond: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Japanese_Crest_Kawarijuunihiashi.svg/250px-Japanese_Crest_Kawarijuunihiashi.svg.png',
      hexaflower: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Japanese_Crest_Daki_hana_Gyouyou.svg/250px-Japanese_Crest_Daki_hana_Gyouyou.svg.png',
      plum: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Japanese_crest_Umebachi.svg?width=250',
      mokko: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Oda_emblem.svg/250px-Oda_emblem.svg.png',
      diamond: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Japanese_Crest_Takeda_Hisi.svg/250px-Japanese_Crest_Takeda_Hisi.svg.png',
      shipwheel: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Mouri.svg/250px-Mouri.svg.png',
      doublewave: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Oda_emblem.svg/250px-Oda_emblem.svg.png',
      bars: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Japanese_crest_Imagawa_Akadori.svg/250px-Japanese_crest_Imagawa_Akadori.svg.png',
      moonstar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Japanese_Crest_Date_Sendaizasa.svg/250px-Japanese_Crest_Date_Sendaizasa.svg.png',
      ninecircles: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Japanese_Crest_Hosokawa_Kuyou.svg/250px-Japanese_Crest_Hosokawa_Kuyou.svg.png',
      kikyo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Japanese_Crest_Mizuiro_Kikyou.svg/250px-Japanese_Crest_Mizuiro_Kikyou.svg.png',
      tristar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Japanese_Crest_mitumori_Kikkou_ni_Hanabishi.svg/250px-Japanese_Crest_mitumori_Kikkou_ni_Hanabishi.svg.png',
      paulownia: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Goshichi_no_kiri_inverted.svg/250px-Goshichi_no_kiri_inverted.svg.png',
      crossfeather: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Mouri.svg/250px-Mouri.svg.png',
      wellframe: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Japanese_Crest_mitumori_Kikkou_ni_Hanabishi.svg/250px-Japanese_Crest_mitumori_Kikkou_ni_Hanabishi.svg.png',
      target: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Maru_ni_J%C5%AB-monji_-_Miyakonoj%C5%8D_Shimazu.png?width=250',
      rokumonsen: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Japanese_Crest_Sanada_Rokumonsen.svg/250px-Japanese_Crest_Sanada_Rokumonsen.svg.png',
      butterfly: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Mouri.svg/250px-Mouri.svg.png',
      owlwings: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Japanese_Crest_Daki_hana_Gyouyou.svg/250px-Japanese_Crest_Daki_hana_Gyouyou.svg.png',
      katabami: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Japanese_Crest_ken_Katabami.svg?width=250',
      tachibana: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Japanese_crest_Tachibana.svg?width=250',
      snakeeye: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Japanese_Crest_Takeda_Hisi.svg/250px-Japanese_Crest_Takeda_Hisi.svg.png',
      sun: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Japanese_Crest_Shimazu_Jujimon.svg/250px-Japanese_Crest_Shimazu_Jujimon.svg.png',
      hollyhock: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Mitsubaaoi.svg/250px-Mitsubaaoi.svg.png',
      starline: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Mouri.svg/250px-Mouri.svg.png',
      star: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Japanese_Crest_Mizuiro_Kikyou.svg/250px-Japanese_Crest_Mizuiro_Kikyou.svg.png',
      fans: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Japanese_Crest_Hinomaru_Oogi.svg/250px-Japanese_Crest_Hinomaru_Oogi.svg.png',
      bamboo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Japanese_Crest_Uesugi_Sasa.svg/250px-Japanese_Crest_Uesugi_Sasa.svg.png',
      crosscircle: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Maru_ni_J%C5%AB-monji_-_Miyakonoj%C5%8D_Shimazu.png?width=250',
      hexagon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Japanese_Crest_mitumori_Kikkou_ni_Hanabishi.svg/250px-Japanese_Crest_mitumori_Kikkou_ni_Hanabishi.svg.png'
    };

    const routeMeta = {
      all: {
        titleJa: '全域表示',
        titleEn: 'All Regions',
        subtitle: '北海道から九州・沖縄までの戦国地名対応を一覧できます。',
        province: '全国の旧国名を横断表示',
        region: '日本列島 / Japanese Archipelago',
        daimyo: '織田氏 / Oda, 上杉氏 / Uesugi, 毛利氏 / Mori, 島津氏 / Shimazu',
        hero: '織田信長 / Oda Nobunaga, 武田信玄 / Takeda Shingen, 毛利元就 / Mori Motonari',
        overview: 'まず全域で位置関係をつかみ、その後に八大地域や各都道府県へ絞ると旅行学習がしやすくなります。'
      },
      hokkaido: {
        titleJa: '北海道',
        titleEn: 'Hokkaido',
        subtitle: '戦国本土の外縁として、蝦夷地の位置付けを確認できます。',
        province: '蝦夷地 / Ezochi',
        region: '北海道 / Hokkaido',
        daimyo: '蠣崎氏 / Kakizaki',
        hero: '蠣崎慶広 / Kakizaki Yoshihiro',
        overview: '本州の戦国大名圏とは異なる北方世界として見ると、日本列島全体の広がりが分かりやすくなります。'
      },
      tohoku: {
        titleJa: '東北',
        titleEn: 'Tohoku',
        subtitle: '陸奥・出羽を中心に、奥羽の広大な版図をまとめて見ます。',
        province: '陸奥 / Mutsu ・ 出羽 / Dewa',
        region: '東北 / Tohoku',
        daimyo: '伊達氏 / Date, 最上氏 / Mogami, 南部氏 / Nanbu',
        hero: '伊達政宗 / Date Masamune',
        overview: '北奥羽では一国の範囲が広く、現代県名と旧国名のずれを意識すると戦国地理の理解が深まります。'
      },
      kanto: {
        titleJa: '関東',
        titleEn: 'Kanto',
        subtitle: '武蔵・相模・上野・常陸など、東国の中枢諸国を一覧できます。',
        province: '武蔵 / Musashi ・ 相模 / Sagami ・ 上野 / Kozuke ほか',
        region: '関東 / Kanto',
        daimyo: '後北条氏 / Go-Hojo, 佐竹氏 / Satake, 宇都宮氏 / Utsunomiya',
        hero: '北条氏康 / Hojo Ujiyasu',
        overview: '江戸以前の東国支配を考えるうえで、広い武蔵国と小田原を中心とする後北条圏が鍵になります。'
      },
      chubu: {
        titleJa: '中部',
        titleEn: 'Chubu',
        subtitle: '甲斐・信濃・越後から尾張まで、戦国中部の主戦場を横断表示します。',
        province: '甲斐 / Kai ・ 信濃 / Shinano ・ 越後 / Echigo ・ 尾張 / Owari ほか',
        region: '中部 / Chubu',
        daimyo: '武田氏 / Takeda, 上杉氏 / Uesugi, 織田氏 / Oda',
        hero: '武田信玄 / Takeda Shingen',
        overview: '中部は山岳・内陸・東海道が交差し、戦国史の主要人物が密集するため、地図学習の中心軸になります。'
      },
      kinki: {
        titleJa: '近畿',
        titleEn: 'Kinki',
        subtitle: '山城・摂津・近江・大和など、政権中枢に近い地域をまとめています。',
        province: '山城 / Yamashiro ・ 摂津 / Settsu ・ 近江 / Omi ・ 大和 / Yamato',
        region: '近畿 / Kinki',
        daimyo: '細川氏 / Hosokawa, 三好氏 / Miyoshi, 浅井氏 / Azai',
        hero: '豊臣秀吉 / Toyotomi Hideyoshi',
        overview: '畿内は戦場というだけでなく政治中枢でもあり、寺社・将軍・天下人の動きが地理と密接に結び付きます。'
      },
      chugoku: {
        titleJa: '中国',
        titleEn: 'Chugoku',
        subtitle: '山陰・山陽をまたぐ毛利・尼子・大内の勢力圏を比較できます。',
        province: '出雲 / Izumo ・ 石見 / Iwami ・ 安芸 / Aki ・ 長門 / Nagato ほか',
        region: '中国 / Chugoku',
        daimyo: '毛利氏 / Mori, 尼子氏 / Amago, 大内氏 / Ouchi',
        hero: '毛利元就 / Mori Motonari',
        overview: '中国地方では山陰と山陽の結び付きが重要で、毛利氏の拡張を軸に見ると各旧国の位置関係が整理しやすくなります。'
      },
      shikoku: {
        titleJa: '四国',
        titleEn: 'Shikoku',
        subtitle: '阿波・讃岐・伊予・土佐の四旧国を現代四県と一対一で確認できます。',
        province: '阿波 / Awa ・ 讃岐 / Sanuki ・ 伊予 / Iyo ・ 土佐 / Tosa',
        region: '四国 / Shikoku',
        daimyo: '長宗我部氏 / Chosokabe, 三好氏 / Miyoshi, 河野氏 / Kono',
        hero: '長宗我部元親 / Chosokabe Motochika',
        overview: '四国は旧国と現代県の対応が比較的分かりやすく、戦国地理の入門にも向いています。'
      },
      kyushu: {
        titleJa: '九州',
        titleEn: 'Kyushu',
        subtitle: '肥前・肥後・豊後・薩摩など、西国大名の広域競争を一枚で見られます。',
        province: '肥前 / Hizen ・ 肥後 / Higo ・ 豊後 / Bungo ・ 薩摩 / Satsuma ほか',
        region: '九州 / Kyushu',
        daimyo: '島津氏 / Shimazu, 大友氏 / Otomo, 龍造寺氏 / Ryuzoji',
        hero: '島津義弘 / Shimazu Yoshihiro',
        overview: '九州では大友・龍造寺・島津の三極競争を意識すると、旧国ごとの位置関係と進軍方向が把握しやすくなります。'
      }
    };
    function escapeXml(text) {
      return String(text)
        .replaceAll('&', '&amp;')
        .replaceAll('<', '&lt;')
        .replaceAll('>', '&gt;')
        .replaceAll('"', '&quot;')
        .replaceAll("'", '&#39;');
    }

    function kamonImage(entry) {
      return entry.image || kamonImageByMon[entry.mon] || kamonImageByMon.mokko;
    }

    function escapeRegExp(text) {
      return text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }

    function splitClanTokens(text) {
      return text
        .split('・')
        .map(token => token.trim())
        .filter(Boolean);
    }

    function splitRomanTokens(text) {
      return text
        .split(/[，,]/)
        .map(token => token.trim())
        .filter(Boolean);
    }

    function extractClanEntries(text) {
      const pairs = [];
      const grouped = text.match(/^(.*?)\s*\/\s*(.*)$/);

      if (grouped) {
        const japaneseTokens = splitClanTokens(grouped[1]);
        const romanTokens = splitRomanTokens(grouped[2]);
        if (japaneseTokens.length === romanTokens.length) {
          japaneseTokens.forEach((jp, index) => {
            const match = Object.entries(clanRegistry).find(([key]) => jp.includes(key));
            if (!match) return;
            const [key, value] = match;
            pairs.push({
              key,
              image: kamonImage(value),
              displayJa: jp,
              displayRoman: romanTokens[index]
            });
          });
        }
      }

      if (pairs.length) return pairs;

      return Object.entries(clanRegistry)
        .filter(([key]) => text.includes(key))
        .map(([key, value]) => {
          const match = text.match(new RegExp(`${escapeRegExp(key)}(?:（[^）]+）)?\\s*\\/\\s*([^,，]+)`, 'u'));
          return {
            key,
            image: kamonImage(value),
            displayJa: value.label,
            displayRoman: match ? match[1].trim() : ''
          };
        });
    }

    function renderDaimyoWithKamon(text) {
      const clans = extractClanEntries(text);
      const chips = clans.length
        ? `<div class="kamon-list">${clans.map(item => `<span class="kamon-chip"><span class="kamon-medallion"><img class="kamon-img" src="${escapeXml(item.image)}" alt="${escapeXml(item.displayJa)}の家紋" loading="lazy" referrerpolicy="no-referrer"></span><span class="kamon-label">${escapeXml(item.displayJa)}${item.displayRoman ? ` / ${escapeXml(item.displayRoman)}` : ''}</span></span>`).join('')}</div>`
        : '';
      const textBlock = clans.length
        ? ''
        : `<div class="daimyo-text">${escapeXml(text)}</div>`;
      return `<div class="daimyo-wrap">${chips}${textBlock}</div>`;
    }

    function normalizeTokens(query) {
      return query
        .toLowerCase()
        .split(/[\s/·、，]+/)
        .map(token => token.trim())
        .filter(Boolean);
    }

    function matchesTokens(haystackParts, query) {
      if (!query) return true;
      const haystack = haystackParts.join(' ').toLowerCase();
      const tokens = normalizeTokens(query);
      return tokens.some(token => haystack.includes(token));
    }

    function matchesPref(pref, query) {
      const text = prefText[pref.id];
      const history = prefHistory[pref.id];
      return matchesTokens([
        text.modernJa,
        text.modernEn,
        text.old.map(item => item.join(' ')).join(' '),
        regionName(pref.region),
        history?.daimyo || '',
        history?.hero || '',
        history?.overview || ''
      ], query);
    }

    function regionName(region) {
      return {
        hokkaido: '北海道 Hokkaido',
        tohoku: '東北 Tohoku',
        kanto: '関東 Kanto',
        chubu: '中部 Chubu',
        kansai: '近畿 Kinki',
        chugoku: '中国 Chugoku',
        shikoku: '四国 Shikoku',
        kyushu: '九州 Kyushu'
      }[region] || region;
    }

    function labelForPref(pref) {
      const text = prefText[pref.id];
      return state.mode === 'province' ? text.old[0][0] : text.modernJa;
    }

    function subLabelForPref(pref) {
      const text = prefText[pref.id];
      return state.mode === 'province' ? text.old[0][1] : text.modernEn;
    }

    function oldNameLine(pref) {
      return prefText[pref.id].old.map(([ja, en]) => `${ja} / ${en}`).join(' ・ ');
    }

    function currentSelectedPrefId() {
      return state.selectedType === 'pref' ? state.selectedId : null;
    }

    function cityPointsForPref(pref) {
      const cities = cityCatalog[pref.id] || [];
      const geoBounds = prefGeoBounds[pref.id];
      const group = mapSvg.querySelector(`.prefecture[data-pref-id="${pref.id}"]`);
      const mainLand = group?.querySelector('.main') || group;
      const mapBounds = mainLand ? boundsInMapCoordinates(mainLand) : null;

      if (!geoBounds || !mapBounds) return [];

      const longitudeSpan = geoBounds.east - geoBounds.west;
      const latitudeSpan = geoBounds.north - geoBounds.south;
      return cities.map(city => ({
        ...city,
        x: mapBounds.x + ((city.lon - geoBounds.west) / longitudeSpan) * mapBounds.width,
        y: mapBounds.y + ((geoBounds.north - city.lat) / latitudeSpan) * mapBounds.height
      }));
    }

    function routeAllowsPref(pref) {
      return true;
    }

    function prefRelevantToQuery(pref, query) {
      return matchesPref(pref, query);
    }

    function prefVisible(pref, query) {
      return routeAllowsPref(pref) && prefRelevantToQuery(pref, query);
    }

    function syncPrefectureCentersFromSvg() {
      const screenToSvg = mapSvg.getScreenCTM()?.inverse();
      if (!screenToSvg) return;

      prefectures.forEach(pref => {
        const group = mapSvg.querySelector(`.prefecture[data-pref-id="${pref.id}"]`);
        if (!group) return;
        const box = group.getBoundingClientRect();
        if (!box.width || !box.height) return;
        const point = mapSvg.createSVGPoint();
        point.x = box.left + box.width / 2;
        point.y = box.top + box.height / 2;
        const center = point.matrixTransform(screenToSvg);
        const [dx, dy] = labelAdjustments[pref.id] || [0, 0];
        pref.x = Number((center.x + dx).toFixed(1));
        pref.y = Number((center.y + dy).toFixed(1));
      });
    }

    function bindPrefectureSvg() {
      prefectures.forEach(pref => {
        const group = mapSvg.querySelector(`.${pref.id}.prefecture`);
        if (!group) return;
        group.dataset.prefId = pref.id;
        group.dataset.region = pref.region;
        group.onmouseenter = () => showTooltipFor('pref', pref.id, group);
        group.onmousemove = event => moveTooltip(event);
        group.onmouseleave = hideTooltip;
        group.onclick = () => selectItem('pref', pref.id);
      });

      syncPrefectureCentersFromSvg();
    }

    function syncPrefectureSvgState() {
      const selectedPrefId = currentSelectedPrefId();

      prefectures.forEach(pref => {
        const group = mapSvg.querySelector(`.prefecture[data-pref-id="${pref.id}"]`);
        if (!group) return;
        const visible = prefVisible(pref, state.query);
        const dim = selectedPrefId ? pref.id !== selectedPrefId : !visible;
        group.classList.toggle('is-dim', Boolean(dim));
        group.classList.toggle('is-selected', selectedPrefId === pref.id);
      });
    }

    function makePrefGroup(pref) {
      const selectedPrefId = currentSelectedPrefId();
      const dim = selectedPrefId ? pref.id !== selectedPrefId : !prefVisible(pref, state.query);
      const isSelected = currentSelectedPrefId() === pref.id;
      const label = labelForPref(pref);
      const sub = subLabelForPref(pref);
      return `
        <g class="pref-group region-${pref.region} ${dim ? 'is-dim' : ''} ${isSelected ? 'is-selected' : ''}" data-type="pref" data-id="${pref.id}">
          <path class="pref-cell" d=""></path>
          <text class="pref-label" x="${pref.x}" y="${pref.y + 4}">${escapeXml(label)}</text>
          <text class="pref-sub" x="${pref.x}" y="${pref.y + 19}">${escapeXml(sub)}</text>
        </g>
      `;
    }

    function renderCityLabels() {
      const prefId = currentSelectedPrefId();
      if (!prefId) return '';
      const pref = prefMap.get(prefId);
      if (!pref) return '';
      return cityPointsForPref(pref).map(city => `
        <g class="city-group">
          <circle class="city-dot" cx="${city.x}" cy="${city.y}" r="3.5"></circle>
          <text class="city-name" x="${city.x}" y="${city.y - 8}">${escapeXml(city.name)}</text>
        </g>
      `).join('');
    }

    function boundsInMapCoordinates(node) {
      const screenToMap = mapSvg.getScreenCTM()?.inverse();
      if (!screenToMap) return null;

      const rect = node.getBoundingClientRect();
      const corners = [
        [rect.left, rect.top],
        [rect.right, rect.top],
        [rect.right, rect.bottom],
        [rect.left, rect.bottom]
      ].map(([x, y]) => {
        const point = mapSvg.createSVGPoint();
        point.x = x;
        point.y = y;
        return point.matrixTransform(screenToMap);
      });

      const xs = corners.map(point => point.x);
      const ys = corners.map(point => point.y);
      const x = Math.min(...xs);
      const y = Math.min(...ys);
      return {
        x,
        y,
        width: Math.max(...xs) - x,
        height: Math.max(...ys) - y
      };
    }

    function applyMapView() {
      const prefId = currentSelectedPrefId();
      if (!prefId) {
        mapSvg.setAttribute('viewBox', `${defaultViewBox.x} ${defaultViewBox.y} ${defaultViewBox.width} ${defaultViewBox.height}`);
        return;
      }

      const group = mapSvg.querySelector(`.prefecture[data-pref-id="${prefId}"]`);
      const pref = prefMap.get(prefId);
      if (!group || !pref) {
        mapSvg.setAttribute('viewBox', `${defaultViewBox.x} ${defaultViewBox.y} ${defaultViewBox.width} ${defaultViewBox.height}`);
        return;
      }

      const cameraTarget = group.querySelector('.main') || group;
      const bbox = boundsInMapCoordinates(cameraTarget);
      if (!bbox) return;
      const cityPoints = cityPointsForPref(pref);
      let minX = bbox.x;
      let minY = bbox.y;
      let maxX = bbox.x + bbox.width;
      let maxY = bbox.y + bbox.height;

      cityPoints.forEach(city => {
        minX = Math.min(minX, city.x - 34);
        maxX = Math.max(maxX, city.x + 34);
        minY = Math.min(minY, city.y - 28);
        maxY = Math.max(maxY, city.y + 14);
      });

      const padX = Math.max(36, (maxX - minX) * 0.32);
      const padY = Math.max(32, (maxY - minY) * 0.36);
      minX -= padX;
      maxX += padX;
      minY -= padY;
      maxY += padY;

      const aspect = (mapSvg.clientWidth || 1) / (mapSvg.clientHeight || 1);
      let width = maxX - minX;
      let height = maxY - minY;

      if (width / height > aspect) {
        const expandedHeight = width / aspect;
        const extra = expandedHeight - height;
        minY -= extra / 2;
        maxY += extra / 2;
        height = expandedHeight;
      } else {
        const expandedWidth = height * aspect;
        const extra = expandedWidth - width;
        minX -= extra / 2;
        maxX += extra / 2;
        width = expandedWidth;
      }

      const cameraHeight = Math.max(260, Math.min(520, height));
      height = cameraHeight;
      width = height * aspect;

      const centerX = bbox.x + bbox.width / 2;
      const centerY = bbox.y + bbox.height / 2;

      const desiredX = centerX - width * 0.5;
      const desiredY = centerY - height * 0.5;
      mapSvg.setAttribute('viewBox', `${desiredX.toFixed(1)} ${desiredY.toFixed(1)} ${width.toFixed(1)} ${height.toFixed(1)}`);
    }

    function selectItem(type, id) {
      state.selectedType = type;
      state.selectedId = id;
      state.route = 'all';
      render();
    }

    function resetToOverview() {
      state.route = 'all';
      state.selectedType = 'route';
      state.selectedId = 'all';
      hideTooltip();
      render();
    }

    function renderDetail() {
      if (state.selectedType === 'route') {
        const info = routeMeta[state.selectedId] || routeMeta.all;
        detailTitle.textContent = `${info.titleJa} / ${info.titleEn}`;
        detailSubline.textContent = info.subtitle;
        detailProvince.textContent = info.province;
        detailRegion.textContent = info.region;
        detailDaimyo.innerHTML = renderDaimyoWithKamon(info.daimyo);
        detailHero.textContent = info.hero;
        detailOverview.textContent = info.overview;
        return;
      }

      const entry = prefMap.get(state.selectedId);
      if (!entry) return;
      const text = prefText[entry.id];
      const history = prefHistory[entry.id];
      detailTitle.textContent = `${text.modernJa} / ${text.modernEn}`;
      detailSubline.textContent = `戦国期地名：${oldNameLine(entry)}`;
      detailOverview.textContent = history?.overview || `${text.modernJa} の戦国史概要です。`;
      detailProvince.textContent = oldNameLine(entry);
      detailRegion.textContent = regionName(entry.region);
      detailDaimyo.innerHTML = renderDaimyoWithKamon(history?.daimyo || '複数勢力');
      detailHero.textContent = history?.hero || '地域代表武将';
    }

    function render() {
      const query = searchInput.value.trim();
      state.query = query;
      const filteredPrefs = prefectures.filter(item => prefVisible(item, query));

      prefLayer.innerHTML = prefectures.map(makePrefGroup).join('');
      cityLayer.innerHTML = renderCityLabels();

      resultCount.textContent = `${filteredPrefs.length} 都道府県を表示中`;

      document.querySelectorAll('.tab').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.mode === state.mode);
      });

      syncPrefectureSvgState();
      applyMapView();
      renderDetail();
      bindInteractions();
    }

    function bindInteractions() {
      document.querySelectorAll('[data-select-pref]').forEach(node => {
        node.onclick = () => selectItem('pref', node.dataset.selectPref);
      });
    }

    document.querySelectorAll('.tab').forEach(btn => {
      btn.addEventListener('click', () => {
        state.mode = btn.dataset.mode;
        render();
      });
    });

    searchInput.addEventListener('input', () => {
      resetToOverview();
    });

    mapShell.addEventListener('click', event => {
      const clickedPrefecture = event.target.closest('.prefecture');
      if (clickedPrefecture) return;
      if (state.selectedType === 'pref') {
        resetToOverview();
      }
    });

    function showTooltipFor(type, id, anchorNode) {
      const entry = prefMap.get(id);
      const text = prefText[id];
      const history = prefHistory[id];
      const rect = anchorNode.getBoundingClientRect();
      tooltip.innerHTML = `<strong>${escapeXml(text.modernJa)} / ${escapeXml(text.modernEn)}</strong><span>戦国期地名：${escapeXml(oldNameLine(entry))}</span><span>守護・大名：${escapeXml(history?.daimyo || '複数勢力')}</span><span>武将：${escapeXml(history?.hero || '地域代表武将')}</span>`;
      tooltip.style.left = `${Math.min(rect.left + rect.width / 2, window.innerWidth - 280)}px`;
      tooltip.style.top = `${Math.max(12, rect.top - 8)}px`;
      tooltip.style.opacity = '1';
    }

    function moveTooltip(event) {
      tooltip.style.left = `${Math.min(event.clientX + 18, window.innerWidth - 280)}px`;
      tooltip.style.top = `${Math.max(12, event.clientY + 18)}px`;
    }

    function hideTooltip() {
      tooltip.style.opacity = '0';
    }

    bindPrefectureSvg();
    render();
  