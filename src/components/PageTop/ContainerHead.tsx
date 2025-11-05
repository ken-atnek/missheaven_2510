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
            応援キャンペーン
          </p>
          <div className={styles.boxPoint}>
            <span className={styles.number}>20,000</span>
            <div className={styles.wrapHead}>
              <span>最大</span>
            </div>
          </div>
          <p className={styles.textChance}>
            超<em>BIG</em>チャンス！
          </p>
        </article>
        <article className={styles.blockBottom}>
          <div className={styles.boxPeriod}>
            <h2>投票期間</h2>
            <dl>
              <dt>地方予選</dt>
              <dd>
                <div className={styles.caution}>
                  <span>終了しました</span>
                </div>
                <time dateTime="2025-10-28">
                  <span className={styles.month}>10</span>
                  <span className={styles.day}>28</span>
                  <span className={styles.week}>火</span>
                  <span className={styles.time}>12:00</span>
                </time>
                <time dateTime="2025-11-03">
                  <span className={styles.month}>11</span>
                  <span className={styles.day}>3</span>
                  <span className={styles.week}>月</span>
                </time>
              </dd>
              <dt>ブロック本選</dt>
              <dd>
                <time dateTime="2025-11-18">
                  <span className={styles.month}>11</span>
                  <span className={styles.day}>18</span>
                  <span className={styles.week}>火</span>
                  <span className={styles.time}>12:00</span>
                </time>
                <time dateTime="2025-11-24">
                  <span className={styles.month}>11</span>
                  <span className={styles.day}>24</span>
                  <span className={styles.week}>月</span>
                </time>
              </dd>
            </dl>
          </div>
          <div className={styles.boxDetails}>
            {/* <ExternalLink
              href="https://img.cityheaven.net/img/cms/pdf/missheaven2025_touhyou.jpg"
              className={styles.itemQr}
            >
              <Image src={ImageQr} alt="QRコード" />
            </ExternalLink> */}
            <div className={styles.wrapAnnounce}>
              <div className={styles.caution}>
                <span>獲得期間は終了しました</span>
              </div>
              <p>
                <span>まずは</span>
                <span>
                  <time dateTime="2025-10-28">
                    <i className={styles.month}>10</i>
                    <i className={styles.day}>16</i>
                    <i className={styles.week}>木</i>
                  </time>
                  <i className={styles.lastText}>までに</i>
                </span>
              </p>
              <ExternalLink href="https://img.cityheaven.net/img/cms/pdf/missheaven2025_touhyou.jpg">
                投票チケット
              </ExternalLink>
              <p>を獲得してください</p>
            </div>
            <ul>
              <li>
                ・地方予選時に獲得した投票チケットは再度、本選でも利用出来ます。
              </li>
              <li>
                ・ポイントの付与はブロック本選終了後（11/25以降）となります。
              </li>
            </ul>
          </div>
        </article>
      </section>
    </>
  );
};
export default ContainerHead;
