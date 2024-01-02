import React, {
  ButtonHTMLAttributes,
  createContext,
  Dispatch,
  FocusEvent,
  HTMLProps,
  MouseEvent,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useRef,
  useState
} from "react";
import {
  autoUpdate,
  flip,
  FloatingFocusManager,
  FloatingList,
  FloatingNode,
  FloatingPortal,
  FloatingTree,
  offset,
  safePolygon,
  shift,
  useClick,
  useDismiss,
  useFloating,
  useFloatingNodeId,
  useFloatingParentNodeId,
  useFloatingTree,
  useHover,
  useInteractions,
  useListItem,
  useListNavigation,
  useMergeRefs,
  useRole,
  useTransitionStyles,
  useTypeahead
} from "@floating-ui/react";

export interface MenuContextType {
  getItemProps: (userProps?: HTMLProps<HTMLElement>) => Record<string, unknown>
  activeIndex: number | null
  setActiveIndex: Dispatch<SetStateAction<number | null>>
  setHasFocusInside: Dispatch<SetStateAction<boolean>>
  isOpen: boolean
}
export interface MenuItemProps {
  label: string;
  disabled?: boolean;
}

export interface MenuProps {
  menuLabel: ReactNode;
  alignment: string
  nested?: boolean;
  children?: ReactNode;
}


export function Menu(props: MenuProps & HTMLProps<HTMLButtonElement>) {
  const parentID = useFloatingParentNodeId();

  if (parentID === null) {
    return (
        <FloatingTree>
          <DropdownMenu {...props}/>
        </FloatingTree>
    )
  }

  return <DropdownMenu {...props}/>;
}

export function MenuItem(props: MenuItemProps & ButtonHTMLAttributes<HTMLButtonElement>) {
  const {label, disabled} = props

  const menu = useContext(MenuContext);
  const item = useListItem({label: disabled ? null : label});
  const tree = useFloatingTree();
  const isActive = item.index === menu.activeIndex;

  return (
      <button
          {...props}
          ref={item.ref}
          type={"button"}
          role={"menu-item"}
          className={"menu-item"}
          tabIndex={isActive ? 0 : -1}
          disabled={disabled}
          {...menu.getItemProps({
            onClick: (event: MouseEvent<HTMLButtonElement>) => {
              props.onClick?.(event);
              tree?.events.emit("click");
            },
            onFocus: (event: FocusEvent<HTMLButtonElement>) => {
              props.onFocus?.(event);
              menu.setHasFocusInside(true);
            }
          })}
      >
        {label}
      </button>
  );
}

const MenuContext = createContext<MenuContextType>({
  getItemProps: () => ({}),
  activeIndex: null,
  setActiveIndex: () => {},
  setHasFocusInside: () => {},
  isOpen: false
});

function DropdownMenu(props: MenuProps & HTMLProps<HTMLButtonElement>) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [hasFocusInside, setHasFocusInside] = useState<boolean>(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const elementsRef = useRef<Array<HTMLButtonElement | null>>([]);
  const labelsRef = useRef<Array<string | null>>([]);
  const parent = useContext(MenuContext);
  const {menuLabel, children} = props


  const tree = useFloatingTree();
  const nodeId = useFloatingNodeId();
  const parentId = useFloatingParentNodeId();
  const item = useListItem();

  const isNested = !!parentId;

  const { floatingStyles, refs, context } = useFloating<HTMLButtonElement>({
    nodeId,
    open: isOpen,
    onOpenChange: setIsOpen,
    placement: isNested ? "right-start" : "bottom-start",
    middleware: [
      offset({ mainAxis: isNested ? 0 : 4, alignmentAxis: isNested ? -4 : 0 }),
      flip(),
      shift()
    ],
    whileElementsMounted: autoUpdate
  });

  const {isMounted, styles: transitionStyles} = useTransitionStyles(context, {
    duration: 200
  });

  const hover = useHover(context, {
    enabled: isNested,
    delay: { open: 75 },
    handleClose: safePolygon({ blockPointerEvents: true })
  });

  const click = useClick(context, {
    event: "mousedown",
    toggle: !isNested,
    ignoreMouse: isNested
  });

  const role = useRole(context, { role: "menu" });
  const dismiss = useDismiss(context, { bubbles: true });
  const listNavigation = useListNavigation(context, {
    listRef: elementsRef,
    activeIndex,
    nested: isNested,
    onNavigate: setActiveIndex
  });

  const typeahead = useTypeahead(context, {
    listRef: labelsRef,
    onMatch: isOpen ? setActiveIndex : undefined,
    activeIndex
  });

  const {
    getReferenceProps,
    getFloatingProps,
    getItemProps
  } = useInteractions([hover, click, role, dismiss, listNavigation, typeahead]);


  // Closes All Menus When An Item Gets Clicked Anywhere In The Tree.
  useEffect(() => {
    if (!tree) return;

    function handleTreeClick() {
      setIsOpen(false);
    }

    function onSubMenuOpen(event: { nodeId: string; parentId: string }) {
      if (event.nodeId !== nodeId && event.parentId === parentId) {
        setIsOpen(false);
      }
    }

    tree.events.on("click", handleTreeClick);
    tree.events.on("menu-open", onSubMenuOpen);

    return () => {
      tree.events.off("click", handleTreeClick);
      tree.events.off("menu-open", onSubMenuOpen);
    };
  }, [tree, nodeId, parentId]);

  useEffect(() => {
    if (isOpen && tree) {
      tree.events.emit("menu-open", { parentId, nodeId });
    }
  }, [tree, isOpen, nodeId, parentId]);

  return (
      <FloatingNode id={nodeId}>
        <button
            ref={useMergeRefs([refs.setReference, item.ref])}
            tabIndex={
              !isNested ? undefined : parent.activeIndex === item.index ? 0 : -1
            }
            role={isNested ? "menu-item" : undefined}
            data-open={isOpen ? "" : undefined}
            data-nested={isNested ? "" : undefined}
            data-focus-inside={hasFocusInside ? "" : undefined}
            className={isNested ? "menu-item" : "root-menu"}
            {...getReferenceProps(
                parent.getItemProps({
                  ...props,
                  onFocus(event: FocusEvent<HTMLButtonElement>) {
                    props.onFocus?.(event);
                    setHasFocusInside(false);
                    parent.setHasFocusInside(true);
                  }
                })
            )}
        >
          {menuLabel}
          {isNested && (
              <span aria-hidden style={{ marginLeft: 10, fontSize: 10 }}>
            ▶
          </span>
          )}
        </button>
        <MenuContext.Provider
            value={{
              activeIndex,
              setActiveIndex,
              getItemProps,
              setHasFocusInside,
              isOpen
            }}
        >
          <FloatingList elementsRef={elementsRef} labelsRef={labelsRef}>
            {isMounted && (
                <FloatingPortal>
                  <FloatingFocusManager
                      context={context}
                      modal={false}
                      initialFocus={isNested ? -1 : 0}
                      returnFocus={!isNested}
                  >
                    <div className={"menu-container"}
                        ref={refs.setFloating}
                        style={floatingStyles}
                        {...getFloatingProps()}
                    >
                      <div className={"menu"} data-alignment={props.alignment} style={{...transitionStyles}}>
                        {children}
                      </div>
                    </div>
                  </FloatingFocusManager>
                </FloatingPortal>
            )}
          </FloatingList>
        </MenuContext.Provider>
      </FloatingNode>
  );
}