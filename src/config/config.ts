import bgServices1 from '../component/services/img/item1bg.svg'
import bgServices2 from '../component/services/img/item2bg.svg'
import bgServices3 from '../component/services/img/item3bg.svg'
import bgServices4 from '../component/services/img/item4bg.svg'
import strelkaWhite from '../component/services/img/strelkaWhite.svg'
import strelkaInvisible from '../component/services/img/strelkaInvisible.svg'

import bg1Cases from '../component/cases/img/bg1.svg'




/* title */
type slogan={
    name: string,
    description: string,
}

export const numberOfSpecialists:slogan={name:'Растем',description:"25 опытных специалистов наивысшего класса из разных сфер"}
export const sloganTitle:slogan={name:'Решаем',description:"Не просто продаем, а решаем проблемы вашего бизнеса"}

export const stack: {
    name: string;
    rotate: number;
    top: number;
    left: number;
}[] = [
    { name: 'DevOps', rotate: -43.11, top: 22, left: -10 },
    { name: 'Grafical', rotate: 22.77, top: 16, left: 222 },
    { name: 'Data-Analys', rotate: 31.41, top: 38, left: 169.5 },
    { name: 'Animate', rotate: -15.7, top: 80.8, left: 49.93 },
    { name: 'UI/UX', rotate: 5.57, top: 133, left: 161 },
    { name: 'SEO', rotate: 11.49, top: 151, left: -4 },
    { name: 'Backend', rotate: -19.23, top: 191, left: 29 },
    { name: 'Moution', rotate: 39.7, top: 193.3, left: 217.02 },
    { name: '3D-Design', rotate: 29.36, top: 246.18, left: 178.57 },
    { name: 'Frontend', rotate: 0, top: 303, left: 0 }
];



/* Services */

export const services:
    {
        name: string;
        description: string;
        url: string;
        bg: string;
        strelka: string;
    }[]= [
    {
        name: "Веб-разработка",
        description:
            "Разработка и дизайн сайтов под ваши нужды. Индивидуальный подход к каждому проекту и непрерывная связь с клиентами",
        url: "",
        bg: bgServices1,
        strelka:strelkaWhite
    },
    {
        name: "Бренд-дизайн",
        description:
            "Разработка и дизайн сайтов под ваши нужды. Индивидуальный подход к каждому проекту и непрерывная связь с клиентами",
        url: "",
        bg: bgServices2,
        strelka:strelkaInvisible,
    },
    {
        name: "Интернет-маркетинг",
        description:
            "Разработка и дизайн сайтов под ваши нужды. Индивидуальный подход к каждому проекту и непрерывная связь с клиентами",
        url: "",
        bg: bgServices3,
        strelka:strelkaInvisible,

    },
    {
        name: "Оптимизация бизнес-процессов",
        description:
            "Разработка и дизайн сайтов под ваши нужды. Индивидуальный подход к каждому проекту и непрерывная связь с клиентами",
        url: "",
        bg: bgServices4,
        strelka:strelkaInvisible,

    }
];

/* Cases */

export const casesInfo:
    {
        name: string;
        description: string;
        url: string;
        bg: string;
        strelka: string|null;
    }[]= [{
        name:'TRAVEL',
        description:'Создали современный лендинг для туристической компаниии и повысили...',
        url:'',
        bg:`url(${bg1Cases})`,
        strelka:null
    },
    {
        name:'',
        description:'',
        url:'',
        bg:'#A7A7E3',
        strelka:strelkaInvisible
    },
    {
        strelka:null,
        name:'',
        description:'',
        url:'',
        bg:'#D3D6E5'
    },
    {
        strelka:null,
        name:'',
        description:'',
        url:'',
        bg:'#D3D6E5'
    }
]

/* reviews */





