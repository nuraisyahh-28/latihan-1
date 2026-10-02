function tampilkanPesan() {

    document.getElementById("pesan").innerHTML =
        "Terima kasih sudah mengunjungi website saya!";

}

function sapaUser() {

    let nama = document.getElementById("nama").value;

    document.getElementById("hasil").innerHTML =
        "Halo, " + nama + "! Selamat datang.";

}