import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan, faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons';
import styles from './GoalItem.module.css';

const GoalItem = ({
  goal,
  onGoalDelete,
  onGoalEdit,
  onSelectGoal,
  backgroundColor,
}) => {
  const editedText = useRef(null);

  const [isEditClicked, setIsEditClicked] = useState(false);
  const [isDeleteClicked, setIsDeleteClicked] = useState(false);
  const [updatedText, setUpdatedText] = useState('');
  const submitEditedContent = () => {
    if (updatedText === '') {
      setIsEditClicked(false);
      return;
    }

    setUpdatedText('');
    setIsEditClicked(false);
    onGoalEdit(updatedText, goal.id);
  };

  const openEdit = () => {
    setIsEditClicked(true);
    editedText.current?.focus();
  };

  const openDelete = () => {
    setIsDeleteClicked(true);
  };

  const cancelEdit = () => {
    setUpdatedText('');
    setIsEditClicked(false);
  };

  const cancelDelete = () => {
    setIsDeleteClicked(false);
  };

  const onDelete = (id) => {
    onGoalDelete(id);
  };

  const goalItemClicked = (id) => {
    onSelectGoal(id);
  };

  const isChecked = goal.isFinished;
  return (
    <Container
      onClick={() => goalItemClicked(goal.id)}
      $backgroundColor={backgroundColor}
    >
      <Label $backgroundColor={backgroundColor}>
        <input type="checkbox" readOnly checked={goal.isCompleted} />
        <div>
          <FontAwesomeIcon
            icon={faCheck}
            color="#1a202c"
            className={styles.checkIcon}
          />
        </div>
      </Label>
      {isEditClicked ? (
        <input
          className={
            isChecked ? `${styles.text} ${styles.checked}` : `${styles.text}`
          }
          value={updatedText}
          onChange={(e) => setUpdatedText(e.target.value)}
          ref={editedText}
          placeholder={goal.text}
        />
      ) : (
        <Text
          className={
            isChecked ? `${styles.text} ${styles.checked}` : `${styles.text}`
          }
        >
          {goal.text}
        </Text>
      )}
      {isEditClicked && !isDeleteClicked ? (
        <ActionButtons>
          <button className={styles.submitIcon} onClick={submitEditedContent}>
            <FontAwesomeIcon icon={faCheck} size="2x" color="white" />
          </button>
          <button className={styles.cancelIcon} onClick={cancelEdit}>
            <FontAwesomeIcon icon={faXmark} size="2x" color="white" />
          </button>
        </ActionButtons>
      ) : !isEditClicked && isDeleteClicked ? (
        <ActionButtons>
          <button
            className={styles.submitIcon}
            onClick={() => onDelete(goal.id)}
          >
            <FontAwesomeIcon icon={faCheck} size="2x" color="white" />
          </button>
          <button className={styles.cancelIcon} onClick={cancelDelete}>
            <FontAwesomeIcon icon={faXmark} size="2x" color="white" />
          </button>
        </ActionButtons>
      ) : (
        <ActionButtons>
          <button className={styles.editIcon} onClick={openEdit}>
            <FontAwesomeIcon icon={faPenToSquare} size="2x" color="white" />
          </button>
          <button className={styles.deleteIcon} onClick={openDelete}>
            <FontAwesomeIcon icon={faTrashCan} size="2x" color="white" />
          </button>
        </ActionButtons>
      )}
    </Container>
  );
};

const Container = styled.div`
  background: ${(props) => props.$backgroundColor};
  border-radius: 8px;
  width: 13rem;
  height: 9rem;
  display: flex;
  flex-direction: column;
  margin: 1rem;
  padding: 1rem;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    margin: 0.5rem;
  }
`;

const ActionButtons = styled.div`
  display: flex;
  justify-content: right;
  width: 100%;
`;

const Label = styled.label`
  div {
    width: 35px;
    height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    border: 3px solid transparent;
    border-radius: 50%;
    cursor: pointer;
  }

  input[type='checkbox']:checked + div {
    background: ${(props) => props.$backgroundColor};
  }
`;
const Text = styled.div`
  font-size: 1.2rem;
  color: #1a202c;
  word-break: keep-all;
  overflow-wrap: anywhere;
`;

export default GoalItem;
