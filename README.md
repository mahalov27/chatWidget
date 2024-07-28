Інтеграція на HTML-сторінку

1) Виконати npm run build 
2) Згенеровані файли в папці build/static копіюємо та вставляємо в поторібну папку проекту
3) В потрібному html файлі додаємо <div id="chat-widget-container" /> в розмітку та прописуємо шляхи до скопійованих файлів:

``<!DOCTYPE html>
<html lang="en">
    <head>
        <!-- Підключення файл стилів -->
         <link rel="stylesheet" href="./static/css/main.css" />
    </head>
    <body>
        <!-- Контейнер для виджета чата -->
        <div id="chat-widget-container"></div>

        <!-- Підключення скрипту -->
        <script src="./static/js/main.js"></script>
    </body>
</html>``
