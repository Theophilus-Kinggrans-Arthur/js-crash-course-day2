fetch("http://localhost:3000/user")
  .then((res) => {
    return res.json();
  })

  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });
const url = "http://localhost:3000/user";

async function getAllUser() {
  const response = await fetch("http://localhost:3000/user");
  const data = await response.json();
  console.log(data);
}
getAllUser();

async function getUser(userId) {
  const response = await fetch(`${url}/${userId}`);
  const data = await response.json();
  console.log(data);
}
getAllUser(2);

let user = {
  firstName: "Theophilus",
  lastName: "Kinggrans Arthur",
  username: "TheoArthur",
  email: "theophilusA@gmail.com",
  gender: "Male",
};

async function createUser(userInfo) {
  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(userInfo),
    headers: {
      "Content - Type": "application/json",
    },
  });
  const data = await response.json();
  console.log(data);
}
//createUser(user);

const info = {
  email: "theophilus.A@gmail.com",
};

async function updateUser(userId, userData) {
  const response = await fetch(`${url}/${userId}`, {
    method: "PATCH",
    body: JSON.stringify(userData),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  console.log(data);
}

updateUser(2, info);

async function deleteUser(userId) {
  const response = await fetch(`${url}/${userId}`, {
    method: "DELETE",
    body: JSON.stringify(data),
    header: {
      "Content - Type": "application/json",
    },
  });
  const data = await response.json();
  console.log(data);
}
