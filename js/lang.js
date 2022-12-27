let lang = "en";
// Использовать теги типа <en>, <ru> и подобных (ну или <div class="en">) И дать им всем display:none;

let style = document.createElement("style");//Создаём <style>
style.innerHTML = lang+"{display:block;}";//Делаем видимым нужные теги
document.head.appendChild(style);