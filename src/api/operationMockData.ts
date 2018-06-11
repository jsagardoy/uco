import {OperationEntity} from '../model';

var OperationMockData: OperationEntity[] =
    [
       {
            name: "operacion 1",
            id:1,
            type: "tipo 1",
            state: false,
            people: 
            [
                {
                    id:1,
                    name: "malo 1",
                    aka:"Sam Bigotes",
                    picsLinks:
                    [
                        "https://ugc.kn3.net/i/origin/http://bp1.blogger.com/_2FFr9p7f3W8/R1h7jXnOAMI/AAAAAAAAAJE/77TTVowR4Sw/s400/yosemitesam-wallpaper3.jpg",
                        "http://2.bp.blogspot.com/-2gQU8ncMrzo/VAe76aJYyeI/AAAAAAAAnEI/IiLmB2IGg1A/s1600/Yosemite-sam-manos.gif"  
                    ],
                    address: "casa malo 1",
                    addressLink:"https://goo.gl/maps/64HuGnzQAi22",
                    addressPic:
                    [
                        "https://vignette.wikia.nocookie.net/looneytunesshow/images/b/bd/Granny%27s_house.png/revision/latest?cb=20130525004826",
                        "https://vignette.wikia.nocookie.net/looneytunesshow/images/4/45/IMG_0510.PNG/revision/latest?cb=20161011024736"
                    ],
                    vehicles: 
                    [
                        {
                            id: 1,
                            brand: "Ford",
                            model: "Mondeo",
                            type: "Coche",
                            plate: "12345-ABC",
                            frame: "numero de bastidor 1",
                            pic: ["http://toonbarn.com/wordpress/wp-content/uploads/2011/09/Lola-teaches-Yosemite-Sam-how-to-drive.jpg"]

                        },
                        {
                            id: 2,
                            brand: "BMW",
                            type: "Moto",
                            model: "S1000XR",
                            plate: "54321-AAA",
                            frame: "Numero de bastidor 2",
                            pic:["https://media.zigcdn.com/media/model/2016/Feb/bmw_s1000xr_600x300.jpg"]
                        }
                    ],   
                    companies: [
                        {
                            id: 1,
                            name: "La cosa nostra",
                            cif: "123456789-AAAA",
                            address: "Calle falsa, 123",
                            map: "https://goo.gl/maps/46bGB8wWMR92"
                        },
                        {
                            id: 2,
                            name: "La cosa vostra",
                            cif: "987654321-ZZZZ",
                            address: "Calle verdadera, 987",
                            map: "https://goo.gl/maps/46bGB8wWMR92"
                        }

                    ],
                    rutine: 
                    [
                        "9:00 - dominar el mundo",
                        "11:30-11:35 - ganar dinerito con drogas",
                        "Resto del dia: escuchar Metallica"
                    ],
                    links: 
                        [     
                            "relaciones con la mafia china",
                            "A veces se relaciona con su pareja"
                        ],
                    familiars:
                        [
                            {
                              id: 1,
                              name: "Elmer",
                              familiarPics: [`https://k26.kn3.net/978EE4179.jpg`],
                              familiarAddress: `La casa del padre, 5432`,
                              addressLink:`https://goo.gl/maps/46bGB8wWMR92`,
                              related: `Padre`
                            }
                        ] 
                },
                {
                    id:2,
                    name: "Sr. Burns",
                    aka:"Señor Burns",
                    picsLinks:
                    [
                        "https://vignette.wikia.nocookie.net/inciclopedia/images/6/68/Burncito.gif/revision/latest/scale-to-width-down/199?cb=20090513222042"  
                    ],
                    address: "Mansion Burns",
                    addressLink:"https://goo.gl/maps/64HuGnzQAi22",
                    addressPic:
                    [
                        "https://vignette.wikia.nocookie.net/simpsons/images/9/9d/Burnsmanor.jpg/revision/latest?cb=20100417152133"
                    ],
                    vehicles: 
                    [
                        {
                            id: 1,
                            brand: "Roll Royce",
                            model: "Class 1",
                            type: "Coche",
                            plate: "12345-ABC",
                            frame: "numero de bastidor 1",
                            pic: ["https://vignette.wikia.nocookie.net/simpsons/images/2/20/Burns_antique_car.jpg/revision/latest?cb=20150726060709"]
                        }
                    ],   
                    companies: [
                        {
                            id: 1,
                            name: "Central Nuclear",
                            cif: "11111111111-AAAA",
                            address: "Calle Boomb, 321",
                            map: "https://goo.gl/maps/46bGB8wWMR92"
                        }

                    ],
                    rutine: 
                    [
                        "9:00 - dominar el mundo",
                        "11:30-11:35 - ganar dinerito con drogas",
                        "Resto del dia: escuchar Metallica"
                    ],
                    links: 
                        [     
                            "relaciones con la mafia china",
                            "A veces se relaciona con su pareja"
                        ],
                    familiars:
                        [
                            {
                              id: 1,
                              name: "Dios",
                              familiarPics: [`https://vignette.wikia.nocookie.net/simpsons/images/0/0e/God_%28The_Simpsons%29.png/revision/latest?cb=20110922135521`],
                              familiarAddress: `El cierlo, 1`,
                              addressLink:`https://goo.gl/maps/46bGB8wWMR92`,
                              related: `Padre, el de él y el de todos`
                            }
                        ] 
                }
            ]
        },
        {
            id:2,
            name: "operacion 2",
            type: "tipo 2",
            state: true,
            people:
            [
                {
                    id:1,
                    name: "malo 1",
                    aka:"Sam Bigotes",
                    picsLinks:
                    [
                        "https://ugc.kn3.net/i/origin/http://bp1.blogger.com/_2FFr9p7f3W8/R1h7jXnOAMI/AAAAAAAAAJE/77TTVowR4Sw/s400/yosemitesam-wallpaper3.jpg",
                        "http://2.bp.blogspot.com/-2gQU8ncMrzo/VAe76aJYyeI/AAAAAAAAnEI/IiLmB2IGg1A/s1600/Yosemite-sam-manos.gif"  
                    ],
                    address: "casa malo 1",
                    addressLink:"https://goo.gl/maps/64HuGnzQAi22",
                    addressPic:
                    [
                        "https://vignette.wikia.nocookie.net/looneytunesshow/images/b/bd/Granny%27s_house.png/revision/latest?cb=20130525004826",
                        "https://vignette.wikia.nocookie.net/looneytunesshow/images/4/45/IMG_0510.PNG/revision/latest?cb=20161011024736"
                    ],
                    vehicles: 
                    [
                        {
                            id: 1,
                            brand: "Ford",
                            model: "Mondeo",
                            type: "Coche",
                            plate: "12345-ABC",
                            frame: "numero de bastidor 1",
                            pic: ["http://toonbarn.com/wordpress/wp-content/uploads/2011/09/Lola-teaches-Yosemite-Sam-how-to-drive.jpg"]

                        },
                        {
                            id: 2,
                            brand: "BMW",
                            type: "Moto",
                            model: "S1000XR",
                            plate: "54321-AAA",
                            frame: "Numero de bastidor 2",
                            pic:["https://media.zigcdn.com/media/model/2016/Feb/bmw_s1000xr_600x300.jpg"]
                        }
                    ],   
                    companies: [
                        {
                            id: 1,
                            name: "La cosa nostra",
                            cif: "123456789-AAAA",
                            address: "Calle falsa, 123",
                            map: "https://goo.gl/maps/46bGB8wWMR92"
                        },
                        {
                            id: 2,
                            name: "La cosa vostra",
                            cif: "987654321-ZZZZ",
                            address: "Calle verdadera, 987",
                            map: "https://goo.gl/maps/46bGB8wWMR92"
                        }

                    ],
                    rutine: 
                    [
                        "9:00 - dominar el mundo",
                        "11:30-11:35 - ganar dinerito con drogas",
                        "Resto del dia: escuchar Metallica"
                    ],
                    links: 
                        [     
                            "relaciones con la mafia china",
                            "A veces se relaciona con su pareja"
                        ],
                    familiars:
                        [
                            {
                              id: 1,
                              name: "Elmer",
                              familiarPics: [`https://k26.kn3.net/978EE4179.jpg`],
                              familiarAddress: `La casa del padre, 5432`,
                              addressLink:`https://goo.gl/maps/46bGB8wWMR92`,
                              related: `Padre`
                            }
                        ] 
                },
                {
                    id:2,
                    name: "Sr. Burns",
                    aka:"Señor Burns",
                    picsLinks:
                    [
                        "https://vignette.wikia.nocookie.net/inciclopedia/images/6/68/Burncito.gif/revision/latest/scale-to-width-down/199?cb=20090513222042"  
                    ],
                    address: "Mansion Burns",
                    addressLink:"https://goo.gl/maps/64HuGnzQAi22",
                    addressPic:
                    [
                        "https://vignette.wikia.nocookie.net/simpsons/images/9/9d/Burnsmanor.jpg/revision/latest?cb=20100417152133"
                    ],
                    vehicles: 
                    [
                        {
                            id: 1,
                            brand: "Roll Royce",
                            model: "Class 1",
                            type: "Coche",
                            plate: "12345-ABC",
                            frame: "numero de bastidor 1",
                            pic: ["https://vignette.wikia.nocookie.net/simpsons/images/2/20/Burns_antique_car.jpg/revision/latest?cb=20150726060709"]
                        }
                    ],   
                    companies: [
                        {
                            id: 1,
                            name: "Central Nuclear",
                            cif: "11111111111-AAAA",
                            address: "Calle Boomb, 321",
                            map: "https://goo.gl/maps/46bGB8wWMR92"
                        }

                    ],
                    rutine: 
                    [
                        "9:00 - dominar el mundo",
                        "11:30-11:35 - ganar dinerito con drogas",
                        "Resto del dia: escuchar Metallica"
                    ],
                    links: 
                        [     
                            "relaciones con la mafia china",
                            "A veces se relaciona con su pareja"
                        ],
                    familiars:
                        [
                            {
                              id: 1,
                              name: "Dios",
                              familiarPics: [`https://vignette.wikia.nocookie.net/simpsons/images/0/0e/God_%28The_Simpsons%29.png/revision/latest?cb=20110922135521`],
                              familiarAddress: `El cierlo, 1`,
                              addressLink:`https://goo.gl/maps/46bGB8wWMR92`,
                              related: `Padre, el de él y el de todos`
                            }
                        ] 
                }
            ]
        }, 
       {
            id:3,
            name: "operacion 3",
            type: "tipo 1",
            state: false,
            people:
            [
                {
                    id:1,
                    name: "malo 1",
                    aka:"Sam Bigotes",
                    picsLinks:
                    [
                        "https://ugc.kn3.net/i/origin/http://bp1.blogger.com/_2FFr9p7f3W8/R1h7jXnOAMI/AAAAAAAAAJE/77TTVowR4Sw/s400/yosemitesam-wallpaper3.jpg",
                        "http://2.bp.blogspot.com/-2gQU8ncMrzo/VAe76aJYyeI/AAAAAAAAnEI/IiLmB2IGg1A/s1600/Yosemite-sam-manos.gif"  
                    ],
                    address: "casa malo 1",
                    addressLink:"https://goo.gl/maps/64HuGnzQAi22",
                    addressPic:
                    [
                        "https://vignette.wikia.nocookie.net/looneytunesshow/images/b/bd/Granny%27s_house.png/revision/latest?cb=20130525004826",
                        "https://vignette.wikia.nocookie.net/looneytunesshow/images/4/45/IMG_0510.PNG/revision/latest?cb=20161011024736"
                    ],
                    vehicles: 
                    [
                        {
                            id: 1,
                            brand: "Ford",
                            model: "Mondeo",
                            type: "Coche",
                            plate: "12345-ABC",
                            frame: "numero de bastidor 1",
                            pic: ["http://toonbarn.com/wordpress/wp-content/uploads/2011/09/Lola-teaches-Yosemite-Sam-how-to-drive.jpg"]

                        },
                        {
                            id: 2,
                            brand: "BMW",
                            type: "Moto",
                            model: "S1000XR",
                            plate: "54321-AAA",
                            frame: "Numero de bastidor 2",
                            pic:["https://media.zigcdn.com/media/model/2016/Feb/bmw_s1000xr_600x300.jpg"]
                        }
                    ],   
                    companies: [
                        {
                            id: 1,
                            name: "La cosa nostra",
                            cif: "123456789-AAAA",
                            address: "Calle falsa, 123",
                            map: "https://goo.gl/maps/46bGB8wWMR92"
                        },
                        {
                            id: 2,
                            name: "La cosa vostra",
                            cif: "987654321-ZZZZ",
                            address: "Calle verdadera, 987",
                            map: "https://goo.gl/maps/46bGB8wWMR92"
                        }

                    ],
                    rutine: 
                    [
                        "9:00 - dominar el mundo",
                        "11:30-11:35 - ganar dinerito con drogas",
                        "Resto del dia: escuchar Metallica"
                    ],
                    links: 
                        [     
                            "relaciones con la mafia china",
                            "A veces se relaciona con su pareja"
                        ],
                    familiars:
                        [
                            {
                              id: 1,
                              name: "Elmer",
                              familiarPics: [`https://k26.kn3.net/978EE4179.jpg`],
                              familiarAddress: `La casa del padre, 5432`,
                              addressLink:`https://goo.gl/maps/46bGB8wWMR92`,
                              related: `Padre`
                            }
                        ] 
                },
                {
                    id:2,
                    name: "Sr. Burns",
                    aka:"Señor Burns",
                    picsLinks:
                    [
                        "https://vignette.wikia.nocookie.net/inciclopedia/images/6/68/Burncito.gif/revision/latest/scale-to-width-down/199?cb=20090513222042"  
                    ],
                    address: "Mansion Burns",
                    addressLink:"https://goo.gl/maps/64HuGnzQAi22",
                    addressPic:
                    [
                        "https://vignette.wikia.nocookie.net/simpsons/images/9/9d/Burnsmanor.jpg/revision/latest?cb=20100417152133"
                    ],
                    vehicles: 
                    [
                        {
                            id: 1,
                            brand: "Roll Royce",
                            model: "Class 1",
                            type: "Coche",
                            plate: "12345-ABC",
                            frame: "numero de bastidor 1",
                            pic: ["https://vignette.wikia.nocookie.net/simpsons/images/2/20/Burns_antique_car.jpg/revision/latest?cb=20150726060709"]
                        }
                    ],   
                    companies: [
                        {
                            id: 1,
                            name: "Central Nuclear",
                            cif: "11111111111-AAAA",
                            address: "Calle Boomb, 321",
                            map: "https://goo.gl/maps/46bGB8wWMR92"
                        }

                    ],
                    rutine: 
                    [
                        "9:00 - dominar el mundo",
                        "11:30-11:35 - ganar dinerito con drogas",
                        "Resto del dia: escuchar Metallica"
                    ],
                    links: 
                        [     
                            "relaciones con la mafia china",
                            "A veces se relaciona con su pareja"
                        ],
                    familiars:
                        [
                            {
                              id: 1,
                              name: "Dios",
                              familiarPics: [`https://vignette.wikia.nocookie.net/simpsons/images/0/0e/God_%28The_Simpsons%29.png/revision/latest?cb=20110922135521`],
                              familiarAddress: `El cierlo, 1`,
                              addressLink:`https://goo.gl/maps/46bGB8wWMR92`,
                              related: `Padre, el de él y el de todos`
                            }
                        ] 
                }
            ]
        },
        {
            id:4,
            name: "operacion 4",
            type: "tipo 3",
            state: true,
            people:
            [
                {
                    id:1,
                    name: "malo 1",
                    aka:"Sam Bigotes",
                    picsLinks:
                    [
                        "https://ugc.kn3.net/i/origin/http://bp1.blogger.com/_2FFr9p7f3W8/R1h7jXnOAMI/AAAAAAAAAJE/77TTVowR4Sw/s400/yosemitesam-wallpaper3.jpg",
                        "http://2.bp.blogspot.com/-2gQU8ncMrzo/VAe76aJYyeI/AAAAAAAAnEI/IiLmB2IGg1A/s1600/Yosemite-sam-manos.gif"  
                    ],
                    address: "casa malo 1",
                    addressLink:"https://goo.gl/maps/64HuGnzQAi22",
                    addressPic:
                    [
                        "https://vignette.wikia.nocookie.net/looneytunesshow/images/b/bd/Granny%27s_house.png/revision/latest?cb=20130525004826",
                        "https://vignette.wikia.nocookie.net/looneytunesshow/images/4/45/IMG_0510.PNG/revision/latest?cb=20161011024736"
                    ],
                    vehicles: 
                    [
                        {
                            id: 1,
                            brand: "Ford",
                            model: "Mondeo",
                            type: "Coche",
                            plate: "12345-ABC",
                            frame: "numero de bastidor 1",
                            pic: ["http://toonbarn.com/wordpress/wp-content/uploads/2011/09/Lola-teaches-Yosemite-Sam-how-to-drive.jpg"]

                        },
                        {
                            id: 2,
                            brand: "BMW",
                            type: "Moto",
                            model: "S1000XR",
                            plate: "54321-AAA",
                            frame: "Numero de bastidor 2",
                            pic:["https://media.zigcdn.com/media/model/2016/Feb/bmw_s1000xr_600x300.jpg"]
                        }
                    ],   
                    companies: [
                        {
                            id: 1,
                            name: "La cosa nostra",
                            cif: "123456789-AAAA",
                            address: "Calle falsa, 123",
                            map: "https://goo.gl/maps/46bGB8wWMR92"
                        },
                        {
                            id: 2,
                            name: "La cosa vostra",
                            cif: "987654321-ZZZZ",
                            address: "Calle verdadera, 987",
                            map: "https://goo.gl/maps/46bGB8wWMR92"
                        }

                    ],
                    rutine: 
                    [
                        "9:00 - dominar el mundo",
                        "11:30-11:35 - ganar dinerito con drogas",
                        "Resto del dia: escuchar Metallica"
                    ],
                    links: 
                        [     
                            "relaciones con la mafia china",
                            "A veces se relaciona con su pareja"
                        ],
                    familiars:
                        [
                            {
                              id: 1,
                              name: "Elmer",
                              familiarPics: [`https://k26.kn3.net/978EE4179.jpg`],
                              familiarAddress: `La casa del padre, 5432`,
                              addressLink:`https://goo.gl/maps/46bGB8wWMR92`,
                              related: `Padre`
                            }
                        ] 
                },
                {
                    id:2,
                    name: "Sr. Burns",
                    aka:"Señor Burns",
                    picsLinks:
                    [
                        "https://vignette.wikia.nocookie.net/inciclopedia/images/6/68/Burncito.gif/revision/latest/scale-to-width-down/199?cb=20090513222042"  
                    ],
                    address: "Mansion Burns",
                    addressLink:"https://goo.gl/maps/64HuGnzQAi22",
                    addressPic:
                    [
                        "https://vignette.wikia.nocookie.net/simpsons/images/9/9d/Burnsmanor.jpg/revision/latest?cb=20100417152133"
                    ],
                    vehicles: 
                    [
                        {
                            id: 1,
                            brand: "Roll Royce",
                            model: "Class 1",
                            type: "Coche",
                            plate: "12345-ABC",
                            frame: "numero de bastidor 1",
                            pic: ["https://vignette.wikia.nocookie.net/simpsons/images/2/20/Burns_antique_car.jpg/revision/latest?cb=20150726060709"]
                        }
                    ],   
                    companies: [
                        {
                            id: 1,
                            name: "Central Nuclear",
                            cif: "11111111111-AAAA",
                            address: "Calle Boomb, 321",
                            map: "https://goo.gl/maps/46bGB8wWMR92"
                        }

                    ],
                    rutine: 
                    [
                        "9:00 - dominar el mundo",
                        "11:30-11:35 - ganar dinerito con drogas",
                        "Resto del dia: escuchar Metallica"
                    ],
                    links: 
                        [     
                            "relaciones con la mafia china",
                            "A veces se relaciona con su pareja"
                        ],
                    familiars:
                        [
                            {
                              id: 1,
                              name: "Dios",
                              familiarPics: [`https://vignette.wikia.nocookie.net/simpsons/images/0/0e/God_%28The_Simpsons%29.png/revision/latest?cb=20110922135521`],
                              familiarAddress: `El cierlo, 1`,
                              addressLink:`https://goo.gl/maps/46bGB8wWMR92`,
                              related: `Padre, el de él y el de todos`
                            }
                        ] 
                }
            ]
        } 
    ];

    export default OperationMockData;
