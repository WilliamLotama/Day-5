let projects = [];

function addProject(event) {
  event.preventDefault();

  let tittle = document.getElementById("input-tittle").value;
  let desc = document.getElementById("input-desc").value;
  let image = document.getElementById("input-image").files;
  let startDate = document.getElementById("input-startDate").value
  let endDate = document.getElementById("input-endDate").value

  let html = document.getElementById('input-html').checked
  let javaScript = document.getElementById('input-javaScript').checked
  let java = document.getElementById('input-java').checked
  let android = document.getElementById('input-android').checked
  


  image = URL.createObjectURL(image[0]); // Untuk menampilkan gambar

 

  console.log(javaScript)

  if(html)
  {
    html = document.getElementById('input-html').value;
  }else{
    html = " "
  }

  if(javaScript)
  {
    javaScript = document.getElementById('input-javaScript').value;
  }else{
    javaScript =" "
  }

  if(java)
  {
    java = document.getElementById('input-java').value;
  }else{
    java =" "
  }

  if(android)
  {
    android = document.getElementById('input-android').value;
  }else{
    android =" "
  }
  
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
          <p class="durasi" id="durasi-card">Durasi :
          ${getDistanceTime(
            projects[dataProject].startDate,
            projects[dataProject].endDate
          )}
          </p>

          <!-- Untuk Desc -->
          <p id="desc-card">
            ${projects[dataProject].desc.slice(0, 30)}
          </p>

          <!-- Untuk Halaman Icon -->
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

function getFullTime(timeInput) {
  let monthName = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];

  // let time = new Date(); // Mengambil waktu saat ini

  let date = timeInput.getDate(); // Untuk Tanggal Kalender
  let month = timeInput.getMonth(); // Untuk Mengambil Bulan
  let year = timeInput.getFullYear(); // Untuk Mengambil Tahun
  let hour = timeInput.getHours(); // Untuk Mengamnil waktu dalam hitungan jam
  let minute = timeInput.getMinutes(); // Untuk Mengambil waktu dalam hitungan Menit

  let fullTime = `${date} ${monthName[month]} ${year} ${hour}:${minute} WIB`;
  return fullTime;
}

// Function untuk menghitung jarak antara dua waktu
function getDistanceTime(start, end) {
  let startDate = new Date(start);
  let endDate = new Date(end);

  let distance = endDate - startDate; // Menghitung jarak waktu antara waktu mulai dan selesai
  console.log(startDate);
  let miliseconds = 1000; // 1000 miliseconds dalam 1 detik
  let secondInHours = 3600; // 1 jam sama dengan 3600 detik
  let hoursInDay = 24; // 24 jam dalam 1 hari
  let dayInMonth = 31; // 31 hari dalam 1 bulan

  let distanceMonth = Math.floor(
    distance / (miliseconds * secondInHours * hoursInDay * dayInMonth) // Untuk menghitung waktu bulan
  );
  let distanceDay = Math.floor(
    distance / (miliseconds * secondInHours * hoursInDay) // Untuk menghitung waktu hari
  );
  let distanceHours = Math.floor(distance / (miliseconds * 60 * 60)); // Untuk menghitung waktu jam
  let distanceMinutes = Math.floor(distance / (miliseconds * 60)); // Untuk menghitung waktu menit
  let distanceSeconds = Math.floor(distance / miliseconds); // Untuk menghitung waktu detik
  

  if (distanceMonth > 0) {
    return `${distanceMonth} bulan`;

  } else if (distanceDay > 0) {
    return `${distanceDay} hari`;
  } else if (distanceHours > 0) {
    return `${distanceHours} jam`;
  } else if (distanceMinutes > 0) {
    return `${distanceMinutes} menit`;
  } else {
    return `${distanceSeconds} detik`;
  }
}

