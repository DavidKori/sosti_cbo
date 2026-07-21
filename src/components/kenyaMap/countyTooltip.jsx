const CountyTooltip = ({ tooltip }) => {

  if (!tooltip) return null;


  return (
    <div
      style={{
        position:"fixed",
        top: tooltip.y,
        left: tooltip.x ,

        backgroundColor:"#f3c600",

        border:"2px solid #facc15",

        borderRadius:"14px",

        padding:"18px",

        width:"240px",

        boxShadow:
          "0 10px 30px rgba(0,0,0,.25)",

        pointerEvents:"none",

        zIndex:1000
      }}
    >

      <h3
        style={{
          color:"#16a34a",
          marginBottom:"12px",
          fontWeight:800
        }}
      >
        {tooltip.county}
      </h3>


      <div
        style={{
          color:"#15803d",
          lineHeight:"1.8",
          fontWeight:600
        }}
      >

        <p>
          Projects:
          <span style={{color:"#166534"}}>
             {" "}{tooltip.projects}
          </span>
        </p>


        <p>
          Status:
          <span style={{color:"#166534"}}>
             {" "}{tooltip.status}
          </span>
        </p>


        <p>
          Population:
          <span style={{color:"#166534"}}>
             {" "}
             {tooltip.population.toLocaleString()}
          </span>
        </p>


      </div>

    </div>
  );
};


export default CountyTooltip;


// const CountyTooltip = ({ tooltip }) => {
//   if (!tooltip) return null;

//   return (
//     <div
//       style={{
//         position: "fixed",
//         top: tooltip.y + 15,
//         left: tooltip.x + 15,
//         background: "#fff",
//         borderRadius: 10,
//         padding: 15,
//         boxShadow: "0 8px 30px rgba(0,0,0,.15)",
//         pointerEvents: "none",
//         zIndex: 999,
//         minWidth: 220,
//       }}
//     >
//       <h4 style={{ marginBottom: 10 }}>{tooltip.county}</h4>

//       <p>
//         <strong>Projects:</strong> {tooltip.projects}
//       </p>

//       <p>
//         <strong>Status:</strong> {tooltip.status}
//       </p>

//       <p>
//         <strong>Population:</strong>{" "}
//         {tooltip.population.toLocaleString()}
//       </p>
//     </div>
//   );
// };

// export default CountyTooltip;