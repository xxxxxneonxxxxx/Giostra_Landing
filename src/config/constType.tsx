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

import imgUser from '../component/reviews/img/imgUser.svg'

import aboutUsBg1 from '../component/aboutUs/component/infoBlock/img/bg1.svg'
import aboutUsBg2 from '../component/aboutUs/component/infoBlock/img/bg2.svg'
import aboutUsBg3 from '../component/aboutUs/component/infoBlock/img/bg3.svg'
import aboutUsBg4 from '../component/aboutUs/component/infoBlock/img/bg4.svg'





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
        bg: bgServices2,
    },
    {
        name: "Интернет-маркетинг",
        description:
            "Разработка и дизайн сайтов под ваши нужды. Индивидуальный подход к каждому проекту и непрерывная связь с клиентами",
        url: "",
        bg: bgServices2,

    },
    {
        name: "Оптимизация бизнес-процессов",
        description:
            "Разработка и дизайн сайтов под ваши нужды. Индивидуальный подход к каждому проекту и непрерывная связь с клиентами",
        url: "",
        bg: bgServices2,

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
/* aboutUS */

export const aboutInfo: {
    name: React.ReactNode;
    bg: string;
}[] = [
    {
        name: (<label>Индивиду<br />альный<br />подход к<br />клиенту</label>),
        bg: aboutUsBg1
    },
    {
        name: (<label>Разработка<br/> полного<br/> цикла</label>),
        bg: aboutUsBg2
    }
    ,{
        name: (<label>Успех<br/> вашего<br/> проекта</label>),
        bg: aboutUsBg4
    }
    ,{
        name: (<label>Быстрое<br/> выполне<br/>ние заказа</label>),
        bg: aboutUsBg3
    }
];

/* Reviews */

const reviewseType:{
    userName:string,
    countStars:number,
    url:string,
    description:string,
}[]=[
    {
        userName:'Мария Приколовна',
        countStars:4,
        url:imgUser,
        description:'Разработка и дизайн сайтов под ваши нужды.  Индивидуальный подход к каждому проекту и непрерывная связь с клиентами. Разработка и дизайн сайтов под ваши нужды.  Индивидуальный подход к каждому проекту и непрерывная связь с клиентами'
    },
    {
        userName:'Мария Приколовна',
        countStars:4,
        url:imgUser,
        description:'Разработка и дизайн сайтов под ваши нужды.  Индивидуальный подход к каждому проекту и непрерывная связь с клиентами. Разработка и дизайн сайтов под ваши нужды.  Индивидуальный подход к каждому проекту и непрерывная связь с клиентами'
    },
    {
        userName:'Мария Приколовна',
        countStars:4,
        url:imgUser,
        description:'Разработка и дизайн сайтов под ваши нужды.  Индивидуальный подход к каждому проекту и непрерывная связь с клиентами. Разработка и дизайн сайтов под ваши нужды.  Индивидуальный подход к каждому проекту и непрерывная связь с клиентами'
    },
    {
        userName:'Мария Приколовна',
        countStars:4,
        url:imgUser,
        description:'Разработка и дизайн сайтов под ваши нужды.  Индивидуальный подход к каждому проекту и непрерывная связь с клиентами. Разработка и дизайн сайтов под ваши нужды.  Индивидуальный подход к каждому проекту и непрерывная связь с клиентами'
    },
    {
        userName:'Мария Приколовна',
        countStars:4,
        url:imgUser,
        description:'Разработка и дизайн сайтов под ваши нужды.  Индивидуальный подход к каждому проекту и непрерывная связь с клиентами. Разработка и дизайн сайтов под ваши нужды.  Индивидуальный подход к каждому проекту и непрерывная связь с клиентами'
    },
    {
        userName:'Мария Приколовна',
        countStars:4,
        url:imgUser,
        description:'Разработка и дизайн сайтов под ваши нужды.  Индивидуальный подход к каждому проекту и непрерывная связь с клиентами. Разработка и дизайн сайтов под ваши нужды.  Индивидуальный подход к каждому проекту и непрерывная связь с клиентами'
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





