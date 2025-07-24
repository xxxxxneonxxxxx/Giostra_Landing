import bgServices1 from '../component/services/img/item1bg.svg'
import bgServices2 from '../component/services/img/item2bg.svg'
import bgServices3 from '../component/services/img/item3bg.svg'
import bgServices4 from '../component/services/img/item4bg.svg'
import strelkaInvisible from '../component/services/img/strelkaInvisible.svg'

import bg1Cases from '../component/cases/img/bg1.svg'

import icons1 from '../component/footer/img/tg.svg'
import icons2 from '../component/footer/img/vk.svg'
import icons3 from '../component/footer/img/m.svg'
import icons4 from '../component/footer/img/telephone.svg'





/* title */
type slogan={
    name: string,
    description: string,
}

export const numberOfSpecialists:slogan={name:'Растем',description:"25 опытных специалистов наивысшего класса из разных сфер"}
export const sloganTitle:slogan={name:'Решаем',description:"Не просто продаем, а решаем проблемы вашего бизнеса"}



/* Services */

export const services:
    {
        name: string;
        description: string;
        url: string;
        bg: string;
    }[]= [
    {
        name: "Веб-разработка",
        description:
            "Разработка и дизайн сайтов под ваши нужды. Индивидуальный подход к каждому проекту и непрерывная связь с клиентами",
        url: "",
        bg: bgServices2,
    },
    {
        name: "Бренд-дизайн",
        description:
            "Разработка и дизайн сайтов под ваши нужды. Индивидуальный подход к каждому проекту и непрерывная связь с клиентами",
        url: "",
        bg: bgServices3,
    },
    {
        name: "Интернет-маркетинг",
        description:
            "Разработка и дизайн сайтов под ваши нужды. Индивидуальный подход к каждому проекту и непрерывная связь с клиентами",
        url: "",
        bg: bgServices3,

    },
    {
        name: "Оптимизация бизнес-процессов",
        description:
            "Разработка и дизайн сайтов под ваши нужды. Индивидуальный подход к каждому проекту и непрерывная связь с клиентами",
        url: "",
        bg: bgServices4,

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

/* footer */

export const footerConst:{
    url: string;
    img: string;
}[]=[
    {url:'',img:icons1},
    {url:'',img:icons2},
    {url:'',img:icons3},
    {url:'',img:icons4},

]





