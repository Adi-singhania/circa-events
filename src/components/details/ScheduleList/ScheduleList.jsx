import React from 'react';
import { Clock } from 'lucide-react';
import styles from './ScheduleList.module.css';

export const ScheduleList = ({ schedule }) => {
  if (!schedule || schedule.length === 0) return null;

  return (
    <div className={styles.scheduleWrap}>
      {schedule.map((item, idx) => (
        <div key={idx} className={styles.scheduleItem}>
          <div className={styles.timeCol}>
            <Clock size={14} className={styles.clockIcon} />
            <span className={styles.timeText}>{item.time}</span>
          </div>

          <div className={styles.detailsCol}>
            <h4 className={styles.itemTitle}>{item.title}</h4>
            {item.description && (
              <p className={styles.itemDesc}>{item.description}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
