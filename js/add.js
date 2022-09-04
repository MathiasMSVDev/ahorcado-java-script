const palabra_extra = document.getElementById("palabra-extra");

document.querySelector(".btn-cancelar").addEventListener("click", function (e) {
    window.location.href = "./";
});

document.querySelector(".bi-github").addEventListener("click", function (e) {
    window.open("https://github.com/JakubSkraly", "_blank");
});

document.querySelector(".bi-linkedin").addEventListener("click", function (e) {
    window.open("https://www.linkedin.com/in/jose-leonel-inga-quintana/", "_blank");
});

function show_toast(icon, message) {
    const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
    });

    Toast.fire({
        icon: icon,
        title: message,
    });
}

function evitar_enter(e) {
    let key = e.keyCode;

    if (key === 13) {
        e.preventDefault();
        return false;
    }
}

document.querySelector(".btn-guardar-empezar").addEventListener("click", function (e) {
    let extra = palabra_extra.value.trim().toUpperCase();
    // Acepta solo letras mayusculas, Ñ, Ä, Ë, Ï, Ö, Ü => PINGÜINO, ÑANDU
    if (/^[A-ZÄËÏÖÜ\u00d1\s]*$/.test(extra) && extra != "") {
        let is_array = extra.split(" ");
        if (is_array.length > 1) {
            show_toast("info", "Solo ingrese una palabra");
            return false;
        }
        if (extra.length <= 8) {
            localStorage.setItem("palabra_extra", extra);
            window.location.href = "./game.html";
        } else {
            show_toast("warning", "Máximo 8 letras");
            return false;
        }
    } else {
        show_toast("info", "Solo letras y sin tildes");
        return false;
    }
});

palabra_extra.onkeypress = evitar_enter;