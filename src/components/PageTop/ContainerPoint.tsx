/* =======================================
 * TOPページ ポイント表記
 * URL:src/components/PageTop/ContainerPoint.tsx
 * Created: 2025-09-23
 * Last updated: 2025-09-23
 * ======================================= */
import styles from '@/styles/PageTop.module.scss';
import { useMemo } from 'react';

const ContainerPoint = () => {
  type PointItem = {
    label: number;
    point: number;
  };
  const pointData: PointItem[] = useMemo(
    () => [
      {
        label: 5,
        point: 500,
      },
      {
        label: 10,
        point: 1000,
      },
      {
        label: 50,
        point: 5000,
      },
      {
        label: 100,
        point: 10000,
      },
    ],
    []
  );
  return (
    <section className={styles.containerPoint}>
      <article>
        <div className={styles.boxHead}>
          <span>
            <em>予選・本選</em>共に
          </span>
          <p>当グループの女の子に投票すると…?!</p>
        </div>
        <ul className={styles.listPoint}>
          {pointData.map((item, index) => (
            <li key={index}>
              <div className={styles.label}>{item.label}</div>
              <span>投票すると</span>
              <div className={styles.point}>{item.point.toLocaleString()}</div>
            </li>
          ))}
        </ul>
        <p className={styles.textBottom}>をプレゼント！</p>
      </article>
    </section>
  );
};
export default ContainerPoint;
