function hitungbmi(berat, tinggi) {
    return berat / (tinggi / 100) ** 2
}

function submit() {
    let berat = document.getElementById("berat").value;
    let tinggi = document.getElementById("tinggi").value;
    var jenisKelamin = document.getElementsByName("jenisKelamin");
    let jenis_kelamin = "";
    for (let i = 0; i < jenisKelamin.length; i++) {
        if (jenisKelamin[i].checked) {
            jenis_kelamin = jenisKelamin[i].value;
        }
    };
    let usia = document.getElementById("usia").value;
    let data = {
        berat: berat,
        tinggi: tinggi,
        jenis_kelamin: jenis_kelamin,
        usia: usia
    };
    let result = hitungbmi(berat, tinggi);
    result = result.toFixed(1);
    document.getElementById('nilaiBmi').innerHTML = result.toString();
    if(result < 18.5){
        document.getElementById("hasil").innerHTML = "Kekurangan Berat Badan";
        document.getElementById('status').innerHTML = "Anda kurang berat badan";
        document.getElementById('keterangan').innerHTML = `<p>Hasil BMI antara 0 dan 18.5</p>
            <p>Menunjukkan berat badan anda kurang</p>
            <p>Jika BMI Anda berada dalam kategori ini maka anda dianjurkan untuk menaikkan berat badan hingga batas normal</p>
            <p>Batas normal berat badan adalah antara 18.5 dan 24.9</p>
            <div class=\"flex\">
                <button type=\"button\" class=\"btn bg-skyblue text-white mr-1\">Konsultasi Ahli Gizi Via Aplikasi</button>
                <button type=\"button\" class=\"btn bg-skyblue text-white\">Registrasi Online Ahli Gizi</button>
            </div>
        `;
    }
    else if(result >= 18.5 && result <= 24.9){
        document.getElementById("hasil").innerHTML = "Normal (Ideal)";
        document.getElementById('status').innerHTML = "Anda memiliki berat badan normal";
        document.getElementById('keterangan').innerHTML = `<p>Hasil BMI antara 18.5 dan 24.9</p>
            <p>Menunjukkan berat badan anda ideal</p>
        `;
    }
    else if(result >= 25 && result <= 29.9){
        document.getElementById("hasil").innerHTML = "Kelebihan Berat Badan";
        document.getElementById('status').innerHTML = "Anda memiliki berat badan berlebih";
        document.getElementById('keterangan').innerHTML = `<p>Hasil BMI antara 23.5 dan 25</p>
            <p>Menunjukkan berat badan anda berlebih</p>
            <p>Cara terbaik untuk menurunkan berat badan adalah dengan mengatur kalori makanan yang dikonsumsi dan berolahraga</p>
            <p>Jika BMI Anda berada dalam kategori ini maka anda dianjurkan untuk menurunkan berat badan hingga batas normal</p>
            <p>Batas normal berat badan adalah antara 18.5 dan 24.9</p>
            <div class=\"flex\">
                <button type=\"button\" class=\"btn bg-skyblue text-white mr-1\">Konsultasi Ahli Gizi Via Aplikasi</button>
                <button type=\"button\" class=\"btn bg-skyblue text-white\">Registrasi Online Ahli Gizi</button>
            </div>
        `;
    }
    else if(result >= 30){
        document.getElementById("hasil").innerHTML = "Kegemukan (Obesitas)";
        document.getElementById('status').innerHTML = "Anda memiliki kegemukan";
        document.getElementById('keterangan').innerHTML = `<p>Hasil BMI antara 25 dan 29.9</p>
            <p>Menunjukkan berat badan anda sangat berlebih</p>
            <p>Cara terbaik untuk menurunkan berat badan adalah dengan mengatur kalori makanan yang dikonsumsi dan berolahraga</p>
            <p>Jika BMI Anda berada dalam kategori ini maka anda dianjurkan untuk menurunkan berat badan hingga batas normal</p>
            <p>Batas normal berat badan adalah antara 18.5 dan 24.9</p>
            <div class=\"flex\">
                <button type=\"button\" class=\"btn bg-skyblue text-white mr-1\">Konsultasi Ahli Gizi Via Aplikasi</button>
                <button type=\"button\" class=\"btn bg-skyblue text-white\">Registrasi Online Ahli Gizi</button>
            </div>
        `;
    }
    document.getElementById("aksiHasil").innerHTML = "<button type=\"button\" class=\"btn bg-skyblue text-white\">Download Hasil BMI</button>";
}

window.addEventListener("load", function () {
    document.getElementById("form").addEventListener("submit", function (event) {
        event.preventDefault();
        submit();
    });
})