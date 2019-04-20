// initMap() - функция инициализации карты
function initMap() {
	// Координаты центра на карте. Широта: nn.nnnnnn, Долгота: nn.nnnnnn (Скнилівська 23: 49.812821, 23.974302)
	var centerLatLng = new google.maps.LatLng(49.812821, 23.974302);
	// Обязательные опции с которыми будет проинициализированна карта
	var mapOptions = {
		center: centerLatLng, // Координаты центра мы берем из переменной centerLatLng
		zoom: 8               // Зум по умолчанию. Возможные значения от 0 до 21
	};
	// Создаем карту внутри элемента #map
	var map = new google.maps.Map(document.getElementById("map"), mapOptions);
}
// Ждем полной загрузки страницы, после этого запускаем initMap()
google.maps.event.addDomListener(window, "load", initMap);