animated_ele = document.getElementsByClassName("ease-animation");

for (var i = 0; i < animated_ele.length; i++) {
  element = animated_ele.item(i);
  var ease = undefined ? delete element.duration : element.dataset.ease;
  var duration = parseInt(
    undefined ? delete element.duration : element.dataset.duration
  );
  var repeat = parseInt(
    undefined ? delete element.repeat : element.dataset.repeat
  );
  var delay = parseInt(
    undefined ? delete element.delay : element.dataset.delay
  );

  gsap.from(element, {
    duration: duration,
    x: "-100%",
    ease: `${ease}`,
    repeat: repeat,
  });
}
console.log(ease);
animated_ele = document.getElementsByClassName("stagger-animation");

for (var i = 0; i < animated_ele.length; i++) {
    element = animated_ele.item(i);
    console.log(element.dataset.repeat === undefined);
    var repeat = parseInt(
        element.dataset.repeat === undefined ? 2 : element.dataset.repeat
    );
    var each = parseFloat(element.dataset.each === undefined ? 0.1 : element.dataset.each);
    var ease = element.dataset.ease === undefined ? "power1" : element.dataset.ease;
    var from = element.dataset.from === undefined ? "centre" : element.dataset.from;
    var y = parseInt(element.dataset.y === undefined ? 100 : element.dataset.y);
    // var x = parseInt(element.dataset.x === undefined ? delete element.x : element.dataset.x);
    var yoyo = element.dataset.yoyo === undefined ? true : element.dataset.yoyo;

    // console.log(ease);
    // console.log(duration);
    options = {
        ease: `${ease}`,
        stagger: { each: each, from: `${from}` },
        y: y,
        repeat: repeat,
        yoyo: yoyo,
        // x: x,
    };
    console.log(options);
    gsap.from(element, options);
}
