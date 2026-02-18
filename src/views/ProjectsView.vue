<script setup lang="ts">
import { computed } from 'vue'
import { t, currentLang } from '../i18n'
import ukiyoImg from '@/assets/img/ukiyo.jpg'
import trafficImg from '@/assets/img/ai-traffic.jpg'
import cloudImg from '@/assets/img/cloud-cli.jpg'

const projects = computed(() => {
    const isEs = currentLang.value === 'es'
    
    return [
        {
        title: 'Ukiyo Backend Ecosystem',
        tech: ['NestJS', 'TypeScript', 'NATS', 'Docker'],
        desc: isEs 
            ? 'Arquitectura backend escalable para restauración. Sistema monorepo de microservicios comunicados vía NATS con API Gateway.'
            : 'Scalable backend architecture for restaurants. Microservices monorepo system communicating via NATS with a centralized API Gateway.',
        link: '#',
        image: ukiyoImg
        },
        {
        title: 'Sentinela AI Traffic',
        tech: ['Python', 'OpenCV', 'TensorFlow'],
        desc: isEs
            ? 'Visión artificial para análisis de tráfico en tiempo real. Detecta congestión usando redes neuronales convolucionales.'
            : 'Computer vision system for real-time traffic analysis. Detects congestion patterns using convolutional neural networks.',
        link: '#',
        image: trafficImg
        },
        {
        title: 'CloudDeploy CLI',
        tech: ['Go', 'AWS', 'Linux'],
        desc: isEs
            ? 'CLI para automatizar despliegues serverless. Reduce tiempos de configuración de infraestructura en un 40%.'
            : 'CLI tool to automate serverless deployments. Reduces infrastructure configuration time by 40%.',
        link: '#',
        image: cloudImg
        }
    ]
    })
</script>

<template>
    <div class="pt-24 pb-16 px-4 max-w-7xl mx-auto min-h-screen dark:bg-slate-900">
        <div class="text-center mb-16">
        <h2 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">{{ t.projects.title }}</h2>
        <p class="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {{ t.projects.subtitle }}
        </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="(project, index) in projects" :key="index" class="group bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 dark:border-gray-700">
            <div class="relative h-48 overflow-hidden">
            <div class="absolute inset-0 bg-gray-900/20 group-hover:bg-transparent transition z-10"></div>
            <img :src="project.image" :alt="project.title" class="w-full h-full object-cover transform group-hover:scale-110 transition duration-500">
            </div>
            
            <div class="p-6">
            <div class="flex flex-wrap gap-2 mb-4">
                <span v-for="tag in project.tech" :key="tag" class="px-2 py-1 text-xs font-semibold bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 rounded">
                {{ tag }}
                </span>
            </div>
            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">{{ project.title }}</h3>
            <p class="text-gray-600 dark:text-gray-400 text-sm mb-6 line-clamp-3">
                {{ project.desc }}
            </p>
            <a :href="project.link" class="inline-flex items-center text-blue-600 dark:text-cyan-400 font-medium hover:underline">
                {{ t.projects.link }} <span class="ml-1">→</span>
            </a>
            </div>
        </div>
        </div>
    </div>
</template>