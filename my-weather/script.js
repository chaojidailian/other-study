// const api = `https://api.openweathermap.org/data/2.5/weather?units=metric&appid=${apiKey}`
const api =
  'https://v0.yiketianqi.com/api?unescape=1&version=v63&appid=61634544&appsecret=YM5n0zTA'
const input = document.querySelector('.city-search input')
const btn = document.querySelector('.city-search button')
const errorInfo = document.querySelector('.city-search-error')
const showWeather = document.querySelector('.show-weather')
const weatherImg = document.querySelector('.city-weather img')
const temp = document.querySelector('.city-weather .temp')
const city = document.querySelector('.city-weather .city')
const humidity = document.querySelector('.detail .humidity')
const windForce = document.querySelector('.detail .wind-force')

btn.addEventListener('click', getWeather)
input.addEventListener('keyup', (e) => {
  if (e.keyCode === 13) {
    getWeather()
  }
})

async function getWeather() {
  const response = await fetch(api + `&city=${input.value.trim()}`)
  const data = await response.json()
  if (data.errcode !== 100) {
    errorInfo.textContent = ''
    switch (data.wea_day) {
      case '晴':
        weatherImg.src = './img/晴天.png'
        break
      case '多云':
        weatherImg.src = './img/多云.png'
        break
      case '阴':
        weatherImg.src = './img/阴.png'
        break
      case '小雨':
        weatherImg.src = './img/小雨.png'
        break
      case '中雨':
        weatherImg.src = './img/中雨.png'
        break
      case '大雨':
        weatherImg.src = './img/大雨.png'
        break
      case '阵雨':
        weatherImg.src = './img/阵雨.png'
        break
      default:
        weatherImg.src = './img/天气.png'
    }
    temp.textContent = data.tem + '°c'
    city.textContent = `${data.city}-${data.wea_day}`
    humidity.textContent = data.humidity
    windForce.textContent = data.win_meter
    showWeather.style.display = 'block'
  } else if (data.errcode === 100) {
    console.log(data)
    errorInfo.textContent = data.errmsg
    errorInfo.style.display = 'inline'
  } else {
    errorInfo.textContent = `接口请求异常`
  }
}
