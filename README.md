# mesto-auth
## версия 0.0.1

## Описание
Учебный проект, цель которого - реализация защиты роутов приложения авторизацией, является продолжением проекта mesto-db https://github.com/LyudmilaLebedeva/mesto-db

## Используемые технологии
- JavaScript
- Node.js
- Express.js
- MongoDB
- API.REST

## Функционал
- локально к серверу можно обратиться по адресу http://localhost:3000;
- все роуты, кроме /signin и /signup, защищены авторизацией;
- POST /signup - создание пользователя в базе данных;
- POST /signin - возвращает cookie с токеном, если в теле запроса переданы верные пароль и e-mail;
- GET /users - возвращает json со всеми пользователями из базы данных;
- GET /users/:userId возвращает json пользователя с переданным в параметрах id;
- POST /cards - создает в базе данных объект карточки;
- GET /cards - возвращает json всех карточек из базы данных;
- DELETE /cards/:cardId - удалаяет из базы данных карточку с переданным в параметрах id;

## Как запустить
Для запуска используйте команду 
```
npm run start
```
Для запуска в режиме разработки с hot reload используйте команду 
```
npm run dev
```

## Развитие проекта
Последующие задачи по развитию проекта (централизованная обработка ошибок и деплой бэкенда) решаются здесь https://github.com/LyudmilaLebedeva/mesto-deploy
