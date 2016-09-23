
export default class Canvas {

    constructor(options = {}){

        this.id     = options.id;

        this.$el    = document.createElement('canvas');
        this.$el.id = options.name || 'canvas_' + this.id;

        this.width  = options.width;
        this.height = options.height;

        this.$el.setAttribute('width', this.width);
        this.$el.setAttribute('height', this.height);

        this.ctx = this.$el.getContext('2d');

        // Image

        if(options.image){
            this.addImage(options.image);
        }
    }

    applyEachPixel( pixel_filter, options = {} ){

        return new Promise( resolve => {

            let pixels = this.getImageData();

            for(let i=0; i<pixels.data.length; i+=4){

                let p = pixel_filter( pixels.data[i], pixels.data[i+1], pixels.data[i+2], options );

                pixels.data[i]      = p.r;
                pixels.data[i+1]    = p.g;
                pixels.data[i+2]    = p.b;
            }

            this.ctx.putImageData(pixels, 0, 0);
            resolve(this);
        });
    }

    getImageData(){
        return this.ctx.getImageData(0, 0, this.width, this.height);
    }

    addImage( path ){

        return new Promise(resolve=>{
            let img = new Image();

            img.onload = () => {
                this.ctx.drawImage( img, 0, 0, this.width, this.height);
                resolve(this);
            };
            img.src = path;
            
        });      
    }

    clear(){
        this.ctx.fillStyle = "rgba(255, 255, 255, 1)";
        this.ctx.fillRect(0, 0, this.width, this.height);
        return this;
    }

    toScreen(){
        document.body.appendChild(this.$el);
        return this;
    }
} 