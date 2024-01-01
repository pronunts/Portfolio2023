interface Post {
    title : string
    content : string
    image: string
    url: string
    date: string
}

const posts : Post[] = [
    {
        title : 'Daniel Saldaña, exalumno del EU en DevOps de UNIR: "Lo que se veía antes como futuro ya es el presente"',
        content: 'Este ingeniero en DevOps eligió el programa por las posibilidades de mejorar sus habilidades y ampliar la visión global de una metodología que, desde su experiencia, define como "crucial en cualquier empresa que persigue o dispone ya de un modelo de CI/CD”.',
        image: '/images/unir_logo.svg',
        url: 'https://www.unir.net/actualidad/alumnos-unir/daniel-saldana-exalumno-del-eu-en-devops-de-unir-lo-que-se-veia-antes-como-futuro-ya-es-el-presente',
        date: 'May 2021'
    },  
]

export default posts