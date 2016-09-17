
import * as pixelotool from './pixelotool';
import program from './program';

document.addEventListener("DOMContentLoaded", (event) => {

        let config = {
            prepare_document:  true
        };

        pixelotool.init( config ).run( program );
}); 

window.pot = pixelotool; // debug