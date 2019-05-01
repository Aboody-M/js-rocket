var sayMyName = function (name) {
	alert ('My Name Is: ' +name)
} 

var car ={
	color: 'green',
	isCarTurnedOn: false,
	numberOfWheels: 4,
	seats: [
	'seat 1',
	'seat 2',
	'seat 3',
	'seat 4'
	],
	turnOn: function(){
	this.isCarTurnedOn = true;
	},
	fly: function (){
		alert('ur a nigger');
	},
	switchCar: function (isOn){
		if (isOn == true) {
			this.isCarTurnedOn = true;
		} else {
			this.isCarTurnedOn = false;
		}
	}
}