import styles from './Item.module.css';


const Items = (props) => {

    
    return (
        <div className= {`${styles.list} ${(props.comp===true) && styles.incomp }`}>
        <li>
            {props.text}
            </li> 
    </div>
   
    );
}

export default Items;