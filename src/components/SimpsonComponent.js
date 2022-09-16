import './SimpsonComponents.css';
export default function SimpsonComponent(props) {

    let {name,age,pic,biography} = props;

    let classNameItem = 'family';
    return (
        <div className={classNameItem}>

            <h2 align='center'>{name} {age}</h2>
            <img  src={pic}/>
            <p align= 'center'>n{biography}</p>



        </div>

    );
}
