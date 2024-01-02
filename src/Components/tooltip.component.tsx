import {
  ButtonHTMLAttributes,
  createContext,
  Dispatch,
  HTMLProps,
  ReactNode,
  SetStateAction,
  useContext,
  useMemo,
  useState
} from "react";
import {
  autoUpdate,
  flip,
  FloatingPortal,
  offset,
  Placement,
  shift,
  useDismiss,
  useFloating,
  useFocus,
  useHover,
  useInteractions,
  useRole
} from "@floating-ui/react";

interface TooltipOptions {
  placement?: Placement;
  open?: boolean;
  onOpenChange?: Dispatch<SetStateAction<boolean>>
}

function useTooltip({
  placement = "top",
  open: controlledOpen,
  onOpenChange: setControlledOpen
}: TooltipOptions = {}) {
  const [uncontrolledOpen, setUncontrolledOpen] = useState(false);

  const open = controlledOpen ?? uncontrolledOpen;
  const setOpen = setControlledOpen ?? setUncontrolledOpen;

  const data = useFloating({
    placement,
    open,
    onOpenChange: setOpen,
    whileElementsMounted: autoUpdate,
    middleware: [
      offset(5),
      flip({
        crossAxis: placement.includes("-"),
        fallbackAxisSideDirection: "start",
        padding: 5}),
      shift({padding: 5})
    ]
  });

  const context = data.context;

  const hover = useHover(context, {move: false, enabled: controlledOpen == null});
  const focus = useFocus(context, {enabled: controlledOpen == null});
  const dismiss = useDismiss(context);
  const role = useRole(context, {role: "tooltip"});

  const interactions = useInteractions([hover, focus, dismiss, role]);

  return useMemo(() => {
    return {open, setOpen, ...interactions, ...data};
  }, [open, setOpen, interactions, data])
}

type ContextType = ReturnType<typeof useTooltip> | null

const TooltipContext = createContext<ContextType>(null);

function useTooltipContext() {
  const context = useContext(TooltipContext);

  if (context === null)
    throw new Error("Tooltip components must be wrapped in <Tooltip/>");

  return context;
}

export function Tooltip({children, ...options}: {children: ReactNode} & TooltipOptions) {
  const tooltip = useTooltip(options);

  return (
    <TooltipContext.Provider value={tooltip}>
      {children}
    </TooltipContext.Provider>
  )
}

export function TooltipTrigger({children, ...props}: {children: ReactNode} & ButtonHTMLAttributes<HTMLButtonElement>) {
  const context = useTooltipContext();
  const ref = context.refs.setReference;

  return (
      <button ref={ref} data-state={context.open ? "open" : "closed"} {...context.getReferenceProps(props)}>
        {children}
      </button>
  );
}

export function TooltipContent({...props}: HTMLProps<HTMLDivElement>) {
  const context = useTooltipContext();
  const ref = context.refs.setFloating;

  return (context.open &&
  <FloatingPortal>
    <div ref={ref} style={{...context.floatingStyles}} {...context.getFloatingProps(props)} />
  </FloatingPortal>)

}