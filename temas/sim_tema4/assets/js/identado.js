if (!window.cp) window.cp = function (str) {
	return document.getElementById(str)
};
cp.CPProjInit = function () {
	if (cp && cp.model && cp.model.data) return;
	cp.model = {};
	cp.poolResources = {};
	cp.D = cp.model.data = {
		pref: {
			acc: 1,
			rkt: 0,
			hsr: 1
		},
		Highlight_Box_1: {
			type: 14,
			from: 1,
			to: 90,
			rp: 0,
			rpa: 0,
			mdi: 'Highlight_Box_1c',
			immo: false,
			apsn: 'Slide5215',
			trin: 0,
			trout: 0,
			stl: [{
				stn: 'Normal',
				stt: 0,
				stsi: [5227]
			}],
			stis: 0,
			bstiid: -1,
			sipst: 0,
			sicbs: false,
			sihhs: false,
			sihds: false
		},
		Highlight_Box_1c: {
			b: [109, 680, 158, 720],
			uid: 5227,
			sr: cp.fd,
			dn: 'Highlight_Box_1',
			visible: 1,
			effectiveVi: 1,
			JSONEffectData: false,
			fc: '#006eff',
			sc: '#5093ff',
			sw: 1,
			fo: 20,
			foa: 0,
			vbwr: [108, 679, 159, 721],
			vb: [108, 679, 159, 721]
		},
		Text_Caption_1: {
			type: 19,
			from: 1,
			to: 90,
			rp: 0,
			rpa: 0,
			mdi: 'Text_Caption_1c',
			immo: false,
			apsn: 'Slide5215',
			trin: 15,
			trout: 0,
			stl: [{
				stn: 'Normal',
				stt: 0,
				stsi: [5231]
			}],
			stis: 0,
			bstiid: -1,
			sipst: 0,
			sicbs: false,
			sihhs: false,
			sihds: false
		},
		Text_Caption_1c: {
			b: [114, 648, 695, 707],
			uid: 5231,
			sr: cp.fd,
			ip: 'dr/Text_Caption_1.png',
			dn: 'Text_Caption_1',
			visible: 1,
			effectiveVi: 1,
			JSONEffectData: false,
			accstr: 'Haga clic en el botón Inbox - Personal Folders - Outlook ',
			traccstr: '',
			ti: -1,
			vbwr: [114, 648, 695, 707],
			vb: [114, 648, 695, 707]
		},
		Mouse_1Ad: {
			src: 'ar/Mouse.mp3',
			from: 75,
			to: 89,
			msa: 1,
			du: 182
		},
		MC$1: {
			type: 15728652,
			from: 75,
			to: 90,
			rp: 0,
			mdi: 'MC$1c'
		},
		MC$1c: {
			b: [128, 704, 134, 710],
			sr: cp.mcd,
			dn: 'MC$1',
			visible: 1,
			data: {
				c: '#0000ff',
				r: 3
			}
		},
		Mouse_1: {
			type: 12,
			from: 1,
			to: 91,
			rp: 0,
			rpa: 0,
			mdi: 'Mouse_1c',
			immo: false,
			apsn: 'Slide5215',
			mp: 'mouse',
			afrom: 1,
			ato: 90,
			mpa: {
				b: [-1, -1, 131, 707],
				t: 1,
				s: 0
			},
			trin: 0,
			trout: 0
		},
		Mouse_1c: {
			b: [-1, -1, 31, 31],
			uid: 5236,
			sr: cp.fd,
			ip: 'dr/5235.png',
			dn: 'Mouse_1',
			visible: 1,
			effectiveVi: 1,
			JSONEffectData: false,
			vbwr: [-1, -1, 163, 739],
			vb: [-1, -1, 163, 739]
		},
		Slide5215: {
			lb: '',
			id: 5215,
			from: 1,
			to: 90,
			useng: true,
			transition: {
				type: 0
			},
			mmot: false,
			mdi: 'Slide5215c',
			st: 'Normal Slide',
			audCC: [],
			vidCC: [],
			accstr: ' ',
			si: [{
				n: 'Highlight_Box_1',
				t: 14
			}, {
				n: 'Text_Caption_1',
				t: 19
			}, {
				n: 'MC$1',
				t: 15728652
			}, {
				n: 'Mouse_1',
				t: 12
			}],
			iph: [],
			oa: 'Mouse_1Ad',
			v: false,
			bc: '#ffffff',
			JSONTT_0: [],
			JSONTT_6: [],
			qs: ''
		},
		Slide5215c: {
			b: [0, 0, 1280, 720],
			sr: cp.fd,
			ip: 'dr/5212.png',
			dn: 'Slide5215',
			visible: '1'
		},
		Highlight_Box_2: {
			type: 14,
			from: 91,
			to: 180,
			rp: 0,
			rpa: 0,
			mdi: 'Highlight_Box_2c',
			immo: false,
			apsn: 'Slide5258',
			trin: 0,
			trout: 0,
			stl: [{
				stn: 'Normal',
				stt: 0,
				stsi: [5270]
			}],
			stis: 0,
			bstiid: -1,
			sipst: 0,
			sicbs: false,
			sihhs: false,
			sihds: false
		},
		Highlight_Box_2c: {
			b: [109, 680, 158, 720],
			uid: 5270,
			sr: cp.fd,
			dn: 'Highlight_Box_2',
			visible: 1,
			effectiveVi: 1,
			JSONEffectData: false,
			fc: '#006eff',
			sc: '#5093ff',
			sw: 1,
			fo: 20,
			foa: 0,
			vbwr: [108, 679, 159, 721],
			vb: [108, 679, 159, 721]
		},
		Text_Caption_2: {
			type: 19,
			from: 91,
			to: 180,
			rp: 0,
			rpa: 0,
			mdi: 'Text_Caption_2c',
			immo: false,
			apsn: 'Slide5258',
			trin: 15,
			trout: 0,
			stl: [{
				stn: 'Normal',
				stt: 0,
				stsi: [5274]
			}],
			stis: 0,
			bstiid: -1,
			sipst: 0,
			sicbs: false,
			sihhs: false,
			sihds: false
		},
		Text_Caption_2c: {
			b: [114, 648, 695, 707],
			uid: 5274,
			sr: cp.fd,
			ip: 'dr/Text_Caption_2.png',
			dn: 'Text_Caption_2',
			visible: 1,
			effectiveVi: 1,
			JSONEffectData: false,
			accstr: 'Haga clic en el botón Inbox - Personal Folders - Outlook ',
			traccstr: '',
			ti: -1,
			vbwr: [114, 648, 695, 707],
			vb: [114, 648, 695, 707]
		},
		Mouse_2Ad: {
			src: 'ar/Mouse.mp3',
			from: 165,
			to: 179,
			msa: 1,
			du: 182
		},
		MC$2: {
			type: 15728652,
			from: 165,
			to: 180,
			rp: 0,
			mdi: 'MC$2c'
		},
		MC$2c: {
			b: [128, 704, 134, 710],
			sr: cp.mcd,
			dn: 'MC$2',
			visible: 1,
			data: {
				c: '#0000ff',
				r: 3
			}
		},
		Mouse_2: {
			type: 12,
			from: 91,
			to: 181,
			rp: 0,
			rpa: 0,
			mdi: 'Mouse_2c',
			immo: false,
			apsn: 'Slide5258',
			mp: 'mouse',
			afrom: 133,
			ato: 180,
			mpa: {
				b: [131, 707, 131, 707],
				t: 1,
				s: 0
			},
			trin: 0,
			trout: 0
		},
		Mouse_2c: {
			b: [131, 707, 163, 739],
			uid: 5278,
			sr: cp.fd,
			ip: 'dr/5235.png',
			dn: 'Mouse_2',
			visible: 1,
			effectiveVi: 1,
			JSONEffectData: false,
			vbwr: [131, 707, 163, 739],
			vb: [131, 707, 163, 739]
		},
		Slide5258: {
			lb: '',
			id: 5258,
			from: 91,
			to: 180,
			useng: true,
			transition: {
				type: 0
			},
			mmot: false,
			mdi: 'Slide5258c',
			st: 'Normal Slide',
			audCC: [],
			vidCC: [],
			accstr: ' ',
			si: [{
				n: 'Highlight_Box_2',
				t: 14
			}, {
				n: 'Text_Caption_2',
				t: 19
			}, {
				n: 'MC$2',
				t: 15728652
			}, {
				n: 'Mouse_2',
				t: 12
			}],
			iph: [],
			oa: 'Mouse_2Ad',
			v: false,
			bc: '#ffffff',
			JSONTT_0: [],
			JSONTT_6: [],
			qs: ''
		},
		Slide5258c: {
			b: [0, 0, 1280, 720],
			sr: cp.fd,
			ip: 'dr/5255.png',
			dn: 'Slide5258',
			visible: '1'
		},
		Highlight_Box_3: {
			type: 14,
			from: 181,
			to: 270,
			rp: 0,
			rpa: 0,
			mdi: 'Highlight_Box_3c',
			immo: false,
			apsn: 'Slide5282',
			trin: 0,
			trout: 0,
			stl: [{
				stn: 'Normal',
				stt: 0,
				stsi: [5294]
			}],
			stis: 0,
			bstiid: -1,
			sipst: 0,
			sicbs: false,
			sihhs: false,
			sihds: false
		},
		Highlight_Box_3c: {
			b: [109, 680, 158, 720],
			uid: 5294,
			sr: cp.fd,
			dn: 'Highlight_Box_3',
			visible: 1,
			effectiveVi: 1,
			JSONEffectData: false,
			fc: '#006eff',
			sc: '#5093ff',
			sw: 1,
			fo: 20,
			foa: 0,
			vbwr: [108, 679, 159, 721],
			vb: [108, 679, 159, 721]
		},
		Text_Caption_3: {
			type: 19,
			from: 181,
			to: 270,
			rp: 0,
			rpa: 0,
			mdi: 'Text_Caption_3c',
			immo: false,
			apsn: 'Slide5282',
			trin: 15,
			trout: 0,
			stl: [{
				stn: 'Normal',
				stt: 0,
				stsi: [5298]
			}],
			stis: 0,
			bstiid: -1,
			sipst: 0,
			sicbs: false,
			sihhs: false,
			sihds: false
		},
		Text_Caption_3c: {
			b: [114, 648, 695, 707],
			uid: 5298,
			sr: cp.fd,
			ip: 'dr/Text_Caption_3.png',
			dn: 'Text_Caption_3',
			visible: 1,
			effectiveVi: 1,
			JSONEffectData: false,
			accstr: 'Haga clic en el botón Inbox - Personal Folders - Outlook ',
			traccstr: '',
			ti: -1,
			vbwr: [114, 648, 695, 707],
			vb: [114, 648, 695, 707]
		},
		Mouse_3Ad: {
			src: 'ar/Mouse.mp3',
			from: 255,
			to: 269,
			msa: 1,
			du: 182
		},
		MC$3: {
			type: 15728652,
			from: 255,
			to: 270,
			rp: 0,
			mdi: 'MC$3c'
		},
		MC$3c: {
			b: [128, 704, 134, 710],
			sr: cp.mcd,
			dn: 'MC$3',
			visible: 1,
			data: {
				c: '#0000ff',
				r: 3
			}
		},
		Mouse_3: {
			type: 12,
			from: 181,
			to: 271,
			rp: 0,
			rpa: 0,
			mdi: 'Mouse_3c',
			immo: false,
			apsn: 'Slide5282',
			mp: 'mouse',
			afrom: 223,
			ato: 270,
			mpa: {
				b: [131, 707, 131, 707],
				t: 1,
				s: 0
			},
			trin: 0,
			trout: 0
		},
		Mouse_3c: {
			b: [131, 707, 163, 739],
			uid: 5302,
			sr: cp.fd,
			ip: 'dr/5235.png',
			dn: 'Mouse_3',
			visible: 1,
			effectiveVi: 1,
			JSONEffectData: false,
			vbwr: [131, 707, 163, 739],
			vb: [131, 707, 163, 739]
		},
		Slide5282: {
			lb: '',
			id: 5282,
			from: 181,
			to: 270,
			useng: true,
			transition: {
				type: 0
			},
			mmot: false,
			mdi: 'Slide5282c',
			st: 'Normal Slide',
			audCC: [],
			vidCC: [],
			accstr: ' ',
			si: [{
				n: 'Highlight_Box_3',
				t: 14
			}, {
				n: 'Text_Caption_3',
				t: 19
			}, {
				n: 'MC$3',
				t: 15728652
			}, {
				n: 'Mouse_3',
				t: 12
			}],
			iph: [],
			oa: 'Mouse_3Ad',
			v: false,
			bc: '#ffffff',
			JSONTT_0: [],
			JSONTT_6: [],
			qs: ''
		},
		Slide5282c: {
			b: [0, 0, 1280, 720],
			sr: cp.fd,
			ip: 'dr/5279.png',
			dn: 'Slide5282',
			visible: '1'
		},
		sf_5321: {
			from: 355,
			to: 360,
			mdi: 'sf_5321c'
		},
		sf_5321c: {
			id: 'sf_5321c',
			b: [0, 0, 413, 417],
			l: 109,
			t: 303,
			dn: 'sf_5321',
			visible: '1',
			ip: 'dr/sfs0.png'
		},
		Highlight_Box_4: {
			type: 14,
			from: 271,
			to: 360,
			rp: 0,
			rpa: 0,
			mdi: 'Highlight_Box_4c',
			immo: false,
			apsn: 'Slide5306',
			trin: 0,
			trout: 0,
			stl: [{
				stn: 'Normal',
				stt: 0,
				stsi: [5325]
			}],
			stis: 0,
			bstiid: -1,
			sipst: 0,
			sicbs: false,
			sihhs: false,
			sihds: false
		},
		Highlight_Box_4c: {
			b: [315, 328, 349, 348],
			uid: 5325,
			sr: cp.fd,
			dn: 'Highlight_Box_4',
			visible: 1,
			effectiveVi: 1,
			JSONEffectData: false,
			fc: '#006eff',
			sc: '#5093ff',
			sw: 1,
			fo: 20,
			foa: 0,
			vbwr: [314, 327, 350, 349],
			vb: [314, 327, 350, 349]
		},
		Text_Caption_4: {
			type: 19,
			from: 271,
			to: 360,
			rp: 0,
			rpa: 0,
			mdi: 'Text_Caption_4c',
			immo: false,
			apsn: 'Slide5306',
			trin: 15,
			trout: 0,
			stl: [{
				stn: 'Normal',
				stt: 0,
				stsi: [5329]
			}],
			stis: 0,
			bstiid: -1,
			sipst: 0,
			sicbs: false,
			sihhs: false,
			sihds: false
		},
		Text_Caption_4c: {
			b: [316, 338, 552, 387],
			uid: 5329,
			sr: cp.fd,
			ip: 'dr/Text_Caption_4.png',
			dn: 'Text_Caption_4',
			visible: 1,
			effectiveVi: 1,
			JSONEffectData: false,
			accstr: 'Seleccione Table View ',
			traccstr: '',
			ti: -1,
			vbwr: [316, 338, 552, 387],
			vb: [316, 338, 552, 387]
		},
		Mouse_4Ad: {
			src: 'ar/Mouse.mp3',
			from: 345,
			to: 359,
			msa: 1,
			du: 182
		},
		MC$4: {
			type: 15728652,
			from: 345,
			to: 360,
			rp: 0,
			mdi: 'MC$4c'
		},
		MC$4c: {
			b: [329, 335, 335, 341],
			sr: cp.mcd,
			dn: 'MC$4',
			visible: 1,
			data: {
				c: '#0000ff',
				r: 3
			}
		},
		Mouse_4: {
			type: 12,
			from: 271,
			to: 361,
			rp: 0,
			rpa: 0,
			mdi: 'Mouse_4c',
			immo: false,
			apsn: 'Slide5306',
			mp: 'mouse',
			afrom: 298,
			ato: 360,
			mpa: {
				b: [131, 707, 332, 338],
				t: 1,
				s: 0
			},
			trin: 0,
			trout: 0
		},
		Mouse_4c: {
			b: [131, 707, 163, 739],
			uid: 5333,
			sr: cp.fd,
			ip: 'dr/5235.png',
			dn: 'Mouse_4',
			visible: 1,
			effectiveVi: 1,
			JSONEffectData: false,
			vbwr: [131, 338, 364, 707],
			vb: [131, 338, 364, 707]
		},
		Slide5306: {
			lb: '',
			id: 5306,
			from: 271,
			to: 360,
			useng: true,
			transition: {
				type: 0
			},
			mmot: false,
			mdi: 'Slide5306c',
			st: 'Normal Slide',
			audCC: [],
			vidCC: [],
			accstr: ' ',
			si: [{
				n: 'sf_5321',
				t: 64
			}, {
				n: 'Highlight_Box_4',
				t: 14
			}, {
				n: 'Text_Caption_4',
				t: 19
			}, {
				n: 'MC$4',
				t: 15728652
			}, {
				n: 'Mouse_4',
				t: 12
			}],
			iph: [],
			oa: 'Mouse_4Ad',
			v: false,
			bc: '#ffffff',
			JSONTT_0: [],
			JSONTT_6: [],
			qs: ''
		},
		Slide5306c: {
			b: [0, 0, 1280, 720],
			sr: cp.fd,
			ip: 'dr/5303.png',
			dn: 'Slide5306',
			visible: '1'
		},
		Mouse_5: {
			type: 12,
			from: 361,
			to: 391,
			rp: 0,
			rpa: 0,
			mdi: 'Mouse_5c',
			immo: false,
			apsn: 'Slide5337',
			mp: 'mouse',
			afrom: 361,
			ato: 390,
			mpa: {
				b: [332, 338, 66, 31],
				t: 1,
				s: 0
			},
			trin: 0,
			trout: 0
		},
		Mouse_5c: {
			b: [332, 338, 364, 370],
			uid: 5349,
			sr: cp.fd,
			ip: 'dr/5235.png',
			dn: 'Mouse_5',
			visible: 1,
			effectiveVi: 1,
			JSONEffectData: false,
			vbwr: [66, 31, 332, 338],
			vb: [66, 31, 332, 338]
		},
		Slide5337: {
			lb: '',
			id: 5337,
			from: 361,
			to: 390,
			useng: true,
			transition: {
				type: 0
			},
			mmot: false,
			mdi: 'Slide5337c',
			st: 'Normal Slide',
			audCC: [],
			vidCC: [],
			accstr: ' ',
			si: [{
				n: 'Mouse_5',
				t: 12
			}],
			iph: [],
			v: false,
			bc: '#ffffff',
			JSONTT_0: [],
			JSONTT_6: [],
			qs: ''
		},
		Slide5337c: {
			b: [0, 0, 1280, 720],
			sr: cp.fd,
			ip: 'dr/5334.png',
			dn: 'Slide5337',
			visible: '1'
		},
		Mouse_6: {
			type: 12,
			from: 391,
			to: 421,
			rp: 0,
			rpa: 0,
			mdi: 'Mouse_6c',
			immo: false,
			apsn: 'Slide5353',
			mp: 'mouse',
			afrom: 391,
			ato: 420,
			mpa: {
				b: [66, 31, 66, 55],
				t: 1,
				s: 0
			},
			trin: 0,
			trout: 0
		},
		Mouse_6c: {
			b: [66, 31, 98, 63],
			uid: 5365,
			sr: cp.fd,
			ip: 'dr/5235.png',
			dn: 'Mouse_6',
			visible: 1,
			effectiveVi: 1,
			JSONEffectData: false,
			vbwr: [66, 31, 98, 87],
			vb: [66, 31, 98, 87]
		},
		Slide5353: {
			lb: '',
			id: 5353,
			from: 391,
			to: 420,
			useng: true,
			transition: {
				type: 0
			},
			mmot: false,
			mdi: 'Slide5353c',
			st: 'Normal Slide',
			audCC: [],
			vidCC: [],
			accstr: ' ',
			si: [{
				n: 'Mouse_6',
				t: 12
			}],
			iph: [],
			v: false,
			bc: '#ffffff',
			JSONTT_0: [],
			JSONTT_6: [],
			qs: ''
		},
		Slide5353c: {
			b: [0, 0, 1280, 720],
			sr: cp.fd,
			ip: 'dr/5350.png',
			dn: 'Slide5353',
			visible: '1'
		},
		Mouse_7: {
			type: 12,
			from: 421,
			to: 451,
			rp: 0,
			rpa: 0,
			mdi: 'Mouse_7c',
			immo: false,
			apsn: 'Slide5369',
			mp: 'mouse',
			afrom: 421,
			ato: 450,
			mpa: {
				b: [66, 55, 176, 37],
				t: 1,
				s: 0
			},
			trin: 0,
			trout: 0
		},
		Mouse_7c: {
			b: [66, 55, 98, 87],
			uid: 5381,
			sr: cp.fd,
			ip: 'dr/5235.png',
			dn: 'Mouse_7',
			visible: 1,
			effectiveVi: 1,
			JSONEffectData: false,
			vbwr: [66, 37, 208, 69],
			vb: [66, 37, 208, 69]
		},
		Slide5369: {
			lb: '',
			id: 5369,
			from: 421,
			to: 450,
			useng: true,
			transition: {
				type: 0
			},
			mmot: false,
			mdi: 'Slide5369c',
			st: 'Normal Slide',
			audCC: [],
			vidCC: [],
			accstr: ' ',
			si: [{
				n: 'Mouse_7',
				t: 12
			}],
			iph: [],
			v: false,
			bc: '#ffffff',
			JSONTT_0: [],
			JSONTT_6: [],
			qs: ''
		},
		Slide5369c: {
			b: [0, 0, 1280, 720],
			sr: cp.fd,
			ip: 'dr/5366.png',
			dn: 'Slide5369',
			visible: '1'
		},
		sf_5400: {
			from: 535,
			to: 540,
			mdi: 'sf_5400c'
		},
		sf_5400c: {
			id: 'sf_5400c',
			b: [413, 0, 850, 149],
			l: 147,
			t: 5,
			dn: 'sf_5400',
			visible: '1',
			ip: 'dr/sfs0.png'
		},
		Highlight_Box_5: {
			type: 14,
			from: 451,
			to: 540,
			rp: 0,
			rpa: 0,
			mdi: 'Highlight_Box_5c',
			immo: false,
			apsn: 'Slide5385',
			trin: 0,
			trout: 0,
			stl: [{
				stn: 'Normal',
				stt: 0,
				stsi: [5404]
			}],
			stis: 0,
			bstiid: -1,
			sipst: 0,
			sicbs: false,
			sihhs: false,
			sihds: false
		},
		Highlight_Box_5c: {
			b: [777, 5, 825, 74],
			uid: 5404,
			sr: cp.fd,
			dn: 'Highlight_Box_5',
			visible: 1,
			effectiveVi: 1,
			JSONEffectData: false,
			fc: '#006eff',
			sc: '#5093ff',
			sw: 1,
			fo: 20,
			foa: 0,
			vbwr: [776, 4, 826, 75],
			vb: [776, 4, 826, 75]
		},
		Text_Caption_5: {
			type: 19,
			from: 451,
			to: 540,
			rp: 0,
			rpa: 0,
			mdi: 'Text_Caption_5c',
			immo: false,
			apsn: 'Slide5385',
			trin: 15,
			trout: 0,
			stl: [{
				stn: 'Normal',
				stt: 0,
				stsi: [5408]
			}],
			stis: 0,
			bstiid: -1,
			sipst: 0,
			sicbs: false,
			sihhs: false,
			sihds: false
		},
		Text_Caption_5c: {
			b: [787, 33, 1159, 82],
			uid: 5408,
			sr: cp.fd,
			ip: 'dr/Text_Caption_5.png',
			dn: 'Text_Caption_5',
			visible: 1,
			effectiveVi: 1,
			JSONEffectData: false,
			accstr: 'Haga clic en el botón Unread/ Read ',
			traccstr: '',
			ti: -1,
			vbwr: [787, 33, 1159, 82],
			vb: [787, 33, 1159, 82]
		},
		Mouse_8Ad: {
			src: 'ar/Mouse.mp3',
			from: 525,
			to: 539,
			msa: 1,
			du: 182
		},
		MC$5: {
			type: 15728652,
			from: 525,
			to: 540,
			rp: 0,
			mdi: 'MC$5c'
		},
		MC$5c: {
			b: [800, 30, 806, 36],
			sr: cp.mcd,
			dn: 'MC$5',
			visible: 1,
			data: {
				c: '#0000ff',
				r: 3
			}
		},
		Mouse_8: {
			type: 12,
			from: 451,
			to: 541,
			rp: 0,
			rpa: 0,
			mdi: 'Mouse_8c',
			immo: false,
			apsn: 'Slide5385',
			mp: 'mouse',
			afrom: 451,
			ato: 540,
			mpa: {
				b: [176, 37, 803, 33],
				t: 1,
				s: 0
			},
			trin: 0,
			trout: 0
		},
		Mouse_8c: {
			b: [176, 37, 208, 69],
			uid: 5412,
			sr: cp.fd,
			ip: 'dr/5235.png',
			dn: 'Mouse_8',
			visible: 1,
			effectiveVi: 1,
			JSONEffectData: false,
			vbwr: [176, 33, 835, 65],
			vb: [176, 33, 835, 65]
		},
		Slide5385: {
			lb: '',
			id: 5385,
			from: 451,
			to: 540,
			useng: true,
			transition: {
				type: 0
			},
			mmot: false,
			mdi: 'Slide5385c',
			st: 'Normal Slide',
			audCC: [],
			vidCC: [],
			accstr: ' ',
			si: [{
				n: 'sf_5400',
				t: 64
			}, {
				n: 'Highlight_Box_5',
				t: 14
			}, {
				n: 'Text_Caption_5',
				t: 19
			}, {
				n: 'MC$5',
				t: 15728652
			}, {
				n: 'Mouse_8',
				t: 12
			}],
			iph: [],
			oa: 'Mouse_8Ad',
			v: false,
			bc: '#ffffff',
			JSONTT_0: [],
			JSONTT_6: [],
			qs: ''
		},
		Slide5385c: {
			b: [0, 0, 1280, 720],
			sr: cp.fd,
			ip: 'dr/5382.png',
			dn: 'Slide5385',
			visible: '1'
		},
		Highlight_Box_6: {
			type: 14,
			from: 541,
			to: 630,
			rp: 0,
			rpa: 0,
			mdi: 'Highlight_Box_6c',
			immo: false,
			apsn: 'Slide5416',
			trin: 0,
			trout: 0,
			stl: [{
				stn: 'Normal',
				stt: 0,
				stsi: [5428]
			}],
			stis: 0,
			bstiid: -1,
			sipst: 0,
			sicbs: false,
			sihhs: false,
			sihds: false
		},
		Highlight_Box_6c: {
			b: [777, 5, 825, 74],
			uid: 5428,
			sr: cp.fd,
			dn: 'Highlight_Box_6',
			visible: 1,
			effectiveVi: 1,
			JSONEffectData: false,
			fc: '#006eff',
			sc: '#5093ff',
			sw: 1,
			fo: 20,
			foa: 0,
			vbwr: [776, 4, 826, 75],
			vb: [776, 4, 826, 75]
		},
		Text_Caption_6: {
			type: 19,
			from: 541,
			to: 630,
			rp: 0,
			rpa: 0,
			mdi: 'Text_Caption_6c',
			immo: false,
			apsn: 'Slide5416',
			trin: 15,
			trout: 0,
			stl: [{
				stn: 'Normal',
				stt: 0,
				stsi: [5432]
			}],
			stis: 0,
			bstiid: -1,
			sipst: 0,
			sicbs: false,
			sihhs: false,
			sihds: false
		},
		Text_Caption_6c: {
			b: [787, 33, 1159, 82],
			uid: 5432,
			sr: cp.fd,
			ip: 'dr/Text_Caption_6.png',
			dn: 'Text_Caption_6',
			visible: 1,
			effectiveVi: 1,
			JSONEffectData: false,
			accstr: 'Haga clic en el botón Unread/ Read ',
			traccstr: '',
			ti: -1,
			vbwr: [787, 33, 1159, 82],
			vb: [787, 33, 1159, 82]
		},
		Mouse_9Ad: {
			src: 'ar/Mouse.mp3',
			from: 615,
			to: 629,
			msa: 1,
			du: 182
		},
		MC$6: {
			type: 15728652,
			from: 615,
			to: 630,
			rp: 0,
			mdi: 'MC$6c'
		},
		MC$6c: {
			b: [800, 30, 806, 36],
			sr: cp.mcd,
			dn: 'MC$6',
			visible: 1,
			data: {
				c: '#0000ff',
				r: 3
			}
		},
		Mouse_9: {
			type: 12,
			from: 541,
			to: 631,
			rp: 0,
			rpa: 0,
			mdi: 'Mouse_9c',
			immo: false,
			apsn: 'Slide5416',
			mp: 'mouse',
			afrom: 583,
			ato: 630,
			mpa: {
				b: [803, 33, 803, 33],
				t: 1,
				s: 0
			},
			trin: 0,
			trout: 0
		},
		Mouse_9c: {
			b: [803, 33, 835, 65],
			uid: 5436,
			sr: cp.fd,
			ip: 'dr/5235.png',
			dn: 'Mouse_9',
			visible: 1,
			effectiveVi: 1,
			JSONEffectData: false,
			vbwr: [803, 33, 835, 65],
			vb: [803, 33, 835, 65]
		},
		Slide5416: {
			lb: '',
			id: 5416,
			from: 541,
			to: 630,
			useng: true,
			transition: {
				type: 0
			},
			mmot: false,
			mdi: 'Slide5416c',
			st: 'Normal Slide',
			audCC: [],
			vidCC: [],
			accstr: ' ',
			si: [{
				n: 'Highlight_Box_6',
				t: 14
			}, {
				n: 'Text_Caption_6',
				t: 19
			}, {
				n: 'MC$6',
				t: 15728652
			}, {
				n: 'Mouse_9',
				t: 12
			}],
			iph: [],
			oa: 'Mouse_9Ad',
			v: false,
			bc: '#ffffff',
			JSONTT_0: [],
			JSONTT_6: [],
			qs: ''
		},
		Slide5416c: {
			b: [0, 0, 1280, 720],
			sr: cp.fd,
			ip: 'dr/5413.png',
			dn: 'Slide5416',
			visible: '1'
		},
		Highlight_Box_7: {
			type: 14,
			from: 631,
			to: 720,
			rp: 0,
			rpa: 0,
			mdi: 'Highlight_Box_7c',
			immo: false,
			apsn: 'Slide5440',
			trin: 0,
			trout: 0,
			stl: [{
				stn: 'Normal',
				stt: 0,
				stsi: [5452]
			}],
			stis: 0,
			bstiid: -1,
			sipst: 0,
			sicbs: false,
			sihhs: false,
			sihds: false
		},
		Highlight_Box_7c: {
			b: [355, 377, 389, 397],
			uid: 5452,
			sr: cp.fd,
			dn: 'Highlight_Box_7',
			visible: 1,
			effectiveVi: 1,
			JSONEffectData: false,
			fc: '#006eff',
			sc: '#5093ff',
			sw: 1,
			fo: 20,
			foa: 0,
			vbwr: [354, 376, 390, 398],
			vb: [354, 376, 390, 398]
		},
		Text_Caption_7: {
			type: 19,
			from: 631,
			to: 720,
			rp: 0,
			rpa: 0,
			mdi: 'Text_Caption_7c',
			immo: false,
			apsn: 'Slide5440',
			trin: 15,
			trout: 0,
			stl: [{
				stn: 'Normal',
				stt: 0,
				stsi: [5456]
			}],
			stis: 0,
			bstiid: -1,
			sipst: 0,
			sicbs: false,
			sihhs: false,
			sihds: false
		},
		Text_Caption_7c: {
			b: [356, 387, 592, 436],
			uid: 5456,
			sr: cp.fd,
			ip: 'dr/Text_Caption_7.png',
			dn: 'Text_Caption_7',
			visible: 1,
			effectiveVi: 1,
			JSONEffectData: false,
			accstr: 'Seleccione Table View ',
			traccstr: '',
			ti: -1,
			vbwr: [356, 387, 592, 436],
			vb: [356, 387, 592, 436]
		},
		Mouse_10Ad: {
			src: 'ar/Mouse.mp3',
			from: 705,
			to: 719,
			msa: 1,
			du: 182
		},
		MC$7: {
			type: 15728652,
			from: 705,
			to: 720,
			rp: 0,
			mdi: 'MC$7c'
		},
		MC$7c: {
			b: [369, 384, 375, 390],
			sr: cp.mcd,
			dn: 'MC$7',
			visible: 1,
			data: {
				c: '#0000ff',
				r: 3
			}
		},
		Mouse_10: {
			type: 12,
			from: 631,
			to: 721,
			rp: 0,
			rpa: 0,
			mdi: 'Mouse_10c',
			immo: false,
			apsn: 'Slide5440',
			mp: 'mouse',
			afrom: 637,
			ato: 720,
			mpa: {
				b: [803, 33, 372, 387],
				t: 1,
				s: 0
			},
			trin: 0,
			trout: 0
		},
		Mouse_10c: {
			b: [803, 33, 835, 65],
			uid: 5460,
			sr: cp.fd,
			ip: 'dr/5235.png',
			dn: 'Mouse_10',
			visible: 1,
			effectiveVi: 1,
			JSONEffectData: false,
			vbwr: [372, 33, 803, 419],
			vb: [372, 33, 803, 419]
		},
		Slide5440: {
			lb: '',
			id: 5440,
			from: 631,
			to: 720,
			useng: true,
			transition: {
				type: 0
			},
			mmot: false,
			mdi: 'Slide5440c',
			st: 'Normal Slide',
			audCC: [],
			vidCC: [],
			accstr: ' ',
			si: [{
				n: 'Highlight_Box_7',
				t: 14
			}, {
				n: 'Text_Caption_7',
				t: 19
			}, {
				n: 'MC$7',
				t: 15728652
			}, {
				n: 'Mouse_10',
				t: 12
			}],
			iph: [],
			oa: 'Mouse_10Ad',
			v: false,
			bc: '#ffffff',
			JSONTT_0: [],
			JSONTT_6: [],
			qs: ''
		},
		Slide5440c: {
			b: [0, 0, 1280, 720],
			sr: cp.fd,
			ip: 'dr/5437.png',
			dn: 'Slide5440',
			visible: '1'
		},
		sf_5479: {
			from: 805,
			to: 810,
			mdi: 'sf_5479c'
		},
		sf_5479c: {
			id: 'sf_5479c',
			b: [0, 0, 1259, 644],
			l: 14,
			t: 8,
			dn: 'sf_5479',
			visible: '1',
			ip: 'dr/sfs1.png'
		},
		Highlight_Box_8: {
			type: 14,
			from: 721,
			to: 810,
			rp: 0,
			rpa: 0,
			mdi: 'Highlight_Box_8c',
			immo: false,
			apsn: 'Slide5464',
			trin: 0,
			trout: 0,
			stl: [{
				stn: 'Normal',
				stt: 0,
				stsi: [5483]
			}],
			stis: 0,
			bstiid: -1,
			sipst: 0,
			sicbs: false,
			sihhs: false,
			sihds: false
		},
		Highlight_Box_8c: {
			b: [345, 406, 379, 426],
			uid: 5483,
			sr: cp.fd,
			dn: 'Highlight_Box_8',
			visible: 1,
			effectiveVi: 1,
			JSONEffectData: false,
			fc: '#006eff',
			sc: '#5093ff',
			sw: 1,
			fo: 20,
			foa: 0,
			vbwr: [344, 405, 380, 427],
			vb: [344, 405, 380, 427]
		},
		Text_Caption_8: {
			type: 19,
			from: 721,
			to: 810,
			rp: 0,
			rpa: 0,
			mdi: 'Text_Caption_8c',
			immo: false,
			apsn: 'Slide5464',
			trin: 15,
			trout: 0,
			stl: [{
				stn: 'Normal',
				stt: 0,
				stsi: [5487]
			}],
			stis: 0,
			bstiid: -1,
			sipst: 0,
			sicbs: false,
			sihhs: false,
			sihds: false
		},
		Text_Caption_8c: {
			b: [346, 416, 582, 465],
			uid: 5487,
			sr: cp.fd,
			ip: 'dr/Text_Caption_8.png',
			dn: 'Text_Caption_8',
			visible: 1,
			effectiveVi: 1,
			JSONEffectData: false,
			accstr: 'Seleccione Table View ',
			traccstr: '',
			ti: -1,
			vbwr: [346, 416, 582, 465],
			vb: [346, 416, 582, 465]
		},
		Mouse_11Ad: {
			src: 'ar/Mouse.mp3',
			from: 795,
			to: 809,
			msa: 1,
			du: 182
		},
		MC$8: {
			type: 15728652,
			from: 795,
			to: 810,
			rp: 0,
			mdi: 'MC$8c'
		},
		MC$8c: {
			b: [359, 413, 365, 419],
			sr: cp.mcd,
			dn: 'MC$8',
			visible: 1,
			data: {
				c: '#0000ff',
				r: 3
			}
		},
		Mouse_11: {
			type: 12,
			from: 721,
			to: 811,
			rp: 0,
			rpa: 0,
			mdi: 'Mouse_11c',
			immo: false,
			apsn: 'Slide5464',
			mp: 'mouse',
			afrom: 763,
			ato: 810,
			mpa: {
				b: [372, 387, 362, 416],
				t: 1,
				s: 0
			},
			trin: 0,
			trout: 0
		},
		Mouse_11c: {
			b: [372, 387, 404, 419],
			uid: 5491,
			sr: cp.fd,
			ip: 'dr/5235.png',
			dn: 'Mouse_11',
			visible: 1,
			effectiveVi: 1,
			JSONEffectData: false,
			vbwr: [362, 387, 394, 448],
			vb: [362, 387, 394, 448]
		},
		Slide5464: {
			lb: '',
			id: 5464,
			from: 721,
			to: 810,
			useng: true,
			transition: {
				type: 0
			},
			mmot: false,
			mdi: 'Slide5464c',
			st: 'Normal Slide',
			audCC: [],
			vidCC: [],
			accstr: ' ',
			si: [{
				n: 'sf_5479',
				t: 64
			}, {
				n: 'Highlight_Box_8',
				t: 14
			}, {
				n: 'Text_Caption_8',
				t: 19
			}, {
				n: 'MC$8',
				t: 15728652
			}, {
				n: 'Mouse_11',
				t: 12
			}],
			iph: [],
			oa: 'Mouse_11Ad',
			v: false,
			bc: '#ffffff',
			JSONTT_0: [],
			JSONTT_6: [],
			qs: ''
		},
		Slide5464c: {
			b: [0, 0, 1280, 720],
			sr: cp.fd,
			ip: 'dr/5461.png',
			dn: 'Slide5464',
			visible: '1'
		},
		Highlight_Box_9: {
			type: 14,
			from: 811,
			to: 900,
			rp: 0,
			rpa: 0,
			mdi: 'Highlight_Box_9c',
			immo: false,
			apsn: 'Slide5495',
			trin: 0,
			trout: 0,
			stl: [{
				stn: 'Normal',
				stt: 0,
				stsi: [5507]
			}],
			stis: 0,
			bstiid: -1,
			sipst: 0,
			sicbs: false,
			sihhs: false,
			sihds: false
		},
		Highlight_Box_9c: {
			b: [345, 406, 379, 426],
			uid: 5507,
			sr: cp.fd,
			dn: 'Highlight_Box_9',
			visible: 1,
			effectiveVi: 1,
			JSONEffectData: false,
			fc: '#006eff',
			sc: '#5093ff',
			sw: 1,
			fo: 20,
			foa: 0,
			vbwr: [344, 405, 380, 427],
			vb: [344, 405, 380, 427]
		},
		Text_Caption_9: {
			type: 19,
			from: 811,
			to: 900,
			rp: 0,
			rpa: 0,
			mdi: 'Text_Caption_9c',
			immo: false,
			apsn: 'Slide5495',
			trin: 15,
			trout: 0,
			stl: [{
				stn: 'Normal',
				stt: 0,
				stsi: [5511]
			}],
			stis: 0,
			bstiid: -1,
			sipst: 0,
			sicbs: false,
			sihhs: false,
			sihds: false
		},
		Text_Caption_9c: {
			b: [346, 416, 659, 465],
			uid: 5511,
			sr: cp.fd,
			ip: 'dr/Text_Caption_9.png',
			dn: 'Text_Caption_9',
			visible: 1,
			effectiveVi: 1,
			JSONEffectData: false,
			accstr: 'Haga doble clic en Table View ',
			traccstr: '',
			ti: -1,
			vbwr: [346, 416, 659, 465],
			vb: [346, 416, 659, 465]
		},
		Mouse_12Ad: {
			src: 'ar/dblmouse.mp3',
			from: 885,
			to: 899,
			msa: 1,
			du: 365
		},
		MC$9: {
			type: 15728652,
			from: 885,
			to: 900,
			rp: 0,
			mdi: 'MC$9c'
		},
		MC$9c: {
			b: [359, 413, 365, 419],
			sr: cp.mcd,
			dn: 'MC$9',
			visible: 1,
			data: {
				c: '#0000ff',
				r: 3
			}
		},
		Mouse_12: {
			type: 12,
			from: 811,
			to: 901,
			rp: 0,
			rpa: 0,
			mdi: 'Mouse_12c',
			immo: false,
			apsn: 'Slide5495',
			mp: 'mouse',
			afrom: 853,
			ato: 900,
			mpa: {
				b: [362, 416, 362, 416],
				t: 1,
				s: 0
			},
			trin: 0,
			trout: 0
		},
		Mouse_12c: {
			b: [362, 416, 394, 448],
			uid: 5515,
			sr: cp.fd,
			ip: 'dr/5235.png',
			dn: 'Mouse_12',
			visible: 1,
			effectiveVi: 1,
			JSONEffectData: false,
			vbwr: [362, 416, 394, 448],
			vb: [362, 416, 394, 448]
		},
		Slide5495: {
			lb: '',
			id: 5495,
			from: 811,
			to: 900,
			useng: true,
			transition: {
				type: 0
			},
			mmot: false,
			mdi: 'Slide5495c',
			st: 'Normal Slide',
			audCC: [],
			vidCC: [],
			accstr: ' ',
			si: [{
				n: 'Highlight_Box_9',
				t: 14
			}, {
				n: 'Text_Caption_9',
				t: 19
			}, {
				n: 'MC$9',
				t: 15728652
			}, {
				n: 'Mouse_12',
				t: 12
			}],
			iph: [],
			oa: 'Mouse_12Ad',
			v: false,
			bc: '#ffffff',
			JSONTT_0: [],
			JSONTT_6: [],
			qs: ''
		},
		Slide5495c: {
			b: [0, 0, 1280, 720],
			sr: cp.fd,
			ip: 'dr/5492.png',
			dn: 'Slide5495',
			visible: '1'
		},
		Text_Caption_10: {
			type: 19,
			from: 901,
			to: 990,
			rp: 0,
			rpa: 0,
			mdi: 'Text_Caption_10c',
			immo: false,
			apsn: 'Slide5519',
			trin: 15,
			trout: 0,
			stl: [{
				stn: 'Normal',
				stt: 0,
				stsi: [5531]
			}],
			stis: 0,
			bstiid: -1,
			sipst: 0,
			sicbs: false,
			sihhs: false,
			sihds: false
		},
		Text_Caption_10c: {
			b: [462, 345, 1280, 380],
			uid: 5531,
			sr: cp.fd,
			ip: 'dr/Text_Caption_10.png',
			dn: 'Text_Caption_10',
			visible: 1,
			effectiveVi: 1,
			JSONEffectData: false,
			accstr: 'Se abrirá la ventana Today’s Birthdays Around The World...! - Message (HTML)  ',
			traccstr: '',
			ti: -1,
			vbwr: [462, 345, 1280, 380],
			vb: [462, 345, 1280, 380]
		},
		Mouse_13: {
			type: 12,
			from: 901,
			to: 991,
			rp: 0,
			rpa: 0,
			mdi: 'Mouse_13c',
			immo: false,
			apsn: 'Slide5519',
			mp: 'mouse',
			afrom: 943,
			ato: 990,
			mpa: {
				b: [362, 416, 354, 407],
				t: 1,
				s: 0
			},
			trin: 0,
			trout: 0
		},
		Mouse_13c: {
			b: [354, 407, 386, 439],
			uid: 5536,
			sr: cp.fd,
			ip: 'dr/5535.png',
			dn: 'Mouse_13',
			visible: 1,
			effectiveVi: 1,
			JSONEffectData: false,
			vbwr: [354, 407, 386, 439],
			vb: [354, 407, 386, 439]
		},
		Slide5519: {
			lb: '',
			id: 5519,
			from: 901,
			to: 990,
			useng: true,
			transition: {
				type: 0
			},
			mmot: false,
			mdi: 'Slide5519c',
			st: 'Normal Slide',
			audCC: [],
			vidCC: [],
			accstr: ' ',
			si: [{
				n: 'Text_Caption_10',
				t: 19
			}, {
				n: 'Mouse_13',
				t: 12
			}],
			iph: [],
			v: false,
			bc: '#ffffff',
			JSONTT_0: [],
			JSONTT_6: [],
			qs: ''
		},
		Slide5519c: {
			b: [0, 0, 1280, 720],
			sr: cp.fd,
			ip: 'dr/5516.png',
			dn: 'Slide5519',
			visible: '1'
		},
		sf_5552: {
			from: 1075,
			to: 1080,
			mdi: 'sf_5552c'
		},
		sf_5552c: {
			id: 'sf_5552c',
			b: [0, 0, 872, 149],
			l: 79,
			t: 57,
			dn: 'sf_5552',
			visible: '1',
			ip: 'dr/sfs2.png'
		},
		Highlight_Box_10: {
			type: 14,
			from: 991,
			to: 1080,
			rp: 0,
			rpa: 0,
			mdi: 'Highlight_Box_10c',
			immo: false,
			apsn: 'Slide5537',
			trin: 0,
			trout: 0,
			stl: [{
				stn: 'Normal',
				stt: 0,
				stsi: [5556]
			}],
			stis: 0,
			bstiid: -1,
			sipst: 0,
			sicbs: false,
			sihhs: false,
			sihds: false
		},
		Highlight_Box_10c: {
			b: [731, 57, 774, 126],
			uid: 5556,
			sr: cp.fd,
			dn: 'Highlight_Box_10',
			visible: 1,
			effectiveVi: 1,
			JSONEffectData: false,
			fc: '#006eff',
			sc: '#5093ff',
			sw: 1,
			fo: 20,
			foa: 0,
			vbwr: [730, 56, 775, 127],
			vb: [730, 56, 775, 127]
		},
		Text_Caption_11: {
			type: 19,
			from: 991,
			to: 1080,
			rp: 0,
			rpa: 0,
			mdi: 'Text_Caption_11c',
			immo: false,
			apsn: 'Slide5537',
			trin: 15,
			trout: 0,
			stl: [{
				stn: 'Normal',
				stt: 0,
				stsi: [5560]
			}],
			stis: 0,
			bstiid: -1,
			sipst: 0,
			sicbs: false,
			sihhs: false,
			sihds: false
		},
		Text_Caption_11c: {
			b: [747, 122, 1105, 171],
			uid: 5560,
			sr: cp.fd,
			ip: 'dr/Text_Caption_11.png',
			dn: 'Text_Caption_11',
			visible: 1,
			effectiveVi: 1,
			JSONEffectData: false,
			accstr: 'Haga clic en el botón Mark Unread ',
			traccstr: '',
			ti: -1,
			vbwr: [747, 122, 1105, 171],
			vb: [747, 122, 1105, 171]
		},
		Mouse_14Ad: {
			src: 'ar/Mouse.mp3',
			from: 1065,
			to: 1079,
			msa: 1,
			du: 182
		},
		MC$10: {
			type: 15728652,
			from: 1065,
			to: 1080,
			rp: 0,
			mdi: 'MC$10c'
		},
		MC$10c: {
			b: [760, 119, 766, 125],
			sr: cp.mcd,
			dn: 'MC$10',
			visible: 1,
			data: {
				c: '#0000ff',
				r: 3
			}
		},
		Mouse_14: {
			type: 12,
			from: 991,
			to: 1081,
			rp: 0,
			rpa: 0,
			mdi: 'Mouse_14c',
			immo: false,
			apsn: 'Slide5537',
			mp: 'mouse',
			afrom: 1006,
			ato: 1080,
			mpa: {
				b: [362, 416, 763, 122],
				t: 1,
				s: 0
			},
			trin: 0,
			trout: 0
		},
		Mouse_14c: {
			b: [362, 416, 394, 448],
			uid: 5564,
			sr: cp.fd,
			ip: 'dr/5235.png',
			dn: 'Mouse_14',
			visible: 1,
			effectiveVi: 1,
			JSONEffectData: false,
			vbwr: [362, 122, 795, 416],
			vb: [362, 122, 795, 416]
		},
		Slide5537: {
			lb: '',
			id: 5537,
			from: 991,
			to: 1080,
			useng: true,
			transition: {
				type: 0
			},
			mmot: false,
			mdi: 'Slide5537c',
			st: 'Normal Slide',
			audCC: [],
			vidCC: [],
			accstr: ' ',
			si: [{
				n: 'sf_5552',
				t: 64
			}, {
				n: 'Highlight_Box_10',
				t: 14
			}, {
				n: 'Text_Caption_11',
				t: 19
			}, {
				n: 'MC$10',
				t: 15728652
			}, {
				n: 'Mouse_14',
				t: 12
			}],
			iph: [],
			oa: 'Mouse_14Ad',
			v: false,
			bc: '#ffffff',
			JSONTT_0: [],
			JSONTT_6: [],
			qs: ''
		},
		Slide5537c: {
			b: [0, 0, 1280, 720],
			sr: cp.fd,
			ip: 'dr/5516.png',
			dn: 'Slide5537',
			visible: '1'
		},
		sf_5583: {
			from: 1165,
			to: 1170,
			mdi: 'sf_5583c'
		},
		sf_5583c: {
			id: 'sf_5583c',
			b: [872, 0, 43, 69],
			l: 731,
			t: 57,
			dn: 'sf_5583',
			visible: '1',
			ip: 'dr/sfs2.png'
		},
		Highlight_Box_11: {
			type: 14,
			from: 1081,
			to: 1170,
			rp: 0,
			rpa: 0,
			mdi: 'Highlight_Box_11c',
			immo: false,
			apsn: 'Slide5568',
			trin: 0,
			trout: 0,
			stl: [{
				stn: 'Normal',
				stt: 0,
				stsi: [5587]
			}],
			stis: 0,
			bstiid: -1,
			sipst: 0,
			sicbs: false,
			sihhs: false,
			sihds: false
		},
		Highlight_Box_11c: {
			b: [731, 57, 774, 126],
			uid: 5587,
			sr: cp.fd,
			dn: 'Highlight_Box_11',
			visible: 1,
			effectiveVi: 1,
			JSONEffectData: false,
			fc: '#006eff',
			sc: '#5093ff',
			sw: 1,
			fo: 20,
			foa: 0,
			vbwr: [730, 56, 775, 127],
			vb: [730, 56, 775, 127]
		},
		Text_Caption_12: {
			type: 19,
			from: 1081,
			to: 1170,
			rp: 0,
			rpa: 0,
			mdi: 'Text_Caption_12c',
			immo: false,
			apsn: 'Slide5568',
			trin: 15,
			trout: 0,
			stl: [{
				stn: 'Normal',
				stt: 0,
				stsi: [5591]
			}],
			stis: 0,
			bstiid: -1,
			sipst: 0,
			sicbs: false,
			sihhs: false,
			sihds: false
		},
		Text_Caption_12c: {
			b: [753, 117, 1111, 166],
			uid: 5591,
			sr: cp.fd,
			ip: 'dr/Text_Caption_12.png',
			dn: 'Text_Caption_12',
			visible: 1,
			effectiveVi: 1,
			JSONEffectData: false,
			accstr: 'Haga clic en el botón Mark Unread ',
			traccstr: '',
			ti: -1,
			vbwr: [753, 117, 1111, 166],
			vb: [753, 117, 1111, 166]
		},
		Mouse_15Ad: {
			src: 'ar/Mouse.mp3',
			from: 1155,
			to: 1169,
			msa: 1,
			du: 182
		},
		MC$11: {
			type: 15728652,
			from: 1155,
			to: 1170,
			rp: 0,
			mdi: 'MC$11c'
		},
		MC$11c: {
			b: [766, 114, 772, 120],
			sr: cp.mcd,
			dn: 'MC$11',
			visible: 1,
			data: {
				c: '#0000ff',
				r: 3
			}
		},
		Mouse_15: {
			type: 12,
			from: 1081,
			to: 1171,
			rp: 0,
			rpa: 0,
			mdi: 'Mouse_15c',
			immo: false,
			apsn: 'Slide5568',
			mp: 'mouse',
			afrom: 1123,
			ato: 1170,
			mpa: {
				b: [763, 122, 769, 117],
				t: 1,
				s: 0
			},
			trin: 0,
			trout: 0
		},
		Mouse_15c: {
			b: [763, 122, 795, 154],
			uid: 5595,
			sr: cp.fd,
			ip: 'dr/5235.png',
			dn: 'Mouse_15',
			visible: 1,
			effectiveVi: 1,
			JSONEffectData: false,
			vbwr: [763, 117, 801, 149],
			vb: [763, 117, 801, 149]
		},
		Slide5568: {
			lb: '',
			id: 5568,
			from: 1081,
			to: 1170,
			useng: true,
			transition: {
				type: 0
			},
			mmot: false,
			mdi: 'Slide5568c',
			st: 'Normal Slide',
			audCC: [],
			vidCC: [],
			accstr: ' ',
			si: [{
				n: 'sf_5583',
				t: 64
			}, {
				n: 'Highlight_Box_11',
				t: 14
			}, {
				n: 'Text_Caption_12',
				t: 19
			}, {
				n: 'MC$11',
				t: 15728652
			}, {
				n: 'Mouse_15',
				t: 12
			}],
			iph: [],
			oa: 'Mouse_15Ad',
			v: false,
			bc: '#ffffff',
			JSONTT_0: [],
			JSONTT_6: [],
			qs: ''
		},
		Slide5568c: {
			b: [0, 0, 1280, 720],
			sr: cp.fd,
			ip: 'dr/5565.png',
			dn: 'Slide5568',
			visible: '1'
		},
		Mouse_16: {
			type: 12,
			from: 1171,
			to: 1261,
			rp: 0,
			rpa: 0,
			mdi: 'Mouse_16c',
			immo: false,
			apsn: 'Slide5599',
			mp: 'mouse',
			afrom: 1195,
			ato: 1260,
			mpa: {
				b: [769, 117, 1195, 13],
				t: 1,
				s: 0
			},
			trin: 0,
			trout: 0
		},
		Mouse_16c: {
			b: [769, 117, 801, 149],
			uid: 5611,
			sr: cp.fd,
			ip: 'dr/5235.png',
			dn: 'Mouse_16',
			visible: 1,
			effectiveVi: 1,
			JSONEffectData: false,
			vbwr: [769, 13, 1227, 117],
			vb: [769, 13, 1227, 117]
		},
		Slide5599: {
			lb: '',
			id: 5599,
			from: 1171,
			to: 1260,
			useng: true,
			transition: {
				type: 0
			},
			mmot: false,
			mdi: 'Slide5599c',
			st: 'Normal Slide',
			audCC: [],
			vidCC: [],
			accstr: ' ',
			si: [{
				n: 'Mouse_16',
				t: 12
			}],
			iph: [],
			v: false,
			bc: '#ffffff',
			JSONTT_0: [],
			JSONTT_6: [],
			qs: ''
		},
		Slide5599c: {
			b: [0, 0, 1280, 720],
			sr: cp.fd,
			ip: 'dr/5596.png',
			dn: 'Slide5599',
			visible: '1'
		},
		Slide5617V: {
			from: 1261,
			to: 1293,
			mdi: 'Slide5617Vc',
			type: 270,
			bc: '#ffffff'
		},
		Slide5617Vc: {
			id: 'Slide5617Vc',
			b: [0, 0, 1280, 720],
			vb: [0, 0, 1280, 720],
			au: true,
			dn: 'Slide5617V',
			visible: '1',
			mp4: 'vr/FMR5615.mp4'
		},
		Slide5617: {
			lb: '',
			id: 5617,
			from: 1261,
			to: 1293,
			useng: true,
			transition: {
				type: 0
			},
			mmot: false,
			mdi: 'Slide5617c',
			st: 'Normal Slide',
			audCC: [],
			vidCC: [],
			accstr: ' ',
			si: [{
				n: 'Slide5617V',
				t: 270
			}],
			iph: [],
			v: false,
			bc: '#ffffff',
			JSONTT_0: [],
			JSONTT_6: [],
			qs: ''
		},
		Slide5617c: {
			b: [0, 0, 1280, 720],
			sr: cp.fd,
			aip: 'dr/5615.png',
			dn: 'Slide5617',
			visible: '1'
		},
		sf_5648: {
			from: 1378,
			to: 1383,
			mdi: 'sf_5648c'
		},
		sf_5648c: {
			id: 'sf_5648c',
			b: [915, 0, 29, 22],
			l: 1224,
			t: 11,
			dn: 'sf_5648',
			visible: '1',
			ip: 'dr/sfs2.png'
		},
		Highlight_Box_12: {
			type: 14,
			from: 1294,
			to: 1383,
			rp: 0,
			rpa: 0,
			mdi: 'Highlight_Box_12c',
			immo: false,
			apsn: 'Slide5633',
			trin: 0,
			trout: 0,
			stl: [{
				stn: 'Normal',
				stt: 0,
				stsi: [5652]
			}],
			stis: 0,
			bstiid: -1,
			sipst: 0,
			sicbs: false,
			sihhs: false,
			sihds: false
		},
		Highlight_Box_12c: {
			b: [1218, 3, 1252, 23],
			uid: 5652,
			sr: cp.fd,
			dn: 'Highlight_Box_12',
			visible: 1,
			effectiveVi: 1,
			JSONEffectData: false,
			fc: '#006eff',
			sc: '#5093ff',
			sw: 1,
			fo: 20,
			foa: 0,
			vbwr: [1217, 2, 1253, 24],
			vb: [1217, 2, 1253, 24]
		},
		Text_Caption_13: {
			type: 19,
			from: 1294,
			to: 1383,
			rp: 0,
			rpa: 0,
			mdi: 'Text_Caption_13c',
			immo: false,
			apsn: 'Slide5633',
			trin: 15,
			trout: 0,
			stl: [{
				stn: 'Normal',
				stt: 0,
				stsi: [5656]
			}],
			stis: 0,
			bstiid: -1,
			sipst: 0,
			sicbs: false,
			sihhs: false,
			sihds: false
		},
		Text_Caption_13c: {
			b: [1128, 13, 1251, 61],
			uid: 5656,
			sr: cp.fd,
			ip: 'dr/Text_Caption_13.png',
			dn: 'Text_Caption_13',
			visible: 1,
			effectiveVi: 1,
			JSONEffectData: false,
			accstr: 'Seleccione  ',
			traccstr: '',
			ti: -1,
			vbwr: [1128, 13, 1251, 61],
			vb: [1128, 13, 1251, 61]
		},
		Mouse_18Ad: {
			src: 'ar/Mouse.mp3',
			from: 1368,
			to: 1382,
			msa: 1,
			du: 182
		},
		MC$12: {
			type: 15728652,
			from: 1368,
			to: 1383,
			rp: 0,
			mdi: 'MC$12c'
		},
		MC$12c: {
			b: [1232, 10, 1238, 16],
			sr: cp.mcd,
			dn: 'MC$12',
			visible: 1,
			data: {
				c: '#0000ff',
				r: 3
			}
		},
		Mouse_18: {
			type: 12,
			from: 1294,
			to: 1384,
			rp: 0,
			rpa: 0,
			mdi: 'Mouse_18c',
			immo: false,
			apsn: 'Slide5633',
			mp: 'mouse',
			afrom: 1336,
			ato: 1383,
			mpa: {
				b: [1067, 20, 1235, 13],
				t: 1,
				s: 0
			},
			trin: 0,
			trout: 0
		},
		Mouse_18c: {
			b: [1067, 20, 1099, 52],
			uid: 5660,
			sr: cp.fd,
			ip: 'dr/5235.png',
			dn: 'Mouse_18',
			visible: 1,
			effectiveVi: 1,
			JSONEffectData: false,
			vbwr: [1067, 13, 1267, 45],
			vb: [1067, 13, 1267, 45]
		},
		Slide5633: {
			lb: '',
			id: 5633,
			from: 1294,
			to: 1383,
			useng: true,
			transition: {
				type: 0
			},
			mmot: false,
			mdi: 'Slide5633c',
			st: 'Normal Slide',
			audCC: [],
			vidCC: [],
			accstr: ' ',
			si: [{
				n: 'sf_5648',
				t: 64
			}, {
				n: 'Highlight_Box_12',
				t: 14
			}, {
				n: 'Text_Caption_13',
				t: 19
			}, {
				n: 'MC$12',
				t: 15728652
			}, {
				n: 'Mouse_18',
				t: 12
			}],
			iph: [],
			oa: 'Mouse_18Ad',
			v: false,
			bc: '#ffffff',
			JSONTT_0: [],
			JSONTT_6: [],
			qs: ''
		},
		Slide5633c: {
			b: [0, 0, 1280, 720],
			sr: cp.fd,
			ip: 'dr/5630.png',
			dn: 'Slide5633',
			visible: '1'
		},
		Mouse_19: {
			type: 12,
			from: 1384,
			to: 1474,
			rp: 0,
			rpa: 0,
			mdi: 'Mouse_19c',
			immo: false,
			apsn: 'Slide5664',
			mp: 'mouse',
			afrom: 1384,
			ato: 1473,
			mpa: {
				b: [1235, 13, 966, 696],
				t: 1,
				s: 0
			},
			trin: 0,
			trout: 0
		},
		Mouse_19c: {
			b: [1235, 13, 1267, 45],
			uid: 5676,
			sr: cp.fd,
			ip: 'dr/5235.png',
			dn: 'Mouse_19',
			visible: 1,
			effectiveVi: 1,
			JSONEffectData: false,
			vbwr: [966, 13, 1235, 728],
			vb: [966, 13, 1235, 728]
		},
		Slide5664: {
			lb: '',
			id: 5664,
			from: 1384,
			to: 1473,
			useng: true,
			transition: {
				type: 0
			},
			mmot: false,
			mdi: 'Slide5664c',
			st: 'Normal Slide',
			audCC: [],
			vidCC: [],
			accstr: ' ',
			si: [{
				n: 'Mouse_19',
				t: 12
			}],
			iph: [],
			v: false,
			bc: '#ffffff',
			JSONTT_0: [],
			JSONTT_6: [],
			qs: ''
		},
		Slide5664c: {
			b: [0, 0, 1280, 720],
			sr: cp.fd,
			ip: 'dr/5661.png',
			dn: 'Slide5664',
			visible: '1'
		},
		quizzingData: {
			allowBackwardMovement: false,
			allowReviewMode: true,
			isInReviewMode: false,
			allowSkipAnyScoreSlide: true,
			allowSkipFailScoreSlide: true,
			allowSkipPassScoreSlide: true,
			anyGradeAction: '',
			anyGradeActionArg1: '',
			anyGradeActionArg2: '',
			defaultActionType: 'continue',
			defaultActionArg1: '',
			defaultActionArg2: '',
			failedScoreFeedback: 'Lo sentimos, ¡ha suspendido!',
			failingGradeAction: 'cpCmndResume = 1;',
			JSONTT_5: [],
			passedScoreFeedback: 'Enhorabuena, ha aprobado la prueba.',
			passingGradeAction: 'cpCmndResume = 1;',
			JSONTT_4: [],
			pretestAction: '',
			it: false,
			anyScoreSlide: -1,
			firstSlideInQuiz: -1,
			lastSlideInQuiz: -1,
			quizScopeEndSlide: -1,
			maxScore: 0,
			minScore: 0,
			maxPretestScore: 0,
			numQuestionsInQuiz: 0,
			numQuizAttemptsAllowed: 1,
			passingScore: 0,
			quizInfoCurrentAttempt: 0,
			quizInfoPercentScored: 0,
			quizProgress: '',
			questionAdvance: 'optional',
			quizAdvance: 'optional',
			quizID: 377,
			showFinishButton: true,
			showProgress: true,
			questionPoolsInitialized: true,
			quizInfoAnswerChoice: '',
			quizInfoAttempts: 1,
			quizInfoLastSlidePointScored: 0,
			quizInfoMaxAttemptsOnCurrentQuestion: 1,
			quizInfoPassFail: 0,
			quizInfoPointsPerQuestionSlide: 0,
			quizInfoPointsScored: 0,
			quizInfoQuestionSlideTiming: 0,
			quizInfoQuestionSlideType: '',
			quizInfoQuizPassPercent: 80,
			quizInfoQuizPassPoints: 0,
			quizInfoTotalCorrectAnswers: 0,
			quizInfoTotalProjectPoints: 0,
			quizInfoTotalQuestionsPerProject: 0,
			quizInfoTotalQuizPoints: 0,
			quizInfoTotalUnansweredQuestions: 0,
			reportingVariables: 0,
			reportingEnabled: false,
			submitAll: false,
			hidePlaybarInQuiz: false,
			quizBranchAware: false,
			passFailPassingScoreTypeInPrecent: true,
			passFailPassingScoreValue: 80,
			progressIndicatorType: 0,
			rpViDv: 'Esta diapositiva se ha visualizado en un dispositivo con otra anchura.',
			progressIndicatorString: 'Pregunta %d de %d    '
		},
		rtDialog: {
			rtbgfc: '#ebebeb',
			rtbgsc: '#4d4d4d',
			rtbtnfc: '#676767',
			rtbtnsc: '#676767',
			rtsc: '#4d4d4d',
			rttc: '#4d4d4d',
			rttsc: '#ffffff',
			rtfn: 'TrebuchetMS',
			rtt: 'Enviar todo',
			rtsam: 'Ha respondido a todas las preguntas. ¿Qué desea hacer a continuación?',
			rtiqm: 'Hay una o más preguntas incompletas. Debe responder a todas las preguntas para continuar.',
			rtsiqm: 'Aún quedan preguntas sin responder. ¿Seguro que desea continuar sin responder a esas preguntas?',
			rtsanym: 'Ha llegado al final de la prueba pero aún hay preguntas sin responder. ¿Qué desea hacer?',
			rtmtqm: 'Debe contestar al menos una pregunta para continuar.',
			rtokb: 'OK',
			rtcb: 'CANCELAR',
			rtyb: 'SÍ',
			rtnb: 'NO',
			rtsab: 'Enviar todas las respuestas',
			rtsanyb: 'Enviar de todos modos',
			rtrtqb: 'Regresar a prueba',
			rtWarningTitle: 'Si se Editoooo',
			rtUnsupportedBowser: 'El archivo que quiere ver incluye contenido no admitido por este navegador. Utilice uno de los siguientes:<ul><li>Internet Explorer 9 o posterior</li><li>Safari 5.1 o posterior</li><li>Google Chrome 17 o posterior</li><li>Firefox @FFVERSION o posterior</li></ul>'
		},
		sgMgr: {
			ri: 0,
			sg: [
				[0, [
					[1, [23]]
				]],
				[1, [
					[2, [23]]
				]],
				[2, [
					[3, [23]]
				]],
				[3, [
					[4, [23]]
				]],
				[4, [
					[5, [23]]
				]],
				[5, [
					[6, [23]]
				]],
				[6, [
					[7, [23]]
				]],
				[7, [
					[8, [23]]
				]],
				[8, [
					[9, [23]]
				]],
				[9, [
					[10, [23]]
				]],
				[10, [
					[11, [23]]
				]],
				[11, [
					[12, [23]]
				]],
				[12, [
					[13, [23]]
				]],
				[13, [
					[14, [23]]
				]],
				[14, [
					[15, [23]]
				]],
				[15, [
					[16, [23]]
				]],
				[16, [
					[17, [23]]
				]],
				[17, [
					[18, [23]]
				]]
			]
		},
		project: {
			fps: 30,
			hasTOC: 0,
			w: 1280,
			h: 720,
			iw: 1280,
			ih: 720,
			prm: [1, 1, 0, 0],
			stateNameToLocalizedStateNameMap: {
				kCPNormalState: 'Normal',
				kCPDownState: 'Abajo',
				kCPRolloverState: 'Efecto dinámico',
				kCPDragoverState: 'ArrastrarPor',
				kCPDragstartState: 'ArrastrarInicio',
				kCPDropCorrect: 'ColocarCorrecto',
				kCPDropIncorrect: 'ColocarIncorrecto',
				kCPDropAccept: 'ColocarAceptar',
				kCPDropReject: 'ColocarRechazar'
			},
			prjBgColor: '#ffffff',
			pkt: 0,
			htmlBgColor: '#ffffff',
			shc: true,
			pN: 'SimHTML5'
		},
		project_main: {
			from: 1,
			to: 1473,
			currentFrame: 1,
			useResponsive: false,
			currentFrame: 1,
			useWidgetVersion7: false,
			isPublishedFromLacuna: false,
			slides: 'Slide5215,Slide5258,Slide5282,Slide5306,Slide5337,Slide5353,Slide5369,Slide5385,Slide5416,Slide5440,Slide5464,Slide5495,Slide5519,Slide5537,Slide5568,Slide5599,Slide5617,Slide5633,Slide5664',
			questions: '',
			autoplay: true,
			preloader: true,
			preloaderFileName: 'dr/loading.gif',
			preloaderPercentage: 100,
			preloaderimagel: 625,
			preloaderimaget: 345,
			pprtd: false,
			peon: false,
			fadeInAtStart: 0,
			fadeOutAtEnd: 0,
			endAction: 'cp.stopMovie();'
		},
		borderProperties: {
			hasBorder: true,
			l: 0,
			t: 0,
			r: 0,
			b: 30,
			w: 1280,
			h: 750,
			hasSqEd: false,
			bc: '#c0c0c0'
		},
		playBarProperties: {
			hasPlayBar: true,
			jsfile: 'playbarScript.js',
			cssfile: 'playbarStyle.css',
			position: 3,
			layout: 3,
			showOnHover: false,
			overlay: false,
			tworow: false,
			hasRewind: true,
			hasBackward: false,
			hasPlay: true,
			hasSlider: true,
			hasForward: true,
			hasCC: false,
			hasAudioOn: true,
			hasExit: true,
			hasFastForward: true,
			applyColors: true,
			BkColor: {
				bc: '#ffffff',
				alpha: 100
			},
			FaceColor: {
				bc: '#666666',
				alpha: 100
			},
			GlowColor: {
				bc: '#a3a3a3',
				alpha: 100
			},
			IconColor: {
				bc: '#ffffff',
				alpha: 100
			},
			alpha: 100,
			noToolTips: false,
			locale: 6
		},
		tocProperties: {},
		ccProperties: {
			w: 1280,
			h: 57,
			lc: 3,
			c: '#ffffff',
			o: 49,
			f: 'Times New Roman',
			fs: 12,
			tc: '#000000'
		},
		trecs: [{
			link: 5215,
			text: ['Haga clic en el botón Inbox - Personal Folders - Outlook']
		}, {
			link: 5258,
			text: ['Haga clic en el botón Inbox - Personal Folders - Outlook']
		}, {
			link: 5282,
			text: ['Haga clic en el botón Inbox - Personal Folders - Outlook']
		}, {
			link: 5306,
			text: ['Seleccione Table View']
		}, {
			link: 5337,
			text: []
		}, {
			link: 5353,
			text: []
		}, {
			link: 5369,
			text: []
		}, {
			link: 5385,
			text: ['Haga clic en el botón Unread/ Read']
		}, {
			link: 5416,
			text: ['Haga clic en el botón Unread/ Read']
		}, {
			link: 5440,
			text: ['Seleccione Table View']
		}, {
			link: 5464,
			text: ['Seleccione Table View']
		}, {
			link: 5495,
			text: ['Haga doble clic en Table View']
		}, {
			link: 5519,
			text: ['Se abrirá la ventana Today’s Birthdays Around The World...! - Message (HTML) ']
		}, {
			link: 5537,
			text: ['Haga clic en el botón Mark Unread']
		}, {
			link: 5568,
			text: ['Haga clic en el botón Mark Unread']
		}, {
			link: 5599,
			text: []
		}, {
			link: 5617,
			text: []
		}, {
			link: 5633,
			text: ['Seleccione ']
		}, {
			link: 5664,
			text: []
		}]
	};
	cp.model.projectImages = ['assets/htmlimages/Pause2x.gif', 'assets/htmlimages/Play2x.gif', 'assets/htmlimages/gesturemobileicon@2x.png', 'assets/htmlimages/gesturemobilelandscape.png', 'assets/htmlimages/gesturetabletimage.png', 'assets/htmlimages/img_trans.gif', 'assets/htmlimages/placeholder.png'];
	cp.model.images = ['dr/5212.png', 'dr/5235.png', 'dr/5255.png', 'dr/5279.png', 'dr/5303.png', 'dr/5334.png', 'dr/5350.png', 'dr/5366.png', 'dr/5382.png', 'dr/5413.png', 'dr/5437.png', 'dr/5461.png', 'dr/5492.png', 'dr/5516.png', 'dr/5535.png', 'dr/5565.png', 'dr/5596.png', 'dr/5615.png', 'dr/5630.png', 'dr/5661.png', 'dr/Text_Caption_1.png', 'dr/Text_Caption_10.png', 'dr/Text_Caption_11.png', 'dr/Text_Caption_12.png', 'dr/Text_Caption_13.png', 'dr/Text_Caption_2.png', 'dr/Text_Caption_3.png', 'dr/Text_Caption_4.png', 'dr/Text_Caption_5.png', 'dr/Text_Caption_6.png', 'dr/Text_Caption_7.png', 'dr/Text_Caption_8.png', 'dr/Text_Caption_9.png', 'dr/sfs0.png', 'dr/sfs1.png', 'dr/sfs2.png'];
	cp.model.videos = ['vr/FMR5615.mp4'];
	cp.model.slideVideos = [];
	cp.model.tocVideos = [];
	cp.model.audios = ['ar/Mouse.mp3', 'ar/dblmouse.mp3'];
	cp.initVariables = function () {
		cp.cv('CaptivateVersion', '9.0.0', 1, 1000, 0);
		cp.cv('cpCmndCC', 0, 1, 15, 0);
		cp.cv('cpCmndExit', 0, 1, 15, 0);
		cp.cv('cpCmndMute', 0, 1, 15, 0);
		cp.cv('cpCmndPause', 0, 1, 15, 0);
		cp.cv('cpCmndPlaybarMoved', 0, 1, 15, 0);
		cp.cv('cpCmndPrevious', 0, 1, 15, 0);
		cp.cv('cpCmndResume', 0, 1, 15, 0);
		cp.cv('cpCmndShowPlaybar', 1, 1, 15, 0);
		cp.cv('cpCmndTOCVisible', 0, 1, 15, 0);
		cp.cv('cpCmndVolume', 100, 1, 15, 0);
		cp.cv('cpInQuizScope', 0, 1, 15, 0);
		cp.cv('cpInReviewMode', 0, 1, 15, 0);
		cp.cv('cpInfoAuthor', 'author', 1, 15, 0);
		cp.cv('cpInfoCompany', 'company', 1, 15, 0);
		cp.cv('cpInfoCopyright', 'copyright', 1, 15, 0);
		cp.cv('cpInfoCourseID', -1, 1, 15, 0);
		cp.cv('cpInfoCourseName', 'Course Name', 1, 15, 0);
		cp.cv('cpInfoCurrentDate', 'dd', 1, 15, 0);
		cp.cv('cpInfoCurrentDateString', 'mm/dd/yyyy', 1, 15, 0);
		cp.cv('cpInfoCurrentDateStringDDMMYYYY', 'dd/mm/yyyy', 1, 15, 0);
		cp.cv('cpInfoCurrentDay', 1, 1, 15, 0);
		cp.cv('cpInfoCurrentFrame', 1, 1, 15, 0);
		cp.cv('cpInfoCurrentHour', 'hh', 1, 15, 0);
		cp.cv('cpInfoCurrentLocaleDateString', '', 1, 15, 0);
		cp.cv('cpInfoCurrentMinutes', 'mm', 1, 15, 0);
		cp.cv('cpInfoCurrentMonth', 'mm', 1, 15, 0);
		cp.cv('cpInfoCurrentSlide', 1, 1, 15, 0);
		cp.cv('cpInfoCurrentSlideLabel', 'slide', 1, 15, 0);
		cp.cv('cpInfoCurrentSlideType', 'Normal', 1, 15, 0);
		cp.cv('cpInfoCurrentTime', 'hh:mm:ss', 1, 15, 0);
		cp.cv('cpInfoCurrentYear', 'yyyy', 1, 15, 0);
		cp.cv('cpInfoDescription', 'project description', 1, 15, 0);
		cp.cv('cpInfoElapsedTimeMS', 0, 1, 15, 0);
		cp.cv('cpInfoEmail', 'author@company.com', 1, 15, 0);
		cp.cv('cpInfoEpochMS', 0, 1, 15, 0);
		cp.cv('cpInfoFPS', 1, 1, 15, 0);
		cp.cv('cpInfoFrameCount', 1, 1, 15, 0);
		cp.cv('cpInfoGeoLocation', '', 1, 15, 0);
		cp.cv('cpInfoHasPlaybar', 1, 1, 1000, 0);
		cp.cv('cpInfoIsStandalone', 1, 1, 15, 0);
		cp.cv('cpInfoLastVisitedSlide', 0, 1, 15, 0);
		cp.cv('cpInfoMobileOS', 0, 1, 15, 0);
		cp.cv('cpInfoPercentage', 0, 1, 15, 0);
		cp.cv('cpInfoPrevSlide', -1, 1, 15, 0);
		cp.cv('cpInfoProjectName', '', 1, 15, 0);
		cp.cv('cpInfoSlideCount', 1, 1, 15, 0);
		cp.cv('cpInfoSlidesInProject', 19, 1, 1000, 0);
		cp.cv('cpInfoWebsite', 'www.company.com', 1, 15, 0);
		cp.cv('cpLockTOC', 0, 1, 1000, 0);
		cp.cv('cpQuizInfoAnswerChoice', '', 1, 15, 0);
		cp.cv('cpQuizInfoAttempts', 0, 1, 15, 0);
		cp.cv('cpQuizInfoLastSlidePointScored', 0, 1, 15, 0);
		cp.cv('cpQuizInfoMaxAttemptsOnCurrentQuestion', 0, 1, 15, 0);
		cp.cv('cpQuizInfoNegativePointsOnCurrentQuestionSlide', 0, 1, 15, 0);
		cp.cv('cpQuizInfoPassFail', 0, 1, 15, 0);
		cp.cv('cpQuizInfoPointsPerQuestionSlide', 0, 1, 15, 0);
		cp.cv('cpQuizInfoPointsscored', 0, 1, 15, 0);
		cp.cv('cpQuizInfoPreTestMaxScore', 0, 1, 15, 0);
		cp.cv('cpQuizInfoPreTestTotalCorrectAnswers', 0, 1, 15, 0);
		cp.cv('cpQuizInfoPreTestTotalQuestions', 0, 1, 1000, 0);
		cp.cv('cpQuizInfoPretestPointsscored', 0, 1, 15, 0);
		cp.cv('cpQuizInfoPretestScorePercentage', 0, 1, 15, 0);
		cp.cv('cpQuizInfoQuestionPartialScoreOn', 0, 1, 15, 0);
		cp.cv('cpQuizInfoQuestionSlideTiming', 0, 1, 15, 0);
		cp.cv('cpQuizInfoQuestionSlideType', 'choice', 1, 15, 0);
		cp.cv('cpQuizInfoQuizPassPercent', 80, 1, 1000, 0);
		cp.cv('cpQuizInfoQuizPassPoints', 0, 1, 1000, 0);
		cp.cv('cpQuizInfoTotalCorrectAnswers', 0, 1, 15, 0);
		cp.cv('cpQuizInfoTotalProjectPoints', 0, 1, 15, 0);
		cp.cv('cpQuizInfoTotalQuestionsPerProject', 0, 1, 15, 0);
		cp.cv('cpQuizInfoTotalQuizPoints', 0, 1, 1000, 0);
		cp.cv('cpQuizInfoTotalUnansweredQuestions', 0, 1, 15, 0);
		cp.cv('cpInfoPrevFrame', 0, 1, 15, 0);
		cp.cv('cpQuizInfoStudentID', '', 0, 15, 0);
		cp.cv('cpQuizInfoStudentName', '', 0, 15, 0);
	};
	cp.ReportingVariables = "";
};
cp.sbw = 0;
cp.useg = 1;
cp.geo = 0;
cp.pg = 0;
cp.win8 = 0;
cp.autoGrow = 1;
cp.fluidFont = 1;;
var RuntimeBrowserDetect = {
	init: function (a, c, e) {
		this.BrowserEnum || (this.BrowserEnum = {}, this.BrowserEnum.UNKNOWN = 0, this.BrowserEnum.MSIE = 1, this.BrowserEnum.FIREFOX = 2, this.BrowserEnum.CHROME = 3, this.BrowserEnum.SAFARI = 4, this.BrowserEnum.NETSCAPE = 5, this.BrowserEnum.OPERA = 6, this.BrowserEnum.CAMINO = 7, this.BrowserEnum.FIREBIRD = 8, this.BrowserEnum.MSIE_MIN_SUPPORTED_VERSION = 9, this.BrowserEnum.CHROME_MIN_SUPPORTED_VERSION = 17, this.BrowserEnum.SAFARI_MIN_SUPPORTED_VERSION = 5.1, this.BrowserEnum.FF_MIN_SUPPORTED_VERSION_WIN =
			22, this.BrowserEnum.FF_MIN_SUPPORTED_VERSION_MAC = 35, this.BrowserEnum.FF_MIN_SUPPORTED_VERSION_FFOS = 15, this.BrowserEnum.FF_MIN_SUPPORTED_VERSION_ANDROID = 20);
		this.DeviceEnum || (this.DeviceEnum = {}, this.DeviceEnum.DESKTOP = 0, this.DeviceEnum.IDEVICE = 1, this.DeviceEnum.ANDROID = 2);
		this.browserVersion = this.browser = this.BrowserEnum.UNKNOWN;
		this.device = this.DeviceEnum.DESKTOP;
		navigator.userAgent.match(/(iPhone|iPad|iPod)/i) ? this.device = this.DeviceEnum.IDEVICE : navigator.userAgent.match(/android/i) && (this.device =
			this.DeviceEnum.ANDROID);
		navigator.userAgent.match(/MSIE/i) ? (this.browser = this.BrowserEnum.MSIE, this.browserVersion = this.getCurrentBrowserVersion(navigator.userAgent, "MSIE") || this.getCurrentBrowserVersion(navigator.appVersion, "MSIE") || this.BrowserEnum.UNKNOWN) : navigator.userAgent.match(/Firefox/i) ? (this.browser = this.BrowserEnum.FIREFOX, this.browserVersion = this.getCurrentBrowserVersion(navigator.userAgent, "Firefox") || this.getCurrentBrowserVersion(navigator.appVersion, "Firefox") || this.BrowserEnum.UNKNOWN) :
			navigator.userAgent.match(/Chrome/i) ? (this.browser = this.BrowserEnum.CHROME, this.browserVersion = this.getCurrentBrowserVersion(navigator.userAgent, "Chrome") || this.getCurrentBrowserVersion(navigator.appVersion, "Chrome") || this.BrowserEnum.UNKNOWN) : navigator.userAgent.match(/Safari/i) ? (this.browser = this.BrowserEnum.SAFARI, this.browserVersion = this.getCurrentBrowserVersion(navigator.userAgent, "Version") || this.getCurrentBrowserVersion(navigator.appVersion, "Version") || this.BrowserEnum.UNKNOWN) : navigator.userAgent.match(/Netscape/i) ?
			(this.browser = this.BrowserEnum.NETSCAPE, this.browserVersion = this.getCurrentBrowserVersion(navigator.userAgent, "Netscape") || this.getCurrentBrowserVersion(navigator.appVersion, "Netscape") || this.BrowserEnum.UNKNOWN) : navigator.userAgent.match(/Opera/i) ? (this.browser = this.BrowserEnum.OPERA, this.browserVersion = this.getCurrentBrowserVersion(navigator.userAgent, "Version") || this.getCurrentBrowserVersion(navigator.appVersion, "Version") || this.BrowserEnum.UNKNOWN) : navigator.userAgent.match(/Camino/i) ? (this.browser =
				this.BrowserEnum.CAMINO, this.browserVersion = this.getCurrentBrowserVersion(navigator.userAgent, "Camino") || this.getCurrentBrowserVersion(navigator.appVersion, "Camino") || this.BrowserEnum.UNKNOWN) : navigator.userAgent.match(/Firebird/i) ? this.browser = this.BrowserEnum.FIREBIRD : navigator.userAgent.match(/Trident/i) && "netscape" == navigator.appName.toLowerCase() && (this.browser = this.BrowserEnum.MSIE, this.browserVersion = this.getCurrentBrowserVersion(navigator.userAgent, "rv") || this.BrowserEnum.UNKNOWN);
		this.getIsBrowserSupported() ||
			this.showRuntimeWarning(a, c, e)
	},
	getCurrentBrowserVersion: function (a, c) {
		var e = a.indexOf(c);
		return -1 == e ? this.BrowserEnum.UNKNOWN : parseFloat(a.substring(e + c.length + 1))
	},
	getIsBrowserSupported: function () {
		var a = !1;
		if (this.browser == this.BrowserEnum.MSIE && this.browserVersion >= this.BrowserEnum.MSIE_MIN_SUPPORTED_VERSION) a = !0;
		else if (this.browser == this.BrowserEnum.CHROME && this.browserVersion >= this.BrowserEnum.CHROME_MIN_SUPPORTED_VERSION) a = !0;
		else if (this.browser == this.BrowserEnum.SAFARI && this.browserVersion >=
			this.BrowserEnum.SAFARI_MIN_SUPPORTED_VERSION) a = !0;
		else if (this.browser == this.BrowserEnum.FIREFOX && (cp.OS == cp.MACOS && this.browserVersion >= this.BrowserEnum.FF_MIN_SUPPORTED_VERSION_MAC || cp.OS == cp.WINDOWS && this.browserVersion >= this.BrowserEnum.FF_MIN_SUPPORTED_VERSION_WIN)) a = !0;
		return a
	},
	getPanelElement: function (a, c, e, d, f) {
		var b = document.createElement("div");
		b.style.left = a;
		b.style.top = c;
		b.style.width = e;
		b.style.height = d;
		b.style.backgroundColor = f;
		b.style.border = "1px solid #666666";
		b.style.borderRadius =
			"14px";
		return b
	},
	getTextElement: function (a, c, e, d, f) {
		var b = document.createElement("div");
		b.style.color = e;
		b.style.fontFamily = d;
		b.style.fontSize = "14px";
		b.style.textAlign = "left";
		b.style.left = a;
		b.style.top = c;
		b.style.position = "relative";
		b.style.opacity = 1;
		b.innerHTML = f;
		return b
	},
	showRuntimeWarning: function (a, c, e) {
		if (document.body) {
			var d = document.createElement("div");
			d.id = "CPUnSupportedBrowserWarning_ID";
			var f = this.getPanelElement("0px", "0px", "455px", "220px", "#CCCCCC");
			f.style.margin = "100px auto";
			"boxShadow" in
				f.style && (f.style.boxShadow = "1px 1px 1px #000000");
			d.appendChild(f);
			var b = this.getPanelElement("2px", "2px", "450px", "215px", "#FEFEFE");
			b.style.position = "relative";
			f.appendChild(b);
			c = this.getTextElement("10px", "10px", "#000000", "Tahoma", c);
			b.appendChild(c);
			c = document.createElement("div");
			c.style.height = "2px";
			c.style.backgroundColor = "#000000";
			c.style.opacity = 0.5;
			c.style.position = "relative";
			c.style.marginLeft = "10px";
			c.style.marginRight = "10px";
			c.style.top = "20px";
			b.appendChild(c);
			a = this.getTextElement("10px",
				"30px", "#000000", "Tahoma", a);
			a.style.marginRight = "10px";
			b.appendChild(a);
			a = this.getPanelElement("0px", "auto", "100px", "33px", "#CCCCCC");
			a.style.bottom = "10px";
			a.style.opacity = 0.7;
			a.style.position = "absolute";
			a.style.cursor = "pointer";
			cp.registerGestureEvent(a, cp.GESTURE_EVENT_TYPES.TAP, function () {
				var a = document.getElementById("CPUnSupportedBrowserWarning_ID");
				a != void 0 && document.body.removeChild(a)
			});
			"boxShadow" in a.style && (a.style.boxShadow = "1px 1px 1px #000000");
			e = this.getTextElement("0px", "5px", "#000000",
				"Tahoma", e);
			e.style.textAlign = "center";
			a.appendChild(e);
			b.appendChild(a);
			document.body.appendChild(d);
			d.style.visibility = "visible";
			d.style.position = "absolute";
			d.style.left = "0px";
			d.style.top = "0px";
			d.style.width = "100%";
			d.style.height = "100%";
			d.style.textAlign = "center";
			d.style.zIndex = "1000";
			d.style.backgroundColor = "CCCCCC";
			a.style.left = (b.clientWidth - a.clientWidth) / 2 + "px"
		}
	}
};
(function (i, m) {
	var b = function (a, c) {
		return new b.Instance(a, c || {})
	};
	b.defaults = {
		stop_browser_behavior: {
			userSelect: "none",
			touchAction: "none",
			touchCallout: "none",
			contentZooming: "none",
			userDrag: "none",
			tapHighlightColor: "rgba(0,0,0,0)"
		}
	};
	b.HAS_POINTEREVENTS = i.navigator.pointerEnabled || i.navigator.msPointerEnabled;
	b.HAS_TOUCHEVENTS = "ontouchstart" in i;
	b.MOBILE_REGEX = /mobile|tablet|ip(ad|hone|od)|android|silk/i;
	b.NO_MOUSEEVENTS = b.HAS_TOUCHEVENTS && i.navigator.userAgent.match(b.MOBILE_REGEX);
	b.EVENT_TYPES = {};
	b.DIRECTION_DOWN = "down";
	b.DIRECTION_LEFT = "left";
	b.DIRECTION_UP = "up";
	b.DIRECTION_RIGHT = "right";
	b.POINTER_MOUSE = "mouse";
	b.POINTER_TOUCH = "touch";
	b.POINTER_PEN = "pen";
	b.EVENT_START = "start";
	b.EVENT_MOVE = "move";
	b.EVENT_END = "end";
	b.DOCUMENT = i.document;
	b.plugins = b.plugins || {};
	b.gestures = b.gestures || {};
	b.READY = !1;
	b.utils = {
		extend: function (a, b, d) {
			for (var e in b) a[e] !== m && d || (a[e] = b[e]);
			return a
		},
		each: function (a, b, d) {
			var e, f;
			if ("forEach" in a) a.forEach(b, d);
			else if (a.length !== m) {
				e = 0;
				for (f = a.length; e < f && !1 !==
					b.call(d, a[e], e, a); e++);
			} else
				for (e in a)
					if (a.hasOwnProperty(e) && !1 === b.call(d, a[e], e, a)) break
		},
		hasParent: function (a, b) {
			for (; a;) {
				if (a == b) return !0;
				a = a.parentNode
			}
			return !1
		},
		getCenter: function (a) {
			var c = [],
				d = [];
			b.utils.each(a, function (a) {
				c.push("undefined" !== typeof a.clientX ? a.clientX : a.pageX);
				d.push("undefined" !== typeof a.clientY ? a.clientY : a.pageY)
			});
			return {
				pageX: (Math.min.apply(Math, c) + Math.max.apply(Math, c)) / 2,
				pageY: (Math.min.apply(Math, d) + Math.max.apply(Math, d)) / 2
			}
		},
		getVelocity: function (a, b, d) {
			return {
				x: Math.abs(b /
					a) || 0,
				y: Math.abs(d / a) || 0
			}
		},
		getAngle: function (a, b) {
			return 180 * Math.atan2(b.pageY - a.pageY, b.pageX - a.pageX) / Math.PI
		},
		getDirection: function (a, c) {
			var d = Math.abs(a.pageX - c.pageX),
				e = Math.abs(a.pageY - c.pageY);
			return d >= e ? 0 < a.pageX - c.pageX ? b.DIRECTION_LEFT : b.DIRECTION_RIGHT : 0 < a.pageY - c.pageY ? b.DIRECTION_UP : b.DIRECTION_DOWN
		},
		getDistance: function (a, b) {
			var d = b.pageX - a.pageX,
				e = b.pageY - a.pageY;
			return Math.sqrt(d * d + e * e)
		},
		getScale: function (a, b) {
			return 2 <= a.length && 2 <= b.length ? this.getDistance(b[0], b[1]) / this.getDistance(a[0],
				a[1]) : 1
		},
		getRotation: function (a, b) {
			return 2 <= a.length && 2 <= b.length ? this.getAngle(b[1], b[0]) - this.getAngle(a[1], a[0]) : 0
		},
		isVertical: function (a) {
			return a == b.DIRECTION_UP || a == b.DIRECTION_DOWN
		},
		stopDefaultBrowserBehavior: function (a, c) {
			if (c && (a && a.style) && (b.utils.each("webkit khtml moz Moz ms o ".split(" "), function (d) {
					b.utils.each(c, function (b, c) {
						d && (c = d + c.substring(0, 1).toUpperCase() + c.substring(1));
						c in a.style && (a.style[c] = b)
					})
				}), "none" == c.userSelect && (a.onselectstart = function () {
					return !1
				}), "none" ==
				c.userDrag)) a.ondragstart = function () {
				return false
			}
		}
	};
	b.Instance = function (a, c) {
		var d = this;
		b.READY || (b.event.determineEventTypes(), b.utils.each(b.gestures, function (a) {
			b.detection.register(a)
		}), b.event.onTouch(b.DOCUMENT, b.EVENT_MOVE, b.detection.detect), b.event.onTouch(b.DOCUMENT, b.EVENT_END, b.detection.detect), b.READY = !0);
		this.element = a;
		this.enabled = !0;
		this.options = b.utils.extend(b.utils.extend({}, b.defaults), c || {});
		this.options.stop_browser_behavior && b.utils.stopDefaultBrowserBehavior(this.element,
			this.options.stop_browser_behavior);
		b.event.onTouch(a, b.EVENT_START, function (a) {
			d.enabled && b.detection.startDetect(d, a)
		});
		return this
	};
	b.Instance.prototype = {
		on: function (a, c) {
			var d = a.split(" ");
			b.utils.each(d, function (a) {
				this.element.addEventListener(a, c, !1)
			}, this);
			return this
		},
		off: function (a, c) {
			var d = a.split(" ");
			b.utils.each(d, function (a) {
				this.element.removeEventListener(a, c, !1)
			}, this);
			return this
		},
		trigger: function (a, c) {
			c || (c = {});
			var d = b.DOCUMENT.createEvent("Event");
			d.initEvent(a, !0, !0);
			d.gesture =
				c;
			var e = this.element;
			b.utils.hasParent(c.target, e) && (e = c.target);
			e.dispatchEvent(d);
			return this
		},
		enable: function (a) {
			this.enabled = a;
			return this
		}
	};
	var j = null,
		k = !1,
		l = !1;
	b.event = {
		bindDom: function (a, c, d) {
			c = c.split(" ");
			b.utils.each(c, function (b) {
				a.addEventListener(b, d, !1)
			})
		},
		onTouch: function (a, c, d) {
			var e = this;
			this.bindDom(a, b.EVENT_TYPES[c], function (f) {
				var h = f.type.toLowerCase();
				if (!h.match(/mouse/) || !l) {
					h.match(/touch/) || h.match(/pointerdown/) || h.match(/mouse/) && 1 === f.which ? k = !0 : h.match(/mouse/) && !f.which &&
						(k = !1);
					h.match(/touch|pointer/) && (l = !0);
					var g = 0;
					if (k) {
						b.HAS_POINTEREVENTS && c != b.EVENT_END ? g = b.PointerEvent.updatePointer(c, f) : h.match(/touch/) ? g = f.touches.length : l || (g = h.match(/up/) ? 0 : 1);
						0 < g && c == b.EVENT_END ? c = b.EVENT_MOVE : g || (c = b.EVENT_END);
						if (g || null === j) j = f;
						d.call(b.detection, e.collectEventData(a, c, e.getTouchList(j, c), f));
						b.HAS_POINTEREVENTS && c == b.EVENT_END && (g = b.PointerEvent.updatePointer(c, f))
					}
					g || (j = null, l = k = !1, b.PointerEvent.reset())
				}
			})
		},
		determineEventTypes: function () {
			var a;
			a = b.HAS_POINTEREVENTS ?
				b.PointerEvent.getEvents() : b.NO_MOUSEEVENTS ? ["touchstart", "touchmove", "touchend touchcancel"] : ["touchstart mousedown", "touchmove mousemove", "touchend touchcancel mouseup"];
			b.EVENT_TYPES[b.EVENT_START] = a[0];
			b.EVENT_TYPES[b.EVENT_MOVE] = a[1];
			b.EVENT_TYPES[b.EVENT_END] = a[2]
		},
		getTouchList: function (a) {
			if (b.HAS_POINTEREVENTS) return b.PointerEvent.getTouchList();
			if (a.touches) return a.touches;
			a.identifier = 1;
			return [a]
		},
		collectEventData: function (a, c, d, e) {
			a = b.POINTER_TOUCH;
			if (e.type.match(/mouse/) || b.PointerEvent.matchType(b.POINTER_MOUSE,
				e)) a = b.POINTER_MOUSE;
			return {
				center: b.utils.getCenter(d),
				timeStamp: (new Date).getTime(),
				target: e.target,
				touches: d,
				eventType: c,
				pointerType: a,
				srcEvent: e,
				preventDefault: function () {
					this.srcEvent.preventManipulation && this.srcEvent.preventManipulation();
					this.srcEvent.preventDefault && this.srcEvent.preventDefault()
				},
				stopPropagation: function () {
					this.srcEvent.stopPropagation()
				},
				stopDetect: function () {
					return b.detection.stopDetect()
				}
			}
		}
	};
	b.PointerEvent = {
		pointers: {},
		getTouchList: function () {
			var a = [];
			b.utils.each(this.pointers,
				function (b) {
					a.push(b)
				});
			return a
		},
		updatePointer: function (a, c) {
			a == b.EVENT_END ? this.pointers = {} : (c.identifier = c.pointerId, this.pointers[c.pointerId] = c);
			return Object.keys(this.pointers).length
		},
		matchType: function (a, c) {
			if (!c.pointerType) return !1;
			var d = c.pointerType,
				e = {};
			e[b.POINTER_MOUSE] = d === c.MSPOINTER_TYPE_MOUSE || d === b.POINTER_MOUSE;
			e[b.POINTER_TOUCH] = d === c.MSPOINTER_TYPE_TOUCH || d === b.POINTER_TOUCH;
			e[b.POINTER_PEN] = d === c.MSPOINTER_TYPE_PEN || d === b.POINTER_PEN;
			return e[a]
		},
		getEvents: function () {
			return ["pointerdown MSPointerDown",
				"pointermove MSPointerMove", "pointerup pointercancel MSPointerUp MSPointerCancel"]
		},
		reset: function () {
			this.pointers = {}
		}
	};
	b.detection = {
		gestures: [],
		current: null,
		previous: null,
		stopped: !1,
		startDetect: function (a, c) {
			this.current || (this.stopped = !1, this.current = {
				inst: a,
				startEvent: b.utils.extend({}, c),
				lastEvent: !1,
				name: ""
			}, this.detect(c))
		},
		detect: function (a) {
			if (this.current && !this.stopped) {
				var a = this.extendEventData(a),
					c = this.current.inst.options;
				b.utils.each(this.gestures, function (b) {
					if (!this.stopped && !1 !==
						c[b.name] && !1 === b.handler.call(b, a, this.current.inst)) return this.stopDetect(), !1
				}, this);
				this.current && (this.current.lastEvent = a);
				a.eventType == b.EVENT_END && !a.touches.length - 1 && this.stopDetect();
				return a
			}
		},
		stopDetect: function () {
			this.previous = b.utils.extend({}, this.current);
			this.current = null;
			this.stopped = !0
		},
		extendEventData: function (a) {
			var c = this.current.startEvent;
			if (c && (a.touches.length != c.touches.length || a.touches === c.touches)) c.touches = [], b.utils.each(a.touches, function (a) {
				c.touches.push(b.utils.extend({},
					a))
			});
			var d = a.timeStamp - c.timeStamp,
				e = a.center.pageX - c.center.pageX,
				f = a.center.pageY - c.center.pageY,
				h = b.utils.getVelocity(d, e, f),
				g, i;
			"end" === a.eventType ? (g = this.current.lastEvent && this.current.lastEvent.interimAngle, i = this.current.lastEvent && this.current.lastEvent.interimDirection) : (g = this.current.lastEvent && b.utils.getAngle(this.current.lastEvent.center, a.center), i = this.current.lastEvent && b.utils.getDirection(this.current.lastEvent.center, a.center));
			b.utils.extend(a, {
				deltaTime: d,
				deltaX: e,
				deltaY: f,
				velocityX: h.x,
				velocityY: h.y,
				distance: b.utils.getDistance(c.center, a.center),
				angle: b.utils.getAngle(c.center, a.center),
				interimAngle: g,
				direction: b.utils.getDirection(c.center, a.center),
				interimDirection: i,
				scale: b.utils.getScale(c.touches, a.touches),
				rotation: b.utils.getRotation(c.touches, a.touches),
				startEvent: c
			});
			return a
		},
		register: function (a) {
			var c = a.defaults || {};
			c[a.name] === m && (c[a.name] = !0);
			b.utils.extend(b.defaults, c, !0);
			a.index = a.index || 1E3;
			this.gestures.push(a);
			this.gestures.sort(function (a, b) {
				return a.index <
					b.index ? -1 : a.index > b.index ? 1 : 0
			});
			return this.gestures
		}
	};
	b.gestures.Drag = {
		name: "drag",
		index: 50,
		defaults: {
			drag_min_distance: 10,
			correct_for_drag_min_distance: !0,
			drag_max_touches: 1,
			drag_block_horizontal: !1,
			drag_block_vertical: !1,
			drag_lock_to_axis: !1,
			drag_lock_min_distance: 25
		},
		triggered: !1,
		handler: function (a, c) {
			if (b.detection.current.name != this.name && this.triggered) c.trigger(this.name + "end", a), this.triggered = !1;
			else if (!(0 < c.options.drag_max_touches && a.touches.length > c.options.drag_max_touches)) switch (a.eventType) {
				case b.EVENT_START:
					this.triggered = !1;
					break;
				case b.EVENT_MOVE:
					if (a.distance < c.options.drag_min_distance && b.detection.current.name != this.name) break;
					if (b.detection.current.name != this.name && (b.detection.current.name = this.name, c.options.correct_for_drag_min_distance && 0 < a.distance)) {
						var d = Math.abs(c.options.drag_min_distance / a.distance);
						b.detection.current.startEvent.center.pageX += a.deltaX * d;
						b.detection.current.startEvent.center.pageY += a.deltaY * d;
						a = b.detection.extendEventData(a)
					}
					if (b.detection.current.lastEvent.drag_locked_to_axis || c.options.drag_lock_to_axis &&
						c.options.drag_lock_min_distance <= a.distance) a.drag_locked_to_axis = !0;
					d = b.detection.current.lastEvent.direction;
					a.drag_locked_to_axis && d !== a.direction && (a.direction = b.utils.isVertical(d) ? 0 > a.deltaY ? b.DIRECTION_UP : b.DIRECTION_DOWN : 0 > a.deltaX ? b.DIRECTION_LEFT : b.DIRECTION_RIGHT);
					this.triggered || (c.trigger(this.name + "start", a), this.triggered = !0);
					c.trigger(this.name, a);
					c.trigger(this.name + a.direction, a);
					(c.options.drag_block_vertical && b.utils.isVertical(a.direction) || c.options.drag_block_horizontal && !b.utils.isVertical(a.direction)) &&
						a.preventDefault();
					break;
				case b.EVENT_END:
					this.triggered && c.trigger(this.name + "end", a), this.triggered = !1
			}
		}
	};
	b.gestures.Hold = {
		name: "hold",
		index: 10,
		defaults: {
			hold_timeout: 500,
			hold_threshold: 1
		},
		timer: null,
		handler: function (a, c) {
			switch (a.eventType) {
				case b.EVENT_START:
					clearTimeout(this.timer);
					b.detection.current.name = this.name;
					this.timer = setTimeout(function () {
						"hold" == b.detection.current.name && c.trigger("hold", a)
					}, c.options.hold_timeout);
					break;
				case b.EVENT_MOVE:
					a.distance > c.options.hold_threshold && clearTimeout(this.timer);
					break;
				case b.EVENT_END:
					clearTimeout(this.timer)
			}
		}
	};
	b.gestures.Release = {
		name: "release",
		index: Infinity,
		handler: function (a, c) {
			a.eventType == b.EVENT_END && c.trigger(this.name, a)
		}
	};
	b.gestures.Swipe = {
		name: "swipe",
		index: 40,
		defaults: {
			swipe_min_touches: 1,
			swipe_max_touches: 1,
			swipe_velocity: 1
		},
		handler: function (a, c) {
			if (a.eventType == b.EVENT_END && !(0 < c.options.swipe_max_touches && a.touches.length < c.options.swipe_min_touches && a.touches.length > c.options.swipe_max_touches) && (a.velocityX > c.options.swipe_velocity || a.velocityY >
				c.options.swipe_velocity)) c.trigger(this.name, a), c.trigger(this.name + a.direction, a)
		}
	};
	b.gestures.Tap = {
		name: "tap",
		evttouches: 1,
		index: 100,
		defaults: {
			tap_max_touchtime: 250,
			tap_max_distance: 10,
			tap_always: !0,
			doubletap_distance: 20,
			doubletap_interval: 300,
			evttouches: 1,
			longtap_min_touchtime: 500,
			longtap_max_touchtime: 1E3,
			evtstarttime: 0
		},
		handler: function (a, c) {
			a.eventType == b.EVENT_START && (c.options.evttouches = a.touches.length, c.options.evtstarttime = (new Date).getTime());
			a.eventType == b.EVENT_MOVE && (c.options.evttouches =
				a.touches.length);
			if (a.eventType == b.EVENT_END && "touchcancel" != a.srcEvent.type) {
				var d = b.detection.previous,
					e = !1;
				if (d && "tap" == d.name && a.timeStamp - d.lastEvent.timeStamp < c.options.doubletap_interval && a.distance < c.options.doubletap_distance) {
					if (a.deltaTime > c.options.tap_max_touchtime || a.distance > c.options.tap_max_distance) return;
					c.trigger("doubletap", a);
					e = !0
				}
				if (!e || c.options.tap_always)(new Date).getTime() - c.options.evtstarttime > c.options.longtap_min_touchtime ? a.distance > c.options.tap_max_distance || (b.detection.current.name =
					"longtap", c.trigger(b.detection.current.name, a)) : a.deltaTime > c.options.tap_max_touchtime || a.distance > c.options.tap_max_distance || (b.detection.current.name = "tap", c.trigger(b.detection.current.name, a))
			}
		}
	};
	b.gestures.Touch = {
		name: "touch",
		index: -Infinity,
		defaults: {
			prevent_default: !1,
			prevent_mouseevents: !1
		},
		handler: function (a, c) {
			c.options.prevent_mouseevents && a.pointerType == b.POINTER_MOUSE ? a.stopDetect() : (c.options.prevent_default && a.preventDefault(), a.eventType == b.EVENT_START && c.trigger(this.name, a))
		}
	};
	b.gestures.Transform = {
		name: "transform",
		index: 45,
		defaults: {
			transform_min_scale: 0,
			transform_min_rotation: 360,
			transform_always_block: !1
		},
		triggered: !1,
		handler: function (a, c) {
			if (b.detection.current.name != this.name && this.triggered) c.trigger(this.name + "end", a), this.triggered = !1;
			else if (!(2 > a.touches.length)) switch (c.options.transform_always_block && a.preventDefault(), a.eventType) {
				case b.EVENT_START:
					this.triggered = !1;
					this.twofingertap = !0;
					break;
				case b.EVENT_MOVE:
					var d = Math.abs(1 - a.scale),
						e = Math.abs(a.rotation);
					if (d < c.options.transform_min_scale && e < c.options.transform_min_rotation) break;
					this.twofingertap = !1;
					b.detection.current.name = this.name;
					this.triggered || (c.trigger(this.name + "start", a), this.triggered = !0);
					c.trigger(this.name, a);
					e > c.options.transform_min_rotation && c.trigger("rotate", a);
					d > c.options.transform_min_scale && (c.trigger("pinch", a), c.trigger("pinch" + (1 > a.scale ? "in" : "out"), a));
					break;
				case b.EVENT_END:
					this.triggered && c.trigger(this.name + "end", a), this.twofingertap && c.trigger("taptwo", a), this.triggered = !1
			}
		}
	};
	"function" == typeof define && define.amd ? define(function () {
		return b
	}) : "object" === typeof module && module.exports ? module.exports = b : i.Hammer = b
})(window);
(function (l, q, s) {
	function ca(e, d, a) {
		var c = e.runtimeStyle && e.runtimeStyle[d],
			b, f = e.style;
		if (!/^-?[0-9]+\.?[0-9]*(?:px)?$/i.test(a) && /^-?\d/.test(a) && (b = f.left, c && (e.runtimeStyle.left = e.currentStyle.left), f.left = "fontSize" === d ? "1em" : a || 0, a = f.pixelLeft + "px", f.left = b, c)) e.runtimeStyle.left = c;
		return !/^(thin|medium|thick)$/i.test(a) ? Math.round(parseFloat(a)) + "px" : a
	}
	function qa(e) {
		return parseInt(e, 10)
	}
	function ea(e, d, a, c, b, f) {
		var d = g.Util.getCSS(d, e, b),
			x;
		1 === d.length && (b = d[0], d = [], d[0] = b, d[1] = b); - 1 !== d[0].toString().indexOf("%") ?
			(x = parseFloat(d[0]) / 100, b = a.width * x, "backgroundSize" !== e && (b -= (f || c).width * x)) : b = "backgroundSize" === e ? "auto" === d[0] ? c.width : /contain|cover/.test(d[0]) ? g.Util.resizeBounds(c.width, c.height, a.width, a.height, d[0]).width : parseInt(d[0], 10) : parseInt(d[0], 10);
		"auto" === d[1] ? a = b / c.width * c.height : -1 !== d[1].toString().indexOf("%") ? (x = parseFloat(d[1]) / 100, a = a.height * x, "backgroundSize" !== e && (a -= (f || c).height * x)) : a = parseInt(d[1], 10);
		return [b, a]
	}
	var g = {}, da;
	g.Util = {};
	g.Util.log = function (e) {
		g.logging && (l.console &&
			l.console.log) && l.console.log(e)
	};
	var oa = String.prototype.trim;
	g.Util.trimText = function (e) {
		return oa ? oa.apply(e) : ((e || "") + "").replace(/^\s+|\s+$/g, "")
	};
	g.Util.asFloat = function (e) {
		return parseFloat(e)
	};
	var ra = /((rgba|rgb)\([^\)]+\)(\s-?\d+px){0,})/g,
		sa = /(-?\d+px)|(#.+)|(rgb\(.+\))|(rgba\(.+\))/g;
	g.Util.parseTextShadows = function (e) {
		if (!e || "none" === e) return [];
		for (var e = e.match(ra), d = [], a = 0; e && a < e.length; a++) {
			var c = e[a].match(sa);
			d.push({
				color: c[0],
				offsetX: c[1] ? c[1].replace("px", "") : 0,
				offsetY: c[2] ? c[2].replace("px",
					"") : 0,
				blur: c[3] ? c[3].replace("px", "") : 0
			})
		}
		return d
	};
	g.Util.parseBackgroundImage = function (e) {
		var d, a, c, b, f, x = [],
			g, h = 0,
			T = 0,
			t, p, m = function () {
				if (d) {
					'"' === a.substr(0, 1) && (a = a.substr(1, a.length - 2));
					a && p.push(a);
					if ("-" === d.substr(0, 1) && 0 < (b = d.indexOf("-", 1) + 1)) c = d.substr(0, b), d = d.substr(b);
					x.push({
						prefix: c,
						method: d.toLowerCase(),
						value: f,
						args: p
					})
				}
				p = [];
				d = c = a = f = ""
			};
		m();
		for (var l = 0, s = e.length; l < s; l++)
			if (g = e[l], !(0 === h && -1 < " \r\n\t".indexOf(g))) {
				switch (g) {
					case '"':
						t ? t === g && (t = null) : t = g;
						break;
					case "(":
						if (t) break;
						else if (0 === h) {
							h = 1;
							f += g;
							continue
						} else T++;
						break;
					case ")":
						if (t) break;
						else if (1 === h)
							if (0 === T) {
								h = 0;
								f += g;
								m();
								continue
							} else T--;
						break;
					case ",":
						if (!t)
							if (0 === h) {
								m();
								continue
							} else if (1 === h && 0 === T && !d.match(/^url$/i)) {
							p.push(a);
							a = "";
							f += g;
							continue
						}
				}
				f += g;
				0 === h ? d += g : a += g
			}
		m();
		return x
	};
	g.Util.Bounds = function (e) {
		var d, a = {};
		e.getBoundingClientRect && (d = e.getBoundingClientRect(), a.top = d.top, a.bottom = d.bottom || d.top + d.height, a.left = d.left, a.width = e.offsetWidth, a.height = e.offsetHeight);
		return a
	};
	g.Util.OffsetBounds =
		function (e) {
			var d = e.offsetParent ? g.Util.OffsetBounds(e.offsetParent) : {
				top: 0,
				left: 0
			};
			return {
				top: e.offsetTop + d.top,
				bottom: e.offsetTop + e.offsetHeight + d.top,
				left: e.offsetLeft + d.left,
				width: e.offsetWidth,
				height: e.offsetHeight
			}
	};
	g.Util.getCSS = function (e, d, a) {
		void 0 !== e && (da = q.defaultView.getComputedStyle(e, null));
		var c = da[d];
		if (/^background(Size|Position)$/.test(d)) {
			a: {
				c = (c || "").split(",");
				c = c[a || 0] || c[0] || "auto";
				c = g.Util.trimText(c).split(" ");
				if (!("backgroundSize" === d && (!c[0] || c[0].match(/cover|contain|auto/)))) {
					c[0] = -1 === c[0].indexOf("%") ? ca(e, d + "X", c[0]) : c[0];
					if (c[1] === s)
						if ("backgroundSize" === d) {
							c[1] = "auto";
							e = c;
							break a
						} else c[1] = c[0];
					c[1] = -1 === c[1].indexOf("%") ? ca(e, d + "Y", c[1]) : c[1]
				}
				e = c
			}
			return e
		}
		return /border(Top|Bottom)(Left|Right)Radius/.test(d) ? (e = c.split(" "), 1 >= e.length && (e[1] = e[0]), e.map(qa)) : c
	};
	g.Util.resizeBounds = function (e, d, a, c, b) {
		e /= d;
		!b || "auto" === b ? (b = a, a = c) : a / c < e ^ "contain" === b ? (a = c, b = c * e) : (b = a, a /= e);
		return {
			width: b,
			height: a
		}
	};
	g.Util.BackgroundPosition = function (e, d, a, c, b) {
		e = ea("backgroundPosition",
			e, d, a, c, b);
		return {
			left: e[0],
			top: e[1]
		}
	};
	g.Util.BackgroundSize = function (e, d, a, c) {
		e = ea("backgroundSize", e, d, a, c);
		return {
			width: e[0],
			height: e[1]
		}
	};
	g.Util.Extend = function (e, d) {
		for (var a in e) e.hasOwnProperty(a) && (d[a] = e[a]);
		return d
	};
	g.Util.Children = function (e) {
		var d;
		try {
			var a;
			if (e.nodeName && "IFRAME" === e.nodeName.toUpperCase()) a = e.contentDocument || e.contentWindow.document;
			else {
				var c = e.childNodes,
					e = [];
				if (null !== c) {
					var b = e.length,
						f = 0;
					if ("number" === typeof c.length)
						for (var x = c.length; f < x; f++) e[b++] = c[f];
					else
						for (; c[f] !==
							s;) e[b++] = c[f++];
					e.length = b
				}
				a = e
			}
			d = a
		} catch (k) {
			g.Util.log("html2canvas.Util.Children failed with exception: " + k.message), d = []
		}
		return d
	};
	g.Util.isTransparent = function (e) {
		return "transparent" === e || "rgba(0, 0, 0, 0)" === e
	};
	var aa = {};
	g.Util.Font = function (e, d, a) {
		if (aa[e + "-" + d] !== s) return aa[e + "-" + d];
		var c = a.createElement("div"),
			b = a.createElement("img"),
			f = a.createElement("span"),
			g;
		c.style.visibility = "hidden";
		c.style.fontFamily = e;
		c.style.fontSize = d;
		c.style.margin = 0;
		c.style.padding = 0;
		a.body.appendChild(c);
		b.src =
			"data:image/gif;base64,R0lGODlhAQABAIABAP///wAAACwAAAAAAQABAAACAkQBADs=";
		b.width = 1;
		b.height = 1;
		b.style.margin = 0;
		b.style.padding = 0;
		b.style.verticalAlign = "baseline";
		f.style.fontFamily = e;
		f.style.fontSize = d;
		f.style.margin = 0;
		f.style.padding = 0;
		f.appendChild(a.createTextNode("Hidden Text"));
		c.appendChild(f);
		c.appendChild(b);
		g = b.offsetTop - f.offsetTop + 1;
		c.removeChild(f);
		c.appendChild(a.createTextNode("Hidden Text"));
		c.style.lineHeight = "normal";
		b.style.verticalAlign = "super";
		b = {
			baseline: g,
			lineWidth: 1,
			middle: b.offsetTop - c.offsetTop + 1
		};
		aa[e + "-" + d] = b;
		a.body.removeChild(c);
		return b
	};
	var E = function (e) {
		return function (d) {
			try {
				e.addColorStop(d.stop, d.color)
			} catch (a) {
				ta.log(["failed to add color stop: ", a, "; tried to add: ", d])
			}
		}
	}, ta = g.Util,
		F = {};
	g.Generate = F;
	var pa = [/^(-webkit-linear-gradient)\(([a-z\s]+)([\w\d\.\s,%\(\)]+)\)$/, /^(-o-linear-gradient)\(([a-z\s]+)([\w\d\.\s,%\(\)]+)\)$/, /^(-webkit-gradient)\((linear|radial),\s((?:\d{1,3}%?)\s(?:\d{1,3}%?),\s(?:\d{1,3}%?)\s(?:\d{1,3}%?))([\w\d\.\s,%\(\)\-]+)\)$/, /^(-moz-linear-gradient)\(((?:\d{1,3}%?)\s(?:\d{1,3}%?))([\w\d\.\s,%\(\)]+)\)$/,
		/^(-webkit-radial-gradient)\(((?:\d{1,3}%?)\s(?:\d{1,3}%?)),\s(\w+)\s([a-z\-]+)([\w\d\.\s,%\(\)]+)\)$/, /^(-moz-radial-gradient)\(((?:\d{1,3}%?)\s(?:\d{1,3}%?)),\s(\w+)\s?([a-z\-]*)([\w\d\.\s,%\(\)]+)\)$/, /^(-o-radial-gradient)\(((?:\d{1,3}%?)\s(?:\d{1,3}%?)),\s(\w+)\s([a-z\-]+)([\w\d\.\s,%\(\)]+)\)$/
	];
	F.parseGradient = function (e, d) {
		var a, c, b = pa.length,
			f, g, k, h;
		for (c = 0; c < b && !(f = e.match(pa[c])); c += 1);
		if (f) switch (f[1]) {
			case "-webkit-linear-gradient":
			case "-o-linear-gradient":
				a = {
					type: "linear",
					x0: null,
					y0: null,
					x1: null,
					y1: null,
					colorStops: []
				};
				if (b = f[2].match(/\w+/g)) {
					g = b.length;
					for (c = 0; c < g; c += 1) switch (b[c]) {
						case "top":
							a.y0 = 0;
							a.y1 = d.height;
							break;
						case "right":
							a.x0 = d.width;
							a.x1 = 0;
							break;
						case "bottom":
							a.y0 = d.height;
							a.y1 = 0;
							break;
						case "left":
							a.x0 = 0, a.x1 = d.width
					}
				}
				null === a.x0 && null === a.x1 && (a.x0 = a.x1 = d.width / 2);
				null === a.y0 && null === a.y1 && (a.y0 = a.y1 = d.height / 2);
				if (b = f[3].match(/((?:rgb|rgba)\(\d{1,3},\s\d{1,3},\s\d{1,3}(?:,\s[0-9\.]+)?\)(?:\s\d{1,3}(?:%|px))?)+/g)) {
					g = b.length;
					k = 1 / Math.max(g - 1, 1);
					for (c = 0; c < g; c += 1) h =
						b[c].match(/((?:rgb|rgba)\(\d{1,3},\s\d{1,3},\s\d{1,3}(?:,\s[0-9\.]+)?\))\s*(\d{1,3})?(%|px)?/), h[2] ? (f = parseFloat(h[2]), f = "%" === h[3] ? f / 100 : f / d.width) : f = c * k, a.colorStops.push({
							color: h[1],
							stop: f
						})
				}
				break;
			case "-webkit-gradient":
				a = {
					type: "radial" === f[2] ? "circle" : f[2],
					x0: 0,
					y0: 0,
					x1: 0,
					y1: 0,
					colorStops: []
				};
				if (b = f[3].match(/(\d{1,3})%?\s(\d{1,3})%?,\s(\d{1,3})%?\s(\d{1,3})%?/)) a.x0 = b[1] * d.width / 100, a.y0 = b[2] * d.height / 100, a.x1 = b[3] * d.width / 100, a.y1 = b[4] * d.height / 100;
				if (b = f[4].match(/((?:from|to|color-stop)\((?:[0-9\.]+,\s)?(?:rgb|rgba)\(\d{1,3},\s\d{1,3},\s\d{1,3}(?:,\s[0-9\.]+)?\)\))+/g)) {
					g =
						b.length;
					for (c = 0; c < g; c += 1) h = b[c].match(/(from|to|color-stop)\(([0-9\.]+)?(?:,\s)?((?:rgb|rgba)\(\d{1,3},\s\d{1,3},\s\d{1,3}(?:,\s[0-9\.]+)?\))\)/), f = parseFloat(h[2]), "from" === h[1] && (f = 0), "to" === h[1] && (f = 1), a.colorStops.push({
						color: h[3],
						stop: f
					})
				}
				break;
			case "-moz-linear-gradient":
				a = {
					type: "linear",
					x0: 0,
					y0: 0,
					x1: 0,
					y1: 0,
					colorStops: []
				};
				if (b = f[2].match(/(\d{1,3})%?\s(\d{1,3})%?/)) a.x0 = b[1] * d.width / 100, a.y0 = b[2] * d.height / 100, a.x1 = d.width - a.x0, a.y1 = d.height - a.y0;
				if (b = f[3].match(/((?:rgb|rgba)\(\d{1,3},\s\d{1,3},\s\d{1,3}(?:,\s[0-9\.]+)?\)(?:\s\d{1,3}%)?)+/g)) {
					g =
						b.length;
					k = 1 / Math.max(g - 1, 1);
					for (c = 0; c < g; c += 1) h = b[c].match(/((?:rgb|rgba)\(\d{1,3},\s\d{1,3},\s\d{1,3}(?:,\s[0-9\.]+)?\))\s*(\d{1,3})?(%)?/), h[2] ? (f = parseFloat(h[2]), h[3] && (f /= 100)) : f = c * k, a.colorStops.push({
						color: h[1],
						stop: f
					})
				}
				break;
			case "-webkit-radial-gradient":
			case "-moz-radial-gradient":
			case "-o-radial-gradient":
				a = {
					type: "circle",
					x0: 0,
					y0: 0,
					x1: d.width,
					y1: d.height,
					cx: 0,
					cy: 0,
					rx: 0,
					ry: 0,
					colorStops: []
				};
				if (b = f[2].match(/(\d{1,3})%?\s(\d{1,3})%?/)) a.cx = b[1] * d.width / 100, a.cy = b[2] * d.height / 100;
				b = f[3].match(/\w+/);
				h = f[4].match(/[a-z\-]*/);
				if (b && h) switch (h[0]) {
					case "farthest-corner":
					case "cover":
					case "":
						c = Math.sqrt(Math.pow(a.cx, 2) + Math.pow(a.cy, 2));
						b = Math.sqrt(Math.pow(a.cx, 2) + Math.pow(a.y1 - a.cy, 2));
						g = Math.sqrt(Math.pow(a.x1 - a.cx, 2) + Math.pow(a.y1 - a.cy, 2));
						h = Math.sqrt(Math.pow(a.x1 - a.cx, 2) + Math.pow(a.cy, 2));
						a.rx = a.ry = Math.max(c, b, g, h);
						break;
					case "closest-corner":
						c = Math.sqrt(Math.pow(a.cx, 2) + Math.pow(a.cy, 2));
						b = Math.sqrt(Math.pow(a.cx, 2) + Math.pow(a.y1 - a.cy, 2));
						g = Math.sqrt(Math.pow(a.x1 - a.cx, 2) + Math.pow(a.y1 -
							a.cy, 2));
						h = Math.sqrt(Math.pow(a.x1 - a.cx, 2) + Math.pow(a.cy, 2));
						a.rx = a.ry = Math.min(c, b, g, h);
						break;
					case "farthest-side":
						"circle" === b[0] ? a.rx = a.ry = Math.max(a.cx, a.cy, a.x1 - a.cx, a.y1 - a.cy) : (a.type = b[0], a.rx = Math.max(a.cx, a.x1 - a.cx), a.ry = Math.max(a.cy, a.y1 - a.cy));
						break;
					case "closest-side":
					case "contain":
						"circle" === b[0] ? a.rx = a.ry = Math.min(a.cx, a.cy, a.x1 - a.cx, a.y1 - a.cy) : (a.type = b[0], a.rx = Math.min(a.cx, a.x1 - a.cx), a.ry = Math.min(a.cy, a.y1 - a.cy))
				}
				if (b = f[5].match(/((?:rgb|rgba)\(\d{1,3},\s\d{1,3},\s\d{1,3}(?:,\s[0-9\.]+)?\)(?:\s\d{1,3}(?:%|px))?)+/g)) {
					g =
						b.length;
					k = 1 / Math.max(g - 1, 1);
					for (c = 0; c < g; c += 1) h = b[c].match(/((?:rgb|rgba)\(\d{1,3},\s\d{1,3},\s\d{1,3}(?:,\s[0-9\.]+)?\))\s*(\d{1,3})?(%|px)?/), h[2] ? (f = parseFloat(h[2]), f = "%" === h[3] ? f / 100 : f / d.width) : f = c * k, a.colorStops.push({
						color: h[1],
						stop: f
					})
				}
		}
		return a
	};
	F.Gradient = function (e, d) {
		if (!(0 === d.width || 0 === d.height)) {
			var a = q.createElement("canvas"),
				c = a.getContext("2d"),
				b, f;
			a.width = d.width;
			a.height = d.height;
			if (b = g.Generate.parseGradient(e, d)) switch (b.type) {
				case "linear":
					f = c.createLinearGradient(b.x0, b.y0,
						b.x1, b.y1);
					b.colorStops.forEach(E(f));
					c.fillStyle = f;
					c.fillRect(0, 0, d.width, d.height);
					break;
				case "circle":
					f = c.createRadialGradient(b.cx, b.cy, 0, b.cx, b.cy, b.rx);
					b.colorStops.forEach(E(f));
					c.fillStyle = f;
					c.fillRect(0, 0, d.width, d.height);
					break;
				case "ellipse":
					var x = q.createElement("canvas"),
						k = x.getContext("2d");
					f = Math.max(b.rx, b.ry);
					var h = 2 * f;
					x.width = x.height = h;
					f = k.createRadialGradient(b.rx, b.ry, 0, b.rx, b.ry, f);
					b.colorStops.forEach(E(f));
					k.fillStyle = f;
					k.fillRect(0, 0, h, h);
					c.fillStyle = b.colorStops[b.colorStops.length -
						1].color;
					c.fillRect(0, 0, a.width, a.height);
					c.drawImage(x, b.cx - b.rx, b.cy - b.ry, 2 * b.rx, 2 * b.ry)
			}
			return a
		}
	};
	F.ListAlpha = function (e) {
		var d = "",
			a;
		do a = e % 26, d = String.fromCharCode(a + 64) + d, e /= 26; while (26 < 26 * e);
		return d
	};
	F.ListRoman = function (e) {
		var d = "M CM D CD C XC L XL X IX V IV I".split(" "),
			a = [1E3, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
			c = "",
			b, f = d.length;
		if (0 >= e || 4E3 <= e) return e;
		for (b = 0; b < f; b += 1)
			for (; e >= a[b];) e -= a[b], c += d[b];
		return c
	};
	g.Parse = function (e, d) {
		function a(a, c) {
			var b = parseInt(o(a, c), 10);
			return isNaN(b) ?
				0 : b
		}
		function c(a, c, b, e, d, f) {
			"transparent" !== f && (a.setVariable("fillStyle", f), a.fillRect(c, b, e, d))
		}
		function b(a, c, b) {
			if (0 < a.length) return c + b.toUpperCase()
		}
		function f(a, c) {
			switch (c) {
				case "lowercase":
					return a.toLowerCase();
				case "capitalize":
					return a.replace(/(^|\s|:|-|\(|\))([a-z])/g, b);
				case "uppercase":
					return a.toUpperCase();
				default:
					return a
			}
		}
		function x(a, c, b, e) {
			var d = o(c, "fontWeight"),
				f = o(c, "fontFamily"),
				h = o(c, "fontSize"),
				g = w.parseTextShadows(o(c, "textShadow"));
			switch (parseInt(d, 10)) {
				case 401:
					d = "bold";
					break;
				case 400:
					d = "normal"
			}
			a.setVariable("fillStyle", e);
			a.setVariable("font", [o(c, "fontStyle"), o(c, "fontVariant"), d, h, f].join(" "));
			a.setVariable("textAlign", "left");
			g.length && (a.setVariable("shadowColor", g[0].color), a.setVariable("shadowOffsetX", g[0].offsetX), a.setVariable("shadowOffsetY", g[0].offsetY), a.setVariable("shadowBlur", g[0].blur));
			if ("none" !== b) return w.Font(f, h, y)
		}
		function k(a, b, e) {
			var h = e.ctx,
				g = o(a, "color"),
				ka = o(a, "textDecoration"),
				v = o(a, "textAlign"),
				U, m, k = b,
				z = 0;
			if (0 < w.trimText(b.nodeValue).length) {
				b.nodeValue =
					f(b.nodeValue, o(a, "textTransform"));
				var v = v.replace(["-webkit-auto"], ["auto"]),
					t;
				if (t = !d.letterRendering) {
					if (v = /^(left|right|justify|auto)$/.test(v)) v = o(a, "letterSpacing"), v = /^(normal|none|0px)$/.test(v);
					t = v
				}
				m = t ? b.nodeValue.split(/(\b| )/) : b.nodeValue.split("");
				U = x(h, a, ka, g);
				d.chinese && m.forEach(function (a, c) {
					/.*[\u4E00-\u9FA5].*$/.test(a) && (a = a.split(""), a.unshift(c, 1), m.splice.apply(m, a))
				});
				m.forEach(function (a, b) {
					var D, d = b < m.length - 1;
					D = e.transform.matrix;
					var f;
					if (F.rangeBounds && !D) {
						if ("none" !==
							ka || 0 !== w.trimText(a).length) D = k, d = z, f = y.createRange(), f.setStart(D, d), f.setEnd(D, d + a.length), f = f.getBoundingClientRect();
						z += a.length
					} else if (k && "string" === typeof k.nodeValue) {
						var d = d ? k.splitText(a.length) : null,
							ga = k;
						f = ga.parentNode;
						var v = y.createElement("wrapper"),
							x = ga.cloneNode(!0);
						v.appendChild(ga.cloneNode(!0));
						f.replaceChild(v, ga);
						D = D ? w.OffsetBounds(v) : w.Bounds(v);
						f.replaceChild(x, v);
						f = D;
						k = d
					}
					if (D = f) switch (d = D.left, f = D.bottom, null !== a && 0 < w.trimText(a).length && h.fillText(a, d, f), ka) {
						case "underline":
							c(h,
								D.left, Math.round(D.top + U.baseline + U.lineWidth), D.width, 1, g);
							break;
						case "overline":
							c(h, D.left, Math.round(D.top), D.width, 1, g);
							break;
						case "line-through":
							c(h, D.left, Math.ceil(D.top + U.middle + U.lineWidth), D.width, 1, g)
					}
				})
			}
		}
		function h(a) {
			return (a = e[a]) && !0 === a.succeeded ? a.img : !1
		}
		function T(a, c) {
			var b = Math.max(a.left, c.left),
				d = Math.max(a.top, c.top),
				e = Math.min(a.left + a.width, c.left + c.width),
				f = Math.min(a.top + a.height, c.top + c.height);
			return {
				left: b,
				top: d,
				width: e - b,
				height: f - d
			}
		}
		function t(c, b, d, e, f) {
			var h = a(b,
				"paddingLeft"),
				g = a(b, "paddingTop"),
				v = a(b, "paddingRight"),
				b = a(b, "paddingBottom");
			ha(c, d, 0, 0, d.width, d.height, e.left + h + f[3].width, e.top + g + f[0].width, e.width - (f[1].width + f[3].width + h + v), e.height - (f[0].width + f[2].width + g + b))
		}
		function p(a, c, b, d) {
			var e = function (a, c, b) {
				return {
					x: a.x + (c.x - a.x) * b,
					y: a.y + (c.y - a.y) * b
				}
			};
			return {
				start: a,
				startControl: c,
				endControl: b,
				end: d,
				subdivide: function (f) {
					var h = e(a, c, f),
						g = e(c, b, f),
						v = e(b, d, f),
						U = e(h, g, f),
						g = e(g, v, f),
						f = e(U, g, f);
					return [p(a, h, U, f), p(f, g, v, d)]
				},
				curveTo: function (a) {
					a.push(["bezierCurve",
						c.x, c.y, b.x, b.y, d.x, d.y
					])
				},
				curveToReversed: function (d) {
					d.push(["bezierCurve", b.x, b.y, c.x, c.y, a.x, a.y])
				}
			}
		}
		function m(a, c, b, d, e, f, h) {
			0 < c[0] || 0 < c[1] ? (a.push(["line", d[0].start.x, d[0].start.y]), d[0].curveTo(a), d[1].curveTo(a)) : a.push(["line", f, h]);
			(0 < b[0] || 0 < b[1]) && a.push(["line", e[0].start.x, e[0].start.y])
		}
		function fa(a, c, b, d, e, f, h) {
			var g = [];
			0 < c[0] || 0 < c[1] ? (g.push(["line", d[1].start.x, d[1].start.y]), d[1].curveTo(g)) : g.push(["line", a.c1[0], a.c1[1]]);
			0 < b[0] || 0 < b[1] ? (g.push(["line", f[0].start.x, f[0].start.y]),
				f[0].curveTo(g), g.push(["line", h[0].end.x, h[0].end.y]), h[0].curveToReversed(g)) : (g.push(["line", a.c2[0], a.c2[1]]), g.push(["line", a.c3[0], a.c3[1]]));
			0 < c[0] || 0 < c[1] ? (g.push(["line", e[1].end.x, e[1].end.y]), e[1].curveToReversed(g)) : g.push(["line", a.c4[0], a.c4[1]]);
			return g
		}
		function $(a, c) {
			var b = a.drawShape();
			c.forEach(function (a, c) {
				b[0 === c ? "moveTo" : a[0] + "To"].apply(null, a.slice(1))
			});
			return b
		}
		function Y(a, c, b) {
			var d = y.createElement("valuewrap");
			"lineHeight textAlign fontFamily color fontSize paddingLeft paddingTop width height border borderLeftWidth borderTopWidth".split(" ").forEach(function (c) {
				try {
					d.style[c] =
						o(a, c)
				} catch (b) {
					w.log("html2canvas: Parse: Exception caught in renderFormValue: " + b.message)
				}
			});
			d.style.borderColor = "black";
			d.style.borderStyle = "solid";
			d.style.display = "block";
			d.style.position = "absolute";
			if (/^(submit|reset|button|text|password)$/.test(a.type) || "SELECT" === a.nodeName) d.style.lineHeight = o(a, "height");
			d.style.top = c.top + "px";
			d.style.left = c.left + "px";
			c = "SELECT" === a.nodeName ? (a.options[a.selectedIndex] || 0).text : a.value;
			c || (c = a.placeholder);
			c = y.createTextNode(c);
			d.appendChild(c);
			ia.appendChild(d);
			k(a, c, b);
			ia.removeChild(d)
		}
		function ha(a) {
			a.drawImage.apply(a, Array.prototype.slice.call(arguments, 1))
		}
		function K(a, c) {
			var b = l.getComputedStyle(a, c);
			if (b && b.content && !("none" === b.content || "-moz-alt-content" === b.content || "none" === b.display)) {
				var d = b.content + "",
					e = d.substr(0, 1);
				e === d.substr(d.length - 1) && e.match(/'|"/) && (d = d.substr(1, d.length - 2));
				var e = "url" === d.substr(0, 3),
					f = q.createElement(e ? "img" : "span");
				f.className = Z + "-before " + Z + "-after";
				Object.keys(b).filter(ja).forEach(function (a) {
					try {
						f.style[a] =
							b[a]
					} catch (c) {
						w.log(["Tried to assign readonly property ", a, "Error:", c])
					}
				});
				e ? f.src = w.parseBackgroundImage(d)[0].args[0] : f.innerHTML = d;
				return f
			}
		}
		function ja(a) {
			return isNaN(l.parseInt(a, 10))
		}
		function ba(a, c, b, d) {
			var e = Math.round(d.left + b.left),
				b = Math.round(d.top + b.top);
			a.createPattern(c);
			a.translate(e, b);
			a.fill();
			a.translate(-e, -b)
		}
		function v(a, c, b, d, e, f, g, h) {
			var v = [];
			v.push(["line", Math.round(e), Math.round(f)]);
			v.push(["line", Math.round(e + g), Math.round(f)]);
			v.push(["line", Math.round(e + g), Math.round(h +
				f)]);
			v.push(["line", Math.round(e), Math.round(h + f)]);
			$(a, v);
			a.save();
			a.clip();
			ba(a, c, b, d);
			a.restore()
		}
		function U(a) {
			return a.replace("px", "")
		}
		function z(b, e, f, k) {
			var r, z, l, p, s, q, P, L, u, j = o(b, "transform") || o(b, "-webkit-transform") || o(b, "-moz-transform") || o(b, "-ms-transform") || o(b, "-o-transform");
			u = o(b, "transform-origin") || o(b, "-webkit-transform-origin") || o(b, "-moz-transform-origin") || o(b, "-ms-transform-origin") || o(b, "-o-transform-origin") || "0px 0px";
			u = u.split(" ").map(U).map(w.asFloat);
			var i;
			if (j && "none" !==
				j && (j = j.match(ea))) switch (j[1]) {
				case "matrix":
					i = j[2].split(",").map(w.trimText).map(w.asFloat)
			}
			u = {
				origin: u,
				matrix: i
			};
			i = u.matrix ? w.OffsetBounds(b) : w.Bounds(b);
			u.origin[0] += i.left;
			u.origin[1] += i.top;
			var E, j = !e ? Math.max(Math.max(y.body.scrollWidth, y.documentElement.scrollWidth), Math.max(y.body.offsetWidth, y.documentElement.offsetWidth), Math.max(y.body.clientWidth, y.documentElement.clientWidth)) : i.width,
				B = !e ? Math.max(Math.max(y.body.scrollHeight, y.documentElement.scrollHeight), Math.max(y.body.offsetHeight,
					y.documentElement.offsetHeight), Math.max(y.body.clientHeight, y.documentElement.clientHeight)) : i.height,
				M = [],
				j = {
					storage: M,
					width: j,
					height: B,
					clip: function () {
						M.push({
							type: "function",
							name: "clip",
							arguments: arguments
						})
					},
					translate: function () {
						M.push({
							type: "function",
							name: "translate",
							arguments: arguments
						})
					},
					fill: function () {
						M.push({
							type: "function",
							name: "fill",
							arguments: arguments
						})
					},
					save: function () {
						M.push({
							type: "function",
							name: "save",
							arguments: arguments
						})
					},
					restore: function () {
						M.push({
							type: "function",
							name: "restore",
							arguments: arguments
						})
					},
					fillRect: function () {
						M.push({
							type: "function",
							name: "fillRect",
							arguments: arguments
						})
					},
					createPattern: function () {
						M.push({
							type: "function",
							name: "createPattern",
							arguments: arguments
						})
					},
					drawShape: function () {
						var a = [];
						M.push({
							type: "function",
							name: "drawShape",
							arguments: a
						});
						return {
							moveTo: function () {
								a.push({
									name: "moveTo",
									arguments: arguments
								})
							},
							lineTo: function () {
								a.push({
									name: "lineTo",
									arguments: arguments
								})
							},
							arcTo: function () {
								a.push({
									name: "arcTo",
									arguments: arguments
								})
							},
							bezierCurveTo: function () {
								a.push({
									name: "bezierCurveTo",
									arguments: arguments
								})
							},
							quadraticCurveTo: function () {
								a.push({
									name: "quadraticCurveTo",
									arguments: arguments
								})
							}
						}
					},
					drawImage: function () {
						M.push({
							type: "function",
							name: "drawImage",
							arguments: arguments
						})
					},
					fillText: function () {
						M.push({
							type: "function",
							name: "fillText",
							arguments: arguments
						})
					},
					setVariable: function (a, b) {
						M.push({
							type: "variable",
							name: a,
							arguments: b
						});
						return b
					}
				}, B = j.setVariable("globalAlpha", o(b, "opacity") * (e ? e.opacity : 1));
			r = o(b, "position");
			var J;
			J = ["Top", "Right", "Bottom", "Left"].map(function (c) {
				return {
					width: a(b,
						"border" + c + "Width"),
					color: o(b, "border" + c + "Color")
				}
			});
			u = {
				ctx: j,
				opacity: B,
				cssPosition: r,
				borders: J,
				transform: u,
				clip: e && e.clip ? w.Extend({}, e.clip) : null
			};
			r = (B = "static" !== u.cssPosition) ? o(b, "zIndex") : "auto";
			J = o(b, "opacity");
			var W = "none" !== o(b, "cssFloat");
			u.zIndex = j = {
				zindex: r,
				children: []
			};
			j.isPositioned = B;
			j.isFloated = W;
			j.opacity = J;
			j.ownStacking = "auto" !== r || 1 > J;
			e && e.zIndex.children.push(u);
			!0 === d.useOverflow && (!0 === /(hidden|scroll|auto)/.test(o(b, "overflow")) && !1 === /(BODY)/i.test(b.nodeName)) && (u.clip = u.clip ?
				T(u.clip, i) : i);
			var j = u.borders,
				Q = u.ctx,
				e = u.clip,
				B = {
					left: i.left + j[3].width,
					top: i.top + j[0].width,
					width: i.width - (j[1].width + j[3].width),
					height: i.height - (j[0].width + j[2].width)
				};
			e && (B = T(B, e));
			e = B;
			J = i.left;
			var W = i.top,
				R = i.width,
				S = i.height,
				V, C, A, H, I, N, n;
			n = ["TopLeft", "TopRight", "BottomRight", "BottomLeft"].map(function (a) {
				return o(b, "border" + a + "Radius")
			});
			var B = i.left,
				G = i.top;
			q = i.width;
			P = i.height;
			z = n[0][0];
			l = n[0][1];
			p = n[1][0];
			s = n[1][1];
			A = n[2][0];
			H = n[2][1];
			L = n[3][0];
			V = n[3][1];
			var F = q - p;
			I = P - H;
			var ja = q - A;
			C =
				P - V;
			r = X(B, G, z, l).topLeft.subdivide(0.5);
			z = X(B + j[3].width, G + j[0].width, Math.max(0, z - j[3].width), Math.max(0, l - j[0].width)).topLeft.subdivide(0.5);
			l = X(B + F, G, p, s).topRight.subdivide(0.5);
			p = X(B + Math.min(F, q + j[3].width), G + j[0].width, F > q + j[3].width ? 0 : p - j[3].width, s - j[0].width).topRight.subdivide(0.5);
			s = X(B + ja, G + I, A, H).bottomRight.subdivide(0.5);
			q = X(B + Math.min(ja, q + j[3].width), G + Math.min(I, P + j[0].width), Math.max(0, A - j[1].width), Math.max(0, H - j[2].width)).bottomRight.subdivide(0.5);
			P = X(B, G + C, L, V).bottomLeft.subdivide(0.5);
			L = X(B + j[3].width, G + C, Math.max(0, L - j[3].width), Math.max(0, V - j[2].width)).bottomLeft.subdivide(0.5);
			G = [];
			switch (o(b, "backgroundClip")) {
				case "content-box":
				case "padding-box":
					m(G, n[0], n[1], z, p, i.left + j[3].width, i.top + j[0].width);
					m(G, n[1], n[2], p, q, i.left + i.width - j[1].width, i.top + j[0].width);
					m(G, n[2], n[3], q, L, i.left + i.width - j[1].width, i.top + i.height - j[2].width);
					m(G, n[3], n[0], L, z, i.left + j[3].width, i.top + i.height - j[2].width);
					break;
				default:
					m(G, n[0], n[1], r, l, i.left, i.top), m(G, n[1], n[2], l, s, i.left + i.width, i.top),
					m(G, n[2], n[3], s, P, i.left + i.width, i.top + i.height), m(G, n[3], n[0], P, r, i.left, i.top + i.height)
			}
			B = [];
			for (V = 0; 4 > V; V++)
				if (0 < j[V].width) {
					C = J;
					A = W;
					H = R;
					I = S - j[2].width;
					switch (V) {
						case 0:
							I = j[0].width;
							N = fa({
								c1: [C, A],
								c2: [C + H, A],
								c3: [C + H - j[1].width, A + I],
								c4: [C + j[3].width, A + I]
							}, n[0], n[1], r, z, l, p);
							break;
						case 1:
							C = J + R - j[1].width;
							H = j[1].width;
							N = fa({
								c1: [C + H, A],
								c2: [C + H, A + I + j[2].width],
								c3: [C, A + I],
								c4: [C, A + j[0].width]
							}, n[1], n[2], l, p, s, q);
							break;
						case 2:
							A = A + S - j[2].width;
							I = j[2].width;
							N = fa({
								c1: [C + H, A + I],
								c2: [C, A + I],
								c3: [C + j[3].width,
									A
								],
								c4: [C + H - j[3].width, A]
							}, n[2], n[3], s, q, P, L);
							break;
						case 3:
							H = j[3].width, N = fa({
								c1: [C, A + I + j[2].width],
								c2: [C, A],
								c3: [C + H, A + j[0].width],
								c4: [C + H, A + I]
							}, n[3], n[0], P, L, r, z)
					}
					B.push({
						args: N,
						color: j[V].color
					})
				}
			N = aa.test(b.nodeName) ? "#efefef" : o(b, "backgroundColor");
			$(Q, G);
			Q.save();
			Q.clip();
			if (0 < e.height && 0 < e.width && !k) {
				c(Q, i.left, i.top, i.width, i.height, N);
				r = o(b, "backgroundImage");
				k = w.parseBackgroundImage(r);
				for (N = k.length; N--;)
					if (r = k[N], r.args && 0 !== r.args.length)
						if (W = h("url" === r.method ? r.args[0] : r.value)) switch (S =
							b, r = e, J = Q, n = W, W = N, z = w.BackgroundSize(S, r, n, W), R = w.BackgroundPosition(S, r, n, W, z), S = o(S, "backgroundRepeat").split(",").map(w.trimText), n.width === z.width && n.height === z.height || (l = void 0, p = y.createElement("canvas"), p.width = z.width, p.height = z.height, l = p.getContext("2d"), ha(l, n, 0, 0, n.width, n.height, 0, 0, z.width, z.height), n = p), S = S[W] || S[0], S) {
							case "repeat-x":
								v(J, n, R, r, r.left, r.top + R.top, 99999, n.height);
								break;
							case "repeat-y":
								v(J, n, R, r, r.left + R.left, r.top, n.width, 99999);
								break;
							case "no-repeat":
								v(J, n, R, r, r.left +
									R.left, r.top + R.top, n.width, n.height);
								break;
							default:
								ba(J, n, R, {
									top: r.top,
									left: r.left,
									width: n.width,
									height: n.height
								})
						} else w.log("html2canvas: Error loading background:", r)
			} else k && (u.backgroundColor = N);
			Q.restore();
			B.forEach(function (a) {
				var b = a.args,
					a = a.color;
				if (a !== "transparent") {
					Q.setVariable("fillStyle", a);
					$(Q, b);
					Q.fill()
				}
			});
			if (!f && (f = K(b, ":before"), k = K(b, ":after"), f || k))
				if (f && (b.className += " " + Z + "-before", b.parentNode.insertBefore(f, b), la(f, u, !0), b.parentNode.removeChild(f), b.className = b.className.replace(Z +
					"-before", "").trim()), k) b.className += " " + Z + "-after", b.appendChild(k), la(k, u, !0), b.removeChild(k), b.className = b.className.replace(Z + "-after", "").trim();
			switch (b.nodeName) {
				case "IMG":
					(E = h(b.getAttribute("src"))) ? t(Q, b, E, i, j) : w.log("html2canvas: Error loading <img>:" + b.getAttribute("src"));
					break;
				case "INPUT":
					/^(text|url|email|submit|button|reset)$/.test(b.type) && 0 < (b.value || b.placeholder || "").length && Y(b, i, u);
					break;
				case "TEXTAREA":
					0 < (b.value || b.placeholder || "").length && Y(b, i, u);
					break;
				case "SELECT":
					0 <
						(b.options || b.placeholder || "").length && Y(b, i, u);
					break;
				case "LI":
					var O;
					E = u.ctx;
					f = o(b, "listStyleType");
					if (/^(decimal|decimal-leading-zero|upper-alpha|upper-latin|upper-roman|lower-alpha|lower-greek|lower-latin|lower-roman)$/i.test(f)) {
						i = -1;
						j = 1;
						k = b.parentNode.childNodes;
						if (b.parentNode) {
							for (; k[++i] !== b;) 1 === k[i].nodeType && j++;
							i = j
						} else i = -1;
						switch (f) {
							case "decimal":
								O = i;
								break;
							case "decimal-leading-zero":
								O = 1 === i.toString().length ? "0" + i.toString() : i.toString();
								break;
							case "upper-roman":
								O = g.Generate.ListRoman(i);
								break;
							case "lower-roman":
								O = g.Generate.ListRoman(i).toLowerCase();
								break;
							case "lower-alpha":
								O = g.Generate.ListAlpha(i).toLowerCase();
								break;
							case "upper-alpha":
								O = g.Generate.ListAlpha(i)
						}
						O += ". ";
						i = y.createElement("boundelement");
						i.style.display = "inline";
						j = b.style.listStyleType;
						b.style.listStyleType = "none";
						i.appendChild(y.createTextNode(O));
						b.insertBefore(i, b.firstChild);
						f = w.Bounds(i);
						b.removeChild(i);
						b.style.listStyleType = j;
						x(E, b, "none", o(b, "color"));
						"inside" === o(b, "listStylePosition") && (E.setVariable("textAlign",
							"left"), i = e.left, f = f.bottom, null !== O && 0 < w.trimText(O).length && E.fillText(O, i, f))
					}
					break;
				case "CANVAS":
					t(Q, b, b, i, j)
			}
			return u
		}
		function la(a, b, c) {
			"none" !== o(a, "display") && ("hidden" !== o(a, "visibility") && !a.hasAttribute("data-html2canvas-ignore")) && (b = z(a, b, c, !1) || b, aa.test(a.nodeName) || P(a, b, c))
		}
		function P(a, b, c) {
			w.Children(a).forEach(function (d) {
				d.nodeType === d.ELEMENT_NODE ? la(d, b, c) : d.nodeType === d.TEXT_NODE && k(a, d, b)
			})
		}
		l.scroll(0, 0);
		var L = d.elements === s ? q.body : d.elements[0],
			y = L.ownerDocument,
			w = g.Util,
			F = w.Support(d, y),
			aa = RegExp("(" + d.ignoreElements + ")"),
			ia = y.body,
			o = w.getCSS,
			Z = "___html2canvas___pseudoelement",
			E = y.createElement("style");
		E.innerHTML = "." + Z + '-before:before { content: "" !important; display: none !important; }.' + Z + '-after:after { content: "" !important; display: none !important; }';
		ia.appendChild(E);
		var e = e || {}, X, ca = 4 * ((Math.sqrt(2) - 1) / 3);
		X = function (a, b, c, d) {
			var e = c * ca,
				f = d * ca,
				c = a + c,
				d = b + d;
			return {
				topLeft: p({
					x: a,
					y: d
				}, {
					x: a,
					y: d - f
				}, {
					x: c - e,
					y: b
				}, {
					x: c,
					y: b
				}),
				topRight: p({
					x: a,
					y: b
				}, {
					x: a + e,
					y: b
				}, {
					x: c,
					y: d - f
				}, {
					x: c,
					y: d
				}),
				bottomRight: p({
					x: c,
					y: b
				}, {
					x: c,
					y: b + f
				}, {
					x: a + e,
					y: d
				}, {
					x: a,
					y: d
				}),
				bottomLeft: p({
					x: c,
					y: d
				}, {
					x: c - e,
					y: d
				}, {
					x: a,
					y: b + f
				}, {
					x: a,
					y: b
				})
			}
		};
		var ea = /(matrix)\((.+)\)/,
			ma = o(q.documentElement, "backgroundColor"),
			da = w.isTransparent(ma) && L === q.body,
			na = z(L, null, !1, da);
		P(L, na);
		da && (ma = na.backgroundColor);
		ia.removeChild(E);
		return {
			backgroundColor: ma,
			stack: na
		}
	};
	g.Preload = function (e) {
		function d() {
			t.log("html2canvas: start: images: " + h.numLoaded + " / " + h.numTotal + " (failed: " + h.numFailed + ")");
			!h.firstRun && h.numLoaded >=
				h.numTotal && (t.log("Finished loading images: # " + h.numTotal + " (failed: " + h.numFailed + ")"), "function" === typeof e.complete && e.complete(h))
		}
		function a(a, b, c) {
			var f, g = e.proxy,
				m;
			K.href = a;
			a = K.href;
			f = "html2canvas_" + E++;
			c.callbackname = f;
			g = -1 < g.indexOf("?") ? g + "&" : g + "?";
			g += "url=" + encodeURIComponent(a) + "&callback=" + f;
			m = $.createElement("script");
			l[f] = function (a) {
				"error:" === a.substring(0, 6) ? (c.succeeded = !1, h.numLoaded++, h.numFailed++, d()) : (k(b, c), b.src = a);
				l[f] = s;
				try {
					delete l[f]
				} catch (e) {}
				m.parentNode.removeChild(m);
				m = null;
				delete c.script;
				delete c.callbackname
			};
			m.setAttribute("type", "text/javascript");
			m.setAttribute("src", g);
			c.script = m;
			l.document.body.appendChild(m)
		}
		function c(a, b) {
			var c = l.getComputedStyle(a, b),
				d = c.content;
			"url" === d.substr(0, 3) && p.loadImage(g.Util.parseBackgroundImage(d)[0].args[0]);
			f(c.backgroundImage, a)
		}
		function b(a) {
			return a && a.method && a.args && 0 < a.args.length
		}
		function f(a, c) {
			var e;
			g.Util.parseBackgroundImage(a).filter(b).forEach(function (a) {
				if ("url" === a.method) p.loadImage(a.args[0]);
				else if (a.method.match(/\-?gradient$/)) {
					e ===
						s && (e = g.Util.Bounds(c));
					var a = a.value,
						b = g.Generate.Gradient(a, e);
					b !== s && (h[a] = {
						img: b,
						succeeded: !0
					}, h.numTotal++, h.numLoaded++, d())
				}
			})
		}
		function x(a) {
			var b = !1;
			try {
				t.Children(a).forEach(x)
			} catch (d) {}
			try {
				b = a.nodeType
			} catch (e) {
				b = !1, t.log("html2canvas: failed to access some element's nodeType - Exception: " + e.message)
			}
			if (1 === b || b === s) {
				c(a, ":before");
				c(a, ":after");
				try {
					f(t.getCSS(a, "backgroundImage"), a)
				} catch (g) {
					t.log("html2canvas: failed to get background-image - Exception: " + g.message)
				}
				f(a)
			}
		}
		function k(b,
			c) {
			b.onload = function () {
				c.timer !== s && l.clearTimeout(c.timer);
				h.numLoaded++;
				c.succeeded = !0;
				b.onerror = b.onload = null;
				d()
			};
			b.onerror = function () {
				if ("anonymous" === b.crossOrigin && (l.clearTimeout(c.timer), e.proxy)) {
					var f = b.src;
					b = new Image;
					c.img = b;
					b.src = f;
					a(b.src, b, c);
					return
				}
				h.numLoaded++;
				h.numFailed++;
				c.succeeded = !1;
				b.onerror = b.onload = null;
				d()
			}
		}
		var h = {
			numLoaded: 0,
			numFailed: 0,
			numTotal: 0,
			cleanupDone: !1
		}, T, t = g.Util,
			p, m, E = 0;
		m = e.elements[0] || q.body;
		var $ = m.ownerDocument,
			Y = m.getElementsByTagName("img"),
			ha = Y.length,
			K = $.createElement("a"),
			F;
		F = (new Image).crossOrigin !== s;
		var ba;
		K.href = l.location.href;
		T = K.protocol + K.host;
		p = {
			loadImage: function (b) {
				var c, d;
				b && h[b] === s && (c = new Image, b.match(/data:image\/.*;base64,/i) ? (c.src = b.replace(/url\(['"]{0,}|['"]{0,}\)$/ig, ""), d = h[b] = {
					img: c
				}, h.numTotal++, k(c, d)) : (K.href = b, K.href = K.href, K.protocol + K.host === T || !0 === e.allowTaint ? (d = h[b] = {
						img: c
					}, h.numTotal++, k(c, d), c.src = b) : F && !e.allowTaint && e.useCORS ? (c.crossOrigin = "anonymous", d = h[b] = {
						img: c
					}, h.numTotal++, k(c, d), c.src = b) : e.proxy &&
					(d = h[b] = {
						img: c
					}, h.numTotal++, a(b, c, d))))
			},
			cleanupDOM: function (a) {
				var b, c;
				if (!h.cleanupDone) {
					a && "string" === typeof a ? t.log("html2canvas: Cleanup because: " + a) : t.log("html2canvas: Cleanup after timeout: " + e.timeout + " ms.");
					for (c in h)
						if (h.hasOwnProperty(c) && (b = h[c], "object" === typeof b && b.callbackname && b.succeeded === s)) {
							l[b.callbackname] = s;
							try {
								delete l[b.callbackname]
							} catch (f) {}
							b.script && b.script.parentNode && (b.script.setAttribute("src", "about:blank"), b.script.parentNode.removeChild(b.script));
							h.numLoaded++;
							h.numFailed++;
							t.log("html2canvas: Cleaned up failed img: '" + c + "' Steps: " + h.numLoaded + " / " + h.numTotal)
						}
					l.stop !== s ? l.stop() : q.execCommand !== s && q.execCommand("Stop", !1);
					q.close !== s && q.close();
					h.cleanupDone = !0;
					a && "string" === typeof a || d()
				}
			},
			renderingDone: function () {
				ba && l.clearTimeout(ba)
			}
		};
		0 < e.timeout && (ba = l.setTimeout(p.cleanupDOM, e.timeout));
		t.log("html2canvas: Preload starts: finding background-images");
		h.firstRun = !0;
		x(m);
		t.log("html2canvas: Preload: Finding images");
		for (m = 0; m < ha; m += 1) p.loadImage(Y[m].getAttribute("src"));
		h.firstRun = !1;
		t.log("html2canvas: Preload: Done.");
		h.numTotal === h.numLoaded && d();
		return p
	};
	g.Renderer = function (e, d) {
		var a = d.renderer;
		if ("string" === typeof d.renderer && g.Renderer[a] !== s) a = g.Renderer[a](d);
		else if ("function" === typeof a) a = a(d);
		else throw Error("Unknown renderer"); if ("function" !== typeof a) throw Error("Invalid renderer defined");
		var c = q,
			b = function (a) {
				Object.keys(a).sort().forEach(function (c) {
					var d = [],
						e = [],
						g = [],
						k = [];
					a[c].forEach(function (a) {
						a.node.zIndex.isPositioned || 1 > a.node.zIndex.opacity ?
							g.push(a) : a.node.zIndex.isFloated ? e.push(a) : d.push(a)
					});
					(function Y(a) {
						a.forEach(function (a) {
							k.push(a);
							a.children && Y(a.children)
						})
					})(d.concat(e, g));
					k.forEach(function (a) {
						a.context ? b(a.context) : f.push(a.node)
					})
				})
			}, f = [],
			x = function (a, b, c) {
				var d = "auto" === b.zIndex.zindex ? 0 : Number(b.zIndex.zindex),
					e = a,
					f = b.zIndex.isPositioned,
					g = b.zIndex.isFloated,
					k = {
						node: b
					}, l = c;
				if (b.zIndex.ownStacking) e = k.context = {
					"!": [{
						node: b,
						children: []
					}]
				}, l = s;
				else if (f || g) l = k.children = [];
				0 === d && c ? c.push(k) : (a[d] || (a[d] = []), a[d].push(k));
				b.zIndex.children.forEach(function (a) {
					x(e, a, l)
				})
			}, k = {};
		x(k, e.stack);
		b(k);
		return a(e, d, c, f, g)
	};
	g.Util.Support = function (e, d) {
		function a() {
			var a = new Image,
				b = d.createElement("canvas"),
				c = b.getContext === s ? !1 : b.getContext("2d");
			if (!1 === c) return !1;
			b.width = b.height = 10;
			a.src = "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='10'><foreignObject width='10' height='10'><div xmlns='http://www.w3.org/1999/xhtml' style='width:10;height:10;'>sup</div></foreignObject></svg>";
			try {
				c.drawImage(a,
					0, 0), b.toDataURL()
			} catch (e) {
				return !1
			}
			g.Util.log("html2canvas: Parse: SVG powered rendering available");
			return !0
		}
		var c, b, f = !1;
		d.createRange && (c = d.createRange(), c.getBoundingClientRect && (b = d.createElement("boundtest"), b.style.height = "123px", b.style.display = "block", d.body.appendChild(b), c.selectNode(b), c = c.getBoundingClientRect(), c = c.height, 123 === c && (f = !0), d.body.removeChild(b)));
		return {
			rangeBounds: f,
			svgRendering: e.svgRendering && a()
		}
	};
	l.html2canvas = function (e, d) {
		var e = e.length ? e : [e],
			a, c, b = {
				logging: !1,
				elements: e,
				background: "#fff",
				proxy: null,
				timeout: 0,
				useCORS: !1,
				allowTaint: !1,
				svgRendering: !1,
				ignoreElements: "IFRAME|OBJECT|PARAM",
				useOverflow: !0,
				letterRendering: !1,
				chinese: !1,
				width: null,
				height: null,
				taintTest: !0,
				renderer: "Canvas"
			}, b = g.Util.Extend(d, b);
		g.logging = b.logging;
		b.complete = function (d) {
			if (!("function" === typeof b.onpreloaded && !1 === b.onpreloaded(d)) && (a = g.Parse(d, b), !("function" === typeof b.onparsed && !1 === b.onparsed(a)) && (c = g.Renderer(a, b), "function" === typeof b.onrendered))) b.onrendered(c)
		};
		l.setTimeout(function () {
				g.Preload(b)
			},
			0);
		return {
			render: function (a, c) {
				return g.Renderer(a, g.Util.Extend(c, b))
			},
			parse: function (a, c) {
				return g.Parse(a, g.Util.Extend(c, b))
			},
			preload: function (a) {
				return g.Preload(g.Util.Extend(a, b))
			},
			log: g.Util.log
		}
	};
	l.html2canvas.log = g.Util.log;
	l.html2canvas.Renderer = {
		Canvas: s
	};
	g.Renderer.Canvas = function (e) {
		var e = e || {}, d = q,
			a = [],
			c = q.createElement("canvas"),
			b = c.getContext("2d"),
			f = g.Util,
			l = e.canvas || d.createElement("canvas");
		return function (g, h, q, t, p) {
			var m = l.getContext("2d"),
				E, F = g.stack;
			l.width = l.style.width =
				h.width || F.ctx.width;
			l.height = l.style.height = h.height || F.ctx.height;
			E = m.fillStyle;
			m.fillStyle = f.isTransparent(F.backgroundColor) && h.background !== s ? h.background : g.backgroundColor;
			m.fillRect(0, 0, l.width, l.height);
			m.fillStyle = E;
			t.forEach(function (g) {
				m.textBaseline = "bottom";
				m.save();
				g.transform.matrix && (m.translate(g.transform.origin[0], g.transform.origin[1]), m.transform.apply(m, g.transform.matrix), m.translate(-g.transform.origin[0], -g.transform.origin[1]));
				g.clip && (m.beginPath(), m.rect(g.clip.left, g.clip.top,
					g.clip.width, g.clip.height), m.clip());
				g.ctx.storage && g.ctx.storage.forEach(function (g) {
					var h = m;
					switch (g.type) {
						case "variable":
							h[g.name] = g.arguments;
							break;
						case "function":
							switch (g.name) {
								case "createPattern":
									if (g.arguments[0].width > 0 && g.arguments[0].height > 0) try {
										h.fillStyle = h.createPattern(g.arguments[0], "repeat")
									} catch (l) {
										f.log("html2canvas: Renderer: Error creating pattern", l.message)
									}
									break;
								case "drawShape":
									g = g.arguments;
									h.beginPath();
									g.forEach(function (a) {
										h[a.name].apply(h, a.arguments)
									});
									h.closePath();
									break;
								case "drawImage":
									if (g.arguments[8] > 0 && g.arguments[7] > 0) {
										var k;
										if (!(k = !e.taintTest))
											if (k = e.taintTest) a: {
												if (a.indexOf(g.arguments[0].src) === -1) {
													b.drawImage(g.arguments[0], 0, 0);
													try {
														b.getImageData(0, 0, 1, 1)
													} catch (p) {
														c = d.createElement("canvas");
														b = c.getContext("2d");
														k = false;
														break a
													}
													a.push(g.arguments[0].src)
												}
												k = true
											}
											k && h.drawImage.apply(h, g.arguments)
									}
									break;
								default:
									h[g.name].apply(h, g.arguments)
							}
					}
				});
				m.restore()
			});
			f.log("html2canvas: Renderer: Canvas renderer done - returning canvas obj");
			return 1 ===
				h.elements.length && "object" === typeof h.elements[0] && "BODY" !== h.elements[0].nodeName ? (g = p.Util.Bounds(h.elements[0]), q = q.createElement("canvas"), q.width = Math.ceil(g.width), q.height = Math.ceil(g.height), m = q.getContext("2d"), m.drawImage(l, g.left, g.top, g.width, g.height, 0, 0, g.width, g.height), l = null, q) : l
		}
	}
})(window, document);
cp.rtInherits = function (a, b) {
	function c() {}
	c.prototype = b.prototype;
	a.prototype = new c;
	a.prototype.constructor = a;
	a.baseConstructor = b;
	a.superClass = b.prototype
};
cp.HexToRGBA = function (a, b) {
	if (void 0 == a) return a;
	var c = a;
	"#" == c.charAt(0) && (c = c.substring(1));
	if (6 > c.length) return a;
	var d = parseInt(c.substring(0, 2), 16),
		e = parseInt(c.substring(2, 4), 16),
		c = parseInt(c.substring(4, 6), 16);
	return "rgba(" + d + "," + e + "," + c + "," + b + ")"
};
cp.RuntimeDialogSeparator = function (a, b, c) {
	this.m_parent = a;
	this.m_XPos = b;
	this.m_YPos = c;
	this.m_color = "#000000";
	this.m_alpha = 0.5;
	this.m_size = 10;
	this.m_strokeWidth = 2;
	this.m_shadowColor = "#FFFFFF";
	this.m_shadowAlpha = 0.65;
	this.m_shadowAngle = 270;
	this.m_shadowBlur = 2;
	this.m_shadowDistance = 1
};
cp.RuntimeDialogSeparator.prototype = {
	setColor: function (a) {
		this.m_color = a
	},
	setAlpha: function (a) {
		this.m_alpha = a
	},
	setSize: function (a) {
		this.m_size = a
	},
	setShadowColor: function (a) {
		this.m_shadowColor = a
	},
	getComponentDiv: function () {
		var a = document.createElement("div");
		a.style.height = this.m_strokeWidth + "px";
		a.style.backgroundColor = this.m_color;
		a.style.opacity = this.m_alpha;
		a.style.position = "relative";
		a.style.marginLeft = this.m_XPos + "px";
		a.style.marginRight = this.m_XPos + "px";
		a.style.top = this.m_YPos + "px";
		"webkitBoxShadow" in
			a.style ? a.style.webkitBoxShadow = this.m_shadowDistance + "px " + this.m_shadowDistance + "px " + this.m_shadowBlur + "px " + this.m_shadowColor : "MozBoxShadow" in a.style ? a.style.MozBoxShadow = this.m_shadowDistance + "px " + this.m_shadowDistance + "px " + this.m_shadowBlur + "px " + this.m_shadowColor : a.style.boxShadow = this.m_shadowDistance + "px " + this.m_shadowDistance + "px " + this.m_shadowBlur + "px " + this.m_shadowColor;
		return a
	}
};
cp.RuntimeDialogText = function (a, b, c) {
	this.m_parent = a;
	this.m_fontName = "Myriad Pro";
	this.m_XPos = b;
	this.m_YPos = c;
	this.m_fontSize = 14;
	this.m_fontColor = "#ff0000";
	this.m_text = "Sample Text";
	this.m_multiline = !1;
	this.m_maxWidth = 400;
	this.m_maxHeight = 80;
	this.m_shadowColor = "#FFFFFF";
	this.m_shadowAlpha = 0.35;
	this.m_shadowAngle = 270;
	this.m_shadowBlur = 2;
	this.m_shadowDistance = 1
};
cp.RuntimeDialogText.prototype = {
	setFontName: function (a) {
		this.m_fontName = a
	},
	setFontSize: function (a) {
		this.m_fontSize = a
	},
	setFontColor: function (a) {
		this.m_fontColor = a
	},
	setText: function (a) {
		this.m_text = a
	},
	setMultiline: function (a) {
		this.m_multiline = a
	},
	setMaxWidth: function (a) {
		this.m_maxWidth = a
	},
	setShadowColor: function (a) {
		this.m_shadowColor = a
	},
	getTruncatedText: function (a) {
		if (void 0 == a) return this.m_text;
		var b = this.getMaxPossibleWidth(this.m_text);
		if (b <= a) return this.m_text;
		for (var c = this.m_text, d = c + "...", b =
				this.getMaxPossibleWidth(d); 0 < d.length && b > a;) c = c.substring(0, c.length - 1), d = c + "...", b = this.getMaxPossibleWidth(d);
		return d
	},
	getMaxPossibleWidth: function (a) {
		var b = document.createElement("div");
		b.style.color = this.m_fontColor;
		b.style.fontFamily = this.m_fontName;
		b.style.fontSize = this.m_fontSize + "px";
		b.style.width = "auto";
		b.style.height = "auto";
		b.style.position = "absolute";
		b.style.visibilty = "hidden";
		b.innerHTML = a;
		document.body.appendChild(b);
		a = b.clientWidth + 4;
		document.body.removeChild(b);
		return a
	},
	getComponentDiv: function () {
		var a =
			document.createElement("div");
		a.style.color = this.m_fontColor;
		a.style.fontFamily = this.m_fontName;
		a.style.fontSize = this.m_fontSize + "px";
		a.style.textAlign = "left";
		a.style.left = this.m_XPos + "px";
		a.style.top = this.m_YPos + "px";
		a.style.position = "relative";
		a.style.opacity = 1;
		var b = cp.HexToRGBA(this.m_shadowColor, this.m_shadowAlpha);
		a.style.textShadow = this.m_shadowDistance + "px " + this.m_shadowDistance + "px " + this.m_shadowBlur + "px " + b;
		a.innerHTML = this.m_text;
		return a
	}
};
cp.RuntimeDialogTextInput = function (a, b, c) {
	this.m_parent = a;
	this.m_fontName = "Myriad Pro";
	this.m_XPos = b;
	this.m_YPos = c;
	this.m_fontSize = 14;
	this.m_fontColor = "#ff0000";
	this.m_maxWidth = 400;
	this.m_maxHeight = 80;
	this.m_label = "Text Input :";
	this.m_textInput = void 0
};
cp.RuntimeDialogTextInput.prototype = {
	setFontName: function (a) {
		this.m_fontName = a
	},
	setFontSize: function (a) {
		this.m_fontSize = a
	},
	setFontColor: function (a) {
		this.m_fontColor = a
	},
	setText: function (a) {
		this.m_text = a
	},
	setLabel: function (a) {
		this.m_label = a
	},
	setMaxWidth: function (a) {
		this.m_maxWidth = a
	},
	getValue: function () {
		return this.m_textInput.value
	},
	getComponentDiv: function () {
		var a = document.createElement("div");
		a.style.left = this.m_XPos + "px";
		a.style.top = this.m_YPos + "px";
		a.style.width = this.m_maxWidth + "px";
		var b = document.createElement("table");
		b.style.width = "100%";
		b.style.height = "100%";
		a.appendChild(b);
		var c = document.createElement("tr");
		c.style.width = "100%";
		c.style.height = "50%";
		b.appendChild(c);
		var d = document.createElement("td");
		d.style.width = "100%";
		d.style.height = "100%";
		d.style.paddingBottom = "0em";
		c.appendChild(d);
		c = new cp.RuntimeDialogText(d, this.MESSAGE_DEFAULT_LEFT_OFFSET, 0);
		c.setText(this.m_label);
		c.setFontColor(this.m_fontColor);
		c.setFontName(this.m_fontName);
		c.setFontSize(14);
		c.setMultiline(!0);
		c = c.getComponentDiv();
		c.style.width =
			"100%";
		d.appendChild(c);
		d = document.createElement("tr");
		d.style.width = "100%";
		d.style.height = "50%";
		b.appendChild(d);
		b = document.createElement("td");
		b.style.width = "100%";
		b.style.height = "100%";
		d.appendChild(b);
		d = document.createElement("input");
		d.type = "text";
		d.value = this.m_text;
		d.style.color = "#000000";
		d.style.fontFamily = this.m_fontName;
		d.style.fontSize = this.m_fontSize + "px";
		d.style.width = "100%";
		d.style.opacity = 1;
		this.m_textInput = d;
		b.appendChild(d);
		a.style.position = "relative";
		return a
	}
};
cp.RuntimeDialogPanel = function (a, b, c, d, e) {
	this.m_parent = a;
	this.m_fillColor = "#CCCCCC";
	this.m_alpha = 0.5;
	this.m_strokeColor = "#666666";
	this.m_XPos = b;
	this.m_YPos = c;
	this.m_strokeWidth = 1;
	this.m_width = d;
	this.m_height = e;
	this.m_roundness = 20;
	this.m_minHeight = this.m_minWidth = 100;
	this.m_maxWidth = 493;
	this.m_maxHeight = 219;
	this.m_showShadow = !1;
	this.m_shadowColor = "#000000";
	this.m_shadowAlpha = 0.65;
	this.m_shadowAngle = 270;
	this.m_shadowDistance = this.m_shadowBlur = 2
};
cp.RuntimeDialogPanel.prototype = {
	setFillColor: function (a) {
		this.m_fillColor = a
	},
	setAlpha: function (a) {
		this.m_alpha = a
	},
	setStrokeColor: function (a) {
		this.m_strokeColor = a
	},
	setStrokeWidth: function (a) {
		this.m_strokeWidth = a
	},
	setWidth: function (a) {
		this.m_width = a
	},
	getWidth: function () {
		var a = this.m_width;
		a < this.m_minWidth && (a = this.m_minWidth);
		a > this.m_maxWidth && (a = this.m_maxWidth);
		return a
	},
	setHeight: function (a) {
		this.m_height = a
	},
	setMinWidth: function (a) {
		a < this.m_maxWidth && (this.m_minWidth = a)
	},
	setMinHeight: function (a) {
		a <
			this.m_maxHeight && (this.m_minHeight = a)
	},
	setMaxWidth: function (a) {
		a > this.m_minWidth && (this.m_maxWidth = a)
	},
	setMaxHeight: function (a) {
		a > this.m_minHeight && (this.m_maxHeight = a)
	},
	setRoundness: function (a) {
		this.m_roundness = a
	},
	showShadow: function (a) {
		this.m_showShadow = a
	},
	setShadowColor: function (a) {
		this.m_shadowColor = a
	},
	getComponentDiv: function () {
		var a = this.m_width,
			b = this.m_height;
		a < this.m_minWidth && (a = this.m_minWidth);
		a > this.m_maxWidth && (a = this.m_maxWidth);
		b < this.m_minHeight && (b = this.m_minHeight);
		b > this.m_maxHeight &&
			(b = this.m_maxHeight);
		var c = document.createElement("div");
		c.style.width = a + "px";
		c.style.height = b + "px";
		c.style.background = cp.HexToRGBA(this.m_fillColor, this.m_alpha);
		c.style.border = this.m_strokeWidth + "px solid " + this.m_strokeColor;
		c.style.borderRadius = this.m_roundness + "px";
		c.style.left = this.m_XPos + "px";
		c.style.top = this.m_YPos + "px";
		this.m_showShadow && ("webkitBoxShadow" in c.style ? c.style.webkitBoxShadow = this.m_shadowDistance + "px " + this.m_shadowDistance + "px " + this.m_shadowBlur + "px " + this.m_shadowColor :
			"MozBoxShadow" in c.style ? c.style.MozBoxShadow = this.m_shadowDistance + "px " + this.m_shadowDistance + "px " + this.m_shadowBlur + "px " + this.m_shadowColor : c.style.boxShadow = this.m_shadowDistance + "px " + this.m_shadowDistance + "px " + this.m_shadowBlur + "px " + this.m_shadowColor);
		return c
	}
};
cp.RuntimeDialogButton = function (a, b, c, d, e) {
	cp.RuntimeDialogButton.baseConstructor.call(this, a, b, c, d, e);
	this.m_label = void 0;
	this.m_labelText = "OK";
	this.m_labelFontName = "Myriad Pro";
	this.m_labelFontSize = 16;
	this.m_labelFontColor = "#000000";
	this.m_labelShadowColor = "#FFFFFF";
	this.BUTTON_LABEL_TOP_PADDING = this.BUTTON_LABEL_LEFT_PADDING = 5;
	this.m_fillColor = "#CDCDCD";
	this.m_alpha = 0.3;
	this.m_strokeColor = "#000000";
	this.m_strokeWidth = 1;
	this.m_maxWidth = 230;
	this.m_minWidth = 40;
	this.m_minHeight = m_maxHeight = 25;
	this.m_roundness =
		10
};
cp.rtInherits(cp.RuntimeDialogButton, cp.RuntimeDialogPanel);
cp.RuntimeDialogButton.prototype.setButtonLabel = function (a) {
	this.m_labelText = a
};
cp.RuntimeDialogButton.prototype.setButtonLabelFontName = function (a) {
	this.m_labelFontName = a
};
cp.RuntimeDialogButton.prototype.setButtonLabelFontSize = function (a) {
	this.m_labelFontSize = a
};
cp.RuntimeDialogButton.prototype.setButtonLabelFontColor = function (a) {
	this.m_labelFontColor = a
};
cp.RuntimeDialogButton.prototype.setButtonLabelShadowColor = function (a) {
	this.m_labelShadowColor = a
};
cp.RuntimeDialogButton.prototype.setHandler = function (a) {
	this.m_handler = a
};
cp.RuntimeDialogButton.prototype.getComponentDiv = function () {
	var a = cp.RuntimeDialogButton.superClass.getComponentDiv.call(this);
	a.style.position = "absolute";
	a.style.cursor = "pointer";
	var b = this.m_fillColor,
		c = this.m_alpha;
	a.onmouseover = function () {
		a.style.background = cp.HexToRGBA(b, 0.1)
	};
	a.onmouseout = function () {
		a.style.background = cp.HexToRGBA(b, c)
	};
	cp.registerGestureEvent(a, cp.GESTURE_EVENT_TYPES.TAP, this.m_handler);
	a.onkeypress = this.m_handler;
	var d = new cp.RuntimeDialogText(a, 0, 5);
	d.setText(this.m_labelText);
	d.setFontName(this.m_labelFontName);
	d.setFontColor(this.m_labelFontColor);
	d.setFontSize(this.m_labelFontSize);
	d.setShadowColor(this.m_labelShadowColor);
	d.setMaxWidth(this.m_maxWidth - 2 * this.BUTTON_LABEL_LEFT_PADDING);
	var e = d.getComponentDiv();
	e.style.textAlign = "center";
	e.style.top = "0px";
	var f = d.getMaxPossibleWidth(this.m_labelText);
	f > this.m_width && (f > this.m_maxWidth && (f = this.m_maxWidth, e.innerHTML = d.getTruncatedText(this.m_maxWidth)), a.style.width = f + "px");
	a.appendChild(e);
	return a
};
cp.RuntimeMessageBox = function (a, b, c, d, e, f, g, h, i, j) {
	this.m_parent = a;
	this.m_MessageBoxElement = void 0;
	this.m_id = "CPRuntimeMsgBox_ID";
	this.m_titleText = "Alerta";
	this.m_messageText = "This is Adobe Captivate Run Time Message Dialog";
	this.m_firstButtonText = "OK";
	this.m_secondButtonText = "CANCEL";
	this.m_ChkBoxText = "Don't ask me again";
	this.m_numberOfButtons = b;
	this.m_secondButtonHandler = this.m_firstButtonHandler = void 0;
	this.m_DontAskMe = !1;
	this.m_foregroundFillColor = c;
	this.m_foregroundStrokeColor = d;
	this.m_buttonFillColor =
		e;
	this.m_buttonStrokeColor = f;
	this.m_separatorColor = g;
	this.m_textColor = h;
	this.m_textShadowColor = i;
	this.m_textFontName = j;
	this.TITLE_DEFAULT_TOP_OFFSET = this.MESSAGE_DEFAULT_LEFT_OFFSET = this.SEPARATOR_DEFAULT_LEFT_OFFSET = this.TITLE_DEFAULT_LEFT_OFFSET = 10;
	this.SEPARATOR_DEFAULT_TOP_OFFSET = 20;
	this.MESSAGE_DEFAULT_TOP_OFFSET = 30;
	this.BUTTON_BOTTOM_OFFSET = 10;
	this.BG_DEFAULT_WIDTH = 493;
	this.BG_DEFAULT_HEIGHT = 219;
	this.FG_DEFAULT_WIDTH = 478;
	this.FG_DEFAULT_HEIGHT = 198;
	this.BUTTON_DEFAULT_WIDTH = 100;
	this.BUTTON_DEFAULT_HEIGHT =
		33;
	this.INTER_BUTTON_OFFSET = 15
};
cp.RuntimeMessageBox.prototype = {
	getDontAskMeInput: function () {
		if (this.m_DontAskMe) {
			var a = document.getElementById("dont_ask_me_chk");
			if (a) return a.checked
		}
		return !1
	},
	setDontAskMe: function (a) {
		this.m_DontAskMe = a
	},
	setDontAskMeText: function (a) {
		this.m_ChkBoxText = a
	},
	setTitleText: function (a) {
		this.m_titleText = a
	},
	setCheckBoxText: function (a) {
		this.m_ChkBoxText = a
	},
	setMessageText: function (a) {
		this.m_messageText = a
	},
	setFirstButtonText: function (a) {
		this.m_firstButtonText = a
	},
	setSecondButtonText: function (a) {
		this.m_secondButtonText = a
	},
	registerFirstButtonHandler: function (a) {
		void 0 != a && (this.m_firstButtonHandler = a)
	},
	registerSecondButtonHandler: function (a) {
		void 0 != a && (this.m_secondButtonHandler = a)
	},
	isVisible: function () {
		var a = !1;
		void 0 != this.m_MessageBoxElement && "visible" == this.m_MessageBoxElement.style.visibility && (a = !0);
		return a
	},
	hide: function () {
		var a = this.m_parent ? this.m_parent : document.getElementById("cpDocument"),
			b = document.getElementById("CPRuntimeMsgBox_ID");
		void 0 != b && a.removeChild(b)
	},
	show: function () {
		this.hide();
		this.m_MessageBoxElement =
			document.createElement("div");
		this.m_MessageBoxElement.id = this.m_id;
		var a = new cp.RuntimeDialogPanel(this.m_parent, 0, 0, this.BG_DEFAULT_WIDTH, this.BG_DEFAULT_HEIGHT);
		a.showShadow(!0);
		var b = a.getComponentDiv();
		b.id = "bgPanelDiv";
		b.style.margin = "100px auto";
		this.m_MessageBoxElement.appendChild(b);
		a = new cp.RuntimeDialogPanel(b, (this.BG_DEFAULT_WIDTH - this.FG_DEFAULT_WIDTH) / 2, (this.BG_DEFAULT_HEIGHT - this.FG_DEFAULT_HEIGHT) / 2, this.FG_DEFAULT_WIDTH, this.FG_DEFAULT_HEIGHT);
		a.setFillColor(this.m_foregroundFillColor);
		a.setAlpha(1);
		a.setStrokeColor(this.m_foregroundStrokeColor);
		a = a.getComponentDiv();
		b.id = "fgPanelDiv";
		a.style.position = "relative";
		b.appendChild(a);
		b = new cp.RuntimeDialogText(a, this.TITLE_DEFAULT_LEFT_OFFSET, this.TITLE_DEFAULT_TOP_OFFSET);
		b.setText(this.m_titleText);
		b.setFontSize(18);
		b.setFontColor(this.m_textColor);
		b.setFontName(this.m_textFontName);
		b.setShadowColor(this.m_textShadowColor);
		b = b.getComponentDiv();
		a.appendChild(b);
		b = new cp.RuntimeDialogSeparator(a, this.SEPARATOR_DEFAULT_LEFT_OFFSET, this.SEPARATOR_DEFAULT_TOP_OFFSET);
		b.setColor(this.m_separatorColor);
		b = b.getComponentDiv();
		a.appendChild(b);
		b = new cp.RuntimeDialogText(a, this.MESSAGE_DEFAULT_LEFT_OFFSET, this.MESSAGE_DEFAULT_TOP_OFFSET);
		b.setText(this.m_messageText);
		b.setFontColor(this.m_textColor);
		b.setFontName(this.m_textFontName);
		b.setShadowColor(this.m_textShadowColor);
		b.setFontSize(14);
		b.setMultiline(!0);
		b = b.getComponentDiv();
		a.appendChild(b);
		this.m_DontAskMe && (b = new cp.RuntimeDialogText(a, this.MESSAGE_DEFAULT_LEFT_OFFSET, this.MESSAGE_DEFAULT_TOP_OFFSET), b.setText(this.m_ChkBoxText),
			b.setFontColor(this.m_textColor), b.setFontName(this.m_textFontName), b.setShadowColor(this.m_textShadowColor), b.setFontSize(14), b.setMultiline(!1), b = b.getComponentDiv(), a.innerHTML += '<input type="checkbox" id="dont_ask_me_chk" style="-webkit-appearance: checkbox;left:10px; bottom: 70px;width:20px; height:20px;position:absolute">', a.appendChild(b), b.style.position = "absolute", b.style.top = "", b.style.bottom = "75px", b.style.left = "40px");
		b = new cp.RuntimeDialogButton(a, 0, 0, this.BUTTON_DEFAULT_WIDTH, this.BUTTON_DEFAULT_HEIGHT);
		b.setFillColor(this.m_buttonFillColor);
		b.setStrokeColor(this.m_buttonStrokeColor);
		b.setButtonLabel(this.m_firstButtonText);
		b.setButtonLabelFontSize(16);
		b.setButtonLabelFontColor(this.m_textColor);
		b.setButtonLabelFontName(this.m_textFontName);
		b.setButtonLabelShadowColor(this.m_textShadowColor);
		b.setHandler(this.m_firstButtonHandler);
		b = b.getComponentDiv();
		b.style.top = "auto";
		b.tabIndex = 0;
		b.style.bottom = this.BUTTON_BOTTOM_OFFSET + "px";
		a.appendChild(b);
		var c = void 0;
		2 == this.m_numberOfButtons && (lSecondButton =
			new cp.RuntimeDialogButton(a, 0, 0, this.BUTTON_DEFAULT_WIDTH, this.BUTTON_DEFAULT_HEIGHT), lSecondButton.setFillColor(this.m_buttonFillColor), lSecondButton.setStrokeColor(this.m_buttonStrokeColor), lSecondButton.setButtonLabel(this.m_secondButtonText), lSecondButton.setButtonLabelFontSize(16), lSecondButton.setButtonLabelFontColor(this.m_textColor), lSecondButton.setButtonLabelFontName(this.m_textFontName), lSecondButton.setButtonLabelShadowColor(this.m_textShadowColor), lSecondButton.setHandler(this.m_secondButtonHandler),
			c = lSecondButton.getComponentDiv(), c.tabIndex = 0, c.style.top = "auto", c.style.bottom = this.BUTTON_BOTTOM_OFFSET + "px", a.appendChild(c));
		this.m_parent.appendChild(this.m_MessageBoxElement);
		this.m_MessageBoxElement.style.visibility = "visible";
		this.m_MessageBoxElement.style.position = "absolute";
		this.m_MessageBoxElement.style.left = "0px";
		this.m_MessageBoxElement.style.top = "0px";
		this.m_MessageBoxElement.style.width = "100%";
		this.m_MessageBoxElement.style.height = "100%";
		this.m_MessageBoxElement.style.textAlign = "center";
		this.m_MessageBoxElement.style.zIndex = "1000";
		this.m_MessageBoxElement.style.background = "rgba(240,240,240,0.2)";
		this.m_MessageBoxElement.style.zIndex = 10020;
		a = a.clientWidth - b.clientWidth;
		c && (a = a - this.INTER_BUTTON_OFFSET - c.clientWidth);
		a /= 2;
		b.style.left = a + "px";
		c && (c.style.left = a + b.clientWidth + this.INTER_BUTTON_OFFSET + "px");
		setTimeout(function () {
			var a = document.getElementById("dont_ask_me_chk");
			a && a.focus()
		}, 500)
	},
	close: function () {
		var a = document.getElementById("cpDocument"),
			b = document.getElementById("CPRuntimeMsgBox_ID");
		a.removeChild(b)
	}
};
cp.RuntimeMessageBoxDefault = function (a, b) {
	var c = cp.D.rtDialog;
	cp.RuntimeMessageBoxDefault.baseConstructor.call(this, a, b, c.rtbgfc, c.rtbgsc, c.rtbtnfc, c.rtbtnsc, c.rtsc, c.rttc, c.rttsc, c.rtfn)
};
cp.rtInherits(cp.RuntimeMessageBoxDefault, cp.RuntimeMessageBox);
cp.PostResultsMessageBox = function (a) {
	this.m_StudentNameTextInputLabel = "";
	this.m_StringsMap = a;
	a = document.getElementById("div_Slide");
	cp.PostResultsMessageBox.baseConstructor.call(this, a, 2)
};
cp.rtInherits(cp.PostResultsMessageBox, cp.RuntimeMessageBoxDefault);
cp.PostResultsMessageBox.prototype.getLearnerName = function () {
	return this.m_studentNameTextInput.getValue()
};
cp.PostResultsMessageBox.prototype.getLearnerID = function () {
	return this.m_studentIDTextInput.getValue()
};
cp.PostResultsMessageBox.prototype.hide = function () {
	var a = document.getElementById("CPRuntimeMsgBox_ID");
	void 0 != a && this.m_parent.removeChild(a)
};
cp.PostResultsMessageBox.prototype.show = function () {
	this.setTitleText(this.m_StringsMap.ISRPostResultStr);
	this.setMessageText(this.m_StringsMap.ISRResultCalculatedStr);
	this.m_numberOfButtons = 2;
	this.setFirstButtonText("Cancel");
	this.setSecondButtonText(this.m_StringsMap.ISRSendStr);
	this.hide();
	this.m_MessageBoxElement = document.createElement("div");
	this.m_MessageBoxElement.id = this.m_id;
	var a = new cp.RuntimeDialogPanel(this.m_parent, 0, 0, 350, 230);
	a.showShadow(!0);
	var b = a.getComponentDiv();
	b.id = "bgPanelDiv";
	b.style.margin = "100px auto";
	this.m_MessageBoxElement.appendChild(b);
	a = new cp.RuntimeDialogPanel(b, 0, 0, 350, 230);
	a.setFillColor(this.m_foregroundFillColor);
	a.setAlpha(1);
	a.setStrokeColor(this.m_foregroundStrokeColor);
	a = a.getComponentDiv();
	a.id = "fgPanelDiv";
	a.style.position = "relative";
	b.appendChild(a);
	b = new cp.RuntimeDialogText(a, 0, 0);
	b.setText(this.m_titleText);
	b.setFontSize(18);
	b.setFontColor("#ffffff");
	b.setFontName(this.m_textFontName);
	b.setShadowColor(this.m_textShadowColor);
	b = b.getComponentDiv();
	b.style.backgroundColor = "#000000";
	b.style.borderTopLeftRadius = "20px";
	b.style.borderTopRightRadius = "20px";
	b.style.textAlign = "center";
	a.appendChild(b);
	b = new cp.RuntimeDialogText(a, this.MESSAGE_DEFAULT_LEFT_OFFSET, 10);
	b.setText(this.m_messageText);
	b.setFontColor(this.m_textColor);
	b.setFontName(this.m_textFontName);
	b.setShadowColor(this.m_textShadowColor);
	b.setFontSize(14);
	b.setMultiline(!0);
	b = b.getComponentDiv();
	b.style.left = "20px";
	b.style.width = "300px";
	b.style.wordWrap = "break-word";
	a.appendChild(b);
	b = new cp.RuntimeDialogTextInput(a, 10, 10);
	b.setLabel(this.m_StringsMap.ISREnterNameStr);
	b.setText("");
	b.setFontColor(this.m_textColor);
	b.setFontName(this.m_textFontName);
	b.setFontSize(14);
	this.m_studentNameTextInput = b;
	b = b.getComponentDiv();
	b.id = "studentNameTextInput";
	b.style.left = "20px";
	b.style.width = "300px";
	a.appendChild(b);
	b = new cp.RuntimeDialogTextInput(a, 10, 0);
	b.setLabel(this.m_StringsMap.ISREmailIDStr);
	b.setText("");
	b.setFontColor(this.m_textColor);
	b.setFontName(this.m_textFontName);
	b.setFontSize(14);
	this.m_studentIDTextInput = b;
	b = b.getComponentDiv();
	b.id = "studentNameTextInput";
	b.style.left = "20px";
	b.style.width = "300px";
	a.appendChild(b);
	b = new cp.RuntimeDialogButton(a, 0, 0, this.BUTTON_DEFAULT_WIDTH, 20);
	b.setFillColor(this.m_buttonFillColor);
	b.setStrokeColor(this.m_buttonStrokeColor);
	b.setButtonLabel(this.m_firstButtonText);
	b.setButtonLabelFontSize(16);
	b.setButtonLabelFontColor(this.m_textColor);
	b.setButtonLabelFontName(this.m_textFontName);
	b.setButtonLabelShadowColor(this.m_textShadowColor);
	b.setHandler(this.m_firstButtonHandler);
	b = b.getComponentDiv();
	b.style.top = "auto";
	b.style.bottom = this.BUTTON_BOTTOM_OFFSET + "px";
	b.style.width = parseFloat(b.style.width) + 20 + "px";
	a.appendChild(b);
	var c = void 0;
	2 == this.m_numberOfButtons && (lSecondButton = new cp.RuntimeDialogButton(a, 0, 0, this.BUTTON_DEFAULT_WIDTH, 20), lSecondButton.setFillColor(this.m_buttonFillColor), lSecondButton.setStrokeColor(this.m_buttonStrokeColor), lSecondButton.setButtonLabel(this.m_secondButtonText), lSecondButton.setButtonLabelFontSize(16), lSecondButton.setButtonLabelFontColor(this.m_textColor),
		lSecondButton.setButtonLabelFontName(this.m_textFontName), lSecondButton.setButtonLabelShadowColor(this.m_textShadowColor), lSecondButton.setHandler(this.m_secondButtonHandler), c = lSecondButton.getComponentDiv(), c.style.top = "auto", c.style.bottom = this.BUTTON_BOTTOM_OFFSET + "px", c.style.width = parseFloat(c.style.width) + 20 + "px", a.appendChild(c));
	this.m_parent.appendChild(this.m_MessageBoxElement);
	this.m_MessageBoxElement.style.visibility = "visible";
	this.m_MessageBoxElement.style.position = "absolute";
	this.m_MessageBoxElement.style.left =
		"0px";
	this.m_MessageBoxElement.style.top = "0px";
	this.m_MessageBoxElement.style.width = "100%";
	this.m_MessageBoxElement.style.height = "100%";
	this.m_MessageBoxElement.style.textAlign = "center";
	this.m_MessageBoxElement.style.zIndex = "1000";
	this.m_MessageBoxElement.style.background = "rgba(240,240,240,0.5)";
	a = a.clientWidth - b.clientWidth;
	c && (a = a - this.INTER_BUTTON_OFFSET - c.clientWidth);
	a /= 2;
	b.style.left = a + "px";
	c && (c.style.left = a + b.clientWidth + this.INTER_BUTTON_OFFSET + "px")
};
(function (a) {
	function aa(c) {
		var b = c;
		(c = a.D[c]) && c.sicbs && void 0 !== c.bstiid && -1 !== c.bstiid && (b = a.getDisplayObjNameByCP_UID(c.bstiid));
		return b
	}
	function X(a) {
		a.stopPropagation();
		a.preventDefault()
	}
	var W = {};
	a.ropMap = {};
	var G = {};
	a.cpIDMap = {};
	a.inherits = function (a, b) {
		function d() {}
		d.prototype = b.prototype;
		a.prototype = new d;
		a.prototype.constructor = a;
		a.baseConstructor = b;
		a.superClass = b.prototype
	};
	a.getParameterByName = function (a) {
		a = a.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
		a = RegExp("[\\?&]" + a + "=([^&#]*)").exec(window.location.search);
		return null == a ? "" : decodeURIComponent(a[1].replace(/\+/g, " "))
	};
	a.getCorrectMediaPath = function (c) {
		var b = c;
		a.pg && (window.device && "Android" === window.device.platform) && (b = a.Phonegap.getResourcePath(c));
		return b
	};
	a.log = function (c) {
		a.customConsole ? a.customConsole.value += c : a.consolidateLogs && a.logArray ? a.logArray.push(c) : console.log(c)
	};
	a.logObject = function (c, b) {
		b || (b = "");
		var d = "object " + b + " : {",
			e;
		for (e in c) d += e + ":" + c[e] + "; ";
		a.log(d + "}")
	};
	a.IsValidObj = function (a) {
		return void 0 != a && null != a
	};
	a.getCurrentBrowserVersion =
		function (c, b) {
			var d = c.indexOf(b);
			return -1 == d ? a.UNKNOWN : parseFloat(c.substring(d + b.length + 1))
	};
	a.showColoredNonModalWarning = function (c) {
		var b = a.newElem("div");
		b.style.position = "fixed";
		b.style.right = "10px";
		b.style.bottom = "10px";
		b.style.backgroundColor = "#7f7f7f";
		b.style.border = "10px solid #FF0000";
		b.style.padding = "10px";
		b.style.fontSize = "22px";
		b.style.zIndex = "10000";
		b.innerHTML = c;
		a.parentWindow.document.body.appendChild(b);
		setTimeout(function () {
			a.parentWindow.document.body.removeChild(b)
		}, 1E3)
	};
	a.getRoundedValue =
		function (a, b) {
			void 0 == b && (b = 2);
			var d = Math.pow(10, b);
			return a = Math.round(a * d) / d
	};
	a.resetDisplayAndIdMap = function () {
		G = {};
		a.cpIDMap = {}
	};
	a.getDisplayObjByCP_UID = function (c) {
		return G[a.cpIDMap[c]]
	};
	a.getDisplayObjByKey = function (a) {
		return G[a]
	};
	a.getDisplayObjNameByCP_UID = function (c) {
		var c = a.cpIDMap[c],
			b = "";
		c && (b = a.D[c].dn);
		return b
	};
	a.getParentStateObjectForItem = function (c) {
		var b = void 0,
			d = c.baseStateItemID;
		if (d && -1 != d && (d = a.getDisplayObjByCP_UID(d)))
			if (d = d.states)
				for (var e = 0; e < d.length; ++e) {
					var f = d[e];
					if (f)
						for (var h = f.stsi, g = 0; g < h.length; ++g)
							if (h[g] == c.getAttribute("uid")) {
								b = f;
								break
							}
				}
			return b
	};
	a.getCurrentStateObjectForItem = function (a) {
		var b = void 0;
		if (a) {
			var d = a.states,
				a = a.currentState;
			0 <= a && a < d.length && (b = d[a])
		}
		return b
	};
	a.hasStateOfType = function (a, b) {
		var d = !1;
		if (a) {
			var e = a.states;
			if (e)
				for (var f = 0; f < e.length; ++f) {
					var h = e[f];
					if (h && h.stt == b) {
						d = !0;
						break
					}
				}
		}
		return d
	};
	a.getStateName = function (a, b) {
		var d = "";
		if (a) {
			var e = a.states;
			e && 0 <= b && b < e.length && (e = e[b]) && (d = e.stn)
		}
		return d
	};
	a.getBaseStateItem = function (c) {
		var b =
			c;
		c && -1 !== c.baseStateItemID && (c = a.getDisplayObjByCP_UID(c.baseStateItemID)) && (b = c);
		return b
	};
	a.isVisible = function (c) {
		var b = !1;
		if (c) {
			var b = c.visible,
				d = c.states && 0 < c.states.length;
			if (-1 !== c.baseStateItemID || d)
				if (d = c.getAttribute("uid"), c = a.getBaseStateItem(c)) {
					var b = c.getAttribute("effectiveVi"),
						e = !1,
						f = c.states,
						c = c.currentState;
					f && 0 <= c && c < f.length && (e = -1 != f[c].stsi.indexOf(d));
					b = b && e
				}
		}
		return b
	};
	a.isBaseItemInState = function (a) {
		var b = !1;
		a && (-1 == a.baseStateItemID ? b = !0 : a.cloneOfBaseStateItem && (b = !0));
		return b
	};
	a.getInfoForStateChange = function (c, b) {
		var d = {
			bFound: !1,
			stateIndex: -1,
			showItemList: [],
			hideItemList: []
		}, e = a.D[c];
		if (!e) return d;
		if (e = a.getDisplayObjByKey(e.mdi)) {
			for (var e = e.states, f = [], h = [], g = 0; g < e.length; g++) {
				var k = e[g];
				k.stn == b ? (d.stateIndex = g, f = f.concat(k.stsi), d.bFound = !0) : h = h.concat(k.stsi)
			}
			d.showItemList = f;
			d.hideItemList = h
		}
		return d
	};
	a.CanPauseAudioDuringHide = function (c) {
		var b = !0;
		if (c) {
			var d = !1,
				e = "",
				f = a.kSTTNone;
			if (-1 === c.baseStateItemID) d = !0, e = "Normal";
			else if (c.cloneOfBaseStateItem) {
				var d = !0,
					h = a.getParentStateObjectForItem(c);
				h && (e = h.stn, f = h.stt)
			}
			if (d && (c = a.getBaseStateItem(c))) {
				d = a.getCurrentStateObjectForItem(c);
				if (void 0 !== d && (d.stt === a.kSTTRollOver || d.stt === a.kSTTDown))(d = c.stateAtStartOfMouseEvents) && e === d && (b = !1);
				if (f === a.kSTTDragOver || f === a.kSTTDragStart || f === a.kSTTDropReject)
					if (f = a.GetCurrentInteractionManager())(f = f.getActiveInteraction()) && (f.m_DsFrameSetDataID === c.parentId && f.m_DragSourceCurrentTransientState === e) && (b = !1)
			}
		}
		return b
	};
	a.GetBaseItemsInAllStates = function (c, b) {
		void 0 ===
			b && (b = !0);
		var d = [];
		if (c)
			for (var e = c.states, f = 0; f < e.length; f++) {
				var h = e[f];
				if (h && (h = h.stsi))
					for (var g = 0; g < h.length; g++) {
						var k = a.getDisplayObjByCP_UID(h[g]);
						(b || k != c) && a.isBaseItemInState(k) && d.push(k)
					}
			}
		return d
	};
	a.dispatchClickEvent = function (c, b, d) {
		b && c && (a.MSIE != a.browser && window.MouseEvent ? (b = new MouseEvent("click", {
				bubbles: !0,
				cancelable: !0,
				screenX: b.screenX,
				screenY: b.screenY,
				clientX: b.clientX,
				clientY: b.clientY,
				ctrlKey: b.ctrlKey,
				altKey: b.altKey,
				shiftKey: b.shiftKey,
				metaKey: b.metaKey
			}), b.cpCustomData =
			d, c.dispatchEvent(b)) : document && document.createEventObject && (b = document.createEventObject(window.event), b.button = 1, b.cpCustomData = d, b.target = c, c.fireEvent("onclick", b)))
	};
	a.BringBaseItemToFrontWithinState = function (c, b) {
		function d(a, c) {
			return a.zIndex > c.zIndex ? 1 : a.zIndex < c.zIndex ? -1 : 0
		}
		if (c) {
			var e = [],
				f = c.states;
			if (f)
				for (var h = 0; h < f.length; h++) {
					var g = f[h];
					if (g && g.stn == b)
						for (var g = g.stsi, k = 0; k < g.length; k++) {
							var l = a.getDisplayObjNameByCP_UID(g[k]),
								j = a.getDisplayObjByCP_UID(g[k]);
							if ((l = a.D[l]) && j) {
								var m =
									a.isBaseItemInState(j);
								(j = j.actualParent) && e.push({
										frameSetDiv: j,
										zIndex: l.zIndex,
										isBaseItem: m
									})
							}
						}
				}
			if (0 != e.length) {
				e.sort(d);
				f = e[e.length - 1].zIndex;
				g = e[0].zIndex;
				k = !1;
				for (h = 0; h < e.length; h++)
					if ((j = e[h]) && j.frameSetDiv) k && (j.frameSetDiv.style.zIndex = g), j.isBaseItem && (j.frameSetDiv.style.zIndex = f, k = !0), g = j.zIndex
			}
		}
	};
	a.ResetItemZIndicesWithinState = function (c, b) {
		if (c) {
			var d = c.states;
			if (d)
				for (var e = 0; e < d.length; e++) {
					var f = d[e];
					if (f && f.stn == b && (f = f.stsi))
						for (var h = 0; h < f.length; h++) {
							var g = a.getDisplayObjNameByCP_UID(f[h]),
								k = a.getDisplayObjByCP_UID(f[h]);
							if ((g = a.D[g]) && k)
								if (k = k.actualParent) k.style.zIndex = g.zIndex
						}
				}
		}
	};
	a.scaleItem = function (c, b, d) {
		a.applyTransform(c, "scaleX(" + b + ") scaleY(" + d + ")")
	};
	a.getCorrectBreakpoint = function (c) {
		if (a.responsiveWidths && !(0 >= a.responsiveWidths.length)) {
			var b = a.responsiveWidths.length;
			if (c <= a.responsiveWidths[0]) return a.responsiveWidths[0];
			if (c >= a.responsiveWidths[a.responsiveWidths.length - 1]) return a.responsiveWidths[a.responsiveWidths.length - 1];
			for (var d = 0; d <= b - 1; ++d)
				if (c <= a.responsiveWidths[d]) return a.responsiveWidths[d]
		}
	};
	a.getResponsiveCSS = function (c) {
		if (c && a.responsiveWidths && !(0 >= a.responsiveWidths.length)) {
			if (a.ResponsiveProjWidth) return c[a.ResponsiveProjWidth];
			var b = a.responsiveWidths.length,
				d = window.innerWidth;
			if (d <= a.responsiveWidths[0]) return c[a.responsiveWidths[0]];
			if (d >= a.responsiveWidths[a.responsiveWidths.length - 1]) return c[a.responsiveWidths[a.responsiveWidths.length - 1]];
			for (var e = 0; e <= b - 1; ++e)
				if (d <= a.responsiveWidths[e]) return c[a.responsiveWidths[e]]
		}
	};
	a.getMaxWHBpt = function (c, b) {
		var d = a("cpTempElemForMaxWidth_123456"),
			e = a("cpTempInnerElemForMaxWidth_123456");
		d || (d = a.newElem("div"), d.id = "cpTempElemForMaxWidth_123456", d.style.display = "block", d.style.zIndex = "-1", d.tabIndex = -1, document.body.insertBefore(d, document.body.firstChild));
		d.style.display = "block";
		d.style.position = "absolute";
		d.style.left = "0px";
		d.style.top = "0px";
		d.style.width = b + "px";
		d.style.height = a.getCurrentSlideResponsiveHeight(b) + "px";
		e || (e = a.newElem("cpTempInnerElemForMaxWidth_123456"), e.id = "cpTempInnerElemForMaxWidth_123456", d.appendChild(e));
		a.applyResponsiveStyles(e,
			c);
		e = {
			w: e.clientWidth,
			h: e.clientHeight
		};
		d.style.display = "none";
		return e
	};
	a.getAccessibilityString = function (c) {
		if (!c || !c.accstr) return "";
		var b = c.accstr;
		if (void 0 == b) return "";
		c = c.traccstr;
		"string" != typeof b && (b = b[a.ResponsiveProjWidth]);
		c && (b += " " + c);
		return b
	};
	a.createTempElemAndGetBoundingRect = function (c, b, d) {
		var e = a.newElem("div");
		b || (b = a("div_Slide"));
		b.appendChild(e);
		a.applyResponsiveStyles(e, c, d);
		c = e.getBoundingClientRect();
		b.removeChild(e);
		return c
	};
	a.createTempTextElemAndGetBoundingRect = function (c,
		b, d) {
		if ("" == d || void 0 == d) d = b.rpvt[a.ResponsiveProjWidth].vt;
		b = a("cpTempTextElem_123456");
		b || (b = a.newElem("div"), b.id = "cpTempTextElem_123456", b.style.overflow = "hidden", b.style.wordWrap = "break-word", b.style.whiteSpace = "pre-wrap", b.style.lineHeight = "90%", b.style.left = "-1999px", b.tabIndex = "-1", document.body.insertBefore(b, document.body.firstChild));
		b.style.width = "";
		b.style.display = "block";
		b.style.width = c + "px";
		b.setAttribute("aria-hidden", "true");
		b.innerHTML = d;
		b.offsetHeight = b.offsetHeight;
		c = b.getBoundingClientRect();
		b.innerHTML = "";
		b.style.display = "none";
		return c
	};
	a.getExpectedWindowWidthToFitText = function (a, b, d) {
		var e = d; - 1 != a.h.indexOf("%") || -1 != a.h.indexOf("px") ? e = -1 != a.w.indexOf("%") ? Math.floor(100 * b / parseFloat(a.w)) : window.innerWidth : -1 != a.h.indexOf("H%") ? (a = a.h.split("H%")[0], e = Math.floor(100 * d / parseFloat(a))) : -1 != a.h.indexOf("auto") && (parseFloat(a.apr), e = -1 != a.w.indexOf("H%") ? Math.floor(100 * d / parseFloat(a.h)) : -1 != a.w.indexOf("%") ? Math.floor(100 * b / parseFloat(a.w)) : window.innerWidth);
		return e
	};
	a.getInterpolatedFontSize =
		function (a, b, d) {
			return window.innerWidth > a.winW ? b : b * d / a.expw
	};
	a.applyResponsiveStylesWRTItem = function (c, b, d) {
		if (b)
			for (var e = a.rCSSProps.length, f = 0; f < e; ++f) {
				var h = a.rCPProps[f],
					g = b[h];
				if (g) {
					"h" == h ? -1 != g.indexOf("auto") ? (g = b.w, g = -1 != g.indexOf("%") ? parseFloat(g) * d.clientWidth / 100 : parseFloat(g), g = a.getRoundedValue(g / parseFloat(b.apr)) + "px") : -1 != g.indexOf("H%") ? (g = g.split("H%")[0], g = a.getRoundedValue(g * d.clientWidth / 100) + "px") : -1 != g.indexOf("%") && (g = g.split("%")[0], g = a.getRoundedValue(g * d.clientHeight /
						100) + "px") : "w" == h && (-1 != g.indexOf("auto") ? (g = b.h, g = -1 != g.indexOf("%") ? parseFloat(g) * d.clientHeight / 100 : parseFloat(g), g = a.getRoundedValue(g * parseFloat(b.apr)) + "px") : -1 != g.indexOf("H%") ? (g = g.split("H%")[0], g = a.getRoundedValue(g * d.clientHeight / 100) + "px") : -1 != g.indexOf("%") && (g = g.split("%")[0], g = a.getRoundedValue(g * d.clientWidth / 100) + "px"));
					var k = d.getBoundingClientRect(),
						l = a.movie.stage.mainSlideDiv.getBoundingClientRect();
					if ("auto" != g) {
						if ("t" == h || "b" == h) - 1 != g.indexOf("H%") ? (g = g.split("H%")[0], g = a.getRoundedValue(g *
							d.clientWidth / 100)) : -1 != g.indexOf("%") ? (g = g.split("%")[0], g = a.getRoundedValue(g * d.clientHeight / 100)) : g = parseFloat(g);
						if ("l" == h || "r" == h) - 1 != g.indexOf("H%") ? (g = g.split("H%")[0], g = a.getRoundedValue(g * d.clientHeight / 100)) : -1 != g.indexOf("%") ? (g = g.split("%")[0], g = a.getRoundedValue(g * d.clientWidth / 100)) : g = parseFloat(g);
						"l" == h && (g = g + k.left + "px");
						"r" == h && (g = g + l.right - k.right + "px");
						"t" == h && (g = g + k.top + "px");
						"b" == h && (g = g + l.bottom - k.bottom + "px")
					}
					b.rpmm && ("width" == a.rCSSProps[f] ? (k = b.rpmm.mw, l = b.rpmm.Mw, h = g, -1 !=
						k.indexOf("%") && (k = parseFloat(k) * d.clientWidth / 100), -1 != l.indexOf("%") && (l = parseFloat(l) * d.clientWidth / 100), -1 != h.indexOf("%") && (h = parseFloat(h) * d.clientWidth / 100), k = parseFloat(k), l = parseFloat(l), h = parseFloat(h), !isNaN(k) && h < k ? g = -1 != g.indexOf("%") ? 100 * k / d.clientWidth + "%" : k + "px" : !isNaN(l) && h > l && (g = -1 != g.indexOf("%") ? 100 * l / d.clientWidth + "%" : l + "px")) : "height" == a.rCSSProps[f] && (k = b.rpmm.mh, l = b.rpmm.Mh, h = g, -1 != k.indexOf("%") && (k = parseFloat(k) * d.clientHeight / 100), -1 != l.indexOf("%") && (l = parseFloat(l) * d.clientHeight /
						100), -1 != h.indexOf("%") && (h = parseFloat(h) * d.clientHeight / 100), k = parseFloat(k), l = parseFloat(l), h = parseFloat(h), !isNaN(k) && h < k ? g = -1 != g.indexOf("%") ? 100 * k / d.clientHeight + "%" : k + "px" : !isNaN(l) && h > l && (g = -1 != g.indexOf("%") ? 100 * l / d.clientHeight + "%" : l + "px")));
					c.style[a.rCSSProps[f]] = g
				}
			}
	};
	a.resetStyles = function (c) {
		if (c)
			for (var b = a.rCSSProps.length, d = 0; d < b; ++d) c.style[a.rCSSProps[d]] = ""
	};
	a.getMinMaxHeight = function (c) {
		if (a.responsive) {
			var b = {}, d = a("project").clientHeight;
			c.sh && (d = parseFloat(c.sh));
			var e = c.rpmm.mh,
				c = c.rpmm.Mh; - 1 != e.indexOf("%") && (e = parseFloat(e) * d / 100); - 1 != c.indexOf("%") && (c = parseFloat(c) * d / 100);
			b.minH = parseFloat(e);
			b.maxH = parseFloat(c);
			return b
		}
	};
	a.applyResponsiveStyles = function (c, b, d, e, f) {
		if (b) {
			b.ipiv || (b.w = "0.000%", b.h = "0.000%", b.rpmm = {
				mw: "0px",
				mh: "0px",
				Mw: "",
				Mh: ""
			});
			var h = a.rCSSProps.length,
				g = !1,
				e = g ? a.RespDefaultBptW : a("project").clientWidth,
				k = g ? a.RespDefaultBptH : a("project").clientHeight;
			b.sh && (k = parseFloat(b.sh), g = !0);
			var l = a("div_Slide").getBoundingClientRect(),
				j = b.cah,
				m = b.cav,
				n = !1,
				o = !1,
				p = void 0,
				s = void 0;
			if (d && (b.lhID || b.lvID)) p = a.getDisplayObjByCP_UID(b.lhID), s = b.lhID == b.lvID ? p : a.getDisplayObjByCP_UID(b.lvID), p && (n = p.isStarted && p.isDrawnComplete), s && (o = s.isStarted && s.isDrawnComplete);
			for (d = 0; d < h; ++d) {
				c.style[a.rCSSProps[d]] = "";
				var u = a.rCPProps[d],
					q = b[u];
				if (q) {
					f || ("h" == u ? -1 != q.indexOf("auto") ? (q = b.w, q = -1 != q.indexOf("H%") ? parseFloat(q) * k / 100 : -1 != q.indexOf("%") ? parseFloat(q) * e / 100 : parseFloat(q), q = a.getRoundedValue(q / parseFloat(b.apr)) + "px") : -1 != q.indexOf("H%") ? (q = q.split("H%")[0],
						q = a.getRoundedValue(q * e / 100) + "px") : g && -1 != q.indexOf("%") && (q = q.split("%")[0], q = a.getRoundedValue(q * k / 100) + "px") : "w" == u && (-1 != q.indexOf("auto") ? (q = b.h, q = -1 != q.indexOf("%") ? parseFloat(q) * k / 100 : parseFloat(q), q = a.getRoundedValue(q * parseFloat(b.apr)) + "px") : -1 != q.indexOf("H%") ? (q = q.split("H%")[0], q = a.getRoundedValue(q * k / 100) + "px") : g && -1 != q.indexOf("%") && (q = q.split("%")[0], q = a.getRoundedValue(q * e / 100) + "px")));
					if (!j && ("l" == u || "r" == u))
						if (-1 != q.indexOf("H%") ? (q = q.split("H%")[0], q = a.getRoundedValue(q * k / 100) +
							"px") : g && -1 != q.indexOf("%") && (q = q.split("%")[0], q = a.getRoundedValue(q * e / 100) + "px"), "auto" != q && n && -1 != b.lhID) {
							var r = p.actualParent;
							if (r) {
								var w = r.getBoundingClientRect();
								if (r.tr) {
									var z = p.actualParent.style.transform || p.actualParent.style.msTransform || p.actualParent.style.MozTransform || p.actualParent.style.WebkitTransform || p.actualParent.style.OTransform;
									a.applyTransform(p.actualParent, "");
									p.actualParent.offsetHeight = p.actualParent.offsetHeight;
									w = r.getBoundingClientRect();
									a.applyTransform(p.actualParent,
										z)
								}
								w && (q = b.lhV, -1 != q.indexOf("H%") ? (q = q.split("H%")[0], q = a.getRoundedValue(q * k / 100) + "px") : -1 != q.indexOf("%") && (q = q.split("%")[0], q = a.getRoundedValue(q * e / 100) + "px"), w = w[a.rLinkEdges[b.lhEID]], w = "r" == u ? l.right - w : w - l.left, q = w + parseFloat(q) + "px")
							}
						}
					if (!m && ("t" == u || "b" == u))
						if (-1 != q.indexOf("H%") ? (q = q.split("H%")[0], q = a.getRoundedValue(q * e / 100) + "px") : g && -1 != q.indexOf("%") && (q = q.split("%")[0], q = a.getRoundedValue(q * k / 100) + "px"), "auto" != q && o && -1 != b.lvID)
							if (r = s.actualParent)
								if (w = r.getBoundingClientRect(), r.tr &&
									(z = s.actualParent.style.transform || s.actualParent.style.msTransform || s.actualParent.style.MozTransform || s.actualParent.style.WebkitTransform || s.actualParent.style.OTransform, a.applyTransform(s.actualParent, ""), s.actualParent.offsetHeight = s.actualParent.offsetHeight, w = r.getBoundingClientRect(), a.applyTransform(s.actualParent, z)), w) q = b.lvV, -1 != q.indexOf("H%") ? (q = q.split("H%")[0], q = a.getRoundedValue(q * e / 100) + "px") : -1 != q.indexOf("%") && (q = q.split("%")[0], q = a.getRoundedValue(q * k / 100) + "px"), w = w[a.rLinkEdges[b.lvEID]],
					w = "b" == u ? l.bottom - w : w - l.top, q = w + parseFloat(q) + "px";
					b.rpmm && ("width" == a.rCSSProps[d] ? (w = b.rpmm.mw, r = b.rpmm.Mw, u = q, -1 != w.indexOf("%") && (w = parseFloat(w) * e / 100), -1 != r.indexOf("%") && (r = parseFloat(r) * e / 100), -1 != u.indexOf("%") && (u = parseFloat(u) * e / 100), w = parseFloat(w), r = parseFloat(r), u = parseFloat(u), !isNaN(w) && u < w ? q = -1 != q.indexOf("%") ? 100 * w / e + "%" : w + "px" : !isNaN(r) && u > r && (q = -1 != q.indexOf("%") ? 100 * r / e + "%" : r + "px")) : "height" == a.rCSSProps[d] && (w = b.rpmm.mh, r = b.rpmm.Mh, u = q, -1 != w.indexOf("%") && (w = parseFloat(w) * k /
						100), -1 != r.indexOf("%") && (r = parseFloat(r) * k / 100), -1 != u.indexOf("%") && (u = parseFloat(u) * k / 100), w = parseFloat(w), r = parseFloat(r), u = parseFloat(u), !isNaN(w) && u < w ? q = -1 != q.indexOf("%") ? 100 * w / k + "%" : w + "px" : !isNaN(r) && u > r && (q = -1 != q.indexOf("%") ? 100 * r / k + "%" : r + "px")));
					c.style[a.rCSSProps[d]] = q
				}
			}
			j && (b = c.getBoundingClientRect(), c.style.right = "auto", c.style.left = (e - b.width) / 2 + "px");
			m && (b = c.getBoundingClientRect(), c.style.bottom = "auto", c.style.top = (k - b.height) / 2 + "px")
		}
	};
	a.createResponsiveStyleObj = function (c, b, d, e,
		f, h, g, k, l) {
		for (var j = {}, m = 0; m < arguments.length; ++m) c ? c[a.rCPProps[m]] && (j[a.rCPProps[m]] = arguments[m + 1]) : j[a.rCPProps[m]] = arguments[m + 1];
		for (var m = a.rCPLinkProps.length, n = 0; n < m; ++n) c && c[a.rCPLinkProps[n]] && (j[a.rCPLinkProps[n]] = c[a.rCPLinkProps[n]]);
		c && (j.ipiv = c.ipiv);
		return j
	};
	a.getCenterForRotation = function (c) {
		var b = {
			x: 0,
			y: 0
		};
		if (!c) return 0;
		var d = a("div_Slide").getBoundingClientRect(),
			c = c.getBoundingClientRect(),
			e = c.top - d.top + c.height / 2;
		b.X = c.left - d.left + c.width / 2;
		b.Y = e;
		return b
	};
	a.RotatePoint =
		function (a, b, d, e, f) {
			var f = f * Math.PI / 180,
				a = a - d,
				h = b - e,
				b = Math.atan2(h, a),
				a = Math.sqrt(a * a + h * h),
				b = b + f,
				f = Math.cos(b) * a,
				a = Math.sin(b) * a;
			return {
				x: f + d,
				y: a + e
			}
	};
	a.getBoundsForRotatedItem = function (c, b, d, e, f) {
		var h = {};
		if (void 0 == e) return h;
		var e = Math.PI * -e / 180,
			g = -c / 2,
			k = c / 2,
			l = c / 2,
			c = -c / 2,
			j = -b / 2,
			m = -b / 2,
			n = b / 2,
			o = b / 2,
			b = g * Math.cos(e) + j * Math.sin(e),
			g = -g * Math.sin(e) + j * Math.cos(e),
			j = k * Math.cos(e) + m * Math.sin(e),
			k = -k * Math.sin(e) + m * Math.cos(e),
			m = l * Math.cos(e) + n * Math.sin(e),
			l = -l * Math.sin(e) + n * Math.cos(e),
			n = c * Math.cos(e) + o *
				Math.sin(e),
			e = -c * Math.sin(e) + o * Math.cos(e),
			c = Math.min(b, j, m, n),
			o = Math.max(b, j, m, n),
			b = Math.min(g, k, l, e);
		y_max = Math.max(g, k, l, e);
		f || (f = 0);
		e = Math.round(100 * (o - c + 2 * f)) / 100;
		f = Math.round(100 * (y_max - b + 2 * f)) / 100;
		b = a("div_Slide").getBoundingClientRect();
		h.l = Math.round(100 * (d.X - e / 2)) / 100 + "px";
		h.r = b.width - Math.round(100 * (d.X + e / 2)) / 100 + "px";
		h.t = Math.round(100 * (d.Y - f / 2)) / 100 + "px";
		h.b = b.height - Math.round(100 * (d.Y + f / 2)) / 100 + "px";
		h.w = e + "px";
		h.h = f + "px";
		return h
	};
	a.getBoundsForRotatedItem1 = function (c, b, d, e, f, h, g) {
		var k = {};
		if (void 0 == h) return k;
		var l = {
			x: c,
			y: b
		}, j = {
				x: c + d,
				y: b
			}, d = {
				x: c + d,
				y: b + e
			}, e = {
				x: c,
				y: b + e
			}, l = a.RotatePoint(l.x, l.y, f.X, f.Y, h),
			j = a.RotatePoint(j.x, j.y, f.X, f.Y, h),
			d = a.RotatePoint(d.x, d.y, f.X, f.Y, h),
			e = a.RotatePoint(e.x, e.y, f.X, f.Y, h),
			f = a("div_Slide").getBoundingClientRect(),
			h = Math.min(l.x, j.x, d.x, e.x),
			c = Math.max(l.x, j.x, d.x, e.x),
			b = Math.min(l.y, j.y, d.y, e.y);
		y_max = Math.max(l.y, j.y, d.y, e.y);
		g || (g = 0);
		d = Math.round(100 * (c - h + 2 * g)) / 100;
		e = Math.round(100 * (y_max - b + 2 * g)) / 100;
		k.l = h + "px";
		k.r = f.width - c + "px";
		k.t = b + "px";
		k.b =
			f.height - y_max + "px";
		k.w = d + "px";
		k.h = e + "px";
		return k
	};
	a.isCaptionItem = function (c) {
		return c == a.kCPOTCaptionItem || c == a.kCPOTSuccessCaptionItem || c == a.kCPOTFailureCaptionItem || c == a.kCPRolloverCaptionItem || c == a.kCPOTStageCorrectFeedback || c == a.kCPOTStageIncorrectFeedback || c == a.kCPOTStagePartialCorrectFeedback || c == a.kCPOTTimeoutFeedbackItem || c == a.kCPOTRetryFeedbackItem || c == a.kCPOTHintCaptionItem
	};
	a.isSupportedWebkitBasedBrowser = function () {
		var c = 0,
			b = /( AppleWebKit\/)([^ ]+)/.exec(navigator.userAgent);
		if (!b ||
			3 > b.length) return !1;
		var d = b[2],
			e = /[^\\.0-9]/.exec(d);
		e && (d = d.slice(0, e.index));
		b && (c = parseFloat(d));
		a.verbose && a.log("Webkit version : " + c);
		return 534 <= c
	};
	a.canUseWebkitAnimations = function () {
		var c = a.isSupportedWebkitBasedBrowser();
		return !c ? !1 : c && a.device == a.IDEVICE
	};
	a.getIsBrowserSupported = function () {
		var c = !1;
		a.browser == a.MSIE && a.browserVersion >= a.MSIE_MIN_SUPPORTED_VERSION ? c = !0 : a.browser == a.CHROME && a.browserVersion >= a.CHROME_MIN_SUPPORTED_VERSION ? c = !0 : a.browser == a.SAFARI && a.browserVersion >= a.SAFARI_MIN_SUPPORTED_VERSION ?
			c = !0 : a.browser == a.FIREFOX && a.browserVersion >= a.FF_MIN_SUPPORTED_VERSION && (c = !0);
		return c
	};
	a.ShowWarning = function (c, b, d, e) {
		var f = a.D.rtDialog,
			h = f.rtbgfc,
			g = f.rtbgsc,
			k = f.rtbtnfc,
			l = f.rtbtnsc,
			j = f.rtsc,
			m = f.rttc,
			n = f.rttsc,
			o = f.rtfn,
			p = f.rtokb,
			f = f.rtcb,
			s = 1;
		e && ++s;
		e = new a.RuntimeMessageBox(document.getElementById("cpDocument"), s, h, g, k, l, j, m, n, o);
		e.setTitleText(b);
		e.setMessageText(c);
		e.setFirstButtonText(p);
		e.registerFirstButtonHandler(e.hide);
		e.setSecondButtonText(f);
		d || e.show();
		return e
	};
	a.alert = function (c,
		b) {
		b || (b = "Adobe Captivate");
		c || (c = "");
		a.ShowWarning(c, b)
	};
	window.alert = a.alert;
	a.modifyAlternativeAccessibleText = function (c, b) {
		if ("" != b && c && "undefined" != c)
			if (a.SAFARI === a.browser) c.setAttribute("aria-label", b);
			else {
				if (0 === a.D.pref.acc || "" === b) b = " ";
				var d = c.firstChild;
				if (d) {
					if ("DIV" !== d.tagName || "cp-accessibility" != d.className) d = d.nextSibling;
					if (d && (d = d.firstChild)) d.innerHTML = b
				}
			}
	};
	a.removeAccessibilityOutline = function (c) {
		if (c) {
			switch (a.browser) {
				case a.CHROME:
				case a.SAFARI:
				case a.FIREFOX:
					c.style.outlineStyle =
						"none"
			}
			switch (a.device) {
				case a.IDEVICE:
				case a.ANDROID:
					c.style.outlineStyle = "none"
			}
		}
	};
	a.complete = function () {
		if (a.initiated && (!a.loadedModules.playbar || a.PB.playbarCreated))
			if (!a.loadedModules.toc || a.toc.tocCreated)
				if (!a.loadedModules.border || a.borderCreated) {
					var c = a("initialLoading");
					c && c.parentElement.removeChild(c);
					a.unblockFromLMS();
					a.passwordAccepted && !a.completed && (a.completed = !0, a.responsive && a.adjustResponsiveItems(a.ReasonForDrawing.kRegularDraw), a.fireModuleReadyEvent(a.currentWindow), a.device ==
						a.DESKTOP && a.D.project_main.autoplay && (a.currentWindow.cpAPIInterface && a.currentWindow.cpAPIInterface.canPlay()) && a.movie.play())
				}
	};
	a.newElem = function (c) {
		c = document.createElement(c);
		a.shouldScale && a.fixWebkitScaling(c);
		return c
	};
	a.fixWebkitScaling = function (c) {
		if (a.shouldScale && c && c.style) {
			var b = c.style.WebkitTransform;
			b && -1 != b.toString().indexOf("translate3d") || (c.style.WebkitTransform += "translate3d(0px, 0px, 0px)")
		}
	};
	a.addDCHDiv = function (c, b) {
		var d = document.createElement("div");
		d.style.width = c.style.width;
		d.style.height = c.style.height;
		d.style.display = "block";
		d.style.position = "absolute";
		d.style.left = "0px";
		d.style.top = "0px";
		d.style.backgroundColor = "#ffffff";
		d.style.opacity = 0;
		a.registerGestureEvent(d, a.GESTURE_EVENT_TYPES.TAP, b);
		c.appendChild(d);
		return d
	};
	a.clearCanvasProperly = function (a) {
		a.element.width = a.element.width
	};
	a.cloneObject = function (c) {
		if (null == c || "object" != typeof c) return c;
		var b = c.constructor(),
			d;
		for (d in c) c.hasOwnProperty(d) && (b[d] = a.cloneObject(c[d]));
		return b
	};
	a.showHint = function (c, b) {
		a.disableInteractions ||
			(b.hintFeedback = new a.Feedback(c, null, !1, a.FeedbackType.HINT), b.hintFeedback.onRollover())
	};
	a.hideHint = function (c, b) {
		if (!a.disableInteractions && b && b.hintFeedback) b.hintFeedback.onRollout()
	};
	a.addRewrapObjectAsPerRestOfProjectItem = function (c) {
		if (c) {
			var b = a.movie.stage.getSlideDiv().firstChild;
			if (b) {
				var d = a.movie.stage.m_lowestRewrapElementThatIsRestOfProjectAndOnTop;
				d ? b.insertBefore(c, d) : b.appendChild(c)
			}
		}
	};
	a.addDivObjectAsPerRestOfProjectItem = function (c) {
		if (c) {
			var b = a.movie.stage.getSlideDiv();
			if (b) {
				var d =
					a.movie.stage.m_lowestElementThatIsRestOfProjectAndOnTop;
				d ? b.insertBefore(c, d) : b.appendChild(c)
			}
		}
	};
	a.moveRewrapElemToTop = function (c) {
		c && (c.parentNode.removeChild(c), a.addRewrapObjectAsPerRestOfProjectItem(c))
	};
	a.moveDivElemToTop = function (c) {
		c && (c.parentNode.removeChild(c), a.addDivObjectAsPerRestOfProjectItem(c))
	};
	a.redrawItem = function (c, b) {
		void 0 === b && (b = !1);
		var d = a(c);
		if (d && !a("dummyStyle")) {
			var e = d.style.display,
				f;
			f = !1 == b ? document.createElement("style") : document.createTextNode("");
			f.id = "dummyStyle";
			document.body.appendChild(f);
			setTimeout(function () {
				document.body.removeChild(f);
				d.style.display = e
			}, 50)
		}
	};
	a.g_clickTimer = 0;
	a.isClickTimerRunning = function () {
		return 0 != a.g_clickTimer
	};
	a.startClickTimer = function (c, b) {
		a.isClickTimerRunning() || (a.g_clickTimer = setInterval(b, c))
	};
	a.stopClickTimer = function () {
		a.isClickTimerRunning() && (clearInterval(a.g_clickTimer), a.g_clickTimer = 0)
	};
	a.getGradientSvgStr = function (a, b, d, e, f) {
		var h = "";
		if (!a.cs || 2 > a.cs.length) return "";
		if (0 == a.t) {
			if (h = "linearGradient", void 0 == a.x1 ||
				void 0 == a.x2 || void 0 == a.y1 || void 0 == a.y2) return ""
		} else if (1 == a.t) {
			if (h = "radialGradient", void 0 == a.cx || void 0 == a.cy || void 0 == a.r) return ""
		} else return ""; if (void 0 == e || 0 == e) e = 1;
		if (void 0 == f || 0 == f) f = 1;
		var g = "<" + h + ' id="grad1" gradientUnits="userSpaceOnUse"';
		0 == a.t ? g += ' x1="' + a.x1 * e + '" y1="' + a.y1 * f + '" x2="' + a.x2 * e + '" y2="' + a.y2 * f + '"' : (g += ' cx="' + a.cx * e + '" cy="' + a.cy * f + '" r="' + a.r * e + '"', void 0 != a.tf && (void 0 != a.tf.x && void 0 != a.tf.y) && (g += ' gradientTransform="translate(' + a.tf.x * e + " " + a.tf.y * f + ')"'));
		var k =
			"pad";
		void 0 != a.s && (1 == a.s ? k = "reflect" : 2 == a.s && (k = "repeat"));
		for (var l = "", j = 0; j < a.cs.length; ++j) var m = a.cs[j],
		l = l + ('<stop offset="' + m.p + '%" style="stop-color:' + m.c + ";stop-opacity:" + m.o + '" />');
		return '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="' + b * e + '" height="' + d * f + '"><defs>' + (g + (' spreadMethod="' + k + '">')) + l + "</" + h + "></defs>" + ('<rect x="0" y="0" width="' + b * e + '" height="' + d * f + '" fill="url(#grad1)"/>') + "</svg>"
	};
	a.getGradientFill = function (c, b, d, e) {
		if (!b || !c.cs || 2 > c.cs.length) return null;
		void 0 == d && (d = 1);
		void 0 == e && (e = 1);
		var f = null;
		if (0 == c.t) {
			if (void 0 == c.x1 || void 0 == c.x2 || void 0 == c.y1 || void 0 == c.y2) return null;
			f = b.createLinearGradient(c.x1 * d, c.y1 * e, c.x2 * d, c.y2 * e)
		} else if (1 == c.t) {
			if (void 0 == c.cx || void 0 == c.cy || void 0 == c.r) return null;
			var f = c.cx,
				h = c.cy;
			void 0 != c.tf && (void 0 != c.tf.x && void 0 != c.tf.y) && (f += c.tf.x, h += c.tf.y);
			f = b.createRadialGradient(f * d, h * e, 0, f * d, h * e, c.r * d)
		} else return null;
		for (b = 0; b < c.cs.length; ++b) d = c.cs[b], e = a.getRGBA(d.c, d.o), f.addColorStop(d.p / 100, e);
		return f
	};
	a.drawLineCapStyle =
		function (c, b, d, e, f, h, g, k, l) {
			if (0 != Math.sqrt((e - b) * (e - b) + (f - d) * (f - d))) switch (k) {
				case 1:
					a.drawSquareCap(c, b, d, e, f, h, g, l);
					break;
				case 2:
					a.drawRoundCap(c, b, d, e, f, h, g, l);
					break;
				case 3:
					a.drawDiamondCap(c, b, d, e, f, h, g, l);
					break;
				case 4:
					a.drawArrowCap(c, b, d, e, f, h, g, l)
			}
	};
	a.drawRoundCap = function (a, b, d, e, f, h, g, k) {
		var l = 0,
			j = 0,
			m = 0,
			l = 0,
			l = Math.sin(0.349),
			m = (4 + g / (2 * l)) / 2;
		0 == k ? (l = b, j = d) : (l = e, j = f);
		a.save();
		a.beginPath();
		a.arc(l, j, m, 0, 2 * Math.PI, !1);
		a.closePath();
		a.fillStyle = h;
		a.fill();
		a.restore()
	};
	a.drawSquareCap = function (a,
		b, d, e, f, h, g, k) {
		var l = 0,
			j = 0,
			m = 0,
			n = 0,
			o = n = 0,
			p = 0,
			s = l = 0,
			j = 0,
			j = Math.sin(0.349),
			l = (4 + g / (2 * j)) / 2;
		0 == k ? (j = b, m = d) : (j = e, m = f);
		n = e - b;
		0 == n ? (n = 0, p = o = l, l = 0) : (s = (f - d) / n, 0 != s ? (n = Math.sqrt(l * l / (s * s + 1)), o = s * n, s = -1 / s, p = Math.sqrt(l * l / (s * s + 1)), l = s * p) : (n = l, p = o = 0));
		a.save();
		a.beginPath();
		a.moveTo(j - n - p, m - o - l);
		a.lineTo(j + n - p, m + o - l);
		a.lineTo(j + n + p, m + o + l);
		a.lineTo(j - n + p, m - o + l);
		a.lineTo(j - n - p, m - o - l);
		a.closePath();
		a.fillStyle = h;
		a.fill();
		a.restore()
	};
	a.drawDiamondCap = function (a, b, d, e, f, h, g, k) {
		var l = 0,
			j = 0,
			m = 0,
			n = 0,
			o = n = 0,
			p = 0,
			s = l =
				0,
			j = 0,
			j = Math.sin(0.349),
			l = (4 + g / (2 * j)) / 2;
		0 == k ? (j = b, m = d) : (j = e, m = f);
		n = e - b;
		0 == n ? (n = 0, p = o = l, l = 0) : (s = (f - d) / n, 0 != s ? (n = Math.sqrt(l * l / (s * s + 1)), o = s * n, s = -1 / s, p = Math.sqrt(l * l / (s * s + 1)), l = s * p) : (n = l, p = o = 0));
		a.save();
		a.beginPath();
		a.moveTo(j - n, m - o);
		a.lineTo(j - p, m - l);
		a.lineTo(j + n, m + o);
		a.lineTo(j + p, m + l);
		a.lineTo(j - n, m - o);
		a.closePath();
		a.fillStyle = h;
		a.fill();
		a.restore()
	};
	a.drawArrowCap = function (a, b, d, e, f, h, g, k) {
		var l = 0,
			j = 0,
			m = 0,
			n = 0,
			o = l = n = 0,
			p = 0,
			s = 0,
			u = 0,
			q = p = u = s = 0,
			n = 0,
			n = Math.sqrt((e - b) * (e - b) + (f - d) * (f - d));
		if (0 != n) {
			s = (e -
				b) / n;
			u = (f - d) / n;
			p = Math.cos(0.349);
			q = Math.sin(0.349);
			l = 1;
			1 < g && (l = Math.sqrt(g));
			var n = g / (2 * q),
				j = 6 * l + n,
				m = 4 + n,
				n = j * (s * p - u * q),
				l = j * (u * p + s * q),
				o = j * (s * p + u * q),
				p = j * (u * p - s * q),
				s = m * s,
				u = m * u,
				r = j = q = m = g = 0,
				w = 0;
			0 == k ? (g = b - s, m = d - u, q = b + n - s, j = d + l - u, r = b + o - s, w = d + p - u) : (g = e + s, m = f + u, q = e - n + s, j = f - l + u, r = e - o + s, w = f - p + u);
			a.save();
			a.beginPath();
			a.moveTo(g, m);
			a.lineTo(q, j);
			a.lineTo(r, w);
			a.lineTo(g, m);
			a.closePath();
			a.fillStyle = h;
			a.fill();
			a.restore()
		}
	};
	a.getPattern = function (a, b, d) {
		var e = [];
		switch (a) {
			case 1:
				e[0] = d * b;
				e[1] = b;
				break;
			case 2:
				e[0] =
					b;
				e[1] = b;
				break;
			case 3:
				e[0] = d * b;
				e[1] = b;
				e[2] = b;
				e[3] = b;
				break;
			case 4:
				e[0] = d * b;
				e[1] = b;
				e[2] = b;
				e[3] = b;
				e[4] = b;
				e[5] = b;
				break;
			default:
				e[0] = 1E4 * b, e[1] = 0
		}
		return e
	};
	a.dashStruct = function () {
		this.m_drawingDash = !0;
		this.m_offset = this.m_patternIndex = 0
	};
	a.drawDashedLineImpl = function (a, b, d, e, f, h, g) {
		var h = h - e,
			g = g - f,
			k = Math.sqrt(h * h + g * g),
			l = 0,
			j = 0,
			m = 0,
			n = 0,
			o = 0;
		if (0 != k) {
			h /= k;
			g /= k;
			l = k;
			j = -d.m_offset;
			k = d.m_drawingDash;
			for (m = d.m_patternIndex; j < l;) j += b[m], j >= l && (d.m_offset = b[m] - (j - l), d.m_patternIndex = m, d.m_drawingDash = k, j = l), n = e +
				j * h, o = f + j * g, k ? a.lineTo(n, o) : a.moveTo(n, o), k = !k, m = (m + 1) % b.length
		}
	};
	a.drawDashedLine = function (c, b, d, e, f, h) {
		var h = a.getPattern(h, 7, 3),
			g = new a.dashStruct;
		a.drawDashedLineImpl(c, h, g, b, d, e, f)
	};
	a.drawDashedCurve = function (a, b, d, e, f, h, g, k, l, j, m, n) {
		var o = j = 0,
			p = m = 0,
			s = p = 0,
			u = 0,
			q = -d.m_offset,
			r = d.m_drawingDash,
			w = d.m_patternIndex,
			z = u = 0,
			v = 0,
			D = s = 0,
			A = o = 0,
			F = 0;
		if (0 > n) {
			n = 0;
			j = e;
			o = f;
			for (u = 1; 100 > u; ++u) p = u / 100, s = 1 - p, m = s * s * j + 2 * p * s * h + p * p * k, p = s * s * o + 2 * p * s * g + p * p * l, n += Math.sqrt((m - j) * (m - j) + (p - o) * (p - o)), j = m, o = p;
			if (0 > n || 0 == n) return
		}
		Math.sqrt((h -
			e) * (h - e) + (g - f) * (g - f));
		m = e;
		p = f;
		j = h;
		for (o = g; q < n;) q += b[w], q >= n && (d.m_offset = b[w] - (q - n), d.m_patternIndex = w, d.m_drawingDash = r, q = n), A = m, F = p, u = p - o, z = j - m, v = m * o - p * j, p = q / n, 1 < p && (p = 1), s = 1 - p, j = s * e + p * h, o = s * f + p * g, m = s * s * e + 2 * p * s * h + p * p * k, p = s * s * f + 2 * p * s * g + p * p * l, s = p - o, D = j - m, o = m * o - p * j, 0 != D * u - z * s ? (j = (z * o - D * v) / (D * u - z * s), o = (u * o - s * v) / (z * s - D * u)) : (j = A, o = F), r ? a.quadraticCurveTo(j, o, m, p) : a.moveTo(m, p), r = !r, w = (w + 1) % b.length
	};
	a.drawDashedOval = function (c, b, d, e, f, h) {
		var g = 0,
			k = 0,
			l = 0,
			j = 0,
			m = 0,
			n = m = 0,
			o = 0,
			p = 0,
			s = 0,
			u = 0,
			q = 0,
			r = new a.dashStruct,
			h = a.getPattern(h, 7, 3);
		0 > f && (f = e);
		g = Math.PI / 4;
		k = e / Math.cos(g / 2);
		l = f / Math.cos(g / 2);
		c.beginPath();
		j = 0;
		c.moveTo(b + e, d);
		s = b + e;
		u = d;
		for (q = 0; 8 > q; ++q) j += g, m = j - g / 2, o = b + Math.cos(m) * k, p = d + Math.sin(m) * l, m = b + Math.cos(j) * e, n = d + Math.sin(j) * f, a.drawDashedCurve(c, h, r, s, u, o, p, m, n, e, f, -1), s = m, u = n;
		c.closePath()
	};
	a.drawDashedArc = function (c, b, d, e, f, h, g, k, l) {
		var j = 0,
			m = 0,
			n = 0,
			o = 0,
			p = 0,
			s = p = 0,
			u = 0,
			q = 0,
			r = e - h,
			w = f,
			z = 0;
		0 > g && (g = h);
		j = Math.PI / 4;
		m = h / Math.cos(j / 2);
		n = g / Math.cos(j / 2);
		o = 0;
		c.moveTo(e - h, f);
		for (z = 0; 16 > z; ++z)
			if (o += j, p = o - j / 2,
				u = e + Math.cos(p) * m, q = f + Math.sin(p) * n, p = e + Math.cos(o) * h, s = f + Math.sin(o) * g, o > k && o <= l) a.drawDashedCurve(c, b, d, r, w, u, q, p, s, h, g, Math.PI * h / 4), r = p, w = s;
			else if (o <= k) r = p, w = s, c.moveTo(r, w);
		else if (o > l) break
	};
	a.drawDashedRectangle = function (c, b, d, e, f, h, g) {
		var k = new a.dashStruct,
			g = a.getPattern(g, 7, 3);
		0 >= h && (h = 0);
		c.beginPath();
		c.moveTo(b, d + f - h);
		a.drawDashedLineImpl(c, g, k, b, d + f - h, b, d + h);
		0 < h && a.drawDashedArc(c, g, k, b + h, d + h, h, h, Math.PI, 3 * Math.PI / 2);
		a.drawDashedLineImpl(c, g, k, b + h, d, b + e - h, d);
		0 < h && a.drawDashedArc(c, g,
			k, b + e - h, d + h, h, h, 3 * Math.PI / 2, 2 * Math.PI);
		a.drawDashedLineImpl(c, g, k, b + e, d + h, b + e, d + f - h);
		0 < h && a.drawDashedArc(c, g, k, b + e - h, d + f - h, h, h, 2 * Math.PI, 5 * Math.PI / 2);
		a.drawDashedLineImpl(c, g, k, b + e - h, d + f, b + h, d + f);
		0 < h && a.drawDashedArc(c, g, k, b + h, d + f - h, h, h, Math.PI / 2, Math.PI);
		c.closePath()
	};
	a.drawDashedPolyLine = function (c, b, d, e, f) {
		var h = new a.dashStruct,
			d = a.getPattern(d, 7, 3),
			g = 0,
			k = 0,
			l = 0,
			j = 0,
			m = 0;
		if (0 != b.length) {
			g = b[0].x;
			k = b[0].y;
			c.beginPath();
			c.moveTo(g, k);
			for (m = 1; m < b.length; ++m) l = b[m].x, j = b[m].y, a.drawDashedLineImpl(c,
				d, h, g * e, k * f, l * e, j * f), g = l, k = j;
			l = b[0].x;
			j = b[0].y;
			a.drawDashedLineImpl(c, d, h, g * e, k * f, l * e, j * f);
			c.closePath()
		}
	};
	a.moveTo = function (a, b, d) {
		a.moveTo(b, d)
	};
	a.lineTo = function (a, b, d) {
		a.lineTo(b, d)
	};
	a.bezierCurveTo = function (a, b, d, e, f, h, g) {
		a.bezierCurveTo(b, d, e, f, h, g)
	};
	a.getBezierLength = function (a, b, d, e, f, h, g, k, l) {
		for (var j = 0, m = 0, n = 0, o = 0, p = 0, m = 0, s = a, u = b, j = 1; j < l; ++j) m = j / l, n = 1 - m, p = n * n * n * a + 3 * m * n * n * d + 3 * m * m * n * f + m * m * m * g, m = n * n * n * b + 3 * m * n * n * e + 3 * m * m * n * h + m * m * m * k, o += Math.sqrt((p - s) * (p - s) + (m - u) * (m - u)), s = p, u = m;
		return o
	};
	a.getCPSlideData =
		function () {
			var c = [],
				b = a.movie.stage.slides.length;
			for (i = 0; i < b; ++i) {
				var d = a.D[a.movie.stage.slides[i]],
					e = {};
				e.slideNumber = i + 1;
				e.title = d.lb;
				e.idealTime = (d.to - d.from + 1) / cpInfoFPS;
				e.isQuestionSlide = !1;
				if (a.movie.playbackController && (d = a.movie.playbackController.GetQuizController())) d = d.GetSlideType(i), e.isQuestionSlide = "Question" == d ? !0 : !1;
				e.isEndSlide = !1;
				c[i] = e
			}
			e.isEndSlide = !0;
			return c
	};
	a.doesCourseHasQuiz = function () {
		return !a.movie.playbackController ? !1 : a.movie.playbackController.HasQuiz()
	};
	a.drawDashedBezierCurve =
		function (c, b, d, e, f, h, g, k, l, j, m) {
			var n = 0,
				o = 0,
				p = 0,
				s = 0,
				u = n = 0,
				q = 3,
				u = -d.m_offset,
				r = d.m_drawingDash,
				w = d.m_patternIndex,
				z = 0,
				v = 0,
				D = 0,
				s = 0,
				A = !1,
				p = a.getBezierLength(e, f, h, g, k, l, j, m, 100);
			if (!(0 >= p))
				for (; u < p;) {
					D = u;
					z = b[w];
					if (u + z >= p) {
						if (d.m_offset = b[w] - (u + z - p), d.m_patternIndex = w, d.m_drawingDash = r, z = p - u, z > p && (z = p), A = !0, !r) {
							c.moveTo(j, m);
							break
						}
					} else {
						if (0 > u) {
							for (s = u; 0 > s;) s += z;
							z = s;
							u = 0
						}
						d.m_offset = 0;
						d.m_patternIndex = 0;
						d.m_drawingDash = !0
					}
					0 > D && (D = 0);
					if (r && 0 < z) {
						z > p && (z = p);
						q = 3 < z ? 3 : z;
						v = z;
						do D = v > q ? D + q : D + v, n = D / p, o = 1 - n, 1 <= n ?
							(s = j, n = m) : (s = o * o * o * e + 3 * n * o * o * h + 3 * n * n * o * k + n * n * n * j, n = o * o * o * f + 3 * n * o * o * g + 3 * n * n * o * l + n * n * n * m), c.lineTo(s, n), v -= q; while (0 < v);
						if (A) break
					} else n = (u + z) / p, o = 1 - n, 1 <= n ? (s = j, n = m) : (s = o * o * o * e + 3 * n * o * o * h + 3 * n * n * o * k + n * n * n * j, n = o * o * o * f + 3 * n * o * o * g + 3 * n * n * o * l + n * n * n * m), c.moveTo(s, n);
					r = !r;
					w = (w + 1) % b.length;
					0 > u && (u = 0);
					u += z
				}
	};
	a.handleQuizzingItemsInReviewMode = function (c, b, d) {
		if (a.movie.playbackController) {
			var e = a.movie.playbackController.GetQuizController();
			if (e) {
				var f = b.iqb,
					e = e.GetIsInReviewMode();
				if (f) switch (b.qbt) {
					case "submit":
					case "submitAll":
					case "clear":
					case "skip":
					case "back":
						if (!0 ==
							e) {
							b = a.movie.stage.currentSlide;
							if ("Question Slide" == b.st) {
								if ((b = a.getQuestionObject(b.qs)) && b.getIsKnowledgeCheck()) break;
								a.hide(d)
							}
							c.tabIndex = -1
						}
						break;
					case "reviewModeNext":
					case "reviewModeBack":
						!1 == e ? (a.hide(d), c.tabIndex = -1) : a.show(d);
						break;
					case "postResult":
						if (b = a.movie.playbackController.GetLMSType(), !a.movie.playbackController.CanPostResults() || b && "INTERNALSERVER" == b.toUpperCase()) a.hide(d), c.tabIndex = -1
				}
			}
		}
	};
	a.createCanvas = function (c, b, d, e, f, h, g) {
		f || (f = a.newElem("canvas"));
		f.width = d;
		f.height =
			e;
		f.style.width = void 0 == h ? d + "px" : h;
		f.style.height = void 0 == g ? e + "px" : g;
		f.left = c;
		f.top = b;
		f.style.left = c + "px";
		f.style.top = b + "px";
		return new a.Canvas(f)
	};
	a.createResponsiveCanvas = function (c, b, d, e, f) {
		e || (e = a.newElem("canvas"));
		c.ipiv ? (e.width = b, e.height = d) : (e.width = 0, e.height = 0);
		a.applyResponsiveStyles(e, c, f, !0);
		return new a.Canvas(e)
	};
	a.preventEventDefault = function (a) {
		a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
	};
	a.getHitTestingRect = function (c) {
		var b = {
			minX: 0,
			minY: 0,
			maxX: 0,
			maxY: 0
		};
		if (!c) return b;
		var d = c.getBoundingClientRect(),
			c = a.getScaledPosition(d.left, d.top),
			d = a.getScaledPosition(d.right, d.bottom);
		b.minX = c.X;
		b.minY = c.Y;
		b.maxX = d.X;
		b.maxY = d.Y;
		b.width = b.maxX - b.minX;
		b.height = b.maxY - b.minY;
		return b
	};
	a.IsPointWithElem = function (a, b, d, e, f, h, g) {
		var k = 0,
			l = 0,
			j = 0;
		a.rotateAngle && (k = a.rotateAngle);
		a = b - (e + h) / 2;
		d -= (f + g) / 2;
		l = a * Math.cos(Math.PI * -k / 180) - d * Math.sin(Math.PI * -k / 180);
		j = a * Math.sin(Math.PI * -k / 180) + d * Math.cos(Math.PI * -k / 180);
		l += (e + h) / 2;
		j += (f + g) / 2;
		return l >= e && l <= h && j >= f && j <= g ? !0 : !1
	};
	a.handleDblClick =
		function (c) {
			var b = null,
				d = null,
				b = null,
				b = a.getScaledPosition(getPageX(c), getPageY(c)),
				c = b.X,
				e = b.Y,
				f = null,
				h = 0,
				b = a.movie.stage.getClickManager(),
				d = b.getDoubleClickArr(cpInfoCurrentFrame);
			if (!(null == d || 0 == d.length)) {
				a.stopClickTimer();
				for (h = 0; h < d.length; ++h)
					if (b = d[h])
						if (f = b.m_htmlElem, !b.m_obj || !b.m_obj.actionInProgress) {
							var g = a.getHitTestingRect(f);
							if (b.m_obj && a.IsPointWithElem(f, c, e, g.minX, g.minY, g.maxX, g.maxY)) {
								var c = 0,
									k, l, e = b.m_obj.currentAttempt;
								void 0 != e && (c = e);
								b.m_obj.mdi && (l = a.D[b.m_obj.mdi]);
								void 0 != l && (k = l.dn);
								k && a.SubmitInteractions(k, a.QuestionStatusEnum.CORRECT, c);
								a.clickSuccessHandler(b.m_obj);
								b.m_obj.handled = !0;
								return
							}
						}
				if ((b = d[0]) && b.m_obj && !b.m_obj.actionInProgress)
					if (c = a.D[b.m_obj.mdi].visible, d = 0, e = b.m_obj.currentAttempt, void 0 != e && (d = e), d += 1, b.m_obj.currentAttempt = d, e = b.m_obj.ma, f = -1 != e && d == e && c, h = (-1 == e || d <= e) && c, b.m_obj.mdi && (l = a.D[b.m_obj.mdi]), void 0 != l && (k = l.dn), k && a.SubmitInteractions(k, a.QuestionStatusEnum.INCORRECT, d - 1), a.clickFailureHandler(b.m_obj, f, h), !b.m_obj.handled) b.m_obj.handled = -1 != e && d >= e && c
			}
	};
	a.handleRightClick = function (c) {
		var b = null,
			d = null,
			b = null,
			b = a.getScaledPosition(getPageX(c), getPageY(c)),
			e = b.X,
			f = b.Y,
			h = null,
			d = !1,
			g = 0,
			b = a.movie.stage.getClickManager(),
			d = b.getRightClickArr(cpInfoCurrentFrame);
		if (!(null == d || 0 == d.length)) {
			a.stopClickTimer();
			for (g = 0; g < d.length; ++g)
				if ((b = d[g]) && (!b.m_obj || !b.m_obj.actionInProgress)) {
					var h = b.m_htmlElem,
						k = a.getHitTestingRect(h);
					if (b.m_obj && a.IsPointWithElem(h, e, f, k.minX, k.minY, k.maxX, k.maxY)) {
						var e = 0,
							l, j, f = b.m_obj.currentAttempt;
						void 0 != f &&
							(e = f);
						b.m_obj.mdi && (j = a.D[b.m_obj.mdi]);
						void 0 != j && (l = j.dn);
						l && a.SubmitInteractions(l, a.QuestionStatusEnum.CORRECT, e);
						d = a.clickSuccessHandler(b.m_obj);
						b.m_obj.handled = !0;
						d && a.preventEventDefault(c);
						return
					}
				}
			if ((b = d[0]) && b.m_obj && !b.m_obj.actionInProgress)
				if (c = a.D[b.m_obj.mdi].visible, e = 0, f = b.m_obj.currentAttempt, void 0 != f && (e = f), e += 1, b.m_obj.currentAttempt = e, f = b.m_obj.ma, d = -1 != f && e == f && c, h = (-1 == f || e <= f) && c, b.m_obj.mdi && (j = a.D[b.m_obj.mdi]), void 0 != j && (l = j.dn), l && a.SubmitInteractions(l, a.QuestionStatusEnum.INCORRECT,
					e - 1), a.clickFailureHandler(b.m_obj, d, h), !b.m_obj.handled) b.m_obj.handled = -1 != f && e >= f && c
		}
	};
	a.handleMouseOut = function () {
		if (a.device == a.DESKTOP) {
			var c = a.movie.stage.getSlideDiv();
			c && (c.touchstartX = null, c.isMoving = !1)
		}
	};
	a.handleMouseMove = function (c) {
		c = c.pageX + "," + c.pageY;
		a.LastMousePosition != c && (a.LastMousePosition = c, c = document.getElementById("playbar"), void 0 != c && c.animator && c.animator.showPlaybar(cpInfoCurrentFrame >= a.movie.stage.lastFrame ? !0 : !1))
	};
	a.handleMouseOver = function () {
		var c = document.getElementById("playbar");
		void 0 != c && c.animator && c.animator.showPlaybar(cpInfoCurrentFrame >= a.movie.stage.lastFrame ? !0 : !1)
	};
	var v = {};
	a.initObjectFactory = function () {
		v.questionSlideReviewLabel = a.QuestionSlideReviewLabel;
		v.progressSlideLabel = a.ProgressSlideLabel;
		v.fibAnswer = a.FIBAnswer;
		v.shortAnswer = a.ShortAnswer;
		v.sequenceInput = a.SequenceInput;
		v.matchingAnswer = a.MatchingAnswer;
		v.matchingItem = a.MatchingItem;
		v.likertItem = a.LikertItem;
		v.hotspotInput = a.HotspotInput;
		v.multipleChoiceInput = a.MCQInput;
		v.resultSlideLabel = a.ResultSlideLabel;
		v.singleChoiceInput = a.MCQInput;
		v.input = a.TextInput;
		v.textbutton = a.TextButton;
		v.shape = a.Shape;
		v.image = a.DisplayObject;
		v.group = a.Group;
		v.svg = a.DisplayObject;
		v.text = a.DisplayObject;
		v.placeholder = a.Placeholder;
		v.hb = a.HighlightBox;
		v.rai = a.RolloverAreaItem;
		v.mc = a.MouseClick;
		v.gf = a.Gradient;
		v.imgf = a.ImageFill;
		v.typingtext = a.TypingText;
		v.line = a.Line;
		v.drawingItem = a.DrawingItem;
		v.answerArea = a.AnswerArea;
		v.rectWithText = a.RectWithText;
		v.autoShape = a.AutoShape;
		v.widget = a.Widget;
		v.WebObject = a.WebObject;
		v.eventVideo =
			a.EventVideo;
		v.slideVideo = a.SlideVideo;
		v.fmrVideo = a.FMRVideo;
		v.cpvcVideo = a.CPVCVideo;
		v.zoom = a.Zoom;
		v.ta = a.TextAnimation;
		v.animationItem = a.AnimationItem;
		if (a.extObjInfo && a.IsValidObj(a.extObjInfo))
			for (var c = 0; c < a.extObjInfo.length; ++c) a.IsValidObj(a.extObjInfo[c]) && (v[a.extObjInfo[c].n] = a.extObjInfo[c].cls)
	};
	a.parseChildren = function (c, b) {
		var d = [],
			e = c.id + "c";
		W[e] && d.push(W[e]);
		for (e = c.firstChild; e; e = e.nextSibling) {
			var f = e,
				h = !1;
			"cp-rewrap" == e.className && (f = e.firstChild, h = !0);
			if (f.nodeType == Node.ELEMENT_NODE) {
				for (var g =
					(f.className + "").split(" "), k = null, l, j = !1, m = "", n = 0; n < g.length && null == k; ++n)
					if ("cp-" == g[n].substr(0, 3)) {
						l = g[n].substr(3);
						var k = v[l],
							o = g[n].substr(3);
						if ("gf" == o || "imgf" == o || "drawingItem" == o || "answerArea" == o || "rectWithText" == o || "autoShape" == o) j = !0;
						if (("gf" == o || "imgf" == o) && f.parentElement) m = f.parentElement.id
					}
				if (k) {
					if (g = a.ropMap[f.id]) g.restOfProjectDoOnNewSlide(), a.verbose && a.log("resued childObj from cp.ropMap for " + f.id);
					else {
						j ? (0 == m.length && (m = f.id), g = new k(f, m, b)) : g = new k(f, b);
						a.verbose && a.log("created new " +
							l);
						k = 0;
						if (j = g.getAttribute("dn")) k = a.D[j].rp;
						f.id && 1 == k && (a.ropMap[f.id] = g, a.verbose && a.log("added " + f.id + " to cp.ropMap"))
					}
					G[f.id] = g;
					h ? W[f.id] = g : d.push(g)
				}
			}
		}
		return d
	};
	a.removeFromDisplayObjectMap = function (a) {
		G[a] = void 0
	};
	a.parseFrameset = function (c) {
		a.verbose && a.log("parseFrameset " + c.id);
		var b = a.parseChildren(c);
		PPTXLib.instanceManager && PPTXLib.addToInstanceManager(c.id, b[0]);
		if (a.device == a.IDEVICE || a.device == a.ANDROID) {
			var d = a.D[c.id];
			if (d && (d = d.type, a.kCPOTFLVItem == d || a.kCPOTVideo == d || a.kCPFullMotion ==
				d || a.kCPOTVideoResource == d)) return new a.VideoFrameSet(c, b)
		}
		b = new a.FrameSet(c, b);
		return G[c.id] = b
	};
	a.parseTimeline = function (c) {
		return new a.Timeline(c)
	};
	a.shouldMoveTo = function (c) {
		return a.movie.stage.canUpdateToFrame(c)
	};
	a.getCpInfoOriginalFPS = function () {
		return a.movie.fps
	};
	a.getCpInfoSpeed = function () {
		return a.movie.speed
	};
	a.getCpElapsedMovieTime = function () {
		return a.movie.elapsedMovieTime
	};
	a.getCpIsPlaying = function () {
		return !a.movie.paused
	};
	a.showValue = function (c) {
		a.showHideElements();
		a.movie.pause(a.ReasonForPause.SHOW_VALUE_AT_FRAME);
		a.movie.jumpToFrame(c)
	};
	a.hyperlinkClick = function (c) {
		if (c = a.D[c]) c = c.oca, a.movie.paused && (c = c.replace("cpCmndResume = 1;", ""), c = c.replace("cp.actionChoiceContinueMovie();", "")), a.movie.executeAction(c)
	};
	a.SubmitInteractions = function (c, b, d, e, f) {
		var h = a.D[c],
			c = aa(c),
			h = a.D[c],
			g = h.type,
			k = b == a.QuestionStatusEnum.CORRECT || b == a.QuestionStatusEnum.PARTIAL_CORRECT;
		if (h) {
			var l = void 0 != h.siq && h.siq;
			if (l) {
				var j = a.getQuestionObject(c);
				if (j) {
					if (!a.movie.playbackController) return;
					var m = a.movie.playbackController.GetQuizController();
					if (!m) return;
					var n = j.isDisabled,
						o = !1;
					!m.GetIsInReviewMode() && !m.GetIsQuizCompleted() && j.setCurrentAttempt(d + 1);
					d = e;
					if (void 0 == d || void 0 == f)
						if (!j.getIsInteractiveWidget() && "fill-in" == j.getInteractionType()) {
							f = document.getElementById(c + "_inputField");
							if (!f) return !1;
							d = h.exp;
							f = f.value
						} else d = ["1"], f = k ? "1" : "0";
					j.questionData.cal = d;
					j.setSelectedAnswers(f);
					b == a.QuestionStatusEnum.CORRECT || b == a.QuestionStatusEnum.PARTIAL_CORRECT ? o = !0 : j.getCurrentAttempt() >= j.getNumberOfAttempts() && (o = !0);
					j.setShouldAddToTotal(void 0 !=
						h.sat && h.sat);
					!m.GetIsInReviewMode() && !m.GetIsQuizCompleted() && (o ? (k ? j.setQuestionStatus(j.QuestionStatusEnum.CORRECT) : j.setQuestionStatus(j.QuestionStatusEnum.INCORRECT), n || j.endQuestion(!0)) : j.endQuestion(!1))
				}
			}
			c = {
				itemname: c,
				frameNumber: cpInfoCurrentFrame,
				objecttype: g,
				issuccess: k,
				slideNumber: cpInfoCurrentSlideIndex + 1,
				includedInQuiz: l
			};
			j && (c.questioneventdata = j.getQuestionEventData());
			a.em.fireEvent("CPInteractiveItemSubmit", c)
		}
	};
	a.hotspotQuestionSlideHandler = function (c) {
		a.m_gestureHandler.disableGestures();
		var b = c.currentTarget,
			d = a.getQuestionObject(b.childNodes[0].id);
		d && d.hotspotQuestionHandler(b, getPageX(c), getPageY(c));
		a.m_gestureHandler.enableGestures()
	};
	a.handleClickExternal = function (c) {
		function b(c) {
			return a.kCPOTClickBoxItem == c.type || a.kCPOTScorableButtonItem == c.type || a.kCPOTAutoShape == c.type
		}
		function d(c, d, e) {
			function f() {
				a.stopClickTimer();
				h += 1;
				g.currentAttempt = h;
				var d = g.ma,
					e = g.mdi,
					j = a.D[e].visible,
					e = a.showHideFeedbackCaptionsClickHandler(c, -1 != d && h == d && j, a.D[e].dn, (-1 == d || h <= d) && j);
				b(g) && !g.handled && (g.handled = -1 != d && h >= d && j);
				return e
			}
			var g = d,
				h = e;
			a.isClickTimerRunning() || a.startClickTimer(500, f)
		}
		function e() {
			j = !0;
			if (null == n && (k.ofc || -1 != k.ma)) o = m, n = k, q = s, u = p, r = currElementDivData
		}
		if (a.isClickTimerRunning()) return c.cpCustomData && c.cpCustomData.asPartOfStateChange ? a.handleDblClick(c) : !1;
		for (var f = a.getScaledPosition(getPageX(c), getPageY(c)), h = f.X - window.pageXOffset, g = f.Y - window.pageYOffset, k = null, l = a("div_Slide").childNodes, j = !1, m = "", n = null, o = "", p = -1, s = 0, u = -1, q = 0, r = null, w = l.length -
				1; 0 <= w; --w)
			if (f = l[w], "DIV" == f.nodeName && "block" == f.style.display && ("feedbackClickDiv" == f.id && f.remover(), currElementDivData = a.D[f.id])) {
				var z = currElementDivData.mdi;
				if (a.D[z].visible && currElementDivData.chfn && void 0 == currElementDivData.val) {
					z = currElementDivData.mdi;
					drawingItemDivData = a.D[z];
					var s = 0,
						p = -1,
						v = currElementDivData.currentAttempt;
					void 0 != v && (s = v);
					p = currElementDivData.ma;
					k = currElementDivData;
					m = f.id;
					if (void 0 == k.amc || k.amc || !(a.device != a.IDEVICE || a.device == a.ANDROID))
						if (currElementDivData &&
							drawingItemDivData && a.kCPOTWidgetItem == currElementDivData.type && drawingItemDivData.iiw) a.HandleInteractiveWidget(c, z);
						else {
							var D = v = z = 0,
								A = 0;
							if (void 0 == f.getBoundingClientRect) z = parseFloat(f.style.left), v = parseFloat(f.style.top), D = parseFloat(f.style.left) + parseFloat(f.style.width), A = parseFloat(f.style.top) + parseFloat(f.style.height);
							else {
								var F;
								f.rotateAngle && (F = f.style.transform || f.style.msTransform || f.style.MozTransform || f.style.WebkitTransform || f.style.OTransform, a.applyTransform(f, "rotate(0)"));
								f.offsetHeight = f.offsetHeight;
								A = a.getHitTestingRect(f);
								f.rotateAngle && a.applyTransform(f, F);
								z = A.minX;
								v = A.minY;
								D = A.maxX;
								A = A.maxY
							}
							var I = 0;
							f.rotateAngle && (I = f.rotateAngle);
							var G = h,
								J = g,
								G = G - (z + D) / 2,
								J = J - (v + A) / 2,
								N = G * Math.cos(Math.PI * -I / 180) - J * Math.sin(Math.PI * -I / 180),
								I = G * Math.sin(Math.PI * -I / 180) + J * Math.cos(Math.PI * -I / 180),
								N = N + (z + D) / 2,
								I = I + (v + A) / 2,
								z = N >= z && N <= D && I >= v && I <= A ? !0 : !1;
							if (z) {
								if (currElementDivData.iqb || currElementDivData.vid) return !0;
								if (a.kCPOTAutoShape == k.type && currElementDivData.isCanvasClicked && !currElementDivData.isCanvasClicked(c, !0)) e();
								else {
									c = aa(f.id);
									if (a.D[c].enabled) {
										if (k.actionInProgress) return !1;
										if (k.dclk || k.rclk) return d(f, k, s), !1;
										l = k;
										if (!l || a.kCPOTAutoShape != l.type) l = !0;
										else {
											var h = a.movie.stage.currentSlide,
												M = !1,
												E = !1,
												c = 0;
											h && (c = h.from, "Question Slide" == h.st && h.qs && ((F = a.D[h.qs]) && "Hotspot" == F.qtp && (M = !0), (h = a.getQuestionObject(h.qs)) && h.shouldDisableOptions() && (E = !0)));
											l = !M || E ? !0 : !l.rp || !l.rpa || l.from > c ? !1 : !0
										} if (!l) return !1;
										l = currElementDivData.chfn;
										a.SubmitInteractions(f.id, a.QuestionStatusEnum.CORRECT,
											s);
										M = a.movie.stage.currentSlide;
										l(f);
										M == a.movie.stage.currentSlide && b(k) && (k.handled = !0);
										return !0
									}
									j = !1;
									break
								}
							} else currElementDivData.vid || e()
						}
				}
			}
		if (j) {
			n && (k = n, m = o, s = q, p = u, currElementDivData = r);
			if (k && k.actionInProgress) return !1;
			k && !k.iqb && (s += 1, k.currentAttempt = s, k.mdi && (E = a.D[k.mdi]), E && (M = E.dn), a.SubmitInteractions(M, a.QuestionStatusEnum.INCORRECT, s - 1));
			z = currElementDivData.mdi;
			f = a.D[z].visible;
			M = -1 != p && s == p && f;
			E = (-1 == p || s <= p) && f;
			c = "";
			k && b(k) && (c = m);
			a.showHideFeedbackCaptionsClickHandler(l[0], M,
				c, E);
			k && (b(k) && !k.handled) && (k.handled = -1 != p && s >= p && f)
		}
		return !1
	};
	a.handleClick = function (c) {
		if (!a.disableInteractions && (c.preventDefault && c.preventDefault(), c.stopPropagation && c.stopPropagation(), !a.handleClickExternal(c))) {
			var b = a("div_Slide").childNodes[0];
			if (b && ("DIV" == b.nodeName && "block" == b.style.display) && (a.getQuestionObjectName && (b = a.getQuestionObjectName(b.id), (b = a.D[b]) && "Hotspot" == b.qtp && a.hotspotQuestionSlideHandler(c)), a.extObjInfo))
				for (c = 0; c < a.extObjInfo.length && (!a.IsValidObj(a.extObjInfo[c].chcb) || !a.extObjInfo[c].chcb()); ++c);
		}
	};
	a.showHideElements = function () {
		a("blockUserInteraction").style.display = "none";
		a.autoplayDiv.style.display = "none";
		a.autoplayDiv.style.visibility = "hidden";
		a.loadedModules.playbar && (document.getElementById("playbar").style.display = "block");
		var c = document.getElementById("firstSlideSnapshot");
		c && (c.style.display = "none");
		a.gesturesDiv && (a.gesturesDiv.style.display = "none", a.gesturesDiv.parentElement.removeChild(a.gesturesDiv));
		a("gImage") && (a("gImage").className = "");
		a("gestureHint") &&
			(a("gestureHint").style.position = "absolute", a("gestureHint").style.backgroundColor = "")
	};
	a.beginMovie = function () {
		a.showHideElements();
		1 == cpInfoCurrentFrame && a.movie.am.play(1, !0);
		a.movie.play()
	};
	a.InitMedia = function () {
		a.movie.vdm.deviceSpecificInit();
		a.movie.am.deviceSpecificInit()
	};
	a.playMovie = function () {
		a.movie.play()
	};
	a.pauseMovie = function () {
		a.movie.pause()
	};
	a.mouse_click_draw = function (a, b) {
		var d = "#000000",
			e = 3;
		void 0 != b.c && (d = b.c, e = b.r);
		a.save();
		a.fillStyle = d;
		a.beginPath();
		a.arc(e, e, e, 0, 2 * Math.PI, !0);
		a.closePath();
		a.fill();
		a.restore();
		return !0
	};
	a.mcd = function (c, b, d, e, f) {
		return a.mouse_click_draw(c, b, d, e, f)
	};
	a.tcd = function (c, b, d, e, f, h, g) {
		if (!(0 >= f || 0 >= h)) {
			c.clearRect(d, e, f, h);
			c.translate(d, e);
			var e = b.width,
				d = b.height,
				k = e > f,
				l = d > h,
				j = k ? f : e,
				m = l ? h : d;
			c.drawImage(b, 0, 0, Math.ceil(j / 2), Math.ceil(m / 2), 0, 0, Math.ceil(j / 2), Math.ceil(m / 2));
			c.drawImage(b, Math.floor(e - j / 2), 0, Math.ceil(j / 2), Math.ceil(m / 2), Math.floor(f - j / 2), 0, Math.ceil(j / 2), Math.ceil(m / 2));
			c.drawImage(b, 0, Math.floor(d - m / 2), Math.ceil(j / 2), Math.ceil(m /
				2), 0, Math.floor(h - m / 2), Math.ceil(j / 2), Math.ceil(m / 2));
			c.drawImage(b, Math.floor(e - j / 2), Math.floor(d - m / 2), Math.ceil(j / 2), Math.ceil(m / 2), Math.floor(f - j / 2), Math.floor(h - m / 2), Math.ceil(j / 2), Math.ceil(m / 2));
			c.save();
			c.shadowColor = a.ConvertRGBToRGBA("#ffffff", "1");
			c.shadowOffsetX = 0;
			c.shadowOffsetY = 0;
			c.shadowBlur = 0;
			c.drawImage(b, 0, 0, Math.ceil(j / 2), Math.ceil(m / 2), 0, 0, Math.ceil(j / 2), Math.ceil(m / 2));
			c.drawImage(b, Math.floor(e - j / 2), 0, Math.ceil(j / 2), Math.ceil(m / 2), Math.floor(f - j / 2), 0, Math.ceil(j / 2), Math.ceil(m /
				2));
			c.drawImage(b, 0, Math.floor(d - m / 2), Math.ceil(j / 2), Math.ceil(m / 2), 0, Math.floor(h - m / 2), Math.ceil(j / 2), Math.ceil(m / 2));
			c.drawImage(b, Math.floor(e - j / 2), Math.floor(d - m / 2), Math.ceil(j / 2), Math.ceil(m / 2), Math.floor(f - j / 2), Math.floor(h - m / 2), Math.ceil(j / 2), Math.ceil(m / 2));
			c.fillStyle = "rgba(" + g[0] + "," + g[1] + "," + g[2] + "," + g[3] + ")";
			g = k ? f : e;
			j = l ? h : d;
			c.fillRect(Math.floor(g / 2), Math.floor(j / 2), f - g + 1, h - j + 1);
			g = 3;
			k = !k ? e / 2 : f / 2;
			l = !l ? d / 2 : h / 2;
			for (j = Math.floor(d - l - 1) - 1; j < h - l;) {
				m = h - j;
				m < g && (g = m);
				var m = 0,
					n = l - 1,
					o = k,
					g = l - 1 + g,
					o = Math.ceil(o - m),
					g = Math.ceil(g - n);
				c.drawImage(b, Math.floor(m), Math.floor(n), o, g, 0, j, o, g);
				m = e - k;
				o = e;
				o = Math.ceil(o - m);
				c.drawImage(b, Math.floor(m), Math.floor(n), o, g, Math.floor(f - k), j, o, g);
				g = 3 > h - j ? h - j : 3;
				0 >= g && (g = 1);
				j += g - 1
			}
			g = 3;
			for (e = Math.floor(k) - 1; e < f - k;) j = f - e, j < g && (g = j), m = k - 1, n = 0, o = k - 1 + g, g = l, o = Math.ceil(o - m), g = Math.ceil(g - n), c.drawImage(b, Math.floor(m), n, o, g, e, 0, o, g), n = d - l, g = Math.ceil(l), c.drawImage(b, Math.floor(m), Math.floor(n), o, g, e, Math.floor(h - l), o, g), g = 3 > f - e ? f - e : 3, 0 >= g && (g = 1), e += g - 1;
			c.restore()
		}
	};
	a.getIntersectionRect = function (a, b) {
		var d = a[0] + a[2],
			e = a[1] + a[3],
			f = b[0] + b[2],
			h = b[1] + b[3],
			g = {
				l: 0,
				t: 0,
				w: 0,
				h: 0
			};
		if (d < b[0] || e < b[1] || a[0] > f || a[1] > h) return g;
		g.l = a[0] > b[0] ? a[0] : b[0];
		g.t = a[1] > b[1] ? a[1] : b[1];
		g.w = (d < f ? d : f) - g.l;
		g.h = (e < h ? e : h) - g.t;
		return g
	};
	a.frameset_mc_draw = function (c, b, d, e, f, h, g) {
		if ("" == b || void 0 == b) return !0;
		var k = !1;
		c.save();
		var l = a.D[f];
		l.shouldShowDisabledState && (c.globalAlpha = 0.5);
		var j = a.movie.im.images[b];
		try {
			if (j)
				if (j.complete && j.nativeImage.complete) {
					a.verbose && a.log("drawing completed img " +
						b);
					if (c.centreImage && (h || g))
						if (a.responsive) {
							c.clearRect(-c.width, -c.height, 2 * c.width, 2 * c.height);
							var m = l.clientWidth,
								n = l.clientHeight;
							a.isCaptionItem(l.type) ? a.tcd(c, j.nativeImage, -m / 2 + c.tex, -n / 2 + c.tey, m, n, l.pixelColor) : c.crop ? c.drawImage(j.nativeImage, c.crop.x, c.crop.y, m, n, -m / 2 + c.tex, -n / 2 + c.tey, m, n) : c.drawImage(j.nativeImage, -m / 2 + c.tex, -n / 2 + c.tey, m, n)
						} else c.clearRect(-c.width, -c.height, 2 * c.width, 2 * c.height), c.drawImage(j.nativeImage, -j.nativeImage.width / 2 + c.tex, -j.nativeImage.height / 2 + c.tey, j.nativeImage.width,
							j.nativeImage.height);
						else if (a.responsive)
						if (a.isCaptionItem(l.type)) a.tcd(c, j.nativeImage, 0, 0, l.clientWidth, l.clientHeight, l.pixelColor);
						else if (c.crop) {
						var o = [c.crop.x, c.crop.y, l.clientWidth, l.clientHeight],
							p = a.getIntersectionRect([0, 0, j.nativeImage.width, j.nativeImage.height], o);
						o[0] = 0 > c.crop.x ? -c.crop.x : 0;
						o[1] = 0 > c.crop.y ? -c.crop.y : 0;
						c.drawImage(j.nativeImage, p.l, p.t, p.w, p.h, o[0], o[1], p.w, p.h)
					} else c.drawImage(j.nativeImage, 0, 0, l.clientWidth, l.clientHeight);
					else c.drawImage(j.nativeImage, 0, 0);
					k = !0;
					d ? (a.verbose && a.log("hiding1 " + b), a.hide(d)) : e || (a.verbose && a.log("hiding2 " + b), a._hide(f))
				} else a.exceptionalLogs && !a.responsive && console.log("**** drawing failed. img incomplete " + b);
				else b && a.exceptionalLogs && !a.responsive && console.log("***** drawing failed. img not found " + b)
		} catch (s) {
			console.log("***** drawing failed. img not found " + b)
		}
		return k
	};
	a.fd = function (c, b, d, e, f, h, g) {
		return a.frameset_mc_draw(c, b, d, e, f, h, g)
	};
	a.setMovieLeftTopRightBottom = function (c, b, d, e) {
		if (!a.responsive) {
			var f =
				a.getProjectContainer();
			f.style.width = parseFloat(f.style.width) + c + d + "px";
			f.style.height = parseFloat(f.style.height) + b + e + "px";
			var h = a.getMainContainer(),
				g = (a.getInnerWidth() - parseFloat(h.style.width)) / 2;
			h.style.left = (0 < g ? g : 0) + "px";
			h = a.getProject();
			a.movie.topOffset += b + parseFloat(f.style.top);
			h.style.top = b + "px";
			h.style.left = parseFloat(h.style.left) + c + "px";
			a.loadedModules.toc && a.tocInit(a.D, c, b, d, e);
			a.updateBorderPosition(a.D);
			a.adjustWindow()
		}
	};
	a.setCCPosition = function (c) {
		a.movie.cc.style.pointerEvents =
			"auto";
		a.movie.cc.style.left = a.project.style.left;
		a.responsive ? a.movie.cc.style.top = a("project").clientHeight - a.movie.cc.clientHeight + "px" : a.movie.cc.style.bottom = c + "px"
	};
	a.ConvertRGBToRGBA = function (a, b) {
		return a.replace(")", " ," + (b + "") + ")").replace("rgb", "rgba")
	};
	a.ConvertColorToRGBA = function (a, b) {
		return "rgba(" + parseInt(a.substr(1, 2), 16) + " ," + parseInt(a.substr(3, 2), 16) + " ," + parseInt(a.substr(5, 2), 16) + " ," + b + ")"
	};
	a.getAngleFromRotateStr = function (a) {
		a = a.replace("rotate(", "");
		return parseFloat(a.replace("deg)",
			""))
	};
	a.applyTransform = function (a, b) {
		a.style.transform = b;
		a.style.msTransform = b;
		a.style.MozTransform = b;
		a.style.WebkitTransform = b;
		a.style.OTransform = b
	};
	a.applyShadow = function (c, b, d) {
		c.style.mozBoxShadow = b;
		c.style.webkitBoxShadow = b;
		c.style.boxShadow = b;
		if (d) {
			var e = b.a * Math.PI / 180,
				d = a.getRoundedValue(b.d * Math.cos(e)),
				e = a.getRoundedValue(b.d * Math.sin(e));
			c.style.textShadow = d + "px " + e + "px " + b.b + "px " + b.c
		}
	};
	a.setFillStrokeStyle = function (c, b, d, e) {
		var f = b.getContext("2d");
		if (c.gf) {
			if (0 == c.gf.t) switch (c.gf.di) {
				case 0:
					b =
						f.createLinearGradient(0, b.height / 2, b.width, b.height / 2);
					break;
				case 1:
					b = f.createLinearGradient(b.width, b.height / 2, 0, b.height / 2);
					break;
				case 2:
					b = f.createLinearGradient(0, 0, b.width, b.height);
					break;
				case 3:
					b = f.createLinearGradient(b.width, b.height, 0, 0);
					break;
				case 5:
					b = f.createLinearGradient(b.width / 2, b.height, b.width / 2, 0);
					break;
				case 6:
					b = f.createLinearGradient(0, b.height, b.width, b.height);
					break;
				case 7:
					b = f.createLinearGradient(b.width, b.height, 0, b.height);
					break;
				default:
				case 4:
					b = f.createLinearGradient(b.width /
						2, 0, b.width / 2, b.height)
			} else {
				var h = 0;
				switch (c.gf.di) {
					case 0:
						b = f.createRadialGradient(b.width / 2, b.height / 2, 0, b.width, b.height / 2, b.width / 2);
						break;
					case 2:
						h = b.width < b.height ? b.width : b.height;
						b = f.createRadialGradient(0, 0, 0, h, 0, h);
						break;
					case 3:
						b = f.createRadialGradient(b.width / 2, 0, 0, b.width / 2, b.height, b.height);
						break;
					case 4:
						h = b.width < b.height ? b.width : b.height;
						b = f.createRadialGradient(b.width, 0, 0, b.width, h, h);
						break;
					case 5:
						b = f.createRadialGradient(b.width, b.height / 2, 0, 0, b.height / 2, b.width);
						break;
					case 6:
						h =
							b.width < b.height ? b.width : b.height;
						b = f.createRadialGradient(b.width, b.height, 0, b.width - h, b.height - h, h);
						break;
					case 7:
						b = f.createRadialGradient(b.width / 2, b.height, 0, b.width / 2, 0, b.height);
						break;
					case 8:
						h = b.width < b.height ? b.width : b.height;
						b = f.createRadialGradient(0, b.height, 0, h, b.height, h);
						break;
					case 9:
						b = f.createRadialGradient(0, b.height / 2, 0, b.width, b.height / 2, b.width);
						break;
					default:
					case 4:
						b = f.createRadialGradient(b.width / 2, b.height / 2, 0, b.width, b.height, Math.sqrt(b.width * b.width + b.height * b.height))
				}
			}
			for (h =
				0; h < c.gf.cs.length; ++h) {
				var g = c.gf.cs[h],
					k = a.getRGBA(g.c, g.o);
				b.addColorStop(g.p / 100, k)
			}
			d ? f.strokeStyle = b : f.fillStyle = b
		} else d ? f.strokeStyle = c.bc : f.fillStyle = c.bc;
		e || (f.globalAlpha = c.alpha / 100)
	};
	a.loadjscssfile = function (a, b, d) {
		var e;
		if ("js" == b) e = document.createElement("script"), e.setAttribute("type", "text/javascript"), e.setAttribute("src", a), e.onload = d;
		else if ("css" == b) {
			e = document.createElement("link");
			e.setAttribute("rel", "stylesheet");
			e.setAttribute("type", "text/css");
			e.setAttribute("href", a);
			e.onload =
				d;
			var f = document.styleSheets.length,
				h = setInterval(function () {
					document.styleSheets.length > f && (clearInterval(h), d())
				}, 50)
		}
		void 0 != e && document.getElementsByTagName("head")[0].appendChild(e);
		return e
	};
	a.CPPlayButtonHandle = function (c) {
		var b;
		c.keyCode ? b = c.keyCode : c.which && (b = c.which);
		32 == b && a.movie.play()
	};
	a.handleVariablesInURLParams = function () {
		var c = window.location.toString();
		if (-1 != c.indexOf("?"))
			for (var c = c.split("?")[1].split("&"), b = 0; b < c.length; ++b) {
				var d = c[b]; - 1 != d.indexOf("=") && (d = d.split("="),
					a.vm.setVariableValue(d[0], unescape(d[1]), !1))
			}
	};
	a.getInnerWidth = function () {
		a.offsetInnerWidth = !window.innerWidth || 0 == window.innerWidth ? 640 : window.innerWidth;
		return a.offsetInnerWidth
	};
	a.getProjectContainer = function () {
		a.projectContainer || (a.projectContainer = a("project_container"));
		return a.projectContainer
	};
	a.getMainContainer = function () {
		a.mainContainer || (a.mainContainer = a("main_container"));
		return a.mainContainer
	};
	a.getProject = function () {
		a.project || (a.project = a("project"));
		return a.project
	};
	a.adjustProjectHeight =
		function (c) {
			if (a.responsive && c) {
				var b = a.D[c.mdi].css,
					c = b[a.ResponsiveProjWidth];
				a.RespDefaultBptH = parseFloat(b[a.RespDefaultBptW].h);
				parseFloat(a("project").style.height) != c.h && (a("project").style.height = c.h);
				b = a("project").clientHeight;
				b = 0 < b ? b : parseFloat(c.h);
				c = a("playbar").clientHeight;
				a.PB && (a.PB.MP && a.PB.MP.PBP && a.PB.MP.PBP.showOnHover && a("playbar").animator) && (c = 0);
				a("project_container").style.height = b + c + "px";
				a("project_container").clientHeight > window.innerHeight ? (a("main_container").style.height =
					b + c + "px", a("cpDocument").style.height = b + c + "px") : (a("main_container").style.height = "100%", a("cpDocument").style.height = "100%")
			}
	};
	a.adjustSkins = function (c) {
		if (a.responsive) {
			void 0 == c && (c = a.ReasonForDrawing.kOrientationChangeOrResize);
			var b = a("project"),
				d = a("playbar");
			a.PB && a.PB.playbarCreated && (a.PB.rootObj && (a.PB.rootObj.layoutPlaybar && c == a.ReasonForDrawing.kOrientationChangeOrResize) && a.PB.rootObj.layoutPlaybar(!0, b.clientWidth), a.responsive && (c = b.clientHeight + d.clientHeight, d.style.bottom = c < window.innerHeight &&
				0 < b.clientHeight ? window.innerHeight - c + "px" : "0px", d.style.left = b.style.left, c = d.animator, a.PB && a.PB.MP && a.PB.MP.PBP && a.PB.MP.PBP.showOnHover && c ? (c.resetStartEndValForResponsive(), d.style.bottom = "", c.playbarHidden ? (d.style.bottom = "", d.style.top = a("div_Slide").getBoundingClientRect().bottom + "px") : (d.style.top = "", d.style.bottom = "0px"), d.style.position = "absolute") : d.style.position = "fixed", d.style.transform = "scale(1)"));
			a.toc && (a.toc.tocCreated && a.toc.rootObj) && a.toc.rootObj.adjustTOC();
			a.movie.cc && (a("cc").style.width =
				b.clientWidth + "px", a.setCCPosition(d.clientHeight));
			a.playImage && (b = lPlayButtonT = 0, b = a.project.clientWidth > window.innerWidth ? (window.innerWidth - a.playImage.clientWidth) / 2 : (a.project.clientWidth - a.playImage.clientWidth) / 2, lPlayButtonT = a.project.clientHeight > window.innerHeight ? (window.innerHeight - a.playImage.clientHeight) / 2 : (a.project.clientHeight - a.playImage.clientHeight) / 2, a.playImage.style.left = b + "px", a.playImage.style.top = lPlayButtonT + "px");
			a.autoplayImage && (a.autoplayImage.style.left = (a.project.clientWidth -
				a.movie.autoplayimagew) / 2 + "px", a.autoplayImage.style.top = (a.project.clientHeight - a.movie.autoplayimageh) / 2 + "px")
		}
	};
	a.getCurrentBreakpointWidth = function (c) {
		var b = a.responsiveWidths.length;
		if (c <= a.responsiveWidths[0]) return a.responsiveWidths[0];
		if (c >= a.responsiveWidths[a.responsiveWidths.length - 1]) return a.responsiveWidths[a.responsiveWidths.length - 1];
		for (var d = 0; d <= b - 1; ++d)
			if (c <= a.responsiveWidths[d]) return a.responsiveWidths[d]
	};
	a.getCurrentBreakPointID = function () {
		var c = a.D.project.breakpointIdToWidthMap,
			b;
		for (b in c)
			if (c[b] == a.ResponsiveProjWidth) return b
	};
	a.updateResponsiveGlobals = function () {
		if (a.responsive && a.responsiveWidths && !(0 >= a.responsiveWidths.length)) {
			var c = window.innerWidth;
			a.RespDefaultBptW = a.responsiveWidths[a.responsiveWidths.length - 1];
			a.ResponsiveProjWidth = a.getCurrentBreakpointWidth(c);
			void 0 == a.responsiveMaxWidth && (a.responsiveMaxWidth = a.D.project.maxWidth)
		}
	};
	a.adjustResponsiveItems = function (c) {
		if (a.responsive) {
			void 0 == c && (c = a.ReasonForDrawing.kOrientationChangeOrResize);
			var b = a.movie.stage.getCurrentSlideInteractionManager();
			b && b.saveResponsiveInteractionState(c);
			var d = a.ResponsiveProjWidth;
			a.updateResponsiveGlobals();
			var e = window.innerWidth;
			a.responsiveMaxWidth && window.innerWidth > a.responsiveMaxWidth ? (parseFloat(a("project_container").style.width) != a.ResponsiveProjWidth && (a("project_container").style.width = a.ResponsiveProjWidth + "px"), a("project_container").style.left = (e - a.ResponsiveProjWidth) / 2 + "px") : (a("project_container").style.width = "100%", a("project_container").style.left = "0px");
			var f = a.movie.stage.currentSlide,
				e = a.movie.stage.getSlideIndexForFrame(cpInfoCurrentFrame);
			f || (f = a.movie.stage.getSlideNameForIndex(e), f = a.D[f]);
			a.adjustProjectHeight(f);
			a.setupSlideBGDivAndCanvasInternal(f, a.movie.stage.getSlideDiv());
			a.adjustSkins(c);
			a.EventListeners && (a.EventListeners[a.ITEMDRAWINGCOMPLETEEVENT] = []);
			c == a.ReasonForDrawing.kOrientationChangeOrResize && a.movie.pm.loadSlideAssets(cpInfoCurrentSlideIndex);
			var f = !0,
				h;
			for (h in G) {
				var g = G[h];
				if (g && g.isStarted && g.drawForResponsive) {
					g.saveState && g.saveState(d);
					g.drawForResponsive(!0,
						a.ReasonForDrawing.kOrientationChangeOrResize);
					var k = g.element ? a.D[g.element.id] : void 0;
					if (k) {
						var l = g.getAttribute("css");
						if (!l) continue;
						l = a.getResponsiveCSS(l);
						if (!l) continue;
						var j = l.ipiv;
						if (g.visible) {
							l = a.D[k.dn];
							!l && k.actid && (l = a.D[k.actid]);
							if (!l) continue;
							j ? (g.type == a.kCPOTVideo && g.nativeVideo && (g.nativeVideo.style.display = "block"), g.element && (k = g.element.firstElementChild) && "VIDEO" == k.tagName && !0 == this.started && (!1 == this.ended && !1 == this.paused) && g.play(), l.ia && a.movie.am.showHideObjectAudio(l.ia, !0), l.iea && a.movie.am.playPauseEventAudio(l.iea, !0)) : (g.type == a.kCPOTVideo && (g.nativeVideo && (g.nativeVideo.style.display = "none"), g.pause && g.pause()), l.ia && a.movie.am.showHideObjectAudio(l.ia, !1), l.iea && a.movie.am.playPauseEventAudio(l.iea, !1))
						}
					}
					f = f && g.isDrawn
				}
			}
			d = a.movie.stage.currentSlide;
			h = !1;
			if (d && (h = "Question Slide" == d.st))(d = a.getQuestionObject(d.qs)) && d.adjustCustomObjects && d.adjustCustomObjects(), d && d.updateCustomReviewAreaTransforms && d.updateCustomReviewAreaTransforms();
			a.movie.stage.forEachChild(a.updateVariableTextBounds, !0);
			cpInfoCurrentFrame && a.movie.stage.syncMotionToFrame(cpInfoCurrentFrame, !0);
			b && b.adjustResponsiveInteraction(c);
			f || a.movie.pm.loadSlideAssets(e)
		}
	};
	a.getCurrentSlideResponsiveHeight = function (c) {
		if (a.responsive) {
			var b = void 0;
			!a.movie || !a.movie.stage ? (b = a.D.project_main.slides.split(",")[0], b = a.D[b]) : (b = a.movie.stage.currentSlide, b || (b = a.movie.stage.getSlideIndexForFrame(cpInfoCurrentFrame), b = a.movie.stage.getSlideNameForIndex(b), b = a.D[b]));
			c = a.D[b.mdi].css[a.getCorrectBreakpoint(c)];
			b = a("playbar").clientHeight;
			a.PB && (a.PB.MP && a.PB.MP.PBP && a.PB.MP.PBP.showOnHover) && (b = 0);
			return parseFloat(c.h) + b
		}
	};
	var Y = !1,
		ea = void 0,
		J = void 0;
	a.adjustWindow = function (c) {
		a.__adjustWindow(c);
		if (a.lpp) {
			var c = window.innerWidth,
				b = window.innerHeight;
			320 < c && 800 > c && c > b && 0 < b && c / b > 4 / 3 ? Y || (a.movie.paused || (a.movie.pause(a.ReasonForPause.BAD_ORIENTATION), a.movie.paused && (ea = !0)), Y = !0, J || (J = document.createElement("div"), J.classList.add("curtain"), document.body.appendChild(J), c = J, c.onclick = c.ondblclick = c.onmousedown = c.onmousemove = c.onmouseup =
				c.onmouseover = c.onmouseout = X, c.addEventListener("touchstart", X), c.addEventListener("touchmove", X), c.addEventListener("touchend", X), c = document.createElement("div"), c.classList.add("curtainMsg"), c.innerText = a.lpm, J.appendChild(c)), J.style.display = "table") : Y && (ea && a.movie.play(a.ReasonForPlay.ORIENTATION_OK), J.style.display = "none", Y = !1)
		}
	};
	a.__adjustWindow = function (c) {
		a.useg && a.gesturesDiv && (a.gesturesDiv.style.position = a.responsive || window.innerWidth < a.D.project.w ? "fixed" : "absolute");
		a.playImage && (a.playImage.style.left =
			a.D.project.w <= window.innerWidth || a.shouldScale ? (a.D.project.w - 96) / 2 + "px" : (window.innerWidth - 96) / 2 + "px", a.playImage.style.top = a.D.project.h <= window.innerHeight || a.shouldScale ? (a.D.project.h - 96) / 2 + "px" : (window.innerHeight - 96) / 2 + "px");
		a.autoplayImage && (a.autoplayImage.style.left = (a.D.project.w - a.movie.autoplayimagew) / 2 + "px", a.autoplayImage.style.top = (a.D.project.h - a.movie.autoplayimageh) / 2 + "px");
		var b = a("playbar");
		if (a.responsive && a.device != a.DESKTOP)
			if (a.movie && a.movie.stage) {
				var d = a.movie.stage.currentSlide;
				if (!d) var e = a.movie.stage.getSlideIndexForFrame(cpInfoCurrentFrame),
				e = a.movie.stage.getSlideNameForIndex(e), d = a.D[e];
				e = a.getCurrentBreakpointWidth(window.innerWidth);
				if (d && (d = a.D[d.mdi]))
					if (d = d.css)
						if (e = d[e]) e = parseFloat(e.h) + b.clientHeight, b.style.position = "fixed", b.style.bottom = e >= window.innerHeight ? "0px" : window.innerHeight - e + "px"
			} else b.style.bottom = "0px", b.style.position = "fixed";
		c = c ? c.type : c;
		if ("resize" == c) {
			if (a.em.fireEvent("CPWindowResized"), a.device != a.DESKTOP) {
				if (a.isTextInputInFocus()) {
					if (a.device !=
						a.IDEVICE) {
						if (e = document.activeElement, c = a.getMainContainer(), c.style.position = "absolute", document.body.style.overflow = "scroll", e = t = 0, a.responsive || (e = parseFloat(c.parentElement.parentElement.style.left), t = parseFloat(c.parentElement.parentElement.style.top), window.scrollTo(e, t)), a.responsive) b.style.top = a.project.clientHeight + "px", b.style.position = "absolute", b.offsetHeight = b.offsetHeight
					} else if (a.responsive) {
						var f = document.activeElement.onblur;
						document.activeElement.onblur = function (a) {
							setTimeout("cp.adjustSkins();if(cp.m_gestureHandler){cp.m_gestureHandler.fitMovie();}",
								500);
							f && f(a)
						}
					}
					return
				}
				if (a.responsive) {
					b.style.top = "";
					b.style.position = "fixed";
					b.offsetHeight = b.offsetHeight;
					if (1 != a("div_Slide").scaleFactor) return;
					setTimeout("window.scrollTo(0,0);cp.adjustResponsiveItems();cp.em.fireEvent('CPWindowResizeCompleted');", 500);
					return
				}
			}
		} else(e = document.activeElement) && ("input" == e.tagName.toLowerCase() && "text" == e.type || "textarea" == e.tagName.toLowerCase()) && e.blur(), a.em.fireEvent("CPOrientationChanged");
		window.scrollTo(0, 0);
		if (a.responsive) a.adjustResponsiveItems(), "resize" ==
			c ? a.em.fireEvent("CPWindowResizeCompleted") : a.em.fireEvent("CPOrientationChangeCompleted"), PPTXLib && PPTXLib.resetAnimationsDueToResizeOrOrientationChange && (PPTXLib.resetAnimationsDueToResizeOrOrientationChange(), cpInfoCurrentFrame >= a.movie.stage.lastFrame && (PPTXLib.updateAnimationManager(), PPTXLib.forceRedraw()));
		else {
			if (!a.SetScaleAndPosition()) {
				a.getInnerWidth();
				var b = a.getMainContainer(),
					e = a.getProjectContainer(),
					d = a.getProject(),
					h = (a.offsetInnerWidth - parseFloat(b.style.width)) / 2;
				b.style.left =
					(0 < h ? h : 0) + "px";
				a.movie.offset = (0 < h ? h : 0) + (a.movie.m_scaleFactor ? a.movie.m_scaleFactor : 1) * (parseFloat(d.style.left) + parseFloat(e.style.left))
			}
			a.useg && (a.gesturesDiv && a.shouldScale && a.movie && a.movie.virgin) && (a.gesturesDiv.style.display = "none", setTimeout('cp.gesturesDiv.style.display = "block";', 500));
			a("blockUserInteraction").style.width = "100%";
			a("blockUserInteraction").style.height = "100%";
			"resize" == c ? a.em.fireEvent("CPWindowResizeCompleted") : a.em.fireEvent("CPOrientationChangeCompleted")
		}
	};
	a.getOffsetPosition =
		function (c, b) {
			var d = {};
			d.X = c - a.movie.offset;
			d.Y = b - a.movie.topOffset;
			return d
	};
	a.getScaledPosition = function (c, b) {
		if (a.responsive) return {
			X: c,
			Y: b
		};
		var d = {};
		if (!a.shouldScale) return a.getOffsetPosition(c, b);
		var e = (b - a.movie.newMainContainerT) / a.movie.newMainContainerH,
			f = Math.round(a.movie.oldMainContainerW * ((c - a.movie.newMainContainerL) / a.movie.newMainContainerW)),
			e = Math.round(a.movie.oldMainContainerH * e),
			h = a.getProjectContainer(),
			g = a.getProject();
		d.X = f - parseFloat(h.style.left) - parseFloat(g.style.left);
		d.Y = e - parseFloat(h.style.top) - parseFloat(g.style.top);
		return d
	};
	a.SetScaleAndPosition = function () {
		var c = a.getMainContainer(),
			b = window,
			d = b.innerWidth,
			b = b.innerHeight;
		a.movie.oldMainContainerW = parseFloat(c.style.width);
		a.movie.oldMainContainerH = parseFloat(c.style.height);
		var e = void 0 == a.movie.oldMainContainerW || 0 == a.movie.oldMainContainerW ? 1 : d / a.movie.oldMainContainerW,
			f = void 0 == a.movie.oldMainContainerH || 0 == a.movie.oldMainContainerH ? 1 : b / a.movie.oldMainContainerH;
		a.movie.m_scaleFactor = 1;
		if (!a.shouldScale) return !1;
		a.movie.m_scaleFactor = e < f ? e : f;
		a.verbose && (a.log(a.D.project.shc), a.log(a.movie.m_scaleFactor), a.log(a.shouldScale));
		a.movie.newMainContainerW = Math.round(a.movie.m_scaleFactor * a.movie.oldMainContainerW);
		a.movie.newMainContainerH = Math.round(a.movie.m_scaleFactor * a.movie.oldMainContainerH);
		a.movie.oldMainContainerL = parseFloat(c.style.left);
		a.movie.oldMainContainerT = parseFloat(c.style.top);
		c.style.webkitTransformOrigin = "left top";
		c.style.MozTransformOrigin = "left top";
		c.style.msTransformOrigin = "left top";
		a.movie.newMainContainerL = Math.round(0 < (d - a.movie.newMainContainerW) / 2 ? (d - a.movie.newMainContainerW) / 2 : 0);
		a.movie.newMainContainerT = Math.round(0 < (b - a.movie.newMainContainerH) / 2 ? (b - a.movie.newMainContainerH) / 2 : 0);
		c.style.left = a.movie.newMainContainerL + "px";
		c.style.top = a.movie.newMainContainerT + "px";
		a.getProjectContainer();
		a.getProject();
		a.movie.offset = a.movie.newMainContainerL;
		a.movie.topOffset = a.movie.newMainContainerT;
		c.style.webkitTransform = "scale(" + a.movie.m_scaleFactor + ")";
		c.style.MozTransform =
			"scale(" + a.movie.m_scaleFactor + ")";
		c.style.msTransform = "scale(" + a.movie.m_scaleFactor + ")";
		document.body.style.overflow = "hidden";
		c.style.position = "fixed";
		return !0
	};
	a.trimStartingAndTrailingSpaces = function (a) {
		var b = "",
			b = a.replace(/^[\s|\t|\n]+/g, "");
		return b = b.replace(/[\s|\t|\n]+$/g, "")
	};
	a.cpJoin = function (a, b) {
		if (a && !("" == b || void 0 == b) && !(0 >= a.length)) {
			for (var d = a[0], e = 1; e < a.length; ++e) d += b + a[e];
			return d
		}
	};
	a.getLeftTopAfterTranslate = function (a) {
		var b = new WebKitCSSMatrix(window.getComputedStyle(a).webkitTransform),
			d = {};
		d.L = parseFloat(a.style.left) + b.m41;
		d.T = parseFloat(a.style.top) + b.m42;
		return d
	};
	a.createAlternativeAccessibleText = function (c, b, d) {
		if (a.SAFARI === a.browser) "" !== d && c.setAttribute("role", d), c.setAttribute("aria-label", b);
		else {
			if (0 === a.D.pref.acc || "" === b) b = " ";
			d = a.newElem("p");
			d.innerHTML = b;
			b = a.newElem("div");
			b.id = c.id + "accStr";
			b.className = "cp-accessibility";
			b.appendChild(d);
			c.appendChild(b)
		}
	};
	a.getRGBA = function (a, b) {
		return "rgba(" + parseInt(a.substring(1, 3), 16) + " , " + parseInt(a.substring(3, 5), 16) +
			" , " + parseInt(a.substring(5, 7), 16) + " , " + b + " )"
	};
	a.IsRunningInConnect = function () {
		return !document.location || !document.URL || !document.referrer ? !1 : -1 != document.location.href.indexOf("airspeed") || -1 != document.URL.indexOf("airspeed") || -1 != document.referrer.indexOf("airspeed")
	};
	a.isBlockedForLMS = function () {
		return "undefined" != typeof a.LMSDriverHolder && a.LMSDriverHolder && a.LMSDriverHolder.blockedForLMS
	};
	a.unblockFromLMS = function () {
		"undefined" != typeof a.LMSDriverHolder && a.LMSDriverHolder && (a.LMSDriverHolder.blockedForLMS = !1);
		a("blockUserInteraction").style.display = "none"
	};
	a.closeGesturesHint = function () {
		a("gestureHint") && (a.removeGestureEvent(a("gestureHint"), a.GESTURE_EVENT_TYPES.TAP, a.closeGesturesHint), a("gestureHint").style.display = "none")
	};
	a.showGesturesHint = function () {
		var c = a("gestureHint");
		a.useg && c && (c.style.display = "block", c.style.zIndex = 10, a.registerGestureEvent(a("gestureHint"), a.GESTURE_EVENT_TYPES.TAP, a.closeGesturesHint))
	};
	a.getStartFrameOfMovie = function () {
		return a.loadedModules.toc && a.toc.movieProperties.tocProperties.hasSelfPaced && -1 != a.toc.tocPersistanceManager.lastVisitedEntry && a.toc.movieProperties["Slide" + a.toc.rootObj.tocEntries[a.toc.tocPersistanceManager.lastVisitedEntry].link] ? a.toc.movieProperties["Slide" + a.toc.rootObj.tocEntries[a.toc.tocPersistanceManager.lastVisitedEntry].link].from : cpInfoCurrentFrame
	};
	a.addAndUpdateProjectBackgroundDiv = function (c) {
		var b = a("proj_bg"),
			d = a("playbar"),
			e = a("toc"),
			f = c.playBarProperties;
		void 0 == b && (b = a.newElem("div"), b.id = "proj_bg", e.parentElement.insertBefore(b, e), b.style.display = "none",
			b.style.cssFloat = "left", b.style.position = "absolute", b.style.backgroundColor = c.project.prjBgColor);
		if (f.hasPlayBar && !a.responsive) {
			if (0 == f.position || 2 == f.position) b.style.width = f.playBarHeight + "px", b.style.height = c.project.h + "px", b.style.top = "0px", b.style.left = 0 == f.position ? d.style.left : parseFloat(d.style.left) + c.project.w + "px";
			else if (1 == f.position || 3 == f.position) b.style.width = c.project.w + "px", b.style.height = f.playBarHeight + "px", b.style.top = 1 == f.position ? "0px" : c.project.h + "px", b.style.left = d.style.left;
			if (0 == f.position && 0 == a.lBorderW || 1 == f.position && 0 == a.tBorderW || 2 == f.position && 0 == a.rBorderW || 3 == f.position && 0 == a.bBorderW) b.style.display = "block"
		}
	};
	a.updateBorderPosition = function (c, b) {
		var d = a("main_container"),
			e = document.getElementById("projectBorder"),
			f = a.getProjectContainer(),
			h = c.playBarProperties;
		h.playBarHeight = void 0 != h.playBarHeight ? h.playBarHeight : 0;
		var g = c.borderProperties;
		if (g)
			if (!g.hasBorder && !a.responsive) d.style.left = parseFloat(f.style.left) + "px", d.style.top = parseFloat(f.style.top) + "px",
		d.style.width = parseFloat(f.style.width) + "px", d.style.height = parseFloat(f.style.height) + "px";
		else if (a.lBorderW = void 0 != a.lBorderW ? a.lBorderW : 0, a.tBorderW = void 0 != a.tBorderW ? a.tBorderW : 0, a.rBorderW = void 0 != a.rBorderW ? a.rBorderW : 0, a.bBorderW = void 0 != a.bBorderW ? a.bBorderW : 0, b || a.addAndUpdateProjectBackgroundDiv(c), a.responsive) a.project.style.width = "auto", a.project.style.height = "auto", a.project.style.left = a.lBorderW + "%", a.project.style.right = a.rBorderW + "%", a.project.style.top = a.tBorderW + "%", a.project.style.bottom =
			a.bBorderW + "%";
		else {
			if (b) d.style.left = parseFloat(f.style.left) - a.lBorderW + "px";
			else if ((0 == h.position || 2 == h.position) && !h.overlay) {
				0 == h.position ? (h.playBarHeight > a.lBorderW && (g.w += h.playBarHeight - a.lBorderW, d.style.width = e.style.width = g.w + "px", a.lBorderW = h.playBarHeight), f.style.left = a.lBorderW - h.playBarHeight + "px") : (h.playBarHeight > a.rBorderW && (g.w += h.playBarHeight - a.rBorderW, d.style.width = e.style.width = g.w + "px", a.rBorderW = h.playBarHeight), f.style.left = a.lBorderW + "px");
				var k = h && h.playBarHeight ? h.playBarHeight :
					0,
					k = 0 == h.position ? k / 2 : -(k / 2);
				d.style.left = parseFloat(d.style.left) + k + "px"
			} else f.style.left = a.lBorderW + "px";
			1 != h.position ? (3 == h.position && (h.playBarHeight > a.bBorderW && !h.overlay) && (g.h += h.playBarHeight - a.bBorderW, d.style.height = e.style.height = g.h + "px", a.bBorderW = h.playBarHeight), f.style.top = a.tBorderW + "px") : h.overlay ? f.style.top = a.tBorderW + "px" : (h.playBarHeight > a.tBorderW && (g.h += h.playBarHeight - a.tBorderW, d.style.height = e.style.height = g.h + "px", a.tBorderW = h.playBarHeight), f.style.top = a.tBorderW - h.playBarHeight +
				"px")
		}
	};
	a.handleTOCOpenClose = function () {
		var c = a("toc");
		c && c.animator && (cpCmndTOCVisible ? c.animator.hideTOC() : c.animator.showTOC())
	};
	a.toggleMoviePlayPause = function () {
		var c = "";
		a.movie.paused ? (a.movie.play(a.ReasonForPause.PLAYBAR_ACTION), c = "playAnimation") : (a.movie.pause(a.ReasonForPause.PLAYBAR_ACTION), c = "pauseAnimation");
		a.useg && a.showGesturesAnim && a.showGesturesAnim(c)
	};
	a.togglePlaybarShowHide = function () {
		if (cpInfoHasPlaybar) {
			var c = a("playbar");
			if (c) {
				if (a.movie.playbackController) {
					var b = a.movie.playbackController.GetQuizController();
					b && a.movie.stage && (a.movie.stage.currentSlide && "Question Slide" == a.movie.stage.currentSlide.st) && b.GetHidePlaybarInQuiz()
				}
				c.animator ? (c.animator.showPlaybar(cpInfoCurrentFrame >= a.movie.stage.lastFrame ? !0 : !1), c.shown = !0) : (c.style.display = !c.shown ? "block" : "none", a.adjustSkins(), c.shown = !c.shown)
			}
		}
	};
	a.isTextInputInFocus = function () {
		var a = document.activeElement;
		return a && ("input" == a.tagName.toLowerCase() && "text" == a.type || "textarea" == a.tagName.toLowerCase())
	};
	a.ccInit = function (c) {
		if (a.ccdv) {
			var b = a.ccdv;
			b.style.width = c.w + "px";
			b.style.height = c.h + "px";
			var d = b.firstElementChild;
			d.style.backgroundColor = a.ConvertColorToRGBA(c.c, c.o / 100);
			d.style.fontFamily = c.f;
			d.style.fontSize = c.fs + "px";
			d.style.color = c.tc;
			a.movie.ccText = d.firstElementChild;
			a.movie.ccLines = c.lc;
			c = a.getProject();
			b.style.left = c.style.left;
			b.style.bottom = "0px"
		}
	};
	a.markTOCEntryComplete = function (c) {
		(c = a.D[a.movie.stage.slides[c]]) && c.tocEntry && c.tocEntry.setVisited()
	};
	a.updateTextBounds = function (c, b, d, e) {
		if (a.responsive && c && d)
			for (var d = [d[a.ResponsiveProjWidth].l,
				d[a.ResponsiveProjWidth].t, d[a.ResponsiveProjWidth].w, d[a.ResponsiveProjWidth].h
			], e = [e[0], e[1], -(e[0] + e[2]), -(e[1] + e[3])], f = ["left", "top", "width", "height"], b = [c.parentElement.clientWidth, c.parentElement.clientHeight, b.clientWidth, b.clientHeight], h = 0; 4 > h; ++h) {
				var g = d[h];
				c.style[f[h]] = -1 != g.indexOf("%") ? a.getRoundedValue(parseFloat(g) * b[h] / 100) + e[h] + "px" : parseFloat(g) + e[h] + "px"
			}
	};
	a.adjustFontSizesForVariableText = function (c, b, d) {
		if (c) {
			var c = c.children,
				e;
			for (e in c) {
				var f = c[e];
				if (f && f.tagName && "span" ==
					f.tagName.toLowerCase()) {
					var h = parseFloat(f.style.fontSize),
						h = Math.floor(a.getInterpolatedFontSize(b, h, d));
					8 > h && (h = 8);
					f.style.fontSize = h + "px"
				}
				a.adjustFontSizesForVariableText(f, b, d)
			}
		}
	};
	a.updateVarText = function (c, b, d) {
		if (a.responsive) {
			a: {
				var e = 0,
					f = 0,
					h = 0,
					g = 0,
					k = 0,
					l = "",
					j = "",
					m = !1,
					n = null,
					o = void 0,
					p = void 0,
					s = void 0,
					u = void 0,
					q = !1;
				b && (q = !0);
				if (c.id) {
					var r = a.D[c.id];
					if (r) {
						var w = r.mdi,
							v = b = null;
						w && (b = a.D[w], v = a(w));
						var J = a.isCaptionItem(r.type) && a.D[r.mdi] && a.D[r.mdi].ip,
							D = a.kCPOTAutoShape == r.type || a.kCPOTStageCorrectFeedbackShape ==
								r.type || a.kCPOTSuccessShapeItem == r.type || a.kCPOTStageIncorrectFeedbackShape == r.type || a.kCPOTFailureShapeItem == r.type || a.kCPOTHintShapeItem == r.type || a.kCPOTStagePartialCorrectFeedbackShape == r.type || a.kCPOTRetryFeedbackShape == r.type || a.kCPOTIncompleteFeedbackShape == r.type || a.kCPOTTimeoutFeedbackShape == r.type || a.kCPOTAnswerFeedbackShape == r.type,
							j = a.kCPOTStageAnswerLabel == r.type || a.kCPOTStageAnswerItem == r.type || a.kCPOTStageMatchingAnswerEntry == r.type || a.kCPOTStageMatchingQuestion == r.type;
						if ((a.kCPOTScorableButtonItem ==
							r.type || a.kCPOTRetakeButton == r.type || a.kCPOTStageQuestionNextButton == r.type || a.kCPOTStageQuestionClearButton == r.type || a.kCPOTStageQuestionBackButton == r.type || a.kCPOTStageQuestionReviewModeNextButton == r.type || a.kCPOTStageQuestionReviewModeBackButton == r.type || a.kCPOTStageQuestionSubmitButton == r.type || a.kCPOTScoringReviewButton == r.type || a.kCPOTScoringContinueButton == r.type || a.kCPOTSubmitAllButton == r.type || a.kCPOTResetButton == r.type || a.kCPOTUndoButton == r.type || a.kCPOTDDSubmitButton == r.type || a.kCPOTTextEntryButtonItem ==
							r.type) && void 0 != r.subt && r.subt == a.kTextButton) {
							c = void 0;
							break a
						}
						p = a(c.id + "_vTxtHolder");
						s = a(c.id + "_vTxtHandlerHolder");
						j && (p = c.drawingBoard, s = c);
						var A = r.vt,
							n = r.rpvt;
						if (!n) {
							c = void 0;
							break a
						}
						var F = [0, 0, 0, 0],
							I = marginT = marginR = marginB = 0;
						r.autoGrow = a.autoGrow && !j;
						I = r.rplm ? r.rplm[a.ResponsiveProjWidth] : 0;
						marginT = r.rptm ? r.rptm[a.ResponsiveProjWidth] : 0;
						marginR = r.rprm ? r.rprm[a.ResponsiveProjWidth] : 0;
						marginB = r.rpbm ? r.rpbm[a.ResponsiveProjWidth] : 0;
						var X = r.rptl ? r.rptl[a.ResponsiveProjWidth] : a.TextLayoutEnum.kTLCenter,
							Y = r.rpta ? r.rpta[a.ResponsiveProjWidth] : a.TextAlignmentEnum.kTACenter,
							A = n[a.ResponsiveProjWidth].vt,
							N = "";
						if (A && c.drawingBoard && p) {
							var M = rrm = rtm = rbm = 0,
								E = r.type == a.kCPOTFillBlankCaption;
							if (E && !d) {
								c = void 0;
								break a
							}
							var U = b.hl;
							if (b && b.b && p) {
								var x = null,
									y = null,
									j = w + "-vtext",
									x = a(j),
									y = a(j + "_Handler"),
									n = a.movie.stage.getFrameset(c.id);
								if (p && !x && !y) {
									if (b && (n && n.isStarted && 1 == b.visible && "visible" == p.style.visible) && (m = !0), x = a.newElem("div"), x.className = "cp-vtxt", x.setAttribute("aria-hidden", "true"), x.id = j, v && (x.style.left =
										v.style.left), x.style.cssText = "word-wrap:break-word;white-space:pre-wrap;overflow:hidden;line-height:90%;", x.style.cssText += "", m || (x.style.visibility = "hidden"), n && n.htmlDependents.push(x), a.movie.stage.addToParentChildMap(c.id, p.id), a.movie.stage.addToParentChildMap(c.id, j), p.appendChild(x), U || E)
										if (y = a.newElem("div"), y.className = "cp-vtxt", y.id = j + "_Handler", y.style.cssText = "word-wrap:break-word;white-space:pre-wrap;overflow:hidden;line-height:90%;", y.style.cssText += "", m || (y.style.visibility = "hidden"),
											a.movie.stage.addToParentChildMap(c.id, s.id), a.movie.stage.addToParentChildMap(c.id, y.id), s.appendChild(y), E && (a(c.id).style.overflow = "visible", y.style.overflow = "visible"), v) y.style.left = v.style.left
								} else {
									if (!n || !n.isStarted) {
										c = void 0;
										break a
									}
									o = G[w];
									o || (u = G[r.qdi], o = u.answertextCanvasShape);
									E || (x = a(j));
									x && q && (b && 1 == b.visible && o && o.isDrawn) && (x.style.visibility = "visible");
									if (U || E) {
										if ((y = document.getElementById(j + "_Handler")) && q && b && 1 == b.visible) y.style.visibility = "visible", U && (y.style.backgroundColor =
											"#ffffff", y.style.opacity = 0);
										v && (y.style.left = v.style.left)
									}
									x && (v && (x.style.left = v.style.left), x.style.width = "", x.style.height = "");
									y && (y.style.width = "", y.style.height = "");
									o.actualParent.offsetHeight = o.actualParent.offsetHeight;
									D && (m = [I + M, marginT + rtm, marginR + rrm, marginB + rbm], x && a.updateTextBounds(x, o.actualParent, b.tb, m), y && a.updateTextBounds(y, o.actualParent, b.tb, m));
									if (F && !D && (x && (x.style.left = F[0] + I + M + "px", x.style.top = F[1] + marginT + rtm + "px", x.style.right = F[2] + marginR + rrm + "px", x.style.bottom = F[3] +
										marginB + rbm + "px"), y)) y.style.left = F[0] + I + M + "px", y.style.top = F[1] + marginT + rtm + "px", y.style.right = F[2] + marginR + rrm + "px", y.style.bottom = F[3] + marginB + rbm + "px"
								}
							}
							try {
								if (void 0 != r.vars && void 0 != r.varLens && void 0 != r.texts) {
									for (var W = a.ResponsiveProjWidth, aa = r.vars[W], ea = r.varLens[W], fa = r.texts[W], h = aa.length, g = fa.length; !(N += fa[f++], e < h && (l = window[aa[e]], void 0 == l && (l = ""), k = ea[e], l.length > k && (l = l.substr(0, k)), ++e, N += l), f >= g););
									x && !E && (x.innerHTML = N);
									if (U || E) {
										U && (A = N);
										if ("" == y.innerHTML || U && y.innerHTML != A) y.innerHTML =
											A;
										var R = {
											captionName: c.id,
											reason: "updateResponsiveVarText",
											callbackFn: function () {
												y.innerHTML = A
											}
										};
										a.em.fireEvent("CPInputControlReplacedEvent", R)
									}
								} else if (x && (x.innerHTML != A && !E) && (x.innerHTML = A), U || E) {
									if ("" == y.innerHTML || U && y.innerHTML != A) y.innerHTML = A;
									R = {
										captionName: c.id,
										reason: "updateResponsiveVarText",
										callbackFn: function () {
											y.innerHTML = A
										}
									};
									a.em.fireEvent("CPInputControlReplacedEvent", R)
								}
								d && a.movie.stage.addHyperLinks({
									n: c.id,
									t: r.type
								}, a(c.id));
								if (b.sh) {
									d = !J;
									void 0 != b.fa && (d = 0 == b.fa);
									var B;
									x && (B =
										x.firstChild);
									var L;
									y && (L = y.firstChild);
									B && B.firstChild && a.applyShadow(B.firstChild, b.sh, d);
									L && L.firstChild && a.applyShadow(L.firstChild, b.sh, d)
								}
								B = function (b) {
									var c = b.clientWidth;
									if (E) c = b.parentElement.clientWidth;
									return a.createTempTextElemAndGetBoundingRect(c, r, b.innerHTML)
								};
								var K = x ? x : y,
									O = B(K);
								if (o) {
									r.variableText = K.innerHTML;
									parseFloat(K.style.left);
									parseFloat(K.style.top);
									parseFloat(K.style.right);
									parseFloat(K.style.bottom);
									var T = E || o && o.currentCSS && o.currentCSS.h && -1 == o.currentCSS.h.indexOf("H%") && -1 == o.currentCSS.h.indexOf("auto");
									r.autoGrow = r.autoGrow && !T && !r.isPartOfInteraction;
									if (r.autoGrow) {
										T = !1;
										if (K && K.clientHeight < O.height) {
											r.breakevenWidth || (r.breakevenWidth = {});
											var P = r.breakevenWidth[a.ResponsiveProjWidth],
												Z = o.actualParent.clientWidth - K.clientWidth,
												V = o.actualParent.clientHeight - K.clientHeight;
											if (!P) {
												var ba = a.getMaxWHBpt(o.responsiveCSS[a.ResponsiveProjWidth], a.ResponsiveProjWidth).w - Z,
													Q = a.createTempTextElemAndGetBoundingRect(ba, r, K.innerHTML),
													$ = Q.width + Z,
													ca = Q.height + V,
													H = a.getExpectedWindowWidthToFitText(o.currentCSS,
														$, ca),
													H = a.getExpectedWindowWidthToFitText(o.currentCSS, $, ca),
													P = {
														winW: H,
														expw: Q.width,
														hOffsets: Z,
														vOffsets: V
													};
												r.breakevenWidth[a.ResponsiveProjWidth] = P
											}
											r.minItemHeight = O.height + V;
											if (a.fluidFont && (x && a.adjustFontSizesForVariableText(x, P, x.clientWidth), y)) {
												var da = y.clientWidth;
												x && (da = x.clientWidth);
												a.adjustFontSizesForVariableText(y, P, da)
											}
											O = B(K);
											if (K.clientHeight < O.height) {
												var S = O.height;
												r.minItemHeight = S + V;
												var C = a.getMinMaxHeight(o.currentCSS);
												!isNaN(C.maxH) && r.minItemHeight > C.maxH && (r.minItemHeight =
													C.maxH, S = r.minItemHeight - V);
												T = !0;
												x && (x.style.height = S + "px");
												y && (y.style.height = S + "px")
											}
										}
										T && (u ? u.drawForResponsive(!0, a.ReasonForDrawing.kTextGrow) : o.drawForResponsive(!0, a.ReasonForDrawing.kTextGrow))
									}
								}
								P = function (b) {
									if (b) {
										b.style.width = O.width + "px";
										b.style.height = O.height + "px";
										b.style.position = "absolute";
										switch (Y) {
											case a.TextAlignmentEnum.kTARightJustify:
												b.style.textAlign = "right";
												break;
											case a.TextAlignmentEnum.kTACenter:
												b.style.textAlign = "center";
												break;
											default:
												b.style.textAlign = "left"
										}
										switch (X) {
											case a.TextLayoutEnum.kTLBottom:
												var c =
													x.clientHeight - O.height;
												E && (c = K.parentElement.clientHeight - O.height);
												b.style.top = (c < 0 ? 0 : c) + "px";
												break;
											case a.TextLayoutEnum.kTLCenter:
												c = (x.clientHeight - O.height) / 2;
												E && (c = (K.parentElement.clientHeight - O.height) / 2);
												if (c > 0) {
													b.style.bottom = "";
													b.style.top = c + "px"
												}
												break;
											default:
												b.style.top = "0px"
										}
									}
								};
								x && P(x.firstChild);
								y && (P(y.firstChild), E && (R = {
									captionName: c.id,
									reason: "updateResponsiveVarText:textadjust"
								}, a.em.fireEvent("CPInputControlReplacedEvent", R)))
							} catch (ga) {
								a.log(ga)
							}
						}
					}
				}
				c = void 0
			}
			return c
		}
		ba = V = Z = P =
			R = 0;
		$ = Q = "";
		ca = !1;
		L = null;
		L = !1;
		b && (L = !0);
		if (c.id && (H = a.D[c.id]))
			if (da = H.vt, S = "", da && c.drawingBoard && (d = H.mdi, C = null, d && (C = a.D[d]), T = c.drawingBoard, C && C.b && T)) {
				B = null;
				$ = d + "-vtext";
				if (2 > T.children.length) void 0 != H.lm && (g = H.lm, h = H.tm, k = H.rm, l = H.bm), B = a.newElem("div"), B.className = "cp-vtxt", B.id = $, L = a.movie.stage.getFrameset(c.id), C && (L && L.isStarted && 1 == C.visible) && (ca = !0), B.style.cssText = "word-wrap:break-word;white-space:pre-wrap; width: " + (C.b[2] - C.b[0] - (g + k) + "px") + ";height:" + (C.b[3] - C.b[1] - (h + l) + "px") +
					";line-height:90%;overflow:hidden;", d = "" + ("margin-left:" + (C.b[0] + g - C.vb[0]) + "px;"), d += "margin-top:" + (C.b[1] + h - C.vb[1]) + "px;", B.style.cssText += d, ca || (B.style.visibility = "hidden"), C.tr && a.applyTransform(B, C.tr), C.sh && a.applyShadow(B, C.sh), L && L.htmlDependents.push(B), a.movie.stage.addToParentChildMap(c.id, $), T.appendChild(B);
				else if (c = G[d], (B = T.children[1]) && L && C && 1 == C.visible && c && c.isDrawn) B.style.visibility = "visible";
				try {
					if (void 0 != H.vars && void 0 != H.varLens && void 0 != H.texts) {
						o = a.D.project.w;
						u = H.vars[o];
						e = H.varLens[o];
						f = H.texts[o];
						Z = u.length;
						for (V = f.length; !(S += f[P++], R < Z && (Q = window[u[R]], void 0 == Q && (Q = ""), ba = e[R], Q.length > ba && (Q = Q.substr(0, ba)), ++R, S += Q), P >= V););
						B.innerHTML = S
					} else B.innerHTML = da
				} catch (ha) {
					a.log(ha)
				}
			}
	};
	a.updateVariableTextBounds = function (c, b) {
		c.element && a.updateVarText(c.element, !0, b)
	};
	a.updateNoSkipFramesAndUpdateVarText = function (c) {
		c.element && a.updateVarText(c.element, !0);
		c.pa && (a.movie.stage.noSkipFrames[c.pa] = c.pa);
		c.psv && (a.movie.stage.noSkipFrames[c.psv] = c.psv)
	};
	a.RegisterExternalObjects =
		function (c, b, d, e) {
			a.IsValidObj(a.extObjInfo) || (a.extObjInfo = []);
			for (var f = !1, h = 0; h < a.extObjInfo.length; ++h)
				if (a.extObjInfo[h].cb == d) {
					f = !0;
					break
				}
			f || (f = {}, f.n = c, f.cls = b, f.cb = d, f.chcb = e, a.extObjInfo.push(f))
	};
	a.AddNoSkipFrameExternal = function (c) {
		a.movie.stage && (a.movie.stage.noSkipFrames[c] = c)
	};
	a.AddExternalAudioCb = function (c) {
		var b = !1;
		void 0 == a.extAudioCallbacks && (a.extAudioCallbacks = []);
		for (var d = 0; d < a.extAudioCallbacks.length; ++d)
			if (a.extAudioCallbacks[d] == c) {
				b = !0;
				break
			}
		b || a.extAudioCallbacks.push(c)
	};
	a.showHideFeedbackCaptionsClickHandler = function (c, b, d, e) {
		d || (d = a.D[c.id].topMostObjectInteractiveObject);
		return !d ? !1 : (c = a.D[d]) && void 0 != c.val ? !1 : a.clickFailureHandler(c, b, e)
	};
	a.getLocalisedStateName = function (c) {
		return a.D.project.stateNameToLocalizedStateNameMap[c]
	};
	a.doesSupportStates = function (c) {
		var b = !1;
		if (void 0 == c) return b;
		switch (c) {
			case a.kCPOTScorableButtonItem:
			case a.kCPOTTextEntryButtonItem:
				b = !0
		}
		return b
	};
	a.shouldRelaxBrowserCheck = function (c) {
		var b = !1;
		if (void 0 == c) return b;
		switch (c) {
			case a.kCPOTTextEntryButtonItem:
				b = !0
		}
		return b
	};
	a.toggleLMSPreviewDebugLogsColor = function (a) {
		lBackgroundColorArray = ["#FFFFFF", "#D8D8D8"];
		a.getBackgroundColorForLogs() == lBackgroundColorArray[0] ? a.setBackgroundColorForLogs(lBackgroundColorArray[1]) : a.setBackgroundColorForLogs(lBackgroundColorArray[0])
	};
	a.setInitialVisibility = function (c) {
		if (c) {
			var b = [],
				d = !0,
				e = c.element.id,
				f = -1;
			if ("undefined" !== c.baseStateItemID && "undefined" !== c.initialState) {
				if (-1 == c.baseStateItemID) b = c.states, a.D[e] && a.D[e].visible && (d = a.D[e].visible), f = c.currentState;
				else {
					var h = c.baseStateItemID,
						g = a.model.data,
						k;
					for (k in g) {
						var l = g[k];
						if (l && l.uid && l.uid == h) {
							b = a.D[l.dn].stl;
							d = l.effectiveVi;
							f = a.D[l.dn].stis;
							break
						}
					}
				} if (!(0 == b.length || -1 == f)) {
					h = !1;
					if (c.currentState < b.length && (k = b[f])) {
						b = k.stsi;
						for (k = 0; k < b.length; k++)
							if (f = b[k], a.D[e] && a.D[e].uid && f == a.D[e].uid) {
								h = !0;
								break
							}
					}
					c.visible = h && d;
					a.D[e] && (a.D[e].visible = c.visible)
				}
			}
		}
	};
	a.GetMouseOverManager = function () {
		a.movie.mouseOverManager || (a.movie.mouseOverManager = new a.MouseOverManager);
		return a.movie.mouseOverManager
	};
	a.handleMouseMoveNew = function (c) {
		var b = a.GetMouseOverManager();
		b && b.handleMouseMove(c)
	}
})(window.cp);
(function (a) {
	a.UNKNOWN = 0;
	a.WINDOWS = 1;
	a.MACOS = 2;
	a.DESKTOP = 1;
	a.IDEVICE = 2;
	a.ANDROID = 3;
	a.KINDLE = 4;
	a.IPAD2 = 1;
	a.IPAD3 = 2;
	a.IPHONE = 3;
	a.IOS1 = 1;
	a.IOS2 = 2;
	a.IOS3 = 3;
	a.IOS4 = 4;
	a.IOS5 = 5;
	a.IOS6 = 6;
	a.IOS7 = 7;
	a.IOS8 = 8;
	a.MSIE = 1;
	a.FIREFOX = 2;
	a.CHROME = 3;
	a.SAFARI = 4;
	a.NETSCAPE = 5;
	a.OPERA = 6;
	a.CAMINO = 7;
	a.FIREBIRD = 8;
	a.MSEDGE = 9;
	a.MSIE_MIN_SUPPORTED_VERSION = 9;
	a.CHROME_MIN_SUPPORTED_VERSION = 17;
	a.SAFARI_MIN_SUPPORTED_VERSION = 5.1;
	a.FF_MIN_SUPPORTED_VERSION_WIN = 22;
	a.FF_MIN_SUPPORTED_VERSION_MAC = 35;
	a.FF_MIN_SUPPORTED_VERSION_FFOS = 15;
	a.FF_MIN_SUPPORTED_VERSION_ANDROID = 20;
	a.FF_MIN_SUPPORTED_VERSION = void 0;
	a.HAVE_NOTHING = 0;
	a.HAVE_METADATA = 1;
	a.HAVE_CURRENT_DATA = 2;
	a.HAVE_FUTURE_DATA = 3;
	a.HAVE_ENOUGH_DATA = 4;
	a.disablePaceMaker = !1;
	a.verbose = !1;
	a.poolVerbose = !1;
	a.exceptionalLogs = !0;
	a.consolidateLogs = !1;
	a.dynamicLogControl = !1;
	a.projectContainer = null;
	a.project = null;
	a.playImage = null;
	a.autoplayImage = null;
	a.autoplayDiv = null;
	a.pwdv = null;
	a.exdv = null;
	a.preloaderImage = null;
	a.verbose && a.log("navigator.userAgent = " + navigator.userAgent);
	a.OS = a.UNKNOWN;
	a.device = a.DESKTOP;
	a.deviceFlavor = a.UNKNOWN;
	a.IOSMajor = a.UNKNOWN;
	a.IOSMinor = a.UNKNOWN;
	a.IOSBuild = a.UNKNOWN;
	a.browser = a.UNKNOWN;
	a.browserVersion = a.UNKNOWN;
	a.browser_supports_svg = !0;
	a.kTextButton = 0;
	a.kTransparentButton = 2;
	a.kImageButton = 3;
	a.kCPRolloverCaptionItem = 25;
	a.kCPRolloverImageItem = 26;
	a.kCPOTRolloverAutoShape = 617;
	a.kCPRolloverAreaItem = 27;
	a.kCPOTAnimationItem = 28;
	a.kCPOTCaptionItem = 19;
	a.kCPHighlight = 14;
	a.kCPOTImageBoxItem = 15;
	a.kCPMouse = 12;
	a.kCPMouseClick = 15728652;
	a.kCPOTStageAnswerItem = 80;
	a.kCPOTIncompleteFeedbackItem =
		97;
	a.kCPZoomSource = 99;
	a.kCPOTStageCorrectFeedback = 10086;
	a.kCPOTStageIncorrectFeedback = 10087;
	a.kCPOTStagePartialCorrectFeedback = 10139;
	a.kCPOTTimeoutFeedbackItem = 174;
	a.kCPOTRetryFeedbackItem = 81;
	a.kCPOTStageSingleChoiceMultipleAnswer = 10082;
	a.kCPOTStageMultipleChoiceMultipleAnswer = 10081;
	a.kCPOTStageLikertQuestion = 10112;
	a.kCPOTStageSequenceAnswer = 10096;
	a.kCPOTStageMatchingAnswer = 10097;
	a.kCPOTStageMatchingAnswerEntry = 10098;
	a.kCPOTStageMatchingQuestion = 10110;
	a.kCPOTQuestionColumn = 87;
	a.kCPOTQuestionFillBlank =
		10011;
	a.kCPOTStageShortAnswer = 10094;
	a.kCPOTItemHotSpot = 131;
	a.kCPOTFillBlankCaption = 10106;
	a.kCPOTReviewArea = 94;
	a.kCPOTProgressIndicator = 92;
	a.kCPOTScoringResult = 111;
	a.kCPOTClickBoxItem = 13;
	a.kCPOTScorableButtonItem = 177;
	a.kCPTypingText = 64;
	a.kCPFullMotion = 270;
	a.kCPOTFLVItem = 98;
	a.kCPOTVideo = 365;
	a.kCPOTVideoResource = 359;
	a.kCPOTSuccessCaptionItem = 21;
	a.kCPOTFailureCaptionItem = 22;
	a.kCPOTHintCaptionItem = 23;
	a.kCPOTTextEntryBoxItem = 24;
	a.kCPOTTextEntryButtonItem = 75;
	a.kCPOTRetakeButton = 175;
	a.kCPOTLineItem = 142;
	a.kCPOTOvalItem =
		167;
	a.kCPOTRectangleItem = 168;
	a.kCPOTPolygon = 209;
	a.kCPOTAnswerArea = 10142;
	a.kCPOTMatchingQuestionArea = 10143;
	a.kCPOTMatchingAnswerArea = 10144;
	a.kCPOTLikertHeaderArea = 10146;
	a.kCPOTLikertQuestionArea = 10147;
	a.kCPOTLikertTotalGroupArea = 10148;
	a.kCPOTStageQuestionText = 79;
	a.kCPOTStageQuestionTitle = 86;
	a.kCPOTTitleAutoShape = 589;
	a.kCPOTSubTitleAutoShape = 590;
	a.kCPOTAutoShape = 612;
	a.kCPOTWidgetItem = 133;
	a.kCPOTWebObject = 652;
	a.kCPOTTAItem = 76;
	a.kCPOTStageAnswerLabel = 10088;
	a.kCPOTStageQuestionNextButton = 83;
	a.kCPOTStageQuestionClearButton =
		84;
	a.kCPOTStageQuestionBackButton = 85;
	a.kCPOTStageQuestionSubmitButton = 91;
	a.kCPOTStageQuestionReviewModeNextButton = 10180;
	a.kCPOTStageQuestionReviewModeBackButton = 10182;
	a.kCPOTScoringResultItem = 112;
	a.kCPOTScoringReviewButton = 103;
	a.kCPOTScoringContinueButton = 10119;
	a.kCPOTSubmitAllButton = 10149;
	a.kCPOTResetButton = 640;
	a.kCPOTUndoButton = 639;
	a.kCPOTDDSubmitButton = 641;
	a.kCPOTStageCorrectFeedbackShape = 10166;
	a.kCPOTStageIncorrectFeedbackShape = 10168;
	a.kCPOTStagePartialCorrectFeedbackShape = 10170;
	a.kCPOTRetryFeedbackShape =
		10172;
	a.kCPOTIncompleteFeedbackShape = 10174;
	a.kCPOTAnswerFeedbackShape = 10176;
	a.kCPOTTimeoutFeedbackShape = 10178;
	a.kCPOTSuccessShapeItem = 661;
	a.kCPOTFailureShapeItem = 663;
	a.kCPOTHintShapeItem = 665;
	a.rCSSProps = "position left top right bottom width height".split(" ");
	a.rCPProps = "p l t r b w h apr cr rpmm sh".split(" ");
	a.rCPLinkProps = "lhEID lhV lhID lvEID lvV lvID".split(" ");
	a.rLinkEdges = ["", "left", "top", "right", "bottom"];
	a.rLinkEdge = {};
	a.rLinkEdge.UNKNOWN = 0;
	a.rLinkEdge.LEFT = 1;
	a.rLinkEdge.TOP = 2;
	a.rLinkEdge.RIGHT =
		3;
	a.rLinkEdge.BOTTOM = 4;
	a.ReasonForDrawing = {};
	a.ReasonForDrawing.kRegularDraw = 0;
	a.ReasonForDrawing.kOrientationChangeOrResize = 1;
	a.ReasonForDrawing.kTextGrow = 2;
	a.ReasonForDrawing.kMouseEvent = 3;
	a.ReasonForDrawing.kMoviePaused = 4;
	a.ReasonForDrawing.kSlideChanged = 5;
	a.ReasonForDrawing.kLinkedToItemAppeared = 6;
	a.TextAlignmentEnum = {};
	a.TextAlignmentEnum.kTALeftJustify = 0;
	a.TextAlignmentEnum.kTARightJustify = 1;
	a.TextAlignmentEnum.kTACenter = 2;
	a.TextAlignmentEnum.kTAJustified = 3;
	a.TextLayoutEnum = {};
	a.TextLayoutEnum.kTLTop =
		0;
	a.TextLayoutEnum.kTLCenter = 1;
	a.TextLayoutEnum.kTLBottom = 2;
	a.ReportingOptionsEnum = {};
	a.ReportingOptionsEnum.breeze = 0;
	a.ReportingOptionsEnum.quiz_only = 1;
	a.ReportingOptionsEnum.quiz_and_views = 2;
	a.ReportingOptionsEnum.views_only = 3;
	a.ReportingOptionsEnum.access = 4;
	a.ReportingOptionsEnum.completion_success = 5;
	a.ReportingOptionsEnum.incompleteToPassedOrFailed = 6;
	a.ReportingOptionsEnum.completion_only = 7;
	a.SlideViewsTypeEnum = {};
	a.SlideViewsTypeEnum.percent = 0;
	a.SlideViewsTypeEnum.number = 1;
	a.QuizCriteriaEnum = {};
	a.QuizCriteriaEnum.QuizIsPassed = 0;
	a.QuizCriteriaEnum.QuizIsAttempted = 1;
	a.QuizCriteriaEnum.QuizIsPassedOrAttempLimitReached = 2;
	a.kBeginPath = 0;
	a.kMoveTo = 1;
	a.kLineTo = 2;
	a.kBezierTo = 3;
	a.kClosePath = 4;
	a.kNotClosed = 5;
	a.kNoStroke = 6;
	a.kPathFillData = 7;
	a.kPathFillAlpha = 8;
	a.KPathStrokeColor = 9;
	a.KPathStrokeWidth = 10;
	a.KPathStrokeAlpha = 11;
	a.accOutlineStyleStr = "";
	a.kPPTXSlideImagesStr = "pxi";
	a.kPPTXSlideImagesDir = "dr/pptxIm/";
	a.kTTNone = -1;
	a.kTTOnEnter = 0;
	a.kTTOnClick = 1;
	a.kTTOnTextEntry = 2;
	a.kTTOnRollover = 3;
	a.kTTOnSuccess =
		4;
	a.kTTOnFailure = 5;
	a.kTTOnSlideExit = 6;
	a.kTTOnHyperlink = 7;
	a.kTTOnDropOfType = 8;
	a.kSTTNone = -1;
	a.kSTTNormal = 0;
	a.kSTTDown = 1;
	a.kSTTRollOver = 2;
	a.kSTTDragOver = 3;
	a.kSTTDragStart = 4;
	a.kSTTDropCorrect = 5;
	a.kSTTDropIncorrect = 6;
	a.kSTTDropAccept = 7;
	a.kSTTDropReject = 8;
	a.kSTTCustom = 9;
	a.QuestionStatusEnum = {};
	a.QuestionStatusEnum.INCOMPLETE = 0;
	a.QuestionStatusEnum.INCORRECT = 1;
	a.QuestionStatusEnum.CORRECT = 2;
	a.QuestionStatusEnum.PARTIAL_CORRECT = 3;
	a.mouseStateOver = 1;
	a.mouseStateOut = 2;
	a.mouseStateDown = 3;
	a.mouseStateUp = 4;
	a.mouseStateTouchStart =
		5;
	a.mouseStateTouchMove = 6;
	a.mouseStateTouchEnd = 7;
	a.ReasonForPause = {};
	a.ReasonForPause.PLAYBAR_ACTION = 0;
	a.ReasonForPause.INTERACTIVE_ITEM = 1;
	a.ReasonForPause.MOVIE_ENDED = 2;
	a.ReasonForPause.VIDEO_SYNC = 3;
	a.ReasonForPause.FEEDBACK_ITEM = 4;
	a.ReasonForPause.CANNOT_MOVE_AHEAD = 5;
	a.ReasonForPause.WAIT_FOR_RESOURCES = 6;
	a.ReasonForPause.MOVIE_REWIND_STOP = 7;
	a.ReasonForPause.CPCMNDPAUSE = 8;
	a.ReasonForPause.SHOW_VALUE_AT_FRAME = 9;
	a.ReasonForPause.DONT_CARE_DEPRECATED_CODE = 10;
	a.ReasonForPause.EVENT_VIDEO_PAUSE = 11;
	a.ReasonForPause.ONLY_ONE_MEDIUM_CAN_PLAY =
		12;
	a.ReasonForPause.PPTX_PAUSE_FOR_ONCLICK_ANIMATION = 13;
	a.ReasonForPause.CPCMNDGOTOFRAME = 14;
	a.ReasonForPause.BAD_ORIENTATION = 15;
	a.ReasonForPause.WK_EXIT_FULL_SCREEN = 16;
	a.ReasonForPause.ACTION_CHOICE = 17;
	a.ReasonForPlay = {};
	a.ReasonForPlay.PLAYBAR_ACTION = 0;
	a.ReasonForPlay.INTERNAL = 1;
	a.ReasonForPlay.ORIENTATION_OK = 2;
	a.ReasonForPlay.MOVIE_REWIND = 3;
	a.ReasonForPlay.ACTION_CHOICE = 4;
	a.FeedbackType = {
		SUCCESS: 0,
		FAILURE: 1,
		HINT: 2,
		OTHER: 3
	};
	a.FeedbackCloseReason = {
		SHOW_SUCCESS: 1,
		SHOW_FAILURE: 2,
		SHOW_HINT: 3,
		SLIDE_CHANGE: 4,
		OTHER: 5
	};
	a.lastTouch = (new Date).getTime(); - 1 != navigator.appVersion.indexOf("Win") ? a.OS = a.WINDOWS : -1 != navigator.appVersion.indexOf("Mac") && (a.OS = a.MACOS);
	a.multiAudioTrack = !0;
	a.waitForAudio = !1;
	if (navigator.userAgent.match(/(iPhone|iPad)/i)) {
		a.device = a.IDEVICE;
		a.browser_supports_svg = !1;
		a.accOutlineStyleStr = "outline-style:none";
		var b = window.devicePixelRatio ? window.devicePixelRatio : 1; - 1 != navigator.userAgent.indexOf("iPhone") ? a.deviceFlavor = a.IPHONE : -1 != navigator.userAgent.indexOf("iPad") && (a.deviceFlavor =
			a.IPAD2, 2 <= b && (a.deviceFlavor = a.IPAD3));
		(b = navigator.userAgent.match(/OS [1-9][0-9]*_[0-9][0-9]*_[0-9][0-9]*/)) || (b = navigator.userAgent.match(/OS [1-9][0-9]*_[0-9][0-9]*/));
		b && b[0] && (b = b[0].split("_"), a.IOSMajor = parseInt(b[0].substr(2), 10), a.IOSMinor = parseInt(b[1], 10), 3 <= b.length && (a.IOSBuild = parseInt(b[2], 10)));
		a.IOSMajor >= a.IOS5 && (a.waitForAudio = !0)
	} else navigator.userAgent.match(/android/i) ? (a.device = a.ANDROID, a.waitForAudio = !0, a.accOutlineStyleStr = "outline-style:none") : navigator.userAgent.match(/Silk/i) &&
		(a.device = a.KINDLE);
	navigator.userAgent.match(/MSIE/i) ? (a.browser = a.MSIE, a.browserVersion = a.getCurrentBrowserVersion(navigator.userAgent, "MSIE") || a.getCurrentBrowserVersion(navigator.appVersion, "MSIE") || a.UNKNOWN) : navigator.userAgent.match(/Edge/i) ? (a.browser = a.MSEDGE, a.browserVersion = a.getCurrentBrowserVersion(navigator.userAgent, "Edge") || a.getCurrentBrowserVersion(navigator.appVersion, "Edge") || a.UNKNOWN) : navigator.userAgent.match(/Firefox/i) ? (a.browser = a.FIREFOX, a.accOutlineStyleStr = "outline-style:none",
		a.OS == a.WINDOWS ? a.FF_MIN_SUPPORTED_VERSION = a.FF_MIN_SUPPORTED_VERSION_WIN : a.OS == a.MACOS ? a.FF_MIN_SUPPORTED_VERSION = a.FF_MIN_SUPPORTED_VERSION_MAC : a.OS == a.ANDROID && (a.FF_MIN_SUPPORTED_VERSION = a.FF_MIN_SUPPORTED_VERSION_ANDROID), a.browserVersion = a.getCurrentBrowserVersion(navigator.userAgent, "Firefox") || a.getCurrentBrowserVersion(navigator.appVersion, "Firefox") || a.UNKNOWN) : navigator.userAgent.match(/Chrome/i) ? (a.browser = a.CHROME, a.accOutlineStyleStr = "outline-style:none", a.browserVersion = a.getCurrentBrowserVersion(navigator.userAgent,
		"Chrome") || a.getCurrentBrowserVersion(navigator.appVersion, "Chrome") || a.UNKNOWN) : navigator.userAgent.match(/Safari/i) ? (a.browser = a.SAFARI, a.browser_supports_svg = !1, a.accOutlineStyleStr = "outline-style:none", a.browserVersion = a.getCurrentBrowserVersion(navigator.userAgent, "Version") || a.getCurrentBrowserVersion(navigator.appVersion, "Version") || a.UNKNOWN) : navigator.userAgent.match(/Netscape/i) ? (a.browser = a.NETSCAPE, a.browserVersion = a.getCurrentBrowserVersion(navigator.userAgent, "Netscape") || a.getCurrentBrowserVersion(navigator.appVersion,
		"Netscape") || a.UNKNOWN) : navigator.userAgent.match(/Opera/i) ? (a.browser = a.OPERA, a.browserVersion = a.getCurrentBrowserVersion(navigator.userAgent, "Version") || a.getCurrentBrowserVersion(navigator.appVersion, "Version") || a.UNKNOWN) : navigator.userAgent.match(/Camino/i) ? (a.browser = a.CAMINO, a.browserVersion = a.getCurrentBrowserVersion(navigator.userAgent, "Camino") || a.getCurrentBrowserVersion(navigator.appVersion, "Camino") || a.UNKNOWN) : navigator.userAgent.match(/Firebird/i) && (a.browser = a.FIREBIRD);
	a.verbose &&
		(a.log("browser = " + a.browser), a.log("browserVersion = " + a.browserVersion), a.log("device = " + a.device), a.device == a.IDEVICE && (a.log("device flavor = " + a.deviceFlavor), a.log("IOS Version = " + a.IOSMajor + "_" + a.IOSMinor + "_" + a.IOSBuild)), a.log("browser_supports_svg = " + a.browser_supports_svg))
})(window.cp);
(function (b) {
	function g(c, a) {
		try {
			c.id ? b.updateVarText(c) : c(a)
		} catch (d) {}
	}
	function h(c) {
		if ("CPVariableValueChangedEvent" == c.cpName) {
			var a = EventListeners[b.VARIABLE_CHANGED_EVENT];
			d(c, a);
			for (a = 0; a < c.cpData.notify.length; ++a)
				for (var i = c.cpData.notify[a], f = EventListeners[b.SPECIFIC_VARIABLE_CHANGED_EVENT], e = 0; e < f.length; ++e)
					if (f[e].n == i) {
						var h = f[e].l;
						f[e].r && (c.reciever = f[e].r);
						g(h, c)
					}
		} else "CPVariableCreatedEvent" == c.cpName ? (a = EventListeners[b.VARIABLE_CREATED_EVENT], d(c, a)) : "CPTime_Update" == c.cpName ?
			(a = EventListeners[b.TIMEUPDATEEVENT], d(c, a)) : "CPSet_ResumeData" == c.cpName ? (a = EventListeners[b.SET_RESUMEDATA], d(c, a)) : "CPPlaybarStateChanged" == c.cpName ? (a = EventListeners[b.PLAYBARSTATECHANGED], d(c, a)) : "CPTocStateChanged" == c.cpName ? (a = EventListeners[b.TOCSTATECHANGED], d(c, a)) : "CPSlideEnter" == c.cpName ? (a = EventListeners[b.SLIDEENTEREVENT], d(c, a)) : "CPSlideExit" == c.cpName ? (a = EventListeners[b.SLIDEEXITEVENT], d(c, a)) : "CPInteractiveItemSubmit" == c.cpName ? (a = EventListeners[b.INTERACTIVEITEMSUBMITEVENT], d(c,
			a)) : "CPMoviePause" == c.cpName ? (a = EventListeners[b.MOVIEPAUSEEVENT], d(c, a)) : "CPMovieResume" == c.cpName ? (a = EventListeners[b.MOVIERESUMEEVENT], d(c, a)) : "CPMovieStart" == c.cpName ? (a = EventListeners[b.MOVIESTARTEVENT], d(c, a)) : "CPMovieStop" == c.cpName ? (a = EventListeners[b.MOVIESTOPEVENT], d(c, a)) : "CPMovieExit" == c.cpName ? (a = EventListeners[b.MOVIEEXITEVENT], d(c, a)) : "CPQuestionSkip" == c.cpName ? (a = EventListeners[b.QUESTIONSKIPEVENT], d(c, a)) : "CPQuestionSubmit" == c.cpName ? (a = EventListeners[b.QUESTIONSUBMITEVENT], d(c, a)) :
			"CPStartPlaybarScrubbing" == c.cpName ? (a = EventListeners[b.STARTPLAYBARSCRUBBINGEVENT], d(c, a)) : "CPEndPlaybarScrubbing" == c.cpName ? (a = EventListeners[b.ENDPLAYBARSCRUBBINGEVENT], d(c, a)) : "CPMovieFocusIn" == c.cpName ? (a = EventListeners[b.MOVIEFOCUSINEVENT], d(c, a)) : "CPMovieFocusLost" == c.cpName ? (a = EventListeners[b.MOVIEFOCUSLOSTEVENT], d(c, a)) : "CPMovieAudioMute" == c.cpName ? (a = EventListeners[b.MOVIEAUDIOMUTEEVENT], d(c, a)) : "CPInputControlReplacedEvent" == c.cpName ? (a = EventListeners[b.INPUTCONTROLREPLACEDEVENT], d(c,
				a)) : "CPWindowResized" == c.cpName ? (a = EventListeners[b.WINDOWRESIZEDEVENT], d(c, a)) : "CPWindowResizeCompleted" == c.cpName ? (a = EventListeners[b.WINDOWRESIZECOMPLETEDEVENT], d(c, a)) : "CPOrientationChanged" == c.cpName ? (a = EventListeners[b.ORIENTATIONCHANGEDEVENT], d(c, a)) : "CPOrientationChangeCompleted" == c.cpName ? (a = EventListeners[b.ORIENTATIONCHANGECOMPLETEDEVENT], d(c, a)) : "CPItemDrawingCompleteEvent" == c.cpName ? (a = EventListeners[b.ITEMDRAWINGCOMPLETEEVENT], d(c, a)) : "CPQuizSlideReached" == c.cpName && (a = EventListeners[b.QUIZSLIDEREACHED],
				g(c, a))
	}
	function d(b, a) {
		for (var d = 0; d < a.length; ++d) {
			var f = a[d];
			f.r && (b.reciever = f.r);
			g(f.l, b)
		}
	}
	b.VARIABLE_CREATED_EVENT = 0;
	b.VARIABLE_CHANGED_EVENT = 1;
	b.SPECIFIC_VARIABLE_CHANGED_EVENT = 2;
	b.SLIDEENTEREVENT = 3;
	b.SLIDEEXITEVENT = 4;
	b.INTERACTIVEITEMSUBMITEVENT = 5;
	b.MOVIEPAUSEEVENT = 6;
	b.MOVIERESUMEEVENT = 7;
	b.MOVIESTARTEVENT = 8;
	b.MOVIESTOPEVENT = 9;
	b.QUESTIONSKIPEVENT = 10;
	b.QUESTIONSUBMITEVENT = 11;
	b.STARTPLAYBARSCRUBBINGEVENT = 12;
	b.ENDPLAYBARSCRUBBINGEVENT = 13;
	b.MOVIEFOCUSINEVENT = 14;
	b.MOVIEFOCUSLOSTEVENT = 15;
	b.MOVIEAUDIOMUTEEVENT =
		16;
	b.INPUTCONTROLREPLACEDEVENT = 17;
	b.WINDOWRESIZEDEVENT = 18;
	b.WINDOWRESIZECOMPLETEDEVENT = 19;
	b.ORIENTATIONCHANGEDEVENT = 20;
	b.ORIENTATIONCHANGECOMPLETEDEVENT = 21;
	b.TIMEUPDATEEVENT = 22;
	b.SET_RESUMEDATA = 23;
	b.PLAYBARSTATECHANGED = 24;
	b.TOCSTATECHANGED = 25;
	b.ITEMDRAWINGCOMPLETEEVENT = 26;
	b.MOVIEEXITEVENT = 27;
	b.QUIZSLIDEREACHED = 28;
	window.EventListeners = [];
	window.EventListeners[b.VARIABLE_CREATED_EVENT] = [];
	window.EventListeners[b.VARIABLE_CHANGED_EVENT] = [];
	window.EventListeners[b.SPECIFIC_VARIABLE_CHANGED_EVENT] = [];
	window.EventListeners[b.SLIDEENTEREVENT] = [];
	window.EventListeners[b.SLIDEEXITEVENT] = [];
	window.EventListeners[b.INTERACTIVEITEMSUBMITEVENT] = [];
	window.EventListeners[b.MOVIEPAUSEEVENT] = [];
	window.EventListeners[b.MOVIERESUMEEVENT] = [];
	window.EventListeners[b.MOVIESTARTEVENT] = [];
	window.EventListeners[b.MOVIESTOPEVENT] = [];
	window.EventListeners[b.QUESTIONSKIPEVENT] = [];
	window.EventListeners[b.QUESTIONSUBMITEVENT] = [];
	window.EventListeners[b.STARTPLAYBARSCRUBBINGEVENT] = [];
	window.EventListeners[b.ENDPLAYBARSCRUBBINGEVENT] = [];
	window.EventListeners[b.MOVIEFOCUSINEVENT] = [];
	window.EventListeners[b.MOVIEFOCUSLOSTEVENT] = [];
	window.EventListeners[b.MOVIEAUDIOMUTEEVENT] = [];
	window.EventListeners[b.INPUTCONTROLREPLACEDEVENT] = [];
	window.EventListeners[b.WINDOWRESIZEDEVENT] = [];
	window.EventListeners[b.WINDOWRESIZECOMPLETEDEVENT] = [];
	window.EventListeners[b.ORIENTATIONCHANGEDEVENT] = [];
	window.EventListeners[b.ORIENTATIONCHANGECOMPLETEDEVENT] = [];
	window.EventListeners[b.TIMEUPDATEEVENT] = [];
	window.EventListeners[b.SET_RESUMEDATA] = [];
	window.EventListeners[b.PLAYBARSTATECHANGED] = [];
	window.EventListeners[b.TOCSTATECHANGED] = [];
	window.EventListeners[b.ITEMDRAWINGCOMPLETEEVENT] = [];
	window.EventListeners[b.MOVIEEXITEVENT] = [];
	window.EventListeners[b.QUIZSLIDEREACHED] = [];
	b.EventManager = function () {
		b.em = this;
		(!document.createEvent || !document.addEventListener) && alert("EVENT FIRING WILL NOT WORK");
		document.addEventListener("propertyChange", h, !1);
		this.verbose = !1
	};
	b.EventManager.prototype = {
		fireEvent: function (b, a) {
			if (document.createEvent) {
				var d = document.createEvent("Events");
				d.initEvent("propertyChange", !0, !0, null);
				d.cpName = b;
				d.cpData = a;
				window.cpAPIEventEmitter && (d.Name = b, d.Data = a, window.cpAPIEventEmitter.trigger(d));
				return !document.dispatchEvent(d)
			}
		},
		addEventListener: function (c, a, d, f) {
			this.verbose && b.log("cp.em.addEventListener : " + c + " " + a + " " + d);
			return a == b.VARIABLE_CREATED_EVENT || a == b.VARIABLE_CHANGED_EVENT || a == b.SLIDEENTEREVENT || a == b.SLIDEEXITEVENT || a == b.STARTPLAYBARSCRUBBINGEVENT || a == b.INTERACTIVEITEMSUBMITEVENT || a == b.MOVIEPAUSEEVENT || a == b.MOVIERESUMEEVENT || a == b.MOVIESTARTEVENT || a == b.MOVIESTOPEVENT ||
				a == b.MOVIEEXITEVENT || a == b.QUESTIONSKIPEVENT || a == b.QUESTIONSUBMITEVENT || a == b.MOVIEFOCUSINEVENT || a == b.MOVIEFOCUSLOSTEVENT || a == b.MOVIEAUDIOMUTEEVENT || a == b.ENDPLAYBARSCRUBBINGEVENT || a == b.INPUTCONTROLREPLACEDEVENT || a == b.WINDOWRESIZEDEVENT || a == b.ORIENTATIONCHANGEDEVENT || a == b.WINDOWRESIZECOMPLETEDEVENT || a == b.ORIENTATIONCHANGECOMPLETEDEVENT || a == b.TIMEUPDATEEVENT || a == b.SET_RESUMEDATA || a == b.ITEMDRAWINGCOMPLETEEVENT || a == b.QUIZSLIDEREACHED ? (a = EventListeners[a], a.push({
					l: c,
					r: f
				}), this.verbose && b.log(a), !0) : a ==
				b.SPECIFIC_VARIABLE_CHANGED_EVENT ? (a = EventListeners[a], a.push({
					l: c,
					n: d,
					r: f
				}), this.verbose && b.log(a), !0) : !1
		},
		removeEventListener: function (c, a, d) {
			this.verbose && b.log("cp.em.removeEventListener : " + c + " " + a + " " + d);
			var f = !1;
			if (a == b.VARIABLE_CREATED_EVENT || a == b.VARIABLE_CHANGED_EVENT || a == b.SLIDEENTEREVENT || a == b.SLIDEEXITEVENT || a == b.STARTPLAYBARSCRUBBINGEVENT || a == b.INTERACTIVEITEMSUBMITEVENT || a == b.MOVIEPAUSEEVENT || a == b.MOVIERESUMEEVENT || a == b.MOVIESTARTEVENT || a == b.MOVIESTOPEVENT || a == b.MOVIEEXITEVENT || a ==
				b.QUESTIONSKIPEVENT || a == b.QUESTIONSUBMITEVENT || a == b.MOVIEFOCUSINEVENT || a == b.MOVIEFOCUSLOSTEVENT || a == b.MOVIEAUDIOMUTEEVENT || a == b.ENDPLAYBARSCRUBBINGEVENT || a == b.INPUTCONTROLREPLACEDEVENT || a == b.WINDOWRESIZEDEVENT || a == b.ORIENTATIONCHANGEDEVENT || a == b.WINDOWRESIZECOMPLETEDEVENT || a == b.ORIENTATIONCHANGECOMPLETEDEVENT || a == b.TIMEUPDATEEVENT || a == b.SET_RESUMEDATA || a == b.ITEMDRAWINGCOMPLETEEVENT || a == b.QUIZSLIDEREACHED) {
				a = EventListeners[a];
				if (void 0 != c.id)
					for (var e = 0; e < a.length; ++e) a[e].l.id == c.id && (a.splice(e,
						1), f = !0);
				else
					for (e = 0; e < a.length; ++e) a[e].l == c && (a.splice(e, 1), f = !0);
				f && this.verbose && b.log(a)
			} else if (a == b.SPECIFIC_VARIABLE_CHANGED_EVENT) {
				a = EventListeners[a];
				if (void 0 != d && "" != d)
					if (void 0 != c.id)
						for (e = 0; e < a.length; ++e) a[e].l.id == c.id && a[e].n == d && (a.splice(e, 1), f = !0);
					else
						for (e = 0; e < a.length; ++e) a[e].l == c && a[e].n == d && (a.splice(e, 1), f = !0);
					else if (void 0 != c.id)
					for (e = 0; e < a.length; ++e) a[e].l.id == c.id && (a.splice(e, 1), f = !0);
				else
					for (e = 0; e < a.length; ++e) a[e].l == c && (a.splice(e, 1), f = !0);
				f && this.verbose && b.log(a)
			}
			return f
		}
	}
})(window.cp);
(function (b) {
	function P() {
		for (var a = b.device != b.DESKTOP, c = "blackberry;symbian;smartphone;windows ce;windows phone;webos".split(";"), d = navigator.userAgent.toLowerCase(), e = "other", f = 0; f < c.length; ++f) - 1 != d.indexOf(c[f]) && (a = !0, e = c[f], e = e.split(" ").join("_"));
		if (a) switch (b.device) {
			case b.IDEVICE:
				return 1;
			case b.ANDROID:
				return 2;
			default:
				return e
		} else return 0
	}
	function h() {
		return vh._CaptivateVersion ? vh._CaptivateVersion : ""
	}
	function Q() {
		return vh._cpCmndVolume
	}
	function R(a) {
		var c = a / 100;
		0 > c && (c = 0);
		1 < c &&
			(c = 1);
		b.movie.am.setVolume(c);
		b.movie.vdm.setVolume(c);
		svvi("cpCmndVolume", a, ["cpCmndVolume"])
	}
	function n(a) {
		b.movie.am.mute(a);
		b.movie.vdm.mute(a);
		b.em.fireEvent("CPMovieAudioMute", b.movie.am.muted);
		svvi("cpCmndMute", a, ["cpCmndMute", "rdcmndMute"])
	}
	function o() {
		return vh._cpCmndMute
	}
	function p() {
		return vh._cpCmndPlaybarMoved
	}
	function q(a) {
		svvi("cpCmndPlaybarMoved", a, ["cpCmndPlaybarMoved", "rdcmndPlaybarMoved"])
	}
	function S() {
		return vh._cpCmndShowPlaybar
	}
	function T(a) {
		var c = void 0;
		b.movie && b.movie.playbackController &&
			(c = b.movie.playbackController.GetQuizController());
		c && (c.m_showPlaybar = a);
		c = document.getElementById("playbar");
		if (void 0 != c) {
			var d = document.getElementById("playbarBkGrnd");
			d && (a ? (c.style.display = "block", d.style.visibility = "visible") : (c.style.display = "none", d.style.visibility = "hidden"));
			b.adjustSkins()
		}
		svvi("cpCmndShowPlaybar", a, ["cpCmndShowPlaybar"]);
		b.em.fireEvent("CPPlaybarStateChanged", {
			visible: !! a,
			locked: !1
		})
	}
	function r() {
		return vh._cpCmndCC
	}
	function U(a) {
		a ? (b.movie.cc.style.visibility = "", "auto" !=
			b.movie.cc.style.pointerEvents && (b.movie.cc.style.pointerEvents = "auto")) : b.movie.cc.style.visibility = "hidden";
		svvi("cpCmndCC", a, ["cpCmndCC", "rdcmndCC"])
	}
	function s() {
		return vh._cpCmndRewindAndPlay
	}
	function t(a) {
		a && b.movie.rewind();
		svvi("cpCmndRewindAndPlay", a, ["cpCmndRewindAndPlay", "rdcmndRewindAndPlay"])
	}
	function u() {
		return vh._cpCmndRewindAndStop
	}
	function v(a) {
		a && (b.movie.jumpToFrame(1), b.movie.pause(b.ReasonForPause.MOVIE_REWIND_STOP));
		svvi("cpCmndRewindAndStop", a, ["cpCmndRewindAndStop", "rdcmndRewindAndStop"])
	}
	function i() {
		return vh._cpCmndPreviousSlide
	}
	function j(a) {
		a && b.jumpToPreviousSlide();
		svvi("cpCmndPreviousSlide", a, ["cpCmndPreviousSlide", "cpCmndPrevious", "rdcmndPreviousSlide", "rdcmndPrevious"])
	}
	function V(a) {
		if (a && b.movie) {
			var c = -1,
				d = !1;
			if (b.movie.playbackController) {
				var e = b.movie.playbackController.GetQuizController();
				(d = e && e.GetIsInReviewMode()) && (c = e.GetPreviousQuestionSlideNumber())
			}
			d && 0 <= c ? cpCmndGotoSlideAndResume = c : cpCmndPreviousSlide = a
		}
	}
	function w() {
		return !b.movie.paused
	}
	function x(a) {
		a &&
			b.movie.play();
		svvi("cpCmndResume", a, ["cpCmndResume", "rdcmndResume"])
	}
	function W(a) {
		if (a && b.movie) {
			var c = -1,
				d = !1;
			if (b.movie.playbackController) {
				var e = b.movie.playbackController.GetQuizController();
				(d = e && e.GetIsInReviewMode()) && (c = e.GetNextQuestionSlideNumber())
			}
			d && 0 <= c ? cpCmndGotoSlideAndResume = c : cpCmndNextSlide = a
		}
	}
	function y(a) {
		var c = !b.movie.paused;
		b.movie.pause(b.ReasonForPause.CPCMNDGOTOFRAME);
		b.movie.jumpToFrame(a) ? svvi("", a, ["cpCmndGotoFrame", "rdcmndGotoFrame"]) : c && b.movie.play()
	}
	function z(a) {
		b.movie.jumpToFrame(a);
		b.movie.play();
		svvi("", a, ["cpCmndGotoFrameAndResume", "rdcmndGotoFrameAndResume"])
	}
	function A(a) {
		if (0 > a || a >= b.movie.stage.slides.length) cpCmndResume = !0;
		else {
			var c = b.D[b.movie.stage.slides[a]];
			c && b.movie.jumpToFrame(c.from);
			svvi("", a, ["cpCmndGotoSlide", "rdcmndGotoSlide"])
		}
	}
	function X(a) {
		var c = b.movie.speed;
		switch (b.movie.speed) {
			case 1:
			case 2:
				b.movie.speed *= 2;
				break;
			default:
				b.movie.speed = 1
		}
		c != b.movie.speed && (b.movie.resetFPS(), 1 == b.movie.speed ? (b.movie.am.seekTo(cpInfoCurrentFrame), b.movie.vdm.seekTo(cpInfoCurrentFrame, !1)) : b.movie.am.pause(b.ReasonForPause.PLAYBAR_ACTION), 0 != g && (0 != g && (clearInterval(g), g = 0), B()), svvi("", cpInfoFPS, ["cpInfoFPS", "rdinfoFPS"]), svvi("cpCmndFastForward", a, ["cpCmndFastForward"]))
	}
	function Y(a) {
		svvi("cpLockTOC", a, ["cpLockTOC"]);
		b.em.fireEvent("CPTocStateChanged", {
			visible: !! cpCmndTOCVisible,
			locked: !! a
		})
	}
	function Z() {
		return vh._cpLockTOC
	}
	function $(a) {
		var c = document.getElementById("toc");
		void 0 != c && b.D.tocProperties.overlay && (c.animator && (a ? c.animator.showTOC() : c.animator.hideTOC()), svvi("cpCmndTOCVisible",
			a, ["cpCmndTOCVisible"]), b.em.fireEvent("CPTocStateChanged", {
			visible: !! a,
			locked: !! cpLockTOC
		}))
	}
	function aa() {
		var a = document.getElementById("toc");
		return void 0 != a && a.animator ? a.animator.isVisible() : !1
	}
	function ba(a) {
		if (0 > a || a >= b.movie.stage.slides.length) cpCmndResume = !0;
		else {
			var c = b.D[b.movie.stage.slides[a]];
			c && (b.movie.jumpToFrame(c.from), b.movie.play());
			svvi("", a, ["cpCmndGotoSlideAndResume"])
		}
	}
	function ca(a) {
		var c = b.D["Slide" + a];
		c && (b.movie.jumpToFrame(c.from), b.movie.play(), svvi("", a, ["cpCmndGotoSlideByUIDAndResume"]))
	}
	function C() {
		return vh._cpCmndExit
	}
	function D(a) {
		svvi("cpCmndExit", a, ["cpCmndExit", "rdcmndExit"]);
		DoCPExit && DoCPExit()
	}
	function k(a) {
		a && b.jumpToNextSlide();
		svvi("cpCmndNextSlide", a, ["cpCmndNextSlide", "cpCmndNext", "rdcmndNextSlide", "rdcmndNext"])
	}
	function E(a) {
		a && b.movie.pause(b.ReasonForPause.CPCMNDPAUSE);
		svvi("cpCmndPause", a, ["cpCmndPause", "rdcmndPause"])
	}
	function F() {
		return b.movie.paused
	}
	function G(a) {
		svvi("cpCmndInfo", a, ["cpCmndInfo", "rdcmndInfo"])
	}
	function H() {
		return vh._cpCmndInfo
	}
	function da() {
		return vh._cpInfoAuthor
	}
	function ea() {
		return vh._cpInfoDescription
	}
	function fa() {
		return vh._cpQuizInfoLastSlidePointScored
	}
	function ga(a) {
		svvi("cpQuizInfoLastSlidePointScored", a, ["cpQuizInfoLastSlidePointScored"])
	}
	function ha() {
		return vh._cpQuizInfoPointsPerQuestionSlide
	}
	function ia(a) {
		svvi("cpQuizInfoPointsPerQuestionSlide", a, ["cpQuizInfoPointsPerQuestionSlide"])
	}
	function ja() {
		return vh._cpQuizInfoNegativePointsOnCurrentQuestionSlide
	}
	function ka(a) {
		svvi("cpQuizInfoNegativePointsOnCurrentQuestionSlide", a, ["cpQuizInfoNegativePointsOnCurrentQuestionSlide"])
	}
	function la() {
		return !!vh._cpQuizInfoQuestionPartialScoreOn
	}
	function ma(a) {
		svvi("cpQuizInfoQuestionPartialScoreOn", a, ["cpQuizInfoQuestionPartialScoreOn"])
	}
	function na() {
		return vh._cpInfoCurrentSlideLabel
	}
	function oa(a) {
		svvi("cpInfoCurrentSlideLabel", a, ["cpInfoCurrentSlideLabel"])
	}
	function pa() {
		return vh._cpQuizInfoQuizPassPercent
	}
	function qa(a) {
		svvi("cpQuizInfoQuizPassPercent", a, ["cpQuizInfoQuizPassPercent"])
	}
	function ra() {
		return vh._cpQuizInfoTotalProjectPoints
	}
	function sa(a) {
		svvi("cpQuizInfoTotalProjectPoints",
			a, ["cpQuizInfoTotalProjectPoints"])
	}
	function ta() {
		return vh._cpInfoPrevSlide
	}
	function ua(a) {
		svvi("cpInfoPrevSlide", a, ["cpInfoPrevSlide"])
	}
	function va() {
		if (!b.movie) return 0;
		if (b.movie.playbackController) {
			var a = b.movie.playbackController.GetQuizController();
			if (a) return a.GetTotalCorrectQuestions()
		}
		return 0
	}
	function wa(a) {
		svvi("cpQuizInfoTotalCorrectAnswers", a, ["cpQuizInfoTotalCorrectAnswers"])
	}
	function xa() {
		if (!b.movie) return 0;
		if (b.movie.playbackController) {
			var a = b.movie.playbackController.GetQuizController();
			if (a) return a.GetTotalPretestCorrectQuestions()
		}
		return 0
	}
	function ya(a) {
		svvi("cpQuizInfoPreTestTotalQuestions", a, ["cpQuizInfoPreTestTotalQuestions"])
	}
	function za() {
		return vh._cpQuizInfoPreTestTotalQuestions
	}
	function Aa(a) {
		svvi("cpQuizInfoPreTestTotalCorrectAnswers", a, ["cpQuizInfoPreTestTotalCorrectAnswers"])
	}
	function Ba() {
		if (!b.movie) return 0;
		if (b.movie.playbackController) {
			var a = b.movie.playbackController.GetQuizController();
			if (a) {
				var c = a.GetScore(),
					a = a.GetMaxScore();
				if (0 != a) return Math.round(100 *
					c / a)
			}
		}
		return 0
	}
	function Ca(a) {
		svvi("cpInfoPercentage", a, ["cpInfoPercentage"])
	}
	function Da() {
		return vh._cpQuizInfoTotalQuestionsPerProject
	}
	function Ea(a) {
		svvi("cpQuizInfoTotalQuestionsPerProject", a, ["cpQuizInfoTotalQuestionsPerProject"])
	}
	function Fa() {
		return vh._cpQuizInfoQuizPassPoints
	}
	function Ga(a) {
		svvi("cpQuizInfoQuizPassPoints", a, ["cpQuizInfoQuizPassPoints"])
	}
	function Ha() {
		return vh._cpQuizInfoQuestionSlideType
	}
	function Ia(a) {
		svvi("cpQuizInfoQuestionSlideType", a, ["cpQuizInfoQuestionSlideType"])
	}
	function Ja() {
		return !b.movie || !b.movie.playbackController ? 0 : b.movie.playbackController.GetTotalUnansweredQuestions()
	}
	function Ka(a) {
		svvi("cpQuizInfoTotalUnansweredQuestions", a, ["cpQuizInfoTotalUnansweredQuestions"])
	}
	function La() {
		return vh._cpInfoLastVisitedSlide
	}
	function Ma(a) {
		svvi("cpInfoLastVisitedSlide", a, ["cpInfoLastVisitedSlide"])
	}
	function Na() {
		return vh._cpQuizInfoMaxAttemptsOnCurrentQuestion
	}
	function Oa(a) {
		svvi("cpQuizInfoMaxAttemptsOnCurrentQuestion", a, ["cpQuizInfoMaxAttemptsOnCurrentQuestion"])
	}
	function Pa() {
		return vh._cpQuizInfoQuestionSlideTiming
	}
	function Qa(a) {
		svvi("cpQuizInfoQuestionSlideTiming", a, ["cpQuizInfoQuestionSlideTiming"])
	}
	function Ra() {
		return vh._cpInfoCompany
	}
	function Sa() {
		return vh._cpQuizInfoAnswerChoice
	}
	function Ta(a) {
		svvi("cpQuizInfoAnswerChoice", a, ["cpQuizInfoAnswerChoice"])
	}
	function Ua() {
		return vh._cpQuizInfoNoQuestionsPerQuiz
	}
	function Va(a) {
		svvi("cpQuizInfoNoQuestionsPerQuiz", a, ["cpQuizInfoNoQuestionsPerQuiz"])
	}
	function Wa() {
		if (!b.movie) return 0;
		if (b.movie.playbackController) {
			var a =
				b.movie.playbackController.GetQuizController();
			if (a) return a.GetScore()
		}
		return 0
	}
	function Xa(a) {
		svvi("cpQuizInfoPointsscored", a, ["cpQuizInfoPointsscored"])
	}
	function Ya() {
		return vh._cpInfoCopyright
	}
	function Za() {
		return vh._cpInfoWebsite
	}
	function $a() {
		return vh._cpInfoProjectName
	}
	function ab() {
		return vh._cpInfoEmail
	}
	function bb() {
		return !1
	}
	function cb() {
		return vh._cpInfoHasPlaybar
	}
	function db() {
		return vh._cpQuizInfoAttempts
	}
	function eb(a) {
		svvi("cpQuizInfoAttempts", a, ["cpQuizInfoAttempts"])
	}
	function fb() {
		return b.D.project_main.to
	}
	function gb() {
		return vh._cpQuizInfoTotalQuizPoints
	}
	function hb(a) {
		svvi("cpQuizInfoTotalQuizPoints", a, ["cpQuizInfoTotalQuizPoints"])
	}
	function l(a) {
		var b = "" + a;
		0 <= a && 10 > a && (b = "0" + b);
		return b
	}
	function I() {
		var a = new Date;
		vh._cpInfoEpochMS != a.getTime() && svvi("cpInfoEpochMS", a.getTime(), ["cpInfoEpochMS"]);
		vh._cpInfoElapsedTimeMS != cpInfoEpochMS - b.movie.startTime && svvi("cpInfoElapsedTimeMS", cpInfoEpochMS - b.movie.startTime, ["cpInfoElapsedTimeMS"]);
		vh._cpInfoCurrentMinutes != a.getMinutes() && svvi("cpInfoCurrentMinutes",
			a.getMinutes(), ["cpInfoCurrentMinutes"]);
		vh._cpInfoCurrentHour != a.getHours() && svvi("cpInfoCurrentHour", a.getHours(), ["cpInfoCurrentHour"]);
		var c = a.getHours() + ":" + l(a.getMinutes()) + ":" + l(a.getSeconds());
		vh._cpInfoCurrentTime != c && svvi("cpInfoCurrentTime", c, ["cpInfoCurrentTime"]);
		vh._cpInfoCurrentDay != a.getDay() + 1 && svvi("cpInfoCurrentDay", a.getDay() + 1, ["cpInfoCurrentDay"]);
		vh._cpInfoCurrentYear != a.getFullYear() && svvi("cpInfoCurrentYear", a.getFullYear(), ["cpInfoCurrentYear"]);
		vh._cpInfoCurrentMonth !=
			a.getMonth() + 1 && svvi("cpInfoCurrentMonth", l(a.getMonth() + 1), ["cpInfoCurrentMonth"]);
		vh._cpInfoCurrentDate != a.getDate() && svvi("cpInfoCurrentDate", l(a.getDate()), ["cpInfoCurrentDate"]);
		c = a.getMonth() + 1 + "/" + a.getDate() + "/" + a.getFullYear();
		vh._cpInfoCurrentDateString != c && svvi("cpInfoCurrentDateString", c, ["cpInfoCurrentDateString"]);
		c = a.getDate() + "/" + (a.getMonth() + 1) + "/" + a.getFullYear();
		vh._cpInfoCurrentDateStringDDMMYYYY != c && svvi("cpInfoCurrentDateStringDDMMYYYY", c, ["cpInfoCurrentDateStringDDMMYYYY"]);
		a = a.toLocaleDateString();
		vh._cpInfoCurrentLocaleDateString != a && svvi("cpInfoCurrentLocaleDateString", a, ["cpInfoCurrentLocaleDateString"])
	}
	function B() {
		0 == g && (I(), g = setInterval(I, 1E3 / cpInfoFPS))
	}
	function ib() {
		return vh._cpInfoCurrentDateString
	}
	function jb() {
		return vh._cpInfoCurrentDateStringDDMMYYYY
	}
	function kb() {
		return vh._cpInfoCurrentLocaleDateString
	}
	function lb() {
		return vh._cpInfoCurrentDate
	}
	function mb() {
		return vh._cpInfoCurrentMonth
	}
	function nb() {
		return vh._cpInfoCurrentYear
	}
	function ob() {
		return vh._cpInfoCurrentDay
	}
	function pb() {
		return vh._cpInfoCurrentTime
	}
	function qb() {
		return vh._cpInfoCurrentHour
	}
	function rb() {
		return vh._cpInfoCurrentMinutes
	}
	function sb() {
		return vh._cpInfoEpochMS
	}
	function tb() {
		return vh._cpInfoElapsedTimeMS
	}
	function ub() {
		var a = b.movie.stage.currentSlide,
			c = "";
		if (a && (c = a.st) && "Question Slide" == c) a = a.qnq, void 0 != a && (a = b.movie.questionObjs[a].questionData) && (a.ikc && !0 == a.ikc) && (c = "Normal Slide");
		return c
	}
	function vb() {
		if (!b.movie) return !1;
		if (b.movie.playbackController) {
			var a = b.movie.playbackController.GetQuizController();
			if (a) return a.GetIsPassed()
		}
		return !1
	}
	function J() {
		return 0
	}
	function wb() {
		return vh._cpInfoPrevFrame
	}
	function m() {
		return vh._cpInfoCurrentFrame
	}
	function xb(a) {
		var c = a.smoothAdvance,
			a = c ? a.currFrame : a,
			d = m();
		svvi("cpInfoPrevFrame", d, []);
		svvi("cpInfoCurrentFrame", a, ["cpInfoCurrentFrame", "rdinfoCurrentFrame"]);
		c || b.movie.resetMovieElapsedTime()
	}
	function K() {
		return cpInfoCurrentSlide - 1
	}
	function yb() {
		return vh._cpInfoCurrentSlide
	}
	function zb(a) {
		svvi("cpInfoCurrentSlide", a, ["cpInfoCurrentSlide"])
	}
	function L() {
		return b.movie.stage.slides.length
	}
	function M() {
		return b.movie.fps * b.movie.speed
	}
	function Ab() {
		return vh._cpQuizScopeSlide
	}
	function Bb(a) {
		svvi("cpQuizScopeSlide", a, ["cpQuizScopeSlide"])
	}
	function Cb() {
		return vh._cpInQuizScope
	}
	function Db(a) {
		if (cpInfoHasPlaybar && b.movie && b.movie.playbackController) {
			var c = b.movie.playbackController.GetQuizController();
			c && c.GetHidePlaybarInQuiz() && (cpCmndShowPlaybar = a && !c.GetIsInReviewMode() ? 0 : 1)
		}
		svvi("cpInQuizScope", a, ["cpInQuizScope"])
	}
	function Eb() {
		if (!b.movie || !b.movie.playbackController) return 0;
		var a = b.movie.playbackController.GetQuizController();
		return a ? a.GetPretestScore() : 0
	}
	function Fb() {
		return !b.movie || !b.movie.playbackController ? !1 : (lQuizController = b.movie.playbackController.GetQuizController()) ? !! lQuizController.GetIsInReviewMode() : !1
	}
	function Gb() {
		if (!b.movie || !b.movie.playbackController) return 0;
		var a = b.movie.playbackController.GetQuizController();
		return a ? a.GetMaxPretestScore() : 0
	}
	function Hb() {
		if (!b.movie || !b.movie.playbackController) return 0;
		var a = b.movie.playbackController.GetQuizController();
		if (a) {
			var c = a.GetMaxPretestScore(),
				a = a.GetPretestScore();
			return void 0 == c || 0 >= c || void 0 == a || 0 >= a ? 0 : Math.round(100 * a / c)
		}
		return 0
	}
	function Ib(a) {
		if (b.movie && b.movie.playbackController) {
			var c = b.movie.playbackController.GetQuizController();
			c && c.GotoQuizScopeSlide(a)
		}
	}
	function Jb() {
		return vh._cpInfoCourseID
	}
	function Kb() {
		return vh._cpInfoCourseName
	}
	function N() {
		return vh._cpInfoGeoLocation ? vh._cpInfoGeoLocation : ""
	}
	function O(a) {
		svvi("cpInfoGeoLocation", a, ["cpInfoGeoLocation"]);
		b.movie && (!b.movie.virgin &&
			b.D.geoProps.geoAct && 0 < b.D.geoProps.geoAct.length) && b.movie.executeAction(b.D.geoProps.geoAct)
	}
	function Lb() {}
	function Mb() {
		return null
	}
	window.vh = {};
	window.svvi = function (a, c, d) {
		var e = null;
		if ("" != a) {
			e = null;
			if (a && "" != a) {
				var f = "_" + a,
					e = vh[f];
				e !== c && (vh[f] = c)
			}
			b.em && e != c && (a = {
				captivateVersion: h(),
				varName: a,
				oldVal: e,
				newVal: c,
				notify: d
			}, b.em.fireEvent("CPVariableValueChangedEvent", a))
		} else b.em && (a = {
			captivateVersion: h(),
			varName: "",
			newVal: c,
			notify: d
		}, b.em.fireEvent("CPVariableValueChangedEvent", a))
	};
	var g =
		0;
	window.asg = function (a, c, d) {
		try {
			null == c && (c = Lb), null == d && (d = Mb), Object.defineProperty ? Object.defineProperty(window, a, {
				get: d,
				set: c
			}) : window.__defineGetter__ && (d && window.__defineGetter__(a, d), c && window.__defineSetter__(a, c))
		} catch (e) {
			b.m_isPreview && b.alert("Please correct the variable name. This might be a javascript variable. : '" + a + "'")
		}
	};
	b.VarInfo = function (a, b, d) {
		this.name = a;
		this.len = b;
		this.systemDefined = d
	};
	b.VariablesManager = function () {
		b.vm = this;
		this.varInfos = [];
		this.geoVarIndexes = [];
		!Object.defineProperty && !window.__defineGetter__ ? alert("VARIABLES SETTER GETTER WILL NOT WORK") : (asg("_registerForUpdateTimeBasedSystemVariables", B, null), asg("cpCmndVolume", R, Q), asg("cpCmndMute", n, o), asg("rdcmndMute", n, o), asg("cpCmndCC", U, r), asg("rdcmndCC", null, r), asg("cpCmndNext", k, null), asg("rdcmndNext", k, null), asg("cpCmndNextSlide", k, null), asg("rdcmndNextSlide", k, null), asg("cpCmndPrevious", j, i), asg("rdcmndPrevious", j, i), asg("cpCmndNextOnReview", W, null), asg("cpCmndPreviousSlide", j, i), asg("rdcmndPreviousSlide", j, i), asg("cpCmndPreviousOnReview",
				V, null), asg("cpCmndPlaybarMoved", q, p), asg("rdcmndPlaybarMoved", q, p), asg("cpCmndShowPlaybar", T, S), asg("cpCmndFastForward", X, null), asg("cpCmndRewindAndPlay", t, s), asg("rdcmndRewindAndPlay", t, s), asg("cpCmndRewindAndStop", v, u), asg("rdcmndRewindAndStop", v, u), asg("cpCmndGotoFrame", y, null), asg("rdcmndGotoFrame", y, null), asg("cpCmndGotoFrameAndResume", z, null), asg("rdcmndGotoFrameAndResume", z, null), asg("cpCmndGotoSlide", A, null), asg("rdcmndGotoSlide", A, null), asg("cpCmndGotoSlideAndResume", ba, null), asg("cpCmndGotoSlideByUIDAndResume",
				ca, null), asg("cpCmndResume", x, w), asg("rdcmndResume", x, w), asg("cpCmndPause", E, F), asg("rdcmndPause", E, F), asg("cpCmndExit", D, C), asg("rdcmndExit", D, C), asg("cpLockTOC", Y, Z), asg("cpCmndInfo", G, H), asg("rdcmndInfo", G, H), asg("cpCmndTOCVisible", $, aa), asg("cpInfoSlidesInProject", null, J), asg("rdinfoSlidesInProject", null, J), asg("rdinfoCurrentSlideInProject", null, function () {
				return 0
			}), asg("cpInfoFPS", null, M), asg("rdinfoFPS", null, M), asg("cpInfoAuthor", null, da), asg("cpInfoCompany", null, Ra), asg("cpInfoEmail", null,
				ab), asg("cpInfoWebsite", null, Za), asg("cpInfoCopyright", null, Ya), asg("cpInfoProjectName", null, $a), asg("cpInfoDescription", null, ea), asg("cpInfoCurrentFrame", null, m), asg("rdinfoCurrentFrame", null, m), asg("_cpInfoCurrentFrame", xb, null), asg("_rdinfoCurrentFrame", m, null), asg("cpInfoPrevFrame", null, wb), asg("cpInfoFrameCount", null, fb), asg("cpInfoPrevSlide", null, ta), asg("_cpInfoPrevSlide", ua, null), asg("cpInfoLastVisitedSlide", null, La), asg("_cpInfoLastVisitedSlide", Ma, null), asg("cpInfoCurrentSlide", null, yb),
			asg("rdinfoCurrentSlide", null, K), asg("cpInfoCurrentSlideIndex", null, K), asg("_cpInfoCurrentSlide", zb, null), asg("cpInfoCurrentSlideLabel", null, na), asg("_cpInfoCurrentSlideLabel", oa, null), asg("cpInfoSlideCount", null, L), asg("rdinfoSlideCount", null, L), asg("cpInfoIsStandalone", null, bb), asg("cpInfoHasPlaybar", null, cb), asg("cpInfoCurrentSlideType", null, ub), asg("cpInfoElapsedTimeMS", null, tb), asg("cpInfoEpochMS", null, sb), asg("cpInfoCurrentMinutes", null, rb), asg("cpInfoCurrentHour", null, qb), asg("cpInfoCurrentTime",
				null, pb), asg("cpInfoCurrentDay", null, ob), asg("cpInfoCurrentYear", null, nb), asg("cpInfoCurrentMonth", null, mb), asg("cpInfoCurrentDate", null, lb), asg("cpInfoCurrentDateString", null, ib), asg("cpInfoCurrentDateStringDDMMYYYY", null, jb), asg("cpInfoCurrentLocaleDateString", null, kb), asg("cpCmndGotoQuizScopeSlide", Ib, null), asg("cpQuizInfoLastSlidePointScored", ga, fa), asg("cpQuizInfoQuestionSlideType", Ia, Ha), asg("cpQuizInfoAnswerChoice", Ta, Sa), asg("cpQuizInfoMaxAttemptsOnCurrentQuestion", Oa, Na), asg("cpQuizInfoPointsPerQuestionSlide",
				ia, ha), asg("cpQuizInfoNegativePointsOnCurrentQuestionSlide", ka, ja), asg("cpQuizInfoQuestionSlideTiming", Qa, Pa), asg("cpQuizInfoQuizPassPoints", Ga, Fa), asg("cpQuizInfoQuizPassPercent", qa, pa), asg("cpQuizInfoTotalProjectPoints", sa, ra), asg("cpQuizInfoTotalUnansweredQuestions", Ka, Ja), asg("cpQuizInfoNoQuestionsPerQuiz", Va, Ua), asg("cpQuizInfoPointsscored", Xa, Wa), asg("cpQuizInfoPretestPointsscored", null, Eb), asg("cpQuizInfoPretestScorePercentage", null, Hb), asg("cpQuizInfoTotalCorrectAnswers", wa, va), asg("cpInfoPercentage",
				Ca, Ba), asg("cpQuizInfoTotalQuizPoints", hb, gb), asg("cpQuizInfoAttempts", eb, db), asg("cpQuizInfoTotalQuestionsPerProject", Ea, Da), asg("cpQuizInfoQuestionPartialScoreOn", ma, la), asg("cpQuizScopeSlide", null, Ab), b._cpQuizScopeSlide = Bb, asg("cpInQuizScope", null, Cb), b._cpInQuizScope = Db, asg("cpQuizInfoPassFail", null, vb), asg("cpInfoCourseID", null, Jb), asg("cpInfoCourseName", null, Kb), asg("cpQuizInfoPreTestTotalCorrectAnswers", Aa, xa), asg("cpInReviewMode", null, Fb), asg("cpQuizInfoPreTestTotalQuestions", ya, za), asg("cpQuizInfoPreTestMaxScore",
				null, Gb), asg("CaptivateVersion", null, h), asg("cpInfoMobileOS", null, P), b.geo && b.startWatchingGeoLocationChange ? (asg("cpInfoGeoLocation", O, N), b.startWatchingGeoLocationChange()) : b.m_isPreview && !b.m_isEdgeInspectPreview && asg("cpInfoGeoLocation", O, N));
		b.initVariables();
		b.vm.createVariable("cpQuizScopeSlide", -1, !0, 100, !1);
		b.initVariables = null
	};
	window.DefineProperty = function (a) {
		eval("(function(){function get" + a + "(){return vh._" + a + ";}function set" + a + '(val){svvi("' + a + '", val, ["' + a + '"]);} asg("' + a + '",set' +
			a + ",get" + a + ");})();")
	};
	b.VariablesManager.prototype = {
		hasOwnProperty: function (a) {
			try {
				return void 0 == eval("vh._" + a) ? !1 : !0
			} catch (b) {
				return !1
			}
		},
		getVariableValue: function (a) {
			var b = null;
			a && "" != a && (b = eval("vh._" + a));
			return b
		},
		createVariable: function (a, c, d, e, f) {
			void 0 == d && (d = !0);
			return a && "" != a && !1 == this.hasOwnProperty(a) ? (this.addVarInfo(a, e, d, f), vh["_" + a] = c, b.em && !0 != d && (DefineProperty(a), a = {
				captivateVersion: h(),
				varName: a,
				varVal: c
			}, b.em.fireEvent("CPVariableCreatedEvent", a)), !0) : !1
		},
		setVariableValue: function (a,
			b, d) {
			void 0 == d && (d = !0);
			var e = !0;
			d ? !0 == this.createVariable(a, b, !0, 1E4, !1) && (e = !1) : !1 == this.hasOwnProperty(a) && (e = !1);
			e && (vh["_" + a] = b)
		},
		addVarInfo: function (a, c, d, e) {
			a = this.varInfos.push(new b.VarInfo(a, c, d));
			e && this.geoVarIndexes.push(a - 1)
		},
		getVariableLength: function (a) {
			for (var b = 0, b = 0; b < this.varInfos.length; ++b)
				if (a == this.varInfos[b].name) return this.varInfos[b].len;
			return 1E3
		},
		getGeoVarsInfo: function () {
			var a = [],
				b;
			for (b in this.geoVarIndexes) a.push(this.varInfos[this.geoVarIndexes[b]]);
			return a
		}
	}
})(window.cp);
(function (b) {
	b.ImageObject = function (a, c, d) {
		this.im = a;
		this.nativeImage = new Image;
		this.nativeImage.cpImage = this;
		this.src = c;
		this.complete = !1;
		this.loaders = {};
		this.preloaded = !1;
		this.isProjectImage = d;
		this.includedInViews = {};
		this.monitorFunc = function (a) {
			a.target.cpImage.complete = !0;
			b.responsive && b.movie.stage && b.movie.stage.lastFrame < cpInfoCurrentFrame && b.movie.im && !b.movie.im.imagesNotLoaded() && b.adjustResponsiveItems();
			b.movie.im.verbose && b.log("loaded " + a.target.src)
		}
	};
	b.ImageObject.prototype = {
		isIncludedInView: function () {
			var a = !b.responsive;
			if (b.responsive) {
				if (this.isProjectImage) return !0;
				var c = b.ResponsiveProjWidth;
				b.DESKTOP != b.device ? (window.innerWidth > window.innerHeight ? (a = window.innerWidth, c = window.innerHeight) : (a = window.innerHeight, c = window.innerWidth), a = b.getCorrectBreakpoint(a), c = b.getCorrectBreakpoint(c), a = 1 == this.includedInViews[a] || 1 == this.includedInViews[c]) : b.m_isPreview ? a = !0 : (a = b.getCorrectBreakpoint(window.innerWidth), a = 1 == this.includedInViews[a])
			}
			return a
		},
		load: function (a, c) {
			if (!(void 0 == this.src || "" == this.src ||
				null == this.src))
				if (!b.responsive || this.isIncludedInView())
					if (this.im.verbose && (b.log("load (monitor = " + c + ") " + this.src), this.complete && b.log("completed"), this.nativeImage.onload && b.log("onload is set")), !this.complete && !this.nativeImage.onload && (this.monitor = !0 == c ? !0 : !1, this.nativeImage.onload = this.monitorFunc), !this.complete && this.nativeImage.onload && !0 == c && (this.monitor = !0), this.loaders[a] = 1, this.im.verbose && b.log("loaded by = " + a), !0 != c && (this.preloaded = !0), "" == this.nativeImage.src) return this.im.verbose &&
						b.log("loading " + this.src), this.nativeImage.src = this.src, !0
		},
		unload: function (a) {
			this.im.verbose && b.log("unload " + this.src + " preloaded = " + this.preloaded);
			this.loaders[a] && delete this.loaders[a];
			var a = 0,
				c;
			for (c in this.loaders)++a;
			return 0 == a ? (this.im.verbose && b.log("unloading " + this.src), this.nativeImage = new Image, this.nativeImage.cpImage = this, this.monitor = this.preloaded = this.complete = !1, !0) : !1
		}
	};
	b.ImageManager = function () {
		b.movie.im = this;
		this.images = {};
		this.preloadingProjectImages = !1;
		this.m_projectImages = {};
		this.verbose = !1;
		this.reset();
		for (var a = b.model.projectImages, c = 0; c < a.length; ++c) this.m_projectImages[a[c]] = new b.ImageObject(this, a[c], !0);
		a = b.model.images;
		for (c = 0; c < a.length; ++c) {
			var d = a[c],
				e = b.responsive ? d.ip : d,
				f = new b.ImageObject(this, e, !1);
			b.responsive && (f.includedInViews = d.ipiv);
			this.images[e] = f
		}
	};
	b.ImageManager.prototype = {
		imagesNotLoaded: function () {
			var a = 0;
			if (this.preloadingProjectImages)
				for (var c in this.m_projectImages) this.m_projectImages[c].monitor && !this.m_projectImages[c].complete &&
			++a;
			else
				for (c in this.images) this.images[c].monitor && !this.images[c].complete && ++a;
			this.verbose && 0 < a && b.log(a + " imaged pending");
			return 0 < a
		},
		loadImages: function (a, c, d, e) {
			if (0 != c.length) {
				this.preloadingProjectImages = e ? !0 : !1;
				for (var f = 0; f < c.length; ++f) {
					var g = c[f],
						h = e ? this.m_projectImages[g] : this.images[g];
					h || (h = new b.ImageObject(this, g, e), e ? this.m_projectImages[g] = h : this.images[g] = h);
					h.load(a, d)
				}
			}
		},
		unloadImage: function (a, b) {
			var d = this.images[b];
			d && d.unload(a)
		},
		reset: function () {
			if (this.preloadingProjectImages)
				for (var a in this.m_projectImages) this.m_projectImages[a].monitor = !1;
			else
				for (a in this.images) this.images[a].monitor = !1
		}
	}
})(window.cp);
(function (a) {
	a.redrawVideo = function (b) {
		a.DESKTOP == a.device && a.SAFARI === a.browser && 7 <= a.browserVersion && setTimeout(function () {
			b.controls = !1
		}, 40)
	};
	a.MediaSeeker = function () {
		a.movie.ms = this;
		this.retryQueue = {};
		this.enabled = this.verbose = !1;
		if (a.browser == a.MSIE && a.browserVersion >= a.MSIE_MIN_SUPPORTED_VERSION || a.browser == a.FIREFOX && a.browserVersion >= a.FF_MIN_SUPPORTED_VERSION || a.OS == a.WINDOWS && a.browser == a.CHROME && a.browserVersion >= a.CHROME_MIN_SUPPORTED_VERSION || a.device == a.IDEVICE && a.IOSMajor >= a.IOS4 ||
			a.device == a.ANDROID) this.enabled = !0;
		this.verbose && a.log("MediaSeeker enabled = " + this.enabled)
	};
	a.MediaSeeker.prototype = {
		resetFlags: function (b) {
			delete b.retryCount;
			delete b.lastKnownBuffered;
			delete b.thulped;
			delete b.resting;
			delete b.rested;
			delete b.failure1;
			delete b.failure2
		},
		addToQueue: function (b) {
			this.enabled && (this.retryQueue[b.id] = b, b.retryCount = 1, b.lastKnownBuffered = 0, b.thulped = !1, b.resting = !1, b.rested = !1, b.failure1 = 0, b.failure2 = 0)
		},
		removeFromQueue: function (b) {
			this.enabled && (this.resetFlags(b),
				delete this.retryQueue[b.id])
		},
		inQueue: function (b) {
			return !this.enabled ? !1 : this.retryQueue[b.id] ? !0 : !1
		},
		hasSeeked: function (b) {
			if (!this.enabled) return !0;
			++b.retryCount;
			var c = b.nativeAudio;
			c || (c = b.nativeVideo);
			if (!c) return this.verbose && a.log("MediaSeeker: no native media to seek " + b.id), !0;
			if (void 0 == b.seekToTime) return this.verbose && a.log("MediaSeeker: seekToTime is undefined " + b.id), !0;
			if (b.thulped) return 3 > b.retryCount || (this.verbose && a.log("retrying thulped media " + b.id + " seekToTime = " + b.seekToTime),
				b.thulped = !1, b.retryCount = 0, c.src = b.src, c.load()), !1;
			if (b.resting) return 3 <= b.retryCount && (this.verbose && a.log("retrying rested media " + b.id + " seekToTime = " + b.seekToTime), b.resting = !1, b.rested = !0, b.retryCount = 0), !1;
			0 > b.seekToTime && (b.seekToTime = 0);
			if (isNaN(c.duration) || !isFinite(c.duration)) {
				this.verbose && a.log("MediaSeeker: duration is NAN " + b.id);
				if (0 == b.seekToTime) return !0;
				if (b.rested) {
					b.rested = !1;
					++b.failure1;
					if (2 <= b.failure1) return a.exceptionalLogs && console.log(b.id + " gotStuck while seeking (NAN). gave up seeking"), !0;
					b.thulped = !0;
					try {
						c.src = "_cp_n_m_"
					} catch (e) {}
					try {
						c.load()
					} catch (d) {}
				} else b.resting = !0;
				return !1
			}
			b.seekToTime > c.duration && (b.seekToTime = c.duration);
			var f = !0;
			try {
				c.currentTime = b.seekToTime;
				var g = Math.abs(c.currentTime - b.seekToTime);
				if (0.05 <= g) {
					var f = !1,
						h = c.buffered;
					h.end(h.length - 1);
					if (b.lastKnownBuffered == h)
						if (b.rested) {
							b.rested = !1;
							++b.failure2;
							if (2 <= b.failure2) return a.exceptionalLogs && console.log(b.id + " gotStuck while seeking (CONST BUFF). gave up seeking"), !0;
							b.thulped = !0;
							try {
								c.src = "_cp_n_m_"
							} catch (i) {}
							try {
								c.load()
							} catch (j) {}
						} else b.resting = !0;
						else b.lastKnownBuffered = h
				}
			} catch (k) {
				g = Math.abs(c.currentTime - b.seekToTime), f = 0.05 <= g ? !1 : !0
			}
			this.verbose && f && a.log("MediaSeeker: " + b.id + " currentTime = " + c.currentTime);
			return f
		},
		pendingItems: function () {
			if (!this.enabled) return 0;
			var b = 0,
				c;
			for (c in this.retryQueue) {
				var e = this.retryQueue[c];
				this.hasSeeked(e) ? (delete e.seekToTime, this.removeFromQueue(e), e.revoke && (delete e.revoke, this.verbose && a.log("MediaSeeker revoking play of " + e.id), e.play())) : ++b
			}
			this.verbose && (b && this.numPending != b) && a.log("MediaSeeker: " +
				b + " items pending seek");
			this.numPending = b;
			a.verbose && 0 < b && a.log(b + " pendingForSeek");
			return b
		},
		reset: function () {
			for (var b in this.retryQueue) {
				var a = this.retryQueue[b];
				delete a.seekToTime;
				delete a.revoke;
				this.resetFlags(a)
			}
			this.retryQueue = {}
		}
	};
	a.NativeAudio = function () {
		var a = function () {
			this.duration = this.currentTime = 0;
			this.ended = this.paused = !0;
			this.defaultPlaybackRate = 0;
			this.playbackRate = 1;
			this.fastSeek = this.seekable = this.seeking = this.played = !1;
			this.src = "";
			this.autoplay = this.preload = this.crossorigin = !1;
			this.mediagroup = "";
			this.controls = this.muted = this.loop = !1
		};
		a.prototype = {
			load: function () {},
			play: function () {},
			pause: function () {},
			addEventListener: function () {},
			removeEventListener: function () {}
		};
		if ("undefined" === typeof Audio || !Audio) {
			var c = document.createElement("audio");
			return void 0 == c.load || void 0 == c.play || void 0 == c.pause || void 0 == c.addEventListener ? new a : c
		}
		return new Audio
	};
	a.AudioObject = function (b, c, e, d, f, g, h) {
		this.am = b;
		this.id = c;
		this.nativeAudio = null;
		this.src = a.getCorrectMediaPath(e);
		this.from =
			d;
		this.to = f;
		g && (this.duration = g / 1E3);
		this.hidden = this.ended = !1;
		this.paused = !0;
		this.cploop = this.loop = !1;
		this.gotStuck = 0;
		this.rp = h
	};
	a.AudioObject.prototype = {
		load: function () {
			this.nativeAudio && this.nativeAudio.load()
		},
		setSrc: function (b) {
			this.src = a.getCorrectMediaPath(b);
			this.nativeAudio && (this.nativeAudio.cpSrc = a.getCorrectMediaPath(b), this.nativeAudio.src = a.getCorrectMediaPath(b), this.load())
		},
		play: function () {
			if (!(!0 == this.ended || this.hidden))
				if (this.paused)
					if (this.paused && this.am.webAudio && this.am.playWebAudio(this)) this.paused = !1;
					else if (a.lastMediaPlayReqTime && 50 > (new Date).getTime() - a.lastMediaPlayReqTime.getTime())
				if (a.movie.paused) {
					this.am.verbose && a.log("crowded request postponed " + this.id);
					var b = this;
					setTimeout(function () {
						b.play()
					}, 50)
				} else this.am.verbose && a.log("crowded request denied " + this.id);
				else this.paused = !1, this.am.verbose && a.log("AdObjPlay " + this.id + " " + this.src), this.nativeAudio || this.am.allocAudioChannel(this, a.IDEVICE != a.device && a.device != a.ANDROID), this.nativeAudio && (this.isSeekPending() ? this.finishPendingSeek() :
					(a.device == a.IDEVICE && a.multiAudioTrack && (a.lastMediaPlayReqTime = new Date), this.nativeAudio.play()));
				else if (a.device == a.IDEVICE && !a.multiAudioTrack && this.nativeAudio)
				if (this.lastTime == this.nativeAudio.currentTime) {
					if (++this.gotStuck, 30 <= this.gotStuck) {
						a.exceptionalLogs && a.log(this.id + " " + this.src + " gotStuck @" + this.nativeAudio.currentTime);
						this.gotStuck = 0;
						try {
							this.nativeAudio.src = "_cp_n_m_"
						} catch (c) {}
						this.nativeAudio.src = this.src;
						this.nativeAudio.load();
						this.nativeAudio.play()
					}
				} else this.lastTime =
					this.nativeAudio.currentTime, this.gotStuck = 0
		},
		resetAndPlay: function () {
			this.am.verbose && a.log("AudioObject " + this.id + " resetAndPlay()");
			this.ended = !1;
			this.setCurrentTime(0);
			this.play()
		},
		show: function () {
			this.am.verbose && a.log("AudioObject " + this.id + " show()");
			this.hidden = !1;
			this.shownAt = cpInfoCurrentFrame;
			this.resetAndPlay()
		},
		hide: function () {
			this.am.verbose && a.log("AudioObject " + this.id + " hide()");
			this.hidden = !0;
			delete this.shownAt;
			this.pause()
		},
		pause: function () {
			if (!this.paused && this.am.webAudio && this.am.pauseWebAudio(this.src)) this.paused = !0, this.am.verbose && a.log("webAudio:pause " + this.id + " " + this.src);
			else if (this.isSeekPending() && (this.am.verbose && this.revoke && a.log("AdObjPause deleting revoke " + this.id), delete this.revoke), !this.paused) this.paused = !0, this.am.verbose && a.log("AdObjPause " + this.id + " " + this.src), this.nativeAudio && (this.nativeAudio.pause(), this.nativeAudio.pausedAt = (new Date).getTime())
		},
		setLoop: function (b, c) {
			this.loop = b;
			this.loopFrames = c;
			a.IDEVICE == a.device || a.device == a.ANDROID ? this.cploop = b : this.nativeAudio && (b ? this.nativeAudio.loop = !0 : delete this.nativeAudio.loop)
		},
		setCurrentTime: function (b) {
			if (!(-1 == this.from && -1 == this.to))
				if (this.am.verbose && a.log("AudioObject " + this.id + " setCurrentTime(" + b + ")"), this.nativeAudio)
					if (this.am.verbose && a.log("this.nativeAudio.currentTime = " + this.nativeAudio.currentTime), 0.1 > Math.abs(this.nativeAudio.currentTime - b)) this.am.verbose && a.log("not seeking delta < 0.1"), a.movie.ms.inQueue(this) || delete this.seekToTime;
					else {
						delete this.seekToTime;
						this.paused || (this.am.verbose && a.log("setting revoke to true"),
							this.revoke = !0, this.pause());
						var c = !0;
						try {
							this.nativeAudio.currentTime = b;
							var e = Math.abs(this.nativeAudio.currentTime - b);
							0.05 <= e && (c = !1)
						} catch (d) {
							e = Math.abs(this.nativeAudio.currentTime - b), c = 0.05 <= e ? !1 : !0
						}
						this.am.verbose && a.log("seekSuccess = " + c);
						a.movie.ms.enabled ? c ? this.revoke && (this.am.verbose && a.log("revoking play"), delete this.revoke, this.play()) : (this.am.verbose && a.log("pause movie and add to seekQueue"), this.seekToTime = b, a.movie.ms.addToQueue(this)) : this.revoke && (this.am.verbose && a.log("revoking play"),
							delete this.revoke, this.play())
					} else this.seekToTime = b, this.am.verbose && a.log("no native audio. Kept in pending...")
		},
		isSeekPending: function () {
			return -1 == this.from && -1 == this.to ? !1 : void 0 != this.seekToTime
		},
		finishPendingSeek: function () {
			this.nativeAudio && this.isSeekPending() && (this.am.verbose && a.log("AudioObject " + this.id + " finishPendingSeek"), this.setCurrentTime(this.seekToTime))
		},
		seekTo: function (b) {
			if (-1 == this.from && -1 == this.to) return !0;
			this.am.verbose && a.log("AudioObject " + this.id + " seekTo(" + b + ")");
			if (this.loop && this.loopFrames) {
				if (this.from <= b) return this.setCurrentTime((b - this.from) % this.loopFrames / cpInfoFPS), this.ended = !1, !0
			} else {
				if (this.from <= b && this.to >= b) return this.setCurrentTime((b - this.from) / cpInfoFPS), this.ended = !1, !0;
				this.to >= b && (this.setCurrentTime(0), this.ended = !1)
			}
			"bga" == this.id && !this.loop && (this.ended = !0);
			return !1
		}
	};
	a.ExtAudioObject = function (b, c, e, d, f) {
		this.am = b;
		this.id = c;
		this.nativeAudio = null;
		this.src = a.getCorrectMediaPath(e);
		this.from = d;
		this.to = f;
		this.hidden = this.ended = !1;
		this.paused = !0;
		this.cploop = this.loop = !1;
		this.gotStuck = 0
	};
	a.ExtAudioObject.prototype = {
		load: function () {
			this.nativeAudio && this.nativeAudio.load()
		},
		play: function () {},
		pause: function () {
			this.paused || (this.paused = !0, this.nativeAudio && (this.nativeAudio.pause(), this.nativeAudio.pausedAt = (new Date).getTime()))
		},
		isSeekPending: function () {
			return !1
		},
		finishPendingSeek: function () {},
		seekTo: function () {
			return !0
		},
		reset: function () {}
	};
	a.MediaView = function (b) {
		this.a = b;
		a.MediaView.PROGRESS_WIDTH || (a.MediaView.PROGRESS_WIDTH =
			300, a.MediaView.STATUS1_WIDTH = 100, a.MediaView.STATUS2_WIDTH = 100, a.MediaView.STATUS3_WIDTH = 100, a.MediaView.STATUS4_WIDTH = 50, a.MediaView.STATUS_WIDTH = a.MediaView.STATUS1_WIDTH + a.MediaView.STATUS2_WIDTH + a.MediaView.STATUS3_WIDTH + a.MediaView.STATUS4_WIDTH, a.MediaView.LEFT_OFFSET = 260, a.MediaView.TOP_OFFSET = 5, a.MediaView.HEIGHT = 15, a.MediaView.GAP = 5, a.MediaView.NUM_MEDIA_VIEWS = 0);
		this.view = a.newElem("div");
		this.status = a.newElem("div");
		this.status2 = a.newElem("div");
		this.status3 = a.newElem("div");
		this.status4 =
			a.newElem("div");
		this.progressBar = a.newElem("div");
		this.srcNameBar = a.newElem("div");
		this.downloaded = a.newElem("div");
		this.playHead = a.newElem("div");
		document.body.appendChild(this.view);
		this.view.appendChild(this.status);
		this.view.appendChild(this.status2);
		this.view.appendChild(this.status3);
		this.view.appendChild(this.status4);
		this.view.appendChild(this.progressBar);
		this.progressBar.appendChild(this.downloaded);
		this.progressBar.appendChild(this.playHead);
		this.progressBar.appendChild(this.srcNameBar);
		this.view.style.cssText = "z-index:100;display:block; position:fixed; left:" + a.MediaView.LEFT_OFFSET + "px; top:" + (a.MediaView.TOP_OFFSET + a.MediaView.NUM_MEDIA_VIEWS * (a.MediaView.HEIGHT + a.MediaView.GAP)) + "px; width:" + (a.MediaView.STATUS_WIDTH + a.MediaView.PROGRESS_WIDTH) + "px; height:" + a.MediaView.HEIGHT + "px; background-color:#555555;opacity:0.5";
		this.status.style.cssText = "z-index:100;display:block; position:absolute; left:0px; top:0px; width:" + a.MediaView.STATUS1_WIDTH + "px; height:" + a.MediaView.HEIGHT +
			"px;background-color:#0000ff";
		this.status2.style.cssText = "z-index:100;display:block; position:absolute; left:" + a.MediaView.STATUS1_WIDTH + "px; top:0px; width:" + a.MediaView.STATUS2_WIDTH + "px; height:" + a.MediaView.HEIGHT + "px;background-color:#ffffff";
		this.status3.style.cssText = "z-index:100;display:block; position:absolute; left:" + (a.MediaView.STATUS1_WIDTH + a.MediaView.STATUS2_WIDTH) + "px; top:0px; width:" + a.MediaView.STATUS3_WIDTH + "px; height:" + a.MediaView.HEIGHT + "px;background-color:#ffffff";
		this.status4.style.cssText =
			"z-index:100;display:block; position:absolute; left:" + (a.MediaView.STATUS1_WIDTH + a.MediaView.STATUS2_WIDTH + a.MediaView.STATUS3_WIDTH) + "px; top:0px; width:" + a.MediaView.STATUS4_WIDTH + "px; height:" + a.MediaView.HEIGHT + "px;background-color:#ffffff";
		this.progressBar.style.cssText = "z-index:100;display:block; position:absolute; left:" + a.MediaView.STATUS_WIDTH + "px; top:0px; width:" + a.MediaView.PROGRESS_WIDTH + "px; height:" + a.MediaView.HEIGHT + "px;background-color:#888888";
		this.srcNameBar.style.cssText = "z-index:100;display:block; position:absolute; left:0px; top:0px; width:" +
			a.MediaView.PROGRESS_WIDTH + "px; height:" + a.MediaView.HEIGHT + "px;white-space: nowrap; overflow: hidden;";
		this.downloaded.style.cssText = "z-index:100;display:block; position:absolute; left:0px; top:0px; width:0px; height:" + a.MediaView.HEIGHT / 3 + "px;background-color:#10ff10;";
		this.playHead.style.cssText = "z-index:100;display:block; position:absolute; left:0px; top:0px; width:2px; height:" + a.MediaView.HEIGHT / 3 + "px;background-color:#101010";
		++a.MediaView.NUM_MEDIA_VIEWS
	};
	a.MediaView.prototype = {
		update: function () {
			var b =
				this.a.cpAudio;
			b || (b = this.a.cpVideo);
			var c = this.a.src.indexOf("/ar/"); - 1 == c && (c = this.a.src.indexOf("/vr/")); - 1 == c && (c = this.a.src.indexOf("_cp_n_m_")); - 1 == c && (c = 0);
			c = this.a.src.substr(c);
			b && (c += "|" + b.src + "|" + b.id);
			this.srcNameBar.innerHTML = "<font style='font-size:9px'>" + c + "</font>";
			c = this.a.paused ? "paused" : "playing";
			this.a.ended && (c += " end");
			this.status2.innerHTML = "<font color='#000000' style='font-size:8px'>" + c + "</font>";
			b ? (c = b.paused ? "paused" : "playing", b.ended && (c += " end"), b.hidden && (c += " hdn")) :
				c = "NULL";
			this.status3.innerHTML = "<font color='#000000' style='font-size:8px'>" + c + "</font>";
			switch (this.a.readyState) {
				case a.HAVE_NOTHING:
					c = "HaveNone";
					this.status4.style.backgroundColor = "#ff0000";
					break;
				case a.HAVE_METADATA:
					c = "HaveMeta";
					this.status4.style.backgroundColor = "#ffaa00";
					break;
				case a.HAVE_CURRENT_DATA:
					c = "HaveCurr";
					this.status4.style.backgroundColor = "#aacc00";
					break;
				case a.HAVE_FUTURE_DATA:
					c = "HaveMore";
					this.status4.style.backgroundColor = "#55ff00";
					break;
				case a.HAVE_ENOUGH_DATA:
					c = "HaveAll";
					this.status4.style.backgroundColor =
						"#00ff00";
					break;
				default:
					c = "???", this.status4.style.backgroundColor = "#555555"
			}
			this.status4.innerHTML = "<font color='#000000' style='font-size:8px'>" + c + "</font>";
			this.a.ended ? (this.status.style.backgroundColor = "#ffff00", this.status.innerHTML = "<font color='#000000' style='font-size:8px'>Ended</font>") : this.a && this.a.networkState == this.a.NETWORK_EMPTY ? (this.status.style.backgroundColor = "#000000", this.status.innerHTML = "<font color='#ffffff' style='font-size:8px'>Empty</font>") : this.a && this.a.networkState ==
				this.a.NETWORK_IDLE ? (this.status.style.backgroundColor = "#aaaaaa", this.status.innerHTML = "<font color='#000000' style='font-size:8px'>Idle</font>") : this.a && this.a.networkState == this.a.NETWORK_LOADING ? (this.status.style.backgroundColor = "#00ff00", this.status.innerHTML = "<font color='#000000' style='font-size:8px'>Loading</font>") : this.a && this.a.networkState == this.a.NETWORK_NO_SOURCE && (this.status.style.backgroundColor = "#ff0000", this.status.innerHTML = "<font color='#ffffff' style='font-size:8px'>NoSrc</font>");
			var e;
			this.a && !isNaN(this.a.duration) && isFinite(this.a.duration) ? e = this.a.duration : b && b.duration && (e = b.duration);
			e ? (b = this.a.buffered, b.length && (b = b.end(b.length - 1), this.downloaded.style.width = b / e * a.MediaView.PROGRESS_WIDTH + "px"), this.playHead.style.left = this.a.currentTime / e * a.MediaView.PROGRESS_WIDTH + "px") : (this.downloaded.style.width = "0px", this.playHead.style.left = "0px")
		}
	};
	a.AudioView = a.MediaView;
	a.VideoView = a.MediaView;
	a.AudioManager = function () {
		a.movie.am = this;
		this.volume = 1;
		this.viewAudio = this.verbose =
			this.loaded = this.muted = !1;
		if ("http" == window.location.protocol.substr(0, 4)) {
			var b = window.AudioContext || window.webkitAudioContext;
			b && (this.webAudio = new b, this.webAudioCache = {}, this.webAudioLoaded = this.webAudioReq = 0)
		}
		this.errorCallBackFn = function (b) {
			-1 == this.src.indexOf("_cp_n_m_") && (a.exceptionalLogs && (a.log("src = " + this.src + " error code = " + (this.error ? this.error.code : "NULL") + " n/w state = " + this.networkState), a.log(b)), this.waitCount = 0)
		};
		this.waitingFn = function (b) {
			var c;
			!isNaN(this.duration) && isFinite(this.duration) ?
				c = this.duration : this.cpAudio && this.cpAudio.duration && (c = this.cpAudio.duration);
			if (c) {
				var f = Math.abs(this.currentTime - c);
				a.movie.am.verbose && a.log(this.cpSrc + " wait came when delta = " + f + " duration = " + c);
				if (0.3 > f) {
					0.3 > c || (a.movie.am.verbose && a.log("simulating arrival of ended event"), a.movie.am.onEndedCallBackFn.call(this, b));
					return
				}
			}++this.waitCount;
			a.movie.am.verbose && (b = "wait " + this.waitCount + " " + this.cpSrc + " currTime = " + this.currentTime + " duration = " + c + " curFrame = " + cpInfoCurrentFrame, this.cpAudio &&
				(b += " id = " + this.cpAudio.id, b += " from " + this.cpAudio.from, b += " to " + this.cpAudio.to), a.log(b))
		};
		this.canPlayCallBackFn = function () {
			this.waitCount = 0;
			a.movie.am.verbose && a.log("cnPly " + this.cpSrc + " " + (this.cpAudio ? this.cpAudio.id : ""))
		};
		this.onEndedCallBackFn = function () {
			this.waitCount = 0;
			this.cploop ? (a.movie.am.verbose && a.log(this.cpSrc + " loop"), this.cpAudio && (this.cpAudio.pause(), this.cpAudio.seekTo(this.cpAudio.from), this.cpAudio.play())) : (a.movie.am.verbose && a.log(this.cpSrc + " ended"), this.endedAt =
				(new Date).getTime(), this.cpAudio && (this.cpAudio.ended = !0, this.cpAudio.pause(), this.cpAudio.onEndAutoPlayMovie && (delete this.cpAudio.onEndAutoPlayMovie, a.movie.play())))
		};
		this.onWebAudioEndedCallBackFn = function (b) {
			b && (a.movie.am.verbose && a.log(b.cpSrc + " ended"), b.ended = !0, b.pause(), b.onEndAutoPlayMovie && (delete b.onEndAutoPlayMovie, a.movie.play()))
		};
		this.PlayPauseCallBackFn = function () {
			this.paused && (this.pausedAt = (new Date).getTime());
			this.cpAudio && (this.cpAudio.paused = this.paused)
		};
		this.MAX_AUDIO_CHANNELS =
			a.multiAudioTrack ? 10 : 1;
		this.audioChannels = [];
		for (b = 0; b < this.MAX_AUDIO_CHANNELS; ++b) {
			var c = a.NativeAudio();
			c.cpSrc = "";
			c.cpAudio = null;
			c.ended = !1;
			c.addEventListener("ended", this.onEndedCallBackFn, !1);
			c.addEventListener("error", this.errorCallBackFn, !1);
			a.waitForAudio && (c.addEventListener("waiting", this.waitingFn, !1), c.addEventListener("canplay", this.canPlayCallBackFn, !1));
			c.addEventListener("play", this.PlayPauseCallBackFn, !1);
			c.addEventListener("pause", this.PlayPauseCallBackFn, !1);
			c.waitCount = 0;
			c.muted =
				this.muted;
			c.volume = this.volume;
			this.audioChannels[b] = c
		}
		this.verbose && (b = a.NativeAudio(), a.log("NetworkStates: NETWORK_EMPTY = " + b.NETWORK_EMPTY + " NETWORK_IDLE = " + b.NETWORK_IDLE + " NETWORK_LOADING = " + b.NETWORK_LOADING + " NETWORK_NO_SOURCE = " + b.NETWORK_NO_SOURCE), b = null)
	};
	a.AudioManager.prototype = {
		unlockWebAudio: function () {
			if (this.webAudio) {
				var b = this.webAudio.createBuffer(1, 1, 22050),
					c = this.webAudio.createBufferSource();
				c.buffer = b;
				c.connect(this.webAudio.destination);
				c.noteOn = c.noteOn || c.start;
				c.noteOn(0);
				var e = this;
				setTimeout(function () {
					if (c.playbackState === c.PLAYING_STATE || c.playbackState === c.FINISHED_STATE) e.webAudioUnlocked = !0, e.verbose && a.log("web audio unlocked")
				}, 100)
			}
		},
		loadWebAudio: function (b) {
			function c(d) {
				try {
					e.webAudio.decodeAudioData(d.buf, function (a) {
						var c = {};
						c.buffer = a;
						e.webAudioCache[b] = c
					}, function () {
						a.exceptionalLogs && a.log(b + " Error decoding. Attempting to sync stream");
						var e;
						var f = new Uint8Array(d.buf);
						f.indexOf = Array.prototype.indexOf;
						for (e = d.sync;;) {
							++d.retry;
							e = f.indexOf(255, e);
							if (-1 == e || f[e + 1] & 1) break;
							++e
						} - 1 != e ? (f = d.buf.slice(e), delete d.buf, d.buf = f, d.sync = e, e = !0) : e = !1;
						e && c(d)
					})
				} catch (f) {
					a.exceptionalLogs && a.log(b + " Error decoding2 " + f)
				}
			}
			var e = this,
				d = {
					sync: 0,
					retry: 0
				};
			if (this.webAudio && !this.webAudioCache[b]) {
				++this.webAudioReq;
				this.webAudioCache[b] = {};
				var f = new XMLHttpRequest;
				f.open("GET", b, !0);
				f.responseType = "arraybuffer";
				f.onload = function (f) {
					e.verbose && a.log("webAudio:loaded " + b);
					++e.webAudioLoaded;
					d.buf = f.target.response;
					c(d)
				};
				f.send()
			}
		},
		playWebAudio: function (b) {
			if (this.webAudio) {
				var c =
					b.src,
					e = this.webAudioCache[c];
				if (e && e.buffer) return e.source = this.webAudio.createBufferSource(), e.source.buffer = e.buffer, e.source.loop = !1, e.source.connect(this.webAudio.destination), e.source.noteOn = e.source.noteOn || e.source.start, e.source.noteOn(0), setTimeout(function () {
					a.movie.am.onWebAudioEndedCallBackFn(b)
				}, 1E3 * e.buffer.duration), this.verbose && a.log("webAudio:play " + c), !0
			}
			return !1
		},
		pauseWebAudio: function (b) {
			if (this.webAudio) {
				var c = this.webAudioCache[b];
				if (c) return c.source && (c.source.noteOff = c.source.noteOff ||
					c.source.stop, c.source.noteOff(0), delete c.source), this.verbose && a.log("webAudio:pause " + b), !0
			}
			return !1
		},
		pendingAudios: function () {
			var b = 0;
			this.webAudio && (b = this.webAudioReq - this.webAudioLoaded);
			for (var c = 0; c < this.MAX_AUDIO_CHANNELS; ++c) {
				var e = this.audioChannels[c];
				0 < e.waitCount && (!e.ended && !e.paused) && ++b
			}
			0 < b ? this.numPending != b && (this.numPending = b, a.verbose && a.log(b + " audios pending")) : (this.numPending && a.verbose && a.log("no audios pending"), this.numPending = 0);
			return b
		},
		resetAllWaitingAudios: function () {
			for (var b =
				0; b < this.MAX_AUDIO_CHANNELS; ++b) this.audioChannels[b].waitCount = 0
		},
		LRUAudioIndex: function () {
			for (var b = (new Date).getTime(), a = -1, e = cpInfoCurrentFrame, d = 0; d < this.MAX_AUDIO_CHANNELS; ++d) {
				var f = this.audioChannels[d];
				if (f.ended || f.paused) f.ended && f.endedAt ? b > f.endedAt && (b = f.endedAt, a = d) : f.paused && f.pausedAt ? b > f.pausedAt && (b = f.pausedAt, a = d) : -1 == a && e > f.cpTo && (a = d)
			}
			return a
		},
		allocAudioChannel: function (b) {
			this.verbose && a.log("allocAudioChannel " + b.id + " " + b.src);
			if (this.webAudio && this.webAudioCache[b.src]) this.verbose &&
				a.log("found in web-audio cache");
			else {
				if (a.multiAudioTrack) {
					for (var c = cpInfoCurrentFrame, e = 0; e < this.MAX_AUDIO_CHANNELS; ++e) {
						var d = this.audioChannels[e],
							f = d.cpAudio && d.cpAudio.from <= c && d.cpAudio.to >= c;
						if (d.cpSrc == b.src && (d.ended || d.paused) && !f) return null != d.cpAudio && (d.cpAudio.nativeAudio = null, d.cpAudio = null), b.nativeAudio = d, d.cpAudio = b, a.device == a.IDEVICE || a.device == a.ANDROID ? d.cploop = b.cploop : d.loop = b.loop, d.ended = !1, d.cpTo = b.to, b.isSeekPending() || b.seekTo(b.from), b.finishPendingSeek(), a.DESKTOP !=
							a.device && d.load(), this.verbose && a.log("allocAudioChannel found existing @ " + e), !0
					}
					for (e = 0; e < this.MAX_AUDIO_CHANNELS; ++e)
						if (d = this.audioChannels[e], "" == d.cpSrc) return d.waitCount = 0, d.cpSrc = b.src, d.src = b.src, b.nativeAudio = d, d.cpAudio = b, a.device == a.IDEVICE || a.device == a.ANDROID ? d.cploop = b.cploop : d.loop = b.loop, d.ended = !1, d.cpTo = b.to, b.finishPendingSeek(), d.load(), this.verbose && a.log("allocAudioChannel found empty slot @ " + e), !0;
					c = this.LRUAudioIndex();
					return -1 != c ? (d = this.audioChannels[c], null != d.cpAudio &&
						(d.cpAudio.nativeAudio = null, d.cpAudio = null), b.nativeAudio = d, d.cpAudio = b, a.device == a.IDEVICE || a.device == a.ANDROID ? d.cploop = b.cploop : d.loop = b.loop, d.ended = !1, d.cpTo = b.to, d.cpSrc != b.src ? (d.waitCount = 0, d.cpSrc = b.src, d.src = b.src) : b.isSeekPending() || b.seekTo(b.from), b.finishPendingSeek(), d.load(), this.verbose && a.log("allocAudioChannel re-used LRU slot @ " + c), !0) : !1
				}
				d = this.audioChannels[0];
				d.paused || (null != d.cpAudio ? d.cpAudio.pause() : d.pause());
				null != d.cpAudio && (d.cpAudio.nativeAudio = null);
				b.nativeAudio =
					d;
				d.cpAudio = b;
				d.cploop = b.cploop;
				d.ended = !1;
				if (d.cpSrc != b.src) {
					d.waitCount = 0;
					d.cpSrc = b.src;
					d.src = b.src;
					0 < d.currentTime && this.verbose && a.log("currentTime after changing src = " + d.currentTime + " going to wait...");
					if (a.IOSFlavor <= a.IOS5)
						for (; 0 < d.currentTime;) d.load();
					else
						for (c = 0; 0 < d.currentTime && 100 > ++c;) a.verbose && a.log("waiting for " + c + " time"), d.load();
					this.verbose && a.log("finished waiting")
				} else b.isSeekPending() || b.seekTo(b.from);
				b.finishPendingSeek();
				d.load()
			}
		},
		allocSingletonAudioChannelForPlayAudioAction: function (b) {
			this.verbose &&
				a.log("allocSingletonAudioChannelForPlayAudioAction " + b);
			var c = a.NativeAudio();
			c.addEventListener("ended", this.onEndedCallBackFn, !1);
			c.addEventListener("error", this.errorCallBackFn, !1);
			a.waitForAudio && (c.addEventListener("waiting", this.waitingFn, !1), c.addEventListener("canplay", this.canPlayCallBackFn, !1));
			c.addEventListener("play", this.PlayPauseCallBackFn, !1);
			c.addEventListener("pause", this.PlayPauseCallBackFn, !1);
			c.waitCount = 0;
			c.cpSrc = b;
			c.src = b;
			a.movie.am.singletonPlayAudio.nativeAudio = c;
			c.cpAudio =
				a.movie.am.singletonPlayAudio;
			c.muted = this.muted;
			c.volume = this.volume;
			c.ended = !1;
			c.load();
			this.audioViews && this.audioViews.push(new a.AudioView(c))
		},
		load: function () {
			var b = a.D.pbga;
			b && (this.bgAudio = new a.AudioObject(this, "bga", b.src, 1, b.to, b.du), b.l && this.bgAudio.setLoop(!0), this.bgAudio.stopAtProjectEnd = b.spe, this.bgAudio.lowerVolumeOnSlidesWithAudio = b.lv, this.bgAudio.lowerVolumePercentage = b.vp);
			b = (a.D.project_main.slideAudios || "").split(",");
			this.slideAudios = {};
			for (var c = 0; c < b.length; ++c)
				if ("" !=
					b[c]) {
					var e = a.D[b[c]],
						d = new a.AudioObject(this, b[c], e.src, e.from, e.to, e.du);
					e.l && d.setLoop(!0, e.lf);
					this.slideAudios[b[c]] = d
				}
			b = {};
			this.objectAudios = {};
			this.eventAudios = {};
			c = (a.D.project_main.slides || "").split(",");
			for (e = 0; e < c.length; ++e) {
				for (var f = a.D[c[e]], g = (f.oa || "").split(","), h = {}, i = !1, d = 0; d < g.length; ++d)
					if ("" != g[d]) {
						var j = a.D[g[d]],
							i = j.rp ? b[g[d]] : void 0;
						i || (i = new a.AudioObject(this, g[d], j.src, j.from, j.to, j.du, j.rp), i.mouseAudio = j.msa, j.rp && (b[g[d]] = i));
						h[g[d]] = i;
						i = !0
					}
				i && (this.objectAudios[c[e]] =
					h);
				f = (f.ea || "").split(",");
				g = {};
				i = !1;
				for (d = 0; d < f.length; ++d) "" != f[d] && (h = a.D[f[d]], i = h.rp ? b[f[d]] : void 0, i || (i = new a.AudioObject(this, f[d], h.src, -1, -1, h.du, h.rp), h.rp && (b[f[d]] = i)), g[f[d]] = i, i = !0);
				i && (this.eventAudios[c[e]] = g)
			}
			a.movie.playKeyTap && (this.keyTap = new a.AudioObject(this, "pkt", "ar/KeyClick.mp3", -1, -1, void 0));
			this.singletonPlayAudio = new a.AudioObject(this, "spa", "", -1, -1, void 0);
			this.extAudios = {};
			if (a.extAudioCallbacks)
				for (b = 0; b < a.extAudioCallbacks.length; ++b) a.extAudioCallbacks[b](this);
			this.loaded = !0
		},
		deviceSpecificFlush: function () {
			if ((a.IDEVICE == a.device || a.device == a.ANDROID) && a.multiAudioTrack) {
				for (var b = 0, c = 0; c < this.MAX_AUDIO_CHANNELS; ++c) {
					var e = this.audioChannels[c];
					if (-1 != e.src.indexOf("_cp_n_m_") && (++b, b >= this.MAX_AUDIO_CHANNELS / 2)) return
				}
				for (c = 0; c < this.MAX_AUDIO_CHANNELS; ++c)
					if (e = this.audioChannels[c], e.ended || e.paused)
						if (null != e.cpAudio && (e.cpAudio.nativeAudio = null, e.cpAudio = null), e.cpSrc = "", e.waitCount = 0, delete e.cploop, e.ended = !1, delete e.cpTo, -1 == e.src.indexOf("_cp_n_m_")) {
							try {
								e.src =
									"_cp_n_m_"
							} catch (d) {}
							try {
								e.load()
							} catch (f) {}
						}
			}
		},
		deviceSpecificInit: function () {
			if (a.IDEVICE == a.device || a.device == a.ANDROID)
				for (var b = 0; b < this.MAX_AUDIO_CHANNELS; ++b) {
					var c = this.audioChannels[b];
					if (!c.cpSrc) try {
						c.src = "_cp_n_m_"
					} catch (e) {}
					try {
						c.load()
					} catch (d) {}
				}
		},
		playKeyTap: function () {
			this.verbose && a.log("playKeyTap");
			if (!this.playWebAudio(this.keyTap)) {
				if (a.device == a.IDEVICE || a.device == a.ANDROID)
					if (!a.multiAudioTrack && (this.audioPlaying || a.movie.stage.VideoPlaying)) {
						this.verbose && a.log("audioPlaying " +
							this.audioPlaying + " videoPlaying " + this.videoPlaying);
						return
					}!this.muted && 1 == a.movie.speed && (this.eventAudioPlaying = this.keyTap.id, this.keyTap.resetAndPlay())
			}
		},
		seekTo: function (b, c) {
			if (!this.loaded) return -1;
			var e = a.movie.stage.getSlideIndexForFrame(b);
			if (-1 == e) return -1;
			this.ssc = 0;
			this.changeCurrentSlide(e, b, !1);
			if (this.currentSlide) {
				var d = this.objectAudios[this.currentSlide];
				if (d)
					for (var f in d) {
						var g = d[f];
						g && (g.seekTo(b) || g.pause())
					}
			}
			this.currentSlideAudio && (d = this.slideAudios[this.currentSlideAudio]) &&
				(d.seekTo(b) || d.pause());
			this.bgAudio && (this.bgAudio.paused || this.bgAudio.ended) && this.bgAudio.seekTo(b);
			this.singletonPlayAudio && c && this.singletonPlayAudio.pause();
			return e
		},
		changeCurrentSlide: function (b, c, e) {
			this.deviceSpecificFlush();
			b = a.movie.stage.getSlideNameForIndex(b);
			if (!("" == b || this.currentSlide == b)) {
				this.verbose && a.log("am changing slide from " + this.currentSlide + " to " + b + " seek = " + e);
				this.interactiveItemFound = !1;
				this.ssp = this.ssc = 0;
				if (this.currentSlide) {
					var d = this.objectAudios[this.currentSlide];
					if (d)
						for (var f in d) {
							var g = d[f];
							g.mouseAudio ? setTimeout(function (b) {
								return function () {
									b.pause()
								}
							}(g), 500) : g.pause()
						}
					if (d = this.eventAudios[this.currentSlide])
						for (var h in d) g = d[h], 5 >= g.id.length || "ClkAd" != g.id.substring(g.id.length - 5) ? g.pause() : setTimeout(function (b) {
							return function () {
								b.pause()
							}
						}(g), 500);
					this.singletonPlayAudio.pause();
					this.currentSlideAudio && ((h = this.slideAudios[this.currentSlideAudio], h.from > c || h.to < c) ? (h.pause(), h.nativeAudio && (h.nativeAudio.cpAudio = null, h.nativeAudio = null), h.ended &&
						(h.ended = !1), delete this.currentSlideAudio) : e && cpInfoPrevFrame != c - 1 && h.seekTo(c));
					if (h = this.extAudios[this.currentSlide])
						for (f in h) h[f].reset()
				}
				this.currentSlide = b;
				this.currentSlideAudio || (this.currentSlideAudio = a.D[this.currentSlide].audioName, (h = this.slideAudios[this.currentSlideAudio]) && h.seekTo(c));
				if (e && this.currentSlide && (d = this.objectAudios[this.currentSlide]))
					for (f in d) g = d[f], g.rp ? g.ended && g.seekTo(g.from) : g.seekTo(g.from);
				this.stopBGAudio = (c = a.D[this.currentSlide]) && c.sba ? !0 : !1
			}
		},
		preload: function (b) {
			if (this.webAudio) {
				var c =
					this.eventAudios[b];
				if (c)
					for (var e in c) {
						var d = c[e];
						d && this.loadWebAudio(d.src)
					}
				this.keyTap && a.movie.playKeyTap && this.loadWebAudio(this.keyTap.src);
				var c = this.objectAudios[b],
					f;
				for (f in c)(d = c[f]) && d.mouseAudio && this.loadWebAudio(d.src)
			}
			if (!(a.device == a.IDEVICE || a.device == a.ANDROID || a.device == a.KINDLE) && this.loaded && 1 == a.movie.speed) {
				this.verbose && a.log("audio manager preload " + b);
				if (c = a.D[b])
					if ((c = this.slideAudios[c.audioName]) && !c.nativeAudio && !this.allocAudioChannel(c, !1)) return;
				c = this.objectAudios[b];
				for (f in c)
					if (d = c[f], !d || !d.rp || !d.nativeAudio)
						if (d && (!d.mouseAudio || !this.webAudio) && !this.allocAudioChannel(d, !1)) return;
				if (!this.webAudio) {
					if (c = this.eventAudios[b])
						for (e in c)
							if ((d = c[e]) && (!d.rp || !d.nativeAudio) && !this.allocAudioChannel(d, !1)) return;
					if (this.keyTap && a.movie.playKeyTap && !this.allocAudioChannel(this.keyTap, !1)) return
				}
				b = this.extAudios[b];
				for (f in b)
					if ((e = b[f]) && !this.allocAudioChannel(e, !1)) break
			}
		},
		play: function (b, c) {
			this.pace = null;
			if (this.loaded && 1 == a.movie.speed) {
				if ((a.device == a.IDEVICE ||
					a.device == a.ANDROID) && !a.multiAudioTrack) {
					var e = this.audioChannels[0];
					if (!e.paused && !e.ended && e.cpAudio && e.cpAudio.id == this.eventAudioPlaying || a.movie.stage.VideoPlaying) return
				}
				var e = !1,
					d = null,
					f = null;
				if (!c) {
					if (this.currentSlide) {
						var g = this.objectAudios[this.currentSlide];
						if (g)
							for (var h in g) {
								var i = g[h];
								i && !i.ended && (i.from <= b && i.to >= b || i.shownAt && i.shownAt <= b && i.shownAt + i.to - i.from >= b ? ((a.device == a.IDEVICE || a.device == a.ANDROID) && !a.multiAudioTrack ? null == d && (d = i) : (null == d && (d = i), i.play()), e = !0) : i.mouseAudio ?
									this.webAudio && i.pause() : i.pause())
							}
					}
					if (this.currentSlideAudio && (h = this.slideAudios[this.currentSlideAudio]) && !h.ended) h.from <= b && h.to >= b ? (a.device == a.IDEVICE || a.device == a.ANDROID) && !a.multiAudioTrack ? (null == d && (f = d = h), 1 != this.ssc && 1 != this.ssp && (e = !0)) : 1 != this.ssc && 1 != this.ssp ? (h.play(), null == d && (d = h), f = h, e = !0) : h.pause() : h.pause()
				}
				this.bgAudio && ((e ? this.bgAudio.lowerVolumeOnSlidesWithAudio && this.bgAudio.nativeAudio && (this.bgAudio.nativeAudio.volume = this.volume * (this.bgAudio.lowerVolumePercentage /
					100)) : this.bgAudio.nativeAudio && (this.bgAudio.nativeAudio.volume = this.volume), (a.device == a.IDEVICE || a.device == a.ANDROID) && !a.multiAudioTrack) ? null == d && (d = this.bgAudio) : this.stopBGAudio ? this.bgAudio.pause() : this.bgAudio.play());
				this.audioPlaying = null;
				if ((a.device == a.IDEVICE || a.device == a.ANDROID) && d && !a.multiAudioTrack) f == d ? 1 != this.ssc && 1 != this.ssp && (this.audioPlaying = d.id, d.play()) : this.bgAudio == d ? this.stopBGAudio ? d.pause() : (this.audioPlaying = d.id, d.play()) : (this.audioPlaying = d.id, d.play());
				a.IDEVICE ==
					a.device || a.device == a.ANDROID ? 1 == a.movie.speed && (d && d != this.bgAudio && !d.shownAt && !d.ended && !d.paused && !d.loop && d.nativeAudio && 0 < d.nativeAudio.currentTime ? (this.pace = d.from + d.nativeAudio.currentTime * cpInfoFPS, this.pace > d.to && (this.pace = d.to)) : this.pace = a.movie.vdm.pace()) : 1 == a.movie.speed && !this.interactiveItemFound && (f && !f.ended && !f.paused && !f.loop && f.nativeAudio && 0 < f.nativeAudio.currentTime ? (this.pace = f.from + f.nativeAudio.currentTime * cpInfoFPS, this.pace > f.to && (this.pace = a.movie.vdm.pace() ? null : f.to)) :
						this.pace = a.movie.vdm.pace())
			}
		},
		pause: function (b) {
			this.reasonForPause = b;
			if ((b == a.ReasonForPause.PLAYBAR_ACTION || b == a.ReasonForPause.CPCMNDPAUSE || b == a.ReasonForPause.MOVIE_REWIND_STOP || b == a.ReasonForPause.EVENT_VIDEO_PAUSE || b == a.ReasonForPause.ONLY_ONE_MEDIUM_CAN_PLAY || b == a.ReasonForPause.PPTX_PAUSE_FOR_ONCLICK_ANIMATION || b == a.ReasonForPause.CPCMNDGOTOFRAME || b == a.ReasonForPause.ACTION_CHOICE) && this.currentSlide) {
				var c = this.objectAudios[this.currentSlide];
				if (c && b != a.ReasonForPause.ACTION_CHOICE)
					for (var e in c) c[e].pause();
				if (c = this.extAudios[this.currentSlide])
					for (e in c) c[e].pause(b)
			}
			e = cpInfoCurrentFrame;
			this.currentSlideAudio && (c = this.slideAudios[this.currentSlideAudio]) && (c.from <= e && c.to >= e ? b == a.ReasonForPause.INTERACTIVE_ITEM ? 1 == this.ssp && c.pause() : (b == a.ReasonForPause.PLAYBAR_ACTION || b == a.ReasonForPause.CPCMNDPAUSE || b == a.ReasonForPause.MOVIE_REWIND_STOP || b == a.ReasonForPause.EVENT_VIDEO_PAUSE || b == a.ReasonForPause.ONLY_ONE_MEDIUM_CAN_PLAY || b == a.ReasonForPause.PPTX_PAUSE_FOR_ONCLICK_ANIMATION || b == a.ReasonForPause.CPCMNDGOTOFRAME ||
				b == a.ReasonForPause.WK_EXIT_FULL_SCREEN) && c.pause() : c.pause());
			this.bgAudio && (b == a.ReasonForPause.MOVIE_ENDED ? this.bgAudio.stopAtProjectEnd && this.bgAudio.pause() : (b == a.ReasonForPause.PLAYBAR_ACTION || b == a.ReasonForPause.MOVIE_REWIND_STOP || b == a.ReasonForPause.EVENT_VIDEO_PAUSE || b == a.ReasonForPause.ONLY_ONE_MEDIUM_CAN_PLAY) && this.bgAudio.pause())
		},
		pauseCurrentSlideAudioForInteractiveClick: function () {
			this.verbose && a.log("pause currentSlide Audio for SSC");
			var b = cpInfoCurrentFrame;
			if (this.currentSlideAudio) {
				var c =
					this.slideAudios[this.currentSlideAudio];
				c && (c.from <= b && c.to >= b) && (this.ssc = 1, c.pause())
			}
		},
		mute: function (b) {
			var b = !0 == b || 0 < b ? !0 : !1,
				a = document.getElementById("playbar");
			b && void 0 != a.mute && a.mute();
			!b && void 0 != a.unmute && a.unmute();
			for (a = 0; a < this.MAX_AUDIO_CHANNELS; ++a) this.audioChannels[a].muted = b;
			this.muted = b
		},
		setVolume: function (a) {
			0 > a && (a = 0);
			1 < a && (a = 1);
			this.volume = a;
			for (var c = 0; c < this.MAX_AUDIO_CHANNELS; ++c) this.audioChannels[c].volume = a
		},
		playPauseEventAudio: function (b, c) {
			if (c && (a.device == a.IDEVICE ||
				a.device == a.ANDROID) && !a.multiAudioTrack)
				if (this.audioPlaying || a.movie.stage.VideoPlaying) return;
			if ((!c || !(this.muted || 1 != a.movie.speed)) && this.currentSlide) {
				var e = this.eventAudios[this.currentSlide];
				if (e) {
					var d = e[b];
					d && (c ? (this.eventAudioPlaying = d.id, d.resetAndPlay(), 5 < d.id.length && "ClkAd" == d.id.substring(d.id.length - 5) && (d.duration ? setTimeout(function () {
						d.pause()
					}, 1E3 * (d.duration + 0.2)) : setTimeout(function () {
						d.pause()
					}, 500))) : d.pause())
				}
			}
		},
		showHideObjectAudio: function (a, c) {
			if (this.currentSlide) {
				var e =
					this.objectAudios[this.currentSlide];
				e && (e = e[a]) && (c ? e.hidden && e.show() : e.hidden || e.hide())
			}
		},
		doesAudioStartBetween: function (b, c) {
			if (this.currentSlide) {
				var e = this.objectAudios[this.currentSlide];
				if (e)
					for (var d in e) {
						var f = e[d];
						if (f && !f.ended && f.from >= b && f.from <= c) return this.verbose && a.log("objAudio " + f.id + " starts between " + b + " & " + c), !0
					}
			}
			return this.currentSlideAudio && (e = this.slideAudios[this.currentSlideAudio]) && !e.ended && e.from >= b && e.from <= c ? (this.verbose && a.log("slideAudio " + e.id + " starts between " +
				b + " & " + c), !0) : !1
		},
		updateAudioViews: function () {
			if (this.viewAudio && this.audioViews)
				for (var a in this.audioViews) this.audioViews[a].update()
		}
	};
	a.NativeVideo = function (b) {
		makeItDummyNativeVideo = function (a) {
			a.currentTime = 0;
			a.duration = 0;
			a.paused = !0;
			a.ended = !0;
			a.defaultPlaybackRate = 0;
			a.playbackRate = 1;
			a.played = !1;
			a.seeking = !1;
			a.seekable = !1;
			a.fastSeek = !1;
			a.src = "";
			a.crossorigin = !1;
			a.preload = !1;
			a.autoplay = !1;
			a.mediagroup = "";
			a.loop = !1;
			a.muted = !1;
			a.controls = !1;
			a.style = {};
			a.load = function () {};
			a.play = function () {};
			a.pause = function () {};
			a.addEventListener = function () {};
			a.removeEventListener = function () {}
		};
		var c = a.newElem("video");
		if ("undefined" === typeof Video || !Video)(void 0 == c.load || void 0 == c.play || void 0 == c.pause || void 0 == c.addEventListener) && makeItDummyNativeVideo(c);
		b && (c.id = b);
		return c
	};
	a.VideoManager = function () {
		a.movie.vdm = this;
		this.viewVideo = this.verbose = this.loaded = !1;
		this.errorCallBackFn = function (b) {
			-1 == this.src.indexOf("_cp_n_m_") && (a.exceptionalLogs && (a.log("src = " + this.src + " error code = " + (this.error ?
				this.error.code : "NULL") + " n/w state = " + this.networkState), a.log(b)), this.cpVideo && (b = a.D[this.cpVideo.id], b.psv && (b.pausedOnce = !0)), this.waitCount = 0)
		};
		this.waitingFn = function () {
			++this.waitCount;
			a.movie.vdm.verbose && a.log("wait " + this.waitCount + " " + this.cpSrc + " " + (this.cpVideo ? this.cpVideo.id : ""))
		};
		this.canPlayCallBackFn = function () {
			if (!1 == this.CPcanPlay) {
				var b = 100;
				a.device == a.ANDROID ? b = 2E3 : (this.CPcanPlay = !0, this.waitCount = 0);
				var c = this;
				setTimeout(function () {
					c.CPcanPlay = true;
					c.waitCount = 0;
					var b = cpInfoCurrentFrame;
					if (c.from <= b && b <= c.to) {
						c.style.position = "static";
						c.style.left = "0px";
						c.CPtoc && a.toc.rootObj.showVideo(true)
					}
				}, b)
			} else this.waitCount = 0;
			this.cpVideo && this.cpVideo.displayForDurationOfVideo && (a.D[this.cpVideo.parentDivName].to = this.duration * a.movie.fps);
			a.movie.vdm.verbose && a.log("cnPly " + this.cpSrc + " " + (this.cpVideo ? this.cpVideo.id : ""))
		};
		this.onEndedCallBackFn = function () {
			this.waitCount = 0;
			this.cploop ? (a.movie.vdm.verbose && a.log(this.cpSrc + " loop"), this.cpVideo && (this.cpVideo.pause(), this.cpVideo.seekTo(this.cpVideo.from),
				this.cpVideo.play())) : (a.movie.vdm.verbose && a.log(this.cpSrc + " ended"), this.cpVideo ? this.cpVideo.autoRewind ? (this.cpVideo.pause(), this.cpVideo.seekTo(this.cpVideo.from)) : (this.cpVideo.ended = !0, this.endedAt = (new Date).getTime(), this.cpVideo.pause()) : this.endedAt = (new Date).getTime(), a.movie.paused ? a.ReasonForPause.EVENT_VIDEO_PAUSE == a.movie.reasonForPause && (this.cpVideo.nativeVideo && (Document && Document.exitFullscreen ? Document.exitFullscreen() : Document && Document.webkitExitFullscreen ? Document.webkitExitFullscreen() :
				this.cpVideo.nativeVideo.exitFullscreen ? this.cpVideo.nativeVideo.exitFullscreen() : this.cpVideo.nativeVideo.msExitFullscreen ? this.cpVideo.nativeVideo.msExitFullscreen() : this.cpVideo.nativeVideo.mozCancelFullScreen ? this.cpVideo.nativeVideo.mozCancelFullScreen() : this.cpVideo.nativeVideo.webkitExitFullscreen && this.cpVideo.nativeVideo.webkitExitFullscreen()), a.movie.play()) : this.cpVideo && (this.cpVideo.actualParent.pausedOnce = !0), this.cpVideo && this.cpVideo.displayForDurationOfVideo && this.cpVideo.reset())
		};
		this.PlayPauseCallBackFn = function () {
			this.paused && (this.pausedAt = (new Date).getTime());
			this.cpVideo && (this.cpVideo.paused = this.paused)
		};
		if (a.device == a.IDEVICE || a.device == a.ANDROID) {
			this.slideVideoChannel = new a.NativeVideo;
			this.slideVideoChannel.cpSrc = "";
			this.slideVideoChannel.cpVideo = null;
			this.slideVideoChannel.ended = !1;
			this.slideVideoChannel.addEventListener("error", this.errorCallBackFn, !1);
			if (a.IOSMajor >= a.IOS5 || a.device == a.ANDROID) this.slideVideoChannel.addEventListener("waiting", this.waitingFn, !1), this.slideVideoChannel.addEventListener("canplay", this.canPlayCallBackFn, !1);
			this.slideVideoChannel.addEventListener("play", this.PlayPauseCallBackFn, !1);
			this.slideVideoChannel.addEventListener("pause", this.PlayPauseCallBackFn, !1);
			this.slideVideoChannel.waitCount = 0;
			var b = this.slideVideoChannel;
			this.slideVideoChannel.addEventListener("webkitbeginfullscreen", function () {
				"" != b.src && ("_cp_n_m_" != b.src && !b.paused) && (b.pauseMovieOnExitFullScreen = !0)
			}, !1);
			this.slideVideoChannel.addEventListener("webkitendfullscreen",
				function () {
					b.pauseMovieOnExitFullScreen && (b.pauseMovieOnExitFullScreen = !1, a.movie.pause(a.ReasonForPause.WK_EXIT_FULL_SCREEN))
				}, !1)
		} else this.slideVideoChannel0 = new a.NativeVideo, this.slideVideoChannel0.cpSrc = "", this.slideVideoChannel0.cpVideo = null, this.slideVideoChannel0.ended = !1, this.slideVideoChannel0.addEventListener("error", this.errorCallBackFn, !1), this.slideVideoChannel0.addEventListener("waiting", this.waitingFn, !1), this.slideVideoChannel0.addEventListener("canplay", this.canPlayCallBackFn, !1),
		this.slideVideoChannel0.addEventListener("play", this.PlayPauseCallBackFn, !1), this.slideVideoChannel0.addEventListener("pause", this.PlayPauseCallBackFn, !1), this.slideVideoChannel0.waitCount = 0, this.slideVideoChannel1 = new a.NativeVideo, this.slideVideoChannel1.cpSrc = "", this.slideVideoChannel1.cpVideo = null, this.slideVideoChannel1.ended = !1, this.slideVideoChannel1.addEventListener("error", this.errorCallBackFn, !1), this.slideVideoChannel1.addEventListener("waiting", this.waitingFn, !1), this.slideVideoChannel1.addEventListener("canplay",
			this.canPlayCallBackFn, !1), this.slideVideoChannel1.addEventListener("play", this.PlayPauseCallBackFn, !1), this.slideVideoChannel1.addEventListener("pause", this.PlayPauseCallBackFn, !1), this.slideVideoChannel1.waitCount = 0, this.slideVideoChannel = this.slideVideoChannel0;
		if (a.loadedModules.toc)
			if (a.device == a.IDEVICE || a.device == a.ANDROID) {
				this.tocVideoChannel = document.getElementById("tocVideo");
				this.tocVideoChannel || (this.tocVideoChannel = new a.NativeVideo("tocVideo"));
				this.tocVideoChannel.cpSrc = "";
				this.tocVideoChannel.cpVideo =
					null;
				this.tocVideoChannel.ended = !1;
				this.tocVideoChannel.addEventListener("error", this.errorCallBackFn, !1);
				if (a.IOSMajor >= a.IOS5 || a.device == a.ANDROID) this.tocVideoChannel.addEventListener("waiting", this.waitingFn, !1), this.tocVideoChannel.addEventListener("canplay", this.canPlayCallBackFn, !1);
				this.tocVideoChannel.addEventListener("play", this.PlayPauseCallBackFn, !1);
				this.tocVideoChannel.addEventListener("pause", this.PlayPauseCallBackFn, !1);
				this.tocVideoChannel.waitCount = 0
			} else this.tocVideoChannel0 = document.getElementById("tocVideo"),
		this.tocVideoChannel0 || (this.tocVideoChannel0 = new a.NativeVideo("tocVideo")), this.tocVideoChannel0.cpSrc = "", this.tocVideoChannel0.cpVideo = null, this.tocVideoChannel0.ended = !1, this.tocVideoChannel0.addEventListener("error", this.errorCallBackFn, !1), this.tocVideoChannel0.addEventListener("waiting", this.waitingFn, !1), this.tocVideoChannel0.addEventListener("canplay", this.canPlayCallBackFn, !1), this.tocVideoChannel0.addEventListener("play", this.PlayPauseCallBackFn, !1), this.tocVideoChannel0.addEventListener("pause",
			this.PlayPauseCallBackFn, !1), this.tocVideoChannel0.waitCount = 0, this.tocVideoChannel1 = new a.NativeVideo("tocVideo"), this.tocVideoChannel1.cpSrc = "", this.tocVideoChannel1.cpVideo = null, this.tocVideoChannel1.ended = !1, this.tocVideoChannel1.addEventListener("error", this.errorCallBackFn, !1), this.tocVideoChannel1.addEventListener("waiting", this.waitingFn, !1), this.tocVideoChannel1.addEventListener("canplay", this.canPlayCallBackFn, !1), this.tocVideoChannel1.addEventListener("play", this.PlayPauseCallBackFn, !1),
		this.tocVideoChannel1.addEventListener("pause", this.PlayPauseCallBackFn, !1), this.tocVideoChannel1.waitCount = 0, this.tocVideoChannel = this.tocVideoChannel0;
		this.MAX_VIDEO_CHANNELS = a.device == a.IDEVICE || a.device == a.ANDROID ? 2 : 10;
		this.videoChannels = [];
		for (var c = 0; c < this.MAX_VIDEO_CHANNELS; ++c) {
			var e = new a.NativeVideo;
			e.cpSrc = "";
			e.cpVideo = null;
			e.ended = !1;
			e.addEventListener("ended", this.onEndedCallBackFn, !1);
			e.addEventListener("error", this.errorCallBackFn, !1);
			if (a.device == a.DESKTOP || a.device == a.IDEVICE && a.IOSMajor >=
				a.IOS5 || a.device == a.ANDROID) e.addEventListener("waiting", this.waitingFn, !1), e.addEventListener("canplay", this.canPlayCallBackFn, !1);
			e.addEventListener("play", this.PlayPauseCallBackFn, !1);
			e.addEventListener("pause", this.PlayPauseCallBackFn, !1);
			e.waitCount = 0;
			this.videoChannels[c] = e
		}
	};
	a.VideoManager.prototype = {
		pendingVideos: function () {
			var b = 0,
				c = this.slideVideoChannel;
			0 < c.waitCount && (!c.ended && !c.paused) && ++b;
			(c = this.tocVideoChannel) && (0 < c.waitCount && !c.ended && !c.paused) && ++b;
			for (c = 0; c < this.MAX_VIDEO_CHANNELS; ++c) {
				var e =
					this.videoChannels[c];
				0 < e.waitCount && (!e.ended && !e.paused) && ++b
			}
			0 < b ? this.numPending != b && (this.numPending = b, a.verbose && a.log(b + " videos pending")) : (this.numPending && a.verbose && a.log("no videos pending"), this.numPending = 0);
			return b
		},
		resetAllWaitingVideos: function () {
			for (var a = 0; a < this.MAX_VIDEO_CHANNELS; ++a) this.videoChannels[a].waitCount = 0
		},
		mute: function (a) {
			var a = !0 == a || 0 < a ? !0 : !1,
				c;
			for (c in this.videoChannels) this.videoChannels[c].muted = a;
			this.slideVideoChannel.muted = a;
			this.tocVideoChannel && (this.tocVideoChannel.muted =
				a);
			this.muted = a
		},
		setVolume: function (a) {
			0 > a && (a = 0);
			1 < a && (a = 1);
			this.volume = a;
			for (var c in this.videoChannels) this.videoChannels[c].volume = a;
			this.slideVideoChannel.volume = a;
			this.tocVideoChannel && (this.tocVideoChannel.volume = a)
		},
		LRUVideoIndex: function () {
			for (var a = (new Date).getTime(), c = -1, e = cpInfoCurrentFrame, d = 0; d < this.MAX_VIDEO_CHANNELS; ++d) {
				var f = this.videoChannels[d];
				if (f.ended || f.paused) f.ended && f.endedAt ? a > f.endedAt && (a = f.endedAt, c = d) : f.paused && f.pausedAt ? a > f.pausedAt && (a = f.pausedAt, c = d) : -1 == c &&
					e > f.cpTo && (c = d)
			}
			return c
		},
		allocVideoChannel: function (b) {
			this.verbose && a.log("allocVideoChannel " + b.id + " " + b.src);
			if (a.IDEVICE == a.device || a.device == a.ANDROID) {
				this._LRUVideoIndex = void 0 == this._LRUVideoIndex ? 0 : 1 - this._LRUVideoIndex;
				this.verbose && a.log("picking video @ index " + this._LRUVideoIndex);
				var c = this.videoChannels[this._LRUVideoIndex];
				null != c.cpVideo && (c.cpVideo.nativeVideo = null);
				b.nativeVideo = c;
				c.cpVideo = b;
				c.cploop = b.cploop;
				c.ended = !1;
				c.waitCount = 0;
				c.cpSrc = b.src;
				c.src = b.src;
				c.load()
			} else {
				for (var e =
					cpInfoCurrentFrame, d = 0; d < this.MAX_VIDEO_CHANNELS; ++d) {
					var c = this.videoChannels[d],
						f = c.cpVideo && c.cpVideo.from <= e && c.cpVideo.to >= e;
					if (c.cpSrc == b.src && (c.ended || c.paused) && !f) return null != c.cpVideo && (c.cpVideo.nativeVideo = null, c.cpVideo = null), b.nativeVideo = c, c.cpVideo = b, c.loop = b.loop, c.ended = !1, c.cpTo = b.to, b.isSeekPending() || b.seekTo(b.from), b.finishPendingSeek(), this.verbose && a.log("allocVideoChannel found existing @ " + d), !0
				}
				for (d = 0; d < this.MAX_VIDEO_CHANNELS; ++d)
					if (c = this.videoChannels[d], "" == c.cpSrc) return c.waitCount =
						0, c.cpSrc = b.src, c.src = b.src, b.nativeVideo = c, c.cpVideo = b, c.loop = b.loop, c.ended = !1, c.cpTo = b.to, b.finishPendingSeek(), c.load(), this.verbose && a.log("allocVideoChannel found empty slot @ " + d), !0;
				e = this.LRUVideoIndex();
				return -1 != e ? (c = this.videoChannels[e], null != c.cpVideo && (c.cpVideo.nativeVideo = null, c.cpVideo = null), b.nativeVideo = c, c.cpVideo = b, c.loop = b.loop, c.ended = !1, c.cpTo = b.to, c.cpSrc != b.src ? (c.waitCount = 0, c.cpSrc = b.src, c.src = b.src) : b.isSeekPending() || b.seekTo(b.from), b.finishPendingSeek(), c.load(), this.verbose &&
					a.log("allocVideoChannel re-used LRU slot @ " + e), !0) : !1
			}
		},
		preallocVideoChannel: function (b) {
			b = a.getCorrectMediaPath(b);
			this.verbose && a.log("preallocVideoChannel " + b);
			for (var c = 0; c < this.MAX_VIDEO_CHANNELS; ++c) {
				var e = this.videoChannels[c];
				if (e.cpSrc == b) return this.verbose && a.log("preallocVideoChannel found existing @ " + c), !0
			}
			for (c = 0; c < this.MAX_VIDEO_CHANNELS; ++c)
				if (e = this.videoChannels[c], "" == e.cpSrc) return e.waitCount = 0, e.cpSrc = b, e.src = b, e.ended = !1, delete e.cpTo, e.load(), this.verbose && a.log("preallocVideoChannel found empty slot @ " +
					c), !0;
			return !1
		},
		deviceSpecificInit: function () {
			function b(a) {
				if (!a.cpSrc) try {
					a.src = "_cp_n_m_"
				} catch (b) {}
				try {
					a.load()
				} catch (c) {}
			}
			if (a.IDEVICE == a.device || a.device == a.ANDROID) {
				for (var c = 0; c < this.MAX_VIDEO_CHANNELS; ++c) b(this.videoChannels[c]);
				b(this.slideVideoChannel);
				this.tocVideoChannel && b(this.tocVideoChannel)
			}
		},
		load: function () {
			this.loaded = !0
		},
		preload2: function (b) {
			if (this.loaded && 1 == a.movie.speed && (this.verbose && a.log("video manager preload " + b), b = a.D[b], b.videos))
				for (var c = !0, e = !0, d = !0, f = 0; f < b.videos.length; ++f) {
					var g =
						a.D[b.videos[f]];
					g.type == a.kCPFullMotion || g.type == a.kCPOTVideoResource || g.type == a.kCPOTFLVItem ? c && (g = a.D[g.mdi], c = this.preallocVideoChannel(g.mp4)) : g.type == a.kCPOTVideo && (g = a.D[g.mdi], g.sit ? e && (g = a.getCorrectMediaPath(g.mp4), this.tocVideoChannel0.cpSrc == g || this.tocVideoChannel1.cpSrc == g ? this.verbose && a.log("vdm preload found existing " + g) : this.tocVideoChannel0.cpVideo ? this.tocVideoChannel1.cpVideo ? e = !1 : (this.tocVideoChannel1.cpSrc = g, this.tocVideoChannel1.src = g, this.tocVideoChannel1.load(), this.verbose &&
						a.log("vdm preloaded tocV1 with " + g)) : (this.tocVideoChannel0.cpSrc = g, this.tocVideoChannel0.src = g, this.tocVideoChannel0.load(), this.verbose && a.log("vdm preloaded tocV0 with " + g))) : d && (g = a.getCorrectMediaPath(g.mp4), this.slideVideoChannel0.cpSrc == g || this.slideVideoChannel1.cpSrc == g ? this.verbose && a.log("vdm preload found existing " + g) : this.slideVideoChannel0.cpVideo ? this.slideVideoChannel1.cpVideo ? d = !1 : (this.slideVideoChannel1.cpSrc = g, this.slideVideoChannel1.src = g, this.slideVideoChannel1.load(), this.verbose &&
						a.log("vdm preloaded SV1 with " + g)) : (this.slideVideoChannel0.cpSrc = g, this.slideVideoChannel0.src = g, this.slideVideoChannel0.load(), this.verbose && a.log("vdm preloaded SV0 with " + g))))
				}
		},
		preload: function (b) {
			if (!(a.device == a.IDEVICE || a.device == a.ANDROID)) return this.preload2(b)
		},
		seekTo: function (a, c) {
			var e, d, f;
			this.slideVideoChannel && (e = this.slideVideoChannel.cpVideo);
			this.tocVideoChannel && (d = this.tocVideoChannel.cpVideo);
			this.demoVideo && (f = this.demoVideo.cpVideo);
			c && (e && e.pause(), d && d.pause(), f && f.pause());
			e && e.seekTo(a);
			d && d.seekTo(a);
			f && f.seekTo(a)
		},
		pause: function (b) {
			this.reasonForPause = b;
			if (b == a.ReasonForPause.PLAYBAR_ACTION || b == a.ReasonForPause.CPCMNDPAUSE || b == a.ReasonForPause.MOVIE_REWIND_STOP || b == a.ReasonForPause.EVENT_VIDEO_PAUSE || b == a.ReasonForPause.PPTX_PAUSE_FOR_ONCLICK_ANIMATION || b == a.ReasonForPause.INTERACTIVE_ITEM || b == a.ReasonForPause.CPCMNDGOTOFRAME) this.slideVideoChannel && this.slideVideoChannel.cpVideo && this.slideVideoChannel.cpVideo.pause(), this.tocVideoChannel && this.tocVideoChannel.cpVideo &&
				this.tocVideoChannel.cpVideo.pause(), this.demoVideo && this.demoVideo.cpVideo && this.demoVideo.cpVideo.pause()
		},
		pace: function () {
			if ((a.device == a.IDEVICE || a.device == a.ANDROID) && !a.movie.stage.VideoPlaying) return null;
			var b = this.slideVideoChannel;
			if (b) {
				var c = b.cpVideo;
				if (c && !c.ended && !c.paused && !c.loop && 0 < b.currentTime) return c.pacedAt = (new Date).getTime(), c.from + (b.currentTime - c.seek_From) * cpInfoFPS
			}
			if (b = this.tocVideoChannel)
				if ((c = b.cpVideo) && !b.ended && !b.paused && !c.loop && 0 < b.currentTime) return c.from +
					(b.currentTime - c.seek_From) * cpInfoFPS;
			if (b = this.demoVideo)
				if ((c = b.cpVideo) && !b.ended && !b.paused && !c.loop && 0 < b.currentTime) return c.from + b.currentTime * cpInfoFPS;
			return null
		},
		updateVideoViews: function () {
			if (this.viewVideo && this.videoViews)
				for (var a in this.videoViews) this.videoViews[a].update()
		}
	}
})(window.cp);
(function (a) {
	a.enable = function (c) {
		if (c = a.D[c])
			if (c.enabled = 1, c.mdi) {
				if (c.type == a.kCPOTTextEntryBoxItem) {
					var b = a(c.mdi);
					if (b && (b = b.firstChild) && ("INPUT" == b.tagName || "TEXTAREA" == b.tagName)) b.disabled = !1
				}
				if (b = a.getDisplayObjByKey(c.mdi)) b.enabled = 1;
				c.type == a.kCPOTAutoShape && c.canvasPainterObject && c.canvasPainterObject.addMouseHandlers()
			}
	};
	a.animateItem = function (c, b, d, e, f) {
		d = a.getDisplayObjByKey(e);
		e = a.D[e];
		if (void 0 != e && (void 0 != e.qtp && (d = a.getDisplayObjByKey(e.sn)), void 0 != d))
			if ("Self" != f) {
				d.m_triggerTimelineIds =
					e["JSONTT_" + f];
				f = c.split("CPGroupTriggerEffectsDelimiterString");
				for (i = 0; i < f.length; i++) "" != f[i] && (c = f[i] + "_" + b, console.log(c), console.log(d), e = !0, PPTXLib.processTriggerForObject(d, c, e))
			} else {
				f = e.selfAnimationTrigger.split(";");
				d.m_triggerTimelineIds = f;
				f = c.split("CPGroupTriggerEffectsDelimiterString");
				for (i = 0; i < f.length; i++) c = f[i] + "_" + b, console.log(c), console.log(d), e = !1, PPTXLib.processTriggerForObject(d, c, e)
			}
	};
	a.disable = function (c) {
		if (c = a.D[c])
			if (c.enabled = 0, c.mdi) {
				if (c.type == a.kCPOTTextEntryBoxItem) {
					var b =
						a(c.mdi);
					if (b && (b = b.firstChild) && ("INPUT" == b.tagName || "TEXTAREA" == b.tagName)) b.disabled = !0
				}
				if (b = a.getDisplayObjByKey(c.mdi)) b.enabled = 0;
				c.type == a.kCPOTAutoShape && c.canvasPainterObject && c.canvasPainterObject.removeMouseHandlers()
			}
	};
	a.contains = function (a, b) {
		"string" == typeof a || a instanceof String || (a = "" + a + "");
		"string" == typeof b || b instanceof String || (b = "" + b + "");
		return -1 != a.indexOf(b)
	};
	a.actionChoicePauseMovie = function () {
		a.movie.pause(a.ReasonForPause.ACTION_CHOICE)
	};
	a.actionChoiceContinueMovie = function () {
		a.movie.play(a.ReasonForPlay.ACTION_CHOICE)
	};
	a.show = function (c) {
		var b = 0,
			d = [],
			e;
		e = null;
		d.push(c);
		a.getDisplayObjByKey(c);
		a.movie.stage.getChildrenForParent(c, d);
		for (b = 0; b < d.length; ++b)
			if (e = d[b], e = a.D[e])
				if (e.effectiveVi = 1, e.mdi && (e = a.D[e.mdi])) e.effectiveVi = 1;
		a._show(c);
		a._showCurrentState(c)
	};
	a._show = function (c, b, d) {
		void 0 === b && (b = !0);
		var e = 0,
			f = [],
			h, g = null;
		f.push(c);
		var j = a.getDisplayObjByKey(c);
		a.movie.stage.getChildrenForParent(c, f);
		for (var k = cpInfoCurrentFrame > a.movie.stage.lastFrame ? a.movie.stage.lastFrame : cpInfoCurrentFrame, l = !1, e = 0; e <
			f.length; ++e) {
			c = f[e];
			if (h = a.D[c]) {
				h.visible = 1;
				var m = !0;
				if (h.mdi) {
					if (g = a.D[h.mdi]) g.visible = 1;
					if (g = a.getDisplayObjByKey(h.mdi))
						if (g.visible = 1, !b && a.isBaseItemInState(g) && (m = !1), g.type == a.kCPOTVideo && g.nativeVideo && (l = !0, g.nativeVideo.style.display = "block"), g.element) {
							var n = g.element.firstElementChild;
							n && "VIDEO" == n.tagName && ((l = !0, g.nativeVideo.style.display = "block", g.seekTo(g.from), g.showControls && g.nativeVideo && (a.IDEVICE != a.device || a.IOSMajor >= a.IOS8 ? (a.movie.stage.NativeVideoElement && (a.movie.stage.NativeVideoElement.style.backgroundColor =
								"#000000"), a.addVideoSkin(g.actualParent, g, g.autoPlay)) : g.nativeVideo.controls = !0), g.autoPlay) ? g.play() : (g.nativeVideo.style.position = "static", g.nativeVideo.style.left = "0px"))
						}
				}
				if (g = a(c)) {
					if (l || j && j.isInRange(k)) g.style.visibility = "visible", g.style.display = "block";
					if (h.type == a.kCPOTWebObject && (g = g.getElementsByTagName("iframe")[0])) g.style.visibility = "visible", g.style.display = "block"
				}
				h.ia && m && a.movie.am.showHideObjectAudio(h.ia, !0);
				h.iea && m && a.movie.am.playPauseEventAudio(h.iea, !0)
			} else if ((g = a(c)) &&
				(l || j && j.isInRange(k)))
				if (g.style.visibility = "visible", h = c.indexOf("-vtext_Handler"), a.responsive && -1 != h && (h = c.substr(0, h), (h = a.D[h]) && h.hl)) g.style.backgroundColor = "#ffffff", g.style.opacity = 0;
			a.redrawItem(c, d)
		}
	};
	a.hide = function (c) {
		var b = 0,
			d = [],
			e;
		d.push(c);
		a.movie.stage.getChildrenForParent(c, d);
		for (b = 0; b < d.length; ++b)
			if (e = d[b], e = a.D[e])
				if (e.effectiveVi = 0, e.mdi && (canvasDataItem = a.D[e.mdi])) canvasDataItem.effectiveVi = 0;
		a._hide(c);
		a._hideCurrentState(c)
	};
	a._hide = function (c, b) {
		void 0 === b && (b = !0);
		var d =
			0,
			e = [],
			f, h;
		e.push(c);
		a.movie.stage.getChildrenForParent(c, e);
		for (d = 0; d < e.length; ++d)
			if (h = e[d], f = a.D[h]) {
				f.visible = 0;
				var g = !0;
				if (f.mdi) {
					if (canvasDataItem = a.D[f.mdi]) canvasDataItem.visible = 0;
					var j = a.getDisplayObjByKey(f.mdi);
					if (j) {
						j.visible = 0;
						!b && a.isBaseItemInState(j) && (g = !1);
						a.CanPauseAudioDuringHide(j) || (g = !1);
						var k = !1;
						if (j.type == a.kCPOTVideo) k = !0;
						else if (j.element) {
							var l = j.element.firstElementChild;
							l && "VIDEO" == l.tagName && (k = !0)
						}
						k && (j.nativeVideo && (j.nativeVideo.style.display = "none"), j.pause && j.pause())
					}
				}
				if (h =
					a(h))
					if (h.style.visibility = "hidden", f.type == a.kCPOTWebObject && (h = h.getElementsByTagName("iframe")[0])) h.style.visibility = "hidden", h.style.display = "none";
				f.ia && g && a.movie.am.showHideObjectAudio(f.ia, !1);
				f.iea && g && a.movie.am.playPauseEventAudio(f.iea, !1)
			} else if (h = a(h)) h.style.visibility = "hidden"
	};
	a.jumpToPreviousSlide = function () {
		var c = a.movie.stage.previousSlideStartFrame;
		0 >= c && (c = 1);
		a.movie.jumpToFrame(c) && a.movie.play()
	};
	a.jumpToNextSlide = function () {
		var c = a.movie.stage.nextSlideStartFrame; - 1 != c ?
			a.movie.jumpToFrame(c) && a.movie.play() : !a.movie.virgin && a.movie.stage.slides.length - 1 == cpInfoCurrentSlideIndex && a.movie.play()
	};
	a.jumpToLastVisitedSlide = function () {
		a.movie.jumpToFrame("cpInfoLastVisitedSlide");
		a.movie.play()
	};
	a.openURL = function (c, b) {
		var d = c;
		a.MSIE != a.browser && (d = encodeURI(c));
		if (a.m_isPreview) a.parentWindow.open(d, b);
		else {
			var e;
			if (e = a.IsRunningInACAP)
				if (e = "_self" == b) e = d, e = -1 != e.search("http:") || -1 != e.search("https:") || -1 != e.search("www.") ? !0 : !1;
			e ? a.parentWindow.open(d, "_blank") : a.currentWindow.open(d,
				b)
		}
	};
	a.openMovie = function (c, b) {
		return a.openURL(c, b)
	};
	a.sendEmail = function (c) {
		(c = a.m_isPreview ? a.parentWindow.open("mailto:" + c, "_blank") : a.currentWindow.open("mailto:" + c, "_blank")) && c.close()
	};
	a.showMessage = function (c) {
		a.alert(c)
	};
	a.runJavascript = function (c, b) {
		a.verbose && a.log("runJavascript [" + c + "]");
		try {
			var d = window;
			switch (b) {
				case "_self":
					d = window;
					break;
				case "_blank":
					d = window.open("");
					break;
				case "_parent":
					d = window.parent;
					break;
				case "_top":
					d = window.top
			}
			d.execScript ? d.execScript(c) : d.eval.call(d,
				c)
		} catch (e) {
			a.log(e)
		}
	};
	a.stopMovie = function () {};
	a.loopMovie = function () {
		cpCmndGotoSlideAndResume = 0
	};
	a.closeMovie = function () {
		DoCPExit && DoCPExit()
	};
	a.playAudio2 = function (c) {
		return a.playAudio(c, !1)
	};
	a.playAudio = function (c, b) {
		var d = a.movie.am;
		if (a.lastMediaPlayReqTime && 50 > (new Date).getTime() - a.lastMediaPlayReqTime.getTime()) d.verbose && a.log("crowded request postponed " + c), setTimeout(function () {
			a.playAudio(c, b)
		}, 50);
		else if (!(d.muted || 1 != a.movie.speed)) {
			d.verbose && a.log("cp.playAudio " + c + ", " + b);
			if (a.device ==
				a.IDEVICE || a.device == a.ANDROID)
				if (!a.multiAudioTrack && (d.audioPlaying || a.movie.stage.VideoPlaying)) {
					d.verbose && a.log("audioPlaying " + d.audioPlaying + " videoPlaying " + a.movie.stage.VideoPlaying);
					return
				}
			var e = a.D["PA" + c].src;
			void 0 == b && (b = !0);
			d = d.singletonPlayAudio;
			d.pause();
			null != d.nativeAudio && (d.nativeAudio.cpAudio = null, d.nativeAudio = null);
			d.onEndAutoPlayMovie = b;
			d.setSrc(e);
			d.resetAndPlay()
		}
	};
	a.stopAudio = function () {
		a.movie.am.singletonPlayAudio.pause()
	};
	a.cv = function (c, b, d, e, f) {
		return a.vm.createVariable(c,
			b, 1 == d ? !0 : !1, e, 1 == f ? !0 : !1)
	};
	a.ho = function (a) {
		if ("string" == typeof a) {
			var b;
			try {
				isNaN(Number(a)) && (b = window[a])
			} catch (d) {}
			if (void 0 != b) return b;
			try {
				isNaN(Number(a)) || (b = eval(a))
			} catch (e) {}
			if (void 0 != b) {
				if ("string" == typeof b) {
					var f;
					try {
						f = eval(b)
					} catch (h) {}
					if (void 0 != f) return f
				}
				return b
			}
		}
		return a
	};
	a.playPause = function (c) {
		var b;
		a.movie.paused ? (!0 == c && (b = a.ReasonForPlay.PLAYBAR_ACTION), a.movie.play(b)) : (!0 == c && (b = a.ReasonForPause.PLAYBAR_ACTION), a.movie.pause(b))
	};
	a.goToPreviousSlide = function () {
		a.jumpToPreviousSlide()
	};
	a.goToNextSlide = function () {
		a.jumpToNextSlide()
	};
	a.jumpToSlide = function (a) {
		cpCmndGotoSlideByUIDAndResume = a
	};
	a.rewind = function () {
		cpCmndRewindAndPlay = 1
	};
	a.showHideCC = function () {
		cpCmndCC = cpCmndCC ? 0 : 1
	};
	a.showHideTOC = function () {
		var a = document.getElementById("toc");
		void 0 != a && a.animator && (0 == a.animator.direction ? a.animator.showTOC() : a.animator.hideTOC())
	};
	a.fastForward = function () {
		cpCmndFastForward = 1
	};
	a.handleCCClick = function (c) {
		if (a.DESKTOP == a.device) {
			var b = document.getElementById("div_Slide");
			if (a.ccdv)
				if (document.getElementById("cc").style.display =
					"none", b = document.elementFromPoint(c.clientX, c.clientY), document.getElementById("cc").style.display = "block", c.initMouseEvent) {
					var d = document.createEvent("MouseEvent");
					d.initMouseEvent("click", !0, !0, window, 0, c.screenX, c.screenY, c.clientX, c.clientY, c.ctrlKey, c.altKey, c.shiftKey, c.metaKey, 0, null);
					b.dispatchEvent(d)
				} else document.createEventObject && (d = document.createEventObject(window.event), d.button = 1, b.fireEvent("onclick", d))
		}
	};
	a.showInfoDialog = function () {
		var c = !1;
		a.movie.paused || (a.movie.pause(a.ReasonForPause.PLAYBAR_ACTION),
			c = !0);
		var b = a.infoBgImg,
			d = a.newElem("div");
		a.project.appendChild(d);
		d.id = "infoDialog";
		d.style.position = "absolute";
		d.style.backgroundImage = "url(" + b.src + ")";
		var e = a.D.project.w,
			f = a.D.project.h;
		a.responsive && (f = a("div_Slide"), e = f.clientWidth, f = f.clientHeight > window.innerHeight ? window.innerHeight : f.clientHeight);
		d.style.left = (e - b.width) / 2 + "px";
		d.style.top = (f - b.height) / 2 + "px";
		d.style.width = b.width + "px";
		d.style.height = b.height + "px";
		d.style.zIndex = 1E4;
		b = a.newElem("div");
		a.registerGestureEvent(b, a.GESTURE_EVENT_TYPES.TAP,
			function () {
				a.project.removeChild(d);
				c && a.movie.play()
			});
		b.style.cursor = "pointer";
		b.style.backgroundColor = "#ffffff";
		b.style.opacity = 0;
		b.style.left = "170px";
		b.style.top = "5px";
		b.style.width = "15px";
		b.style.height = "15px";
		b.style.position = "absolute";
		b.style.display = "block";
		b.style.zIndex = 1E4;
		d.appendChild(b);
		b = a.newElem("div");
		e = "<ul style='padding-left:15px;padding-right:15px;padding-top:20px;list-style-type: none;text-indent: 0em;'>" + ("<li style='overflow:hidden'>" + cpInfoAuthor + "</li>");
		e += "<li style='overflow:hidden'>" +
			cpInfoCompany + "</li>";
		e += "<li style='overflow:hidden;cursor:pointer;' onclick='cp.sendEmail(\"" + cpInfoEmail + "\")'>" + cpInfoEmail + "</li>";
		f = "http://";
		f = -1 == cpInfoWebsite.indexOf("://") ? f + cpInfoWebsite : cpInfoWebsite;
		e += "<li style='overflow:hidden;cursor:pointer;' onclick='cp.openURL(\"" + f + "\")'>" + cpInfoWebsite + "</li>";
		e += "<li style='overflow:hidden'>" + cpInfoCopyright + "</li>";
		b.innerHTML = e + "</ul>";
		d.appendChild(b);
		b = a.newElem("div");
		a.registerGestureEvent(b, a.GESTURE_EVENT_TYPES.TAP, function () {
			a.openURL("http://www.adobe.com/products/captivate")
		});
		b.style.cursor = "pointer";
		b.style.backgroundColor = "#ffffff";
		b.style.opacity = 0;
		b.style.left = "10px";
		b.style.bottom = "10px";
		b.style.width = "170px";
		b.style.height = "25px";
		b.style.position = "absolute";
		b.style.display = "block";
		d.appendChild(b)
	};
	a.toggleMute = function () {
		a.movie.am.muted ? a.movie.am.mute(!1) : a.movie.am.mute(!0);
		a.movie.vdm.muted ? a.movie.vdm.mute(!1) : a.movie.vdm.mute(!0);
		a.em.fireEvent("CPMovieAudioMute", a.movie.am.muted)
	};
	a.playbarMoved = function () {
		cpCmndPlaybarMoved = 1
	};
	document.Captivate = window.cp;
	window.m_VarHandle = window;
	a.cpEIGetValue = function (a) {
		return eval.call(window, a)
	};
	a.cpEISetValue = function (a, b) {
		eval.call(window, a + '="' + b + '"')
	};
	a.goToNextState = function (c) {
		var b = a.D[c];
		if (b) {
			var d = a.getDisplayObjByKey(b.mdi);
			if (d && (b = d.states, d = d.currentState, !(0 > d || d > b.length - 1))) {
				for (d = d == b.length - 1 ? 0 : d + 1; d < b.length && a.isInbuiltState(b[d]);) d++;
				d != b.length && (b = b[d]) && a.changeState(c, b.stn)
			}
		}
	};
	a.isInbuiltState = function (a) {
		a = a.stn;
		return "RollOver" == a || "Down" == a || "DragStart" == a || "DragOver" == a || "DropAccept" ==
			a || "DropReject" == a || "DropCorrect" == a || "DropIncorrect" == a ? !0 : !1
	};
	a.goToPreviousState = function (c) {
		var b = a.D[c];
		if (b) {
			var d = a.getDisplayObjByKey(b.mdi);
			if (d && (b = d.states, d = d.currentState, !(0 > d || d >= b.length))) {
				for (d = 0 == d ? b.length - 1 : d - 1; 0 <= d && a.isInbuiltState(b[d]);) d--;
				0 > d || (b = b[d]) && a.changeState(c, b.stn)
			}
		}
	};
	a.changeState = function (c, b, d, e) {
		var f = a.D[c];
		if (f) {
			var h = a.getDisplayObjByKey(f.mdi);
			if (h) f = a.getInfoForStateChange(c, b), f.bFound && (h.getAttribute("effectiveVi") ? a._changeState(c, b, !1, d, e) : h.currentState =
				f.stateIndex);
			else {
				c = f.stl;
				d = -1;
				if (0 < c.length)
					for (e = 0; e < c.length; e++)
						if (c[e].stn == b) {
							d = e;
							break
						}
				f.temporaryInitialState = d
			}
		}
	};
	a._changeState = function (c, b, d, e, f) {
		var h = a.D[c];
		if (h) {
			void 0 === e && (e = !0);
			var g = a.getDisplayObjByKey(h.mdi);
			if (g && (b = a.getInfoForStateChange(c, b), b.bFound && (h = g.currentState, d || h !== b.stateIndex))) {
				d = !1;
				h = a.movie.stage.getCurrentSlideInteractionManager();
				null != h && (d = h.DoNecessaryStuffBeforeChangeState(c));
				g.currentState = b.stateIndex;
				for (g = 0; g < b.showItemList.length; ++g) {
					var j = a.getDisplayObjNameByCP_UID(b.showItemList[g]);
					a._show(j, e, f);
					if (a.D[j]) {
						var k = a.D[j].selfAnimationScript;
						if (k && (eval(k), j = a.D[j]))(j = a.getDisplayObjByKey(j.mdi)) && j.updateEffects && j.updateEffects(!0)
					}
				}
				for (g = 0; g < b.hideItemList.length; ++g) j = a.getDisplayObjNameByCP_UID(b.hideItemList[g]), (k = a.D[j].selfAnimationScript) && PPTXLib.resetObjects && PPTXLib.resetObjects(j), a._hide(j, e);
				null != h && h.DoNecessaryStuffAfterChangeState(c, d)
			}
		}
	};
	a._showCurrentState = function (c) {
		var b = a.D[c];
		if (b) {
			var d = a.getDisplayObjByKey(b.mdi);
			d && (b = d.currentState, d = d.states, 0 <=
				b && b < d.length && (b = d[b]) && a._changeState(c, b.stn, !0))
		}
	};
	a._hideCurrentState = function (c) {
		if (c = a.D[c]) {
			var b = a.getDisplayObjByKey(c.mdi);
			if (b && (c = b.currentState, b = b.states, 0 <= c && c < b.length && (c = b[c]))) {
				c = c.stsi;
				for (b = 0; b < c.length; ++b) {
					var d = a.getDisplayObjNameByCP_UID(c[b]);
					a._hide(d)
				}
			}
		}
	}
})(window.cp);
(function (a) {
	a.Canvas = function (a) {
		this.element = a;
		this.gc = a.getContext("2d")
	};
	if ("undefined" == typeof PPTXLib || void 0 == PPTXLib) a.dummyPPTXLib = {}, PPTXLib = a.dummyPPTXLib, PPTXLib.PptxAnimatableDisplayItem = function () {}, PPTXLib.PptxAnimatableDisplayItem.prototype.updateEffects = function () {}, PPTXLib.PptxAnimatableDisplayItem.prototype.updateFrameData = function () {}, PPTXLib.initializeAnimationManagerForCPSlide = function () {}, PPTXLib.hasAnimationInfo = function () {
		return !1
	}, PPTXLib.updateNoSkipFramesFromEffectData =
		function () {}, PPTXLib.updateAnimationManager = function () {}, PPTXLib.initializePPTXLibrary = function () {}, PPTXLib.processTriggerForObject = function () {};
	a.DisplayObject = function (c) {
		var d = a.D[c.id];
		d && (this.isCpObject = !0, d.isCpObject = !0);
		a.DisplayObject.baseConstructor.call(this, c.id, d);
		this.element = c;
		this.hasEffect = this.getAttribute("JSONEffectData");
		a.responsive && (this.isStarted = !1);
		if (d && (c = a.D[this.getAttribute("dn")])) this.states = c.stl, void 0 !== this.states ? (this.initialState = this.currentState = c.stis,
			c.temporaryInitialState && -1 != c.temporaryInitialState && (this.currentState = c.temporaryInitialState, c.temporaryInitialState = -1), this.baseStateItemID = c.bstiid, this.parentStateType = c.sipst, this.cloneOfBaseStateItem = c.sicbs, this.itemOrParentHasHoverState = c.sihhs, this.itemOrParentHasDownState = c.sihds) : (this.parentStateType = this.baseStateItemID = this.initialState = this.currentState = -1, this.itemOrParentHasDownState = this.itemOrParentHasHoverState = this.cloneOfBaseStateItem = !1, this.states = []);
		a.setInitialVisibility(this)
	};
	a.inherits(a.DisplayObject, PPTXLib.PptxAnimatableDisplayItem);
	a.DisplayObject.prototype.updateInputFontStyle = function (c) {
		if (c && (this.ResponsiveFontProp = this.getAttribute("rpfont"), this.font = this.ResponsiveFontProp[a.ResponsiveProjWidth].font)) c.style.fontFamily = this.font.n, c.style.fontSize = this.font.s + "px", c.style.color = this.font.c, c.style.fontWeight = this.font.B ? "bold" : "normal", c.style.textDecoration = this.font.u ? "underline" : "none", c.style.fontStyle = this.font.i ? "italic" : "normal"
	};
	a.DisplayObject.prototype.subscribeToItemDrawingCompleteHandler =
		function () {
			if (a.responsive) {
				var c = this,
					d = a.getResponsiveCSS(c.getAttribute("css"));
				d && (d.lhID && d.lvID && (-1 != d.lhID || -1 != d.lvID)) && a.em.addEventListener(function (a) {
					c.linkedItemDrawingCompleteHandler(a)
				}, a.ITEMDRAWINGCOMPLETEEVENT)
			}
	};
	a.DisplayObject.prototype.linkedItemDrawingCompleteHandler = function (c) {
		if (a.responsive && this.drawForResponsive && this.isStarted) {
			var d = a.getResponsiveCSS(this.getAttribute("css"));
			c.cpData && c.cpData.uid && !(c.cpData.uid != d.lhID && c.cpData.uid != d.lvID) && (a.linksVerbose && a.log("drawing " +
				this.element.id + ", for " + c.cpData.uid), this.drawForResponsive(!0, a.ReasonForDrawing.kLinkedToItemAppeared), a.updateVarText(this.actualParent.id, !0, !0))
		}
	};
	a.DisplayObject.prototype.forEachChild = function (a, d) {
		if (this.children)
			for (var e = this.children, g = e.length, h = 0; h < g; ++h) a(e[h], d)
	};
	a.DisplayObject.prototype.updateFrame = function () {
		this.updateEffects(this.hasEffect);
		this.forEachChild(function (c) {
			a.responsive && !c.isDrawn && c.drawIfNeeded ? c.drawIfNeeded() : c.updateFrame()
		})
	};
	a.DisplayObject.prototype.updateEffects =
		function (c) {
			if (c && this && this.actualDrawingElement && this.actualDrawingElement.className && "cp-WebObject" == this.actualDrawingElement.className) {
				var d = a.DisplayObject.superClass.updateFrameData.call(this);
				d && (!0 == d[0] ? this.replaceSVGWithPNG() : this.replacePNGGWithSVG())
			}
			a.DisplayObject.superClass.updateEffects.call(this, c);
			this.actualParent && c && (c = a.D[this.actualParent.id], d = c.from, !c.rp && !c.rpa && (cpInfoCurrentFrame <= d + 2 ? (a.verbose && a.log("hiding " + this.parentDivName), d = a.isVisible(this), a._hide(this.parentDivName),
				c.hiddenFromFrame = cpInfoCurrentFrame, c.hiddenFromFlicker = !0, this.visible = d) : c.hiddenFromFlicker && this.visible && (a.verbose && a.log("showing " + this.parentDivName), a._show(this.parentDivName), c.hiddenFromFlicker = !1)))
	};
	a.DisplayObject.prototype.isSizeNPositionUpdated = function (c, d) {
		return !a.responsive ? !1 : !c || !d ? (a.linksVerbose && a.log("first time initialization. lastSizeNPosition = null"), !0) : c.l != d.l ? (a.linksVerbose && a.log(c.l + "!=" + d.l), !0) : c.t != d.t ? (a.linksVerbose && a.log(c.t + "!=" + d.t), !0) : c.r != d.r ? (a.linksVerbose &&
			a.log(c.r + "!=" + d.r), !0) : c.b != d.b ? (a.linksVerbose && a.log(c.b + "!=" + d.b), !0) : c.w != d.w ? (a.linksVerbose && a.log(c.w + "!=" + d.w), !0) : c.h != d.h ? (a.linksVerbose && a.log(c.h + "!=" + d.h), !0) : !1
	};
	a.DisplayObject.prototype.drawComplete = function (c) {
		if (!this.isRegistered) {
			a.verbose && a.log("draw completed: " + this.element.id);
			var d = a.movie.stage.getCurrentSlideInteractionManager();
			null != d && d.registerDisplayObject(this.element.id, c)
		}
		if (a.responsive) {
			if (d = a.D[this.element.id]) {
				var e = a.D[d.dn],
					g = !0;
				e && e.type == a.kCPOTStageMatchingAnswerEntry &&
					(g = !1);
				d && g && d && (d = a.getAccessibilityString(d), void 0 != d && a.modifyAlternativeAccessibleText(this.actualParent, d))
			}
			if (c == a.ReasonForDrawing.kRegularDraw || c == a.ReasonForDrawing.kOrientationChangeOrResize) a.linksVerbose && a.log("subscribeToItemDrawingCompleteHandler : " + this.element.id), this.subscribeToItemDrawingCompleteHandler();
			d = this.actualParent.getBoundingClientRect();
			e = a("div_Slide").getBoundingClientRect();
			d = {
				l: d.left - e.left,
				t: d.top - e.top,
				r: d.right - e.right,
				b: d.bottom - e.bottom,
				w: d.width,
				h: d.height
			};
			if (c == a.ReasonForDrawing.kMoviePaused && !this.isStarted || c == a.ReasonForDrawing.kRegularDraw || c == a.ReasonForDrawing.kOrientationChangeOrResize || c == a.ReasonForDrawing.kTextGrow || c == a.ReasonForDrawing.kLinkedToItemAppeared)
				if (c = {
					uid: this.getAttribute("uid")
				}, this.isStarted = this.isDrawnComplete = !0, this.isSizeNPositionUpdated(this.lastSizeNPosition, d)) return a.linksVerbose && a.log("firing event for : " + this.actualParent.id), this.lastSizeNPosition = d, a.em.fireEvent("CPItemDrawingCompleteEvent", c);
			this.lastSizeNPosition =
				d
		}
	};
	a.DisplayObject.prototype.setTransformOrigin = function (c) {
		if (c) {
			var d = a.D[a.D[c.id].dn],
				e = 0,
				g = 0;
			a.responsive ? (g = a.getCurrentBreakPointID(), e = d["xorig_" + g], g = d["yorig_" + g]) : (e = d.xorig, g = d.yorig);
			var h = d = "0px";
			this.actualParent && (d = 100 * e + "%", h = 100 * g + "%");
			e = d + " " + h;
			void 0 != c && (c.parentElement.style["-ms-transform-origin"] = e, c.parentElement.style["-moz-transform-origin"] = e, c.parentElement.style["-webkit-transform-origin"] = e, c.parentElement.style["-o-transform-origin"] = e, c.parentElement.style["transform-origin"] =
				e)
		}
	};
	a.DisplayObject.prototype.start = function (c, d) {
		if (!this.effectIsStarted || c) this.updateEffects(), this.effectIsStarted = !0;
		this.forEachChild(function (e) {
			e.start(c, d);
			a.responsive && (e.isStarted = !0)
		})
	};
	a.DisplayObject.prototype.reset = function (c) {
		this.isRegistered = !1;
		this.forEachChild(function (d) {
			d.reset(c);
			a.responsive && (d.currentCSS = void 0, d.isStarted = !1)
		});
		this.effectIsStarted = !1
	};
	a.DisplayObject.prototype.onEndOfMovie = function () {
		this.forEachChild(function (a) {
			a.onEndOfMovie()
		})
	};
	a.DisplayObject.prototype.getAttribute =
		function (c) {
			var d = a.D[this.element.id];
			return !d ? null : d[c]
	};
	a.DisplayObject.prototype.setAttribute = function (c, d) {
		var e = a.D[this.element.id];
		e && (e[c] = d)
	};
	a.DisplayObject.prototype.restOfProjectDoOnNewSlide = function () {};
	a.DisplayObject.prototype.deleteFromRopMap = function (c) {
		delete a.ropMap[c.id]
	};
	a.DisplayObject.prototype.ForceMouseOut = function () {
		if (a.DESKTOP === a.device) {
			var c = a.kSTTNone;
			if (0 <= this.currentState && this.currentState < this.states.length) {
				var d = this.states[this.currentState];
				d && (c = d.stt)
			}
			this.HandleMouseEventOnStateItems &&
				this.HandleMouseEventOnStateItems("mouseout", c, void 0)
		}
	};
	a.Shape = function (c, d) {
		function e(c) {
			f.visible = f.getAttribute("visible");
			f.isDrawn = !1;
			a.responsive && (f.currentCSS = void 0);
			!1 == f.supportsStates ? a.device == a.IDEVICE || a.device == a.ANDROID ? f.downImage && (f.currImage = f.downImage) : f.hoverImage && (f.currImage = f.hoverImage) : f.changeStateOnMouseEvents && (a.device == a.IDEVICE || a.device == a.ANDROID ? f.changeStateOnMouseEvents("mousedown", c) : f.changeStateOnMouseEvents("mouseover", c));
			var c = f.transIn,
				d = f.modifyParent;
			f.modifyParent = a.responsive;
			f.transIn = null;
			f.drawIfNeeded();
			f.transIn = c;
			f.modifyParent = d
		}
		function g(c) {
			f.visible = f.getAttribute("visible");
			f.isDrawn = !1;
			a.responsive && (f.currentCSS = void 0);
			!1 == f.supportsStates ? f.currImage = f.normalImage : f.changeStateOnMouseEvents && (a.device == a.IDEVICE || a.device == a.ANDROID ? f.changeStateOnMouseEvents("mouseup", c) : f.changeStateOnMouseEvents("mouseout", c));
			var c = f.transIn,
				d = f.modifyParent;
			f.modifyParent = a.responsive;
			f.transIn = null;
			f.drawIfNeeded();
			f.transIn = c;
			f.modifyParent =
				d
		}
		function h(c) {
			f.isDrawn = !1;
			a.responsive && (f.currentCSS = void 0);
			!1 == f.supportsStates ? f.downImage && (f.currImage = f.downImage) : f.changeStateOnMouseEvents && f.changeStateOnMouseEvents("mousedown", c);
			var c = f.transIn,
				d = f.modifyParent;
			f.modifyParent = a.responsive;
			f.transIn = null;
			f.drawIfNeeded();
			f.transIn = c;
			f.modifyParent = d
		}
		function m(c) {
			f.isDrawn = !1;
			a.responsive && (f.currentCSS = void 0);
			!1 == f.supportsStates ? f.currImage = f.hoverImage && a.device != a.IDEVICE && a.device != a.ANDROID ? f.hoverImage : f.normalImage : f.changeStateOnMouseEvents &&
				f.changeStateOnMouseEvents("mouseup", c);
			var c = f.transIn,
				d = f.modifyParent;
			f.modifyParent = a.responsive;
			f.transIn = null;
			f.drawIfNeeded();
			f.transIn = c;
			f.modifyParent = d
		}
		function o(c, d, e, g) {
			return function (h) {
				if (!a.disableInteractions && (!(f.parentData && void 0 != f.parentData.enabled) || f.parentData.enabled)) g && g(), e && f.mouseState == c || (f.mouseState = c, d(h))
			}
		}
		var f = this;
		this.mouseState = a.mouseStateOut;
		a.Shape.baseConstructor.call(this, c);
		var n = this.getAttribute("sr");
		n && (this.shape = n);
		a.responsive && (this.responsiveCSS =
			this.getAttribute("css"));
		n = this.getAttribute("b");
		this.bounds = {
			minX: n[0],
			minY: n[1],
			maxX: n[2],
			maxY: n[3]
		};
		n = this.getAttribute("vb");
		this.vbounds = null;
		this.vbounds = n ? {
			minX: n[0],
			minY: n[1],
			maxX: n[2],
			maxY: n[3]
		} : this.bounds;
		this.args = d;
		this.isDrawn = !1;
		this.canvas = null;
		this.visible = this.getAttribute("visible");
		this.divName = this.getAttribute("dns") ? this.getAttribute("dns") : this.getAttribute("dn");
		this.tex = this.getAttribute("tex") ? this.getAttribute("tex") : 0;
		this.tey = this.getAttribute("tey") ? this.getAttribute("tey") :
			0;
		this.parentData = a.D[this.divName];
		this.isParentOfTypeSlide = void 0 == this.parentData.type;
		this.modifyParent = !this.isParentOfTypeSlide;
		this.transIn = this.parentData.trin;
		this.normalImage = this.getAttribute("ip");
		a.responsive && (!this.normalImage && this.parentData.subt && this.parentData.subt == a.kImageButton) && (this.normalImage = this.getAttribute("uImg"));
		if (!this.normalImage && (a.device == a.IDEVICE || a.device == a.ANDROID)) this.normalImage = this.getAttribute("aip");
		this.currImage = this.normalImage;
		this.isMouse = !1;
		this.parentData.mp && (this.isMouse = !0);
		var n = this.getAttribute("hImg"),
			j = this.getAttribute("pImg"),
			i = a.doesSupportStates(this.parentData.type),
			p = !0;
		if (a.device == a.IDEVICE || a.device == a.ANDROID)
			if (this.itemOrParentHasHoverState || this.itemOrParentHasDownState) p = !1;
		a.kSTTDown == this.parentStateType && (a.kCPOTScorableButtonItem == this.parentData.type && a.kImageButton == this.parentData.subt && j) && (this.currImage = this.normalImage = j, n && (n = j));
		var k = document.getElementById(this.divName);
		k && (k.drawingBoard = this.element.parentElement,
			k.bounds = this.bounds, k.drawingBoard.bounds = this.vbounds);
		this.actualParent = k;
		if (n || i)
			if (n && (this.hoverImage = n), k) {
				p && (k.onmouseover = o(a.mouseStateOver, e, !1, k.onmouseover), k.onmouseout = o(a.mouseStateOut, g, !1, k.onmouseout));
				if (a.device == a.IDEVICE || a.device == a.ANDROID) k.ontouchstart = o(a.mouseStateTouchStart, e);
				if (a.device == a.IDEVICE || a.device == a.ANDROID) k.ontouchend = o(a.mouseStateTouchEnd, g);
				if (j || i)
					if (j && (this.downImage = j), p)
						if (k.onmousedown = o(a.mouseStateDown, h), k.onmouseup = o(a.mouseStateUp, m), a.device ==
							a.IDEVICE || a.device == a.ANDROID) k.ontouchmove = o(a.mouseStateTouchMove, h, !0)
			}
		this.shouldShowRollOver = !0;
		this.tr = this.getAttribute("tr");
		this.sh = this.getAttribute("sh");
		this.re = this.getAttribute("re");
		!1 == this.cloneOfBaseStateItem && -1 != this.baseStateItemID && (this.playEffectsOnStart = !0);
		this.supportsStates = a.doesSupportStates(this.parentData.type);
		a.setInitialVisibility(this)
	};
	a.inherits(a.Shape, a.DisplayObject);
	a.Shape.prototype.start = function (a, d) {
		this.drawIfNeeded(a, d);
		if (!this.effectIsStarted || a) this.updateEffects(this.hasEffect),
		this.effectIsStarted = !0
	};
	a.Shape.prototype.reset = function () {
		delete a.ropMap[this.element.id];
		this.canvas = null;
		this.isDrawn = !1;
		var c = !0;
		this.parentData && this.parentData.st && (c = !1);
		c && (this.element.width = "0", this.element.height = "0", this.element.style.width = "0px", this.element.style.height = "0px", this.element.left = "0", this.element.top = "0", this.element.style.left = "0px", this.element.style.top = "0px");
		this.effectIsStarted = !1
	};
	a.Shape.prototype.drawIfNeeded = function (c, d) {
		if ((!a.responsive || !this.drawForResponsive(c,
			d)) && !this.isDrawn) {
			var e = this.getAttribute("dn"),
				g = a.D[e];
			this.parentDivName = e;
			var e = this.bounds,
				h = -e.minX + e.maxX,
				m = -e.minY + e.maxY;
			if (0 == h || 0 == m) this.isDrawn = !0, this.drawComplete();
			else {
				this.args && (h += Number(this.args[1]) + Number(this.args[2]), m += Number(this.args[1]) + Number(this.args[3]));
				var o = g.type,
					h = (o == a.kCPOTClickBoxItem ? this.canvas = a.createCanvas(e.minX, e.minY, 0, 0, this.element) : this.canvas = a.createCanvas(e.minX, e.minY, Math.ceil(h), Math.ceil(m), this.element)).gc;
				this.element.style.left = e.minX +
					"px";
				this.element.style.top = e.minY + "px";
				this.element.style.width = e.maxX - e.minX + "px";
				this.element.style.height = e.maxY - e.minY + "px";
				var m = !1,
					m = this.re || this.sh && !this.sh.i,
					f = void 0 != this.tr,
					n = this.currImage,
					j = this.modifyParent && !this.isParentOfTypeSlide;
				h.save();
				if (!this.isMouse) {
					var i = e.minX,
						p = e.minY,
						k = e.maxX - e.minX,
						s = e.maxY - e.minY,
						q = this.actualParent;
					if (q) {
						j && (q.style.left = i + "px", q.style.top = p + "px", q.style.width = k + "px", q.style.height = s + "px");
						var l = 0;
						this.tr && (j && (a.applyTransform(q, this.tr), q.tr = this.tr),
							l = a.getAngleFromRotateStr(this.tr));
						this.element.style.display = "block";
						this.element.style.position = "absolute";
						j && (q.rotateAngle = l, a.movie.stage.addToParentChildMap(q.id, this.element.id), this.element.parentElement.style.left = this.vbounds.minX + "px", this.element.parentElement.style.top = this.vbounds.minY + "px", this.element.parentElement.style.width = this.vbounds.maxX - this.vbounds.minX + "px", this.element.parentElement.style.height = this.vbounds.maxY - this.vbounds.minY + "px", this.re && (this.element.parentElement.style.webkitBoxReflect =
							"below " + this.re.d + "px -webkit-gradient(linear, left top, left bottom, from(transparent), color-stop(" + (1 - this.re.s / 100) + ", transparent), to(rgba(255, 255, 255, " + (1 - this.re.p / 100) + ")))"))
					}
					this.init = !0;
					this.element.originalParent = q;
					i = 0 < this.vbounds.minX && m ? 0 : this.vbounds.minX;
					p = 0 < this.vbounds.minY && m ? 0 : this.vbounds.minY;
					j = m && a.D.project.h > this.vbounds.maxY ? a.D.project.h : this.vbounds.maxY;
					k = (m && a.D.project.w > this.vbounds.maxX ? a.D.project.w : this.vbounds.maxX) - i;
					s = j - p;
					this.canvas = o == a.kCPOTClickBoxItem ?
						a.createCanvas(0, 0, 0, 0, this.element) : a.createCanvas(void 0 != g.st ? i : 0, void 0 != g.st ? p : 0, k, s, this.element);
					this.element.style.display = "block";
					this.element.style.position = "absolute";
					this.isParentOfTypeSlide || (this.element.style.marginLeft = i - this.vbounds.minX + "px", this.element.style.marginTop = p - this.vbounds.minY + "px");
					this.sh && !this.sh.i && (h.shadowOffsetX = this.sh.d * Math.cos(Math.PI * this.sh.a / 180), h.shadowOffsetY = this.sh.d * Math.sin(Math.PI * this.sh.a / 180), h.shadowBlur = this.sh.b, h.shadowColor = a.ConvertRGBToRGBA(this.sh.c,
						this.sh.o));
					l = 0;
					this.tr && (l = a.getAngleFromRotateStr(this.tr));
					m ? (h.setTransform(1, 0, 0, 1, 0 > i ? -i : 0, 0 > p ? -p : 0), h.translate((e.minX + e.maxX) / 2, (e.minY + e.maxY) / 2)) : f && h.translate(k / 2, s / 2);
					h.rotate(Math.PI * l / 180);
					h.tex = this.tex;
					h.tey = this.tey;
					h.centreImage = !0;
					h.width = k;
					h.height = s
				}
				if (this.shape) try {
					var u = this.getAttribute("objectToBeHidden");
					if (this.shape(h, n, u, a.isVisible(this), this.divName, m, f) || o == a.kCPOTClickBoxItem) this.isDrawn = !0, this.drawComplete()
				} catch (v) {}
				h.restore();
				a.handleQuizzingItemsInReviewMode(this.element,
					g, this.divName);
				this.transIn && (this.element.parentElement.style.opacity = 0);
				a.isVisible(this) || a._hide(this.divName);
				a.isVisible(this) && this.playEffectsOnStart && (e = this.parentDivName, (g = a.D[e].selfAnimationScript) && eval(g), this.playEffectsOnStart = !1)
			}
		}
	};
	a.Shape.prototype.drawForResponsive = function (c, d) {
		if (!this.responsiveCSS) return !1;
		if (this.isDrawn && !c) return !0;
		var e = a.getResponsiveCSS(this.responsiveCSS),
			g = !1,
			g = this.sh && !this.sh.i,
			h = void 0 != this.tr;
		if (this.isDrawn && this.currentCSS == e && (!c || d == a.ReasonForDrawing.kMoviePaused)) return !0;
		var m = !0;
		this.currentCSS = e;
		var o = this.getAttribute("dn"),
			f = a.D[o];
		this.parentDivName = o;
		var n = this.getAttribute("aan"),
			j = e,
			o = this.modifyParent && !this.isParentOfTypeSlide,
			i = 0,
			p = this.actualParent.style.transform || this.actualParent.style.msTransform || this.actualParent.style.MozTransform || this.actualParent.style.WebkitTransform || this.actualParent.style.OTransform,
			k = this.element.parentElement.style.transform || this.element.parentElement.style.msTransform || this.element.parentElement.style.MozTransform || this.element.parentElement.style.WebkitTransform ||
				this.element.parentElement.style.OTransform;
		a.applyTransform(this.actualParent, "");
		a.applyTransform(this.element.parentElement, "");
		this.parentElementClientBoundingRect = this.element.parentElement.getBoundingClientRect();
		var s = a.movie.stage.mainSlideDiv.getBoundingClientRect();
		if (!this.isMouse) {
			if (o) {
				a.applyResponsiveStyles(this.actualParent, e, m);
				if (f.rpvt && f.autoGrow && (d == a.ReasonForDrawing.kTextGrow || d == a.ReasonForDrawing.kMoviePaused)) {
					var q = f.minItemHeight;
					q && this.actualParent.clientHeight < q && (this.actualParent.style.height =
						q + "px");
					j = a.createResponsiveStyleObj(e, e.p, e.l, e.t, e.r, e.b, this.actualParent.clientWidth + "px", this.actualParent.clientHeight + "px", e.crop)
				}
				a.adjustPositionWithAnswerArea && (f.type == a.kCPOTStageAnswerLabel || f.type == a.kCPOTStageAnswerItem || f.type == a.kCPOTFillBlankCaption || f.type == a.kCPOTStageMatchingAnswerEntry) && a.adjustPositionWithAnswerArea(e, this.actualParent, n);
				this.actualParent.offsetHeight = this.actualParent.offsetHeight;
				this.actualParentClientBoundingRect = this.actualParent.getBoundingClientRect();
				if (this.tr) {
					i = a.getAngleFromRotateStr(this.tr);
					if (!this.m_centrePoint || d == a.ReasonForDrawing.kOrientationChangeOrResize || d == a.ReasonForDrawing.kLinkedToItemAppeared) this.m_centrePoint = a.getCenterForRotation(this.actualParent);
					m = a.getBoundsForRotatedItem1(this.actualParentClientBoundingRect.left - s.left, this.actualParentClientBoundingRect.top - s.top, this.actualParentClientBoundingRect.width, this.actualParentClientBoundingRect.height, this.m_centrePoint, i, this.strokeWidth);
					q = t = r = b = void 0;
					"auto" != e.l &&
						(q = m.l);
					"auto" != e.t && (t = m.t);
					"auto" != e.r && (r = m.r);
					"auto" != e.b && (b = m.b);
					j = a.createResponsiveStyleObj(e, e.p, q, t, r, b, m.w, m.h, e.crop);
					m = !1
				}
			}
			this.isParentOfTypeSlide || a.applyResponsiveStyles(this.element.parentElement, j, m)
		}
		q = m = 0;
		this.m_centrePoint && (m = this.m_centrePoint.X - (this.actualParentClientBoundingRect.left - s.left), q = this.m_centrePoint.Y - (this.actualParentClientBoundingRect.top - s.top));
		if (f.rpvt) {
			(i = f.offsets) || (i = [0, 0, 0, 0]);
			var j = this.actualParent.id + "_vTxtHandlerHolder",
				l = a(j);
			l || (l = a.newElem("div"),
				l.id = j, l.style.display = "block", l.style.position = "absolute", l.style.width = this.actualParent.clientWidth + "px", l.style.height = this.actualParent.clientHeight + "px", l.style.visibility = "hidden", this.actualParent.appendChild(l));
			l.style.left = i[0] + "px";
			l.style.top = i[1] + "px";
			l.style.width = this.actualParent.clientWidth - (i[0] + i[2]) + "px";
			l.style.height = this.actualParent.clientHeight - (i[1] + i[3]) + "px";
			l = this.actualParent.id + "_vTxtHolder";
			j = a(l);
			j || (j = a.newElem("div"), j.id = l, j.style.display = "block", j.style.position =
				"absolute", j.style.width = this.actualParent.clientWidth + "px", j.style.height = this.actualParent.clientHeight + "px", this.element.parentElement.appendChild(j));
			a.applyTransform(j, "rotate(0)");
			j.style.left = i[0] + "px";
			j.style.top = i[1] + "px";
			j.style.width = this.actualParent.clientWidth - (i[0] + i[2]) + "px";
			j.style.height = this.actualParent.clientHeight - (i[1] + i[3]) + "px";
			d == a.ReasonForDrawing.kOrientationChangeOrResize && a.updateVarText(this.actualParent, !0, !0);
			this.tr && (j.style.left = (this.element.parentElement.clientWidth -
				j.clientWidth) / 2 + "px", j.style.top = (this.element.parentElement.clientHeight - j.clientHeight) / 2 + "px", i = "center center", j.style["-ms-transform-origin"] = i, j.style["-moz-transform-origin"] = i, j.style["-webkit-transform-origin"] = i, j.style["-o-transform-origin"] = i, j.style["transform-origin"] = i, a.applyTransform(j, this.tr))
		}
		a.applyTransform(this.actualParent, p);
		a.applyTransform(this.element.parentElement, k);
		a.adjustPositionWithAnswerArea && (f.type == a.kCPOTStageAnswerLabel || f.type == a.kCPOTStageAnswerItem || f.type ==
			a.kCPOTFillBlankCaption || f.type == a.kCPOTStageMatchingAnswerEntry) && a.adjustPositionWithAnswerArea(e, this.element.parentElement, n);
		this.parentElementClientBoundingRect = this.element.parentElement.getBoundingClientRect();
		n = f.type;
		i = k = 0;
		p = this.parentElementClientBoundingRect.left - s.left;
		s = this.parentElementClientBoundingRect.top - s.top;
		if (n == a.kCPOTClickBoxItem) j = a.createResponsiveStyleObj(e, void 0, "0px", "0px", "0px", "0px", "0px", "0px", void 0);
		else if (g) k = a("div_Slide").clientWidth, i = a("div_Slide").clientHeight,
		j = a.createResponsiveStyleObj(e, void 0, "0px", "0px", "0px", "0px", k + "px", i + "px", void 0);
		else if (this.isMouse) {
			k = this.bounds.maxX - this.bounds.minX;
			i = this.bounds.maxY - this.bounds.minY;
			f.clientWidth = k;
			f.clientHeight = i;
			var u = l = "0px";
			if (j = f.mpa) u = (l = a.movie.stage.isSlideBGCropped()) ? a.RespDefaultBptW : a.project.clientWidth, j = j.b[a.ResponsiveProjWidth], l = l ? j[0] : a.getRoundedValue(u * j[0] / a.ResponsiveProjWidth), l += "px", u = a.getRoundedValue(j[1]) + "px";
			j = a.createResponsiveStyleObj(e, void 0, l, u, "0px", "0px", k + "px",
				i + "px", void 0)
		} else k = this.element.parentElement.clientWidth, i = this.element.parentElement.clientHeight, j = a.createResponsiveStyleObj(e, void 0, "0px", "0px", "0px", "0px", "100%", "100%", void 0);
		this.canvas = this.isParentOfTypeSlide ? a.movie.stage.isSlideBGCropped() ? a.createCanvas(0, 0, a("div_Slide").clientWidth, a("div_Slide").clientHeight, this.element) : a.createCanvas((a("project").clientWidth - this.element.clientWidth) / 2, (a("project").clientHeight - this.element.clientHeight) / 2, this.element.clientWidth, this.element.clientHeight,
			this.element) : a.createResponsiveCanvas(j, k, i, this.element);
		k = this.canvas.gc;
		k.crop = e.crop ? e.crop : void 0;
		!this.isParentOfTypeSlide && g && (this.element.style.marginLeft = (0 > p ? 1 : -1) * p + "px", this.element.style.marginTop = (0 > s ? 1 : -1) * s + "px");
		j = this.currImage;
		k.save();
		if (!this.isMouse) {
			if (l = this.actualParent)
				if (i = 0, this.tr && (o && (i = m ? 100 * m / l.clientWidth + "%" : "center", i += " ", i = q ? i + (100 * q / l.clientHeight + "%") : i + "center", l.style["-ms-transform-origin"] = i, l.style["-moz-transform-origin"] = i, l.style["-webkit-transform-origin"] =
					i, l.style["-o-transform-origin"] = i, l.style["transform-origin"] = i, a.applyTransform(l, this.tr), l.tr = this.tr), i = a.getAngleFromRotateStr(this.tr)), o) l.rotateAngle = i, a.movie.stage.addToParentChildMap(l.id, this.element.id), this.re && (this.element.parentElement.style.webkitBoxReflect = "below " + this.re.d + "px -webkit-gradient(linear, left top, left bottom, from(transparent), color-stop(" + (1 - this.re.s / 100) + ", transparent), to(rgba(255, 255, 255, " + (1 - this.re.p / 100) + ")))");
			this.init = !0;
			this.element.originalParent =
				l;
			this.sh && !this.sh.i && (k.shadowOffsetX = this.sh.d * Math.cos(Math.PI * this.sh.a / 180), k.shadowOffsetY = this.sh.d * Math.sin(Math.PI * this.sh.a / 180), k.shadowBlur = this.sh.b, k.shadowColor = a.ConvertRGBToRGBA(this.sh.c, this.sh.o));
			i = 0;
			this.tr && (i = a.getAngleFromRotateStr(this.tr));
			g ? (k.setTransform(1, 0, 0, 1, 0 > p ? -p : 0, 0 > s ? -s : 0), k.translate(p + this.element.parentElement.clientWidth / 2, s + this.element.parentElement.clientHeight / 2)) : h && k.translate(this.element.parentElement.clientWidth / 2, this.element.parentElement.clientHeight /
				2);
			k.rotate(Math.PI * i / 180);
			k.tex = this.tex;
			k.tey = this.tey;
			k.centreImage = !0;
			k.width = this.element.clientWidth;
			k.height = this.element.clientHeight;
			this.isParentOfTypeSlide ? (f.clientWidth = this.element.clientWidth, f.clientHeight = this.element.clientHeight) : h ? (f.clientWidth = this.actualParent.clientWidth, f.clientHeight = this.actualParent.clientHeight) : (f.clientWidth = this.element.parentElement.clientWidth, f.clientHeight = this.element.parentElement.clientHeight);
			a.isCaptionItem(f.type) && (this.shape ? f.pixelColor =
				this.getAttribute("bc") : (this.isDrawn = !0, this.drawComplete(d)))
		}
		if (this.shape) try {
			var v = this.getAttribute("objectToBeHidden");
			if (this.shape(k, j, v, a.isVisible(this), this.divName, g, h) || n == a.kCPOTClickBoxItem || !e.ipiv) this.isDrawn = !0, this.drawComplete(d);
			else return !1
		} catch (w) {}
		if (f.type == a.kCPOTScoringResultItem || f.type == a.kCPOTStageAnswerLabel || f.type == a.kCPOTStageAnswerItem || f.type == a.kCPOTFillBlankCaption || f.type == a.kCPOTStageMatchingAnswerEntry || f.type == a.kCPOTQuestionColumn) this.isDrawn = !0, this.drawComplete(d);
		k.restore();
		a.handleQuizzingItemsInReviewMode(this.element, f, this.divName);
		this.transIn && d == a.ReasonForDrawing.kRegularDraw && (this.element.parentElement.style.opacity = 0);
		a.isVisible(this) || a._hide(this.divName);
		a.isVisible(this) && this.playEffectsOnStart && (o = this.parentDivName, (e = a.D[o].selfAnimationScript) && eval(e), this.playEffectsOnStart = !1);
		return !0
	};
	a.Shape.prototype.playPath = function (a) {
		var d = a.length,
			e = 0,
			g = this.canvas.gc;
		for (g.beginPath(); e < d;) switch (a[e++]) {
			case "M":
				g.moveTo(a[e++], a[e++]);
				break;
			case "L":
				g.lineTo(a[e++], a[e++]);
				break;
			case "Z":
				g.closePath();
				break;
			case "Q":
				g.quadraticCurveTo(a[e++], a[e++], a[e++], a[e++]);
				break;
			case "C":
				g.bezierCurveTo(a[e++], a[e++], a[e++], a[e++], a[e++], a[e++])
		}
	};
	a.Shape.prototype.changeStateOnMouseEvents = function (c, d) {
		var e = null; - 1 == this.baseStateItemID ? e = this : this.cloneOfBaseStateItem && (e = a.getDisplayObjByCP_UID(this.baseStateItemID));
		e && void 0 !== e.HandleMouseEventOnStateItems && e.HandleMouseEventOnStateItems(c, this.parentStateType, d)
	};
	a.Shape.prototype.HandleMouseEventOnStateItems =
		function (c, d, e) {
			if (this.parentStateType == a.kSTTNormal && (!(this.parentData && void 0 != this.parentData.enabled) || this.parentData.enabled)) {
				var g = a.kSTTNone,
					h = "";
				if (0 <= this.currentState && this.currentState < this.states.length) {
					var m = this.states[this.currentState];
					m && (g = m.stt, h = m.stn)
				}
				m = !(a.device == a.IDEVICE || a.device == a.ANDROID) || "mouseup" != c;
				if (!(m && g != d)) {
					var d = !1,
						o = "",
						f = !1;
					if ("mouseover" == c) {
						if ((g == a.kSTTNormal || g == a.kSTTCustom) && this.shouldShowRollOver)
							if (d = !0, o = a.getLocalisedStateName("kCPRolloverState"),
								this.stateAtStartOfMouseEvents = h, a.BringBaseItemToFrontWithinState(this, a.getLocalisedStateName("kCPRolloverState")), a.device === a.DESKTOP && (c = a.GetMouseOverManager())) {
								var n = this;
								c.addMouseOverItem(this, function () {
									n.ForceMouseOut()
								})
							}
					} else if ("mouseout" == c) {
						if (g == a.kSTTRollOver || g == a.kSTTDown) d = !0, o = this.stateAtStartOfMouseEvents, a.device === a.DESKTOP && (c = a.GetMouseOverManager()) && c.removeMouseOverItem(this);
						if (g == a.kSTTNormal || g == a.kSTTCustom) a.browser == a.CHROME && this.ignoreMouseOutEventOnNormal ?
							this.ignoreMouseOutEventOnNormal = !1 : this.shouldShowRollOver = !0
					} else if ("mousedown" == c) {
						if (g == a.kSTTNormal || g == a.kSTTRollOver || g == a.kSTTCustom)
							if (d = !0, o = a.getLocalisedStateName("kCPDownState"), this.bShouldListenForMouseUpOnDownState = !0, g == a.kSTTNormal || g == a.kSTTCustom) this.stateAtStartOfMouseEvents = h, this.ignoreMouseOutEventOnNormal = !0
					} else if ("mouseup" == c && (!m || g == a.kSTTDown)) d = !0, o = this.stateAtStartOfMouseEvents, this.shouldShowRollOver = !1, this.bShouldListenForMouseUpOnDownState && (f = !0);
					d && (o !== a.getLocalisedStateName("kCPRolloverState") &&
						a.ResetItemZIndicesWithinState(this, a.getLocalisedStateName("kCPRolloverState")), a.changeState(this.actualParent.id, o, !1));
					f && (!a.IsGestureSupportedDevice() && (a.shouldRelaxBrowserCheck(this.parentData.type) || a.CHROME != a.browser && a.MSIE != a.browser || a.m_isLMSPreview)) && a.dispatchClickEvent(this.actualParent, e, {
						asPartOfStateChange: !0
					})
				}
			}
	};
	a.FrameSet = function (c, d) {
		function e(c, d, e, g, h, i) {
			var d = new a.Shortcut(d.k, d.c ? !0 : !1, d.s ? !0 : !1, d.a ? !0 : !1),
				p = "";
			void 0 != e.eh && (p = g.dn);
			return new a.KeyHandler(function (a) {
				return c(e,
					g, a)
			}, d, h, i, p)
		}
		a.FrameSet.baseConstructor.call(this, c);
		this.children = d;
		this.from = this.getAttribute("from");
		this.to = this.getAttribute("to");
		this.afrom = this.getAttribute("afrom");
		this.ato = this.getAttribute("ato");
		this.transIn = this.getAttribute("trin");
		this.transIn || (this.transIn = 0);
		this.transOut = this.getAttribute("trout");
		this.transOut || (this.transOut = 0);
		this.element.drawingBoard && (this.element.drawingBoard.style.display = "block", this.element.drawingBoard.style.opacity = 0 < this.transIn ? 0 : 1);
		"mouse" == this.getAttribute("mp") &&
			(this.motionPathMover = a.movie.mousePath, this.motionPathArgs = this.getAttribute("mpa"));
		this.type = this.getAttribute("type");
		this.itemData = a.D[this.element.id];
		this.itemCanvasData = null;
		this.itemData && this.itemData.mdi && (this.itemCanvasData = a.D[this.itemData.mdi]);
		this.itemCanvasData && (a.cpIDMap[this.itemCanvasData.uid] = this.itemData.mdi);
		this.pa = this.getAttribute("pa");
		this.alwaysPause = this.getAttribute("cpa");
		var g = this.getAttribute("psv");
		g && (this.psv = g);
		if (void 0 != this.pa) {
			this.element.style.WebkitTapHighlightColor =
				"rgba(0,0,0,0.3)";
			this.setAttribute("handled", !1);
			this.setAttribute("clickedOnce", !1);
			this.setAttribute("currentAttempt", 0);
			this.setAttribute("actionInProgress", !1);
			if (void 0 != this.getAttribute("iqb") && this.getAttribute("iqb")) {
				var g = this.getAttribute("sn"),
					g = a.D[g].qs,
					h;
				g && -1 == g.indexOf(",") && (h = a.getQuestionObject(g));
				g = this.getAttribute("qbt");
				this.element.style.cursor = "pointer";
				if (g) switch (g) {
					case "submit":
						h.registerSubmitButton(this.element);
						break;
					case "back":
						h.registerBackButton(this.element);
						break;
					case "skip":
						h.registerSkipButton(this.element);
						break;
					case "clear":
						h.registerClearButton(this.element);
						break;
					case "submitAll":
						h.registerSubmitAllButton(this.element);
						break;
					case "reviewModeNext":
						h.registerReviewModeNextButton(this.element);
						break;
					case "reviewModeBack":
						h.registerReviewModeBackButton(this.element);
						break;
					default:
						a.registerGestureEvent(this.element, a.GESTURE_EVENT_TYPES.TAP, a.QuizButtonCH)
				}
			}
			this.dependents = this.getAttribute("dep");
			if (a.kCPOTAutoShape == this.type && 1 == this.getAttribute("rp") &&
				(h = a.movie.stage.currentSlide) && h.from > this.pa) this.rp_pa = h.from + this.pa - this.from
		}
		this.htmlDependents = [];
		void 0 != this.psv && this.setAttribute("pausedOnce", !1);
		if (h = this.getAttribute("onShow")) this.onShow = window[h];
		if (this.keyHandler = this.getAttribute("kh"))
			if (this.keyShortcut = this.getAttribute("sc"))(h = e(this.keyHandler, this.keyShortcut, a.D[this.element.id], a.D[this.element.id + "c"], this.from, this.to)) && a.movie.stage.addKeyHandler(h);
		if (!this.keyHandler && (this.keyHandler = this.getAttribute("eh")))(h =
			e(this.keyHandler, "", a.D[this.element.id], a.D[this.element.id + "c"], this.from, this.to)) && a.movie.stage.addKeyHandler(h);
		this.isStarted = !1;
		if (a.kCPOTClickBoxItem == this.type || a.kCPOTScorableButtonItem == this.type || a.kCPOTAutoShape == this.type)(this.dblClick = this.getAttribute("dclk")) ? a.movie.stage.getClickManager().addDoubleClick(a.D[this.element.id], a.D[this.element.id + "c"], this.element) : a.kCPOTClickBoxItem == this.type && (this.rightClick = this.getAttribute("rclk")) && a.movie.stage.getClickManager().addRightClick(a.D[this.element.id],
			a.D[this.element.id + "c"], this.element);
		a.kCPOTTextEntryButtonItem == this.type && (this.parentId = this.getAttribute("vid")) && a.movie.stage.addToParentChildMap(this.parentId, this.element.id);
		if (a.MSIE == a.browser && void 0 != this.type) switch (this.type) {
			case a.kCPOTStageShortAnswer:
			case a.kCPOTQuestionFillBlank:
			case a.kCPOTFillBlankCaption:
			case a.kCPOTWidgetItem:
			case a.kCPOTProgressIndicator:
			case a.kCPOTReviewArea:
			case a.kCPOTScoringResult:
			case a.kCPOTStageAnswerItem:
			case a.kCPOTStageAnswerLabel:
			case a.kCPOTStageMatchingQuestion:
			case a.kCPOTStageMatchingAnswerEntry:
			case a.kCPOTFLVItem:
				break;
			case a.kCPOTWebObject:
				if (this.itemCanvasData && (h = this.itemCanvasData.wosvg) && "" != h) c.style.backgroundColor = "#FFFFFF", c.style.opacity = 0;
				break;
			default:
				c.style.backgroundColor = "#FFFFFF", c.style.opacity = 0
		}
	};
	a.inherits(a.FrameSet, a.DisplayObject);
	a.FrameSet.prototype.isInRange = function (c) {
		if (0 == this.from && 0 == this.to) return !0;
		var d = a.getDisplayObjByKey(this.itemData.mdi);
		return d && -1 !== d.baseStateItemID && (d = a.getBaseStateItem(d)) && d.parentData && (a.kCPOTSuccessCaptionItem == d.parentData.type || a.kCPOTFailureCaptionItem ==
			d.parentData.type || a.kCPOTHintCaptionItem == d.parentData.type || a.kCPRolloverCaptionItem == d.parentData.type || a.kCPRolloverImageItem == d.parentData.type || a.kCPOTRolloverAutoShape == d.parentData.type || a.kCPOTSuccessShapeItem == d.parentData.type || a.kCPOTFailureShapeItem == d.parentData.type || a.kCPOTHintShapeItem == d.parentData.type) ? !0 : a.kCPOTSuccessCaptionItem == this.type || a.kCPOTFailureCaptionItem == this.type || a.kCPOTHintCaptionItem == this.type || a.kCPRolloverCaptionItem == this.type || a.kCPRolloverImageItem == this.type ||
			a.kCPOTRolloverAutoShape == this.type || a.kCPOTSuccessShapeItem == this.type || a.kCPOTFailureShapeItem == this.type || a.kCPOTHintShapeItem == this.type ? !0 : this.from <= c && this.to >= c
	};
	a.FrameSet.prototype.updateOpacity = function () {
		if (this.element.drawingBoard && !(a.kCPOTSuccessCaptionItem == this.type || a.kCPOTFailureCaptionItem == this.type || a.kCPOTHintCaptionItem == this.type || a.kCPOTSuccessShapeItem == this.type || a.kCPOTFailureShapeItem == this.type || a.kCPOTHintShapeItem == this.type)) {
			var c = cpInfoCurrentFrame - this.from + 1,
				d = this.to - cpInfoCurrentFrame;
			this.element.drawingBoard.style.opacity = c <= this.transIn ? c / this.transIn : c > this.to - this.from - this.transOut ? d / this.transOut : 1
		}
	};
	a.FrameSet.prototype.updateFrame = function (c) {
		this.updateOpacity();
		a.FrameSet.superClass.updateFrame.call(this);
		c == a.Timeline.ReasonForUpdate.JUMP && this.setAttribute("clickedOnce", !1)
	};
	a.FrameSet.prototype.start = function (c, d) {
		var e = 0,
			g = !this.isStarted;
		this.isStarted = !0;
		this.element.style.display = "block";
		this.element.drawingBoard && (this.element.drawingBoard.style.display =
			"block");
		void 0 != this.pa && null != a.movie.stage.currentSlide && ((e = -1 != this.pa) || (e = a.kCPOTClickBoxItem == this.type || a.kCPOTScorableButtonItem == this.type || a.kCPOTAutoShape == this.type || a.kCPOTTextEntryBoxItem == this.type), e && (a.movie.stage.currentSlide.topMostObjectInteractiveObject = this.element.id));
		a.FrameSet.superClass.start.call(this, c, d);
		if (this.itemCanvasData && 1 == this.itemCanvasData.visible)
			for (e = 0; e < this.htmlDependents.length; ++e) this.htmlDependents[e].style.visibility = "visible";
		this.updateOpacity();
		if (this.onShow) try {
			this.onShow.call(this.timeline)
		} catch (h) {}
		if ("undefined" != typeof cptb && !cptb.isObjectDrawn(this)) cptb.onObjectEnter(this);
		a.responsive && g && (a.updateVarText(this.element, !0, !0), this.element && (g = a.D[this.element.id]) && (void 0 != g.rpvt || void 0 != g.vt) && a.updateVarText(this.element, !0, !0))
	};
	a.FrameSet.prototype.reset = function (c) {
		if ("undefined" != typeof cptb && !cptb.isObjectReset(this)) cptb.onObjectExit(this);
		var d = 0;
		delete a.ropMap[this.element.id];
		a.FrameSet.superClass.reset.call(this,
			c);
		this.isStarted = !1;
		var e = !0;
		this.itemData.st && (e = !1);
		c && this.children && (this.children[0] && this.children[0].continueToNextSlide) && (e = !1);
		e && (this.element.style.display = "none");
		if (void 0 != this.pa && (this.setAttribute("handled", !1), this.setAttribute("clickedOnce", !1), void 0 != this.dependents))
			for (d = 0; d < this.dependents.length; ++d) a.hide(this.dependents[d]);
		for (d = 0; d < this.htmlDependents.length; ++d) this.htmlDependents[d].style.visibility = "hidden";
		void 0 != this.psv && this.setAttribute("pausedOnce", !1);
		e &&
			this.element.drawingBoard && (this.element.drawingBoard.style.opacity = 0, this.element.drawingBoard.style.display = "none")
	};
	a.FrameSet.prototype.ApplyMotion = function (a, d) {
		if (null != this.motionPathMover) try {
			this.motionPathMover(this, a, d)
		} catch (e) {}
	};
	a.FrameSet.prototype.handleRewind = function () {
		void 0 != this.pa && (this.setAttribute("handled", !1), this.setAttribute("clickedOnce", !1));
		void 0 != this.psv && this.setAttribute("pausedOnce", !1);
		void 0 != this.type && a.kCPOTWidgetItem == this.type && !this.itemData.rp && 1 == this.children.length &&
			this.reset()
	};
	a.FrameSet.prototype.onEndOfSlide = function (c) {
		var d = this.isStarted && !this.isInRange(cpInfoCurrentFrame);
		d || (d = a.kCPOTSuccessCaptionItem == this.type || a.kCPOTFailureCaptionItem == this.type || a.kCPOTHintCaptionItem == this.type || a.kCPOTAutoShape == this.type && 1 != this.getAttribute("rp") || a.kCPRolloverCaptionItem == this.type || a.kCPRolloverImageItem == this.type || a.kCPOTRolloverAutoShape == this.type || a.kCPOTSuccessShapeItem == this.type || a.kCPOTFailureShapeItem == this.type || a.kCPOTHintShapeItem == this.type) ||
			this.type == a.kCPOTWidgetItem && !this.itemData.rp && (d = !0);
		d ? this.reset(c == a.Timeline.ReasonForUpdate.PROGRESS) : a.kCPOTAutoShape == this.type && 1 == this.getAttribute("uab") && (c = this.children[0]) && c.removeMouseHandlers()
	}
})(window.cp);
(function (a) {
	a.Timeline = function (b) {
		a.Timeline.baseConstructor.call(this, b);
		this.updateTimeline();
		this.pools = this.getAttribute("pools");
		this.currentSlideStartFrame = this.nextSlideStartFrame = this.previousSlideStartFrame = -1;
		this.movieEndAction = this.getAttribute("endAction");
		this.fadeInAtStart = this.getAttribute("fadeInAtStart");
		this.fadeOutAtEnd = this.getAttribute("fadeOutAtEnd");
		this.noSkipFrames = {};
		this.m_useWidgetVersion7 = this.getAttribute("useWidgetVersion7");
		var c = this;
		this.paused = !1;
		this.cStart =
			this.lastFrame + 1;
		this.cEnd = -1;
		this.imagesToBeCleared = [];
		this.slideDiv = null;
		this.eventListeners = [];
		this.feedbacks = [];
		this.m_keyManager = new a.KeyManager;
		this.m_clickManager = new a.ClickManager;
		this.parentChildMap = [];
		this.videoCCItems = this.audioCCItems = null;
		this.curVidCCItem = this.curAudCCItem = -1;
		this.itemsNotLoaded = [];
		this.interactivePauseFrame = -1;
		this.m_interactionManagers = [];
		this.mainSlideDiv = this.element.children[0];
		this.mainSlideDiv.style.display = "block";
		if (b = document.getElementById("cpDocument")) jQuery(document).keydown(function (a) {
			c.m_keyManager.handleKeyDown(a)
		}),
		jQuery(document).keyup(function (a) {
			c.m_keyManager.handleKeyUp(a)
		}), jQuery(document).focusout(function (a) {
			c.m_keyManager.handleFocusOut(a)
		});
		b.style.backgroundColor = a.D.project.htmlBgColor;
		this.verbose = !1
	};
	a.inherits(a.Timeline, a.DisplayObject);
	a.Timeline.prototype.updateTimeline = function () {
		this.slides = (this.getAttribute("slides") || "").split(",");
		this.questions = [];
		var a = this.getAttribute("questions") || "";
		0 < a.length && (this.questions = a.split(","));
		this.lastFrame = this.getAttribute("to")
	};
	a.Timeline.prototype.addToItemNotLoaded =
		function (a) {
			this.itemsNotLoaded.push(a)
	};
	a.Timeline.prototype.removeFromItemNotLoaded = function (a) {
		for (var c = 0; c < this.itemsNotLoaded.length; ++c)
			if (a == this.itemsNotLoaded[c]) {
				this.itemsNotLoaded.splice(c, 1);
				break
			}
	};
	a.Timeline.prototype.hasItemsLoaded = function () {
		var b = 0 < this.itemsNotLoaded.length;
		a.verbose && 0 < b && a.log(b + " widgets pending");
		return !b
	};
	a.Timeline.prototype.addToParentChildMap = function (a, c) {
		var d = 0,
			e = "",
			d = null;
		if (!("" == a || "" == c)) {
			for (d = 0; d < this.parentChildMap.length; ++d)
				if (e = this.parentChildMap[d].m_parent,
					e == a) {
					this.parentChildMap[d].m_childArr.push(c);
					return
				}
			d = {};
			d.m_parent = a;
			d.m_childArr = [];
			d.m_childArr.push(c);
			this.parentChildMap.push(d)
		}
	};
	a.Timeline.prototype.clearParentChildMap = function () {
		this.parentChildMap = []
	};
	a.Timeline.prototype.getChildrenForParent = function (a, c) {
		var d = 0,
			e = "";
		if ("" != a)
			for (d = 0; d < this.parentChildMap.length; ++d)
				if (e = this.parentChildMap[d].m_parent, e == a)
					for (e = e = 0; e < this.parentChildMap[d].m_childArr.length; ++e) c.push(this.parentChildMap[d].m_childArr[e]), this.getChildrenForParent(this.parentChildMap[d].m_childArr[e],
						c)
	};
	a.Timeline.prototype.addKeyHandler = function (a) {
		a && this.m_keyManager.addHandler(a)
	};
	a.Timeline.prototype.getClickManager = function () {
		return this.m_clickManager
	};
	a.Timeline.prototype.setupSlideItemDiv = function (b, c, d, e, f, h, i) {
		var j = "canvas",
			h = "cp-shape",
			d = !0;
		if (a.kCPHighlight == b.t) h = "cp-hb";
		else if (a.kCPRolloverAreaItem == b.t) h = "cp-rai";
		else if (a.kCPZoomSource == b.t) h = "cp-zoom";
		else if (a.kCPMouse == b.t) d = !0;
		else if (a.kCPMouseClick == b.t) h = "cp-mc", d = !0;
		else if (a.kCPOTReviewArea == b.t) j = "div", h = "cp-questionSlideReviewLabel",
		d = !1;
		else if (a.kCPOTProgressIndicator == b.t) j = "div", h = "cp-progressSlideLabel", d = !1;
		else if (a.kCPOTScoringResult == b.t) j = "div", h = "cp-resultSlideLabel", d = !1;
		else if (a.kCPTypingText == b.t) j = "div", h = "cp-typingtext";
		else if (a.kCPOTTextEntryBoxItem == b.t) j = "div", h = "cp-input", d = !1;
		else if (a.kCPOTLineItem == b.t) h = "cp-line";
		else if (a.kCPOTAnswerArea == b.t || a.kCPOTMatchingQuestionArea == b.t || a.kCPOTMatchingAnswerArea == b.t || a.kCPOTLikertQuestionArea == b.t || a.kCPOTLikertTotalGroupArea == b.t) h = "cp-answerArea";
		else if (a.kCPOTStageQuestionText ==
			b.t || a.kCPOTStageQuestionTitle == b.t) h = "cp-rectWithText";
		else if (a.kCPOTWidgetItem == b.t) j = "div", h = "cp-widget", d = this.m_useWidgetVersion7;
		else if (a.kCPOTWebObject == b.t) {
			if (j = "div", h = "cp-WebObject", d = this.m_useWidgetVersion7, c.mdi) {
				var g = a.D[c.mdi];
				g && (d = void 0 != g.wosvg)
			}
		} else if (a.kCPOTTAItem == b.t) j = "div", h = "cp-ta";
		else if (a.kCPOTFLVItem == b.t) j = "div", h = "cp-eventVideo", d = !0;
		else if (a.kCPOTVideo == b.t) j = "div", h = "cp-slideVideo", d = !0;
		else if (a.kCPFullMotion == b.t) j = "div", h = "cp-fmrVideo", d = !0;
		else if (a.kCPOTVideoResource ==
			b.t) j = "div", h = "cp-cpvcVideo", d = !0;
		else if (a.kCPOTAnimationItem == b.t) j = "div", h = "cp-animationItem", d = !0;
		else if (a.extObjInfo)
			for (g = 0; g < a.extObjInfo.length; ++g)
				if (a.IsValidObj(a.extObjInfo[g].cb)) {
					var k = {};
					k.elemType = j;
					k.classType = h;
					k.rewrap = d;
					if (a.extObjInfo[g].cb(b.t, k)) {
						j = k.elemType;
						h = k.classType;
						d = k.rewrap;
						break
					}
				}
		g = "c";
		a.kCPOTStageAnswerItem == b.t && (k = a.D[b.n + "c"], k = k.at, k == a.kCPOTStageSingleChoiceMultipleAnswer ? (g = "r", h = "cp-singleChoiceInput") : k == a.kCPOTStageMultipleChoiceMultipleAnswer ? (g = "ch",
			h = "cp-multipleChoiceInput") : k == a.kCPOTStageSequenceAnswer ? (g = "seq", h = "cp-sequenceInput") : k == a.kCPOTStageMatchingAnswer && (g = "mtcha", h = "cp-matchingAnswer"), j = "div", d = !1);
		a.kCPOTQuestionFillBlank == b.t && (h = "cp-fibAnswer", g = "fib", j = "div", d = !1);
		a.kCPOTStageShortAnswer == b.t && (h = "cp-shortAnswer", g = "sha", j = "div", d = !1);
		a.kCPOTItemHotSpot == b.t && (h = "cp-hotspotInput", g = "hotspot", j = "div", d = !1);
		a.kCPOTStageMatchingQuestion == b.t && (h = "cp-matchingItem", g = "mtchi", j = "div", d = !1);
		if (a.kCPOTStageLikertQuestion == b.t) h = "cp-likertItem",
		g = "li", j = "div", d = !1;
		else if (a.kCPOTOvalItem == b.t || a.kCPOTRectangleItem == b.t || a.kCPOTPolygon == b.t || a.kCPOTAnswerArea == b.t || a.kCPOTMatchingQuestionArea == b.t || a.kCPOTMatchingAnswerArea == b.t || a.kCPOTLikertQuestionArea == b.t || a.kCPOTLikertTotalGroupArea == b.t) h = "cp-drawingItem";
		else if (a.kCPOTTitleAutoShape == b.t || a.kCPOTSubTitleAutoShape == b.t || a.kCPOTAutoShape == b.t || a.kCPOTRolloverAutoShape == b.t || a.kCPOTStageCorrectFeedbackShape == b.t || a.kCPOTSuccessShapeItem == b.t || a.kCPOTStageIncorrectFeedbackShape == b.t ||
			a.kCPOTFailureShapeItem == b.t || a.kCPOTHintShapeItem == b.t || a.kCPOTStagePartialCorrectFeedbackShape == b.t || a.kCPOTRetryFeedbackShape == b.t || a.kCPOTIncompleteFeedbackShape == b.t || a.kCPOTTimeoutFeedbackShape == b.t || a.kCPOTAnswerFeedbackShape == b.t) h = "cp-autoShape";
		else if (a.responsive && (a.kCPOTScorableButtonItem == b.t || a.kCPOTRetakeButton == b.t || a.kCPOTStageQuestionNextButton == b.t || a.kCPOTStageQuestionClearButton == b.t || a.kCPOTStageQuestionBackButton == b.t || a.kCPOTStageQuestionReviewModeNextButton == b.t || a.kCPOTStageQuestionReviewModeBackButton ==
			b.t || a.kCPOTStageQuestionSubmitButton == b.t || a.kCPOTScoringReviewButton == b.t || a.kCPOTScoringContinueButton == b.t || a.kCPOTSubmitAllButton == b.t || a.kCPOTResetButton == b.t || a.kCPOTUndoButton == b.t || a.kCPOTDDSubmitButton == b.t || a.kCPOTTextEntryButtonItem == b.t)) k = a.D[b.n], k.subt != a.kImageButton && (k.subt == a.kTextButton ? (j = "div", h = "cp-textbutton") : h = "cp-drawingItem");
		this.SetItemVisibility(b);
		i ? j = a(b.n + g) : (j = a.newElem(j), j.id = b.n + g, j.setAttribute("class", h));
		a.kCPOTStageAnswerItem == b.t && (c = a.D[b.n + "c"], k = c.at,
			k == a.kCPOTStageSequenceAnswer && (j.setAttribute("tabIndex", "-1"), j.setAttribute("aria-label", c.accstr), a.removeAccessibilityOutline(j), j.setAttribute("role", "img")));
		if (a.kCPOTTextEntryBoxItem == b.t && b.d && (b.d.hc && (0 < b.d.hc.length && a.device != a.IDEVICE && a.device != a.ANDROID) && (j.setAttribute("onmouseover", 'cp.showHint("' + b.d.hc + '",this)'), f.setAttribute("onmousemove", 'cp.showHint("' + b.d.hc + '",this)'), j.setAttribute("onmouseout", 'cp.hideHint("' + b.d.hc + '",this)')), b.d.cur)) j.style.cursor = "text";
		h = void 0;
		d ? (i ? f = a("re-" + j.id) : (f = a.newElem("div"), f.id = "re-" + j.id, f.setAttribute("tabIndex", -1), f.setAttribute("class", "cp-rewrap"), f.appendChild(j)), a.removeAccessibilityOutline(f), h = f, (!i || !(a.kCPOTWidgetItem == b.t || a.kCPOTWebObject == b.t)) && e.appendChild(f)) : (h = f, i ? a.kCPOTWidgetItem != b.t && a.kCPOTWebObject != b.t && e.appendChild(f) : f.appendChild(j));
		h.style.zIndex = c.zIndex;
		a.fixWebkitScaling(h)
	};
	a.Timeline.prototype.SetItemVisibility = function (b) {
		if (b && a.kCPOTRetakeButton == b.t && a.movie.playbackController && (b =
			a.D[b.n])) {
			var b = a.D[b.mdi],
				c = a.movie.playbackController.GetQuizController();
			b && c && (c = c.CanShowRetakeButton(), b.visible = c, b.effectiveVi = c)
		}
	};
	a.setupSlideBGDivAndCanvasInternal = function (b, c, d) {
		var e = a.D.project.w,
			f = a.D.project.h,
			h = !1,
			i = c.firstChild;
		i || (i = a.newElem("div"), i.setAttribute("class", "cp-frameset"), h = !0);
		var j = i.id;
		i.id = "Slide" + b.id;
		i.style.zIndex = "0";
		a.responsive ? (i.style.width = "100%", i.style.height = "100%") : (i.style.left = "0px", i.style.width = e + "px", i.style.height = f + "px");
		h && c.appendChild(i);
		var g, c = !1;
		h ? c = !1 : i.firstChild && "__bgDiv__" == i.firstChild.id && (g = i.firstChild, c = !0);
		var k = !1,
			l = !1;
		if (b.gf)
			if (l = !0, c || (g = a.newElem("div"), g.id = "__bgDiv__", k = !0), a.browser_supports_svg) {
				var n = a.getGradientSvgStr(b.gf, e, f, a("project").clientWidth / e, a("project").clientHeight / f);
				0 < n.length && (g.setAttribute("class", ""), g.style.position = "absolute", a.responsive ? (g.style.width = "100%", g.style.height = "100%") : (g.style.width = e + "px", g.style.height = f + "px"), g.innerHTML = n)
			} else g.setAttribute("class", "cp-gf"), g.style.position =
				"absolute", a.responsive ? (g.style.width = "100%", g.style.height = "100%") : (g.style.width = e + "px", g.style.height = f + "px"), g.firstChild && "CANVAS" == g.firstChild.nodeName ? g.firstChild.id = "Slide" + b.id + "gf" : g.innerHTML = '<canvas id="Slide' + b.id + 'gf"></canvas>';
			else b.imgf && (l = !0, c || (g = a.newElem("div"), g.id = "__bgDiv__", k = !0), g.setAttribute("class", "cp-imgf"), g.style.position = "absolute", a.responsive ? (g.style.width = "100%", g.style.height = "100%") : (g.style.width = e + "px", g.style.height = f + "px"), g.firstChild && "CANVAS" ==
				g.firstChild.nodeName ? g.firstChild.id = "Slide" + b.id + "imgf" : g.innerHTML = '<canvas id="Slide' + b.id + 'imgf"></canvas>');
		l ? k && (i.firstChild ? i.insertBefore(g, i.firstChild) : i.appendChild(g)) : c && i.removeChild(g);
		var m;
		h || (m = document.getElementById(j + "c"));
		m || (m = a.newElem("canvas"), m.setAttribute("class", "cp-shape"), i.appendChild(m));
		m.id = "Slide" + b.id + "c";
		f = a.D[m.id];
		g = f.b;
		h = g[2] - g[0];
		j = g[3] - g[1];
		e = !0;
		if (a.responsive) {
			k = a("project").clientWidth;
			l = a("project").clientHeight;
			g = h;
			var c = j,
				n = k / h,
				q = l / j,
				n = n < q ? n : q;
			f.aip ?
				(e = !0, g *= n, c *= n) : (h > k && (g = k), j > l && (c = l));
			if (k = f.css[a.ResponsiveProjWidth].crop)
				if ((l = a.movie.im.images[f.ip]) && l.nativeImage && l.nativeImage.complete)
					if (k = a.getIntersectionRect([0, 0, l.nativeImage.width, l.nativeImage.height], [k.x, k.y, g, c]), 0 <= k.w && k.w < g || 0 <= k.h && k.h < c) e = !0;
			m.style.width = g + "px";
			m.style.height = c + "px";
			m.style.left = (a("project").clientWidth - g) / 2 + "px";
			m.style.top = (a("project").clientHeight - c) / 2 + "px"
		} else m.style.width = h + "px", m.style.height = j + "px", m.style.left = g[0] + "px", m.style.top = g[1] +
			"px"; if (d && (0 < h && 0 < j) && (d = f.aip ? f.aip : f.ip))(d = a.movie.im.images[d]) && d.nativeImage.complete && m.getContext("2d").drawImage(d.nativeImage, 0, 0, m.clientWidth, m.clientHeight);
		i.style.backgroundColor != b.bc && e && (i.style.backgroundColor = b.bc)
	};
	a.Timeline.prototype.isSlideBGCropped = function () {
		if (!a.responsive || !this.currentSlide || !a.D[this.currentSlide.mdi]) return !1;
		var b = a.D[this.currentSlide.mdi];
		if (!b) return !1;
		b = b.css;
		if (!b) return !1;
		b = b[a.ResponsiveProjWidth];
		if (!b) return !1;
		var c = void 0 != b.crop;
		c && (this.currentSlide.cropX =
			b.crop.x, this.currentSlide.cropY = b.crop.y);
		return c
	};
	a.Timeline.prototype.setupSlideDiv = function (b, c) {
		a.setupSlideBGDivAndCanvasInternal(b, c, !1);
		var d = c.firstChild,
			e = document.getElementById("Slide" + b.id + "c");
		d.offsetHeight = d.offsetHeight;
		e.offsetHeight = e.offsetHeight;
		if ("Question Slide" == b.st) {
			c.onclick = void 0;
			var f = a.getQuestionObjectName(d.id);
			(f = a.D[f]) && ("Hotspot" != f.qtp ? a.removeGestureEvent(c, a.GESTURE_EVENT_TYPES.TAP) : a.registerGestureEvent(c, a.GESTURE_EVENT_TYPES.TAP, a.handleClick))
		} else a.registerGestureEvent(c,
			a.GESTURE_EVENT_TYPES.TAP, a.handleClick), a.device == a.DESKTOP && (c.onmousemove = a.handleMouseMoveNew);
		this.m_EffectAnimationManager = void 0;
		if (this.m_SlideHasEffects || a.movie.PPTXSlide) this.m_EffectAnimationManager = PPTXLib.initializeAnimationManagerForCPSlide(b);
		if (0 < b.si.length)
			for (var f = b.si, h = 0; h < f.length; ++h) {
				var i = f[h],
					j = a.D[i.n];
				j.zIndex = h;
				var g, k = document.getElementById(i.n);
				if (k) g = k, this.setupSlideItemDiv(i, j, b, d, g, e, !0), 1 == j.rp && -1 !== g.tabIndex && (1 == j.rpa ? g.setAttribute("tabIndex", 2499) : g.setAttribute("tabIndex",
					2500 + j.zIndex));
				else {
					g = a.newElem("div");
					g.id = i.n;
					a.device == a.IDEVICE || a.device == a.ANDROID ? a.kCPOTFLVItem == i.t || a.kCPOTVideo == i.t || a.kCPFullMotion == i.t || a.kCPOTVideoResource == i.t ? g.setAttribute("class", "cp-videoframeset") : g.setAttribute("class", "cp-frameset") : g.setAttribute("class", "cp-frameset");
					this.setupAccessibility(i, g);
					this.addHyperLinks(i, g);
					a.kCPOTTextEntryButtonItem == i.t && a.registerGestureEvent(g, a.GESTURE_EVENT_TYPES.TAP, function (b) {
						return function () {
							a.disableInteractions || a.TEBValidator(b)
						}
					}(g));
					if ((a.kCPOTScorableButtonItem == i.t || a.kCPOTClickBoxItem == i.t || a.kCPOTAutoShape == i.t) && i.d)
						if (i.d.hc && (0 < i.d.hc.length && a.device != a.IDEVICE && a.device != a.ANDROID) && (g.setAttribute("onmouseover", 'cp.showHint("' + i.d.hc + '",this)'), g.setAttribute("onmouseout", 'cp.hideHint("' + i.d.hc + '",this)')), i.d.cur) a.kCPOTAutoShape == i.t ? j.handCursor = !0 : g.style.cursor = "pointer";
					this.setupSlideItemDiv(i, j, b, d, g, e);
					!0 === j.immo && -1 !== g.tabIndex && (b.mmot ? g.setAttribute("tabIndex", 2499) : g.setAttribute("tabIndex", 2500 + f.length))
				}
				j =
					j.zIndex;
				a.kCPOTWidgetItem == i.t || a.kCPOTWebObject == i.t ? (this.m_useWidgetVersion7 || !k) && c.appendChild(g) : c.appendChild(g);
				g.style.zIndex = j;
				a.fixWebkitScaling(g)
			}
		a.createAlternativeAccessibleText(d, b.accstr, "img");
		a.removeAccessibilityOutline(d);
		f = b.accstr;
		0 === a.D.pref.acc && (f = " ");
		a.SAFARI === a.browser ? (d.setAttribute("role", "img"), d.setAttribute("aria-label", f)) : (e = a.newElem("p"), e.innerHTML = f, f = a.newElem("div"), f.id = d.id + "accStr2", f.style.opacity = 0, f.style.width = "0px", f.style.height = "0px", f.style.left =
			"-1999px", f.style.position = "fixed", f.appendChild(e), f.setAttribute("tabIndex", "2400"), d.appendChild(f))
	};
	a.Timeline.prototype.addHyperLinks = function (b, c) {
		var d = function (b) {
			return function () {
				a.hyperlinkClick(b)
			}
		};
		if (b) {
			var e = a.D[b.n + "c"];
			if (void 0 != e && !1 != e.hasOwnProperty("hl"))
				for (var e = e.hl.split(","), f = 0; f < e.length; ++f) {
					var h = e[f];
					if ("" != h) {
						var i = a.D[h];
						if (void 0 == i) break;
						if ("" == i.oca) break;
						var j = i.b;
						if ("" == j) break;
						var g;
						if (a.responsive) {
							if (g = a(h)) break;
							g = h.split("_");
							g = g[0].substr(2);
							g = document.getElementsByClassName(g);
							g = g[0];
							if (!g) continue
						} else g = a.newElem("div");
						g.id = h;
						g.setAttribute("tabIndex", i.ti);
						g.setAttribute("aria-label", i.accstr);
						1 === a.D.pref.hsr && a.removeAccessibilityOutline(g);
						g.setAttribute("role", "link");
						a.responsive || (g.style.display = "block", g.style.position = "absolute", g.style.width = j[2] - j[0] + "px", g.style.height = j[3] - j[1] + "px", g.style.top = j[1] + "px", g.style.left = j[0] + "px", g.style.backgroundColor = "#FFFFFF", g.style.opacity = 0, c.appendChild(g));
						a.responsive || a.registerGestureEvent(g, a.GESTURE_EVENT_TYPES.TAP,
							d(h));
						g.style.cursor = "pointer"
					}
				}
		}
	};
	a.Timeline.prototype.setupAccessibility = function (b, c) {
		if (b) {
			var d = a.D[b.n + "c"];
			if (void 0 != d && !1 !== d.hasOwnProperty("accstr")) {
				var e = d.ti,
					f = a.getAccessibilityString(d);
				b.t == a.kCPOTCaptionItem || b.t == a.kCPOTTitleAutoShape || b.t == a.kCPOTScoringResultItem || a.kCPOTSuccessCaptionItem == b.t || a.kCPOTImageBoxItem == b.t || a.kCPOTFailureCaptionItem == b.t || a.kCPOTHintCaptionItem == b.t || a.kCPOTIncompleteFeedbackItem == b.t || a.kCPOTStageCorrectFeedback == b.t || a.kCPOTStageIncorrectFeedback ==
					b.t || a.kCPOTStagePartialCorrectFeedback == b.t || a.kCPOTTimeoutFeedbackItem == b.t || a.kCPOTRetryFeedbackItem == b.t || a.kCPOTFillBlankCaption == b.t || a.kCPOTStageMatchingQuestion == b.t || a.kCPOTStageMatchingAnswer == b.t || a.kCPOTStageAnswerItem == b.t || a.kCPOTQuestionColumn == b.t || a.kCPRolloverCaptionItem == b.t || a.kCPRolloverImageItem == b.t || a.kCPOTStageCorrectFeedbackShape == b.t || a.kCPOTSuccessShapeItem == b.t || a.kCPOTStageIncorrectFeedbackShape == b.t || a.kCPOTFailureShapeItem == b.t || a.kCPOTHintShapeItem == b.t || a.kCPOTStagePartialCorrectFeedbackShape ==
					b.t || a.kCPOTRetryFeedbackShape == b.t || a.kCPOTIncompleteFeedbackShape == b.t || a.kCPOTTimeoutFeedbackShape == b.t ? (c.setAttribute("tabIndex", -1), a.kCPOTFillBlankCaption == b.t ? a.createAlternativeAccessibleText(c, d.fibText, "img") : a.createAlternativeAccessibleText(c, f, "img"), a.removeAccessibilityOutline(c)) : a.kCPOTStageMatchingAnswerEntry == b.t ? (c.setAttribute("tabIndex", -1), a.createAlternativeAccessibleText(c, "", "img"), a.removeAccessibilityOutline(c)) : b.t == a.kCPOTScorableButtonItem || b.t == a.kCPOTRetakeButton ||
					b.t == a.kCPOTScoringReviewButton || b.t == a.kCPOTScoringContinueButton ? (c.setAttribute("tabIndex", e), a.createAlternativeAccessibleText(c, f, "button"), 1 === a.D.pref.hsr && a.removeAccessibilityOutline(c)) : b.t == a.kCPOTTextEntryButtonItem ? (c.setAttribute("tabIndex", e), a.createAlternativeAccessibleText(c, f, "button"), 1 === a.D.pref.hsr && a.removeAccessibilityOutline(c)) : b.t == a.kCPOTClickBoxItem ? (c.setAttribute("tabIndex", -1), a.removeAccessibilityOutline(c), a.createAlternativeAccessibleText(c, f, "button")) : b.t == a.kCPOTLineItem ||
					b.t == a.kCPOTOvalItem || b.t == a.kCPOTRectangleItem || b.t == a.kCPOTPolygon || b.t == a.kCPOTAutoShape || b.t == a.kCPOTWebObject ? (c.setAttribute("tabIndex", e), a.createAlternativeAccessibleText(c, f, "img"), 1 === a.D.pref.hsr && a.removeAccessibilityOutline(c)) : b.t == a.kCPOTStageQuestionText || b.t == a.kCPOTStageQuestionTitle ? (c.setAttribute("tabIndex", -1), a.removeAccessibilityOutline(c), a.createAlternativeAccessibleText(c, f, "img")) : b.t == a.kCPOTStageQuestionNextButton || b.t == a.kCPOTStageQuestionClearButton || b.t == a.kCPOTStageQuestionBackButton ||
					b.t == a.kCPOTStageQuestionReviewModeBackButton || b.t == a.kCPOTStageQuestionReviewModeNextButton || b.t == a.kCPOTStageQuestionSubmitButton || b.t == a.kCPOTSubmitAllButton ? (c.setAttribute("tabIndex", e), a.createAlternativeAccessibleText(c, f, "button"), 1 === a.D.pref.hsr && a.removeAccessibilityOutline(c)) : b.t == a.kCPOTAnimationItem || b.t == a.kCPOTTAItem || b.t == a.kCPOTTitleAutoShape || b.t == a.kCPOTSubTitleAutoShape ? (c.setAttribute("tabIndex", -1), a.removeAccessibilityOutline(c), a.createAlternativeAccessibleText(c, f, "img")) :
					b.t == a.kCPOTFLVItem ? (c.setAttribute("tabIndex", e), a.createAlternativeAccessibleText(c, f, "presentation")) : b.t == a.kCPOTWidgetItem && (c.setAttribute("tabIndex", e), a.createAlternativeAccessibleText(c, f, "application"), 1 === a.D.pref.hsr && a.removeAccessibilityOutline(c))
			}
		}
	};
	a.Timeline.prototype.getSlideDiv = function () {
		return this.mainSlideDiv
	};
	a.Timeline.prototype.canUpdateToFrame = function (a, c) {
		var d = c;
		d || (d = this.getSlideIndexForFrame(a));
		return this.canUpdateToSlide(d)
	};
	a.Timeline.prototype.canUpdateToSlide =
		function (b) {
			return b >= this.slides.length || 0 > b ? !1 : a.movie.playbackController ? "" == a.movie.playbackController.AllowedToGoToSlide(cpInfoCurrentSlideIndex, b) : !0
	};
	a.Timeline.prototype.getSlideIndexForFrame = function (b) {
		for (var c = 0; c < this.slides.length; ++c) {
			var d = a.D[this.slides[c]],
				e = d.to;
			if (b >= d.from && b <= e) return c
		}
		return -1
	};
	a.Timeline.prototype.getSlideNameForIndex = function (a) {
		return 0 <= a && a < this.slides.length ? this.slides[a] : ""
	};
	a.Timeline.prototype.getSlideIndexForName = function (a) {
		if (void 0 == a || "" == a) return -1;
		for (var c = 0; c < this.slides.length; ++c)
			if (a == this.slides[c]) return c;
		return -1
	};
	a.Timeline.prototype.updatePlaybar = function (b) {
		a.verbose && a.log("update playbar " + b);
		a.responsive && (a.PB && a.PB.playbarCreated && a.PB.rootObj && a.PB.rootObj.slider) && (this.frameSlider = a.PB.rootObj.slider);
		this.frameSlider || (this.frameSlider = document.getElementById("playbarSlider"));
		void 0 != this.frameSlider && this.frameSlider.updateSlider && this.frameSlider.updateSlider(b - (Math.floor(a.movie.framesToSkipForPlaybar) - a.movie.framesToSkipForPlaybar))
	};
	a.Timeline.prototype.updateToc = function (b) {
		a.loadedModules.toc && a.D.tocProperties.showTotalD && (this.toc || (this.toc = document.getElementById("tocFooterText")), void 0 != this.toc && this.toc.updateTime(b))
	};
	a.Timeline.prototype.updateSlideNumber = function () {};
	a.Timeline.prototype.setAdjacentSlidesStartFrames = function (b, c) {
		this.updateSlideNumber(c);
		var d = a.D[b[c - 1]];
		this.previousSlideStartFrame = d ? d.from : -1;
		this.nextSlideStartFrame = (d = a.D[b[c + 1]]) ? d.from : -1
	};
	a.Timeline.prototype.AddEventListeners = function (b) {
		if (0 <
			b.si.length)
			for (var b = b.si, c = 0; c < b.length; ++c) {
				var d = b[c],
					e = a.D[d.n];
				if ((d = a(d.n)) && e) {
					var f = !1,
						h = {};
					if (a.responsive) {
						if (e.rpvt) {
							var i = e.rpvt,
								j;
							for (j in i) {
								var g = i[j].vt;
								h[j] = [];
								h[j].push(g)
							}
						}
					} else h[a.D.project.w] = [], h[a.D.project.w].push(e.vt);
					for (var k in h) {
						i = h[k];
						void 0 == e.vars && (void 0 == e.varLens && void 0 == e.texts) && (e.vars = {}, e.varLens = {}, e.texts = {});
						for (g = 0; g < i.length; ++g)
							if (text = i[g], void 0 != text && "" != text)
								if (void 0 == e.vars[k] && void 0 == e.varLens[k] && void 0 == e.texts[k]) {
									var l = [],
										n = [],
										m = [],
										q = text.split("$$");
									if (3 <= q.length)
										for (var o = 0; o < q.length; o += 2) {
											if (m.push(q[o]), o + 1 < q.length) {
												var p = q[o + 1];
												if (!a.vm || !a.vm.hasOwnProperty(p)) m.push("$$" + p + "$$");
												else {
													var r = 0;
													p && "" != p && (f = a.em.addEventListener(d, a.SPECIFIC_VARIABLE_CHANGED_EVENT, p), r = a.vm.getVariableLength(p));
													void 0 == p && (p = "");
													l.push(p);
													n.push(r)
												}
											}
										} else m.push(text);
									e.vars[k] = l;
									e.varLens[k] = n;
									e.texts[k] = m
								} else
									for (var s in e.vars)
										if (l = e.vars[s])
											for (o = 0; o < l.length; ++o) a.em.addEventListener(d, a.SPECIFIC_VARIABLE_CHANGED_EVENT, l[o])
					}
					f &&
						this.eventListeners.push(d)
				}
			}
	};
	a.Timeline.prototype.AddFeedback = function (a) {
		a && this.feedbacks.push(a)
	};
	a.Timeline.prototype.RemoveFeedbacks = function (b) {
		for (var c = 0, d = [], c = 0; c < this.feedbacks.length; ++c) a.FeedbackCloseReason.SLIDE_CHANGE == b || this.feedbacks[c].canHide(b) ? this.feedbacks[c].hide() : d.push(this.feedbacks[c]);
		this.feedbacks = [];
		for (c = 0; c < d.length; ++c) this.feedbacks.push(d[c])
	};
	a.Timeline.prototype.RemoveFeedback = function (a) {
		for (var c = 0; c < this.feedbacks.length; ++c)
			if (this.feedbacks[c] == a) {
				this.feedbacks.splice(c,
					1);
				break
			}
	};
	a.Timeline.prototype.UpdateFeedbacks = function () {
		for (var a = 0; a < this.feedbacks.length; ++a) this.feedbacks[a].update()
	};
	a.Timeline.prototype.RemoveEventListeners = function () {
		for (var b = 0; b < this.eventListeners.length; ++b) a.em.removeEventListener(this.eventListeners[b], a.SPECIFIC_VARIABLE_CHANGED_EVENT);
		this.eventListeners.length = 0
	};
	a.Timeline.prototype.getFrameset = function (a) {
		for (var c = 0, c = 0; c < this.children.length; ++c)
			if (a == this.children[c].element.id) return this.children[c];
		return null
	};
	a.Timeline.prototype.correctReWrapZOrder =
		function (b, c) {
			if (b && (c && b.id != c.id) && !("cp-rewrap" != c.className || "cp-rewrap" != b.className)) {
				var d = c.parentElement;
				if (d)
					for (var e = d.firstChild; e.id != c.id; e = e.nextSibling)
						if (e.id != b.id && "cp-rewrap" == e.className) {
							var f = e.firstChild;
							if (f && (f = f.firstChild) && "VIDEO" == f.tagName) continue;
							a.verbose && a.log("inserting " + e.id + " before " + b.id);
							d.insertBefore(e, b)
						}
			}
	};
	a.Timeline.prototype.correctParentZOrder = function (b, c) {
		if (b && (c && b.id != c.id) && !("cp-frameset" != c.className || "cp-frameset" != b.className)) {
			var d = c.parentElement;
			if (d)
				for (var e = d.firstChild; e.id != c.id; e = e.nextSibling) e.id != b.id && "cp-frameset" == e.className && (a.verbose && a.log("inserting " + e.id + " before " + b.id), d.insertBefore(e, b))
		}
	};
	a.Timeline.prototype.selectivelyRemoveHTMLObjects = function (b) {
		var c = b.firstChild;
		if (c) {
			var d = {};
			if (this.children)
				for (var e = 1; e < this.children.length; ++e) {
					var f = this.children[e],
						h = !1;
					if (f.itemData.rp || f.itemData.ddv) f.itemData.from <= cpInfoCurrentFrame && f.itemData.to >= cpInfoCurrentFrame && (h = !0);
					if (a.kCPOTVideo == f.type) {
						var i = f.children[0];
						i && i.element && (i = i.element.firstChild) && "VIDEO" == i.tagName && (h = !0)
					} else if (a.IDEVICE == a.device || a.device == a.ANDROID)
						if (a.kCPOTFLVItem == f.type || a.kCPFullMotion == f.type || a.kCPOTVideo == f.type || a.kCPOTVideoResource == f.type)
							if ((i = f.children[0]) && i.element)(i = i.element.firstChild) && "VIDEO" == i.tagName && (h = !0);
					if (h) {
						for (var j in f.children) i = f.children[j], i.element && (h = i.element.parentElement) && ("cp-rewrap" == h.className ? d[h.id] = 1 : d[i.element.id] = 1);
						f.element && (d[f.element.id] = 1);
						if (a.IDEVICE == a.device || a.device ==
							a.ANDROID) f.suppliedElement && (d[f.suppliedElement.id] = 1)
					}
				}
			for (f = c.firstChild; f; f = e)
				if (e = f.nextSibling, f && !("__bgDiv__" == f.id || c.id + "c" == f.id || d[f.id])) f.onmouseover = null, f.onmouseout = null, f.ontouchstart = null, f.ontouchend = null, f.onmousedown = null, f.onmouseup = null, f.ontouchmove = null, f.onclick = null, a.removeGestureEvent(f, a.GESTURE_EVENT_TYPES.TAP), a.verbose && a.log("removing " + f.id), c.removeChild(f);
			for (c = c.nextSibling; c; c = e) e = c.nextSibling, d[c.id] || (c.onmouseover = null, c.onmouseout = null, c.ontouchstart =
				null, c.ontouchend = null, c.onmousedown = null, c.onmouseup = null, c.ontouchmove = null, c.onclick = null, a.removeGestureEvent(c, a.GESTURE_EVENT_TYPES.TAP), a.verbose && a.log("removing " + c.id), b.removeChild(c));
			for (e = this.parentChildMap.length - 1; 0 <= e; --e) d[this.parentChildMap[e].m_parent] || this.parentChildMap.splice(e, 1)
		}
	};
	a.Timeline.prototype.loadAssetsForSlideAtIndex = function (b) {
		a.verbose && a.log("loadAssetsForSlideAtIndex " + b);
		a.movie.pm.loadSlideAssets(b);
		var c = a.movie.pm.numSlidesToAttemptPreloaded(),
			d = !1,
			e =
				a.D.sgMgr;
		if (e && (e = e.sg) && e.length > b)
			for (var e = e[b][1], f = e.length, h = 0; 0 < c-- && h < f;) b < this.slides.length - 1 && a.movie.pm.preloadSlideAssets(e[h][0]), ++h, d = !0;
		d || b < this.slides.length - 1 && a.movie.pm.preloadSlideAssets(b + 1)
	};
	a.Timeline.prototype.addFramesetsForSlideAtIndex = function (b) {
		a.verbose && a.log("addFramesetsForSlideAtIndex " + b);
		var c = a.D[this.slides[b]],
			d = this.getSlideDiv();
		this.RemoveFeedbacks(a.FeedbackCloseReason.SLIDE_CHANGE);
		this.m_keyManager.clearHandlers();
		this.m_clickManager.clearClicks();
		this.selectivelyRemoveHTMLObjects(d);
		this.m_lowestRewrapElementThatIsRestOfProjectAndOnTop = this.m_lowestElementThatIsRestOfProjectAndOnTop = null;
		this.itemsNotLoaded = [];
		this.setupSlideDiv(c, d);
		var e = c.qs.split(",");
		if (this.m_GraphManager) this.m_GraphManager.onSlideJump(b);
		if (a.movie.playbackController) {
			var f = a.movie.playbackController.GetQuizController();
			if (e && "" != e && 0 < e.length) {
				if (!f) return;
				for (var h = 0; h < e.length; ++h) {
					var i = a.getQuestionObject(e[h]);
					i && (this.verbose && a.log("Starting question for : " +
						e[h]), i.m_isStarted = !1)
				}
			}
			f && (b == f.GetAnyScoreSlideIndex() ? (f.GetScore(), !f.GetIsAllowReviewMode() && f.GetIsQuizCompleted() && (a.movie.paused = !0, shouldShowSlide = !1), f.GetCurrentAttempt() >= f.GetNumberOfQuizAttempts() && (f.GetIsAllowReviewMode() && f.SetIsInReviewMode(!0), f.SetIsQuizCompleted(!0)), f.GetIsPassed() && f.SetIsQuizCompleted(!0), f.GetScore()) : shouldShowSlide = !1)
		}
		rewrapChildrenMap = {};
		b = [];
		for (d = d.firstChild; d; d = d.nextSibling)
			if (d.nodeType == Node.ELEMENT_NODE && "IMG" != d.nodeName) {
				e = !1;
				if ("Slide" + c.id ==
					d.id) e = !0;
				else
					for (f = 0; f < c.si.length; ++f)
						if (c.si[f].n == d.id) {
							e = !0;
							break
						} h = (d.className + "").split(" ");
				f = -1 != h.indexOf("cp-frameset") || -1 != h.indexOf("cp-videoframeset");
				h = -1 != h.indexOf("cp-mask");
				if ((f || h) && f) f = a.parseFrameset(d), f.considerForUpdate = e, f.timeline = self, b.push(f)
			}
		this.children = b;
		c = null;
		b = a.D[this.slides[cpInfoCurrentSlideIndex]].iph;
		null != b && 0 < b.length && (c = this.m_interactionManagers[this.slides[cpInfoCurrentSlideIndex]], void 0 == c && (c = a.CreateInteractionManager(b)) && (this.m_interactionManagers[this.slides[cpInfoCurrentSlideIndex]] =
			c), a.SetCurrentInteractionManager(c));
		this.m_EffectAnimationManager && this.m_EffectAnimationManager.start()
	};
	a.Timeline.prototype.getCurrentSlideInteractionManager = function () {
		return this.m_interactionManagers[this.slides[cpInfoCurrentSlideIndex]]
	};
	a.Timeline.prototype.handleRewindForFramesets = function () {
		for (var a = 0; a < this.children.length; ++a) this.children[a].handleRewind()
	};
	a.Timeline.prototype.initializeGraphManager = function () {
		a.D.baq && void 0 != a.D.sgMgr && (this.m_GraphManager = a.movie.playbackController ?
			a.movie.playbackController.GetGraphManager() : new a.SlideGraphManager, void 0 != this.m_GraphManager && this.m_GraphManager.initialize())
	};
	a.Timeline.prototype.createQuestionObjs = function () {
		this.questions = [];
		var b = this.getAttribute("questions") || "";
		0 < b.length && (this.questions = b.split(","));
		for (b = 0; b < this.questions.length; ++b) {
			var c = this.questions[b];
			if ("" != c) {
				var d = a.D[c],
					e = d.sn;
				switch (d.qtp) {
					case "MCQ":
						c = new a.MultipleChoiceQuestion(c, e);
						break;
					case "Hotspot":
						c = new a.HotspotQuestion(c, e);
						break;
					case "Sequence":
						c =
							new a.SequenceQuestion(c, e);
						break;
					case "Matching":
						c = new a.MatchingQuestion(c, e);
						break;
					case "FIB":
						c = new a.FIBQuestion(c, e);
						break;
					case "ShortAnswer":
						c = new a.ShortAnswerQuestion(c, e);
						break;
					case "Widget":
						c = new a.WidgetQuestion(c, e);
						break;
					case "InteractiveItemQuestion":
						c = new a.InteractiveItemQuestion(c, e);
						break;
					case "InteractiveWidgetQuestion":
						c = new a.InteractiveWidgetQuestion(c, e);
						break;
					case "DragDropQuestion":
						d = d.itn;
						c = new a.DragDropQuestion(c, e, d);
						break;
					case "LIKERT":
						d = d.itn;
						c = new a.LikertQuestion(c,
							e, d);
						break;
					default:
						c = new a.Question(c, e)
				}
				if (!c) break;
				a.movie.questionObjs[b] = c
			}
		}
	};
	a.Timeline.prototype.getNextBoundForNoLoad = function (b) {
		b = b < this.slides.length ? b : this.slides.length - 1;
		return a.D[this.slides[b]].to
	};
	a.Timeline.prototype.getPreviousBoundForNoLoad = function (b) {
		return a.D[this.slides[0 <= b ? b : 0]].from
	};
	a.Timeline.prototype.loadSlideAtIndex = function (b) {
		if (!(0 >= this.slides.length)) {
			a.resetDisplayAndIdMap();
			var c = this.slides[b],
				d = a.D[c],
				e = d.from,
				f = d.to;
			_cpInfoCurrentSlide = b + 1;
			_cpInfoCurrentSlideLabel =
				d.lb;
			this.currentSlide = d;
			a.adjustProjectHeight(this.currentSlide);
			this.cStart = e;
			this.cEnd = f;
			this.audioCCItems = d.audCC;
			this.videoCCItems = d.vidCC;
			this.curVidCCItem = this.curAudCCItem = -1;
			a.movie.ccText.innerHTML = "";
			a.movie.PPTXSlide = "PPTX Slide" == d.st;
			this.m_SlideHasEffects = PPTXLib.hasAnimationInfo(d);
			a.movie.resetMovieElapsedTime(a.movie.PPTXSlide);
			a.movie.am.changeCurrentSlide(b, e, !0);
			d.v = !0;
			a.D.project_main.currentFrame = e;
			this.slideEnterAction = d.sea;
			this.slideExitAction = d.sxa;
			this.currentSlideStartFrame =
				e;
			this.currentSlideStartTime = 1E3 * this.currentSlideStartFrame / a.getCpInfoOriginalFPS();
			this.setAdjacentSlidesStartFrames(this.slides, b);
			try {
				this.RemoveEventListeners();
				this.addFramesetsForSlideAtIndex(b);
				this.AddEventListeners(d);
				this.noSkipFrames = {};
				this.forEachChild(a.updateNoSkipFramesAndUpdateVarText);
				PPTXLib.updateNoSkipFramesFromEffectData(d);
				this.noSkipFrames[this.cEnd] = this.cEnd;
				this.noSkipFrames[this.cEnd + 1] = this.cEnd + 1;
				var h = this.m_interactionManagers[c];
				if (h) {
					var i = h.PauseAtFrame(); - 1 !=
						i && (this.noSkipFrames[i] = i)
				}
			} catch (j) {
				a.log(j), j.stack && a.log(j.stack)
			}
		}
	};
	a.Timeline.ReasonForUpdate = {};
	a.Timeline.ReasonForUpdate.PROGRESS = 1;
	a.Timeline.ReasonForUpdate.JUMP = 2;
	a.Timeline.prototype.fallsOutsideCurrentSlide = function () {
		return this.cEnd < cpInfoCurrentFrame || this.cStart > cpInfoCurrentFrame
	};
	a.Timeline.prototype.updateSlideTransition = function () {
		this.currentSlide && this.currentTransition && (this.cStart + 15 < cpInfoCurrentFrame ? this.currentTransition.reset() : this.currentTransition.update(cpInfoCurrentFrame))
	};
	a.Timeline.prototype.updateFrame = function (b) {
		var c = !0;
		this.updatingFrame = cpInfoCurrentFrame;
		a.movie.executedActionOnFrame != this.updatingFrame && (a.movie.executedActionOnFrame = void 0);
		this.updatePlaybar(cpInfoCurrentFrame);
		this.updateToc(cpInfoCurrentFrame);
		var d = {};
		d.frame = cpInfoCurrentFrame;
		d.timeInMillSecs = 1E3 * (cpInfoCurrentFrame / cpInfoFPS);
		a.em.fireEvent("CPTime_Update", d);
		if (cpInfoCurrentFrame > this.lastFrame) this.onEndOfMovie();
		else {
			if (this.cEnd == cpInfoCurrentFrame) {
				if (a.movie.playbackController &&
					(d = a.movie.playbackController.GetQuizController())) {
					var e = a.movie.playbackController.GetLMSType();
					e && (e = e.toUpperCase());
					d.GetIsReportingEnabled() && ("EMAIL" != e && "ACROBAT" != e && "INTERNALSERVER" != e) && (a.m_isLMSPreview && void 0 != a.LMSDriverHolder && a.toggleLMSPreviewDebugLogsColor(a.LMSDriverHolder), a.movie.playbackController.SendCourseData(!1))
				}
				e = 1;
				cpInfoCurrentSlideIndex && (e = cpInfoCurrentSlideIndex + 1);
				if (e >= this.slides.length && a.movie.playbackController && (d = a.movie.playbackController.GetQuizController()) &&
					d.DoSubmitAll(cpInfoCurrentSlideIndex)) {
					a.movie.pause(a.ReasonForPause.CANNOT_MOVE_AHEAD);
					return
				}
				if (!this.canUpdateToSlide(e) && e < this.slides.length) {
					a.movie.pause(a.ReasonForPause.CANNOT_MOVE_AHEAD);
					return
				}
				a.movie.play();
				var e = cpInfoCurrentFrame,
					f = !1;
				if (a.movie.playbackController && (d = a.movie.playbackController.GetQuizController())) {
					var h = d.GetSlideType(cpInfoCurrentSlideIndex);
					if ("Question" == h || "AnyScoreSlide" == h) f = d.LeaveSlide(cpInfoCurrentSlideIndex)
				}
				if ("undefined" != typeof cptb && cptb.onSlideExit) cptb.onSlideExit(a.D[this.slides[cpInfoCurrentSlideIndex]]);
				f || a.movie.frameBasedExecuteAction(this.slideExitAction);
				if (e != cpInfoCurrentFrame) return
			}
			d = !1;
			if (this.fallsOutsideCurrentSlide(cpInfoCurrentFrame)) {
				this.currentTransition && this.currentTransition.reset && (this.currentTransition.reset(), this.currentTransition = void 0); - 1 != this.cEnd && (c = this.slides[cpInfoCurrentSlideIndex], (d = this.m_interactionManagers[c]) && d.handleSlideExit(), c = a.D[c], c.slideNumber = cpInfoCurrentSlideIndex + 1, c.lcpversion = CaptivateVersion, c.frameNumber = cpInfoCurrentFrame, f = -1, a.movie &&
					(h = a.movie.playbackController) && (f = h.GetPercentageSlidesSeen()), c.percentageSlideSeen = f, a.IsRunningInACAP && (c.navid = this.slides[cpInfoCurrentSlideIndex]), a.em.fireEvent("CPSlideExit", c));
				this.onEndOfSlide(b);
				_cpInfoLastVisitedSlide = _cpInfoPrevSlide = cpInfoCurrentSlideIndex;
				a.movie.cpInfoLastVisitedSlideStartFrame = this.currentSlideStartFrame;
				e = this.getSlideIndexForFrame(cpInfoCurrentFrame);
				a.movie.playbackController && a.movie.playbackController.LeaveCurrentSlide(e);
				this.loadSlideAtIndex(e);
				d = !0;
				a.movie.playbackController &&
					a.movie.playbackController.SetCurrentSlide(e);
				if ("undefined" != typeof cptb && cptb.onSlideEnter) cptb.onSlideEnter(a.D[this.slides[cpInfoCurrentSlideIndex]]);
				a.movie.frameBasedExecuteAction(this.slideEnterAction);
				c = a.D[this.slides[cpInfoCurrentSlideIndex]];
				c.slideNumber = cpInfoCurrentSlideIndex + 1;
				c.frameNumber = cpInfoCurrentFrame;
				c.lcpversion = CaptivateVersion;
				f = -1;
				a.movie && (h = a.movie.playbackController) && (f = h.GetPercentageSlidesSeen());
				c.percentageSlideSeen = f;
				a.IsRunningInACAP && (c.navid = this.slides[cpInfoCurrentSlideIndex]);
				a.em.fireEvent("CPSlideEnter", c);
				"Question Slide" == c.st && (f = {}, f.slideNum = c.slideNumber, a.em.fireEvent("CPQuizSlideReached", f));
				if (c = document.getElementById(this.slides[e]))(c = document.getElementById(c.id + "accStr2")) && c.focus();
				c = !1;
				this.currentTransition = a.getSlideTransition(this.currentSlide)
			}
			this.syncMotionToFrame(cpInfoCurrentFrame);
			this.updateSlideTransition(cpInfoCurrentFrame);
			this.updateToFrame(cpInfoCurrentFrame, !1, b);
			a.responsive && !c && a.adjustResponsiveItems(a.ReasonForDrawing.kSlideChanged);
			b == a.Timeline.ReasonForUpdate.JUMP && (a.movie.am.seekTo(cpInfoCurrentFrame, c), a.movie.vdm.seekTo(cpInfoCurrentFrame, !0));
			d && (b = this.getSlideIndexForFrame(cpInfoCurrentFrame) + 1, c = a.movie.stage.getSlideNameForIndex(b), a.multiAudioTrack && "" != c && a.movie.am.preload(c), "" != c && a.movie.vdm.preload(c));
			c = a.D[this.slides[cpInfoCurrentSlideIndex]];
			if (0 < c.si.length) {
				b = c.si;
				c = -1;
				for (d = 0; d < b.length; ++d) f = b[d], e = document.getElementById(f.n), f.t === a.kCPOTTextEntryBoxItem && (-1 === c ? c = d : (f = document.getElementById(b[c].n),
					e.tabIndex < f.tabIndex && (c = d))); - 1 !== c && (this.inputField = document.getElementById(b[c].n + "_inputField")) && this.inputField.focus()
			}
			this.pauseAtFrame(cpInfoCurrentFrame);
			a.movie.paused ? 1 == cpInfoCurrentFrame && a.movie.am.play(1, !0) : a.movie.am.play(cpInfoCurrentFrame)
		}
	};
	a.Timeline.prototype.getNextSkipFrame = function () {
		if (!1 == a.getCpIsPlaying()) return cpInfoCurrentFrame;
		var b = cpInfoCurrentFrame,
			c = -1,
			d;
		for (d in this.noSkipFrames) {
			var e = this.noSkipFrames[d];
			if (e >= b) {
				c = e;
				break
			}
		}
		return c
	};
	a.Timeline.prototype.canAdvanceCurrentFrameForEffects =
		function (b) {
			var c = cpInfoCurrentFrame,
				d = -1,
				e;
			for (e in this.noSkipFrames) {
				var f = this.noSkipFrames[e];
				if (f >= c) {
					d = f;
					break
				}
			}
			c = 1E3 * (d - a.movie.stage.currentSlideStartFrame) / a.getCpInfoOriginalFPS();
			return b > c ? !1 : !0
	};
	a.Timeline.prototype.attemptToAdvanceCurrentFrameByOffset = function (a) {
		if (!(0 >= a)) {
			var c = !0,
				a = cpInfoCurrentFrame + a,
				d;
			for (d in this.noSkipFrames) {
				var e = this.noSkipFrames[d];
				if (cpInfoCurrentFrame < e && a > e) {
					a = e;
					c = !1;
					break
				}
			}
			d = a;
			c && (d = {
				currFrame: a,
				smoothAdvance: !0
			});
			_cpInfoCurrentFrame = d
		}
	};
	a.Timeline.prototype.updateFrameCurrentOnPause =
		function () {
			this.updateToFrame(cpInfoCurrentFrame, !0)
	};
	a.Timeline.prototype.pauseAtFrame = function (b) {
		if (!this.paused) {
			this.paused = !1;
			this.forEachChild(function (c) {
				var e = a.D[(c.suppliedElement || c.element).id],
					f = a.D[e.mdi].visible;
				if (b != a.movie.stage.interactivePauseFrame)
					if (f && (c.pa == b || c.rp_pa && b == c.rp_pa)) {
						if ((f = e.handled) && (a.kCPOTClickBoxItem == e.type || a.kCPOTScorableButtonItem == e.type || a.kCPOTAutoShape == e.type)) f = !1;
						if (!f && (!e.iqb && !e.clickedOnce) && (void 0 == e.enabled || e.enabled))
							if (a.movie.am.interactiveItemFound = !0, a.D[c.element.id].ssp && (a.movie.am.ssp = 1), a.movie.pause(a.ReasonForPause.INTERACTIVE_ITEM), a.movie.paused && null != a.movie.stage.currentSlide) a.movie.stage.currentSlide.topMostObjectInteractiveObject = c.element.id
					} else if (c.psv == b && f && !e.pausedOnce && (void 0 == e.enabled || e.enabled)) {
					if (c = c.children[0])
						if (f = c.element)
							if ((f = f.firstChild) && "VIDEO" == f.tagName && c.started && (c.paused || c.ended)) return;
					e.pausedOnce = !0;
					a.movie.pause(a.ReasonForPause.EVENT_VIDEO_PAUSE)
				}
			});
			var c = this.m_interactionManagers[this.slides[cpInfoCurrentSlideIndex]];
			void 0 != c && b != a.movie.stage.interactivePauseFrame && c.CheckInteractionPause(b) && a.movie.pause(a.ReasonForPause.INTERACTIVE_ITEM)
		}
	};
	a.Timeline.prototype.updateAudioCC = function () {
		if (this.audioCCItems) {
			var b = a.movie.am.slideAudios[a.movie.am.currentSlideAudio];
			if (b && b.nativeAudio) {
				var c = b.nativeAudio.currentTime * a.movie.fps,
					d = 0;
				0 != c && (d = c + b.from);
				this.updateCC(this.audioCCItems, this.curAudCCItem, d)
			}
		}
	};
	a.Timeline.prototype.updateVideoCC = function (a) {
		this.videoCCItems && this.updateCC(this.videoCCItems, this.curVidCCItem,
			a)
	};
	a.Timeline.prototype.updateCC = function (b, c, d) {
		if (cpCmndCC) {
			var e = a.movie.ccText,
				f = a.movie.ccLines,
				d = d - (this.cStart - 1),
				h = b.length - 1,
				i = 1,
				j = this.cEnd - this.cStart + 1;
			0 <= h && (i = b[h].sf, j = b[h].ef);
			for (; 0 <= h; --h)
				if (i > b[h].sf && (i = b[h].sf), j < b[h].ef && (j = b[h].ef), b[h].sf <= d && b[h].ef >= d) {
					if (c == h) return;
					var g = "",
						k = b[h].t.split("<br/>");
					if (0 < k.length)
						for (var g = k[0], l = 1; l < k.length && l < f; ++l) g = g + "<br/>" + k[l];
					e.innerHTML = g
				}
			if (d < i || d > j) e.innerHTML = ""
		}
	};
	a.Timeline.prototype.updateToFrame = function (b, c, d) {
		if (!(b > this.lastFrame) &&
			(this.updateAudioCC(), !this.paused && !this.yield)) {
			var e = this.lastFrame - b;
			if (this.fadeInAtStart && b <= this.fadeInAtStart) this.mainSlideDiv.style.opacity = b / this.fadeInAtStart;
			else if (this.fadeOutAtEnd && b > this.lastFrame - this.fadeOutAtEnd) this.mainSlideDiv.style.opacity = e / this.fadeOutAtEnd;
			else if (!this.currentTransition || !(this.currentTransition.type == a.SlideTransitionType.kFTFade || this.currentTransition.type == a.SlideTransitionType.kFTPhoto)) this.mainSlideDiv.style.opacity = 1;
			this.updateVideoCC(b);
			a.movie.waitingForResources() ||
				(this.interactivePauseFrame != b && (this.interactivePauseFrame = -1), this.forEachChild(function (e) {
				e.considerForUpdate && (e.isInRange(b) ? e.isStarted ? c ? e.start(c, a.ReasonForDrawing.kMoviePaused) : e.updateFrame(d) : e.start(c, a.ReasonForDrawing.kRegularDraw) : e.isStarted && e.reset())
			}), void 0 != this.m_EffectAnimationManager && (a.movie.PPTXSlide || this.m_SlideHasEffects) && PPTXLib.updateAnimationManager())
		}
	};
	a.Timeline.prototype.onEndOfSlide = function (a) {
		this.forEachChild(function (c) {
			c.onEndOfSlide(a)
		})
	};
	a.Timeline.prototype.onEndOfMovie =
		function () {
			void 0 != this.onEndOfMovieExecutedFrame && this.onEndOfMovieExecutedFrame < this.updatingFrame || (this.onEndOfMovieExecutedFrame = this.updatingFrame, a.em.fireEvent("CPMovieStop"), this.forEachChild(function (a) {
				a.onEndOfMovie()
			}), a.movie.pause(a.ReasonForPause.MOVIE_ENDED), a.movie.frameBasedExecuteAction(this.movieEndAction))
	};
	a.Timeline.prototype.syncMotionToFrame = function (a, c) {
		this.forEachChild(function (d) {
			d.isStarted && d.isInRange(a) && d.ApplyMotion(a, c)
		})
	};
	a.Timeline.prototype.start = function () {
		this.paused = !1;
		this.element.style.display = "block";
		this.m_keyManager.clearHandlers();
		this.m_clickManager.clearClicks();
		1 >= cpInfoCurrentFrame && (_cpInfoCurrentFrame = 1);
		this.updateToFrame(cpInfoCurrentFrame);
		this.RemoveFeedbacks(a.FeedbackCloseReason.SLIDE_CHANGE);
		this.clearParentChildMap()
	};
	a.Timeline.prototype.reset = function () {
		this.paused = !1;
		this.element.style.display = "none";
		this.m_keyManager.clearHandlers();
		this.m_clickManager.clearClicks();
		_cpInfoCurrentFrame = 0;
		this.updateToFrame(cpInfoCurrentFrame);
		this.RemoveFeedbacks(a.FeedbackCloseReason.SLIDE_CHANGE);
		this.clearParentChildMap()
	};
	a.Timeline.prototype.stop = function () {
		this.paused = !0
	}
})(window.cp);
(function (a) {
	a.SlideTransitionType = {};
	a.SlideTransitionType.kFTNone = 0;
	a.SlideTransitionType.kFTBlinds = 1;
	a.SlideTransitionType.kFTFade = 2;
	a.SlideTransitionType.kFTFly = 3;
	a.SlideTransitionType.kFTIris = 4;
	a.SlideTransitionType.kFTPhoto = 5;
	a.SlideTransitionType.kFTPixelDissolve = 6;
	a.SlideTransitionType.kFTRotate = 7;
	a.SlideTransitionType.kFTSqeeze = 8;
	a.SlideTransitionType.kFTWipe = 9;
	a.SlideTransitionType.kFTZoom = 10;
	a.getSlideTransition = function (b) {
		if (b) {
			var c = b.transition;
			if (c) switch (c.type) {
				case a.SlideTransitionType.kFTFade:
					return new a.FadeInTransition(b);
				case a.SlideTransitionType.kFTFly:
					return new a.FlyTransition(b);
				case a.SlideTransitionType.kFTIris:
					return new a.IrisTransition(b);
				case a.SlideTransitionType.kFTPhoto:
					return new a.PhotoTransition(b);
				case a.SlideTransitionType.kFTRotate:
					return new a.RotateTransition(b);
				case a.SlideTransitionType.kFTSqeeze:
					return new a.SqueezeTransition(b);
				case a.SlideTransitionType.kFTZoom:
					return new a.ZoomTransition(b);
				case a.SlideTransitionType.kFTBlinds:
					return new a.BlindsTransition(b);
				case a.SlideTransitionType.kFTPixelDissolve:
					return new a.PixelTransition(b);
				case a.SlideTransitionType.kFTWipe:
					return new a.WipeTransition(b);
				default:
					return new a.SlideTransition(b)
			}
		}
	};
	a.SlideTransition = function (b) {
		this.item = a("div_Slide");
		this.data = b.transition;
		this.duration = 15;
		this.from = b.from;
		this.type = a.SlideTransitionType.kFTNone
	};
	a.SlideTransition.prototype = {
		update: function () {},
		isCompleted: function (a) {
			return 0 < a - this.from - this.duration
		},
		reset: function () {}
	};
	a.FadeInTransition = function (b) {
		a.FadeInTransition.baseConstructor.call(this, b);
		a("div_Slide");
		this.finalOpacity =
			1;
		this.type = a.SlideTransitionType.kFTFade
	};
	a.inherits(a.FadeInTransition, a.SlideTransition);
	a.FadeInTransition.prototype.reset = function () {
		this.item.style.opacity = "1"
	};
	a.FadeInTransition.prototype.update = function (a) {
		this.isCompleted(a) || (this.item.style.opacity = ((a - this.from) * this.finalOpacity / this.duration).toString())
	};
	a.FlyTransition = function (b) {
		a.FlyTransition.baseConstructor.call(this, b);
		this.steps = this.item.clientWidth / this.duration;
		this.type = a.SlideTransitionType.kFTFly
	};
	a.inherits(a.FlyTransition,
		a.SlideTransition);
	a.FlyTransition.prototype.reset = function () {
		this.item.style.left = "0px"
	};
	a.FlyTransition.prototype.update = function (a) {
		this.isCompleted(a) || (this.item.style.left = (a - this.from) * this.steps - this.item.clientWidth + "px")
	};
	a.IrisTransition = function (b) {
		a.IrisTransition.baseConstructor.call(this, b);
		this.stepsH = 1 / this.duration;
		this.stepsV = 1 / this.duration;
		this.item.style["-ms-transform-origin"] = "center";
		this.item.style["-moz-transform-origin"] = "center";
		this.item.style["-webkit-transform-origin"] =
			"center";
		this.item.style["-o-transform-origin"] = "center";
		this.item.style["transform-origin"] = "center";
		a.applyTransform(this.item, "scale(0,0)");
		this.type = a.SlideTransitionType.kFTIris
	};
	a.inherits(a.IrisTransition, a.SlideTransition);
	a.IrisTransition.prototype.reset = function () {
		a.applyTransform(this.item, "")
	};
	a.IrisTransition.prototype.update = function (b) {
		this.isCompleted(b) || a.applyTransform(this.item, "scale(" + (b - this.from) * this.stepsH + "," + (b - this.from) * this.stepsV + ")")
	};
	a.PhotoTransition = function (b) {
		a.PhotoTransition.baseConstructor.call(this,
			b);
		this.type = a.SlideTransitionType.kFTPhoto
	};
	a.inherits(a.PhotoTransition, a.SlideTransition);
	a.PhotoTransition.prototype.reset = function () {
		this.item.style.opacity = "1"
	};
	a.PhotoTransition.prototype.update = function (a) {
		this.isCompleted(a) || (a -= this.from, this.item.style.opacity = 10 >= a ? (a / this.duration).toString() : 13 >= a ? "0" : "1")
	};
	a.RotateTransition = function (b) {
		a.RotateTransition.baseConstructor.call(this, b);
		this.stepsR = 90 / this.duration;
		a.applyTransform(this.item, "rotate(-90deg)");
		this.type = a.SlideTransitionType.kFTRotate
	};
	a.inherits(a.RotateTransition, a.SlideTransition);
	a.RotateTransition.prototype.reset = function () {
		a.applyTransform(this.item, "")
	};
	a.RotateTransition.prototype.update = function (b) {
		this.isCompleted(b) || (this.item.style["-ms-transform-origin"] = "left top", this.item.style["-moz-transform-origin"] = "left top", this.item.style["-webkit-transform-origin"] = "left top", this.item.style["-o-transform-origin"] = "left top", this.item.style["transform-origin"] = "left top", a.applyTransform(this.item, "rotate(" + (this.duration -
			(b - this.from)) * this.stepsR + "deg)"))
	};
	a.SqueezeTransition = function (b) {
		a.SqueezeTransition.baseConstructor.call(this, b);
		this.stepsH = 1 / this.duration;
		a.applyTransform(this.item, "scale(0,1)");
		this.type = a.SlideTransitionType.kFTSqeeze
	};
	a.inherits(a.SqueezeTransition, a.SlideTransition);
	a.SqueezeTransition.prototype.reset = function () {
		a.applyTransform(this.item, "")
	};
	a.SqueezeTransition.prototype.update = function (b) {
		this.isCompleted(b) || a.applyTransform(this.item, "scale(" + (b - this.from) * this.stepsH + ",1)")
	};
	a.ZoomTransition =
		function (b) {
			a.ZoomTransition.baseConstructor.call(this, b);
			this.stepsH = 1 / this.duration;
			this.stepsV = 1 / this.duration;
			this.item.style["-ms-transform-origin"] = "left top";
			this.item.style["-moz-transform-origin"] = "left top";
			this.item.style["-webkit-transform-origin"] = "left top";
			this.item.style["-o-transform-origin"] = "left top";
			this.item.style["transform-origin"] = "left top";
			a.applyTransform(this.item, "scale(0,0)");
			this.type = a.SlideTransitionType.kFTZoom
	};
	a.inherits(a.ZoomTransition, a.SlideTransition);
	a.ZoomTransition.prototype.reset =
		function () {
			a.applyTransform(this.item, "")
	};
	a.ZoomTransition.prototype.update = function (b) {
		this.isCompleted(b) || a.applyTransform(this.item, "scale(" + (b - this.from) * this.stepsH + "," + (b - this.from) * this.stepsV + ")")
	};
	a.BlindsTransition = function (b) {
		a.BlindsTransition.baseConstructor.call(this, b);
		b = a("div_Slide");
		this.item = a("slide_transition_canvas");
		this.item.width = b.clientWidth;
		this.item.height = b.clientHeight;
		this.gc = this.item.getContext("2d");
		this.totalRects = 10;
		this.hsteps = this.item.width;
		this.vstepsMajor =
			this.item.height / this.totalRects;
		this.vstepsMinor = this.vstepsMajor / this.duration;
		this.type = a.SlideTransitionType.kFTBlinds
	};
	a.inherits(a.BlindsTransition, a.SlideTransition);
	a.BlindsTransition.prototype.reset = function () {
		this.gc.fillStyle = "rgba(255, 255, 255, 1)";
		this.gc.fillRect(0, 0, this.item.width, this.item.height);
		this.item.style.display = "none"
	};
	a.BlindsTransition.prototype.update = function (a) {
		if (this.isCompleted(a)) this.item.style.display = "none";
		else {
			this.item.style.display = "block";
			this.gc.fillStyle =
				"rgba(255, 255, 255, 1)";
			this.gc.fillRect(0, 0, this.item.width, this.item.height);
			for (var a = (a - this.from) * this.vstepsMinor, c = 0; c < this.totalRects; ++c) this.gc.clearRect(0, c * this.vstepsMajor, this.hsteps, a)
		}
	};
	a.PixelTransition = function (b) {
		a.PixelTransition.baseConstructor.call(this, b);
		b = a("div_Slide");
		this.item = a("slide_transition_canvas");
		this.item.width = b.clientWidth;
		this.item.height = b.clientHeight;
		this.gc = this.item.getContext("2d");
		this.totalHPixels = this.item.width;
		this.totalVPixels = this.item.height;
		this.totalRects = this.totalHPixels * this.totalVPixels;
		this.pixelArr = [];
		for (b = 0; b < this.totalRects; ++b) this.pixelArr.push(b);
		this.gc.fillStyle = "rgba(255, 255, 255, 1)";
		this.gc.fillRect(0, 0, this.item.width, this.item.height);
		this.type = a.SlideTransitionType.kFTPixelDissolve
	};
	a.inherits(a.PixelTransition, a.SlideTransition);
	a.PixelTransition.prototype.reset = function () {
		this.gc.fillStyle = "rgba(255, 255, 255, 1)";
		this.gc.fillRect(0, 0, this.item.width, this.item.height);
		this.item.style.display = "none"
	};
	a.PixelTransition.prototype.update =
		function (a) {
			if (this.isCompleted(a)) this.item.style.display = "none";
			else {
				this.item.style.display = "block";
				for (a = 0; 0 < this.pixelArr.length && a < this.totalRects / this.duration; ++a) {
					var c = Math.floor(Math.random() * this.pixelArr.length),
						d = c;
					this.pixelArr.splice(c, 1);
					this.gc.clearRect(d / this.totalVPixels, d / this.totalHPixels, 1, 1)
				}
			}
	};
	a.WipeTransition = function (b) {
		a.WipeTransition.baseConstructor.call(this, b);
		b = a("div_Slide");
		this.item = a("slide_transition_canvas");
		this.item.width = b.clientWidth;
		this.item.height = b.clientHeight;
		this.gc = this.item.getContext("2d");
		this.steps = this.item.width / this.duration;
		this.gc.fillStyle = "rgba(255, 255, 255, 1)";
		this.gc.fillRect(0, 0, this.item.width, this.item.height);
		this.type = a.SlideTransitionType.kFTWipe
	};
	a.inherits(a.WipeTransition, a.SlideTransition);
	a.WipeTransition.prototype.reset = function () {
		this.gc.fillStyle = "rgba(255, 255, 255, 1)";
		this.gc.fillRect(0, 0, this.item.width, this.item.height);
		this.item.style.display = "none";
		this.item.style.left = "0px"
	};
	a.WipeTransition.prototype.update = function (a) {
		this.isCompleted(a) ||
			(this.item.style.display = "block", this.item.style.left = (a - this.from) * this.steps + "px")
	}
})(window.cp);
(function (b) {
	function n(a) {
		var c = a;
		a && a.sicbs && void 0 !== a.bstiid && -1 !== a.bstiid && (c = b.D[b.getDisplayObjNameByCP_UID(a.bstiid)]);
		return c
	}
	b.clickHandler = function (a) {
		b.clickSuccessHandler(b.D[a.id])
	};
	b.ch = function (a) {
		return b.clickHandler(a)
	};
	b.wch = function (a) {
		return b.HandleInteractiveWidget(a)
	};
	b.clickSuccessHandler = function (a) {
		if (a = n(a)) {
			!1 == a.cpa && (a.clickedOnce = !0);
			a.ssc && b.movie.am.pauseCurrentSlideAudioForInteractiveClick();
			var c = a.ca;
			c && b.movie.am.playPauseEventAudio(c, !0);
			var c = a.osct,
				e = a.osc,
				d = a.oca,
				g = null,
				h = !0;
			void 0 == e && (h = !1);
			void 0 != e && 2 > e.length && (h = !1);
			c && h && (g = d);
			var i = 1 == a.pfc && c;
			a.handled && (i = !1);
			var f = null;
			h && (f = new b.Feedback(e, g, i, b.FeedbackType.SUCCESS, a));
			(!c || !h) && b.movie.executeAction(d);
			h && f.show();
			return !0
		}
		return !1
	};
	b.clickFailureHandler = function (a, c, e) {
		var d = !1;
		if (a = n(a)) {
			if (a.handled && "cpCmndResume = 1;" == a.oca) return !0;
			var g = a.ofct,
				d = a.ofc,
				h = a.ofa;
			if (!d || 2 > d.length) e = !1;
			var i = null;
			g && (c && e) && (i = h);
			var f = null;
			e && (f = new b.Feedback(d, i, !1, b.FeedbackType.FAILURE, a));
			d = !0;
			(!g || !e) && c ? (!1 == a.cpa && (a.clickedOnce = !0), b.movie.executeAction(h)) : d = !1;
			e ? f.show() : d = !1
		}
		return d
	};
	b.cbKH = function (a, c, e) {
		if (!a) return !1;
		var d = a.stl,
			g = a && a.enabled && c && c.visible;
		if (!1 == g && d && 0 < d.length)
			for (var h = 0; h < d.length && !g; h++) {
				var i = d[h];
				if (i && (i = i.stsi) && 0 < i.length)
					for (var f = 0; f < i.length; f++) {
						var g = b.getDisplayObjNameByCP_UID(i[f]),
							g = b.D[g],
							k = b.getDisplayObjByKey(g.mdi),
							g = g && g.enabled && k && k.visible;
						if (!0 == g) break
					}
			}
		if (!g || a.actionInProgress) return !1;
		var j, d = 0,
			h = !1,
			h = a.currentAttempt;
		void 0 != h && (d = h);
		void 0 != c && (j = c.dn);
		if (e) return j && b.SubmitInteractions(j, b.QuestionStatusEnum.CORRECT, d), h = b.clickSuccessHandler(a), a.handled = !0, h;
		c = a.ma;
		d += 1;
		a.currentAttempt = d;
		e = -1 != c && d == c;
		h = -1 == c || d <= c;
		j && b.SubmitInteractions(j, b.QuestionStatusEnum.INCORRECT, d - 1);
		h = b.clickFailureHandler(a, e, h);
		a.handled || (a.handled = -1 != c && d >= c);
		return h
	};
	b.qbKH = function (a, c, e) {
		if (!a || !c) return !1;
		var d = a.stl,
			g = a.enabled && c.visible;
		if (!1 == g && d && 0 < d.length)
			for (var h = 0; h < d.length && !g; h++) {
				var i = d[h];
				if (i && (i = i.stsi) &&
					0 < i.length)
					for (var f = 0; f < i.length; f++) {
						var g = b.getDisplayObjNameByCP_UID(i[f]),
							g = b.D[g],
							k = b.getDisplayObjByKey(g.mdi),
							g = g && g.enabled && k && k.visible;
						if (!0 == g) break
					}
			}
		if (!g) return !1;
		a = a.qbt;
		if (!a || !e) return !1;
		c = c.dn;
		if (!c) return !1;
		c = document.getElementById(c);
		if (!c) return !1;
		e = !1;
		switch (a) {
			case "clear":
				b.quizClearButtonClickHandler(c);
				e = !0;
				break;
			case "back":
				b.quizBackButtonClickHandler(c);
				e = !0;
				break;
			case "skip":
				b.quizSkipButtonClickHandler(c);
				e = !0;
				break;
			case "submit":
				b.quizSubmitButtonClickHandler(c);
				e = !0;
				break;
			case "submitAll":
				b.quizSubmitAllButtonClickHandler(c);
				e = !0;
				break;
			case "continue":
				b.quizContinueButtonClickHandler(c);
				e = !0;
				break;
			case "review":
				b.quizReviewButtonClickHandler(c);
				e = !0;
				break;
			case "retake":
				b.quizRetakeButtonClickHandler(c);
				e = !0;
				break;
			case "reviewModeNext":
				b.quizReviewModeNextButtonClickHandler(c);
				e = !0;
				break;
			case "reviewModeBack":
				b.quizReviewModeBackButtonClickHandler(c), e = !0
		}
		return e
	};
	b.isTEBValueCorrect = function (a, c) {
		if (!c.vuin) return !0;
		var b = document.getElementById(a + "_inputField");
		if (!b) return !1;
		var b = b.value,
			d = c.exp || [],
			g = c.cs,
			h = d.length,
			i = !1;
		if (0 == h && "" == b) return !0;
		for (var f = 0; f < h && !i; ++f) i = g ? b == d[f] : b.toLowerCase() == d[f].toLowerCase();
		return i
	};
	b.tebKH = function (a, c, e) {
		var d = !1,
			g = 0,
			d = 1E3,
			h = !1,
			i;
		if (!a) return !1;
		if (c && c.keyHandledOnce) return c.keyHandledOnce = !1;
		if (!e || a && a.handled) return !1;
		var e = a.stl,
			f = a && a.enabled && c && c.visible;
		if (!1 == f && e && 0 < e.length)
			for (d = 0; d < e.length && !f; d++)
				if (h = e[d])
					if ((h = h.stsi) && 0 < h.length)
						for (var k = 0; k < h.length; k++) {
							var f = b.getDisplayObjNameByCP_UID(h[k]),
								f = b.D[f],
								j = b.getDisplayObjByKey(f.mdi),
								f = f && f.enabled && j && j.visible;
							if (!0 == f) break
						}
					if (!f) return !1;
		e = a.currentAttempt;
		void 0 != e && (g = e);
		void 0 != c && (i = c.dn);
		if (d = b.isTEBValueCorrect(a.id, a)) return a.handled = !0, i && b.SubmitInteractions(i, b.QuestionStatusEnum.CORRECT, g), b.clickSuccessHandler(a);
		d = a.ma;
		g += 1;
		a.currentAttempt = g;
		h = -1 != d && g == d;
		c = -1 == d || g <= d;
		a.handled || (a.handled = -1 != d && g >= d);
		i && b.SubmitInteractions(i, b.QuestionStatusEnum.INCORRECT, g - 1);
		return b.clickFailureHandler(a, h, c)
	};
	b.ClickData = function (a,
		c, b) {
		this.m_obj = a;
		this.m_objc = c;
		this.m_htmlElem = b;
		this.m_from = a.from;
		this.m_to = a.to
	};
	b.ClickData.prototype.isValid = function () {
		return void 0 != this.m_obj && void 0 != this.m_objc && void 0 != this.m_htmlElem && this.m_to >= this.m_from
	};
	b.ClickData.prototype.isClickable = function (a) {
		return !this.m_obj || !this.m_obj.enabled || !this.m_objc || !this.m_objc.visible ? !1 : this.m_from <= a && a <= this.m_to
	};
	b.ClickManager = function () {
		this.m_rightClickArr = [];
		this.m_doubleClickArr = []
	};
	b.ClickManager.prototype.addRightClick = function (a,
		c, e) {
		a = new b.ClickData(a, c, e);
		this.m_rightClickArr.push(a)
	};
	b.ClickManager.prototype.addDoubleClick = function (a, c, e) {
		a = new b.ClickData(a, c, e);
		this.m_doubleClickArr.push(a)
	};
	b.ClickManager.prototype.removeRightClick = function (a) {
		for (var c = 0, c = 0; c < this.m_rightClickArr.length; ++c)
			if (this.m_rightClickArr[c].m_obj == a) {
				this.m_rightClickArr.splice(c, 1);
				break
			}
	};
	b.ClickManager.prototype.removeDoubleClick = function (a) {
		for (var c = 0, c = 0; c < this.m_doubleClickArr.length; ++c)
			if (this.m_doubleClickArr[c].m_obj == a) {
				this.m_doubleClickArr.splice(c,
					1);
				break
			}
	};
	b.ClickManager.prototype.clearClicks = function () {
		this.m_rightClickArr = [];
		this.m_doubleClickArr = []
	};
	b.ClickManager.prototype.getRightClickArr = function (a) {
		for (var c = [], b = 0, b = this.m_rightClickArr.length - 1; 0 <= b; --b) this.m_rightClickArr[b].isClickable(a) && c.push(this.m_rightClickArr[b]);
		return c
	};
	b.ClickManager.prototype.getDoubleClickArr = function (a) {
		for (var c = [], b = 0, b = this.m_doubleClickArr.length - 1; 0 <= b; --b) this.m_doubleClickArr[b].isClickable(a) && c.push(this.m_doubleClickArr[b]);
		return c
	};
	b.Shortcut = function (a, b, e, d) {
		this.m_keyCode = void 0 != a ? a : null;
		this.m_isCtrl = void 0 != b && b ? b : !1;
		this.m_isShift = void 0 != e && e ? e : !1;
		this.m_isAlt = void 0 != d && d ? d : !1
	};
	b.Shortcut.prototype.isValid = function () {
		return void 0 != this.m_keyCode && null != this.m_keyCode
	};
	b.Shortcut.prototype.isSame = function (a) {
		return this.m_keyCode == a.m_keyCode && this.m_isCtrl == a.m_isCtrl && this.m_isShift == a.m_isShift && this.m_isAlt == a.m_isAlt
	};
	b.getShortCutFromKeyEvent = function (a) {
		return new b.Shortcut(a.keyCode, 1 == a.ctrlKey, 1 == a.shiftKey,
			1 == a.altKey)
	};
	b.KeyHandler = function (a, c, e, d, g) {
		this.m_handler = a;
		this.m_shortcut = null;
		c instanceof b.Shortcut && (this.m_shortcut = c);
		this.m_startFrame = e;
		this.m_endFrame = d;
		this.m_name = g
	};
	b.KeyHandler.prototype.isValid = function () {
		return this.m_handler && this.m_shortcut
	};
	b.SHIFT = 16;
	b.CONTROL = 17;
	b.ALT = 18;
	b.KeyManager = function () {
		this.m_keys = [];
		this.m_shift = this.m_alt = this.m_ctrl = !1;
		this.m_keyHandlers = [];
		this.m_prevKeyCode = !1
	};
	b.KeyManager.prototype.handleKeyDown = function (a) {
		a: {
			var c = this.m_prevKeyCode = !1;
			a.keyCode == b.SHIFT ? c = this.m_shift = !0 : a.keyCode == b.CONTROL ? c = this.m_ctrl = !0 : a.keyCode == b.ALT && (c = this.m_alt = !0);
			this.m_shift = 1 == a.shiftKey;
			this.m_ctrl = 1 == a.ctrlKey;
			this.m_alt = 1 == a.altKey;
			if (!c) {
				for (c = 0; c < this.m_keys.length; ++c)
					if (a.keyCode == this.m_keys[c]) break a;
				this.m_keys.push(a.keyCode)
			}
		}
	};
	b.KeyManager.prototype.handleKeyUp = function (a) {
		this.check(a);
		a: {
			this.m_prevKeyCode = !0;
			var c = !1;
			a.keyCode == b.SHIFT ? (this.m_shift = !1, c = !0) : a.keyCode == b.CONTROL ? (this.m_ctrl = !1, c = !0) : a.keyCode == b.ALT && (this.m_alt = !1, c = !0);
			this.m_shift = 1 == a.shiftKey;
			this.m_ctrl = 1 == a.ctrlKey;
			this.m_alt = 1 == a.altKey;
			if (!c)
				for (c = 0; c < this.m_keys.length; ++c)
					if (a.keyCode == this.m_keys[c]) {
						this.m_keys.splice(c, 1);
						break a
					}
		}
	};
	b.KeyManager.prototype.handleFocusOut = function () {
		this.m_keys = [];
		this.m_shift = this.m_alt = this.m_ctrl = !1
	};
	b.KeyManager.prototype.check = function (a) {
		for (var b = null, e = cpInfoCurrentFrame, d = 0, g = !1, h = null, d = 0; d < this.m_keyHandlers.length; ++d)
			if (b = this.m_keyHandlers[d], b.m_startFrame <= e && b.m_endFrame >= e) {
				for (var g = b.m_shortcut,
						i = !1, f = 0; f < this.m_keys.length && !i; ++f) g.m_keyCode == this.m_keys[f] && (i = !0);
				if (g = !i ? 0 == g.m_keyCode && 0 == this.m_keys.length && !this.m_prevKeyCode && (g.m_isCtrl && this.m_ctrl && !this.m_shift && !this.m_alt || g.m_isShift && this.m_shift && !this.m_ctrl && !this.m_alt) ? !0 : !1 : this.m_ctrl == g.m_isCtrl && this.m_shift == g.m_isShift && this.m_alt == g.m_isAlt) {
					h = b;
					if (b.m_handler(g)) return !0;
					break
				}
			}
		for (d = 0; d < this.m_keyHandlers.length; ++d)
			if (b = this.m_keyHandlers[d], h != b && !1 != b.m_shortcut.isValid() && b.m_startFrame <= e && b.m_endFrame >=
				e && b.m_handler(!1)) return !0;
		var k;
		a.keyCode ? k = a.keyCode : a.which && (k = a.which);
		if (13 == k || 32 == k) {
			var j, h = "";
			a.target ? j = a.target : a.srcElement && (j = a.srcElement);
			3 == j.nodeType && (j = j.parentNode);
			j && (h = j.id);
			if ("" != h)
				for (d = 0; d < this.m_keyHandlers.length; ++d)
					if (b = this.m_keyHandlers[d], b.m_name == h && b.m_startFrame <= e && b.m_endFrame >= e && b.m_handler(!0)) return !0
		}
		return !1
	};
	b.KeyManager.prototype.addHandler = function (a) {
		a && a.isValid() && this.m_keyHandlers.push(a)
	};
	b.KeyManager.prototype.clearHandlers = function () {
		this.m_keyHandlers = []
	};
	b.MouseOverManager = function () {
		this.m_TimerID = this.m_mouseOutHandler = this.m_mouseOverItem = void 0
	};
	b.MouseOverManager.prototype.addMouseOverItem = function (a, c) {
		b.DESKTOP === b.device && (c && a) && (this.DoMouseOutOnCurrMouseOverItem(), this.m_mouseOverItem = a, this.m_mouseOutHandler = c)
	};
	b.MouseOverManager.prototype.removeMouseOverItem = function (a) {
		b.DESKTOP === b.device && a && this.m_mouseOverItem === a && (this.m_mouseOutHandler = this.m_mouseOverItem = void 0)
	};
	b.MouseOverManager.prototype.DoMouseOutOnCurrMouseOverItem =
		function () {
			b.DESKTOP === b.device && void 0 !== this.m_mouseOverItem && (this.m_mouseOutHandler && this.m_mouseOutHandler(), this.m_mouseOutHandler = this.m_mouseOverItem = void 0)
	};
	b.MouseOverManager.prototype.CheckIfCurrMouseOverItemIsHit = function (a) {
		if (b.DESKTOP === b.device) {
			var c = !1;
			if (!a || void 0 === this.m_mouseOverItem) return c;
			if (this.m_mouseOverItem.actualParent) {
				var e = this.m_mouseOverItem.actualParent.id,
					d = a.id,
					a = b.D[a.id];
				if (!a) return c;
				void 0 !== a.bstiid && -1 !== a.bstiid && (d = b.getDisplayObjNameByCP_UID(a.bstiid));
				c = e === d
			}
			return c
		}
	};
	b.MouseOverManager.prototype.handleMouseMove = function (a) {
		function c() {
			e.m_TimerID = void 0;
			if (void 0 !== e.m_mouseOverItem) {
				var c;
				a: {
					var g = b.getScaledPosition(getPageX(a), getPageY(a));
					c = g.X - window.pageXOffset;
					for (var g = g.Y - window.pageYOffset, h = b("div_Slide").childNodes, i = h.length - 1; 0 <= i; --i) {
						var f = h[i];
						if ("DIV" == f.nodeName && "block" == f.style.display && (currElementDivData = b.D[f.id]) && b.D[currElementDivData.mdi].visible) {
							drawingItemDivData = b.D[currElementDivData.mdi];
							var k = 0,
								j = 0,
								o = 0,
								l =
									0;
							if (void 0 == f.getBoundingClientRect) k = parseFloat(f.style.left), j = parseFloat(f.style.top), o = parseFloat(f.style.left) + parseFloat(f.style.width), l = parseFloat(f.style.top) + parseFloat(f.style.height);
							else {
								var n;
								f.rotateAngle && (n = f.style.transform || f.style.msTransform || f.style.MozTransform || f.style.WebkitTransform || f.style.OTransform, b.applyTransform(f, "rotate(0)"));
								f.offsetHeight = f.offsetHeight;
								l = b.getHitTestingRect(f);
								f.rotateAngle && b.applyTransform(f, n);
								k = l.minX;
								j = l.minY;
								o = l.maxX;
								l = l.maxY
							}
							var m = 0;
							f.rotateAngle &&
								(m = f.rotateAngle);
							var p = c,
								q = g,
								p = p - (k + o) / 2,
								q = q - (j + l) / 2,
								r = p * Math.cos(Math.PI * -m / 180) - q * Math.sin(Math.PI * -m / 180),
								m = p * Math.sin(Math.PI * -m / 180) + q * Math.cos(Math.PI * -m / 180),
								r = r + (k + o) / 2,
								m = m + (j + l) / 2;
							if (r >= k && r <= o && m >= j && m <= l) {
								c = f;
								break a
							}
						}
					}
					c = void 0
				}
				void 0 !== c && !1 == e.CheckIfCurrMouseOverItemIsHit(c) && e.DoMouseOutOnCurrMouseOverItem()
			}
		}
		if (b.DESKTOP === b.device)
			if (void 0 === this.m_mouseOverItem) void 0 !== this.m_TimerID && (clearTimeout(this.m_TimerID), this.m_TimerID = void 0);
			else {
				var e = this;
				void 0 !== this.m_TimerID &&
					(clearTimeout(this.m_TimerID), this.m_TimerID = void 0);
				this.m_TimerID = setTimeout(c, 300)
			}
	}
})(window.cp);
(function (b) {
	b.Gradient = function (a, f, d) {
		b.Gradient.baseConstructor.call(this, a);
		this.visible = 1;
		this.parentId = f;
		if (this.parentObj = b.D[f]) this.gradientData = this.parentObj.gf, a = this.gradientData.b, this.bounds = {
			minX: a[0],
			minY: a[1],
			maxX: a[2],
			maxY: a[3]
		}, this.args = d;
		this.isDrawn = !1
	};
	b.inherits(b.Gradient, b.DisplayObject);
	b.Gradient.prototype.start = function (a, b) {
		this.drawIfNeeded(a, b);
		if (!this.effectIsStarted || a) this.updateEffects(this.hasEffect), this.effectIsStarted = !0
	};
	b.Gradient.prototype.reset = function () {
		delete b.ropMap[this.element.id];
		this.isDrawn = !1;
		this.element.width = "0";
		this.element.height = "0";
		this.element.style.width = "0px";
		this.element.style.height = "0px";
		this.element.left = "0";
		this.element.top = "0";
		this.element.style.left = "0px";
		this.element.style.top = "0px";
		this.effectIsStarted = !1
	};
	b.Gradient.prototype.drawIfNeeded = function (a, f) {
		if ((!b.responsive || !this.drawForResponsive(a, f)) && !this.isDrawn && this.gradientData) {
			if (void 0 == this.canvasElem)
				for (var d = this.element.firstChild; d; d = d.nextSibling)
					if (d.nodeType == Node.ELEMENT_NODE && d.id &&
						d.id == this.parentId + "gf") {
						this.canvasElem = d;
						break
					}
			if (this.canvasElem) {
				var c = this.bounds,
					e = c.minX,
					g = c.minY,
					d = c.maxX - c.minX,
					c = c.maxY - c.minY;
				this.canvasElem.style.position = "absolute";
				e = (this.canvas = b.createCanvas(e, g, d, c, this.canvasElem)).gc;
				e.save();
				if (g = b.getGradientFill(this.gradientData, e)) e.fillStyle = g, e.fillRect(0, 0, d, c);
				e.restore();
				this.isDrawn = !0
			}
		}
	};
	b.Gradient.prototype.drawForResponsive = function (a) {
		if (!b.responsive) return !1;
		if (this.isDrawn && !a) return !0;
		if (!this.gradientData) return !1;
		if (void 0 ==
			this.canvasElem)
			for (a = this.element.firstChild; a; a = a.nextSibling)
				if (a.nodeType == Node.ELEMENT_NODE && a.id && a.id == this.parentId + "gf") {
					this.canvasElem = a;
					break
				}
		if (!this.canvasElem) return !1;
		this.canvasElem.style.width = "100%";
		this.canvasElem.style.height = "100%";
		a = b.createResponsiveStyleObj(void 0, void 0, "0px", "0px", void 0, void 0, "100%", "100%", void 0);
		a.ipiv = !0;
		a = (this.canvas = b.createResponsiveCanvas(a, this.canvasElem.clientWidth, this.canvasElem.clientHeight, this.canvasElem)).gc;
		a.save();
		var f = b.getGradientFill(this.gradientData,
			a, this.canvasElem.clientWidth / b.D.project.w, this.canvasElem.clientHeight / b.D.project.h);
		f && (a.fillStyle = f, a.fillRect(0, 0, this.canvasElem.clientWidth, this.canvasElem.clientHeight));
		a.restore();
		return this.isDrawn = !0
	};
	b.ImageFill = function (a, f, d) {
		b.ImageFill.baseConstructor.call(this, a);
		this.visible = 1;
		this.parentId = f;
		if (this.parentObj = b.D[f]) this.tileData = this.parentObj.imgf, a = this.tileData.b, this.bounds = {
			minX: a[0],
			minY: a[1],
			maxX: a[2],
			maxY: a[3]
		}, this.args = d;
		this.isDrawn = !1
	};
	b.inherits(b.ImageFill, b.DisplayObject);
	b.ImageFill.prototype.start = function (a, b) {
		this.drawIfNeeded(a, b);
		if (!this.effectIsStarted || a) this.updateEffects(this.hasEffect), this.effectIsStarted = !0
	};
	b.ImageFill.prototype.reset = function () {
		delete b.ropMap[this.element.id];
		this.isDrawn = !1;
		this.element.width = "0";
		this.element.height = "0";
		this.element.style.width = "0px";
		this.element.style.height = "0px";
		this.element.left = "0";
		this.element.top = "0";
		this.element.style.left = "0px";
		this.element.style.top = "0px"
	};
	b.ImageFill.prototype.getTranslationValuesForTiletype =
		function (a) {
			var f = a.img.tiletype,
				d = 0,
				c = 0,
				e = a.b[2] - a.b[0],
				g = a.b[3] - a.b[1],
				h = a.img.w,
				a = a.img.h,
				i = this.canvasElem.clientWidth / b.D.project.w,
				j = this.canvasElem.clientHeight / b.D.project.h;
			b.responsive && (e = Math.floor(e * i), g = Math.floor(g * j));
			switch (f) {
				case "t":
					d = (e - h) / 2;
					break;
				case "tr":
					d = e - h;
					break;
				case "l":
					c = (g - a) / 2;
					break;
				case "c":
					d = (e - h) / 2;
					c = (g - a) / 2;
					break;
				case "r":
					d = e - imageWidthimageWidth;
					c = (g - a) / 2;
					break;
				case "bl":
					c = g - a;
					break;
				case "b":
					d = (e - h) / 2;
					c = g - a;
					break;
				case "br":
					d = e - h, c = g - a
			}
			0 < d && (d = d % h - h);
			0 < c && (c = c %
				a - a);
			return {
				x: d,
				y: c
			}
	};
	b.ImageFill.prototype.drawIfNeeded = function (a, f) {
		if ((!b.responsive || !this.drawForResponsive(a, f)) && !this.isDrawn && this.tileData && this.tileData.img && this.tileData.img.ip) {
			if (void 0 == this.canvasElem)
				for (var d = this.element.firstChild; d; d = d.nextSibling)
					if (d.nodeType == Node.ELEMENT_NODE && d.id && d.id == this.parentId + "imgf") {
						this.canvasElem = d;
						break
					}
			if (this.canvasElem) {
				var c = this.bounds,
					e = c.minX,
					g = c.minY,
					d = c.maxX - c.minX,
					h = c.maxY - c.minY;
				this.canvasElem.style.position = "absolute";
				this.canvasElem.style.backgroundColor =
					"#FFFFFF";
				if ((c = b.movie.im.images[this.tileData.img.ip]) && c.nativeImage.complete) e = (this.canvas = b.createCanvas(e, g, d, h, this.canvasElem)).gc, e.save(), g = this.tileData.s, this.tileData.t ? (e.rect(0, 0, d, h), d = this.getTranslationValuesForTiletype(this.tileData), e.translate(d.x, d.y), d = e.createPattern(c.nativeImage, "repeat"), e.fillStyle = d, e.fill()) : g ? e.drawImage(c.nativeImage, 0, 0, d, h) : (e.translate((d - this.tileData.img.w) / 2, (h - this.tileData.img.h) / 2), e.drawImage(c.nativeImage, 0, 0)), e.restore(), this.isDrawn = !0
			}
		}
	};
	b.ImageFill.prototype.drawForResponsive = function (a) {
		if (!b.responsive) return !1;
		if (this.isDrawn && !a) return !0;
		if (!this.tileData || !this.tileData.img || !this.tileData.img.ip) return !1;
		if (void 0 == this.canvasElem)
			for (a = this.element.firstChild; a; a = a.nextSibling)
				if (a.nodeType == Node.ELEMENT_NODE && a.id && a.id == this.parentId + "imgf") {
					this.canvasElem = a;
					break
				}
		if (!this.canvasElem) return !1;
		var f = this.bounds,
			a = f.maxX - f.minX,
			d = f.maxY - f.minY;
		this.canvasElem.style.width = "100%";
		this.canvasElem.style.height = "100%";
		this.canvasElem.style.position =
			"absolute";
		this.canvasElem.style.backgroundColor = "#FFFFFF";
		if ((f = b.movie.im.images[this.tileData.img.ip]) && f.nativeImage.complete) {
			var c = b.createResponsiveStyleObj(void 0, void 0, "0px", "0px", void 0, void 0, "100%", "100%", void 0);
			c.ipiv = !0;
			c = (this.canvas = b.createResponsiveCanvas(c, this.canvasElem.clientWidth, this.canvasElem.clientHeight, this.canvasElem)).gc;
			c.save();
			var e = this.tileData.s;
			if (this.tileData.t) c.rect(0, 0, this.canvasElem.clientWidth, this.canvasElem.clientHeight), a = this.getTranslationValuesForTiletype(this.tileData),
			c.translate(a.x, a.y), a = c.createPattern(f.nativeImage, "repeat"), c.fillStyle = a, c.fill();
			else if (e) c.drawImage(f.nativeImage, 0, 0, this.canvasElem.clientWidth, this.canvasElem.clientHeight);
			else {
				var e = this.canvasElem.clientWidth / b.D.project.w,
					g = this.canvasElem.clientHeight / b.D.project.h,
					h = f.nativeImage.width * e,
					i = f.nativeImage.height * g;
				c.translate(Math.floor((a * e - h) / 2), Math.floor((d * g - i) / 2));
				c.drawImage(f.nativeImage, 0, 0, Math.floor(h), Math.floor(i))
			}
			c.restore();
			return this.isDrawn = !0
		}
		return !1
	}
})(window.cp);
(function (g) {
	g.SlideGraphManager = function () {
		this.m_CurrentBranch = [];
		this.m_BranchHistory = [];
		this.m_SlideGraphObj = {};
		this.m_RootSlideIndex = -1;
		this.m_InvalidSlideJump = !1;
		this.m_CompletionBranch = [];
		this.m_CompletionBranchSet = !1;
		this.m_CompletionBranchSlideCount = -1;
		this.m_CompletionBranchSlideCountSet = !1;
		this.m_BranchNumber = 0;
		this.m_PrevBranch = [];
		this.BranchEnum || (this.BranchEnum = {}, this.BranchEnum.kBranchNotFound = 0, this.BranchEnum.kBranchFound = 1, this.BranchEnum.kLoopBranchFound = 2, this.BranchEnum.kMultipleBranchFound =
			3)
	};
	g.SlideGraphManager.prototype = {
		countUniqItems: function (a) {
			for (var b = {}, c = 0, d = 0; d < a.length; ++d) {
				var e = a[d];
				void 0 == b[e] && (b[e] = e, ++c)
			}
			return c
		},
		findCompletionBranchTraverse: function (a, b, c) {
			var d = !1,
				e = -1;
			!d && void 0 == this.m_SlideGraphObj[a] && (e = this.BranchEnum.kBranchFound, d = !0);
			!d && void 0 != c[a] && (e = this.BranchEnum.kLoopBranchFound, d = !0);
			b.push(a);
			c[a] = a;
			if (d) {
				++this.m_BranchNumber;
				if (1 == this.m_BranchNumber) return this.m_CompletionBranch = this.m_CurrentBranch.concat(b), this.m_CompletionBranchSet = !0, e == this.BranchEnum.kLoopBranchFound && a == b[0] || (this.m_CompletionBranchSlideCount = this.countUniqItems(this.m_CurrentBranch.concat(b)), this.m_CompletionBranchSlideCountSet = !0), b.pop(), delete c[a], this.BranchEnum.kBranchFound;
				if (2 <= this.m_BranchNumber) {
					this.m_CompletionBranchSet = !1;
					if (this.m_CompletionBranchSlideCountSet) {
						var f = this.countUniqItems(this.m_CurrentBranch.concat(b));
						if (!(e == this.BranchEnum.kLoopBranchFound && a == b[0]) && f == this.m_CompletionBranchSlideCount) return b.pop(), delete c[a], this.BranchEnum.kBranchFound;
						this.m_CompletionBranchSlideCountSet = !1;
						b.pop();
						delete c[a];
						return this.BranchEnum.kMultipleBranchFound
					}
					b.pop();
					delete c[a];
					return this.BranchEnum.kMultipleBranchFound
				}
			}
			e = this.m_SlideGraphObj[a];
			d = !1;
			for (f in e) switch (this.findCompletionBranchTraverse(Number(f), b, c)) {
				case this.BranchEnum.kBranchFound:
					d = !0;
				case this.BranchEnum.kBranchNotFound:
					break;
				case this.BranchEnum.kMultipleBranchFound:
					return this.BranchEnum.kMultipleBranchFound
			}
			b.pop();
			delete c[a];
			return d ? this.BranchEnum.kBranchFound : this.BranchEnum.kBranchNotFound
		},
		findCompletionBranch: function () {
			this.m_CompletionBranch = [];
			this.m_CompletionBranchSet = !1;
			this.m_BranchNumber = 0;
			this.findCompletionBranchTraverse(1 <= this.m_CurrentBranch.length ? this.m_CurrentBranch[this.m_CurrentBranch.length - 1] : this.m_RootSlideIndex, [], {})
		},
		initialize: function () {
			if (g.D.baq) {
				var a = g.D.sgMgr;
				if (void 0 != a) {
					var b = a.ri,
						a = a.sg;
					if (!(void 0 == b || void 0 == a)) {
						this.m_InvalidSlideJump = !1;
						this.m_RootSlideIndex = b;
						for (b = 0; b < a.length; ++b) {
							var c = a[b];
							if (!(void 0 == c || 2 != c.length)) {
								this.m_SlideGraphObj[c[0]] = {};
								for (var d = c[1], e = 0; e < d.length; ++e) {
									var f = d[e];
									if (!(void 0 == f || 2 != f.length)) {
										this.m_SlideGraphObj[c[0]][f[0]] = {};
										for (var j = f[1], h = 0; h < j.length; ++h) {
											var i = j[h];
											void 0 != i && (this.m_SlideGraphObj[c[0]][f[0]][i] = i)
										}
									}
								}
							}
						}
					}
				}
			}
		},
		onSlideJump: function (a) {
			if (0 < this.m_CurrentBranch.length) {
				var b = this.m_CurrentBranch[this.m_CurrentBranch.length - 1];
				if (a == b) return;
				if (void 0 == this.m_SlideGraphObj[b]) {
					this.m_BranchHistory.push(a);
					this.m_InvalidSlideJump = !0;
					return
				}
				if (void 0 == this.m_SlideGraphObj[b][a]) {
					this.m_InvalidSlideJump = !0;
					this.updateCurrentBranch(a);
					this.m_BranchHistory.push(a);
					return
				}
			}
			this.m_BranchHistory.push(a);
			this.m_CurrentBranch.push(a)
		},
		getSlideViewPercentage: function () {
			!this.m_CompletionBranchSet && !this.m_CompletionBranchSlideCountSet && this.findCompletionBranch();
			if (!this.m_CompletionBranchSet && !this.m_CompletionBranchSlideCountSet) return "NaN";
			var a = this.countUniqItems(this.m_CurrentBranch),
				b = -1,
				b = this.m_CompletionBranchSlideCountSet ? this.m_CompletionBranchSlideCount : this.countUniqItems(this.m_CompletionBranch);
			return 0 >= b ? "NaN" : 100 * a / b
		},
		isSlidePartOfCurrentBranch: function (a) {
			return 0 < this.m_CurrentBranch.length && -1 != this.m_CurrentBranch.indexOf(a) ? !0 : !1
		},
		getCompletionBranch: function () {
			this.m_CompletionBranchSet || this.findCompletionBranch();
			return !this.m_CompletionBranchSet ? [] : this.m_CompletionBranch
		},
		getCurrentBranch: function () {
			return this.m_CurrentBranch
		},
		getBranchHistory: function () {
			return this.m_BranchHistory
		},
		restoreCompletionBranchState: function (a) {
			0 < a.length && (this.m_CompletionBranch = [], this.m_CompletionBranch =
				a, this.m_CompletionBranchSet = !0)
		},
		restoreCurrentBranchState: function (a) {
			0 < a.length && (this.m_CurrentBranch = [], this.m_CurrentBranch = a, this.m_BranchHistory = [], this.m_BranchHistory = a.slice())
		},
		resetCurrentBranch: function (a) {
			if (!(0 > a)) {
				for (var b = -1, c = 0; c < this.m_CurrentBranch.length; ++c)
					if (this.m_CurrentBranch[c] == a) {
						b = a;
						break
					}
				0 <= b && b + 1 < this.m_CurrentBranch.length && this.m_CurrentBranch.splice(b + 1)
			}
		},
		updateCurrentBranch: function () {},
		getMaxQuizScore: function () {
			return 0
		},
		getMinQuizScore: function () {
			return 0
		},
		getQuizScorePercentage: function () {
			return 0
		},
		getNextAttemptFirstQuestionSlideIndex: function () {
			return -1
		},
		getReviewFirstQuestionSlideIndex: function () {
			return -1
		},
		getNumQuestions: function () {
			return 0
		},
		getQuestionSlideProgressNumber: function () {
			return "NaN"
		},
		setQuestionSlideProgressNumber: function () {},
		getLastQuestionSlideIndex: function () {
			return -1
		},
		getNextSlideList: function (a) {
			var b = [];
			if (void 0 != this.m_SlideGraphObj[a]) {
				var a = this.m_SlideGraphObj[a],
					c;
				for (c in a) b.push(Number(c))
			}
			return b
		},
		getIsJumpValid: function (a,
			b) {
			return void 0 == this.m_SlideGraphObj[a] || void 0 == this.m_SlideGraphObj[a][b] ? !1 : !0
		},
		SaveCurrentBranch: function () {
			this.m_PrevBranch = this.m_CurrentBranch.slice()
		},
		GetPrevBranch: function () {
			return this.m_PrevBranch
		}
	}
})(window.cp);
if ("undefined" === typeof console || "undefined" === typeof console.log) console = {
	log: function () {}
};
window.Node || (window.Node = {}, Node.ELEMENT_NODE = 1, Node.ATTRIBUTE_NODE = 2, Node.TEXT_NODE = 3, Node.CDATA_SECTION_NODE = 4, Node.ENTITY_REFERENCE_NODE = 5, Node.ENTITY_NODE = 6, Node.PROCESSING_INSTRUCTION_NODE = 7, Node.COMMENT_NODE = 8, Node.DOCUMENT_NODE = 9, Node.DOCUMENT_TYPE_NODE = 10, Node.DOCUMENT_FRAGMENT_NODE = 11, Node.NOTATION_NODE = 12);
Array.indexOf || (Array.prototype.indexOf = function (m) {
	for (var k = 0; k < this.length; ++k)
		if (this[k] == m) return k;
	return -1
});
(function () {
	function m(a, b) {
		var d = [],
			c = cp.movie.stage;
		if (!(c && a > c.slides.length - 1)) {
			var c = cp.D[c.slides[a]],
				g = cp.D[c.mdi],
				e = g.ip;
			if (!e && (cp.device == cp.IDEVICE || cp.device == cp.ANDROID)) e = g.aip;
			e && d.push(e);
			c.imgf && (c.imgf.img && c.imgf.img.ip && c.imgf.img.ip.length > 0) && d.push(c.imgf.img.ip);
			c = c.si;
			for (g = 0; g < c.length; ++g)
				if (e = cp.D[cp.D[c[g].n].mdi]) {
					var f = e.ip;
					if (f)
						if (typeof f === "object")
							for (var j in f) d.push(f[j]);
						else d.push(f);
						(f = e.uImg) && d.push(f);
					(f = e.hImg) && d.push(f);
					(f = e.pImg) && d.push(f);
					(f = e.imgf) &&
						(f.img && f.img.ip && f.img.ip.length > 0) && d.push(f.img.ip);
					(f = e.asbos) && (f.imgf && f.imgf.img && f.imgf.img.ip && f.imgf.img.ip.length > 0) && d.push(f.imgf.img.ip);
					(f = e.asbds) && (f.imgf && f.imgf.img && f.imgf.img.ip && f.imgf.img.ip.length > 0) && d.push(f.imgf.img.ip);
					if (e = e[cp.kPPTXSlideImagesStr])
						for (f = 0; f < e.length; ++f) e[f].ip.length > 0 && d.push(cp.kPPTXSlideImagesDir + e[f].ip)
				}
			cp.movie.im.loadImages(a, d, b)
		}
	}
	function k() {
		eval('function handlePasswordProtected(){if(cp.D.secret){var a=lMainModelData.pwd,b=lMainModelData.pwdRetryMsg,c=function(){var d=document.getElementById("k333"),c=!0;d&&d.value!=a&&(c=!1);if(c)HideEverything();else if(cp.verbose&&cp.log("incorrect pwd"),d=document.getElementById("a5__px"))d.innerHTML=b};cp.passwordDiv.innerHTML="<table id=\'a5__px\' style=\'position:absolute;background-color:#FFFFFF;left:0px;top:0px;width:100%;height:100%\'><tr style=\'width:100%;height:100%;text-align:center;vertical-align:middle\'><td><table style=\'width:100%;text-align:center;vertical-align:middle\'><tr style=\'text-align:center;vertical-align:middle\'><td id=\'a5__px\'>"+lMainModelData.pwdMsg+"</td></tr><tr style=\'text-align:center;vertical-align:middle\'><td><input id=\'k333\' type=\'password\' style=\'width:"+lMainModelData.pwdTxtBoxW+"px;height:"+lMainModelData.pwdTxtBoxH+"px;\'/></td></tr><tr style=\'text-align:center;vertical-align:middle\'><td><button id=\'checkPwdButton\'>Continue</button></td></tr></table></td></tr>";cp.registerGestureEvent(document.getElementById("checkPwdButton"),cp.GESTURE_EVENT_TYPES.TAP,c);document.getElementById(lPwdTxtBoxVarName).onkeyup=function(){c()};ShowEverything()}}function handleExpiry(){if(cp.D.expiryDate){var a=new Date;a.setFullYear(lMainModelData.prjExpY,lMainModelData.prjExpM-1,lMainModelData.prjExpD-1);(new Date).getTime()<=a.getTime()||(a=lMainModelData.prjExpMsg,cp("__z_21").style.visibility="hidden",cp("a5__px").style.visibility="hidden",cp("md5").style.visibility="hidden",cp.expiryDiv.innerHTML="<div id=\'md5\' style=\'width:380px;height:54px;left:"+(cp.D.project.w-380)/2+"px;top:"+(cp.D.project.h-54)/2+"px;position:absolute\'><div id=\'expImg\' style=\'width:100%;height:100%;background-image:url(assets/htmlimages/movieexpire.png);background-repeat:no-repeat;\'></div><div id=\'a5__px\' style=\'color:#ffffff; width:300px;left:65px; position:absolute; height:15px; top:20px; font-size:12px; text-align:left; text-overflow: clip;overflow: hidden\'/>"+a+"</div></div>")}else cp.expiryDiv.style.display="none",cp.expiryDiv.style.visibility="hidden"}function handleAutoplay(){var a=cp.D[cp.movie.main.id].autoplay;document.getElementById("playImage");a?cp.device==cp.DESKTOP?cp("autoplayDiv").style.display="none":(cp.autoplayImage.style.display="none",cp.autoplayImage.style.visibility="hidden"):(cp.movie.autoplayimagew=0,cp.movie.autoplayimageh=0,a=cp.D[cp.movie.main.id].autoplayFileName,void 0!=a?(cp.autoplayImage.src=a,cp.autoplayImage.style.opacity=0.7,cp.movie.autoplayimagew=cp.D[cp.movie.main.id].autoplayimagew,cp.movie.autoplayimageh=cp.D[cp.movie.main.id].autoplayimageh):(cp.autoplayImage.style.display="none",cp.autoplayImage.style.visibility="hidden"));a=function(a){if(!a.target||!(a.target.tagName.toUpperCase()=="INPUT"||a.target.tagName.toUpperCase()=="SELECT"||a.target.tagName.toUpperCase()=="TEXTAREA")){(cp.isTextInputInFocus()||document.activeElement.tagName.toUpperCase()=="SELECT")&&document.activeElement.blur();a.preventDefault()}};if(cp.D[cp.movie.main.id].pprtd){var b=cp.D[cp.movie.main.id],c=b.ps,d=function(a){if(a){cp("project").style.visibility="visible";cp("playbar").style.visibility="visible";cp("toc").style.visibility="visible";cp.pwdv.parentNode.removeChild(cp.pwdv)}else{cp("project").style.visibility="hidden";cp("playbar").style.visibility="hidden";cp("toc").style.visibility="hidden"}},g=function(){var a=document.getElementById("pwdt"),e=true;if(a){a=(new cp.sha1).HashUTF16Str(a.value);if(c.length==a.length)for(var f=0;f<a.length&&e;++f)c[f]!=a[f]&&(e=false);else e=false}if(e){d(true);cp.passwordAccepted=true;window.scrollTo(0,0);cp.complete()}else if(e=document.getElementById("promptMsg"))e.innerHTML=b.prm};cp.pwdv.innerHTML="<table id=\'pwdTable\' style=\'position:absolute;background-color:#FFFFFF;left:0px;top:0px;width:100%;height:100%\'><tr style=\'width:100%;height:100%;text-align:center;vertical-align:middle\'><td><table style=\'width:100%;text-align:center;vertical-align:middle\'><tr style=\'text-align:center;vertical-align:middle\'><td id=\'promptMsg\'>"+b.pm+"</td></tr><tr style=\'text-align:center;vertical-align:middle\'><td><input id=\'pwdt\' type=\'password\' style=\'width:"+b.ptw+"px;height:"+b.pth+"px;\'/></td></tr><tr style=\'text-align:center;vertical-align:middle\'><td><button id=\'checkPwdButton\'>Continue</button></td></tr></table></td></tr>";cp.useg&&Hammer&&Hammer(cp.pwdv,{no_mouseevents:!0,transform_min_scale:1,drag_block_horizontal:!0,drag_block_vertical:!0,drag_min_distance:0});cp.registerGestureEvent(cp.pwdv,"touchstart",a);cp.registerGestureEvent(cp.pwdv,"touchmove",a);cp.registerGestureEvent(cp.pwdv,"touchend",a);cp.registerGestureEvent(cp.pwdv,"touchcancel",a);cp.registerGestureEvent(document.getElementById("checkPwdButton"),cp.GESTURE_EVENT_TYPES.TAP,g);a=document.getElementById("pwdt");a.focus();a.onkeyup=function(a){a.keyCode==13&&g()};d(!1)}else cp.pwdv.style.display="none",cp.pwdv.style.visibility="hidden",cp.passwordAccepted=!0,cp.complete()}function handlePreloader(){var a=cp.D[cp.movie.main.id].preloader,b=cp.D[cp.movie.main.id].preloaderFileName;void 0!=b&&""!=b&&a?(cp.preloaderImage.src=b,-1!=b.indexOf("loading.gif")?cp.preloaderImage.defaultImage=!0:cp("loadingString").style.display="none"):cp.preloaderImage.style.display="none";cp.movie.preloadProjectAssets();cp.isExpired=!0;cp.D[cp.movie.main.id].peon?(a=cp.D[cp.movie.main.id],b=new Date,b.setFullYear(a.pey,a.pem-1,a.ped-1),(new Date).getTime()<=b.getTime()?(cp.exdv&&cp.exdv.parentNode.removeChild(cp.exdv),cp.isExpired=!1):(cp("project").style.visibility="hidden",cp("playbar").style.visibility="hidden",cp("toc").style.visibility="hidden",a="<div id=\'pems\' style=\'width:380px;height:54px;left:0px;top:0px;right:0px;bottom:0px;margin:auto;position:absolute\'><div id=\'pemi\' style=\'width:100%;height:100%;background-image:url(assets/htmlimages/movieexpire.png);background-repeat:no-repeat;\'></div><div id=\'pet\' style=\'color:#ffffff; width:300px;left:65px; position:absolute; height:15px; top:20px; font-size:12px; text-align:left; text-overflow: clip;overflow: hidden\'/>"+a.pems+"</div></div>",cp.exdv.style.backgroundColor=cp.D[cp.movie.element.id].prjBgColor,cp.exdv.innerHTML=a)):(cp.exdv.style.display="none",cp.exdv.style.visibility="hidden",cp.isExpired=!1)}function _handleProjOptions(){handleAutoplay();handlePreloader()};_handleProjOptions();')
	}
	function y(a) {
		var b = [],
			d;
		for (d in a) b.push(cp.vm.getVariableValue(a[d].name));
		return b
	}
	window.getPageX = function (a) {
		var b = 0;
		cp.m_gestureHandler && (b = cp.m_gestureHandler.getEventPageX(a));
		return b
	};
	window.getPageY = function (a) {
		var b = 0;
		cp.m_gestureHandler && (b = cp.m_gestureHandler.getEventPageY(a));
		return b
	};
	cp.CacheView = function (a) {
		this.index = a;
		if (!cp.CacheView.DIM) {
			cp.CacheView.DIM = 20;
			cp.CacheView.GAP = 5;
			cp.CacheView.LEFT_OFFSET = 100;
			cp.CacheView.TOP_OFFSET = 30;
			cp.CacheView.NUM_CACHE_VIEWS = 0
		}
		this.view = cp.newElem("div");
		document.body.appendChild(this.view);
		this.view.style.cssText = "z-index:100;display:block; position:fixed; left:" + (cp.CacheView.LEFT_OFFSET + cp.CacheView.NUM_CACHE_VIEWS * (cp.CacheView.DIM + cp.CacheView.GAP)) + "px; top:" + cp.CacheView.TOP_OFFSET + "px; width:" + cp.CacheView.DIM + "px; height:" + cp.CacheView.DIM + "px; background-color:#555555;opacity:0.8";
		this.view.innerHTML = "<font color='#000000' style='font-size:10px'>-1</font>";
		++cp.CacheView.NUM_CACHE_VIEWS
	};
	cp.CacheView.prototype = {
		update: function () {
			var a = cp.movie.pm.cache[this.index];
			this.view.innerHTML = "<font color='#000000' style='font-size:10px'>" + a + "</font>";
			this.view.style.backgroundColor = this.index == cp.movie.pm.tail ? "#ffff00" : this.index == cp.movie.pm.head ? "#0000ff" : a != -1 ? "#00ff00" : "#555555"
		}
	};
	cp.PrefetchManager = function () {
		cp.movie.pm = this;
		this.cache = cp.device == cp.DESKTOP ? Array(7) : Array(4);
		for (var a = 0; a < this.cache.length; ++a) this.cache[a] = -1;
		this.tail = this.head = 0;
		this.viewCache = false
	};
	cp.PrefetchManager.prototype = {
		numSlidesToAttemptPreloaded: function () {
			return this.cache.length -
				3
		},
		print: function () {
			for (var a = "[ ", b = this.tail; b != this.head; b = (b + 1) % this.cache.length) {
				a = a + this.cache[b];
				a = a + " "
			}
			console.log("cached slides:" + (a + "]"))
		},
		showCache: function () {
			if (this.viewCache)
				for (var a = 0; a < this.cacheViews.length; ++a) this.cacheViews[a].update()
		},
		slideWasPrefetched: function (a) {
			for (var b = this.tail; b != this.head; b = (b + 1) % this.cache.length)
				if (this.cache[b] == a) return true;
			return false
		},
		ifPrefetchedMakeMRU: function (a) {
			for (var b = this.tail; b != this.head; b = (b + 1) % this.cache.length)
				if (this.cache[b] ==
					a) {
					for (var d = (b + 1) % this.cache.length; d != this.head;) {
						this.cache[b] = this.cache[d];
						b = d;
						d = (b + 1) % this.cache.length
					}
					this.cache[b] = a;
					return true
				}
			return false
		},
		throwAwayLRUSlide: function () {
			if (this.head != this.tail) {
				var a = this.cache[this.tail];
				cp.movie.im.verbose && cp.log("throwing Away LRU Slide " + a);
				var b = cp.D[cp.movie.stage.slides[a]],
					d = cp.D[b.mdi].ip;
				d != "" && cp.movie.im.unloadImage(a, d);
				if (b = b.si)
					for (d = 0; d < b.length; ++d) {
						var c = cp.D[b[d].n],
							g = cp.D[c.mdi];
						if (g) {
							var e = g.ip;
							if (e) {
								var f = false;
								c.pa || (f = c.rp == "1");
								if (!f) {
									cp.movie.im.unloadImage(a, e);
									(e = g.uImg) && cp.movie.im.unloadImage(a, e);
									(e = g.hImg) && cp.movie.im.unloadImage(a, e);
									(e = g.pImg) && cp.movie.im.unloadImage(a, e);
									(c = g.imgf) && (c.img && c.img.ip && c.img.ip.length > 0) && cp.movie.im.unloadImage(a, c.img.ip);
									if (g = g[cp.kPPTXSlideImagesStr])
										for (c = 0; c < g.length; ++c) g[c].ip.length > 0 && cp.movie.im.unloadImage(a, cp.kPPTXSlideImagesDir + g[c].ip)
								}
							}
						}
					}
				this.cache[this.tail] = -1;
				this.tail = (this.tail + 1) % this.cache.length
			}
		},
		isLoading: function () {
			return this.loading
		},
		loadSlideAssets: function (a) {
			if (this.loading) return false;
			this.loading = true;
			try {
				cp.movie.im.verbose && cp.log("loading assets of slide " + a);
				if (this.ifPrefetchedMakeMRU(a)) m(a, true);
				else {
					var b = (this.head + 1) % this.cache.length;
					b == this.tail && this.throwAwayLRUSlide();
					m(a, true);
					this.cache[this.head] = a;
					this.head = b
				}
				cp.movie.im.verbose && this.print()
			} catch (d) {}
			this.loading = false;
			this.showCache();
			return true
		},
		preloadSlideAssets: function (a) {
			cp.movie.im.verbose && cp.log("preloading assets of slide " + a);
			if (!this.slideWasPrefetched(a)) {
				var b = (this.head + 1) % this.cache.length;
				b == this.tail && this.throwAwayLRUSlide();
				m(a);
				this.cache[this.head] = a;
				this.head = b
			}
			cp.movie.im.verbose && this.print();
			this.showCache()
		}
	};
	cp.Movie = function (a) {
		this.virgin = true;
		this.element = a;
		this.symbols = {};
		this.main = null;
		this.cc = document.getElementById("cc");
		this.cpInfoLastVisitedSlideStartFrame = 0;
		this.fps = cp.D[a.id].fps;
		this.hidePlaybarInQuiz = cp.D.quizzingData.hidePlaybarInQuiz;
		this.offset = (cp.offsetInnerWidth - cp.D[a.id].w + (cp.loadedModules.toc && !cp.D.tocProperties.overlay ? cp.D.tocProperties.position ==
			1 ? cp.D.tocProperties.width : -cp.D.tocProperties.width : 0)) / 2;
		this.paused = true;
		this._parseElements();
		this.questions = [];
		this.questionObjs = [];
		this.element.style.backgroundColor = cp.D[this.element.id].prjBgColor;
		this.currAudioType = "bg";
		this.currAudioStopFrame = this.currAudioStartFrame = -1;
		this.counter = 0;
		this.speed = 1;
		this.playKeyTap = cp.D[a.id].pkt;
		this.m_hasIsTrackedBeenSet = false;
		this.MIN_WAIT_TIME_TO_PAUSE_MOVIE = this.waitedForResources = 0;
		this.MIN_WAIT_TIME_TO_BLOCK_UI = 2E3;
		if (cp.device == cp.ANDROID) this.MIN_WAIT_TIME_TO_BLOCK_UI =
			4E3;
		this.MAX_WAIT_TIME = 2E4;
		this.mRequestAnimationFrameFunc = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || null;
		this.m_scaleFactor = 1
	};
	cp.Movie.prototype = {
		updateMovie: function () {
			var a = cp.D[this.main.id].questions;
			if (a) {
				this.questions = a.split(",");
				this.questionObjs = []
			}
			this.stage.updateTimeline()
		},
		handleProjectOptions: function () {
			k()
		},
		preloadProjectAssets: function () {
			var a = cp.model.projectImages;
			a && a.length != 0 && cp.movie.im.loadImages(-1, a, true, true)
		},
		rewind: function () {
			this.stage.handleRewindForFramesets();
			this.stage.RemoveFeedbacks(cp.FeedbackCloseReason.SLIDE_CHANGE);
			cp.movie.stage.itemsNotLoaded = [];
			this.jumpToFrame(1);
			this.play(cp.ReasonForPlay.MOVIE_REWIND)
		},
		_parseElements: function () {
			for (var a = this.element.firstChild; a; a = a.nextSibling)
				if (a.nodeType == Node.ELEMENT_NODE) {
					var b = (a.className + "").split(" ");
					if (b.indexOf("cp-timeline") != -1) {
						var d = b.indexOf("cp-main") != -1;
						b.indexOf("cp-symbol") != -1 && (this.symbols[a.id] = a);
						if (d) this.main = a
					}
				}
			if (this.main != null) this.stage = cp.parseTimeline(this.main)
		},
		resetFPS: function () {
			if (cpInfoFPS != 0) {
				this.POLL_INTERVAL = 1E3 / cpInfoFPS;
				if (!this.useRequestAnimationFrame || !this.mRequestAnimationFrameFunc) {
					if (this.interval) {
						clearInterval(this.interval);
						this.interval = 0
					}
					var a = this;
					this.interval = setInterval(function () {
						a._onEnterFrame()
					}, this.POLL_INTERVAL)
				} else {
					if (this.interval) {
						clearInterval(this.interval);
						this.interval = 0
					}
					this.mRequestAnimationFrameFunc.call(window,
						this.animationLoop)
				}
			}
		},
		resetMovieElapsedTime: function (a) {
			this.startMovieTime = (new Date).getTime() - cpInfoCurrentFrame * 1E3 / (cp.movie.fps * cp.movie.speed);
			if (arguments.length > 0 && this.useRequestAnimationFrame != a) {
				this.useRequestAnimationFrame = a;
				this.resetFPS()
			}
		},
		animationLoop: function () {
			cp.movie.useRequestAnimationFrame && cp.movie.mRequestAnimationFrameFunc.call(window, cp.movie.animationLoop);
			cp.movie._onEnterFrame()
		},
		startTimer: function () {
			if (!this.interval) {
				this.stage.start();
				this.element.style.display =
					"block";
				this.resetFPS()
			}
		},
		stop: function () {
			this.stage.reset();
			this.element.style.display = "none";
			var a = document.getElementById("playbar");
			a.pause != void 0 && a.pause()
		},
		play: function (a) {
			if (!cp.isBlockedForLMS()) {
				cp.verbose && cp.log("movie.play deleting pendingPlay");
				delete this.pendingPlay;
				this.resetMovieElapsedTime();
				if (this.virgin) {
					cp.verbose && cp.log("movie virgin play");
					this.virgin = false;
					a = cp.getStartFrameOfMovie();
					1 < a && (_cpInfoCurrentFrame = a);
					this.am.unlockWebAudio();
					(cp.IDEVICE == cp.device || cp.device ==
						cp.ANDROID) && cp.InitMedia();
					cp.beginMovie();
					return true
				}
				if (!this.paused) {
					a && (a == cp.ReasonForPlay.MOVIE_REWIND && cpInfoCurrentFrame < this.stage.lastFrame) && cp.em.fireEvent("CPMovieStart");
					return false
				}
				if (this.waitingForResources()) {
					cp.verbose && cp.log("set pendingPlay = true. movie cannot play since resources not available");
					this.pendingPlay = true;
					return false
				}
				cp.verbose && cp.log("movie play");
				this.am.ssp = 0;
				var b = document.getElementById("playbar");
				b && b.play != void 0 && b.play();
				if (!this.tocPlaybarHandlerSet) {
					this.tocPlaybarHandlerSet =
						true;
					b && b.animator && b.animator.startTimer();
					if (this.stage.getSlideDiv() && b && b.animator) {
						cp.mainContainer.onmouseover = cp.handleMouseOver;
						if (cp.device == cp.DESKTOP) cp.mainContainer.onmousemove = cp.handleMouseMove;
						cp.mainContainer.onmouseout = cp.handleMouseOut
					}
				}
				this.now = new Date;
				this.elapsedFramesResidue = 0;
				if (this.startTime == void 0) {
					this.startTime = this.now;
					cp.em.fireEvent("CPMovieStart")
				} else this.reasonForPause == cp.ReasonForPause.MOVIE_ENDED && cpInfoCurrentFrame < this.stage.lastFrame ? cp.em.fireEvent("CPMovieStart") :
					a && a == cp.ReasonForPlay.MOVIE_REWIND && cpInfoCurrentFrame < this.stage.lastFrame ? cp.em.fireEvent("CPMovieStart") : cp.em.fireEvent("CPMovieResume", a);
				this.paused = false;
				return _registerForUpdateTimeBasedSystemVariables = true
			}
		},
		pause: function (a) {
			if (this.paused && a != cp.ReasonForPause.WAIT_FOR_RESOURCES && (this.waitingForResources() || this.reasonForPause == cp.ReasonForPause.WAIT_FOR_RESOURCES)) {
				cp.verbose && cp.log("set pendingPause = true. movie cannot pause since resources not available");
				this.pendingPause = true;
				this.pendingReasonForPause = a
			} else if (this.paused) {
				if (this.reasonForPause != a && this.reasonForPause == cp.ReasonForPause.MOVIE_ENDED) {
					this.reasonForPause = a;
					cp.em.fireEvent("CPMovieStart")
				}
				this.am && this.am.reasonForPause != a && this.am.pause(a);
				this.vdm && this.vdm.reasonForPause != a && this.vdm.pause(a)
			} else {
				cp.verbose && cp.log("movie pause " + a);
				this.reasonForPause = a;
				cp.verbose && cp.log("movie.pause deleting pendingPlay");
				delete this.pendingPlay;
				if (a == cp.ReasonForPause.INTERACTIVE_ITEM) this.stage.interactivePauseFrame =
					cpInfoCurrentFrame;
				var b = document.getElementById("playbar");
				b && b.pause != void 0 && a != cp.ReasonForPause.WAIT_FOR_RESOURCES && b.pause();
				a == cp.ReasonForPause.MOVIE_ENDED && (b && b.animator) && b.animator.showPlaybar(true);
				this.paused = true;
				this.am && this.am.pause(a);
				this.vdm && this.vdm.pause(a);
				cp.em.fireEvent("CPMoviePause", a)
			}
		},
		blockUI: function () {
			if (!this.blockedUI) {
				this.blockedUI = true;
				cp("blockUserInteraction").style.display = "block";
				cp("blockUserInteraction").style.width = "100%";
				cp("blockUserInteraction").style.height =
					"100%";
				cp("blockUserInteraction").style.zIndex = 1E4;
				this.preloadRot = 0
			}
		},
		unblockUI: function () {
			if (this.blockedUI) {
				this.blockedUI = false;
				cp("blockUserInteraction").style.display = "none"
			}
		},
		jumpToFrame: function (a) {
			if (a == "cpInfoLastVisitedSlide") a = this.cpInfoLastVisitedSlideStartFrame;
			var b = cp.movie.stage.getSlideIndexForFrame(a);
			if (this.waitingForResources()) {
				if (b != cpInfoCurrentSlideIndex) {
					this.am.resetAllWaitingAudios();
					this.vdm.resetAllWaitingVideos();
					cp.verbose && cp.log("movie jumping to another slide. resetting pending audio/video")
				} else cp.verbose &&
					cp.log("movie cannot jumpToFrame since resources not available");
				this.pendingJump = a;
				return false
			}
			if (!this.stage.canUpdateToFrame(a, b)) {
				cp.verbose && cp.log("movie cannotUpdateToFrame " + a);
				return false
			}
			if (this.pm.isLoading()) {
				cp.verbose && cp.log("movie cannot jumpToFrame since prefetchManager is loading");
				this.pendingJump = a;
				return false
			}
			_cpInfoCurrentFrame = this._jumpFrame = a;
			return true
		},
		executeAction: function (a) {
			cp.verbose && cp.log("execute action str [" + a + "]");
			if (a && a != "") try {
				eval(a)
			} catch (b) {
				cp.log(b)
			}
		},
		frameBasedExecuteAction: function (a) {
			if (this.executedActionOnFrame != this.stage.updatingFrame) {
				this.executedActionOnFrame = this.stage.updatingFrame;
				this.executeAction(a)
			}
		},
		mousePath: function (a, b, d) {
			if (!(b < a.afrom || b > a.ato) || d) {
				var c = a.ato - a.afrom;
				if (c != 0) {
					c = c - Math.floor(cpInfoFPS * 0.5);
					c <= 0 && (c = 0);
					var g = this.motionPathArgs,
						e = cp.cloneObject(g.b);
					if (cp.responsive) {
						e = e[cp.ResponsiveProjWidth];
						if (!cp.movie.stage.isSlideBGCropped()) {
							e[0] = cp.project.clientWidth * e[0] / cp.ResponsiveProjWidth;
							e[2] = cp.project.clientWidth *
								e[2] / cp.ResponsiveProjWidth
						}
					}
					var f = e[2] - e[0],
						j = e[3] - e[1],
						h = b - a.afrom;
					if (!(h < 0)) {
						var b = e[0],
							d = e[1],
							n = e[2],
							e = e[3],
							i = 1;
						g.s == 1 && (i = 0.5);
						var l = n,
							o = e;
						if (c > 0 && h < c) {
							l = 0 == g.t || 0 == f || 0 == j;
							c = Math.pow(h / c, i);
							if (l) {
								l = b + f * c;
								o = d + j * c
							} else {
								f = c * c;
								j = 1 - c;
								g = j * j;
								l = b * g + 2 * n * j * c + n * f;
								o = d * g + 2 * d * j * c + e * f
							}
						}
						a.children[0].element.left = l;
						a.children[0].element.style.left = l + "px";
						a.children[0].element.top = o;
						a.children[0].element.style.top = o + "px"
					}
				}
			}
		},
		waitingForResources: function () {
			var a = this.im && this.im.imagesNotLoaded(),
				b = this.stage && !this.stage.hasItemsLoaded(),
				d = this.am && this.am.pendingAudios() > 0,
				c = this.vdm && this.vdm.pendingVideos() > 0,
				g = this.ms && this.ms.pendingItems() > 0;
			if (a || b || d || c || g) {
				cp.verbose && cp.log("waiting for " + a + " " + b + " " + d + " " + c + " " + g + " yield = " + this.stage.yield);
				return true
			}
			return false
		},
		resetAllWaitingResources: function () {
			this.im && this.im.reset();
			if (this.stage) this.stage.itemsNotLoaded = [];
			this.am && this.am.resetAllWaitingAudios();
			this.vdm && this.vdm.resetAllWaitingVideos();
			this.ms && this.ms.reset();
			this.waitedForResources =
				0
		},
		_onEnterFrame: function () {
			if (!cp.isBlockedForLMS()) {
				this.refreshMovie();
				this.am.updateAudioViews();
				this.vdm.updateVideoViews();
				if (this.waitingForResources()) {
					this.waitedForResources = this.waitedForResources + this.POLL_INTERVAL;
					if (this.waitedForResources >= this.MAX_WAIT_TIME) {
						cp.verbose && cp.log("waited too long...given up waiting! Paused = " + this.paused + " reason = " + this.reasonForPause + " pendingPlay = " + this.pendingPlay);
						this.resetAllWaitingResources();
						this.unblockUI();
						if (!this.paused && this.pendingPause) {
							this.pause(this.pendingReasonForPause);
							delete this.pendingPause;
							delete this.pendingReasonForPause
						} else(this.paused && this.reasonForPause == cp.ReasonForPause.WAIT_FOR_RESOURCES || this.pendingPlay) && this.play()
					} else if (this.waitedForResources >= this.MIN_WAIT_TIME_TO_BLOCK_UI) {
						this.pause(cp.ReasonForPause.WAIT_FOR_RESOURCES);
						this.blockUI()
					} else this.waitedForResources >= this.MIN_WAIT_TIME_TO_PAUSE_MOVIE && this.pause(cp.ReasonForPause.WAIT_FOR_RESOURCES)
				} else {
					this.waitedForResources > 0 && cp.verbose && cp.log("finished waiting! Paused = " + this.paused +
						" reason = " + this.reasonForPause + " pendingPlay = " + this.pendingPlay);
					this.waitedForResources = 0;
					this.unblockUI();
					if (!this.paused && this.pendingPause) {
						this.pause(this.pendingReasonForPause);
						delete this.pendingPause;
						delete this.pendingReasonForPause
					} else if (this.paused && this.reasonForPause == cp.ReasonForPause.WAIT_FOR_RESOURCES || this.pendingPlay) this.play();
					else {
						var a = this.pendingJump;
						if (a) {
							cp.verbose && cp.log("jumping to pending jump frame " + a);
							delete this.pendingJump;
							this.jumpToFrame(a)
						} else if (this.paused) {
							if (cpInfoCurrentFrame ==
								this._jumpFrame) {
								if (this.stage.fallsOutsideCurrentSlide(cpInfoCurrentFrame)) {
									var b = this.stage.getSlideIndexForFrame(cpInfoCurrentFrame);
									if (b != -1)
										if (this.stage.yield) delete this.stage.yield;
										else {
											this.stage.loadAssetsForSlideAtIndex(b);
											this.stage.yield = 1;
											return
										}
								}
								this._jumpFrame = -1;
								this.stage.updateFrame(cp.Timeline.ReasonForUpdate.JUMP)
							}
							this.stage.UpdateFeedbacks();
							this.stage.updateFrameCurrentOnPause()
						} else {
							this.elapsedMovieTime = ((new Date).getTime() - this.startMovieTime) * cp.movie.speed;
							a = new Date;
							this.stage.UpdateFeedbacks();
							if (this.stage.fallsOutsideCurrentSlide(cpInfoCurrentFrame)) {
								b = this.stage.getSlideIndexForFrame(cpInfoCurrentFrame);
								if (b != -1)
									if (this.stage.yield) delete this.stage.yield;
									else {
										this.stage.loadAssetsForSlideAtIndex(b);
										this.stage.yield = 1;
										return
									}
							}
							if (cpInfoCurrentFrame == this._jumpFrame) {
								this._jumpFrame = -1;
								this.stage.updateFrame(cp.Timeline.ReasonForUpdate.JUMP)
							} else this.stage.updateFrame(cp.Timeline.ReasonForUpdate.PROGRESS); if (!this.paused) {
								var d = new Date,
									b = this.now;
								this.now =
									d;
								if (cp.disablePaceMaker) this.framesToSkip = 1;
								else {
									if (this.elapsedFramesResidue == void 0) this.elapsedFramesResidue = 0;
									var c = 0;
									if (1 == this.speed && this.am.pace) c = this.am.pace - cpInfoCurrentFrame;
									else if (cp.device == cp.IDEVICE && !cp.movie.PPTXSlide) c = this.speed;
									else {
										a = d.getTime() - a.getTime();
										cp.movie.PPTXSlide && (a = 0);
										c = (this.now.getTime() - b.getTime() - a) * cpInfoFPS / 1E3
									}
									this.framesToSkipForPlaybar = this.elapsedFramesResidue = this.elapsedFramesResidue + c;
									this.framesToSkip = Math.floor(this.framesToSkipForPlaybar);
									this.elapsedFramesResidue =
										this.elapsedFramesResidue - this.framesToSkip
								}
								cp.verbose && cp.log("am.pace = " + this.am.pace + " elapsedFramesResidue = " + this.elapsedFramesResidue + " skipping = " + this.framesToSkip);
								this.stage.attemptToAdvanceCurrentFrameByOffset(this.framesToSkip)
							}
						}
					}
				}
			}
		},
		refreshMovie: function () {
			var a = cp("cpdmtxtn");
			if (!a) {
				var b = cp("cpDocument");
				if (!b) return;
				a = cp.newElem("div");
				a.id = "cpdmtxtn";
				a.style.display = "block";
				b.parentElement.insertBefore(a, b);
				a.style.opacity = 0;
				a.style.userSelect = "none";
				a.style["-ms-user-select"] =
					"none";
				a.style["-webkit-user-select"] = "none";
				a.style["-moz-user-select"] = "none";
				if (cp.device == cp.ANDROID) {
					a.style.width = "1px";
					a.style.height = "1px";
					a.style.left = "-1000px";
					a.style.top = "-1000px";
					a.style.position = "absolute"
				}
				a.setAttribute("aria-hidden", "true")
			}
			a.innerHTML = (new Date).toString()
		},
		registerQuizVariableSetters: function () {
			if (cp.movie.playbackController) {
				var a = cp.movie.playbackController.GetQuizController();
				if (a) {
					a.quizInScopeSetter = cp._cpInQuizScope;
					a.quizScopeSlideSetter = cp._cpQuizScopeSlide
				}
			}
		},
		initLMS: function () {
			if (this.playbackController) {
				this.playbackController.GetLoadingResumeDataBln();
				if (!this.m_hasIsTrackedBeenSet) {
					this.playbackController.GetIsTrackedFlag() ? this.playbackController.SetIsTracked(true) : this.playbackController.SetIsTracked(false);
					this.m_hasIsTrackedBeenSet = true;
					this.playbackController.GetLoadingResumeDataBln()
				}
				typeof cp.LMSDriverHolder == "undefined" && (!this.playbackController.LMSIsAICC() && !this.playbackController.IsRunningInConnect()) && cp.handleVariablesInURLParams();
				!this.playbackController.IsRunningInConnect() &&
					(typeof cp.LMSDriverHolder != "undefined" && cp.LMSDriverHolder && cp.LMSDriverHolder.GetStudentName) && cp.vm.setVariableValue("cpQuizInfoStudentName", cp.LMSDriverHolder.GetStudentName(), false)
			}
		},
		resumeMovieSpecificValue: function () {
			if (this.playbackController) {
				var a = this.playbackController.GetRestoredQuizSlide();
				a >= 0 && (_cpInfoCurrentFrame = a)
			}
		}
	};
	cp.QuizLibraryInit = function () {
		cp.g_ShouldRandomize && cp.NewQuizLibraryInit()
	};
	cp.NewQuizLibraryInit = function () {
		if (cp.PlaybackController && !cp.movie.playbackController) {
			cp.movie.playbackController =
				cp.IsRunningInACAP ? new cp.ACAPPlaybackController : new cp.PlaybackController;
			cp.movie.playbackController.InitializeReportingVariables();
			cp.movie.playbackController.InitializePlaybackController()
		}
		cp.movie.registerQuizVariableSetters();
		if (cp.g_ShouldRandomize) cp.ContinueQuizLibraryInit();
		else if (cp.resumeDataChunk != "" && cp.resumeDataChunk != void 0 && cp.resumeDataChunk != "0") {
			var a = cp.movie.playbackController;
			a && a.RestoreQuizState()
		}
		cp.movie.initLMS()
	};
	cp.ContinueQuizLibraryInit = function () {
		cp.movie.updateMovie();
		cp.movie.stage.createQuestionObjs();
		cp.movie.playbackController && cp.movie.playbackController.AddQuestionSlideNames();
		cp.movie.stage.initializeGraphManager()
	};
	cp.CPPreInit = function () {
		cp.CPProjInit();
		cp.shouldScale = cp.D.project.shc;
		cp.responsive = cp.D.project_main.useResponsive;
		if (cp.IsRunningInACAP || cp.IsRunningInALEC) {
			cp.D.playBarProperties.hasPlayBar = false;
			cp.D.borderProperties.hasBorder = false;
			cp.D.project.hasTOC = false
		}
		cp.loadedModules = {
			playbar: cp.D.playBarProperties.hasPlayBar && cp("playbar") != void 0,
			border: cp.D.borderProperties.hasBorder,
			toc: cp.D.project.hasTOC && cp("toc") != void 0
		};
		if (cp.device == cp.IDEVICE)
			if (cp.mat == void 0) {
				if (cp.IOSMajor <= cp.IOS5) cp.multiAudioTrack = false
			} else cp.multiAudioTrack = false;
		if (cp.device == cp.ANDROID) cp.multiAudioTrack = true;
		var a = cp.D.project_main.pools;
		if (a == void 0 || a.length <= 0) cp.poolManager = void 0;
		else {
			cp.poolManager = new cp.PoolManager;
			cp.poolManager.loadPools();
			cp.g_ShouldRandomize && cp.poolManager.randomizePools()
		}
		PPTXLib.initializePPTXLibrary();
		if (a = cp.D.project_main.slideVideos)
			for (var b =
				0, d = 1; d < a.length; ++b, ++d) {
				var c = cp.D[a[b]],
					g = cp.D[a[d]];
				if (c.to + 1 == g.from) {
					c = cp.D[c.mdi];
					g = cp.D[g.mdi];
					if (Math.abs(c.vst - g.vsf) <= 0.1 && c.mp4 == g.mp4) {
						c.continueToNextSlide = 1;
						g.continueFromPrevSlide = 1
					}
				}
			}
		for (var a = (cp.D.project_main.slideAudios || "").split(","), b = (cp.D.project_main.slides || "").split(","), d = a.length, g = b.length, e = c = 0; e < g && c < d; ++e) {
			var f = cp.D[b[e]];
			if (!f) break;
			var j = cp.D[a[c]];
			if (!j) break;
			if (j.from <= f.to) f.audioName = a[c];
			f.to >= j.to && ++c
		}
		a = (cp.D.project_main.slides || "").split(",");
		b = a.length;
		for (d = 0; d < b; ++d) {
			g = cp.D[a[d]];
			if (!g) break;
			for (var h in g.si) {
				c = g.si[h];
				if (cp.kCPOTFLVItem == c.t || cp.kCPOTVideo == c.t || cp.kCPFullMotion == c.t || cp.kCPOTVideoResource == c.t) {
					if (!g.videos) g.videos = [];
					g.videos.push(c.n)
				}
			}
		}
		if (cp.responsive) {
			if (cp.responsiveWidths == void 0) cp.responsiveWidths = cp.D.project.cssWidths;
			if (cp.responsiveAllBPWidths == void 0) cp.responsiveAllBPWidths = cp.D.project.allbpswidth;
			(cp.m_isPreview || cp.m_isLMSPreview) && cp.parentWindow.initializeResponsivePreview && cp.parentWindow.initializeResponsivePreview(cp.D.project.cssWidths,
				cp.D.project.w, cp.D.project.h, cp.D.project_main.cBW, cp.DESKTOP == cp.device);
			cp.updateResponsiveGlobals()
		}
		cp.offsetInnerWidth = 0;
		cp.getInnerWidth();
		h = cp.getProjectContainer();
		if (cp.responsive) {
			h.style.width = "100%";
			h.style.height = "100%"
		} else {
			h.style.width = cp.D.project.w + (cp.loadedModules.toc && !cp.D.tocProperties.overlay ? cp.D.tocProperties.width : 0) + "px";
			h.style.height = cp.D.project.h + "px"
		}
		h = cp.getMainContainer();
		a = (cp.offsetInnerWidth - parseFloat(h.style.width)) / 2;
		h.style.left = cp.responsive ? "0px" : (a > 0 ? a :
			0) + "px";
		if (!cp.playImage) cp.playImage = cp("playImage");
		if (!cp.autoplayImage) cp.autoplayImage = cp("autoplayImage");
		if (!cp.autoplayDiv) cp.autoplayDiv = cp("autoplayDiv");
		if (!cp.gesturesDiv) {
			cp.gesturesDiv = cp("gestureIcon");
			if (cp.useg) {
				cp.gesturesDiv.style.display = "block";
				cp.registerGestureEvent(cp.gesturesDiv, cp.GESTURE_EVENT_TYPES.TAP, cp.showGesturesHint)
			} else cp.gesturesDiv.style.display = "none"
		}
		if (cp.device != cp.DESKTOP) {
			cp.playImage.className = "autoPlayButton";
			if (cp.useg) cp.gesturesDiv.style.display = "block"
		} else {
			if (!cp.D.project_main.autoplay) cp.playImage.className =
				"autoPlayButton";
			cp.gesturesDiv.style.display = "none"
		} if (!cp.ccdv) {
			cp.ccdv = cp("cc");
			cp.fixWebkitScaling(cp.ccdv)
		}
		if (!cp.pwdv) cp.pwdv = cp("pwdv");
		if (!cp.exdv) cp.exdv = cp("exdv");
		if (!cp.preloaderImage) cp.preloaderImage = cp("preloaderImage");
		if (cp.movie == void 0) {
			cp.movie = new cp.Movie(cp("project"));
			cp.eventManager = new cp.EventManager;
			cp.variablesManager = new cp.VariablesManager;
			cp.movie.audioManager = new cp.AudioManager;
			cp.movie.videoManager = new cp.VideoManager;
			cp.movie.mediaSeeker = new cp.MediaSeeker;
			cp.g_ShouldRandomize ||
				cp.NewQuizLibraryInit();
			cp.movie.vdm.load();
			cp.movie.am.load();
			h = cp.movie.stage.getSlideNameForIndex(0);
			cp.multiAudioTrack && h != "" && cp.movie.am.preload(h);
			h != "" && cp.movie.vdm.preload(h);
			cp.movie.imageManager = new cp.ImageManager;
			cp.movie.prefetchManager = new cp.PrefetchManager;
			cp.movie.handleProjectOptions();
			cp.movie.pm.preloadSlideAssets(0);
			cp.movie.topOffset = 0;
			h = cp.getProject();
			if (!cp.responsive) h.style.left = (cp.loadedModules.toc && !cp.D.tocProperties.overlay && cp.D.tocProperties.position == 1 ? cp.D.tocProperties.width :
				0) + "px"
		}
		if (h = cp.movie.stage.getSlideDiv()) {
			h.ondblclick = cp.handleDblClick;
			h.oncontextmenu = cp.handleRightClick
		}
		cp.ccInit(cp.D.ccProperties);
		cp.loadedModules.border && cp.borderInit(cp.D);
		cp.loadedModules.playbar ? cp.playBarInit(cp.D) : cp.setMovieLeftTopRightBottom(0, 0, 0, 0);
		cp.loadedModules.toc && cp.responsive && cp.tocInit(cp.D, 0, 0, 0, 0);
		cp("project").style.zIndex = 1;
		if (cp.loadedModules.toc) cp("toc").style.zIndex = 2;
		if (cp.loadedModules.playbar) cp("playbar").style.zIndex = 3;
		cp.ccdv = cp("cc");
		cp.pwdv = cp("pwdv");
		cp.exdv = cp("exdv");
		if (cp.ccdv) cp.ccdv.style.zIndex = 4;
		if (cp.gesturesDiv) cp.gesturesDiv.style.zIndex = 4;
		if (cp.pwdv) cp.pwdv.style.zIndex = 5;
		if (cp.exdv) cp.exdv.style.zIndex = 6;
		if (cp.m_isPreview && !cp.m_isEdgeInspectPreview && !cp.responsive) {
			h = cp.vm.getGeoVarsInfo();
			if (h.length > 0 && !cp.fakeGeo) {
				cp.fakeGeo = document.createElement("div");
				cp.fakeGeo.id = "cpFakeGeo";
				a = document.createElement("div");
				a.innerHTML = cp.D.geoProps.geoEmul || "Emulate Geolocation";
				a.id = "cpFakeGeoTitle";
				cp.fakeGeo.appendChild(a);
				var n = document.createElement("select");
				n.id = "cpFakeGeoList";
				(a = cp.D.geoProps.geoNone) || (a = "nowhere");
				n.options[0] = new Option("<" + a + ">", "");
				for (var i in h) n.options[n.options.length] = new Option(h[i].name, cp.vm.getVariableValue(h[i].name));
				n.addEventListener("change", function () {
					cpInfoGeoLocation = n.value
				});
				cp.fakeGeo.appendChild(n);
				cp.fakeGeo.style.zIndex = 7;
				document.body.appendChild(cp.fakeGeo)
			}
		}
		if (cp.dynamicLogControl) {
			if (cp.consolidateLogs) cp.logArray = [];
			var l = cp.newElem("div");
			l.style.cssText = "z-index:100;position:absolute;left:0px; top:0px; width:20px; height:20px;display:block;background-image:url(assets/htmlimages/hotspot_correct_answer_normal.png);opacity:" +
				(cp.consolidateLogs ? 1 : 0.5);
			l.onclick = function () {
				if (!cp.logArray) cp.logArray = [];
				if (cp.consolidateLogs) {
					for (var a = 0; a < cp.logArray.length; ++a) console.log(cp.logArray[a]);
					cp.logArray.length = 0
				}
				cp.consolidateLogs = !cp.consolidateLogs;
				l.style.opacity = cp.consolidateLogs ? 1 : 0.5
			};
			l.innerHTML = "<font color='#000000' style='font-size:10px'>consolidateLogs</font>";
			document.body.appendChild(l);
			var o = cp.newElem("div");
			o.style.cssText = "z-index:100;position:absolute;left:0px; top:30px; width:20px; height:20px;display:block;background-image:url(assets/htmlimages/hotspot_correct_answer_normal.png);opacity:" +
				(cp.movie.im.verbose ? 1 : 0.5);
			o.onclick = function () {
				cp.movie.im.verbose = !cp.movie.im.verbose;
				o.style.opacity = cp.movie.im.verbose ? 1 : 0.5
			};
			o.innerHTML = "<font color='#000000' style='font-size:10px'>imageLogs</font>";
			document.body.appendChild(o);
			var k = cp.newElem("div");
			k.style.cssText = "z-index:100;position:absolute;left:60px; top:30px; width:20px; height:20px;display:block;background-image:url(assets/htmlimages/arrow_right.gif);opacity:" + (cp.movie.pm.viewCache ? 1 : 0.5);
			k.onclick = function () {
				cp.movie.pm.viewCache = !cp.movie.pm.viewCache;
				if (cp.movie.pm.viewCache) {
					cp.movie.pm.cacheViews = [];
					for (var a = 0; a < cp.movie.pm.cache.length; ++a) cp.movie.pm.cacheViews[a] = new cp.CacheView(a);
					cp.movie.pm.showCache()
				} else {
					for (a in cp.movie.pm.cacheViews) {
						document.body.removeChild(cp.movie.pm.cacheViews[a].view);
						--cp.CacheView.NUM_CACHE_VIEWS
					}
					delete cp.movie.am.cacheViews
				}
				k.style.opacity = cp.movie.pm.viewCache ? 1 : 0.5
			};
			k.innerHTML = "<font color='#000000' style='font-size:10px'>view</font>";
			document.body.appendChild(k);
			var m = cp.newElem("div");
			m.style.cssText = "z-index:100;position:absolute;left:0px; top:60px; width:20px; height:20px;display:block;background-image:url(assets/htmlimages/hotspot_correct_answer_normal.png);opacity:" + (cp.movie.am.verbose ? 1 : 0.5);
			m.onclick = function () {
				cp.movie.am.verbose = !cp.movie.am.verbose;
				m.style.opacity = cp.movie.am.verbose ? 1 : 0.5
			};
			m.innerHTML = "<font color='#000000' style='font-size:10px'>audioLogs</font>";
			document.body.appendChild(m);
			var p = cp.newElem("div");
			p.style.cssText = "z-index:100;position:absolute;left:60px; top:60px; width:20px; height:20px;display:block;background-image:url(assets/htmlimages/arrow_right.gif);opacity:" +
				(cp.movie.am.viewAudio ? 1 : 0.5);
			p.onclick = function () {
				cp.movie.am.viewAudio = !cp.movie.am.viewAudio;
				p.style.opacity = cp.movie.am.viewAudio ? 1 : 0.5;
				if (cp.movie.am.viewAudio) {
					cp.movie.am.audioViews = [];
					for (var a = 0; a < cp.movie.am.MAX_AUDIO_CHANNELS; ++a) {
						var b = cp.movie.am.audioChannels[a];
						cp.movie.am.audioViews[a] = new cp.AudioView(b)
					}
				} else {
					for (a in cp.movie.am.audioViews) {
						b = cp.movie.am.audioViews[a];
						document.body.removeChild(b.view);
						--cp.MediaView.NUM_MEDIA_VIEWS
					}
					delete cp.movie.am.audioViews
				}
			};
			p.innerHTML = "<font color='#000000' style='font-size:10px'>view</font>";
			document.body.appendChild(p);
			i = cp.newElem("div");
			i.style.cssText = "z-index:100;position:absolute;left:120px; top:60px; width:20px; height:20px;display:block;background-image:url(assets/htmlimages/hotspot_correct_answer_normal.png);opacity:1";
			i.onclick = function () {
				cp.movie.am.resetAllWaitingAudios()
			};
			i.innerHTML = "<font color='#000000' style='font-size:10px'>!Wait</font>";
			document.body.appendChild(i);
			var q = cp.newElem("div");
			q.style.cssText = "z-index:100;position:absolute;left:0px; top:90px; width:20px; height:20px;display:block;background-image:url(assets/htmlimages/hotspot_correct_answer_normal.png);opacity:" +
				(cp.movie.vdm.verbose ? 1 : 0.5);
			q.onclick = function () {
				cp.movie.vdm.verbose = !cp.movie.vdm.verbose;
				q.style.opacity = cp.movie.vdm.verbose ? 1 : 0.5
			};
			q.innerHTML = "<font color='#000000' style='font-size:10px'>videoLogs</font>";
			document.body.appendChild(q);
			var r = cp.newElem("div");
			r.style.cssText = "z-index:100;position:absolute;left:60px; top:90px; width:20px; height:20px;display:block;background-image:url(assets/htmlimages/arrow_right.gif);opacity:" + (cp.movie.vdm.viewVideo ? 1 : 0.5);
			r.onclick = function () {
				cp.movie.vdm.viewVideo = !cp.movie.vdm.viewVideo;
				r.style.opacity = cp.movie.vdm.viewVideo ? 1 : 0.5;
				if (cp.movie.vdm.viewVideo) {
					cp.movie.vdm.videoViews = [];
					if (cp.device == cp.IDEVICE || cp.device == cp.ANDROID) {
						cp.movie.vdm.slideVideoChannel && cp.movie.vdm.videoViews.push(new cp.VideoView(cp.movie.vdm.slideVideoChannel));
						cp.movie.vdm.tocVideoChannel && cp.movie.vdm.videoViews.push(new cp.VideoView(cp.movie.vdm.tocVideoChannel))
					} else {
						cp.movie.vdm.slideVideoChannel0 && cp.movie.vdm.videoViews.push(new cp.VideoView(cp.movie.vdm.slideVideoChannel0));
						cp.movie.vdm.slideVideoChannel1 && cp.movie.vdm.videoViews.push(new cp.VideoView(cp.movie.vdm.slideVideoChannel1));
						cp.movie.vdm.tocVideoChannel0 && cp.movie.vdm.videoViews.push(new cp.VideoView(cp.movie.vdm.tocVideoChannel0));
						cp.movie.vdm.tocVideoChannel1 && cp.movie.vdm.videoViews.push(new cp.VideoView(cp.movie.vdm.tocVideoChannel1))
					}
					for (var a = 0; a < cp.movie.vdm.MAX_VIDEO_CHANNELS; ++a) {
						var b = cp.movie.vdm.videoChannels[a];
						cp.movie.vdm.videoViews.push(new cp.VideoView(b))
					}
				} else {
					for (a in cp.movie.vdm.videoViews) {
						b =
							cp.movie.vdm.videoViews[a];
						document.body.removeChild(b.view);
						--cp.MediaView.NUM_MEDIA_VIEWS
					}
					delete cp.movie.vdm.videoViews
				}
			};
			r.innerHTML = "<font color='#000000' style='font-size:10px'>view</font>";
			document.body.appendChild(r);
			i = cp.newElem("div");
			i.style.cssText = "z-index:100;position:absolute;left:120px; top:90px; width:20px; height:20px;display:block;background-image:url(assets/htmlimages/hotspot_correct_answer_normal.png);opacity:1";
			i.onclick = function () {
				cp.movie.vdm.resetAllWaitingVideos()
			};
			i.innerHTML =
				"<font color='#000000' style='font-size:10px'>!Wait</font>";
			document.body.appendChild(i);
			var s = cp.newElem("div");
			s.style.cssText = "z-index:100;position:absolute;left:0px; top:120px; width:20px; height:20px;display:block;background-image:url(assets/htmlimages/hotspot_incorrect_answer_normal.png);opacity:" + (cp.exceptionalLogs ? 1 : 0.5);
			s.onclick = function () {
				cp.exceptionalLogs = !cp.exceptionalLogs;
				s.style.opacity = cp.exceptionalLogs ? 1 : 0.5
			};
			s.innerHTML = "<font color='#000000' style='font-size:10px'>ErrorExcpn</font>";
			document.body.appendChild(s);
			var t = cp.newElem("div");
			t.style.cssText = "z-index:100;position:absolute;left:0px; top:150px; width:20px; height:20px;display:block;background-image:url(assets/htmlimages/hotspot_correct_answer_normal.png);opacity:" + (cp.verbose ? 1 : 0.5);
			t.onclick = function () {
				cp.verbose = !cp.verbose;
				t.style.opacity = cp.verbose ? 1 : 0.5
			};
			t.innerHTML = "<font color='#000000' style='font-size:10px'>verbose</font>";
			document.body.appendChild(t);
			var u = cp.newElem("div");
			u.style.cssText = "z-index:100;position:absolute;left:0px; top:180px; width:20px; height:20px;display:block;background-image:url(assets/htmlimages/hotspot_correct_answer_normal.png);opacity:" +
				(cp.disablePaceMaker ? 0.5 : 1);
			u.onclick = function () {
				cp.disablePaceMaker = !cp.disablePaceMaker;
				u.style.opacity = cp.disablePaceMaker ? 0.5 : 1
			};
			u.innerHTML = "<font color='#000000' style='font-size:10px'>PaceMaker</font>";
			document.body.appendChild(u);
			var v = cp.newElem("div");
			v.style.cssText = "z-index:100;position:absolute;left:0px; top:210px; width:20px; height:20px;display:block;background-image:url(assets/htmlimages/hotspot_correct_answer_normal.png);opacity:" + (cp.movie.ms.verbose ? 1 : 0.5);
			v.onclick = function () {
				cp.movie.ms.verbose = !cp.movie.ms.verbose;
				v.style.opacity = cp.movie.ms.verbose ? 1 : 0.5
			};
			v.innerHTML = "<font color='#000000' style='font-size:10px'>seekLogs</font>";
			document.body.appendChild(v);
			if (cp.device != cp.IDEVICE) {
				var w = cp.newElem("div");
				w.style.cssText = "z-index:100;position:absolute;left:0px; top:240px; width:20px; height:20px;display:block;background-image:url(assets/htmlimages/hotspot_correct_answer_normal.png);opacity:" + (cp.device == cp.IDEVICE ? 0.5 : 1);
				w.onclick = function () {
					if (cp.origDevice) {
						cp.device = cp.origDevice;
						delete cp.origDevice
					} else {
						cp.origDevice = cp.device;
						cp.device = cp.IDEVICE
					}
					w.style.opacity = cp.device == cp.IDEVICE ? 0.5 : 1
				};
				w.innerHTML = "<font color='#000000' style='font-size:10px'>emulateiDevice</font>";
				document.body.appendChild(w)
			}
			var x = cp.newElem("div");
			x.style.cssText = "z-index:100;position:absolute;left:0px; top:270px; width:20px; height:20px;display:block;background-image:url(assets/htmlimages/hotspot_correct_answer_normal.png);opacity:" + (cp.customConsole ? 0.5 : 1);
			x.onclick = function () {
				if (cp.customConsole) {
					document.body.removeChild(cp.customConsole);
					delete cp.customConsole
				} else {
					cp.customConsole = cp.newElem("textarea");
					cp.customConsole.style.cssText = "z-index:100;position:absolute;left:0px; top:300px; width:300px; height:100px;display:block;";
					cp.customConsole.readonly = true;
					document.body.appendChild(cp.customConsole);
					cp.log("navigator.userAgent = " + navigator.userAgent);
					cp.log("browser = " + cp.browser);
					cp.log("browserVersion = " + cp.browserVersion);
					cp.log("device = " + cp.device);
					if (cp.device == cp.IDEVICE) {
						cp.log("device flavor = " + cp.deviceFlavor);
						cp.log("IOS Version = " +
							cp.IOSMajor + "_" + cp.IOSMinor + "_" + cp.IOSBuild)
					}
				}
				x.style.opacity = cp.customConsole ? 0.5 : 1
			};
			x.innerHTML = "<font color='#000000' style='font-size:10px'>customConsole</font>";
			document.body.appendChild(x)
		}
		this.m_gestureHandler && this.m_gestureHandler.addCPEventListeners()
	};
	cp.CPPostInit = function () {
		cp.initObjectFactory();
		cp.loadedModules.playbar && cp.setPlaybarCallback(cp.movie);
		cp.loadedModules.toc && cp.setTOCCallback(cp.movie, cp.em);
		typeof cptb != "undefined" && cptb.PostInit();
		cp.adjustWindow();
		setTimeout("window.scrollTo(0,0);",
			500);
		cp.movie.startTimer();
		window.onorientationchange = window.onresize = cp.adjustWindow;
		cp.responsive && !cp.IsRunningInRoboHelp && (cp.parentWindow && cp.parentWindow.createSliders) && cp.parentWindow.createSliders(cp.D.project.cssWidths, cp.getCurrentSlideResponsiveHeight(cp.D.project_main.cBW), cp.D.project_main.cBW);
		if (cp.m_isPreview && !cp.m_isEdgeInspectPreview && cp.responsive) {
			window.addEventListener("message", function (a) {
				if (window.location.origin == a.origin)
					if (a.data == "cpgetGeoVarsInfo") {
						var b = cp.vm.getGeoVarsInfo();
						a.source.postMessage("cpfakeGeo" + JSON.stringify({
							geoVarsInfo: b,
							geoValues: y(b),
							title: cp.D.geoProps.geoEmul,
							dfltLoc: cp.D.geoProps.geoNone
						}), a.origin)
					} else a.data.substr(0, 9) == "cpfakeGeo" && (cpInfoGeoLocation = a.data.substr(9))
			}, false);
			if (window.parent && window.parent.postMessage) {
				if (!window.location.origin) window.location.origin = window.location.protocol + "//" + window.location.hostname + (window.location.port ? ":" + window.location.port : "");
				window.parent.postMessage("cpindexInited", window.location.origin)
			}
		}
	}
})();
window.cpAPIInterface = void 0;
window.cpAPIEventEmitter = void 0;
cp.EventEmitterClass = function () {
	this.callbackFns = {}
};
cp.EventEmitterClass.prototype.getGenericEventName = function (a) {
	a = a.replace(/^CP/, "");
	a = a.replace(/Event$/, "");
	return a.toUpperCase()
};
cp.EventEmitterClass.prototype.addEventListener = function (a, b, c) {
	void 0 == a && (a = "Default");
	var d = [];
	c && "" != c ? (void 0 == this.callbackFns[a] && (this.callbackFns[a] = {}), void 0 == this.callbackFns[a][c] && (this.callbackFns[a][c] = []), d = this.callbackFns[a][c]) : (void 0 == this.callbackFns[a] && (this.callbackFns[a] = []), d = this.callbackFns[a]);
	0 > d.indexOf(b) && d.push(b)
};
cp.EventEmitterClass.prototype.removeEventListener = function (a, b, c) {
	void 0 == a && (a = "Default");
	var d = [];
	if (c && "" != c) {
		if (void 0 == this.callbackFns[a] || void 0 == this.callbackFns[a][c]) return;
		d = this.callbackFns[a][c]
	} else {
		if (void 0 == this.callbackFns[a]) return;
		d = this.callbackFns[a]
	}
	a = d.indexOf(b); - 1 < a && d.splice(a, 1)
};
cp.EventEmitterClass.prototype.trigger = function (a) {
	a.Name = "CPAPI_" + this.getGenericEventName(a.cpName);
	var b = this.callbackFns[a.Name];
	if ("CPAPI_VARIABLEVALUECHANGED" == a.Name) {
		if (!b) return;
		b = b[a.Data.varName]
	}
	if (b)
		for (var c = 0; c < b.length; c++) b[c](a)
};
cp.ACAPEventEmitterClass = function () {
	cp.ACAPEventEmitterClass.baseConstructor.call(this)
};
cp.inherits(cp.ACAPEventEmitterClass, cp.EventEmitterClass);
cp.ACAPEventEmitterClass.prototype.addEventListener = function (a, b) {
	cp.ACAPEventEmitterClass.superClass.addEventListener.call(this, b, a)
};
cp.ACAPEventEmitterClass.prototype.removeEventListener = function (a, b) {
	cp.ACAPEventEmitterClass.superClass.removeEventListener.call(this, b, a)
};
cp.ACAPEventEmitterClass.prototype.trigger = function (a) {
	a.Name = "CAPI_" + this.getGenericEventName(a.cpName);
	var b = this.callbackFns.Default;
	if (b)
		for (var c = 0; c < b.length; c++) b[c](a)
};
cp.ACAPEventEmitterClass.prototype.getEvent = function (a, b, c) {
	b = document.createEvent("Events");
	b.initEvent("getData", !0, !0, null);
	b.data = a;
	b.get = c;
	for (a = 0; a < this.callbackFns.length; a++) this.callbackFns[a](event)
};
cp.CPAPIInterfaceClass = function () {
	this.m_eventEmitter = void 0
};
cp.CPAPIInterfaceClass.prototype = {
	canPlay: function () {
		return cp.isExpired || !cp.passwordAccepted ? !1 : !0
	},
	play: function () {
		this.canPlay() && cp.movie.paused && cp.playPause(!0)
	},
	pause: function () {
		cp.movie.paused || cp.playPause(!0)
	},
	rewind: function () {
		cp.rewind()
	},
	next: function () {
		cp.goToNextSlide()
	},
	previous: function () {
		cp.goToPreviousSlide()
	},
	fastForward: function () {
		cp.fastForward()
	},
	getPlaySpeed: function () {
		return cpInfoFPS
	},
	getDurationInFrames: function () {
		return cpInfoFrameCount
	},
	getDurationInSeconds: function () {
		return this.getDurationInFrames() /
			this.getPlaySpeed()
	},
	getVolume: function () {
		return cpCmndVolume
	},
	setVolume: function (a) {
		cpCmndVolume = a
	},
	navigateToTime: function (a) {
		a = a * cpInfoFPS / 1E3;
		0 <= a && 1 > a && (a = 1);
		cp.movie.jumpToFrame(a)
	},
	gotoSlide: function (a) {
		cpCmndGotoSlide = a
	},
	canNavigateToTime: function (a) {
		a = a * cpInfoFPS / 1E3;
		0 <= a && 1 > a && (a = 1);
		return cp.shouldMoveTo(a)
	},
	getCurrentFrame: function () {
		return cpInfoCurrentFrame
	},
	getCurrentSlideIndex: function () {
		return cpInfoCurrentSlide
	},
	getEventEmitter: function () {
		void 0 == this.m_eventEmitter && (this.m_eventEmitter =
			cp.IsRunningInACAP ? new cp.ACAPEventEmitterClass : new cp.EventEmitterClass);
		return this.m_eventEmitter
	},
	getVariableValue: function (a) {
		return window[a]
	},
	setVariableValue: function (a, b) {
		window[a] = b
	},
	close: function () {
		window.DoCPExit()
	},
	setAllowForceQuitContainer: function (a) {
		cp.setAllowForceQuitContainer = a ? !0 : !1
	},
	isSWFOrHTMLContent: function () {
		return "html"
	},
	getCurrentDeviceMode: function () {
		return cp.ResponsiveProjWidth == cp.responsiveWidths[0] ? "mobile" : cp.ResponsiveProjWidth == cp.responsiveWidths[1] ? "tablet" :
			"desktop"
	}
};
cp.ACAPInterfaceClass = function () {
	this.ReportingCriteriaMap = {};
	this.ReportingCriteriaMap.user_access = cp.ReportingOptionsEnum.access;
	this.ReportingCriteriaMap.quiz_only = cp.ReportingOptionsEnum.quiz_only;
	this.ReportingCriteriaMap.slideviews_only = cp.ReportingOptionsEnum.views_only;
	this.ReportingCriteriaMap.quiz_and_slideviews = cp.ReportingOptionsEnum.quiz_and_views;
	this.QuizCriteriaMap = {};
	this.QuizCriteriaMap.quiz_passed = cp.QuizCriteriaEnum.QuizIsPassed;
	this.QuizCriteriaMap.quiz_attempted = cp.QuizCriteriaEnum.QuizIsAttempted;
	this.QuizCriteriaMap.quizpassed_or_limitreached = cp.QuizCriteriaEnum.QuizIsPassedOrAttempLimitReached
};
cp.inherits(cp.ACAPInterfaceClass, cp.CPAPIInterfaceClass);
cp.ACAPInterfaceClass.prototype.controlVisibility = function (a, b) {
	"playbar" == a ? cp.D.playBarProperties.hasPlayBar = b : "toc" == a ? cp.D.project.hasTOC = b ? 1 : 0 : "cc" == a && (cp.D.playBarProperties.hasCC = b)
};
cp.ACAPInterfaceClass.prototype.navigateToItem = function (a) {
	cp.movie.jumpToFrame(cp.D[a].from)
};
cp.ACAPInterfaceClass.prototype.canNavigateToItem = function (a) {
	return cp.shouldMoveTo(cp.D[a].from)
};
cp.ACAPInterfaceClass.prototype.enterReviewMode = function () {
	setCpInfoCurrentFrame(0)
};
cp.ACAPInterfaceClass.prototype.prepareForACAPRender = function () {
	this.controlVisibility("playbar", !1);
	this.controlVisibility("cc", !1);
	this.controlVisibility("toc", !1)
};
cp.ACAPInterfaceClass.prototype.stop = function () {
	cpCmndRewindAndStop = !0
};
cp.ACAPInterfaceClass.prototype.setReportingOptions = function (a, b) {
	this.completionCriteria = this.ReportingCriteriaMap[b.criteriaChosen];
	this.quizCriteriaForCompletion = this.QuizCriteriaMap[b.quizCriteria];
	this.slideViewsForCompletion = b.slideviewsValue;
	this.slideViewsTypeForCompletion = cp.SlideViewsTypeEnum.percent;
	b.isPercentageSlideviews || (this.slideViewsTypeForCompletion = cp.SlideViewsTypeEnum.number);
	this.successCriteria = this.ReportingCriteriaMap[a.criteriaChosen];
	this.quizCriteriaForSuccess = this.QuizCriteriaMap[a.quizCriteria];
	this.slideViewsForSuccess = a.slideviewsValue;
	this.slideViewsTypeForSuccess = cp.SlideViewsTypeEnum.percent;
	a.isPercentageSlideviews || (this.slideViewsTypeForSuccess = cp.SlideViewsTypeEnum.number)
};
cp.ConnectInterfaceClass = function () {};
cp.inherits(cp.ConnectInterfaceClass, cp.CPAPIInterfaceClass);
cp.ConnectInterfaceClass.prototype.goToScrubPosition = function (a) {
	a = a * cpInfoFPS / 1E3;
	0 <= a && 1 > a && (a = 1);
	var b = cp.movie.stage.currentSlide,
		c = b.from,
		b = b.to;
	a < c ? cp.movie.jumpToFrame(c) : a > b ? cp.movie.jumpToFrame(b) : cp.movie.jumpToFrame(a)
};
cp.ConnectInterfaceClass.prototype.setAllowForceQuitContainer = function (a) {
	cp.setAllowForceQuitContainer = a ? !0 : !1
};
cp.ConnectInterfaceClass.prototype.close = function () {
	window.DoCPExit()
};
cp.ConnectInterfaceClass.prototype.showUI = function (a, b) {
	if ("playbar" == a) return b ? (this.setVariableValue("cpCmndShowPlaybar", 1), cp.disableInteractions = !1) : (this.setVariableValue("cpCmndShowPlaybar", 0), cp.disableInteractions = !0), !0;
	if ("closeButton" == a) {
		if (!1 == cpCmndShowPlaybar) return !1;
		for (var c = cp.PB.rootObj.firstRowArray, d, e = 0; e < c.length; e++) c[e].iconName == cp.PB.Btns.kBtnExit && (d = c[e]);
		if (void 0 == d) return !1;
		b ? (d.currDiv.style.display = "block", cp.PB.hideExitButton = !1, cp.adjustSkins && cp.adjustSkins()) :
			(d.currDiv.style.display = "none", cp.PB.hideExitButton = !0)
	}
	return !1
};
(function (b) {
	b.MouseClick = function (a, c) {
		b.MouseClick.baseConstructor.call(this, a, c);
		this.data = this.getAttribute("data")
	};
	b.inherits(b.MouseClick, b.Shape);
	b.MouseClick.prototype.drawForResponsive = b.MouseClick.prototype.drawIfNeeded = function (a) {
		if (!this.isDrawn || a) {
			a = this.bounds;
			b.responsive && (a = this.getAttribute("b"), a = a[b.ResponsiveProjWidth], a = {
				minX: a[0],
				minY: a[1],
				maxX: a[2],
				maxY: a[3]
			});
			var c = -a.minY + a.maxY,
				c = (this.canvas = b.createCanvas(a.minX, a.minY, Math.ceil(-a.minX + a.maxX), Math.ceil(c), this.element)).gc;
			c.save();
			var e = b.movie.stage.isSlideBGCropped(),
				d = 0,
				d = b.responsive ? e ? a.minX : b.project.clientWidth * a.minX / b.ResponsiveProjWidth : a.minX;
			this.element.style.left = d + "px";
			this.element.style.top = a.minY + "px";
			this.element.style.width = a.maxX - a.minX + "px";
			this.element.style.height = a.maxY - a.minY + "px";
			if (this.shape) try {
				var f = this.getAttribute("objectToBeHidden");
				this.shape(c, this.data, f, this.visible, this.divName) && (this.isDrawn = !0)
			} catch (g) {}
			c.restore()
		}
	}
})(window.cp);
(function (a) {
	a.TypingText = function (g, f) {
		a.TypingText.baseConstructor.call(this, g, f);
		this.id = this.getAttribute("id");
		this.positions = this.getAttribute("b");
		this.left = this.getAttribute("l");
		this.top = this.getAttribute("t");
		this.srcimage = this.getAttribute("ip");
		this.playKeyTap = this.getAttribute("pkt");
		this.isDrawn = !1;
		a.responsive && (this.responsiveCSS = this.getAttribute("css"))
	};
	a.inherits(a.TypingText, a.DisplayObject);
	a.TypingText.prototype.start = function (a, f) {
		this.addIfNeeded(a, f);
		if (!this.effectIsStarted ||
			a) this.updateEffects(this.hasEffect), this.effectIsStarted = !0
	};
	a.TypingText.prototype.reset = function () {
		delete a.ropMap[this.element.id];
		this.top = this.left = this.srcimage = this.positions = this.id = "";
		this.effectIsStarted = this.isDrawn = !1
	};
	a.TypingText.prototype.drawForResponsive = function (g) {
		if (this.isDrawn && !g) return !0;
		for (var f = 0; 1 > f; ++f) {
			var e = this.positions,
				h = e[2],
				j = e[3],
				c = e[0],
				e = e[1],
				i = a.movie.im.images[this.srcimage];
			if (i && i.nativeImage.complete) {
				var d = a.movie.stage.currentSlide;
				if (d) {
					var b = a.D["Slide" +
						d.id + "c"];
					if (!(b.aip ? b.aip : b.ip)) break
				}
				b = a("Slide" + d.id + "sf_c");
				if (!b) {
					this.canvas = a.createCanvas(0, 0, a.D.project.w, a.D.project.h, b);
					b = this.canvas.element;
					b.id = "Slide" + d.id + "sf_c";
					b.style.display = "block";
					b.style.position = "absolute";
					b.style.left = "0px";
					b.style.top = "0px";
					var k = document.getElementById("Slide" + d.id + "c");
					k.parentElement.insertBefore(b, k.nextSibling)
				}
				a.movie.stage.isSlideBGCropped() ? (d = a.D[d.mdi].css[a.ResponsiveProjWidth], b.style.left = -d.crop.x + "px", b.style.top = -d.crop.y + "px", b.style.width =
					a.D.project.w + "px", b.style.height = a.D.project.h + "px") : (b.style.left = "0px", b.style.top = "0px", b.style.width = "100%", b.style.height = "100%");
				g || (d = b.getContext("2d"), d.setTransform(1, 0, 0, 1, 0 > this.left ? -this.left : 0, 0 > this.top ? -this.top : 0), d.translate(0, 0), d.drawImage(i.nativeImage, c, e, h, j, Math.floor(this.left), Math.floor(this.top), Math.floor(h), Math.floor(j)));
				this.playKeyTap && (a.movie.playKeyTap && !g) && a.movie.am.playKeyTap();
				this.isDrawn = !0
			}
		}
		return !0
	};
	a.TypingText.prototype.addIfNeeded = function (g, f) {
		if ((!a.responsive || !this.drawForResponsive(g, f)) && !this.isDrawn) {
			for (var e = this.id, h = 0, j = 0; 1 > j; ++j) {
				var c = this.positions,
					h = h + 1,
					c = "#" + e + h + "{position: absolute; width:" + (c[2] + "px") + "; height:" + (c[3] + "px") + "; display:block; background:url(" + this.srcimage + ") " + (-c[0] + "px") + " " + (-c[1] + "px") + "; }",
					i = document.getElementsByTagName("style")[0];
				!1 == (-1 != i.innerHTML.indexOf(c)) && i.appendChild(document.createTextNode(c));
				c = a.newElem("img");
				c.id = e + h;
				c.src = "assets/htmlimages/img_trans.gif";
				c.style.left = this.left + "px";
				c.style.top =
					this.top + "px";
				c.width = 1;
				c.height = 1;
				this.element.appendChild(c)
			}
			this.isDrawn = !0;
			this.playKeyTap && a.movie.playKeyTap && a.movie.am.playKeyTap()
		}
	}
})(window.cp);
(function (c) {
	c.HighlightBox = function (q, o) {
		c.HighlightBox.baseConstructor.call(this, q);
		this.visible = this.getAttribute("visible");
		this.parentDivName = this.getAttribute("dn");
		this.transIn = c.D[this.parentDivName].trin;
		var a = this.getAttribute("b"),
			e = document.getElementById(this.parentDivName);
		this.actualParent = e;
		this.bounds = {
			minX: a[0],
			minY: a[1],
			maxX: a[2],
			maxY: a[3]
		};
		a = this.getAttribute("vb");
		this.vbounds = {
			minX: a[0],
			minY: a[1],
			maxX: a[2],
			maxY: a[3],
			width: a[2] - a[0],
			height: a[3] - a[1]
		};
		e && (e.drawingBoard = this.element.parentElement,
			e.bounds = this.bounds, e.drawingBoard.bounds = this.vbounds);
		this.args = o;
		this.isDrawn = !1;
		this.tr = this.getAttribute("tr");
		this.sh = this.getAttribute("sh");
		this.re = this.getAttribute("re");
		this.fillColor = this.getAttribute("fc");
		this.strokeColor = this.getAttribute("sc");
		this.strokeWidth = this.getAttribute("sw");
		this.fillOpacity = this.getAttribute("fo") / 100;
		this.fillOuterArea = this.getAttribute("foa");
		c.responsive && (this.responsiveCSS = this.getAttribute("css"));
		!1 == this.cloneOfBaseStateItem && -1 != this.baseStateItemID &&
			(this.playEffectsOnStart = !0);
		c.setInitialVisibility(this)
	};
	c.inherits(c.HighlightBox, c.DisplayObject);
	c.HighlightBox.prototype.start = function (c, o) {
		this.drawIfNeeded(c, o);
		if (!this.effectIsStarted || c) this.updateEffects(this.hasEffect), this.effectIsStarted = !0
	};
	c.HighlightBox.prototype.reset = function () {
		delete c.ropMap[this.element.id];
		this.isDrawn = !1;
		this.element.width = "0";
		this.element.height = "0";
		this.element.style.width = "0px";
		this.element.style.height = "0px";
		this.element.left = "0";
		this.element.top = "0";
		this.element.style.left = "0px";
		this.element.style.top = "0px";
		this.effectIsStarted = !1
	};
	c.HighlightBox.prototype.drawForResponsive = function (q, o) {
		if (!this.responsiveCSS) return !1;
		if (this.isDrawn && !q) return !0;
		var a = c.getResponsiveCSS(this.responsiveCSS),
			e = !1,
			e = this.sh && !this.sh.i || this.fillOuterArea,
			n = void 0 != this.tr;
		if (this.isDrawn && this.currentCSS == a && !e && !n && (!q || o == c.ReasonForDrawing.kMoviePaused)) return !0;
		this.currentCSS = a;
		var k = this.getAttribute("dn");
		this.parentDivName || (this.parentDivName = k);
		var g =
			a,
			k = this.actualParent,
			i = !0;
		c.applyResponsiveStyles(this.actualParent, a, i);
		this.actualParent.offsetHeight = this.actualParent.offsetHeight;
		this.actualParentClientBoundingRect = this.actualParent.getBoundingClientRect();
		var f = 0;
		this.tr && (f = c.getAngleFromRotateStr(this.tr), i = c.getCenterForRotation(this.actualParent), f = c.getBoundsForRotatedItem(this.actualParent.clientWidth, this.actualParent.clientHeight, i, f, this.strokeWidth), i = t = r = b = void 0, "auto" != a.l && (i = f.l), "auto" != a.t && (t = f.t), "auto" != a.r && (r = f.r), "auto" !=
			a.b && (b = f.b), g = c.createResponsiveStyleObj(a, a.p, i, t, r, b, f.w, f.h, a.crop), i = !1);
		c.applyResponsiveStyles(this.element.parentElement, g, i);
		i = c.movie.stage.mainSlideDiv.getBoundingClientRect();
		this.parentElementClientBoundingRect = this.element.parentElement.getBoundingClientRect();
		var f = this.parentElementClientBoundingRect.left - i.left,
			h = this.parentElementClientBoundingRect.top - i.top,
			j = g = 0,
			i = k.clientWidth - this.strokeWidth,
			p = k.clientHeight - this.strokeWidth,
			m = j = 0;
		e ? (j = c("div_Slide").clientWidth, m = c("div_Slide").clientHeight,
			g = c.createResponsiveStyleObj(a, void 0, "0px", "0px", "0px", "0px", j + "px", m + "px", void 0)) : (j = this.element.parentElement.clientWidth, m = this.element.parentElement.clientHeight, g = c.createResponsiveStyleObj(a, void 0, "0px", "0px", "0px", "0px", "100%", "100%", void 0));
		a = (this.canvas = c.createResponsiveCanvas(g, j, m, this.element)).gc;
		a.clearRect(0, 0, this.element.getBoundingClientRect().width, this.element.getBoundingClientRect().height);
		c.DESKTOP == c.device && (c.MSIE == c.browser || c.FIREFOX == c.browser) && a.beginPath();
		!this.isParentOfTypeSlide &&
			e && (this.element.style.marginLeft = (0 > f ? 1 : -1) * f + "px", this.element.style.marginTop = (0 > h ? 1 : -1) * h + "px");
		this.tr && (c.applyTransform(k, this.tr), k.tr = this.tr);
		this.re && (this.element.parentElement.style.webkitBoxReflect = "below " + this.re.d + "px -webkit-gradient(linear, left top, left bottom, from(transparent), color-stop(" + (1 - this.re.s / 100) + ", transparent), to(rgba(255, 255, 255, " + (1 - this.re.p / 100) + ")))");
		c.movie.stage.addToParentChildMap(k.id, this.element.id);
		this.element.originalParent = k;
		a.save();
		e ? (a.setTransform(1,
			0, 0, 1, 0 > f ? -f : 0, 0 > h ? -h : 0), a.translate(f, h)) : n && (a.translate(this.element.parentElement.clientWidth / 2, this.element.parentElement.clientHeight / 2), a.translate(this.strokeWidth / 2, this.strokeWidth / 2));
		a.fillStyle = c.ConvertColorToRGBA(this.fillColor, this.fillOpacity);
		a.lineWidth = 0;
		this.fillOuterArea && (a.translate(-f, -h), a.fillRect(0, 0, this.element.getBoundingClientRect().width, this.element.getBoundingClientRect().height), a.fillStyle = "rgba(0,0,0,0)", a.translate(f, h));
		this.sh && !this.sh.i && (a.shadowOffsetX =
			this.sh.d * Math.cos(Math.PI * this.sh.a / 180), a.shadowOffsetY = this.sh.d * Math.sin(Math.PI * this.sh.a / 180), a.shadowBlur = this.sh.b, a.shadowColor = c.ConvertRGBToRGBA(this.sh.c, this.sh.o));
		f = 0;
		this.tr && (f = c.getAngleFromRotateStr(this.tr));
		e && a.translate(this.element.parentElement.clientWidth / 2, this.element.parentElement.clientHeight / 2);
		f ? a.rotate(Math.PI * f / 180) : this.sh && a.rotate(0.02 * Math.PI / 180);
		g = !e && !n ? 0 + this.strokeWidth / 2 : -k.clientWidth / 2;
		j = !e && !n ? 0 + this.strokeWidth / 2 : -k.clientHeight / 2;
		a.lineWidth = this.strokeWidth;
		a.lineJoin = "miter";
		a.lineCap = "square";
		a.strokeStyle = this.strokeColor;
		a.rect(g, j, i, p);
		0 != this.strokeWidth && a.stroke();
		a.fill();
		0 != this.strokeWidth && (a.shadowOffsetX = 0, a.shadowOffsetY = 0, a.shadowBlur = 0, a.shadowColor = "rgba(0,0,0,0)", a.stroke());
		this.fillOuterArea && a.clearRect(g + this.strokeWidth / 2, j + this.strokeWidth / 2, i - this.strokeWidth, p - this.strokeWidth);
		a.restore();
		this.isDrawn = !0;
		this.drawComplete(o);
		this.transIn && o == c.ReasonForDrawing.kRegularDraw && (this.element.parentElement.style.opacity = 0);
		c.isVisible(this) ||
			c._hide(this.parentDivName);
		c.isVisible(this) && this.playEffectsOnStart && (k = this.parentDivName, (e = c.D[k].selfAnimationScript) && eval(e), this.playEffectsOnStart = !1);
		return !0
	};
	c.HighlightBox.prototype.drawIfNeeded = function (q, o) {
		if ((!c.responsive || !this.drawForResponsive(q, o)) && !this.isDrawn) {
			var a = this.bounds,
				e = this.vbounds,
				n = this.fillColor,
				k = this.strokeColor,
				g = this.strokeWidth,
				i = this.fillOpacity,
				f = this.fillOuterArea,
				h = a.minX,
				j = a.minY,
				p = a.maxX - a.minX,
				m = a.maxY - a.minY,
				d = this.actualParent;
			d.style.left = h +
				"px";
			d.style.top = j + "px";
			d.style.width = p + "px";
			d.style.height = m + "px";
			var l = h = 0,
				v = a.maxX - a.minX,
				w = a.maxY - a.minY,
				l = !1,
				l = this.re || this.sh && !this.sh.i || this.fillOuterArea,
				s = void 0 != this.tr,
				h = 0 < e.minX && l ? 0 : e.minX,
				j = 0 < e.minY && l ? 0 : e.minY,
				m = l && c.D.project.h > e.maxY ? c.D.project.h : e.maxY,
				p = (l && c.D.project.w > e.maxX ? c.D.project.w : e.maxX) - h,
				m = m - j,
				e = this.canvas = c.createCanvas(0, 0, p, m, this.element);
			this.tr && (c.applyTransform(d, this.tr), d.tr = this.tr);
			this.element.style.display = "block";
			this.element.style.position = "absolute";
			this.element.parentElement.style.left = this.vbounds.minX + "px";
			this.element.parentElement.style.top = this.vbounds.minY + "px";
			this.element.parentElement.style.width = this.vbounds.maxX - this.vbounds.minX + "px";
			this.element.parentElement.style.height = this.vbounds.maxY - this.vbounds.minY + "px";
			this.element.style.marginLeft = h - this.vbounds.minX + "px";
			this.element.style.marginTop = j - this.vbounds.minY + "px";
			this.re && (this.element.parentElement.style.webkitBoxReflect = "below " + this.re.d + "px -webkit-gradient(linear, left top, left bottom, from(transparent), color-stop(" +
				(1 - this.re.s / 100) + ", transparent), to(rgba(255, 255, 255, " + (1 - this.re.p / 100) + ")))");
			c.movie.stage.addToParentChildMap(d.id, this.element.id);
			this.element.originalParent = d;
			d = e.gc;
			d.save();
			var u = e = 0;
			l ? (e = 0 > h ? -h : 0, u = 0 > j ? -j : 0, d.translate(e, u), d.setTransform(1, 0, 0, 1, e, u)) : s && d.translate(p / 2, m / 2);
			d.fillStyle = c.ConvertColorToRGBA(n, i);
			d.lineWidth = 0;
			f && (d.fillRect(0, 0, p, m), d.fillStyle = "rgba(0,0,0,0)");
			this.sh && !this.sh.i && (d.shadowOffsetX = this.sh.d * Math.cos(Math.PI * this.sh.a / 180), d.shadowOffsetY = this.sh.d *
				Math.sin(Math.PI * this.sh.a / 180), d.shadowBlur = this.sh.b, d.shadowColor = c.ConvertRGBToRGBA(this.sh.c, this.sh.o));
			n = 0;
			this.tr && (n = c.getAngleFromRotateStr(this.tr));
			l && d.translate((a.minX + a.maxX) / 2, (a.minY + a.maxY) / 2);
			n ? d.rotate(Math.PI * n / 180) : this.sh && d.rotate(0.02 * Math.PI / 180);
			h = !l && !s ? 0 + g / 2 : (a.minX - a.maxX) / 2;
			l = !l && !s ? 0 + g / 2 : (a.minY - a.maxY) / 2;
			d.lineWidth = g;
			d.lineJoin = "miter";
			d.lineCap = "square";
			d.strokeStyle = k;
			d.rect(h, l, v, w);
			0 != g && d.stroke();
			d.fill();
			0 != g && (d.shadowOffsetX = 0, d.shadowOffsetY = 0, d.shadowBlur =
				0, d.shadowColor = "rgba(0,0,0,0)", d.stroke());
			f && d.clearRect(h + g / 2, l + g / 2, v - g, w - g);
			d.restore();
			this.isDrawn = !0;
			this.drawComplete();
			this.transIn && (this.element.parentElement.style.opacity = 0);
			c.isVisible(this) || c._hide(this.parentDivName);
			c.isVisible(this) && this.playEffectsOnStart && ((a = c.D[this.parentDivName].selfAnimationScript) && eval(a), this.playEffectsOnStart = !1)
		}
	}
})(window.cp);
(function (a) {
	a.VideoFrameSet = function (b, c) {
		this.suppliedElement = b;
		this.children = c;
		this.element = b;
		this.from = this.getAttribute("from");
		this.to = this.getAttribute("to");
		this.type = this.getAttribute("type");
		this.itemData = a.D[this.element.id];
		this.pa = this.getAttribute("pa");
		var e = this.getAttribute("psv");
		e && (this.psv = e);
		void 0 != this.pa && this.setAttribute("pausedOnce", !1);
		void 0 != this.psv && this.setAttribute("pausedOnce", !1);
		this.isStarted = !1;
		!1 == this.cloneOfBaseStateItem && -1 != this.baseStateItemID && (this.playEffectsOnStart = !0);
		a.setInitialVisibility(this)
	};
	a.inherits(a.VideoFrameSet, a.FrameSet);
	a.VideoFrameSet.prototype.start = function (b, c) {
		if (!a.movie.stage.VideoPlaying) {
			var e = a.movie.stage.VideoElement;
			e || (e = this.suppliedElement, a.movie.stage.VideoElement = e);
			a.VideoFrameSet.baseConstructor.call(this, e, this.children);
			a.VideoFrameSet.superClass.start.call(this, b, c);
			if (!this.effectIsStarted || b) this.updateEffects(this.hasEffect), this.effectIsStarted = !0
		}
	};
	a.VideoFrameSet.prototype.reset = function (b) {
		var c = this.suppliedElement;
		c == this.element && (c = null);
		a.VideoFrameSet.superClass.reset.call(this, b);
		c && (c.style.display = "none");
		void 0 != this.psv && this.setAttribute("pausedOnce", !1);
		this.effectIsStarted = !1
	};
	a.VideoFrameSet.prototype.getAttribute = function (b) {
		var c = a.D[this.suppliedElement.id];
		return !c ? null : c[b]
	};
	a.VideoFrameSet.prototype.setAttribute = function (b, c) {
		var e = a.D[this.suppliedElement.id];
		e && (e[b] = c)
	};
	a.EventVideo = function (b) {
		this.vdm = a.movie.vdm;
		this.vdm.verbose && a.log("EventVideo being constructed for el " + b.id);
		a.EventVideo.baseConstructor.call(this,
			b);
		this.id = this.parentDivName = this.getAttribute("dn");
		b = a.D[this.parentDivName];
		this.from = b.from;
		this.to = b.to;
		this.displayForDurationOfVideo = b.ddv;
		a.IDEVICE == a.device || a.device == a.ANDROID ? this.cploop = this.getAttribute("l") : this.loop = this.getAttribute("l");
		if (this.showControls = this.getAttribute("svc")) this.videoSkinStrings = this.getAttribute("vss");
		this.autoPlay = this.getAttribute("au");
		this.autoRewind = this.getAttribute("ar");
		this.src = a.getCorrectMediaPath(this.getAttribute("mp4"));
		if ((a.device == a.IDEVICE ||
			a.device == a.ANDROID) && !a.multiAudioTrack) {
			var c = a.getCorrectMediaPath(this.getAttribute("amp4"));
			c && (this.src = c)
		}
		this.nativeVideo = null;
		this.ended = !1;
		this.paused = !0;
		this.started = !1;
		this.visible = this.getAttribute("visible");
		this.transIn = b.trin;
		this.element.parentElement.drawingBoard = this.element.parentElement;
		c = this.getAttribute("b");
		this.actualParent = b = document.getElementById(this.parentDivName);
		this.actualDrawingElement = this.element;
		this.bounds = {
			minX: c[0],
			minY: c[1],
			maxX: c[2],
			maxY: c[3]
		};
		c = this.getAttribute("vb");
		this.vbounds = {
			minX: c[0],
			minY: c[1],
			maxX: c[2],
			maxY: c[3],
			width: c[2] - c[0],
			height: c[3] - c[1]
		};
		b && (b.drawingBoard = this.element.parentElement, b.bounds = this.bounds, b.drawingBoard.bounds = this.vbounds);
		this.isDrawn = !1;
		this.tr = this.getAttribute("tr");
		this.tr || (this.tr = "rotate(0deg)");
		this.sh = this.getAttribute("sh");
		this.re = this.getAttribute("re");
		a.movie.stage.addToParentChildMap(b.id, this.element.id);
		a.responsive && (this.responsiveCSS = this.getAttribute("css"))
	};
	a.inherits(a.EventVideo, a.DisplayObject);
	a.EventVideo.prototype.start =
		function (b, c) {
			function e(d) {
				if ((a.device == a.IDEVICE || a.device == a.ANDROID) && a.multiAudioTrack) {
					var f = d.from;
					f < cpInfoCurrentFrame && (f = cpInfoCurrentFrame);
					var g = f + 0.5 * cpInfoFPS;
					g > d.to && (g = d.to);
					if (a.movie.am.doesAudioStartBetween(f, g)) {
						d.vdm.verbose && a.log("500mS delay in start of " + d.id);
						d.delayStartTimer = setTimeout(function () {
							e(d)
						}, 500);
						return
					}
				}
				d.drawIfNeeded(b, c);
				d.addNativeVideoIfNeeded()
			}
			e(this, b);
			if (!this.effectIsStarted || b) this.updateEffects(this.hasEffect), this.effectIsStarted = !0
	};
	a.EventVideo.prototype.reset =
		function (b) {
			this.vdm.verbose && a.log("EventVideo " + this.id + " reset(" + b + ")");
			this.delayStartTimer && (clearTimeout(this.delayStartTimer), delete this.delayStartTimer);
			delete a.ropMap[this.element.id];
			this.pause();
			if (this.nativeVideo) {
				this.nativeVideo.cpVideo = null;
				try {
					this.nativeVideo.currentTime = 0
				} catch (c) {}
				this.nativeVideo.style.display = "none";
				if (a.device == a.IDEVICE || a.device == a.ANDROID) {
					var e = this.src;
					this.src = "_cp_n_m_";
					var d = this.nativeVideo;
					setTimeout(function () {
						if (d.cpSrc == e) {
							d.cpSrc = "_cp_n_m_";
							try {
								d.src = "_cp_n_m_"
							} catch (a) {}
							try {
								d.load()
							} catch (b) {}
						}
					}, 100)
				}
				this.nativeVideo = null
			}
			this.isDrawn = !1;
			if ((a.device != a.IDEVICE || a.IOSMajor >= a.IOS8) && a.removeVideoSkin)(a.device == a.ANDROID ? a.movie.stage.NativeVideoElement : this.element).style.backgroundColor = "", a.removeVideoSkin(this.actualParent);
			this.element.width = 0;
			this.element.height = 0;
			this.element.style.width = "0px";
			this.element.style.height = "0px";
			this.element.left = 0;
			this.element.top = 0;
			this.element.style.left = "0px";
			this.element.style.top = "0px";
			if (a.device ==
				a.IDEVICE || a.device == a.ANDROID) a.movie.stage.VideoPlaying = !1;
			this.ended = !1;
			delete this.seekToTime
	};
	a.EventVideo.prototype.onEndOfMovie = function () {
		this.vdm.verbose && a.log("EventVideo " + this.id + " onEndOfMovie()");
		if (!this.displayForDurationOfVideo) {
			this.pause();
			if (a.device == a.IDEVICE || a.device == a.ANDROID) a.movie.stage.VideoPlaying = !1;
			this.ended = !1;
			delete this.seekToTime
		}
	};
	a.EventVideo.prototype.drawForResponsive = function (b, c) {
		if (!this.responsiveCSS) return !1;
		if (this.isDrawn && !b) return !0;
		var e = a.getResponsiveCSS(this.responsiveCSS),
			d = !1,
			d = this.sh && !this.sh.i,
			f = void 0 != this.tr;
		if (this.isDrawn && this.currentCSS == e && !d && !f && (!b || c == a.ReasonForDrawing.kMoviePaused)) return !0;
		var g = this.currentCSS = e;
		if (!b) {
			if (a.device == a.IDEVICE || a.device == a.ANDROID) {
				if (a.movie.stage.VideoPlaying) return !1;
				a.multiAudioTrack || a.movie.am.pause(a.ReasonForPause.ONLY_ONE_MEDIUM_CAN_PLAY);
				a.movie.stage.VideoPlaying = !0
			}
			this.vdm.verbose && a.log("EventVideo " + this.id + " start()")
		}
		f = 0;
		this.tr && (f = a.getAngleFromRotateStr(this.tr));
		a.device == a.IDEVICE || a.device ==
			a.ANDROID ? (d = a.movie.stage.NativeVideoElement, d || (d = this.element, a.movie.stage.NativeVideoElement = this.element)) : d = this.element;
		var h = this.actualParent;
		a.applyResponsiveStyles(h, g, !0);
		a.applyResponsiveStyles(d, g, !0);
		g = a.movie.stage.mainSlideDiv.getBoundingClientRect();
		g = a.createResponsiveStyleObj(e, void 0, "0px", "0px", "0px", "0px", g.width + "px", g.height + "px", void 0);
		a.applyResponsiveStyles(d.parentElement, g);
		this.parentElementClientBoundingRect = d.parentElement.getBoundingClientRect();
		d.rotateAngle = f;
		this.tr && (a.applyTransform(d, this.tr), a.applyTransform(h, this.tr), d.tr = this.tr, h.tr = this.tr);
		this.sh && !this.sh.i && (e = this.sh.a - f, a.applyShadow(d, this.sh.d * Math.cos(Math.PI * e / 180) + "px " + this.sh.d * Math.sin(Math.PI * e / 180) + "px " + this.sh.b + "px " + a.ConvertRGBToRGBA(this.sh.c, this.sh.o) + (this.sh.i ? " inset" : "")));
		this.re && (d.style.webkitBoxReflect = "below " + this.re.d + "px -webkit-gradient(linear, left top, left bottom, from(transparent), color-stop(" + (1 - this.re.s / 100) + ", transparent), to(rgba(255, 255, 255, " +
			(1 - this.re.p / 100) + ")))");
		this.transIn && c == a.ReasonForDrawing.kRegularDraw && (d.parentElement.style.opacity = 0);
		a.isVisible(this) || a._hide(this.parentDivName);
		this.isDrawn = !0;
		a.isVisible(this) && this.playEffectsOnStart && ((e = a.D[this.parentDivName].selfAnimationScript) && eval(e), this.playEffectsOnStart = !1);
		return !0
	};
	a.EventVideo.prototype.drawIfNeeded = function (b, c) {
		if (!a.responsive || !this.drawForResponsive(b, c)) {
			if (a.device == a.IDEVICE || a.device == a.ANDROID) {
				if (a.movie.stage.VideoPlaying) return;
				a.multiAudioTrack ||
					a.movie.am.pause(a.ReasonForPause.ONLY_ONE_MEDIUM_CAN_PLAY);
				a.movie.stage.VideoPlaying = !0
			}
			if (!this.isDrawn) {
				this.vdm.verbose && a.log("EventVideo " + this.id + " start()");
				var e = this.bounds,
					d = 0;
				this.tr && (d = a.getAngleFromRotateStr(this.tr));
				var f;
				a.device == a.IDEVICE || a.device == a.ANDROID ? (f = a.movie.stage.NativeVideoElement, f || (f = this.element, a.movie.stage.NativeVideoElement = this.element)) : f = this.element;
				var g = this.actualParent;
				g.style.left = e.minX + "px";
				g.style.top = e.minY + "px";
				g.style.width = e.maxX - e.minX + "px";
				g.style.height = e.maxY - e.minY + "px";
				var h = f.parentElement;
				h.style.left = "0px";
				h.style.top = "0px";
				h.style.width = a.D.project.w + "px";
				h.style.height = a.D.project.h + "px";
				f.rotateAngle = d;
				f.style.left = e.minX + "px";
				f.style.top = e.minY + "px";
				f.style.width = e.maxX - e.minX + "px";
				f.style.height = e.maxY - e.minY + "px";
				f.style.display = "block";
				f.style.position = "absolute";
				this.tr && (a.applyTransform(f, this.tr), a.applyTransform(g, this.tr), f.tr = this.tr, g.tr = this.tr);
				this.sh && !this.sh.i && (e = this.sh.a - d, a.applyShadow(f, this.sh.d * Math.cos(Math.PI *
					e / 180) + "px " + this.sh.d * Math.sin(Math.PI * e / 180) + "px " + this.sh.b + "px " + a.ConvertRGBToRGBA(this.sh.c, this.sh.o) + (this.sh.i ? " inset" : "")));
				this.re && (f.style.webkitBoxReflect = "below " + this.re.d + "px -webkit-gradient(linear, left top, left bottom, from(transparent), color-stop(" + (1 - this.re.s / 100) + ", transparent), to(rgba(255, 255, 255, " + (1 - this.re.p / 100) + ")))");
				this.transIn && (f.parentElement.style.opacity = 0);
				a.isVisible(this) || a._hide(this.parentDivName);
				this.isDrawn = !0;
				a.isVisible(this) && this.playEffectsOnStart &&
					((f = a.D[this.parentDivName].selfAnimationScript) && eval(f), this.playEffectsOnStart = !1)
			}
		}
	};
	a.EventVideo.prototype.addNativeVideoIfNeeded = function () {
		if (this.isDrawn && !this.nativeVideo) {
			var b;
			b = a.device == a.IDEVICE || a.device == a.ANDROID ? a.movie.stage.NativeVideoElement : this.element;
			this.vdm.allocVideoChannel(this, a.IDEVICE != a.device && a.device != a.ANDROID);
			if (this.nativeVideo) {
				var c = this.bounds;
				a.SAFARI === a.browser && 7 <= a.browserVersion && (this.nativeVideo.controls = !0);
				this.nativeVideo.style.display = "block";
				a.responsive ? (this.nativeVideo.style.width = "100%", this.nativeVideo.style.height = "100%") : (this.nativeVideo.style.width = c.maxX - c.minX + "px", this.nativeVideo.style.height = c.maxY - c.minY + "px");
				if (a.device == a.IDEVICE && a.IOSMajor >= a.IOS5 || a.device == a.ANDROID) this.nativeVideo.CPcanPlay = !1, this.nativeVideo.from = this.from, this.nativeVideo.to = this.to, this.nativeVideo.style.position = "fixed", this.nativeVideo.style.left = "-99999px";
				a.device == a.IDEVICE || a.device == a.ANDROID ? this.nativeVideo.parentElement ? (a.movie.stage.correctReWrapZOrder(b.parentElement,
					this.element.parentElement), a.movie.stage.correctParentZOrder(a.movie.stage.VideoElement, this.actualParent)) : b.appendChild(this.nativeVideo) : b.appendChild(this.nativeVideo);
				if (a.isVisible(this)) {
					b.style.display = "block";
					b.style.visibility = "visible";
					if (this.showControls && this.nativeVideo)
						if (a.IDEVICE != a.device || a.IOSMajor >= a.IOS8) b.style.backgroundColor = "#000000", a.addVideoSkin(this.actualParent, this, this.autoPlay);
						else {
							this.nativeVideo.controls = !0;
							var e = this;
							this.nativeVideo.addEventListener("webkitbeginfullscreen",
								function () {
									a.movie.pause()
								});
							this.nativeVideo.addEventListener("webkitendfullscreen", function () {
								e.nativeVideo.ended && a.movie.play()
							})
						}
					if (this.nativeVideo && this.type == a.kCPOTVideoResource) {
						var d = this.nativeVideo;
						d.addEventListener("webkitbeginfullscreen", function () {
							if (d.src != "" && d.src != "_cp_n_m_" && !d.paused) d.pauseMovieOnExitFullScreen = true
						}, !1);
						d.addEventListener("webkitendfullscreen", function () {
							if (d.pauseMovieOnExitFullScreen) {
								d.pauseMovieOnExitFullScreen = false;
								a.movie.pause(a.ReasonForPause.WK_EXIT_FULL_SCREEN)
							}
						}, !1)
					}
					this.autoPlay && this.play()
				}
			}
			a.redrawVideo(this.nativeVideo)
		}
	};
	a.EventVideo.prototype.load = function () {
		this.nativeVideo && this.nativeVideo.load()
	};
	a.EventVideo.prototype.play = function () {
		if (!(!0 == this.ended || !1 == this.paused))
			if (a.lastMediaPlayReqTime && 50 > (new Date).getTime() - a.lastMediaPlayReqTime.getTime()) {
				this.vdm.verbose && a.log("crowded request postponed " + this.id);
				var b = this;
				setTimeout(function () {
					b.play()
				}, 50)
			} else if (this.isSeekPending()) this.vdm.verbose && a.log("EventVideo.Play setting revoke " +
			this.id), this.revoke = !0, this.finishPendingSeek();
		else if (this.nativeVideo) {
			this.paused = !1; - 1 == this.nativeVideo.src.indexOf(this.src) && (this.nativeVideo.cpSrc = this.src, this.nativeVideo.src = this.src, this.nativeVideo.load());
			this.vdm.verbose && a.log("EventVideo.Play " + this.id + " " + this.src);
			if ((a.device == a.IDEVICE || a.device == a.ANDROID) && a.multiAudioTrack) a.lastMediaPlayReqTime = new Date;
			this.nativeVideo.play();
			this.started = !0
		}
	};
	a.EventVideo.prototype.pause = function () {
		this.isSeekPending() && (this.vdm.verbose &&
			a.log("EventVideo.Pause deleting revoke " + this.id), delete this.revoke);
		this.paused || (this.paused = !0, this.vdm.verbose && a.log("EventVideo.Pause " + this.id + " " + this.src), this.nativeVideo && (this.nativeVideo.pause(), this.nativeVideo.pausedAt = (new Date).getTime()))
	};
	a.EventVideo.prototype.setLoop = function (b, c) {
		this.loop = b;
		this.loopFrames = c;
		a.IDEVICE == a.device || a.device == a.ANDROID ? this.cploop = b : this.nativeVideo && (b ? this.nativeVideo.loop = !0 : delete this.nativeVideo.loop)
	};
	a.EventVideo.prototype.setCurrentTime =
		function (b) {
			this.vdm.verbose && a.log("VideoObject " + this.id + "src " + this.src + " setCurrentTime(" + b + ")");
			if (this.nativeVideo) {
				delete this.seekToTime;
				this.paused || (this.vdm.verbose && a.log("setting revoke"), this.revoke = !0, this.pause());
				var c = !0;
				try {
					this.nativeVideo.currentTime = b;
					var e = Math.abs(this.nativeVideo.currentTime - b);
					0.05 <= e && (c = !1)
				} catch (d) {
					e = Math.abs(this.nativeVideo.currentTime - b), c = 0.05 <= e ? !1 : !0
				}
				this.vdm.verbose && a.log("seekSuccess = " + c);
				if (a.movie.ms.enabled) c ? this.revoke ? (this.vdm.verbose &&
					a.log("revoking play"), delete this.revoke, this.play()) : this.nativeVideo.duration > this.nativeVideo.currentTime && (this.ended = !1) : (this.vdm.verbose && a.log("pause movie and add to seekQueue"), this.seekToTime = b, a.movie.ms.addToQueue(this));
				else if (this.revoke && (this.vdm.verbose && a.log("revoking play"), delete this.revoke, this.play()), c && this.nativeVideo.duration > this.nativeVideo.currentTime) this.ended = !1
			} else this.seekToTime = b, this.vdm.verbose && a.log("no native video. Kept in pending...")
	};
	a.EventVideo.prototype.isSeekPending =
		function () {
			return void 0 != this.seekToTime
	};
	a.EventVideo.prototype.finishPendingSeek = function () {
		this.nativeVideo && this.isSeekPending() && (this.vdm.verbose && a.log("VideoObject " + this.id + " finishPendingSeek"), this.setCurrentTime(this.seekToTime))
	};
	a.EventVideo.prototype.seekTo = function (b) {
		this.vdm.verbose && a.log("VideoObject " + this.id + " seekTo(" + b + ")");
		if (this.loop && this.loopFrames) {
			if (this.from <= b) return this.setCurrentTime((b - this.from) % this.loopFrames / cpInfoFPS), this.ended = !1, !0
		} else {
			if (this.from <=
				b && this.to >= b) return this.setCurrentTime((b - this.from) / cpInfoFPS), this.ended = !1, !0;
			this.to >= b && (this.setCurrentTime(0), this.ended = !1)
		}
		return !1
	};
	a.FMRVideo = function (b) {
		a.FMRVideo.baseConstructor.call(this, b);
		this.type = a.kCPFullMotion
	};
	a.inherits(a.FMRVideo, a.EventVideo);
	a.FMRVideo.prototype.addNativeVideoIfNeeded = function () {
		a.FMRVideo.superClass.addNativeVideoIfNeeded.call(this);
		this.vdm.demoVideo = this.nativeVideo
	};
	a.FMRVideo.prototype.reset = function (b) {
		a.FMRVideo.superClass.reset.call(this, b);
		this.vdm.demoVideo =
			this.nativeVideo
	};
	a.FMRVideo.prototype.onEndOfMovie = function () {
		a.FMRVideo.superClass.onEndOfMovie.call(this);
		this.vdm.demoVideo = this.nativeVideo
	};
	a.FMRVideo.prototype.updateFrame = function () {
		this.paused && (!a.movie.paused && this.autoPlay && this.visible) && this.play()
	};
	a.CPVCVideo = function (b) {
		a.CPVCVideo.baseConstructor.call(this, b);
		this.type = a.kCPOTVideoResource
	};
	a.inherits(a.CPVCVideo, a.FMRVideo);
	a.SlideVideo = function (b) {
		a.SlideVideo.baseConstructor.call(this, b);
		this.autoPlay = 1;
		this.seek_From = this.getAttribute("vsf");
		this.seek_To = this.getAttribute("vst");
		this.showInTOC = this.getAttribute("sit");
		this.continueToNextSlide = this.getAttribute("continueToNextSlide");
		this.continueFromPrevSlide = this.getAttribute("continueFromPrevSlide");
		this.type = a.kCPOTVideo
	};
	a.inherits(a.SlideVideo, a.EventVideo);
	a.SlideVideo.prototype.reset = function (b) {
		this.vdm.verbose && a.log("SlideVideo " + this.id + " reset(" + b + ")");
		this.delayStartTimer && (clearTimeout(this.delayStartTimer), delete this.delayStartTimer);
		if (b && this.continueToNextSlide) this.nativeVideo &&
			(this.nativeVideo = this.nativeVideo.cpVideo = null);
		else if (this.pause(), this.showInTOC) {
			if (a.toc.rootObj.showVideo(!1), this.nativeVideo) {
				this.nativeVideo.cpVideo = null;
				if (a.device == a.IDEVICE || a.device == a.ANDROID) {
					var c = this.src;
					this.src = "_cp_n_m_";
					var e = this.nativeVideo;
					setTimeout(function () {
						if (e.cpSrc == c) {
							e.cpSrc = "_cp_n_m_";
							try {
								e.src = "_cp_n_m_"
							} catch (a) {}
							try {
								e.load()
							} catch (b) {}
						}
					}, 100)
				}
				this.nativeVideo = null
			}
		} else if (this.nativeVideo) {
			this.nativeVideo.cpVideo = null;
			this.nativeVideo.style.display = "none";
			if (a.device == a.IDEVICE || a.device == a.ANDROID) c = this.src, this.src = "_cp_n_m_", e = this.nativeVideo, setTimeout(function () {
				if (e.cpSrc == c) {
					e.cpSrc = "_cp_n_m_";
					try {
						e.src = "_cp_n_m_"
					} catch (a) {}
					try {
						e.load()
					} catch (b) {}
				}
			}, 100);
			this.nativeVideo = null
		}
		this.isDrawn = !1;
		if (!b || !this.continueToNextSlide) this.element.style.width = "0px", this.element.style.height = "0px", this.element.style.left = "0px", this.element.style.top = "0px";
		if (a.device == a.IDEVICE || a.device == a.ANDROID) a.movie.stage.VideoPlaying = !1;
		this.ended = !1;
		delete this.seekToTime
	};
	a.SlideVideo.prototype.onEndOfMovie = function () {
		this.vdm.verbose && a.log("SlideVideo " + this.id + " onEndOfMovie()");
		this.pause();
		this.nativeVideo && (this.nativeVideo = this.nativeVideo.cpVideo = null);
		this.isDrawn = !1;
		if (a.device == a.IDEVICE || a.device == a.ANDROID) a.movie.stage.VideoPlaying = !1;
		this.ended = !1;
		delete this.seekToTime
	};
	a.SlideVideo.prototype.drawForResponsive = function (b, c) {
		if (!this.responsiveCSS) return !1;
		if (this.isDrawn && !b) return !0;
		var e = a.getResponsiveCSS(this.responsiveCSS),
			d = !1,
			d = this.sh && !this.sh.i,
			f = void 0 != this.tr;
		if (this.isDrawn && this.currentCSS == e && !d && !f && (!b || c == a.ReasonForDrawing.kMoviePaused)) return !0;
		var g = this.currentCSS = e;
		if (!b) {
			if (a.device == a.IDEVICE || a.device == a.ANDROID) {
				if (a.movie.stage.VideoPlaying) return !1;
				a.movie.stage.VideoPlaying = !0
			}
			this.vdm.verbose && a.log("SlideVideo " + this.id + " start()")
		}
		if (this.showInTOC) return this.isDrawn = !0, !1;
		f = 0;
		this.tr && (f = a.getAngleFromRotateStr(this.tr));
		(d = a.movie.stage.NativeSlideVideoElement) ? d.parentElement.style.zIndex = a.D[a.D[this.element.id].dn].zIndex :
			(d = this.element, a.movie.stage.NativeSlideVideoElement = this.element);
		this.actualDrawingElement = a.movie.stage.NativeSlideVideoElement;
		var h = this.actualParent;
		a.applyResponsiveStyles(h, g, !0);
		a.applyResponsiveStyles(d, g, !0);
		g = a.movie.stage.mainSlideDiv.getBoundingClientRect();
		g = a.createResponsiveStyleObj(e, void 0, "0px", "0px", "0px", "0px", g.width + "px", g.height + "px", void 0);
		a.applyResponsiveStyles(d.parentElement, g);
		this.parentElementClientBoundingRect = d.parentElement.getBoundingClientRect();
		d.rotateAngle =
			f;
		this.tr && (a.applyTransform(d, this.tr), a.applyTransform(h, this.tr), d.tr = this.tr, h.tr = this.tr);
		this.sh && !this.sh.i && (e = this.sh.a - f, a.applyShadow(d, this.sh.d * Math.cos(Math.PI * e / 180) + "px " + this.sh.d * Math.sin(Math.PI * e / 180) + "px " + this.sh.b + "px " + a.ConvertRGBToRGBA(this.sh.c, this.sh.o) + (this.sh.i ? " inset" : "")));
		this.re && (d.parentElement.style.webkitBoxReflect = "below " + this.re.d + "px -webkit-gradient(linear, left top, left bottom, from(transparent), color-stop(" + (1 - this.re.s / 100) + ", transparent), to(rgba(255, 255, 255, " +
			(1 - this.re.p / 100) + ")))");
		this.transIn && c == a.ReasonForDrawing.kRegularDraw && (d.parentElement.style.opacity = 0);
		this.visible || a.hide(this.parentDivName);
		return this.isDrawn = !0
	};
	a.SlideVideo.prototype.drawIfNeeded = function (b) {
		if (!a.responsive || !this.drawForResponsive(b)) {
			if (a.device == a.IDEVICE || a.device == a.ANDROID) {
				if (a.movie.stage.VideoPlaying) return;
				a.movie.stage.VideoPlaying = !0
			}
			if (!this.isDrawn) {
				if (!this.showInTOC) {
					this.vdm.verbose && a.log("SlideVideo " + this.id + " start()");
					var c = this.bounds,
						e = 0;
					this.tr &&
						(e = a.getAngleFromRotateStr(this.tr));
					(b = a.movie.stage.NativeSlideVideoElement) ? b.parentElement.style.zIndex = a.D[a.D[this.element.id].dn].zIndex : (b = this.element, a.movie.stage.NativeSlideVideoElement = this.element);
					this.actualDrawingElement = a.movie.stage.NativeSlideVideoElement;
					var d = this.actualParent;
					d.style.left = c.minX + "px";
					d.style.top = c.minY + "px";
					d.style.width = c.maxX - c.minX + "px";
					d.style.height = c.maxY - c.minY + "px";
					var f = b.parentElement;
					f.style.left = "0px";
					f.style.top = "0px";
					f.style.width = a.D.project.w +
						"px";
					f.style.height = a.D.project.h + "px";
					b.rotateAngle = e;
					b.style.left = c.minX + "px";
					b.style.top = c.minY + "px";
					b.style.width = c.maxX - c.minX + "px";
					b.style.height = c.maxY - c.minY + "px";
					b.style.display = "block";
					b.style.position = "absolute";
					this.tr && (a.applyTransform(b, this.tr), a.applyTransform(d, this.tr), b.tr = this.tr, d.tr = this.tr);
					this.sh && !this.sh.i && (c = this.sh.a - e, a.applyShadow(b, this.sh.d * Math.cos(Math.PI * c / 180) + "px " + this.sh.d * Math.sin(Math.PI * c / 180) + "px " + this.sh.b + "px " + a.ConvertRGBToRGBA(this.sh.c, this.sh.o) +
						(this.sh.i ? " inset" : "")));
					this.re && (b.parentElement.style.webkitBoxReflect = "below " + this.re.d + "px -webkit-gradient(linear, left top, left bottom, from(transparent), color-stop(" + (1 - this.re.s / 100) + ", transparent), to(rgba(255, 255, 255, " + (1 - this.re.p / 100) + ")))");
					this.transIn && (b.parentElement.style.opacity = 0);
					this.visible || a.hide(this.parentDivName)
				}
				this.isDrawn = !0
			}
		}
	};
	a.SlideVideo.prototype.addNativeVideoIfNeeded = function () {
		if (this.isDrawn && !this.nativeVideo) {
			this.showInTOC ? (a.device == a.IDEVICE ||
				a.device == a.ANDROID || (this.vdm.tocVideoChannel.cpVideo = null, this.vdm.tocVideoChannel0.cpSrc == this.src ? (this.vdm.verbose && a.log("TOCVideo " + this.id + " found existing @ tocV0"), this.vdm.tocVideoChannel = this.vdm.tocVideoChannel0) : this.vdm.tocVideoChannel1.cpSrc == this.src ? (this.vdm.verbose && a.log("TOCVideo " + this.id + " found existing @ tocV1"), this.vdm.tocVideoChannel = this.vdm.tocVideoChannel1) : this.vdm.tocVideoChannel = this.vdm.tocVideoChannel0), this.nativeVideo = this.vdm.tocVideoChannel) : (a.device == a.IDEVICE ||
				a.device == a.ANDROID || (this.vdm.slideVideoChannel0.cpVideo = null, this.vdm.slideVideoChannel0.cpSrc == this.src ? (this.vdm.verbose && a.log("SlideVideo " + this.id + " found existing @ SV0"), this.vdm.slideVideoChannel = this.vdm.slideVideoChannel0) : this.vdm.slideVideoChannel1.cpSrc == this.src ? (this.vdm.verbose && a.log("SlideVideo " + this.id + " found existing @ SV1"), this.vdm.slideVideoChannel = this.vdm.slideVideoChannel1) : this.vdm.slideVideoChannel = this.vdm.slideVideoChannel0), this.nativeVideo = this.vdm.slideVideoChannel);
			this.nativeVideo.cpVideo = this;
			this.paused = this.nativeVideo.paused;
			var b = !1;
			if (this.continueFromPrevSlide) this.nativeVideo.paused && this.seekTo(cpInfoCurrentFrame);
			else if (this.nativeVideo.cpSrc == this.src) this.seekTo(this.from);
			else {
				if (a.device == a.IDEVICE || a.device == a.ANDROID) {
					try {
						this.nativeVideo.src = "_cp_n_m_"
					} catch (c) {}
					try {
						this.nativeVideo.load()
					} catch (e) {}
				}
				this.nativeVideo.cpSrc = this.src;
				this.nativeVideo.src = this.src;
				this.nativeVideo.load();
				this.seekTo(this.from);
				b = !0
			} if (this.showInTOC) this.nativeVideo.CPtoc = !0, b && (a.device == a.IDEVICE && a.IOSMajor >= a.IOS5 || a.device == a.ANDROID) ? (this.nativeVideo.CPcanPlay = !1, this.nativeVideo.style.position = "fixed", this.nativeVideo.style.left = "-99999px", this.nativeVideo.style.width = "192px", this.nativeVideo.style.height = "144px", this.nativeVideo.from = this.from, this.nativeVideo.to = this.to, a.toc.rootObj.showVideo(!1)) : a.toc.rootObj.showVideo(!0);
			else {
				this.nativeVideo.CPtoc = !1;
				var d = this.bounds;
				this.nativeVideo.style.display = "block";
				a.responsive ? (this.nativeVideo.style.width =
					"100%", this.nativeVideo.style.height = "100%") : (this.nativeVideo.style.width = d.maxX - d.minX + "px", this.nativeVideo.style.height = d.maxY - d.minY + "px");
				if (b && (a.device == a.IDEVICE && a.IOSMajor >= a.IOS5 || a.device == a.ANDROID)) this.nativeVideo.CPcanPlay = !1, this.nativeVideo.style.position = "fixed", this.nativeVideo.style.left = "-99999px", this.nativeVideo.from = this.from, this.nativeVideo.to = this.to;
				b = a.movie.stage.NativeSlideVideoElement;
				a.device == a.IDEVICE || a.device == a.ANDROID ? this.nativeVideo.parentElement ? (a.movie.stage.correctReWrapZOrder(b.parentElement,
					this.element.parentElement), a.movie.stage.correctParentZOrder(a.movie.stage.VideoElement, this.actualParent)) : b.appendChild(this.nativeVideo) : b.appendChild(this.nativeVideo);
				this.actualParent.drawingBoard = b.parentElement;
				this.visible && (b.style.display = "block", b.style.visibility = "visible")
			} if (this.visible) {
				if (b = a.DESKTOP == a.device && a.SAFARI === a.browser && 7 <= a.browserVersion) this.nativeVideo.controls = !0;
				this.autoPlay ? this.play() : this.nativeVideo && b && (this.nativeVideo.controls = !0)
			} else this.visible || a.hide(this.parentDivName);
			a.redrawVideo(this.nativeVideo)
		}
	};
	a.SlideVideo.prototype.updateFrame = function () {
		if (this.paused && !a.movie.paused && this.autoPlay && this.visible) {
			if (!this.ended && this.nativeVideo && this.nativeVideo.ended && 250 > (new Date).getTime() - this.pacedAt || this.nativeVideo && this.nativeVideo.currentTime >= this.nativeVideo.duration) return;
			this.play()
		}
		this.effectIsStarted || (this.updateEffects(this.hasEffect), this.effectIsStarted = !0)
	};
	a.SlideVideo.prototype.seekTo = function (b) {
		this.vdm.verbose && a.log("SlideVideo " + this.id +
			" seekTo(" + b + ")");
		if (this.loop && this.loopFrames) {
			if (this.from <= b) return this.setCurrentTime((b - this.from) % this.loopFrames / cpInfoFPS + this.seek_From), this.ended = !1, !0
		} else {
			if (this.from <= b && this.to >= b) return this.setCurrentTime((b - this.from) / cpInfoFPS + this.seek_From), this.ended = !1, !0;
			this.to >= b && (this.setCurrentTime(this.seek_From), this.ended = !1)
		}
		return !1
	};
	a.SlideVideo.prototype.pause = function () {
		var b = this.nativeVideo && !this.nativeVideo.paused && !this.nativeVideo.ended;
		a.SlideVideo.superClass.pause.call(this);
		if (a.device == a.IDEVICE || a.device == a.ANDROID)
			if (b && this.nativeVideo && (this.nativeVideo.paused || this.nativeVideo.ended)) a.movie.stage.VideoPlaying = !1
	};
	a.SlideVideo.prototype.play = function () {
		var b = this.nativeVideo && !this.nativeVideo.paused && !this.nativeVideo.ended;
		a.SlideVideo.superClass.play.call(this);
		if ((a.device == a.IDEVICE || a.device == a.ANDROID) && !b && this.nativeVideo && !this.nativeVideo.paused && !this.nativeVideo.ended) a.movie.stage.VideoPlaying = !0
	}
})(window.cp);
cp.GESTURE_EVENT_TYPES = {};
cp.GESTURE_EVENT_TYPES.TAP = "tap";
cp.GESTURE_EVENT_TYPES.DOUBLE_TAP = "doubletap";
cp.GESTURE_EVENT_TYPES.LONG_TAP = "longtap";
cp.GESTURE_EVENT_TYPES.HOLD = "hold";
cp.GESTURE_EVENT_TYPES.ROTATE = "rotate";
cp.GESTURE_EVENT_TYPES.DRAG = "drag";
cp.GESTURE_EVENT_TYPES.DRAG_START = "dragstart";
cp.GESTURE_EVENT_TYPES.DRAG_END = "dragend";
cp.GESTURE_EVENT_TYPES.SWIPE_UP = "swipeup";
cp.GESTURE_EVENT_TYPES.SWIPE_DOWN = "swipedown";
cp.GESTURE_EVENT_TYPES.SWIPE_LEFT = "swipeleft";
cp.GESTURE_EVENT_TYPES.SWIPE_RIGHT = "swiperight";
cp.GESTURE_EVENT_TYPES.TOUCH = "touch";
cp.GESTURE_EVENT_TYPES.RELEASE = "release";
cp.GESTURE_EVENT_TYPES.PINCH_OUT = "pinchout";
cp.GESTURE_EVENT_TYPES.PINCH_IN = "pinchin";
cp.GESTURE_EVENT_TYPES.TAP_ONE = "tapone";
cp.GESTURE_EVENT_TYPES.TAP_TWO = "taptwo";
cp.GESTURE_EVENT_TYPES.TAP_THREE = "tapthree";
cp.GESTURE_EVENT_TYPES.SWIPE_MOVE = "swipemove";
cp.GESTURE_EVENT_TYPES.SWIPE_ONE = "swipeone";
cp.GESTURE_EVENT_TYPES.SWIPE_TWO = "swipetwo";
cp.GESTURE_EVENT_TYPES.SWIPE_THREE = "swipethree";
cp.GESTURE_EVENT_TYPES.SWIPE_FOUR = "swipefour";
cp.GESTURE_EVENT_TYPES.SWIPE_LEFT_UP = "swipeleftup";
cp.GESTURE_EVENT_TYPES.SWIPE_LEFT_DOWN = "swipeleftdown";
cp.GESTURE_EVENT_TYPES.SWIPE_RIGHT_UP = "swiperightup";
cp.GESTURE_EVENT_TYPES.SWIPE_RIGHT_DOWN = "swiperightdown";
cp.GESTURE_EVENT_TYPES.PINCH = "pinch";
cp.GESTURE_EVENT_TYPES.PINCH_OPEN = "pinchopen";
cp.GESTURE_EVENT_TYPES.PINCH_CLOSE = "pinchclose";
cp.GESTURE_EVENT_TYPES.ROTATECW = "rotatecw";
cp.GESTURE_EVENT_TYPES.ROTATECCW = "rotateccw";
cp.GESTURE_EVENT_TYPES.SHAKE = "shake";
cp.GESTURE_EVENT_TYPES.SHAKE_FRONT_BACK = "shakefrontback";
cp.GESTURE_EVENT_TYPES.SHAKE_LEFT_RIGHT = "shakeleftright";
cp.GESTURE_EVENT_TYPES.SHAKE_UP_DOWN = "shakeupdown";
cp.GestureHandler = function () {
	this.movie = cp.movie;
	this.enabled = !0;
	this.initializeDefaultGestureEvents()
};
cp.GestureHandler.prototype.scaleMovie = function (a, b) {
	a.gesture.stopPropagation();
	a.gesture.preventDefault();
	var c = cp("div_Slide");
	c.style.webkitTransformOrigin = "" + a.gesture.center.pageX + " " + a.gesture.center.pageY + "";
	c.style.MozTransformOrigin = "" + a.gesture.center.pageX + " " + a.gesture.center.pageY + "";
	c.style.msTransformOrigin = "" + a.gesture.center.pageX + " " + a.gesture.center.pageY + "";
	c.style.webkitTransform = "scale(" + !b ? a.gesture.scale : "1)";
	c.style.MozTransform = "scale(" + !b ? a.gesture.scale : "1)";
	c.style.msTransform =
		"scale(" + !b ? a.gesture.scale : "1)"
};
cp.GestureHandler.prototype.addCPEventListeners = function () {
	if (cp.device != cp.DESKTOP) {
		var a = this;
		cp.em.addEventListener(function (b) {
			a.resetZoom.call(a, b);
			a.resetScroll.call(a, b)
		}, cp.SLIDEENTEREVENT);
		cp.em.addEventListener(function (b) {
			a.resetZoom.call(a, b);
			a.resetScroll.call(a, b)
		}, cp.ORIENTATIONCHANGEDEVENT)
	}
};
cp.GestureHandler.prototype.registerGestureEvent = function (a, b, c) {
	if (!cp.IsGestureSupportedDevice() || !cp.useg) a.onclick = c
};
cp.GestureHandler.prototype.removeGestureEvent = function (a) {
	if (!cp.IsGestureSupportedDevice() || !cp.useg) a.onclick = void 0
};
cp.GestureHandler.prototype.enableGestures = function () {
	this.enabled = !0;
	"undefined" != typeof Hammer && (Hammer && Hammer.detection) && (Hammer.detection.current = null)
};
cp.GestureHandler.prototype.disableGestures = function () {
	this.enabled = !1
};
cp.GestureHandler.prototype.addScaleEvent = function () {};
cp.GestureHandler.prototype.changeClickEventsToTouch = function () {
	this.registerGestureEvent(cp("playImage"), cp.GESTURE_EVENT_TYPES.TAP, function () {
		cp.movie.play()
	});
	this.registerGestureEvent(cp("ccClose"), cp.GESTURE_EVENT_TYPES.TAP, function () {
		cp.showHideCC()
	})
};
cp.GestureHandler.prototype.scrollH = function (a) {
	var b = cp.responsive ? cp("project") : cp("main_container"),
		a = b.getBoundingClientRect().left + a;
	b.style.left = a + "px"
};
cp.GestureHandler.prototype.scrollV = function (a) {
	var b = cp.responsive ? cp("project") : cp("main_container"),
		a = b.getBoundingClientRect().top + a;
	b.style.top = a + "px"
};
cp.GestureHandler.prototype.getDefaultGestureHandler = function (a) {
	switch (a) {
		case cp.GESTURE_EVENT_TYPES.TAP_TWO:
			return function () {
				cp.m_gestureHandler.enabled && cp.handlePlaybarShowHide()
			};
		case cp.GESTURE_EVENT_TYPES.LONG_TAP:
			return function () {
				cp.m_gestureHandler.enabled && cp.toggleMoviePlayPause()
			};
		case cp.GESTURE_EVENT_TYPES.HOLD:
			return function () {
				cp.m_gestureHandler.enabled && cp.handlePlaybarShowHide()
			};
		case cp.GESTURE_EVENT_TYPES.DOUBLE_TAP:
			return function () {
				cp.m_gestureHandler.enabled && cp.handleTOCOpenClose()
			};
		case cp.GESTURE_EVENT_TYPES.SWIPE_UP:
			return function (a) {
				if (cp.m_gestureHandler.enabled) {
					if (cp.canScroll("up", cp.GESTURE_EVENT_TYPES.SWIPE_UP)) return !1;
					50 > a.gesture.distance || (a.gesture.stopPropagation(), a.gesture.preventDefault(), cp("div_Slide").scaleFactor && 1 != cp("div_Slide").scaleFactor || cp.togglePlaybarShowHide())
				}
			};
		case cp.GESTURE_EVENT_TYPES.SWIPE_DOWN:
			return function (a) {
				if (cp.m_gestureHandler.enabled) {
					if (cp.canScroll("down", cp.GESTURE_EVENT_TYPES.SWIPE_DOWN)) return !1;
					50 > a.gesture.distance ||
						(a.gesture.stopPropagation(), a.gesture.preventDefault(), cp("div_Slide").scaleFactor && 1 != cp("div_Slide").scaleFactor || cp.togglePlaybarShowHide())
				}
			};
		case cp.GESTURE_EVENT_TYPES.SWIPE_LEFT:
			return function (a) {
				if (cp.m_gestureHandler.enabled) {
					if (!cp.responsive && cp.canScroll("left", cp.GESTURE_EVENT_TYPES.SWIPE_LEFT)) return !1;
					if (!(50 > a.gesture.distance) && (a.gesture.stopPropagation(), a.gesture.preventDefault(), !(cp("div_Slide").scaleFactor && 1 != cp("div_Slide").scaleFactor) && (!cp.D || !cp.D.baq))) {
						var a = cp.goToNextSlide,
							c = window;
						if (cp.movie.stage && cp.movie.stage.currentSlide) {
							var d = cp.movie.stage.currentSlide;
							if (!d.useng) return;
							if ("Question Slide" == d.st && (d = cp.getQuestionObject(cp.D[d.mdi].dn))) a = d.moveForward, c = d
						}
						a.call(c, void 0)
					}
				}
			};
		case cp.GESTURE_EVENT_TYPES.SWIPE_RIGHT:
			return function (a) {
				if (cp.m_gestureHandler.enabled) {
					if (!cp.responsive && cp.canScroll("right", cp.GESTURE_EVENT_TYPES.SWIPE_RIGHT)) return !1;
					if (!(50 > a.gesture.distance) && (a.gesture.stopPropagation(), a.gesture.preventDefault(), !(cp("div_Slide").scaleFactor &&
						1 != cp("div_Slide").scaleFactor) && (!cp.D || !cp.D.baq))) {
						var a = cp.goToPreviousSlide,
							c = window;
						if (cp.movie.stage && cp.movie.stage.currentSlide) {
							var d = cp.movie.stage.currentSlide;
							if (!d.useng) return;
							if ("Question Slide" == d.st && (d = cp.getQuestionObject(cp.D[d.mdi].dn))) a = d.moveBackward, c = d
						}
						a.call(c, void 0)
					}
				}
			}
	}
};
cp.GestureHandler.prototype.initializeDefaultGestureEvents = function () {
	cp("div_Slide").scaleFactor = 1;
	if (cp.IsGestureSupportedDevice() && cp.useg) {
		this.changeClickEventsToTouch();
		var a = cp("div_Slide");
		cp("main_container");
		cp.D.project.shc || this.addScaleEvent();
		this.registerGestureEvent(a, cp.GESTURE_EVENT_TYPES.LONG_TAP, this.getDefaultGestureHandler(cp.GESTURE_EVENT_TYPES.LONG_TAP));
		this.registerGestureEvent(a, cp.GESTURE_EVENT_TYPES.DOUBLE_TAP, this.getDefaultGestureHandler(cp.GESTURE_EVENT_TYPES.DOUBLE_TAP));
		this.registerGestureEvent(a, cp.GESTURE_EVENT_TYPES.SWIPE_UP, this.getDefaultGestureHandler(cp.GESTURE_EVENT_TYPES.SWIPE_UP));
		this.registerGestureEvent(a, cp.GESTURE_EVENT_TYPES.SWIPE_DOWN, this.getDefaultGestureHandler(cp.GESTURE_EVENT_TYPES.SWIPE_DOWN));
		this.registerGestureEvent(a, cp.GESTURE_EVENT_TYPES.SWIPE_LEFT, this.getDefaultGestureHandler(cp.GESTURE_EVENT_TYPES.SWIPE_LEFT));
		this.registerGestureEvent(a, cp.GESTURE_EVENT_TYPES.SWIPE_RIGHT, this.getDefaultGestureHandler(cp.GESTURE_EVENT_TYPES.SWIPE_RIGHT))
	}
};
cp.GestureHandler.prototype.resetZoom = function () {};
cp.GestureHandler.prototype.resetScroll = function () {};
cp.GestureHandler.prototype.initializeProjectGestures = function () {
	if (cp.useg) {
		var a = cp.D.project.GestureData;
		if (a)
			for (var b in a) cp.registerGestureEvent(cp("project"), b, a[b])
	}
};
cp.GestureHandler.prototype.getEventPageX = function (a) {
	var b = a;
	a.changedTouches && 0 < a.changedTouches.length && (b = a.changedTouches[0]);
	if (!b) return 0;
	if (b.pageX) return b.pageX;
	var a = document.documentElement,
		c = document.body;
	return b.clientX + (a && a.scrollLeft || c && c.scrollLeft || 0) - (a && a.clientLeft || c && c.clientLeft || 0)
};
cp.GestureHandler.prototype.getEventPageY = function (a) {
	var b = a;
	a.changedTouches && 0 < a.changedTouches.length && (b = a.changedTouches[0]);
	if (!b) return 0;
	if (b.pageY) return b.pageY;
	var a = document.documentElement,
		c = document.body;
	return b.clientY + (a && a.scrollTop || c && c.scrollTop || 0) - (a && a.clientTop || c && c.clientTop || 0)
};
cp.registerGestureEvent = function (a, b, c) {
	a && (b && c) && cp.m_gestureHandler.registerGestureEvent(a, b, c)
};
cp.removeGestureEvent = function (a, b, c) {
	a && b && cp.m_gestureHandler.removeGestureEvent(a, b, c)
};
cp.IsGestureSupportedDevice = function () {
	return cp.device == cp.IDEVICE || cp.device == cp.ANDROID
};
cp.initializeGestureEvents = function () {
	cp.m_gestureHandler || (cp.IsGestureSupportedDevice() && (cp("cpDocument").style.overflow = "auto"), cp.m_gestureHandler = !cp.IsGestureSupportedDevice() || !cp.useg ? new cp.GestureHandler : new cp.HammerGestureHandler, cp.m_gestureHandler.initializeProjectGestures())
};
cp.canScroll = function (a, b) {
	if (!cp.m_gestureHandler.enabled || cp.D.project.shc || 1 != cp("div_Slide").scaleFactor) return !1;
	if (b != cp.GESTURE_EVENT_TYPES.DRAG && cp.m_gestureHandler.isScrolling) return !0;
	var c = cp.responsive ? cp("project").getBoundingClientRect() : cp("main_container").getBoundingClientRect();
	switch (a) {
		case "up":
			return c.bottom > window.innerHeight;
		case "down":
			return 0 > c.top;
		case "left":
			return c.right > window.innerWidth;
		case "right":
			return 0 > c.left;
		default:
			return !1
	}
};
cp.HammerGestureHandler = function () {
	cp.HammerGestureHandler.baseConstructor.call(this)
};
cp.inherits(cp.HammerGestureHandler, cp.GestureHandler);
cp.HammerGestureHandler.prototype.scaleMovie = function (a, c) {
	a.gesture.stopPropagation();
	a.gesture.preventDefault();
	var b = cp("div_Slide");
	b.style.webkitTransformOrigin = "" + a.gesture.center.pageX + " " + a.gesture.center.pageY + "";
	b.style.MozTransformOrigin = "" + a.gesture.center.pageX + " " + a.gesture.center.pageY + "";
	b.style.msTransformOrigin = "" + a.gesture.center.pageX + " " + a.gesture.center.pageY + "";
	b.style.webkitTransform = "scale(" + !c ? a.gesture.scale : "1)";
	b.style.MozTransform = "scale(" + !c ? a.gesture.scale : "1)";
	b.style.msTransform =
		"scale(" + !c ? a.gesture.scale : "1)"
};
cp.HammerGestureHandler.prototype.registerGestureEvent = function (a, c, b) {
	if (a && c && b)
		if (a.onclick = void 0, a && ("input" == a.tagName.toLowerCase() && "text" == a.type || "textarea" == a.tagName.toLowerCase() || "select" == a.tagName.toLowerCase() || "toccontent" == a.id.toLowerCase())) Hammer(a).on(cp.GESTURE_EVENT_TYPES.DRAG_END, this.fitMovie), Hammer(a).on(c, b);
		else Hammer(a, {
			prevent_default: !0
		}).on(c, b)
};
cp.HammerGestureHandler.prototype.removeGestureEvent = function (a, c, b) {
	a && c && Hammer(a).off(c, b)
};
cp.HammerGestureHandler.prototype.fitMovie = function (a) {
	if (!cp.m_gestureHandler.enabled) return !1;
	if (1 == cp("div_Slide").scaleFactor) {
		window.scrollTo(0, 0);
		var c = cp.responsive ? cp("project") : cp("main_container"),
			b = c.getBoundingClientRect();
		if (a && a.gesture && a.gesture.direction) switch (a.gesture.direction) {
			case "up":
				b.bottom < window.innerHeight && b.height > window.innerHeight && (c.style.top = window.innerHeight - b.height + "px");
				break;
			case "down":
				0 < b.top && b.height > window.innerHeight && (c.style.top = "0px");
				break;
			case "left":
				b.right <
					window.innerWidth && b.width > window.innerWidth && (c.style.left = window.innerWidth - b.width + "px");
				break;
			case "right":
				0 < b.left && b.width > window.innerWidth && (c.style.left = "0px");
				break;
			default:
				return !1
		} else cp.responsive && (c.style.top = b.bottom <= window.innerHeight && b.height > window.innerHeight ? window.innerHeight - b.height + "px" : "0px", 0 <= b.top && (c.style.top = "0px"))
	}
	a && a.stopDetect && a.stopDetect();
	return !1
};
cp.HammerGestureHandler.prototype.addScaleEvent = function () {
	var a, c;
	function b(a) {
		if (!a.target || !("INPUT" == a.target.tagName.toUpperCase() || "SELECT" == a.target.tagName.toUpperCase() || "TEXTAREA" == a.target.tagName.toUpperCase()))(cp.isTextInputInFocus() || "SELECT" == document.activeElement.tagName.toUpperCase()) && document.activeElement.blur(), a.preventDefault()
	}
	cp("main_container");
	var g = cp("project"),
		d = cp("div_Slide");
	d.scaleFactor = 1;
	Hammer(g, {
		prevent_default: !0,
		no_mouseevents: !0,
		transform_min_scale: 1,
		drag_block_horizontal: !0,
		drag_block_vertical: !0,
		drag_min_distance: 0
	});
	this.previousScaleFactor = this.scaleFactor = d.scaleFactor = 1;
	var h = 0,
		i = 0,
		j = 0,
		k = 0,
		l = 0,
		m = 0,
		n = "",
		f = this;
	this.registerGestureEvent(g, "transformstart", function (a) {
		if (!cp.m_gestureHandler.enabled) return !1;
		a.gesture.stopPropagation();
		a.gesture.preventDefault();
		e = a.gesture;
		h = [e.touches[0].pageX, e.touches[0].pageY];
		i = [e.touches[1].pageX, e.touches[1].pageY];
		j = (h[0] + i[0]) / 2;
		k = (h[1] + i[1]) / 2;
		l = j;
		m = k;
		a = d.getBoundingClientRect();
		n = (-a.left + l) / f.scaleFactor + "px " + (-a.top +
			m) / f.scaleFactor + "px"
	});
	this.registerGestureEvent(g, "transform", function (a) {
		if (!cp.m_gestureHandler.enabled) return !1;
		a.gesture.stopPropagation();
		a.gesture.preventDefault();
		f.scaleFactor = f.previousScaleFactor * a.gesture.scale;
		f.scaleFactor = Math.max(1, Math.min(f.scaleFactor, 3));
		d.scaleFactor = f.scaleFactor;
		f.transform(d, f.scaleFactor, n)
	});
	this.registerGestureEvent(g, "transformend", function (a) {
		if (!cp.m_gestureHandler.enabled) return !1;
		a.gesture.stopPropagation();
		a.gesture.preventDefault();
		d.scaleFactor =
			f.scaleFactor;
		f.previousScaleFactor = f.scaleFactor;
		a.gesture.stopDetect && a.gesture.stopDetect()
	});
	var o, p, q = function (b) {
			if (!cp.m_gestureHandler.enabled) return !1;
			1 == d.scaleFactor ? (f.fitMovie(b), d.scrollDeltaX = 0, d.scrollDeltaY = 0) : (b.gesture.stopPropagation(), b.gesture.preventDefault(), b = b.gesture.touches || [b.gesture], a = b[0].pageX, c = b[0].pageY, o = parseFloat(d.style.left), p = parseFloat(d.style.top))
		}, r = function (b) {
			if (!cp.m_gestureHandler.enabled) return !1;
			if (1 == d.scaleFactor)
				if ("up" == b.gesture.direction &&
					cp.canScroll("up", cp.GESTURE_EVENT_TYPES.DRAG) || "down" == b.gesture.direction && cp.canScroll("down", cp.GESTURE_EVENT_TYPES.DRAG)) f.scrollV(b.gesture.deltaY - d.scrollDeltaY), d.scrollDeltaY = b.gesture.deltaY, f.isScrolling = !0;
				else {
					if (!cp.responsive && ("left" == b.gesture.direction && cp.canScroll("left", cp.GESTURE_EVENT_TYPES.DRAG) || "right" == b.gesture.direction && cp.canScroll("right", cp.GESTURE_EVENT_TYPES.DRAG))) f.scrollH(b.gesture.deltaX - d.scrollDeltaX), d.scrollDeltaX = b.gesture.deltaX, f.isScrolling = !0
				} else b.gesture.stopPropagation(),
			b.gesture.preventDefault(), g.getBoundingClientRect(), b = b.gesture.touches || [b.gesture], d.style.left = o + b[0].pageX - a + "px", d.style.top = p + b[0].pageY - c + "px"
		}, s = function (a) {
			a.gesture.stopDetect && a.gesture.stopDetect();
			f.isScrolling = !1;
			f.fitMovie(a)
		};
	this.registerGestureEvent(d, "touchstart", b);
	this.registerGestureEvent(d, "touchmove", b);
	this.registerGestureEvent(d, "touchend", b);
	this.registerGestureEvent(d, "touchcancel", b);
	this.registerGestureEvent(d, cp.GESTURE_EVENT_TYPES.DRAG_START, q);
	this.registerGestureEvent(d,
		cp.GESTURE_EVENT_TYPES.DRAG, r);
	this.registerGestureEvent(d, cp.GESTURE_EVENT_TYPES.DRAG_END, s);
	this.ondragstarthandler = q;
	this.ondraghandler = r;
	this.ondragendhandler = s
};
cp.HammerGestureHandler.prototype.transform = function (a, c, b) {
	a.scaleFactor = c;
	var g = "scaleX(" + c + ") scaleY(" + c + ")";
	a.style.webkitTransform = g;
	b && (a.style.webkitTransformOrigin = b);
	a.style.transform = g;
	b && (a.style.transformOrigin = b);
	1 == c && (a.style.left = "0px", a.style.top = "0px", this.previousScaleFactor > c && cp.adjustResponsiveItems(cp.ReasonForDrawing.kOrientationChangeOrResize), this.previousScaleFactor = this.scaleFactor = 1)
};
cp.HammerGestureHandler.prototype.resetZoom = function () {
	cp.isTextInputInFocus() || "SELECT" == document.activeElement.tagName.toUpperCase() || this.transform(cp("div_Slide"), 1)
};
cp.HammerGestureHandler.prototype.resetScroll = function (a) {
	cp.device != cp.DESKTOP && (cp.responsive ? cp("project") : cp("main_container"), cp.m_gestureHandler.fitMovie(a))
};
cp.HammerGestureHandler.prototype.initializeDefaultGestureEvents = function () {
	var a = cp("div_Slide"),
		c = cp("cpDocument");
	Hammer(c, {
		prevent_default: !0,
		no_mouseevents: !0
	});
	Hammer(a, {
		prevent_default: !1,
		no_mouseevents: !0
	});
	cp.HammerGestureHandler.superClass.initializeDefaultGestureEvents.call(this)
};
cp.HammerGestureHandler.prototype.getEventPageX = function (a) {
	var c = a.gesture;
	if (!c || !c.center) return cp.HammerGestureHandler.superClass.getEventPageX.call(this, a);
	c = c.center;
	if (c.pageX) return c.pageX;
	var a = document.documentElement,
		b = document.body;
	return c.clientX + (a && a.scrollLeft || b && b.scrollLeft || 0) - (a && a.clientLeft || b && b.clientLeft || 0)
};
cp.HammerGestureHandler.prototype.getEventPageY = function (a) {
	var c = a.gesture;
	if (!c || !c.center) return cp.HammerGestureHandler.superClass.getEventPageY.call(this, a);
	c = c.center;
	if (c.pageY) return c.pageY;
	var a = document.documentElement,
		b = document.body;
	return c.clientY + (a && a.scrollTop || b && b.scrollTop || 0) - (a && a.clientTop || b && b.clientTop || 0)
};
cp.user_responseIdentifierArr = [];
cp.correct_responseIdentifierArr = [];
cp.ConvertToInteractionResultConstant = function (a) {
	if (!cp.IsRunningInACAP) {
		var b;
		switch (a.toLowerCase()) {
			case "correct":
				b = !0;
				break;
			case "wrong":
				b = !1;
				break;
			case "unanticipated":
				b = cp.LMSDriverHolder.INTERACTION_RESULT_UNANTICIPATED;
				break;
			case "neutral":
				b = cp.LMSDriverHolder.INTERACTION_RESULT_NEUTRAL;
				break;
			case "incorrect":
				b = !1;
				break;
			default:
				cp.verbose && cp.log("Could not find appropriate token for interaction result! -" + a)
		}
		return b
	}
};
cp.quizContinueButtonClickHandler = function () {
	cp.movie.play()
};
cp.qcnch = function (a) {
	return cp.quizContinueButtonClickHandler(a)
};
cp.defaultHandlerForRuntimeMessageBox = function () {
	var a = cp.movie.playbackController.GetQuizController();
	a && a.DefaultHandlerForRuntimeMessageBox()
};
cp.returnToQuiz = function () {
	var a = cp.movie.playbackController.GetQuizController();
	a && a.ReturnToQuiz()
};
cp.forceSubmitAll = function () {
	var a = cp.movie.playbackController.GetQuizController();
	a && a.ForceSubmitAll()
};
cp.quizReviewButtonClickHandler = function (a) {
	var a = cp.D[a.id],
		b = cp.movie.playbackController.GetQuizController();
	b && cp.movie.playbackController.HasQuiz() && (b.SetIsInReviewMode(!0), a && (cp.movie.playbackController.GetSlideNames(), a = b.GetFirstSlideInQuizIndex(), void 0 != a && (cpCmndGotoSlideAndResume = a)))
};
cp.qrch = function (a) {
	return cp.quizReviewButtonClickHandler(a)
};
cp.resetQuizData = function () {
	var a = cp.movie.playbackController.GetQuizController();
	if (a) {
		var b = cp.movie.questionObjs;
		if (!b) return 0;
		var c = b.length;
		if (!(0 >= c)) {
			for (var d = 0; d < c; ++d) b[d] && (b[d].getIsPretest() || b[d].resetQuestionData());
			a.GetScore()
		}
	}
};
cp.quizRetakeButtonClickHandler = function (a) {
	var b = cp.movie.playbackController.GetQuizController();
	if (b && (cp.movie.playbackController.HasQuiz() && cp.D[a.id]) && (a = cp.movie.playbackController.GetSlideNames(), b = b.GetFirstSlideInQuizIndex(), 0 <= b && (a = cp.D[a[b]]))) {
		var c = cp.movie.playbackController.GetGraphManager();
		void 0 != c && c.resetCurrentBranch(b);
		cp.resetQuizData();
		cpCmndGotoFrameAndResume = a.from
	}
};
cp.qrtch = function (a) {
	return cp.quizRetakeButtonClickHandler(a)
};
cp.quizPostResultButtonClickHandler = function () {
	cp.movie.playbackController.PostQuizResults()
};
cp.qprch = function (a) {
	return cp.quizPostResultButtonClickHandler(a)
};
cp.quizClearButtonClickHandler = function (a) {
	var b = cp.movie.playbackController.GetQuizController();
	if (b) {
		var c = cp.D[a.id];
		c && (c = cp.getQuestionObject(c.sn)) && (!c.getIsPretest() || !b.GetIsPretestQuestionsDisabled()) && c.clearButtonClickHandler(a)
	}
};
cp.qcch = function (a) {
	return cp.quizClearButtonClickHandler(a)
};
cp.quizSkipButtonClickHandler = function (a) {
	var b = cp.movie.playbackController.GetQuizController();
	if (b) {
		var c = cp.D[a.id];
		if (c && (c = cp.getQuestionObject(c.sn))) {
			if (!b.GetIsInReviewMode()) {
				if (c.getIsLastPretestQuestion()) return b.ExecutePretestAction(cp.movie.playbackController.GetCurrentSlideIndex());
				var d = b.GetIsSubmitAll();
				if ("mustAnswer" == b.GetQuestionAdvanceType() && !d && !c.m_answersDisabled && !c.getIsPretest() && !c.getIsKnowledgeCheck()) return;
				var e = c.getSlideIndex();
				if (0 <= e && !c.getIsPretest() && !c.getIsKnowledgeCheck() && !d) {
					d = !1;
					b = b.GetGraphManager();
					if (void 0 != b) {
						var f = b.getNextSlideList(e);
						if (void 0 != f)
							if (1 == f.length) d = !1;
							else if (d = !0, f = b.getBranchHistory(), void 0 != f)
							for (var g = f.length - 1; 0 <= g; --g) {
								var i = f[g];
								if (i == e && g != f.length - 1 && b.getIsJumpValid(i, f[g + 1])) {
									d = !1;
									break
								}
							}
					}
					if (d) return
				}
				if ("" != cp.movie.playbackController.AllowedToGoToSlide(cpInfoCurrentSlideIndex, cpInfoCurrentSlideIndex + 1)) return
			}
			cpQuizInfoTotalUnansweredQuestions += 1;
			c.skipButtonClickHandler(a)
		}
	}
};
cp.qskch = function (a) {
	return cp.quizSkipButtonClickHandler(a)
};
cp.quizBackButtonClickHandler = function (a) {
	var b = cp.movie.playbackController.GetQuizController();
	if (b) {
		var c = cp.D[a.id];
		c && (c = cp.getQuestionObject(c.sn)) && (b.GetIsInReviewMode() || "" == cp.movie.playbackController.AllowedToGoToSlide(cpInfoCurrentSlideIndex, cpInfoCurrentSlideIndex - 1)) && c.backButtonClickHandler(a)
	}
};
cp.qbch = function (a) {
	return cp.quizBackButtonClickHandler(a)
};
cp.quizReviewModeNextButtonClickHandler = function (a) {
	var b = cp.movie.playbackController.GetQuizController();
	if (b) {
		var c = cp.D[a.id];
		c && (c = cp.getQuestionObject(c.sn)) && b.GetIsInReviewMode() && c.reviewModeNextButtonClickHandler(a)
	}
};
cp.qrmnch = function (a) {
	return cp.quizReviewModeNextButtonClickHandler(a)
};
cp.quizReviewModeBackButtonClickHandler = function (a) {
	var b = cp.movie.playbackController.GetQuizController();
	if (b) {
		var c = cp.D[a.id];
		c && (c = cp.getQuestionObject(c.sn)) && b.GetIsInReviewMode() && c.reviewModeBackButtonClickHandler(a)
	}
};
cp.qrmbch = function (a) {
	return cp.quizReviewModeBackButtonClickHandler(a)
};
cp.quizSubmitButtonClickHandler = function (a) {
	var b = cp.movie.playbackController.GetQuizController();
	if (b && (a = cp.D[a.id]))
		if ((a = cp.getQuestionObject(a.sn)) && (!a.getIsPretest() || !b.GetIsPretestQuestionsDisabled())) a.getWasJudged() || a.judge(!1, !1), cpQuizInfoTotalUnansweredQuestions -= 1
};
cp.qsbch = function (a) {
	return cp.quizSubmitButtonClickHandler(a)
};
cp.quizSubmitAllButtonClickHandler = function () {
	var a = cp.movie.playbackController.GetQuizController();
	a && a.SubmitAllQuestions(!0, !1)
};
cp.qsabch = function (a) {
	return cp.quizSubmitAllButtonClickHandler(a)
};
cp.intTimeoutID = "";
cp.CallFunctionAfterAPIIsLoaded = function (a) {
	if (IsLoaded()) return "" != intTimeoutID && (window.clearTimeout(intTimeoutID), intTimeoutID = ""), eval(a);
	intTimeoutID = window.setTimeout("CallFunctionAfterAPIIsLoaded(" + a + ")", 100)
};
cp.UnloadActivties = function () {
	if (!(cp.LMSUnloaded || void 0 == cp.LMSDriverHolder && !cp.IsRunningInACAP)) {
		var a = cp.movie.playbackController;
		a && (a.GetIsTracked() && "EMAIL" != a.m_lmsType.toUpperCase() && "ACROBAT" != a.m_lmsType.toUpperCase() && "INTERNALSERVER" != a.m_lmsType.toUpperCase()) && (cp.movie.virgin && a.RestoreQuizState(), a.IsRunningInConnect() ? a.ExitCourse() : a.SendCourseData(!0), a.ClearPendingCalls());
		cp.LMSDriverHolder && (cp.LMSDriverHolder.CommitData && cp.LMSDriverHolder.CommitData(), cp.LMSDriverHolder.Unload &&
			cp.LMSDriverHolder.Unload());
		cp.LMSUnloaded = !0
	}
};
cp.intQuestionSymbolCounter = 0;
cp.ASCII_QUESTION = 63;
cp.CheckForDebugCommand = function (a) {
	if (!cp.IsRunningInACAP) {
		var b = 0,
			b = window.event ? window.event.keyCode : a.which;
		b == cp.ASCII_QUESTION ? (cp.intQuestionSymbolCounter++, 3 == cp.intQuestionSymbolCounter && (cp.intQuestionSymbolCounter = 0, cp.LMSDriverHolder.ShowDebugWindow())) : 0 != b && (cp.intQuestionSymbolCounter = 0)
	}
};
cp.CheckForDebugCommandOnDevices = function (a) {
	cp.IsRunningInACAP || 30 < a.rotation && cp.LMSDriverHolder.ShowDebugWindow()
};
cp.topWindowBeforeUnloadHandler = void 0;
cp.topWindowUnloadHandler = void 0;
function RegisterForCloseOnTopWindow() {
	if (!cp.IsRunningInACAP && cp.MSIE == cp.browser && void 0 != cp.topWindow && cp.topWindow != cp.LMSDriverHolder.self) {
		var a = cp.topWindow;
		a.onbeforeunload && void 0 != a.onbeforeunload && (cp.topWindowBeforeUnloadHandler = a.onbeforeunload);
		a.onunload && void 0 != a.onunload && (cp.topWindowUnloadHandler = a.onunload);
		a.onbeforeunload = cp.CPDoBeforeUnload;
		a.onunload = cp.CPDoUnload
	}
}
cp.CPDoBeforeUnload = function () {
	var a = window.onbeforeunload;
	a && a();
	topWindowBeforeUnloadHandler && topWindowBeforeUnloadHandler()
};
cp.CPDoUnload = function () {
	cp.UnloadActivties();
	topWindowUnloadHandler && topWindowUnloadHandler()
};
cp.g_ShouldRandomize = !0;
cp.startBlnStr = !1;
cp.handleACAPResumeData = function (a) {
	cp.IsRunningInACAP && a.then(function (a) {
		cp.resumeDataChunk = unescape(a);
		"" != cp.resumeDataChunk && void 0 != cp.resumeDataChunk && "0" != cp.resumeDataChunk ? (cp.g_ShouldRandomize = !1, a = void 0, cp.movie && (a = cp.movie.playbackController), a && a.RestoreQuizState()) : cp.g_ShouldRandomize = !0;
		cp.ContinueCPInit();
		cp.unblockFromLMS()
	}, function () {
		cp.g_ShouldRandomize = !0;
		cp.ContinueCPInit();
		cp.unblockFromLMS()
	})
};
cp.fireResumeDataEvent = function (a) {
	cp.IsRunningInACAP && cp.em.fireEvent("CPSet_ResumeData", {
		ResumeData: a
	})
};
cp.LoadActivities = function () {
	if (!cp.IsRunningInACAP)
		if (cp.IsRunningInConnect()) cp.DoConnectRelatedLMSLoad();
		else if (!cp.IsRunningInALEC && "undefined" != typeof cp.LMSDriverHolder) {
		if (cp.m_isLMSPreview) {
			var a = cp.LMSDriverHolder.WriteToDebug;
			cp.LMSDriverHolder.WriteToDebug = function (b, c) {
				a(b, c);
				cp.LMSDriverHolder.winDebug && cp.LMSDriverHolder.winDebug.scrollTo(0, cp.LMSDriverHolder.winDebug.document.body.scrollHeight)
			};
			cp.LMSDriverHolder.ShowDebugWindow(!0)
		}
		var b = cp.D.quizReportingData;
		b && (cp.LMSDriverHolder.blnDebug =
			b.lWriteDebugInfo);
		cp.LMSDriverHolder.blockedForLMS || (cp.LMSDriverHolder.blockedForLMS = !0, cp("blockUserInteraction").style.display = "block", cp("blockUserInteraction").style.width = "100%", cp("blockUserInteraction").style.height = "100%", cp("blockUserInteraction").style.zIndex = 1E4);
		var c = cp.LMSDriverHolder.confirm;
		cp.LMSDriverHolder.confirm = function (a) {
			cp.LMSDriverHolder.confirm = c;
			LoadContent();
			return c(a)
		};
		RegisterForCloseOnTopWindow();
		cp.m_isLMSPreview && (cp.LMSDriverHolder.LoadContent = LoadContent);
		cp.LMSDriverHolder.Start()
	}
};
function LoadContent() {
	cp.verbose && cp.log("LoadContent called...IsContentLoaded : " + cp.IsContentLoaded);
	if (!cp.IsRunningInACAP && !cp.IsContentLoaded) {
		try {
			var a = cp.LMSDriverHolder.IsLoaded();
			cp.startBlnStr = a;
			if (!a) {
				cp.log("LMS Driver not loaded.");
				cp.ContinueCPInit();
				cp.unblockFromLMS();
				return
			}
			document.onkeypress = cp.CheckForDebugCommand;
			cp.DESKTOP != cp.device && (document.ongesturechange = cp.CheckForDebugCommandOnDevices)
		} catch (b) {
			cp.log("LMS Driver not found.");
			cp.ContinueCPInit();
			cp.unblockFromLMS();
			return
		}
		a = cp.LMSDriverHolder.GetEntryMode();
		if (a == cp.LMSDriverHolder.ENTRY_FIRST_TIME) cp.resumeDataChunk = unescape(cp.LMSDriverHolder.GetDataChunk()), "" != cp.resumeDataChunk && void 0 != cp.resumeDataChunk && "0" != cp.resumeDataChunk ? (cp.g_ShouldRandomize = !1, a = void 0, cp.movie && (a = cp.movie.playbackController), a && a.RestoreQuizState()) : (cp.LMSDriverHolder.SetBookmark("0"), cp.LMSDriverHolder.SetDataChunk("0"));
		else if (a == cp.LMSDriverHolder.ENTRY_REVIEW && cp.D.quizReportingData.cmiExitNormalAfterCompletion) cp.LMSDriverHolder.SetBookmark("0"),
		cp.LMSDriverHolder.SetDataChunk("0"), cp.g_ShouldRandomize = !0;
		else if (cp.LMSDriverHolder.GetBookmark(), cp.resumeDataChunk = unescape(cp.LMSDriverHolder.GetDataChunk()), "" != cp.resumeDataChunk && void 0 != cp.resumeDataChunk && "0" != cp.resumeDataChunk) {
			if (cp.g_ShouldRandomize = !1, a = void 0, cp.movie && (a = cp.movie.playbackController), a && a.RestoreQuizState(), cp.verbose) cp.log(cp.resumeDataChunk), cp.log("Unblocking UI")
		} else cp.g_ShouldRandomize = !0;
		cp.ContinueCPInit();
		cp.unblockFromLMS();
		cp.IsContentLoaded = !0
	}
}
cp.resumeValuesFromDataChunk = function () {
	if (cp.resumeDataChunk && "0" != cp.resumeDataChunk) {
		var a = cp.D.quizReportingData;
		!(a && !0 != a.trackingSendResumeData) && cp.movie.playbackController && (a = new cp.QuizState, a.init(), a.fromString(cp.resumeDataChunk), cp.movie.playbackController.restoreQuizFromState(a))
	}
};
cp.createAndGetDataChunk = function () {
	if (!cp.movie.playbackController) return "";
	var a = new cp.QuizState;
	a.init();
	cp.movie.playbackController.saveQuizState(a);
	return a.toString()
};
cp.getQuestionNumberInQuiz = function (a) {
	var b = -1,
		a = cp.D[a];
	void 0 != a && (b = a.qnq);
	return b
};
cp.getQuestionObjectName = function (a) {
	var b, a = cp.getQuestionNumberInQuiz(a); - 1 != a && (b = cp.movie.questions[a]);
	return b
};
cp.getQuestionObject = function (a) {
	var b, a = cp.getQuestionNumberInQuiz(a); - 1 != a && (b = cp.movie.questionObjs[a]);
	return b
};
cp.QuizState = function () {
	this.m_curReadPos = 0;
	this.m_b64Alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_-";
	this.m_to64 = [];
	this.m_from64 = [];
	this.m_escAlphabet = "$.!*+";
	this.m_doubleEsc = "~";
	this.m_esc = [];
	this.m_mask = [63, 4095, 262143, 16777215, 1073741823];
	this.m_fromEsc = [];
	this.m_state = ""
};
cp.QuizState.prototype = {
	init: function () {
		for (var a = 0; a < this.m_b64Alphabet.length; a++) this.m_to64[a] = this.m_b64Alphabet.charAt(a), this.m_from64[this.m_b64Alphabet.charCodeAt(a)] = a;
		for (a = 0; a < this.m_escAlphabet.length; ++a) this.m_esc[a] = this.m_escAlphabet.charAt(a), this.m_fromEsc[this.m_escAlphabet.charAt(a)] = a + 1
	},
	toString: function () {
		return escape(this.m_state)
	},
	fromString: function (a) {
		this.m_state = a;
		this.m_curReadPos = 0
	},
	writeNumber: function (a) {
		var b, c, d, a = Math.floor(a);
		if (a > this.m_mask[this.m_mask.length -
			1]) this.m_state = this.m_state.concat(this.m_doubleEsc), this.writeNumber(a / (this.m_mask[this.m_mask.length - 1] + 1)), this.writeNumber(a & this.m_mask[this.m_mask.length - 1]);
		else
			for (b = 0; b < this.m_esc.length; b++)
				if ((a & this.m_mask[b]) == a) {
					0 < b && (this.m_state = this.m_state.concat(this.m_esc[b - 1]));
					for (var e = c = 0; e <= b; e++) d = a >> c & 63, this.m_state = this.m_state.concat(this.m_to64[d]), c += 6;
					break
				}
	},
	readNumber: function () {
		var a = this.m_state.charAt(this.m_curReadPos),
			b = this.m_state.charCodeAt(this.m_curReadPos++),
			c, d = 0,
			e;
		if (a == this.m_doubleEsc) return d = this.readNumber(), a = this.readNumber(), d * (this.m_mask[this.m_mask.length - 1] + 1) + a;
		a = this.m_fromEsc[a];
		if (0 == a || void 0 == a) d = this.m_from64[b];
		else
			for (b = e = 0; b <= a; b++) c = this.m_from64[this.m_state.charCodeAt(this.m_curReadPos++)], d |= c << e, e += 6;
		return d
	},
	writeBoolean: function (a) {
		this.m_state = this.m_state.concat(a ? "1" : "0")
	},
	readBoolean: function () {
		return "1" == this.m_state.charAt(this.m_curReadPos++)
	},
	writeString: function (a) {
		this.writeNumber(a.length);
		this.m_state = this.m_state.concat(a)
	},
	readString: function () {
		var a = this.readNumber(),
			b = this.m_state.substr(this.m_curReadPos, a);
		this.m_curReadPos += a;
		return b
	},
	getReadPos: function () {
		return this.m_curReadPos
	},
	setReadPos: function (a) {
		this.m_curReadPos = a
	},
	getWritePos: function () {
		return this.m_curReadPos
	},
	setWritePos: function (a) {
		this.m_curReadPos = a
	},
	getData: function () {
		return this.toString()
	},
	setData: function (a) {
		this.fromString(a)
	}
};
cp.QuizController = function () {
	this.m_showPlaybar = !0;
	this.quizInProgress = !1;
	this.quizNumFinishes = this.quizNumStarts = 0;
	this.sawAnyScoreSlide = !1;
	this.m_QuizzingData = void 0;
	this.m_questionSlideNames = [];
	this.m_playbackController = void 0;
	this.m_scoreDisplay = {};
	this.m_GoToQuizScopeActionExecuted = !1;
	this.m_RunTimeMsgBox = void 0;
	this.m_ExecutingPretestAction = this.m_PretestQuestionsDisabled = this.m_FirstNonPretestQuestionEncountered = this.m_forceAbsoluteProgressType = this.verbose = this.m_submittedAllQuestions = this.m_HandledSubmitAll = !1;
	cp.vm.createVariable("cpQuizHandledAll", !1, !1, 15, !1)
};
cp.QuizController.prototype = {
	GetIsCurrentSlideLastPrestest: function () {
		if (!this.m_playbackController) return !1;
		var a = this.m_playbackController.GetCurrentSlideIndex();
		if (0 > a || a >= cp.movie.stage.slides.length) return !1;
		a = this.GetQuestionsOnSlide(a);
		return !a || 0 >= a.length ? !1 : (a = a[0]) ? a.getIsLastPretestQuestion() : !1
	},
	GetIsPretestQuestionsDisabled: function () {
		return this.m_PretestQuestionsDisabled
	},
	GetForceAbsoluteProgressType: function () {
		return this.m_forceAbsoluteProgressType
	},
	SetForceAbsoluteProgressType: function (a) {
		this.m_forceAbsoluteProgressType =
			a
	},
	GetFirstNonPretestQuestionEncountered: function () {
		return this.m_FirstNonPretestQuestionEncountered
	},
	SetFirstNonPretestQuestionEncountered: function (a) {
		this.m_FirstNonPretestQuestionEncountered = a
	},
	GetQuestionScoresToSend: function () {
		var a = [],
			b = cp.movie.stage.slides;
		if (!b) return [];
		for (var c = 0; c < b.length; ++c)
			if (cp.D[b[c]].v)
				for (var d = this.GetQuestionsOnSlide(c), e = 0; e < d.length; ++e) {
					var f = d[e];
					f && a.push(f.getQuestionScore())
				}
			return a
	},
	saveState: function (a) {
		a.writeBoolean(this.GetIsInReviewMode());
		a.writeBoolean(!1);
		a.writeBoolean(this.quizInProgress);
		a.writeNumber(this.quizNumStarts);
		a.writeNumber(this.quizNumFinishes);
		a.writeBoolean(this.sawAnyScoreSlide);
		a.writeBoolean(this.m_submittedAllQuestions);
		a.writeBoolean(this.m_PretestQuestionsDisabled);
		a.writeBoolean(cpInQuizScope);
		a.writeString("" + cpQuizScopeSlide);
		var b = this.GetQuestionScoresToSend();
		a.writeNumber(b.length);
		for (whichQuestionScore in b) {
			var c = b[whichQuestionScore];
			c && c.saveState(a)
		}
		this.saveBranchInfo(a)
	},
	saveBranchInfo: function (a) {
		var b = "",
			c = this.GetGraphManager();
		a.writeBoolean(void 0 != c);
		if (c) {
			var d = c.getCompletionBranch();
			a.writeNumber(d.length);
			for (var e = 0; e < d.length; ++e) a.writeNumber(d[e]);
			d = c.getCurrentBranch();
			a.writeNumber(d.length);
			for (e = 0; e < d.length; ++e) a.writeNumber(d[e]);
			if (void 0 != c.m_SlideNumToQuestionNumMap)
				for (var f in c.m_SlideNumToQuestionNumMap) b += f + "_" + c.m_SlideNumToQuestionNumMap[f] + ",";
			a.writeString(b)
		}
	},
	restoreState: function (a) {
		if (a) {
			this.SetIsInReviewMode(a.readBoolean());
			a.readBoolean();
			this.quizInProgress = a.readBoolean();
			this.quizNumStarts =
				a.readNumber();
			this.quizNumFinishes = a.readNumber();
			this.sawAnyScoreSlide = a.readBoolean();
			this.m_submittedAllQuestions = a.readBoolean();
			this.m_PretestQuestionsDisabled = a.readBoolean();
			svvi("cpInQuizScope", a.readBoolean(), ["cpInQuizScope"]);
			this.quizScopeSlideSetter(parseFloat(a.readString()));
			for (var b = a.readNumber(), c = 0; c < b; ++c)(new cp.QuestionScore).restoreState(a);
			this.restoreBranchInfo(a)
		}
	},
	restoreBranchInfo: function (a) {
		if (a) {
			var b = [],
				c = [],
				d = "";
			if (a.readBoolean()) {
				for (var d = a.readNumber(), e = 0; e <
					d; ++e) b.push(a.readNumber());
				d = a.readNumber();
				for (e = 0; e < d; ++e) c.push(a.readNumber());
				d = a.readString()
			}
			if (a = this.GetGraphManager()) a.restoreCompletionBranchState(b), a.restoreCurrentBranchState(c), this.RestoreGraphProgressIndicatorMap(d)
		}
	},
	ResumeState: function (a, b) {
		this.verbose && cp.log("QuizController :: ResumeState()");
		switch (a) {
			case "isInReviewMode":
				this.SetIsInReviewMode("true" == b);
				break;
			case "quizInProgress":
				this.quizInProgress = "true" == b;
				break;
			case "quizNumStarts":
				this.quizNumStarts = parseFloat(b);
				break;
			case "quizNumFinishes":
				this.quizNumFinishes = parseFloat(b);
				break;
			case "sawAnyScoreSlide":
				this.sawAnyScoreSlide = "true" == b;
				break;
			case "submittedAllQuestions":
				this.m_submittedAllQuestions = "true" == b;
				break;
			case "quizScopeSlide":
				this.quizScopeSlideSetter(parseFloat(b));
				break;
			case "completionBranch":
				this.RestoreCompletionBranchState(b);
				break;
			case "currentBranch":
				this.RestoreCurrentBranchState(b);
				break;
			case "qpiMap":
				this.RestoreGraphProgressIndicatorMap(b)
		}
	},
	RestoreGraphProgressIndicatorMap: function (a) {
		if (!(void 0 ==
			a || "" == a)) {
			for (var b = a.split(","), a = {}, c = 0, d = 0; d < b.length; ++d) {
				var e = b[d].split("_");
				if (2 == e.length) {
					var f = parseInt(e[0]),
						e = parseInt(e[1]);
					a[f] = e;
					c < e && (c = e)
				}
			}
			b = this.GetGraphManager();
			void 0 != b && (void 0 != b.m_SlideNumToQuestionNumMap && void 0 != b.m_progressNumber) && (b.m_SlideNumToQuestionNumMap = a, b.m_progressNumber = c)
		}
	},
	RestoreCompletionBranchState: function (a) {
		if (void 0 != a) {
			for (var b = a.split(","), a = [], c = 0; c < b.length; ++c) a.push(parseInt(b[c]));
			b = this.GetGraphManager();
			void 0 != b && b.restoreCompletionBranchState(a)
		}
	},
	RestoreCurrentBranchState: function (a) {
		if (void 0 != a) {
			for (var b = a.split(","), a = [], c = 0; c < b.length; ++c) a.push(parseInt(b[c]));
			b = this.GetGraphManager();
			void 0 != b && b.restoreCurrentBranchState(a)
		}
	},
	SaveQuestionScore: function (a) {
		this.GetIsInReviewMode() || (this.AddQuestionScore(a.GetQuestionScore()), a.SetQuestionScore(void 0))
	},
	AddQuestionScore: function (a) {
		for (var b in this.questionScores)
			if (this.questionScores[b].questionNumInQuiz == a.questionNumInQuiz) {
				this.questionScores[b] = a;
				return
			} - 1 != a.questionNumInQuiz ?
			questionScores[a.questionNumInQuiz] = a : questionScores.push(a)
	},
	HasQuiz: function () {
		return void 0 != this.m_QuizzingData ? !0 : !1
	},
	InitializeQuizController: function () {
		this.verbose && cp.log("QuizController :: InitializeQuizController()");
		this.m_QuizzingData = cp.D.quizzingData
	},
	GetGraphManager: function () {
		var a = void 0;
		this.m_playbackController && (a = this.m_playbackController.GetGraphManager());
		return a
	},
	GetGoToQuizScopeActionExecuted: function () {
		return this.m_GoToQuizScopeActionExecuted
	},
	SetGoToQuizScopeActionExecuted: function (a) {
		this.m_GoToQuizScopeActionExecuted =
			a
	},
	GetIsInReviewMode: function () {
		return !this.m_QuizzingData ? !1 : this.m_QuizzingData.isInReviewMode
	},
	SetIsInReviewMode: function (a) {
		if (this.m_QuizzingData) {
			if (a && !this.m_QuizzingData.isInReviewMode) {
				var b = this.GetGraphManager();
				b && b.SaveCurrentBranch()
			}
			this.m_QuizzingData.isInReviewMode = a
		}
	},
	SetQuizInProgress: function (a) {
		a && !this.quizInProgress ? (this.m_HandledSubmitAll = !1, cp.vm.setVariableValue("cpQuizHandledAll", !1, !1), cp.resetQuizData(), this.m_playbackController && (this.m_playbackController.GetIsTracked() &&
			"EMAIL" != this.m_playbackController.m_lmsType.toUpperCase() && "ACROBAT" != this.m_playbackController.m_lmsType.toUpperCase() && "INTERNALSERVER" != this.m_playbackController.m_lmsType.toUpperCase() ? this.m_playbackController.SendCourseData(!this.m_playbackController.LMSIsAICC() || !this.m_playbackController.IsRunningInConnect()) : this.m_playbackController.SendCourseData(!1)), this.m_submittedAllQuestions = !1, this.IncrementCurrentAttempt(), this.sawAnyScoreSlide = !1) : !a && this.quizInProgress && (this.quizNumFinishes +=
			1);
		this.quizInProgress = a;
		this.quizInScopeSetter(a)
	},
	GetIsAttemptFinished: function () {
		return 0 < this.quizNumStarts && this.quizNumStarts == this.quizNumFinishes || this.sawAnyScoreSlide ? !0 : !1
	},
	GetCurrentSlideType: function () {
		this.m_playbackController.GetCurrentSlide();
		var a = this.m_playbackController.GetCurrentSlideIndex(),
			b = this.GetQuestionsOnSlide(a);
		return b && 0 < b.length ? "Question" : this.GetAnyScoreSlideIndex() == a ? "AnyScoreSlide" : ""
	},
	IsNonPretestQuestionSlide: function (a) {
		if ((a = this.GetQuestionsOnSlide(a)) &&
			0 < a.length) {
			for (var b = !1, c = 0; c < a.length; ++c) {
				var d = a[c];
				if (d && d.getIsPretest()) {
					b = !0;
					break
				}
			}
			return !b
		}
		return !1
	},
	IsNonKnowledgeCheck: function (a) {
		if ((a = this.GetQuestionsOnSlide(a)) && 0 < a.length) {
			for (var b = !1, c = 0; c < a.length; ++c) {
				var d = a[c];
				if (d && d.getIsKnowledgeCheck()) {
					b = !0;
					break
				}
			}
			return !b
		}
		return !1
	},
	getQuizSlideMaxScore: function (a) {
		var b = 0;
		if ((a = this.GetQuestionsOnSlide(a)) && 0 < a.length)
			for (var c = 0; c < a.length; ++c) {
				var d = a[c];
				d && !d.getIsPretest() && (b += d.getWeighting())
			}
		return b
	},
	getQuizSlideMinScore: function (a) {
		var b =
			0;
		if ((a = this.GetQuestionsOnSlide(a)) && 0 < a.length)
			for (var c = 0; c < a.length; ++c) {
				var d = a[c];
				d && !d.getIsPretest() && (b += d.getNegativeWeight())
			}
		return b
	},
	getQuizSlideScore: function (a) {
		var b = 0;
		if ((a = this.GetQuestionsOnSlide(a)) && 0 < a.length)
			for (var c = 0; c < a.length; ++c) {
				var d = a[c];
				d && !d.getIsPretest() && (b += d.getScore())
			}
		return b
	},
	GetSlideType: function (a) {
		if (!cp.movie.stage) return "";
		var b = this.GetQuestionsOnSlide(a);
		return b && 0 < b.length ? "Question" : this.GetAnyScoreSlideIndex() == a ? "AnyScoreSlide" : ""
	},
	GetTotalUnansweredQuestions: function () {
		if (!cp.movie) return 0;
		var a = cp.movie.questionObjs;
		if (!a) return 0;
		for (var b = 0, c = 0; c < a.length; ++c) {
			var d = a[c];
			void 0 == d ? b++ : d.getIsIncomplete() ? b++ : d.getWasJudged() || b++
		}
		return b
	},
	GetTotalQuestionsInProject: function () {
		if (!cp.movie) return 0;
		var a = cp.movie.questionObjs;
		return !a ? 0 : a.length
	},
	GetNumQuestions: function () {
		var a = this.GetGraphManager();
		return void 0 != a ? a.getNumQuestions() : this.GetTotalQuestionsInProject()
	},
	GotoQuizScopeSlide: function (a) {
		if (cp.movie && cp.movie.stage)
			if (0 > a || a >= cpInfoSlideCount) cpCmndResume = !0;
			else if ("Question" ==
			this.GetCurrentSlideType()) cpCmndResume = !0;
		else {
			var b = !1;
			this.GetIsInReviewMode() && (b = !0);
			b ? cpCmndResume = !0 : (this.m_GoToQuizScopeActionExecuted = !0, cpCmndGotoSlideAndResume = a)
		}
	},
	EnterCurrentSlide: function () {
		var a = !1,
			b = this.GetCurrentSlideType(),
			c = this.m_playbackController.GetCurrentSlideIndex(),
			d = this.GetQuizScopeEndSlideIndex();
		if (cpInfoHasPlaybar && this.GetHidePlaybarInQuiz() && !this.GetIsInReviewMode()) {
			var e = !1;
			"Question" == b ? e = !0 : 0 <= c && (c == d && "AnyScoreSlide" != b) && (e = !0);
			e && (this.m_showPlaybar = !1)
		}
		cpCmndShowPlaybar =
			this.m_showPlaybar;
		d = !1;
		if (this.m_playbackController) {
			c = this.m_playbackController.GetCurrentSlideIndex();
			if (0 > c || c >= cp.movie.stage.slides.length) return !1;
			if ((e = this.GetQuestionsOnSlide(c)) && 0 < e.length)(e = e[0]) && e.getIsKnowledgeCheck() && (d = !0)
		}!1 == d && ("Question" == b && !this.quizInProgress && !this.GetIsInReviewMode()) && (this.SetQuizInProgress(!0), cpQuizInfoTotalProjectPoints = this.GetMaxScore(), cpQuizInfoAttempts = this.quizNumStarts, cpQuizInfoTotalQuestionsPerProject = this.GetTotalQuestionsInProject());
		"AnyScoreSlide" ==
			b && ("INTERNALSERVER" == this.m_playbackController.m_lmsType.toUpperCase() && !a && this.m_playbackController.PostQuizResults(), this.quizInScopeSetter(!1), this.sawAnyScoreSlide = a = !0);
		if (b = this.GetQuestionsOnSlide(c))
			for (a = 0; a < b.length; ++a) this.StartQuestion(b[a]);
		else a && (this.m_scoreDisplay = {}, this.m_scoreDisplay.score = this.GetScore(), this.m_scoreDisplay.maxScore = this.GetMaxScore(), this.m_scoreDisplay.numQuestions = this.GetNumQuestions(), this.m_scoreDisplay.numRetries = this.GetTotalRetries(), this.m_scoreDisplay.numQuizAttempts =
			this.quizNumStarts, this.m_scoreDisplay.percentCorrect = this.GetPercentCorrect(), this.m_scoreDisplay.numQuestionsCorrect = this.GetTotalCorrectQuestions(), this.m_scoreDisplay.passed = this.GetIsPassed(), this.m_scoreDisplay.feedback = this.GetIsPassed() ? this.GetPassedScoreFeedback() : this.GetFailedScoreFeedback(), this.m_scoreDisplay.quizController = this);
		this.m_playbackController && (this.m_playbackController.GetIsTracked() && "EMAIL" != this.m_playbackController.m_lmsType.toUpperCase() && "ACROBAT" != this.m_playbackController.m_lmsType.toUpperCase() &&
			this.m_playbackController.m_lmsType.toUpperCase(), this.m_playbackController.SendCourseData(!1));
		cp.IsRunningInACAP && (a = this.GetScore(), b = this.GetMaxScore(), c = this.GetMinScore(), void 0 != b && (void 0 != a && void 0 != c) && cp.em.fireEvent("SCORE", {
			score: a,
			maxScore: b,
			minScore: c,
			quizId: cp.D.quizzingData.quizID
		}))
	},
	LeaveSlide: function (a, b) {
		var c = !1;
		if (!this.m_QuizzingData) return c;
		var d = this.m_QuizzingData.quizScopeEndSlide;
		if (void 0 == d) return c;
		this.verbose && cp.log("Inside Leave Slide");
		0 <= b ? c = 0 <= a && b > a && a == d :
			0 <= a && a == d && (c = !0);
		0 <= a && (a == this.GetAnyScoreSlideIndex() && !this.GetIsInReviewMode()) && (c = !0);
		var e = this.GetSlideType(a);
		if ("Question" == e) {
			var f = this.GetQuestionsOnSlide(a);
			if (f)
				for (var g = 0; g < f.length; ++g) {
					var i = f[g];
					i && (i.endQuestion(!1), this.GetIsSubmitAll() || i.clearAnswers())
				}
		}
		if (!this.m_playbackController || !this.m_playbackController.HasQuiz()) c = !1;
		f = this.quizInProgress;
		c && this.SetQuizInProgress(!1);
		c && (!this.GetIsInReviewMode() && (this.quizNumStarts >= this.GetNumberOfQuizAttempts() && this.GetIsAllowReviewMode()) &&
			this.SetIsInReviewMode(!0), this.SetQuizInProgress(!1), void 0 == b && f && (f = this.GetDefaultActionType(), f = this.GetIsPassed() ? this.GetPassingGradeAction() : this.GetFailingGradeAction(), cp.movie.frameBasedExecuteAction(f)));
		cpInfoHasPlaybar && this.GetHidePlaybarInQuiz() && (f = !1, "Question" == e ? f = !0 : 0 <= a && (a == d && "AnyScoreSlide" != e) && (f = !0), f && (this.m_showPlaybar = !0));
		return c
	},
	ExecutePretestAction: function (a) {
		if (this.m_ExecutingPretestAction || void 0 == a || 0 > a || a >= cp.movie.stage.slides.length) return !1;
		var b = this.GetQuestionsOnSlide(a);
		if (void 0 == b || 0 >= b.length || void 0 == b[0]) return !1;
		var c = b[0],
			b = a + 1;
		b >= cp.movie.stage.slides.length && (b = -1);
		var d = void 0; - 1 != b && (d = this.GetQuestionsOnSlide(b));
		var e = !1;
		void 0 != d && (0 < d.length && void 0 != d[0]) && (e = d[0].getIsPretest());
		c = c.getIsPretest();
		if (!c || -1 != b && e) return !1;
		for (; void 0 != a && 0 <= a;) {
			b = this.GetQuestionsOnSlide(a);
			if (void 0 == b || 0 >= b.length || void 0 == b[0] || !b[0].getIsPretest()) break;
			a -= 1
		}
		this.m_PretestQuestionsDisabled = !0;
		a = this.GetPretestAction();
		void 0 != a && (this.m_ExecutingPretestAction = !0, cp.movie.executeAction(a), this.m_ExecutingPretestAction = !1);
		return !0
	},
	GetProgressType: function () {
		return !this.m_QuizzingData ? 0 : this.m_QuizzingData.progressIndicatorType
	},
	GetProgressTemplateString: function () {
		return !this.m_QuizzingData ? "" : this.m_QuizzingData.progressIndicatorString
	},
	GetIsReportingEnabled: function () {
		return !this.m_QuizzingData ? !1 : this.m_QuizzingData.reportingEnabled
	},
	GetParameterValueByName: function (a) {
		if (!this.m_QuizzingData || !this.m_playbackController || !this.m_playbackController.HasQuiz()) return "";
		var b = "";
		switch (a) {
			case "quizInfoPointsScored":
				b = this.GetScore();
				break;
			case "quizInfoTotalQuizPoints":
				b = this.GetMaxScore();
				break;
			case "quizInfoTotalCorrectAnswers":
				b = this.GetTotalCorrectQuestions();
				break;
			case "numQuestionsInQuiz":
				b = this.GetNumQuestions();
				if (void 0 == this.GetGraphManager()) {
					var a = 0,
						c = cp.movie.questionObjs,
						d = 0;
					c && (d = c.length);
					for (var e = 0; e < d; ++e) c[e] && c[e].getIsKnowledgeCheck() && a++;
					b -= a
				}
				break;
			case "quizInfoPercentScored":
				b = this.GetPercentCorrect();
				break;
			case "quizInfoCurrentAttempt":
				b =
					this.quizNumStarts;
				break;
			default:
				b = this.m_scoreDisplay.feedback
		}
		return b
	},
	GetPassedScoreFeedback: function () {
		return !this.m_QuizzingData ? "" : this.m_QuizzingData.passedScoreFeedback
	},
	GetFailedScoreFeedback: function () {
		return !this.m_QuizzingData ? "" : this.m_QuizzingData.failedScoreFeedback
	},
	GetIsAllowReviewMode: function () {
		return !this.m_QuizzingData ? !1 : this.m_QuizzingData.allowReviewMode
	},
	GetIsQuizCompleted: function () {
		return !this.m_QuizzingData ? !1 : this.m_QuizzingData.quizCompleted
	},
	SetIsQuizCompleted: function (a) {
		this.m_QuizzingData &&
			(this.m_QuizzingData.quizCompleted = a)
	},
	GetAnyScoreSlideIndex: function () {
		if (!this.m_QuizzingData) return -1;
		var a = this.m_QuizzingData.anyScoreSlide;
		return void 0 != a ? a : -1
	},
	GetPretestAction: function () {
		var a = void 0;
		this.m_QuizzingData && (a = this.m_QuizzingData.pretestAction);
		return a
	},
	GetQuizScopeEndSlideIndex: function () {
		if (!this.m_QuizzingData) return -1;
		var a = this.m_QuizzingData.quizScopeEndSlide;
		return void 0 != a ? a : -1
	},
	GetFirstSlideInQuizIndex: function () {
		var a = this.GetGraphManager();
		if (void 0 != a) {
			a = a.getReviewFirstQuestionSlideIndex();
			if (void 0 == a || 0 > a || "NaN" == a) a = -1;
			return a
		}
		if (!this.m_QuizzingData) return -1;
		a = this.m_QuizzingData.firstSlideInQuiz;
		return void 0 != a ? a : -1
	},
	GetLastSlideInQuizIndex: function () {
		var a = this.GetGraphManager();
		if (void 0 != a) {
			a = a.getLastQuestionSlideIndex();
			if (void 0 == a || 0 > a || "NaN" == a) a = -1;
			return a
		}
		if (!this.m_QuizzingData) return -1;
		a = this.m_QuizzingData.lastSlideInQuiz;
		return void 0 != a ? a : -1
	},
	GetLastQuestionSlideInQuiz: function () {
		if (!cp.movie || !cp.movie.stage) return -1;
		var a = -1,
			b = cp.movie.playbackController.GetSlideNames(),
			c = this.GetFirstSlideInQuizIndex(),
			d = this.GetLastSlideInQuizIndex();
		if (-1 == c || -1 == d) return -1;
		for (var e = 0; e < b.length; ++e)
			if ("Question" == this.GetSlideType(e) && (e >= c && e <= d) && (-1 != a || e > a)) a = e;
		return a
	},
	GetNumberOfQuizAttempts: function () {
		return !this.m_QuizzingData ? 0 : this.m_QuizzingData.numQuizAttemptsAllowed
	},
	GetIsPassed: function () {
		if (!this.m_QuizzingData) return !1;
		var a = parseFloat(this.GetScore()),
			b = parseFloat(this.GetPassingScore());
		return a >= b
	},
	GetScore: function () {
		if (!this.m_QuizzingData) return 0;
		var a =
			this.GetGraphManager(),
			b = cp.movie.questionObjs,
			c = 0;
		if (!b) return 0;
		for (var d = 0; d < b.length; ++d) b[d] && (b[d].getIsPretest() || (void 0 != a ? a.isSlidePartOfCurrentBranch(b[d].getSlideIndex()) && (c += b[d].getScore()) : c += b[d].getScore()));
		this.m_QuizzingData.quizInfoPointsScored = c;
		this.m_QuizzingData.quizInfoPercentScored = (100 * this.m_QuizzingData.quizInfoPointsScored / this.m_QuizzingData.quizInfoTotalQuizPoints).toFixed(2) + "%";
		return this.m_QuizzingData.quizInfoPointsScored
	},
	GetMaxScore: function () {
		if (!this.m_QuizzingData) return 0;
		var a = this.GetGraphManager();
		return void 0 != a ? a.getMaxQuizScore() : this.m_QuizzingData.maxScore
	},
	GetMinScore: function () {
		if (!this.m_QuizzingData) return 0;
		var a = this.GetGraphManager();
		return void 0 != a ? a.getMinQuizScore() : this.m_QuizzingData.minScore
	},
	GetMaxPretestScore: function () {
		return !this.m_QuizzingData ? 0 : this.m_QuizzingData.maxPretestScore
	},
	GetPretestScore: function () {
		if (!this.m_QuizzingData) return 0;
		var a = cp.movie.questionObjs,
			b = 0;
		if (!a) return 0;
		for (var c = 0; c < a.length; ++c) a[c] && a[c].getIsPretest() &&
			(b += a[c].getScore());
		return b
	},
	GetCurrentAttempt: function () {
		return this.quizNumStarts
	},
	GetIsSubmitAll: function () {
		return !this.m_QuizzingData ? !1 : this.m_QuizzingData.submitAll
	},
	GetHidePlaybarInQuiz: function () {
		return !this.m_QuizzingData ? !1 : this.m_QuizzingData.hidePlaybarInQuiz
	},
	GetQuizBranchAware: function () {
		return !this.m_QuizzingData ? !1 : this.m_QuizzingData.quizBranchAware
	},
	GetPassFailPassingScoreTypeInPrecent: function () {
		return !this.m_QuizzingData ? !1 : this.m_QuizzingData.passFailPassingScoreTypeInPrecent
	},
	GetPassFailPassingScoreValue: function () {
		return !this.m_QuizzingData ? 0 : this.m_QuizzingData.passFailPassingScoreValue
	},
	IncrementCurrentAttempt: function () {
		this.m_QuizzingData && (this.quizNumStarts += 1, this.m_QuizzingData.quizInfoCurrentAttempt += 1)
	},
	CanShowRetakeButton: function () {
		return this.GetCurrentAttempt() >= this.GetNumberOfQuizAttempts() || this.GetIsPassed() || this.GetIsInReviewMode() ? !1 : !0
	},
	GetQuizAdvanceType: function () {
		return !this.m_QuizzingData ? "optional" : this.m_QuizzingData.quizAdvance
	},
	GetQuestionAdvanceType: function () {
		return !this.m_QuizzingData ?
			"optional" : this.m_QuizzingData.questionAdvance
	},
	GetDefaultActionType: function () {
		return !this.m_QuizzingData ? "" : this.m_QuizzingData.defaultActionType
	},
	GetDefaultActionArgument: function () {
		return !this.m_QuizzingData ? "" : this.m_QuizzingData.defaultActionArg1
	},
	GetPassingGradeAction: function () {
		return !this.m_QuizzingData ? "" : this.m_QuizzingData.passingGradeAction
	},
	GetFailingGradeAction: function () {
		return !this.m_QuizzingData ? "" : this.m_QuizzingData.failingGradeAction
	},
	GetTotalCorrectAnswers: function () {
		return !this.m_QuizzingData ?
			0 : this.m_QuizzingData.quizInfoTotalCorrectAnswers
	},
	GetNumberOfQuestionsInQuiz: function () {
		return !this.m_QuizzingData ? 0 : this.m_QuizzingData.numQuestionsInQuiz
	},
	GetAllowSkipAnyScoreSlide: function () {
		return !this.m_QuizzingData ? !0 : this.m_QuizzingData.allowSkipAnyScoreSlide
	},
	GetPassingScore: function () {
		if (!this.m_QuizzingData) return 0;
		if (this.GetPassFailPassingScoreTypeInPrecent()) {
			var a = this.GetGraphManager();
			if (void 0 != a) return a = a.getMaxQuizScore(), "NaN" == a ? "NaN" : 0 >= a ? 0 : this.GetPassFailPassingScoreValue() /
				100 * a
		}
		return this.m_QuizzingData.passingScore
	},
	GetAllowBackwardMovementInQuiz: function () {
		return !this.m_QuizzingData ? !1 : this.m_QuizzingData.allowBackwardMovement
	},
	GetIsSlideJudged: function (a) {
		a = this.GetQuestionsOnSlide(a);
		if (!a || 0 >= a.length) return !1;
		for (var b = !0, c = 0; c < a.length; ++c) {
			var d = a[c],
				b = b && d.getWasJudged();
			if (!b) return !1
		}
		return b
	},
	GetQuestionsOnSlide: function (a) {
		var b = [];
		if (!cp.movie.stage) return "";
		a = this.m_playbackController.GetSlideNameAtIndex(a);
		if (void 0 == a) return "";
		a = cp.D[a].qs;
		if (0 >=
			a.length || "" == a) return "";
		if ((lQuestionsOnSlide = a.split(",")) && "" != lQuestionsOnSlide && 0 < lQuestionsOnSlide.length)
			for (a = 0; a < lQuestionsOnSlide.length; ++a) {
				var c = cp.getQuestionObject(lQuestionsOnSlide[a]);
				c && b.push(c)
			}
		return b
	},
	GetTotalRetries: function () {
		var a = 0,
			b = cp.movie.questionObjs;
		if (!b) return 0;
		var c = b.length;
		if (0 >= c) return 0;
		for (var d = 0; d < c; ++d) b[d] && (a += b[d].currentAttempt);
		return a
	},
	CanDoSubmitAll: function () {
		if ("mustTake" == this.GetQuizAdvanceType() && 1 >= this.GetCurrentAttempt()) {
			var a = !1,
				a = this.GetQuizBranchAware() ?
					this.GetAnyQuestionInBranchAnswered() : this.GetAnyQuestionsAnswered();
			if (!a) return "QUIZ_ERROR_MUST_TAKE_QUIZ"
		}
		return ""
	},
	GetAnyQuestionInBranchAnswered: function () {
		var a = this.GetGraphManager();
		if (!a) return !1;
		a = a.getCompletionBranch();
		if (void 0 == a || 0 >= a.length) return !1;
		for (var b = 0; b < a.length; ++b) {
			var c = this.GetQuestionsOnSlide(a[b]);
			if (c && 0 < c.length)
				for (var d = 0; d < c.length; ++d) {
					var e = c[d];
					if (!e.getIsPretest() && e.getWasJudged() && !e.getIsIncomplete()) return !0
				}
		}
		return !1
	},
	GetAnyQuestionsAnswered: function () {
		var a =
			cp.movie.questionObjs;
		if (!a) return !1;
		var b = a.length;
		if (0 >= b) return !1;
		for (var c = 0; c < b; ++c)
			if (a[c] && a[c].getWasJudged() && !a[c].getIsIncomplete()) return !0;
		return !1
	},
	GetAnyNonPreTestQuestionAnswered: function () {
		var a = cp.movie.questionObjs;
		if (!a) return !1;
		var b = a.length;
		if (0 >= b) return !1;
		for (var c = 0; c < b; ++c)
			if (a[c] && !a[c].getIsPretest() && a[c].getWasJudged() && !a[c].getIsIncomplete()) return !0;
		return !1
	},
	CanEnterSlide: function (a) {
		if (!this.m_playbackController || !this.m_playbackController.HasQuiz(!0)) return "";
		var b = 0,
			c = cp.movie.questionObjs,
			d = 0;
		c && (d = c.length);
		if (0 < d) {
			for (var e = 0; e < d; ++e) c[e] && c[e].getIsKnowledgeCheck() && b++;
			if (b == d) return ""
		}
		a = this.GetSlideType(a);
		b = !1;
		if (cpInfoCurrentSlideIndex == this.GetAnyScoreSlideIndex() && "Question" == a && !this.GetIsInReviewMode() && this.GetCurrentAttempt() >= this.GetNumberOfQuizAttempts()) return this.GetIsAllowReviewMode() ? "" : "QUIZ_ERROR_TOO_MANY_QUIZ_ATTEMPTS";
		if (!this.quizInProgress || "optional" == this.GetQuestionAdvanceType() && 0 < this.GetTotalRetries()) {
			switch (a) {
				case "Question":
					if (!this.GetIsInReviewMode() && !this.quizInProgress && this.GetCurrentAttempt() >= this.GetNumberOfQuizAttempts()) return this.GetIsAllowReviewMode() ? "" : "QUIZ_ERROR_TOO_MANY_QUIZ_ATTEMPTS";
					break;
				case "AnyScoreSlide":
					b = !0
			}
			if (b && !this.quizInProgress && !this.GetIsInReviewMode()) return "QUIZ_ERROR_MUST_START_QUIZ_TO_SEE_SCORE_SLIDE"
		}
		return ""
	},
	CanLeavePretestQuestionSlide: function () {
		return ""
	},
	CanLeaveQuestionSlide: function (a, b) {
		var c = this.GetQuestionsOnSlide(a);
		if (c)
			for (var d = 0; d < c.length; d++) {
				var e = c[d];
				if (e && e.getIsPretest()) return this.CanLeavePretestQuestionSlide(b,
					e)
			}
		c = this.GetIsSubmitAll();
		d = this.GetQuizBranchAware();
		if ("mustAnswer" == this.GetQuestionAdvanceType() && !this.GetIsInReviewMode() && !c && !d) {
			c = this.GetQuestionsOnSlide(a);
			if (!c) return "";
			for (d = 0; d < c.length; d++) {
				if ((e = c[d]) && e.getIsKnowledgeCheck()) return "";
				if (!b && e && 0 == e.currentAttempt) return "QUIZ_ERROR_MUST_ANSWER_QUESTION"
			}
		}
		if (!b && a == this.GetLastQuestionSlideInQuiz()) {
			if ("mustTake" == this.GetQuizAdvanceType() && !this.GetAnyQuestionsAnswered() && 1 >= this.GetCurrentAttempt()) return "QUIZ_ERROR_MUST_TAKE_QUIZ"
		} else if (b && !this.GetIsInReviewMode() && !this.GetAllowBackwardMovementInQuiz() && cpInfoCurrentSlideIndex == a) return "QUIZ_ERROR_CANNOT_MOVE_BACKWARD_IN_QUIZ";
		return ""
	},
	CanLeaveSlide: function (a, b) {
		if (!this.m_playbackController || !this.m_playbackController.HasQuiz()) return "";
		var c = "",
			d = this.GetSlideType(a),
			e = this.GetQuizScopeEndSlideIndex();
		if ("Question" == d && (c = this.CanLeaveQuestionSlide(a, b), "" != c)) return c;
		if (0 <= a && a == e) {
			if ("AnyScoreSlide" == d && !this.GetAllowSkipAnyScoreSlide() && !this.sawAnyScoreSlide && this.quizInProgress) return "QUIZ_ERROR_MUST_SEE_SCORE_SLIDE";
			d = this.GetPassingScore();
			if (!b && "mustPass" == this.GetQuizAdvanceType() && "NaN" != d && this.GetScore() < d) return "QUIZ_ERROR_MUST_PASS_QUIZ";
			if (this.GetIsSubmitAll() && "mustAnswer" == this.GetQuestionAdvanceType() && !b && !this.m_submittedAllQuestions) return "QUIZ_ERROR_MUST_ANSWER_QUESTION"
		}
		return c
	},
	GetPreviousQuestionSlideNumber: function () {
		var a = -1;
		if (!cp.movie || !cp.movie.stage) return -1;
		var b = cpInfoCurrentSlideIndex,
			c = this.GetGraphManager();
		if (void 0 != c) {
			for (var c = c.getCompletionBranch(), d = 0; d < c.length; ++d) {
				var e =
					c[d],
					f = "",
					g = this.GetQuestionsOnSlide(e);
				if (g && 0 < g.length) {
					var i = !1;
					(g = g[0]) && g.getIsKnowledgeCheck() && (i = !0);
					i || (f = "Question")
				} else this.GetAnyScoreSlideIndex() == e && (f = "AnyScoreSlide"); if (("AnyScoreSlide" == f || "Question" == f) && e < b)
					if (-1 == a || e > a) a = e
			} - 1 == a && (b = c.indexOf(b), 0 < b && (a = c[b - 1]))
		} else {
			b = cpInfoCurrentSlideIndex;
			if ((g = this.GetQuestionsOnSlide(b)) && 0 < g.length)
				if ((g = g[0]) && g.getIsKnowledgeCheck()) return 1 < b ? b - 1 : b;
			c = this.m_playbackController.GetSlideNames();
			for (e = 0; e < c.length; ++e)
				if (f = "", (g = this.GetQuestionsOnSlide(e)) &&
					0 < g.length ? (i = !1, (g = g[0]) && g.getIsKnowledgeCheck() && (i = !0), i || (f = "Question")) : this.GetAnyScoreSlideIndex() == e && (f = "AnyScoreSlide"), ("AnyScoreSlide" == f || "Question" == f) && e < b)
					if (-1 == a || e > a) a = e
		}
		return a
	},
	GetNextQuestionSlideNumber: function () {
		var a = -1;
		if (!cp.movie || !cp.movie.stage) return -1;
		var b = cpInfoCurrentSlideIndex,
			c = this.GetGraphManager();
		if (void 0 != c)
			for (var d = c.getCurrentBranch(), e = 0; e < d.length; ++e) {
				var c = d[e],
					f = "",
					g = this.GetQuestionsOnSlide(c);
				if (g && 0 < g.length) {
					var i = !1;
					(g = g[0]) && g.getIsKnowledgeCheck() &&
						(i = !0);
					i || (f = "Question")
				} else this.GetAnyScoreSlideIndex() == c && (f = "AnyScoreSlide"); if (("AnyScoreSlide" == f || "Question" == f) && c > b)
					if (-1 == a || c < a || a == b) a = c
			} else {
				d = this.m_playbackController.GetSlideNames();
				for (c = 0; c < d.length; ++c)
					if (f = "", (g = this.GetQuestionsOnSlide(c)) && 0 < g.length ? (i = !1, (g = g[0]) && g.getIsKnowledgeCheck() && (i = !0), i || (f = "Question")) : this.GetAnyScoreSlideIndex() == c && (f = "AnyScoreSlide"), ("AnyScoreSlide" == f || "Question" == f) && c > b)
						if (-1 == a || c < a) a = c
			}
		return a
	},
	GetPercentCorrect: function () {
		var a = this.GetMaxScore();
		return 0 == a || !a ? " " : Math.round(100 * (100 * this.GetScore() / a)) / 100 + "%"
	},
	GetTotalPretestCorrectQuestions: function () {
		if (!this.m_QuizzingData) return 0;
		var a = cp.movie.questionObjs;
		if (!a) return 0;
		for (var b = 0, c = 0; c < a.length; ++c) a[c] && a[c].getWasJudged() && (a[c].getAnsweredCorrectly() && a[c].getIsPretest()) && (b += 1);
		return b
	},
	GetTotalCorrectQuestions: function () {
		if (!this.m_QuizzingData) return 0;
		var a = this.GetGraphManager(),
			b = cp.movie.questionObjs;
		if (!b) return 0;
		for (var c = 0, d = 0; d < b.length; ++d) b[d] && (b[d].getIsPretest() ||
			b[d].getIsKnowledgeCheck() || (void 0 != a ? a.isSlidePartOfCurrentBranch(b[d].getSlideIndex()) && (b[d].getWasJudged() && b[d].getAnsweredCorrectly()) && (c += 1) : b[d].getWasJudged() && b[d].getAnsweredCorrectly() && (c += 1)));
		return c
	},
	StartQuestion: function (a) {
		void 0 != a && (a.slide = this.m_playbackController.GetCurrentSlide(), a.startQuestion())
	},
	GetFailingGradeActionString: function () {
		return !this.m_QuizzingData ? !1 : this.m_QuizzingData.failingGradeActionString
	},
	GetFailingGradeActionParam: function () {
		return !this.m_QuizzingData ? !1 : this.m_QuizzingData.failingGradeActionParam
	},
	GetIsTracked: function () {
		return !this.m_QuizzingData ? !1 : this.m_QuizzingData.it
	},
	GetQuestionSlidesNames: function () {
		return this.m_questionSlideNames
	},
	AddQuestionSlideNames: function (a) {
		this.m_questionSlideNames || (this.m_questionSlideNames = []);
		this.m_questionSlideNames.push(a)
	},
	GetAllQuestionsInBranchAnswered: function () {
		var a = this.GetGraphManager();
		if (!a) return !1;
		a = a.getCompletionBranch();
		if (void 0 == a || 0 >= a.length) return !1;
		for (var b = 0; b < a.length; ++b) {
			var c =
				this.GetQuestionsOnSlide(a[b]);
			if (c && 0 < c.length)
				for (var d = 0; d < c.length; ++d) {
					var e = c[d];
					if ((!e.getIsPretest() || !this.m_PretestQuestionsDisabled) && !e.getIsKnowledgeCheck()) {
						var f = this.GetIsSubmitAll() && !e.getIsPretest();
						if (0 <= e.getWeighting() && (!e.getWasJudged() && !f || e.getIsIncomplete() || 0 == e.getCurrentAttempt())) return !1
					}
				}
		}
		return !0
	},
	GetAllQuestionsAnswered: function () {
		if (!0 == this.GetQuizBranchAware() && this.GetAllQuestionsInBranchAnswered()) return !0;
		var a = this.GetQuestionScoresToSend(),
			b = [];
		for (whichQuestionScore in a) {
			var c =
				a[whichQuestionScore];
			c && (b[c.getslideNum()] = !0)
		}
		var d = this.m_QuizzingData.firstSlideInQuiz,
			c = this.m_QuizzingData.lastSlideInQuiz;
		if (void 0 == d || -1 == d || void 0 == c || -1 == c) return !0;
		for (; d <= c; d++)
			if (!b[d]) {
				var e = this.GetQuestionsOnSlide(d);
				if (e && 0 < e.length && (e = e[0].questionData, !e || !(e.ikc && !0 == e.ikc))) return !1
			}
		for (whichQuestionScore in a)
			if ((c = a[whichQuestionScore]) && !c.getIsKnowledgeCheck() && (!c.getIsPretest() || !this.m_PretestQuestionsDisabled))
				if (b = this.GetIsSubmitAll() && !c.getIsPretest(), 0 <= c.getweighting() &&
					(!c.getwasJudged() && !b || c.getAnswersIncomplete() || 0 == c.getNumTries())) return !1;
		return !0
	},
	SendInteractionData: function (a, b) {
		if (!this.m_QuizzingData) return !1;
		this.verbose && cp.log("QuizController::SendInteraction()");
		this.GetIsTracked() && this.m_playbackController.SendInteractionData(a, b)
	},
	SendQuestionEventDataForSubmitAll: function () {
		var a = this.GetQuestionScoresToSend();
		for (whichQuestionScore in a) {
			var b = a[whichQuestionScore];
			b && (b.getisPretestQuestion() || this.m_playbackController.SendQuestionEventData(b))
		}
	},
	SendInteractionsForSubmitAll: function () {
		var a = this.GetQuestionScoresToSend();
		for (whichQuestionScore in a) {
			var b = a[whichQuestionScore];
			if (b) {
				var c = b.getdescriptionText(),
					d = cp.movie.questionObjs[b.m_questionNumInQuiz];
				d && d.shouldReportAnswers && (b.getisPretestQuestion() || b.getanswersIncomplete() || (d.sendInteractionDataForEachAnswer ? d.sendInteractionDataForEachAnswer(c) : this.SendInteractionData(b, c)))
			}
		}
	},
	DoSubmitAll: function (a) {
		if (void 0 == a || 0 > a) return !1;
		var b = this.GetQuizScopeEndSlideIndex();
		if (void 0 ==
			b || 0 > b || a != b || void 0 != this.m_RunTimeMsgBox || this.m_HandledSubmitAll || !0 == cp.vm.getVariableValue("cpQuizHandledAll") || !1 == this.GetIsSubmitAll()) return !1;
		this.SubmitAllQuestions(!0, !1);
		return !0
	},
	SubmitAllDialogShown: function (a, b) {
		if (void 0 == a || 0 > a || void 0 == b || 0 > b) return !1;
		if (void 0 != this.m_RunTimeMsgBox) return !0;
		if (a >= b || this.m_HandledSubmitAll || !0 == cp.vm.getVariableValue("cpQuizHandledAll") || this.GetIsInReviewMode() || !1 == this.GetIsSubmitAll()) return !1;
		var c = this.GetAnyScoreSlideIndex(),
			d = this.GetQuizScopeEndSlideIndex();
		if (0 <= c) {
			if (b == c) return this.SubmitAllQuestions(!0, !1), !0
		} else if (0 <= d && a == d) return this.SubmitAllQuestions(!0, !1), !0;
		return !1
	},
	ReturnToQuiz: function () {
		if (void 0 != this.m_RunTimeMsgBox) {
			this.m_RunTimeMsgBox.hide();
			this.m_RunTimeMsgBox = void 0;
			var a = this.m_playbackController.GetCurrentSlideIndex();
			if (a = this.GetQuestionsOnSlide(a))
				for (var b = 0; b < a.length; ++b) {
					var c = a[b];
					c.state = c.StateEnum.PAUSED
				}
		}
		a = this.GetFirstSlideInQuizIndex();
		0 <= a && (cpCmndGotoSlideAndResume = a, this.m_HandledSubmitAll = !1, cp.vm.setVariableValue("cpQuizHandledAll", !1, !1))
	},
	ForceSubmitAll: function () {
		if (this.m_playbackController) {
			if (void 0 != this.m_RunTimeMsgBox) {
				this.m_RunTimeMsgBox.hide();
				this.m_RunTimeMsgBox = void 0;
				var a = this.m_playbackController.GetCurrentSlideIndex();
				if (a = this.GetQuestionsOnSlide(a))
					for (var b = 0; b < a.length; ++b) {
						var c = a[b];
						c.state = c.StateEnum.PAUSED
					}
			}
			a = this.GetAnyScoreSlideIndex();
			b = this.GetQuizScopeEndSlideIndex();
			if (0 <= a) cpCmndGotoSlideAndResume = a;
			else if (0 <= b) {
				var a = -1,
					c = this.m_playbackController.GetSlideNames(),
					d = c.length;
				if (0 < d && b < d &&
					(b = c[b]))
					if (b = cp.D[b]) a = b.to;
				cpCmndGotoFrameAndResume = a - 1;
				!this.GetIsInReviewMode() && (this.GetCurrentAttempt() >= this.GetNumberOfQuizAttempts() && this.GetIsAllowReviewMode()) && this.SetIsInReviewMode(!0)
			}
			this.m_submittedAllQuestions = !0;
			this.m_playbackController && this.m_playbackController.GetSendCourseDataWithInteractionData() && (this.SendInteractionsForSubmitAll(), this.SendQuestionEventDataForSubmitAll(), a = this.m_playbackController.GetLMSType().toUpperCase(), this.m_playbackController.GetIsTracked() &&
				"EMAIL" != a && "ACROBAT" != a && "INTERNALSERVER" != a ? this.m_playbackController.SendCourseData(!0) : "INTERNALSERVER" == a ? this.m_playbackController.PostQuizResults() : this.m_playbackController.SendCourseData(!1));
			a = this.GetPassingScore();
			b = this.GetMaxScore();
			isNaN(a) || (cpQuizInfoQuizPassPoints = a);
			0 != b && (!isNaN(b) && !isNaN(a)) && (cpQuizInfoQuizPassPercent = 100 * a / b);
			cpQuizInfoTotalProjectPoints = b
		}
	},
	DefaultHandlerForRuntimeMessageBox: function () {
		if (this.m_playbackController && void 0 != this.m_RunTimeMsgBox) {
			this.m_RunTimeMsgBox.hide();
			this.m_RunTimeMsgBox = void 0;
			var a = this.m_playbackController.GetCurrentSlideIndex(),
				b = this.GetQuestionsOnSlide(a);
			if (b)
				for (var c = 0; c < b.length; ++c) {
					var d = b[c];
					d.state = d.StateEnum.PAUSED
				}
			this.m_HandledSubmitAll = !1;
			cp.vm.setVariableValue("cpQuizHandledAll", !1, !1);
			b = this.GetQuizScopeEndSlideIndex();
			0 <= a && (0 <= b && a == b) && (b = this.m_playbackController.GetCurrentSlide(), (b = cp.D[b]) && cpInfoCurrentFrame >= b.to && (cpCmndGotoSlideAndResume = a))
		}
	},
	SubmitAllQuestions: function (a, b) {
		this.m_HandledSubmitAll = !0;
		cp.vm.setVariableValue("cpQuizHandledAll", !0, !1);
		if (!1 == a) return ForceSubmitAll();
		void 0 != this.m_RunTimeMsgBox && (this.m_RunTimeMsgBox.hide(), this.m_RunTimeMsgBox = void 0);
		var c = "mustAnswer" == this.GetQuestionAdvanceType(),
			d = this.m_playbackController.GetCurrentSlideIndex();
		if (d = this.GetQuestionsOnSlide(d))
			for (var e = 0; e < d.length; ++e) {
				var f = d[e];
				f && f.endQuestion(!1)
			}
		var g = cp.D.rtDialog,
			d = g.rtbgfc,
			e = g.rtbgsc,
			f = g.rtbtnfc,
			i = g.rtbtnsc,
			k = g.rtsc,
			h = g.rttc,
			l = g.rttsc,
			m = g.rtfn,
			j = g.rtt,
			n = g.rtsam,
			o = g.rtiqm,
			p = g.rtsiqm,
			q = g.rtsanym,
			r = g.rtokb,
			u = g.rtyb,
			v = g.rtnb,
			w = g.rtsab,
			x = g.rtsanyb,
			s = g.rtrtqb,
			g = g.rtmtqm,
			t = this.GetAllQuestionsAnswered();
		"QUIZ_ERROR_MUST_TAKE_QUIZ" == this.CanDoSubmitAll() ? (this.m_RunTimeMsgBox = new cp.RuntimeMessageBox(document.getElementById("cpDocument"), 1, d, e, f, i, k, h, l, m), this.m_RunTimeMsgBox.setTitleText(j), this.m_RunTimeMsgBox.setMessageText(g), this.m_RunTimeMsgBox.setFirstButtonText(r), this.m_RunTimeMsgBox.registerFirstButtonHandler(cp.defaultHandlerForRuntimeMessageBox)) : c && !t ? (this.m_RunTimeMsgBox = new cp.RuntimeMessageBox(document.getElementById("cpDocument"),
			1, d, e, f, i, k, h, l, m), this.m_RunTimeMsgBox.setTitleText(j), this.m_RunTimeMsgBox.setMessageText(o), this.m_RunTimeMsgBox.setFirstButtonText(r), this.m_RunTimeMsgBox.registerFirstButtonHandler(cp.defaultHandlerForRuntimeMessageBox)) : t ? (this.m_RunTimeMsgBox = new cp.RuntimeMessageBox(document.getElementById("cpDocument"), 2, d, e, f, i, k, h, l, m), this.m_RunTimeMsgBox.setTitleText(j), this.m_RunTimeMsgBox.setMessageText(n), this.m_RunTimeMsgBox.setFirstButtonText(w), this.m_RunTimeMsgBox.registerFirstButtonHandler(cp.forceSubmitAll),
			this.m_RunTimeMsgBox.setSecondButtonText(s), this.m_RunTimeMsgBox.registerSecondButtonHandler(cp.returnToQuiz)) : (this.m_RunTimeMsgBox = new cp.RuntimeMessageBox(document.getElementById("cpDocument"), 2, d, e, f, i, k, h, l, m), this.m_RunTimeMsgBox.setTitleText(j), b ? (this.m_RunTimeMsgBox.setMessageText(q), this.m_RunTimeMsgBox.setFirstButtonText(x), this.m_RunTimeMsgBox.setSecondButtonText(s), this.m_RunTimeMsgBox.registerSecondButtonHandler(cp.returnToQuiz)) : (this.m_RunTimeMsgBox.setMessageText(p), this.m_RunTimeMsgBox.setFirstButtonText(u),
			this.m_RunTimeMsgBox.setSecondButtonText(v), this.m_RunTimeMsgBox.registerSecondButtonHandler(cp.defaultHandlerForRuntimeMessageBox)), this.m_RunTimeMsgBox.registerFirstButtonHandler(cp.forceSubmitAll));
		this.m_RunTimeMsgBox.show()
	},
	GetPlaybackController: function () {
		return this.m_playbackController
	},
	SetPlaybackController: function (a) {
		this.m_playbackController = a
	}
};
cp.ACAPQuizController = function () {
	cp.ACAPQuizController.baseConstructor.call(this)
};
cp.inherits(cp.ACAPQuizController, cp.QuizController);
cp.ACAPQuizController.prototype.GetIsReportingEnabled = function () {
	return !0
};
cp.PlaybackController = function () {
	this.m_QuizReportingData = cp.D.quizReportingData;
	this.ReportingOptionsEnum = cp.ReportingOptionsEnum;
	this.SlideViewsTypeEnum = cp.SlideViewsTypeEnum;
	this.QuizCriteriaEnum = cp.QuizCriteriaEnum;
	this.m_sendCourseDataWithInteractionData = !0;
	this.m_completionValueToSend = "default";
	this.m_successSlideViewsType = this.m_completionSlideViewsType = this.m_completionQuizCriteria = this.m_successQuizCriteria = this.m_successCriteria = this.m_completionCriteria = this.m_slideViewsForCompletion = this.m_slideViewsForSuccess =
		this.m_completionTrigger = -1;
	this.m_sendIncompleteToPassedOrFailed = !1;
	this.m_beginSendingSuccessStatus = !0;
	this.m_VarHandle = void 0;
	this.m_GoToQuizScopeActionExeuted = !1;
	this.m_UseRusticiAdapter = !0;
	this.m_lmsType = "";
	this.m_AuthorwareDelimeter = void 0;
	this.m_sendScoreAsPercent = !1;
	this.m_trackingLevel = 0;
	this.m_completionSlideViewPercentage = 100;
	this.m_reportingOption = 0;
	this.m_courseNode = this.m_courseName = this.m_departmentName = this.m_companyName = this.m_internalServerURL = this.m_emailAddress = "";
	this.m_isTrackedFlag = !1;
	this.m_trackingUrlEncodeVersionAndSession = !0;
	this.m_trackingCharsToNotUrlEncode = "";
	this.m_commitDataOnEverySlide = !1;
	this.m_CmiExitNormalAfterCompletion = this.m_trackingSendResumeData = !0;
	this.m_loadingResumeData = this.m_trackingIsOn = !1;
	this.m_quizController = void 0;
	this.currentSlide = "";
	this.currentSlideIndex = 0;
	this.m_slideNames = [];
	this.verbose = this.m_isTracked = this.m_lastCourseDataSent = !1;
	this.m_GraphManager = void 0
};
cp.PlaybackController.prototype = {
	InitializePlaybackController: function () {
		var a = cp.movie.stage.slides;
		if (a) {
			this.GetQuizController();
			for (var b = 0; b < a.length; ++b) this.AddSlideInfo(a[b])
		}
	},
	GetTotalUnansweredQuestions: function () {
		var a = this.GetQuizController();
		return !a ? -1 : a.GetTotalUnansweredQuestions()
	},
	AddQuestionSlideNames: function () {
		var a = cp.movie.stage.slides;
		if (a) {
			var b = this.GetQuizController();
			if (b)
				for (var c = 0; c < a.length; ++c) {
					var d = b.GetQuestionsOnSlide(c);
					d && 0 < d.length && b.AddQuestionSlideNames(a[c])
				}
		}
	},
	HasQuiz: function (a) {
		"undefined" === typeof a && (a = !1);
		var b = !1;
		if (a) {
			var a = cp.movie.questionObjs,
				c = 0;
			a && (c = a.length);
			if (c) {
				for (var d = 0; d < c; ++d) a[d] && a[d].getIsKnowledgeCheck() && c--;
				0 < c && (b = !0)
			}
		} else if (a = this.GetQuizController()) a = a.GetQuestionSlidesNames(), void 0 != a && 0 < a.length && (b = !0);
		return b
	},
	InitializeReportingVariables: function () {
		if (this.m_QuizReportingData) {
			var a = this.m_QuizReportingData.lmsInitializationString;
			a && "" != a && (eval(a), (cp.IsRunningInACAP || cp.NotRunningInLMS) && this.ResetReportingOptions())
		}
	},
	GetGraphManager: function () {
		if (cp.D.baq && void 0 != cp.D.sgMgr) {
			if (void 0 == this.m_GraphManager) {
				var a = void 0,
					b = this.GetQuizController();
				b && (a = b.GetQuestionSlidesNames());
				void 0 != a && 0 < a.length && (this.m_GraphManager = new cp.QuizSlideGraphManager)
			}
			return this.m_GraphManager
		}
	},
	GetLoadingResumeDataBln: function () {
		return this.m_loadingResumeData
	},
	SetLoadingResumeData: function (a) {
		this.m_loadingResumeData = a
	},
	saveQuizState: function (a) {
		a.writeNumber(cpInfoCurrentSlideIndex);
		for (var b = 0; b < this.m_slideNames.length; ++b) {
			var c =
				this.m_slideNames[b],
				d = cp.D[c];
			if (d)
				if (a.writeBoolean(d.v), void 0 != d.pn) {
					var e = cp.D[d.qs];
					a.writeString(d.pn);
					var f = 999,
						d = cp.D[d.pn].pqs;
					if (e)
						for (e = 0; e < d.length; ++e) c == d[e] && (f = e);
					a.writeNumber(f)
				} else a.writeString(""), a.writeNumber(999)
		}
		e = cp.movie.playbackController.GetQuizController();
		b = cp.movie.playbackController.HasQuiz();
		e && b && e.saveState(a);
		c = [];
		f = cp.vm.varInfos.length;
		for (e = 0; e < f; ++e)(b = cp.vm.varInfos[e]) && !b.systemDefined && c.push(b);
		e = 0;
		f = c.length;
		a.writeNumber(f);
		for (e = 0; e < f; ++e) b = c[e],
		d = cp.vm.getVariableValue(b.name), null == d && void 0 == d && (d = 0), a.writeString(b.name), isNaN(d) ? (a.writeNumber(0), a.writeString(d)) : (a.writeNumber(1), a.writeNumber(d))
	},
	restoreQuizFromState: function (a) {
		if (a && !(0 >= a.toString().length)) {
			for (var b = a.readNumber(), c = 0; c < this.m_slideNames.length; ++c) {
				var d = cp.D[this.m_slideNames[c]];
				if (d) {
					d.v = a.readBoolean();
					a.readString();
					var e = a.readNumber(),
						f = d.pn;
					f && "" != f && (e = cp.D[f].pqs[e], this.m_slideNames[c] = e, f = cp.movie.stage.slides[c], cp.movie.stage.slides[c] = e, -1 !=
						f.indexOf("rq") && (f = f.split("rq")[1], "" != f && (cp.D[f] = cp.D[e])), cp.poolManager && cp.poolManager.updateSlideData(e, c, d))
				}
			}
			cp.poolManager && cp.poolManager.updateMainMovieData();
			cp.ContinueQuizLibraryInit();
			c = cp.movie.playbackController.GetQuizController();
			d = cp.movie.playbackController.HasQuiz();
			c && d && c.restoreState(a);
			f = c = 0;
			e = a.readNumber();
			for (c = 0; c < e; ++c) d = a.readString(), f = a.readNumber(), f = 0 == f ? a.readString() : a.readNumber(), cp.vm.hasOwnProperty(d) && cp.vm.setVariableValue(d, f, !1);
			this.UpdateRestoredSlideIndex(b)
		}
	},
	UpdateRestoredSlideIndex: function (a) {
		var b = !1;
		a >= cp.movie.stage.slides.length - 1 && (b = !0);
		var c = cp.movie.playbackController.GetQuizController(),
			d = !1,
			e = !1;
		c && (d = c.GetIsSlideJudged(a), e = c.GetIsSubmitAll());
		!b && (!e && d) && (a += 1);
		b = cp.D.project_main;
		if (0 <= a && (a < cp.movie.stage.slides.length && b) && (a = cp.movie.stage.slides[a]))
			if (a = cp.D[a]) a = a.from, void 0 != a && (b.currentFrame = a)
	},
	AddSlideInfo: function (a) {
		this.m_slideNames || (this.m_slideNames = []);
		this.m_slideNames.push(a)
	},
	GetNumSlides: function () {
		return !this.m_slideNames ?
			0 : this.m_slideNames.length
	},
	GetSlideNameAtIndex: function (a) {
		if (this.m_slideNames && 0 <= a && a < this.m_slideNames.length) return this.m_slideNames[a]
	},
	GetSlideNames: function () {
		return this.m_slideNames
	},
	LeaveCurrentSlide: function (a) {
		this.verbose && cp.log("CPQuizLibrary :: PlaybackController :: Calling LeaveCurrentSlide");
		this.m_quizController && (void 0 == a || 0 > a || this.currentSlideIndex != a && this.m_quizController.LeaveSlide(this.currentSlideIndex, a))
	},
	SetCurrentSlide: function (a) {
		this.verbose && cp.log("CPQuizLibrary :: QuizController :: inside SetCurrentSlide - " +
			a);
		var b = this.GetSlideNameAtIndex(a);
		b != this.currentSlide && (b != this.currentSlide && 0 <= a && a < this.m_slideNames.length && this.m_trackingAdapter && this.GetIsTracked() && ("EMAIL" != this.m_lmsType.toUpperCase() && "ACROBAT" != this.m_lmsType.toUpperCase() && "INTERNALSERVER" != this.m_lmsType.toUpperCase()) && this.m_trackingAdapter.SendSlideView(a), this.currentSlide = b, this.currentSlideIndex = a, b = this.GetGraphManager(), void 0 != b && b.updateCurrentBranch(a), this.m_quizController && this.m_quizController.EnterCurrentSlide(a))
	},
	GetCurrentSlideIndex: function () {
		return this.currentSlideIndex
	},
	GetCurrentSlide: function () {
		return this.currentSlide
	},
	GetQuizController: function () {
		this.m_quizController || (this.m_quizController = cp.IsRunningInACAP ? new cp.ACAPQuizController : new cp.QuizController, this.m_quizController.InitializeQuizController(), this.m_quizController.SetPlaybackController(this));
		return this.m_quizController
	},
	IsRunningInConnect: function () {
		var a = cp.IsRunningInConnect();
		a && (this.m_lmsType = "BREEZE");
		return a
	},
	ClearPendingCalls: function () {
		this.m_trackingAdapter &&
			this.m_trackingAdapter.ClearPendingCalls()
	},
	LMSIsBreeze: function () {
		return this.IsRunningInConnect()
	},
	LMSIsAICC: function () {
		return "AICC" == this.m_lmsType.toUpperCase()
	},
	LMSIsAlternateReporting: function () {
		return "ACROBAT" == this.m_lmsType.toUpperCase() || "INTERNALSERVER" == this.m_lmsType.toUpperCase()
	},
	GetTrackingData: function () {
		if (this.IsRunningInConnect())
			if (this.verbose && cp.log("Playback controller :: GetTrackingData()"), cp.BreezeTrackingAdapterObj && !cp.BreezeTrackingAdapterObj.IsTrackingDataLoaded()) this.TurnOffTracking();
			else if (this.m_trackingAdapter && this.m_trackingAdapter.GetTrackingData(), this.m_trackingAdapter && this.m_trackingAdapter.IsTrackingDataLoaded()) {
			this.m_trackingAdapter.GetLessonLocation();
			var a = this.m_trackingAdapter.GetLessonData();
			this.verbose && cp.log("Playback controller :: GetTrackingData() :: quizStateStr :: " + a)
		} else this.TurnOffTracking()
	},
	CreateTrackingAdapter: function () {
		this.verbose && cp.log("Playback controller :: CreateTrackingAdapter() :" + this.m_lmsType);
		var a = {}, b = -1 != this.m_lmsType.toUpperCase().indexOf("SCORM");
		b && (a.exitNormal = this.m_CmiExitNormalAfterCompletion, a.reportingOption = this.m_reportingOption);
		var c = !0,
			d = cp.D.quizReportingData;
		d && (c = d.trackingSendResumeData);
		cp.IsRunningInACAP ? (this.m_trackingAdapter = new cp.TrackingAdapter, this.m_trackingAdapter.SetLessonDataTracked(c), this.m_trackingAdapter.SetAdapterSpecificData(a), this.m_trackingAdapter.Initialize(), window.onbeforeunload = cp.UnloadActivties) : (this.m_trackingAdapter = this.IsRunningInConnect() ? cp.BreezeTrackingAdapterObj ? cp.BreezeTrackingAdapterObj :
			new cp.Breeze : this.LMSIsAlternateReporting() ? new cp.InternalServerAdapter : new cp.SCORM_Rustici(b), window.onbeforeunload = cp.UnloadActivties, this.m_trackingAdapter ? this.m_trackingAdapter != cp.BreezeTrackingAdapterObj && (void 0 != c && this.m_trackingAdapter.SetLessonDataTracked(c), this.m_trackingAdapter.SetAdapterSpecificData(a), this.m_trackingAdapter.Initialize(), this.m_trackingAdapter.IsInitialized() && this.IsRunningInConnect() && this.GetTrackingData()) : this.m_trackingIsOn = this.m_loadingResumeData = !1)
	},
	TurnOnTracking: function () {
		this.verbose &&
			cp.log("Playback controller :: TurnOnTracking()");
		if (!this.m_trackingIsOn || cp.IsRunningInACAP) this.m_trackingIsOn = this.m_loadingResumeData = !0, this.CreateTrackingAdapter()
	},
	TurnOffTracking: function () {
		this.verbose && cp.log("Playback controller :: TurnOffTracking()");
		this.m_trackingIsOn && (this.m_trackingIsOn = this.m_loadingResumeData = !1)
	},
	GetIsTracked: function () {
		return this.m_isTracked
	},
	SetIsTracked: function (a) {
		if (cp.IsRunningInACAP) return this.TurnOnTracking();
		this.IsRunningInConnect() ? a = !0 : this.LMSIsAlternateReporting() ||
			"undefined" == typeof cp.LMSDriverHolder && (a = !1);
		this.verbose && cp.log("Playback controller :: SetIsTracked()");
		a && a != this.m_isTracked ? this.TurnOnTracking() : a || (a != this.m_isTracked ? this.TurnOffTracking() : this.m_loadingResumeData = !1);
		this.m_isTracked = a
	},
	AllowedToGoToSlide: function (a, b) {
		if (!this.m_quizController || a == b) return "";
		if (0 > a || 0 > b) return "QUIZ_ERROR_BAD_SLIDE_NUM";
		var c = b < a;
		if (this.m_quizController.SubmitAllDialogShown(a, b)) return "QUIZ_ERROR_SUBMIT_ALL";
		for (var d = a < b ? 1 : -1, e = "", f = a;;) {
			if (f == b) return this.m_quizController.CanEnterSlide(b);
			e = this.m_quizController.CanLeaveSlide(f, c);
			if ("" != e) return e;
			f += d
		}
	},
	GetTotalQuizScore: function () {
		if (this.m_quizController) return this.m_quizController.GetScore()
	},
	GetTotalQuizMaxScore: function () {
		if (this.m_quizController) return this.m_quizController.GetMaxScore()
	},
	GetTotalQuizMinScore: function () {
		if (this.m_quizController) return this.m_quizController.GetMinScore()
	},
	GetTotalQuizLocation: function () {
		return this.currentSlideIndex
	},
	HasQuizzes: function () {
		return !this.m_quizController ? !1 : this.m_quizController.HasQuiz()
	},
	GetAllQuestionsAnswered: function () {
		return !this.m_quizController || !this.m_quizController.GetAllQuestionsAnswered() ? !1 : !0
	},
	GetAllQuizAttemptsFinished: function () {
		return !this.m_quizController || !this.m_quizController.GetIsAttemptFinished() ? !1 : !0
	},
	GetAllQuizzesPassed: function () {
		return !this.m_quizController || !this.m_quizController.GetIsPassed() ? !1 : !0
	},
	GetNumberOfSlidesSeen: function () {
		var a = 0;
		if (!this.m_slideNames) return !1;
		for (var b = 0; b < this.m_slideNames.length; ++b) cp.D[this.m_slideNames[b]].v && a++;
		return a
	},
	GetPercentageSlidesSeen: function () {
		var a = this.GetGraphManager();
		if (void 0 != a) return a = a.getSlideViewPercentage(), "NaN" == a ? 0 : a;
		if (!this.m_slideNames) return !1;
		a = this.m_slideNames.length;
		if (0 < a) return 100 * (this.GetNumberOfSlidesSeen() / a)
	},
	GetAllSlidesSeen: function () {
		if (!this.m_slideNames) return !1;
		for (var a = 0; a < this.m_slideNames.length; ++a)
			if (!cp.D[this.m_slideNames[a]].v) return !1;
		return !0
	},
	GetAllQuizzesPassingScore: function () {
		return !this.m_quizController ? !1 : this.m_quizController.GetPassingScore()
	},
	GetIsQuizAttempted: function () {
		var a = !1;
		if (this.m_quizController) return a = this.m_quizController.GetQuizBranchAware() ? this.m_quizController.GetAnyNonPreTestQuestionAnswered() : this.m_quizController.GetAnyQuestionsAnswered()
	},
	EvaluateQuizStatus: function (a) {
		var b = !1;
		switch (a) {
			case this.QuizCriteriaEnum.QuizIsPassed:
				this.GetAllQuizzesPassed() && (b = !0);
				break;
			case this.QuizCriteriaEnum.QuizIsAttempted:
				b = this.GetIsQuizAttempted();
				break;
			case this.QuizCriteriaEnum.QuizIsPassedOrAttempLimitReached:
				if (this.GetAllQuizzesPassed()) return !0;
				if (this.m_quizController &&
					this.m_quizController.quizNumStarts < this.m_quizController.GetNumberOfQuizAttempts()) break;
				return !0;
			default:
				this.verbose && cp.log("Illegal parameter to EvaluateQuizStatus: " + a)
		}
		return b
	},
	EvaluateViewStatus: function (a, b) {
		var c = !1,
			d = this.GetNumberOfSlidesSeen();
		if (this.m_slideNames && 0 < this.m_slideNames.length) totalSlides = this.m_slideNames.length;
		else return this.verbose && cp.log("In EvaluateViewStatus,totalSlides not obtained or found to be zero. Returning."), !1;
		switch (b) {
			case this.SlideViewsTypeEnum.percent:
				this.GetPercentageSlidesSeen() >=
					a && (c = !0);
				break;
			case this.SlideViewsTypeEnum.number:
				d >= a && (c = !0);
				break;
			default:
				this.verbose && cp.log("Illegal arg to EvaluateViewStatus:" + a + "," + b)
		}
		return c
	},
	EvaluateStatus: function (a) {
		var b = !1,
			c = this.QuizCriteriaEnum,
			d = this.SlideViewsTypeEnum,
			e = 0,
			f = this.ReportingOptionsEnum;
		if ("completion" == a) c = this.m_completionQuizCriteria, d = this.m_completionSlideViewsType, e = this.m_slideViewsForCompletion, f = this.m_completionCriteria;
		else if ("success" == a) c = this.m_successQuizCriteria, d = this.m_successSlideViewsType,
		e = this.m_slideViewsForSuccess, f = this.m_successCriteria;
		else return this.verbose && cp.log("Illegal status type to evaluateStatus:" + a), !1;
		switch (f) {
			case this.ReportingOptionsEnum.quiz_only:
				b = this.EvaluateQuizStatus(c);
				break;
			case this.ReportingOptionsEnum.quiz_and_views:
				this.EvaluateQuizStatus(c) && this.EvaluateViewStatus(e, d) && (b = !0);
				break;
			case this.ReportingOptionsEnum.views_only:
				b = this.EvaluateViewStatus(e, d);
				break;
			case this.ReportingOptionsEnum.access:
				b = 1 <= this.GetNumberOfSlidesSeen();
				break;
			default:
				this.verbose &&
					cp.log("Illegal value of criteria in evaluateStatus():" + a)
		}
		return b
	},
	IsSlideVisited: function (a) {
		if (a = cp.D[a]) return a.v
	},
	ShouldSendSuccessStatus: function () {
		var a = !1;
		if (this.m_successCriteria == this.ReportingOptionsEnum.access) a = 1 <= this.GetNumberOfSlidesSeen();
		else if (this.m_successCriteria == this.ReportingOptionsEnum.quiz_only) {
			if (a = !0, this.m_quizController) {
				var b = this.m_slideNames[this.m_quizController.GetLastSlideInQuizIndex()];
				this.IsSlideVisited(b) || (a = !1)
			}
		} else if (this.m_successCriteria == this.ReportingOptionsEnum.quiz_and_views) {
			if (this.m_quizController &&
				(b = this.m_slideNames[this.m_quizController.GetLastSlideInQuizIndex()], !this.IsSlideVisited(b))) return a;
			if (!this.GetAllQuizzesPassed() || this.IsSlideVisited(this.m_slideNames[this.m_slideNames.length - 1])) a = !0
		} else this.m_successCriteria == this.ReportingOptionsEnum.views_only && (a = this.IsSlideVisited(this.m_slideNames[this.m_slideNames.length - 1]));
		return a
	},
	GetTotalQuizStatusAll: function () {
		var a = {
			isPassed: !1,
			isCompleted: !1,
			sendCompletion: !0,
			sendNothing: !1
		}, b = this.ReportingOptionsEnum,
			b = this.LMSIsBreeze() ?
				this.ReportingOptionsEnum.breeze : this.GetReportingOption();
		switch (b) {
			case this.ReportingOptionsEnum.breeze:
				this.HasQuiz() ? this.GetAllQuizAttemptsFinished() ? (a.isPassed = this.GetAllQuizzesPassed() ? !0 : !1, a.isCompleted = !0, a.sendCompletion = !1) : (a.isPassed = !1, a.isCompleted = !1, a.sendCompletion = !0) : (this.GetAllSlidesSeen() ? (a.isPassed = !0, a.isCompleted = !0) : (a.isPassed = !1, a.isCompleted = !1), a.sendCompletion = !0);
				break;
			case this.ReportingOptionsEnum.completion_success:
				a.sendCompletion = !1;
				a.isCompleted = this.EvaluateStatus("completion");
				a.isPassed = this.EvaluateStatus("success");
				break;
			case this.ReportingOptionsEnum.completion_only:
				a.sendCompletion = !0;
				a.isCompleted = this.EvaluateStatus("completion");
				break;
			case this.ReportingOptionsEnum.incompleteToPassedOrFailed:
				a.isPassed = this.EvaluateStatus("success");
				this.m_beginSendingSuccessStatus = this.ShouldSendSuccessStatus();
				break;
			case this.ReportingOptionsEnum.access:
				break;
			default:
				1 > this.GetNumberOfSlidesSeen() ? (a.isPassed = !1, a.isCompleted = !1) : (a.isPassed = !0, a.isCompleted = !0), a.sendCompletion = !0
		}
		return a
	},
	GetTotalQuizPassed: function () {
		return this.GetTotalQuizStatusAll().isPassed ? "passed" : "failed"
	},
	GetTotalQuizCompleted: function () {
		return this.GetTotalQuizStatusAll().isCompleted ? "completed" : "incomplete"
	},
	GetTotalQuizSendCompletion: function () {
		var a = !0;
		switch (this.m_completionValueToSend) {
			case "completion":
				a = !0;
				break;
			case "passed":
				a = !1;
				break;
			default:
				a = this.GetTotalQuizStatusAll().sendCompletion
		}
		return a
	},
	GetTotalQuizState: function () {
		return ""
	},
	GetProgressMeasure: function () {
		return 0 == this.m_slideNames.length ?
			0 : this.GetNumberOfSlidesSeen() / this.m_slideNames.length
	},
	ShouldFlushCourseData: function (a, b) {
		a ? a.printCourseData() : this.verbose && cp.log("lastData is undefined");
		b ? (this.verbose && cp.log("thisData "), b.printCourseData()) : this.verbose && cp.log("thisData is undefined");
		if ("EMAIL" == this.m_lmsType.toUpperCase() || "ACROBAT" == this.m_lmsType.toUpperCase() || "INTERNALSERVER" == this.m_lmsType.toUpperCase()) return this.verbose && cp.log("return false0"), !1;
		if (void 0 == b) return this.verbose && cp.log("return false1"), !1;
		if (void 0 == a) return this.verbose && cp.log("return true0"), !0;
		if (b.quizMinScore != a.quizMinScore || b.quizMaxScore != a.quizMaxScore || b.sendScoreAsPercent != a.sendScoreAsPercent || b.quizSendCompletion != a.quizSendCompletion) return this.verbose && cp.log("return true1"), !0;
		if (b.quizScore != a.quizScore || b.quizCompleted != a.quizCompleted || b.quizPassed != a.quizPassed) return this.verbose && cp.log("return true2"), !0;
		this.verbose && cp.log("return false2");
		return !1
	},
	ShouldSendCourseData: function (a, b) {
		a ? (this.verbose &&
			cp.log("lastData "), a.printCourseData()) : this.verbose && cp.log("lastData is undefined");
		b ? (this.verbose && cp.log("thisData "), b.printCourseData()) : this.verbose && cp.log("thisData is undefined");
		if ("EMAIL" == this.m_lmsType.toUpperCase() || "ACROBAT" == this.m_lmsType.toUpperCase() || "INTERNALSERVER" == this.m_lmsType.toUpperCase()) return this.verbose && cp.log("return false -2"), !1;
		if (void 0 == b) return this.verbose && cp.log("return false -1"), !1;
		if (void 0 == a) return this.verbose && cp.log("return true0"), !0;
		this.verbose &&
			cp.log("function shouldSendCourseData 33");
		if (b.slideCount >= a.slideCount + 10) return this.verbose && cp.log("return true1"), !0;
		if (b.quizMinScore != a.quizMinScore || b.quizMaxScore != a.quizMaxScore || b.sendScoreAsPercent != a.sendScoreAsPercent || b.quizSendCompletion != a.quizSendCompletion) return this.verbose && cp.log("return true2"), !0;
		if (b.quizScore != a.quizScore || b.quizCompleted != a.quizCompleted || b.quizPassed != a.quizPassed) return this.verbose && cp.log("return true3"), !0;
		if (b.quizLocation != a.quizLocation) return !0;
		this.verbose && cp.log("return false4");
		return !1
	},
	SendSuspendDataOnly: function () {
		this.verbose && cp.log("PlaybackController::SendSuspendDataOnly()");
		var a = cp.createAndGetDataChunk();
		this.GetIsTracked() && this.m_trackingAdapter && (cp.m_isLMSPreview && void 0 != cp.LMSDriverHolder && cp.toggleLMSPreviewDebugLogsColor(cp.LMSDriverHolder), this.m_trackingAdapter.SendSuspendData(a))
	},
	CanSendCourseData: function () {
		return !0
	},
	GetCourseData: function () {
		var a = {
			printCourseData: function () {}
		};
		a.slideCount = this.GetCurrentSlideIndex();
		a.quizScore = this.GetTotalQuizScore();
		a.quizMinScore = this.GetTotalQuizMinScore();
		a.quizMaxScore = this.GetTotalQuizMaxScore();
		a.sendScoreAsPercent = this.GetSendScoreAsPercent();
		a.quizLocation = "" + this.GetTotalQuizLocation() + "";
		a.quizCompleted = this.GetTotalQuizCompleted();
		a.quizPassed = this.GetTotalQuizPassed();
		a.quizSendCompletion = this.GetTotalQuizSendCompletion();
		a.quizTime = void 0;
		a.quizState = this.GetTotalQuizState();
		a.progressMeasure = this.GetProgressMeasure();
		a.sendIncompleteToPassedOrFailed = this.m_sendIncompleteToPassedOrFailed;
		a.beginSendingSuccessStatus = this.m_beginSendingSuccessStatus;
		return a
	},
	SendCourseData: function (a) {
		var b = this.GetQuizController();
		b && b.GetIsSubmitAll() && b.quizInProgress && !b.m_submittedAllQuestions ? this.SendSuspendDataOnly() : this.CanSendCourseData() && (this.SetBreezeDefaults(), this.m_trackingAdapter && this.GetIsTracked() && (b = this.GetCourseData(), a = a || this.ShouldFlushCourseData(this.m_lastCourseDataSent, b), this.verbose && cp.log("sendCourseData flush " + a), a || this.ShouldSendCourseData(this.m_lastCourseDataSent,
			b) ? (this.m_lastCourseDataSent = b, this.verbose && cp.log("sending course data flush " + a), this.m_trackingAdapter.SendTrackingData(b.quizScore, b.quizMinScore, b.quizMaxScore, b.sendScoreAsPercent, b.quizLocation, b.quizCompleted, b.quizPassed, b.quizSendCompletion, b.quizTime, b.quizState, b.progressMeasure, b.sendIncompleteToPassedOrFailed, b.beginSendingSuccessStatus), a && this.m_trackingAdapter.Flush()) : this.verbose && cp.log("NOT sending course data")))
	},
	SendQuestionEventData: function (a) {
		this.verbose && cp.log("PlaybackController::SendQuestionData()");
		var b = 0,
			c = this.GetQuizController();
		c && (b = c.GetMaxScore());
		a = {
			slideNumber: a.getslideNum(),
			questionNumber: a.getquestionNumInQuiz(),
			questionScoringType: a.getQuestionScoringType(),
			interactionType: a.getinteractionType(),
			weighting: a.getWeighting(),
			questionAnswered: !1 == a.getanswersIncomplete(),
			questionAnsweredCorrectly: a.getansweredCorrectly(),
			questionMaxScore: b,
			questionScore: a.getscoredPoints(),
			questionMaxAttempts: a.getmaxTries(),
			infiniteAttempts: 9999 == a.getmaxTries(),
			questionAttempts: a.getnumTries(),
			interactionID: a.getinteractionID(),
			quizName: "QuizName",
			objectiveID: a.getobjectiveID(),
			selectedAnswer: a.m_chosenAnswersAsString
		};
		cp.em.fireEvent("CPQuestionSubmit", a)
	},
	SetBreezeDefaults: function () {
		this.LMSIsBreeze() && (this.m_completionValueToSend = "default", this.m_completionTrigger = this.ReportingOptionsEnum.breeze, this.m_completionSlideViewPercentage = 100, this.m_sendScoreAsPercent = !1, this.m_trackingLevel = "interactions", this.m_trackingUrlEncodeVersionAndSession = !0, this.m_trackingCharsToNotUrlEncode = "", this.m_trackingSendResumeData = !0)
	},
	SendInteractionData: function (a, b) {
		this.verbose && cp.log("PlaybackController::SendInteraction()");
		this.SetBreezeDefaults();
		if (this.GetIsTracked() && "interactions" == this.m_trackingLevel) {
			var c = this.GetQuizController();
			c && c.GetScore();
			if (this.LMSIsAICC() || this.IsRunningInConnect()) this.m_trackingAdapter && this.m_trackingAdapter.SendInteractionData(a.m_interactionID, a.m_objectiveID, a.m_interactionType, a.m_correctAnswersAsString, a.m_chosenAnswersAsString, a.m_isCorrectAsString, a.m_weighting, a.m_latencyAsSeconds,
				a.m_curDateAsString2, a.m_curTimeAsSecondsSinceMidnight, a.m_scoredPoints, a.m_negativeWeight, b);
			else {
				this.LMSIsAlternateReporting() && (escapeAnswers = !1);
				var d = a.m_correctAnswersAsString;
				if (this.LMSIsAlternateReporting() && c) {
					var e = c.GetQuestionsOnSlide(this.currentSlide);
					e && 0 != e.length && (e = e[0]) && e.GetIsSurvey() && (d = " ");
					this.m_trackingAdapter && this.m_trackingAdapter.SetCurrentAttempt(c.quizNumStarts)
				}
				this.m_trackingAdapter && this.m_trackingAdapter.SendInteractionData(a.m_interactionID, a.m_objectiveID,
					a.m_interactionType, d, a.m_chosenAnswersAsString, a.m_isCorrectAsString, a.m_weighting, a.m_latencyAsSeconds, a.m_curDateAsString, a.m_curTimeAsSecondsSinceMidnight, a.m_scoredPoints, a.m_negativeWeight, b)
			}
		}
	},
	OnEndQuiz: function () {
		this.GetIsTracked() && ("EMAIL" != this.m_lmsType.toUpperCase() && "ACROBAT" != this.m_lmsType.toUpperCase() && "INTERNALSERVER" != this.m_lmsType.toUpperCase()) && this.SendCourseData(!0)
	},
	SendEmailResults: function () {
		this.GetIsTracked() && "EMAIL" == this.m_lmsType.toUpperCase() && (this.verbose &&
			cp.log("sending course data from sendEmailResults"), this.SendCourseData(!0))
	},
	PostQuizResults: function () {
		if (this.GetIsTracked() && ("ACROBAT" == this.m_lmsType.toUpperCase() || "INTERNALSERVER" == this.m_lmsType.toUpperCase())) this.verbose && cp.log("sending course data from PostQuizResults"), this.CanPostResults() && this.SendCourseData(!0)
	},
	CanPostResults: function () {
		return this.GetAllQuizzesPassed() || this.m_quizController && (this.m_quizController.m_numStarts >= this.m_quizController.m_numQuizAttemptsAllowed || this.m_quizController.GetIsInReviewMode()) ? !0 : !1
	},
	DoSendLMSTrackingData: function () {
		this.GetIsTracked() && "EMAIL" != this.m_lmsType.toUpperCase() && "ACROBAT" != this.m_lmsType.toUpperCase() && "INTERNALSERVER" != this.m_lmsType.toUpperCase() ? this.SendCourseData(!this.LMSIsAICC() || !this.m_playbackController.IsRunningInConnect()) : this.SendCourseData(!1)
	},
	RestoreQuizState: function () {
		this.verbose && cp.log("PlaybackController :: RestoreQuizState()");
		var a = this.GetQuizController();
		a && a.GetIsReportingEnabled() && (cp.resumeValuesFromDataChunk(), cp.movie.resumeMovieSpecificValue())
	},
	GetRestoredQuizSlide: function () {
		this.verbose && cp.log("PlaybackController :: GoToRestoredQuizSlide()");
		var a = cp.D.project_main.currentFrame;
		this.verbose && cp.log("Restoring frame :: " + a);
		return a
	},
	DoPollLMSGetTrackingDataLoaded: function () {
		this.GetIsTracked() && (this.m_trackingAdapter ? this.m_trackingAdapter.IsTrackingDataLoaded() && (this.m_trackingAdapter.GetLessonLocation(), this.m_trackingAdapter.GetLessonData()) : (this.verbose && cp.log("_doPollLMSGetTrackingDataLoaded else"), turnOffTracking()))
	},
	ExitCourse: function () {
		this.verbose &&
			cp.log("function exitCourse 1 " + isTracked);
		this.m_trackingAdapter && this.GetIsTracked() ? (this.verbose && cp.log("function exitCourse isTracked "), "EMAIL" != this.m_lmsType.toUpperCase() && ("ACROBAT" != this.m_lmsType.toUpperCase() && "INTERNALSERVER" != this.m_lmsType.toUpperCase()) && (this.verbose && cp.log("function exitCourse sendCourseData "), this.SendCourseData(!0)), this.m_trackingAdapter.Finish()) : this.verbose && cp.log("doFinalExit();")
	},
	GetSendCourseDataWithInteractionData: function () {
		return this.m_sendCourseDataWithInteractionData
	},
	GetLMSType: function () {
		return this.m_lmsType
	},
	SetLMSType: function () {
		this.verbose && cp.log("SetLMSType");
		switch (this.m_QuizReportingData.lmsType) {
			case 1:
				this.m_lmsType = "SCORM2004";
				break;
			case 2:
				this.m_lmsType = "SCORM12";
				break;
			case 3:
				this.m_lmsType = "Authorware";
				break;
			case 4:
				this.m_lmsType = "AICC";
				break;
			case 5:
				this.m_lmsType = "Questionmark";
				break;
			case 6:
				this.m_lmsType = "email";
				break;
			case 7:
				this.m_lmsType = "AICC";
				break;
			case 8:
				this.m_lmsType = "Acrobat";
				break;
			case 9:
				this.m_lmsType = "InternalServer";
				break;
			default:
				this.m_lmsType =
					""
		}
	},
	SetAuthorwareDelimeter: function () {
		this.verbose && cp.log("SetAuthorwareDelimeter");
		this.m_AuthorwareDelimeter = this.m_QuizReportingData.authorwareDelimeter
	},
	SetSendScoreAsPercent: function () {
		this.verbose && cp.log("SetSendScoreAsPercent");
		this.m_sendScoreAsPercent = this.m_QuizReportingData.sendScoreAsPercent ? !0 : !1
	},
	GetSendScoreAsPercent: function () {
		return this.IsRunningInConnect() ? !1 : this.m_sendScoreAsPercent
	},
	SetSendCompletionFlag: function () {
		this.m_completionValueToSend = this.m_QuizReportingData.sendCompletionFlag ?
			"completion" : "passed"
	},
	GetSendCompletionFlag: function () {
		return this.m_completionValueToSend
	},
	SetTrackingLevel: function () {
		this.verbose && cp.log("SetTrackingLevel");
		switch (this.m_QuizReportingData.trackingLevel) {
			case 0:
				this.m_trackingLevel = "interactions";
				break;
			case 2:
				this.m_trackingLevel = "score"
		}
	},
	SetSlideViewPercentage: function () {
		this.verbose && cp.log("SetSlideViewPercentage");
		this.m_completionSlideViewPercentage = this.m_QuizReportingData.slideViewPercentage
	},
	SetReportingOption: function () {
		this.verbose &&
			cp.log("SetReportingOption");
		switch (this.m_QuizReportingData.reportingOption) {
			case 0:
				this.m_reportingOption = this.ReportingOptionsEnum.completion_success;
				break;
			case 1:
				this.m_reportingOption = this.ReportingOptionsEnum.completion_only;
				break;
			case 2:
				this.m_reportingOption = this.ReportingOptionsEnum.incompleteToPassedOrFailed;
				this.m_sendIncompleteToPassedOrFailed = !0;
				break;
			case 4:
				this.m_reportingOption = this.ReportingOptionsEnum.breeze;
				break;
			default:
				this.m_reportingOption = ""
		}
		this.m_completionTrigger = this.m_reportingOption
	},
	GetReportingOption: function () {
		return this.m_reportingOption
	},
	SetSlideViewsForSuccess: function () {
		this.verbose && cp.log("SetSlideViewsForSuccess");
		this.m_slideViewsForSuccess = this.m_QuizReportingData.slideViewsForSuccess;
		switch (this.m_QuizReportingData.slideViewsTypeForSuccess) {
			case 0:
				this.m_successSlideViewsType = this.SlideViewsTypeEnum.percent;
				break;
			case 1:
				this.m_successSlideViewsType = this.SlideViewsTypeEnum.number;
				break;
			default:
				this.m_successSlideViewsType = this.SlideViewsTypeEnum.percent
		}
	},
	SetSlideViewsForCompletion: function () {
		this.verbose &&
			cp.log("SetSlideViewsForCompletion");
		this.m_slideViewsForCompletion = this.m_QuizReportingData.slideViewsForCompletion;
		switch (this.m_QuizReportingData.slideViewsTypeForCompletion) {
			case 0:
				this.m_completionSlideViewsType = this.SlideViewsTypeEnum.percent;
				break;
			case 1:
				this.m_completionSlideViewsType = this.SlideViewsTypeEnum.number;
				break;
			default:
				this.m_completionSlideViewsType = this.SlideViewsTypeEnum.percent
		}
	},
	SetQuizCriteriaForCompletion: function () {
		this.verbose && cp.log("SetQuizCriteriaForCompletion");
		switch (this.m_QuizReportingData.quizCriteriaForCompletion) {
			case 0:
				this.m_completionQuizCriteria =
					this.QuizCriteriaEnum.QuizIsPassed;
				break;
			case 1:
				this.m_completionQuizCriteria = this.QuizCriteriaEnum.QuizIsAttempted;
				break;
			case 2:
				this.m_completionQuizCriteria = this.QuizCriteriaEnum.QuizIsPassedOrAttempLimitReached;
				break;
			default:
				this.verbose && cp.log("Value of quizCriteria not valid in setQuizCriteriaForCompletion()!"), this.m_completionQuizCriteria = this.QuizCriteriaEnum.QuizIsPassed
		}
	},
	SetQuizCriteriaForSuccess: function () {
		this.verbose && cp.log("SetQuizCriteriaForSuccess");
		switch (this.m_QuizReportingData.quizCriteriaForSuccess) {
			case 0:
				this.m_successQuizCriteria =
					this.QuizCriteriaEnum.QuizIsPassed;
				break;
			case 1:
				this.m_successQuizCriteria = this.QuizCriteriaEnum.QuizIsAttempted;
				break;
			case 2:
				this.m_successQuizCriteria = this.QuizCriteriaEnum.QuizIsPassedOrAttempLimitReached;
				break;
			default:
				this.verbose && cp.log("Value of quizCriteria not valid in setQuizCriteriaForSuccess()!"), this.m_successQuizCriteria = this.QuizCriteriaEnum.QuizIsPassed
		}
	},
	SetCompletionCriteria: function () {
		this.verbose && cp.log("SetCompletionCriteria");
		switch (this.m_QuizReportingData.completionCriteria) {
			case 0:
				this.m_completionCriteria =
					this.ReportingOptionsEnum.breeze;
				break;
			case 1:
				this.m_completionCriteria = this.ReportingOptionsEnum.quiz_only;
				break;
			case 2:
				this.m_completionCriteria = this.ReportingOptionsEnum.quiz_and_views;
				break;
			case 3:
				this.m_completionCriteria = this.ReportingOptionsEnum.views_only;
				break;
			case 4:
				this.m_completionCriteria = this.ReportingOptionsEnum.access;
				break;
			case 5:
				this.m_completionCriteria = this.ReportingOptionsEnum.completion_success;
				break;
			case 6:
				this.m_completionCriteria = this.ReportingOptionsEnum.incompleteToPassedOrFailed;
				break;
			default:
				this.verbose && cp.log("Invalid criteria recd in setOnlySuccessCriteria")
		}
	},
	SetSuccessCriteria: function () {
		this.verbose && cp.log("SetSuccessCriteria");
		switch (this.m_QuizReportingData.successCriteria) {
			case 0:
				this.m_successCriteria = this.ReportingOptionsEnum.breeze;
				break;
			case 1:
				this.m_successCriteria = this.ReportingOptionsEnum.quiz_only;
				break;
			case 2:
				this.m_successCriteria = this.ReportingOptionsEnum.quiz_and_views;
				break;
			case 3:
				this.m_successCriteria = this.ReportingOptionsEnum.views_only;
				break;
			case 4:
				this.m_successCriteria = this.ReportingOptionsEnum.access;
				break;
			case 5:
				this.m_successCriteria = this.ReportingOptionsEnum.completion_success;
				break;
			case 6:
				this.m_successCriteria = this.ReportingOptionsEnum.incompleteToPassedOrFailed;
				break;
			default:
				this.verbose && cp.log("Invalid criteria recd in setOnlySuccessCriteria")
		}
	},
	SetEmailAddress: function () {
		this.verbose && cp.log("SetEmailAddress");
		this.m_emailAddress = this.m_QuizReportingData.emailAddress
	},
	SetInternalServerURL: function () {
		this.verbose && cp.log("SetInternalServerURL");
		this.m_internalServerURL = this.m_QuizReportingData.internalServerURL
	},
	SetDirectory: function () {
		this.verbose && cp.log("SetDirectory");
		this.m_companyName = this.m_QuizReportingData.companyName;
		this.m_departmentName = this.m_QuizReportingData.departmentName;
		this.m_courseName = this.m_QuizReportingData.courseName
	},
	SetCourseNode: function () {
		this.verbose && cp.log("SetCourseNode");
		this.m_courseNode = this.m_QuizReportingData.courseNode
	},
	GetIsTrackedFlag: function () {
		return this.m_isTrackedFlag
	},
	SetIsTrackedFlag: function () {
		this.verbose &&
			cp.log("SetIsTrackedFlag");
		this.m_isTrackedFlag = this.m_QuizReportingData.isTrackedFlag
	},
	SetTrackingUrlEncodeVersionAndSession: function () {
		this.verbose && cp.log("SetTrackingUrlEncodeVersionAndSession");
		this.m_trackingSendResumeData = this.m_QuizReportingData.trackingUrlEncodeVersionAndSession ? !0 : !1
	},
	SetTrackingCharsToNotUrlEncode: function () {
		this.verbose && cp.log("SetTrackingCharsToNotUrlEncode");
		this.m_trackingCharsToNotUrlEncode = this.m_QuizReportingData.trackingCharsToNotUrlEncode
	},
	SetCommitDataOnEverySlide: function () {
		this.verbose &&
			cp.log("SetOptimizeCommitData");
		this.m_commitDataOnEverySlide = this.m_QuizReportingData.commitDataOnEverySlide ? !0 : !1
	},
	SetTrackingSendResumeData: function () {
		this.verbose && cp.log("SetTrackingSendResumeData");
		this.m_trackingSendResumeData = this.m_QuizReportingData.trackingSendResumeData ? !0 : !1
	},
	SetCmiExitNormalAfterCompletion: function () {
		this.verbose && cp.log("SetCmiExitNormalAfterCompletion");
		this.m_CmiExitNormalAfterCompletion = this.m_QuizReportingData.cmiExitNormalAfterCompletion
	},
	ResetReportingOptions: function () {
		this.m_sendCourseDataWithInteractionData = !1;
		this.m_completionValueToSend = "default";
		this.m_completionTrigger = cp.ReportingOptionsEnum.completion_success;
		this.m_slideViewsForCompletion = this.m_slideViewsForSuccess = 0;
		this.m_successCriteria = this.m_completionCriteria = cp.ReportingOptionsEnum.access;
		this.m_completionQuizCriteria = this.m_successQuizCriteria = cp.QuizCriteriaEnum.QuizIsPassed;
		this.m_successSlideViewsType = this.m_completionSlideViewsType = cp.SlideViewsTypeEnum.percent;
		this.m_UseRusticiAdapter = this.m_beginSendingSuccessStatus = this.m_sendIncompleteToPassedOrFailed = !1;
		this.m_lmsType = "";
		this.m_sendScoreAsPercent = !1;
		this.m_trackingLevel = 0;
		this.m_completionSlideViewPercentage = 100;
		this.m_reportingOption = cp.ReportingOptionsEnum.completion_success;
		this.m_courseNode = this.m_courseName = this.m_departmentName = this.m_companyName = this.m_internalServerURL = this.m_emailAddress = "";
		this.m_isTrackedFlag = !1;
		this.m_trackingUrlEncodeVersionAndSession = !0;
		this.m_trackingCharsToNotUrlEncode = "";
		this.m_isTracked = this.m_loadingResumeData = this.m_trackingIsOn = this.m_CmiExitNormalAfterCompletion =
			this.m_trackingSendResumeData = this.m_commitDataOnEverySlide = !1
	}
};
cp.ACAPPlaybackController = function () {
	cp.ACAPPlaybackController.baseConstructor.call(this);
	this.ResetReportingOptions()
};
cp.inherits(cp.ACAPPlaybackController, cp.PlaybackController);
cp.ACAPPlaybackController.prototype.ResetReportingOptions = function () {
	this.m_sendCourseDataWithInteractionData = !0;
	this.m_completionValueToSend = "default";
	this.m_completionTrigger = cp.ReportingOptionsEnum.completion_success;
	this.m_slideViewsForSuccess = window.cpAPIInterface.slideViewsForSuccess;
	this.m_slideViewsForCompletion = window.cpAPIInterface.slideViewsForCompletion;
	this.m_completionCriteria = window.cpAPIInterface.completionCriteria;
	this.m_successCriteria = window.cpAPIInterface.successCriteria;
	this.m_successQuizCriteria =
		window.cpAPIInterface.quizCriteriaForSuccess;
	this.m_completionQuizCriteria = window.cpAPIInterface.quizCriteriaForCompletion;
	this.m_completionSlideViewsType = window.cpAPIInterface.slideViewsTypeForCompletion;
	this.m_successSlideViewsType = window.cpAPIInterface.slideViewsTypeForSuccess;
	this.m_sendIncompleteToPassedOrFailed = !1;
	this.m_beginSendingSuccessStatus = !0;
	this.m_UseRusticiAdapter = !1;
	this.m_lmsType = "";
	this.m_sendScoreAsPercent = !1;
	this.m_trackingLevel = 0;
	this.m_completionSlideViewPercentage = 100;
	this.m_reportingOption =
		cp.ReportingOptionsEnum.completion_success;
	this.m_courseNode = this.m_courseName = this.m_departmentName = this.m_companyName = this.m_internalServerURL = this.m_emailAddress = "";
	this.m_trackingUrlEncodeVersionAndSession = this.m_isTrackedFlag = !0;
	this.m_trackingCharsToNotUrlEncode = "";
	this.m_isTracked = this.m_loadingResumeData = this.m_trackingIsOn = this.m_CmiExitNormalAfterCompletion = this.m_commitDataOnEverySlide = !0
};
cp.TrackingAdapter = function () {
	this.m_trackingAdapterType = {};
	this.m_trackingDataLoaded_bln = this.m_initialized = !1;
	this.m_escapeAICCvs_bln = this.m_lessonDataTracked_bln = this.m_interactionDataTracked_bln = !0;
	this.m_ignoreEscapeList_str = "";
	this.m_timer_int = this.m_currentAttempt = 0;
	this.m_timer_str = "";
	this.m_score_tot = this.m_score_pass = this.m_score_scaled_cp = this.m_score_max = this.m_score_min = this.m_score_raw = 0;
	this.m_success_status = this.m_time = "";
	this.m_statusType_int = 1;
	this.m_exit = this.m_entry = this.m_credit =
		this.m_student_name = this.m_student_id = this.m_lesson_mode = "";
	this.m_progressMeasure = 0;
	this.m_interaction_ary = [];
	this.m_comments = this.m_comments_from_lms = this.m_launch_data = this.m_vendor_data = this.m_suspend_data = this.m_lesson_data = this.m_lessonLocation = "";
	this.m_lesson_status = void 0;
	this.m_lesson_status_array = [];
	this.m_score_array = [];
	this.m_mastery_score = 0;
	this.m_time_limit_action = this.m_max_time_allowed = "";
	this.m_isRDStandAlone = this.m_isRDPreview = !1;
	this.m_adapterReportingVariables = cp.ReportingVariables.split(",");
	this.verbose = !1
};
cp.TrackingAdapter.prototype = {
	GetInteractionArray: function () {
		return this.m_interaction_ary
	},
	GetCurrentAttempt: function () {
		return this.m_currentAttempt
	},
	SetCurrentAttempt: function (a) {
		this.m_currentAttempt = a
	},
	Initialize: function () {
		this.IsInitialized() || this.SetInitialized("true")
	},
	SetInitialized: function (a) {
		"true" == a ? a = !0 : "false" == a && (a = !1);
		this.m_initialized = a
	},
	IsInitialized: function () {
		return this.m_initialized
	},
	IsInteractionDataTracked: function () {
		return this.m_interactionDataTracked_bln
	},
	IsLessonDataTracked: function () {
		return this.m_lessonDataTracked_bln
	},
	IsTrackingDataLoaded: function () {
		return this.m_trackingDataLoaded_bln
	},
	IsAICCvsEscaped: function () {
		return this.m_escapeAICCvs_bln
	},
	GetTrackingAdapterType: function () {
		return this.m_trackingAdapterType
	},
	SetTrackingAdapterType: function (a, b) {
		this.m_trackingAdapterType.type_int = a;
		this.m_trackingAdapterType.type_str = b
	},
	Flush: function () {},
	Finish: function () {},
	GetInteractionDataTracked: function () {
		return this.m_interactionDataTracked_bln
	},
	GetLessonDataTracked: function () {
		return this.m_lessonDataTracked_bln
	},
	GetEscapeAICCvs: function () {
		return this.m_escapeAICCvs_bln
	},
	GetIgnoreEscapeList: function () {
		return this.m_ignoreEscapeList_str
	},
	SetInteractionDataTracked: function (a) {
		this.m_interactionDataTracked_bln = a
	},
	SetLessonDataTracked: function (a) {
		this.m_lessonDataTracked_bln = a
	},
	SetEscapeAICCvs: function (a) {
		this.m_escapeAICCvs_bln = a
	},
	SetIgnoreEscapeList: function (a) {
		this.m_ignoreEscapeList_str = a
	},
	SetTrackingDataLoaded: function (a) {
		return this.m_trackingDataLoaded_bln = a
	},
	SetTrackingFinished: function () {
		this.SetInitialized(!1);
		this.SetTrackingDataLoaded(!1)
	},
	SetStatusType: function (a) {
		this.m_statusType_int =
			a
	},
	GetStatusType: function () {
		return this.m_statusType_int
	},
	GetScore: function (a) {
		var b = this.GetScoreRaw();
		"" == b && (b = " ");
		if (void 0 == a || !1 == a) "" != this.GetScoreMax() && "" != this.GetScoreMin() && (b = b + "," + this.GetScoreMax() + "," + this.GetScoreMin());
		return b
	},
	GetScoreRaw: function () {
		void 0 == this.m_score_raw && (this.m_score_raw = "");
		return this.m_score_raw
	},
	GetScoreMax: function () {
		if (void 0 == this.m_score_max || "" == this.m_score_max || " " == this.m_score_max) this.m_score_max = "";
		return this.m_score_max
	},
	GetScoreMin: function () {
		if (void 0 ==
			this.m_score_min || "" == this.m_score_min || " " == this.m_score_min) this.m_score_min = "";
		return this.m_score_min
	},
	GetScoreScaled: function () {
		if (void 0 == this.m_score_scaled_cp || "" == this.m_score_scaled_cp || " " == this.m_score_scaled_cp) this.m_score_scaled_cp = 1;
		return this.m_score_scaled_cp
	},
	GetScorePass: function () {
		return this.m_score_pass
	},
	GetScoreTot: function () {
		return this.m_score_tot
	},
	GetTimeInSession: function () {
		return this.m_time
	},
	GetLessonLocation: function () {
		if (void 0 == this.m_lessonLocation || "" == this.m_lessonLocation) this.m_lessonLocation =
			" ";
		return this.m_lessonLocation
	},
	GetLessonStatus: function () {
		void 0 == this.m_lesson_status && (this.m_lesson_status = "incomplete");
		return this.m_lesson_status
	},
	GetSuccessStatus: function () {
		return this.m_success_status
	},
	GetLessonMode: function () {
		return this.m_lesson_mode
	},
	GetStudentID: function () {
		return this.m_student_id
	},
	GetStudentName: function () {
		return this.m_student_name
	},
	GetCredit: function () {
		return this.m_credit
	},
	GetEntry: function () {
		return this.m_entry
	},
	GetProgressMeasure: function () {
		return this.m_progressMeasure
	},
	SetScore: function (a, b, c) {
		void 0 != a && this.SetScoreRaw(a);
		void 0 != b && this.SetScoreMin(b);
		void 0 != c && this.SetScoreMax(c);
		void 0 != c && 0 != c && void 0 != a ? this.SetScoreScaled(a / c) : void 0 != a && this.SetScoreScaled(a / 100)
	},
	ValidateScore: function (a) {
		switch (typeof a) {
			case "null":
				a = void 0;
				break;
			case "string":
				a = Number(a) == a ? Number(a) : void 0;
				break;
			case "number":
				a = isNaN(a) ? void 0 : a;
				break;
			default:
				a = void 0
		}
		void 0 != a ? (a = this.RoundDecimals(a, 2), a = a.toString()) : a = " ";
		return a
	},
	SetScoreRaw: function (a) {
		this.m_score_raw = this.ValidateScore(a)
	},
	SetScoreMax: function (a) {
		this.m_score_max = this.ValidateScore(a)
	},
	SetScoreMin: function (a) {
		this.m_score_min = this.ValidateScore(a)
	},
	SetScoreScaled: function (a) {
		this.m_score_scaled_cp = this.ValidateScore(a)
	},
	SetScorePass: function (a) {
		this.m_score_pass = a
	},
	SetScoreTot: function (a) {
		this.m_score_tot = a
	},
	SetProgressMeasure: function (a) {
		0 > a || 1 < a || (this.m_progressMeasure = a)
	},
	SetTimeInSession: function (a) {
		void 0 == a || "" == a || null == a ? (a = (new Date).getTime() - cp.movie.startTime.getTime(), a = this.FormatTime(Math.floor(a / 1E3))) :
			typeof ("number" == a) && (a = this.FormatTime(a));
		this.timer_str = this.m_time = a
	},
	SetLessonLocation: function (a) {
		this.m_lessonLocation = a
	},
	SetLessonStatus: function (a, b) {
		this.m_lesson_status = !a || "n" == a.substring(0, 1) || "" == a || void 0 == a || " " == a ? "incomplete" : a;
		void 0 != b && (this.m_success_status = b)
	},
	SetStudentID: function (a) {
		this.m_student_id = a
	},
	SetStudentName: function (a) {
		this.m_student_name = a
	},
	SetCredit: function (a) {
		this.m_credit = a
	},
	GetLessonData: function () {
		(void 0 == this.m_lesson_data || !1 == this.IsLessonDataTracked()) &&
			this.SetLessonData("");
		return this.m_lesson_data
	},
	SetLessonMode: function (a) {
		this.m_lesson_mode = a
	},
	SetLessonData: function (a) {
		this.m_lesson_data = a
	},
	GetVendorData: function () {
		return this.m_vendor_data
	},
	SetVendorData: function (a) {
		this.m_vendor_data = a
	},
	GetLessonStatusArray: function () {
		return this.m_lesson_status_array
	},
	GetScoreArray: function () {
		return this.m_score_array
	},
	GetMasteryScore: function () {
		return this.m_mastery_score
	},
	GetMaxTimeAllowed: function () {
		return this.m_max_time_allowed
	},
	GetTimeLimitAction: function () {
		return this.m_time_limit_action
	},
	AddToLessonStatusArray: function (a) {
		this.m_lesson_status_array.push(a)
	},
	AddToScoreArray: function (a) {
		this.m_score_array.push(a)
	},
	SetMasteryScore: function (a) {
		this.m_mastery_score = a
	},
	SetMaxTimeAllowed: function (a) {
		this.m_max_time_allowed = a
	},
	SetTimeLimitAction: function (a) {
		this.m_time_limit_action = a
	},
	SetSlideView: function () {},
	SendSlideView: function () {},
	SendSuspendData: function (a) {
		void 0 != a && this.SetLessonData(a)
	},
	SendTrackingData: function (a, b, c, d, e, f, g, i, k, h, l, m, j) {
		void 0 == k && (k = "");
		this.SetTrackingData(a,
			b, c, d, e, f, g, i, k, h);
		if (m) {
			if (a = {
				quizId: cp.D.quizzingData.quizID
			}, cp.movie.playbackController && (b = cp.movie.playbackController.GetQuizController()) && b.GetIsPassed()) "passed" == this.GetSuccessStatus() ? (cp.em.fireEvent("PASSED", a), cp.em.fireEvent("COMPLETED")) : j && cp.em.fireEvent("FAILED", a)
		} else "completed" == this.GetLessonStatus() && (cp.em.fireEvent("COMPLETED"), this.GetSuccessStatus() && (a = {
				quizId: cp.D.quizzingData.quizID
			}, "passed" == this.GetSuccessStatus() ? cp.em.fireEvent("PASSED", a) : "failed" == this.GetSuccessStatus() &&
			cp.em.fireEvent("FAILED", a)));
		this.IsLessonDataTracked() && (j = cp.createAndGetDataChunk(), cp.fireResumeDataEvent(j))
	},
	SetTrackingData: function (a, b, c, d, e, f, g, i, k, h) {
		!0 == d ? void 0 != a && void 0 != c && !isNaN(Math.round(100 * (a / c))) && 0 != c ? this.SetScore(Math.round(100 * (100 * a / c)) / 100) : this.SetScore(Math.round(100 * a) / 100) : void 0 != a && void 0 != b && void 0 != c ? this.SetScore(a, b, c) : void 0 != a && void 0 != c ? this.SetScore(a, 0, c) : void 0 != a && this.SetScore(a);
		void 0 != e && this.SetLessonLocation(e);
		void 0 != i ? !0 == i && void 0 != f ? this.SetLessonStatus(f) :
			void 0 != g && void 0 != f && this.SetLessonStatus(f, g) : void 0 != f ? this.SetLessonStatus(f) : void 0 != g && this.SetLessonStatus(g);
		void 0 != k && this.SetTimeInSession(k);
		void 0 != h && this.SetLessonData(h)
	},
	GetTrackingData: function () {
		this.IsTrackingDataLoaded() || this.SetTrackingDataLoaded(!0)
	},
	GetTrackingDataCore: function () {
		this.IsTrackingDataLoaded() || this.SetTrackingDataLoaded(!0)
	},
	SetInteractionData: function (a, b, c, d, e, f, g, i, k, h, l) {
		this.m_interaction_ary || (this.m_interaction_ary = []);
		var m = this.m_interaction_ary.length;
		this.m_interaction_ary[m] = [];
		this.m_interaction_ary[m].interactionID_str = a;
		this.m_interaction_ary[m].objectiveID_str = b;
		this.m_interaction_ary[m].type_str = c;
		this.m_interaction_ary[m].correctResponse_str = d;
		this.m_interaction_ary[m].studentResponse_str = e;
		this.m_interaction_ary[m].result_bln = f;
		this.m_interaction_ary[m].weight_int = g;
		this.m_interaction_ary[m].description_texts = l;
		void 0 == i || "" == i || "0" == i ? i = this.FormatTime(0) : "number" == typeof i && (i = this.FormatTime(i));
		this.m_interaction_ary[m].latency_str =
			i;
		if (void 0 == k || "" == k) k = this.FormatDate();
		this.m_interaction_ary[m].date_str = k;
		void 0 == h || "" == h ? h = this.FormatTime(0) : "number" == typeof h && (h = this.FormatTime(h));
		this.m_interaction_ary[m].time_str = h
	},
	SendInteractionData: function (a, b, c, d, e, f, g, i, k, h, l, m, j) {
		void 0 != a && "" != a && this.SetInteractionData(a, b, c, d, e, f, g, i, k, h, l, m, j)
	},
	ClearPendingCalls: function () {},
	RoundDecimals: function (a, b) {
		b = !b && 0 != b ? 2 : b;
		return Math.round(a * Math.pow(10, b)) / Math.pow(10, b)
	},
	FormatNum: function (a, b) {
		var c = "",
			d = 0,
			e = "'" + a + "'";
		if (!(e.length >
			b))
			for (d = 1; d <= b - e.length; d++) c += "0";
		return c + a
	},
	FormatTime: function (a, b, c) {
		var d;
		d = b = "00";
		c = this.FormatNum(Math.floor(a), 2);
		59 < c && (b = Math.floor(c / 60), c -= 60 * b, b = this.FormatNum(b, 2), c = this.FormatNum(c, 2));
		59 < b && (d = Math.floor(b / 60), b -= 60 * d, d = this.FormatNum(d, 2), b = this.FormatNum(b, 2));
		return d + ":" + b + ":" + c
	},
	FormatDate: function (a, b, c, d) {
		void 0 == a ? (c = new Date, a = this.FormatNum(c.getMonth() + 1, 2), b = this.FormatNum(c.getDate(), 2), c = c.getFullYear()) : "string" == typeof a && -1 < a.indexOf("/") && (c = a.split("/"), a = this.FormatNum(c[0],
			2), b = this.FormatNum(c[1], 2), c = this.FormatNum(c[2], 4));
		return 1 == d ? c + "/" + a + "/" + b : a + "/" + b + "/" + c
	},
	SetAdapterSpecificData: function () {}
};
cp.SCORM_Rustici = function (a) {
	cp.SCORM_Rustici.baseConstructor.call(this);
	this.m_cmiEntryValue = this.m_cmiExitValue = "";
	this.verbose = this.m_ExitNormal = !1;
	this.m_isScorm = a
};
cp.inherits(cp.SCORM_Rustici, cp.TrackingAdapter);
cp.SCORM_Rustici.prototype.SetAdapterSpecificData = function (a) {
	this.SetExitNormal(a.exitNormal);
	this.SetReportingOption(a.reportingOption)
};
cp.SCORM_Rustici.prototype.SetExitNormal = function (a) {
	this.m_ExitNormal = a
};
cp.SCORM_Rustici.prototype.GetExitNormal = function () {
	return this.m_ExitNormal
};
cp.SCORM_Rustici.prototype.SetReportingOption = function (a) {
	this.m_ReportingOption = a
};
cp.SCORM_Rustici.prototype.GetReportingOption = function () {
	switch (this.m_reportingOption) {
		case 5:
			return "completion_success";
		case 7:
			return "completion_only";
		case 6:
			return "incompleteToPassedOrFailed";
		case 0:
			return "breeze";
		default:
			return ""
	}
};
cp.SCORM_Rustici.prototype.Initialize = function () {
	if (!this.IsInitialized()) {
		if ((!cp.LMSDriverHolder || !cp.LMSDriverHolder.IsLoaded()) && !cp.IsRunningInACAP) return;
		this.SetInitialized(cp.startBlnStr)
	}
	this.m_isScorm && !cp.IsRunningInACAP && ("incompleteToPassedOrFailed" == this.GetReportingOption() ? this.m_ExitNormal ? (cp.LMSDriverHolder.EXIT_SUSPEND_IF_COMPLETED = !1, cp.LMSDriverHolder.EXIT_NORMAL_IF_PASSED = !0) : (cp.LMSDriverHolder.EXIT_SUSPEND_IF_COMPLETED = !1, cp.LMSDriverHolder.EXIT_NORMAL_IF_PASSED = !1) : (cp.LMSDriverHolder.EXIT_SUSPEND_IF_COMPLETED =
		this.m_ExitNormal ? !1 : !0, cp.LMSDriverHolder.EXIT_NORMAL_IF_PASSED = !1));
	return this.IsInitialized()
};
cp.SCORM_Rustici.prototype.GetTrackingData = function () {
	this.IsTrackingDataLoaded() || (this.GetTrackingDataCore(), cp.LMSDriverHolder && cp.LMSDriverHolder.GetLaunchData(this.GetVendorData()))
};
cp.SCORM_Rustici.prototype.GetTrackingDataCore = function () {
	this.verbose && cp.log("cp.SCORM_Rustici :: function getTrackingDataCore ");
	void 0 != cp.LMSDriverHolder && (this.m_cmiEntryValue = cp.LMSDriverHolder.GetEntryMode(), this.SetLessonData(cp.LMSDriverHolder.GetDataChunk()), this.SetLessonLocation(cp.LMSDriverHolder.GetBookMark()))
};
cp.SCORM_Rustici.prototype.SetTrackingData = function (a, b, c, d, e, f, g, i, k, h, l, m) {
	this.verbose && cp.log("function setTrackingData ");
	!0 == d ? void 0 != a && void 0 != c && !isNaN(Math.round(100 * (a / c))) && 0 != c ? this.SetScore(Math.round(100 * (100 * a / c)) / 100, 0, 100) : this.SetScore(Math.round(100 * a) / 100) : void 0 != a && void 0 != b && void 0 != c ? this.SetScore(a, b, c) : void 0 != a && void 0 != c ? this.SetScore(a, 0, c) : void 0 != a ? this.SetScore(a) : this.SetScore();
	void 0 != l && this.SetProgressMeasure(l);
	void 0 != e && this.SetLessonLocation(e);
	m ? this.SetLessonStatus(f,
		g) : void 0 != i && !0 == i ? this.SetLessonStatus(f) : this.SetLessonStatus(f, g);
	this.SetTimeInSession(k);
	void 0 != h && this.SetLessonData(h)
};
cp.SCORM_Rustici.prototype.SendSuspendData = function (a) {
	void 0 != a && this.SetLessonData(a);
	if (this.IsLessonDataTracked() && (a = cp.createAndGetDataChunk(), "" != a)) {
		var b = [];
		b.push(a);
		this.SCORMbuild("SetDataChunk", b)
	}
};
cp.SCORM_Rustici.prototype.SendTrackingData = function (a, b, c, d, e, f, g, i, k, h, l, m, j) {
	this.verbose && cp.log("function sendTrackingData ");
	this.SetTrackingData(a, b, c, d, e, f, g, i, k, h, l, m);
	m ? (a = {
		quizId: cp.D.quizzingData.quizID
	}, "passed" == this.GetSuccessStatus() ? (cp.em.fireEvent("PASSED", a), cp.em.fireEvent("COMPLETED"), j = [], j.push(""), this.SCORMbuild("SetPassed", j)) : j && (cp.em.fireEvent("FAILED", a), j = [], j.push(""), this.SCORMbuild("SetFailed", j))) : "completed" == this.GetLessonStatus() && (j = [], j.push(""), this.SCORMbuild("SetReachedEnd",
		j), cp.em.fireEvent("COMPLETED"), this.GetSuccessStatus() && (a = {
		quizId: cp.D.quizzingData.quizID
	}, "passed" == this.GetSuccessStatus() ? (j = [], j.push(""), this.SCORMbuild("SetPassed", j), cp.em.fireEvent("PASSED", a)) : "failed" == this.GetSuccessStatus() && (j = [], j.push(""), this.SCORMbuild("SetFailed", j), cp.em.fireEvent("FAILED", a))));
	j = [];
	j.push(this.GetScoreRaw());
	j.push(this.GetScoreMax());
	j.push(this.GetScoreMin());
	this.SCORMbuild("SetPointBasedScore", j);
	j = [];
	j.push(this.GetLessonLocation());
	this.SCORMbuild("SetBookmark",
		j);
	this.IsLessonDataTracked() && (a = cp.createAndGetDataChunk(), "" != a && (this.verbose && cp.log("Calling SCORM_Rustici::SendTrackingData::SetDataChunk"), j = [], j.push(a), this.SCORMbuild("SetDataChunk", j), cp.fireResumeDataEvent(a)))
};
cp.SCORM_Rustici.prototype.SetLessonLocation = function (a) {
	var b = cpInfoCurrentSlideLabel;
	this.m_lessonLocation = "" != b ? escape(b) : "Slide_" + (parseInt(a) + 1)
};
cp.SCORM_Rustici.prototype.Flush = function () {
	this.verbose && cp.log("function flush ");
	var a = [];
	a.push("");
	cp.movie.playbackController.m_commitDataOnEverySlide || this.SCORMbuild("CommitData", a)
};
cp.SCORM_Rustici.prototype.SetFinishedBln = function (a) {
	var b = typeof a;
	"boolean" != b && ("string" == b ? "true" == a.toLowerCase() ? a = !0 : "false" == a.toLowerCase() && (a = !1) : a = !1);
	this.SetInitialized(!a)
};
cp.SCORM_Rustici.prototype.Finish = function () {
	var a = [];
	a.push("");
	cp.movie.playbackController.m_commitDataOnEverySlide || this.SCORMbuild("CommitData", a);
	this.SetFinishedBln(cp.LMSDriverHolder.Finish())
};
cp.SCORM_Rustici.prototype.SetTrackingComplete = function () {
	this.Finish()
};
cp.SCORM_Rustici.prototype.AICCTokenToSCORMToken = function (a, b) {
	for (var c = a.split(","), d = b.substr(0, 1).toLowerCase(), e = 0; e < c.length; e++)
		if (d == c[e].substr(0, 1)) return c[e];
	return b
};
cp.SCORM_Rustici.prototype.NormalizeStatus = function (a) {
	return this.AICCTokenToSCORMToken("completed,incomplete,not attempted,failed,passed", a)
};
cp.SCORM_Rustici.prototype.NormalizeInteractionType = function (a) {
	a = "long-fill-in" == a.toLowerCase() ? "long-fill-in" : this.AICCTokenToSCORMToken("true-false,choice,fill-in,matching,performance,sequencing,likert,numeric", a);
	if ("" == a || void 0 == a) a = "other";
	return a
};
cp.SCORM_Rustici.prototype.NormalizeInteractionResult = function (a) {
	a = this.AICCTokenToSCORMToken("correct,wrong,unanticipated,neutral", a);
	return "wrong" == a ? "incorrect" : a
};
cp.SCORM_Rustici.prototype.NormalizeRespose = function (a) {
	return this.AICCTokenToSCORMToken("true,false", a)
};
cp.SCORM_Rustici.prototype.FormatTimestamp = function (a) {
	return this.FormatDate() + "T" + this.FormatTime(a, void 0, void 0, 2)
};
cp.SCORM_Rustici.prototype.SetInteractionData = function (a, b, c, d, e, f, g, i, k, h, l, m, j) {
	this.verbose && cp.log("function setInteractionData ");
	this.m_interaction_ary || (this.m_interaction_ary = []);
	d = this.m_interaction_ary.length;
	this.m_interaction_ary[d] = [];
	this.m_interaction_ary[d].interactionID_str = a;
	this.m_interaction_ary[d].objectiveID_str = b;
	this.m_interaction_ary[d].type_str = this.NormalizeInteractionType(c);
	this.m_interaction_ary[d].correctResponse_str = correct_responseIdentifierArr;
	this.m_interaction_ary[d].studentResponse_str =
		user_responseIdentifierArr;
	this.m_interaction_ary[d].result_str = this.NormalizeInteractionResult(f);
	this.m_interaction_ary[d].weight_int = g;
	this.m_interaction_ary[d].latency_str = parseFloat(i);
	this.m_interaction_ary[d].description_texts = j;
	k = void 0 == k || "" == k ? this.FormatDate() : this.FormatDate(k);
	this.m_interaction_ary[d].date_str = k;
	h = void 0 == h || "" == h ? this.FormatTimestamp(0) : this.FormatTimestamp(h);
	this.m_interaction_ary[d].time_str = h
};
cp.SCORM_Rustici.prototype.SendInteractionData = function (a, b, c, d, e, f, g, i, k, h, l, m, j) {
	this.verbose && cp.log("Rustici SCORM:: SendInteractionData ");
	if (!(void 0 == cp.LMSDriverHolder || cp.IsRunningInACAP) && this.IsInteractionDataTracked()) {
		if (void 0 != a && "" != a) {
			user_responseIdentifierArr = [];
			correct_responseIdentifierArr = [];
			var n = [],
				o = [];
			0 < e.length && (-1 != e.indexOf(";") ? n = e.split(";") : n.push(e));
			0 < d.length && (-1 != d.indexOf(";") ? o = d.split(";") : o.push(d));
			this.SetInteractionData(a, b, c, d, e, f, g, i, k, h, l, m, j)
		}
		c = j.questionText;
		f = this.m_interaction_ary.length - 1;
		switch (this.m_interaction_ary[f].type_str) {
			case "choice":
			case "hotspot":
			case "widget":
				e = j.answerTexts.answerTextMap;
				k = "hotspot" == this.m_interaction_ary[f].type_str;
				for (j = 0; j < n.length; ++j) d = k ? n[j] : e ? e[n[j]] : n[j], user_responseIdentifierArr.push(cp.LMSDriverHolder.CreateResponseIdentifier(n[j], d));
				for (n = 0; n < o.length; ++n) d = k ? o[n] : e ? e[o[n]] : o[n], correct_responseIdentifierArr.push(cp.LMSDriverHolder.CreateResponseIdentifier(o[n], d));
				h = [];
				h.push(a);
				h.push(user_responseIdentifierArr);
				h.push(cp.ConvertToInteractionResultConstant(this.m_interaction_ary[f].result_str));
				h.push(correct_responseIdentifierArr);
				h.push(c);
				h.push(g);
				h.push(i);
				h.push(b);
				this.SCORMbuild("RecordMultipleChoiceInteraction", h);
				break;
			case "true-false":
				h = [];
				h.push(a);
				h.push(Boolean(e));
				h.push(cp.ConvertToInteractionResultConstant(this.m_interaction_ary[f].result_str));
				h.push(Boolean(d));
				h.push(c);
				h.push(g);
				h.push(i);
				h.push(b);
				h.push(k);
				this.SCORMbuild("RecordTrueFalseInteraction", h);
				break;
			case "fill-in":
			case "long-fill-in":
				h = [];
				h.push(a);
				h.push(e);
				h.push(cp.ConvertToInteractionResultConstant(this.m_interaction_ary[f].result_str));
				h.push(d);
				h.push(c);
				h.push(g);
				h.push(i);
				h.push(b);
				h.push(k);
				this.SCORMbuild("RecordFillInInteraction", h);
				break;
			case "matching":
				k = j.answerTexts.left;
				j = j.answerTexts.right;
				o = [];
				n = [];
				d = d.split(",");
				for (h = h = 0; h < d.length; ++h) {
					var l = d[h],
						m = l.split("."),
						l = m[0],
						m = m[1],
						p = k[l],
						q = j[m];
					if (void 0 == p || "" == p) p = l;
					if (void 0 == q || "" == q) q = m;
					l = cp.LMSDriverHolder.CreateResponseIdentifier(l, p);
					m = cp.LMSDriverHolder.CreateResponseIdentifier(m,
						q);
					o.push(new cp.LMSDriverHolder.MatchingResponse(l, m))
				}
				d = e.split(",");
				for (h = 0; h < d.length; ++h) {
					l = d[h];
					m = l.split(".");
					l = m[0];
					m = m[1];
					p = k[l];
					q = j[m];
					if (void 0 == p || "" == p) p = l;
					if (void 0 == q || "" == q) q = m;
					l = cp.LMSDriverHolder.CreateResponseIdentifier(l, p);
					m = cp.LMSDriverHolder.CreateResponseIdentifier(m, q);
					n.push(new cp.LMSDriverHolder.MatchingResponse(l, m))
				}
				e = cp.ConvertToInteractionResultConstant(this.m_interaction_ary[f].result_str);
				h = [];
				h.push(a);
				h.push(n);
				h.push(e);
				h.push(o);
				h.push(c);
				h.push(g);
				h.push(i);
				h.push(b);
				this.SCORMbuild("RecordMatchingInteraction", h);
				break;
			case "sequencing":
				h = [];
				h.push(a);
				h.push(cp.LMSDriverHolder.CreateResponseIdentifier(e.substring(0, 1), j.answerTexts.learner_response));
				h.push(cp.ConvertToInteractionResultConstant(this.m_interaction_ary[f].result_str));
				h.push(cp.LMSDriverHolder.CreateResponseIdentifier(d.substring(0, 1), j.answerTexts.correct_response));
				h.push(c);
				h.push(g);
				h.push(i);
				h.push(b);
				this.SCORMbuild("RecordSequencingInteraction", h);
				break;
			case "likert":
				cp.ConvertToInteractionResultConstant(this.m_interaction_ary[f].result_str),
				h = [], h.push(a), h.push(cp.LMSDriverHolder.CreateResponseIdentifier(e.substring(0, 1), e)), h.push("true"), h.push(null), h.push(c), h.push(g), h.push(i), h.push(b), this.SCORMbuild("RecordLikertInteraction", h)
		}
		this.m_interaction_ary = []
	}
};
cp.SCORM_Rustici.prototype.ClearPendingCalls = function () {
	if (!(void 0 == cp.LMSDriverHolder || cp.IsRunningInACAP) && this.AICCQueue && !(0 >= this.AICCQueue.length)) {
		this.AICCLMSCallTimer = void 0;
		clearInterval(this.AICCLMSCallTimer);
		for (var a = this.AICCQueue.length, b = 0; b < a; ++b) {
			var c = this.AICCQueue.shift();
			this.ProcessLMSCalls(c.function_str, c.argsArr)
		}
	}
};
cp.SCORM_Rustici.prototype.SCORMbuild = function (a, b) {
	void 0 == cp.LMSDriverHolder || cp.IsRunningInACAP || (cp.movie.playbackController.LMSIsAICC() ? this.AddToQueue(a, b) : this.ProcessLMSCalls(a, b))
};
cp.SCORM_Rustici.prototype.ProcessLMSCalls = function (a, b) {
	var c = "cp.LMSDriverHolder." + a + "(" + function () {
			var a = "";
			if (0 < b.length)
				for (var a = "string" == typeof b[0] ? "'" + b[0] + "'" : b[0], c = 1; c < b.length; ++c) a += ",", a = "string" == typeof b[c] ? a + ("'" + b[c] + "'") : a + b[c];
			return a
		}() + ")";
	cp.verbose && cp.log(c);
	try {
		switch (a) {
			case "RecordMultipleChoiceInteraction":
				cp.LMSDriverHolder.RecordMultipleChoiceInteraction(b[0], b[1], b[2], b[3], b[4], b[5], b[6], b[7]);
				break;
			case "RecordTrueFalseInteraction":
				cp.LMSDriverHolder.RecordTrueFalseInteraction(b[0],
					b[1], b[2], b[3], b[4], b[5], b[6], b[7], b[8]);
				break;
			case "RecordSequencingInteraction":
				cp.LMSDriverHolder.RecordSequencingInteraction(b[0], b[1], b[2], b[3], b[4], b[5], b[6], b[7]);
				break;
			case "RecordFillInInteraction":
				cp.LMSDriverHolder.RecordFillInInteraction(b[0], b[1], b[2], b[3], b[4], b[5], b[6], b[7]);
				break;
			case "RecordMatchingInteraction":
				cp.LMSDriverHolder.RecordMatchingInteraction(b[0], b[1], b[2], b[3], b[4], b[5], b[6], b[7]);
				break;
			case "RecordLikertInteraction":
				cp.LMSDriverHolder.RecordLikertInteraction(b[0],
					b[1], b[2], b[3], b[4], b[5], b[6], b[7]);
				break;
			default:
				eval(c)
		}
	} catch (d) {
		console.log(d)
	}
};
cp.SCORM_Rustici.prototype.AddToQueue = function (a, b) {
	this.AICCQueue || (this.AICCQueue = []);
	var c = {};
	c.function_str = a;
	c.argsArr = b;
	this.AICCQueue.push(c);
	var d = this;
	this.AICCLMSCallTimer || (this.AICCLMSCallTimer = setInterval(function () {
		if (d.AICCQueue.length <= 0) {
			clearInterval(d.AICCLMSCallTimer);
			d.AICCLMSCallTimer = void 0
		} else {
			var a = d.AICCQueue.shift();
			d.ProcessLMSCalls(a.function_str, a.argsArr)
		}
	}, 100))
};
cp.InternalServerAdapter = function () {
	cp.InternalServerAdapter.baseConstructor.call(this);
	this.m_cmiEntryValue = this.m_cmiExitValue = "";
	this.verbose = this.m_ExitNormal = !1;
	this.m_StudentID = this.m_StudentName = "";
	this.m_resultsAlreadyPosted = !1;
	var a = cp.D.quizReportingData;
	this.m_strings = {};
	this.m_strings.ISRUnknownErrorStr = a.ISRUnknownErrorStr;
	this.m_strings.ISRNoConnectionErrorStr = a.ISRNoConnectionErrorStr;
	this.m_strings.ISRWrongURLErrorStr = a.ISRWrongURLErrorStr;
	this.m_strings.ISRLoginErrorStr = a.ISRLoginErrorStr;
	this.m_strings.ISRConnectingStr = a.ISRConnectingStr;
	this.m_strings.ISRResultPostedStr = a.ISRResultPostedStr;
	this.m_strings.ISRPostResultStr = a.ISRPostResultStr;
	this.m_strings.ISRResultCalculatedStr = a.ISRResultCalculatedStr;
	this.m_strings.ISREnterNameStr = a.ISREnterNameStr;
	this.m_strings.ISREmailIDStr = a.ISREmailIDStr;
	this.m_strings.ISRSendStr = a.ISRSendStr;
	this.m_strings.ISRStatusStr = a.ISRStatusStr;
	this.m_strings.ISRErrorStr = a.ISRErrorStr;
	this.m_strings.ISROkStr = a.ISROkStr
};
cp.inherits(cp.InternalServerAdapter, cp.TrackingAdapter);
cp.InternalServerAdapter.prototype.SetAdapterSpecificData = function (a) {
	this.SetExitNormal(a.exitNormal);
	this.SetReportingOption(a.reportingOption)
};
cp.InternalServerAdapter.prototype.SetExitNormal = function (a) {
	this.m_ExitNormal = a
};
cp.InternalServerAdapter.prototype.GetExitNormal = function () {
	return this.m_ExitNormal
};
cp.InternalServerAdapter.prototype.SetReportingOption = function (a) {
	this.m_ReportingOption = a
};
cp.InternalServerAdapter.prototype.GetReportingOption = function () {
	switch (this.m_reportingOption) {
		case 5:
			return "completion_success";
		case 7:
			return "completion_only";
		case 6:
			return "incompleteToPassedOrFailed";
		case 0:
			return "breeze";
		default:
			return ""
	}
};
cp.InternalServerAdapter.prototype.Initialize = function () {
	this.IsInitialized() || this.SetInitialized(!0);
	return this.IsInitialized()
};
cp.InternalServerAdapter.prototype.GetTrackingData = function () {
	this.IsTrackingDataLoaded() || this.SetTrackingDataLoaded(!0)
};
cp.InternalServerAdapter.prototype.GetTrackingDataCore = function () {
	this.GetTrackingData()
};
cp.InternalServerAdapter.prototype.SetTrackingData = function (a, b, c, d, e, f, g, i, k, h, l, m, j) {
	this.verbose && cp.log("function setTrackingData ");
	!0 == d ? void 0 != a && void 0 != c && !isNaN(Math.round(100 * (a / c))) && 0 != c ? this.SetScore(Math.round(100 * (100 * a / c)) / 100, 0, 100) : this.SetScore(Math.round(100 * a) / 100) : void 0 != a && void 0 != b && void 0 != c ? this.SetScore(a, b, c) : void 0 != a && void 0 != c ? this.SetScore(a, 0, c) : void 0 != a ? this.SetScore(a) : this.SetScore();
	void 0 != l && this.SetProgressMeasure(l);
	void 0 != e && this.SetLessonLocation(e);
	m ? "passed" == g ? this.SetLessonStatus(g) : j ? this.SetLessonStatus(g) : this.SetLessonStatus(f) : this.SetLessonStatus(f);
	this.SetTimeInSession(k);
	void 0 != h && this.SetLessonData(h)
};
cp.InternalServerAdapter.prototype.SendTrackingData = function (a, b, c, d, e, f, g, i, k, h, l, m, j) {
	this.verbose && cp.log("function sendTrackingData ");
	this.m_sendScoreAsPercent = d;
	this.SetTrackingData(a, b, c, d, e, f, g, i, k, h, l, m, j);
	this.dataModified_bln = !0
};
cp.InternalServerAdapter.prototype.Flush = function () {
	this.PostQuizResults()
};
cp.InternalServerAdapter.prototype.Finish = function () {
	this.IsInitialized();
	this.SetInitialized(!1)
};
cp.InternalServerAdapter.prototype.SetTrackingComplete = function () {
	this.Finish()
};
cp.InternalServerAdapter.prototype.SetInteractionData = function (a, b, c, d, e, f, g, i, k, h, l, m, j) {
	this.verbose && cp.log("function setInteractionData ");
	this.m_interaction_ary || (this.m_interaction_ary = []);
	l = this.m_interaction_ary.length;
	this.m_interaction_ary[l] = [];
	"likert" == c && (d = " ", a = a.split(" ").join("_"));
	this.m_interaction_ary[l].interactionID_str = a;
	this.m_interaction_ary[l].objectiveID_str = b;
	"hotspot" == c && (c = "choice");
	this.m_interaction_ary[l].type_str = c;
	"sequencing" == c && (d = j.answerTexts.correct_response,
		e = j.answerTexts.learner_response);
	this.m_interaction_ary[l].correctResponse_str = d;
	this.m_interaction_ary[l].studentResponse_str = e;
	this.m_interaction_ary[l].result_str = f;
	this.m_interaction_ary[l].weight_int = g;
	i = void 0 == i || "" == i ? this.FormatTime(0) : this.FormatTime(i / 1E3);
	this.m_interaction_ary[l].latency_str = i;
	this.m_interaction_ary[l].description_texts = j;
	k = void 0 == k || "" == k ? this.FormatDate() : this.FormatDate(k);
	this.m_interaction_ary[l].date_str = k;
	h = void 0 == h || "" == h ? this.FormatTime(0) : this.FormatTime(h);
	this.m_interaction_ary[l].time_str = h;
	this.m_interaction_ary[l].currentAttempt = this.GetCurrentAttempt()
};
cp.InternalServerAdapter.prototype.FormatTimestamp = function (a) {
	return this.FormatDate() + "T" + this.FormatTime(a, void 0, void 0, 2)
};
cp.InternalServerAdapter.prototype.SendInteractionData = function (a, b, c, d, e, f, g, i, k, h, l, m, j) {
	this.verbose && cp.log("Rustici SCORM:: SendInteractionData ");
	this.IsInteractionDataTracked() && (void 0 != a && "" != a) && (this.SetInteractionData(a, b, c, d, e, f, g, i, k, h, l, m, j), this.dataModified_bln = !0)
};
cp.InternalServerAdapter.prototype.ShowResultDialog = function (a) {
	this.m_errorDialog = new cp.RuntimeMessageBoxDefault(document.getElementById("div_Slide"), 1);
	this.m_errorDialog.setMessageText(a ? this.m_strings.ISRResultPostedStr : this.m_strings.ISRUnknownErrorStr);
	this.m_errorDialog.setFirstButtonText(this.m_strings.ISROkStr);
	var b = this;
	this.m_errorDialog.registerFirstButtonHandler(function () {
		b.m_errorDialog.hide();
		cpCmndShowPlaybar = !0;
		cpLockTOC = !1
	});
	this.m_errorDialog.show()
};
cp.InternalServerAdapter.prototype.CreateInputDialog = function () {
	this.m_inputDialog = new cp.PostResultsMessageBox(this.m_strings);
	var a = this;
	this.m_inputDialog.registerFirstButtonHandler(function () {
		a.m_inputDialog.hide();
		cpCmndShowPlaybar = !0;
		cpLockTOC = !1
	});
	this.m_inputDialog.registerSecondButtonHandler(function () {
		a.HandleInputDialog();
		cpCmndShowPlaybar = !0;
		cpLockTOC = !1
	})
};
cp.InternalServerAdapter.prototype.HandleInputDialog = function () {
	this.m_StudentName = this.m_inputDialog.getLearnerName();
	this.m_StudentID = this.m_inputDialog.getLearnerID();
	"" == this.m_StudentName && "" == this.m_StudentID || (this.m_inputDialog.hide(), this.SendDataToURL())
};
cp.InternalServerAdapter.prototype.PostQuizResults = function () {
	if (!this.m_resultsAlreadyPosted) {
		cp.log("Post results");
		this.m_resultXML = "<Course>\r\t";
		var a = !1;
		cp.vm && (a = !cp.vm.hasOwnProperty("cpQuizInfoStudentID") || "" == cp.vm.getVariableValue("cpQuizInfoStudentID"));
		a ? (this.CreateInputDialog(), this.m_inputDialog.show()) : (this.m_StudentName = cp.vm.hasOwnProperty("cpQuizInfoStudentName") ? cpQuizInfoStudentName : "", this.m_StudentID = cpQuizInfoStudentID, this.SendDataToURL());
		cpCmndShowPlaybar = !1;
		cpLockTOC = !0;
		this.dataModified_bln = !1
	}
};
cp.InternalServerAdapter.prototype.SendDataToURL = function () {
	if (!this.m_StudentName || "" == this.m_StudentName) this.m_StudentName = this.m_StudentID;
	if (!this.m_StudentID || "" == this.m_StudentID) this.m_StudentID = this.m_StudentName;
	this.m_resultXML += '<CompanyName value="' + cp.movie.playbackController.m_companyName + '"/>\r\t';
	this.m_resultXML += '<DepartmentName value="' + cp.movie.playbackController.m_departmentName + '"/>\r\t';
	this.m_resultXML += '<CourseName value="' + cp.movie.playbackController.m_courseName + '"/>\r\t';
	this.m_resultXML += '<LearnerName value="' + this.m_StudentName + '"/>\r\t';
	this.m_resultXML += '<LearnerID value="' + this.m_StudentID + '"/>\r\t';
	var a = cpInfoProjectName;
	"" == a && (a = cp.D.project.pN);
	this.m_resultXML += '<LessonName value="' + a + '"/>\r\t';
	this.m_resultXML += '<QuizAttempts value="' + cpQuizInfoAttempts + '"/>\r\t';
	this.m_resultXML += '<TotalQuestions value="' + cpQuizInfoTotalQuestionsPerProject + '"/>\r\t';
	0 < this.m_adapterReportingVariables.length && (this.m_resultXML += this.BuildReportingVariablesXML());
	this.m_resultXML +=
		this.BuildResultXML();
	this.m_resultXML += "</Course>";
	this.PostNormalRequest(this.m_resultXML, a + "_" + this.m_StudentName + "_" + cpInfoEpochMS + ".xml")
};
cp.InternalServerAdapter.prototype.PostNormalRequest = function (a, b) {
	var c = new XMLHttpRequest,
		d = cp.movie.playbackController.m_internalServerURL,
		e;
	e = "CompanyName=" + cp.movie.playbackController.m_companyName;
	e += "&DepartmentName=" + cp.movie.playbackController.m_departmentName;
	e += "&CourseName=" + cp.movie.playbackController.m_courseName;
	e = e + ("&Filename=" + b) + ("&Filedata=" + escape(a));
	try {
		c.open("POST", d, !1);
		c.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		var f = this;
		c.onreadystatechange =
			function () {
				4 == c.readyState && 200 == c.status ? (f.m_resultsAlreadyPosted = !0, f.ShowResultDialog(!0)) : f.ShowResultDialog(!1)
		};
		c.send(e)
	} catch (g) {
		this.ShowResultDialog(!1)
	}
};
cp.InternalServerAdapter.prototype.BuildXMLRootNode = function () {
	return escape("")
};
cp.InternalServerAdapter.prototype.BuildReportingVariablesXML = function () {
	for (var a = "<Variables>\r\t", b = this.m_adapterReportingVariables.length, c = 0; c < b; ++c) {
		var d = this.m_adapterReportingVariables[c];
		d && "" != d && (a += "<" + d + ' value="' + m_VarHandle[d] + '"/>\r\t')
	}
	return a + "</Variables>\r\t"
};
cp.InternalServerAdapter.prototype.BuildResultXML = function () {
	var a;
	a = "<Result>\r\t" + this.BuildResultXMLBodyCore();
	a += this.BuildResultXMLBodyInteraction();
	return a + "</Result>\r\t"
};
cp.InternalServerAdapter.prototype.BuildResultXMLBodyCore = function () {
	var a;
	a = "<CoreData>\r\t" + ('<Status value="' + this.GetLessonStatus() + '"/>\r\t');
	a += '<Location value="' + this.GetLessonLocation() + '"/>\r\t';
	this.m_sendScoreAsPercent ? a += '<Score value="' + this.GetScore(this.m_sendScoreAsPercent) + '"/>\r\t' : (a += '<RawScore value="' + this.GetScoreRaw() + '"/>\r\t', a += '<MaxScore value="' + this.GetScoreMax() + '"/>\r\t', a += '<MinScore value="' + this.GetScoreMin() + '"/>\r\t');
	a += '<SessionTime value="' + this.GetTimeInSession() +
		'"/>\r\t';
	return a + "</CoreData>\r\t"
};
cp.InternalServerAdapter.prototype.BuildResultXMLBodyInteraction = function () {
	var a = "<InteractionData>\r\t";
	if (this.IsInteractionDataTracked() && 0 < this.m_interaction_ary.length)
		for (var b = 0; b < this.m_interaction_ary.length; b++) a += this.BuildInteractionsNode(b);
	return a + "</InteractionData>\r\t"
};
cp.InternalServerAdapter.prototype.BuildInteractionsNode = function (a) {
	var b;
	b = "<Interactions>\r\t" + ('<Date value="' + this.m_interaction_ary[a].date_str + '"/>\r\t');
	b += '<InteractionTime value="' + this.m_interaction_ary[a].time_str + '"/>\r\t';
	b += '<InteractionID value="' + this.m_interaction_ary[a].interactionID_str + '"/>\r\t';
	b += '<ObjectiveID value="' + this.m_interaction_ary[a].objectiveID_str + '"/>\r\t';
	b += '<InteractionType value="' + this.m_interaction_ary[a].type_str + '"/>\r\t';
	b += '<CorrectResponse value="' +
		this.m_interaction_ary[a].correctResponse_str + '"/>\r\t';
	b += '<StudentResponse value="' + this.m_interaction_ary[a].studentResponse_str + '"/>\r\t';
	b += '<Result value="' + this.m_interaction_ary[a].result_str + '"/>\r\t';
	b += '<Weight value="' + this.m_interaction_ary[a].weight_int + '"/>\r\t';
	b += '<Latency value="' + this.m_interaction_ary[a].latency_str + '"/>\r\t';
	b += '<Attempt value="' + this.m_interaction_ary[a].currentAttempt + '"/>\r\t';
	return b + "</Interactions>\r\t"
};
cp.AnswerScore = function () {
	this.m_correctAnswer = this.m_chosenAnswer = this.m_answerID = ""
};
cp.ChoiceQuestionSpecificScore = function () {
	this.m_answerOrderArrayAsString = ""
};
cp.ChoiceQuestionSpecificScore.prototype = {
	saveState: function (a) {
		void 0 == this.m_answerOrderArrayAsString || "" == this.m_answerOrderArrayAsString ? a.writeString("") : a.writeString(this.m_answerOrderArrayAsString)
	},
	restoreState: function (a) {
		this.m_answerOrderArrayAsString = a.readString()
	},
	reset: function () {
		this.m_answerOrderArrayAsString = ""
	}
};
cp.HotSpotQuestionSpecificScore = function () {
	this.m_BreakPointWidth = this.m_hotSpotIsCorrect = this.m_hotSpot_ychordsAsString = this.m_hotSpot_xchordsAsString = this.m_hotSpotNamesArrayAsString = ""
};
cp.HotSpotQuestionSpecificScore.prototype = {
	saveState: function (a) {
		void 0 == this.m_hotSpotNamesArrayAsString || "" == this.m_hotSpotNamesArrayAsString ? a.writeString("nil") : a.writeString(this.m_hotSpotNamesArrayAsString);
		void 0 == this.m_hotSpot_xchordsAsString || "" == this.m_hotSpot_xchordsAsString ? a.writeString("nil") : a.writeString(this.m_hotSpot_xchordsAsString);
		void 0 == this.m_hotSpot_ychordsAsString || "" == this.m_hotSpot_ychordsAsString ? a.writeString("nil") : a.writeString(this.m_hotSpot_ychordsAsString);
		cp.responsive &&
			(void 0 == this.m_hotSpotIsCorrect || "" == this.m_hotSpotIsCorrect ? a.writeString("nil") : a.writeString(this.m_hotSpotIsCorrect), a.writeString(this.m_BreakPointWidth))
	},
	restoreState: function (a) {
		this.m_hotSpotNamesArrayAsString = a.readString();
		"nil" == this.m_hotSpotNamesArrayAsString && (this.m_hotSpotNamesArrayAsString = "");
		this.m_hotSpot_xchordsAsString = a.readString();
		"nil" == this.m_hotSpot_xchordsAsString && (this.m_hotSpot_xchordsAsString = "");
		this.m_hotSpot_ychordsAsString = a.readString();
		"nil" == this.m_hotSpot_ychordsAsString &&
			(this.m_hotSpot_ychordsAsString = "");
		cp.responsive && (this.m_hotSpotIsCorrect = a.readString(), "nil" == this.m_hotSpotIsCorrect && (this.m_hotSpotIsCorrect = ""), this.m_BreakPointWidth = a.readString())
	},
	reset: function () {
		this.m_answerOrderArrayAsString = ""
	}
};
cp.QuestionScore = function () {
	this.m_weighting = this.m_interactionID = this.m_objectiveID = this.m_interactionType = this.m_endTime = this.m_startTime = this.m_slideNum = void 0;
	this.m_negativeWeight = 0;
	this.m_answerScores = [];
	this.m_numTries = 0;
	this.m_answersIncomplete = !0;
	this.m_answeredCorrectly = !1;
	this.m_pausedMsecs = 0;
	this.m_questionNumInQuiz = -1;
	this.m_wasJudged = void 0;
	this.m_isKnowledgeCheck = this.m_isPretestQuestion = !1;
	this.m_escapeAnswers = !0;
	this.m_questionSpecificScore = void 0;
	this.m_restoredFromLMS = !1;
	this.m_scoringType =
		this.m_scoredPoints = 0;
	this.m_maxTries = -1;
	this.m_descriptionTexts = this.m_isCorrectAsString = this.m_correctAnswersAsString = this.m_chosenAnswersAsString = "";
	this.m_latencyAsSeconds = 0;
	this.m_curDateAsString = this.m_latencyAsString = "";
	this.m_curTimeAsSecondsSinceMidnight = 0;
	this.m_partiallyCorrect = this.m_isShuffled = !1
};
cp.QuestionScore.prototype = {
	getdescriptionText: function () {
		return this.m_descriptionTexts
	},
	getrestoredFromLMS: function () {
		return this.m_restoredFromLMS
	},
	setrestoredFromLMS: function (a) {
		this.m_restoredFromLMS = a
	},
	getslideNum: function () {
		return this.m_slideNum
	},
	setslideNum: function (a) {
		this.m_slideNum = a
	},
	getstartTime: function () {
		return this.m_startTime
	},
	setstartTime: function (a) {
		this.m_startTime = a
	},
	getendTime: function () {
		return this.m_endTime
	},
	getQuestionScoringType: function () {
		return this.m_scoringType
	},
	setendTime: function (a) {
		this.m_endTime =
			a
	},
	getpausedMsecs: function () {
		return this.m_pausedMsecs
	},
	setpausedMsecs: function (a) {
		this.m_pausedMsecs = a
	},
	getinteractionType: function () {
		return this.m_interactionType
	},
	setinteractionType: function (a) {
		this.m_interactionType = a;
		this.createQuestionSpecificScore()
	},
	getobjectiveID: function () {
		return this.m_objectiveID
	},
	setobjectiveID: function (a) {
		this.m_objectiveID = a
	},
	getquestionNumInQuiz: function () {
		return this.m_questionNumInQuiz
	},
	setquestionNumInQuiz: function (a) {
		this.m_questionNumInQuiz = a
	},
	getlatency: function () {
		return (startTime ?
			this.m_endTime.getTime() - this.m_startTime.getTime() - this.m_pausedMsecs : 0) / 1E3
	},
	getanswerScores: function () {
		return this.m_answerScores
	},
	setanswerScores: function (a) {
		this.m_answerScores = a
	},
	getanswersIncomplete: function () {
		return this.m_answersIncomplete
	},
	setanswersIncomplete: function (a) {
		this.m_answersIncomplete = a
	},
	getescapeAnswers: function () {
		return this.m_escapeAnswers
	},
	setescapeAnswers: function (a) {
		this.m_escapeAnswers = a
	},
	setquestionSpecificScore: function (a) {
		this.m_questionSpecificScore = a
	},
	getquestionSpecificScore: function () {
		return this.m_questionSpecificScore
	},
	answersAsString: function () {},
	getcorrectAnswersAsString: function () {
		return this.answersAsString("correctAnswer", !1)
	},
	getchosenAnswersAsString: function () {
		return this.answersAsString("chosenAnswer", !1)
	},
	getcorrectAnswersForReview: function () {
		return this.answersAsString("correctAnswer", !0)
	},
	getchosenAnswersForReview: function () {
		return this.answersAsString("chosenAnswer", !0)
	},
	getansweredCorrectly: function () {
		return this.m_answeredCorrectly
	},
	setansweredCorrectly: function (a) {
		this.m_answeredCorrectly = a
	},
	getisCorrectAsString: function () {
		return this.m_answeredCorrectly ?
			"C" : "W"
	},
	getnumTries: function () {
		return this.m_numTries
	},
	getmaxTries: function () {
		return this.m_maxTries
	},
	setnumTries: function (a) {
		this.m_numTries = a
	},
	getweighting: function () {
		return this.m_weighting
	},
	setweighting: function (a) {
		this.m_weighting = a
	},
	getnegativeWeight: function () {
		return this.m_negativeWeight
	},
	setnegativeWeight: function (a) {
		this.m_negativeWeight = a
	},
	getscoredPoints: function () {
		return this.m_scoredPoints
	},
	setscoredPoints: function (a) {
		this.m_scoredPoints = a
	},
	addLeadingZero: function (a) {
		return 10 > a ? "0" +
			String(a) : String(a)
	},
	getlatencyAsString: function () {
		return addLeadingZero(Math.round(latency / 3600)) + ":" + addLeadingZero(Math.round(latency % 3600 / 60)) + ":" + addLeadingZero(Math.round(latency) % 60)
	},
	getlatencyAsSeconds: function () {
		return latency
	},
	getcurDateAsString: function () {
		var a = new Date;
		return addLeadingZero(a.getMonth() + 1) + "/" + addLeadingZero(a.getDate()) + "/" + a.getFullYear()
	},
	getcurDateAsString2: function () {
		var a = new Date;
		return a.getFullYear() + "/" + addLeadingZero(a.getMonth() + 1) + "/" + addLeadingZero(a.getDate())
	},
	getcurTimeAsString: function () {
		var a = new Date;
		return addLeadingZero(a.getHours()) + ":" + addLeadingZero(a.getMinutes()) + ":" + addLeadingZero(a.getSeconds())
	},
	getcurTimeAsSecondsSinceMidnight: function () {
		return 3600 * (void 0).getHours() + 60 * (void 0).getMinutes() + (void 0).getSeconds()
	},
	getscore: function () {
		return this.m_wasJudged ? this.m_scoredPoints : 0
	},
	getwasJudged: function () {
		return this.m_wasJudged
	},
	setwasJudged: function (a) {
		this.m_wasJudged = a
	},
	getisPretestQuestion: function () {
		return this.m_isPretestQuestion
	},
	setisPretestQuestion: function (a) {
		this.m_isPretestQuestion = a
	},
	getisKnowledgeCheck: function () {
		return this.m_isKnowledgeCheck
	},
	setisKnowledgeCheck: function (a) {
		this.m_isKnowledgeCheck = a
	},
	saveState: function (a) {
		a.writeNumber(this.m_slideNum);
		a.writeNumber(this.m_questionNumInQuiz);
		void 0 != this.m_startTime && 0 != this.m_startTime ? a.writeNumber(this.m_startTime.getTime()) : a.writeNumber(0);
		void 0 != this.m_endTime && 0 != this.m_endTime ? a.writeNumber(this.m_endTime.getTime()) : a.writeNumber(0);
		a.writeBoolean(this.m_wasJudged);
		a.writeBoolean(this.m_partiallyCorrect);
		a.writeBoolean(this.m_answeredCorrectly);
		a.writeBoolean(this.m_answersIncomplete);
		a.writeNumber(this.m_numTries);
		a.writeBoolean(this.m_isShuffled);
		var b = !1,
			c = this.m_scoredPoints;
		0 > c && (b = !0, c = -c);
		a.writeBoolean(b);
		a.writeNumber(c);
		a.writeNumber(this.m_answerScores.length);
		b = 0;
		switch (this.m_interactionType) {
			case "choice":
				b = 0;
				break;
			case "true-false":
				b = 1;
				break;
			case "fill-in":
				b = 2;
				break;
			case "matching":
				b = 4;
				break;
			case "sequencing":
				b = 5;
				break;
			case "hotspot":
				b = 6;
				break;
			case "likert":
				b = 7;
				break;
			case "widget":
				b = 8
		}
		a.writeNumber(b);
		this.m_questionSpecificScore && this.m_questionSpecificScore.saveState(a);
		for (b = 0; b < this.m_answerScores.length; b++) a.writeString(this.m_answerScores[b].m_answerID), a.writeString(this.m_answerScores[b].m_chosenAnswer), a.writeString(this.m_answerScores[b].m_correctAnswer)
	},
	restoreState: function (a) {
		if (a) {
			this.m_slideNum = a.readNumber();
			this.m_questionNumInQuiz = a.readNumber();
			if (void 0 == this.m_startTime || 0 == this.m_startTime) this.m_startTime = new Date;
			this.m_startTime.setTime(a.readNumber());
			if (void 0 == this.m_endTime || 0 == this.m_endTime) this.m_endTime = new Date;
			this.m_endTime.setTime(a.readNumber());
			this.m_wasJudged = a.readBoolean();
			this.m_partiallyCorrect = a.readBoolean();
			this.m_answeredCorrectly = a.readBoolean();
			this.m_answersIncomplete = a.readBoolean();
			this.m_numTries = a.readNumber();
			this.m_isShuffled = a.readBoolean();
			var b = a.readBoolean();
			this.m_scoredPoints = a.readNumber();
			b && (this.m_scoredPoints = -this.m_scoredPoints);
			var b = a.readNumber(),
				c = "choice";
			switch (a.readNumber()) {
				case 0:
					c = "choice";
					break;
				case 1:
					c = "true-false";
					break;
				case 2:
					c = "fill-in";
					break;
				case 5:
					c = "sequencing";
					break;
				case 6:
					c = "hotspot";
					break;
				case 7:
					c = "likert";
					break;
				case 8:
					c = "widget"
			}
			this.setinteractionType(c);
			this.m_questionSpecificScore && this.m_questionSpecificScore.restoreState(a);
			for (c = 0; c < b; ++c) {
				var d = new cp.AnswerScore;
				d.m_answerID = a.readString();
				d.m_chosenAnswer = a.readString();
				d.m_correctAnswer = a.readString();
				this.m_answerScores.push(d)
			}
			this.restoreQuestionProperties()
		}
	},
	restoreQuestionProperties: function () {
		if (cp.movie.questionObjs && !(0 > this.m_questionNumInQuiz || this.m_questionNumInQuiz >= cp.movie.questionObjs.length)) {
			var a = cp.movie.questionObjs[this.m_questionNumInQuiz];
			a && (a.questionNumberInQuiz = this.m_questionNumInQuiz, a.startTime = this.m_startTime, a.endTime = this.m_endTime, a.wasJudged = this.m_wasJudged, a.currentAttempt = this.m_numTries, a.setScore(this.m_scoredPoints), a.m_isShuffled = this.m_isShuffled, a.m_QuestionStatus = this.m_partiallyCorrect ? a.QuestionStatusEnum.PARTIAL_CORRECT : this.m_answersIncomplete ? a.QuestionStatusEnum.INCOMPLETE :
				this.m_answeredCorrectly ? a.QuestionStatusEnum.CORRECT : a.QuestionStatusEnum.INCORRECT, a.restoreFromQuestionSpecificScoreProperties(this.m_questionSpecificScore), a.resumeSelectedAnswers(this.m_answerScores.slice(0)), a.m_questionScore = this)
		}
	},
	getinteractionID: function () {
		return this.m_interactionID
	},
	setinteractionID: function (a) {
		this.m_interactionID = a
	},
	setQuestionDatafromQuestion: function (a, b, c, d) {
		this.m_objectiveID = a;
		this.m_interactionID = b;
		this.m_weighting = c;
		this.m_negativeWeight = d
	},
	createQuestionSpecificScore: function () {
		this.m_questionSpecificScore ||
			(this.m_questionSpecificScore = "hotspot" == this.m_interactionType ? new cp.HotSpotQuestionSpecificScore : new cp.ChoiceQuestionSpecificScore)
	},
	getSlideNum: function () {
		return this.m_slideNum
	},
	setSlideNum: function (a) {
		this.m_slideNum = a
	},
	getStartTime: function () {
		return this.m_startTime
	},
	setStartTime: function (a) {
		this.m_startTime = a
	},
	getEndTime: function () {
		return this.m_endTime
	},
	setEndTime: function (a) {
		this.m_endTime = a
	},
	getInteractionTypeForLMS: function () {
		var a;
		switch (this.m_interactionType) {
			case cpInteractionTypeEnum.Choice:
			case cpInteractionTypeEnum.HotSpot:
				a =
					"choice";
				break;
			case cpInteractionTypeEnum.TrueFalse:
				a = "true-false";
				break;
			case cpInteractionTypeEnum.FillIn:
				a = "fill-in";
				break;
			case cpInteractionTypeEnum.LongFillIn:
				a = "long-fill-in";
				break;
			case cpInteractionTypeEnum.Matching:
				a = "matching";
				break;
			case cpInteractionTypeEnum.Sequence:
				a = "sequencing";
				break;
			case cpInteractionTypeEnum.Likert:
				a = "likert";
				break;
			case cpInteractionTypeEnum.Widget:
				a = "widget"
		}
		return a
	},
	getInteractionType: function () {
		var a;
		switch (this.m_interactionType) {
			case cpInteractionTypeEnum.Choice:
				a =
					"choice";
				break;
			case cpInteractionTypeEnum.TrueFalse:
				a = "true-false";
				break;
			case cpInteractionTypeEnum.FillIn:
				a = "fill-in";
				break;
			case cpInteractionTypeEnum.LongFillIn:
				a = "long-fill-in";
				break;
			case cpInteractionTypeEnum.Matching:
				a = "matching";
				break;
			case cpInteractionTypeEnum.Sequence:
				a = "sequencing";
				break;
			case cpInteractionTypeEnum.Likert:
				a = "likert";
				break;
			case cpInteractionTypeEnum.HotSpot:
				a = "hotspot";
				break;
			case cpInteractionTypeEnum.Widget:
				a = "widget"
		}
		return a
	},
	setInteractionType: function (a) {
		var b;
		switch (a) {
			case "choice":
				b =
					cpInteractionTypeEnum.Choice;
				break;
			case "true-false":
				b = cpInteractionTypeEnum.TrueFalse;
				break;
			case "fill-in":
				b = cpInteractionTypeEnum.FillIn;
				break;
			case "long-fill-in":
				b = cpInteractionTypeEnum.LongFillIn;
				break;
			case "matching":
				b = cpInteractionTypeEnum.Matching;
				break;
			case "sequencing":
				b = cpInteractionTypeEnum.Sequence;
				break;
			case "hotspot":
				b = cpInteractionTypeEnum.HotSpot;
				break;
			case "likert":
				b = cpInteractionTypeEnum.Likert;
				break;
			case "widget":
				b = cpInteractionTypeEnum.Widget
		}
		this.m_interactionType = b
	},
	getObjectiveID: function () {
		return this.m_objectiveID
	},
	setObjectiveID: function (a) {
		this.m_objectiveID = a
	},
	getInteractionID: function () {
		return this.m_interactionID
	},
	setInteractionID: function (a) {
		this.m_interactionID = a
	},
	getWeighting: function () {
		return this.m_weighting
	},
	setWeighting: function (a) {
		this.m_weighting = a
	},
	getNegativeWeight: function () {
		return this.m_negativeWeight
	},
	setNegativeWeight: function (a) {
		this.m_negativeWeight = a
	},
	getAnswerScores: function () {
		return this.m_answerScores
	},
	setAnswerScores: function (a) {
		this.m_answerScores = a
	},
	getNumTries: function () {
		return this.m_numTries
	},
	setNumTries: function (a) {
		this.m_numTries = a
	},
	getAnswersIncomplete: function () {
		return this.m_answersIncomplete
	},
	setAnswersIncomplete: function (a) {
		this.m_answersIncomplete = a
	},
	getAnsweredCorrectly: function () {
		return this.m_answeredCorrectly
	},
	setAnsweredCorrectly: function (a) {
		this.m_answeredCorrectly = a
	},
	getPausedMsecs: function () {
		return this.m_pausedMsecs
	},
	setPausedMsecs: function (a) {
		this.m_pausedMsecs = a
	},
	getQuestionNumInQuiz: function () {
		return this.m_questionNumInQuiz
	},
	setQuestionNumInQuiz: function (a) {
		this.m_questionNumInQuiz =
			a
	},
	getWasJudged: function () {
		return this.m_wasJudged
	},
	setIsPretest: function (a) {
		this.m_isPretestQuestion = a
	},
	getIsPretest: function () {
		return this.m_isPretestQuestion
	},
	setIsKnowledgeCheck: function (a) {
		this.m_isKnowledgeCheck = a
	},
	getIsKnowledgeCheck: function () {
		return this.m_isKnowledgeCheck
	},
	setWasJudged: function (a) {
		this.m_wasJudged = a
	},
	resetScore: function () {
		this.m_answerScores = [];
		this.m_numTries = 0;
		this.m_endTime = this.m_startTime = void 0;
		this.m_answeredCorrectly = this.m_answersIncomplete = !1;
		this.m_pausedMsecs =
			0;
		this.m_wasJudged = !1;
		this.m_questionSpecificScore && this.m_questionSpecificScore.reset()
	}
};
cp.QuizSlideGraphManager = function () {
	cp.QuizSlideGraphManager.baseConstructor.call(this);
	this.m_CompletionBranchMinQuizScore = this.m_CompletionBranchMaxQuizScore = 0;
	this.m_CompletionBranchMinQuizScoreSet = this.m_CompletionBranchMaxQuizScoreSet = !1;
	this.m_SlideNumToQuestionNumMap = {};
	this.m_progressNumber = 0;
	this.m_startSlideIndex = -1
};
cp.inherits(cp.QuizSlideGraphManager, cp.SlideGraphManager);
cp.QuizSlideGraphManager.prototype.getPlaybackController = function () {
	return cp.movie.playbackController
};
cp.QuizSlideGraphManager.prototype.countQuizSlides = function (a) {
	for (var b = {}, c = 0, d = 0; d < a.length; ++d) {
		var e = a[d];
		void 0 == b[e] && (b[e] = e, this.IsNonPretestQuestionSlide(e) && this.IsNonKnowledgeCheckSlide(e) && ++c)
	}
	return c
};
cp.QuizSlideGraphManager.prototype.countQuizMaxScore = function (a) {
	var b = this.getPlaybackController();
	if (void 0 == b) return "NaN";
	b = b.GetQuizController();
	if (!b) return 0;
	for (var c = {}, d = 0, e = 0; e < a.length; ++e) {
		var f = a[e];
		void 0 == c[f] && (c[f] = f, d += b.getQuizSlideMaxScore(f))
	}
	return d
};
cp.QuizSlideGraphManager.prototype.countQuizMinScore = function (a) {
	var b = this.getPlaybackController();
	if (void 0 == b) return "NaN";
	b = b.GetQuizController();
	if (!b) return 0;
	for (var c = {}, d = 0, e = 0; e < a.length; ++e) {
		var f = a[e];
		void 0 == c[f] && (c[f] = f, d += b.getQuizSlideMinScore(f))
	}
	return d
};
cp.QuizSlideGraphManager.prototype.countQuizScore = function (a) {
	var b = this.getPlaybackController();
	if (void 0 == b) return "NaN";
	b = b.GetQuizController();
	if (!b) return 0;
	for (var c = {}, d = 0, e = 0; e < a.length; ++e) {
		var f = a[e];
		void 0 == c[f] && (c[f] = f, d += b.getQuizSlideScore(f))
	}
	return d
};
cp.QuizSlideGraphManager.prototype.findCompletionBranchTraverse = function (a, b, c) {
	var d = !1,
		e = -1;
	!d && void 0 == this.m_SlideGraphObj[a] && (e = this.BranchEnum.kBranchFound, d = !0);
	!d && void 0 != c[a] && (e = this.BranchEnum.kLoopBranchFound, d = !0);
	e != this.BranchEnum.kLoopBranchFound && (b.push(a), c[a] = a);
	if (d) {
		++this.m_BranchNumber;
		if (1 == this.m_BranchNumber) {
			var e = [],
				e = this.m_CurrentBranch.length,
				f = b.length;
			0 < e && 0 < f && this.m_CurrentBranch[e - 1] == b[0] ? (e = this.m_CurrentBranch.slice(0, e - 1), e = e.concat(b), this.m_CompletionBranch =
				e.slice()) : this.m_CompletionBranch = this.m_CurrentBranch.concat(b);
			this.m_CompletionBranchSet = !0;
			this.m_CompletionBranchMaxQuizScore = this.countQuizMaxScore(this.m_CompletionBranch);
			this.m_CompletionBranchMaxQuizScoreSet = !0;
			this.m_CompletionBranchMinQuizScore = this.countQuizMinScore(this.m_CompletionBranch);
			this.m_CompletionBranchMinQuizScoreSet = !0;
			b.pop();
			delete c[a];
			return this.BranchEnum.kBranchFound
		}
		if (2 <= this.m_BranchNumber) {
			this.m_CompletionBranchSet = !1;
			if (this.m_CompletionBranchMaxQuizScoreSet) {
				if (this.countQuizMaxScore(this.m_CurrentBranch.concat(b)) ==
					this.m_CompletionBranchMaxQuizScore) return e != this.BranchEnum.kLoopBranchFound && (b.pop(), delete c[a]), this.BranchEnum.kBranchFound;
				this.m_CompletionBranchMaxQuizScoreSet = !1;
				e != this.BranchEnum.kLoopBranchFound && (b.pop(), delete c[a]);
				return this.BranchEnum.kMultipleBranchFound
			}
			e != this.BranchEnum.kLoopBranchFound && (b.pop(), delete c[a]);
			return this.BranchEnum.kMultipleBranchFound
		}
	}
	var d = this.m_SlideGraphObj[a],
		g = !1;
	for (f in d) switch (this.findCompletionBranchTraverse(Number(f), b, c)) {
		case this.BranchEnum.kBranchFound:
			g = !0;
		case this.BranchEnum.kBranchNotFound:
			break;
		case this.BranchEnum.kMultipleBranchFound:
			return this.BranchEnum.kMultipleBranchFound
	}
	e != this.BranchEnum.kLoopBranchFound && (b.pop(), delete c[a]);
	return g ? this.BranchEnum.kBranchFound : this.BranchEnum.kBranchNotFound
};
cp.QuizSlideGraphManager.prototype.findCompletionBranch = function () {
	var a = 1 <= this.m_CurrentBranch.length ? this.m_CurrentBranch[this.m_CurrentBranch.length - 1] : this.m_RootSlideIndex;
	this.m_startSlideIndex = a;
	this.m_CompletionBranch = [];
	this.m_CompletionBranchSet = !1;
	this.m_BranchNumber = 0;
	this.findCompletionBranchTraverse(a, [], {})
};
cp.QuizSlideGraphManager.prototype.IsNonPretestQuestionSlide = function (a) {
	var b = this.getPlaybackController();
	return b && (b = b.GetQuizController()) ? b.IsNonPretestQuestionSlide(a) : !1
};
cp.QuizSlideGraphManager.prototype.IsNonKnowledgeCheckSlide = function (a) {
	var b = this.getPlaybackController();
	return b && (b = b.GetQuizController()) ? b.IsNonKnowledgeCheck(a) : !1
};
cp.QuizSlideGraphManager.prototype.findFirstNonPretestQuestionSlide = function () {
	for (var a = this.m_CurrentBranch.length, b = 0; b < a; ++b)
		if (this.IsNonPretestQuestionSlide(this.m_CurrentBranch[b]) && this.IsNonKnowledgeCheckSlide(this.m_CurrentBranch[b])) return this.m_CurrentBranch[b];
	return -1
};
cp.QuizSlideGraphManager.prototype.getMaxQuizScore = function () {
	!this.m_CompletionBranchSet && !this.m_CompletionBranchMaxQuizScoreSet && this.findCompletionBranch();
	if (!this.m_CompletionBranchSet && !this.m_CompletionBranchMaxQuizScoreSet) return "NaN";
	var a = -1;
	return a = this.m_CompletionBranchMaxQuizScoreSet ? this.m_CompletionBranchMaxQuizScore : this.countQuizMaxScore(this.m_CompletionBranch)
};
cp.QuizSlideGraphManager.prototype.getMinQuizScore = function () {
	!this.m_CompletionBranchSet && !this.m_CompletionBranchMinQuizScoreSet && this.findCompletionBranch();
	if (!this.m_CompletionBranchSet && !this.m_CompletionBranchMinQuizScoreSet) return "NaN";
	var a = "NaN";
	return a = this.m_CompletionBranchMinQuizScoreSet ? this.m_CompletionBranchMinQuizScore : this.countQuizMinScore(this.m_CompletionBranch)
};
cp.QuizSlideGraphManager.prototype.getQuizScorePercentage = function () {
	!this.m_CompletionBranchSet && !this.m_CompletionBranchMaxQuizScoreSet && this.findCompletionBranch();
	if (!this.m_CompletionBranchSet && !this.m_CompletionBranchMaxQuizScoreSet) return "NaN";
	var a = this.countQuizScore(this.m_CurrentBranch),
		b = -1,
		b = this.m_CompletionBranchSlideCountSet ? this.m_CompletionBranchSlideCount : this.countQuizMaxScore(this.m_CompletionBranch);
	return 0 >= b ? "NaN" : 100 * a / b
};
cp.QuizSlideGraphManager.prototype.getNextAttemptFirstQuestionSlideIndex = function () {
	return this.findFirstNonPretestQuestionSlide()
};
cp.QuizSlideGraphManager.prototype.getReviewFirstQuestionSlideIndex = function () {
	return this.findFirstNonPretestQuestionSlide()
};
cp.QuizSlideGraphManager.prototype.getNumQuestions = function () {
	!this.m_CompletionBranchSet && !this.m_CompletionBranchMaxQuizScoreSet && this.findCompletionBranch();
	return !this.m_CompletionBranchSet && !this.m_CompletionBranchMaxQuizScoreSet ? "NaN" : this.countQuizSlides(this.m_CompletionBranch)
};
cp.QuizSlideGraphManager.prototype.getQuestionSlideProgressNumber = function (a) {
	return this.m_SlideNumToQuestionNumMap && void 0 != this.m_SlideNumToQuestionNumMap[a] ? this.m_SlideNumToQuestionNumMap[a] : "NaN"
};
cp.QuizSlideGraphManager.prototype.setQuestionSlideProgressNumber = function (a) {
	this.m_SlideNumToQuestionNumMap || (this.m_SlideNumToQuestionNumMap = {});
	void 0 == this.m_SlideNumToQuestionNumMap[a] && (this.m_SlideNumToQuestionNumMap[a] = ++this.m_progressNumber)
};
cp.QuizSlideGraphManager.prototype.getLastQuestionSlideIndex = function () {
	if (!this.getPlaybackController()) return -1;
	this.m_CompletionBranchSet || this.findCompletionBranch();
	if (!this.m_CompletionBranchSet) return -1;
	for (var a = -1, b = this.m_CompletionBranch.length, c = 0; c < b; ++c) {
		var d = this.m_CompletionBranch[c];
		this.IsNonPretestQuestionSlide(d) && d > a && (a = d)
	}
	return a
};
cp.QuizSlideGraphManager.prototype.resetCurrentBranch = function (a) {
	if (!(0 > a)) {
		for (var b = -1, c = 0; c < this.m_CurrentBranch.length; ++c)
			if (this.m_CurrentBranch[c] == a) {
				b = a;
				break
			}
		0 <= b && b + 1 < this.m_CurrentBranch.length && this.m_CurrentBranch.splice(b + 1);
		a = {};
		for (c = b = 0; c < this.m_CurrentBranch.length; ++c) {
			var d = this.m_CurrentBranch[c];
			this.m_SlideNumToQuestionNumMap.hasOwnProperty(d) && (a[d] = this.m_SlideNumToQuestionNumMap[d], b < this.m_SlideNumToQuestionNumMap[d] && (b = this.m_SlideNumToQuestionNumMap[d]))
		}
		this.m_SlideNumToQuestionNumMap =
			a;
		this.m_progressNumber = b;
		this.m_CompletionBranchMinQuizScore = this.m_CompletionBranchMaxQuizScore = 0;
		this.m_CompletionBranchMinQuizScoreSet = this.m_CompletionBranchMaxQuizScoreSet = !1;
		this.findCompletionBranch()
	}
};
cp.QuizSlideGraphManager.prototype.findLastContinousBranchFromHistory = function (a, b) {
	for (var c = [], d = this.m_BranchHistory.length - 1; 0 <= d; --d)
		if (c = [], this.m_BranchHistory[d] == a) {
			for (var e = -1, f = !0, g = d; g < this.m_BranchHistory.length; ++g) {
				c.push(this.m_BranchHistory[g]);
				if (this.m_BranchHistory[g] == b) {
					e = g;
					break
				}
				if (g != this.m_BranchHistory.length - 1 && !this.getIsJumpValid(this.m_BranchHistory[g], this.m_BranchHistory[g + 1])) {
					f = !1;
					break
				}
			}
			if (-1 != e && f) return c
		}
	return c = []
};
cp.QuizSlideGraphManager.prototype.updateCurrentBranch = function (a) {
	if (!(0 > a)) {
		var b = this.getPlaybackController();
		if (b && ((b = b.GetQuizController()) || !b.GetIsInReviewMode())) {
			for (var c = this.m_CurrentBranch.length, d = -1, e = 0; e < this.m_CurrentBranch.length; ++e)
				if (this.m_CurrentBranch[e] == a) {
					d = e;
					break
				}
			if (-1 != d && d + 1 < c) {
				this.m_CurrentBranch.splice(d + 1);
				b = {};
				for (c = a = 0; c < this.m_CurrentBranch.length; ++c) d = this.m_CurrentBranch[c], this.m_SlideNumToQuestionNumMap.hasOwnProperty(d) && (b[d] = this.m_SlideNumToQuestionNumMap[d],
					a < this.m_SlideNumToQuestionNumMap[d] && (a = this.m_SlideNumToQuestionNumMap[d]));
				this.m_SlideNumToQuestionNumMap = b;
				this.m_progressNumber = a
			} else if (0 < this.m_CurrentBranch.length && -1 == d) {
				a = this.findLastContinousBranchFromHistory(this.m_CurrentBranch[this.m_CurrentBranch.length - 1], a);
				for (c = 0; c < a.length; ++c) this.m_CurrentBranch.push(a[c]), this.m_BranchHistory.push(a[c]), b && "Question" == b.GetSlideType(a[c]) && b.IsNonKnowledgeCheck(a[c]) && this.setQuestionSlideProgressNumber(a[c])
			}
			this.m_CompletionBranchMinQuizScore =
				this.m_CompletionBranchMaxQuizScore = 0;
			this.m_CompletionBranchMinQuizScoreSet = this.m_CompletionBranchMaxQuizScoreSet = !1;
			this.findCompletionBranch()
		}
	}
};
cp.PoolManager = function () {
	this.m_framesAddedSoFar = 0
};
cp.PoolManager.prototype = {
	updateQuestionData: function (a, b) {
		var c = cp.D[a];
		c && (c.w = b.w, c.it = b.it, c.oid = b.oid, c.sra = b.sra, c.nw = b.nw, c.oca = b.oca, c.ofa = b.ofa)
	},
	updateModelDataForSlides: function (a, b) {
		var c = -1,
			d = -1,
			e = cp.D.project_main.slides;
		if (e && !(0 >= e.length)) {
			var e = e.split(","),
				f = e[a],
				g = cp.D[f];
			g.w = b.w;
			g.oca = b.oca;
			g.ofa = b.ofa;
			g.v = b.v;
			this.updateQuestionData(g.qs, b);
			var i = g.to - g.from + 1;
			this.m_framesAddedSoFar += i;
			var k = -1;
			0 == a ? (c = 1, d = g.to, k = 0) : (k = cp.D[e[a - 1]], c = k.to + 1, d = c + i, k = k.to);
			cp.poolVerbose && cp.log("Slide Name : " +
				f + ", from : " + g.from + ", pauseAt : " + g.pa + ", to : " + g.to);
			g.from = c;
			g.pa += c;
			g.to = d;
			g.audioName && (d = cp.D[g.audioName], cp.poolVerbose && cp.log("Random : " + g.audioName + " : " + d.from + ", " + d.to + ". Adding : " + (c - 1)), d.from += c - 1, d.to += c - 1, cp.poolVerbose && cp.log("Random : " + g.audioName + " after addition : " + d.from + ", " + d.to));
			cp.poolVerbose && cp.log("Slide Name : " + f + ", from : " + g.from + ", pauseAt : " + g.pa + ", to : " + g.to);
			this.updateStartEndFramesForSlideItems(k, f, g.to);
			cp.poolVerbose && cp.log("Adding : " + i);
			for (c =
				a + 1; c < e.length; ++c) f = e[c], d = cp.D[f], k = d.pn, k && "" != k || (cp.poolVerbose && cp.log(f + " : " + d.from + ", " + d.to + ". Adding : " + i), d.from += i, d.to += i, cp.poolVerbose && cp.log(f + " after addition : " + d.from + ", " + d.to), d.pa += i, this.updateStartEndFramesForSlideItems(i, f, d.to));
			this.updateStartEndFramesForSlideAudios(i, g.rsi, g.audioName)
		}
	},
	updateStartEndFramesForSlideAudios: function (a, b, c) {
		var d = cp.D.project_main.slideAudios;
		d || (d = "");
		for (var e = [], d = d.split(","), f = 0; f < b; ++f) e.push(d[f]);
		c && e.push(c);
		for (f = b; f < d.length; ++f)
			if (e.push(d[f]),
				b = cp.D[d[f]]) cp.poolVerbose && cp.log(d[f] + " : " + b.from + ", " + b.to + ". Adding : " + a), b.from += a, b.to += a, cp.poolVerbose && cp.log(d[f] + " after addition : " + b.from + ", " + b.to);
		cp.D.project_main.slideAudios = e.toString()
	},
	updateStartEndFramesForSlideItems: function (a, b, c) {
		var d = cp.D[b],
			e = d.si;
		if (e && !(0 >= e.length)) {
			for (var f in e) {
				var g = cp.D[e[f].n];
				if (void 0 != g && (!0 == g.immo ? g.to = c : 1 != g.rp && 1 != g.rpa || g.apsn == b ? (g.from += a, g.pa && (g.pa += a), g.to += a) : g.to = c, void 0 != g.ia)) {
					var i = cp.D[g.ia];
					i && (1 != g.rp && 1 != g.rpa && g.apsn ==
						b) && (i.from += a - 1, i.to += a)
				}
			}
			if ((b = d.iph) && 0 < b.length)
				for (var k in b) void 0 != b[k] && (c = cp.D[b[k].n], void 0 != c && c.pa && (c.pa += a))
		}
	},
	updateSlideDataFromRandomSlideData: function (a, b) {
		var c = b.qnq;
		if (void 0 != c) {
			var d = cp.D[a];
			cp.D[d.qs + c] = cp.D[d.qs];
			cp.D[d.qs + c].qnq = c;
			cp.D[d.qs + c].oid = b.oid;
			d.qnq = c;
			d.pn = b.pn;
			d.rsi = b.rsi;
			this.updateQuestionNameAtIndex(d.qs, c)
		}
	},
	loadPools: function () {
		var a = cp.D.project_main.pools;
		if (!(void 0 == a || 0 >= a.length))
			for (var b = 0; b < a.length; ++b) this.loadPoolDataIntoModel(a[b])
	},
	loadPoolDataIntoModel: function (a) {
		for (var b =
			cp.model[a + "Data"], c = cp.D[a].pqs, d = 0; d < c.length; ++d) {
			var e = b[c[d] + "Data"],
				f;
			for (f in e) cp.D[f] = e[f]
		}
		if (cp.poolResources) {
			if (b = cp.poolResources[a + "Images"])
				for (d = 0; d < b.length; ++d) cp.model.images.push(b[d]);
			if (d = cp.poolResources[a + "Videos"])
				for (b = 0; b < d.length; ++b) cp.model.videos.push(d[b]);
			if (a = cp.poolResources[a + "SlideVideos"])
				for (d = 0; d < a.length; ++d) cp.model.slideVideos.push(a[d])
		}
	},
	updateSlideNameAtIndex: function (a, b) {
		var c = cp.D.project_main.slides;
		0 >= c.length || (c = c.split(","), b > c.length - 1 || (c[b] =
			a, cp.D.project_main.slides = c.toString()))
	},
	updateQuestionNameAtIndex: function (a, b) {
		var c = cp.D.project_main.questions;
		0 >= c.length || (c = c.split(","), b > c.length - 1 || (c[b] = a, cp.movie && (cp.movie.questions = c), cp.D.project_main.questions = c.toString()))
	},
	removeAllReferences: function (a) {
		var b = cp.D.project_main.questions;
		if (0 < b.length) {
			for (var c = b.split(","), d = [], b = 0; b < c.length; ++b) c[b] != a && d.push(c[b]);
			cp.D.project_main.questions = d.toString()
		}
		b = cp.D.project_main.slides;
		if (0 < b.length) {
			c = b.split(",");
			d = [];
			for (b =
				0; b < c.length; ++b) c[b] != a && d.push(c[b]);
			cp.D.project_main.slides = d.toString()
		}
	},
	updateSlidesAndQuestionsFromPool: function () {
		var a = cp.D.project_main.pools;
		if (!(void 0 == a || 0 >= a.length))
			if (a = cp.D.project_main.slides, !(void 0 == a || 0 >= a.length)) {
				for (var a = a.split(","), b = 0, c = 0; c < a.length; ++c) {
					var d = a[c],
						e = cp.D[d],
						f = e.pn;
					if (f && "" != f) {
						var g = cp.D[f],
							f = g.pqs,
							i = -1;
						if (e.is) {
							g = g.rsqs;
							if (0 >= g.length) {
								this.removeAllReferences(d);
								b++;
								continue
							}
							void 0 == f.sindex ? f.sindex = 0 : f.sindex++;
							i = Number(g[f.sindex])
						} else {
							g = g.rgqs;
							if (0 >= g.length) {
								this.removeAllReferences(d);
								b++;
								continue
							}
							void 0 == f.gindex ? f.gindex = 0 : f.gindex++;
							i = Number(g[f.gindex])
						}
						f = f[i];
						this.updateSlideNameAtIndex(f, c - b);
						e.qnq -= b;
						this.updateSlideDataFromRandomSlideData(f, e);
						this.updateModelDataForSlides(c - b, e); - 1 != d.indexOf("rq") && (d = d.split("rq")[1], "" != d && (cp.D[d] = cp.D[f]))
					}
				}
				this.updateMainMovieData()
			}
	},
	updateMainMovieData: function () {
		var a = cp.D.project_main.slides;
		0 >= a.length || (a = a.split(","), cp.D.project_main.to = cp.D[a[a.length - 1]].to)
	},
	updateSlideData: function (a,
		b, c) {
		this.updateSlideNameAtIndex(a, b);
		this.updateSlideDataFromRandomSlideData(a, c);
		this.updateModelDataForSlides(b, c)
	},
	randomizePools: function () {
		if (!("" != cp.resumeDataChunk && void 0 != cp.resumeDataChunk && "0" != cp.resumeDataChunk)) {
			var a = cp.D.project_main.pools;
			if (a) {
				var b = a.length;
				if (!(0 >= b)) {
					cp.poolVerbose && cp.log("Randomizing");
					for (var c = 0; c < b; ++c) {
						for (var d = cp.D[a[c]], e = d.rsqs, f = e.length, g = f; g--;) {
							var i = parseInt(Math.random() * f),
								k = e[g];
							e[g] = e[i];
							e[i] = k
						}
						d.rsqs = e;
						e = d.rgqs;
						for (g = f = e.length; g--;) i = parseInt(Math.random() *
							f), k = e[g], e[g] = e[i], e[i] = k;
						d.rgqs = e
					}
					this.updateSlidesAndQuestionsFromPool()
				}
			}
		}
	}
};
(function () {
	cp.borderInit = function (d) {
		cp.borderCreated = !1;
		cp.lBorderW = 0;
		cp.tBorderW = 0;
		cp.rBorderW = 0;
		cp.bBorderW = 0;
		var a = d.borderProperties;
		if (a) {
			var b = document.getElementById("projectBorder"),
				c = cp.getMainContainer();
			cp.responsive || (c.style.width = b.style.width = a.w + "px", c.style.height = b.style.height = a.h + "px");
			a.l = void 0 != a.l ? a.l : 0;
			a.t = void 0 != a.t ? a.t : 0;
			a.r = void 0 != a.r ? a.r : 0;
			a.b = void 0 != a.b ? a.b : 0;
			cp.lBorderW = a.l;
			cp.tBorderW = a.t;
			cp.rBorderW = a.r;
			cp.bBorderW = a.b;
			b.style.backgroundColor = a.bc;
			if (c = a.ip) b.style.backgroundImage =
				"url('" + c + "')";
			a.hasSqEd || (b.style.borderRadius = "20px");
			cp.updateBorderPosition(d, !0);
			cp.borderCreated = !0;
			cp.complete()
		}
	}
})();
cp.playbar = function (a) {
	return document.getElementById(a)
};
cp.PB = cp.playbar;
cp.PB.Btns = {
	kBtnAudioOff: "AudioOff",
	kBtnAudioOn: "AudioOn",
	kBtnBackward: "Backward",
	kBtnCC: "CC",
	kBtnExit: "Exit",
	kBtnFastForward: "FastForward",
	kBtnFastForward1: "FastForward1",
	kBtnFastForward2: "FastForward2",
	kBtnForward: "Forward",
	kBtnInfo: "Info",
	kBtnLogo: "Logo",
	kBtnPlay: "Play",
	kBtnPause: "Pause",
	kBtnPrint: "Print",
	kBtnProgress: "Progress",
	kBtnRewind: "Rewind",
	kBtnThumb: "Thumb",
	kBtnThumbBase: "ThumbBase",
	kBtnTOC: "TOC"
};
cp.PB.BtnStyleImages = "Color ColorSmall Glow GlowSmall Height Shadow ShadowSmall InnerStroke InnerStrokeSmall Shade ShadeSmall Stroke StrokeSmall".split(" ");
cp.PB.kLargeBtn = 0;
cp.PB.kSmallBtn = 1;
cp.PB.kBtnMargin = 2;
cp.PB.kIndentMargin = 8;
cp.PB.movieProperties = null;
cp.PB.assetsLoaded = 0;
cp.PB.assetsLoadedArray = {};
cp.PB.isVertical = !1;
cp.PB.numBtns = 0;
cp.PB.playBarDim = 0;
cp.PB.mainMovie = null;
cp.PB.playBarOtherDim = 0;
cp.PB.playbarHasLogo = !1;
cp.PB.playbarHasInfo = !1;
cp.PB.playbarHasPrint = !1;
cp.PB.loadedAssetArr = {};
cp.PB.playBarIconsFolder = "./assets/playbar/PlaybarIcons/";
cp.PB.PNGSuffix = ".png";
cp.PB.btnSizeMap = {};
cp.PB.btnSizeMap[cp.PB.Btns.kBtnAudioOff] = cp.PB.kSmallBtn;
cp.PB.btnSizeMap[cp.PB.Btns.kBtnAudioOn] = cp.PB.kSmallBtn;
cp.PB.btnSizeMap[cp.PB.Btns.kBtnBackward] = cp.PB.kSmallBtn;
cp.PB.btnSizeMap[cp.PB.Btns.kBtnCC] = cp.PB.kSmallBtn;
cp.PB.btnSizeMap[cp.PB.Btns.kBtnExit] = cp.PB.kSmallBtn;
cp.PB.btnSizeMap[cp.PB.Btns.kBtnFastForward] = cp.PB.kSmallBtn;
cp.PB.btnSizeMap[cp.PB.Btns.kBtnFastForward1] = cp.PB.kSmallBtn;
cp.PB.btnSizeMap[cp.PB.Btns.kBtnFastForward2] = cp.PB.kSmallBtn;
cp.PB.btnSizeMap[cp.PB.Btns.kBtnForward] = cp.PB.kSmallBtn;
cp.PB.btnSizeMap[cp.PB.Btns.kBtnPlay] = cp.PB.kLargeBtn;
cp.PB.btnSizeMap[cp.PB.Btns.kBtnPause] = cp.PB.kLargeBtn;
cp.PB.btnSizeMap[cp.PB.Btns.kBtnRewind] = cp.PB.kSmallBtn;
cp.PB.btnSizeMap[cp.PB.Btns.kBtnTOC] = cp.PB.kSmallBtn;
cp.PB.btnSizeMap[cp.PB.Btns.kBtnInfo] = cp.PB.kSmallBtn;
cp.PB.btnSizeMap[cp.PB.Btns.kBtnPrint] = cp.PB.kSmallBtn;
cp.PB.playBarHeight = 0;
cp.PB.playBarCSSLoaded = !1;
cp.PB.toolTips = {};
cp.PB.toolTips[cp.PB.Btns.kBtnRewind] = "Rewind ;\u5012\u5e36 ;Rembobiner ;Zur\u00fcckspulen ;Riavvolgi ;\u5dfb\u304d\u623b\u3057 ;Rebobinar ;\ub418\uac10\uae30 ;Retroceder ".split(";");
cp.PB.toolTips[cp.PB.Btns.kBtnBackward] = "Back ;\u5f8c\u9000 ;Retour ;Zur\u00fcck ;Indietro ;\u623b\u308b ;Atr\u00e1s ;\ub4a4\ub85c ;Voltar ".split(";");
cp.PB.toolTips[cp.PB.Btns.kBtnPlay] = "Play ;\u64ad\u653e ;Lire ;Abspielen ;Esegui ;\u518d\u751f ;Reproducir ;\uc7ac\uc0dd ;Reproduzir ".split(";");
cp.PB.toolTips[cp.PB.Btns.kBtnPause] = "Pause ;\u66ab\u505c ;Pause ;Anhalten ;Pausa ;\u4e00\u6642\u505c\u6b62 ;Pausa ;\uc77c\uc2dc \uc911\uc9c0 ;Pausar ".split(";");
cp.PB.toolTips[cp.PB.Btns.kBtnForward] = "Forward ;\u524d\u9032 ;Avancer ;Weiter ;Avanti ;\u9032\u3080 ;Adelante ;\uc55e\uc73c\ub85c ;Avan\u00e7ar ".split(";");
cp.PB.toolTips[cp.PB.Btns.kBtnCC] = "Closed Captioning ;\u96b1\u85cf\u5f0f\u5b57\u5e55 ;Sous-titrage ;Bilduntertitel ;Didascalie ;\u30af\u30ed\u30fc\u30ba\u30c9\u30ad\u30e3\u30d7\u30b7\u30e7\u30f3 ;Subt\u00edtulos opcionales ;\ud3d0\uc1c4 \ucea1\uc158 ;Legenda codificada ".split(";");
cp.PB.toolTips[cp.PB.Btns.kBtnAudioOn] = "Audio Off ;\u95dc\u9589\u97f3\u8a0a ;Audio d\u00e9sactiv\u00e9 ;Audio aus ;Audio spento ;\u97f3\u58f0 \u30aa\u30d5 ;Audio desact. ;\uc624\ub514\uc624 \ub044\uae30 ;\u00c1udio ligado ".split(";");
cp.PB.toolTips[cp.PB.Btns.kBtnAudioOff] = "Audio On ;\u958b\u555f\u97f3\u8a0a ;Audio activ\u00e9 ;Audio an ;Audio acceso ;\u97f3\u58f0 \u30aa\u30f3 ;Audio act.;\uc624\ub514\uc624 \ucf1c\uae30 ;\u00c1udio desligado ".split(";");
cp.PB.toolTips[cp.PB.Btns.kBtnExit] = "Exit ;\u7d50\u675f ;Quitter ;Beenden ;Esci ;\u9589\u3058\u308b ;Salir ;\ub05d\ub0b4\uae30 ;Sair ".split(";");
cp.PB.toolTips[cp.PB.Btns.kBtnInfo] = "Information ;\u8cc7\u8a0a ;Informations ;Informationen ;Informazioni ;\u60c5\u5831 ;Informaci\u00f3n ;\uc815\ubcf4 ;Informa\u00e7\u00f5es ".split(";");
cp.PB.toolTips[cp.PB.Btns.kBtnTOC] = "Table of Contents ;\u76ee\u9304 ;Table des mati\u00e8res ;Inhaltsverzeichnis ;Sommario ;\u76ee\u6b21 ;Contenido ;\ubaa9\ucc28 ;\u00cdndice anal\u00edtico ".split(";");
cp.PB.toolTips[cp.PB.Btns.kBtnFastForward] = "2x Fast Forward Speed ;2 \u500d\u901f\u5feb\u8f49 ;Vitesse d'avance rapide x2 ;Zweifache Vorspulgeschwindigkeit ;Velocit\u00e0 avanzamento rapido 2x ;2 \u500d\u901f ;Velocidad de avance r\u00e1pido 2x ;2\ubc30\uc18d \ube68\ub9ac \uac10\uae30 ;Velocidade 2x de avan\u00e7ar ".split(";");
cp.PB.toolTips[cp.PB.Btns.kBtnFastForward1] = "4x Fast Forward Speed ;4 \u500d\u901f\u5feb\u8f49 ;Vitesse d'avance rapide x4 ;Vierfache Vorspulgeschwindigkeit ;Velocit\u00e0 avanzamento rapido 4x ;4 \u500d\u901f ;Velocidad de avance r\u00e1pido 4x ;4\ubc30\uc18d \ube68\ub9ac \uac10\uae30 ;Velocidade 4x de avan\u00e7ar ".split(";");
cp.PB.toolTips[cp.PB.Btns.kBtnFastForward2] = "Normal Speed ;\u6b63\u5e38\u901f\u5ea6 ;Vitesse normale ;Normale Geschwindigkeit ;Velocit\u00e0 normale ;\u6a19\u6e96\u901f\u5ea6 ;Velocidad normal ;\uc77c\ubc18 \uc18d\ub3c4 ;Velocidade normal ".split(";");
cp.PB.toolTips[cp.PB.Btns.kBtnPrint] = "Print;\u5217\u5370 ;Imprimer ;Drucken ;Stampa ;\u5370\u5237 ;Imprimir ;\uc778\uc1c4 ;Imprimir ".split(";");
cp.PB.toolTipLocaleIndex = 0;
cp.PB.hideExitButton = 0;
cp.localizeToolTips = function (a) {
	return cp.playbarTooltips && cp.playbarTooltips[a] ? cp.playbarTooltips[a] : cp.PB.toolTips[a][cp.PB.toolTipLocaleIndex] ? cp.PB.toolTips[a][cp.PB.toolTipLocaleIndex] : a
};
cp.PB.PlayBarButton = function (a, b, c) {
	this.SmallSuffix = "Small";
	this.isSmall = cp.PB.btnSizeMap[a];
	this.iconName = a;
	this.playBarDiv = b;
	this.currDiv = document.createElement("canvas");
	this.currDiv.parentObj = this;
	this.playBarDiv.appendChild(this.currDiv);
	this.currDiv.setAttribute("class", this.isSmall ? "playbarSmallButton" : "playbarBigButton");
	this.currDiv.width = this.currDiv.clientWidth;
	this.currDiv.height = this.currDiv.clientHeight;
	this.ctx = this.currDiv.getContext("2d");
	this.currDiv.imgElemArray = [];
	this.currDiv.toggleimgElemArray = [];
	this.currDiv.title = cp.PB.MP.PBP.noToolTips ? "" : this.iconName;
	this.currDiv.curIcon = 0;
	this.currDiv.tabIndex = 0;
	this.currDiv.setAttribute("role", "button");
	this.currDiv.setAttribute("id", "btn_play");
	this.clickHandler = c;
	this.currDiv.style.marginTop = 0 == cp.PB.MP.PBP.tworow ? (this.playBarDiv.height - this.currDiv.height) / 2 + "px" : "0px";
	this.currDiv.style.marginLeft = "0px"
};
cp.PB.PlayBarButton.prototype = {
	setImage: function (a) {
		var b = cp.PB.loadedAssetArr[a + (this.isSmall ? this.SmallSuffix : "")];
		void 0 != b && (b.isGlow = "Glow" == a, b.showImage = !0, b.imageName = a + (this.isSmall ? this.SmallSuffix : ""), this.currDiv.imgElemArray[this.currDiv.imgElemArray.length] = b)
	},
	getWidth: function () {
		void 0 == this.actualClientWidth && (this.actualClientWidth = this.currDiv.clientWidth);
		return this.actualClientWidth
	},
	destroy: function () {
		this.currDiv && (this.currDiv.style.display = "none", this.currDiv.parentElement &&
			this.currDiv.parentElement.removeChild(this.currDiv))
	},
	setPosNWidth: function (a, b, c, d) {
		if (0 >= d) return 0;
		cp.registerGestureEvent(this.currDiv, cp.GESTURE_EVENT_TYPES.TAP, this.onClick);
		this.currDiv.onkeydown = this.onKeyDown;
		d = a ? 0 : parseFloat(window.getComputedStyle(this.currDiv).marginLeft.replace("px", ""));
		this.currDiv.style.marginLeft = d + b + "px";
		b = parseFloat(window.getComputedStyle(this.currDiv).marginTop.replace("px", ""));
		this.currDiv.style.marginTop = b + (a ? 0 : c) + "px";
		this.refresh();
		return cp.PB.kBtnMargin
	},
	setIcon: function (a) {
		var b = cp.PB.loadedAssetArr[a];
		b.parentElem = this.currDiv;
		b.isGlow = !1;
		b.imageName = a;
		cp.PB.isVertical && cp.applyTransform(b, "matrix(0,1,-1,0,0,0)");
		this.currDiv.toggleimgElemArray[this.currDiv.toggleimgElemArray.length] = b;
		this.currDiv.currImageName = a;
		this.currDiv.title = cp.PB.MP.PBP.noToolTips ? "" : cp.localizeToolTips(this.currDiv.toggleimgElemArray[this.currDiv.curIcon].imageName)
	},
	onClick: function (a) {
		this.parentObj.toggleImage(a);
		void 0 != this.parentObj.clickHandler && this.parentObj.clickHandler()
	},
	onKeyDown: function (a) {
		var b;
		a.keyCode ? b = a.keyCode : a.which && (b = a.which);
		32 == b && (this.parentObj.toggleImage(a), void 0 != this.parentObj.clickHandler && this.parentObj.clickHandler())
	},
	toggleImage: function (a) {
		var b = this.currDiv;
		null == b && (b = this);
		b.curIcon = (b.curIcon + 1) % b.toggleimgElemArray.length;
		var c = cp.localizeToolTips(b.toggleimgElemArray[b.curIcon].imageName);
		b.title = cp.PB.MP.PBP.noToolTips ? "" : c;
		cp.modifyAlternativeAccessibleText(b, c);
		b.parentObj.onMouseOver(a)
	},
	changeImage: function (a) {
		var b = this.currDiv;
		null == b && (b = this);
		this.currDiv.currImageName = a;
		for (var c = 0; c < b.toggleimgElemArray.length; ++c)
			if (a == b.toggleimgElemArray[c].imageName) {
				if (c == b.curIcon) return;
				b.curIcon = c;
				b.title = cp.localizeToolTips(b.toggleimgElemArray[b.curIcon].imageName)
			}
		if (b.rollover) b.parentObj.onMouseOver(null);
		else b.parentObj.onMouseOut(null)
	},
	refresh: function () {
		this.onMouseOut(null)
	},
	onMouseOver: function () {
		var a = this.ctx,
			b = this.currDiv;
		null == b && (b = this);
		null == a && (a = this.getContext("2d"));
		b.rollover = !0;
		var c;
		a.clearRect(0,
			0, b.clientWidth, b.clientHeight);
		for (var d = 0; d < b.imgElemArray.length; ++d) c = b.imgElemArray[d], a.drawImage(c, (b.clientWidth - c.width) / 2, (b.clientHeight - c.height) / 2);
		c = b.toggleimgElemArray[b.curIcon];
		var d = b.clientWidth / 2,
			f = b.clientHeight / 2,
			g = c.width,
			e = c.height;
		a.translate(d, f);
		a.rotate(Math.PI / 180 * (cp.PB.isVertical ? -90 : 0));
		a.drawImage(c, -g / 2, -e / 2, g, e);
		b.currImageName = c.imageName;
		a.rotate(Math.PI / 180 * (cp.PB.isVertical ? 90 : 0));
		a.translate(-d, -f)
	},
	onMouseOut: function () {
		var a = this.ctx,
			b = this.currDiv;
		null ==
			b && (b = this);
		null == a && (a = this.getContext("2d"));
		b.rollover = !1;
		a.clearRect(0, 0, b.clientWidth, b.clientHeight);
		if (b.imgElemArray) {
			for (var c = 0; c < b.imgElemArray.length; ++c) {
				var d = b.imgElemArray[c];
				d.isGlow || a.drawImage(d, (b.clientWidth - d.width) / 2, (b.clientHeight - d.height) / 2)
			}
			var d = b.toggleimgElemArray[b.curIcon],
				c = b.clientWidth / 2,
				f = b.clientHeight / 2,
				g = d.width,
				e = d.height;
			a.translate(c, f);
			a.rotate(Math.PI / 180 * (cp.PB.isVertical ? -90 : 0));
			a.drawImage(d, -g / 2, -e / 2, g, e);
			b.currImageName = d.imageName;
			a.rotate(Math.PI /
				180 * (cp.PB.isVertical ? 90 : 0));
			a.translate(-c, -f)
		}
	}
};
cp.PB.PlayBarSlider = function (a) {
	this.thumbBase = "ThumbBase";
	this.progress = "Progress";
	this.thumb = "Thumb";
	this.playBarDiv = a;
	this.currDiv = document.createElement("div");
	this.currDiv.setAttribute("class", "playbarSlider");
	this.playBarDiv.appendChild(this.currDiv);
	this.currDiv.border = "0px";
	this.currDiv.margin = "0px";
	this.currDiv.padding = "0px";
	this.progressDiv = document.createElement("canvas");
	this.currDiv.appendChild(this.progressDiv);
	this.currDiv.progressDiv = this.progressDiv;
	this.progressDiv.id = "playbarSlider";
	this.thumbimg = cp.PB.loadedAssetArr[this.thumb];
	this.thumbDiv = document.createElement("div");
	a = -1;
	0 === cp.D.pref.rkt && (a = 10006);
	this.thumbDiv.setAttribute("tabindex", a);
	this.thumbDiv.setAttribute("class", "playbarSliderThumb");
	this.currDiv.appendChild(this.thumbDiv);
	cp.fixWebkitScaling(this.thumbDiv);
	this.thumbimg.style.display = "block";
	this.thumbDiv.appendChild(this.thumbimg);
	this.progressDiv.thumbDiv = this.thumbDiv;
	this.thumbDiv.progressDiv = this.progressDiv;
	this.thumbDiv.id = "playbarSliderThumb";
	this.currDiv.style.marginLeft =
		"0px";
	"" == this.currDiv.style.marginTop && (this.currDiv.style.marginTop = "0px");
	this.currDiv.height = 1 == cp.PB.MP.PBP.tworow ? this.playBarDiv.height / 2 : this.playBarDiv.height
};
cp.PB.PlayBarSlider.prototype = {
	adjustWidth: function () {
		this.currDiv.style.width = "58px"
	},
	setPosNWidth: function (a, b, c, d) {
		d -= this.progressDiv.thumbDiv.clientWidth;
		if (0 >= d) return 0;
		this.currDiv.width = d;
		this.currDiv.style.width = d + "px";
		d = a ? 0 : parseFloat(window.getComputedStyle(this.currDiv).marginLeft.replace("px", ""));
		this.currDiv.style.marginLeft = d + b + 2 * cp.PB.kBtnMargin + "px";
		b = a ? 0 : parseFloat(window.getComputedStyle(this.currDiv).marginTop.replace("px", ""));
		a || (this.currDiv.style.marginTop = b + c + "px");
		this.init(a);
		this.refresh(a);
		this.currDiv.style.display = "inline";
		return 2 * cp.PB.kBtnMargin
	},
	getWidth: function () {
		void 0 == this.actualClientWidth && (this.actualClientWidth = this.currDiv.clientWidth + this.progressDiv.thumbDiv.clientWidth);
		return this.actualClientWidth
	},
	destroy: function () {
		this.currDiv && (this.currDiv.style.display = "none", this.currDiv.parentElement && this.currDiv.parentElement.removeChild(this.currDiv))
	},
	init: function () {
		this.thumbDiv.width = this.thumbDiv.clientWidth;
		this.thumbDiv.height = this.thumbDiv.clientHeight;
		var a = cp.PB.loadedAssetArr[this.thumbBase];
		this.progressDiv.parentObj = this;
		cp.registerGestureEvent(this.progressDiv, cp.GESTURE_EVENT_TYPES.TAP, this.moveSlider);
		this.progressDiv.updateSlider = this.updateSlider;
		this.progressDiv.thumbBasePattern = this.progressDiv.getContext("2d").createPattern(a, "repeat");
		a = cp.PB.loadedAssetArr[this.progress];
		this.progressDiv.progressPattern = this.progressDiv.getContext("2d").createPattern(a, "repeat");
		this.progressDiv.width = this.currDiv.width;
		this.progressDiv.height = a.height;
		this.progressDiv.style.marginTop = "0px";
		this.progressDiv.style.marginLeft = this.thumbDiv.width / 2 + "px";
		this.progressDiv.maxFrameWidth = this.progressDiv.width;
		this.progressDiv.maxFrameHeight = this.progressDiv.height;
		this.progressDiv.style.marginTop = 0 == cp.PB.MP.PBP.tworow ? (this.playBarDiv.height - this.progressDiv.height) / 2 + "px" : (this.playBarDiv.height / 2 - this.progressDiv.height) / 2 + "px";
		this.currDiv.width += this.thumbDiv.width;
		this.currDiv.style.width = this.currDiv.width + "px";
		this.currDiv.height = this.playBarDiv.height;
		cp.device == cp.IDEVICE ? this.thumbDiv.ontouchstart = this.onMouseDown : this.thumbDiv.onmousedown = this.onMouseDown;
		a = parseFloat(window.getComputedStyle(this.thumbDiv).top.replace("px", ""));
		if (1 == cp.PB.MP.PBP.tworow) {
			var b = 0;
			cp.responsive && (b = -this.thumbDiv.clientHeight / 2);
			this.thumbDiv.style.top = a + b + this.playBarDiv.height / 2 + (this.playBarDiv.height / 2 - this.progressDiv.height) / 2 + "px"
		} else this.thumbDiv.style.top = a + (this.playBarDiv.height - this.progressDiv.height) / 2 + "px";
		cp.pg || cp.createAlternativeAccessibleText(this.thumbDiv,
			"Progress, Slide " + (cpInfoCurrentSlideIndex + 1) + " of " + cp.movie.stage.slides.length, "slider")
	},
	refresh: function () {
		cp.responsive ? this.updateSlider(cpInfoCurrentFrame) : this.updateSlider(1)
	},
	onMouseDown: function (a) {
		this.underDrag = !0;
		cp.em && cp.em.fireEvent("CPStartPlaybarScrubbing");
		this.style.position = "absolute";
		var b = document.getElementById("playbarSliderThumb").progressDiv,
			c = b.progLen,
			d = document.onmousemove,
			f = document.onmouseup;
		cp.device == cp.IDEVICE && (d = document.ontouchmove, f = document.ontouchend);
		var g =
			a;
		cp.device == cp.IDEVICE && (g = a.touches[0]);
		a = function (a) {
			cp.playbarMoved();
			a.stopPropagation();
			var d = a;
			if (cp.device == cp.IDEVICE) {
				d = a.touches[0];
				a.preventDefault()
			}
			a = 0;
			a = cp.PB.isVertical ? d.clientY - g.clientY : d.clientX - g.clientX;
			if (a != 0) {
				d = Math.round((c + a) * cp.PB.MP.project_main.to / b.width);
				if (d < 1) d = 1;
				else if (cp.frame > cp.PB.MP.project_main.to) d = cp.PB.MP.project_main.to;
				if (cp.PB.mainMovie && !cp.PB.mainMovie.virgin) {
					cp.PB.mainMovie.pause(cp.ReasonForPause.PLAYBAR_ACTION);
					cp.PB.mainMovie.jumpToFrame(d)
				}
			}
		};
		cp.device == cp.IDEVICE ? document.ontouchmove = a : document.onmousemove = a;
		a = function () {
			if (cp.device == cp.IDEVICE) {
				document.ontouchmove = d;
				document.ontouchend = f
			} else {
				document.onmousemove = d;
				document.onmouseup = f
			}
			cp.em && cp.em.fireEvent("CPEndPlaybarScrubbing")
		};
		cp.device == cp.IDEVICE ? document.ontouchend = a : document.onmouseup = a;
		return !1
	},
	moveSlider: function (a) {
		cp.playbarMoved();
		a = Math.round((void 0 == a.offsetX ? a.layerX - a.currentTarget.offsetLeft : a.offsetX) * cp.PB.MP.project_main.to / this.width);
		1 > a ? a = 1 : a > cp.PB.MP.project_main.to &&
			(a = cp.PB.MP.project_main.to);
		cp.PB.mainMovie && !cp.PB.mainMovie.virgin && (cp.PB.mainMovie.pause(cp.ReasonForPause.PLAYBAR_ACTION), cp.PB.mainMovie.jumpToFrame(a))
	},
	updateSlider: function (a) {
		a > cp.PB.MP.project_main.to && (a = cp.PB.MP.project_main.to);
		var b = this.progressDiv;
		null == b && (b = this);
		var c = b.getContext("2d");
		c.clearRect(0, 0, b.width, b.height);
		c.fillStyle = b.thumbBasePattern;
		c.fillRect(0, 0, b.width, b.height);
		c.fillStyle = b.progressPattern;
		c.fillRect(0, 0, b.width * a / cp.PB.MP.project_main.to, b.height);
		b.progLen =
			b.width * a / cp.PB.MP.project_main.to;
		b.thumbDiv.style.marginLeft = b.progLen + "px";
		b.thumbDiv.title = cpInfoCurrentSlideIndex + 1 + "/" + cp.movie.stage.slides.length;
		cp.modifyAlternativeAccessibleText(this.thumbDiv, "Progress, Slide " + (cpInfoCurrentSlideIndex + 1) + " of " + cp.movie.stage.slides.length)
	}
};
cp.PB.playBarConstruct = function (a) {
	this.playBarDiv = a;
	this.slider = this.bkGrndDiv = null;
	this.firstRowArray = [];
	this.secondRowArray = [];
	this.btnMap = {};
	this.secondRowMinWidth = this.firstRowMinWidth = this.minWidth = 0;
	this.logo = null
};
cp.PB.playBarConstruct.prototype = {
	createSlider: function (a, b, c) {
		this.slider && cp.responsive && this.slider.destroy();
		if (void 0 == cp.PB.MP.playBarProperties.hasSlider || 0 == cp.PB.MP.playBarProperties.hasSlider) return 0;
		this.slider = new cp.PB.PlayBarSlider(this.bkGrndDiv);
		if (this.slider.getWidth() + 4 * cp.PB.kBtnMargin + c + 2 * cp.PB.kIndentMargin > cp.PB.playBarDim) return this.slider.destroy(), 0;
		b[b.length] = this.slider;
		this.slider.expectedWidth = this.slider.getWidth();
		return this.slider.expectedWidth + 4 * cp.PB.kBtnMargin
	},
	createBackground: function () {
		var a = document.getElementById("playbarBkGrnd");
		a.height = a.clientHeight;
		this.bkGrndDiv = a
	},
	setBackGroundWidth: function (a) {
		this.bkGrndDiv.width = a;
		this.bkGrndDiv.style.width = a + "px";
		a = cp.PB.loadedAssetArr.BackGround.src;
		if (cp.PB.MP.PBP.applyColors) {
			var b = document.createElement("canvas");
			b.width = this.bkGrndDiv.width;
			b.height = this.bkGrndDiv.height;
			a = b.getContext("2d");
			a.clearRect(0, 0, this.bkGrndDiv.width, this.bkGrndDiv.height);
			a.globalAlpha = cp.PB.MP.PBP.alpha / 100;
			cp.setFillStrokeStyle(cp.PB.MP.PBP.BkColor,
				b);
			a.fillRect(0, 0, this.bkGrndDiv.width, this.bkGrndDiv.height);
			"" == this.bkGrndDiv.style.backgroundImage && (a = b.toDataURL("image/png"), this.bkGrndDiv.style.backgroundImage = 'url("' + a + '")');
			this.bkGrndDiv.style.backgroundSize = "100% 100%"
		} else b = document.createElement("canvas"), this.bkGrndDiv.insertBefore(b, this.bkGrndDiv.firstChild), b.width = this.bkGrndDiv.width, b.height = this.bkGrndDiv.height, b.style.position = "absolute", b.style.display = "block", a = b.getContext("2d"), a.clearRect(0, 0, this.bkGrndDiv.width, this.bkGrndDiv.height),
		a.globalAlpha = cp.PB.MP.PBP.alpha / 100, a.drawImage(cp.PB.loadedAssetArr.BackGround, 0, 0, this.bkGrndDiv.width, this.bkGrndDiv.height), b.style.zIndex = -10
	},
	createButton: function (a, b, c, d, f, g) {
		var e, h;
		if (cp.responsive && (e = this.btnMap[b[0]])) e.currDiv && (h = e.currDiv.currImageName), e.destroy();
		if (b[0] != cp.PB.Btns.kBtnInfo && b[0] != cp.PB.Btns.kBtnPrint) {
			if (void 0 == cp.PB.MP.playBarProperties["has" + b[0]] || 0 == cp.PB.MP.playBarProperties["has" + b[0]]) return 0
		} else if (b[0] == cp.PB.Btns.kBtnInfo && !1 == cp.PB.playbarHasInfo ||
			b[0] == cp.PB.Btns.kBtnPrint && !1 == cp.PB.playbarHasPrint) return 0;
		if (void 0 == cp.PB.loadedAssetArr[b[0]]) return 0;
		e = new cp.PB.PlayBarButton(b[0], this.bkGrndDiv, d);
		if (e.getWidth() + cp.PB.kBtnMargin + f + 2 * cp.PB.kIndentMargin > cp.PB.playBarDim) return e.destroy(), 0;
		e.setImage("Shadow");
		e.setImage("Stroke");
		e.setImage("Color");
		e.setImage("Shade");
		e.setImage("InnerStroke");
		e.setImage("Glow");
		e.setImage("InnerShade");
		a && (e.currDiv.style.display = "block");
		for (d = 0; d < b.length; ++d) e.setIcon(b[d]), a && e.changeImage(h),
		this.btnMap[b[d]] = e;
		e.currDiv.setAttribute("tabindex", g);
		cp.createAlternativeAccessibleText(e.currDiv, cp.localizeToolTips(b[0]), "");
		e.currDiv.onmouseover = e.onMouseOver;
		cp.registerGestureEvent(e.currDiv, cp.GESTURE_EVENT_TYPES.TAP, e.toggleImage);
		e.currDiv.onmouseout = e.onMouseOut;
		c[c.length] = e;
		e.expectedWidth = e.getWidth();
		b[0] == cp.PB.Btns.kBtnExit && cp.PB.hideExitButton && (e.currDiv && e.currDiv.style.display) && (e.currDiv.style.display = "none");
		return e.expectedWidth + cp.PB.kBtnMargin
	},
	createLogo: function (a,
		b) {
		if (!1 == cp.PB.playbarHasLogo) return 0;
		var c;
		a ? (c = document.getElementById("playbarLogo"), this.bkGrndDiv.removeChild(c), this.bkGrndDiv.appendChild(c)) : (c = document.createElement("div"), c.id = "playbarLogo", this.bkGrndDiv.appendChild(c), c.setAttribute("class", "playbarLogo"));
		c.style.marginTop = 0 == cp.PB.MP.PBP.tworow ? (this.bkGrndDiv.height - c.clientHeight) / 2 + "px" : "0px";
		if (c.clientWidth + cp.PB.kBtnMargin + b + 2 * cp.PB.kIndentMargin > cp.PB.playBarDim) return this.bkGrndDiv.removeChild(c), 0;
		this.logo = c;
		return c.clientWidth +
			cp.PB.kBtnMargin
	},
	initComponents: function (a) {
		var b = cp.D.quizzingData.quizBranchAware;
		if (0 == cp.PB.MP.PBP.tworow) {
			for (var c = cp.PB.kIndentMargin, d = 0, d = void 0 == this.slider && !b ? 1 < this.firstRowArray.length ? (this.bkGrndDiv.width - this.firstRowMinWidth) / (this.firstRowArray.length - 1) : (this.bkGrndDiv.width - this.firstRowMinWidth) / 2 : 0, b = 0; b < this.firstRowArray.length; ++b) cp.responsive && 0 >= this.firstRowArray[b].expectedWidth || (c = this.firstRowArray[b].setPosNWidth(a, c, 0, this.firstRowArray[b].expectedWidth), c += d);
			null != this.logo && (this.logo.style.marginLeft = c + "px")
		} else {
			for (var c = cp.PB.kIndentMargin, d = 1 < this.firstRowArray.length ? (this.bkGrndDiv.width - this.firstRowMinWidth) / (this.firstRowArray.length - 1) : (this.bkGrndDiv.width - this.firstRowMinWidth) / 2, f = 0, b = 0; b < this.firstRowArray.length; ++b) c = this.firstRowArray[b].setPosNWidth(a, c, (this.bkGrndDiv.height / 2 - this.firstRowArray[b].currDiv.height) / 2, this.firstRowArray[b].expectedWidth), c += d, f < (this.bkGrndDiv.height / 2 + this.firstRowArray[b].currDiv.height) / 2 && (f = (this.bkGrndDiv.height /
				2 + this.firstRowArray[b].currDiv.height) / 2);
			c = cp.PB.kIndentMargin;
			d = void 0 == this.slider ? 1 < this.secondRowArray.length ? (this.bkGrndDiv.width - this.secondRowMinWidth) / (this.secondRowArray.length - 1) : (this.bkGrndDiv.width - this.secondRowMinWidth) / 2 : 0;
			for (b = 0; b < this.secondRowArray.length; ++b) c = this.secondRowArray[b].setPosNWidth(a, c, this.bkGrndDiv.height / 2 - f + (this.bkGrndDiv.height / 2 - this.secondRowArray[b].currDiv.height) / 2, this.secondRowArray[b].expectedWidth), c += d;
			null != this.logo && (this.logo.style.marginLeft =
				c + "px", this.logo.style.marginTop = this.bkGrndDiv.height / 2 - f + (this.bkGrndDiv.height / 2 - this.secondRowArray[b].currDiv.height) / 2 + "px")
		}
	},
	transformPlaybar: function () {
		var a = "matrix(",
			a = cp.PB.isVertical ? a + "0,1,-1,0," : a + "1,0,0,1,";
		this.playBarDiv.style.left = "0px";
		this.playBarDiv.style.top = "0px";
		var b = 0,
			c = 0;
		switch (cp.PB.MP.PBP.position) {
			case 2:
				b += cp.PB.playBarOtherDim, cp.PB.MP.PBP.overlay && (b -= this.bkGrndDiv.height);
			case 0:
				b += (-this.bkGrndDiv.width + this.bkGrndDiv.height) / 2;
				cp.loadedModules.toc && 1 == cp.toc.movieProperties.tocProperties.position &&
					(b += cp.D.tocProperties.width);
				switch (cp.PB.MP.PBP.layout) {
					case 0:
						c = (this.bkGrndDiv.width - this.bkGrndDiv.height) / 2;
						break;
					case 1:
						c = (cp.PB.playBarDim - this.bkGrndDiv.height) / 2;
						break;
					case 2:
						c = cp.PB.playBarDim - (this.bkGrndDiv.width + this.bkGrndDiv.height) / 2;
						break;
					case 3:
						c = (cp.PB.playBarDim - this.bkGrndDiv.height) / 2
				}
				break;
			case 3:
				c += cp.PB.playBarOtherDim, cp.PB.MP.PBP.overlay && (c -= this.bkGrndDiv.height);
			case 1:
				switch (cp.PB.MP.PBP.layout) {
					case 0:
						b = 0;
						break;
					case 1:
						b = cp.PB.playBarDim - this.bkGrndDiv.width;
						break;
					case 2:
						b = (cp.PB.playBarDim - this.bkGrndDiv.width) / 2;
						break;
					case 3:
						b = 0
				}
				cp.loadedModules.toc && (1 == cp.toc.movieProperties.tocProperties.position && !cp.toc.movieProperties.tocProperties.overlay) && (b += cp.D.tocProperties.width)
		}
		cp.applyTransform(this.playBarDiv, a + (b + "," + c + ")"))
	},
	applyColor: function (a, b) {
		var c = document.createElement("canvas"),
			d = document.createElement("canvas");
		d.width = b.width;
		d.height = b.height;
		c.width = b.width;
		c.height = b.height;
		var f = c.getContext("2d");
		f.clearRect(0, 0, b.width, b.height);
		cp.setFillStrokeStyle(a,
			c, void 0, !0);
		f.fillRect(0, 0, b.width, b.height);
		f = d.getContext("2d");
		f.clearRect(0, 0, b.width, b.height);
		f.globalAlpha = a.alpha / 100;
		f.drawImage(b, 0, 0, b.width, b.height);
		f.globalCompositeOperation = "source-atop";
		f.drawImage(c, 0, 0, b.width, b.height);
		return d
	},
	setHasButtons: function () {
		if (cp.responsive && cp.PB && (cp.PB.MP && cp.PB.MP.PBP) && cp.responsiveButtons) {
			cp.PB.MP.PBPO || (cp.PB.MP.PBPO = {});
			var a = cp.responsiveAllBPWidths.indexOf(cp.ResponsiveProjWidth);
			if (!(0 > a || a >= cp.responsiveAllBPWidths.length)) {
				var a = cp.responsiveAllBPWidths.length -
					1 - a,
					b;
				for (b in cp.responsiveButtons) {
					if (void 0 === cp.PB.MP.PBPO["has" + b] || "undefined" === cp.PB.MP.PBPO["has" + b]) cp.PB.MP.PBPO["has" + b] = cp.PB.MP.PBP["has" + b];
					cp.PB.MP.PBPO["has" + b] && (cp.PB.MP.PBP["has" + b] = cp.responsiveButtons[b][a])
				}
			}
		}
	},
	layoutPlaybar: function (a) {
		this.firstRowArray = [];
		this.secondRowArray = [];
		var b = 0,
			c = -cp.PB.kBtnMargin;
		cp.PB.isVertical = 0 == cp.PB.MP.PBP.position % 2 ? !0 : !1;
		cp.responsive ? (this.setHasButtons(), cp.PB.playBarDim = cp("project").clientWidth * cp.respGestureScaleFactor > window.innerWidth ?
			window.innerWidth : cp("project").clientWidth) : cp.PB.playBarDim = cp.PB.isVertical ? cp.PB.MP.project.h : cp.PB.MP.project.w;
		cp.PB.playBarOtherDim = !1 == cp.PB.isVertical ? cp.PB.MP.project.h : cp.PB.MP.project.w;
		this.createBackground(cp.PB.playBarDim);
		if (cp.PB.MP.PBP.tworow) c += this.createButton(a, [cp.PB.Btns.kBtnRewind], this.firstRowArray, this.rewindHandler, c), c += this.createButton(a, [cp.PB.Btns.kBtnBackward], this.firstRowArray, this.backwardHandler, c), c += this.createButton(a, [cp.PB.Btns.kBtnPlay, cp.PB.Btns.kBtnPause],
			this.firstRowArray, this.playPauseHandler, c), c += this.createButton(a, [cp.PB.Btns.kBtnForward], this.firstRowArray, this.forwardHandler, c), c += this.createButton(a, [cp.PB.Btns.kBtnFastForward, cp.PB.Btns.kBtnFastForward1, cp.PB.Btns.kBtnFastForward2], this.firstRowArray, this.fastForwardHandler, c), this.firstRowMinWidth = c += 2 * cp.PB.kIndentMargin, c = -cp.PB.kBtnMargin, c += this.createButton(a, [cp.PB.Btns.kBtnTOC], this.secondRowArray, this.tocHandler, c), c += this.createButton(a, [cp.PB.Btns.kBtnPrint], this.secondRowArray,
			null, c), c += this.createButton(a, [cp.PB.Btns.kBtnExit], this.secondRowArray, this.exitHandler, c), d = this.createSlider(a, this.secondRowArray, c), cp.device != cp.IDEVICE && (c += this.createButton(a, [cp.PB.Btns.kBtnAudioOn, cp.PB.Btns.kBtnAudioOff], this.secondRowArray, this.audioOnOffHandler, c)), c += this.createButton(a, [cp.PB.Btns.kBtnCC], this.secondRowArray, this.ccHandler, c), c += this.createButton(a, [cp.PB.Btns.kBtnInfo], this.secondRowArray, this.showInfoHandler, c), c += this.createLogo(a, c), c += 2 * cp.PB.kIndentMargin, this.secondRowMinWidth =
			c + d, this.minWidth = this.firstRowMinWidth > this.secondRowMinWidth ? this.firstRowMinWidth : this.secondRowMinWidth, 3 == cp.PB.MP.PBP.layout ? (b = cp.PB.playBarDim, void 0 != this.slider && (d = b - c - 4 * cp.PB.kBtnMargin, this.slider.expectedWidth = d, cp.responsive && 58 >= this.slider.expectedWidth && (this.slider.destroy(), this.slider = void 0))) : b = this.minWidth;
		else {
			if (0 === cp.D.pref.rkt) {
				var c = c + this.createButton(a, [cp.PB.Btns.kBtnRewind], this.firstRowArray, this.rewindHandler, c, 10001),
					c = c + this.createButton(a, [cp.PB.Btns.kBtnPlay,
						cp.PB.Btns.kBtnPause
					], this.firstRowArray, this.playPauseHandler, c, 10002),
					c = c + this.createButton(a, [cp.PB.Btns.kBtnBackward], this.firstRowArray, this.backwardHandler, c, 10003),
					c = c + this.createButton(a, [cp.PB.Btns.kBtnForward], this.firstRowArray, this.forwardHandler, c, 10004),
					c = c + this.createButton(a, [cp.PB.Btns.kBtnFastForward, cp.PB.Btns.kBtnFastForward1, cp.PB.Btns.kBtnFastForward2], this.firstRowArray, this.fastForwardHandler, c, 10005),
					d = this.createSlider(a, this.firstRowArray, c);
				cp.device != cp.IDEVICE && (c += this.createButton(a, [cp.PB.Btns.kBtnAudioOn, cp.PB.Btns.kBtnAudioOff], this.firstRowArray, this.audioOnOffHandler, c, 10007));
				c += this.createButton(a, [cp.PB.Btns.kBtnCC], this.firstRowArray, this.ccHandler, c, 10008);
				c += this.createButton(a, [cp.PB.Btns.kBtnTOC], this.firstRowArray, this.tocHandler, c, 10009);
				c += this.createButton(a, [cp.PB.Btns.kBtnPrint], this.firstRowArray, null, c, 10010);
				c += this.createButton(a, [cp.PB.Btns.kBtnExit], this.firstRowArray, this.exitHandler, c, 10011);
				c += this.createButton(a, [cp.PB.Btns.kBtnInfo], this.firstRowArray,
					this.showInfoHandler, c, 10012)
			} else c += this.createButton(a, [cp.PB.Btns.kBtnRewind], this.firstRowArray, this.rewindHandler, c, -1), c += this.createButton(a, [cp.PB.Btns.kBtnPlay, cp.PB.Btns.kBtnPause], this.firstRowArray, this.playPauseHandler, c, -1), c += this.createButton(a, [cp.PB.Btns.kBtnBackward], this.firstRowArray, this.backwardHandler, c, -1), c += this.createButton(a, [cp.PB.Btns.kBtnForward], this.firstRowArray, this.forwardHandler, c, -1), c += this.createButton(a, [cp.PB.Btns.kBtnFastForward, cp.PB.Btns.kBtnFastForward1,
				cp.PB.Btns.kBtnFastForward2
			], this.firstRowArray, this.fastForwardHandler, c, -1), d = this.createSlider(a, this.firstRowArray, c), cp.device != cp.IDEVICE && (c += this.createButton(a, [cp.PB.Btns.kBtnAudioOn, cp.PB.Btns.kBtnAudioOff], this.firstRowArray, this.audioOnOffHandler, c, -1)), c += this.createButton(a, [cp.PB.Btns.kBtnCC], this.firstRowArray, this.ccHandler, c, -1), c += this.createButton(a, [cp.PB.Btns.kBtnTOC], this.firstRowArray, this.tocHandler, c, -1), c += this.createButton(a, [cp.PB.Btns.kBtnPrint], this.firstRowArray, null,
				c, -1), c += this.createButton(a, [cp.PB.Btns.kBtnExit], this.firstRowArray, this.exitHandler, c, -1), c += this.createButton(a, [cp.PB.Btns.kBtnInfo], this.firstRowArray, this.showInfoHandler, c, -1);
			c += this.createLogo(a, c);
			this.minWidth = this.firstRowMinWidth = c += 2 * cp.PB.kIndentMargin;
			3 == cp.PB.MP.PBP.layout ? (b = cp.PB.playBarDim, void 0 != this.slider && (d = b - c - 4 * cp.PB.kBtnMargin, this.slider.expectedWidth = d, cp.responsive && 58 >= this.slider.expectedWidth && (this.slider.destroy(), this.slider = void 0))) : b = c + d
		}
		this.setBackGroundWidth(b);
		this.initComponents(a);
		cp.responsive || this.transformPlaybar();
		this.playBarDiv.constrObj = this;
		this.playBarDiv.play = this.onMovieResume;
		this.playBarDiv.pause = this.onMoviePaused;
		this.playBarDiv.mute = this.onAudioOff;
		this.playBarDiv.unmute = this.onAudioOn;
		cp.handleSpecialForPlaybar(this);
		cp.PB.MP.PBP.showOnHover && !cp("playbar").animator && (a = new cp.PB.playbarAnimator(this.playBarDiv), a.init(cp.PB.playBarHeight), this.playBarDiv.animator = a)
	},
	morphImages: function () {
		for (var a = 0; a < cp.playbarAssetArr.length; ++a) {
			var b =
				cp.PB.loadedAssetArr[cp.playbarAssetArr[a]];
			if (void 0 != b) {
				var c = b.playbarassetName,
					c = c.replace("Small", "");
				if ("Glow" == c || "Progress" == c) cp.PB.loadedAssetArr[cp.playbarAssetArr[a]] = this.applyColor(cp.PB.MP.PBP.GlowColor, b);
				else if ("Color" == c || "ThumbBase" == c) cp.PB.loadedAssetArr[cp.playbarAssetArr[a]] = this.applyColor(cp.PB.MP.PBP.FaceColor, b);
				else if (c == cp.PB.Btns.kBtnAudioOff || c == cp.PB.Btns.kBtnAudioOn || c == cp.PB.Btns.kBtnBackward || c == cp.PB.Btns.kBtnCC || c == cp.PB.Btns.kBtnExit || c == cp.PB.Btns.kBtnFastForward ||
					c == cp.PB.Btns.kBtnFastForward1 || c == cp.PB.Btns.kBtnFastForward2 || c == cp.PB.Btns.kBtnForward || c == cp.PB.Btns.kBtnPlay || c == cp.PB.Btns.kBtnPause || c == cp.PB.Btns.kBtnRewind || c == cp.PB.Btns.kBtnTOC) cp.PB.loadedAssetArr[cp.playbarAssetArr[a]] = this.applyColor(cp.PB.MP.PBP.IconColor, b)
			}
		}
	},
	exitHandler: function () {
		DoCPExit && DoCPExit()
	},
	showInfoHandler: function () {
		cp.infoBgImg ? cp.showInfoDialog() : (cp.infoBgImg = new Image, cp.infoBgImg.onload = function () {
			cp.showInfoDialog()
		}, cp.infoBgImg.src = "assets/playbar/PlaybarIcons/infobg.png")
	},
	audioOnOffHandler: function () {
		cp.toggleMute()
	},
	playPauseHandler: function () {
		cp.playPause(!0)
	},
	backwardHandler: function () {
		cp.goToPreviousSlide()
	},
	forwardHandler: function () {
		cp.goToNextSlide()
	},
	fastForwardHandler: function () {
		cp.fastForward();
		cp.movie.play(cp.ReasonForPlay.PLAYBAR_ACTION)
	},
	rewindHandler: function () {
		cp.rewind()
	},
	ccHandler: function () {
		cp.showHideCC()
	},
	tocHandler: function () {
		cp.showHideTOC()
	},
	onMoviePaused: function () {
		var a = this.constrObj;
		void 0 != a && void 0 != a.btnMap[cp.PB.Btns.kBtnPause] && a.btnMap[cp.PB.Btns.kBtnPause].changeImage(cp.PB.Btns.kBtnPlay)
	},
	onMovieResume: function () {
		var a = this.constrObj;
		void 0 != a && void 0 != a.btnMap[cp.PB.Btns.kBtnPlay] && a.btnMap[cp.PB.Btns.kBtnPlay].changeImage(cp.PB.Btns.kBtnPause)
	},
	onAudioOn: function () {
		var a = this.constrObj;
		void 0 != a && void 0 != a.btnMap[cp.PB.Btns.kBtnAudioOff] && a.btnMap[cp.PB.Btns.kBtnAudioOff].changeImage(cp.PB.Btns.kBtnAudioOn)
	},
	onAudioOff: function () {
		var a = this.constrObj;
		void 0 != a && void 0 != a.btnMap[cp.PB.Btns.kBtnAudioOn] && a.btnMap[cp.PB.Btns.kBtnAudioOn].changeImage(cp.PB.Btns.kBtnAudioOff)
	},
	playbarAssetsLoaded: function (a) {
		cp.PB.playbarCreated = !1;
		a && a.target && (a = a.target.playbarassetName, !1 == cp.PB.assetsLoadedArray[a] && (cp.PB.assetsLoadedArray[a] = !0, cp.PB.assetsLoaded++));
		cp.PB.assetsLoaded == cp.playbarAssetArr.length && (cp.PB.assetsLoaded = 0, cp.PB.MP.PBP.applyColors && this.parentObj.morphImages(), this.parentObj.layoutPlaybar(), cp.PB.playbarCreated = !0, cp.complete())
	},
	createBkDiv: function () {
		if (!(0 < document.getElementsByClassName("playbarBackGround").length)) {
			var a = document.createElement("div");
			this.playBarDiv.appendChild(a);
			a.setAttribute("class",
				"playbarBackGround");
			a.style.webkitBoxShadow = "";
			a.style.boxShadow = "";
			a.style.mozBoxShadow = "";
			a.id = "playbarBkGrnd";
			cp.PB.MP.PBP.tworow && (a.style.height = 2 * a.clientHeight + "px");
			a = parseFloat(window.getComputedStyle(a).height.replace("px", ""));
			cp.PB.playBarHeight = a;
			cp.PB.MP.PBP.playBarHeight = a;
			if (cp.PB.MP.PBP.overlay) cp.setMovieLeftTopRightBottom(0, 0, 0, 0);
			else {
				var b = 0,
					c = 0,
					d = 0,
					f = 0;
				0 == cp.PB.MP.PBP.position ? b = a : 1 == cp.PB.MP.PBP.position ? c = a : 2 == cp.PB.MP.PBP.position ? d = a : 3 == cp.PB.MP.PBP.position && (f = a);
				cp.setMovieLeftTopRightBottom(b,
					c, d, f)
			}
			3 == cp.PB.MP.PBP.position ? cp.setCCPosition(a) : cp.setCCPosition(0)
		}
	},
	loadPlaybarAssets: function () {
		for (var a = 0; a < cp.playbarAssetArr.length; ++a) {
			var b = new Image;
			b.playbarassetName = cp.playbarAssetArr[a];
			cp.playbarAssetArr[a] == cp.PB.Btns.kBtnLogo && (cp.PB.playbarHasLogo = !0);
			cp.playbarAssetArr[a] == cp.PB.Btns.kBtnInfo && (cp.PB.playbarHasInfo = !0);
			cp.playbarAssetArr[a] == cp.PB.Btns.kBtnPrint && (cp.PB.playbarHasPrint = !0);
			b.parentObj = this;
			cp.PB.loadedAssetArr[cp.playbarAssetArr[a]] = b;
			b.onload = this.playbarAssetsLoaded;
			b.onerror = this.playbarAssetsLoaded;
			b.src = cp.PB.playBarIconsFolder + cp.playbarAssetArr[a] + cp.PB.PNGSuffix
		}
	},
	shrinkPlaybarAssetsArr: function () {
		var a = {}, b;
		for (b in cp.PB.Btns) a[cp.PB.Btns[b]] = cp.playbarAssetArr.indexOf(cp.PB.Btns[b]);
		!cp.PB.MP.PBP.hasRewind && 0 <= a[cp.PB.Btns.kBtnRewind] && delete cp.playbarAssetArr[a[cp.PB.Btns.kBtnRewind]];
		!cp.PB.MP.PBP.hasBackward && 0 <= a[cp.PB.Btns.kBtnBackward] && delete cp.playbarAssetArr[a[cp.PB.Btns.kBtnBackward]];
		!cp.PB.MP.PBP.hasForward && 0 <= a[cp.PB.Btns.kBtnForward] &&
			delete cp.playbarAssetArr[a[cp.PB.Btns.kBtnForward]];
		!cp.PB.MP.PBP.hasCC && 0 <= a[cp.PB.Btns.kBtnCC] && delete cp.playbarAssetArr[a[cp.PB.Btns.kBtnCC]];
		!cp.PB.MP.PBP.hasExit && 0 <= a[cp.PB.Btns.kBtnExit] && delete cp.playbarAssetArr[a[cp.PB.Btns.kBtnExit]];
		cp.PB.MP.PBP.hasPlay || (0 <= a[cp.PB.Btns.kBtnPlay] && delete cp.playbarAssetArr[a[cp.PB.Btns.kBtnPlay]], 0 <= a[cp.PB.Btns.kBtnPause] && delete cp.playbarAssetArr[a[cp.PB.Btns.kBtnPause]]);
		cp.PB.MP.PBP.hasSlider || (0 <= a[cp.PB.Btns.kBtnProgress] && delete cp.playbarAssetArr[a[cp.PB.Btns.kBtnProgress]],
			0 <= a[cp.PB.Btns.kBtnThumb] && delete cp.playbarAssetArr[a[cp.PB.Btns.kBtnThumb]], 0 <= a[cp.PB.Btns.kBtnThumbBase] && delete cp.playbarAssetArr[a[cp.PB.Btns.kBtnThumbBase]]);
		cp.PB.MP.PBP.hasAudioOn || (0 <= a[cp.PB.Btns.kBtnAudioOn] && delete cp.playbarAssetArr[a[cp.PB.Btns.kBtnAudioOn]], 0 <= a[cp.PB.Btns.kBtnAudioOff] && delete cp.playbarAssetArr[a[cp.PB.Btns.kBtnAudioOff]]);
		cp.PB.MP.PBP.hasFastForward || (0 <= a[cp.PB.Btns.kBtnFastForward] && delete cp.playbarAssetArr[a[cp.PB.Btns.kBtnFastForward]], 0 <= a[cp.PB.Btns.kBtnFastForward1] &&
			delete cp.playbarAssetArr[a[cp.PB.Btns.kBtnFastForward1]], 0 <= a[cp.PB.Btns.kBtnFastForward2] && delete cp.playbarAssetArr[a[cp.PB.Btns.kBtnFastForward2]]);
		(!cp.PB.MP.project.hasTOC || !cp.PB.MP.tocProperties.overlay) && 0 <= a[cp.PB.Btns.kBtnTOC] && delete cp.playbarAssetArr[a[cp.PB.Btns.kBtnTOC]];
		a = !1;
		for (b in cp.PB.Btns) cp.playbarAssetArr.indexOf(0 <= cp.PB.Btns[b]) && (a = !0);
		if (!a)
			for (b = 0; b < cp.PB.BtnStyleImages.length; ++b) a = cp.playbarAssetArr.indexOf(cp.PB.BtnStyleImages[b]), 0 <= a && cp.playbarAssetArr.splice(a,
				1);
		for (b = cp.playbarAssetArr.length - 1; 0 <= b; --b) void 0 == cp.playbarAssetArr[b] && cp.playbarAssetArr.splice(b, 1)
	}
};
cp.loadplaybar = function () {
	!0 != cp.PB.playbarCreated ? (cp.PB.rootObj.createBkDiv(), cp.PB.rootObj.shrinkPlaybarAssetsArr(), cp.PB.rootObj.loadPlaybarAssets()) : cp.PB.rootObj.layoutPlaybar(!0)
};
cp.PB.playbarAnimator = function (a) {
	this.endVal = this.startVal = 0;
	this.param = "";
	this.objDiv = a;
	this.totalSteps = 25;
	this.currStep = 0;
	this.direction = 1;
	this.intervalId = this.timeoutId = -1;
	this.isAnimating = !1
};
cp.PB.playbarAnimator.prototype = {
	init: function (a) {
		3 == cp.PB.MP.PBP.position ? (this.startVal = cp.responsive ? cp("div_Slide").getBoundingClientRect().bottom - a : parseFloat(window.getComputedStyle(this.objDiv).top.replace("px", "")), this.endVal = this.startVal + a, this.param = "top") : 2 == cp.PB.MP.PBP.position ? (this.startVal = cp.responsive ? this.objDiv.getBoundingClientRect().left : parseFloat(window.getComputedStyle(this.objDiv).left.replace("px", "")), this.endVal = this.startVal + a, cp.loadedModules.toc && 0 == cp.toc.movieProperties.tocProperties.position &&
			(this.endVal += cp.toc.movieProperties.tocProperties.width), this.param = "left") : 1 == cp.PB.MP.PBP.position ? (this.startVal = cp.responsive ? this.objDiv.getBoundingClientRect().top : parseFloat(window.getComputedStyle(this.objDiv).top.replace("px", "")), this.endVal = this.startVal - a, this.param = "top") : 0 == cp.PB.MP.PBP.position && (this.startVal = cp.responsive ? this.objDiv.getBoundingClientRect().left : parseFloat(window.getComputedStyle(this.objDiv).left.replace("px", "")), this.endVal = this.startVal - a, cp.loadedModules.toc &&
			1 == cp.toc.movieProperties.tocProperties.position && (this.endVal -= cp.toc.movieProperties.tocProperties.width), this.param = "left")
	},
	resetStartEndValForResponsive: function () {
		cp.responsive && (this.startVal = cp("div_Slide").getBoundingClientRect().bottom - cp.PB.playBarHeight, this.endVal = this.startVal + cp.PB.playBarHeight)
	},
	startTimer: function () {
		clearTimeout(this.timeoutId);
		this.timeoutId = setTimeout(this.hidePlaybar, 2E3)
	},
	easeOut: function (a, b) {
		var c = a + Math.pow(1 / this.totalSteps * this.currStep, 0.3) * (b - a);
		return Math.ceil(c)
	},
	beginAnim: function () {
		var a = document.getElementById("playbar");
		if (null != a) {
			a.style.position = "absolute";
			var b = a.animator;
			b.direction ? (b.currStep++, b.currStep >= b.totalSteps ? (clearInterval(b.intervalId), b.currStep = 0, b.isAnimating = !1, a.style[b.param] = b.endVal + "px") : a.style[b.param] = b.easeOut(b.startVal, b.endVal) + "px") : (b.currStep++, b.currStep >= b.totalSteps ? (clearInterval(b.intervalId), b.currStep = 0, b.isAnimating = !1, a.style[b.param] = b.startVal + "px") : a.style[b.param] = b.easeOut(b.endVal, b.startVal) + "px")
		}
	},
	hidePlaybar: function () {
		var a = document.getElementById("playbar");
		a && (clearTimeout(a.animator.timeoutId), a.animator.direction = 1, a.animator.isAnimating = !0, clearInterval(a.animator.intervalId), a.animator.playbarHidden = !0, a.animator.intervalId = setInterval(a.animator.beginAnim, 20))
	},
	showPlaybar: function (a) {
		var b = document.getElementById("playbar");
		if (b && (clearTimeout(b.animator.timeoutId), a || (b.animator.timeoutId = setTimeout(b.animator.hidePlaybar, 2E3)), !(b.animator.isAnimating && 0 == b.animator.direction) &&
			parseFloat(window.getComputedStyle(b)[b.animator.param].replace("px", "")) != this.startVal)) b.animator.direction = 0, b.animator.isAnimating = !0, clearInterval(b.animator.intervalId), b.animator.playbarHidden = !1, b.animator.intervalId = setInterval(b.animator.beginAnim, 20)
	}
};
cp.playBarInit = function (a, b) {
	if (!cp.PB.playbarCreated) {
		cp.PB.movieProperties = a;
		cp.PB.MP = cp.PB.movieProperties;
		cp.PB.MP.PBP = cp.PB.MP.playBarProperties;
		cp.PB.MP.PBP.locale && (cp.PB.toolTipLocaleIndex = cp.PB.MP.PBP.locale);
		var c = document.getElementById("playbar");
		cp.PB.MP.PBP.hasPlayBar || (c.style.display = "none", cp.setMovieLeftTopRightBottom(0, 0, 0, 0));
		cp.PB.rootObj = new cp.PB.playBarConstruct(c);
		for (var d = 0; d < cp.playbarAssetArr.length; d++) cp.PB.assetsLoadedArray[cp.playbarAssetArr[d]] = !1;
		cp.responsive ||
			(c.style.left = 0 == cp.PB.MP.PBP.position ? "0px" : (cp.PB.MP.project.hasTOC && !cp.PB.MP.tocProperties.overlay ? cp.D.tocProperties.width : 0) + "px", c.style.top = "0px");
		cp.PB.MP.project.hasTOC && cp.PB.MP.tocProperties.overlay && (cp.PB.MP.PBP.hasTOC = !0);
		cp.PB.MP.PBP.hasPlayBar && cp.loadplaybar(b)
	}
};
cp.setPlaybarCallback = function (a) {
	cp.PB.mainMovie = a
};
cp.CPProjInit();
cp.fireModuleReadyEvent = function (c) {
	if ((cp.IsRunningInACAP || !cp.isExpired && cp.passwordAccepted) && document.createEvent) {
		var b = document.createEvent("Events");
		b.initEvent("moduleReadyEvent", !0, !0, null);
		b.Data = cp.currentWindow.cpAPIInterface;
		c.dispatchEvent(b)
	}
};
cp.DoCPInit = function () {
	function c() {
		d();
		cp.Automate()
	}
	cp.disableInteractions = !1;
	cp.initializeGestureEvents && cp.initializeGestureEvents();
	if (!cp.pg && !cp.sbw && (!cp.getIsBrowserSupported() && !cp.isSupportedWebkitBasedBrowser()) && RuntimeBrowserDetect) {
		var b = "This browser does not support some of the content in the file you are trying to view. Use one of the following browsers:<ul><li>Internet Explorer 9 or later</li><li>Safari 5.1 or later</li><li>Google Chrome 17 or later</li><li>Firefox " + cp.FF_MIN_SUPPORTED_VERSION +
			" or later</li></ul>",
			a = "Adobe Captivate",
			f = "OK";
		if (cp && cp.model && cp.model.data) {
			var e = cp.model.data.rtDialog;
			e && (b = e.rtUnsupportedBowser, -1 != b.indexOf("@FFVERSION") && (b = b.replace("@FFVERSION", cp.FF_MIN_SUPPORTED_VERSION)), a = e.rtWarningTitle, f = e.rtokb)
		}
		RuntimeBrowserDetect.init(b, a, f)
	}
	cp.initiated = !1;
	cp.LMSTypes = {};
	cp.LMSTypes.NONE = 0;
	cp.LMSTypes.SCORM2004 = 1;
	cp.LMSTypes.SCORM12 = 2;
	cp.LMSTypes.Authorware = 3;
	cp.LMSTypes.AICC = 4;
	cp.LMSTypes.QuestionMark = 5;
	cp.LMSTypes.Email = 6;
	cp.LMSTypes.Breeze = 7;
	cp.LMSTypes.Acrobat =
		8;
	cp.LMSTypes.InternalServer = 9;
	cp.LMSTypes.TinCan = 10;
	var d = cp.ContinueCPInit,
		b = function () {
			jQuery(window).unload(function () {
				cp.UnloadActivties()
			})
		};
	cp.currentWindow = window;
	cp.parentWindow = window.parent;
	cp.topWindow = window.top;
	cp.setAllowForceQuitContainer = !0;
	try {
		cp.parentWindow.document && cp.verbose && console.log("tring to access document of parent window")
	} catch (g) {
		cp.parentWindow = cp.currentWindow
	}
	try {
		cp.topWindow.document && cp.verbose && console.log("tring to access document of top window")
	} catch (h) {
		cp.topWindow =
			cp.currentWindow;
		try {
			for (; cp.topWindow.parent.document;) cp.topWindow = cp.topWindow.parent
		} catch (i) {}
	}
	cp.IsRunningInACAP = 1 == cp.getParameterByName("capi_player");
	cp.IsRunningInALEC = 1 == cp.getParameterByName("CPinsideAlec");
	cp.IsRunningInRoboHelp = "true" == cp.getParameterByName("CPinsideRH");
	cp.currentWindow.cpAPIInterface = cp.IsRunningInACAP ? new cp.ACAPInterfaceClass : cp.IsRunningInConnect() ? new cp.ConnectInterfaceClass : new cp.CPAPIInterfaceClass;
	cp.currentWindow.cpAPIEventEmitter = cp.currentWindow.cpAPIInterface.getEventEmitter();
	if (cp.IsRunningInACAP) cp.fireModuleReadyEvent(cp.parentWindow), a = {
		Name: "CPGetEvent"
	}, a.cpName = a.Name, a.Data = {}, a.Data.ask = "resumeData", a.Data.callback = cp.handleACAPResumeData, a.cpData = a.Data, cp.currentWindow.cpAPIEventEmitter.trigger(a), b();
	else {
		if (!cp.IsRunningInACAP && cp.D && cp.D.quizReportingData) switch (a = cp.D.quizReportingData.lmsType, cp.LMSDriverHolder = void 0, a) {
			case cp.LMSTypes.SCORM2004:
			case cp.LMSTypes.SCORM12:
				cp.LMSDriverHolder = window;
				d = cp.LoadActivities;
				b();
				break;
			case cp.LMSTypes.TinCan:
				a =
					cp.D.project_main.useResponsive;
				cp.LMSDriverHolder = cp.m_isLMSPreview && a ? window.parent.parent : cp.m_isLMSPreview ? window.parent : window;
				d = cp.LoadActivities;
				b();
				cp.D.quizReportingData.lmsType = cp.LMSTypes.SCORM2004;
				break;
			case cp.LMSTypes.AICC:
				a = cp.D.project_main.useResponsive;
				cp.LMSDriverHolder = cp.m_isLMSPreview && a ? window.parent.parent : window.parent;
				cp.LMSDriverHolder.blockedForLMS || (cp.LMSDriverHolder.blockedForLMS = !0, cp("blockUserInteraction").style.display = "block", cp("blockUserInteraction").style.width =
					"100%", cp("blockUserInteraction").style.height = "100%");
				d = cp.LMSDriverHolder.HTMLContentLoadedCallback;
				b();
				break;
			default:
				cp.LMSDriverHolder = void 0
		}
		d = cp.IsRunningInConnect() ? cp.LoadActivities : d;
		d || (d = cp.ContinueCPInit, cp.NotRunningInLMS = !0);
		cp.pg && window.device && "iOS" === window.device.platform && StatusBar && StatusBar.overlaysWebView(!1);
		cp.pg && window.device && "Android" === window.device.platform ? cp.Phonegap.loadResources(c) : c()
	}
};
cp.ContinueCPInit = function () {
	cp.CPPreInit();
	cp.QuizLibraryInit();
	cp.CPPostInit();
	"undefined" != typeof CPAutomator && CPAutomator.init();
	document.getElementById("playImage").focus();
	cp.initiated = !0;
	cp.complete()
};
window.DoCPExit = function () {
	try {
		cp.em.fireEvent("CPMovieExit");
		if (cp.IsRunningInACAP || cp.IsRunningInALEC || cp.m_isLMSPreview) {
			cp.currentWindow.open("goodbye.html", "_self");
			return
		}
		if (cp.IsRunningInRoboHelp) {
			var c = cp.currentWindow.open("", "_self");
			c.close();
			return
		}
		cp.currentWindow != cp.parentWindow && cp.parentWindow && cp.parentWindow.hasOwnProperty("DoCPExit") ? cp.setAllowForceQuitContainer ? cp.parentWindow.DoCPExit() : cp.currentWindow.close() : cp.IsRunningInConnect() ? cp.setAllowForceQuitContainer ? cp.parentWindow.close() :
			cp.currentWindow.close() : cp.topWindow == self ? (c = window.open("", "_self"), c.close()) : cp.setAllowForceQuitContainer ? (c = cp.topWindow.open("", "_self"), c.top.close()) : (c = window.open("", "_self"), c.close())
	} catch (b) {}
	cp.pg && navigator && navigator.app && "function" === typeof navigator.app.exitApp && navigator.app.exitApp();
	cp.win8 && (window && window.parent) && window.parent.postMessage({
		name: "WIN8APPCLOSE",
		data: {}
	}, "*");
	cp.currentWindow.open("goodbye.html", "_self")
};
cp.Automate = function () {
	"undefined" != typeof CPAutomator && CPAutomator.CPRunSuite.model.workflow && setTimeout(function () {
		CPAutomator.Replay.init()
	}, 1E4)
};