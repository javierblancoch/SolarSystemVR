AFRAME.registerComponent('do-something', {
  init: function () {
    var sceneEl = this.el;
    var datos = sceneEl.querySelector('#datos');
    var planeta_text = sceneEl.querySelector('#planeta_text');
    var masa_text = sceneEl.querySelector('#masa_text');
    var volumen_text = sceneEl.querySelector('#volumen_text');
    var gravedad_text = sceneEl.querySelector('#gravedad_text');
    var mercurio = sceneEl.querySelector('#mercurio');
    var venus = sceneEl.querySelector('#venus');
    var tierra = sceneEl.querySelector('#tierra');
    var marte = sceneEl.querySelector('#marte');
    var jupiter = sceneEl.querySelector('#jupiter');
    var saturno = sceneEl.querySelector('#saturno');
    var urano = sceneEl.querySelector('#urano');
    var neptuno = sceneEl.querySelector('#neptuno');

    mercurio.addEventListener('click', function (evt) {
  		planeta_text.setAttribute('value',"Mercurio");
	    masa_text.setAttribute('value',"Masa: 3,302×10 23 kg");
	    volumen_text.setAttribute('value',"Volumen: 6,083×10 10 km3");
	    gravedad_text.setAttribute('value',"Gravedad: 3,7 m/s2");
	    datos.object3D.visible = true;
	    setTimeout( () => {datos.object3D.visible = false;}, 8000);
  	});

  	venus.addEventListener('click', function (evt) {
  		planeta_text.setAttribute('value',"Venus");
	    masa_text.setAttribute('value',"Masa: 4,869×10 24 kg");
	    volumen_text.setAttribute('value',"Volumen: 9,28x10 11 km3");
	    gravedad_text.setAttribute('value',"Gravedad: 8,87 m/s2");
	    datos.object3D.visible = true;
	    setTimeout( () => {datos.object3D.visible = false;}, 8000);
  	});

    tierra.addEventListener('click', function (evt) {
	    planeta_text.setAttribute('value',"Tierra");
	    masa_text.setAttribute('value',"Masa: 5,9736×10 24 kg");
	    volumen_text.setAttribute('value',"Volumen: 1,08321×10 12 km3");
	    gravedad_text.setAttribute('value',"Gravedad: 9,780327 m/s2");
	    datos.object3D.visible = true;
	    setTimeout( () => {datos.object3D.visible = false;}, 8000);
	});

	marte.addEventListener('click', function (evt) {
	    planeta_text.setAttribute('value',"Marte");
	    masa_text.setAttribute('value',"Masa: 6,4185×10 23 kg");
	    volumen_text.setAttribute('value',"Volumen: 1,6318×10 11 km3");
	    gravedad_text.setAttribute('value',"Gravedad: 3,711 m/s2");
	    datos.object3D.visible = true;
	    setTimeout( () => {datos.object3D.visible = false;}, 8000);
	});

	jupiter.addEventListener('click', function (evt) {
	    planeta_text.setAttribute('value',"Jupiter");
	    masa_text.setAttribute('value',"Masa: 1,899×10 27 kg");
	    volumen_text.setAttribute('value',"Volumen: 1,4313×10 15 km3");
	    gravedad_text.setAttribute('value',"Gravedad: 24.79 m/s2");
	    datos.object3D.visible = true;
	    setTimeout( () => {datos.object3D.visible = false;}, 8000);
	});

	saturno.addEventListener('click', function (evt) {
	    planeta_text.setAttribute('value',"Saturno");
	    masa_text.setAttribute('value',"Masa: 5,688x10 26 kg");
	    volumen_text.setAttribute('value',"Volumen: 8,27x10 23 m3");
	    gravedad_text.setAttribute('value',"Gravedad: 10,44 m/s2");
	    datos.object3D.visible = true;
	    setTimeout( () => {datos.object3D.visible = false;}, 8000);
	});

	urano.addEventListener('click', function (evt) {
	    planeta_text.setAttribute('value',"Urano");
	    masa_text.setAttribute('value',"Masa: 8,686×10 25 kg");
	    volumen_text.setAttribute('value',"Volumen: 6,833×10 13 km3");
	    gravedad_text.setAttribute('value',"Gravedad: 8,69 m/s2");
	    datos.object3D.visible = true;
	    setTimeout( () => {datos.object3D.visible = false;}, 8000);
	});

	neptuno.addEventListener('click', function (evt) {
	    planeta_text.setAttribute('value',"Neptuno");
	    masa_text.setAttribute('value',"Masa: 1,024×10 26 kg3​");
	    volumen_text.setAttribute('value',"Volumen: 6,254×1013 km3");
	    gravedad_text.setAttribute('value',"Gravedad: 11,15 m/s2");
	    datos.object3D.visible = true;
	    setTimeout( () => {datos.object3D.visible = false;}, 8000);
	});

  	}

});