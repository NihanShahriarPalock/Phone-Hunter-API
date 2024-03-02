
const loadPhone = async (searchField = '13', isShowAll) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchField}`);
    const data = await res.json();
    const phones = data.data;
    // console.log(phones);
    displayPhone(phones, isShowAll);

}



const displayPhone = (phones, isShowAll) => {

    const phoneContainer = document.getElementById("phone-container");
    phoneContainer.textContent = "";

    const showButton = document.getElementById("show-All-Container");
    if (phones.length >= 12 && !isShowAll) {
        showButton.classList.remove("hidden")
    }
    else {
        showButton.classList.add("hidden")
    }
    if (!isShowAll) {
        phones = phones.slice(0, 12);
    }

    phones.forEach(phone => {
        // console.log(phone);
        const phoneCard = document.createElement("div")
        phoneCard.classList = `card bg-gray-300 shadow-xl`;
        phoneCard.innerHTML = `
           <figure class="px-10 pt-10">
                        <img src="${phone.image}" alt="Image"
                            class="rounded-xl" />
                    </figure>
        <div class="card-body items-center text-center">
            <h2 class="card-title">${phone.phone_name}</h2>
            <p>There are many variations of passages of available, but the majority have suffered</p>
            <h1 class="my-2 font-bold text-xl text-black">$999</h1>
            <div class="card-actions">
                <button onclick="showDetails('${phone.slug}');" class="btn btn-primary">View Details</button>
            </div>
        </div>
        `;
        phoneContainer.appendChild(phoneCard);
    });
    loadingSpinner(false);
}

const searchPhone = (isShowAll) => {
    loadingSpinner(true);
    const searchField = document.getElementById("search-field").value;
    // console.log(searchField);
    loadPhone(searchField, isShowAll);
}


const loadingSpinner = (isLoading) => {
    const loading = document.getElementById("loading-spinner");
    if (isLoading) {
        loading.classList.remove("hidden")
    }
    else {
        loading.classList.add("hidden")
    }
}


const showAllPhone = () => {
    searchPhone(true);
}

const showDetails = async (id) => {
    // console.log(id);
    const res = await fetch(`https://openapi.programming-hero.com/api/phone/${id}`);
    const data = await res.json();
    // console.log(data);
    const phone = data.data;
    // console.log(phone);

    showPhoneDetails(phone);

}

const showPhoneDetails = (phone) => {

    console.log(phone);
    my_modal.showModal();
    // const phnName = document.getElementById("modal-phone-name").innerText = phone.name;
    const modalDetailsContainer = document.getElementById("modal-details-container").innerHTML = `
    <img src = "${phone.image}"/>
    <p class="my-2"><span>Brand: </span>${phone.brand}</p>
    <p class="my-2"><span>Model: </span>${phone.name}</p>
    <p class="my-2"><span>Display: </span>${phone?.mainFeatures?.displaySize}</p>
    <p class="my-2"><span>Chip Set: </span>${phone.mainFeatures?.chipSet}</p>
    <p class="my-2"><span>Storage: </span>${phone.mainFeatures?.storage}</p>
    <p class="my-2"><span>GPS: </span>${phone?.others?.GPS || 'NO GPS'}</p>
    <p class="my-2"><span>Release Date: </span>${phone.releaseDate}</p>

    `

}

loadPhone();