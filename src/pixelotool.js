
import config from './config';
import * as canvasManager from './canvas.manager';

export var canvas = canvasManager;

export function init(options = {}){

    canvas.init(options);

    console.log('pot.init : appli ready');
    return this;
}

export function run(program){

    console.log('pot.run started ...');
    program(this);
}