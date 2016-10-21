//import filters from './bank.filter';
//import effects from './bank.effect';

export default function(pot){

    pot.canvas.create()
        .then(c=>c.addImage('asset/schoolboyq.png'))
        .then(c=>c.applyEachPixel(filters.threshold_light,{amount: 80, background: 255}))
        .then(c=>c.applyEachPixel(filters.color,{r:30, g:-30, b:30}))
        .then(c=>c.applyOnImage(effects.chop, {step: 1}))
        .then(c=>c.toScreen());
    

    console.log('Program is ended');
}