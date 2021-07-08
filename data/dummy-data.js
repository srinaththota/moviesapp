
import Leone from '../assets/leone.jpg'
import Daniels from '../assets/daniels.jpg'
import Brandi from '../assets/brandi.jpg'
import Kacey from '../assets/kacey.jpg'
import Categoires from '../models/Categories'
import Star from '../models/StarCategories'
import Horror from '../assets/horror.jpg'
import Jessica from '../assets/jessica-alba.jpg'
import Annabelle from '../assets/annabelle.jpg'
import Titanic from '../assets/titanic.jpg'
/*const data=[{
    id:1,
    name:'Nappi',
    image:Nappi
},
{
    id:2,
    name:'SunnyLeone',
    image:Leone
}
]*/
const data=[

    new Categoires('c1','Horror','#f5428d',Jessica),
    new Categoires('c2','Romantic','#f54242',Jessica),
    new Categoires('c3','Comedy','#f5a442',Jessica),
    new Categoires('c4','Thiller','#f5d142',Jessica),
    new Categoires('c5','Documentary','#368dff',Jessica),
    new Categoires('c6','Cartoon','#9eecff',Jessica),
    new Categoires('c7','Sci Fiction','#ffc7ff',Jessica),
    new Categoires('c8','Adult','#ffc7ff',Jessica),
    

]
export const StarData=[
    new Star('1',['c1','c4'],'The Ring',Horror,'https://video7258.s3.ap-south-1.amazonaws.com/theRing.mp4'),
    new Star('2',['c1','c4'],'Ragini MMS 2',Leone,'https://video7258.s3.ap-south-1.amazonaws.com/raginimms.mp4'),
    new Star('5',['c1','c5'],'The Eye',Jessica,'https://www.youtube.com/watch?v=c3j_Mo51Lwc'),
    new Star('6',['c2','c4'],'Titanic',Titanic,'https://video7258.s3.ap-south-1.amazonaws.com/titanic.mp4'),
    new Star('7',['c2','c7'],'Daniels',Daniels,'https://www.youtube.com/watch?v=c3j_Mo51Lwc'),
    new Star('8',['c2','c4'],'Brani',Brandi,'https://www.youtube.com/watch?v=c3j_Mo51Lwc'),
    new Star('9',['c3'],'Mr.Bean',Kacey,'https://www.youtube.com/watch?v=c3j_Mo51Lwc'),
    new Star('10',['c1'],'Annabelle',Annabelle,'https://video7258.s3.ap-south-1.amazonaws.com/theRing.mp4'),
]
export default data;