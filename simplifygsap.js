animated_ele=document.getElementsByClassName("ease-animation");


for (var i = 0; i < animated_ele.length; i++) {
    element=animated_ele.item(i);
    var ease =   (undefined ? delete element.duration :( element.dataset.ease));
    var duration = parseInt  (undefined ? delete element.duration : (element.dataset.duration));
    var repeat = parseInt   (undefined ? delete element.repeat : ( element.dataset.repeat));
    var delay = parseInt   (undefined ? delete element.delay: ( element.dataset.delay));
   
    gsap.from(element, {duration: duration, x: '-100%',ease:`${ease}`  ,repeat: repeat});
    
}

animated_ele=document.getElementsByClassName("stagger-animation");

for (var i = 0; i < animated_ele.length; i++) {
    element=animated_ele.item(i);
   
    var repeat = parseInt (undefined ? delete element.repeat:element.dataset.repeat);
    var each = parseFloat(undefined ? delete element.each:(element.dataset.each));
    var ease = undefined ? delete element.ease:(element.dataset.ease);
    var from = undefined ? delete element.from:(element.dataset.from);
    var y =parseInt(undefined ? delete element.y:(element.dataset.y));
    var x =parseInt(undefined ? delete element.x:(element.dataset.x));
    var yoyo=undefined ? delete element.yoyo:(element.dataset.yoyo);
    
    // console.log(ease);
    // console.log(duration);
    gsap.from(element,{ease:`${ease}`,stagger:{each:each,from:`${from}`},y:y,repeat:repeat});
    
}
