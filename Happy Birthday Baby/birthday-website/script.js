// ============================================================
// PERSONALIZE HERE
// Change these two names. You can also edit the messages in index.html.
// ============================================================
const girlfriendName = "Cidny";
const yourName = "Haiden";

// 20 Things data — edit any title/message you want.
const things = [
  ["Your smile", "Kahit sa screen ko lang nakikita smile mo, napapangiti mo pa rin ako. Sobrang nakakagaan ng mood whenever I see you smile."],
  ["The way you laugh", "Ang cute ng tawa mo, kahit sa call ko lang naririnig. Sana one day, marinig ko na siya beside me instead of through my phone."],
  ["Your personality", "I love every side of you. Kahit makulit, sweet, random, or maldita, I love getting to know all of it kahit malayo tayo."],
  ["How you care about people", "Love ko how caring you are sa friends mo. Nililibre mo sila, nakikinig ka sa problems nila, and you always try to help them. I really admire that side of you."],
  ["Your little habits", "Napapansin ko kahit yung mga little habits mo. Ang cute isipin na kahit malayo tayo, I still know and remember those little things about you."],
  ["The way you talk to me", "Favorite ko talaga kausap ka. Kahit random lang yung kwento natin or wala tayong masyadong pag usapan, I still enjoy every moment with you."],
  ["Your kindness", "Your kindness makes me appreciate you even more. Kahit hindi ako physically beside you, ramdam ko pa rin kung gaano ka ka genuine."],
  ["Your patience", "Thank you for always being patient with me. Alam kong hindi madali yung LDR, pero you still choose to understand me and stay."],
  ["Your cute reactions", "Ang cute ng reactions mo kahit sa screen lang. Minsan simpleng bagay lang, pero seeing your reaction already makes me smile."],
  ["Your beautiful heart", "Ang genuine ng heart mo. You love and care so much, and I’m really lucky na I get to experience that from you kahit malayo tayo."],
  ["Your sense of humor", "Ang dali mong patawanin ako or pagaanin yung mood ko. Kahit through chat lang, you still manage to make my day better."],
  ["The way you make me feel loved", "Kahit may distance between us, you always find ways to make me feel loved. Yung messages, calls, and little efforts mo mean so much to me."],
  ["Your determination", "Im proud of how you keep going kahit may mga bagay na mahirap. Kahit hindi ako physically there to support you, I'll always be cheering for you."],
  ["Your little random moments", "Yung pagse send natin ng reels sa isa’t isa kahit wala na tayong mapag usapan. Kahit minsan puro reels na lang tayo kasi wala tayong topic, I still love it kasi it's our little way of staying connected kahit malayo tayo."],
  ["Your beautiful eyes", "Kahit sa pictures ko lang sila nakikita, I still think your eyes are so beautiful. Hopefully, one day, I can look at them in person. ♡"],
  ["How comfortable I feel around you", "First day pa lang natin, parang nag-click na agad tayo. Ang bilis nating naging comfortable sa isa’t isa."],
  ["The memories we make", "Even our memories through chats and calls mean so much to me. Someday, gusto ko naman gumawa tayo ng memories na magkasama talaga tayo."],
  ["The way you make my bad days better", "Kapag bad day ko, somehow you always make things feel a little better. Minsan isang message mo lang, okay na ulit ako."],
  ["Simply because you're you", "I don’t need a specific reason to love you. I love you because you’re you. Distance doesn’t change that."],
  ["Everything about you ❤️", "20 things are honestly not enough para sabihin lahat ng love ko sayo. Kahit malayo tayo, you’re still someone who makes my life happier just by being in it."]
];

const pages = [...document.querySelectorAll(".page")];
const navLinks = [...document.querySelectorAll(".nav-link")];
const progressText = document.getElementById("progressText");
const progressFill = document.getElementById("progressFill");
const particleLayer = document.getElementById("particle-layer");
const audio = document.getElementById("birthdayAudio");
const musicToggle = document.getElementById("musicToggle");
const musicIcon = document.getElementById("musicIcon");

let currentPage = 0;
let previousPage = 0;
let letterStarted = false;
let confettiShown = false;

function showPage(index, direction = 1) {
  index = Math.max(0, Math.min(pages.length - 1, index));
  previousPage = currentPage;
  currentPage = index;

  pages.forEach((page, i) => {
    page.classList.toggle("active", i === index);
  });

  navLinks.forEach((link, i) => {
    link.classList.toggle("active", i === index);
  });

  progressText.textContent = `${String(index + 1).padStart(2, "0")} / 05`;
  progressFill.style.width = `${((index + 1) / 5) * 100}%`;

  // Keep the active page at the top.
  pages[index].scrollTo({ top: 0, behavior: "instant" });

  if (index === 1 && !letterStarted) {
    startLetter();
  }

  if (index === 4 && !confettiShown) {
    confettiShown = true;
    launchConfetti();
  }
}

function startLetter() {
  letterStarted = true;

  // Change the letter here if you want a different message.
  const message = `My love,

Grabe, 20 ka na. Parang kailan lang nung nagsisimula pa lang tayo mag usap, tapos ngayon mag 2 months na pala tayo HAHAHA. Akala ko one month pa lang, ang bilis naman kasi ng panahon kapag ikaw kausap ko.

I just want to say how happy and grateful I am na nakilala kita and that I get to be part of your life. Kahit almost two months pa lang tayo, and kahit hindi pa tayo nagkikita in person, ang dami na nating moments na naging special sa akin. Yung mga random conversations natin, late night talks, rants, tawanan, and even yung simpleng pangungumusta natin sa isa't isa. Somehow, kahit may distance between us, you still became someone na sobrang important sa akin.

I really like how comfortable and healthy our relationship feels. Walang kailangan pilitin, we can be ourselves, magkwentuhan, mag rant, mangulit, and just enjoy talking to each other. I appreciate how we understand and respect each other, and I hope we can keep that kind of relationship habang tumatagal tayo.

I made this website for you because I wanted to give you something na may effort and something you can keep. Hindi man siya perfect, pero ginawa ko talaga siya para sayo. Every part of this was made thinking about you, kasi gusto ko lang ipakita sayo kahit in a small way kung gaano ka ka special sa akin.

Cidny I hope you know that you can always count on me. If you have a bad day, may gusto kang ikwento, may gusto kang i rant, or kahit wala ka lang talagang gana, Im here. I might not always know the right words to say, pero I'll always listen and I'll always try to understand you.

I also hope you never feel like you have to be perfect around me. You can be your silly self, your quiet self, your stressed self, or whatever version of you you are that day. I like you for who you are, and I want you to always feel safe being yourself with me.

Now that you're turning 20, I hope this new chapter brings you more happiness, more opportunities, and more reasons to smile. I hope you get closer to your dreams and that you never forget how capable you are. And whenever things get difficult, I hope you remember that you don't have to go through everything alone.

Thank you for these almost two months, Cidny. Thank you for the laughs, the random conversations, the rants, the little moments, and most importantly, for letting me be your boyfriend. We haven't even met face to face yet, but somehow you've already become such a meaningful part of my life. And I'm genuinely looking forward to the day na hindi na lang tayo through screens nag uusap and we finally get to make our first memories together in person.

So ayun happy 20th birthday sayo mahal

Mag 2 months na tayo pero feeling ko may lifetime subscription na ata ako sayo HAHAHA

I love you Cidny I hope today reminds you how loved and appreciated you are

Happy 20th birthdayyy. ❤️`;

  document.getElementById("letterSignature").textContent = `Forever yours, ♡ ${yourName}`;

  const target = document.getElementById("letterText");
  target.textContent = "";

  let i = 0;
  const speed = 13;

  function type() {
    if (i < message.length) {
      target.textContent += message.charAt(i++);
      setTimeout(type, speed);
    }
  }

  type();
}

// Navigation
navLinks.forEach(link => {
  link.addEventListener("click", () => showPage(Number(link.dataset.page)));
});

document.querySelector(".brand").addEventListener("click", () => showPage(0));

document.querySelectorAll(".next-btn").forEach(btn => {
  btn.addEventListener("click", () => showPage(Number(btn.dataset.next)));
});

document.getElementById("replayBtn").addEventListener("click", () => {
  confettiShown = false;
  showPage(0);
});

// Keyboard navigation
document.addEventListener("keydown", e => {
  if (e.key === "ArrowRight") showPage(currentPage + 1);
  if (e.key === "ArrowLeft") showPage(currentPage - 1);
  if (e.key === "Escape") closeLightbox();
});

// 20 Things cards
const thingsGrid = document.getElementById("thingsGrid");

things.forEach(([title, message], index) => {
  const card = document.createElement("article");
  card.className = "thing-card";
  card.tabIndex = 0;
  card.innerHTML = `
    <div class="thing-face thing-front">
      <span class="thing-number">${String(index + 1).padStart(2, "0")}</span>
      <div class="thing-title">${title}</div>
      <span class="thing-number">tap me ♡</span>
    </div>
    <div class="thing-face thing-back">
      <span class="thing-number">${String(index + 1).padStart(2, "0")}</span>
      <p>${message}</p>
      <span>♡</span>
    </div>
  `;

  const flip = () => {
    card.classList.toggle("flipped");
    if (card.classList.contains("flipped")) {
      heartBurst(card);
    }
  };

  card.addEventListener("click", flip);
  card.addEventListener("keydown", e => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      flip();
    }
  });

  thingsGrid.appendChild(card);
});

// Photo lightbox
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxCaption = document.getElementById("lightboxCaption");

document.querySelectorAll(".polaroid").forEach(card => {
  card.addEventListener("click", () => {
    const img = card.querySelector("img");
    const caption = card.querySelector("figcaption").textContent;
    lightboxImage.src = img.src;
    lightboxImage.alt = img.alt;
    lightboxCaption.textContent = caption;
    lightbox.classList.add("open");
    lightbox.setAttribute("aria-hidden", "false");
  });
});

function closeLightbox() {
  lightbox.classList.remove("open");
  lightbox.setAttribute("aria-hidden", "true");
}

document.getElementById("lightboxClose").addEventListener("click", closeLightbox);
lightbox.addEventListener("click", e => {
  if (e.target === lightbox) closeLightbox();
});

// Music toggle — no autoplay.
musicToggle.addEventListener("click", async () => {
  try {
    if (audio.paused) {
      await audio.play();
      musicIcon.textContent = "Ⅱ";
      musicToggle.classList.add("playing");
    } else {
      audio.pause();
      musicIcon.textContent = "♫";
      musicToggle.classList.remove("playing");
    }
  } catch {
    alert("Add your music file at audio/birthday-song.mp3 first! ♡");
  }
});

audio.addEventListener("ended", () => {
  musicIcon.textContent = "♫";
  musicToggle.classList.remove("playing");
});

// Floating hearts + sparkles
const symbols = ["♡", "♥", "✦", "✧", "⋆"];

function spawnParticle() {
  const particle = document.createElement("span");
  particle.className = Math.random() > .35 ? "particle" : "sparkle";
  particle.textContent = symbols[Math.floor(Math.random() * symbols.length)];
  particle.style.left = `${Math.random() * 100}%`;
  particle.style.fontSize = `${10 + Math.random() * 17}px`;
  particle.style.animationDuration = `${5 + Math.random() * 7}s`;
  particle.style.animationDelay = `${Math.random() * 1.5}s`;
  particle.style.opacity = `${.25 + Math.random() * .55}`;
  particleLayer.appendChild(particle);
  setTimeout(() => particle.remove(), 13000);
}

setInterval(spawnParticle, 520);

// Small heart burst around clicked cards
function heartBurst(element) {
  const rect = element.getBoundingClientRect();

  for (let i = 0; i < 5; i++) {
    const heart = document.createElement("span");
    heart.className = "cursor-particle";
    heart.textContent = i % 2 ? "♡" : "♥";
    heart.style.left = `${rect.left + rect.width / 2 + (Math.random() * 50 - 25)}px`;
    heart.style.top = `${rect.top + rect.height / 2}px`;
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 800);
  }
}

// Desktop cursor hearts
let lastCursor = 0;
document.addEventListener("mousemove", e => {
  const now = Date.now();
  if (now - lastCursor < 80) return;
  lastCursor = now;

  const heart = document.createElement("span");
  heart.className = "cursor-particle";
  heart.textContent = Math.random() > .5 ? "♡" : "✦";
  heart.style.left = `${e.clientX}px`;
  heart.style.top = `${e.clientY}px`;
  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 750);
});

// Confetti on final page
function launchConfetti() {
  const pieces = ["♡", "♥", "✦", "✧", "20", "✨"];

  for (let i = 0; i < 70; i++) {
    const piece = document.createElement("span");
    piece.className = "cursor-particle";
    piece.textContent = pieces[Math.floor(Math.random() * pieces.length)];
    piece.style.left = `${Math.random() * 100}vw`;
    piece.style.top = `${-10 - Math.random() * 20}px`;
    piece.style.fontSize = `${10 + Math.random() * 18}px`;
    piece.style.color = Math.random() > .5 ? "#f47eac" : "#fff";
    piece.style.animationDuration = `${1.7 + Math.random() * 2.5}s`;
    document.body.appendChild(piece);

    setTimeout(() => piece.remove(), 4500);
  }
}

// Touch swipe between pages
let touchStartX = 0;
document.addEventListener("touchstart", e => {
  touchStartX = e.changedTouches[0].clientX;
}, { passive: true });

document.addEventListener("touchend", e => {
  const delta = e.changedTouches[0].clientX - touchStartX;
  if (Math.abs(delta) < 70) return;
  if (delta < 0) showPage(currentPage + 1);
  else showPage(currentPage - 1);
}, { passive: true });

// Initial state
showPage(0);
