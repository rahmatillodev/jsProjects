const arrayImages = [
    "https://i.pinimg.com/236x/a8/86/7f/a8867fa736210d74fab6efaf3df7d178.jpg",
    "https://i.pinimg.com/236x/94/9f/fe/949ffe0064f8cb8ac35a79e1ece33b3a.jpg",
    "https://i.pinimg.com/236x/47/d8/67/47d86708f7999e03b8b2668412da1592.jpg",
    "https://i.pinimg.com/236x/ce/e1/c9/cee1c91fff4ce9eb919cf6f9a3ad3fd5.jpg",
    "https://i.pinimg.com/236x/a8/a2/14/a8a214ce65fd052141e6243f0e6c898f.jpg",
    "https://i.pinimg.com/474x/a5/c8/e6/a5c8e64829f464b29a12f9b634fd690e.jpg",
    "https://i.pinimg.com/236x/3c/46/b6/3c46b68e477ed6634c1424b39ee68f7a.jpg",
    "https://i.pinimg.com/236x/4e/18/b0/4e18b0d9fbd4c9525c1ce52c5635ee80.jpg",
    "https://i.pinimg.com/236x/3e/05/fa/3e05faa96bf13e1976e79e60575a5e30.jpg",
    "https://i.pinimg.com/236x/bb/c0/e3/bbc0e33f8c637cfd59b1644ec597e22f.jpg",
    "https://i.pinimg.com/236x/28/4f/40/284f407b3fd6e5e5a7374235f4e56caf.jpg",
    "https://i.pinimg.com/236x/1c/6f/2f/1c6f2ffdf7f4cbad59a29d7408d8c630.jpg"
];

let ul = document.querySelector("ul.cards");

arrayImages.forEach(image => {
    let li = document.createElement("li");
    li.style.background = `center/cover no-repeat url(${image})`;
    ul.appendChild(li);
});

gsap.registerPlugin(ScrollTrigger);

let iteration = 0;
const spacing = 0.05;
const snap = gsap.utils.snap(spacing);
const cards = gsap.utils.toArray(".cards li");
const seamlessLoop = buildSeamlessLoop(cards, spacing);
const scrub = gsap.to(seamlessLoop, {
    totalTime: 0,
    duration: 0.5,
    ease: "power3",
    paused: true,
});

const trigger = ScrollTrigger.create({
    start: 0,
    onUpdate(self) {
        if (self.progress === 1 && self.direction > 0 && !self.wrapping) {
            wrapForward(self);
        } else if (self.progress < 1e-5 && self.direction < 0 && !self.wrapping) {
            wrapBackward(self);
        } else {
            scrub.vars.totalTime = snap(
                (iteration + self.progress) * seamlessLoop.duration()
            );
            scrub.invalidate().restart();
            self.wrapping = false;
        }
    },
    end: "+=300",
    pin: ".gallery",
});

function wrapForward(trigger) {
    iteration++;
    trigger.wrapping = true;
    trigger.scroll(trigger.start + 1);
}

function wrapBackward(trigger) {
    iteration--;
    if (iteration < 0) {
        iteration = 9;
        seamlessLoop.totalTime(
            seamlessLoop.totalTime() * seamlessLoop.duration() * 10
        );
        scrub.pause();
    }
    trigger.wrapping = true;
    trigger.scroll(trigger.end - 1);
}

function buildSeamlessLoop(items, spacing) {
    let overlap = Math.ceil((1 / spacing) * 2),
        startTime = items.length * spacing + 0.5,
        loopTime = (items.length + overlap) * spacing + 1,
        rawSequence = gsap.timeline({ paused: true }),
        seamlessLoop = gsap.timeline({
            paused: true,
            repeat: -1,
            onRepeat() {
                this._time === this._dur && (this._tTime += this._dur - 0.05);
            }
        }),
        l = items.length + overlap * 2, time = 0, index, item;

    gsap.set(items, { yPercent: 400, opacity: 1, scale: 0 });

    for (let i = 0; i < l; i++) {
        index = i % items.length;
        item = items[index];
        time = i * spacing;
        rawSequence.fromTo(
            item, {
                scale: 0,
                opacity: 1
            },
            {
                scale: 1,
                opacity: 1,
                zIndex: 100,
                duration: 0.5,
                yoyo: true,
                repeat: 1,
                ease: "power1.in",
                immediateRender: false
            }, time
        )
            .fromTo(item, { yPercent: 230 }, {
                yPercent: -200,
                duration: 1,
                ease: "none",
                immediateRender: false
            }, time);
        i <= items.length && seamlessLoop.add("label" + i, time);
    }
    rawSequence.time(startTime);
    seamlessLoop.to(rawSequence, {
        time: loopTime,
        duration: loopTime - startTime,
        ease: "none",
    })
        .fromTo(rawSequence, { time: overlap + spacing * 1 }, {
            time: startTime,
            duration: startTime - (overlap * spacing + 1),
            immediateRender: false,
            ease: "none"
        });
    return seamlessLoop;
}