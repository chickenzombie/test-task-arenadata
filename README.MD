# Тестирование формы обратной связи

## Описание

Данный проект содержит тест-кейсы и автоматизированные тесты для проверки формы обратной связи на сайте https://kontaktnaya-forma.testograf.ru/ с использованием фреймворка Cypress и языка программирования JavaScript.

## Тестовое окружение
Версия ОС: Windows 11 x64

Версия браузера: 131.0.6778.108 (Official Build) (64-bit)

## Тест-кейсы

1. **Успешная отправка формы с корректными данными:**
  - Заполнить все обязательные поля валидными данными.
  - Нажать на кнопку "Отправить".
  - Проверить, что появляется сообщение об успешной отправке.
2. **Отправка формы с пустым полем "Ваше имя":**
  - Оставить поле "Ваше имя" пустым.
  - Заполнить остальные обязательные поля валидными данными.
  - Нажать на кнопку "Отправить".
  - Убедиться, что под полем "Ваше имя" появляется сообщение об ошибке.
3. **Ввод некорректной почты в поле "E-mail":**
  - Ввести в поле "E-mail" некорректный адрес электронной почты (например: test@).
  - Нажать на кнопку "Отправить".
  - Проверить, что появляется сообщение об ошибке под полем "E-mail".
4. **Ввод спецсимволов в поле "Ваше имя":**
  - Ввести в поле "Ваше имя" имя, содержащее спецсимволы (например: Ив@н!).
  - Нажать на кнопку "Отправить".
  - Убедиться, что под полем "Ваше имя" появляется сообщение об ошибке.
5. **Превышение допустимого количества символов:**
  - Ввести в поле "Ваше имя" количество символов, превышающее установленный лимит (например, 256 символов).
  - Нажать на кнопку "Отправить".
  - Убедиться, что под полем "Ваше имя" появляется сообщение об ошибке.
6. **Проверка валидации телефонного номера**
  - Ввести некорректный номер телефона (например: 123abc@$^).
  - Нажать кнопку "Отправить".
  - Убедиться, что под полем "Телефон" появляется сообщение об ошибке.
7. **Проверка на ввод скрипта в поле "Ваше сообщение"**:
  - Ввести в поле "Ваше сообщение" скрипт: <script>alert('XSS-атака!');</script>
  - Заполнить остальные обязательные поля валидными данными.
  - Нажать на кнопку "Отправить".
  - Проверить, что введёный скрипт не выполнится.

# Автоматизированные тесты для формы обратной связи

## Описание тест-кейса
Тест проверяет успешную отправку формы обратной связи на странице: https://kontaktnaya-forma.testograf.ru/.

### Шаги:
1. Зайти на страницу формы: https://kontaktnaya-forma.testograf.ru/.
2. Заполнить все поля:
   - Ваше имя: Test
   - E-mail: test@example.com
   - Телефон: 88005553535
   - Цель обращения: Заказ
   - Ваше сообщение: Test message
3. Отправить форму, нажав на кнопку "Отправить".
4. Проверить, что отображается сообщение об успешной отправке: "Благодарим за обращение!".

## Установка

### 1. Клонировать репозиторий
```
git clone https://github.com/chickenzombie/test-task-arenadata
```

### 2. Перейти в директорию проекта
```
cd test-task-arenadata
```

### 3. Установить зависимости
```
npm install
```

### 4. Запуск тестов
```
npx cypress open
```

## Структура тестов
Файл с тестами находится в папке cypress/e2e. Вы можете создавать новые тесты или изменять текущие, редактируя существующий файл.

## Стек технологий
- Cypress
- JavaScript


  



