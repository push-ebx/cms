import { MoonIcon, SunIcon } from "@/shared/ui/icons";
import { Switch } from "@nextui-org/react";
import { useDarkMode } from "@/shared/lib/useDarkMode.tsx";

export const ToggleTheme = () => {
  const [_, setTheme] = useDarkMode();

  return (
    <Switch
      onValueChange={value => value ? setTheme('light') : setTheme('dark')}
      defaultSelected
      size="sm"
      color="primary"
      thumbIcon={({ isSelected, className }) =>
        isSelected ? (
          <SunIcon className={className} />
        ) : (
          <MoonIcon className={className} />
        )
      }
    />
  );
};