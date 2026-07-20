import './map.css'
import { useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
} from "react-simple-maps";
import geoData from "../../utils/kenya.geojson?url";
import { countyData } from "../../utils/appData";
import { getCountyColor } from "../../utils/countyColors";
import MapLegend from './mapLegend';
import CountyTooltip from "./CountyTooltip";

const DEFAULT_COUNTY = {
  projects: 0,
  population: 0,
  status: "No Data",
};

const KenyaMap = () => {
  const [tooltip, setTooltip] = useState(null);

  return (
    <div className="map-container">
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{
          center: [38, 0.5],
          scale: 3500,
        }}
        width={800}
        height={900}
      >
        <Geographies geography={geoData}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const countyName = geo.properties.COUNTY_NAM?.trim();
                if (!countyName) return null;
              const county =
                countyData[countyName] || DEFAULT_COUNTY;

              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={getCountyColor(county.projects)}
                  stroke="var(--pale-black)"
                  strokeWidth={0.7}
                  onMouseEnter={(e) =>
                    setTooltip({
                      x: e.clientX,
                      y: e.clientY,
                      county: countyName,
                      ...county,
                    })
                  }
                  onMouseMove={(e) =>
                    setTooltip((prev) => ({
                      ...prev,
                      x: e.clientX,
                      y: e.clientY,
                    }))
                  }
                  onMouseLeave={() => setTooltip(null)}
                  style={{
                    default: {
                      outline: "none",
                    },
                    hover: {
                      fill: "var(--primary-button-color)",
                      cursor: "pointer",
                      outline: "none",
                    },
                    pressed: {
                      outline: "none",
                    },
                  }}
                />
              );
            })
          }
       
        </Geographies>
      </ComposableMap>

        <MapLegend />
      <CountyTooltip tooltip={tooltip} />
     
    </div>
  );
};

export default KenyaMap;








// import './map.css';
// import { useState } from 'react';
// import {
//     ComposableMap,
//     Geographies,
//     Geography
// } from "react-simple-maps";
// import { countyData } from '../../utils/appData';

// // import {kenya} from '../../../public/geo/kenyan-counties.geojson';

// const KenyaMap = () => {
//     const [tooltip, setTooltip] = useState("");
//     const county = countyData[Geographies.properties];
//     console.log(county)
//     return (

//         <ComposableMap
//             projection="geoMercator"
//             projectionConfig={{
//                 scale: 3500
//             }}
//         >

//             <Geographies geography="/geo/kenyan-counties.geojson">

//                 {({ geographies }) =>

//                     geographies.map((geo) => (
//                         // console.log(geo.properties),
//                         <Geography
//                             key={geo.rsmKey}
//                             geography={geo}
//                             onMouseEnter={()=>{
//                                 setTooltip(

//                                 `${county.name}

//                                 Projects: ${county.projects}`

//                                 );

//                                 }}

//                                 onMouseLeave={() => {

//                                 setTooltip("");
//                                 }}
//                             style={{

//                             default:{

//                                 fill: county?.color || "#dddddd",

//                                 stroke:"#202020",

//                                 strokeWidth:0.6

//                                 }

//                             }}
//                         />
                        
//                     ))
//                 }

//             </Geographies>

//         </ComposableMap>

//     );

// };
// import {
//   ComposableMap,
//   Geographies,
//   Geography
// } from "react-simple-maps";

// import { scaleSequential } from "d3-scale";
// import { interpolateBlues } from "d3-scale-chromatic";

// import geoData from "../../utils/kenya.geojson?url";
// import { useState } from "react";

// import { countyData } from "../../utils/appData";

// const colorScale = scaleSequential(interpolateBlues)
//   .domain([0, 120]);
// // const colorScale = scaleSequential(interpolateBlues)
// //     .domain([
// //         Math.min(...Object.values(countyData.population)),
// //         Math.max(...Object.values(countyData.population))
// //     ]);

// const KenyaMap = () => {
//     const [tooltip, setTooltip] = useState("");
//   return (
//     <div style={{ width: "100%", maxWidth: "900px" }}>
//       <ComposableMap
//         projection="geoMercator"
//         projectionConfig={{
//           scale: 3500,
//           center: [38, 0.5]
//         }}
//         width={800}
//         height={900}
//       >
//         <Geographies geography={geoData}>
//           {({ geographies }) =>
//             geographies.map((geo) => {
//               const county = geo.properties.COUNTY;

//               const value = countyData[county] || 0;

//               return (
//                 <Geography
//                   key={geo.rsmKey}
//                   geography={geo}
//                   fill={colorScale(value)}
//                   stroke="#4e4c4c"
//                   strokeWidth={0.5}
//                    onMouseEnter={() => {
//                     const county = geo.properties.COUNTY;
//                     setTooltip(`${county}: ${countyData[county] || 0}`);
//                 }}
//                 onMouseLeave={() => setTooltip("")}
//                                 style={{
//                     default: {
//                       outline: "none"
                     
//                     },
//                     hover: {
//                       fill: "var(--primary-button-color)",
//                       outline: "none"
//                     },
//                     pressed: {
//                       outline: "none"
//                     }
//                   }}
//                 />
//               );
//             })
//           }
//         </Geographies>
//       </ComposableMap>
//     </div>
//   );
// }

// export default KenyaMap;