import React from "react";
import { useSearchParams } from "react-router-dom";
import "../styles/clan.page.css";
import useClanInfo from "../hooks/useClanInfo";
import Loading from "../components/Loading";
import TabNav from "../components/clan.components/TabNav";
import Tab from "../components/clan.components/Tab";

export default function Clan() {
  let [search] = useSearchParams();
  console.log(search.get("tag"));

  const {
    loading,
    data: clanData,
    error,
  } = useClanInfo(search.get("tag") ? search.get("tag") : "#RRVJCJVY");

  return (
    <main>
      {(loading || error) && (
        <Loading container={true} loading={loading} error={error} />
      )}
      {clanData && (
        <>
          <TabNav />
          <Tab clanData={clanData} />
        </>
      )}
    </main>
  );
}
