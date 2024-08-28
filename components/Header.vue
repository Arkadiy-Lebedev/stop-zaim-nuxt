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
                        <li class="header__nav-item">
                            <a class="header__nav-link" href="index.html">Главная</a>
                        </li>
                        <li class="header__nav-item" onclick="location.href='#price'">
                            <a class="header__nav-link" href="#price">Стоимость</a>
                        </li>
                        <li class="header__nav-item">
                            <a class="header__nav-link" href="news.html">Новости</a>
                        </li>
                        <li class="header__nav-item">
                            <a class="header__nav-link" href="reviews.html">Отзывы</a>
                        </li>
                        <li class="header__nav-item">
                            <a class="header__nav-link" href="question.html">Частые вопросы</a>
                        </li>
                        <li class="header__nav-item">
                            <a class="header__nav-link" href="contacts/contacts-page.html">Контакты</a>
                        </li>
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