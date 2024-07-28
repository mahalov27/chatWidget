Інтеграція на HTML-сторінку

Інтеграція на HTML-сторінку

1) Виконати npm run build 
2) Згенеровані файли в папці build/static копіюємо та вставляємо в поторібну папку проекту
3) В потрібному html файлі додаємо <link rel="stylesheet" href="./static/css/main.css" />, <script src="./static/js/main.js"></script> в розмітку та прописуємо ващі шляхи до скопійованих файлів
4) В тег body додаємо контейнер <div id="chat-widget-container"></div>.

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
