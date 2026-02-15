<script lang="ts" setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination, A11y } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { ref, computed } from 'vue'

const modules = [Navigation, Pagination, A11y]

type ProjectCategory = 'experience' | 'freelance' | 'personal'
type ProjectSlide = { date: string; category: ProjectCategory }

const projectSlides: ProjectSlide[] = [
    { date: '[30/07/2025]', category: 'freelance' },
    { date: '[05/08/2025]', category: 'experience' },
    { date: '[12/08/2025]', category: 'personal' },
]

const activeIndex = ref(0)
const activeCategory = computed<ProjectCategory>(() => projectSlides[activeIndex.value]?.category ?? 'freelance')

function onSlideChange(swiper: any) {
    // use realIndex to get original slide index when loop is enabled
    activeIndex.value = typeof swiper?.realIndex === 'number' ? swiper.realIndex : swiper.activeIndex
}
</script>

<template>
    <div class="projects" id="projects">
        <div class="projects__header">
            <div class="projects__header__text">
                <span class="desc jetbrains">{{ $t('projects.tag') }}</span>
                <span class="title">{{ $t('projects.title') }}</span>
            </div>
            <div class="projects__category">
                <div class="item" :class="{ active: activeCategory === 'experience' }">{{ $t('projects.tabs.experience') }}</div>
                <div class="item" :class="{ active: activeCategory === 'freelance' }">{{ $t('projects.tabs.freelance') }}</div>
                <div class="item" :class="{ active: activeCategory === 'personal' }">{{ $t('projects.tabs.personal') }}</div>
            </div>
        </div>
        <div class="projects__content">
            <Swiper
                class="projects-swiper"
                :modules="modules"
                :slides-per-view="1"
                :space-between="30"
                :loop="true"
                :pagination="{ el: '.projects__pagination-el', clickable: true }"
                :navigation="{ nextEl: '.projects__nav-btn.next', prevEl: '.projects__nav-btn.prev' }"
                @slideChange="onSlideChange"
            >
                <SwiperSlide v-for="(slide, slideIndex) in projectSlides" :key="slideIndex">
                    <div class="item">

                        <div class="item__text-block">
                            
                            <div class="item__texts">
                                
                                
                                <div class="item__title">

                                    <!-- <span class="item-category yellow">Коммерческий опыт</span> -->

                                    <!-- <span class="item-category purple">Персональный проект</span> -->

                                    <!-- <span class="item-category blue">Фриланс проект</span> -->

                                    <svg class="logo" width="217" height="48" viewBox="0 0 217 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M39.3899 47.8272C37.6305 47.8375 31.8721 48.2159 30.6148 47.3878C30.0392 47.0086 29.8086 46.1905 29.6993 45.5515C29.3054 43.2446 29.667 40.5702 29.6998 38.2134C29.8333 28.6678 30.4893 11.5096 36.2457 3.67975C37.8469 1.50202 39.8379 0.486423 42.475 0.0709412C42.8729 0.0399507 43.2718 0.0181567 43.6708 0.0047625C46.275 -0.0643094 49.0261 0.611173 50.9328 2.47428C57.5463 8.93762 58.3594 33.2137 58.4732 42.6931C58.4915 44.2318 58.5906 45.8864 57.389 47.0391C56.8535 47.5528 55.9716 47.6778 55.2638 47.756C53.7476 47.9236 52.1072 47.7857 50.5761 47.7831C47.5892 47.7747 44.6023 47.7852 41.6154 47.8141C42.4327 46.6651 43.4525 45.6524 44.2977 44.5173C46.7283 41.2523 48.2361 37.3995 49.0242 33.4259L49.5064 30.9829C48.0352 31.901 46.6708 33.0471 45.2912 34.0969L38.4741 39.2754C38.8003 42.1216 39.1559 44.9719 39.3899 47.8272ZM43.8709 9.45343C41.5978 14.602 39.8799 19.6215 38.9854 25.1953C39.9501 24.5043 40.9284 23.8808 41.9545 23.2849C44.118 22.1193 46.3278 21.2742 48.6663 20.533C48.1673 18.9247 44.8901 10.4307 43.8709 9.45343Z" fill="#141414"/>
                                <path d="M172.885 47.8192C169.353 48.2953 165.375 47.9132 162.462 45.6898C158.685 42.8061 157.054 37.6858 156.472 33.1544C156.106 30.3006 156.176 27.4141 156.147 24.5435C156.079 17.8947 155.697 10.0271 160.024 4.47194C162.113 1.79022 164.814 0.630172 168.117 0.208387L168.28 0.185008C171.45 -0.239404 175.355 0.515402 177.91 2.51087C182.195 5.85784 183.666 12.2421 184.256 17.3629C185.128 24.9356 185.127 37.7286 180.184 43.8697C178.328 46.1751 175.827 47.5208 172.885 47.8192ZM170.221 19.2565C168.018 19.4198 165.48 19.8519 163.972 21.6441C163.229 22.5281 162.848 23.6595 162.958 24.8148C163.071 25.9974 163.663 27.0117 164.583 27.7531C166.443 29.2527 169.106 29.5398 171.408 29.4962C173.652 29.4135 175.834 29.0374 177.467 27.3318C178.31 26.4515 178.849 25.2762 178.788 24.0424C178.73 22.8653 178.105 21.8676 177.222 21.1185C175.382 19.5567 172.558 19.1548 170.221 19.2565Z" fill="#141414"/>
                                <path d="M84.8934 40.8795C83.0844 43.6642 80.2401 45.3513 77.1363 46.3575C75.7817 46.7947 74.3944 47.1233 72.9878 47.3402C70.8776 47.6625 62.8463 48.4112 61.1728 47.4629C60.725 47.2092 60.4033 46.6713 60.2891 46.1794C60.0312 45.0708 60.2027 43.5499 60.2011 42.3957V33.8181C60.2053 23.4045 60.0538 12.9663 60.1654 2.55586C60.1701 2.13171 60.1089 1.4297 60.344 1.07095C61.7175 0.152792 64.3914 0.391261 66.0113 0.351079C70.486 0.280694 75.6606 0.263095 79.8217 2.05214C82.3511 3.13969 84.2455 5.10469 85.2393 7.67585C86.1025 9.90953 85.9807 12.3066 85.0103 14.489C83.2611 18.4238 79.2014 20.114 75.441 21.5816C77.706 21.8298 80.2154 22.666 82.151 23.8734C84.5685 25.3648 86.2782 27.7732 86.8888 30.5473C87.6654 34.096 86.8153 37.8461 84.8934 40.8795ZM69.2406 7.83501C69.2085 11.2692 69.2064 14.7033 69.2338 18.1375C70.9968 17.3123 72.4675 16.5076 73.8345 15.0925C74.9475 13.86 75.9765 12.6574 76.8156 11.2138C74.5163 9.71387 72.0253 8.17433 69.2406 7.83501ZM69.2156 29.1344C69.1024 32.7547 69.1881 36.3835 69.1518 40.006C71.427 39.2832 73.5574 38.4814 75.3927 36.9088C76.8619 35.7009 78.0214 34.3113 78.804 32.5651C76.1291 31.1779 72.1936 29.5018 69.2156 29.1344Z" fill="#141414"/>
                                <path d="M95.9351 47.7001C93.9062 47.6922 88.6757 48.1113 87.113 47.1312C86.4431 46.711 86.4108 46.1159 86.4838 45.3947C86.7033 43.2272 87.9453 40.8832 88.6993 38.8223C90.0264 35.1952 91.411 31.4083 92.2764 27.6421C92.5734 26.3495 92.8032 24.9741 92.7751 23.6433C92.6808 19.1833 89.8982 12.6338 88.287 8.36347C87.6921 6.78663 86.9221 5.10974 86.6364 3.44833C86.531 2.83483 86.5318 1.95107 86.9576 1.44709C87.8137 0.433593 90.9816 0.557813 92.2517 0.477448C92.29 0.473772 92.3284 0.469046 92.3667 0.46642C94.3225 0.332216 99.8477 0.198273 101.297 1.54741C101.906 2.11443 101.86 3.25924 101.762 4.01089C101.574 5.45536 100.982 6.92057 100.536 8.30543C99.2503 12.2924 97.2185 17.2372 96.6169 21.3083C96.423 22.6193 96.3456 24.0126 96.4963 25.3318C96.9522 29.324 99.6384 36.366 100.949 40.4052C101.453 41.96 102.242 43.7855 102.252 45.4262C102.255 45.9502 102.107 46.4066 101.722 46.7753C100.499 47.9448 97.5387 47.693 95.9351 47.7001Z" fill="#141414"/>
                                <path d="M126.111 47.219C125.116 47.4503 124.153 47.5517 123.133 47.6037C120.853 47.7198 107.161 47.8711 105.691 47.438C105.269 47.3138 104.96 47.0469 104.77 46.6483C104.475 46.0313 104.5 45.2776 104.631 44.6228C104.9 43.2861 105.601 41.9001 106.095 40.6219C106.939 38.4416 107.751 36.2357 108.691 34.095C109.733 31.7229 110.935 29.3897 111.81 26.9507C112.666 24.5631 113.511 20.8739 112.285 18.4808C111.347 16.6484 106.831 17.0301 104.933 16.4376C104.24 16.2214 103.33 15.8283 103.009 15.1307C102.746 14.5592 102.705 13.8659 102.707 13.2455C102.713 11.3651 103.508 3.368 104.236 1.78958C104.558 1.09414 105.284 0.821527 105.951 0.562573C108.863 0.484309 111.816 0.653445 114.733 0.654495L121.585 0.63558C123.199 0.61956 125.153 0.368226 126.711 0.748253C127.385 0.91266 127.931 1.26432 128.262 1.88597C128.657 2.62659 130.027 12.2799 130.121 13.7036C130.16 14.2913 130.166 14.9532 129.977 15.517C129.073 18.2122 123.311 16.4284 121.164 17.6882C120.15 18.2833 119.823 19.4053 119.722 20.5107C119.254 25.6401 122.496 30.2451 124.347 34.8057C125.368 37.3214 126.032 39.8238 126.792 42.4215C127.106 43.4943 127.847 44.9159 127.462 46.0489C127.24 46.6995 126.685 46.9403 126.111 47.219Z" fill="#141414"/>
                                <path d="M155.284 43.4009C155.472 43.9083 155.651 44.4186 155.824 44.9312C155.997 45.457 156.144 46.2449 155.817 46.7489C155.547 47.1649 155.174 47.3666 154.703 47.4935C153.302 47.8706 135.837 47.7719 133.578 47.6321C133.011 47.5969 132.335 47.5654 131.838 47.2805C131.588 46.8737 131.437 46.548 131.404 46.0645C131.327 44.9294 131.666 43.5753 131.819 42.4431C132.135 40.2078 132.404 37.966 132.624 35.7192C133.554 25.1709 132.527 15.9744 131.495 5.53662C131.393 4.50369 131.198 2.39476 131.918 1.5898C132.73 0.680834 134.29 0.671907 135.413 0.614391C137.453 0.631725 139.493 0.635137 141.532 0.624369C142.909 0.607824 144.38 0.474672 145.748 0.638291C146.227 0.695807 146.778 0.808474 147.168 1.11339C147.644 1.48659 147.86 2.0607 147.926 2.64532C148.085 4.05039 147.689 5.79951 147.479 7.20143C146.195 15.7603 142.871 22.5519 137.585 29.3184C139.878 29.2354 152.118 28.797 153.467 29.5117C153.993 29.7906 154.269 30.2499 154.375 30.8261C154.626 32.191 154.243 33.8065 154.184 35.1979C154.063 38.0377 154.548 40.6764 155.284 43.4009Z" fill="#141414"/>
                                <path d="M216.522 26.2824L216.573 37.0471C216.569 38.9698 216.679 41.0506 216.396 42.9531C216.255 43.8965 215.986 44.8693 215.428 45.6535C214.563 46.8668 213.172 47.4454 211.74 47.6621C206.187 48.5015 199.416 46.736 194.942 43.3683C190.23 39.822 187.829 34.587 187.048 28.8441C186.107 21.9282 186.843 14.2809 191.205 8.5897C194.718 4.00496 200.439 1.3537 206.071 0.601263C207.424 0.368047 209.115 0.495419 210.448 0.798757C212.427 1.24917 214.278 2.43547 215.349 4.18197C216.465 5.99937 216.739 8.2538 216.244 10.3133C215.074 15.1875 210.871 17.4577 206.183 17.9895C202.797 18.3735 199.301 17.9281 196.265 19.835C194.981 20.6424 194.047 21.774 193.727 23.2784C193.45 24.5787 193.816 25.8414 194.528 26.94C196.546 30.054 199.934 30.5793 203.29 31.2511C205.198 31.6145 207.101 32.0101 208.996 32.4374C208.507 32.1109 208.008 31.786 207.545 31.4234C205.284 29.6516 203.415 26.7606 203.14 23.8564C203.053 22.9433 203.214 22.0543 203.832 21.3483C204.83 20.2069 206.505 19.9674 207.94 19.9183C210.243 19.8398 213.807 19.9094 215.554 21.6826C216.698 22.8443 216.523 24.7793 216.522 26.2824Z" fill="#141414"/>
                                <path d="M12.6522 47.7436C9.83862 47.8347 3.63108 48.4711 1.48591 46.4688C0.395731 45.4511 0.10526 43.8223 0.0526547 42.3943C-0.0411308 39.8479 0.0350064 37.2691 0.03716 34.7197L0.0364507 20.43L0.0287043 10.4634C0.0305427 8.63075 -0.0735918 6.71617 0.103842 4.89167C0.190484 4.00083 0.323244 2.94348 0.957761 2.27088C2.41352 0.727661 4.37485 0.813017 6.32909 0.744995C8.43591 0.692206 10.5438 0.692203 12.6509 0.744466C11.7285 5.1543 10.402 11.4036 7.79903 15.05C7.14613 15.9647 6.39632 16.6478 5.53673 17.3651C11.9872 15.2559 15.43 14.8864 21.8989 17.2873C20.9308 16.3902 20.0455 15.5035 19.3151 14.3952C16.9546 10.8124 15.4503 4.9765 14.5187 0.759173C16.8897 0.673818 21.6612 0.407772 23.8626 0.830345C24.6124 0.974267 25.3848 1.25633 25.9463 1.79053C27.3359 3.11261 27.4396 4.91767 27.5013 6.70724C27.7162 15.4153 27.8317 24.1254 27.848 32.8361C27.8325 36.2792 28.0999 40.7807 27.5596 44.1174C27.4105 45.0393 27.1455 45.7565 26.476 46.4354C25.3551 47.5713 23.8841 47.6958 22.3845 47.7265L14.7714 47.7817C15.518 43.3994 17.0862 37.085 19.5447 33.4404C20.1621 32.5249 20.8607 31.8289 21.6912 31.1054C15.1614 33.2905 11.9864 33.0215 5.48394 30.942C9.86095 34.7507 11.7377 42.1461 12.6522 47.7436Z" fill="#141414"/>
                            </svg>
                                    <span class="title">{{ $t('projects.item.title') }}</span>
                                </div>

                                <span class="item__desc">{{ $t('projects.item.desc') }}</span>
                            </div>
                        
                            <div class="item__imgs-links">
                                <img class="ruStore" src="../../assets/images/ruStore.png" alt="">
                                <img class="googlePlay" src="../../assets/images/googlePlay.png" alt="">
                            </div>
                        </div>

                        <img class="item__img" src="../../assets/images/project.png" alt="" />
                    </div>
                </SwiperSlide>
            </Swiper>

            <div class="projects__pagination">
                <div class="projects__pagination__button projects__nav-btn prev rot270">↑</div>
                <div class="projects__pagination__row projects__pagination-el"></div>
                <div class="projects__pagination__button projects__nav-btn next">↑</div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    .projects {
        @include df_fdc;
        align-items: center;
        gap: 7.5rem;
        background-color: $dark;
        padding: 7.5rem 11.75rem 8.75rem;
        @include mobile {
            gap: 10rem;
            padding: 10rem 2.5rem;
        }
        &__header {
            @include df_fdc;
            align-items: center;
            gap: 3.75rem;
            @include mobile {
                gap: 5rem;
            }
            &__text {
                @include df_fdc;
                gap: 1rem;
                @include mobile {
                    gap: 2.5rem;
                }
                .desc {
                    @include text1;
                    color: $green;
                    text-align: center;
                    @include mobile {
                        font-size: 2.333rem;
                    }
                }
                .title {
                    font-size: 4rem;
                    font-weight: 500;
                    color: $white;
                    text-align: center;
                    @include mobile {
                        font-size: 4rem;
                    }
                }
            }
        }
        &__category {
            @include df_ac;
            gap: 0.813rem;
            width: fit-content;
            padding: 0.375rem;
            background-color: #1C1C1C;
            @include mobile {
                padding: 1.333rem;
                width: 57.5rem;
                height: 10rem;
                justify-content: space-between;
            }
            .item {
                padding: 0.594rem 1.188rem;
                background-color: #1C1C1C;
                font-weight: 600;
                transition: all .3s ease-out;
                color: $white;
                cursor: pointer;
                @include mobile {
                    padding: 2rem 3rem;
                    font-size: 2.333rem;
                }
                &:hover {
                    transition: all .3s ease-out;
                    background-color: #242424;
                }
            }
            .active {
                padding: 0.594rem 1.188rem;
                background-color: $green;
                font-weight: 600;
                transition: all .3s ease-out;
                color: $dark;
                cursor: pointer;
                @include mobile {
                    padding: 2rem 3rem;
                    font-size: 2.333rem;
                }
            }
        }

        &__content {
            @include df_fdc;
            align-items: center;
            gap: 3.75rem;
            width: 100%;
            @include mobile {
                gap: 10rem;
            }

            .projects-swiper {
                width: 100%;
                overflow: hidden;
            }
            .projects-swiper .swiper-wrapper {
                box-sizing: border-box;
            }
            .projects-swiper .swiper-slide {
                width: 100% !important;
            }
            .item {
                @include df_ac;
                gap: 9rem;
                padding: 1.875rem 1.875rem 1.875rem 3.5rem;
                width: 100%;
                max-width: 96.5rem;
                height: 48.25rem;
                background-color: $green;
                @include mobile {
                    padding: 2.5rem;
                    flex-direction: column-reverse;
                    width: 100%;
                    max-width: 57.5rem;
                    height: fit-content;
                    gap: 5rem;
                }
                &__desc {
                    @include text1;
                    color: #141414;
                    @include mobile {
                        font-size: 2.333rem;
                    }
                }

                &__title {
                    @include df_fdc;
                    gap: 1.875rem;
                    @include mobile {
                        gap: 2.5rem;
                    }
                    .date {
                        color: #141414;
                        font-size: 1.125rem;
                        @include mobile {
                            font-size: 2.333rem;
                        }
                    }
                    .logo {
                        width: 13.563rem;
                        height: 3rem;
                        @include mobile {
                            width: 18rem;
                            height: 4rem;
                        }
                    }
                    .title {
                        font-size: 3rem;
                        font-weight: 600;
                        color: $black;
                        letter-spacing: -0.04em;
                        @include mobile {
                            font-size: 4rem;
                        }
                    }
                }

                &__texts {
                    @include df_fdc;
                    gap: 2.5rem;
                    @include mobile {
                        gap: 5rem;
                    }
                }

                &__text-block {
                    @include df_fdc;
                    height: 100%;
                    justify-content: space-between;
                    max-width: 27.188rem;
                    @include mobile {
                        max-width: none;
                        gap: 6.667rem;
                    }
                }
                &__imgs-links {
                    @include df_ac;
                    justify-content: space-between;
                    .googlePlay {
                        width: 13.438rem;
                        height: 4rem;
                        @include mobile {
                            width: 26.833rem;
                            height: 8rem;
                        }
                    }
                    .ruStore {
                        width: 11.875rem;
                        height: 4rem;
                        @include mobile {
                            width: 23.667rem;
                            height: 8rem;
                        }
                    }
                }

                &__img {
                    width: 54.875rem;
                    height: 44.5rem;
                    @include mobile {
                        width: 52.5rem;
                        height: 42.5rem;
                    }
                }
            }
        }

        &__pagination {
            @include df_ac;
            gap: 1.375rem;
            justify-content: space-between;
            max-width: 37.5rem;
            min-width: 37.5rem;
            @include mobile {
                max-width: none;
                min-width: none;
                width: 100%;
            }
            &__row {
                @include df_ac;
                max-width: 25.75rem;
                max-height: 0.5rem;
                min-width: 25.75rem;
                min-height: 0.5rem;
                @include mobile {
                    min-width: 34rem;
                    max-width: 34rem;
                    max-height: 1.167rem;
                    min-height: 1.167rem;
                }
                // Swiper pagination styled as old bars
                &.projects__pagination-el {
                    display: flex;
                    gap: 0;
                    .swiper-pagination-bullet {
                        flex: 1 1 0;
                        height: 0.5rem;
                        background-color: #1C1C1C;
                        border-radius: 0;
                        opacity: 1;
                        margin: 0; // remove default bullets spacing
                    }
                    .swiper-pagination-bullet-active {
                        background-color: $green;
                    }
                }
            }
            &__button {
                @include df_ac_jcc;
                width: 4.5rem;
                height: 4.5rem;
                font-size: 3rem;
                color: $green;
                background-color: #1C1C1C;
                transform: rotate(90deg);
                transition: all .3s ease-out;
                cursor: pointer;
                @include mobile {
                    background-color: $green;
                    color: #0F0F0F;
                    font-size: 5.333rem;
                    width: 8rem;
                    height: 8rem;
                }
                &:hover {
                    background-color: #242424;
                    transition: all .3s ease-out;
                }
            }
        }
    }

    .rot270 {
        transform: rotate(270deg);
    }

    .item-category {
        width: fit-content;
        padding: 0.3125rem 1.25rem;
        border-radius: 0.9375rem;
        font-size: 1.25rem;
        font-weight: 400;
        color: #000000;
        @include mobile  {
            font-size: 2.3333rem;
            border-radius: 2.5rem;
            padding: 0.5rem 3.3333rem;
        }
    }

    .yellow {
        background-color: #EDFF4B;
    }

    .purple {
        background-color: #96A8FF;
    }

    .blue {
        background-color: #4BFFE4;
    }

</style>