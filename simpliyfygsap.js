animated_ele=document.getElementsByClassName("ease-animation");


for (var i = 0; i < animated_ele.length; i++) {
    element=animated_ele.item(i);
    var ease =   (undefined ? delete element.duration :( element.dataset.ease));
    var duration = parseInt  (undefined ? delete element.duration : (element.dataset.duration));
    var repeat = parseInt   (undefined ? delete element.repeat : ( element.dataset.repeat));
    var delay = parseInt   (undefined ? delete element.delay: ( element.dataset.delay));
   
    gsap.from(element, {duration: duration, x: '-100%',ease:`${ease}`  ,repeat: repeat});
    
}
