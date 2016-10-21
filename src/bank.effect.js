import * as pot from './pixelotool';

function average(pixels, w,x1,y1,x2,y2){

    var total = 0,
        nb = 0,
        i = 0,
        l = 0;

    for(let x=x1; x<x2; x++){
        for(let y=y1; y<y2; y++){
            i = (y*w+x)*4;
            l = (pixels.data[i] + pixels.data[i+1] + pixels.data[i+2]) / 3;
            total += l;
            nb++;
        }
    }

    return total / nb;
}

export default {

    chop: (canvas, options ) => {

        let pixels = canvas.getImageData(),
            j = 0;

        for(let i=0; i<pixels.data.length; i+=4*options.step){
            pixels.
            
        }
        canvas.ctx.putImageData(pixels, 0, 0);
    },

    chop1: (canvas, options ) => {

        let pixels = canvas.getImageData(),
            j = 0;

        for(let i=0; i<pixels.data.length; i+=4*options.step){
            pixels.data[j] = pixels.data[i];
            pixels.data[++j] = pixels.data[i+1];
            pixels.data[++j] = pixels.data[i+2];
            pixels.data[++j] = 255;
            
        }
        canvas.ctx.putImageData(pixels, 0, 0);
    },

    pixelate: (canvas, dimension) => {

        var pix = [];
        let pixels = canvas.getImageData();

        let screen = pot.canvas.getConfig().screen,
            width = parseInt(screen.width / dimension),
            height = parseInt(screen.height / dimension);

        for(let x=0; x<screen.width; x+=width){
            for(let y=0; y<screen.height; y+=screen.width*height){
                pix.push(average(pixels, screen.width, x, y, x+(4*(width-1)), y+(screen.width*height)));
            }
        }

        console.log(pix);

        return pixels;
    }
};