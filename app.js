const lessons = [
  {
    id: 'bano', number: 1, title: 'La rutina del tesoro', short: 'Hábitos de baño', image: 'assets/kandela-home.png',
    question: '¿Cómo ayudarle a reconocer el lugar correcto para hacer sus necesidades?',
    story: 'Kandela convirtió el pasillo en una charca inesperada. Su familia entendió que todavía no conocía la rutina de la casa y empezó a enseñársela con horarios, observación y premios inmediatos.',
    steps: [
      ['Define momentos fijos', 'Sal al despertar, después de comer, después de jugar y antes de dormir.'],
      ['Observa las señales', 'Dar vueltas u olfatear con insistencia puede indicar que es momento de salir.'],
      ['Premia de inmediato', 'Reconoce el acierto en los primeros segundos para relacionar el premio con la acción.'],
      ['Limpia sin regañar', 'Usa un limpiador enzimático y evita convertir el accidente en una situación de miedo.']
    ],
    exercise: 'Durante un día, registra cuatro salidas y marca cuáles terminaron en el lugar correcto.', duration: 5
  },
  {
    id: 'mordidas', number: 2, title: 'Dientes traviesos', short: 'Redirección al jugar', image: 'assets/kandela-home.png',
    question: '¿Cómo diferenciar un juguete permitido de un objeto de la casa?',
    story: 'Los zapatos y los muebles llamaban la atención de Kandela. En vez de perseguirla, su familia hizo que los mordedores adecuados fueran la alternativa más interesante.',
    steps: [
      ['Prepara opciones', 'Ten mordedores de distintas texturas y tamaños adecuados para tu perro.'],
      ['Haz el intercambio', 'Cambia el objeto prohibido por un juguete permitido, sin forcejeos.'],
      ['Mueve el juguete', 'Hazlo atractivo y reconoce cuando el perro decide usarlo.'],
      ['Pausa si toca la piel', 'Detén brevemente el juego cuando los dientes aprieten y retómalo con calma.']
    ],
    exercise: 'Practica cinco intercambios voluntarios con un juguete permitido y un premio pequeño.', duration: 5
  },
  {
    id: 'ausencias', number: 3, title: 'El abrazo que volvió', short: 'Ausencias graduales', image: 'assets/kandela-calm.png',
    question: '¿Cómo convertir las salidas de casa en una espera más predecible?',
    story: 'Kandela se inquietaba cuando sus humanos desaparecían. Las ausencias muy cortas, un objeto entretenido y los saludos tranquilos ayudaron a construir una nueva asociación.',
    steps: [
      ['Empieza con segundos', 'Sal brevemente y regresa antes de aumentar poco a poco el tiempo.'],
      ['Deja una actividad', 'Reserva un juguete interactivo seguro para los momentos de salida.'],
      ['Baja la intensidad', 'Evita despedidas y recibimientos ruidosos.'],
      ['Respeta su ritmo', 'Si aparece malestar intenso, reduce el tiempo y busca orientación profesional.']
    ],
    exercise: 'Realiza tres ausencias breves y anota cuánto tiempo permanece en calma.', duration: 6
  },
  {
    id: 'correa', number: 4, title: 'La correa mágica', short: 'Paseo sin tirones', image: 'assets/kandela-walk.png',
    question: '¿Cómo hacer que avanzar dependa de llevar la correa floja?',
    story: 'Para Kandela, la calle era una explosión de estímulos. Su familia transformó el paseo en un juego claro: tensión significa pausa; correa floja significa que la aventura continúa.',
    steps: [
      ['Revisa el equipo', 'Elige un arnés bien ajustado, sin puntos de roce ni restricciones incómodas.'],
      ['Detente con tensión', 'Quédate quieto cuando la correa se tense. No tires en sentido contrario.'],
      ['Avanza con holgura', 'Retoma el paseo cuando la correa vuelva a estar floja.'],
      ['Refuerza la cercanía', 'Premia los momentos en que camina cerca y te presta atención.']
    ],
    exercise: 'Practica en un lugar tranquilo durante cinco minutos y cuenta los tramos con correa floja.', duration: 5
  },
  {
    id: 'muebles', number: 5, title: 'Casa sin mordiscos', short: 'Mente y cuerpo activos', image: 'assets/kandela-home.png',
    question: '¿Qué alternativas ofrecer cuando el aburrimiento termina en muebles mordidos?',
    story: 'Los objetos destruidos no eran una venganza. Kandela necesitaba salidas adecuadas para su energía física y su curiosidad. La respuesta combinó actividad, juegos mentales y un entorno preparado.',
    steps: [
      ['Combina actividades', 'Alterna movimiento apropiado con olfato, búsqueda y aprendizaje.'],
      ['Prepara una zona segura', 'Retira objetos peligrosos y deja juguetes resistentes y adecuados.'],
      ['Rota los juguetes', 'Guarda algunos y cámbialos para mantener el interés.'],
      ['Redirige con calma', 'Interrumpe sin gritos y presenta una opción que sí pueda morder.']
    ],
    exercise: 'Esconde cinco premios en una habitación segura y acompaña una búsqueda con olfato.', duration: 7
  },
  {
    id: 'saltos', number: 6, title: 'Aterriza, perro cohete', short: 'Saludos tranquilos', image: 'assets/kandela-calm.png',
    question: '¿Cómo enseñar que cuatro patas en el suelo abren la puerta al saludo?',
    story: 'Kandela saltaba porque el saludo era emocionante. La familia dejó de reforzar los saltos y empezó a reconocer una conducta incompatible: quedarse en el suelo o sentarse.',
    steps: [
      ['Retira la atención', 'Gira el cuerpo y evita hablar o tocar mientras salta.'],
      ['Marca el instante tranquilo', 'Saluda cuando las cuatro patas estén en el suelo.'],
      ['Pide una alternativa', 'Practica sentarse antes de recibir caricias.'],
      ['Alinea a las visitas', 'Explica la misma regla a todas las personas que participan.']
    ],
    exercise: 'Haz cinco ensayos de saludo con una persona de confianza y premia el contacto con el suelo.', duration: 5
  },
  {
    id: 'llamado', number: 7, title: 'El llamado valioso', short: 'Volver al escuchar', image: 'assets/kandela-walk.png',
    question: '¿Cómo lograr que volver sea el comienzo de algo bueno?',
    story: 'Los olores y otros perros competían con la voz de la familia. Kandela practicó primero a poca distancia y aprendió que responder siempre traía una recompensa valiosa.',
    steps: [
      ['Elige una señal', 'Usa siempre una palabra breve y un tono amable.'],
      ['Practica cerca', 'Empieza en casa, con pocas distracciones y una distancia corta.'],
      ['Paga muy bien', 'Usa una recompensa especial y permite que algunas repeticiones vuelvan al juego.'],
      ['Aumenta una dificultad', 'Cambia solo distancia, lugar o distracción en cada práctica.']
    ],
    exercise: 'Realiza cinco llamados a corta distancia. Termina antes de que pierda interés.', duration: 5
  },
  {
    id: 'ladridos', number: 8, title: 'Escuchar el silencio', short: 'Calma y estimulación', image: 'assets/kandela-calm.png',
    question: '¿Qué puede comunicar un ladrido repetido y qué conducta alternativa se puede reforzar?',
    story: 'Los castigos aumentaban la tensión de Kandela. Su familia revisó los desencadenantes, añadió juegos de olfato y empezó a reconocer los segundos de calma ante los ruidos cotidianos.',
    steps: [
      ['Identifica el detonante', 'Anota qué ocurre justo antes del ladrido y a qué distancia.'],
      ['Reduce la exposición', 'Usa distancia o barreras visuales mientras entrenas una respuesta alternativa.'],
      ['Enriquece la rutina', 'Incluye paseos de olfato, juguetes interactivos y aprendizajes breves.'],
      ['Reconoce la calma', 'Premia cuando observa el estímulo y permanece en silencio.']
    ],
    exercise: 'Observa un detonante a distancia segura y reconoce tres momentos de calma.', duration: 5
  }
];

const defaultState = {
  view: 'home',
  profile: { name: '', stage: 'Cachorro', goal: 'Mejor convivencia' },
  completed: [],
  entries: [],
  sessions: 0,
  lastPractice: null
};

let state = loadState();
let timerSeconds = 300;
let timerId = null;
let selectedPractice = lessons[0].id;
let deferredInstallPrompt = null;
const main = document.querySelector('#main');
const toast = document.querySelector('#toast');

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem('kandela-state'));
    return { ...defaultState, ...saved, profile: { ...defaultState.profile, ...(saved?.profile || {}) } };
  } catch (_) { return structuredClone(defaultState); }
}

function saveState() {
  localStorage.setItem('kandela-state', JSON.stringify(state));
  updateProfileInitial();
}

function escapeHTML(value = '') {
  return String(value).replace(/[&<>'"]/g, char => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', "'":'&#39;', '"':'&quot;' })[char]);
}

function dogName() { return state.profile.name || 'tu perro'; }
function percent() { return Math.round((state.completed.length / lessons.length) * 100); }
function showToast(message) {
  toast.textContent = message;
  toast.classList.add('visible');
  clearTimeout(showToast.timeout);
  showToast.timeout = setTimeout(() => toast.classList.remove('visible'), 2400);
}

function updateProfileInitial() {
  document.querySelector('#profileInitial').textContent = state.profile.name ? state.profile.name.charAt(0).toUpperCase() : '?';
}

function render(view = state.view) {
  state.view = view;
  document.querySelectorAll('.bottom-nav button').forEach(button => button.classList.toggle('active', button.dataset.view === view));
  stopTimer(false);
  if (view === 'home') renderHome();
  if (view === 'route') renderRoute();
  if (view === 'practice') renderPractice();
  if (view === 'journal') renderJournal();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderHome() {
  const next = lessons.find(lesson => !state.completed.includes(lesson.id)) || lessons[0];
  main.innerHTML = `
    <section class="page">
      <div class="hero">
        <span class="eyebrow">Una aventura cotidiana</span>
        <h1>${state.profile.name ? `El equipo de ${escapeHTML(state.profile.name)}` : 'Crecer juntos cambia todo'}</h1>
        <p class="hero-copy">Ideas del viaje de Kandela convertidas en prácticas cortas para tu día a día.</p>
        <div class="hero-actions">
          <button class="primary-button" data-action="open-lesson" data-id="${next.id}">${state.completed.length ? 'Continuar ruta' : 'Comenzar'}</button>
          <button class="secondary-button" data-action="install">Instalar</button>
        </div>
      </div>
      <div class="stats-grid" aria-label="Tu avance">
        <div class="stat-card"><strong>${percent()}%</strong><span>de la ruta completada</span></div>
        <div class="stat-card"><strong>${state.sessions}</strong><span>sesiones registradas</span></div>
      </div>
      <div class="section-heading"><div><span class="eyebrow">Hoy</span><h2>Un paso pequeño</h2></div></div>
      <article class="daily-card">
        <div><span class="eyebrow" style="color:var(--aqua)">${next.duration} minutos</span><h3>${escapeHTML(next.exercise)}</h3><p>${escapeHTML(next.short)} con ${escapeHTML(dogName())}.</p></div>
        <button class="play-button" data-action="start-practice" data-id="${next.id}" aria-label="Iniciar práctica">▶</button>
      </article>
      <div class="section-heading"><div><span class="eyebrow">La ruta</span><h2>Retos de Kandela</h2></div><button data-view="route">Ver todos</button></div>
      <div class="route-preview">
        ${lessons.slice(0, 4).map(lessonCard).join('')}
      </div>
    </section>`;
}

function lessonCard(lesson) {
  const done = state.completed.includes(lesson.id);
  return `<button class="lesson-card ${done ? 'completed' : ''}" data-action="open-lesson" data-id="${lesson.id}"><span class="lesson-num">RETO ${lesson.number}</span><span class="lesson-state">${done ? '✓' : '›'}</span><h3>${escapeHTML(lesson.title)}</h3><p>${escapeHTML(lesson.short)}</p></button>`;
}

function renderRoute() {
  main.innerHTML = `<section class="page"><header class="route-header"><span class="eyebrow">Tu recorrido</span><h1>De reto en reto</h1><p>Ocho aprendizajes del primer año de Kandela, adaptados a prácticas concretas.</p><div class="progress-track" aria-label="${percent()} por ciento completado"><div class="progress-bar" style="width:${percent()}%"></div></div></header><div class="trail">${lessons.map(lesson => {
    const done = state.completed.includes(lesson.id);
    return `<article class="trail-item ${done ? 'completed' : ''}"><div class="trail-node">${done ? '✓' : lesson.number}</div><button class="trail-content" data-action="open-lesson" data-id="${lesson.id}"><h3>${escapeHTML(lesson.title)}</h3><p>${escapeHTML(lesson.short)} ${done ? '· completado' : ''}</p></button></article>`;
  }).join('')}</div></section>`;
}

function renderLesson(id) {
  const lesson = lessons.find(item => item.id === id);
  if (!lesson) return render('route');
  state.view = 'lesson';
  document.querySelectorAll('.bottom-nav button').forEach(button => button.classList.remove('active'));
  const done = state.completed.includes(lesson.id);
  main.innerHTML = `
    <article class="page">
      <header class="lesson-hero" style="--lesson-image:url('${lesson.image}')">
        <button class="back-button" data-view="route" aria-label="Volver a la ruta">←</button>
        <div><span class="eyebrow" style="color:var(--lemon)">Reto ${lesson.number} · ${escapeHTML(lesson.short)}</span><h1>${escapeHTML(lesson.title)}</h1></div>
      </header>
      <div class="lesson-body">
        <div class="story-card"><span class="eyebrow">La pregunta</span><h2>${escapeHTML(lesson.question)}</h2><p>${escapeHTML(lesson.story)}</p></div>
        <div class="section-heading"><div><span class="eyebrow">Pruébalo así</span><h2>La práctica</h2></div></div>
        <ol class="steps">${lesson.steps.map((step, index) => `<li><span class="step-number">${index + 1}</span><div><strong>${escapeHTML(step[0])}</strong><p>${escapeHTML(step[1])}</p></div></li>`).join('')}</ol>
        <aside class="coach-note"><strong>Reto de ${lesson.duration} minutos</strong><p>${escapeHTML(lesson.exercise)}</p></aside>
        <div class="lesson-footer">
          <button class="primary-button full" data-action="start-practice" data-id="${lesson.id}">Iniciar práctica guiada</button>
          <button class="secondary-button full" style="color:var(--plum);border-color:var(--line)" data-action="toggle-complete" data-id="${lesson.id}">${done ? 'Marcar como pendiente' : 'Marcar reto como completado'}</button>
        </div>
      </div>
    </article>`;
}

function renderPractice() {
  const lesson = lessons.find(item => item.id === selectedPractice) || lessons[0];
  timerSeconds = lesson.duration * 60;
  main.innerHTML = `<section class="page"><header class="practice-intro"><span class="eyebrow">Entrenamiento breve</span><h1>Practiquemos</h1><p class="muted">Elige un reto, prepara premios pequeños y trabaja sin prisa.</p></header><article class="timer-card"><span class="eyebrow" style="color:var(--lemon)">${escapeHTML(lesson.short)}</span><h2>${escapeHTML(lesson.title)}</h2><div class="timer" id="timer">${formatTime(timerSeconds)}</div><div class="timer-controls"><button class="primary-button" data-action="timer-toggle">Iniciar</button><button class="secondary-button" data-action="timer-reset">Reiniciar</button></div></article><div class="section-heading"><div><span class="eyebrow">Cambiar enfoque</span><h2>Sesiones</h2></div></div><div class="session-list">${lessons.map(item => `<button class="session-button" data-action="select-practice" data-id="${item.id}"><div><strong>${escapeHTML(item.title)}</strong><small>${escapeHTML(item.exercise)}</small></div><span>${item.duration} min</span></button>`).join('')}</div></section>`;
}

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60).toString().padStart(2, '0');
  const remainder = (seconds % 60).toString().padStart(2, '0');
  return `${minutes}:${remainder}`;
}

function toggleTimer(button) {
  if (timerId) { stopTimer(false); button.textContent = 'Continuar'; return; }
  button.textContent = 'Pausar';
  timerId = setInterval(() => {
    timerSeconds -= 1;
    const display = document.querySelector('#timer');
    if (display) display.textContent = formatTime(timerSeconds);
    if (timerSeconds <= 0) finishSession();
  }, 1000);
}

function stopTimer(reset = false) {
  clearInterval(timerId); timerId = null;
  if (reset && state.view === 'practice') renderPractice();
}

function finishSession() {
  stopTimer(false);
  state.sessions += 1;
  state.lastPractice = new Date().toISOString();
  saveState();
  showToast('Sesión terminada. Registra lo que observaste.');
  setTimeout(() => render('journal'), 900);
}

function renderJournal() {
  const today = new Date().toISOString().slice(0, 10);
  main.innerHTML = `<section class="page"><header class="practice-intro"><span class="eyebrow">Memoria de equipo</span><h1>Diario de avances</h1><p class="muted">Registra señales concretas para reconocer patrones con el tiempo.</p></header><form id="journalForm" class="journal-form"><label>Reto practicado<select name="lesson">${lessons.map(item => `<option value="${item.id}" ${item.id === selectedPractice ? 'selected' : ''}>${escapeHTML(item.title)}</option>`).join('')}</select></label><label>Fecha<input name="date" type="date" value="${today}" max="${today}" required></label><fieldset style="border:0;padding:0;margin:0 0 16px"><legend style="font-weight:900;font-size:13px">¿Cómo resultó?</legend><div class="mood-row"><input type="radio" name="mood" id="mood1" value="Costó" required><label for="mood1">Costó</label><input type="radio" name="mood" id="mood2" value="En proceso"><label for="mood2">En proceso</label><input type="radio" name="mood" id="mood3" value="Avanzó"><label for="mood3">Avanzó</label></div></fieldset><label>¿Qué observaste?<textarea name="note" maxlength="400" required placeholder="Ej. Mantuvo la correa floja durante media cuadra."></textarea></label><button class="primary-button full">Guardar registro</button></form><div class="section-heading"><div><span class="eyebrow">Historial</span><h2>Lo que han logrado</h2></div></div><div class="entries">${state.entries.length ? state.entries.map(entryCard).join('') : '<div class="empty-state">Aún no hay registros. Completa una práctica y anota una observación concreta.</div>'}</div></section>`;
}

function entryCard(entry) {
  const lesson = lessons.find(item => item.id === entry.lesson);
  const readableDate = new Date(`${entry.date}T12:00:00`).toLocaleDateString('es-CO', { day: 'numeric', month: 'short', year: 'numeric' });
  return `<article class="entry"><header><strong>${escapeHTML(lesson?.title || 'Práctica')}</strong><time>${escapeHTML(readableDate)}</time></header><span class="eyebrow" style="margin-top:8px">${escapeHTML(entry.mood)}</span><p>${escapeHTML(entry.note)}</p></article>`;
}

function openProfile() {
  document.querySelector('#dogName').value = state.profile.name;
  document.querySelector('#dogStage').value = state.profile.stage;
  document.querySelector('#dogGoal').value = state.profile.goal;
  document.querySelector('#profileDialog').showModal();
}

function openInstall() {
  const dialog = document.querySelector('#installDialog');
  document.querySelector('#installButton').hidden = !deferredInstallPrompt;
  document.querySelector('#installHelp').textContent = deferredInstallPrompt ? 'Instala Kandela para abrirla como una aplicación y usar el contenido sin conexión.' : 'En iPhone usa Compartir y luego “Añadir a pantalla de inicio”. En Android abre el menú del navegador y elige “Instalar aplicación”.';
  dialog.showModal();
}

document.addEventListener('click', event => {
  const target = event.target.closest('button');
  if (!target) return;
  if (target.dataset.view) return render(target.dataset.view);
  const action = target.dataset.action;
  if (action === 'home') render('home');
  if (action === 'profile') openProfile();
  if (action === 'close-profile') document.querySelector('#profileDialog').close();
  if (action === 'install') openInstall();
  if (action === 'close-install') document.querySelector('#installDialog').close();
  if (action === 'open-lesson') renderLesson(target.dataset.id);
  if (action === 'start-practice') { selectedPractice = target.dataset.id; render('practice'); }
  if (action === 'select-practice') { selectedPractice = target.dataset.id; renderPractice(); }
  if (action === 'timer-toggle') toggleTimer(target);
  if (action === 'timer-reset') stopTimer(true);
  if (action === 'toggle-complete') {
    const id = target.dataset.id;
    state.completed = state.completed.includes(id) ? state.completed.filter(item => item !== id) : [...state.completed, id];
    saveState(); renderLesson(id); showToast(state.completed.includes(id) ? 'Reto completado.' : 'Reto marcado como pendiente.');
  }
});

document.querySelector('#profileForm').addEventListener('submit', event => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  state.profile = { name: data.get('dogName').trim(), stage: data.get('dogStage'), goal: data.get('dogGoal') };
  saveState(); document.querySelector('#profileDialog').close(); render(state.view === 'lesson' ? 'home' : state.view); showToast('Perfil guardado.');
});

main.addEventListener('submit', event => {
  if (event.target.id !== 'journalForm') return;
  event.preventDefault();
  const data = new FormData(event.target);
  state.entries.unshift({ id: Date.now(), lesson: data.get('lesson'), date: data.get('date'), mood: data.get('mood'), note: data.get('note').trim() });
  state.entries = state.entries.slice(0, 30);
  saveState(); renderJournal(); showToast('Registro guardado en este dispositivo.');
});

window.addEventListener('beforeinstallprompt', event => { event.preventDefault(); deferredInstallPrompt = event; });
document.querySelector('#installButton').addEventListener('click', async () => {
  if (!deferredInstallPrompt) return;
  deferredInstallPrompt.prompt();
  await deferredInstallPrompt.userChoice;
  deferredInstallPrompt = null;
  document.querySelector('#installDialog').close();
});

if ('serviceWorker' in navigator && location.protocol !== 'file:') navigator.serviceWorker.register('./sw.js');

updateProfileInitial();
render('home');
if (!state.profile.name) setTimeout(openProfile, 500);
