const adviceNumber = document.querySelector("#adviceNumberBlock");
const adviceText = document.querySelector("#adviceTextBlock");

const callbackGetSucess = function(data){
    //console.log(data.slip.id);
    //console.log(data.slip.advice);
    adviceNumber.innerHTML = "";
    adviceNumber.innerHTML = "Advice #" + data.slip.id;
    adviceText.innerHTML = "";
    adviceText.innerHTML = '"' + data.slip.advice + '"';
}

function buttonClickGET(){
    const url = "https://api.adviceslip.com/advice";
    $.getJSON(url, callbackGetSucess).done(function(){
            //alert ("second sucess");
        })
        .fail(function() {
            alert("error");
        })
        .always(function(){
            //alert("finished");
        })
    };

