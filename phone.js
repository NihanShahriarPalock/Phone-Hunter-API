
const loadPhone = async (searchField) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchField}`);
    const data = await res.json();
    const phones = data.data;
    // console.log(phones);
    displayPhone(phones);
    
}



const displayPhone = (phones) => {

    const phoneContainer = document.getElementById("phone-container");
    phoneContainer.textContent="";
 
    // Show only 1st ten phone
    
    if(phones.length >=12){
        phones = phones.slice(0, 12);
        const showButton = document.getElementById("show-All-Container");
        showButton.classList.remove("hidden")
    }
    else{
        showButton.classList.add("hidden")
    }

    phones.forEach(phone => {
        // console.log(phone);
        const phoneCard = document.createElement("div")
        phoneCard.classList =`card bg-gray-300 shadow-xl`;
        phoneCard.innerHTML= `
           <figure class="px-10 pt-10">
                        <img src="${phone.image}" alt="Shoes"
                            class="rounded-xl" />
                    </figure>
        <div class="card-body items-center text-center">
            <h2 class="card-title">${phone.phone_name}</h2>
            <p>There are many variations of passages of available, but the majority have suffered</p>
            <h1 class="my-2 font-bold text-xl text-black">$999</h1>
            <div class="card-actions">
                <button class="btn btn-primary">View Details</button>
            </div>
        </div>
        `;
        phoneContainer.appendChild(phoneCard);
    });
    loadingSpinner(false);
}

const searchPhone=()=>{
    loadingSpinner(true);
    const searchField = document.getElementById("search-field").value;
    // console.log(searchField);
    loadPhone(searchField);
}


const loadingSpinner = (isLoading) => {
    const loading = document.getElementById("loading-spinner");
    if(isLoading){
        loading.classList.remove("hidden")
    }
    else{
        loading.classList.add("hidden")
    }
} 
// loadPhone();