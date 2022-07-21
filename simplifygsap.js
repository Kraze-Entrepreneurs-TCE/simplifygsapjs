
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
  


// timeline logic
animated_ele = document.getElementsByClassName("timeline");

let sequence_items = []
let sequence_options = []
for (var i = 0; i < animated_ele.length; i++) {

    
    element = animated_ele.item(i);
    if (element.dataset.sequence=== undefined) {
        continue;
    }
    var sequence = parseInt(element.dataset.sequence=== undefined ? 0 : element.dataset.sequence);
  
 
      
        sequence_items.splice(sequence,0, element);
    

}
sequence_items.forEach(item => {
    var sequence = parseInt(element.dataset.sequence=== undefined ? 0 : element.dataset.sequence);
    const ease = item.dataset.ease === undefined ? undefined: item.dataset.ease;
    const delay = item.dataset.delay === undefined ? undefined: item.dataset.delay;
    const duration = parseFloat(item.dataset.duration === undefined ? undefined: item.dataset.duration);
    const opacity = parseFloat(item.dataset.opacity === undefined ? 0: item.dataset.opacity);
    const y = parseInt(item.dataset.y === undefined ? undefined: item.dataset.y);
    const x = parseInt(item.dataset.x === undefined ? undefined: item.dataset.x);
    const rotate = parseInt(item.dataset.rotate === undefined ? undefined: item.dataset.rotate);
    const position = (item.dataset.position === undefined ? undefined: item.dataset.position);
    const method = (item.dataset.method === undefined ? undefined: item.dataset.method);
    const yoyo = (item.dataset.yoyo === undefined ? undefined: item.dataset.yoyo);
    const repeatDelay = (item.dataset.repeatDelay === undefined ? undefined: item.dataset.repeatDelay);
    options={
        ease,
        duration,
        opacity,
        y,
        x,
        rotate,
        delay,
        repeatDelay,
        position,
        yoyo,
        method,
    }
    sequence_options.push(options)
});
var tl=gsap.timeline()
for (let i = 0; i < sequence_items.length; i++) {
    const ele = sequence_items[i];
    const opt = sequence_options[i]
    const del = opt.position;
    delete opt.position;
    const metho_d = opt.method;
    delete opt.method;
    if (metho_d =='from') {
        tl.from(ele,opt,del);
    } else {
        tl.to(ele,opt,del);
    }
   
    
}





 