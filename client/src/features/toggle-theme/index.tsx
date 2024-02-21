import { MoonIcon, SunIcon } from "@/shared/ui/icons";
import { useSwitch, VisuallyHidden } from "@nextui-org/react";
import { useDarkMode } from "@/shared/lib/useDarkMode.tsx";
import { useEffect } from "react";

export const ToggleTheme = () => {
  const {
    Component,
    slots,
    isSelected,
    getBaseProps,
    getInputProps,
    getWrapperProps
  } = useSwitch();
  const [_, setTheme] = useDarkMode();

  useEffect(() => {
    isSelected ? setTheme('light') : setTheme('dark');
  }, [isSelected]);

  return (
    <div className="flex flex-col gap-2">
      <Component {...getBaseProps()}>
        <VisuallyHidden>
          <input {...getInputProps()} />
        </VisuallyHidden>
        <div
          {...getWrapperProps()}
          className={slots.wrapper({
            class: [
              "w-8 h-8",
              "flex items-center justify-center",
              "rounded-md bg-default-100"
            ],
          })}
        >
          {_ === "light" ? <SunIcon/> : <MoonIcon/>}
        </div>
      </Component>
    </div>
  )
};