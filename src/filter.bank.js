
export default {

    grayscale: (r, g, b)=>{
        let v = 0.2126*r + 0.7152+g + 0.0722*b;
        return { r: v, g: v, b: v};
    },

    threshold: (r, g, b, config)=>{
        return (r>config.r && g>config.g && b>config.b) ? {r:r, g:g, b:b} : {r:0, g:0, b:0};
    },
    threshold_light: (r, g, b, light)=>{
        return ((r+g+b)/3 > light ) ? {r:r, g:g, b:b} : {r:0, g:0, b:0};
    }
}