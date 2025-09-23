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
      ? '2025年ミスヘブン総選挙応援キャンペーンのディスクリプション'
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
