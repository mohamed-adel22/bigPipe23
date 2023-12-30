// public/js/bigpipe.js
//const loadButton = document.createElement('button');

//loadButton.textContent = 'Load';

function changeText() {

  document.getElementById("myButton").innerHTML = "sure ?";
  

}
function changeText2() {


  document.getElementById("myButton2").innerHTML = "Loading....";

}


function resetText() {

  document.getElementById("myButton").innerHTML = "reload";
  document.getElementById("myButton2").innerHTML = "Load More";

}

// Add the button to the document

//document.body.appendChild(loadButton);


// Event listener for the button

function loadingbutton(id, content){setTimeout(() => {
  document.getElementById(id).innerHTML = content;
}, Math.random() * 2000);

 loadContentBlock('content-block-6', 'this is content block6');
 loadContentBlock('content-block-7','this is content block 7' );
 loadContentBlock('content-block-8','this is content block 8' ); 
 loadContentBlock('content-block-9','this is content block 9' ); 
 loadContentBlock('content-block-10','this is content block 10' ); 
 
; 

};
function loadImage(imageUrl) {

  // Create an <img> element with the specified image URL

  var imageElement = document.createElement('img');

  imageElement.src = imageUrl;


  // Replace the existing content of the image container with the new image element

  var imageContainer = document.getElementById('image-container');

  imageContainer.innerHTML = ''; // Clear the existing content

  imageContainer.appendChild(imageElement); // Add the new image element

}
function loadContentBlock(id, content) {
    setTimeout(() => {
      document.getElementById(id).innerHTML = content;
    }, Math.random() * 2000); // Simulate variable loading times
  
  

    var div = document.createElement('div');

    div.id = id;

    div.textContent = content;

    document.getElementById('image-container').appendChild(div);

}


// Call the function using a loop

for (var i = 1; i <= 5; i++) {

    loadContentBlock('content-block-' + i, 'This is content block ' + i);

}

  // Simulate BigPipe rendering
  // loadContentBlock('content-block-1', 'this is content block 1');
  // loadContentBlock('content-block-2', 'this is content block 2');
  // loadContentBlock('content-block-3','this is content block 3');
  // loadContentBlock('content-block-14','this is content block 14');
  // loadContentBlock('content-block-15','this is content block 15');
  // loadContentBlock('content-block-16','this is content block 16');
  // loadContentBlock('content-block-17','this is content block 17');
  // loadContentBlock('content-block-18','this is content block 18');
  // loadContentBlock('content-block-19','this is content block 19');
  // loadContentBlock('content-block-20','this is content block 20');
  // loadContentBlock('content-block-21','this is content block 21');
  // loadContentBlock('content-block-22','this is content block 22');