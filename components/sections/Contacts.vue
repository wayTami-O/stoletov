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
        <div class="contacts__links">
            <div class="item">
                <div class="item__texts">
                    <span class="desc jetbrains">[whatsapp]</span>
                    <span class="title">wa.me/7123456XXXX</span>
                </div>
                <div class="item__arrow">
                    
                    <svg class="item__arrow__svg" width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.98266 22.1822L0.622656 19.7022L14.7427 5.46217C15.116 5.08883 15.5027 4.74217 15.9027 4.42217C16.3027 4.0755 16.6227 3.80883 16.8627 3.62217L16.8227 3.34217C16.5293 3.36883 16.0893 3.40883 15.5027 3.46217C14.916 3.5155 14.2893 3.54217 13.6227 3.54217H5.82266V0.422168H22.4227V17.0222H19.2227V9.06217C19.2227 8.3955 19.2493 7.74217 19.3027 7.10217C19.356 6.46217 19.4093 5.96883 19.4627 5.62217L19.1827 5.54217C18.996 5.80883 18.7027 6.16883 18.3027 6.62217C17.9293 7.0755 17.556 7.48883 17.1827 7.86217L2.98266 22.1822Z" fill="white"/>
                    </svg>

                </div>
            </div>
            <div class="item">
                <div class="item__texts">
                    <span class="desc jetbrains">[telegram]</span>
                    <span class="title">@ilya_st</span>
                </div>
                <div class="item__arrow">
                    
                    <svg class="item__arrow__svg" width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.98266 22.1822L0.622656 19.7022L14.7427 5.46217C15.116 5.08883 15.5027 4.74217 15.9027 4.42217C16.3027 4.0755 16.6227 3.80883 16.8627 3.62217L16.8227 3.34217C16.5293 3.36883 16.0893 3.40883 15.5027 3.46217C14.916 3.5155 14.2893 3.54217 13.6227 3.54217H5.82266V0.422168H22.4227V17.0222H19.2227V9.06217C19.2227 8.3955 19.2493 7.74217 19.3027 7.10217C19.356 6.46217 19.4093 5.96883 19.4627 5.62217L19.1827 5.54217C18.996 5.80883 18.7027 6.16883 18.3027 6.62217C17.9293 7.0755 17.556 7.48883 17.1827 7.86217L2.98266 22.1822Z" fill="white"/>
                    </svg>

                </div>
            </div>
            <div class="item">
                <div class="item__texts">
                    <span class="desc jetbrains">[max]</span>
                    <span class="title">@stoletov</span>
                </div>
                <div class="item__arrow">
                    
                    <svg class="item__arrow__svg" width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.98266 22.1822L0.622656 19.7022L14.7427 5.46217C15.116 5.08883 15.5027 4.74217 15.9027 4.42217C16.3027 4.0755 16.6227 3.80883 16.8627 3.62217L16.8227 3.34217C16.5293 3.36883 16.0893 3.40883 15.5027 3.46217C14.916 3.5155 14.2893 3.54217 13.6227 3.54217H5.82266V0.422168H22.4227V17.0222H19.2227V9.06217C19.2227 8.3955 19.2493 7.74217 19.3027 7.10217C19.356 6.46217 19.4093 5.96883 19.4627 5.62217L19.1827 5.54217C18.996 5.80883 18.7027 6.16883 18.3027 6.62217C17.9293 7.0755 17.556 7.48883 17.1827 7.86217L2.98266 22.1822Z" fill="white"/>
                    </svg>

                </div>
            </div>
        </div>
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
            @include df_ac;
            gap: 1.875rem;
            .item {
                @include df_fdc;
                align-items: end;
                justify-content: space-between;
                width: 100%;
                height: 15.625rem;
                background-color: #EBEBEB;
                padding: 3rem 2rem 2rem;
                transition: all .3s ease-out;
                cursor: pointer;
                &:hover {
                    transition: all .3s ease-out;
                    background-color: #141414;
                    span {
                        transition: all .3s ease-out;
                        color: $green !important;
                    }
                    .item__arrow {
                        transition: all .3s ease-out;
                        background-color: $green;
                        &__svg path {
                            fill: #141414;
                        }
                    }
                }
                &__texts {
                    @include df_fdc;
                    align-items: start;
                    gap: .75rem;
                    width: 100%;
                    .desc {
                        @include text1;
                        color: #757575;
                    }
                    .title {
                        font-size: 2rem;
                        font-weight: 600;
                        color: #141414;
                    }
                }
                &__arrow {
                    @include df_ac_jcc;
                    width: 3.75rem;
                    height: 3.75rem;
                    background: #141414;
                    border-radius: 100%;
                    color: $white;
                    font-size: 2.5rem;
                    &__svg {
                        width: 1.438rem;
                        height: 1.438rem;
                    }
                }
            }
        }
    }
</style>