gsap.registerPlugin(ScrollTrigger);

// YOUR CODE HERE
const line1Tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".line-one",
    start: "top top",
    scrub: true,
    pin: true,
    // markers: true,
  },
});

line1Tl
  .from(".line-one span", {
    y: "100vh",
    duration: 2,
    stagger: 0.5,
  })
  .to(".line-one", {
    backgroundColor: "yellow",
    duration: 6,
  })
  .from(".sun", {
    x: "100vw",
    duration: 3,
  })
  .to(".line-one span", {
    x: "100vw",
    duration: 3,
    delay: 5,
  })
  .to(
    ".sun",
    {
      x: "-100vw",
      duration: 3,
    },
    "<"
  );

const line2Tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".line-two",
    start: "top top",
    scrub: true,
    pin: true,
    // markers: true,
  },
});
line2Tl
  .from(".line-two span:first-child", {
    x: "-200vw",
    scale: 30,
  })
  .from(
    ".line-two span:last-child",
    {
      x: "200vw",
      scale: 30,
    },
    "<"
  )
  .to(".line-two span:first-child", {
    y: "-15px",
    duration: 0.5,
  })
  .to(".line-two span:first-child", {
    y: "15px",
  })
  .to(
    ".line-two span:last-child",
    {
      y: "-10px",
    },
    "<"
  )
  .to(".line-two span:last-child", {
    y: "15px",
    // delay: 0.2,
  });

const line3Tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".line-three",
    start: "top top",
    scrub: true,
    pin: true,
    markers: true,
  },
});

line3Tl
  .from(".line-three span", {
    y: "100vh",
    duration: 1,
    stagger: 0.5,
  })
  .to(".line-three", {
    backgroundPositionX: "0",
    color: "white",
    delay: 0.5,
  })
  .from(
    ".line-three .moon",
    {
      x: "100%",
    },
    "<"
  );
