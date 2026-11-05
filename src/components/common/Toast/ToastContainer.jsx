import React from 'react';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';
import { useToast } from '../../../context/ToastContext';
import styles from './ToastContainer.module.css';

export const ToastContainer = () => {
  const { toasts, removeToast } = useToast();

  if (!toasts.length) return null;

  return (
    <div className={styles.container} aria-live="polite" aria-atomic="true">
      {toasts.map((toast) => {
        const isError = toast.type === 'error';
        const isInfo = toast.type === 'info';

        return (
          <div
            key={toast.id}
            className={`${styles.toast} ${isError ? styles.error : isInfo ? styles.info : styles.success}`}
            role="alert"
          >
            <div className={styles.iconWrap}>
              {isError ? (
                <AlertCircle size={18} strokeWidth={2} />
              ) : isInfo ? (
                <Info size={18} strokeWidth={2} />
              ) : (
                <CheckCircle2 size={18} strokeWidth={2} />
              )}
            </div>
            <div className={styles.message}>{toast.message}</div>
            <button
              type="button"
              className={styles.closeBtn}
              onClick={() => removeToast(toast.id)}
              aria-label="Close notification"
            >
              <X size={15} strokeWidth={2} />
            </button>
          </div>
        );
      })}
    </div>
  );
};
