
const caixa= document.querySelector('.caixa');
const fechar= document.querySelector('.fechar-caixa');
const menu = document.querySelector('.menu-img');
const nav = document.querySelector('.nav-movel');
const projeto1 = document.getElementById('projeto1');
const projeto2 = document.getElementById('projeto2');
const projeto3 = document.getElementById('projeto3');
const projeto4 = document.getElementById('projeto4');

        menu.addEventListener('click', () => {
            nav.classList.toggle('open-nav');
        });

        nav.addEventListener('click', () => {
            nav.classList.toggle('open-nav');
        });

        fechar.addEventListener('click', () => {
            caixa.classList.toggle('open');
        });

        projeto1.addEventListener('click', () => {
            document.querySelector('.titulo-caixa').textContent = "API de Paises";
            document.querySelector('.texto-caixa').textContent = "Este projeto consiste em uma API simples para o gerenciamento de países, permitindo criar, listar, atualizar e remover registros (operações de CRUD).";
            document.querySelector('.link-caixa').href = "https://github.com/kaiqueferreiradz/paises_api_springboot";
            caixa.classList.toggle('open');
        });

        projeto2.addEventListener('click', () => {
            document.querySelector('.titulo-caixa').textContent = "Agregador de links";
            document.querySelector('.texto-caixa').textContent = "Este projeto é a parte backend de uma aplicação de agregador de links para bio de redes sociais (estilo Linktree). A API é responsável pelo gerenciamento de usuários, assim como dos seus respectivos links.";
            document.querySelector('.link-caixa').href = "https://github.com/kaiqueferreiradz/agrupador_de_links_back-end";
            caixa.classList.toggle('open');
        });

        projeto3.addEventListener('click', () => {
            document.querySelector('.titulo-caixa').textContent = " Sistema de Login";
            document.querySelector('.texto-caixa').textContent = "Este projeto é um sistema de login de usuário que pode ser aplicado em outros sistemas. Ele permite que o usuário seja autenticado e, a partir dessa autenticação, também é possível filtrar os endpoints de acordo com o que o usuário tem acesso ou não.";
            document.querySelector('.link-caixa').href = "https://github.com/kaiqueferreiradz/spring_security_estudos";
            caixa.classList.toggle('open');
        });

        projeto4.addEventListener('click', () => {
            document.querySelector('.titulo-caixa').textContent = "Api de Produtos";
            document.querySelector('.texto-caixa').textContent = "Este projeto é uma API que permite você cadastrar (operações de CRUD) produtos do tipo cerveja, com um cadastro fácil que permite determinar o tipo de cerveja cadastrada.";
            document.querySelector('.link-caixa').href = "https://github.com/kaiqueferreiradz/beer_project_back_end_go";
            caixa.classList.toggle('open');
        });

