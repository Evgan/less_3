# less_3
byLessonsFromApakin

-------------------------- GIT ------------------------------------------------


Что бы Git работал необходимо его установить на компе

-------------------------- packege.json ------------------------------------------------
!!
Что бы создать файл packege.json в терминале пишем:
npm init
и дальше следуем инструкциям в этом же терминале
!!
что бы установить пакет jguery и записать его зависимость в packege.json:
npm i jguery --save
инфа записываетсяв раздел dependencies файлаpackege.json
!! Есть пакеты которые необходимы только для среды разработки, тогда при их утановке добавляем dev:
npm i webpack --save-dev
инфа записываетсяв раздел devDependencies файлаpackege.json

-------------------------- webpack (3.5)------------------------------------------------
// Руками создаём файл webpack.config.js
// Инструкция: https://webpack.js.org/guides/getting-started/
// Для запуска в терминале:
//npx webpack --config webpack.config.js
// Что бы каждый раз не писать такой длинный текст модно в packege.json забиндить данный скрипт на короткую фразу:
"scripts": {
    "build" : "npx webpack --config webpack.config.js",
  }
  Вызов данного скрипта:
  npm run build
  
  -------------------------- eslint (3.6)------------------------------------------------
Документация: https://eslint.org/docs/user-guide/getting-started
Это свод правил для слежения качественного написания кода
1)Создаём руками файл .eslintrc
2)Устанавливаем пакет: npm i eslint -g --save-dev
3)Для запууска проверки пишим в терминале eslint и указываем папку коорую необходимо проверить:
eslint ./src
4) Что бы облегчить посиск ошибок по данному правилу в процессе написания кода (что бы пхп шторм сам их находил)
можно настроить пшп шторм:
>Settings>Languages & Fr...>JavaScript>Code Quality Tools>ESLint:
- ставим галку Enable
- Указываем путь к нашему файлу правил: Configuration file: //../.eslintrc
!!! если вбит в кансоли eslint --init то запустится настрока файла .eslintrc
- можно сздать файл .eslintignore где указываем файлы не подлежащие апрверке
- отключение проверкм для одной строки console.log(str); // eslint-disable-line


  -------------------------- стили less (3.7)------------------------------------------------

1) В webpack.config.js прописываем:
 module: {
    rules: [{
      test: /\.less$/,
      use: [{
        loader: 'style-loader' // creates style nodes from JS strings
      }, {
        loader: 'css-loader' // translates CSS into CommonJS
      }, {
        loader: 'less-loader' // compiles Less to CSS
      }]
    }]
  }
2) Что бы всё это дело работало необходимо установить следующие пакеты:
npm i --save-dev style-loader css-loader less-loader less

3) Создадим \src\less\index.js здесь будут все стили проекта