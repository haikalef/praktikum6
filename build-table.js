const tagihan = {
    "sosial" : {
      "abodemen" : 10000,
      "tarif" : 300,
      "pajak" : 0
    },
    "rumah" : {
      "abodemen" : 30000,
      "tarif" : 500,
      "pajak" : 0.10
    },
    "apartemen" : {
      "abodemen" : 50000,
      "tarif" : 750,
      "pajak" : 0.15
    },
    "industri" : {
      "abodemen" : 75000,
      "tarif" : 1000,
      "pajak" : 0.20
    },
    "villa" : {
      "abodemen" : 100000,
      "tarif" : 1250,
      "pajak" : 0.25
    },
  }
  
function hitungData(){
    let tanyaNama = document.getElementById("name").value
    let tanyaKategori = document.getElementById("category").value
    let jumlahPemakaian = document.getElementById("pemakaian").value
    let hasil = document.getElementById("hasil")

    if (jumlahPemakaian > 30 || jumlahPemakaian < 0) {
        alert("Jumlah hari tidak valid")
    }

    if (tanyaNama == ""){
        alert("fields nama_fields harus diisi!")
    }
    for (let index = 1; index <= jumlahPemakaian; index++) {
        let jumlah = index
        let tarif = tagihan[tanyaKategori]['tarif'] * index
        let abodemen = tagihan[tanyaKategori]['abodemen']
        let subtotal = tagihan[tanyaKategori]['tarif'] * index + tagihan[tanyaKategori]['abodemen']

        hasil.innerHTML += `
            <tr>
                <td>${jumlah}</td>
                <td>${tarif}</td>
                <td>${abodemen}</td>
                <td>${subtotal}</td>
            </tr>
        `
    }

}
  
  