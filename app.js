(() => {
    const txtElems = document.querySelectorAll('p')
    const bgElems = document.querySelectorAll('.jsBg')

    let currentItem = bgElems[0]

    for(let i = 0; i < txtElems.length; i++) {
        txtElems[i].dataset.index = i
        bgElems[i].dataset.index = i
    }
    
    function activate() {
        currentItem.classList.add('visible')
    }
    
    function inactivate() {
       currentItem.classList.remove('visible')
    }
    
    window.addEventListener('scroll', () => {
        let step, boundingRect
        
        for(let i = 0; i < txtElems.length; i++) {
            step = txtElems[i]
            boundingRect = step.getBoundingClientRect()
            
            if(boundingRect.top > window.innerHeight * 0.1 &&
               boundingRect.top < window.innerHeight * 0.8) {
                inactivate()
                currentItem = bgElems[step.dataset.index]
                activate()
            }
        }
    })
    
    activate()
})()