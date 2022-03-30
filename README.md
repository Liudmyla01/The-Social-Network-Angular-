# FeInternship2021
Занятие: 1\
Дата: 21.12.2021

## Программа
1. Что такое angular
2. Angular CLI
3. Декораторы и структура проектов. @Module, @Component, @Guard, @Interceptor, @Injectable
4. Создание компонентов
5. Databinding, String interpolation, Property binding, Event binding, 2 way databinding
6. @Input, @Output
7. Директиви: ngIf, ngFor, ngStyle, ngClass.
8. Компоненты Ангуляра: ng-container, ng-template, ng-content

## Задачи
1. Создать и сверстать компонент user-card. Минимум дизайна. поля {{ user.name }} {{ user.description }}
2. Создать компонент users-list. Сверстать отображение в ряд 2 черных квардратов.
3. Заменить черные квадраты внутри users-list на user-card. 
4. Созать переменную users = [ 2 юзера ]. При помощи `*ngFor` отобразить карточки и передать данные внутри компонента
5. Добавить поле `liked: boolean` каждом юзеру
6. Отобразить надпись `liked` для тех, у которых значение `liked: true`, для остальных - кнопку `like`
7. Повесить обработчик клика на кнопку и поднять событие клика наверх
8. Слушать нажатие на кнопку в компоненте `users-list` и менять значение `liked` внутри масива

## Запуск проекта локально
1. Склонировать проект `git clone https://github.com/viacheslavsaloid/feInternship2021.git`
2. Перейти в рабочую ветку: `git checkout dev`
3. Установить зависимости `npm install`
4. Запустить проект `npm start`

## Работа на занятиях
1. Перейти в ветку `class-{{ номер занятия }}`
2. Спулить последние изменения `git pull origin class-{{ номер занятия }}`
3. Создать новую ветку `git checkout -b {{ имя }}-{{ номер занятия }}`
4. Работаем на занятии
5. Добавляем изменения в стейж `git add -A`
6. Комитим изменения `git commit -m '{{ темы занятия | задачи }}'`
7. Пушим изменения `git push origin {{ имя }}-{{ номер занятия }}`
8. Создаем пулл реквест из `{{ имя }}-{{ номер занятия }}` в `class-{{ номер занятия }}`

## Рабочие ссылки
1. Github: https://github.com/viacheslavsaloid/feInternship2021
2. Figma: https://www.figma.com/file/JlYhc4LPbgCEtbg6QCeA6X/Masterminds?node-id=3%3A1
3. Jira: ` `;

## Полезные ссылки
1. Angular - русскоговорящее сообщество: https://t.me/angular_ru

## Контакты
Салоид Вячеслав:
1. телеграм: `073 328 64 09`
2. почта: `viacheslavsaloid.work@gmail.com`
3. github: https://github.com/viacheslavsaloid

Пишите в любое время. Отвечу, как смогу.

   //in terminal 
   export NODE_OPTIONS=--openssl-legacy-provider