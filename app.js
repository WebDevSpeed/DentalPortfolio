const btnText = document.querySelector("#btn-service");
const showService = document.querySelector("#hidden");
let temp = false;
const toggleServices = () => {
  if (!temp) {
    showService.classList.remove("service-box-container-hidden");
    showService.classList.add("service-box-container");
    btnText.innerText = "View Less";
    temp = true;
  } else {
    showService.classList.remove("service-box-container");
    showService.classList.add("service-box-container-hidden");
    btnText.innerText = "View All Services";
    temp = false;
  }
};

btnText.addEventListener("click", toggleServices);


const ham = document.querySelector("#ham");
const hamburger = document.querySelector(".hamburger");
let hide = false;
const toggleHamburger = ()=>{
    if(!hide){
        console.log("inside false");
        
        ham.classList.remove("ham-hide");
        ham.classList.add("ham-visible");
        hide = true;
    }else{
        console.log("inside true");
        
        ham.classList.remove("ham-visible");
        ham.classList.add("ham-hide");
        hide = false;
    }
}

hamburger.addEventListener("click",toggleHamburger);
