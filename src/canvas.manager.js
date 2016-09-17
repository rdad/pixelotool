
import Canvas from './canvas.class';

let canvas_list = [],
    config = {};

export function init(options = {}){

    // body preparation

    if(options.prepare_document && options.prepare_document === true){
        document.body.style.margin      = 0;
        document.body.style.overflow    = 'hidden';
    }   

    // screen dimension

    config.screen = {
        width: window.top.innerWidth,
        height: window.top.innerHeight
    };

    console.log('canvas manager: ready');
}

export function create(options = {}){

    options.id      = canvas_list.length;
    options.width   = options.width  || config.screen.width;
    options.height  = options.height || config.screen.height;

    let c = new Canvas(options);
    canvas_list.push(c);

    console.log('canvas '+options.id+' create');

    return c;
}