
import * as pixelotool from './pixelotool';
import config from './config';
import program from './program';

document.addEventListener("DOMContentLoaded", (event) => {

        let c = {
            prepare_document:  true
        };

        pixelotool.init( c ).run( program );
        
}); 

window.log = function( txt ){}

// for debugging purpose only
if(config.status === 'development'){

	window.pot = pixelotool;
	window.log = function( txt ){
		console.log(txt);
	}
}