import Books from './Books';

let allBookMap = new Map();
for(let i=0; i<Books.length; i++){
    if(!allBookMap.has(Books[i].course)){
        allBookMap.set(Books[i].course, 1);
    }else{
        let all = allBookMap.get(Books[i].course);
        all++;
        allBookMap.set(Books[i].course, all);
    }
}

const allCourses = [...allBookMap.keys()];
const courseNumbers = [...allBookMap.values()];

export default allCourses;