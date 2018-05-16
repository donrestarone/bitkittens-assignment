document.addEventListener("DOMContentLoaded", function() {
	var button = document.querySelector('button');
	var url = 'https://bitkittens.herokuapp.com/cats.json';
	var firstBox = document.getElementById('cat1');
	var secondBox = document.getElementById('cat2');
	var thirdBox = document.getElementById('cat3');

	var boxes = document.getElementsByClassName('cat-box');

	button.addEventListener('click', function(event){

		console.log('ive been clicked');
		var request = $.ajax({
			url: url,
			method: 'GET',
			dataType: 'json',
		})

		request.done(function(data){
			console.log('successfully made request');
			console.log(data['cats'].length);

			// data['cats'].forEach(function(cat){
			// 	var img = create.getElementById('img')

			// 	var catName = cat.name;
			// 	var catPhoto = cat.photo;

			// 	img.src = catPhoto



			// })

			for(i=0; i<data['cats'].length;i++){
				var img = document.createElement('img');
				var cat = (data['cats'][i]);
				img.src = cat.photo;
				boxes[i].append(img);			
			}
		})

		request.fail(function(){
			console.log('failed');
		})
	})
});