import React, { useState } from "react";
import Header from "../../components/Header/Header";
import ExploreMenu from "../../components/ExploreMenu/ExploreMenu";
import FoodDisplay from "../../components/FoodDisplay/FoodDisplay";
import AppDownlod from "../../components/AppDownload/AppDownlod";

function Home() {
  const [category, setCategory] = useState("All");
  return (
    <div className="">
      <Header />
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
      <AppDownlod />
    </div>
  );
}

export default Home;
