const DAYS = ['月','火','水','木','金','土'];
const PERIODS = 6;
const SLOT_H = 90;

/* ── カテゴリ定義 ── */
const CATEGORIES = [
  { id:'major', label:'専攻',       varPfx:'--cat-major' },
  { id:'arts',  label:'芸術教養',   varPfx:'--cat-arts'  },
  { id:'pe',    label:'体育',       varPfx:'--cat-pe'    },
  { id:'lang',  label:'言語',       varPfx:'--cat-lang'  },
  { id:'other', label:'他学科公開', varPfx:'--cat-other' },
  { id:'c6',    label:'集中',       varPfx:'--cat-c6'    },
];

/* プリセットパレット */
const PRESETS = [
  { bg:'#fbeaf0', bd:'#f4c0d1', dot:'#db92aa' },
  { bg:'#eeedfe', bd:'#cecbf6', dot:'#a09adb' },
  { bg:'#e6f1fb', bd:'#b5d4f4', dot:'#84b4e3' },
  { bg:'#e1f5ee', bd:'#9fe1cb', dot:'#7fd4b9' },
  { bg:'#eaf3de', bd:'#c0dd97', dot:'#8aac61' },
  { bg:'#faeeda', bd:'#fac775', dot:'#e2b77a' },
  { bg:'#fcebeb', bd:'#f7c1c1', dot:'#df8888' },
  { bg:'#f1efe8', bd:'#d3d1c7', dot:'#888780' },
  { bg:'#fdf4e7', bd:'#fbd89a', dot:'#dfbd73' },
];

/* ── 授業データ ── */
const coursesSpring = [
  { id:'c1', name:'グラフィックデザイン VII',    instructor:'大木（卓）', credits:2, day:1, periodStart:2, periodLength:2, category:'major', isOnline:false, overview:'グラフィックデザインの高度な理論と実践を学ぶ。タイポグラフィ、レイアウト、ビジュアルコミュニケーションの応用を扱う。' },
  { id:'c2', name:'数学的思考の探求 I',          instructor:'石道',       credits:2, day:2, periodStart:1, periodLength:1, category:'arts',  isOnline:false, overview:'デザインに関連する数学的思考力を養う。論理的推論、集合、グラフ理論などをデザインの文脈で学ぶ。' },
  { id:'c3', name:'西洋美術史 I',               instructor:'神田',       credits:2, day:2, periodStart:2, periodLength:1, category:'arts',  isOnline:false, overview:'古代から中世にかけての西洋美術の流れを概観する。様式の変遷と社会的背景の関連について理解を深める。' },
  { id:'c4', name:'製図 I',                    instructor:'梅名',       credits:2, day:0, periodStart:4, periodLength:2, category:'major', isOnline:false, overview:'設計図・製図の基礎を習得する。正投影図法、断面図、寸法記入など建築・プロダクトデザインに必要な図学の基本を学ぶ。' },
  { id:'c5', name:'メディアリテラシー I',        instructor:'神田',       credits:2, day:3, periodStart:3, periodLength:1, category:'arts',  isOnline:true,  overview:'現代メディアの構造と受容について批判的に考察する力を育む。映像・SNS・広告などを題材に分析手法を身につける。' },
  { id:'c6', name:'シナリオ分析',               instructor:'井出',       credits:2, day:3, periodStart:5, periodLength:1, category:'major', isOnline:true,  overview:'映像・演劇・ゲームなど様々な媒体におけるシナリオ構造を分析する。物語論の基礎から実践的な脚本読解まで扱う。' },
  { id:'c7', name:'コミュニケーションデザイン III', instructor:'唐木',    credits:2, day:5, periodStart:2, periodLength:1, category:'major', isOnline:false, overview:'情報の視覚化とユーザー体験設計を統合的に扱う。実際のプロジェクトを通じてコミュニケーションデザインの実践力を養う。' },
  { id:'c8', name:'コミュニケーションデザイン V',  instructor:'鈴木',    credits:2, day:5, periodStart:4, periodLength:1, category:'major', isOnline:false, overview:'コミュニケーションデザインの応用・発展編。卒業制作を見据えたコンセプト立案と実装を中心に学ぶ。' },
];

const coursesFall = [
  { id:'f1', name:'タイポグラフィ II',       instructor:'中村',  credits:2, day:0, periodStart:1, periodLength:2, category:'major', isOnline:false, overview:'タイポグラフィの応用を扱う。欧文・和文の組版ルール、書体選択の理論、エディトリアルデザインへの応用を学ぶ。' },
  { id:'f2', name:'映像表現論',             instructor:'木村',  credits:2, day:1, periodStart:1, periodLength:1, category:'arts',  isOnline:false, overview:'映像メディアにおける表現の理論と歴史を学ぶ。映画・映像作品の分析を通じて、視覚的ストーリーテリングを理解する。' },
  { id:'f3', name:'身体と表現',             instructor:'高橋',  credits:1, day:2, periodStart:3, periodLength:1, category:'pe',   isOnline:false, overview:'身体運動と芸術表現の関係を探る。ダンス・パフォーマンスの基礎動作を通じて、自己表現力と身体感覚を養う。' },
  { id:'f4', name:'英語コミュニケーション', instructor:'Smith', credits:1, day:3, periodStart:2, periodLength:1, category:'lang', isOnline:false, overview:'デザイン・アート分野における英語コミュニケーション能力を養う。作品プレゼンテーション、英文レポート作成を実践する。' },
  { id:'f5', name:'プロダクトデザイン I',   instructor:'渡辺',  credits:2, day:4, periodStart:1, periodLength:2, category:'major', isOnline:false, overview:'プロダクトデザインの基礎理論と制作プロセスを学ぶ。ユーザーリサーチからプロトタイピングまでの一連の流れを体験する。' },
];

/* ═══════════════════════════════════════
   時間外授業（連携授業）の管理（追加実装）
═══════════════════════════════════════ */

/* ── 時間外授業のマスターデータ ── */
const extraCoursesMaster = [
  // slotKey を持たせると登録時に通常スロットへ反映されます（例: 'spring-2-3'）
  { id:'ex1', name:'連携講座 A', instructor:'真家', credits:2, category:'c6', dates:'8/3（月）- 8/7（金） 5日間', overview:'外部の第一線で活躍するクリエイターを招き、実践的なワークショップを行います。', slotKey: 'spring-2-3' },
  { id:'ex2', name:'地域連携デザイン', instructor:'佐藤', credits:2, category:'c7', dates:'9/1（火）- 9/5（土） 5日間', overview:'地元の自治体と連携し、実際の街の課題をデザインの力で解決する集中講義です。', slotKey: 'spring-1-4' },
  { id:'ex3', name:'インターンシップ演習', instructor:'高橋', credits:1, category:'other', dates:'夏季休業中', overview:'企業での就業体験を通じて、プロの現場におけるデザイナーの役割を学びます。' }
];

/* ── 状態変数 ── */
let registeredExtraIds = new Set(['ex1']); // 初期状態で「連携講座A」を登録済みにしておく

/* ── 時間外リストの描画 ── */
function renderExtraList() {
  const extraList = document.getElementById('extra-list');
  extraList.innerHTML = '';

  // 1. 登録されている授業をループしてカードを生成
  extraCoursesMaster.forEach(c => {
    if (!registeredExtraIds.has(c.id)) return;

    const row = document.createElement('div');
    row.className = 'extra-row-item';
    row.innerHTML = `
      <div class="extra-card extra-card-slot ${c.category}" style="cursor:pointer;">
        <div class="slot-top">
          <span class="online-icon"></span>
          <span class="credits-badge">${c.credits}</span>
        </div>
        <div class="course-name">${c.name}</div>
        <div class="instructor">${c.instructor}</div>
      </div>
      <div class="extra-dates">${c.dates}</div>
    `;

    // カードクリックで専用のシラバスモーダルを開く
    row.querySelector('.extra-card').addEventListener('click', (e) => {
      e.stopPropagation();
      openExtraModal(c);
    });

    extraList.appendChild(row);
  });

  // 2. 「＋」追加ボタンとポップオーバーの生成
  const addRow = document.createElement('div');
  addRow.className = 'extra-add-row';

  const addBtn = document.createElement('button');
  addBtn.className = 'extra-add-btn';
  addBtn.title = '時間外授業を追加';
  addBtn.textContent = '＋';

  // まだ登録されていない授業をフィルタリング
  const unregistered = extraCoursesMaster.filter(c => !registeredExtraIds.has(c.id));

  const pop = document.createElement('div');
  pop.className = 'popover';
  
  if (unregistered.length > 0) {
    pop.innerHTML = `
      <div class="popover-header">
        <span>時間外授業を追加</span>
        <button class="popover-close" onclick="closePopoverBtn(event)">✕</button>
      </div>
      <div class="popover-list">
        ${unregistered.map(c => `<div class="popover-item" data-id="${c.id}">${c.name}</div>`).join('')}
      </div>
    `;
    // ポップオーバー内のアイテムクリックイベント
    pop.querySelectorAll('.popover-item').forEach(item => {
      item.addEventListener('click', (e) => {
        e.stopPropagation();
        registerExtraCourse(item.dataset.id);
      });
    });
  } else {
    pop.innerHTML = `
      <div class="popover-header"><span>追加できる授業がありません</span></div>
    `;
  }

  addRow.appendChild(addBtn);
  addRow.appendChild(pop);

  // 「＋」ボタンを押した時のポップオーバー開閉
  addBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    if (openPopover && openPopover !== pop) openPopover.classList.remove('open');
    const isOpen = pop.classList.contains('open');
    pop.classList.toggle('open', !isOpen);
    openPopover = isOpen ? null : pop;
  });

  extraList.appendChild(addRow);
}

/* ── 時間外授業の登録処理 ── */
function registerExtraCourse(id) {
  const course = extraCoursesMaster.find(c => c.id === id);
  if (!course) return;

  registeredExtraIds.add(id);
  addLog(`・時間外 「${course.name}」を登録しました。`);
  // slotKey が指定されている場合は、通常の時間割スロットとしても登録する
  if (course.slotKey) {
    const [sem, day, period] = course.slotKey.split('-');
    const key = `${sem}-${day}-${period}`;
    // 簡易的に periodLength は 1 として登録（必要なら extraCoursesMaster に periodLength を追加してください）
    registeredCourses[key] = {
      id: course.id,
      name: course.name,
      instructor: course.instructor || '',
      credits: course.credits || 2,
      day: Number(day),
      periodStart: Number(period),
      periodLength: course.periodLength || 1,
      category: course.category || 'other',
      isOnline: false,
      overview: course.overview || '',
      _semester: sem,
    };
    justAddedCourseId = course.id;
    addLog(`・時間外 「${course.name}」を ${DAYS[Number(day)]}${period} に同期しました。`);
  }
  setChanged();
  closePopover();
  renderExtraList();

  // 再描画（同期があれば時間割へ反映）
  renderGrid();
}

/* ── 時間外授業用のシラバスモーダル展開 ── */
function openExtraModal(course) {
  closePopover();
  modalCourse = course;

  document.getElementById('modal-accent').style.background = getCatDotColor(course.category);
  document.getElementById('modal-name').textContent = course.name;
  document.getElementById('modal-instructor').textContent = `担当：${course.instructor || '未設定'}`;

  const catLabel = CATEGORIES.find(c => c.id === course.category)?.label || course.category;
  const tags = ['時間外', `${course.credits}単位`, catLabel, course.dates];
  
  document.getElementById('modal-tags').innerHTML = tags.map(t => `<span class="modal-tag">${t}</span>`).join('');
  document.getElementById('modal-overview').textContent = course.overview || 'シラバス情報は登録されていません。';

  // 削除ボタンの処理を時間外用に書き換え
  document.getElementById('modal-delete-btn').onclick = () => deleteExtraCourse(course);
  document.getElementById('modal-overlay').classList.add('open');
}

/* ── 時間外授業の削除処理 ── */
function deleteExtraCourse(course) {
  addLog(`・時間外 「${course.name}」を取り消しました。`);
  registeredExtraIds.delete(course.id);
  setChanged();
  document.getElementById('modal-overlay').classList.remove('open');
  modalCourse = null;
  renderExtraList();
}

/* my時間割の候補（スロットキーで管理） */
const availableBySlot = {
  'spring-2-3': [{id:'a1',name:'情報 I'},{id:'a2',name:'美術史概論'},{id:'a3',name:'演出論 I'}],
  'spring-2-5': [{id:'a4',name:'空間デザイン I'},{id:'a5',name:'メディア論'}],
  'spring-0-1': [{id:'a6',name:'造形基礎'},{id:'a7',name:'色彩論 II'}],
  'spring-4-1': [{id:'a8',name:'インタラクションデザイン'}],
  'spring-1-6': [{id:'a9',name:'ゼミ A'},{id:'a10',name:'論文演習'}],
  'fall-1-2':   [{id:'b1',name:'広告論'},{id:'b2',name:'ブランド論'}],
  'fall-3-1':   [{id:'b3',name:'都市デザイン概論'}],
};

/* ── 状態変数 ── */
let currentSemester  = 'spring';
let registeredCourses = {};
let deletedCourseIds  = new Set();
let logEntries        = [];
let openPopover       = null;
let openColorPicker   = null;
let hasChanges        = false;
let modalCourse       = null;
let justAddedCourseId = null;

/* ═══════════════════════════════════════
   カラーカスタマイズ
═══════════════════════════════════════ */
function getCatColors(catId) {
  const stored = localStorage.getItem('catColor-' + catId);
  if (stored) return JSON.parse(stored);
  const cat = CATEGORIES.find(c => c.id === catId);
  if (!cat) return null;
  const st = getComputedStyle(document.documentElement);
  return {
    bg:  st.getPropertyValue(cat.varPfx + '-bg').trim(),
    bd:  st.getPropertyValue(cat.varPfx + '-bd').trim(),
    dot: st.getPropertyValue(cat.varPfx + '-dot').trim(),
  };
}

function applyColor(catId, colors) {
  const cat = CATEGORIES.find(c => c.id === catId);
  if (!cat) return;
  const root = document.documentElement;
  root.style.setProperty(cat.varPfx + '-bg',  colors.bg);
  root.style.setProperty(cat.varPfx + '-bd',  colors.bd);
  root.style.setProperty(cat.varPfx + '-dot', colors.dot);
  localStorage.setItem('catColor-' + catId, JSON.stringify(colors));
  renderLegend();
}

function getCatDotColor(catId) {
  const stored = localStorage.getItem('catColor-' + catId);
  if (stored) return JSON.parse(stored).dot;
  const cat = CATEGORIES.find(c => c.id === catId);
  if (!cat) return '#888780';
  return getComputedStyle(document.documentElement).getPropertyValue(cat.varPfx + '-dot').trim();
}

/* ═══════════════════════════════════════
   凡例レンダリング
═══════════════════════════════════════ */
function renderLegend() {
  const legend = document.getElementById('legend');
  legend.innerHTML = '';

  CATEGORIES.forEach(cat => {
    const colors = getCatColors(cat.id);
    const item = document.createElement('div');
    item.className = 'legend-item';
    item.title = 'クリックで色変更';

    const dot = document.createElement('span');
    dot.className = 'legend-dot';
    dot.style.background = colors.dot;
    dot.style.borderColor = 'var(--border)'; /* ★ 共通のグレー枠に固定 */

    const label = document.createElement('span');
    label.textContent = cat.label;

    item.appendChild(dot);
    item.appendChild(label);
    legend.appendChild(item);
  });
}

/* ═══════════════════════════════════════
   単位数集計・表示
═══════════════════════════════════════ */
function calcCredits(semester) {
  const base = (semester === 'spring' ? [...coursesSpring] : [...coursesFall])
    .filter(c => !deletedCourseIds.has(c.id));
  const reg = Object.values(registeredCourses).filter(c => c._semester === semester);
  const extra = semester === 'spring'
    ? extraCoursesMaster.filter(c => registeredExtraIds.has(c.id))
    : [];
  return [...base, ...reg, ...extra].reduce((sum, c) => sum + (c.credits || 0), 0);
}

function updateCreditsDisplay() {
  const s = calcCredits('spring');
  const f = calcCredits('fall');
  const el = (id, val) => { const e = document.getElementById(id); if (e) e.textContent = val; };
  el('credits-spring', s);
  el('credits-fall',   f);
  el('credits-total',  s + f);

  /* 変動時に一瞬ハイライト */
  const total = document.getElementById('credits-total');
  if (total) {
    total.closest('.credits-item').classList.add('flash');
    setTimeout(() => total.closest('.credits-item').classList.remove('flash'), 400);
  }
}

/* ═══════════════════════════════════════
   学期切替
═══════════════════════════════════════ */
function setSemester(s) {
  if (currentSemester === s) return;
  const grid = document.getElementById('days-grid');

  /* フェードアウト → 切替 → フェードイン */
  grid.classList.add('semester-fade-out');
  setTimeout(() => {
    currentSemester = s;
    document.getElementById('btn-spring').classList.toggle('active', s === 'spring');
    document.getElementById('btn-fall').classList.toggle('active', s === 'fall');
    closePopover();
    renderGrid();
    grid.classList.remove('semester-fade-out');
    grid.classList.add('semester-fade-in');
    setTimeout(() => grid.classList.remove('semester-fade-in'), 250);
  }, 180);
}

/* ═══════════════════════════════════════
   変更フラグ & 確定ボタン
═══════════════════════════════════════ */
function setChanged() {
  hasChanges = true;
  document.getElementById('confirm-btn').classList.add('visible');
  updateCreditsDisplay();
}

function confirmRegistration() {
  if (!confirm('履修内容を確定しますか？')) return;
  addLog('<span class="log-important">・履修内容を確定しました。</span>');
  hasChanges = false;
  document.getElementById('confirm-btn').classList.remove('visible');
  alert('履修を確定しました！');
}

/* ═══════════════════════════════════════
   グリッド描画
═══════════════════════════════════════ */
function getSemesterCourses() {
  const base = (currentSemester === 'spring' ? [...coursesSpring] : [...coursesFall])
    .filter(c => !deletedCourseIds.has(c.id));
  const reg = Object.values(registeredCourses).filter(c => c._semester === currentSemester);
  return [...base, ...reg];
}

function renderGrid() {
  const grid = document.getElementById('days-grid');
  grid.innerHTML = '';
  const courses = getSemesterCourses();

  DAYS.forEach((day, di) => {
    const col = document.createElement('div');
    col.className = 'day-col';

    const header = document.createElement('div');
    header.className = 'day-header';
    header.textContent = day;
    col.appendChild(header);

    const track = document.createElement('div');
    track.className = 'day-track';

    const dayCourses = courses.filter(c => c.day === di);
    const occupied = {};
    dayCourses.forEach(c => {
      for (let p = c.periodStart; p < c.periodStart + c.periodLength; p++) occupied[p] = c;
    });

    for (let period = 1; period <= PERIODS; period++) {
      const course = occupied[period];
      if (course && course.periodStart < period) continue;

      const slot = document.createElement('div');
      slot.className = 'slot';
      slot.dataset.day = di;
      slot.dataset.period = period;

      if (course) {
        const span = course.periodLength;
        slot.style.height = `${SLOT_H * span}px`;
        slot.classList.add('has-course', course.category);
        slot.innerHTML = `
          <div class="slot-top">
            <span class="online-icon">${course.isOnline ? '📶' : ''}</span>
            <span class="credits-badge">${course.credits}</span>
          </div>
          <div class="course-name">${course.name}</div>
          <div class="instructor">${course.instructor}</div>
        `;
        slot.addEventListener('click', e => {
          e.stopPropagation();
          openModal(course, di, period);
        });
        
        if (course.id === justAddedCourseId) {
          slot.classList.add('just-added');
          justAddedCourseId = null;
        }

      } else {
        slot.classList.add('empty');
        slot.innerHTML = `<div class="plus-icon">＋</div>`;

        const slotKey = `${currentSemester}-${di}-${period}`;
        const combined = availableBySlot[slotKey] || [];

        if (combined.length > 0) {
          const labelText = `${DAYS[di]}${period}`;
          const pop = document.createElement('div');
          pop.className = 'popover';
          pop.innerHTML = `
            <div class="popover-header">
              <span>${labelText} my時間割</span>
              <button class="popover-close" onclick="closePopoverBtn(event)">✕</button>
            </div>
            <div class="popover-list">
              ${combined.map(c =>
                `<div class="popover-item" onclick="registerCourse(event,'${c.id}','${c.name}',${di},${period})">${c.name}</div>`
              ).join('')}
            </div>
          `;
          slot.appendChild(pop);
          slot.addEventListener('click', e => {
            if (e.target.closest('.popover')) return;
            e.stopPropagation();
            if (openPopover && openPopover !== pop) openPopover.classList.remove('open');
            const isOpen = pop.classList.contains('open');
            pop.classList.toggle('open', !isOpen);
            openPopover = isOpen ? null : pop;
          });
        }
      }

      track.appendChild(slot);
    }

    col.appendChild(track);
    grid.appendChild(col);
  });
}

/* ═══════════════════════════════════════
   ポップオーバー制御
═══════════════════════════════════════ */
function closePopoverBtn(e) {
  e.stopPropagation();
  closePopover();
}

function closePopover() {
  if (openPopover) { openPopover.classList.remove('open'); openPopover = null; }
}

/* ═══════════════════════════════════════
   授業登録
═══════════════════════════════════════ */
function registerCourse(e, courseId, courseName, day, period) {
  e.stopPropagation();
  const key = `${currentSemester}-${day}-${period}`;

  /* 既存授業との被りチェック */
  const existing = getSemesterCourses().find(c =>
    c.day === day && c.periodStart <= period && c.periodStart + c.periodLength > period
  );
  if (existing) {
    if (!confirm(`${DAYS[day]}${period} には「${existing.name}」が登録されています。\n上書きして「${courseName}」に変更しますか？`)) {
      closePopover();
      return;
    }
    delete registeredCourses[`${currentSemester}-${day}-${existing.periodStart}`];
    deletedCourseIds.add(existing.id);
    addLog(`・${DAYS[day]}${period} 「${existing.name}」を「${courseName}」に変更しました。`);
  } else {
    addLog(`・${DAYS[day]}${period} 「${courseName}」を登録しました。`);
  }

  registeredCourses[key] = {
    id: courseId, name: courseName, instructor: '', credits: 2,
    day, periodStart: period, periodLength: 1,
    category: 'other', isOnline: false, _semester: currentSemester,
    overview: '',
  };
  justAddedCourseId = courseId;
  setChanged();
  closePopover();
  renderGrid();
}

/* ═══════════════════════════════════════
   シラバスモーダル
═══════════════════════════════════════ */
function openModal(course, day, period) {
  closePopover();
  modalCourse = course;

  document.getElementById('modal-accent').style.background = getCatDotColor(course.category);
  document.getElementById('modal-name').textContent = course.name;
  document.getElementById('modal-instructor').textContent = `担当：${course.instructor || '未設定'}`;

  const catLabel = CATEGORIES.find(c => c.id === course.category)?.label || course.category;
  const tags = [
    `${DAYS[day]}曜 ${period}限`,
    `${course.credits}単位`,
    catLabel,
    ...(course.isOnline ? ['オンライン'] : []),
  ];
  document.getElementById('modal-tags').innerHTML = tags.map(t =>
    `<span class="modal-tag${t === 'オンライン' ? ' online' : ''}">${t}</span>`
  ).join('');

  document.getElementById('modal-overview').textContent =
    course.overview || 'シラバス情報は登録されていません。';

  document.getElementById('modal-delete-btn').onclick = () => deleteCourse(course, day);

  document.getElementById('modal-overlay').classList.add('open');
}

function closeModal(e) {
  if (e && e.target !== document.getElementById('modal-overlay')) return;
  document.getElementById('modal-overlay').classList.remove('open');
  modalCourse = null;
}

function deleteCourse(course, day) {
  addLog(`・${DAYS[day]}${course.periodStart} 「${course.name}」を取り消しました。`);
  delete registeredCourses[`${currentSemester}-${day}-${course.periodStart}`];
  deletedCourseIds.add(course.id);
  setChanged();
  document.getElementById('modal-overlay').classList.remove('open');
  modalCourse = null;
  renderGrid();
}

/* ═══════════════════════════════════════
   ログ
═══════════════════════════════════════ */
function addLog(text) {
  logEntries.unshift(text);
  const box = document.getElementById('log-box');
  const ph = document.getElementById('log-placeholder');
  if (ph) ph.remove();
  box.innerHTML = logEntries.map(t => `<p>${t}</p>`).join('');
}

/* ═══════════════════════════════════════
   グローバルイベント
═══════════════════════════════════════ */
document.addEventListener('click', () => {
  if (openColorPicker) { openColorPicker.classList.remove('open'); openColorPicker = null; }
  closePopover();
});

/* ═══════════════════════════════════════
   初期化
═══════════════════════════════════════ */
renderLegend();
renderGrid();
renderExtraList();
updateCreditsDisplay();

/* ═══════════════════════════════════════
   My時間割 — Lottieパネルロジック
═══════════════════════════════════════ */

/* 外部サイトから引っ張ってきた想定のストックデータ */
const externalMyCourses = [
  { id: 'ext1', name: 'グラフィックデザイン論',  instructor: '佐藤',  category: 'major', credits: 2, day: 0, periodStart: 3, periodLength: 1, semester: 'spring' },
  { id: 'ext2', name: '西洋美術史',              instructor: '鈴木',  category: 'arts',  credits: 2, day: 1, periodStart: 2, periodLength: 1, semester: 'spring' },
  { id: 'ext3', name: 'メディアアート演習',          instructor: '高橋',  category: 'major', credits: 4, day: 2, periodStart: 4, periodLength: 2, semester: 'fall'   },
  { id: 'ext4', name: '英語コミュニケーション',    instructor: 'Smith', category: 'lang',  credits: 1, day: 3, periodStart: 1, periodLength: 1, semester: 'fall'   },
];

/* ─── グローバルな Lottie 状態変数 ─── */
let pannelAnim        = null;
let classItemAnims    = [];
let pannelInitialized = false;
let staggerTimers     = [];

/* DOM読み込み時に Lottie をロード＆初期位置へ */
document.addEventListener('DOMContentLoaded', () => {
  initPannelLottie(() => {
    // 最初のフレームでストップ（ボタン状態）
    pannelAnim.goToAndStop(0, true);
    
    // パネルをボタンの位置（アンカー）へ移動
    updateLottiePosition();
    
    // ウィンドウリサイズ時も位置を追従（開いていない時のみ）
    window.addEventListener('resize', () => {
      const root = document.getElementById('my-timetable-panel');
      if (root && !root.classList.contains('open')) {
        updateLottiePosition();
      }
    });
  });
});

/* ─── pannel.json を初回ロード ─── */
function initPannelLottie(onReady) {
  const container = document.getElementById('lottie-pannel-container');
  if (!container) return;

  if (pannelAnim) {
    if (onReady) onReady();
    return;
  }

  pannelAnim = lottie.loadAnimation({
    container : container,
    renderer  : 'svg',
    loop      : false,
    autoplay  : false,
    path      : 'pannel.json',
    rendererSettings: { preserveAspectRatio: 'none' }
  });

  pannelAnim.addEventListener('DOMLoaded', () => {
    pannelInitialized = true;
    if (onReady) onReady();
  });

  // 展開完了後にカードを量産
  pannelAnim.addEventListener('complete', () => {
    // 逆再生時（閉じる時）は発火させない
    if (pannelAnim.playDirection === 1) {
      spawnCourseCards();
    }
  });
}

/* ─── Lottieパネルをアンカーボタンの位置に揃える ─── */
function updateLottiePosition() {
  const root = document.getElementById('my-timetable-panel');
  const anchor = document.getElementById('my-timetable-btn-anchor');
  if (!root || !anchor) return;
  
  const rect = anchor.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;
  
  // 移動アニメーションを一旦切って即座に位置合わせ
  root.classList.remove('is-animating');
  
  // 650x565.65 のコンテナの中心を centerX, centerY に合わせる
  root.style.transform = `translate(${centerX - 325}px, ${centerY - 282.82}px) scale(1)`;
}

/* ─── モーダルを開く（クリック時） ─── */
function openMyTimetableModal() {
  const overlay = document.getElementById('my-timetable-overlay');
  overlay.classList.add('open');
  renderMyTimetableList();
}

function renderMyTimetableList() {
  const listContainer = document.getElementById('my-timetable-list');
  listContainer.innerHTML = '';

  const availableCourses = externalMyCourses.filter(c => !deletedCourseIds.has(c.id));

  if (availableCourses.length === 0) {
    listContainer.innerHTML = '<p style="text-align:center; color:var(--text-muted); font-size:13px; margin-top:20px;">候補の授業はありません。</p>';
    return;
  }

  availableCourses.forEach((course) => {
    const cat = CATEGORIES.find(item => item.id === course.category) || { label: '他', id: 'other' };
    const courseKey = `${course.semester}-${course.day}-${course.periodStart}`;
    const isAdded = registeredCourses[courseKey]?.id === course.id;
    const semLabel = course.semester === 'spring' ? '前期' : '後期';
    const dayStr = DAYS[course.day];

    const card = document.createElement('div');
    card.style.cssText = 'display:flex; justify-content:space-between; align-items:center; padding:10px 12px; background:var(--gray-50); border-radius:var(--radius-sm); gap:12px;';
    card.innerHTML = `
      <div style="display:flex; flex-direction:column; gap:3px;">
        <span style="font-size:11px; color:var(--text-muted);">${semLabel} ${dayStr}曜 ${course.periodStart}限</span>
        <span style="font-size:13px; font-weight:500;">${course.name}</span>
        <span style="font-size:11px; color:var(--text-muted);">${course.instructor} / ${course.credits}単位</span>
      </div>
      <button class="lottie-card-btn ${isAdded ? 'added' : ''}"
              ${isAdded ? 'disabled' : ''}
              onclick="addCourseFromMyTimetable('${course.id}', this)">
        ${isAdded ? '追加済み' : '＋ 履修する'}
      </button>
    `;
    listContainer.appendChild(card);
  });
}

function closeMyTimetableModal(e) {
  if (e && e.target !== document.getElementById('my-timetable-overlay')) return;
  
  const root = document.getElementById('my-timetable-overlay');
  root.classList.add('is-animating');
  
  // アンカーボタンの位置へ戻る（CSS Transition 1.2s）
  const anchor = document.getElementById('my-timetable-btn-anchor');
  if (anchor) {
    const rect = anchor.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    root.style.transform = `translate(${centerX - 325}px, ${centerY - 282.82}px) scale(1)`;
  }

  // 同時に Lottie のアニメーションを逆再生（収縮）
  const pannelAnim = lottieInstance; // 仮の参照
  if (pannelAnim) {
    pannelAnim.setDirection(-1);
    pannelAnim.play();
  }

  // アニメーション完了後（1.2s後）に状態を完全にリセット
  root.closeTimeout = setTimeout(() => {
    root.classList.remove('open', 'is-animating');
    if (pannelAnim) {
      pannelAnim.setDirection(1);
      pannelAnim.goToAndStop(0, true);
    }
  }, 1200);
}


/* ─── My時間割から履修登録 ─── */
function addFromMyTimetable(course, btn, itemEl) {
  const courseKey = `${course.semester}-${course.day}-${course.periodStart}`;
  const isSpring  = course.semester === 'spring';
  const semLabel  = isSpring ? '前期' : '後期';
  const dayStr    = DAYS[course.day];

  /* 被りチェック */
  const targetSemCourses = (course.semester === 'spring' ? [...coursesSpring] : [...coursesFall])
    .filter(c => !deletedCourseIds.has(c.id));
  const allCourses = [
    ...targetSemCourses,
    ...Object.values(registeredCourses).filter(c => c._semester === course.semester),
  ];
  const existing = allCourses.find(c =>
    c.day === course.day &&
    c.periodStart <= course.periodStart &&
    c.periodStart + c.periodLength > course.periodStart
  );
  if (existing) {
    if (!confirm(`${dayStr}${course.periodStart} に「${existing.name}」が登録されています。\n上書きして「${course.name}」に変更しますか？`)) return;
    delete registeredCourses[`${course.semester}-${course.day}-${existing.periodStart}`];
    deletedCourseIds.add(existing.id);
  }

  registeredCourses[courseKey] = {
    ...course,
    _semester : course.semester,
    isOnline  : false,
    overview  : 'My時間割からインポートされた授業です。',
  };
  justAddedCourseId = course.id;

  addLog(`・My時間割から ${semLabel} ${dayStr}${course.periodStart} 「${course.name}」を取り込みました。`);

  btn.disabled    = true;
  btn.textContent = '追加済み';

  if (typeof currentSemester !== 'undefined' && currentSemester !== course.semester) {
    if (typeof setSemester === 'function') setSemester(course.semester);
  } else {
    if (typeof renderGrid === 'function') renderGrid();
  }
  if (typeof setChanged === 'function') setChanged();
}
