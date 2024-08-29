<script setup lang="ts">

const menuData = [
    { name: 'Главная', link: '/' },
    { name: 'Стоимость', link: '#price' },
    { name: 'Новости', link: '/news' },
    { name: 'Отзывы', link: 'reviews.html' },
    { name: 'Частые вопросы', link: 'question.html' },
    { name: 'Контакты', link: 'contacts/contacts-page.html' }
]

</script>

<template>
<header class="header">
    <div class="container">
        <div class="header__info">
            <a data-fancybox data-src="#selectableModal" class="header__info-sity main_siti sochi1"
						>Сочи</a>
            
            <ul class="header__info-label">
                <li class="header__info-item header__info-item--map-img">
                    <a class="header__info-link" href="contacts/contacts-page.html">г. Сочи ул. Советская д. 40 офис 6
                    </a>
                </li>
                <li class="header__info-item header__info-item--phone-img">
                    <a class="header__info-link" href="tel:+79882316611"> 8 (862) 231-66-11
                    </a>
                </li>
            </ul>
        </div>
    </div>
    <div class="header__nav">
        <div class="container">
            <div class="wrapper">
                <a class="header__nav-logo" href="https://stop-zaim.ru/">
                    <NuxtImg src="img/header/logo.svg"/>
                  
                </a>
                <nav>
                    <ul class="header__nav-menu">
                        <Menu-item v-for="menu in menuData" :name="menu.name" :link="menu.link"></Menu-item>
                    </ul>
                </nav>
              
                    <div class="menu-icon">
                        <div class="dot"></div>
                        <div class="dot"></div>
                        <div class="dot"></div>
                        <div class="dot"></div>
                        <div class="dot"></div>
                        <div class="dot"></div>
                        <div class="dot"></div>
                        <div class="dot"></div>
                        <div class="dot"></div>
                    </div>
                
            </div>
        </div>
    </div>
</header>
</template>