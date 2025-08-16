<script lang="ts" setup></script>

<template>
    <div class="contacts">
        <div class="contacts__header">
            <span class="desc jetbrains">[контакты]</span>
            <span class="title">Готов обсудить проект</span>
        </div>
        <form class="contacts__form">
            <label for="name">
                <input type="text" id="name" placeholder="Имя">
            </label>
            <label for="message" class="message">
                <textarea type="text" id="message" placeholder="Сообщение"></textarea>
            </label>
            <label for="email">
                <input type="text" id="email" placeholder="Электронная почта">
            </label>
            <button>Отправить</button>
        </form>
    </div>
</template>

<style lang="scss">
    .contacts {
        @include df_fdc;
        gap: 7.5rem;
        padding: 11.25rem 12rem 13.625rem;
        &__header {
            @include df_fdc;
            align-items: center;
            gap: 1rem;
            .desc {
                @include text1;
                color: #8F8F8F;
            }
            .title {
                font-weight: 500;
                font-size: 4rem;
                color: #141414;
            }
        }
        &__form {
            @include grid(2, 1.875rem);
            label {
                padding: 1.5rem 1.25rem;
                background-color: #EBEBEB;
                &:focus {
                    border: 0.125rem solid #D1D1D1;
                }
                input, textarea {
                    width: 100%;
                    font-size: 1.5rem;
                    background-color: transparent;
                    height: 100%;
                    border: none;
                    outline: none;
                    resize: none;
                }
            }
            button {
                grid-column: span 2;
                height: 5rem;
                background-color: $green;
                font-size: 1.625rem;
                color: $dark;
                font-weight: 500;
            }
            .message {
                grid-row: span 2;
            }
        }
        &__links {
            
        }
    }
</style>