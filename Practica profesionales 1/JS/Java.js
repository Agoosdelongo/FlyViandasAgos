
document.getElementById("registroForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    var email = document.getElementById("gmail").value;
    var password = document.getElementById("contraseña").value;
    
    var isValid = validateForm(email, password);
    if (isValid) {
        document.getElementById("mensaje_registro_exitoso").style.display = "block";
        document.getElementById("mensaje_registro_fallido").style.display = "none";
    } else {
        document.getElementById("mensaje_registro_exitoso").style.display = "none";
        document.getElementById("mensaje_registro_fallido").style.display = "block";
    }
});
<script>
function validateForm(email, password) {
    if (password.length > 10) {
        return false;
    }
    for (var i = 0; i < password.length - 1; i++) {
        if (password[i] === password[i + 1]) {
            return false;
        }
    }
    return true;
}
</script>