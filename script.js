// === Navigation / Header Scroll Effect ===
window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    if (window.scrollY > 10) header.classList.add("scrolled");
    else header.classList.remove("scrolled");
});

// === Example Wiki Redirect ===
function goToWiki() {
    window.location.href = "https://your-wiki-link-here.com";
}

// === Language dropdown functionality ===
document.addEventListener("DOMContentLoaded", () => {
    const details = document.querySelector(".lang-switcher details");
    if (!details) return;

    const summaryImg = details.querySelector("summary img.flag");
    const list = details.querySelector(".lang-dropdown");
    const options = Array.from(list.querySelectorAll("a[data-lang]"));

    function updateDropdown(selectedLang) {
        options.forEach(opt => {
            opt.parentElement.style.display = (opt.dataset.lang === selectedLang) ? "none" : "block";
        });
    }

    function setLanguage(lang, src, alt) {
        summaryImg.src = src;
        summaryImg.alt = alt;
        summaryImg.dataset.lang = lang;   // keep current code on the summary
        updateDropdown(lang);
        details.removeAttribute("open");
    }

    // Initialize: hide the currently selected language from the list
    const initialLang = summaryImg.dataset.lang || "en";
    updateDropdown(initialLang);

    // Click handlers
    options.forEach(opt => {
        opt.addEventListener("click", (e) => {
            e.preventDefault();
            const lang = opt.dataset.lang;
            const img = opt.querySelector("img.flag");
            setLanguage(lang, img.getAttribute("src"), img.getAttribute("alt"));
        });
    });
});
