
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
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions">
                <button class="btn btn-primary">View Details</button>
            </div>
        </div>
        `;
        phoneContainer.appendChild(phoneCard);
    });
}

const searchPhone=()=>{
    const searchField = document.getElementById("search-field").value;
    // console.log(searchField);
    loadPhone(searchField);
}

// loadPhone();