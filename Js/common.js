document.addEventListener("DOMContentLoaded",() => {
    const scrollUp = document.querySelector("#scroll-up");

    scrollUp.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    });

    const textElement = document.getElementById("web-name");
    const text = textElement.innerText;
    textElement.innerText = "";

    let index = 0;
    const interval = setInterval(function() {
        textElement.innerText += text[index];
        index++;
        if (index >= text.length) {
            clearInterval(interval);
        }
    }, 100);
    
    document.oncontextmenu = document.body.oncontextmenu = function() {
      return false;
    }

    const button =document.getElementById("burger-menu");
        button.addEventListener('click',
            () => {
              const dropdown = document.getElementById('ul-dropdown');
              if(dropdown.style.display === 'block'){
                dropdown.style.display='none';
              }else{
                dropdown.style.display='block';
              }
            });
      document.getElementById("year").innerHTML = new Date().getFullYear();
});

document.onkeydown = function (e) {       
  if(e.keyCode == 123) {       
      return false;       
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 73){       
      return false;       
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 74) {       
      return false;       
  }
  if(e.ctrlKey && e.keyCode == 85) {      
      return false;      
  }      
}

function fngetInfo(){
  let text;
  let ask=prompt("Please Enter Password");
  if(ask==null || ask==""){
    return false;
  }else {
    let encode = window.btoa(ask);
    if(encode == 'QlJAMDE='){
      fnDownload();
    }else{
      alert('incorrect')
    }
  }
}

function fnDownload() {
  fetch('https://bhuvanesh.my.to/Resume/bhuvanesh-resume.pdf')
    .then(response => response.blob())
    .then(blob => {
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'BhuvaneshResume.pdf';
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
    })
    .catch(error => {
      console.error('Error:', error);
    });
}




