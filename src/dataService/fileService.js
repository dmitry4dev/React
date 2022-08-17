// Экспортируем асинхронную функцию, которая принимает JSON файл из папки public, поэтому не нужно прописывать
// точный путь до неё, потому что реакт видит всё, что находится в папке public без точно указанных путей.
// Функция fetch отправляет GET запрос на http://localhost:3000/owid-covid-data.json
// Возвращает нам ответ через await - response с массивом данных из JSON файла, который переводим снова
// в JSON формат, чтобы дальше с ним работать.
export async function readCovidData() {
  return await fetch('owid-covid-data.json').then(response => response.json());
}