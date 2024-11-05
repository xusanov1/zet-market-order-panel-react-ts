import {uzumlogo, aliflogo, clicklogo, intendlogo, openlogo, paymelogo, payzelogo, zodlogo } from '@/assets/icons';
import { Image } from 'antd';
import { FC } from 'react';

type TPartnerType = {
  type: string;
};
const PartnerType: FC<TPartnerType> = ({ type }: { type: string }) => {
  switch (type) {
    case 'UZUM': return <Image width={75} src={uzumlogo} alt="uzumlogo" />;
    case 'ALIF': return <Image width={75} src={aliflogo} alt="aliflogo" />;
    case 'ZOOD': return <Image width={75} src={zodlogo} alt="zodlogo" />;
    case 'INTEND': return <Image width={75} src={intendlogo} alt="intendlogo" />;
    case 'PAYZEE': return <Image width={75} height={45} src={payzelogo} alt="payzelogo" />;
    case 'OPENCARD': return <Image width={75} src={openlogo} alt="openlogo" />;
    case 'PAYME': return <Image width={75} src={paymelogo} alt="paymelogo" />;
    case 'CLICK': return <Image width={75} height={45} src={clicklogo} alt="clicklogo" />;
    default: return <div>Default</div>;

  }
};
export default PartnerType;


