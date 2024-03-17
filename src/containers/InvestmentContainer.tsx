import UnAuthorizedPanel from '@/components/common/UnAuthorizedPanel';
import FmarketContainer from '@/components/features/investment/Fmarket';
import TopiContainer from '@/components/features/investment/Topi';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { RiShieldCheckLine, RiShieldKeyholeLine } from '@remixicon/react';
import { useState } from 'react';

const InvestmentContainer = () => {
  const [isAuth, setIsAuth] = useState(false);

  //  check isAuth
  // if !isAuth => Show login fmarket / topi dialog

  const renderAuthStatus = (platformTitle: string) => (
    <>
      {isAuth ? <RiShieldCheckLine /> : <RiShieldKeyholeLine />}
      <span className="pl-2">{platformTitle}</span>
    </>
  );

  return (
    <Tabs className="size-full" defaultValue="topi">
      <TabsList className="mx-auto my-0 flex h-auto w-full max-w-[400px] items-center justify-center rounded-xl p-2">
        <TabsTrigger
          className="w-1/2 rounded-xl p-2 text-base "
          // value="fmarket"
          value="fmarket"
          defaultChecked
        >
          {renderAuthStatus('Fmarket')}
        </TabsTrigger>
        <TabsTrigger className="w-1/2 rounded-xl p-2 text-base" value="topi">
          {renderAuthStatus('Topi')}
        </TabsTrigger>
      </TabsList>
      <TabsContent className="mt-6 overflow-hidden" value="fmarket">
        <FmarketContainer />
      </TabsContent>
      <TabsContent value="topi">
        {isAuth ? <TopiContainer /> : <UnAuthorizedPanel />}
      </TabsContent>
    </Tabs>
  );
};

export default InvestmentContainer;
