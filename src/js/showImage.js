function showImage(img) {
  const bigImage = document.getElementById("bigImage");

  bigImage.src = img.src;
  bigImage.parentElement.style.display = "block";

  window.scroll({   
    behavior: "smooth",
    top: bigImage.offsetTop - 150,
  });
}
