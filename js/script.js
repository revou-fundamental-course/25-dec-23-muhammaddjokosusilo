const luas = document.getElementById('hitungLuas');
const keliling = document.getElementById('keliling');

const hasilLuas = document.getElementById('hasilLuas');
const inputHasilLuas = document.getElementById('inputHasilLuas');
const reset = document.getElementById('reset');

const hasilKeliling = document.getElementById('hasilkeliling');
const inputHasilKeliling = document.getElementById('inputHasilKeliling');
const resetKeliling = document.getElementById('reset-keliling');

luas.addEventListener('submit', function(event) {
    event.preventDefault();
    let alas = document.getElementById('hAlas').value;
    let tinggi = document.getElementById('hTinggi').value;
    if (alas > 0 ) {
        let jumlah = 0.5 * alas * tinggi;
        console.log(jumlah);

        const hasil = `<h3>Hasil</h3>`;
        const boxHasil = `<div class="input-hasil"><p class="display-flex">` + jumlah +`</p></div>`;
        const ikan = `<button type="reset" class="button-reset">Reset</button`;
        hasilLuas.innerHTML = hasil;
        inputHasilLuas.innerHTML = boxHasil;
        reset.innerHTML = ikan;
        
    }
});

keliling.addEventListener('submit', function(event) {
    event.preventDefault();
    let sisiPertama = parseFloat(document.getElementById('sisi1').value);
    let sisiKedua = parseFloat(document.getElementById('sisi2').value);
    let sisiKetiga = parseFloat(document.getElementById('sisi3').value);
    if (sisiPertama > 0 ) {
        let jumlahKeliling = sisiPertama + sisiKedua + sisiKetiga;
        console.log(jumlahKeliling);

        const kataHasil = `<h3>Hasil</h3>`;
        const boxHasilKeliling = `<div class="input-hasil"><p class="display-flex">` + jumlahKeliling +`</p></div>`;
        const resetButton = `<button type="reset" class="button-reset">Reset</button`;
        hasilKeliling.innerHTML = kataHasil;
        inputHasilKeliling.innerHTML = boxHasilKeliling;
        resetKeliling.innerHTML = resetButton;
    }
});

    
