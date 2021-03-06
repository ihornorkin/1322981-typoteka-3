'use strict';

const DEFAULT_COUNT = 1;
const MAX_COUNT = 1000;
const FILE_NAME = `mock.json`;

const FILE_SENTENCES_PATH = `./data/sentences.txt`;
const FILE_TITLES_PATH = `./data/titles.txt`;
const FILE_CATEGORIES_PATH = `./data/categories.txt`;
const FILE_COMMENTS_PATH = `./data/comments.txt`;

const USER_ARGV_INDEX = 2;
const DEFAULT_COMMAND = `--help`;

const ExitCode = {
  success: 0,
  failure: 1,
};

const THREE_MONTH = 1000 * 60 * 60 * 24 * 90;

const DEFAULT_PORT = 3000;
const DEFAULT_EXPRESS_PORT = 8080;

const CATEGORY = [{
  name: `Автомобили`,
  count: `88`
}, {
  name: `Удаленная работа`,
  count: `13`
}, {
  name: `Бизнес`,
  count: `13`
}, {
  name: `Путешествия`,
  count: `13`
}, {
  name: `Дизайн и обустройство`,
  count: `13`
}, {
  name: `Производство игрушек`,
  count: `23`
}, {
  name: `UX & UI`,
  count: `21`
}];

const MOST_DISCUSS = [{
  text: `Билл Гейтс впервые за два года возглавил рейтинг самых богатых людей мира по версии Bloomberg`,
  links: `12`
}];

const COMMENTS = [{
  text: `Главреды «Дождя», Forbes и других СМИ попросили Роскомнадзор разъяснить штрафы за ссылки на сайты с матом`,
  avatar: `/img/avatar-small-1.png`,
  avatarBig: `/img/avatar-1.png`,
  name: `Анна Артамонова`,
  time: `21.03.2019, 20:33`
}];

const MAX_ID_LENGTH = 6;
const MAX_COMMENTS = 4;

const API_PREFIX = `/api`;

module.exports = {
  DEFAULT_COUNT,
  FILE_NAME,
  USER_ARGV_INDEX,
  DEFAULT_COMMAND,
  ExitCode,
  MAX_COUNT,
  THREE_MONTH,
  FILE_SENTENCES_PATH,
  FILE_TITLES_PATH,
  FILE_CATEGORIES_PATH,
  FILE_COMMENTS_PATH,
  DEFAULT_PORT,
  DEFAULT_EXPRESS_PORT,
  CATEGORY,
  MOST_DISCUSS,
  COMMENTS,
  MAX_ID_LENGTH,
  MAX_COMMENTS,
  API_PREFIX
};

module.exports.HttpCode = {
  OK: 200,
  CREATED: 201,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
  FORBIDDEN: 403,
  UNAUTHORIZED: 401,
  BAD_REQUEST: 400
};

module.exports.Env = {
  DEVELOPMENT: `development`,
  PRODUCTION: `production`
};
