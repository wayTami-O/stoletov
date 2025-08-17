<script lang="ts" setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination, A11y } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const modules = [Navigation, Pagination, A11y]
</script>

<template>
    <div class="about">
        <div class="about__title-block">
            <span class="about__title-block__desc jetbrains">{{ $t('about.tag') }}</span>
            <span class="about__title-block__title">{{ $t('about.title_top') }} <br> {{ $t('about.title_bottom') }}</span>
            <span class="about__title-block__mobile mobile-flex">{{ $t('about.mobile_desc') }}</span>
        </div>

        <div class="about__content desktop-flex">
            <div class="item">
                <img class="item__img" src="../../assets/images/about1.png" alt="">
                <div class="item__text-block">
                    <div class="item__title-block">
                        <span class="desc jetbrains">{{ $t('about.exp_tag') }}</span>
                        <span class="title">{{ $t('about.exp_title') }}</span>
                    </div>
                    <span class="text">{{ $t('about.exp_text') }}</span>
                </div>
            </div>
            <div class="item">
                <img class="item__img" src="../../assets/images/about2.png" alt="">
                <div class="item__text-block">
                    <div class="item__title-block">
                        <span class="desc jetbrains">{{ $t('about.spec_tag') }}</span>
                        <span class="title">{{ $t('about.spec_title') }}</span>
                    </div>
                    <span class="text">{{ $t('about.spec_text') }}</span>
                </div>
            </div>
        </div>

        <div class="about__mobile-swiper mobile-flex">
            <div class="about__mobile-swiper__items">
                <Swiper
                    class="about-swiper"
                    :modules="modules"
                    :slides-per-view="1"
                    :space-between="20"
                    :loop="false"
                    :pagination="{ el: '.about__pagination-el', clickable: true }"
                    :navigation="{ prevEl: '.pagintion__button.prev', nextEl: '.pagintion__button.next' }"
                >
                    <SwiperSlide>
                        <div class="item-text">
                            <div class="item-text__title-block">
                                <span class="desc jetbrains">{{ $t('about.exp_tag') }}</span>
                                <span class="title">{{ $t('about.exp_title') }}</span>
                            </div>
                            <span class="text">{{ $t('about.exp_text') }}</span>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img class="item-img" src="../../assets/images/about1.png" alt="" />
                    </SwiperSlide>
                </Swiper>
            </div>
            <div class="pagintion">
                <div class="pagintion__button prev rot270">↑</div>
                <div class="pagintion__row about__pagination-el"></div>
                <div class="pagintion__button next rot90">↑</div>
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
        @include mobile {
            padding: 10rem 2.5rem;
        }
        &__title-block {
            @include df_fdc;
            gap: 1rem;
            @include mobile {
                gap: 2.5rem;
            }
            &__desc {
                @include text1;
                font-family: "JetBrains", sans-serif;
                text-align: center;
                color: $gray;
                @include mobile {
                    font-size: 2.333rem;
                    text-align: start;
                }
            }
            &__title {
                font-family: "Manrope", sans-serif;
                font-weight: 500;
                font-size: 4rem;
                text-align: center;
                line-height: 1.2;
                letter-spacing: -0.04em;
                @include mobile {
                    text-align: start;
                }
            }
            &__mobile {
                font-size: 2.333rem;
                color: #757575;
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
        &__mobile-swiper {
            @include df_fdc;
            gap: 5rem;
            &__items {
                @include df_ac;
                gap: 2.5rem;
                width: 100%;
                overflow: hidden;
                .about-swiper { width: 100%; }
                .about-swiper .swiper-slide { width: 100% !important; }
            }
            .item-text {
                height: 55.333rem;
                min-width: 42.5rem;
                background-color: #EBEBEB;
                padding: 5rem 2.5rem 0rem;
                @include df_fdc;
                gap: 5rem;
                &__title-block {
                    @include df_fdc;
                    gap: 2.667rem;
                    .desc {
                        font-size: 2.333rem;
                        color: #757575;
                    }
                    .title {
                        font-size: 3.333rem;
                        font-weight: 600;
                        color: #000000;
                    }
                }
                .text {
                    font-size: 2.333rem;
                    color: #757575;
                }
            }
            .item-img {
                width: 43.333rem;
                height: 55.333rem;
            }
            .pagintion {
                @include df_ac;
                gap: 3.667rem;
                &__button {
                    @include df_ac_jcc;
                    width: 8rem;
                    height: 8rem;
                    background-color: #EBEBEB;
                    color: #0B0B0B;
                    font-size: 5.333rem;
                    cursor: pointer;
                }
                &__row {
                    @include df_ac;
                    width: 100%;
                    height: 1.167rem;
                    // Swiper pagination styled as bars
                    &.about__pagination-el {
                        display: flex;
                        gap: 0;
                        .swiper-pagination-bullet {
                            flex: 1 1 0;
                            height: 1.167rem;
                            background-color: #EBEBEB;
                            border-radius: 0;
                            opacity: 1;
                            margin: 0;
                        }
                        .swiper-pagination-bullet-active {
                            background-color: #D1D1D1;
                        }
                    }
                }
            }
        }
    }
    .rot270 {
        transform: rotate(270deg);
    }
    .rot90 {
        transform: rotate(90deg);
    }
</style>