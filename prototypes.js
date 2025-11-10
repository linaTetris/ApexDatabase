Object.defineProperty(Array.prototype,'remove', {
    value: function(index) {this.splice(index,1);},
    writable: false,
})

Object.defineProperty(String.prototype,'hash53', {
    value: function (seed=1) {
        let h1 = 0xdeadbeef ^ seed, h2 = 0x41c6ce57 ^ seed;
        for(let i = 0, ch; i < this.length; i++) {
            ch = this.charCodeAt(i);
            h1 = Math.imul(h1 ^ ch, 2654435761);
            h2 = Math.imul(h2 ^ ch, 1597334677);
        }
        h1  = Math.imul(h1 ^ (h1 >>> 16), 2246822507);
        h1 ^= Math.imul(h2 ^ (h2 >>> 13), 3266489909);
        h2  = Math.imul(h2 ^ (h2 >>> 16), 2246822507);
        h2 ^= Math.imul(h1 ^ (h1 >>> 13), 3266489909);
      
        return 4294967296 * (2097151 & h2) + (h1 >>> 0);
    },
    writable: false,
})

function smoothDelete(element,initialColor,duration=1000,moveDuration=500,removeButtons=true) {
    for (let i=0; i < element.children.length;i++) {
        if (element.children[i].tagName == 'BUTTON') {
            element.children[i].remove();
        }
        for (let j=0; j<element.children[i].children.length;j++) {
            // console.log(element.children[i].children[j].tagName);
            if (element.children[i].children[j].tagName == 'BUTTON') {
                element.children[i].children[j].remove();
            }
        }
        element.children[i].animate([{color:initialColor}, {color:`${initialColor}00`}],
        {
            duration: duration,
            iterations: 1
        });
    }
    element.animate([{backgroundColor:initialColor}, {backgroundColor:`${initialColor}00`}],
    {
        duration: duration,
        iterations: 1
    });

    element.animate([{color:initialColor}, {color:`${initialColor}00`}],
    {
        duration: duration,
        iterations: 1
    });

    element.style.backgroundColor = `${initialColor}00`;

    for (let i=0; i < element.children.length;i++) {    
        element.children[i].style.color = `${initialColor}00`;
    }

    // element.innerHTML = '';
    element.style.overflow = 'hidden';
    element.style.transition = `height ${moveDuration/1000}s`;
    element.style.height = 0;

    setTimeout(function() {
        // element.innerHTML = '';
        // element.style.transition = `height ${moveDuration/1000}s`;
        // element.style.height = 0;
        setTimeout(function() {document.getElementById(element.id).remove();},moveDuration);
    }, 0.8*duration);
}