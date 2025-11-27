/* =======================================
 * TOPページ タイトル
 * URL:src/components/PageTop/ContainerHead.tsx
 * Referenced in: : /app/page.tsx
 * Created: 2025-09-23
 * Last updated: 2025-09-23
 * ======================================= */
import styles from '@/styles/PageTop.module.scss';
import Image from 'next/image';
import TitleLogo from '@/images/title-logo.webp';
import ImageQr from '@/images/qr.webp';
import ExternalLink from '@/components/common/ExternalLink';

const ContainerHead = () => {
  return (
    <>
      <h1 className={styles.itemH1}>2025年ミスヘブン総選挙応募キャンペーン</h1>
      <section className={styles.containerHead}>
        <article className={styles.blockTop}>
          <div className={styles.titleImage}>
            <Image src={TitleLogo} alt="ミスヘブン総選挙" />
          </div>
          <p className={styles.headTitle}>
            <span>2025年ミスヘブン総選挙</span>
            投票ありがとうキャンペーン！
          </p>

          <p className={styles.textChance}>
            九州南ブロック店舗型で 最多の12名が本選進出！
            <br />
            <em> ヘルス・ホテヘル部門独占！</em>
          </p>
          <p className={styles.textThanks}>
            ミスヘブン地方予選・ブロック本選での応援・投票
            <br className="sp" />
            本当にありがとうございました。
          </p>
        </article>
        <article className={styles.blockBottom}>
          <p>
            感謝の意を込めて
            <br className="sp" />
            12月1日～10日迄の期間中、
            <br />
            本選進出の12名で遊ばれた
            <em>
              全てのお客様に
              <br className="sp" />
              1000ポイントプレゼント！
            </em>
          </p>
        </article>
      </section>
    </>
  );
};
export default ContainerHead;
