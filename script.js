const W = 1091, H = 614;
const stage = document.getElementById("stage");
const fit = document.getElementById("fit");
function resize() {
  const s = Math.min(innerWidth / W, innerHeight / H);
  stage.style.transform = "scale(" + s + ")";
  fit.style.width = W * s + "px";
  fit.style.height = H * s + "px";
}
addEventListener("resize", resize);
resize();

const content = {
  before: {
    title: "Before the typhoon",
    intro: "Prepare while the weather is still calm.",
    items: [
      "Check your barangay's flood and landslide risk.",
      "Pack a go-bag: water, food, flashlight, power bank, medicine, IDs.",
      "Secure the roof, windows and loose objects; clear gutters and drains.",
      "Agree on a family meeting place and evacuation route.",
      "Charge phones and keep a battery radio ready."
    ]
  },
  during: {
    title: "During the typhoon",
    intro: "Stay put, stay informed, stay away from water.",
    items: [
      "Stay indoors, away from windows and glass doors.",
      "Follow PAGASA and your local government for alerts.",
      "Never walk, swim or drive through floodwater.",
      "Unplug appliances if water enters the house.",
      "Evacuate immediately when officials tell you to."
    ]
  },
  after: {
    title: "After the typhoon",
    intro: "Safety is not over when the rain stops.",
    items: [
      "Wait for the official all-clear before going outside.",
      "Watch for fallen power lines, debris and weak structures.",
      "Drink only safe or boiled water until declared safe.",
      "Photograph damage for reports and assistance.",
      "Check on neighbors, elderly people and children."
    ]
  },
  tips: {
    title: "Safety tips",
    intro: "Quick habits that protect your home and family.",
    items: [
      "Know your area's evacuation center before the storm.",
      "Keep important documents in a waterproof bag.",
      "Store drinking water for at least 3 days.",
      "Move appliances and valuables to higher places.",
      "Trim tree branches near your house."
    ]
  },
  update: {
    title: "Typhoon updates",
    intro: "Always rely on official sources for the latest forecast.",
    items: [
      "PAGASA issues Tropical Cyclone Wind Signals (TCWS) from No. 1 to No. 5.",
      "A higher signal number means stronger winds and greater danger.",
      "Check pagasa.dost.gov.ph for bulletins and rainfall warnings.",
      "Follow your LGU and barangay for local evacuation orders."
    ]
  },
  help: {
    title: "Need help?",
    intro: "Call for help early. Do not wait for conditions to worsen.",
    items: [
      "National emergency hotline: 911",
      "Philippine Red Cross: 143",
      "Contact your barangay hall or local DRRM office.",
      "Share your location with family before signal drops."
    ]
  }
};

const modal = document.getElementById("modal");
const navLinks = document.querySelectorAll(".nav li a");

function openSheet(key) {
  const c = content[key];
  document.getElementById("mTitle").textContent = c.title;
  document.getElementById("mIntro").textContent = c.intro;
  document.getElementById("mList").innerHTML = c.items.map(i => "<li>" + i + "</li>").join("");
  modal.hidden = false;
}
function closeSheet() { modal.hidden = true; }
function setActive(key) {
  navLinks.forEach(l => l.classList.toggle("active", l.dataset.open === key));
}

document.querySelectorAll("[data-open]").forEach(el => {
  el.addEventListener("click", e => {
    e.preventDefault();
    const key = el.dataset.open;
    if (key === "home") { closeSheet(); setActive("home"); return; }
    openSheet(key);
    if (["tips", "update", "help"].includes(key)) setActive(key);
  });
});
document.getElementById("close").addEventListener("click", () => { closeSheet(); setActive("home"); });
modal.addEventListener("click", e => { if (e.target === modal) { closeSheet(); setActive("home"); } });
addEventListener("keydown", e => { if (e.key === "Escape") { closeSheet(); setActive("home"); } });