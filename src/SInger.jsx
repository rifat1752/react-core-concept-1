export default function Singer({singer}){
return(
    <div>
        {console.log(singer.name)}
        <h4>singer: {singer.name}</h4>
        <p>age: {singer.age} </p>
    </div>
)
}