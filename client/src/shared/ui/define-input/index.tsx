import { Type } from "@/shared/model";
import { Input, Switch, Textarea } from "@nextui-org/react";

type Props = {
  placeholder?: string,
  onChange: (value: any) => void,
  value?: string,
  type: Type
}

export const DefineInput = ({ placeholder, onChange, value, type }: Props) => {
  return (
    <>
      {
        type.type === "integer" ?
        <Input
          placeholder={placeholder}
          type={"number"}
          onValueChange={value => onChange(+value)}
        /> :
        type.type === "text" ?
        <Input
          placeholder={placeholder}
          type={"text"}
          onValueChange={value => onChange(value)}
        /> :
        type.type === "long_text" ?
        <Textarea
          placeholder={placeholder}
          onValueChange={value => onChange(value)}
        /> :
        type.type === "double" ?
        <Input
          placeholder={placeholder}
          type={"number"}
          onValueChange={value => onChange(+value)}
        /> :
        type.type === "time" ?
        <Input
          placeholder={placeholder}
          type={"time"}
          onValueChange={value => onChange(value)}
        /> :
        type.type === "date" ?
        <Input
          placeholder={placeholder}
          type={"date"}
          onValueChange={value => onChange(value)}
        /> :
        type.type === "boolean" ?
          <Switch onValueChange={value => onChange(value)}>
            { placeholder }
          </Switch> :
        "Неопределенный тип"
      }
    </>
  );
};