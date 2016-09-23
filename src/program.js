import filterBank from './filter.bank';

export default function(pot){

    pot.canvas.create()
        .then(c=>c.addImage('asset/schoolboyq.png'))
        .then(c=>c.applyEachPixel(filterBank.grayscale))
        .then(c=>c.applyEachPixel(filterBank.threshold_light,130))
        .then(c=>c.toScreen());
    

    console.log('Program is ended');
}