const whatwedo = document.querySelector("#what-we-do-div1");
const content = document.querySelector("#content");

// initial state
gsap.set("#content h5 span", {
  y: 20,
  opacity: 0
});

whatwedo.addEventListener("mouseenter", () => {
  gsap.to(content, {
    opacity: 1,
    pointerEvents: "all",
    duration: 0.3
  });

  gsap.to("#nav-bottom", {
    height: "6vh",
    duration: 0.3
  });

  gsap.to("#content h5 span", {
    y: 0,
    opacity: 1,
    stagger: 0.05,
    duration: 0.3,
    ease: "power2.out"
  });
});

whatwedo.addEventListener("mouseleave", () => {
  gsap.to(content, {
    opacity: 0,
    pointerEvents: "none",
    duration: 0.2
  });

  gsap.to("#nav-bottom", {
    height: "0vh",
    duration: 0.3
  });
});


let lastScroll = 0;

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;

  if (scrollY > 50) {
    gsap.to("#nav-bottom", {
      opacity: 1,
      height: "2px",
      duration: 0.3
    });
  } else {
    gsap.to("#nav-bottom", {
      opacity: 0,
      height: "0px",
      duration: 0.3
    });
  }
});


//first-video
document.addEventListener('DOMContentLoaded', function() {
    const previewVideo = document.querySelector('.preview-video');
    const secondVideo = document.querySelector('.second-video');
    const floatCircle = document.getElementById('float');
    
    let isSecondVideoPlaying = false;

    // 1) FLOAT par click → second video PLAY
    floatCircle.addEventListener('click', function(e) {
        e.stopPropagation();           // click sirf yahi handle hoga

        if (!isSecondVideoPlaying) {   // agar abhi second video nahi chal raha
            secondVideo.classList.add('active');
            secondVideo.currentTime = 0;
            
            secondVideo.muted = false; // agar audio chahiye
            secondVideo.play();
            previewVideo.pause();
            secondVideo.style.width = "100%"
            secondVideo.style.height = "100%"
            floatCircle.style.opacity = '0';
            floatCircle.style.transition = 'opacity 0.3s ease';
            isSecondVideoPlaying = true;
        } else {
            // agar chal raha hai to yahi se PAUSE + preview back
            secondVideo.pause();
            secondVideo.classList.remove('active');
            previewVideo.currentTime = 0;
            previewVideo.play();
            floatCircle.style.opacity = '1';
            isSecondVideoPlaying = false;
        }
    });

    // 2) SECOND VIDEO par click → bhi PAUSE + preview back
    // secondVideo.addEventListener('click', function(e) {
    //     e.stopPropagation();

    //     if (isSecondVideoPlaying) {
    //         secondVideo.pause();
    //         secondVideo.classList.remove('active');
    //         previewVideo.currentTime = 0;
    //         previewVideo.play();
    //         floatCircle.style.opacity = '1';
    //         isSecondVideoPlaying = false;
    //     }
    // });
});

function page2Animation(){
  var video = document.querySelectorAll("#page2content");

video.forEach(function(elem){
  elem.addEventListener("mouseenter",function(){
    elem.childNodes[11].style.opacity = 1;
    // console.log(elem.childNodes)
    gsap.to(elem.childNodes[11],{
      opacity: 1,
      // cursor :pointer

    })
  })


  elem.addEventListener("mouseleave",function(){
    // elem.childNodes[11].style.opacity = 0;
    gsap.to(elem.childNodes[11],{
      opacity:0

    })
  })
  elem.addEventListener("mousemove", function(dets){
    gsap.to(elem.childNodes[11],{
      x:dets.x-elem.getBoundingClientRect().x- 750,
      y:dets.y - elem.getBoundingClientRect().y- 350
    })
  })





})
}



  
function page9Animation(){
  // sab inner-divs select karo
let innerDivs = document.querySelectorAll("#page9 .middle-div .inner-div")

innerDivs.forEach(innerDiv => {

  // har inner-div ke andar uska apna video aur image
  let video = innerDiv.querySelector("video")
  let image = innerDiv.querySelector(".image-1")

  innerDiv.addEventListener("mouseenter", () => {
    if (video) {
      video.currentTime = 0
      video.play()
    }

    // sirf is inner-div ka image/video animate karo
    gsap.to(image, {
      opacity: 0,
      duration: 0.3
    })
    gsap.to(video, {
      opacity: 1,
      duration: 0.3
    })
  })

  innerDiv.addEventListener("mouseleave", () => {
    if (video) {
      video.pause()
      video.currentTime = 0
    }

    gsap.to(video, {
      opacity: 0,
      duration: 0.3
    })
    gsap.to(image, {
      opacity: 1,
      duration: 0.3
    })
  })

})
}

function page9AnimationRightDiv(){
  // sab inner-divs select karo
let innerDivs = document.querySelectorAll("#page9 .right-div .inner-div")

innerDivs.forEach(innerDiv => {

  // har inner-div ke andar uska apna video aur image
  let video = innerDiv.querySelector("video")
  let image = innerDiv.querySelector(".image-1")

  innerDiv.addEventListener("mouseenter", () => {
    if (video) {
      video.currentTime = 0
      video.play()
    }

    // sirf is inner-div ka image/video animate karo
    gsap.to(image, {
      opacity: 0,
      duration: 0.3
    })
    gsap.to(video, {
      opacity: 1,
      duration: 0.3
    })
  })

  innerDiv.addEventListener("mouseleave", () => {
    if (video) {
      video.pause()
      video.currentTime = 0
    }

    gsap.to(video, {
      opacity: 0,
      duration: 0.3
    })
    gsap.to(image, {
      opacity: 1,
      duration: 0.3
    })
  })

})
}

page2Animation()
page9Animation()
page9AnimationRightDiv()