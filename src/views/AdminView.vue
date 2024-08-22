<template>
  <!-- eslint disable -->
  <div class="container-main">
   

    <h1>Admin</h1>

                                          <h2>Products Table</h2>
    <!-- <input type="text" placeholder="search"/>
    <br/>
    <label for="button">Filter by Catergory</label>
    <button type="radio">FootWear</button>
    <br/>
    <button type="radio">Gear</button>
    <br/>
    <button type="radio">Accessories</button>
    <br/>
    <button type="radio">Safety</button>
    <br/> -->


    <div class="table-container">

                    <div class="newProduct">
                      <!-- ADD PRODUCT Modal -->
                      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addProductModal">Add New Product</button>
                      <div class="modal fade" id="addProductModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                          <div class="modal-content">
                            <div class="modal-header">
                              <h1 class="modal-title fs-5" id="exampleModalLabel">Add new product</h1>
                              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                              <div class="admin-input">
                                <input type="number" placeholder="Product ID" v-model="payload.prodID" value="Data" label="id"/>
                                <br> <br>
                                <input type="text" placeholder="Product Name" v-model="payload.prodName" aria-label="product name"/>
                                <br> <br>
                                <input type="text" placeholder="Category" v-model="payload.category" value="Data"/>
                                <br> <br>
                                <input type="number" placeholder="Quantity" v-model="payload.quantity"/>
                                <br> <br>
                                <input type="number" placeholder="Amount" v-model="payload.amount" value="Data"/>
                                <br> <br>
                                <input type="text" placeholder="URL" v-model="payload.prodUrl"/>
                              </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                                <!-- BUTTON TO ADD NEW PRODUCT -->
                                <button type="button" class="btn btn-primary" @click.prevent="addProduct()">Save changes</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                                                          
        <table class="table table-striped">
            <thead>
                <tr>
                  <th>Product ID</th>
                  <th>Product Name</th>
                  <th>Catergory</th>
                  <th>Quantity</th>
                  <th>Amount</th>
                  <th>Actions</th>
                </tr>
            </thead>
            <tbody v-if="products">
              <tr v-for="product in products" :key="product">
              <td>{{ product.prodID }}</td>
              <td>{{ product.prodName }}</td>
              <td>{{ product.category }}</td>
              <td>{{ product.quantity }}</td>
              <td>{{ product.amount }}</td>
              <td>
                                                      <!-- Button trigger modal -->
              <button type="button" class="btn btn-primary" data-bs-toggle="modal" :data-bs-target="`#updateProductModal${product.prodID}`">Edit Product</button>

                                                        <!-- EDIT PRODUCT  MODAL-->           
                  <div class="modal fade" :id="`updateProductModal${product.prodID}`" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                      <div class="modal-content">
                                  <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="exampleModalLabel">Update a product</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                  </div>
                                <div class="modal-body">
                                        <div class="admin-input">
                                              <input type="number" :placeholder="product.prodID" v-model="payload.prodID"  readonly>
                                              <input type="text"  :placeholder="product.prodName" v-model="payload.prodName" >
                                              <input type="text"  :placeholder="product.category" v-model="payload.category" >
                                              <input type="text"  :placeholder="product.amount" v-model="payload.amount" >
                                              <input type="text"  :placeholder="product.quantity" v-model="payload.quantity" >
                                              <input type="text"  :placeholder="product.prodUrl" v-model="payload.prodUrl" >
                                        </div>
                                </div>
                              <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="button"  @click.prevent="updateProduct(JSON.stringify(product.prodID))">Save changes</button>
                              </div>
                      </div>
                    </div>
                  </div>
              <button @click="deleteProduct(product.prodID)">delete</button>
              </td>
            </tr>
            </tbody>
            <div v-else>
              Loading
            </div>
        </table>




        <h2>Users Table</h2>
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addUserModal">Add New User</button>
                                                       <!-- ADD NEW USER MODAL -->
        <div class="newUser">
                      <!-- ADD USER Modal -->
                      <div class="modal fade" id="addUserModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                          <div class="modal-content">
                            <div class="modal-header">
                              <h1 class="modal-title fs-5" id="exampleModalLabel">Add new user</h1>
                              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                              <div class="admin-input">
                                <h5>please fill out all fields</h5>
                                <input type="text" placeholder="First Name" v-model="payload.firstName" value="" required/>
                                <br><br>
                                <input type="text" placeholder="Last Name" v-model="payload.lastName" required/>
                                <br><br>
                                <input type="number" placeholder="User's Age" v-model="payload.userAge" value="Data" required/>
                                <br><br>
                                <input type="text" placeholder="Gender" v-model="payload.Gender" required/>
                                <br><br>
                                <input type="text" placeholder="User Role" v-model="payload.userRole" value="Data" required/>
                                <br><br>
                                <input type="text" placeholder="Email address" v-model="payload.emailAdd" required/>
                                <br><br>
                                <input type="text" placeholder="User Profile" v-model="payload.userProfile" required/>
                                <br><br>
                                <input type="text" placeholder="Password" v-model="payload.userPass" required/>
                              </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                                <!-- BUTTON TO ADD NEW User -->
                                <button type="button" class="btn btn-primary" @click.prevent="addUser()">Save changes</button>
                            </div>
                          </div>
                        </div>
                      </div>
        </div>
        <table class="table table-striped">
              <thead>
                      <tr>
                        <th>User ID Number</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Age</th>
                        <th>Gender</th>
                        <th>Role</th>
                        <th>Email</th>
                        <th>Profile</th>
                        <th>Actions</th>
                      </tr>
              </thead>
              <tbody v-if="users">
                      <tr v-for="user in users" :key="user">
                            <td>{{ user.userID }}</td>
                            <td>{{ user.firstName }}</td>
                            <td>{{ user.lastName }}</td>
                            <td>{{ user.userAge }}</td>
                            <td>{{ user.Gender }}</td>
                            <td>{{ user.userRole }}</td>
                            <td>{{ user.emailAdd }}</td>
                            <td>{{ user.userProfile }}</td>                    
                            <td>
                                                <!-- Button trigger modal -->
                              <button type="button" class="btn btn-primary" data-bs-toggle="modal" :data-bs-target="`#updateUserModal${user.userID}`">Edit User</button>
                                                <!-- EDIT USER  MODAL-->  
                <div class="modal fade" :id="`updateUserModal${user.userID}`" tabindex="-1" aria-labelledby="updateUserLabel" aria-hidden="true">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h1 class="modal-title fs-5" id="updateUserLabel">Update User</h1>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                      <div class="admin-input">
                        <input type="text" :placeholder="user.userID" v-model="userPayload.usersID" readonly/>
                        <input type="text" :placeholder="user.firstName" v-model="userPayload.firstName" required/>
                        <input type="text" :placeholder="user.lastName" v-model="userPayload.lastName" required/>
                        <input type="number" :placeholder="user.userAge" v-model="userPayload.userAge" required/>
                        <input type="text" :placeholder="user.Gender" v-model="userPayload.Gender" required/>
                        <input type="text" :placeholder="user.userRole" v-model="userPayload.userRole" required/>
                        <input type="text" :placeholder="user.emailAdd" v-model="userPayload.emailAdd" required/>
                        <input type="text" :placeholder="user.userProfile" v-model="userPayload.userProfile" required/>
                        <input type="text" :placeholder="user.userPass" v-model="userPayload.userPass" required/>
                      </div>
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                      <button type="button" @click.prevent="updateUser(JSON.stringify(user.userID))">Save changes</button>
                    </div>
                  </div>
                </div>
              </div>
              <button v-on:click="deleteUser(user.userID)">delete</button>
                            </td>
                      </tr>
              </tbody>
              <div v-else>
                Loading
              </div>
            
         
        </table>
      </div>
  </div>
</template>




<script>

export default {
  // name: "AdminView",
  // components: {
   
  // },
  data() {
    return {
      payload: {
        prodName: "",
        category: "",
        quantity: 0,
        amount: 0,
        prodUrl: "",
      },
      userPayload: {
        firstName: "",
        lastName: "",
        userAge: 0,
        Gender: "",
        userRole: "",
        emailAdd: "",
        userProfile: "",
        userPass:""
      },
    };
  },

  computed: {
    products() {
      return this.$store.state.products;
    },
    users() {
      return this.$store.state.users;
    },
  },
  mounted() {
    this.$store.dispatch("fetchProducts");
    this.$store.dispatch("fetchUsers");
  },
  methods: {
    addProduct() {
      console.log("added");
      this.$store.dispatch('addAProduct', this.payload)
      .then(() => {
          console.log('Product added to store!');
          // this.resetPayload();
        });
      
    },

    updateProduct(id) {

      const productPayload = {
        prodID: JSON.parse(id),
        ...this.payload
      }
      this.$store.dispatch("updateProduct", productPayload)
      .then(() => {
            console.log('Product updated in store!');
            location.reload()
          
          });
      

      // const newProduct = {
      //   prodID: this.products.length + 1,
      //   prodName: this.$refs.prodName.value,
      //   category: this.$refs.category.value,
      //   quantity: this.$refs.quantity.value,
      //   amount: this.$refs.amount.value
      // };

      // console.log('New product:', this.payload);
      
  },
  deleteProduct(prodID){
    this.$store.dispatch('deleteProduct', prodID)
        .then(() => {
          console.log('Product deleted from store!');
        });
    
  },
  addUser(){
    this.$store.dispatch('addUser', this.userPayload)
    .then(() => {
          console.log('User added to store!');
          // this.resetPayload();
        })
        .catch((error)=>{
          console.error('Error adding user',error)
        })
  },
  updateUser(id){
    // const userToUpdate = this.users.find(u => u.id === userID);
    // if (userToUpdate) {
    //     this.$store.dispatch('updateUser', { ...this.userPayload, id: userID })
    //       .then(() => {
    //         console.log('User updated in store!');
    //         // this.resetUserPayload();
            
    //       });
    //   }
    const userPayload = {
      userID: JSON.parse(id),
      ...this.userPayload
    }
    this.$store.dispatch("updateUser", userPayload)
    .then(() => {
      console.log('User updated');
      location.reload()
      
    })
    
  },
  deleteUser(userID){
    this.$store.dispatch('deleteUser', userID)
        .then(() => {
          console.log('User deleted from store!');
        });
  }
}
}
</script>

<style>
@media only screen and (min-width: 770px) {
  .btn {
    margin: 1em 10em;
    padding: 1px 3px;
  }
}
.table {
  border-collapse: collapse;
  width: 70%;
  margin: 0 auto;
}

.table th,
.table td {
  border: 1px solid #ddd;
  padding: 3px;
  text-align: left;
}

.table th {
  background-color: #ddba09;
}

.table-striped tbody tr:nth-of-type(odd) {
  background-color: #b7eb3e;
}

.btn {
  display: inline-block;
  padding: 2px 6px;
  margin-bottom: 0;
  font-size: 14px;
  font-weight: normal;
  line-height: 1.42857143;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  cursor: pointer;
  border: 1px solid transparent;
  border-radius: 4px;
  margin: 0 0.5em;
}

.btn-danger {
  color: #fff;
  background-color: #d9534f;
  border-color: #d43f3a;
}

.btn-primary {
  color: #fff;
  background-color: #337ab7;
  border-color: #2e6da4;
}

.btn-sm {
  padding: 5px 10px;
  font-size: 12px;
  line-height: 1.5;
  border-radius: 3px;
}
</style>
