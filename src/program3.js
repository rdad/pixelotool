import PixelTable from './class/PixelTable';
import Pixel from './class/Pixel';
import ptFilters from './pixelTableFilter';

export default function(pot){

	let pt = new PixelTable();

    pot.canvas.create()
        .then(c=>c.addImage('asset/schoolboyq.png'))
        .then(c=>{
        	var img_data = c.getImageData();       	
        	pt.setImageData(img_data)
        		.then(p=>p.applyEachPixel(ptFilters.grayscale))
        		.then(p=>c.drawPixelTable(p))
        		.then(c=>c.toScreen())        	
        });
    

    console.log('Program is ended');
}