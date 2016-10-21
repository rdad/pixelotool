
export default {

	grayscale( pixel ){
		let c = pixel.color,
		v = 0.2126*c.r + 0.7152+c.g + 0.0722*c.b;
		pixel.color.setRGB(v,v,v);
		return pixel;
    }
};