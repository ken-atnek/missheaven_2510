/* =======================================
 * TOPページ キャストリスト
 * URL:src/components/PageTop/ContainerCast.tsx
 * Referenced in: : /app/page.tsx
 * Created: 2025-09-23
 * Last updated: 2025-09-23
 * ======================================= */
'use client';
import styles from '@/styles/PageTop.module.scss';
import Image from 'next/image';
import ExternalLink from '@/components/common/ExternalLink';
import { useEffect, useState, useMemo } from 'react';

type Cast = {
  castName: string;
  area: string;
  shop: string;
  castImage: string;
  iconImage01?: string;
  iconImage02?: string;
  castUrl: string;
};

const AREA_LABELS: Record<string, string> = {
  fukuoka: '福岡',
  kumamoto: '熊本',
};
const SHOP_LABELS: Record<string, string> = {
  fuHot: '福岡ホットポイント',
  fuVilla: '福岡ホットポイントヴィラ',
  kmHot: '熊本ホットポイント',
  kmVilla: '熊本ホットポイントヴィラ',
};

const groupByArea = (casts: Cast[]) => {
  return casts.reduce<Record<string, Cast[]>>((acc, cast) => {
    if (!acc[cast.area]) acc[cast.area] = [];
    acc[cast.area].push(cast);
    return acc;
  }, {});
};

const ContainerCast = () => {
  const [castData, setCastData] = useState<Cast[]>([]);

  useEffect(() => {
    const timestamp = Date.now();
    fetch(`/data/cast.json?t=${timestamp}`)
      .then((res) => res.json())
      .then((data) => setCastData(data));
  }, []);

  // castDataが更新されたときだけ再計算
  const kumamotoCasts = useMemo(() => {
    const areaGroups = groupByArea(castData);
    return areaGroups['kumamoto'] || [];
  }, [castData]);
  return (
    <>
      <section className={styles.containerCast}>
        <article>
          {/* <p className={styles.announce}>
            当グループ九州エリアから{castData.length}名がエントリー!
            <br />
            皆様からの応援・投票よろしくお願いします！
          </p> */}
          <div className={styles.boxArea}>
            <h2>{AREA_LABELS['kumamoto']}エリア</h2>
            <ul className={styles.listCast}>
              {kumamotoCasts.map((cast) => (
                <li key={cast.castName} className={styles[cast.shop]}>
                  <ExternalLink
                    href={cast.castUrl}
                    className={styles.itemImage}
                  >
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
          </div>
        </article>
      </section>
      <div className={styles.copyright}>
        2025年ミスヘブン総選挙応募キャンペーン
      </div>
    </>
  );
};
export default ContainerCast;
