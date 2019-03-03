var myVideo = {
	"video": [
		{"id": 12312412312,
		"name": "Ecuaciones Diferenciales",
		"url": "/video/math/edo/12312412312",
		"author": {
			"data": [{
				"name_author": "Alejandro Morales",
				"url": "/author/alejandro-morales",
				"type": "master"
			}]
		}
	}]
}

for(y = 0; y < myVideo.video.length; y++){
	console.log("ID: " + myVideo.video[y].id);
	console.log("Name: " + myVideo.video[y].name);
	console.log("URL: " + myVideo.video[y].url);
	console.log("Author:  ");
		for(x in myVideo.video[y].author.data){
			console.log("   Name: " + myVideo.video[y].author.data[x].name_author);
			console.log("   URL: " + myVideo.video[y].author.data[x].url);
			console.log("   Type: " + myVideo.video[y].author.data[x].type);
		}
}

