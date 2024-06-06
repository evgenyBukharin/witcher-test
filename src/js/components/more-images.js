// имитируем на мобильном устройстве что пришло 3 картинки
const mobileMediaQuery = window.matchMedia("(max-width: 480px)");
if (mobileMediaQuery.matches) {
	// скрываем все картинки кроме первых трех
	let visiblePicturesCount = 3;
	let pictures = document.querySelectorAll(".photos__picture");
	for (let i = visiblePicturesCount; i < pictures.length; i++) {
		pictures[i].classList.add("photos__picture-hidden");
	}

	// показываем картинки по клику
	const hiddenPictures = document.querySelectorAll(".photos__picture-hidden");
	if (hiddenPictures.length > 0) {
		const moreImagesButton = document.querySelector(".photos__btn");
		moreImagesButton.addEventListener("click", () => {
			hiddenPictures.forEach((picture) => {
				picture.classList.remove("photos__picture-hidden");
			});
		});
	}
}
