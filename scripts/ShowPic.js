function ShowPic(pic) {
  let source = pic.getAttribute("href");
  let placeholder = document.getElementById("placeholder");
  placeholder.setAttribute("src", source);
  let text = pic.getAttribute("title");
  let description = document.getElementById("description");
  description.firstChild.nodeValue = text;
}
