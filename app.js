const btnText = document.querySelector('#btn-service')
    const showService = document.querySelector('#hidden');
    let temp = false;
    const toggleServices = ()=>{
        if(!temp){
            showService.classList.remove('service-box-container-hidden');
            showService.classList.add('service-box-container');
            btnText.innerText = "View Less" 
            temp=true;
        }
        else{
            showService.classList.remove('service-box-container');
            showService.classList.add('service-box-container-hidden');
            btnText.innerText = "View All Services"
            temp=false;
        }
    }

    btnText.addEventListener('click', toggleServices)