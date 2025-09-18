import { ABTestGenerator } from '@/components/tools/ab-test-generator';
import { getDictionary } from '@/dictionaries';
import type { Locale } from '@/i18n-config';

export default async function ABTestGeneratorPage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);
  return <ABTestGenerator dictionary={dictionary.tools.abTest} />;
}
