import { reactive, computed, watch } from 'vue'

// 1. Estado Reactivo
const state = reactive({
  locale: localStorage.getItem('lang') || 'es' // Lee del navegador o usa español por defecto
})

// 2. Diccionario de Textos
const dictionary: any = {
es: {
    nav: {
        home: 'Inicio',
        about: 'Sobre Mí',
        projects: 'Proyectos',
        contact: 'Contacto'
    },
    home: {
        role: 'Full Stack Developer & DevOps Engineer',
        title: 'Ideas',
        title_span: 'Reales.',
        subtitle: 'Hola, soy Fabricio. Transformo código complejo en arquitecturas simples y escalables.',
        btn_projects: 'Ver Proyectos',
        btn_contact: 'Contáctame'
    },
    about: {
        title: 'Sobre Mí',
        bio1: 'Tengo 19 años y mi viaje empezó en Lima, Perú, pero hoy diseño soluciones desde Almería, España.',
        bio2: 'Más que escribir código, me obsesiona entender el porqué de las cosas.',
        bio3: 'Actualmente finalizando DAW, combino la agilidad del desarrollo web con la robustez de la infraestructura (DevOps).',
        quote: '"Siempre hay una forma más eficiente de hacerlo".',
        skills_title: 'Arsenal Tecnológico',
        timeline_title: 'Trayectoria',
        timeline: [
            { role: 'Aspirante a Full Stack Developer', company: 'Indra (En proceso)', desc: 'Pendiente de incorporación para proyectos de transformación digital.' },
            { role: 'Junior DevOps Assistant (Simulación)', company: 'TechSolutions', desc: 'Automatización de pipelines CI/CD y monitorización Docker.' },
            { role: 'Técnico Superior DAW', company: 'IES Cura Valera & Sampedro', desc: 'Especialización en desarrollo Full Stack e Inteligencia Artificial.' }
        ]
    },
    projects: {
        title: 'Proyectos Destacados',
        subtitle: 'Una selección de trabajos donde el código se encuentra con la infraestructura.',
        link: 'Ver Detalles'
    },
    contact: {
        small_title: 'Hablemos',
        big_title: '¿Tienes un proyecto?',
        desc: 'Estoy disponible para oportunidades freelance o contratación. Estoy a un clic de distancia.',
        form_name: 'Tu Nombre',
        form_subject: 'Asunto',
        form_message: 'Mensaje',
        btn_send: 'Enviar Mensaje'
    },
    footer: {
        rights: 'Desarrollado con Vue 3, Tailwind & Kubernetes.'
    }
},
    en: {
    nav: {
        home: 'Home',
        about: 'About',
        projects: 'Projects',
        contact: 'Contact'
    },
    home: {
        role: 'Full Stack Developer & DevOps Engineer',
        title: 'Real',
        title_span: 'Results.',
        subtitle: 'Hi, I\'m Fabricio. I transform complex code into simple, scalable architectures.',
        btn_projects: 'View Projects',
        btn_contact: 'Contact Me'
    },
    about: {
        title: 'About Me',
        bio1: 'I\'m 19 years old. My journey started in Lima, Peru, but today I build solutions from Almeria, Spain.',
        bio2: 'More than just writing code, I am obsessed with understanding the "why" behind things.',
        bio3: 'Currently finishing my degree, I combine web development agility with infrastructure robustness (DevOps).',
        quote: '"There is always a more efficient way to do it."',
        skills_title: 'Tech Stack',
        timeline_title: 'Career Path',
        timeline: [
            { role: 'Full Stack Developer Aspirant', company: 'Indra (In progress)', desc: 'Pending incorporation for large-scale digital transformation projects.' },
            { role: 'Junior DevOps Assistant (Simulated)', company: 'TechSolutions', desc: 'CI/CD pipeline automation and Docker monitoring.' },
            { role: 'Higher Technician in Web Dev', company: 'IES Cura Valera & Sampedro', desc: 'Specialization in Full Stack development and AI.' }
        ]
    },
    projects: {
        title: 'Featured Projects',
        subtitle: 'A selection of work where code meets infrastructure.',
        link: 'View Details'
    },
    contact: {
        small_title: 'Let\'s Talk',
        big_title: 'Have a project in mind?',
        desc: 'I am available for freelance opportunities or hiring. I am just one click away.',
        form_name: 'Your Name',
        form_subject: 'Subject',
        form_message: 'Message',
        btn_send: 'Send Message'
    },
    footer: {
        rights: 'Powered by Vue 3, Tailwind & Kubernetes.'
    }
}
}

// 3. Computed para obtener textos automáticamente
export const t = computed(() => dictionary[state.locale])

// 4. Función para cambiar idioma
export const toggleLanguage = () => {
    state.locale = state.locale === 'es' ? 'en' : 'es'
    localStorage.setItem('lang', state.locale)
}

// 5. Saber cuál es el actual
export const currentLang = computed(() => state.locale)