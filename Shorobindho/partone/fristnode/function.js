const ageCal = (name, year) => {
  let age = new Date().getFullYear() - year 

  return `Hi ${name}, you are ${age} years old`
}

const info = (name, skill) => {
  return `Hi ${name}, you are ${skill} devs`
}

module.exports = {
  ageCal,
  info
}
