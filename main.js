function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier= ml5.soundClassifier(' https://teachablemachine.withgoogle.com/models/-y1yOsh6F/model.json', modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}


function gotResults(error,results){
    if (error) {
        console.error(error);
    } else{
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;        
        random_number_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("result_label").innerHTML='I can hear - ' + results[0].label;
        document.getElementById("result_confidence").innerHTML='Accuracy - ' + (results[0].confidence*100).toFixed(2)+"%";
        document.getElementById("result_label").style.color="rgb(" +random_number_r+","+random_number_g+","+random_number_r+")";

        img = document.getElementById('A');
        img1 = document.getElementById('B');
        img2 = document.getElementById('C');
        img3 = document.getElementById('E');

        if(results[0].label == "Barking"){
            img.src='B.gify.gif';
            img1.src='C.png';
            img2.src='A.png';
            img3.src='E.png';
        }
        else if(results[0].label == "Background Noise"){
            img.src='B.png';
            img1.src='C.gify.gif';
            img2.src='A.png';
            img3.src='E.png';
        }
        else if(results[0].label == "cat"){
            img.src='B.png';
            img1.src='C.png';
            img2.src='A.gify.gif';
            img3.src='E.png';
        }
        else if(results[0].label == "Elephant"){
            img.src='B.png';
            img1.src='C.png';
            img2.src='A.gify.gif';
            img3.src='E.png';
        }
        else{
            img.src= 'B.png';
            img1.src= 'C.png';
            img2.src= 'A.png';
            img3.src= 'E.gify.gif';
        }
    }
}
