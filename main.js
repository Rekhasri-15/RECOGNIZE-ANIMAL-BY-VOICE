function startClassifiction()
{
    navigator.mediaDevices.getUserMedia({ audio:true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/HLGdt37nz/model.json',modelReady);
}

function modelReady()
{
    classifier.classify(gotResults);
}

function gotResults(error,results)
{
    if (error)
    {
        console.error();
    }
    else{
        console.log(results);
        random_number_r=Math.floor(Math.random()*255)+1;
        random_number_g=Math.floor(Math.random()*255)+1;
        random_number_b=Math.floor(Math.random()*255)+1;
        document.getElementById("result_label").innerHTML='I can hear-'+results[0].label;
        document.getElementById("result_confidence").innerHTML='Accuracy-'+(results[0].confidence*100).toFixed(2)+"%";
        document.getElementById("result_label").style.color="rgb ("+random_number_r+","+random_number_g+","+random_number_b+")";
        img=document.getElementById('dog');
        img1=document.getElementById('cat');
        img2=document.getElementById('snake');
        img3=document.getElementById('flof');
        if (results[0].label=="Dog")
        {
            img.src='dog.gif';
            img1.src='cat.jpg';
            img2.src='snake.jpg';
            img3.src='flof.jpg';
        }
        if (results[0].label=="Cat")
        {
            img.src='dog.jpg';
            img1.src='cat.gif';
            img2.src='snake.jpg';
            img3.src='flof.jpg';
        }
        if (results[0].label=="Snake")
        {
            img.src='dog.gif';
            img1.src='cat.jpg';
            img2.src='snake.gif';
            img3.src='flof.jpg';
        }
         else
        {
            img.src='dog.jpg';
            img1.src='cat.jpg';
            img2.src='snakes.jpg';
            img3.src='flof.gif';
        }
    }
}    