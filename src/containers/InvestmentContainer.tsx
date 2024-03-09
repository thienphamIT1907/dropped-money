import FmarketContainer from '@/components/features/investment/Fmarket';
import TopiContainer from '@/components/features/investment/Topi';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const InvestmentContainer = () => (
  <Tabs className="size-full" defaultValue="fmarket">
    <TabsList className="mx-auto my-0 flex h-auto w-full max-w-[500px] items-center justify-center rounded-xl p-1">
      <TabsTrigger
        className="w-1/2 rounded-xl p-2 text-base"
        value="fmarket"
        defaultChecked
      >
        Fmarket
      </TabsTrigger>
      <TabsTrigger className="w-1/2 rounded-xl p-2 text-base" value="topi">
        Topi
      </TabsTrigger>
    </TabsList>
    <TabsContent className="mt-6 overflow-hidden" value="fmarket">
      <FmarketContainer />
    </TabsContent>
    <TabsContent value="topi">
      <TopiContainer />
    </TabsContent>
  </Tabs>
);

export default InvestmentContainer;
