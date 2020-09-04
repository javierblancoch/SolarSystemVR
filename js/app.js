var API_URL = "https://api.le-systeme-solaire.net/rest/bodies/"
var information = {"recently":"","status":"error","mass":0,"volume":0,"gravity":0}

function get_api_data(name){
	var request = new XMLHttpRequest()

	if(information.recently!=name){
		request.open('GET', API_URL+name, true)
		request.onload = function () {

		  var data = JSON.parse(this.response)

		  if (request.status==200) {
		  	information["recently"] = name
		  	information["status"] = "successful"
		  	information["mass"] = data.mass.massValue+" "+data.mass.massExponent
		  	information["volume"] = data.vol.volValue+" "+data.vol.volExponent
		  	information["gravity"] = data.gravity
		  }
		}
		request.send()
	}
}

function set_api_data(name, mass, volume, gravity){
	if (information.status=="successful") {
		planeta_text.setAttribute('value',name)
		masa_text.setAttribute('value',"Masa: "+information.mass+" kg")
		volumen_text.setAttribute('value',"Volumen: "+information.volume+" km3")
		gravedad_text.setAttribute('value',"Gravedad: "+information.gravity+" m/s2")
	}else{
		planeta_text.setAttribute('value',name)
		masa_text.setAttribute('value',"Masa: "+mass+" kg")
		volumen_text.setAttribute('value',"Volumen: "+volume+" km3")
		gravedad_text.setAttribute('value',"Gravedad: "+gravity+" m/s2")
	}
}

AFRAME.registerComponent('do-something', {
  init: function () {
    var sceneEl = this.el
    var datos = sceneEl.querySelector('#datos')
    var planeta_text = sceneEl.querySelector('#planeta_text')
    var masa_text = sceneEl.querySelector('#masa_text')
    var volumen_text = sceneEl.querySelector('#volumen_text')
    var gravedad_text = sceneEl.querySelector('#gravedad_text')
    var mercurio = sceneEl.querySelector('#mercurio')
    var venus = sceneEl.querySelector('#venus')
    var tierra = sceneEl.querySelector('#tierra')
    var marte = sceneEl.querySelector('#marte')
    var jupiter = sceneEl.querySelector('#jupiter')
    var saturno = sceneEl.querySelector('#saturno')
    var urano = sceneEl.querySelector('#urano')
    var neptuno = sceneEl.querySelector('#neptuno')

    mercurio.addEventListener('click', function (evt) {
    	var name = "Mercury"
    	get_api_data(name)
    	setTimeout( () => {set_api_data("Mercurio","3,302×10 23","6,083×10 10","3,7")}, 1000)
	    datos.object3D.visible = true
	    setTimeout( () => {datos.object3D.visible = false}, 8000)
  	});

  	venus.addEventListener('click', function (evt) {
  		var name = "Venus"
  		setTimeout( () => {set_api_data("Venus","4,869×10 24","9,28x10 11","8,87")}, 1000)
	    datos.object3D.visible = true
	    setTimeout( () => {datos.object3D.visible = false}, 8000)
  	});

    tierra.addEventListener('click', function (evt) {
    	var name = "Earth"
    	get_api_data(name)
    	setTimeout( () => {set_api_data("Tierra","5,9736×10 24","1,08321×10 12","9,780327")}, 1000)
	    datos.object3D.visible = true
	    setTimeout( () => {datos.object3D.visible = false}, 8000)
	});

	marte.addEventListener('click', function (evt) {
	    var name = "Mars"
    	get_api_data(name)
    	setTimeout( () => {set_api_data("Marte","6,4185×10 23","1,6318×10 11","3,711")}, 1000)
	    datos.object3D.visible = true
	    setTimeout( () => {datos.object3D.visible = false}, 8000)
	});

	jupiter.addEventListener('click', function (evt) {
		var name = "Jupiter"
		get_api_data(name)
    	setTimeout( () => {set_api_data("Jupiter","1,899×10 27","1,4313×10 15","24.79")}, 1000)
	    datos.object3D.visible = true
	    setTimeout( () => {datos.object3D.visible = false}, 8000)
	});

	saturno.addEventListener('click', function (evt) {
		var name = "Saturn"
		get_api_data(name)
    	setTimeout( () => {set_api_data("Saturno","5,688x10 26","8,27x10 23","10,44")}, 1000)
	    datos.object3D.visible = true
	    setTimeout( () => {datos.object3D.visible = false}, 8000)
	});

	urano.addEventListener('click', function (evt) {
		var name = "Uranus"
		get_api_data(name)
    	setTimeout( () => {set_api_data("Urano","8,686×10 25","6,833×10 13","8,69")}, 1000)
	    datos.object3D.visible = true
	    setTimeout( () => {datos.object3D.visible = false}, 8000)
	});

	neptuno.addEventListener('click', function (evt) {
		var name = "Neptune"
		get_api_data(name)
    	setTimeout( () => {set_api_data("Neptuno","1,024×10 26","6,254×10 13","11,15")}, 1000)
	    datos.object3D.visible = true
	    setTimeout( () => {datos.object3D.visible = false}, 8000)
	});

  	}

});
