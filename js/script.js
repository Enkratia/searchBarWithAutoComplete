const searchWrapper = document.querySelector(".search-input");
const inputBox = searchWrapper.querySelector("input");
const sugBox = searchWrapper.querySelector(".autocom-box");

inputBox.onkeyup = (e) => {
  let userData = e.target.value;
  let emptyArray = [];
  if (userData) {
    emptyArray = suggestions.filter((data) => {
      return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
    })
    emptyArray = emptyArray.map((data) => {
      return data = "<li>" + data + "</li>";
    })
    searchWrapper.classList.add("active");
    showSuggestions(emptyArray);

    let allLi = document.querySelectorAll("li");
    for (i = 0; i < allLi.length; i++) {
      allLi[i].setAttribute("onclick", "select(this)");
    }
  } else {
    searchWrapper.classList.remove("active");
  }
}


function select(element) {
  let selectUserData = element.textContent;
  inputBox.value = selectUserData;

  searchWrapper.classList.remove("active");
}


function showSuggestions(list) {
  let listData;

  if (!list.length) {
    userValue = inputBox.value;
    listData = "<li>" + userValue + "</li>";
  } else {
    listData = list.join("");

  }
  sugBox.innerHTML = listData;
}
