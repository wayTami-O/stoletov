<script lang="ts" setup></script>

<template>
    <div class="marquee-container">
        <div class="marquee-track">
            <span>Разработка мобильных приложений</span>
            <span>*</span>
            <span>Загрузка приложения в RuStore и Google Play</span>
            <span>*</span>
            <span>Разработка мобильных приложений</span>
    
            <span>Разработка мобильных приложений</span>
            <span>*</span>
            <span>Загрузка приложения в RuStore и Google Play</span>
            <span>*</span>
            <span>Разработка мобильных приложений</span>
        </div>
    </div>
</template>

<style lang="scss">
    .marquee-container {
        @include df_ac;
        height: 4.25rem;
        width: 100%;
        background-color: $green;
        overflow: hidden;

        --duration: 28s;
    }

    .marquee-track {
        @include df_ac;
        gap: 1.875rem;
        width: max-content;      
        will-change: transform;
        animation: marquee var(--duration) linear infinite;
    }

    .marquee-container span {
        font-family: "Manrope", sans-serif !important;
        font-weight: 700;
        font-size: 2rem;
        text-transform: uppercase;
        flex: 0 0 auto;
        min-width: fit-content;
        white-space: nowrap;
    }

    @keyframes marquee {
        from { transform: translateX(0); }
        to   { transform: translateX(-50%); } 
    }

    @media (prefers-reduced-motion: reduce) {
        .marquee-track { animation: none; }
    }
</style>