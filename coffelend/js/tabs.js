// document.addEventListener('DOMContentLoaded', function () {
//     var tabItems = document.querySelectorAll('.tab-item');

//     tabItems.forEach(function (tab) {
//         tab.addEventListener('click', function () {
//             var tabId = this.getAttribute('data-tab');
//             var content = document.getElementById(tabId);

//             // Удаляем активный класс у текущих вкладок и контента
//             document.querySelector('.tab-item.active').classList.remove('active');
//             document.querySelector('.tab-pane.active').classList.remove('active');

//             // Добавляем активный класс для выбранной вкладки и контента
//             this.classList.add('active');
//             content.classList.add('active');
//         });
//     });
// });



const itemTabs = document.querySelectorAll('.item-tabs');
const tabBlock = document.querySelectorAll('.tabs__block');


itemTabs.forEach(item => item.addEventListener('click', event => {

    const tabsItemTarget = event.target.getAttribute('data-tab');

    itemTabs.forEach(element => element.classList.remove('active-tabs'));

    tabBlock.forEach(element => element.classList.add('tabs__hidden'));

    item.classList.add('active-tabs');

    document.getElementById(tabsItemTarget).classList.remove('tabs__hidden');

}));

document.querySelector('[data-tab="tab-1"]').classList.add('active-tabs');
document.querySelector('#tab-1').classList.remove('tabs__hidden');











