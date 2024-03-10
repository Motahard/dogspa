import Title from '@/components/title';
import Paragraph from '@/components/paragraph';
import { SpaContainer, Breaker } from '@/pages/spa-services/styles';
import { colors, cormorant } from '@/constants';
import { spaServicesInfo } from './utils';

function SpaServices() {
  return (
    <SpaContainer>
      {spaServicesInfo.map(({ Component, description, props }) => <Component {...props}>{description}</Component>)}
    </SpaContainer>
  );
}

export default SpaServices;
