// Находим кнопку переключения темы
const btnWhiteMobe = document.querySelector('.white-mobe-btn');

// Проверяем текущую тему из localStorage
const currentTheme = localStorage.getItem('theme'); // Получаем сохранённую тему из localStorage
if (currentTheme === 'light') {
	// Если сохранённая тема — светлая, добавляем класс light-theme
	document.body.classList.add('light-theme');
} else {
	// Если сохранённая тема отсутствует или тёмная, добавляем класс dark-theme
	document.body.classList.add('dark-theme');
}

// Добавляем обработчик события для переключения темы
btnWhiteMobe.onclick = function () {
	// Проверяем, активна ли светлая тема
	if (document.body.classList.contains('light-theme')) {
		// Если активна, переключаем на тёмную тему
		document.body.classList.remove('light-theme');
		document.body.classList.add('dark-theme');
		localStorage.setItem('theme', 'dark'); // Сохраняем текущую тему как тёмную
	} else {
		// Если активна тёмная тема, переключаем на светлую
		document.body.classList.remove('dark-theme');
		document.body.classList.add('light-theme');
		localStorage.setItem('theme', 'light'); // Сохраняем текущую тему как светлую
	}

	// Переключение состояния кнопки (добавляем или убираем класс активности)
	btnWhiteMobe.classList.toggle('white-mobe-btn--active');
};