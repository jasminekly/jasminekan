let lightbox= document.querySelector(".lightbox");
let gallery = document.querySelectorAll(".gallery");
let emailButton = document.querySelector("h2 button");



gallery.forEach((gal, i)=>{
  gal.addEventListener("click", ()=>{
      lightbox.classList.add("active")
      gal.querySelectorAll("img").forEach((img, i)=>{
        let imgElement = document.createElement("img")
        imgElement.src = img.src
        lightbox.append(imgElement)
      })
    
    //this is to make sure the galleries scroll together
      // galleries have firstpic and lastpic padding, so we have to accommodate for those
      let firstPicMargin = window.innerWidth * .32;
      let lastPicMargin = window.innerWidth * .20;
      //then take the width and left position of the gallery MINUS margins
      let adjustedGalWidth = gal.scrollWidth - firstPicMargin - lastPicMargin;
      //then divide to make a ratio to multiply the lightbox scroll by
      let galScrollRatio = gal.scrollLeft/adjustedGalWidth;
      lightbox.scrollLeft = lightbox.scrollWidth * galScrollRatio
  })
})

lightbox.addEventListener("click",(e)=>{
  lightbox.classList.remove("active")
  lightbox.innerHTML = "";
  
})

//email copying code
emailButton.addEventListener("click", (e)=>{
    let email = emailButton.innerHTML;
    navigator.clipboard.writeText(email)
    emailButton.innerHTML = "Copied to clipboard"
    let timer = setTimeout(()=>{
      emailButton.innerHTML = "jasminekan144@gmail.com"
    },1000)
    
})