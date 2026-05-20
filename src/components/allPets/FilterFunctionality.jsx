import { Label, ListBox, Select } from "@heroui/react";

const FilterFunctionality = () => {
  return (
    <div>
      <Select className="w-[256px]" placeholder="Select one">
        <Label>Filter by Species</Label>
        <Select.Trigger>
          <Select.Value />
          <Select.Indicator />
        </Select.Trigger>
        <Select.Popover>
          <ListBox>
            <ListBox.Item id="bird" textValue="Bird">
              Bird
              <ListBox.ItemIndicator />
            </ListBox.Item>
            <ListBox.Item id="cat" textValue="Cat">
              Cat
              <ListBox.ItemIndicator />
            </ListBox.Item>
            <ListBox.Item id="dog" textValue="Dog">
              Dog
              <ListBox.ItemIndicator />
            </ListBox.Item>
            <ListBox.Item id="rabbit" textValue="Rabbit">
              Rabbit
              <ListBox.ItemIndicator />
            </ListBox.Item>
            <ListBox.Item id="others" textValue="Others">
              Others
              <ListBox.ItemIndicator />
            </ListBox.Item>
          </ListBox>
        </Select.Popover>
      </Select>
    </div>
  );
};

export default FilterFunctionality;
