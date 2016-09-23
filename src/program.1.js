
export default function(pot){

    let c1 = pot.canvas.create({
        image: 'asset/schoolboyq.png'
    });

    let p = pot.pass.create();

    p.add(t=>{
        return t.applyEachPixel((r, g, b)=>{
            let v = 0.2126*r + 0.7152+g + 0.0722*b;
            return { r: v, g: v, b: v};
        });
    }).add(t=>{
        return new Promise((resolve, reject) => {
            t.toScreen();
            resolve(true);
        });
    });
    
    pot.pass.apply(c1, p);

    console.log('Program is ended');
}