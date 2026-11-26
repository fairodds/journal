/* ===== «Решение» и «Нелогичный кф» (добавлено 26.11.26) =====
   Подключается в index.html одной строкой после блока языков.
   Работает поверх DATA, COLS, VIEWS, render() основной страницы. */
(function(){
'use strict';

/* ---------- переводы ---------- */
Object.assign(TXD, {
  'Решение': ['Рішення', 'Decision'],
  'Закрыть': ['Закрити', 'Close'],
  '🧩 Нелогичный кф': ['🧩 Нелогічний кф', '🧩 Illogical odds'],
  'Нелогичный кф': ['Нелогічний кф', 'Illogical odds'],
  'Итог': ['Підсумок', 'Result'],
  'Вид': ['Вид', 'Sport'],
  'ДА': ['ТАК', 'YES'], 'НЕТ': ['НІ', 'NO'],
  'возврат': ['повернення', 'refund'], 'зашло ✓': ['зайшло ✓', 'won ✓'], 'не зашло ✕': ['не зайшло ✕', 'lost ✕'],
  'Дополнительные:': ['Додаткові:', 'Additional:'],
  'обязательная': ["обов'язкова", 'required'], 'дополнительная': ['додаткова', 'additional'],
  'матч.': ['матч.', 'm.'], '— мало матчей': ['— мало матчів', '— too few matches'],
  'Рынок': ['Ринок', 'Market'], 'кф': ['кф', 'odds'], 'Зашло': ['Зайшло', 'Won'],
  'На усмотрение — в решении не учитывается': ['На розсуд — у рішенні не враховується', 'Optional — not counted in the decision'],
  'Ожидаемый тотал:': ['Очікуваний тотал:', 'Expected total:'], 'линия': ['лінія', 'line'],
  'Четверти:': ['Чверті:', 'Quarters:'], 'Голов в среднем:': ['Голів у середньому:', 'Avg goals:'],
  '1ч': ['1ч', 'Q1'], '2ч': ['2ч', 'Q2'], '3ч': ['3ч', 'Q3'], '4ч': ['4ч', 'Q4'],
  'Коридор + категория + маржа': ['Коридор + категорія + маржа', 'Corridor + category + margin'],
  'Матмодель + маржа': ['Матмодель + маржа', 'Math model + margin'],
  'Коридор + чемпионат': ['Коридор + чемпіонат', 'Corridor + league'],
  'Категория + весы': ['Категорія + ваги', 'Category + scales'],
  'Тотал + маржа': ['Тотал + маржа', 'Total + margin'],
  'точный коридор + пара + маржа': ['точний коридор + пара + маржа', 'exact corridor + pair + margin'],
  'без маржи': ['без маржі', 'no margin'],
  'шире коридор ±12%': ['ширший коридор ±12%', 'wider corridor ±12%'],
  'только П1/П2 ±20%': ['лише П1/П2 ±20%', '1/2 only ±20%'],
  'ещё шире ±25%': ['ще ширше ±25%', 'even wider ±25%'],
  'полная матмодель + маржа': ['повна матмодель + маржа', 'full math model + margin'],
  'без ОЗ': ['без ОЗ', 'no BTTS'], 'без ОЗ и ТМ/ТБ': ['без ОЗ і ТМ/ТБ', 'no BTTS and U/O'],
  'матмодель (П1, П2, фора, Ф1, Ф2) + маржа': ['матмодель (П1, П2, фора, Ф1, Ф2) + маржа', 'math model (1, 2, handicap, AH1, AH2) + margin'],
  'без кф фор': ['без кф фор', 'no handicap odds'],
  'точный коридор + чемпионат': ['точний коридор + чемпіонат', 'exact corridor + league'],
  'коридор ±12% + чемпионат': ['коридор ±12% + чемпіонат', 'corridor ±12% + league'],
  'только П1/П2 ±20% + чемпионат': ['лише П1/П2 ±20% + чемпіонат', '1/2 only ±20% + league'],
  'коридор ±25% + чемпионат': ['коридор ±25% + чемпіонат', 'corridor ±25% + league'],
  'пара + весы ±2%': ['пара + ваги ±2%', 'pair + scales ±2%'],
  'пара + направление линии': ['пара + напрямок лінії', 'pair + line direction'],
  'соотношение сил + направление': ['співвідношення сил + напрямок', 'strength ratio + direction'],
  'кф ТМ/ТБ2.5 + маржа ±0.5': ['кф ТМ/ТБ2.5 + маржа ±0.5', 'U/O2.5 odds + margin ±0.5'],
  'кф ТМ/ТБ2.5 + маржа ±1': ['кф ТМ/ТБ2.5 + маржа ±1', 'U/O2.5 odds + margin ±1'],
  'кф ТМ/ТБ2.5 ±5% + маржа ±1': ['кф ТМ/ТБ2.5 ±5% + маржа ±1', 'U/O2.5 odds ±5% + margin ±1'],
  'линия тотала ±1 + маржа ±0.5': ['лінія тоталу ±1 + маржа ±0.5', 'total line ±1 + margin ±0.5'],
  'линия ±3 + маржа ±0.5': ['лінія ±3 + маржа ±0.5', 'line ±3 + margin ±0.5'],
  'линия ±3 + маржа ±1': ['лінія ±3 + маржа ±1', 'line ±3 + margin ±1'],
  /* «Как читать» */
  'Кнопка «Решение»': ['Кнопка «Рішення»', 'The «Decision» button'],
  'Итог': ['Підсумок', 'Result'],
  'Пробивки 1 и 2': ['Пробивки 1 і 2', 'Checks 1 and 2'],
  'Пробивки 3–5': ['Пробивки 3–5', 'Checks 3–5'],
  'Шаг и матчи': ['Крок і матчі', 'Step and matches'],
  'Таблица': ['Таблиця', 'Table'],
  'Тотал': ['Тотал', 'Total'],
  'Сыгранные': ['Зіграні', 'Played'],
  'Сверху — итог. «ДА — рынок и кф»: обе обязательные пробивки нашли не меньше 5 похожих матчей, и этот рынок в обеих в плюсе. «НЕТ» — ставки нет.':
    ['Угорі — підсумок. «ТАК — ринок і кф»: обидві обов’язкові пробивки знайшли не менше 5 схожих матчів, і цей ринок в обох у плюсі. «НІ» — ставки немає.',
     'At the top is the outcome. «YES — market and odds»: both required checks found at least 5 similar matches and this market is in profit in both. «NO» — no bet.'],
  'Обязательные: «Коридор + категория + маржа» и «Матмодель + маржа». Решение принимают только они.':
    ['Обов’язкові: «Коридор + категорія + маржа» і «Матмодель + маржа». Рішення ухвалюють лише вони.',
     'Required: «Corridor + category + margin» and «Math model + margin». Only they make the decision.'],
  'Дополнительные: «Коридор + чемпионат», «Категория + весы» и «Тотал + маржа» (только тоталы). Это уточнение на ваше усмотрение, в решение не входят.':
    ['Додаткові: «Коридор + чемпіонат», «Категорія + ваги» і «Тотал + маржа» (лише тотали). Це уточнення на ваш розсуд, у рішення не входять.',
     'Additional: «Corridor + league», «Category + scales» and «Total + margin» (totals only). A refinement at your discretion, not part of the decision.'],
  'Серая строка под названием — на каком шаге остановился поиск и сколько матчей нашлось. Если похожих матчей меньше 5, условия по шагам расширяются; бледная карточка — матчей всё равно мало.':
    ['Сірий рядок під назвою — на якому кроці зупинився пошук і скільки матчів знайшлося. Якщо схожих матчів менше 5, умови по кроках розширюються; бліда картка — матчів однаково мало.',
     'The grey line under the title — at which step the search stopped and how many matches were found. With fewer than 5 similar matches the conditions widen step by step; a faded card means there are still too few.'],
  'Рынок, кф сегодня, «Зашло» — сколько выиграло из скольких, ROI — сколько дал бы этот кф на найденных матчах. Зелёный — плюс, красный — минус.':
    ['Ринок, кф сьогодні, «Зайшло» — скільки виграло зі скількох, ROI — скільки дав би цей кф на знайдених матчах. Зелений — плюс, червоний — мінус.',
     'Market, today’s odds, «Won» — how many won out of how many, ROI — what these odds would have returned on the matches found. Green — profit, red — loss.'],
  'В футболе — сколько голов в среднем в найденных матчах; в баскетболе — ожидаемый тотал (рядом линия бука) и средние очки по четвертям.':
    ['У футболі — скільки голів у середньому в знайдених матчах; у баскетболі — очікуваний тотал (поруч лінія бука) і середні очки по чвертях.',
     'In football — average goals in the matches found; in basketball — expected total (next to the bookmaker’s line) and average points per quarter.'],
  'Для сыгранного матча считаются только матчи, сыгранные раньше него, и показан итог. База пока небольшая — смотрите на число матчей рядом с каждым результатом. Это статистика, а не гарантия.':
    ['Для зіграного матчу рахуються лише матчі, зіграні раніше за нього, і показано підсумок. База поки невелика — дивіться на кількість матчів біля кожного результату. Це статистика, а не гарантія.',
     'For a played match only matches played before it are counted, and the outcome is shown. The base is still small — look at the number of matches next to each result. This is statistics, not a guarantee.'],
  'Метка 🧩': ['Мітка 🧩', 'The 🧩 mark'],
  'Весы': ['Ваги', 'Scales'],
  'Когда метки нет': ['Коли мітки немає', 'When there is no mark'],
  'Вкладка': ['Вкладка', 'Tab'],
  'Место в таблице не соответствует кф: бук делает фаворитом команду, которая стоит в таблице ниже соперника минимум на 2 места и при этом не сильнее его по категории. Рядом — за кого бук: П1 или П2. Порога по кф нет — насколько перекос сильный, решаете сами.':
    ['Місце в таблиці не відповідає кф: бук робить фаворитом команду, яка стоїть у таблиці нижче за суперника щонайменше на 2 місця і при цьому не сильніша за нього за категорією. Поруч — за кого бук: П1 або П2. Порогу за кф немає — наскільки перекіс сильний, вирішуєте самі.',
     'The table position does not match the odds: the bookmaker makes the favourite a team that is at least 2 places lower in the table and not stronger by category. Next to it — whom the bookmaker backs: 1 or 2. There is no odds threshold — you decide how strong the skew is.'],
  'Это не ставка против бука: бук, похоже, знает больше (травмы, составы), и мы смотрим в его сторону. Если весы уходят от фаворита бука (бук сам отступает), матч пропускаем.':
    ['Це не ставка проти бука: бук, схоже, знає більше (травми, склади), і ми дивимось у його бік. Якщо ваги йдуть від фаворита бука (бук сам відступає), матч пропускаємо.',
     'It is not a bet against the bookmaker: he seems to know more (injuries, line-ups), and we look his way. If the scales move away from the bookmaker’s favourite (he backs off), the match is skipped.'],
  'Если кф П1 и П2 почти равны (разница меньше 0.15), если в таблице ещё нет мест и в еврокубках — места из разных лиг не сравниваются.':
    ['Якщо кф П1 і П2 майже рівні (різниця менше 0.15), якщо в таблиці ще немає місць і в єврокубках — місця з різних ліг не порівнюються.',
     'If the 1 and 2 odds are almost equal (difference under 0.15), if the table has no positions yet, and in European cups — places from different leagues are not compared.'],
  'Вкладка «🧩 Нелогичный кф» показывает такие матчи футбола и баскетбола вместе. Колонка «Итог»: ✓ и прибыль по кф фаворита бука или ✕ −1.':
    ['Вкладка «🧩 Нелогічний кф» показує такі матчі футболу й баскетболу разом. Колонка «Підсумок»: ✓ і прибуток за кф фаворита бука або ✕ −1.',
     'The «🧩 Illogical odds» tab shows such football and basketball matches together. The «Result» column: ✓ and profit at the bookmaker’s favourite odds, or ✕ −1.']
});

/* ---------- общие помощники ---------- */
const RKW = {'гранд':0, 'середняк':1, 'аутсайдер':2};
const LG0 = r => (r._o ? r._o.ch : r.ch);
const EC = r => /UEFA|Лига чемпионов|Лига Европы|Лига конференций/i.test(LG0(r));
const pos = v => { const n = parseInt(v, 10); return isNaN(n) ? null : n; };
const sp = r => r.sp === 'b' ? 'b' : 'f';
const inBase = r => r.sp === 'b' || (r.sp === 'f' && !!r.el);
const QTR = r => { if (r.sp !== 'b' || !r.h1) return null; const q = String(r.h1).split(/,\s*/).map(x => { const m = x.match(/(\d+)\s*[-:]\s*(\d+)/); return m ? +m[1] + +m[2] : null; }); return q.length >= 4 && q.slice(0, 4).every(x => x != null) ? q.slice(0, 4) : null; };

/* ---------- 🧩 нелогичный кф ---------- */
function ILL(r){
  if (!inBase(r) || r.p1 == null || r.p2 == null || EC(r)) return null;
  const cH = RKW[r.ch_], cA = RKW[r.ca]; if (cH == null || cA == null) return null;
  if (Math.abs(r.p1 - r.p2) < 0.15) return null;
  const h = r.p1 < r.p2, cF = h ? cH : cA, cO = h ? cA : cH;
  const pF = pos(h ? r.ph : r.pa), pO = pos(h ? r.pa : r.ph); if (pF == null || pO == null) return null;
  const s = SHIFT(r), away = s != null && s !== 0 && Math.sign(s) !== (h ? 1 : -1);
  return cF >= cO && pF >= pO + 2 && !away ? (h ? 'П1' : 'П2') : null;
}
function ILLRES(r){
  const side = ILL(r), g = goals(r); if (!side || !g) return null;
  const k = side === 'П1' ? r.p1 : r.p2, ok = side === 'П1' ? g[0] > g[1] : g[1] > g[0];
  return ok ? {w:true, t:'✓ +' + (k - 1).toFixed(2)} : {w:false, t:'✕ −1'};
}

/* ---------- пробивки ---------- */
const MKD = {f:[['p1','П1'],['x','Х'],['p2','П2'],['tm','ТМ2.5'],['tb','ТБ2.5'],['tm3','ТМ3'],['tb3','ТБ3'],['oz','ОЗ-Да'],['ozn','ОЗ-Нет']],
             b:[['p1','П1'],['p2','П2'],['bf1','Ф1'],['bf2','Ф2'],['btb','ТБ'],['btm','ТМ']]};
const TOT = new Set(['tm','tb','tm3','tb3','btb','btm']);
const REQ = [0, 1];   // обязательные: коридор + категория + маржа, матмодель + маржа
const tenth = (a, b) => a != null && b != null && Math.floor(a * 10 + 1e-6) === Math.floor(b * 10 + 1e-6);
const near = (a, b, k) => a != null && b != null && Math.abs(a - b) <= b * k;
const fl = (a, b) => a != null && b != null && Math.floor(a) === Math.floor(b);
const pair = (r, m) => r.ch_ === m.ch_ && r.ca === m.ca;
const rel = r => { const a = RKW[r.ch_], b = RKW[r.ca]; return a == null || b == null ? '?' : a < b ? 's' : a > b ? 'w' : 'e'; };
const dir = v => Math.sign(v || 0);
const mgN = (r, m, d) => r.mg != null && m.mg != null && Math.abs(r.mg - m.mg) <= d;
function ladders(s, m){
  const mg1 = r => mgN(r, m, 1), lg = r => LG0(r) === LG0(m);
  const P1 = s === 'f' ? [
    ['точный коридор + пара + маржа', r => tenth(r.p1, m.p1) && tenth(r.x, m.x) && tenth(r.p2, m.p2) && pair(r, m) && mg1(r)],
    ['без маржи', r => tenth(r.p1, m.p1) && tenth(r.x, m.x) && tenth(r.p2, m.p2) && pair(r, m)],
    ['шире коридор ±12%', r => near(r.p1, m.p1, .12) && near(r.x, m.x, .12) && near(r.p2, m.p2, .12) && pair(r, m)],
    ['только П1/П2 ±20%', r => near(r.p1, m.p1, .2) && near(r.p2, m.p2, .2) && pair(r, m)]] : [
    ['точный коридор + пара + маржа', r => tenth(r.p1, m.p1) && tenth(r.p2, m.p2) && pair(r, m) && mg1(r)],
    ['без маржи', r => tenth(r.p1, m.p1) && tenth(r.p2, m.p2) && pair(r, m)],
    ['шире коридор ±12%', r => near(r.p1, m.p1, .12) && near(r.p2, m.p2, .12) && pair(r, m)],
    ['ещё шире ±25%', r => near(r.p1, m.p1, .25) && near(r.p2, m.p2, .25) && pair(r, m)]];
  const mmF = (r, oz, tt) => fl(r.p1, m.p1) && fl(r.x, m.x) && fl(r.p2, m.p2) && (!tt || (fl(r.tm, m.tm) && fl(r.tb, m.tb) && fl(r.tm3, m.tm3))) && (!oz || fl(r.oz, m.oz));
  const flB = r => r.bfl != null && m.bfl != null && Math.trunc(r.bfl) === Math.trunc(m.bfl);
  const P2 = s === 'f' ? [
    ['полная матмодель + маржа', r => mmF(r, 1, 1) && mg1(r)],
    ['без ОЗ', r => mmF(r, 0, 1) && mg1(r)],
    ['без ОЗ и ТМ/ТБ', r => mmF(r, 0, 0) && mg1(r)],
    ['без маржи', r => mmF(r, 0, 0)]] : [
    ['матмодель (П1, П2, фора, Ф1, Ф2) + маржа', r => fl(r.p1, m.p1) && fl(r.p2, m.p2) && flB(r) && fl(r.bf1, m.bf1) && fl(r.bf2, m.bf2) && mg1(r)],
    ['без кф фор', r => fl(r.p1, m.p1) && fl(r.p2, m.p2) && flB(r) && mg1(r)],
    ['без маржи', r => fl(r.p1, m.p1) && fl(r.p2, m.p2) && flB(r)]];
  const P5 = s === 'f' ? [
    ['точный коридор + чемпионат', r => lg(r) && tenth(r.p1, m.p1) && tenth(r.x, m.x) && tenth(r.p2, m.p2)],
    ['коридор ±12% + чемпионат', r => lg(r) && near(r.p1, m.p1, .12) && near(r.x, m.x, .12) && near(r.p2, m.p2, .12)],
    ['только П1/П2 ±20% + чемпионат', r => lg(r) && near(r.p1, m.p1, .2) && near(r.p2, m.p2, .2)]] : [
    ['точный коридор + чемпионат', r => lg(r) && tenth(r.p1, m.p1) && tenth(r.p2, m.p2)],
    ['коридор ±12% + чемпионат', r => lg(r) && near(r.p1, m.p1, .12) && near(r.p2, m.p2, .12)],
    ['коридор ±25% + чемпионат', r => lg(r) && near(r.p1, m.p1, .25) && near(r.p2, m.p2, .25)]];
  const sm = SHIFT(m) || 0, d = dir(sm);
  const P3 = [
    ['пара + весы ±2%', r => pair(r, m) && dir(SHIFT(r)) === d && Math.abs((SHIFT(r) || 0) - sm) <= 2],
    ['пара + направление линии', r => pair(r, m) && dir(SHIFT(r)) === d],
    ['соотношение сил + направление', r => rel(r) === rel(m) && rel(m) !== '?' && dir(SHIFT(r)) === d]];
  const P4 = s === 'f' ? [
    ['кф ТМ/ТБ2.5 + маржа ±0.5', r => tenth(r.tm, m.tm) && tenth(r.tb, m.tb) && mgN(r, m, .5)],
    ['кф ТМ/ТБ2.5 + маржа ±1', r => tenth(r.tm, m.tm) && tenth(r.tb, m.tb) && mg1(r)],
    ['кф ТМ/ТБ2.5 ±5% + маржа ±1', r => near(r.tm, m.tm, .05) && near(r.tb, m.tb, .05) && mg1(r)]] : [
    ['линия тотала ±1 + маржа ±0.5', r => r.btl != null && m.btl != null && Math.abs(r.btl - m.btl) <= 1 && mgN(r, m, .5)],
    ['линия ±3 + маржа ±0.5', r => r.btl != null && m.btl != null && Math.abs(r.btl - m.btl) <= 3 && mgN(r, m, .5)],
    ['линия ±3 + маржа ±1', r => r.btl != null && m.btl != null && Math.abs(r.btl - m.btl) <= 3 && mg1(r)]];
  return [['Коридор + категория + маржа', P1], ['Матмодель + маржа', P2], ['Коридор + чемпионат', P5], ['Категория + весы', P3], ['Тотал + маржа', P4]];
}
function won(s, mk, r){
  const g = goals(r), a = g[0], b = g[1], t = a + b;
  if (s === 'f') return {p1:a > b, x:a === b, p2:b > a, tm:t < 2.5, tb:t > 2.5, tm3:t === 3 ? null : t < 3, tb3:t === 3 ? null : t > 3, oz:a > 0 && b > 0, ozn:!(a > 0 && b > 0)}[mk];
  if (mk === 'p1') return a > b; if (mk === 'p2') return b > a;
  if (mk === 'bf1' || mk === 'bf2'){ if (r.bfl == null) return undefined; const v = a + r.bfl - b; return v === 0 ? null : mk === 'bf1' ? v > 0 : v < 0; }
  if (r.btl == null) return undefined; return t === r.btl ? null : mk === 'btb' ? t > r.btl : t < r.btl;
}
function stats(s, m, rows){
  const o = {};
  for (const [mk] of MKD[s]){ const k = m[mk]; if (!k) continue; let w = 0, n = 0;
    for (const r of rows){ const x = won(s, mk, r); if (x == null) continue; n++; if (x) w++; }
    o[mk] = {w, n, roi: n ? (w * (k - 1) - (n - w)) / n * 100 : null}; }
  return o;
}
function probe(s, m){
  const hist = DATA.filter(r => inBase(r) && sp(r) === s && r !== m && goals(r) && r.ts < m.ts);
  return ladders(s, m).map(([name, steps], i) => {
    let rows = [], step = steps[steps.length - 1][0], ok = false;
    for (const [lab, f] of steps){ rows = hist.filter(f); step = lab; if (rows.length >= 5){ ok = true; break; } }
    const st = stats(s, m, rows);
    if (i === 1){ const same = rows.filter(r => pair(r, m)); if (same.length >= 3) st._pair = stats(s, m, same); }
    return {name, step, rows, ok, st, req: REQ.includes(i)};
  });
}
function verdict(s, m, P){
  let best = null; const PP = REQ.map(i => P[i]);
  if (PP.some(p => !p.ok)) return null;
  for (const [mk, lab] of MKD[s]){ if (!m[mk]) continue; let mn = 1e9, good = true;
    for (const p of PP){ const x = p.st[mk]; if (!x || x.n < 3){ good = false; continue; }
      if (x.roi <= 0) good = false; mn = Math.min(mn, x.roi);
      if (p.st._pair && p.st._pair[mk] && p.st._pair[mk].n >= 3 && p.st._pair[mk].roi < 0) good = false; }
    if (good && (!best || mn > best.mn)) best = {mk, lab, mn, k:m[mk]}; }
  return best;
}
const pct = v => v == null ? '—' : (v > 0 ? '+' : '') + Math.round(v) + '%';
const pc = v => v == null ? '' : v > 0 ? 'p' : 'n';
const avg = a => a.length ? a.reduce((x, y) => x + y, 0) / a.length : null;
const S = t => `<span>${t}</span>`;   // отдельный текстовый узел — так его переводит блок языков
function panel(m){
  const s = sp(m), P = probe(s, m), v = verdict(s, m, P), g = goals(m);
  let h = '<div class="dverd">';
  h += v ? `<span class="dbig dyes">${S('ДА')} — ${S(v.lab)} ${v.k.toFixed(2)}</span>` : `<span class="dbig dno">${S('НЕТ')}</span>`;
  if (g){ const x = v ? won(s, v.mk, m) : undefined; h += `<span class="dres">${S('Счёт')} ${g[0]}:${g[1]}${v ? ' · ' + S(x == null ? 'возврат' : x ? 'зашло ✓' : 'не зашло ✕') : ''}</span>`; }
  if (v){ const ex = P.filter(p => !p.req && !(p.name === 'Тотал + маржа' && !TOT.has(v.mk))).map(p => { const x = p.st[v.mk]; return `${S(p.name)}: ${x && x.n ? `<b class="${pc(x.roi)}">${pct(x.roi)}</b> (${x.w}/${x.n})` : '—'}`; }).join(' · ');
    if (ex) h += `<span class="dres">${S('Дополнительные:')} ${ex}</span>`; }
  h += '</div><div class="dgrid">';
  for (const p of P){
    h += `<div class="dpb${p.ok ? '' : ' dhint'}"><h4>${S(p.name)} <span class="dcat">${S(p.req ? 'обязательная' : 'дополнительная')}</span></h4>`;
    h += `<div class="dstep">${S(p.step)} · ${p.rows.length} ${S('матч.')}${p.ok ? '' : ' ' + S('— мало матчей')}</div>`;
    h += `<table><tr><th>${S('Рынок')}</th><th>${S('кф')}</th><th>${S('Зашло')}</th><th>ROI</th></tr>`;
    for (const [mk, lab] of MKD[s]){ const x = p.st[mk]; if (!x) continue; if (p.name === 'Тотал + маржа' && !TOT.has(mk)) continue;
      h += `<tr><td>${S(lab)}</td><td>${m[mk].toFixed(2)}</td><td>${x.w}/${x.n}</td><td class="${pc(x.roi)}">${pct(x.roi)}</td></tr>`; }
    h += '</table>';
    if (!p.req) h += `<div class="dstep">${S('На усмотрение — в решении не учитывается')}</div>`;
    if (p.rows.length){
      if (s === 'b'){ const t = avg(p.rows.map(r => goals(r)[0] + goals(r)[1])), qs = p.rows.map(QTR).filter(Boolean);
        h += `<div class="dtot">${S('Ожидаемый тотал:')} <b>${t.toFixed(1)}</b> (${S('линия')} ${m.btl == null ? '—' : m.btl})`;
        if (qs.length) h += `<br>${S('Четверти:')} ${[0,1,2,3].map(k => `${S((k + 1) + 'ч')} ${avg(qs.map(q => q[k])).toFixed(1)}`).join(' · ')} (${qs.length} ${S('матч.')})`;
        h += '</div>'; }
      else h += `<div class="dtot">${S('Голов в среднем:')} <b>${avg(p.rows.map(r => goals(r)[0] + goals(r)[1])).toFixed(2)}</b></div>`;
    }
    h += '</div>';
  }
  return h + '</div>';
}

/* ---------- стили ---------- */
document.head.insertAdjacentHTML('beforeend', `<style>
.dbtn{font:600 12.5px var(--f-ui);padding:5px 10px;border-radius:6px;border:0;background:var(--hit);color:#fff;cursor:pointer;white-space:nowrap}
.dbtn:focus-visible{outline:2px solid var(--accent);outline-offset:2px}
.ilg{display:inline-block;font:600 11.5px var(--f-ui);padding:1px 7px;border-radius:9px;background:#efe9fb;color:#5b3fa6;white-space:nowrap}
.dsh{position:fixed;inset:0;z-index:20;display:flex;align-items:flex-end;justify-content:center;background:rgba(0,0,0,.45)}
.dbox{background:var(--bg);width:min(1100px,100%);max-height:92vh;overflow-y:auto;border-radius:14px 14px 0 0;padding-bottom:env(safe-area-inset-bottom,0px)}
.dhead{position:sticky;top:0;z-index:1;background:var(--brand);color:var(--head-ink);display:flex;gap:10px;align-items:center;justify-content:space-between;padding:10px 14px}
.dhead b{font-size:15px;line-height:1.3}.dhead small{display:block;font-size:12px;opacity:.75;font-weight:400}
.dx{border:1px solid rgba(255,255,255,.25);background:transparent;color:var(--head-ink);border-radius:8px;min-width:44px;min-height:44px;font-size:20px;cursor:pointer}
.dbody{padding:12px 14px 18px}
.dverd{display:flex;flex-wrap:wrap;gap:6px 12px;align-items:baseline;margin-bottom:10px}
.dbig{font-size:clamp(22px,4vw,30px);font-weight:700;line-height:1.1}.dyes{color:var(--hit)}.dno{color:var(--muted)}
.dres{font-size:13px;padding:3px 8px;border-radius:6px;background:var(--panel);border:1px solid var(--line)}
.dres b.p,.dpb td.p{color:var(--hit);font-weight:600}.dres b.n,.dpb td.n{color:var(--miss)}
.dgrid{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,250px),1fr));gap:10px}
.dpb{background:var(--panel);border:1px solid var(--line);border-radius:8px;padding:10px;overflow-x:auto}.dpb.dhint{opacity:.55}
.dpb h4{margin:0 0 2px;font-size:14px}.dcat{font-size:11px;font-weight:600;border:1px solid var(--line);border-radius:4px;padding:0 4px;color:var(--muted)}
.dstep{font-size:12px;color:var(--muted);margin-bottom:6px}
.dpb table{width:100%;border-collapse:collapse}.dpb th,.dpb td{position:static;background:none;color:var(--ink);font:500 12.5px var(--f-num);padding:3px 5px;border-bottom:1px solid var(--line);text-align:right}
.dpb th{font:600 12px var(--f-ui);color:var(--muted)}.dpb th:first-child,.dpb td:first-child{text-align:left;font-family:var(--f-ui)}
.dtot{margin-top:8px;font-size:13px}
@media (min-width:760px){.dsh{align-items:center}.dbox{border-radius:14px}}
</style>`);

/* ---------- шторка ---------- */
document.body.insertAdjacentHTML('beforeend', '<div class="dsh" id="dsh" hidden role="dialog" aria-modal="true" aria-labelledby="dsht"><div class="dbox"><div class="dhead"><b id="dsht"></b><button type="button" class="dx" id="dsx" aria-label="Закрыть">×</button></div><div class="dbody" id="dsb"></div></div></div>');
let OPEN = null;
function show(r){
  OPEN = r;
  el('dsht').innerHTML = `${esc(r.h)} — ${esc(r.a)}<small>${esc(r.ch)} · ${esc(String(r.dt).replace(/^(\d\d\.\d\d)\.\d\d/, '$1'))}</small>`;
  el('dsb').innerHTML = panel(r);
  el('dsh').hidden = false; document.body.style.overflow = 'hidden'; el('dsx').focus();
}
function hide(){
  el('dsh').hidden = true; document.body.style.overflow = '';
  const b = OPEN && document.querySelector(`.dbtn[data-i="${OPEN._i}"]`); OPEN = null; if (b) b.focus();
}
el('dsx').onclick = hide;
el('dsh').addEventListener('click', e => { if (e.target.id === 'dsh') hide(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape' && !el('dsh').hidden) hide(); });

/* ---------- колонки и вкладка ---------- */
VIEWS.push(['ilg', '🧩 Нелогичный кф', r => !!ILL(r)]);
const KEEP = ['dn', 'ch', 'dt', 'sc', 'pair', 'kc', 'kr', 'kp', 'p1', 'x', 'p2'];
for (const c of COLS){
  if (c.only){ if (c.k === 'scl') c.only = c.only.concat('ilg'); continue; }
  if (!KEEP.includes(c.k)) c.hide = (c.hide || []).concat('ilg');
}
const iScl = COLS.findIndex(c => c.k === 'scl');
COLS.splice(iScl + 1, 0, {k:'ilk', only:['fea', 'bsk', 'ilg'], l:'Нелогичный кф', t:'txt ilc', sep:true, get: r => ILL(r) || ''});
COLS.splice(COLS.findIndex(c => c.k === 'ch'), 0, {k:'spi', only:['ilg'], l:'Вид', t:'txt', nofilter:true, get: r => r.sp === 'b' ? '🏀' : '⚽'});
COLS.push({k:'ires', only:['ilg'], l:'Итог', t:'txt ires', sep:true, nofilter:true, get: r => { const x = ILLRES(r); return x ? x.t : (goals(r) ? '' : '…'); }});
COLS.push({k:'dec', only:['fea', 'bsk'], l:'Решение', t:'txt dec', sep:true, nofilter:true, get: () => ''});

/* после каждой отрисовки: кнопки «Решение», метки 🧩, цвет итога */
const _render = render;
render = function(){
  _render.apply(this, arguments);
  const tb = el('tbl').tBodies[0]; if (!tb) return;
  tb.querySelectorAll('tr[data-pin]').forEach(tr => {
    const r = DATA[+tr.dataset.pin]; if (!r) return;
    const d = tr.querySelector('td.dec'); if (d) d.innerHTML = `<button type="button" class="dbtn" data-i="${r._i}">Решение</button>`;
    const c = tr.querySelector('td.ilc'); if (c){ const s = ILL(r); c.innerHTML = s ? `<span class="ilg">🧩 ${s}</span>` : ''; }
    const x = tr.querySelector('td.ires'); if (x){ const o = ILLRES(r); if (o) x.classList.add(o.w ? 'won' : 'lost'); }
  });
  applyLangDom();
};
el('tbl').tBodies[0].addEventListener('click', e => {
  const b = e.target.closest('button.dbtn'); if (!b) return;
  e.stopPropagation(); const r = DATA[+b.dataset.i]; if (r) show(r);
});

/* ---------- «Как читать»: два раздела ---------- */
(function(){
  const a = document.querySelector('#v-about article.about'); if (!a) return;
  const ref = a.querySelector('a[href*="chesnyi_koef_basketball"]');
  const before = ref ? ref.closest('p').previousElementSibling : null;
  const html = `<h3>Кнопка «Решение»</h3>
<dl>
  <dt>Итог</dt><dd>Сверху — итог. «ДА — рынок и кф»: обе обязательные пробивки нашли не меньше 5 похожих матчей, и этот рынок в обеих в плюсе. «НЕТ» — ставки нет.</dd>
  <dt>Пробивки 1 и 2</dt><dd>Обязательные: «Коридор + категория + маржа» и «Матмодель + маржа». Решение принимают только они.</dd>
  <dt>Пробивки 3–5</dt><dd>Дополнительные: «Коридор + чемпионат», «Категория + весы» и «Тотал + маржа» (только тоталы). Это уточнение на ваше усмотрение, в решение не входят.</dd>
  <dt>Шаг и матчи</dt><dd>Серая строка под названием — на каком шаге остановился поиск и сколько матчей нашлось. Если похожих матчей меньше 5, условия по шагам расширяются; бледная карточка — матчей всё равно мало.</dd>
  <dt>Таблица</dt><dd>Рынок, кф сегодня, «Зашло» — сколько выиграло из скольких, ROI — сколько дал бы этот кф на найденных матчах. Зелёный — плюс, красный — минус.</dd>
  <dt>Тотал</dt><dd>В футболе — сколько голов в среднем в найденных матчах; в баскетболе — ожидаемый тотал (рядом линия бука) и средние очки по четвертям.</dd>
  <dt>Сыгранные</dt><dd>Для сыгранного матча считаются только матчи, сыгранные раньше него, и показан итог. База пока небольшая — смотрите на число матчей рядом с каждым результатом. Это статистика, а не гарантия.</dd>
</dl>
<h3>🧩 Нелогичный кф</h3>
<dl>
  <dt>Метка 🧩</dt><dd>Место в таблице не соответствует кф: бук делает фаворитом команду, которая стоит в таблице ниже соперника минимум на 2 места и при этом не сильнее его по категории. Рядом — за кого бук: П1 или П2. Порога по кф нет — насколько перекос сильный, решаете сами.</dd>
  <dt>Весы</dt><dd>Это не ставка против бука: бук, похоже, знает больше (травмы, составы), и мы смотрим в его сторону. Если весы уходят от фаворита бука (бук сам отступает), матч пропускаем.</dd>
  <dt>Когда метки нет</dt><dd>Если кф П1 и П2 почти равны (разница меньше 0.15), если в таблице ещё нет мест и в еврокубках — места из разных лиг не сравниваются.</dd>
  <dt>Вкладка</dt><dd>Вкладка «🧩 Нелогичный кф» показывает такие матчи футбола и баскетбола вместе. Колонка «Итог»: ✓ и прибыль по кф фаворита бука или ✕ −1.</dd>
</dl>`;
  if (before) before.insertAdjacentHTML('beforebegin', html); else a.insertAdjacentHTML('beforeend', html);
})();

if (typeof DATA !== 'undefined' && DATA.length){ buildTabs(); render(); }
applyLangDom();
})();
