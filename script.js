document.getElementById("volunteerForm").addEventListener("submit", function(e){
    e.preventDefault();

    alert("Pendaftaran berhasil! 🎉");

    let modal = bootstrap.Modal.getInstance(document.getElementById('volunteerModal'));
    modal.hide();

    this.reset();
});

// PILIH NOMINAL CEPAT
const buttons = document.querySelectorAll(".amount-btn");
const input = document.getElementById("customAmount");

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        buttons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        let value = btn.innerText.replace("K","000");
        input.value = value;
    });
});


// SUBMIT DONASI
document.getElementById("donateForm").addEventListener("submit", function(e){
    e.preventDefault();

    let amount = document.getElementById("customAmount").value;

    if(amount === "" || amount <= 0){
        alert("Masukkan nominal donasi dulu!");
        return;
    }

    alert("Terima kasih sudah berdonasi ❤️");

    let modal = bootstrap.Modal.getInstance(document.getElementById('donateModal'));
    modal.hide();

    this.reset();
});

function toggleText(btn){
    const hiddenCards = document.querySelectorAll(".text-more");

    hiddenCards.forEach(card => {
        card.classList.toggle("d-none");
    });

    btn.innerText = btn.innerText === "Read More" 
        ? "Read Less" 
        : "Read More";
}

function donate(btn){
    const card = btn.closest(".cause-card");

    let goal = card.querySelector(".goal");
    let raised = card.querySelector(".raised");
    let progress = card.querySelector(".progress-bar");

    let goalValue = parseInt(goal.innerText);
    let raisedValue = parseInt(raised.innerText);

    // tambah donasi (contoh: +50)
    raisedValue += 50;

    // update tampilan
    raised.innerText = raisedValue;

    // hitung persen
    let percent = (raisedValue / goalValue) * 100;
    progress.style.width = percent + "%";

    // optional: batas max
    if(percent >= 100){
        progress.style.width = "100%";
        alert("Target donasi tercapai! 🎉");
    }
}

function toggleText(el){
    const moreText = el.previousElementSibling;

    moreText.classList.toggle("d-none");

    el.innerText = moreText.classList.contains("d-none") 
        ? "Read More →" 
        : "Read Less ←";
}

function toggleText(el){
    const moreText = el.previousElementSibling;

    moreText.classList.toggle("d-none");

    el.innerText = moreText.classList.contains("d-none") 
        ? "Read More →" 
        : "Read Less ←";
}

let selectedCard = null;

// BUKA MODAL
function openDonateModal(btn){
    selectedCard = btn.closest(".cause-card");

    let modal = new bootstrap.Modal(document.getElementById('donateModal'));
    modal.show();
}


// SUBMIT DONASI
document.getElementById("donateForm").addEventListener("submit", function(e){
    e.preventDefault();

    let amount = parseInt(document.getElementById("donateAmount").value);

    if(!selectedCard || !amount){
        alert("Isi nominal dulu!");
        return;
    }

    let goal = selectedCard.querySelector(".goal");
    let raised = selectedCard.querySelector(".raised");
    let progress = selectedCard.querySelector(".progress-bar");

    let goalValue = parseInt(goal.innerText);
    let raisedValue = parseInt(raised.innerText);

    // tambah donasi sesuai input
    raisedValue += amount;

    raised.innerText = raisedValue;

    let percent = (raisedValue / goalValue) * 100;
    progress.style.width = percent + "%";

    if(percent >= 100){
        progress.style.width = "100%";
        alert("Target tercapai! 🎉");
    } else {
        alert("Terima kasih sudah berdonasi ❤️");
    }

    // tutup modal
    let modal = bootstrap.Modal.getInstance(document.getElementById('donateModal'));
    modal.hide();

    this.reset();
});

<script>
function joinNow()
    let btn = document.getElementById("joinBtn");
    let volunteer = document.getElementById("volunteerCount");

    if(!btn || !volunteer)
        alert("ID tidak ditemukan!");
        return;
    

    // ambil angka
    let current = parseInt(volunteer.innerText);

    // tambah angka
    current += 5;

    // update tampilan
    volunteer.innerText = current + " +";

    // ubah tombol
    btn.innerHTML = "✔ Joined";
    btn.classList.remove("btn-success");
    btn.classList.add("btn-secondary");

    // disable klik
    btn.onclick = null;
    btn.style.pointerEvents = "none";
    btn.style.opacity = "0.6";

    alert("Berhasil join! 🎉");

</script>