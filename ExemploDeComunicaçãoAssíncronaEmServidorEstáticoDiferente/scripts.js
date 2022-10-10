let item = 0;
const max = 14;    
const updateRate = 5000;        

function proxImagem( img ){       
    fetch("img/" + img + ".jpeg")
        .then(resp => resp.blob())
        .then(blob => {
            const imageObjectURL = URL.createObjectURL(blob);
            console.log(imageObjectURL);
            const proxImg = document.createElement("img");
            proxImg.src = imageObjectURL;
            document.getElementById("placeholder").appendChild(proxImg);
        })
}

window.onload = setInterval(function(){
    proxImagem( item++ % (max+1));
}, updateRate);

window.onload = function(){
    for( item = 0; item < 1; item++){
        proxImagem(item);
    }
}