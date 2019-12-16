(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Símbolo2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E20613").s().p("A10AyQABhjBjAAMAogAAAQBlAAgBBjg");
	this.shape.setTransform(139.7,5);

	this.text = new cjs.Text("● Proporcionar recomendaciones\n● Tomar decisiones acerca de las \n    acciones iniciales.\n● Informar.\n● Comunicar.\n● Preparar recursos.\n● Activación de los planes.", "17px 'Arial'");
	this.text.lineHeight = 21;
	this.text.lineWidth = 260;
	this.text.parent = this;
	this.text.setTransform(11.6,23.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E9E9E9").s().p("A0QOgQgsAAgfhpQgZhVAAhGIAA3XQAAhkBkAAMAohAAAQBkAAAABkIAAZ3QAABkhkAAg");
	this.shape_1.setTransform(139.7,92.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.text},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Símbolo2, new cjs.Rectangle(0,0,279.5,222.1), null);


(lib.Símbolo1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.text = new cjs.Text(".", "17px 'Arial'");
	this.text.lineHeight = 19;
	this.text.parent = this;
	this.text.setTransform(232.7,127.2);

	this.text_1 = new cjs.Text("e", "17px 'Arial'");
	this.text_1.lineHeight = 19;
	this.text_1.parent = this;
	this.text_1.setTransform(223.3,127.2);

	this.text_2 = new cjs.Text("v", "17px 'Arial'");
	this.text_2.lineHeight = 19;
	this.text_2.parent = this;
	this.text_2.setTransform(214.8,127.2);

	this.text_3 = new cjs.Text("a", "17px 'Arial'");
	this.text_3.lineHeight = 19;
	this.text_3.parent = this;
	this.text_3.setTransform(205.3,127.2);

	this.text_4 = new cjs.Text("l", "17px 'Arial'");
	this.text_4.lineHeight = 19;
	this.text_4.parent = this;
	this.text_4.setTransform(201.5,127.2);

	this.text_5 = new cjs.Text("c", "17px 'Arial'");
	this.text_5.lineHeight = 19;
	this.text_5.parent = this;
	this.text_5.setTransform(193,127.2);

	this.text_6 = new cjs.Text("s", "17px 'Arial'");
	this.text_6.lineHeight = 19;
	this.text_6.parent = this;
	this.text_6.setTransform(179.8,127.2);

	this.text_7 = new cjs.Text("e", "17px 'Arial'");
	this.text_7.lineHeight = 19;
	this.text_7.parent = this;
	this.text_7.setTransform(170.4,127.2);

	this.text_8 = new cjs.Text("t", "17px 'Arial'");
	this.text_8.lineHeight = 19;
	this.text_8.parent = this;
	this.text_8.setTransform(165.7,127.2);

	this.text_9 = new cjs.Text("n", "17px 'Arial'");
	this.text_9.lineHeight = 19;
	this.text_9.parent = this;
	this.text_9.setTransform(156.2,127.2);

	this.text_10 = new cjs.Text("a", "17px 'Arial'");
	this.text_10.lineHeight = 19;
	this.text_10.parent = this;
	this.text_10.setTransform(146.8,127.2);

	this.text_11 = new cjs.Text("r", "17px 'Arial'");
	this.text_11.lineHeight = 19;
	this.text_11.parent = this;
	this.text_11.setTransform(141.1,127.2);

	this.text_12 = new cjs.Text("g", "17px 'Arial'");
	this.text_12.lineHeight = 19;
	this.text_12.parent = this;
	this.text_12.setTransform(131.7,127.2);

	this.text_13 = new cjs.Text("e", "17px 'Arial'");
	this.text_13.lineHeight = 19;
	this.text_13.parent = this;
	this.text_13.setTransform(122.2,127.2);

	this.text_14 = new cjs.Text("t", "17px 'Arial'");
	this.text_14.lineHeight = 19;
	this.text_14.parent = this;
	this.text_14.setTransform(117.5,127.2);

	this.text_15 = new cjs.Text("n", "17px 'Arial'");
	this.text_15.lineHeight = 19;
	this.text_15.parent = this;
	this.text_15.setTransform(108.1,127.2);

	this.text_16 = new cjs.Text("i", "17px 'Arial'");
	this.text_16.lineHeight = 19;
	this.text_16.parent = this;
	this.text_16.setTransform(104.3,127.2);

	this.text_17 = new cjs.Text("r", "17px 'Arial'");
	this.text_17.lineHeight = 19;
	this.text_17.parent = this;
	this.text_17.setTransform(93.9,127.2);

	this.text_18 = new cjs.Text("a", "17px 'Arial'");
	this.text_18.lineHeight = 19;
	this.text_18.parent = this;
	this.text_18.setTransform(84.5,127.2);

	this.text_19 = new cjs.Text("c", "17px 'Arial'");
	this.text_19.lineHeight = 19;
	this.text_19.parent = this;
	this.text_19.setTransform(76,127.2);

	this.text_20 = new cjs.Text("i", "17px 'Arial'");
	this.text_20.lineHeight = 19;
	this.text_20.parent = this;
	this.text_20.setTransform(72.2,127.2);

	this.text_21 = new cjs.Text("f", "17px 'Arial'");
	this.text_21.lineHeight = 19;
	this.text_21.parent = this;
	this.text_21.setTransform(67.5,127.2);

	this.text_22 = new cjs.Text("i", "17px 'Arial'");
	this.text_22.lineHeight = 19;
	this.text_22.parent = this;
	this.text_22.setTransform(63.7,127.2);

	this.text_23 = new cjs.Text("t", "17px 'Arial'");
	this.text_23.lineHeight = 19;
	this.text_23.parent = this;
	this.text_23.setTransform(59,127.2);

	this.text_24 = new cjs.Text("n", "17px 'Arial'");
	this.text_24.lineHeight = 19;
	this.text_24.parent = this;
	this.text_24.setTransform(49.5,127.2);

	this.text_25 = new cjs.Text("e", "17px 'Arial'");
	this.text_25.lineHeight = 19;
	this.text_25.parent = this;
	this.text_25.setTransform(40.1,127.2);

	this.text_26 = new cjs.Text("d", "17px 'Arial'");
	this.text_26.lineHeight = 19;
	this.text_26.parent = this;
	this.text_26.setTransform(30.6,127.2);

	this.text_27 = new cjs.Text("I", "17px 'Arial'");
	this.text_27.lineHeight = 19;
	this.text_27.parent = this;
	this.text_27.setTransform(25.9,127.2);

	this.text_28 = new cjs.Text("5", "bold 17px 'Arial'");
	this.text_28.lineHeight = 19;
	this.text_28.parent = this;
	this.text_28.setTransform(11.8,127.2);

	this.text_29 = new cjs.Text(".", "17px 'Arial'");
	this.text_29.lineHeight = 19;
	this.text_29.parent = this;
	this.text_29.setTransform(169.5,106.2);

	this.text_30 = new cjs.Text("o", "17px 'Arial'");
	this.text_30.lineHeight = 19;
	this.text_30.parent = this;
	this.text_30.setTransform(160.1,106.2);

	this.text_31 = new cjs.Text("t", "17px 'Arial'");
	this.text_31.lineHeight = 19;
	this.text_31.parent = this;
	this.text_31.setTransform(155.4,106.2);

	this.text_32 = new cjs.Text("c", "17px 'Arial'");
	this.text_32.lineHeight = 19;
	this.text_32.parent = this;
	this.text_32.setTransform(146.9,106.2);

	this.text_33 = new cjs.Text("a", "17px 'Arial'");
	this.text_33.lineHeight = 19;
	this.text_33.parent = this;
	this.text_33.setTransform(137.4,106.2);

	this.text_34 = new cjs.Text("p", "17px 'Arial'");
	this.text_34.lineHeight = 19;
	this.text_34.parent = this;
	this.text_34.setTransform(128,106.2);

	this.text_35 = new cjs.Text("m", "17px 'Arial'");
	this.text_35.lineHeight = 19;
	this.text_35.parent = this;
	this.text_35.setTransform(113.8,106.2);

	this.text_36 = new cjs.Text("i", "17px 'Arial'");
	this.text_36.lineHeight = 19;
	this.text_36.parent = this;
	this.text_36.setTransform(110,106.2);

	this.text_37 = new cjs.Text("l", "17px 'Arial'");
	this.text_37.lineHeight = 19;
	this.text_37.parent = this;
	this.text_37.setTransform(101.5,106.2);

	this.text_38 = new cjs.Text("e", "17px 'Arial'");
	this.text_38.lineHeight = 19;
	this.text_38.parent = this;
	this.text_38.setTransform(92.1,106.2);

	this.text_39 = new cjs.Text("r", "17px 'Arial'");
	this.text_39.lineHeight = 19;
	this.text_39.parent = this;
	this.text_39.setTransform(81.7,106.2);

	this.text_40 = new cjs.Text("a", "17px 'Arial'");
	this.text_40.lineHeight = 19;
	this.text_40.parent = this;
	this.text_40.setTransform(72.3,106.2);

	this.text_41 = new cjs.Text("z", "17px 'Arial'");
	this.text_41.lineHeight = 19;
	this.text_41.parent = this;
	this.text_41.setTransform(63.8,106.2);

	this.text_42 = new cjs.Text("i", "17px 'Arial'");
	this.text_42.lineHeight = 19;
	this.text_42.parent = this;
	this.text_42.setTransform(60,106.2);

	this.text_43 = new cjs.Text("l", "17px 'Arial'");
	this.text_43.lineHeight = 19;
	this.text_43.parent = this;
	this.text_43.setTransform(56.2,106.2);

	this.text_44 = new cjs.Text("a", "17px 'Arial'");
	this.text_44.lineHeight = 19;
	this.text_44.parent = this;
	this.text_44.setTransform(46.7,106.2);

	this.text_45 = new cjs.Text("n", "17px 'Arial'");
	this.text_45.lineHeight = 19;
	this.text_45.parent = this;
	this.text_45.setTransform(37.3,106.2);

	this.text_46 = new cjs.Text("A", "17px 'Arial'");
	this.text_46.lineHeight = 19;
	this.text_46.parent = this;
	this.text_46.setTransform(25.9,106.2);

	this.text_47 = new cjs.Text("4", "bold 17px 'Arial'");
	this.text_47.lineHeight = 19;
	this.text_47.parent = this;
	this.text_47.setTransform(11.8,106.2);

	this.text_48 = new cjs.Text(".", "17px 'Arial'");
	this.text_48.lineHeight = 19;
	this.text_48.parent = this;
	this.text_48.setTransform(92,85.2);

	this.text_49 = new cjs.Text("o", "17px 'Arial'");
	this.text_49.lineHeight = 19;
	this.text_49.parent = this;
	this.text_49.setTransform(82.5,85.2);

	this.text_50 = new cjs.Text("d", "17px 'Arial'");
	this.text_50.lineHeight = 19;
	this.text_50.parent = this;
	this.text_50.setTransform(73.1,85.2);

	this.text_51 = new cjs.Text("a", "17px 'Arial'");
	this.text_51.lineHeight = 19;
	this.text_51.parent = this;
	this.text_51.setTransform(63.6,85.2);

	this.text_52 = new cjs.Text("c", "17px 'Arial'");
	this.text_52.lineHeight = 19;
	this.text_52.parent = this;
	this.text_52.setTransform(55.1,85.2);

	this.text_53 = new cjs.Text("r", "17px 'Arial'");
	this.text_53.lineHeight = 19;
	this.text_53.parent = this;
	this.text_53.setTransform(49.5,85.2);

	this.text_54 = new cjs.Text("e", "17px 'Arial'");
	this.text_54.lineHeight = 19;
	this.text_54.parent = this;
	this.text_54.setTransform(40,85.2);

	this.text_55 = new cjs.Text("m", "17px 'Arial'");
	this.text_55.lineHeight = 19;
	this.text_55.parent = this;
	this.text_55.setTransform(25.9,85.2);

	this.text_56 = new cjs.Text("l", "17px 'Arial'");
	this.text_56.lineHeight = 19;
	this.text_56.parent = this;
	this.text_56.setTransform(222.5,64.2);

	this.text_57 = new cjs.Text("e", "17px 'Arial'");
	this.text_57.lineHeight = 19;
	this.text_57.parent = this;
	this.text_57.setTransform(213.1,64.2);

	this.text_58 = new cjs.Text("d", "17px 'Arial'");
	this.text_58.lineHeight = 19;
	this.text_58.parent = this;
	this.text_58.setTransform(203.6,64.2);

	this.text_59 = new cjs.Text("d", "17px 'Arial'");
	this.text_59.lineHeight = 19;
	this.text_59.parent = this;
	this.text_59.setTransform(189.5,64.2);

	this.text_60 = new cjs.Text("a", "17px 'Arial'");
	this.text_60.lineHeight = 19;
	this.text_60.parent = this;
	this.text_60.setTransform(180,64.2);

	this.text_61 = new cjs.Text("d", "17px 'Arial'");
	this.text_61.lineHeight = 19;
	this.text_61.parent = this;
	this.text_61.setTransform(170.6,64.2);

	this.text_62 = new cjs.Text("i", "17px 'Arial'");
	this.text_62.lineHeight = 19;
	this.text_62.parent = this;
	this.text_62.setTransform(166.8,64.2);

	this.text_63 = new cjs.Text("l", "17px 'Arial'");
	this.text_63.lineHeight = 19;
	this.text_63.parent = this;
	this.text_63.setTransform(163,64.2);

	this.text_64 = new cjs.Text("i", "17px 'Arial'");
	this.text_64.lineHeight = 19;
	this.text_64.parent = this;
	this.text_64.setTransform(159.2,64.2);

	this.text_65 = new cjs.Text("b", "17px 'Arial'");
	this.text_65.lineHeight = 19;
	this.text_65.parent = this;
	this.text_65.setTransform(149.7,64.2);

	this.text_66 = new cjs.Text("i", "17px 'Arial'");
	this.text_66.lineHeight = 19;
	this.text_66.parent = this;
	this.text_66.setTransform(145.9,64.2);

	this.text_67 = new cjs.Text("s", "17px 'Arial'");
	this.text_67.lineHeight = 19;
	this.text_67.parent = this;
	this.text_67.setTransform(137.4,64.2);

	this.text_68 = new cjs.Text("n", "17px 'Arial'");
	this.text_68.lineHeight = 19;
	this.text_68.parent = this;
	this.text_68.setTransform(128,64.2);

	this.text_69 = new cjs.Text("e", "17px 'Arial'");
	this.text_69.lineHeight = 19;
	this.text_69.parent = this;
	this.text_69.setTransform(118.5,64.2);

	this.text_70 = new cjs.Text("s", "17px 'Arial'");
	this.text_70.lineHeight = 19;
	this.text_70.parent = this;
	this.text_70.setTransform(110,64.2);

	this.text_71 = new cjs.Text("a", "17px 'Arial'");
	this.text_71.lineHeight = 19;
	this.text_71.parent = this;
	this.text_71.setTransform(95.9,64.2);

	this.text_72 = new cjs.Text("l", "17px 'Arial'");
	this.text_72.lineHeight = 19;
	this.text_72.parent = this;
	this.text_72.setTransform(92.1,64.2);

	this.text_73 = new cjs.Text("r", "17px 'Arial'");
	this.text_73.lineHeight = 19;
	this.text_73.parent = this;
	this.text_73.setTransform(81.7,64.2);

	this.text_74 = new cjs.Text("a", "17px 'Arial'");
	this.text_74.lineHeight = 19;
	this.text_74.parent = this;
	this.text_74.setTransform(72.3,64.2);

	this.text_75 = new cjs.Text("z", "17px 'Arial'");
	this.text_75.lineHeight = 19;
	this.text_75.parent = this;
	this.text_75.setTransform(63.8,64.2);

	this.text_76 = new cjs.Text("i", "17px 'Arial'");
	this.text_76.lineHeight = 19;
	this.text_76.parent = this;
	this.text_76.setTransform(60,64.2);

	this.text_77 = new cjs.Text("l", "17px 'Arial'");
	this.text_77.lineHeight = 19;
	this.text_77.parent = this;
	this.text_77.setTransform(56.2,64.2);

	this.text_78 = new cjs.Text("a", "17px 'Arial'");
	this.text_78.lineHeight = 19;
	this.text_78.parent = this;
	this.text_78.setTransform(46.7,64.2);

	this.text_79 = new cjs.Text("n", "17px 'Arial'");
	this.text_79.lineHeight = 19;
	this.text_79.parent = this;
	this.text_79.setTransform(37.3,64.2);

	this.text_80 = new cjs.Text("A", "17px 'Arial'");
	this.text_80.lineHeight = 19;
	this.text_80.parent = this;
	this.text_80.setTransform(25.9,64.2);

	this.text_81 = new cjs.Text("3", "bold 17px 'Arial'");
	this.text_81.lineHeight = 19;
	this.text_81.parent = this;
	this.text_81.setTransform(11.8,64.2);

	this.text_82 = new cjs.Text(".", "17px 'Arial'");
	this.text_82.lineHeight = 19;
	this.text_82.parent = this;
	this.text_82.setTransform(180.9,43.2);

	this.text_83 = new cjs.Text("a", "17px 'Arial'");
	this.text_83.lineHeight = 19;
	this.text_83.parent = this;
	this.text_83.setTransform(171.4,43.2);

	this.text_84 = new cjs.Text("m", "17px 'Arial'");
	this.text_84.lineHeight = 19;
	this.text_84.parent = this;
	this.text_84.setTransform(157.3,43.2);

	this.text_85 = new cjs.Text("e", "17px 'Arial'");
	this.text_85.lineHeight = 19;
	this.text_85.parent = this;
	this.text_85.setTransform(147.8,43.2);

	this.text_86 = new cjs.Text("l", "17px 'Arial'");
	this.text_86.lineHeight = 19;
	this.text_86.parent = this;
	this.text_86.setTransform(144,43.2);

	this.text_87 = new cjs.Text("b", "17px 'Arial'");
	this.text_87.lineHeight = 19;
	this.text_87.parent = this;
	this.text_87.setTransform(134.6,43.2);

	this.text_88 = new cjs.Text("o", "17px 'Arial'");
	this.text_88.lineHeight = 19;
	this.text_88.parent = this;
	this.text_88.setTransform(125.1,43.2);

	this.text_89 = new cjs.Text("r", "17px 'Arial'");
	this.text_89.lineHeight = 19;
	this.text_89.parent = this;
	this.text_89.setTransform(119.5,43.2);

	this.text_90 = new cjs.Text("p", "17px 'Arial'");
	this.text_90.lineHeight = 19;
	this.text_90.parent = this;
	this.text_90.setTransform(110,43.2);

	this.text_91 = new cjs.Text("l", "17px 'Arial'");
	this.text_91.lineHeight = 19;
	this.text_91.parent = this;
	this.text_91.setTransform(101.5,43.2);

	this.text_92 = new cjs.Text("e", "17px 'Arial'");
	this.text_92.lineHeight = 19;
	this.text_92.parent = this;
	this.text_92.setTransform(92.1,43.2);

	this.text_93 = new cjs.Text("r", "17px 'Arial'");
	this.text_93.lineHeight = 19;
	this.text_93.parent = this;
	this.text_93.setTransform(81.7,43.2);

	this.text_94 = new cjs.Text("a", "17px 'Arial'");
	this.text_94.lineHeight = 19;
	this.text_94.parent = this;
	this.text_94.setTransform(72.3,43.2);

	this.text_95 = new cjs.Text("z", "17px 'Arial'");
	this.text_95.lineHeight = 19;
	this.text_95.parent = this;
	this.text_95.setTransform(63.8,43.2);

	this.text_96 = new cjs.Text("i", "17px 'Arial'");
	this.text_96.lineHeight = 19;
	this.text_96.parent = this;
	this.text_96.setTransform(60,43.2);

	this.text_97 = new cjs.Text("l", "17px 'Arial'");
	this.text_97.lineHeight = 19;
	this.text_97.parent = this;
	this.text_97.setTransform(56.2,43.2);

	this.text_98 = new cjs.Text("a", "17px 'Arial'");
	this.text_98.lineHeight = 19;
	this.text_98.parent = this;
	this.text_98.setTransform(46.7,43.2);

	this.text_99 = new cjs.Text("n", "17px 'Arial'");
	this.text_99.lineHeight = 19;
	this.text_99.parent = this;
	this.text_99.setTransform(37.3,43.2);

	this.text_100 = new cjs.Text("A", "17px 'Arial'");
	this.text_100.lineHeight = 19;
	this.text_100.parent = this;
	this.text_100.setTransform(25.9,43.2);

	this.text_101 = new cjs.Text("2", "bold 17px 'Arial'");
	this.text_101.lineHeight = 19;
	this.text_101.parent = this;
	this.text_101.setTransform(11.8,43.2);

	this.text_102 = new cjs.Text(".", "17px 'Arial'");
	this.text_102.lineHeight = 19;
	this.text_102.parent = this;
	this.text_102.setTransform(208.3,22.2);

	this.text_103 = new cjs.Text("n", "17px 'Arial'");
	this.text_103.lineHeight = 19;
	this.text_103.parent = this;
	this.text_103.setTransform(198.8,22.2);

	this.text_104 = new cjs.Text("ó", "17px 'Arial'");
	this.text_104.lineHeight = 19;
	this.text_104.parent = this;
	this.text_104.setTransform(189.4,22.2);

	this.text_105 = new cjs.Text("i", "17px 'Arial'");
	this.text_105.lineHeight = 19;
	this.text_105.parent = this;
	this.text_105.setTransform(185.6,22.2);

	this.text_106 = new cjs.Text("c", "17px 'Arial'");
	this.text_106.lineHeight = 19;
	this.text_106.parent = this;
	this.text_106.setTransform(177.1,22.2);

	this.text_107 = new cjs.Text("a", "17px 'Arial'");
	this.text_107.lineHeight = 19;
	this.text_107.parent = this;
	this.text_107.setTransform(167.6,22.2);

	this.text_108 = new cjs.Text("m", "17px 'Arial'");
	this.text_108.lineHeight = 19;
	this.text_108.parent = this;
	this.text_108.setTransform(153.5,22.2);

	this.text_109 = new cjs.Text("r", "17px 'Arial'");
	this.text_109.lineHeight = 19;
	this.text_109.parent = this;
	this.text_109.setTransform(147.8,22.2);

	this.text_110 = new cjs.Text("o", "17px 'Arial'");
	this.text_110.lineHeight = 19;
	this.text_110.parent = this;
	this.text_110.setTransform(138.4,22.2);

	this.text_111 = new cjs.Text("f", "17px 'Arial'");
	this.text_111.lineHeight = 19;
	this.text_111.parent = this;
	this.text_111.setTransform(133.7,22.2);

	this.text_112 = new cjs.Text("n", "17px 'Arial'");
	this.text_112.lineHeight = 19;
	this.text_112.parent = this;
	this.text_112.setTransform(124.2,22.2);

	this.text_113 = new cjs.Text("i", "17px 'Arial'");
	this.text_113.lineHeight = 19;
	this.text_113.parent = this;
	this.text_113.setTransform(120.4,22.2);

	this.text_114 = new cjs.Text("a", "17px 'Arial'");
	this.text_114.lineHeight = 19;
	this.text_114.parent = this;
	this.text_114.setTransform(106.3,22.2);

	this.text_115 = new cjs.Text("l", "17px 'Arial'");
	this.text_115.lineHeight = 19;
	this.text_115.parent = this;
	this.text_115.setTransform(102.5,22.2);

	this.text_116 = new cjs.Text("r", "17px 'Arial'");
	this.text_116.lineHeight = 19;
	this.text_116.parent = this;
	this.text_116.setTransform(92.1,22.2);

	this.text_117 = new cjs.Text("a", "17px 'Arial'");
	this.text_117.lineHeight = 19;
	this.text_117.parent = this;
	this.text_117.setTransform(82.7,22.2);

	this.text_118 = new cjs.Text("l", "17px 'Arial'");
	this.text_118.lineHeight = 19;
	this.text_118.parent = this;
	this.text_118.setTransform(78.9,22.2);

	this.text_119 = new cjs.Text("i", "17px 'Arial'");
	this.text_119.lineHeight = 19;
	this.text_119.parent = this;
	this.text_119.setTransform(75.1,22.2);

	this.text_120 = new cjs.Text("p", "17px 'Arial'");
	this.text_120.lineHeight = 19;
	this.text_120.parent = this;
	this.text_120.setTransform(65.6,22.2);

	this.text_121 = new cjs.Text("o", "17px 'Arial'");
	this.text_121.lineHeight = 19;
	this.text_121.parent = this;
	this.text_121.setTransform(56.2,22.2);

	this.text_122 = new cjs.Text("c", "17px 'Arial'");
	this.text_122.lineHeight = 19;
	this.text_122.parent = this;
	this.text_122.setTransform(47.7,22.2);

	this.text_123 = new cjs.Text("e", "17px 'Arial'");
	this.text_123.lineHeight = 19;
	this.text_123.parent = this;
	this.text_123.setTransform(38.2,22.2);

	this.text_124 = new cjs.Text("R", "17px 'Arial'");
	this.text_124.lineHeight = 19;
	this.text_124.parent = this;
	this.text_124.setTransform(25.9,22.2);

	this.text_125 = new cjs.Text("1", "bold 17px 'Arial'");
	this.text_125.lineHeight = 19;
	this.text_125.parent = this;
	this.text_125.setTransform(11.8,22.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#72B634").s().p("A0jAyQAAhjBkAAMAl/AAAQBkAAAABjg");
	this.shape.setTransform(131.6,5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E9E9E9").s().p("Ay/MeQhkAAAAhkIAA3XMApHAAAIAAXXQAABkhkAAg");
	this.shape_1.setTransform(131.6,89.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text_125},{t:this.text_124},{t:this.text_123},{t:this.text_122},{t:this.text_121},{t:this.text_120},{t:this.text_119},{t:this.text_118},{t:this.text_117},{t:this.text_116},{t:this.text_115},{t:this.text_114},{t:this.text_113},{t:this.text_112},{t:this.text_111},{t:this.text_110},{t:this.text_109},{t:this.text_108},{t:this.text_107},{t:this.text_106},{t:this.text_105},{t:this.text_104},{t:this.text_103},{t:this.text_102},{t:this.text_101},{t:this.text_100},{t:this.text_99},{t:this.text_98},{t:this.text_97},{t:this.text_96},{t:this.text_95},{t:this.text_94},{t:this.text_93},{t:this.text_92},{t:this.text_91},{t:this.text_90},{t:this.text_89},{t:this.text_88},{t:this.text_87},{t:this.text_86},{t:this.text_85},{t:this.text_84},{t:this.text_83},{t:this.text_82},{t:this.text_81},{t:this.text_80},{t:this.text_79},{t:this.text_78},{t:this.text_77},{t:this.text_76},{t:this.text_75},{t:this.text_74},{t:this.text_73},{t:this.text_72},{t:this.text_71},{t:this.text_70},{t:this.text_69},{t:this.text_68},{t:this.text_67},{t:this.text_66},{t:this.text_65},{t:this.text_64},{t:this.text_63},{t:this.text_62},{t:this.text_61},{t:this.text_60},{t:this.text_59},{t:this.text_58},{t:this.text_57},{t:this.text_56},{t:this.text_55},{t:this.text_54},{t:this.text_53},{t:this.text_52},{t:this.text_51},{t:this.text_50},{t:this.text_49},{t:this.text_48},{t:this.text_47},{t:this.text_46},{t:this.text_45},{t:this.text_44},{t:this.text_43},{t:this.text_42},{t:this.text_41},{t:this.text_40},{t:this.text_39},{t:this.text_38},{t:this.text_37},{t:this.text_36},{t:this.text_35},{t:this.text_34},{t:this.text_33},{t:this.text_32},{t:this.text_31},{t:this.text_30},{t:this.text_29},{t:this.text_28},{t:this.text_27},{t:this.text_26},{t:this.text_25},{t:this.text_24},{t:this.text_23},{t:this.text_22},{t:this.text_21},{t:this.text_20},{t:this.text_19},{t:this.text_18},{t:this.text_17},{t:this.text_16},{t:this.text_15},{t:this.text_14},{t:this.text_13},{t:this.text_12},{t:this.text_11},{t:this.text_10},{t:this.text_9},{t:this.text_8},{t:this.text_7},{t:this.text_6},{t:this.text_5},{t:this.text_4},{t:this.text_3},{t:this.text_2},{t:this.text_1},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Símbolo1, new cjs.Rectangle(0,0,263.2,169.7), null);


(lib.paso5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F2F3F5").s().p("AgKBHIAAiNIAVAAIAACNg");
	this.shape.setTransform(48.1,64.9,0.613,0.613);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F2F3F5").s().p("ACLGsIgIkRIANA0QASAzAUgEQAVgEgGgWQgNgjgHgaQgOg/gFgMQgMgkgPAAQgPgBhIACIhFACQgDAAgFAFQgJAJgGAXIgKAzQgFAagFAOQgQAzAcAMQAPAHAOghIAWg8IAAEIIh1AAIAAhkQgIgVgOgbQgcg3gfggQgwgxhYhPQhnhagbgMIhNBIIgjjTIFUgsIhBA9IBYA1QBfA/AoAsIAQjyIh3AAID/i6IEAC+IiFADIAhFsIAwgpQA4gsAsgQIg+gnIEIAdIAHCeIhEg0QguAXg1AkQhoBHgaA/IgOAbQgNAlABAugAARg5QgRARAAAYQAAAYARARQARARAZAAQAYAAARgRQARgRAAgYQAAgYgRgRQgRgSgYAAQgZAAgRASg");
	this.shape_1.setTransform(44.3,43,0.613,0.613);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E20613").s().p("Al0F1QibiaAAjbQAAjZCbibQCbibDZAAQDbAACaCbQCbCbAADZQAADbibCaQiaCbjbAAQjZAAibibg");
	this.shape_2.setTransform(44,44);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.paso5, new cjs.Rectangle(-8.8,-8.8,105.6,105.6), null);


(lib.paso4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ADuA0QgFgGAAgHIAAhNQAAgHAFgFQAGgGAHAAQAHAAAGAGQAFAFAAAHIAABNQAAAHgFAGQgGAFgHAAQgHAAgGgFgACbA0QgFgGAAgHIAAhNQAAgHAFgFQAFgGAHAAQAIAAAFAGQAFAFAAAHIAABNQAAAHgFAGQgFAFgIAAQgHAAgFgFgABHA0QgFgGAAgHIAAhNQAAgHAFgFQAFgGAIAAQAHAAAFAGQAFAFAAAHIAABNQAAAHgFAGQgFAFgHAAQgIAAgFgFgAgLA0QgGgGAAgHIAAhNQAAgHAGgFQAFgGAGAAQAHAAAGAGQAFAFAAAHIAABNQAAAHgFAGQgGAFgHAAQgGAAgFgFgAhfA0QgFgGAAgHIAAhNQAAgHAFgFQAFgGAHAAQAIAAAFAGQAFAFAAAHIAABNQAAAHgFAGQgFAFgIAAQgHAAgFgFgAizA0QgFgGAAgHIAAhNQAAgHAFgFQAFgGAIAAQAHAAAFAGQAFAFAAAHIAABNQAAAHgFAGQgFAFgHAAQgIAAgFgFgAkGA0QgGgGAAgHIAAhNQAAgHAGgFQAFgGAHAAQAHAAAGAGQAFAFAAAHIAABNQAAAHgFAGQgGAFgHAAQgHAAgFgFg");
	this.shape.setTransform(38.2,16.1,0.618,0.618);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AjJASQgIAAgFgFQgFgGAAgHQAAgGAFgGQAFgFAIAAIGUAAQAHAAAFAFQAFAGAAAGQAAAHgFAGQgFAFgHAAg");
	this.shape_1.setTransform(38.2,58.4,0.618,0.618);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AifASQgHAAgFgFQgGgGAAgHQAAgGAGgGQAFgFAHAAIE/AAQAHAAAGAFQAFAGAAAGQAAAHgFAGQgGAFgHAAg");
	this.shape_2.setTransform(40.8,54.5,0.618,0.618);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AjJASQgIAAgFgFQgFgGAAgHQAAgGAFgGQAFgFAIAAIGUAAQAHAAAFAFQAFAGAAAGQAAAHgFAGQgFAFgHAAg");
	this.shape_3.setTransform(38.2,50.6,0.618,0.618);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AiXASQgHAAgFgFQgFgGgBgHQABgGAFgFQAFgGAHAAIEvAAQAHAAAFAGQAGAFAAAGQAAAHgGAGQgFAFgHAAg");
	this.shape_4.setTransform(35,46.6,0.618,0.618);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AiLASQgHAAgFgFQgFgGAAgHQAAgGAFgFQAFgGAHAAIEWAAQAIAAAFAGQAFAFAAAGQAAAHgFAGQgFAFgIAAg");
	this.shape_5.setTransform(42.1,42.7,0.618,0.618);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AjJASQgIAAgFgFQgFgGAAgHQAAgGAFgFQAFgGAIAAIGUAAQAHAAAFAGQAFAFAAAGQAAAHgFAGQgFAFgHAAg");
	this.shape_6.setTransform(38.2,38.8,0.618,0.618);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AjJASQgIAAgFgFQgFgGAAgHQAAgGAFgGQAFgFAIAAIGUAAQAHAAAFAFQAFAGAAAGQAAAHgFAGQgFAFgHAAg");
	this.shape_7.setTransform(38.2,34.8,0.618,0.618);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AjSBEQgHABgFgGQgFgFAAgHIAAhkQAAgIAFgFQAFgGAHABIGkAAQAHgBAGAGQAFAFAAAIIAABkQAAAHgFAFQgGAGgHgBgAjAAhIGBAAIAAhBImBAAg");
	this.shape_8.setTransform(38.2,27.6,0.618,0.618);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhGA3QgHAAgFgGQgGgFAAgHIAAglQAAgVAQgRQAQgPAXAAIBDAAQAXAAAQAPQAQARAAAVIAAAlQAAAHgFAFQgGAGgHAAgAgvgNQgFAGAAAHIAAATIBpAAIAAgTQAAgHgGgGQgFgFgIAAIhDAAQgIAAgGAFg");
	this.shape_9.setTransform(69.9,28,0.618,0.618);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgLEBQgEgGAAgHIgDnnQAAgHAFgFQAGgGAHAAQAGAAAFAFQAFAGAAAHIADHnQAAAHgFAFQgGAFgHABQgGAAgGgFg");
	this.shape_10.setTransform(69.7,45.4,0.618,0.618);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AA+AaIgQgKIgJAIQgGAEgGAAQgGAAgEgDIgPgMIgKAKQgFAFgHAAQgIAAgFgFIgKgKIgQALQgEAEgGAAQgJAAgFgIQgFgFACgIQABgHAGgDIAcgVQAFgDAFAAQAIAAAFAFIAIAIIAHgIQAGgFAHAAQAEAAAFADIARAMIAIgHQAFgEAHAAQAGAAADADIAcAQQAGAEACAGQABAHgDAGQgFAJgLAAQgEAAgFgCg");
	this.shape_11.setTransform(70,60.8,0.618,0.618);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgPAdIgUgoQgEgHAEgJQAEgHAIgCQAJgCAOAAQAPAAAJACQAIACAFAHQACAJgCAHIgVAoQgEAKgMAAQgKAAgFgKg");
	this.shape_12.setTransform(69.9,69.1,0.618,0.618);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgPFMIhHiSQgCgDAAgEIAAn3QAAgHAGgFQAFgFAHgBICNAAQAHABAGAFQAFAFAAAHIAAH3IgCAHIhHCSQgFAKgLAAQgKAAgFgKgAg0CvIA0BtIA1htIAAnhIhpAAg");
	this.shape_13.setTransform(69.9,50.4,0.618,0.618);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("Ak8HQQgIAAgFgFQgEgFgBgIIAAt7QABgHAEgFQAFgGAIAAIJ5AAQAHAAAFAGQAGAFAAAHIAAN7QAAAIgGAFQgFAFgHAAgAkqGsIJVAAIAAtXIpVAAg");
	this.shape_14.setTransform(38.2,43.7,0.618,0.618);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#72B634").s().p("Al0F1QibiaAAjbQAAjZCbibQCbibDZAAQDbAACaCbQCbCbAADZQAADbibCaQiaCbjbAAQjZAAibibg");
	this.shape_15.setTransform(44,44);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.paso4, new cjs.Rectangle(-8.8,-8.8,105.6,105.6), null);


(lib.paso3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgNg0QAYAdACAXQADAcgdAZg");
	this.shape.setTransform(23.6,45.6,0.63,0.63);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgNg1IANAAQANAlABARQAAAegbAXg");
	this.shape_1.setTransform(64.3,45.7,0.63,0.63);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgNgCQAAgUAPgkIAMAAIAAB1QgcgeABgfg");
	this.shape_2.setTransform(43.6,46.1,0.63,0.63);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAABlQgnAAgdgcQgegcgCgoQgCgrAdgfQAegfAqAAQApAAAeAdQAeAcABAoQABAngdAfQgdAggoACgAgvgsQgSATABAcQABAaAVATQAUATAYgCQAZgCAUgUQATgVgBgYQAAgZgUgSQgTgTgaAAQgcAAgTAUg");
	this.shape_3.setTransform(54.4,25.8,0.63,0.63);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgBBlQgpgBgdgeQgdgdAAgpQABgqAcgdQAcgcAqgBQArAAAdAeQAeAfgBAqQgBAogeAdQgdAdgoAAgAguguQgSATAAAbQAAAZATAUQATATAZABIABAAQAaAAATgTQATgSAAgaQABgagTgVQgUgTgaAAQgbAAgTASg");
	this.shape_4.setTransform(33.4,25.8,0.63,0.63);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAABoQgsgBgfghQgeggACgpQADgtAggcQAggdArACQArADAcAeQAcAfgCArQgBArgeAcQgdAdgrAAgAgugwQgTATgCAcQgBAaATAVQAUAVAdABIABAAQAcAAATgSQAUgTAAgcQABgcgSgUQgSgUgcgCIgEAAQgbAAgUATg");
	this.shape_5.setTransform(64,34.7,0.63,0.63);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAABoQgrAAgegeQgdgdgBgsQAAguAegdQAdgdAsAAIAAAAQAsABAeAdQAeAdAAArQAAApgdAfQgeAggpABgAgwgxQgTAVAAAdQABAeAUASQAUAUAcgBQAbgBAUgVQATgVAAgaQAAgdgUgSQgTgTgdgBQgdABgTASg");
	this.shape_6.setTransform(43.9,34.7,0.63,0.63);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAABoQgpgBgfgeQgegfgBgqQgBgrAdgeQAfgeAsAAIACAAQAsABAdAdQAeAdAAArQAAAqgfAfQggAggqAAgAgxgvQgTATABAcQAAAbAUAVQAUAUAbAAIAAASIAAgSQAcAAAUgUQAVgVAAgcQAAgcgUgSQgTgUgdAAIgBAAQgeAAgTAUg");
	this.shape_7.setTransform(23.5,34.7,0.63,0.63);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAAB8IiiAAIgDgOQgOhTARgwQARgyA6goIATgNIAIAVQAMAfAYAxQAOAaAKAaIAYgzQAXgtANgkIAIgTIASALQA+AkARA/QAKAkgEBQIgBAUIiqAAIAAABgAA4gGQgZA0gOAkIgDAGIB6AAQADg6gIgdQgKgqgkgcQgIAUgVArgAiCgEQgKAiAIA6IB3AAIgDgGQgNgigbg3Igdg9QgjAdgKAjg");
	this.shape_8.setTransform(64.1,45.6,0.63,0.63);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AigB9IgDgOQgShLATg1QASg1A6gpIATgOIAIAWQAMAeAXAvIAZA1IAYgwQAbg4ALgaIAIgVIASANQA+AmAQBAQAJAlgGBQIgBARgAA5gGQgZAxgPAlIgEAJIB7AAQADg4gGgfQgKgqgkgdQgFAOgZAxgAiCAAQgLAkAKA1IB4AAIgEgJQgNgggcg5QgRgjgKgYQgkAegLAmg");
	this.shape_9.setTransform(43.8,45.6,0.63,0.63);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AihB9IgDgOQgRhQATg0QATg1A6glIASgMIAIAUQALAbAYAyIAZA1IAZgzQAZg3AKgZIAIgUIASALQA+AlAQA9QAKAkgEBOIgBAagAA6gJQgbA4gNAiIgDAIIB5AAQADg7gHgdQgKgrgkgcQgMAdgQAggAiCgDQgLAkAJA4IB5AAIgEgIQgPgogagzQgTglgJgWQgjAcgLAmg");
	this.shape_10.setTransform(23.4,45.6,0.63,0.63);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AoxAaIAAgzIRjAAIAAAzg");
	this.shape_11.setTransform(43.9,62.6,0.63,0.63);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AoqAlQAcgmAUgOQAcgVApABQGwAFGvgFQAugBAdAQQAfASAXAng");
	this.shape_12.setTransform(43.8,57.5,0.63,0.63);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F2911A").s().p("Al0F1QibiaAAjbQAAjZCbibQCbibDZAAQDbAACaCbQCbCbAADZQAADbibCaQiaCbjbAAQjZAAibibg");
	this.shape_13.setTransform(44,44);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.paso3, new cjs.Rectangle(-8.8,-8.8,105.6,105.6), null);


(lib.paso2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AlcASQgHAAgGgFQgFgGAAgHQAAgGAFgGQAGgFAHAAIK4AAQAIAAAGAFQAFAGAAAGQAAAHgFAGQgGAFgIAAg");
	this.shape.setTransform(47.4,71.6,0.631,0.631);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AlcASQgHAAgGgFQgFgGAAgHQAAgGAFgFQAGgGAHAAIK5AAQAHAAAGAGQAFAFAAAGQAAAHgFAGQgGAFgHAAg");
	this.shape_1.setTransform(37.8,68.9,0.631,0.631);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag1AfQgDgHACgHQACgHAGgEIBLgrQAEgCAFAAQAKAAAFAJQAEAGgCAIQgCAHgGAEIhLArQgFACgEAAQgKAAgGgJg");
	this.shape_2.setTransform(67.8,23.4,0.631,0.631);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgqArQgGgFAAgHQAAgIAGgFIA8g8QAGgGAHAAQAHAAAFAGQAGAEAAAIQAAAHgGAGIg8A8QgGAGgHAAQgIAAgEgGg");
	this.shape_3.setTransform(63.2,17.8,0.631,0.631);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAlAdIhTgXQgIgCgDgFQgEgIACgGQACgGAFgEQAFgDAGgBIAEABIBUAXQAHACAEAFQAEAHgDAHQgDAOgOAAg");
	this.shape_4.setTransform(71.3,44.7,0.631,0.631);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgrASQgHAAgFgFQgGgGAAgHQAAgHAGgFQAFgFAHAAIBWAAQAIAAAFAFQAGAFAAAHQAAAHgGAGQgFAFgIAAg");
	this.shape_5.setTransform(72,37.4,0.631,0.631);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ag0AaQgFgEgCgGQgCgIAEgGQAEgFAHgDIBTgWIAFAAQAOAAAEANQACAHgEAHQgEAFgHACIhYAXQgGAAgFgDg");
	this.shape_6.setTransform(70.8,30.1,0.631,0.631);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AiKAwQgFgDgBgGQgCgIAEgGQAEgGAHgCID+hEIAEAAQAOAAAEANQACAHgEAHQgEAGgHACIj+BDIgFACQgGgBgFgEg");
	this.shape_7.setTransform(32.8,41.5,0.631,0.631);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAZCYIidkdQgFgKAFgJQAGgIAKAAIBhAFQAKABAFAIICKD3QADAHgCAIQgDAHgHAEIhNAhIgHABQgLAAgFgJgAAwB4IAsgTIh6jdIg3gCg");
	this.shape_8.setTransform(32.4,59.2,0.631,0.631);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgqBAQgOAAgEgNIgLgmIgJglQgDgPANgFQAMgGAUgGQAagHAXAAQAcAAASAKQATAJAEARQAIAbgfAaQgaAVgnALQgRAEgQACgAgdgVIgMAEIALAqIANgCQAhgKARgOQAOgLgCgFQAAgDgJgDQgKgDgPAAQgSAAgWAFg");
	this.shape_9.setTransform(52.6,36.6,0.631,0.631);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("ABKE8Qg4gUgzhPQg0hPgdhrQgdhqAGhfQAGheAmguQAFgHAJAAIAGACQA4AUAzBPQA0BOAdBsQAdBrgGBeQgFBegnAvQgFAGgJAAQgDAAgDgCgAhmiXQgCBUAZBYQAYBbArBGQApBHAtAYQAbgrAChSQAChTgZhZQgYhbgrhGQgqhHgsgYQgbArgCBSg");
	this.shape_10.setTransform(55.4,35.5,0.631,0.631);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("Ag7D8Qg/hTgih/QgliIAShrQAJg2AXghQAWgiAhgIQALgDALAAQBAAAA+BSQBABTAhB/QAmCNgTBqQgUBrhDATQgJACgNAAQhAAAg+hSgAhOknQgxANgNBjQgNBiAgB2QAdBuA4BNQA2BOAxAAQAGAAAGgBQAxgNANhjQANhjggh2Qgdhtg3hOQg3hOgxAAIgMACg");
	this.shape_11.setTransform(52.8,36.2,0.631,0.631);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AjDDRQgNAAgEgNIgsinQgCgFACgGQADgGAFgDIFxjiQAFgCAFAAQAFAAAFADQAJAGgBALQgJBfAeBsQAdBtA2BNQAFAFAAAHQAAAHgFAFQgFAGgHAAgAjaAhIAmCMIGBAKQgthLgZheQgahfAChXg");
	this.shape_12.setTransform(34.1,38,0.631,0.631);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgXCDQgHgEgBgHIg4jPQgCgHAEgHQAEgGAHgCIBUgXIAFAAQAGAAADACQAHAEABAHIA4DOQACAIgEAGQgEAHgHACIhZAXQgEAAgFgCgAgvhPIAuCsIAxgOIguirg");
	this.shape_13.setTransform(17.7,45.6,0.631,0.631);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#00A3C6").s().p("Al0F1QibiaAAjbQAAjZCbibQCbibDZAAQDbAACaCbQCbCbAADZQAADbibCaQiaCbjbAAQjZAAibibg");
	this.shape_14.setTransform(44,44);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.paso2, new cjs.Rectangle(-8.8,-8.8,105.6,105.6), null);


(lib.paso1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(2,1,1).p("AEcD1Io4ACIEantg");
	this.shape.setTransform(43.9,41);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgPB1IAAghIAfAAIAAAhgAgIA6IgJitIAjAAIgJCtg");
	this.shape_1.setTransform(43.5,45.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#ECC700").s().p("Al0F1QibiaAAjbQAAjZCbibQCbibDZAAQDbAACaCbQCbCbAADZQAADbibCaQiaCbjbAAQjZAAibibgAgVCFIAgAAIAAghIggAAgAgNBLIARAAIAJiuIgjAAg");
	this.shape_2.setTransform(44,44);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.paso1, new cjs.Rectangle(-8.8,-8.8,105.6,105.6), null);


(lib.flecha = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(153,153,153,0.839)","rgba(153,153,153,0.231)"],[0,1],19.6,0,-19.5,0).s().p("AAHCYQgKgBgHgJIgDgEQgHgJABgLQACgLAIgHIAPgMIiuAAQgLAAgIgIQgIgIAAgLIAAh5QAAgLAIgIQAIgIALAAICuAAIgPgMQgIgHgCgLQgBgMAIgIIACgFQAHgJAKgBQAMgBAJAHICWB3QAEACAEAEQAKAIAAANQAAANgKAIQgDAEgFACIiXB4QgGAGgJAAIgFgBg");
	this.shape.setTransform(35.9,28);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.flecha, new cjs.Rectangle(16.3,12.8,39.2,30.6), null);


(lib.barratitulotemagr = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.text = new cjs.Text("Herramienta de manejo de incidentes", "bold 25px 'Arial'", "#FFFFFF");
	this.text.lineHeight = 30;
	this.text.lineWidth = 1049;
	this.text.parent = this;
	this.text.setTransform(27.1,13.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E51C45").s().p("EhdvAETIAAolMC7fAAAIAAIlg");
	this.shape.setTransform(600,27.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.barratitulotemagr, new cjs.Rectangle(0,0,1200,55), null);


(lib.Símbolo4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_11 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(11).call(this.frame_11).wait(1));

	// Capa 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(2,2,1,3,true).p("AhsA0IBshrIBtBr");
	this.shape.setTransform(56,-13.2);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(11).to({_off:false},0).wait(1));

	// Capa 1
	this.instance = new lib.Símbolo2();
	this.instance.parent = this;
	this.instance.setTransform(136.6,130.1,1,1,0,0,0,136.6,105.1);
	this.instance.alpha = 0.02;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:105.1,alpha:1},11,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,25,279.5,222.1);


(lib.Símbolo3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_11 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(11).call(this.frame_11).wait(1));

	// Capa 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(2,2,1,3,true).p("AhsA0IBshrIBtBr");
	this.shape.setTransform(167.7,-10.3);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(11).to({_off:false},0).wait(1));

	// Capa 1
	this.instance = new lib.Símbolo1();
	this.instance.parent = this;
	this.instance.setTransform(131.6,122.3,1,1,0,0,0,131.6,84.8);
	this.instance.alpha = 0.02;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:84.8,alpha:1},11).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,37.5,263.2,169.7);


(lib.MC_pag1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_180 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(180).call(this.frame_180).wait(8));

	// Capa 3
	this.text = new cjs.Text("EMI: Equipo de Manejo de Incidentes.", "italic 15px 'Arial'", "#666666");
	this.text.textAlign = "right";
	this.text.lineHeight = 19;
	this.text.lineWidth = 393;
	this.text.parent = this;
	this.text.setTransform(1098,539.7);
	this.text._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text).wait(180).to({_off:false},0).to({_off:true},1).wait(7));

	// Capa 19
	this.instance = new lib.Símbolo4();
	this.instance.parent = this;
	this.instance.setTransform(924.7,429.8,1,1,0,0,0,136.6,105.1);

	this.text_1 = new cjs.Text("Plan de acción inmediato", "16px 'Arial'");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 18;
	this.text_1.lineWidth = 109;
	this.text_1.parent = this;
	this.text_1.setTransform(846.5,267.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.text_1},{t:this.instance}]},180).wait(8));

	// Capa 13
	this.instance_1 = new lib.paso5();
	this.instance_1.parent = this;
	this.instance_1.setTransform(841.9,207.6,1,1,-90,0,0,44,44);
	this.instance_1.alpha = 0.02;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(168).to({_off:false},0).to({rotation:0,alpha:1},12,cjs.Ease.get(1)).wait(8));

	// Capa 12
	this.instance_2 = new lib.flecha();
	this.instance_2.parent = this;
	this.instance_2.setTransform(743.2,207.8,1,1,0,0,0,35.9,27.9);
	this.instance_2.alpha = 0.02;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(159).to({_off:false},0).to({x:759.7,alpha:1},8,cjs.Ease.get(1)).wait(21));

	// Capa 18
	this.instance_3 = new lib.Símbolo3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(644.4,409.5,1,1,0,0,0,131.6,84.8);

	this.text_2 = new cjs.Text("Evaluación EMI", "16px 'Arial'");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 18;
	this.text_2.lineWidth = 109;
	this.text_2.parent = this;
	this.text_2.setTransform(680.3,267.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.text_2},{t:this.instance_3}]},123).wait(65));

	// Capa 11
	this.instance_4 = new lib.paso4();
	this.instance_4.parent = this;
	this.instance_4.setTransform(679.8,207.6,1,1,-90,0,0,44,44);
	this.instance_4.alpha = 0.02;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(111).to({_off:false},0).to({rotation:0,alpha:1},12,cjs.Ease.get(1)).wait(65));

	// Capa 10
	this.instance_5 = new lib.flecha();
	this.instance_5.parent = this;
	this.instance_5.setTransform(582,207.8,1,1,0,0,0,35.9,27.9);
	this.instance_5.alpha = 0.02;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(102).to({_off:false},0).to({x:598.5,alpha:1},8,cjs.Ease.get(1)).wait(78));

	// Capa 17
	this.text_3 = new cjs.Text("Se llama a una junta de EMI ", "16px 'Arial'");
	this.text_3.textAlign = "center";
	this.text_3.lineHeight = 18;
	this.text_3.lineWidth = 109;
	this.text_3.parent = this;
	this.text_3.setTransform(519.1,267.6);
	this.text_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text_3).wait(86).to({_off:false},0).wait(102));

	// Capa 9
	this.instance_6 = new lib.paso3();
	this.instance_6.parent = this;
	this.instance_6.setTransform(518.6,207.6,1,1,-90,0,0,44,44);
	this.instance_6.alpha = 0.02;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(74).to({_off:false},0).to({rotation:0,alpha:1},12,cjs.Ease.get(1)).wait(102));

	// Capa 8
	this.instance_7 = new lib.flecha();
	this.instance_7.parent = this;
	this.instance_7.setTransform(420.9,207.8,1,1,0,0,0,35.9,27.9);
	this.instance_7.alpha = 0.02;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(66).to({_off:false},0).to({x:437.4,alpha:1},8,cjs.Ease.get(1)).wait(114));

	// Capa 16
	this.text_4 = new cjs.Text("Se da aviso al coordinador de IMCR", "16px 'Arial'");
	this.text_4.textAlign = "center";
	this.text_4.lineHeight = 18;
	this.text_4.lineWidth = 130;
	this.text_4.parent = this;
	this.text_4.setTransform(356,267.6);
	this.text_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text_4).wait(52).to({_off:false},0).wait(136));

	// Capa 7
	this.instance_8 = new lib.paso2();
	this.instance_8.parent = this;
	this.instance_8.setTransform(357.5,207.6,1,1,-90,0,0,44,44);
	this.instance_8.alpha = 0.02;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(40).to({_off:false},0).to({rotation:0,alpha:1},12,cjs.Ease.get(1)).wait(136));

	// Capa 6
	this.instance_9 = new lib.flecha();
	this.instance_9.parent = this;
	this.instance_9.setTransform(259.7,207.8,1,1,0,0,0,35.9,27.9);
	this.instance_9.alpha = 0.02;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(32).to({_off:false},0).to({x:276.2,alpha:1},8,cjs.Ease.get(1)).wait(148));

	// Capa 15
	this.text_5 = new cjs.Text("El incidente ocurre", "16px 'Arial'");
	this.text_5.textAlign = "center";
	this.text_5.lineHeight = 18;
	this.text_5.lineWidth = 109;
	this.text_5.parent = this;
	this.text_5.setTransform(194.8,267.6);
	this.text_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text_5).wait(21).to({_off:false},0).wait(167));

	// Capa 5
	this.instance_10 = new lib.paso1();
	this.instance_10.parent = this;
	this.instance_10.setTransform(196.3,207.6,1,1,-90,0,0,44,44);
	this.instance_10.alpha = 0.02;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(8).to({_off:false},0).to({rotation:0,alpha:1},12,cjs.Ease.get(1)).wait(168));

	// Capa 4
	this.text_6 = new cjs.Text("Observa los pasos generales para manejar un incidente.", "18px 'Arial'");
	this.text_6.textAlign = "center";
	this.text_6.lineHeight = 22;
	this.text_6.lineWidth = 648;
	this.text_6.parent = this;
	this.text_6.setTransform(511.3,98.8);

	this.text_7 = new cjs.Text("Esta herramienta provee una guía de los pasos a seguir para hacer frente a un incidente. ", "bold 18px 'Arial'");
	this.text_7.textAlign = "center";
	this.text_7.lineHeight = 22;
	this.text_7.lineWidth = 823;
	this.text_7.parent = this;
	this.text_7.setTransform(519.7,72.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_7},{t:this.text_6}]}).wait(188));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(106.4,70.4,826.7,72.6);


(lib.barratitulotema = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_14 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(14).call(this.frame_14).wait(1));

	// Capa 1
	this.instance = new lib.barratitulotemagr();
	this.instance.parent = this;
	this.instance.setTransform(600,-28,1,1,0,0,0,600,30);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:30},14,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-58,1200,55);


// stage content:
(lib.AC_IMCR_OV_17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/*Iniciar Tema Primer pagina:
		Esta instruccion marca el tema como INICIADO en el trak y ademas envia el 
		canvas al template, es INDISPENSABLE!!!
		*/
		this.stop();
		try{
			parent.iniciar_tema(this);
		}catch(err){
			console.log(" El tema esta corriendo stand alone. INICIO TEMA ")
		}
		/* Para habilitar el boton siguiente
		Esta instruccion solo habilita el boton siguiente y si estan activadas las 
		banderillas muestra la banderilla naranja de siguiente tema.
		
		//HABILITA EL BOTON SIGUIENTE
		//parent.habilitarSiguiente();
		
		//DESHABILITA EL BOTON SIGUIENTE:
		//parent.deshabilitarSiguiente();
		
		//DESHABILITA EL BOTON ATRAS
		//parent.deshabilitarAtras();
		
		Si necesitas habilitar el siguiente con un retraso en ciertos segundos
		utiliza la siguiente funcion reemplazando seconds en la cantidad de segundos:
		parent.retrasar_habilitar_siguiente(seconds);
		*/
		//parent.habilitarSiguiente();
		
		
		/* PPARA MARCAR TEMA COMPLETADO :
		Esta instruccion tambien habilita el boton siguiente y si estan activadas las
		banderillas tambien muestra la banderilla de final tema.
		*/
		
		try{
			parent.final_tema();
		}catch(err){
			console.log(" El tema esta corriendo stand alone. FINAL TEMA")
		}
		
		/*
		Si necesitas utilizar la funcion final tema retrasandola con ciertos segundos
		utiliza la siguiente funcion en lugar de la anterior reemplazando la palabra
		seconds por la cantidad de segundos a esperar:
		parent.retrasar_final_tema(seconds);
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// barra titulo
	this.instance = new lib.barratitulotema();
	this.instance.parent = this;
	this.instance.setTransform(600,30,1,1,0,0,0,600,30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// MC con contenido
	this.instance_1 = new lib.MC_pag1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(602,289.3,1,1,0,0,0,524,241.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(600,279.5,1200,248.8);
// library properties:
lib.properties = {
	width: 1200,
	height: 675,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;