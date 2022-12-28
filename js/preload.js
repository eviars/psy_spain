//создаем JQuery функцию, которая будет подгружать изображения в буфер
jQuery.preloadImages = function()
	{
		for(let i = 0; i < arguments.length; i++) {
			jQuery("<img>").attr("src", arguments[ i ]);
		}
	};
	
//указываем путь к изображению, которое нужно подгрузить
$.preloadImages("../images/profile5.png");