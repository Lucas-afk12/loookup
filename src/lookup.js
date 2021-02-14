/*agregate 1:n */
db.departamentos.aggregate(
    [
        {
            $lookup: {
                from:"trabajadores",
                localField: "Dep",
                foreignField: "Dep",
                as: "trabajadores"
            }
        },
        {
            $project: {
                _id: 0,
                "trabajadores._id":0,
                Dep:0,
                "trabajadores.Dep":0
            }
        }
    ]
).pretty()

/*agregation n:m */
db.aulas.aggregate(
    [
        {
            $lookup: {
                from:"alumnos",
                localField: "clase",
                foreignField: "clase",
                as: "alumno"
            }
        },
        {
            $project: {
                _id: 0,
                "alumno._id":0,
                clase:0,
                "alumno.clase":0
            }
        }
    ]
).pretty()
