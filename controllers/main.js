import { Clothes } from "./Obj.js";
import { renderItem } from "./controller.js";
export let cloth = new Clothes();
let itemObj = {
    top: {
        clothName: "bikinitop",
        name: "list1",
        titleName: "Áo",
        path: "../assets/images/clothes/topcloth",
        quantity: 6,
    },
    bottom: {
        clothName: "bikinibottom",
        name: "list2",
        titleName: "Quần",
        path: "../assets/images/clothes/botcloth",
        quantity: 5,
    },
    shoes: {
        clothName: "feet",
        name: "list3",
        titleName: "Giày",
        path: "../assets/images/shoes/shoes",
        quantity: 5,
    },
    bag: {
        clothName: "handbag",
        name: "list4",
        titleName: "Túi",
        path: "../assets/images/handbags/handbag",
        quantity: 3,
    },
    neck: {
        clothName: "necklace",
        name: "list5",
        titleName: "Dây chuyền",
        path: "../assets/images/necklaces/necklace",
        quantity: 3,
    },
    hair: {
        clothName: "hairstyle",
        name: "list6",
        titleName: "Kiểu tóc",
        path: "../assets/images/hairstyle/hairstyle",
        quantity: 3,
    },
    bg: {
        clothName: "background",
        name: "list7",
        titleName: "Background",
        path: "../assets/images/background/background",
        f: 'jpg',
        quantity: 7,

    },
};




renderItem(itemObj.top);

let buttons = document.querySelectorAll(".nav-item button.nav-link");
document.querySelectorAll('.list1 button').forEach((list) => {
    list.addEventListener('click', () => {
        document.querySelector('.bikinibottom').style.background = 'none';
    });
});
buttons[1].addEventListener("click", () => {
    renderItem(itemObj.bottom)

});;
buttons[2].addEventListener("click", () => {
    renderItem(itemObj.shoes)
});;
buttons[3].addEventListener("click", () => {
    renderItem(itemObj.bag)
});;
buttons[4].addEventListener("click", () => {
    renderItem(itemObj.neck)
});;
buttons[5].addEventListener("click", () => {
    renderItem(itemObj.hair)
});;
buttons[6].addEventListener("click", () => {
    renderItem(itemObj.bg)
});;