window.Transitions2D = {
	
	tr41: {
		duration:1.8,
		overlapping:0.05,
		row:5,
		col:1,
		selector :new Aroma.SerialSelector(),
		effect:new Cute.Effect4({ease:TWEEN.Easing.Exponential , dir:'horizontal'  , push:true})
	},
	
	tr40: {
		duration:1.8,
		overlapping:0.001,
		row:5,
		col:1,
		selector :new Aroma.SerialSelector(),
		effect:new Cute.Effect4({ease:TWEEN.Easing.Exponential  , push:true})
	},
	
	tr39: {
		duration:1.8,
		overlapping:0.05,
		row:1,
		col:8,
		selector :new Aroma.SerialSelector(),
		effect:new Cute.Effect4({ease:TWEEN.Easing.Exponential  , push:true})
	},
	
	tr38: {
		duration:1.8,
		overlapping:0.02,
		row:2,
		col:4,
		selector :new Aroma.SerialSelector(),
		effect:new Cute.Effect3({ease:TWEEN.Easing.Exponential  , push:true})
	},
	
	tr37: {
		duration:1.8,
		overlapping:0.02,
		row:1,
		col:10,
		selector :new Aroma.SerialSelector(),
		effect:new Cute.Effect3({ease:TWEEN.Easing.Quartic  , push:true})
	},
	
	tr36: {
		duration:1.2,
		overlapping:0.05,
		row:5,
		col:1,
		selector :new Aroma.SerialSelector(),
		effect:new Cute.Effect3({ease:TWEEN.Easing.Quartic  , push:true})
	},
	
	
	tr35: {
		duration:2.2,
		overlapping:0.02,
		row:1,
		col:10,
		selector :new Aroma.RandSelector(),
		effect:new Cute.Effect2({ease:TWEEN.Easing.Quartic , dir:'t' , push:true})
	},
	
	
	tr34: {
		duration:2.2,
		overlapping:0.03,
		row:1,
		col:10,
		selector :new Aroma.SerialSelector(),
		effect:new Cute.Effect2({ease:TWEEN.Easing.Exponential , dir:'t' , push:true})
	},
	
	tr33: {
		duration:2,
		overlapping:0.04,
		row:4,
		col:4,
		selector:new Aroma.RandSelector(),
		effect:new Cute.Effect2({ease:TWEEN.Easing.Quintic , dir:'br' , push:false })
	},

	tr32: {
		duration:2,
		overlapping:0.04,
		row:4,
		col:4,
		selector:new Aroma.RandSelector(),
		effect:new Cute.Effect2({ease:TWEEN.Easing.Quintic , dir:'tl' , push:false })
	},

	tr31: {
		duration:2,
		overlapping:0.04,
		row:4,
		col:4,
		selector:new Aroma.SerialSelector(),
		effect:new Cute.Effect2({ease:TWEEN.Easing.Quintic , dir:'tl' , push:false })
	},

	tr30: {
		duration:2,
		overlapping:0.05,
		row:5,
		col:1,
		selector:new Aroma.SerialSelector(),
		effect:new Cute.Effect2({ease:TWEEN.Easing.Quintic , dir:'tl' , push:true })
	},

	tr29: {
		duration:2,
		overlapping:0.05,
		row:4,
		col:4,
		selector:new Aroma.DiagonalSelector(),
		effect:new Cute.Effect2({ease:TWEEN.Easing.Quintic , dir:'tl' , push:true })
	},

	tr28: {
		duration:2,
		overlapping:0.05,
		row:1,
		col:8,
		selector:new Aroma.SerialSelector(),
		effect:new Cute.Effect2({ease:TWEEN.Easing.Quintic , dir:'bl' , push:true })
	},

	tr27: {
		duration:2,
		overlapping:0.05,
		row:1,
		col:8,
		selector:new Aroma.SerialSelector(),
		effect:new Cute.Effect2({ease:TWEEN.Easing.Quintic , dir:'b' , push:true })
	},

	tr26: {
		duration:2,
		overlapping:0.05,
		row:1,
		col:8,
		selector:new Aroma.SerialSelector(),
		effect:new Cute.Effect2({ease:TWEEN.Easing.Quintic , dir:'b' })
	},

	tr25: {
		duration:2,
		overlapping:0.05,
		row:1,
		col:8,
		selector:new Aroma.SerialSelector(),
		effect:new Cute.Effect2({ease:TWEEN.Easing.Quintic , dir:'t' })
	},

	tr24: {
		duration:2,
		overlapping:0.06,
		row:5,
		col:1,
		selector:new Aroma.RandSelector(),
		effect:new Cute.Effect2({ease:TWEEN.Easing.Exponential , dir:'l' , push:true})
	},

	tr23: {
		duration:2,
		overlapping:0.06,
		row:5,
		col:1,
		selector:new Aroma.RandSelector(),
		effect:new Cute.Effect2({ease:TWEEN.Easing.Exponential , dir:'r' })
	},

	tr22: {
		duration:2,
		overlapping:0.06,
		row:5,
		col:1,
		selector:new Aroma.SerialSelector(),
		effect:new Cute.Effect2({ease:TWEEN.Easing.Exponential , dir:'r' })
	},

	tr21: {
		duration:2,
		overlapping:0.06,
		row:5,
		col:1,
		selector:new Aroma.SerialSelector(),
		effect:new Cute.Effect2({ease:TWEEN.Easing.Exponential , dir:'l' })
	},

	tr20: {
		duration:2.2,
		overlapping:0.05,
		row:5,
		col:1,
		selector :new Aroma.SerialSelector(),
		effect:new Cute.Effect2({ease:TWEEN.Easing.Exponential , dir:'l' , push:true})
	},
	
	
	tr19: {
		duration:1.4,
		overlapping:0.05,
		row:1,
		col:10,
		selector :new Aroma.SerialSelector(),
		effect:new Cute.Effect2({ease:TWEEN.Easing.Quartic , dir:'l' , push:true})
	},
	
	tr18: {
		duration:1.8,
		overlapping:0.0001,
		row:1,
		col:1,
		selector:new Aroma.SerialSelector(),
		effect:new Cute.Effect2({ease:TWEEN.Easing.Quintic , dir:'l' })
	},

	tr17: {
		duration:1.8,
		overlapping:0.0001,
		row:1,
		col:1,
		selector:new Aroma.SerialSelector(),
		effect:new Cute.Effect2({ease:TWEEN.Easing.Quintic , dir:'b' })
	},


	tr16: {
		duration:1.8,
		overlapping:0.0001,
		row:1,
		col:1,
		selector:new Aroma.SerialSelector(),
		effect:new Cute.Effect2({ease:TWEEN.Easing.Quintic , dir:'b' , push:true})
	},

	
	tr15: {
		duration:1.4,
		overlapping:0.0001,
		row:1,
		col:1,
		selector :new Aroma.SerialSelector(),
		effect:new Cute.Effect2({ease:TWEEN.Easing.Quartic , dir:'t' , push:true})
	},
	
	tr14: {
		duration:1.8,
		overlapping:0.0001,
		row:1,
		col:1,
		selector:new Aroma.SerialSelector(),
		effect:new Cute.Effect2({ease:TWEEN.Easing.Quintic , dir:'l' , push:true})
	},
	
	tr13: {
		duration:1.8,
		overlapping:0.0001,
		row:1,
		col:1,
		selector :new Aroma.SerialSelector(),
		effect:new Cute.Effect2({ease:TWEEN.Easing.Quintic , push:true})
	},
	
	
	tr12: {
		duration:1.2,
		overlapping:0.025,
		row:5,
		col:5,
		selector :new Aroma.RandSelector(),
		effect:new Cute.Effect1()
	},
	
	
	tr11: {
		duration:1.2,
		overlapping:0.025,
		row:5,
		col:5,
		selector :new Aroma.DiagonalSelector('tr'),
		effect:new Cute.Effect1()
	},
	
	
	tr10: {
		duration:1.2,
		overlapping:0.025,
		row:5,
		col:5,
		selector :new Aroma.DiagonalSelector('tl'),
		effect:new Cute.Effect1()
	},
	
	
	tr9: {
		duration:1.2,
		overlapping:0.025,
		row:5,
		col:5,
		selector :new Aroma.DiagonalSelector('bl'),
		effect:new Cute.Effect1()
	},
	
	
	tr8: {
		duration:1.5,
		overlapping:0.025,
		row:5,
		col:5,
		selector :new Aroma.DiagonalSelector('br'),
		effect:new Cute.Effect1()
	},
	
	
	
	tr7: {
		duration:1.8,
		overlapping:0.05,
		row:5,
		col:5,
		selector :new Aroma.SerialSelector('brl' , false),
		effect:new Cute.Effect1()
	},
	
	
	tr6: {
		duration:1.7,
		overlapping:0.05,
		row:5,
		col:5,
		selector :new Aroma.SerialSelector('trl' , true),
		effect:new Cute.Effect1()
	},
	
	
	tr5: {
		duration:0.9,
		overlapping:0.08,
		row:8,
		col:1,
		selector:new Aroma.SerialSelector("trl"),
		effect:new Cute.Effect1()
	},
	
	
	tr4: {
		duration:0.9,
		overlapping:0.08,
		row:8,
		col:1,
		selector:new Aroma.SerialSelector("brl"),
		effect:new Cute.Effect1()
	},
	
	
	tr3: {
		duration:0.9,
		overlapping:0.08,
		row:1,
		col:10,
		selector:new Aroma.RandSelector(),
		effect:new Cute.Effect1()
	},
	
	
	tr2: {
		duration:1.2,
		overlapping:0.05,
		row:1,
		col:10,
		selector :new Aroma.SerialSelector('trl'),
		effect:new Cute.Effect1()
	},
	

	tr1: {
		duration:1.2,
		overlapping:0.08,
		row:1,
		col:10,
		selector:new Aroma.SerialSelector(),
		effect:new Cute.Effect1()
	}
	
	
};

window.Transitions3D = {
	
	tr64: {
		duration:4.5,
		overlapping:0.021,
		row:4,
		col:4,
		selector :new Aroma.RandSelector(),
		effect:new Cute.Effect12({ease:TWEEN.Easing.Back  , zmove:-600 , depth:10  ,sidecolor:0x777777})
	},
	
	tr63: {
		duration:4.5,
		overlapping:0.021,
		row:4,
		col:4,
		selector :new Aroma.RandSelector(),
		effect:new Cute.Effect11({ease:TWEEN.Easing.Back , dir:'tl' , zmove:-600 , depth:10  ,sidecolor:0x777777})
	},
	
	tr62 : {
		duration:3.5,
		overlapping:0.021,
		row:1,
		col:10,
		selector:new Aroma.SerialSelector("trl"),
		effect:new Cute.Effect11({ease:TWEEN.Easing.Quartic , dir:"tr" , zmove:-100 , depth:10  ,sidecolor:0x777777})
	},
	
	tr61: {
		duration:3.5,
		overlapping:0.021,
		row:1,
		col:5,
		selector :new Aroma.SerialSelector('trl'),
		effect:new Cute.Effect11({ease:TWEEN.Easing.Quartic , dir:'tr' , zmove:-400 , depth:10  ,sidecolor:0x777777})
	},
	
	tr60: {
		duration:3.5,
		overlapping:0.021,
		row:1,
		col:7,
		selector :new Aroma.SerialSelector('trl'),
		effect:new Cute.Effect10({ease:TWEEN.Easing.Exponential , dir:'tr' , zmove:-400 , depth:20  ,sidecolor:0x777777})
	},
	
	tr59: {
		duration:3.5,
		overlapping:0.0001,
		row:5,
		col:1,
		selector :new Aroma.SerialSelector('trl'),
		effect:new Cute.Effect10({ease:TWEEN.Easing.Exponential , depth:20  ,sidecolor:0x777777})
	},
	
	tr58 : {
		duration:3.5,
		overlapping:0.08,
		row:1,
		col:4,
		selector:new Aroma.RandSelector(),
		effect:new Cute.Effect10({ease:TWEEN.Easing.Exponential , zmove:-100 , dir:"vertical" ,sidecolor:0x777777})
	},

	tr57 : {
		duration:3.5,
		overlapping:0.08,
		row:1,
		col:8,
		selector:new Aroma.SerialSelector("trl"),
		effect:new Cute.Effect10({ease:TWEEN.Easing.Exponential , zmove:-100 , dir:"vertical" ,sidecolor:0x777777})
	},
	
	tr56: {
		duration:3.5,
		overlapping:0.0001,
		row:1,
		col:8,
		selector :new Aroma.SerialSelector('trl'),
		effect:new Cute.Effect10({ease:TWEEN.Easing.Exponential , zmove:-700  ,sidecolor:0x777777})
	},
		
	tr55: {
		duration:3.5,
		overlapping:0.0001,
		row:5,
		col:1,
		selector :new Aroma.SerialSelector('trl'),
		effect:new Cute.Effect10({ease:TWEEN.Easing.Exponential , zmove:-1200 , dir:'horizontal' ,sidecolor:0x777777})
	},
	
	
	tr54: {
		duration:2.8,
		overlapping:0.03,
		row:4,
		col:1,
		selector :new Aroma.SerialSelector('trl'),
		effect:new Cute.Effect10({ease:TWEEN.Easing.Exponential , zmove:-1200 , dir:'horizontal' ,sidecolor:0x777777 , depth:20 })
	},
	
	
	tr53: {
		duration:3.5,
		overlapping:0.03,
		row:1,
		col:7,
		selector :new Aroma.SerialSelector('trl'),
		effect:new Cute.Effect10({ease:TWEEN.Easing.Exponential ,sidecolor:0x777777 , depth:20 })
	},
	
	
	tr52: {
		duration:2,
		overlapping:0.07,
		row:5,
		col:1,
		selector :new Aroma.SerialSelector('trl'),
		effect:new Cute.Effect10({ease:TWEEN.Easing.Cubic , dir:'horizontal',sidecolor:0x777777 , yspace:5 , zmove:-1000 })
	},
	
	tr51 : {
			duration:3.5,
		overlapping:0.08,
		row:6,
		col:1,
		selector:new Aroma.SerialSelector("brl"),
		effect:new Cute.Effect10({ease:TWEEN.Easing.Exponential , zmove:-1200 , dir:"horizontal" ,sidecolor:0x777777})
	},
	
	tr50 : {
		duration:3.5,
		overlapping:0.08,
		row:6,
		col:1,
		selector:new Aroma.SerialSelector("trl"),
		effect:new Cute.Effect10({ease:TWEEN.Easing.Exponential , zmove:-1200 , dir:"horizontal" ,sidecolor:0x777777})
	},

	tr49 : {
		duration:3.5,
		overlapping:0.021,
		row:1,
		col:8,
		selector:new Aroma.SerialSelector("trl"),
		effect:new Cute.Effect10({ease:TWEEN.Easing.Exponential , dir:"horizontal" , xspace:-20 , depth:10  ,sidecolor:0x777777})
	},

	tr48 : {
		duration:3.5,
		overlapping:0.021,
		row:4,
		col:1,
		selector:new Aroma.SerialSelector("trl"),
		effect:new Cute.Effect10({ease:TWEEN.Easing.Exponential , dir:"vertical" , yspace:-20 , depth:10  ,sidecolor:0x777777})
	},
		
	tr47 : {
		duration:3.5,
		overlapping:0.021,
		row:8,
		col:1,
		selector:new Aroma.SerialSelector("trl"),
		effect:new Cute.Effect10({ease:TWEEN.Easing.Exponential , dir:"vertical" , depth:10  ,sidecolor:0x777777})
	},

	tr46 : {
		duration:3.5,
		overlapping:0.021,
		row:1,
		col:8,
		selector:new Aroma.SerialSelector("trl"),
		effect:new Cute.Effect10({ease:TWEEN.Easing.Exponential , dir:"tr" , depth:10  ,sidecolor:0x777777})
	},

	
	tr45: {
		duration:1.6,
		overlapping:0.07,
		row:5,
		col:1,
		selector :new Aroma.SerialSelector('brl'),
		effect:new Cute.Effect10({ease:TWEEN.Easing.Cubic , dir:'horizontal',sidecolor:0x777777  })
	},
	
	tr44: {
		duration:2.5,
		overlapping:0.02,
		row:1,
		col:8,
		selector :new Aroma.SerialSelector('trl'),
		effect:new Cute.Effect10({ease:TWEEN.Easing.Exponential , dir:'vertical',sidecolor:0x777777  })
	},
	
	
	tr43: {
		duration:1.5,
		overlapping:0.03,
		row:5,
		col:1,
		selector :new Aroma.SerialSelector('brl'),
		effect:new Cute.Effect9({ease:TWEEN.Easing.Cubic,sidecolor:0x777777 })
	},
	
	
	tr42: {
		duration:2.5,
		overlapping:0.03,
		row:1,
		col:8,
		selector :new Aroma.SerialSelector('trl'),
		effect:new Cute.Effect9({ease:TWEEN.Easing.Exponential,xspace:5 , zmove:-500,sidecolor:0x777777 })
	},
	
	
	tr41: {
		duration:2.5,
		overlapping:0.03,
		row:1,
		col:7,
		selector :new Aroma.SerialSelector('trl'),
		effect:new Cute.Effect9({ease:TWEEN.Easing.Exponential,depth:10,xspace:5 , zmove:-500,sidecolor:0x777777 })
	},
	
	tr40: {
		duration:3.5,
		overlapping:0.02,
		row:3,
		col:1,
		selector:new Aroma.RandSelector(),
		effect:new Cute.Effect9({ease:TWEEN.Easing.Back,depth:15,sidecolor:0x777777 , zmove:-200 })
	},

	tr39 : {
		duration:3.5,
		overlapping:0.02,
		row:2,
		col:3,
		selector:new Aroma.RandSelector(),
		effect:new Cute.Effect9({ease:TWEEN.Easing.Exponential,depth:15,sidecolor:0x777777 , zmove:-200 })
	},


	tr38 : {
		duration:3.5,
		overlapping:0.02,
		row:1,
		col:5,
		selector:new Aroma.SerialSelector(),
		effect:new Cute.Effect9({ease:TWEEN.Easing.Exponential,depth:15,sidecolor:0x777777 , zmove:-200 })
	},
	
	tr37: {
		duration:3.5,
		overlapping:0.02,
		row:1,
		col:7,
		selector :new Aroma.SerialSelector(),
		effect:new Cute.Effect9({ease:TWEEN.Easing.Exponential,depth:10,sidecolor:0x777777 })
	},
	
	
	tr36: {
		duration:2.3,
		overlapping:0.08,
		row:2,
		col:1,
		selector :new Aroma.SerialSelector(),
		effect:new Cute.Effect8({ease:TWEEN.Easing.Exponential, dir:"l" , zmove:-1700 , xspace:5 , sidecolor:0x777777 })
	},
	
	
	tr35: {
		duration:3.3,
		overlapping:0.03,
		row:1,
		col:7,
		selector :new Aroma.SerialSelector(),
		effect:new Cute.Effect8({ease:TWEEN.Easing.Back, dir:"u" , zmove:-600 , stack:true , xspace:5 , sidecolor:0x777777 })
	},
	
	
	tr34: {
		duration:3.3,
		overlapping:0.03,
		row:1,
		col:5,
		selector :new Aroma.SerialSelector(),
		effect:new Cute.Effect8({ease:TWEEN.Easing.Back, dir:"r" , zmove:-600 , stack:true , xspace:5 , sidecolor:0x777777 })
	},
	
	
	tr33: {
		duration:3.3,
		overlapping:0.03,
		row:5,
		col:1,
		selector :new Aroma.SerialSelector('trl'),
		effect:new Cute.Effect8({ease:TWEEN.Easing.Back, dir:"r" , zmove:-600 , stack:true , yspace:5 , sidecolor:0x777777 })
	},
	
	
	tr32 : {
		duration:2.8,
		overlapping:0.03,
		row:1,
		col:5,
		selector:new Aroma.SerialSelector(),
		effect:new Cute.Effect8({ease:TWEEN.Easing.Exponential , sidecolor:0x333333 , depth:10 , dir:"l"})
	},

	tr31 : {
		duration:2.8,
		overlapping:0.03,
		row:8,
		col:1,
		selector:new Aroma.SerialSelector(),
		effect:new Cute.Effect8({ease:TWEEN.Easing.Exponential , sidecolor:0x333333 , depth:10 , dir:"u"})
	},
	
	tr30: {
		duration:2.3,
		overlapping:0.03,
		row:5,
		col:1,
		selector :new Aroma.SerialSelector('trl'),
		effect:new Cute.Effect8({ease:TWEEN.Easing.Exponential, dir:"r" , zmove:-1500 , yspace:5 , sidecolor:0x777777 })
	},
	
	tr29: {
		duration:4.6,
		overlapping:0.01,
		row:11,
		col:1,
		selector :new Aroma.SerialSelector('trl'),
		effect:new Cute.Effect8({ease:TWEEN.Easing.Back, dir:"r" , zmove:-600 , yspace:5 , sidecolor:0x333333 , stack:true , balance:0.6})
	},
	
	
	tr28: {
		duration:2.8,
		overlapping:0.03,
		row:4,
		col:1,
		selector :new Aroma.SerialSelector('trl'),
		effect:new Cute.Effect8({ease:TWEEN.Easing.Exponential, dir:"r" , zmove:-1600 , sidecolor:0x333333 , depth:18})
	},
	
	
	tr27: {
		duration:1.6,
		overlapping:0.05,
		row:5,
		col:1,
		selector :new Aroma.SerialSelector('trl'),
		effect:new Cute.Effect8({ease:TWEEN.Easing.Cubic, dir:"r" , zmove:-800 , sidecolor:0x333333 , depth:20})
	},
	
	
	tr26: {
		duration:2.5,
		overlapping:0.02,
		row:1,
		col:8,
		selector :new Aroma.SerialSelector('trl'),
		effect:new Cute.Effect8({ease:TWEEN.Easing.Exponential , sidecolor:0x333333 , depth:20})
	},
	
	tr25 : {
		duration:2.8,
		overlapping:0.03,
		row:8,
		col:1,
		selector:new Aroma.SerialSelector(),
		effect:new Cute.Effect8({ease:TWEEN.Easing.Exponential , sidecolor:0x333333 , dir:"u"})
	},


	tr24 : {
		duration:2.8,
		overlapping:0.03,
		row:1,
		col:13,
		selector:new Aroma.SerialSelector(),
		effect:new Cute.Effect8({ease:TWEEN.Easing.Exponential , sidecolor:0x333333 , dir:"l"})
	},
	
	tr23: {
		duration:2.3,
		overlapping:0.05,
		row:5,
		col:1,
		selector :new Aroma.SerialSelector(),
		effect:new Cute.Effect8({ease:TWEEN.Easing.Cubic , sidecolor:0x333333 , dir:"r" ,yspace:5 , zmove:-1200 })
	},
		
	
	tr22: {
		duration:2,
		overlapping:0.03,
		row:1,
		col:8,
		selector :new Aroma.SerialSelector('brl'),
		effect:new Cute.Effect8({ease:TWEEN.Easing.Back , sidecolor:0x333333 , side:"t" })
	},
	
	tr21 : { 
		duration:2.8,
		overlapping:0.03,
		row:5,
		col:1,
		selector:new Aroma.RandSelector(),
		effect:new Cute.Effect8({ease:TWEEN.Easing.Exponential , sidecolor:0x333333 , dir:"l"})
	},
	
	tr20: {
		duration:2.8,
		overlapping:0.03,
		row:5,
		col:1,
		selector :new Aroma.SerialSelector('brl'),
		effect:new Cute.Effect8({ease:TWEEN.Easing.Exponential , sidecolor:0x333333 , dir:'l'})
	},
	
	
	tr19: {
		duration:2.2,
		overlapping:0.02,
		row:1,
		col:8,
		selector :new Aroma.SerialSelector('trl'),
		effect:new Cute.Effect8({ease:TWEEN.Easing.Exponential , sidecolor:0x333333})
	},
	
	
	tr18: {
		duration:2,
		overlapping:0.0001,
		row:5,
		col:1,
		selector :new Aroma.SerialSelector('trl'),
		effect:new Cute.Effect7({ease:TWEEN.Easing.Exponential })
	},
	
	tr17 : {
		duration:1.7,
		overlapping:0.08,
		row:1,
		col:5,
		selector:new Aroma.SerialSelector(),
		effect:new Cute.Effect7({ease:TWEEN.Easing.Quintic  })
	},



	tr16 : {
		duration:1.7,
		overlapping:0.03,
		row:8,
		col:1,
		selector:new Aroma.SerialSelector("trl"),
		effect:new Cute.Effect7({ease:TWEEN.Easing.Back , xspace:15 })
	},

	
	
	tr15: {
		duration:1.7,
		overlapping:0.07,
		row:4,
		col:1,
		selector :new Aroma.SerialSelector('trl'),
		effect:new Cute.Effect7({ease:TWEEN.Easing.Quartic , dir:'horizontal'})
	},
	
	
	tr14: {
		duration:1.7,
		overlapping:0.05,
		row:1,
		col:4,
		selector :new Aroma.SerialSelector('trl'),
		effect:new Cute.Effect7({ease:TWEEN.Easing.Back })
	},
	
	
	tr13: {
		duration:1.6,
		overlapping:0.07,
		row:2,
		col:4,
		selector :new Aroma.SerialSelector(),
		effect:new Cute.Effect6({ease:TWEEN.Easing.Back , side:'l'  })
	},
	
	
	tr12: {
		duration:1.6,
		overlapping:0.07,
		row:1,
		col:6,
		selector :new Aroma.SerialSelector(),
		effect:new Cute.Effect6({ease:TWEEN.Easing.Back , side:'t'  })
	},
	
	
	tr11: {
		duration:3.5,
		overlapping:0.025,
		row:5,
		col:1,
		selector :new Aroma.RandSelector(),
		effect:new Cute.Effect5({ease:TWEEN.Easing.Exponential , side:'r'  })
	},
	
	
	tr10: {
		duration:3.5,
		overlapping:0.025,
		row:1,
		col:5,
		selector :new Aroma.RandSelector(),
		effect:new Cute.Effect5({ease:TWEEN.Easing.Exponential , side:'t'  })
	},
	
	tr9: {
		duration:2,
		overlapping:0.08,
		row:5,
		col:1,
		selector :new Aroma.SerialSelector(),
		effect:new Cute.Effect5({ease:TWEEN.Easing.Quadratic	, side:'r' , zmove:-800 })
	},
	
	
	tr8: {
		duration:2.4,
		overlapping:0.04,
		row:1,
		col:10,
		selector :new Aroma.SerialSelector(),
		effect:new Cute.Effect5({ease:TWEEN.Easing.Quartic, side:'b' , zmove:-800 })
	},
	
	
	tr7: {
		duration:2,
		overlapping:0.07,
		row:5,
		col:1,
		selector :new Aroma.SerialSelector('blu'),
		effect:new Cute.Effect5({ease:TWEEN.Easing.Cubic, side:'r' , zmove:-550 })
	},
	
	
	tr6: {
		duration:1.7,
		overlapping:0.03,
		row:1,
		col:8,
		selector :new Aroma.SerialSelector(),
		effect:new Cute.Effect5({ease:TWEEN.Easing.Back, side:'t' , zmove:-250  })
	},

	tr5: {
		duration:2.6,
		overlapping:0.03,
		row:5,
		col:1,
		selector :new Aroma.RandSelector(),
		effect:new Cute.Effect5({ease:TWEEN.Easing.Exponential, side:'r'})
	},
	
	tr4 : {
		duration:1.8,
		overlapping:0.08,
		row:5,
		col:1,
		selector:new Aroma.SerialSelector(),
		effect:new Cute.Effect5({ease:TWEEN.Easing.Quartic, side:"l" , zmove:-600})
	},
	
	tr3: {
		duration:1.8,
		overlapping:0.08,
		row:5,
		col:1,
		selector :new Aroma.SerialSelector(),
		effect:new Cute.Effect5({ease:TWEEN.Easing.Quartic, side:'l'})
	},
	
	tr2 : {
		duration:1.6,
		overlapping:0.08,
		row:5,
		col:1,
		selector :new Aroma.SerialSelector(),
		effect:new Cute.Effect5({ease:TWEEN.Easing.Cubic, side:'b'})
	},
	
	tr1 : {
		duration:1.6,
		overlapping:0.08,
		row:1,
		col:7,
		selector :new Aroma.SerialSelector(),
		effect:new Cute.Effect5({ease:TWEEN.Easing.Cubic, side:'l'})
	}

}
