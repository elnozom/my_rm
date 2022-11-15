import i18n  from '@/i18n';
import colors from './colors'

export const switchLanguage = (locale: string, ctx: any) => {
  localStorage.setItem("locale", locale);
  ctx.$vuetify.rtl = locale === "ar";
  ctx.$vuetify.lang.current = locale;
  ctx.$i18n.locale = locale;
};

export const generateGradient = (ctx:CanvasRenderingContext2D , colors:string[]) => {
  const gradient = ctx.createLinearGradient(0,0, 200,0);
  gradient.addColorStop(0, colors[0]);
  gradient.addColorStop(1, colors[1]);
  return gradient
}

export const numberWithCommas = (x: number) => {
    const xFixed = x.toFixed(3)
    return xFixed.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const generateColors = (n:number) => {
  let c = colors
  c.length = n
  return c
}

export const currency = (x:number):string => {
  return `${numberWithCommas(x)} EGP`
}


export const parseDate = (d:string):string => {
  d = d.replace('T' , ' ').replace('Z' , ' ')
  return d
}


export const removeBasePathFromImage = (fullPath : string) :string => {
  const path = `assets${fullPath.split('assets')[1]}`
  return path

}
export const undef = (v:any) => typeof v == 'undefined'
export const clearNullValues = (obj:Object) => {
  let clone = { ...obj }
  Object.keys(clone).forEach((key) => {
    let k = key as keyof typeof clone
    clone[k] === null || '' ? delete clone[k] : ''
  })
  return clone
}
export const currentYear = new Date().getFullYear();

export const currentMonth = new Date().getMonth() + 1

export const currentDay = new Date().getDate()

export const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;


export const accountTypes = [
  {
    key: i18n.t('customer'),
    value: 1
  },
  {
    key: i18n.t('supplier'),
    value: 2
  },
  {
    key: i18n.t('expenses'),
    value: 3
  },
  {
    key: i18n.t('bank'),
    value: 4
  },
  {
    key: i18n.t('safe'),
    value: 5
  },
  {
    key:  i18n.t('other'),
    value: 6
  }
]


export const lastTenYearsArr = ():number[] =>{
  const arr = []
  for (let i = 0; i < 10; i++) {
    arr.push(currentYear - i)
  }

  return arr
} 


export const switchMode = (mode: string, ctx: any) => {
  localStorage.setItem("mode", mode);
  ctx.$vuetify.theme.dark = mode === "dark";
};


export const serializeQuery = (payload: Object) => {
  const obj = clearNullValues(payload)
  const keys = Object.keys(obj)
  // const key as keyof obj
  return keys.map((k: any) => {
    const key = k as keyof typeof obj
    const current = obj[key] as unknown as string
    return `${encodeURIComponent(key)}=${encodeURIComponent(current)}`
  }).join("&")

  // return 
}

export const getColor = (index:number) => {
  return colors[index]
}


// export const createChart()

export const required = (v:any) => !!v || i18n.t('required')


export const miniChartOptions = {
  spanGaps:true,
  maintainAspectRatio: false,
  
  scales: {
      y: {
          beginAtZero: true,
          display: false,

      },
      x: {
          beginAtZero: false,
          display: false,
      },
  },
  plugins: {
      legend: {
        display: false
      },
      
          datalabels: {
             display: false
          }
        
    }
  
}