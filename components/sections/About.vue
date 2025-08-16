<script lang="ts" setup>

</script>

<template>
    <div class="about">
        <div class="about__title-block">
            <span class="about__title-block__desc jetbrains">[Обо мне]</span>
            <span class="about__title-block__title">Меня зовут Илья, <br> я мобильный разработчик</span>
        </div>
        <div class="about__content">
            <div class="item">
                <img class="item__img" src="../../assets/images/about1.png" alt="">
                <div class="item__text-block">
                    <div class="item__title-block">
                        <span class="desc jetbrains">[опыт работы]</span>
                        <span class="title">X лет, XX проектов</span>
                    </div>
                    <span class="text">Начинал с фриланса, работал в продуктовых и аутсорс-командах, участвовал в запуске нескольких стартапов. <br> <br>
                    Хорошо понимаю, как выстроить процесс так, чтобы проект не «застрял» на стадии идеи.</span>
                </div>
            </div>
            <div class="item">
                <img class="item__img" src="../../assets/images/about2.png" alt="">
                <div class="item__text-block">
                    <div class="item__title-block">
                        <span class="desc jetbrains">[специализация]</span>
                        <span class="title">Мобильная разработка </span>
                    </div>
                    <span class="text">Работаю как с нативными технологиями (Swift, Kotlin), так и с кроссплатформенными (Flutter). <br><br>
Беру на себя весь цикл: от проектирования интерфейсов до публикации в сторах и технической поддержки.</span>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    .about {
        @include df_fdc;
        gap: 7.5rem;
        padding: 9.375rem 1.875rem 13.625rem;
        background-color: $white;
        &__title-block {
            @include df_fdc;
            gap: 1rem;
            &__desc {
                @include text1;
                font-family: "JetBrains", sans-serif;
                text-align: center;
                color: $gray;
            }
            &__title {
                font-family: "Manrope", sans-serif;
                font-weight: 500;
                font-size: 4rem;
                text-align: center;
                line-height: 1.2;
                letter-spacing: -0.04em;
            }
        }
        &__content {
            @include df_ac;
            gap: 1.875rem;
            .item {
                display: flex;
                gap: 1.875rem;
                &__img {
                    width: 27.688rem;
                    height: 31.25rem;
                }
                &__text-block {
                    @include df_fdc;
                    gap: 1.875rem;
                    margin-top: 6rem;
                    background-color: $white-gray;
                    width: 27.688rem;
                    height: 31.25rem;
                    padding: 3rem 2rem 0rem;
                }
                .text {
                    color: $gray-black;
                    font-size: 1.25rem;
                }
                &__title-block {
                    @include df_fdc;
                    gap: 1rem;
                    .desc {
                        font-size: 1.25rem;
                        color: $gray-black;
                    }
                    .title {
                        font-size: 2rem;
                        font-weight: 600;
                        color: $black;
                    }
                }
            }
        }
    }
</style>