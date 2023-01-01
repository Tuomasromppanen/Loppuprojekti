import React, { useState, useEffect } from 'react';

function AdminCategoryList({data}) {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
      setCategories(data);
      console.log(data)
    }, [data]);
  
return (
    <table>
    <thead>
      <tr>
        <th>ID</th>
        <th>Trnimi</th>
      </tr>
    </thead>
    <tbody>
      {categories.map(item => (
        <tr key={item.trnro}>
          <td>{item.trnro}</td>
          <td>{item.trnimi}</td>
        </tr>
      ))}
    </tbody>
  </table>
)
}

export default AdminCategoryList
      
      