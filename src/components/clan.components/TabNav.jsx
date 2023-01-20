import React from "react";
import { NavLink } from "react-router-dom";

export default function TabNav() {
  return (
    <section className="tab--nav">
      <NavLink className={"tab--nav_pill"} to={"./player"}>
        Profile
      </NavLink>
      <NavLink className={"tab--nav_pill"} to={"."}>
        Clan
      </NavLink>
      <NavLink className={"tab--nav_pill"} to={"./find_clan"}>
        Find Clan
      </NavLink>
      <NavLink className={"tab--nav_pill"} to={"./find_player"}>
        Find Player
      </NavLink>
    </section>
  );
}
