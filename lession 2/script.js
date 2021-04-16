

 // задание 1.1 

// в данном коде происходит вызов функции , в котором выполняется два условия.

// задание 1.2 

// Алгоритм работы кода: 1 . При вызове функции handlerDblClick c обьектом (item) выполняются две проверки: 1) если в поле  name значение monitoring , то вызываю  функцию otherFunction с двумя параметрами 'monitoringItem' - в который мы передаем  type: 'view', item - который мы передали в функцию  handlerDblClick. 2) А если item.name === 'procedure' , то вызываем otherFunction с другими параметрами "item".

// задание 1.3 

//  в функции есть обьект , строки , операторы "строго равно".


//  Задание 2 

function handlerDblClick(item) {
    if (item.name === 'monitoring') {
    otherFunction('monitoringItem', {
          type: 'view',
          item,
       });
    } else if (item.name === 'procedure') {
       otherFunction('procedureItem', {
          item,
       });
    }
 };

 

