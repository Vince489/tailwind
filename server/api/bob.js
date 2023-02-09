export default defineEventHandler(async(event) => {

  // const { name } = getQuery(event)

  // const { age } = await readBody(event)

  // api call w/o private key
  const { data } = await $fetch('https://api.currencyapi.com/v3/latest?apikey=ZhWAdT7KkWgKujtKJtvKWSc5AOybXAbnnylgrofo')

  return {
    data
  }

})