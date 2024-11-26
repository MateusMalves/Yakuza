// scripts.js

document.addEventListener("DOMContentLoaded", () => {
    // Navegação suave ao clicar nos links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            target.scrollIntoView({ behavior: "smooth", block: "start" });
        });
    });

    // Mostrar descrição ao passar o mouse sobre as imagens dos jogos
    const jogos = document.querySelectorAll(".jogo img");
    jogos.forEach(jogo => {
        jogo.addEventListener("mouseenter", () => {
            const descricao = jogo.parentElement.querySelector("p");
            descricao.style.display = "block";
        });

        jogo.addEventListener("mouseleave", () => {
            const descricao = jogo.parentElement.querySelector("p");
            descricao.style.display = "none";
        });
    });

    // Tema claro e escuro (dark mode toggle)
    const toggleTheme = document.createElement("button");
    toggleTheme.textContent = "Alternar Tema";
    toggleTheme.style.position = "fixed";
    toggleTheme.style.bottom = "10px";
    toggleTheme.style.right = "10px";
    toggleTheme.style.padding = "10px";
    toggleTheme.style.zIndex = "1000";
    document.body.appendChild(toggleTheme);

    toggleTheme.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
    });

    // Botão "Voltar ao Topo"
    const backToTop = document.createElement("button");
    backToTop.textContent = "↑";
    backToTop.style.position = "fixed";
    backToTop.style.bottom = "70px";
    backToTop.style.right = "10px";
    backToTop.style.padding = "10px";
    backToTop.style.display = "none";
    backToTop.style.borderRadius = "50%";
    backToTop.style.zIndex = "1000";
    backToTop.title = "Voltar ao topo";
    document.body.appendChild(backToTop);

    backToTop.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // Mostrar o botão "Voltar ao Topo" ao rolar a página
    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            backToTop.style.display = "block";
        } else {
            backToTop.style.display = "none";
        }
    });

    // Barra de progresso de rolagem
    const progressBar = document.createElement("div");
    progressBar.style.position = "fixed";
    progressBar.style.top = "0";
    progressBar.style.left = "0";
    progressBar.style.height = "5px";
    progressBar.style.backgroundColor = "#1e90ff";
    progressBar.style.zIndex = "1000";
    progressBar.style.width = "0%";
    document.body.appendChild(progressBar);

    window.addEventListener("scroll", () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        progressBar.style.width = `${scrollPercent}%`;
    });

    // Mensagem ao chegar no rodapé
    const footer = document.querySelector("footer");
    if (footer) {
        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        alert("Você chegou ao final da página!");
                    }
                });
            },
            { threshold: 1.0 }
        );
        observer.observe(footer);
    }
});
