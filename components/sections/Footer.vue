<script lang="ts" setup>
import { useI18n } from 'vue-i18n'

const { locale, setLocale } = useI18n()

async function switchLocale() {
    const next = locale.value === 'ru' ? 'en' : 'ru'
    await setLocale(next)
}
</script>

<template>
    <footer>
        <span class="big-text">{{ $t('hero.name_top') }} <br> {{ $t('hero.name_bottom') }}</span>
        <div class="text-container">
            <div class="text-container__links">
                <a class="item jetbrains" href="#about">{{ $t('footer.about') }}</a>
                <span class="lang jetbrains" @click="switchLocale">{{ locale === 'ru' ? $t('nav.lang_en') : $t('nav.lang_ru') }}</span>
                <a class="item jetbrains" href="#projects">{{ $t('footer.projects') }}</a>
                <a class="item jetbrains" href="#contacts">{{ $t('footer.contacts') }}</a>
            </div>
            <span class="data">{{ $t('footer.copyright') }}</span>
        </div>
    </footer>
</template>

<style lang="scss">
    footer {
        background-color: $green;
        padding: 5.625rem 1.875rem;
        @include df_ac;
        justify-content: space-between;
        position: relative;
        z-index: 200;
        @include mobile {
            @include df_fdc;
            align-items: start;
            gap: 10rem;
            padding: 6.667rem 2.5rem;
        }
        .big-text {
            font-size: 7.625rem;
            color: #141414;
            font-weight: 500;
            line-height: .9;
            @include mobile {
                font-size: 11rem;
            }
        }
        .text-container {
            @include df_fdc;
            gap: 3.5rem;
            max-width: 29.5rem;
            width: 100%;
            @include mobile {
                max-width: none;
                gap: 10rem;
            }
            &__links {
                @include grid(2, 1.875rem);
                @include mobile {
                    gap: 2.333rem;
                }
                a {
                    color: inherit;
                    text-decoration: none;
                }
                .item {
                    @include text1;
                    width: fit-content;
                    cursor: pointer;
                    @include mobile {
                        font-size: 2.333rem;
                    }
                }
            }
            .lang {
                grid-row: span 3;
                @include mobile {
                    // margin-left: 2rem;
                    font-size: 2.333rem;
                }
            }
        }
        .data {
            @include text1;
            color: #141414;
            @include mobile {
                font-size: 2.333rem;
            }
        }
    }
</style>