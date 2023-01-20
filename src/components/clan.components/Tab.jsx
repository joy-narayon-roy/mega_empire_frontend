import React from "react";
import TabOptions from "./Tab_Options";

export default function Tab(props) {
  const { clanData } = props;
  console.log(clanData);
  return (
    <div className="tab">
      <TabOptions />
    </div>
  );
}
