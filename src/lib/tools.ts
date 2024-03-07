import { TemplateString } from 'next/dist/lib/metadata/types/metadata-types';

export const generateMetaDataByPage = (
  metaDataTitle: string | TemplateString | null | undefined,
  pageName: string,
) => `${metaDataTitle} • ${pageName}`;

export const upperCaseFirstLetter = (str: string): string =>
  str.charAt(0).toUpperCase() + str.slice(1);
