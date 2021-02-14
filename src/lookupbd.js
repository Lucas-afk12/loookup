/*Base de datos para relaciones 1:n*/
db.departamentos.drop()
db.departamentos.insertMany([
{
    Dep:1,
    Nombre:"Departamento De seleccion De personal",
    horario:{mañana:"de 9:00 a 14:00",tarde:"de 17:00 a 19:00"},
},
{
    Dep:2,
    Nombre:"Departamento de administración",
    horario:{mañana:"De 10:00 a 15:00",tarde:"de 18:00 a 20:00"},
},
{
    Dep:3,
    Nombre:"Departamento de servicio al cliente",
    horario:{mañana:"de 9:00 a 15:00",tarde:"de 17:00 a 20:00"},
}
])

db.trabajadores.drop()
db.trabajadores.insertMany([
    {
        Nombre:"Javier",
        apellidos:"Capitan Garcia",
        dni:"14599665R",
        localidad:"Sevilla",
        sueldo:1500,
        Dep:1
    },
    {
        Nombre:"Pablo",
        apellidos:"Fidalgo Garcia",
        dni:"73823170R",
        localidad:"Malaga",
        sueldo:1550,
        Dep:1
    },
    {
        Nombre:"Juan",
        apellidos:"Martinez pastor",
        dni:"93235082M",
        localidad:"Sevilla",
        sueldo:1600,
        Dep:2
    },
    {
        Nombre:"David",
        apellidos:"Mendoza Serrano",
        dni:"61270549K",
        localidad:"Cadiz",
        sueldo:1600,
        Dep:2
    },
    {
        Nombre:"Inma",
        apellidos:"Fernandez Camino",
        dni:"09195797Y",
        localidad:"Cordoba",
        sueldo:1350,
        Dep:3
    },
    {
        Nombre:"Juan Antonio",
        apellidos:"Ramirez Roman",
        dni:"41649038V",
        localidad:"Almeria",
        sueldo:1600,
        Dep:3
    },
])
/*Base de datos para relaciones n:m*/
db.alumnos.drop()
db.alumnos.insertMany([
    {
        Nombre:"Javier",
        apellidos:"Capitan Garcia",
        dni:"14599665R",
        clase:[1,4]
    },
    {
        Nombre:"Pablo",
        apellidos:"Fidalgo Garcia",
        dni:"73823170R",
        clase:[2,3]

    },
    {
        Nombre:"Juan",
        apellidos:"Martinez pastor",
        dni:"93235082M",
        clase:[1,2]
 
    },
    {
        Nombre:"David",
        apellidos:"Mendoza Serrano",
        dni:"61270549K",
        clase:[3,4]
    
    },
    {
        Nombre:"Inma",
        apellidos:"Fernandez Camino",
        dni:"09195797Y",
        clase:[3,1]
    },
])

db.aulas.drop()
db.aulas.insertMany([
{
    clase:1,
    Nombre:"clase de sara",
    horario:"de 9:00 a 11"
},
{
    clase:2,
    Nombre:"clase de gbd",
    horario:"De 10:00 a 12:00"
},
{
    clase:3,
    Nombre:"clase de par",
    horario:"de 12:00 a 14:00"
},
{
    clase:4,
    nombre:"clase de iso" ,
    horario:"de 8:00 a 9:00"
}
])

