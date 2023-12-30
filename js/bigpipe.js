// public/js/bigpipe.js
// Simulate asynchronous loading of content blocks using setTimeout
function loadContentBlock(id, content) {
    setTimeout(() => {
      document.getElementById(id).innerHTML = content;
    }, Math.random() * 2000); // Simulate variable loading times
  }

  // Simulate BigPipe rendering
  loadContentBlock('content-block-1', 'Content Block 1');
  loadContentBlock('content-block-2', 'Content Block 2');
  loadContentBlock('content-block-3', 'Content Block 3');