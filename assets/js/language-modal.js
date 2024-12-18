<script>
    function setLanguage(lang) {
        if (lang === 'en') {
            window.location.href = 'index.html'; // Redirect to the English version
        } else if (lang === 'es') {
            window.location.href = 'index_es.html'; // Redirect to the Spanish version
        }
    }

    // Show the language modal when the page loads
    document.addEventListener("DOMContentLoaded", function () {
        const modal = document.getElementById("language-modal");
        if (modal) {
            modal.style.display = "flex";
        }
    });
</script>