<script lang="ts" setup>

</script>

<template>
    <footer>
        <span class="big-text">
            ИЛЬЯ <br> СТОЛЕТОВ
        </span>
        <div class="text-container">
            <div class="text-container__links">
                <span class="item jetbrains">[Обо мне]</span>
                <span class="lang jetbrains">[en]</span>
                <span class="item jetbrains">[Проекты]</span>
                <span class="item jetbrains">[Контакты]</span>
            </div>
            <span class="data">© 2025, Илья Столетов. Все права защищены</span>
        </div>
    </footer>
</template>

<style lang="scss">
    footer {
        background-color: $green;
        padding: 5.625rem 1.875rem;
        @include df_ac;
        justify-content: space-between;
        .big-text {
            font-size: 7.625rem;
            color: #141414;
            font-weight: 500;
            line-height: .9;
        }
        .text-container {
            @include df_fdc;
            gap: 3.5rem;
            max-width: 29.5rem;
            width: 100%;
            &__links {
                @include grid(2, 1.875rem);
                .item {
                    @include text1;
                    width: fit-content;
                    cursor: pointer;
                }
            }
            .lang {
                grid-row: span 3;
            }
        }
        .data {
            @include text1;
            color: #141414;
        }
    }
</style>