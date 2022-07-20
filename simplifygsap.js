
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


animated_ele = document.getElementsByClassName("ease-animation-from");


for (var i = 0; i < animated_ele.length; i++) {
    element = animated_ele.item(i);
    var ease = (undefined ? delete element.ease : (element.dataset.ease));
    var duration = parseInt(undefined ? delete element.duration : (element.dataset.duration));
    var repeat = parseInt(undefined ? delete element.repeat : (element.dataset.repeat));
    var delay = parseInt(undefined ? delete element.delay : (element.dataset.delay));
    var x = parseInt(undefined ? delete element.x : (element.dataset.x));
    var y = parseInt(undefined ? delete element.y : (element.dataset.y));
    var opacity = parseFloat(undefined ? delete element.opacity : (element.dataset.opacity));
    gsap.from(element, { duration: duration, x: x, y: y, ease: `${ease}`, opacity: opacity, delay: delay, repeat: repeat });

}


animated_ele = document.getElementsByClassName("ease-animation-to");


for (var i = 0; i < animated_ele.length; i++) {
    element = animated_ele.item(i);
    var ease = (undefined ? delete element.ease : (element.dataset.ease));
    var duration = parseInt(undefined ? delete element.duration : (element.dataset.duration));
    var repeat = parseInt(undefined ? delete element.repeat : (element.dataset.repeat));
    var delay = parseInt(undefined ? delete element.delay : (element.dataset.delay));
    var x = parseInt(undefined ? delete element.x : (element.dataset.x));
    var y = parseInt(undefined ? delete element.y : (element.dataset.y));
    var opacity = parseFloat(undefined ? delete element.opacity : (element.dataset.opacity));
    gsap.to(element, { duration: duration, x: x, y: y, ease: `${ease}`, delay: delay, opacity: opacity, repeat: repeat });

}

animated_ele = document.getElementsByClassName("ease-animation-fromTo");

var default_value=10;
for (var i = 0; i < animated_ele.length; i++) {
    element = animated_ele.item(i);
    var ease = (element.dataset.ease === undefined ? "power1": element.dataset.ease);
    var duration = parseInt(element.dataset.duration=== undefined ? 0 : element.dataset.duration);
    var repeat = parseInt(element.dataset.repeat === undefined? 0 : element.dataset.repeat);
    var delay = parseInt( element.dataset.delay === undefined ? 0 : element.dataset.delay);
    var x = parseInt( element.dataset.x === undefined? 0 : element.dataset.x);
    var y = parseInt(element.dataset.y === undefined? 0 : element.dataset.y);
    var opacity = parseFloat ( element.dataset.opacity=== undefined ? 1 : element.dataset.opacity);


    var ease1 = (element.dataset.ease1 === undefined? "power1" : element.dataset.ease1);
    var duration1 = parseInt(element.dataset.duration1 === undefined?0 : element.dataset.duration1);
    var repeat1 = parseInt(element.dataset.repeat1 === undefined? 0: element.dataset.repeat1);
    var delay1 = parseInt(element.dataset.delay1 === undefined? 0 : element.dataset.delay1);
    var x1 = parseFloat(element.dataset.x1 === undefined? 0 : element.dataset.x1);
    var y1 = parseFloat(element.dataset.y1 === undefined? 0 : element.dataset.y1);
    var opacity1 = parseFloat(element.dataset.opacity1 === undefined? 1 : element.dataset.opacity1);
    gsap.fromTo(element, { duration: duration, x: x, opacity: opacity, y: y, ease: `${ease}`, delay: delay, repeat: repeat }, 
    
    { duration: duration1, x: x1, opacity: opacity1, y: y1, ease: `${ease1}`, delay: delay1, repeat: repeat1 });
    
}
