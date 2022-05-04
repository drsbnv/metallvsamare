require('./modules/header')
require('./modules/sliders')
require('./modules/form')

import Alpine from 'alpinejs'
window.Alpine = Alpine
require('./modules/data')
Alpine.start()
