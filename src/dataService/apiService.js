export async function getCovidTodayData() {
  return await fetch('https://disease.sh/v3/covid-19/all').then(response => response.json());
}