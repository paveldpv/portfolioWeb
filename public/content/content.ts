export interface IContent{
  title:string,
  image:{
    src:string,
    default:string,
    width?:number,
    height?:number
  }[],
  content:string[],
  borderColor?:string
  bg?:string,
  color?: string
  
}

export interface INav  {
  id:number,
  path:string,
  name:string,
  color:string,
  darkcolor:string
}

export const CRM:IContent[]=[
{title:`Система управления исполнителями`,
  image:[{
    src:`/image/crm/исполнитель.jpg`,
    default:'исполнители'
  },{
    src:'/image/crm/изменить испонителя.jpg',
    default:'изменение данных об исполнителе'
  },{
    src:'/image/crm/письмо заказы .jpg',
    default:'изменение данных об исполнителе'
  },
{
    src:'/image/crm/письмо сводка.jpg',
    default:'изменение данных об исполнителе'
  }],
  content:[`
  В системе передусмотерна возможнось добовления/удаления/редактирования Исполнителя`,

  'При заказе исполнителю на указаную электроную почту направляется письмо с заказом - которое может иметь во вложении чертеж- если на него положена отвественость исполнения заказа по чертежу после заказ закрепляется за ним',

  '"Выслать сводку " функция отправки сообщения Контрагенту(исполнителю) тех заданий  и деталей которые сейчас от него ожидаются',

  'поле "ключевые слова" у исполнителя отвечает за его закреплением по умолчанию за какими то конкретными деталями и/или комплектующими, если для детали нет назаченого системой исполнителя - назначается самый первый исполнитель из списка'
]
},
{
  title:`Чертежи и детали`,
  image:[{
    src:`/image/crm/детали католог.jpg`,
    default:`каталог`
  },{
    src:`/image/crm/детали католог 1.jpg`,
    default:`каталог`
  },
{
    src:`/image/crm/детали католог 2.jpg`,
    default:`каталог`
  },

{
    src:`/image/crm/детали католог 4.jpg`,
    default:`каталог`
  }],
  content:[`В основе приложение лежит работа и заказ деталей по чертежам из католог `,

  `Работа с каталогом напоминает работу со страдартным проводником`,

  `"Провводник " содердит каталоги и подкаталоги с чертежами - отображение чертежей - карточки с возможностью увелитчить чертеж во весь экран/скачать чертеж и добавить в корзину предварительно указав нужное количесвто для заказа `,

  `Чертеж в свою очередь имеет номер чертежа и номер по спецификации `,

  `В каталоге есть возможность перейти на страницу со сборочным чертежом детали - на это старнице слева отображаются все сборочные чертежи на которых обозначены номера по свпецификации а справа кнопки с этими номерами - по этим номер так же можно посмоетрть чертеж и добавить деталь в корзину `]
},
{
  title:`Корзина`,
  image:[{
    src:`/image/crm/корзина.jpg`,
    default:`корзина`
  }],
  content:[`К деталям которые добавлены в козину автоматически добовляется испонитель - на основании "ключевых слов" у это исполнителя`,

  'есть возможность в ручную изменить исполнителя',

  `и возможность поменить заказ как срочный - тогда в пиьме он будет выделен особым образом  `,

  `отображение в корзине меняется в зависмоти от количества деталей в ней (одна две калонки) `]
},
{
  title:`Текущие заказы`,
  image:[{
    src:`/image/crm/заказы.jpg`,
    default:`заказы`
  }],
  content:[`Страница "заказы" отображает все текющие заказы с информацией по ним и копку переходу на историю заказов`,

    `когда детали попадает на производство - отмечается прибытие заказы - или части его `,

    `Возможность пометить деталь как срочную`
  ]
},
{
  title:`Учет`,
  image:[{
    src:`/image/crm/учет.jpg`,
    default:`учет`
  }],
  content:[`Станица учет содержит иформацию по кнорагентам с которыми сейчас ведется работа(закупка или продажа деталей)`,
  `доступен учет в телеграме - через телеграм можно записывать в БД данные о продаже или покупке деталей + просматривать текущие задолжности`]
},
{
  title:`Прочие комплектующие`,
  image:[{
    src:`/image/crm/прочие закзаы добовление.jpg`,
    default:`прочие заказы`
  },
{
    src:`/image/crm/прочие закзаы.jpg`,
    default:`прочие заказы`
  }],
  content:[`Предусмотрена фукнция добовления прочих деталей/комплетующих на лету `,

`Можнос создать группу в группу добавить комплетующий заполним необходимы поля - после чего их(копмпектующие) - можно так же добовлять в корзину назначать исполнителя и заказыавть`]
}
]

export const OTHER:IContent[]=[
  {title:`TODO`,
image:[
  {src:`/image/todo/todo1.jpg`,
  default:`todo`},
   {src:`/image/todo/todo2.jpg`,
  default:`todo`}
],
content:[`приложение TODO было сделать для тренировки навыком TS с применением drugAndDrop механизмом распределения задач`,
  `авторизация сделана на основе JWT ключей - с применением PASSPORTJS `,
  `данные хранятся в БД Mongo драйвер MONGOOSE`],
bg:``
},
{title:`liveGame`,
image:[
  {src:`/image/liveGame/liveGame 1.jpg`,
  default:`live game`,width:885,height:883},
   {src:`/image/liveGame/liveGame 2.jpg`,
  default:`live game`,width:885,height:883}
],
content:[`Игра Жизнь со всем известными правивалми`,
  `каждый элемент отдельный div `,
  `проект создан для освоения кастомных хуков в react/ts`],
bg:``
},

]

export const skills:string[]=[
  `React/Router/Redux`,`HTML`,`Css/Tailwind`,`Node js/Express`,`FireBase`,`NEXT js`,`Mongo db`,`JS/TS`
]
export const navBar:INav[] = [
  {id:1,path:`/`,name:`HOME`,color:`bg-slate-300`,darkcolor:`bg-slate-600`},
  {id:2,path:`/projects/crm`,name:`crm`,color:`bg-rose-200`,darkcolor:`bg-amber-800`},  
  {id:4,path:`/projects/other`,name:`Other`,color:`bg-green-100`,darkcolor:`bg-cyan-900`}
]