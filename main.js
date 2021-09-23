var info=[
    "Anne Kirrin",
    "",
    "",
    " ",
    ];
    
    var images=[
    "https://photos.google.com/u/2/photo/AF1QipMCxZG1lWYvqDzWVs1IohiSCzaVAeaKHj9AT0e4",
    "",
    "",
]
    
    var i=0;
    function nextslide(){
    document.getElementById("infotext").innerHTML=info[i];
    
    document.getElementById("album").src=images[i];
    i++;
    }