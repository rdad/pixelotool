
export default class Canvas {

    constructor(options = {}){

        this.id  = options.id;

        this.$el = document.createElement('canvas');
        this.$el.id    = options.name || 'canvas_' + this.id;

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

    addImage( path ){

        let img = new Image();

        img.onload = () => {
            this.ctx.drawImage( img, 0, 0, this.width, this.height);
        };
        img.src = path;

        return this;
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