function register() {
    let nik = document.getElementById('nik').value.trim();
    let nama = document.getElementById('nama').value.trim();
    let tempatLahir = document.getElementById('tempatLahir').value.trim();
    let tglLahir = document.getElementById('tglLahir').value;
    let noBPJS = document.getElementById('noBPJS').value.trim();
    let email = document.getElementById('email').value.trim();
    let noHP = document.getElementById('noHP').value.trim();
    let alamat = document.getElementById('alamat').value.trim();
    let password = document.getElementById('password').value.trim();

    if (!nik || !nama || !tempatLahir || !tglLahir || !noBPJS || !email || !noHP || !alamat || !password) {
        alert("Semua field harus diisi!");
        return;
    }

    let users = JSON.parse(localStorage.getItem('users')) || [];

    if (users.find(u => u.nik === nik)) {
        alert("NIK sudah terdaftar!");
        return;
    }

    users.push({nik,nama,tempatLahir,tglLahir,noBPJS,email,noHP,alamat,password});
    localStorage.setItem('users', JSON.stringify(users));
    alert("Pendaftaran berhasil! Silahkan login.");

    window.location.href = "login.html";
}

function login() {
    let nik = document.getElementById('login-NIK').value.trim();
    let password = document.getElementById('login-password').value.trim();

    let users = JSON.parse(localStorage.getItem('users')) || [];
    let user = users.find(u => u.nik === nik && u.password === password);

    if (user) {
        localStorage.setItem('loggedUser', nik);
        alert(`Selamat datang, ${user.nama}!`);
        window.location.href = "dashboard.html";
    } else {
        alert("NIK atau password salah!");
    }
}

function logout() {
    localStorage.removeItem('loggedUser');
    window.location.href = "login.html";
}

function nomorAntrian() {
    const antrian = Math.floor(Math.random() * 100) + 1;
    document.getElementById('dashboard-content').innerHTML = `<p>Nomor Antrian Check-Up Anda: <b>${antrian}</b></p>`;
}

function beliObat() {
    document.getElementById('dashboard-content').innerHTML = `
        <p>Menu Pembelian Obat:</p>
        <ul>
            <li>Paracetamol</li>
            <li>Vitamin C</li>
            <li>Antibiotik</li>
        </ul>
    `;
}

function jadwalDokter() {
    document.getElementById('dashboard-content').innerHTML = `
        <p>Jadwal Dokter:</p>
        <ul>
            <li>Dr. Budi - Senin & Rabu 09:00-12:00</li>
            <li>Dr. Sari - Selasa & Kamis 13:00-16:00</li>
        </ul>
    `;
}

function layananLain() {
    document.getElementById('dashboard-content').innerHTML = `
        <p>Layanan Lain:</p>
        <ul>
            <li>Rontgen</li>
            <li>Laboratorium</li>
            <li>Poliklinik Anak</li>
        </ul>
    `;
}
