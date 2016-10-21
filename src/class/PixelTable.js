import Pixel from './Pixel';

export default class PixelTable {

    constructor(options = {}){

        this.width  = 0;
        this.height = 0;
        this.data 	= {};
    }

    get(x, y){
        return this.data[x+'_'+y];
    }

    toJson(){

        return new Promise( resolve => {    
            let str = '';
            for(let pixel in this.data){
                str += this.data[pixel].toString()+',';
            }
            log('PixelTable.toJson() solved');
            resolve({data: str, width: this.width, height: this.height});
        });
    }

    toString(){

        return new Promise( resolve => {    
            let str = '';
            for(let pixel in this.data){
                str += this.data[pixel].toString()+',';
            }
            log('PixelTable.toString() solved');
            resolve(str);
        });
    }

    applyEachPixel( pixel_filter, options = {} ){

        return new Promise( resolve => {

            for(let pixel in this.data){

                this.data[pixel] = pixel_filter( this.data[pixel], options );
            }
            log('PixelTable.applyEachPixel() solved');
            resolve(this);
        });
    }

    setFromJson( json ){

        return new Promise( resolve => {

            this.width = json.width  || 0;
            this.height= json.height || 0;

            let data = json.data.split(','),
                x = 1,
                y = 1,
                d;

            for(let i=0; i<data.length; i++){

                d = data[i].split('_');
                let pixel     = new Pixel(parseInt(d[0]), parseInt(d[1]), parseInt(d[2]), parseInt(d[3]), parseInt(d[4]));
                this.data[x+'_'+y] = pixel;

                x++;
                if(x>this.width){
                    x = 1;
                    y++;
                }
            }
            log('PixelTable.setFromJson() solved');
            resolve(this);
        });
    }

    setImageData( rawImageData ){

        return new Promise( resolve => {

        	this.width = rawImageData.width  || 0;
        	this.height= rawImageData.height || 0;

        	let data = rawImageData.data,
                x = 1,
        		y = 1;

        	for(let i=0; i<data.length; i+=4){

        		let pixel     = new Pixel(x, y, data[i], data[i+1], data[i+2]);
                this.data[x+'_'+y] = pixel;

                x++;
                if(x>this.width){
                    x = 1;
                    y++;
                }
        	}
            log('PixelTable.setImageData() solved');
            resolve(this);
        });
    }
} 