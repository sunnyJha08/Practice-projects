function loading() {
  let tl = gsap.timeline();

  tl.to(".yellowload1", {
    top: "-100%",
    duration: 0.7,
    delay: 0.5,
    ease: "expo.out",
  });

  tl.from(
    ".yellowload2",
    {
      top: "100%",
      duration: 0.7,
      delay: 0.5,
      ease: "expo.out",
    },
    "anim"
  );
  tl.to(
    ".loader h1",
    {
      delay: 0.6,
      duration: 0.7,
      color: "black",
    },
    "anim"
  );
  tl.to(".loader", {
    opacity: 0,
  });
  tl.to(".loader", {
    display: "none",
  });
}
loading()

const scroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});