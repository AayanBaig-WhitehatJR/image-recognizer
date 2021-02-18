Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
})
camera = document.getElementById("camera")
Webcam.attach(camera)

function capture(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = "<img id = 'image_captured' src = " + data_uri + ">"
    })
}
console.log("Ml5 // Current Version: ", ml5.version)
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/I4qWsKi6N/model.json', modelLoaded)
function modelLoaded(){
    console.log("Models are loaded.")
}
function identify(){
    img = document.getElementById("image_captured")
    classifier.classify(img, gotResult)
}
function gotResult(error, result){
    if(error){
        console.log(error)
    }
    else{
        console.log(result)
    document.getElementById("objectDisplay").innerHTML = result[0].label;
    document.getElementById("accuracyDisplay").innerHTML = result[0].confidence.toFixed(3);
    }
}
