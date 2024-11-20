import React from 'react';
import { useSelector } from 'react-redux';
import styles from '../styles/Workflow.module.scss';

const Workflow = () => {
  const workflowSteps = useSelector((state) => state.data.workflowSteps);

  console.log(workflowSteps, "workflowSteps");

  return (
    <div className={styles.workflow}>
      <h2>Workflow Steps</h2>
      <div className={styles.cardsContainer}>
        {workflowSteps.length > 0 ? (
          workflowSteps.map((step, index) => (
            <div key={index} className={styles.card}>
              <h3 className={styles.cardTitle}>{step.name_title}</h3>
              <p className={styles.cardStatus}>Status: {step.status}</p>
              {step.note && <p className={styles.cardNote}>Note: {step.note}</p>}
            </div>
          ))
        ) : (
          <p>No workflow steps available.</p>
        )}
      </div>
    </div>
  );
};

export default Workflow;
