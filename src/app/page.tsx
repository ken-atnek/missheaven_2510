/* =======================================
 * ミスヘブン総選挙応援キャンペーン TOPページ
 * URL: /app/page.tsx
 * Created: 2025-08-26
 * Last updated: 2025-08-26
 * ======================================= */

import type { Metadata } from 'next';
import { isRealProduction } from '@/lib/env';
import ContainerHead from '@/components/PageTop/ContainerHead';
import ContainerPoint from '@/components/PageTop/ContainerPoint';
import ContainerCast from '@/components/PageTop/ContainerCast';

export const generateMetadata = (): Metadata => {
  return {
    title: '2025年ミスヘブン総選挙応援キャンペーン',
    description: isRealProduction
      ? '2025年ミスヘブン総選挙 応援キャンペーン開催中！地方予選 ⇒ 本選の投票期間あり。投票者には投票数に応じて最大20,000ポイントプレゼント。投票チケット取得方法や参加条件はサイトでチェック。'
      : undefined,
  };
};
export default function PageTop() {
  return (
    <>
      <ContainerHead />
      <ContainerPoint />
      <ContainerCast />
    </>
  );
}
