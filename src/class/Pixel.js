import Color from './Color';
import Position from './Position';

export default class Pixel {

    constructor(x=0, y=0, r=0, g=0, b=0, a=0){

        this.position 	= new Position(x, y);
        this.color 		= new Color(r, g, b);
    }

    toString(){
    	return this.position.toString()+'_'+this.color.toString();
    }
} 