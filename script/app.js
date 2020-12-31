if (window.Worker) {
  const worker = new Worker('/script/worker.js')
  worker.postMessage('')


  const App = {
    data () {
      return {
        dogImage: null,
        counter: 0
      }
    },
    mounted () {
      this.getDogImage()

      worker.onmessage = (e) => {
        this.counter = e.data
        if (this.counter % 10 === 0) {
          this.getDogImage()
        }
      }
    },
    methods: {
      getDogImage () {
        fetch('https://dog.ceo/api/breeds/image/random')
          .then((response) => response.json())
          .then((data) => {
            this.dogImage = data.message
          })
      },
      showUpdate(e) {
        console.log(e)
      }
    }
  }

  Vue.createApp(App).mount('#app')
}
