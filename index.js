const { PI, sin, cos, tan, asin, acos, atan } = Math;

class Trig {
	constructor(DEG = 1) {
		this.DEG = DEG;
		this.RAD = DEG/PI*180;
		this.INVRAD = 1/this.RAD;
		this.INVDEG = 1/this.DEG;
	}
	sin(val) { return sin(val*this.INVRAD); }
	cos(val) { return cos(val*this.INVRAD); }
	tan(val) { return tan(val*this.INVRAD); }
	asin(val) { return asin(val)*this.RAD; }
	acos(val) { return acos(val)*this.RAD; }
	atan(val) { return atan(val)*this.RAD; }
	fromDeg(val) { return val*this.DEG; }
	fromRad(val) { return val*this.RAD; }
	toDeg(val) { return val*this.INVDEG; }
	toRad(val) { return val*this.INVRAD; }
	useDegrees() { return new Trig(1); }
	useRadians() { return new Trig(PI/180); }
}

export default Trig;
