fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((users) =>
    //console.log(json)

    {
      console.log(users);
      //let html = "todo 1, todo 2, todo 3";

      let html = `<table>`;

      users.forEach((user) => {
       html+= `
        <tr>
        <td> ${user.id} </td>
        <td> ${user.name} </td>
       
       <td> ${user.email} </td>
       </tr>`;
      });

      html += `</table>`;
      document.body.innerHTML = html;
    }
  );
