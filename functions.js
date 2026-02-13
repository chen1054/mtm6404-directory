

// 1. list() 
function list(clients) {
  return clients
    .map((client, index) => {
      return `<li class="list-group-item d-flex justify-content-between" data-index="${index}">
        ${client.name}
        <strong>$ ${client.balance}</strong>
      </li>`;
    })
    .join(''); 
}

// 2. order() 
function order(clients, property) {
  
  return [...clients].sort((a, b) => {
    if (typeof a[property] === 'string') {
     
      return a[property].localeCompare(b[property]);
    } else {
    
      return a[property] - b[property];
    }
  });
}

// 3. total() 
function total(clients) {
  return clients.reduce((sum, client) => sum + client.balance, 0);
}

// 4. info() 
function info(index) {
  return clients.find((client, i) => i === index);
}

// 5. search() 
function search(query) {
  const lowerQuery = query.toLowerCase();
  return clients.filter(client => client.name.toLowerCase().includes(lowerQuery));
}
