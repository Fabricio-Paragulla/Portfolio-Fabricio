<script setup lang="ts">
import { ref } from 'vue'
import { t } from '../i18n'

const form = ref({
    name: '',
    subject: '',
    message: ''
})

const sendEmail = () => {
    const { name, subject, message } = form.value
    const mailtoLink = `mailto:fabricioparagulla987@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Hola/Hi Fabricio,\n\nSoy/I am ${name}.\n\n${message}`)}`
    window.location.href = mailtoLink
}
</script>

<template>
    <div class="pt-24 pb-16 px-4 max-w-7xl mx-auto min-h-screen flex items-center">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 w-full">
        
        <div class="space-y-8 animate-fade-in-left">
            <div>
            <h2 class="text-blue-600 dark:text-cyan-400 font-bold tracking-wide uppercase text-sm mb-2">
                {{ t.contact.small_title }}
            </h2>
            <h1 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                {{ t.contact.big_title }}
            </h1>
            <p class="text-lg text-gray-600 dark:text-gray-400">
                {{ t.contact.desc }}
            </p>
            </div>

            <div class="space-y-4">
            <div class="flex items-center space-x-4 p-4 bg-white dark:bg-slate-800 rounded-lg shadow-sm">
                <div class="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full text-blue-600 dark:text-blue-400">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                </div>
                <div>
                <p class="text-sm text-gray-500 dark:text-gray-400">Email</p>
                <a href="mailto:fabricioparagulla987@gmail.com" class="text-lg font-semibold text-gray-900 dark:text-white hover:text-blue-600 transition">
                    fabricioparagulla987@gmail.com
                </a>
                </div>
            </div>
            
            <div class="flex items-center space-x-4 p-4 bg-white dark:bg-slate-800 rounded-lg shadow-sm">
                <div class="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full text-blue-600 dark:text-blue-400">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                </div>
                <div>
                <p class="text-sm text-gray-500 dark:text-gray-400">Ubicación / Location</p>
                <p class="text-lg font-semibold text-gray-900 dark:text-white">
                    Almería, España / Remote
                </p>
                </div>
            </div>
            </div>
        </div>

        <div class="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 animate-fade-in-up">
            <form @submit.prevent="sendEmail" class="space-y-6">
            <div>
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{{ t.contact.form_name }}</label>
                <input v-model="form.name" type="text" required class="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{{ t.contact.form_subject }}</label>
                <input v-model="form.subject" type="text" required class="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{{ t.contact.form_message }}</label>
                <textarea v-model="form.message" rows="4" required class="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition"></textarea>
            </div>
            <button type="submit" class="w-full py-4 px-6 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-bold rounded-lg shadow-lg hover:shadow-blue-500/30 transform hover:-translate-y-1 transition-all duration-300">
                {{ t.contact.btn_send }}
            </button>
            </form>
        </div>

        </div>
    </div>
</template>

<style scoped>

.animate-fade-in-left { 
    animation: fadeInLeft 0.8s ease-out forwards;
    opacity: 0;
    transform: translateX(-20px); 
}

.animate-fade-in-up { 
    animation: fadeInUp 0.8s ease-out forwards; 
    opacity: 0; 
    transform: translateY(20px); 
}

@keyframes fadeInLeft { to 
    { 
        opacity: 1; 
        transform: translateX(0); 
    } 
}

@keyframes fadeInUp { to 
    { 
        opacity: 1; 
        transform: translateY(0); 
    } 
}

</style>