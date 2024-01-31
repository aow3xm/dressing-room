import { cloth } from "./main.js";
export let renderItem = (itemObj) => {
    let list = document.querySelector(".item-list." + itemObj.name);
    list.innerHTML = "";
    for (let i = 1; i <= itemObj.quantity; i++) {
        let item = document.createElement("div");
        item.classList.add("item" + i);
        item.innerHTML = `
        <div class="card" style="width: 18rem;">
             <img class="card-img-top" src="${itemObj.path}${i}_show.jpg" alt="Card image cap">
            <div class="card-body mx-auto">
            <h3 class="card-title text-center">${itemObj.titleName} ${i}</h3>
                <button
                onclick="addToObj('${itemObj.clothName}',
                '${itemObj.path}${i}.${itemObj.f ? itemObj.f : 'png'}', ${itemObj?.imgType})" class="btn btn-primary px-5">Thử đồ</button>
            </div>
        </div>
        `;
        list.appendChild(item);
    }
};

export let addToObj = (clothName, path, imgClass = 'img-fluid') => {
    cloth[clothName] = path;
    console.log(cloth)
    document.querySelector('.' + clothName).innerHTML =
        `
    <img src="${path}" alt="" class='${imgClass}'>
        `;

}

window.addToObj = addToObj;