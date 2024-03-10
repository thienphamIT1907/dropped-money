import {
  Tooltip as TooltipBase,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

type TooltipProps = {
  title?: string;
  children: React.ReactElement;
  isShow: boolean;
};

const Tooltip = ({ title, children, isShow }: TooltipProps) => (
  <TooltipProvider delayDuration={300}>
    <TooltipBase>
      <TooltipTrigger>{children}</TooltipTrigger>
      {isShow && (
        <TooltipContent align="center" side="right">
          <p>{title}</p>
        </TooltipContent>
      )}
    </TooltipBase>
  </TooltipProvider>
);

export default Tooltip;
