const popup = document.querySelector(".modal");
const popupButton = document.querySelector(".main-button");

const modalForm = popup.querySelector("form");
const requiredDateIn = popup.querySelector(".check-in-date");
const requiredDateOut = popup.querySelector(".check-out-date");
const requiredAdults = popup.querySelector(".adults");
const requiredKids = popup.querySelector(".kids");

let isStorageSupport = true;
let storage = "";

try {
  storage = localStorage.getItem("adultsNumber");
  storage = localStorage.getItem("kidsNumber");
} catch (err) {
  isStorageSupport = false;
}

popupButton.addEventListener ("click", function ()  {    
  popup.classList.toggle("popup-hidden");
    if (storage) {
      requiredAdults.value = storage;
      requiredKids.value = storage;
    }

    if (popup.classList.contains("modal-error")) {
      popup.classList.remove("modal-error")
    }
});

modalForm.addEventListener("submit", function (evt) {
  if (!requiredDateIn.value || !requiredDateOut.value || !requiredKids.value || !requiredAdults.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");   
    }
  else {
    if (isStorageSupport) {            
      localStorage.setItem("adultsNumber", requiredAdults.value);
      localStorage.setItem("kidsNumber", requiredKids.value);
    }        
  }
});

//кнопки +-
let increaseButton = document.querySelector(".adults-number .increase");
let inputAdults = document.querySelector(".adults");
let inputKids = document.querySelector(".kids");
let decreaseButton = document.querySelector(".adults-number .decrease")
let increaseButtonKids = document.querySelector(".kids-number .increase");
let decreaseButtonKids = document.querySelector(".kids-number .decrease")

increaseButton.addEventListener("click", function() {  
  inputAdults.value++  
})
decreaseButton.addEventListener("click", function() {
  if (inputAdults.value>0) {
    inputAdults.value--
  }  
})

increaseButtonKids.addEventListener("click", function() {  
  inputKids.value++  
})
decreaseButtonKids.addEventListener("click", function() {
  if (inputKids.value>0) {
    inputKids.value--
  }  
})