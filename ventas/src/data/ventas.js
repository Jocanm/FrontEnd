const ventas = [

    {
        _id:"00145",
        valor:20000,
        fechaVenta:"11/10/2021",
        encargado:"Jorge Perez",
        estado:"en proceso",
        idC:"1001456104",
        nombreCliente:"Adriana Pacheco",
        productos:[
            {
                _id:"001",
                descripcion:"Monitor",
                valor:20000,
            }
        ]
    },
    {
        _id:"002123",
        valor:50000,
        fechaVenta:"3/10/2021",
        encargado:"Madeline Escorcia",
        estado:"cancelada",
        idC:"1001855604",
        nombreCliente:"Hugo Tinoco",
        productos:[
            {
                _id:"001",
                descripcion:"Mouse",
                valor:50000,
            }
        ]
    },
    {
        _id:"00345",
        valor:10000,
        fechaVenta:"3/10/2021",
        encargado:"Madeline Escorcia",
        estado:"en proceso",
        idC:"1001857764",
        nombreCliente:"Daniel Hernandez",
        productos:[
            {
                _id:"001",
                descripcion:"Teclado",
                valor:10000,
            }
        ]
    }
]

export default ventas;