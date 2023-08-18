import React, {useState} from "react";
import Button from "../UI/Button";
import styles from './InputGoal.module.css';

const InputGoal = (props) => {

    const [textInput, setText] = useState('');
    const [valid, setValid] = useState(true);

    function inputHandler(e) {
        setValid(true);
        setText(e.target.value);    
    }
  

    const formHandler = (e) => {
        e.preventDefault();

        if (textInput.trim().length === 0) {
            setValid(false);
            return;
        }


        const goal = {
            text: textInput,
            comp:false
        }
        props.onInput(goal);
        setText('');
    };

    return (
        <form className={styles.form}onSubmit={formHandler}>
            <div className={`${styles.formControls} ${!valid && styles.invalid }`}>
                <label>Enter Your Goal</label>
                <input  type="text" value={textInput} onChange={inputHandler} />               
            </div>

          <Button type="submit">Add Goal</Button>
      </form>  
    );
}

export default InputGoal;