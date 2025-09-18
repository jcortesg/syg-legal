import { SEOAnalyzer } from '@/components/tools/seo-analyzer';
import { getDictionary } from '@/dictionaries';
import type { Locale } from '@/i18n-config';

export default async function SEOAnalyzerPage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);
  return <SEOAnalyzer dictionary={dictionary.tools.seo} />;
}
