<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { RouterLink } from 'vue-router'
import { t, toggleLanguage, currentLang } from '../i18n'

const isMenuOpen = ref(false)
const isDark = ref(false)

const toggleMenu = () => (isMenuOpen.value = !isMenuOpen.value)

// Lógica de Modo Oscuro Automático
onMounted(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark')
        isDark.value = true
    } else {
        document.documentElement.classList.remove('dark')
        isDark.value = false
    }
})

const toggleTheme = () => {
    isDark.value = !isDark.value
    if (isDark.value) {
        document.documentElement.classList.add('dark')
        localStorage.theme = 'dark'
    } else {
        document.documentElement.classList.remove('dark')
        localStorage.theme = 'light'
    }
}
</script>

<template>
    <nav class="fixed w-full z-50 bg-white/80 dark:bg-slate-900/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 transition-colors duration-300">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16 items-center">
            <div class="flex-shrink-0 flex items-center">
            <RouterLink to="/" class="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500 hover:opacity-80 transition">
                FP.
            </RouterLink>
            </div>

            <div class="hidden md:flex space-x-8 items-center">
            <RouterLink v-for="item in [
                { label: t.nav.home, path: '/' },
                { label: t.nav.about, path: '/sobre-mi' },
                { label: t.nav.projects, path: '/proyectos' },
                { label: t.nav.contact, path: '/contacto' }
                ]" 
                :key="item.path" 
                :to="item.path"
                class="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                {{ item.label }}
            </RouterLink>
            
            <button @click="toggleLanguage" class="mr-2 px-3 py-1 rounded-md text-sm font-bold border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-slate-800 transition text-gray-700 dark:text-gray-300">
                {{ currentLang === 'es' ? 'EN' : 'ES' }}
            </button>

            <button @click="toggleTheme" class="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-slate-800 transition">
                <span v-if="isDark">☀️</span>
                <span v-else>🌙</span>
            </button>
            </div>

            <div class="md:hidden flex items-center">
            <button @click="toggleLanguage" class="mr-3 text-sm font-bold border px-2 py-1 rounded dark:border-gray-700 text-gray-700 dark:text-gray-300">
                {{ currentLang === 'es' ? 'EN' : 'ES' }}
            </button>

            <button @click="toggleTheme" class="mr-4 p-2">
                <span v-if="isDark">☀️</span>
                <span v-else>🌙</span>
            </button>

            <button @click="toggleMenu" class="text-gray-700 dark:text-gray-200 focus:outline-none">
                <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path v-if="!isMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
            </div>
        </div>
        </div>

        <transition name="slide-fade">
        <div v-if="isMenuOpen" class="md:hidden bg-white dark:bg-slate-900 border-t dark:border-gray-800">
            <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <RouterLink v-for="item in [
                { label: t.nav.home, path: '/' },
                { label: t.nav.about, path: '/sobre-mi' },
                { label: t.nav.projects, path: '/proyectos' },
                { label: t.nav.contact, path: '/contacto' }
                ]" 
                :key="item.path" 
                :to="item.path"
                @click="isMenuOpen = false"
                class="block text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-800 px-3 py-2 rounded-md text-base font-medium">
                {{ item.label }}
            </RouterLink>
            </div>
        </div>
        </transition>
    </nav>
</template>

<style scoped>

.slide-fade-enter-active, .slide-fade-leave-active { 
    transition: all 0.3s ease; 
}

.slide-fade-enter-from, .slide-fade-leave-to { 
    opacity: 0;
    transform: translateY(-10px);
}

</style>