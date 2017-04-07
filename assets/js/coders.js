var students=["Fiorella Quispe","Lourdes Vilchez","Rossmery Maldonado","Yessenia Huaman","Miriam Mendoza","Elizabeth Condori","Arantza Burga","Grecia Rayme","Janine Vega","Rosario Felix","Daguiana Revoredo","Jenny Velasquez","Nadia Cuadros","Michell More","Marilu Llamocca","Mariel Garcia","Fiorella Cisneros","Geraldine Chauca","Yellitza Rivera","Stephanie Hiyagon","Emma Tapia","Danna Franco","Flor Retamozo","Nathaly Pacheco",
"Ericka Vidal","Katherine Ortega","Brilly Majuan","Flor Tello","Leslie Avendaño","Cindy Mendoza","Annia Flores","Betsi Loayza","Aida Sulca","Milagros Gutierrez","Nakarid Jave","Angie Condor","Maricarmen Rojas","Ariana Cabana","Flor Condori","Mitch Rodríguez","Naomi Villanueva","Mari Castillo","Miriam Peralta","Karin Alejo","Liliana Peña","Ruth Salvador","Maribel Sevilla","Wendy Reyes","Cinthia",
"Maria Grecia Cutipa","Ana Durand","Glisse Jorge","Neiza Nuñez","Sandra Solorzano"];

function fotoCoder(param){
  return "assets/img/students/"+(param+1)+".png";
}

function crearCoder(elem){
  var div = document.createElement("div");
  var contFoto = document.createElement("figure");
  contFoto.setAttribute("class","coder");
  var foto = document.createElement("img");
  var indice = students.indexOf(elem);
  foto.setAttribute("src",fotoCoder(indice));
  foto.setAttribute("alt",elem);
  var letraFoto = document.createElement("figcaption");
  var span = document.createElement("span");
  span.innerText = students[indice]

  letraFoto.appendChild(span);
  contFoto.appendChild(foto);
  contFoto.appendChild(letraFoto);
  div.appendChild(contFoto);

  return div;
}

window.addEventListener("load",function(e){
  var chicas = students.forEach(function(e){
    document.getElementById('girls').appendChild(crearCoder(e));
  });
  return chicas;
})
