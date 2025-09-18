import { AdCopyGenerator } from '@/components/tools/ad-copy-generator';
import { getDictionary } from '@/dictionaries';
import type { Locale } from '@/i18n-config';

export default async function AdCopyGeneratorPage({
  params,
}: {
  params: { lang: Locale };
}) {
  const { lang } = params;
  const dictionary = await getDictionary(lang);
  return <AdCopyGenerator dictionary={dictionary.tools.adCopy} />;
}
