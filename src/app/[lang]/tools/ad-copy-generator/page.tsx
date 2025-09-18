import { AdCopyGenerator } from '@/components/tools/ad-copy-generator';
import { getDictionary } from '@/dictionaries';
import type { Locale } from '@/i18n-config';

export default async function AdCopyGeneratorPage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);
  return <AdCopyGenerator dictionary={dictionary.tools.adCopy} />;
}
