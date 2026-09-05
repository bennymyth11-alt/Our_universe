/* ========================================
   CUSTOMIZATION: YOUR PRIVATE LOVE NOTE
   ======================================== */
const CONFIG = {
  password: "4ft9LOLtinyhuman",
  coupleImage: "us.png",
  audio: { enabled: true, source: "./our-love-song.mp3", startVolume: 0.32, finalVolume: 0.16 },
  messages: {
    wrongPassword: "Nopeee. You know this one. ♡",
    correctPassword: "I knew you'd remember. ♡",
    challengeComplete: "Okay okayyy... you earned your way in. ♡"
  },
  hero: {
    title: "You are my<br /><em>favorite place.</em>",
    subtitle: "For the girl who somehow became my favorite part of every day."
  },
  story: {
    scenes: [
      { number: "01", label: "THE WAY YOU LOVE", title: "The way you love", paragraphs: ["There's something about the way you love me that still leaves me speechless. You make me feel seen, protected, cared for, and genuinely loved in a way I never expected.", "And somehow, I get to call you mine. ♡"], motif: "hearts" },
      { number: "02", label: "A RARE KIND OF LUCK", title: "You make me feel lucky", paragraphs: ["The way you look at me, notice the smallest things, and care about every little detail makes me feel unbelievably lucky.", "In a world of billions of people, finding someone who feels this rare is something I'll never take for granted."], motif: "glow" },
      { number: "03", label: "A QUIET SKY", title: "Those eyes", paragraphs: ["Your eyes remind me of a quiet sky full of stars: deep, beautiful, peaceful, and impossible to look away from.", "I could look into them for hours and still feel like I'm discovering something new."], motif: "stars" },
      { number: "04", label: "THE LITTLE DETAILS", title: "That smile", paragraphs: ["And those little dimples underneath your eyes...", "Every time you smile or laugh, they somehow make your entire face brighter.", "There's something so uniquely you about them, and every time I notice them, my heart does that little thing again."], motif: "dots" },
      { number: "05", label: "A FUTURE MEMORY", title: "That one day", paragraphs: ["I don't know when we'll finally get to be like this in real life...", "...but I'm counting every second until that day.", "I really want to be with you and turn all these little dreams into memories we actually get to live."], motif: "photo", image: true },
      { number: "06", label: "THE NEXT CHAPTER", title: "My favorite person", paragraphs: ["I want to keep choosing you, caring for you, respecting you, and loving you through every chapter that comes next.", "I want to build our future one little moment at a time.", "I love you so, so much, my beautiful wife. ♡"], motif: "constellation" }
    ]
  },
  finalLetter: {
    paragraphs: [
      "Naa gyu'y mga tawo nga maabot sa atong kinabuhi nga hilom kaayo, pero pila ra ka piyong, nabag-o na nila ang atong tibuok kalibutan. Ug alang nako, ikaw gyud nang tawhana, babyyy.",
      "Salamat kaayo sa matag katawa, sa imong walay katapusan nga pasensya, ug sa tanang gagmay nga mga gutlo nga nahimong akong alipyo ug paborito nga kagahapon matag higayon nga manginahanglan ko og kainit ug kalinaw sa akong dughan. Salamat sa pagkahimo nimong ikaw—nga pwerteng ka-ethereal, ka-espesyal, ug walay sama niining kalibutana.",
      "Gusto nako nga mahibaloan nimo kon unsa tika kagihigugma kaayo, dili lang sa mga dagkong adlaw, kon dili bisan sa atong mga ordinaryo nga gutlo: sa atong mga tabis ug katulogon pa nga 'hello', sa mga binuang nga joke, sa mga hilom nga gutlo nga gawasnon ug komportable ra kaayo ta sa usa't usa, ug sa tanang gagmay nga mga vitals sa atong tunga. Ikaw ang akong paborito nga sugilanon nga gusto nakong puy-an matag adlaw.",
      "Bisan unsa pa nga mga kapitulo ug pagsulay ang moabot sa atong distansya ug sa atong kaugmaon, gusto nako nga atubangon ug puy-an kana nga kauban ka. Ikaw ra gyud akong wifey, akong kalag nga kapares, ug akong hangtod sa hangtod. Gihigugma tika sa tibuok nakong kalag, babyyy🥹❤️"
    ],
    closing: {
      line: "Hangtod sa hangtod,",
      phrase: "Imoha, kanunay,",
      signature: "Benny"
    }
  },
  signature: "[YOUR NAME] ♡"
};

/* ========================================
   CUSTOMIZATION: EDIT YOUR QUIZ HERE
   ======================================== */
const quizQuestions = [
  { question: "What is my favorite thing about you?", answers: ["Your laugh", "Your kindness", "The way you look at me", "All of the above"], correct: 3, correctMessage: "Correct. It is absolutely all of it. ♡", wrongMessage: "Girl 😭 you know the answer." },
  { question: "Where would I always choose to be?", answers: ["Anywhere with you", "On a beach", "At home with snacks", "Somewhere under the stars"], correct: 0, correctMessage: "Exactly where I am supposed to be.", wrongMessage: "The answer was hiding in plain sight. ♡" },
  { question: "What do you make ordinary days feel like?", answers: ["A movie", "A warm song", "A little adventure", "All three at once"], correct: 3, correctMessage: "You make everything a little more alive.", wrongMessage: "Very close, but you make them all three. ♡" },
  { question: "What is my favorite kind of future?", answers: ["A big one", "A quiet one", "One that has you in it", "A surprising one"], correct: 2, correctMessage: "That one was never a question.", wrongMessage: "Hint: it has one very important person in it." },
  { question: "Who is the cutest person reading this?", answers: ["Me", "Obviously me", "Still me", "You, pretty girl"], correct: 3, correctMessage: "Finally, you got one right. 😭♡", wrongMessage: "The correct answer is you. It is always you." }
];

/* ========================================
   CUSTOMIZATION: EDIT YOUR MEMORIES HERE
   ======================================== */
const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];
const state = { quizIndex: 0, score: 0, challengeDone: 0, audioMuted: false, audioStarted: false, audioDucked: false, audioFade: null };

function showToast(message) {
  const toast = $("#toast");
  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(showToast.timeout);
  showToast.timeout = window.setTimeout(() => toast.classList.remove("show"), 2800);
}

function setupGate() {
  const gate = $("#gate");
  const form = $("#gate-form");
  const input = $("#password-input");
  const message = $("#gate-message");
  const toggle = $("#toggle-password");
  const audio = $("#romantic-audio");
  const audioToggle = $("#audio-toggle");

  toggle.addEventListener("click", () => {
    const isPassword = input.type === "password";
    input.type = isPassword ? "text" : "password";
    toggle.setAttribute("aria-label", isPassword ? "Hide password" : "Show password");
    toggle.textContent = isPassword ? "◉" : "◎";
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (input.value.trim() !== CONFIG.password) {
      message.textContent = CONFIG.messages.wrongPassword;
      input.classList.remove("shake");
      void input.offsetWidth;
      input.classList.add("shake");
      input.focus();
      return;
    }

    message.textContent = CONFIG.messages.correctPassword;
    form.querySelector(".primary-button").disabled = true;
    if (CONFIG.audio.enabled && CONFIG.audio.source && !state.audioStarted) {
      state.audioStarted = true;
      audio.src = CONFIG.audio.source;
      audio.volume = 0;
      audio.muted = false;
      const playback = audio.play();
      playback.then(() => {
        audioToggle.hidden = false;
        fadeAudioTo(CONFIG.audio.startVolume);
      }).catch(() => {
        state.audioStarted = false;
        audioToggle.hidden = true;
      });
      audioToggle.onclick = () => {
        state.audioMuted = !state.audioMuted;
        if (state.audioMuted) {
          audio.pause();
          audioToggle.textContent = "×";
          audioToggle.setAttribute("aria-label", "Unmute music");
        } else {
          audio.play().catch(() => {});
          audioToggle.textContent = "♫";
          audioToggle.setAttribute("aria-label", "Mute music");
        }
      };
    }
    window.setTimeout(() => {
      gate.classList.add("is-leaving");
      $("#experience").classList.add("is-visible");
      document.body.classList.remove("locked");
      startChallenge();
    }, 1100);
  });

  input.focus();
}

function fadeAudioTo(targetVolume, duration = 1800) {
  const audio = $("#romantic-audio");
  window.cancelAnimationFrame(state.audioFade);
  const startVolume = audio.volume;
  const startTime = performance.now();
  const animate = (now) => {
    const progress = Math.min((now - startTime) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    audio.volume = startVolume + ((targetVolume - startVolume) * eased);
    if (progress < 1) state.audioFade = window.requestAnimationFrame(animate);
  };
  state.audioFade = window.requestAnimationFrame(animate);
}

function setupFinalAudioDucking() {
  const letter = $("#letter");
  const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
    if (!state.audioStarted || state.audioMuted) return;
    state.audioDucked = entry.isIntersecting;
    fadeAudioTo(state.audioDucked ? CONFIG.audio.finalVolume : CONFIG.audio.startVolume, 2200);
  }), { threshold: .2 });
  observer.observe(letter);
}

function startChallenge() {
  const challenge = $("#challenge");
  const field = $("#challenge-field");
  const positions = [[16, 30], [78, 28], [27, 72], [70, 70], [50, 48]];
  const symbols = ["♡", "✦", "✧", "☼", "∞"];
  challenge.classList.add("is-active");
  challenge.setAttribute("aria-hidden", "false");
  document.body.classList.add("locked");
  field.innerHTML = "";

  positions.forEach(([left, top], index) => {
    const object = document.createElement("button");
    object.className = "cute-object";
    object.type = "button";
    object.textContent = symbols[index];
    object.setAttribute("aria-label", `Catch feeling ${index + 1}`);
    object.style.left = `${left}%`;
    object.style.top = `${top}%`;
    object.style.animation = `float ${4 + index * .7}s ease-in-out ${index * -.5}s infinite`;
    object.addEventListener("pointerenter", (event) => dodgeObject(object, event));
    object.addEventListener("click", () => completeObject(object));
    field.appendChild(object);
  });
}

function dodgeObject(object, event) {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || event.pointerType === "touch") return;
  const shiftX = Math.random() * 44 - 22;
  const shiftY = Math.random() * 30 - 15;
  object.style.transform = `translate(${shiftX}px, ${shiftY}px) scale(1.06)`;
  window.setTimeout(() => { if (!object.classList.contains("done")) object.style.transform = ""; }, 500);
}

function completeObject(object) {
  if (object.classList.contains("done")) return;
  object.classList.add("done");
  state.challengeDone += 1;
  $("#challenge-count").textContent = `${state.challengeDone} / 5`;
  if (state.challengeDone === 5) {
    showToast(CONFIG.messages.challengeComplete);
    window.setTimeout(() => {
      $("#challenge").classList.remove("is-active");
      $("#challenge").setAttribute("aria-hidden", "true");
      document.body.classList.remove("locked");
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 900);
  }
}

function renderQuiz() {
  const item = quizQuestions[state.quizIndex];
  const card = $("#quiz-card");
  $("#question-number").textContent = `Question ${state.quizIndex + 1} of ${quizQuestions.length}`;
  $("#quiz-score").textContent = `${state.score} hearts`;
  $("#quiz-progress").style.width = `${((state.quizIndex + 1) / quizQuestions.length) * 100}%`;
  card.innerHTML = `<h3>${item.question}</h3><div class="answers">${item.answers.map((answer, index) => `<button class="answer-button" type="button" data-answer="${index}">${answer}</button>`).join("")}</div><p class="quiz-feedback" role="status"></p>`;
  $$(".answer-button").forEach((button) => button.addEventListener("click", () => answerQuiz(button, item)));
}

function answerQuiz(button, item) {
  const buttons = $$(".answer-button");
  buttons.forEach((answer) => { answer.disabled = true; });
  const feedback = $(".quiz-feedback");
  const isCorrect = Number(button.dataset.answer) === item.correct;
  button.classList.add(isCorrect ? "correct" : "wrong");
  if (isCorrect) state.score += 1;
  feedback.textContent = isCorrect ? item.correctMessage : item.wrongMessage;
  $("#quiz-score").textContent = `${state.score} hearts`;
  const next = document.createElement("button");
  next.className = "quiz-next";
  next.type = "button";
  next.textContent = state.quizIndex === quizQuestions.length - 1 ? "Enter the next chapter ↗" : "Next question ↗";
  next.addEventListener("click", () => {
    if (state.quizIndex === quizQuestions.length - 1) {
      showToast("You actually know me. ♡");
      $("#memories").scrollIntoView({ behavior: "smooth" });
      return;
    }
    state.quizIndex += 1;
    renderQuiz();
  });
  feedback.after(next);
}

function renderMemories() {
  const scenes = CONFIG.story.scenes;
  $("#story-scenes").innerHTML = scenes.map((scene, index) => `<article class="story-scene scene-${scene.motif} ${index === 0 ? "is-active" : ""}" data-scene="${index}" aria-hidden="${index === 0 ? "false" : "true"}>${scene.image ? `<div class="scene-photo" style="--scene-image: url('${CONFIG.coupleImage}')" role="img" aria-label="A photograph of us"></div>` : ""}<div class="scene-atmosphere" aria-hidden="true"></div><div class="scene-content"><span class="scene-number">${scene.number} / ${String(scenes.length).padStart(2, "0")}</span><p class="eyebrow">${scene.label}</p><h3>${scene.title}</h3><div class="scene-copy">${scene.paragraphs.map((paragraph) => `<p>${paragraph}</p>`).join("")}</div><span class="scene-motif" aria-hidden="true"></span><button class="scene-next" type="button" aria-label="Next chapter">Next <span>→</span></button></div></article>`).join("");
  setupStoryNavigation();
}

function setupStoryNavigation() {
  const scenes = $$(".story-scene");
  const host = $("#story-scenes");
  const progress = $("#story-progress");
  let current = 0;
  let startX = 0;
  progress.innerHTML = scenes.map((scene, index) => `<button type="button" class="${index === 0 ? "is-current" : ""}" aria-label="Go to chapter ${index + 1}" aria-current="${index === 0 ? "true" : "false"}"></button>`).join("");
  const progressButtons = $$("#story-progress button");
  const updateProgress = () => progressButtons.forEach((button, index) => {
    const isCurrent = index === current;
    button.classList.toggle("is-current", isCurrent);
    button.setAttribute("aria-current", isCurrent ? "true" : "false");
  });
  const moveTo = (nextIndex) => {
    if (nextIndex < 0 || nextIndex >= scenes.length || nextIndex === current) return;
    const activeScene = scenes.find((scene) => scene.classList.contains("is-active"));
    const activeIndex = activeScene ? Number(activeScene.dataset.scene) : current;
    const outgoing = scenes[activeIndex];
    const incoming = scenes[nextIndex];
    outgoing.classList.remove("is-active");
    outgoing.classList.add("is-leaving");
    incoming.classList.remove("is-leaving");
    incoming.classList.add("is-active");
    outgoing.setAttribute("aria-hidden", "true");
    incoming.setAttribute("aria-hidden", "false");
    current = nextIndex;
    updateProgress();
    incoming.scrollIntoView({ behavior: "smooth", block: "start" });
    window.setTimeout(() => outgoing.classList.remove("is-leaving"), 1100);
  };
  scenes.forEach((scene, index) => scene.querySelector(".scene-next").addEventListener("click", (event) => {
    event.stopPropagation();
    current = Number(scene.dataset.scene);
    moveTo(index === 3 ? 5 : index + 1);
  }));
  progressButtons.forEach((button, index) => button.addEventListener("click", () => moveTo(index)));
  host.addEventListener("pointerdown", (event) => { startX = event.clientX; });
  host.addEventListener("pointerup", (event) => { const distance = event.clientX - startX; if (Math.abs(distance) > 55) moveTo(current + (distance < 0 ? 1 : -1)); });
  window.addEventListener("keydown", (event) => { if (event.key === "ArrowRight") moveTo(current + 1); if (event.key === "ArrowLeft") moveTo(current - 1); });
  const observer = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) entry.target.classList.add("scene-in-view"); }), { threshold: .35 });
  scenes.forEach((scene) => observer.observe(scene));
}

function setupReveals() {
  const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
    if (entry.isIntersecting) { entry.target.classList.add("visible"); observer.unobserve(entry.target); }
  }), { threshold: .12 });
  $$(".reveal").forEach((element) => observer.observe(element));
}

function setupParticles() {
  const field = $("#hero-particles");
  for (let index = 0; index < 22; index += 1) {
    const particle = document.createElement("span");
    particle.className = "particle";
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.top = `${70 + Math.random() * 30}%`;
    particle.style.animationDelay = `${Math.random() * -8}s`;
    particle.style.animationDuration = `${6 + Math.random() * 7}s`;
    field.appendChild(particle);
  }
}

function init() {
  $("#hero-title").innerHTML = CONFIG.hero.title;
  $("#hero-subtitle").textContent = CONFIG.hero.subtitle;
  $("#final-photo").src = CONFIG.coupleImage;
  $("#love-letter").innerHTML = `${CONFIG.finalLetter.paragraphs.map((paragraph, index) => `<p class="letter-paragraph ${index === CONFIG.finalLetter.paragraphs.length - 1 ? "letter-final" : ""}">${paragraph}</p>`).join("")}<div class="letter-closing" aria-label="Letter closing"><p class="closing-line">${CONFIG.finalLetter.closing.line}</p><p class="closing-phrase">${CONFIG.finalLetter.closing.phrase}</p><p class="closing-signature">${CONFIG.finalLetter.closing.signature}</p><span class="closing-star" aria-hidden="true">✦</span></div>`;
  document.body.classList.add("locked");
  setupGate();
  renderQuiz();
  renderMemories();
  setupParticles();
  setupReveals();
  setupFinalAudioDucking();
}

document.addEventListener("DOMContentLoaded", init);
