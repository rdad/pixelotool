import PixelTable from './class/PixelTable';
import Pixel from './class/Pixel';
import ptFilters from './pixelTableFilter';

import * as workerProcess from "./workerProcess";
import worker from "./ptProcessor.worker"; 

export default function(pot){

	let pt = new PixelTable();

    pot.canvas.create()
        .then(c=>c.addImage('asset/schoolboyq.png'))
        .then(c=>{       	
        	pt.setImageData(c.getImageData())
                .then(p=>p.toJson())
        		.then(json=>workerProcess.set(worker).send(json))
                .then(json=>pt.setFromJson(json))
                .then(p=>c.drawPixelTable(p))
                .then(c=>c.toScreen());      	
        });
    

    console.log('Program is ended');
}