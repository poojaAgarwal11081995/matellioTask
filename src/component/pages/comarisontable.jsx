import React from 'react'

function Comarisontable(props) {
    return (
        <div>
            <h2 className="heading">Comparison Table</h2>
          <table>
            <tr>
              <th></th>
              <th>ID</th>
              <th>URL</th>
              <th>Title</th>
            </tr>
            {props.compareTable.map((item) => {
              return (
                <tr key={item.id}>
                  <td>
                    <img src={item.url} alt="" width="200px" height="100px" />
                  </td>
                  <td>{item.id}</td>
                  <td>{item.url}</td>
                  <td>{item.title}</td>
                </tr>
              );
            })}
          </table>
        </div>
    )
}

export default Comarisontable;
