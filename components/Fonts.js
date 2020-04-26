const FontFaceObserver = require('fontfaceobserver')

const Fonts = () => {
  const link = document.createElement('link')
  link.href = 'https://fonts.googleapis.com/css2?family=Cormorant:ital,wght@0,500;0,600;0,700;1,300'
  link.display = 'swap'
  link.rel = 'stylesheet'

  document.head.appendChild(link)

  const link2 = document.createElement('link')
  link2.href = 'https://fonts.googleapis.com/css2?family=Old+Standard+TT:ital,wght@0,400;0,700;1,400'
  link2.display = 'swap'
  link2.rel = 'stylesheet'

  document.head.appendChild(link2)

  const fancy = new FontFaceObserver('Cormorant')
  const fancy2 = new FontFaceObserver('OldStandardTT')

  fancy.load().then(() => {
    document.documentElement.classList.add('fancy')
  })

  fancy2.load().then(() => {
    document.documentElement.classList.add('fancy2')
  })
}

export default Fonts
