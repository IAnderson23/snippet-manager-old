import {cloneElement, createContext, forwardRef, isValidElement, useContext, useMemo, useState} from "react";
import {
  autoUpdate,
  flip, FloatingPortal,
  offset,
  shift,
  useDismiss,
  useFloating,
  useFocus,
  useHover,
  useInteractions,
  useMergeRefs,
  useRole
} from "@floating-ui/react";


export function useTooltip({initialOpen = false, placement = "top", open: controlledOpen, onOpenChange: setControlledOpen}) {
  const [uncontrolledOpen, setUncontrolledOpen] = useState(initialOpen);

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

const TooltipContext = createContext(null);

export function useTooltipContext() {
  const context = useContext(TooltipContext);

  if (context === null)
    throw new Error("Tooltip components must be wrapped in <Tooltip/>");

  return context;
}

export function Tooltip({children, ...options}) {
  const tooltip = useTooltip(options);

  return (
    <TooltipContext.Provider value={tooltip}>
      {children}
    </TooltipContext.Provider>
  )
}

export const TooltipTrigger = forwardRef(({children, asChild = false, ...props}, propRef) => {
  const context = useTooltipContext();
  const childrenRef = children.ref;
  const ref = useMergeRefs([context.refs.setReference, propRef, childrenRef]);

  if (asChild && isValidElement(children)) {
    return cloneElement(
      children,
      context.getReferenceProps({
        ref,
        ...props,
        ...children.props,
        "data-state": context.open ? "open" : "closed"
      })
    )
  }

  return (
    <button ref={ref} data-state={context.open ? "open" : "closed"} {...context.getReferenceProps(props)}>
      {children}
    </button>
  )
})

export const TooltipContent = forwardRef(({style, ...props}, propRef) => {
  const context = useTooltipContext();
  const ref = useMergeRefs([context.refs.setFloating, propRef]);

  return (context.open &&
    <FloatingPortal>
      <div ref={ref} style={{...context.floatingStyles, ...style}} {...context.getFloatingProps(props)} />
    </FloatingPortal>

  )
})