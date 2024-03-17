import { RiErrorWarningLine, RiLoader4Line } from '@remixicon/react';
import { useState } from 'react';

const UnAuthorizedPanel = () => {
  const [isLoadingIframe, setIsLoadingIframe] = useState(true);
  return (
    <div className="relative">
      <div className="hidden h-[calc(100vh-300px)] flex-col items-center justify-center gap-6">
        <RiErrorWarningLine size={70} />
        <h1 className="text-xl">Sorry, This page needs to login to access.</h1>
        {/* <InvestmentLoginForm platform="Topi" /> */}
      </div>
      {isLoadingIframe && (
        <RiLoader4Line
          className="absolute right-[50%] top-[50%] animate-spin"
          size={30}
        />
      )}
      <iframe
        className="h-[calc(100vh-205px)] w-full"
        frameBorder="0"
        onLoad={() => setIsLoadingIframe(false)}
        src="https://online.topi.vn/login"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default UnAuthorizedPanel;
