function createLem(tag){
  if (tag.leo != undefined && tag.leo != null && tag.leo != '') {
    leo = document.createElement(tag.leo)
    tag.id != undefined && tag.id != null && tag.id != '' ? id = leo.setAttribute("id", tag.id) : false;
    tag.name != undefined && tag.name != null && tag.name != '' ? name = leo.setAttribute("id", tag.name) : false;
    tag.href != undefined && tag.href != null && tag.href != '' ? href = leo.setAttribute("href", tag.href) : false;
    tag.target != undefined && tag.target != null && tag.target != '' ? target = leo.setAttribute("target", tag.target) : false;
    tag.src != undefined && tag.src != null && tag.src != '' ? src = leo.setAttribute("src", tag.src) : false;
    tag.title != undefined && tag.title != null && tag.title != '' ? title = leo.setAttribute("title", tag.title) : false;
    tag.alt != undefined && tag.alt != null && tag.alt != '' ? alt = leo.setAttribute("alt", tag.alt) : false;
    tag.place != undefined && tag.place != null && tag.place != '' ? place = leo.setAttribute("place", tag.place) : false;
    tag.width != undefined && tag.width != null && tag.width != '' ? width = leo.setAttribute("width", tag.width) : false;
    tag.heigth != undefined && tag.heigth != null && tag.heigth != '' ? heigth = leo.setAttribute("heigth", tag.heigth) : false;
    tag.onclick != undefined && tag.onclick != null && tag.onclick != '' ? onclick = leo.setAttribute("onclick", tag.onclick) : false;
    tag.clase != undefined && tag.clase != null && tag.clase != '' ? leo.className = tag.clase : false;
    tag.text != undefined && tag.text != null && tag.text != '' ? leo.innerHTML = tag.text : false;
    tag.imgBack != undefined && tag.imgBack != null && tag.imgBack != '' ? leo.style.backgroundImage = `url('${tag.imgBack}')` : false;
    if (tag.where != undefined && tag.where != null && tag.where != '') {
      document.getElementById(tag.where).appendChild(leo);
    } else { document.write('Falta ID de destino.'); }
  } else { document.write('Falta el tipo de etiqueta ha crear.'); }
}
