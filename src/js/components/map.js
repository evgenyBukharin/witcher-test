let markersCoords = [
	[37.63825115316776, 55.746233699267094],
	[37.49954876058963, 55.749332055586926],
	[37.43088420980839, 55.825164624102335],
];

initMap();

async function initMap() {
	await ymaps3.ready;

	const { YMap, YMapDefaultSchemeLayer, YMapDefaultFeaturesLayer, YMapMarker } = ymaps3;

	const tabletMediaQuery = window.matchMedia("(max-width: 768px)");
	let map;
	if (tabletMediaQuery.matches) {
		map = new YMap(
			document.getElementById("map"),
			{
				location: {
					center: [37.597052422699, 55.7826237823337],
					zoom: 11,
				},
			},
			[new YMapDefaultSchemeLayer(), new YMapDefaultFeaturesLayer()]
		);
	} else {
		map = new YMap(
			document.getElementById("map"),
			{
				location: {
					center: [37.597052422699, 55.7826237823337],
					zoom: 12,
				},
			},
			[new YMapDefaultSchemeLayer(), new YMapDefaultFeaturesLayer()]
		);
	}

	markersCoords.forEach((coords) => {
		const markerElement = document.createElement("img");
		markerElement.className = "map__marker";
		markerElement.src = "./img/map-poing.png";
		map.addChild(new YMapMarker({ coordinates: coords }, markerElement));
	});
}
