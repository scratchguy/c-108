function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/w-jqGzFHa/', modelReady);
}

function modelReady()
{
    classifier.classify(gotResults);
}

function gotResults()
{
    

    if (error) {
        console.error(error);
    } else {
        console.log(gotResults);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;
    
        document.getElementById("id_of_element");
        document.getElementById("result_count").style;
        
    }

}




