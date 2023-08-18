import React from "react";
import Items from "../GoalItem/Items";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faCheck } from "@fortawesome/free-solid-svg-icons";
import styles from "./GoalList.module.css";

const GoalList = (props) => {

  function deleteHandler(item) {
    props.onDelete(item);
  }

  function checkHandler(item) {
    if (item.comp === true) {
      props.onComp(item, false);
    } else {
      props.onComp(item, true);
    }
  }

  return (
    <ul className={styles.goalItem}>
      {props.items.map((item) => (

        <div className={styles.items}>

          <Items comp={item.comp} key={item.key} text={item.text} />

          <div className={styles.listBtn}>
            <button
              onClick={() => checkHandler(item)}
              className={styles.compBtn}
            >
              <FontAwesomeIcon icon={faCheck} beat />
            </button>

            <button
              onClick={() => deleteHandler(item)}
              className={styles.delBtn}
            >
              <FontAwesomeIcon icon={faTrash} beat />
            </button>
            
          </div>
        </div>
      ))}
    </ul>
  );
};

export default GoalList;
