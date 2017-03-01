$(document).ready(function() {



(function($){



	jQuery.fn.myPlugin = function(options){
		options = $.extend({
			// defColor:"green", //цвет элемента над которым нет курсора
			// hoverColor:"red", //цвет элемента на который наведен курсор
			borderColor:"1px solid red",
			whiteColor:"1px solid #fff"
		}, options);
		var make = function(){

			$(this).css("background-color",options.defColor)
				.mouseenter( function(){
					//$(this).css("background-color",options.hoverColor);
					$(this).css("border",options.borderColor);
				})
				.mouseleave( function(){
					//$(this).css("background-color",options.defColor);
					$(this).css("border",options.whiteColor);

				});
			// реализация работы метода с отдельным элементом страницы
			$(".carousel-arrow-right").click(function () { // при клике на правую кнопку запускаем следующую функцию:
				$(".carousel-list").animate({left: "-125px"}, 200); // производим анимацию: блок с набором картинок уедет влево на 222 пикселя (это ширина одного прокручиваемого элемента) за 200 милисекунд.
				setTimeout(function () { // устанавливаем задержку времени перед выполнением следующих функций. Задержка нужна, т.к. эти ффункции должны запуститься только после завершения анимации.
					$(".carousel-list .carousel-element").eq(0).clone().appendTo(".carousel-list"); // выбираем первый элемент, создаём его копию и помещаем в конец карусели
					$(".carousel-list .carousel-element").eq(0).remove(); // удаляем первый элемент карусели
					$(".carousel-list").css({"left": "0px"}); // возвращаем исходное смещение набора набора элементов карусели
				}, 300);
			});

			$(".carousel-arrow-left").click(function () { // при клике на левую кнопку выполняем следующую функцию:
				$(".carousel-list .carousel-element").eq(-1).clone().prependTo(".carousel-list"); // выбираем последний элемент набора, создаём его копию и помещаем в начало набора
				$(".carousel-list").css({"left": "-125px"}); // устанавливаем смещение набора -222px
				$(".carousel-list").animate({left: "0px"}, 200); // за 200 милисекунд набор элементов плавно переместится в исходную нулевую точку
				$(".carousel-list .carousel-element").eq(-1).remove(); // выбираем последний элемент карусели и удаляем его
			});
		};

		return this.each(make);
		// в итоге, метод myPlugin вернет текущий объект jQuery обратно
	};

})(jQuery);

$('#foo1, #foo2').myPlugin();

});
