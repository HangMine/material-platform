import documentDomain from '@/utils/document-domain';

const rIpv4 = /\d+\.\d+\.\d+\.\d+/;

export function getCookieConfig() {
  const path = '/';
  if (documentDomain === 'localhost' || rIpv4.test(documentDomain)) {
    return {
      path,
    };
  }

  return {
    domain: `.${documentDomain}`,
    path,
  };
}

export default getCookieConfig;
