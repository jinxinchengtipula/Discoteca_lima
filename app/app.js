var app = new Vue({
    el: '#app',
    data: {
        titulo: 'Mejores Discotecas en lima ',
        see: true,
        discotecas: [
            { 
                nombre: 'Bizarro',
                imagen: 'images/bizarro.jpg',
                descripcion: 'Una de las discotecas más populares en Miraflores, conocida por su música variada y ambiente vibrante.',
                ubicacion: 'Av. Pardo y Aliaga 640, San Isidro, Lima'
            },
            { 
                nombre: 'Gótica',
                imagen: 'images/gotica.jpg',
                descripcion: 'Situada en el exclusivo Boulevard de Asia, Gótica es famosa por sus fiestas temáticas y DJs internacionales.',
                ubicacion: 'Boulevard de Asia, Km 97.5, Panamericana Sur, Asia'
            },
            { 
                nombre: 'Tequila Rock',
                imagen: 'images/tequila_rock.jpg',
                descripcion: 'Con una temática de rock y una atmósfera eléctrica, Tequila Rock es el lugar perfecto para los amantes del rock.',
                ubicacion: 'Av. Arequipa 1505, Lince, Lima'
            },
            { 
                nombre: 'Nebula',
                imagen: 'images/nebula.jpg',
                descripcion: 'Nebula es conocida por su impresionante sistema de sonido y luces, ofreciendo una experiencia de fiesta única.',
                ubicacion: 'Calle Bellavista 215, Miraflores, Lima'
            },
            { 
                nombre: 'Valetodo Downtown',
                imagen: 'images/valetodo.jpg',
                descripcion: 'Ubicada en el corazón de Miraflores, esta discoteca es famosa por su ambiente inclusivo y shows en vivo.',
                ubicacion: 'Calle Berlín 363, Miraflores, Lima'
            }
        ]
    }
});
