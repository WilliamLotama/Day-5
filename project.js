let projects = [];

function addProject(event) {
  event.preventDefault();

  let tittle = document.getElementById("input-tittle").value;
  let desc = document.getElementById("input-desc").value;
  let image = document.getElementById("input-image").files;
  let startDate = document.getElementById("input-startDate").value
  let endDate = document.getElementById("input-endDate").value

  let html = document.getElementById('input-html').Checked
  let javaScript = document.getElementById('input-javaScript').Checked
  let java = document.getElementById('input-java').Checked
  let android = document.getElementById('input-android').Checked
  


  image = URL.createObjectURL(image[0]); // Untuk menampilkan gambar

  let project = {
    tittle: tittle,
    desc : desc,
    image: image,
    startDate:startDate,
    endDate : endDate,
    html : html,
    javaScript:javaScript,
    java:java,
    android:android
  };

  if(html)
  {
    html = document.getElementById('input-html').value
  }else{
    html = " "
  }

  if(javaScript)
  {
    javaScript = document.getElementById('input-javaScript').value
  }else{
    javaScript =" "
  }

  if(java)
  {
    java = document.getElementById('input-java').value
  }else{
    java =" "
  }

  if(android)
  {
    android = document.getElementById('input-android').value
  }else{
    android =" "
  }
  

  projects.push(project); // Menambahkan object project ke dalam array projects

  renderProjects();
}

function renderProjects() {
  document.getElementById("project-view").innerHTML = "";

  for (let dataProject = 0; dataProject < projects.length; dataProject++) {
    document.getElementById("project-view").innerHTML += `
    <div class="project-card">
          <!-- Untuk Image Tittle durasi  -->
          <img src="${projects[dataProject].image}" id="image-card" />
          <a
            href="viewProject.html"
            style="text-decoration: none; color: black"
          >
            <h3 id="tittle-card">${projects[dataProject].tittle}</h3>
          </a>
          <p class="durasi" id="durasi-card">Durasi 3 Bulan</p>

          <!-- Untuk Desc -->
          <p id="desc-card">
            ${projects[dataProject].desc.slice(0, 30)}
          </p>

          <!-- Icon Code -->
          <i class="${projects[dataProject].javaScript}"></i>
          <i class="${projects[dataProject].html}"></i>
          <i class="${projects[dataProject].java}"></i>
          <i class="${projects[dataProject].android}"></i>

          <div class="button-card">
            <button>Edit</button>
            <button>Delete</button>
          </div>
        </div>
    `;
  }
}
