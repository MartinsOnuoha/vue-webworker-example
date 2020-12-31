onmessage = (e) => {
  let counter = 0
  setInterval(() => {
    counter++

    if (counter === 1000) {
      counter = 0
    }
    postMessage(counter)
  }, 1000)
}
