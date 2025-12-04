/* =======================================
 * 表彰キャストリスト
 * URL: src/components/PageTop/ContainerAwardCast.tsx
 * Created: 2025-12-04
 * ======================================= */
'use client';
import clsx from 'clsx';
import styles from '@/styles/PageTop.module.scss';
import Image from 'next/image';
import ExternalLink from '@/components/common/ExternalLink';
import { useEffect, useState } from 'react';

type AwardCast = {
  castName: string;
  shop: string;
  category: string;
  castImage: string;
  iconImage01?: string;
  iconImage02?: string;
  castUrl: string;
};

// const CATEGORY_LABELS: Record<string, string> = {
//   japan: '日本代表',
//   block: 'ブロック代表',
//   local: 'ローカル代表',
// };

const SHOP_LABELS: Record<string, string> = {
  kmHot: '熊本ホットポイント',
  kmVilla: '熊本ホットポイントヴィラ',
};

const ContainerAwardCast = () => {
  const [awardCasts, setAwardCasts] = useState<AwardCast[]>([]);

  useEffect(() => {
    const timestamp = Date.now();
    fetch(`/data/award_cast.json?t=${timestamp}`)
      .then((res) => res.json())
      .then((data) => setAwardCasts(data));
  }, []);

  return (
    <section className={styles.containerAwardCast}>
      <h2>入賞おめでとうございます！！</h2>
      <article>
        <ul className={styles.listAwardCast}>
          {awardCasts.map((cast) => (
            <li
              key={cast.castName}
              className={clsx(styles[cast.shop], styles[cast.category])}
            >
              <ExternalLink href={cast.castUrl} className={styles.itemImage}>
                <Image
                  src={cast.castImage}
                  alt={cast.castName}
                  className={styles.castImage}
                  width={120}
                  height={160}
                />
                {(cast.iconImage01 || cast.iconImage02) && (
                  <ul className={styles.iconImage}>
                    {cast.iconImage01 && (
                      <li>
                        <Image
                          src={cast.iconImage01}
                          alt={`${cast.castName} icon 1`}
                          width={24}
                          height={24}
                        />
                      </li>
                    )}
                    {cast.iconImage02 && (
                      <li>
                        <Image
                          src={cast.iconImage02}
                          alt={`${cast.castName} icon 2`}
                          width={24}
                          height={24}
                        />
                      </li>
                    )}
                  </ul>
                )}
              </ExternalLink>
              <div className={styles.shop}>
                {SHOP_LABELS[cast.shop] || cast.shop}
              </div>
              <div className={styles.name}>{cast.castName}</div>
              <ExternalLink href={cast.castUrl} className={styles.itemLink}>
                CAST PAGE
              </ExternalLink>
            </li>
          ))}
        </ul>
      </article>
    </section>
  );
};

export default ContainerAwardCast;
