
function clamp(val) {
    return Math.min(255, Math.max(0, val));
}

export default {

    grayscale: (r, g, b)=>{
        let v = 0.2126*r + 0.7152+g + 0.0722*b;
        return { r: v, g: v, b: v};
    },

    threshold: (r, g, b, config)=>{
        return (r>config.r && g>config.g && b>config.b) ? {r:r, g:g, b:b} : {r:0, g:0, b:0};
    },

    threshold_light: (r, g, b, config)=>{
        let bg = (config.background) ? config.background : 0;
        return ((r+g+b)/3 > config.amount ) ? {r:r, g:g, b:b} : {r:bg, g:bg, b:bg};
    },

    color: (r, g, b, config)=>{
        return {r:clamp(r+config.r), g:clamp(g+config.g), b:clamp(b+config.b)};
    },
};