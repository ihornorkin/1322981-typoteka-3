'use strict';

const express = require(`express`);
const request = require(`supertest`);
const search = require(`./search`);
const DataService = require(`../data-service/search`);
const {HttpCode} = require(`../../constants`);

const mockData = [
  {
    "id": `2QOGZE`,
    "title": `Лучше рок-музыканты 20-века`,
    "createDate": `2020-09-27 19:22:13`,
    "announce": `Он написал больше 30 хитов. Это один из лучших рок-музыкантов. Достичь успеха помогут ежедневные повторения. Как начать действовать? Для начала просто соберитесь. Игры и программирование разные вещи. Не стоит идти в программисты, если вам нравится только игры.`,
    "fullText": `Программировать не настолько сложно, как об этом говорят. Первая большая ёлка была установлена только в 1938 году. Альбом стал настоящим открытием года. Мощные гитарные рифы и скоростные соло-партии не дадут заскучать. Из под его пера вышло 8 платиновых альбомов. Это один из лучших рок-музыкантов. Вы можете достичь всего. Стоит только немного постараться и запастись книгами. Ёлки — это не просто красивое дерево. Это прочная древесина. Игры и программирование разные вещи. Не стоит идти в программисты, если вам нравится только игры. Бороться с прокрастинацией несложно. Просто действуйте. Маленькими шагами. Освоить вёрстку несложно. Возьмите книгу новую книгу и закрепите все упражнения на практике. Золотое сечение — соотношение двух величин, гармоническая пропорция. Помните, небольшое количество ежедневных упражнений лучше, чем один раз, но много. Как начать действовать? Для начала просто соберитесь. Простые ежедневные упражнения помогут достичь успеха. Он написал больше 30 хитов. Рок-музыка всегда ассоциировалась с протестами. Так ли это на самом деле? Процессор заслуживает особого внимания. Он обязательно понравится геймерам со стажем. Этот смартфон — настоящая находка. Большой и яркий экран, мощнейший процессор — всё это в небольшом гаджете. Собрать камни бесконечности легко, если вы прирожденный герой.`,
    "category": [
      `Разное`,
      `Деревья`,
      `IT`,
      `Программирование`
    ],
    "comments": [
      {
        "id": `lmHztR`,
        "text": `Плюсую, но слишком много буквы! Согласен с автором!`
      },
      {
        "id": `7CMZ6f`,
        "text": `Хочу такую же футболку :-) Мне не нравится ваш стиль. Ощущение, что вы меня поучаете. Согласен с автором!`
      }
    ]
  },
  {
    "id": `kT9b6A`,
    "title": `Ёлки. История деревьев`,
    "createDate": `2020-10-15 06:59:37`,
    "announce": `Как начать действовать? Для начала просто соберитесь. Бороться с прокрастинацией несложно. Просто действуйте. Маленькими шагами.`,
    "fullText": `Бороться с прокрастинацией несложно. Просто действуйте. Маленькими шагами. Первая большая ёлка была установлена только в 1938 году. Вы можете достичь всего. Стоит только немного постараться и запастись книгами.`,
    "category": [
      `Без рамки`,
      `За жизнь`,
      `Музыка`,
      `Программирование`,
      `Железо`,
      `Деревья`,
      `IT`
    ],
    "comments": [
      {
        "id": `OZTCne`,
        "text": `Мне кажется или я уже читал это где-то?`
      },
      {
        "id": `Rm5b47`,
        "text": `Мне не нравится ваш стиль. Ощущение, что вы меня поучаете. Совсем немного... Давно не пользуюсь стационарными компьютерами. Ноутбуки победили.`
      },
      {
        "id": `-fq44b`,
        "text": `Мне кажется или я уже читал это где-то? Давно не пользуюсь стационарными компьютерами. Ноутбуки победили.`
      },
      {
        "id": `bnkHsZ`,
        "text": `Согласен с автором!`
      }
    ]
  },
  {
    "id": `wGyzTg`,
    "title": `Рок — это протест`,
    "createDate": `2020-10-14 24:30:35`,
    "announce": `Этот смартфон — настоящая находка. Большой и яркий экран, мощнейший процессор — всё это в небольшом гаджете. Процессор заслуживает особого внимания. Он обязательно понравится геймерам со стажем. Как начать действовать? Для начала просто соберитесь. Бороться с прокрастинацией несложно. Просто действуйте. Маленькими шагами. Помните, небольшое количество ежедневных упражнений лучше, чем один раз, но много.`,
    "fullText": `Ёлки — это не просто красивое дерево. Это прочная древесина. Этот смартфон — настоящая находка. Большой и яркий экран, мощнейший процессор — всё это в небольшом гаджете. Простые ежедневные упражнения помогут достичь успеха. Игры и программирование разные вещи. Не стоит идти в программисты, если вам нравится только игры. Собрать камни бесконечности легко, если вы прирожденный герой. Процессор заслуживает особого внимания. Он обязательно понравится геймерам со стажем. Рок-музыка всегда ассоциировалась с протестами. Так ли это на самом деле? Это один из лучших рок-музыкантов. Золотое сечение — соотношение двух величин, гармоническая пропорция. Программировать не настолько сложно, как об этом говорят. Вы можете достичь всего. Стоит только немного постараться и запастись книгами. Из под его пера вышло 8 платиновых альбомов. Альбом стал настоящим открытием года. Мощные гитарные рифы и скоростные соло-партии не дадут заскучать. Первая большая ёлка была установлена только в 1938 году. Он написал больше 30 хитов. Освоить вёрстку несложно. Возьмите книгу новую книгу и закрепите все упражнения на практике. Помните, небольшое количество ежедневных упражнений лучше, чем один раз, но много.`,
    "category": [
      `За жизнь`,
      `Деревья`,
      `Музыка`,
      `Программирование`
    ],
    "comments": [
      {
        "id": `CbTSPF`,
        "text": `Мне кажется или я уже читал это где-то? Хочу такую же футболку :-)`
      },
      {
        "id": `nvFM1O`,
        "text": `Плюсую, но слишком много буквы!`
      },
      {
        "id": `NCU0x_`,
        "text": `Давно не пользуюсь стационарными компьютерами. Ноутбуки победили. Плюсую, но слишком много буквы!`
      }
    ]
  }
];

const app = express();
app.use(express.json());
search(app, new DataService(mockData));

describe(`API returns offer based on search query`, () => {

  let response;

  beforeAll(async () => {
    response = await request(app)
      .get(`/search`)
      .query({
        query: `Лучше рок-музыканты`
      });
  });

  test(`Status code 200`, () => expect(response.statusCode).toBe(HttpCode.OK));
  test(`1 offer found`, () => expect(response.body.length).toBe(1));
  test(`Offer has correct id`, () => expect(response.body[0].id).toBe(`2QOGZE`));

  test(`API returns code 404 if nothing is found`,
      () => request(app)
      .get(`/search`)
      .query({
        query: `Продам свою душу`
      })
      .expect(HttpCode.NOT_FOUND)
  );

  test(`API returns 400 when query string is absent`,
      () => request(app)
      .get(`/search`)
      .expect(HttpCode.BAD_REQUEST)
  );

});
