const Table = ({ sat }) => {
  return (
    <table>
    <thead>
     <tr>
       <th>Name</th>
       <th>Type of Satellite</th>
       <th>Launch Date</th>
       <th>Status</th>
     </tr>
     </thead>
     <tbody>
      {sat.map((data) => {
        return (
          <tr key={data.id}>
            <td>{data.name}</td>
            <td>{data.type}</td>
            <td>{data.launchDate}</td>
            {data.operational ? <td>active</td> : <td>inactive</td>}
          </tr>
        );
      })}
     {/* <tr>
       <td>Row Data TBD</td>
     </tr> */}
     </tbody>
   </table>
  );
};

export default Table;