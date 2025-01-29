import React, { useEffect, useState } from "react";
import KeplerGl from "kepler.gl";
import { processCsvData } from "kepler.gl/processors";
import { addDataToMap } from "kepler.gl/actions";
import { useDispatch } from "react-redux";

const MapComponent = () => {
  const dispatch = useDispatch();
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    fetch("/bfplan.csv")
      .then(response => response.text())
      .then(csvText => {
        const data = processCsvData(csvText);
        dispatch(
          addDataToMap({
            datasets: {
              info: { label: "市区町村データ", id: "japan_map" },
              data,
            },
            options: { centerMap: true, readOnly: false },
          })
        );
        setDataLoaded(true);
      });
  }, [dispatch]);

  return (
    <div style={{ height: "100vh" }}>
      <KeplerGl id="map" width="100%" height="100%" />
    </div>
  );
};

export default MapComponent;