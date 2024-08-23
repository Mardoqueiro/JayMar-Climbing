<template>
  <!-- eslint disable -->
  <div class="container-main">
   

<<<<<<< HEAD
                                          <h2>Products Table</h2>
=======
    <h2>Products Table</h2>
    <div class="search-filter">
      <input v-model="searchQuery" placeholder="Search by name" />
    </div>
      
>>>>>>> f41bf7ec79861ee996164795fafce0133994f374
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

<<<<<<< HEAD
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
                                <form @submit.prevent="submitProductForm">
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
                                </form>
                              </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                                <!-- BUTTON TO ADD NEW PRODUCT -->
                                <button type="button" class="btn btn-primary" @click.prevent="addProduct()">Save changes</button>
                            </div>
                          </div>
                        </div>
=======
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
          <tr v-for="product in products" :key="product.prodID">

            <td>{{ product.prodID }}</td>
            <td>{{ product.prodName }}</td>
            <td>{{ product.category }}</td>
            <td>{{ product.quantity }}</td>
            <td>{{ product.amount }}</td>
            <td>
              <!-- Button trigger modal -->
              <button
                type="button"
                class="btn btn-primary"
                data-bs-toggle="modal"
                :data-bs-target="`#updateProductModal${product.prodID}`"
              >
                Edit Product
              </button>

              <!-- EDIT PRODUCT  MODAL-->
              <div
                class="modal fade"
                :id="`updateProductModal${product.prodID}`"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h1 class="modal-title fs-5" id="exampleModalLabel">
                        Update a product
                      </h1>
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div class="modal-body">
                      <div class="admin-input">
                        <input
                          type="number"
                          :placeholder="product.prodID"
                          v-model="payload.prodID"
                          readonly
                        />
                        <input
                          type="text"
                          :placeholder="product.prodName"
                          v-model="payload.prodName"
                        />
                        <input
                          type="text"
                          :placeholder="product.category"
                          v-model="payload.category"
                        />
                        <input
                          type="text"
                          :placeholder="product.amount"
                          v-model="payload.amount"
                        />
                        <input
                          type="text"
                          :placeholder="product.quantity"
                          v-model="payload.quantity"
                        />
                        <input
                          type="text"
                          :placeholder="product.prodUrl"
                          v-model="payload.prodUrl"
                        />
>>>>>>> f41bf7ec79861ee996164795fafce0133994f374
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
             
              <div>
                <button class="delete-button" @click="deleteProduct(product.prodID)" ><span class="text">Delete</span><span class="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"></path></svg></span></button>
              </div>
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
                                <form @submit.prevent="submitUserForm">
                                <input type="text" placeholder="First Name" v-model="userPayload.firstName" value="" required/>
                                <br><br>
                                <input type="text" placeholder="Last Name" v-model="userPayload.lastName" required/>
                                <br><br>
                                <input type="number" placeholder="User's Age" v-model="userPayload.userAge" value="Data" required/>
                                <br><br>
                                <input type="text" placeholder="Gender" v-model="userPayload.Gender" required/>
                                <br><br>
                                <input type="text" placeholder="User Role" v-model="userPayload.userRole" value="Data" required/>
                                <br><br>
                                <input type="text" placeholder="Email address" v-model="userPayload.emailAdd" required/>
                                <br><br>
                                <input type="text" placeholder="User Profile" v-model="userPayload.userProfile" required/>
                                <br><br>
                                <input type="text" placeholder="Password" v-model="userPayload.userPass" required/>
                                </form>
                              </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>0
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
              <div>
                <button class="delete-button" v-on:click="deleteUser(user.userID)"><span class="text">Delete</span><span class="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"></path></svg></span></button>
              </div>
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
      searchQuery: '',
      selectedCategory: '',
      priceSortOrder: 'asc',

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
      categories: [],
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
    searchedProducts(){
      this.filteredProducts = this.products.filter(product => product.prodName.toLowerCase().includes(this.searchQuery.toLowerCase()));
      this.filterProducts();
    },
    filteredProducts() {
      let filtered = this.products;
      if (this.searchQuery) {
        filtered = filtered.filter(product =>
          product.prodName.toLowerCase().includes(this.searchQuery.toLowerCase())
        );
      }

      if (this.selectedCategory) {
        filtered = filtered.filter(product =>
          product.category === this.selectedCategory
        );
      }

      if (this.priceSortOrder) {
        filtered = filtered.slice().sort((a, b) => {
          return this.priceSortOrder === 'asc'
            ? a.amount - b.amount
            : b.amount - a.amount;
        });
      }

      return filtered;
    },
    sortProducts(propertyName) {
      this.filteredProducts = this.filteredProducts.slice().sort((a, b) => {
        if (this.priceSortOrder === 'asc') {
          return a[propertyName] - b[propertyName];
        } else {
          return b[propertyName] - a[propertyName];
        }
      });
    },
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
      

<<<<<<< HEAD
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
=======
    },
    deleteProduct(prodID) {
      this.$store.dispatch("deleteProduct", prodID).then(() => {
        console.log("Product deleted from store!");
      });
    },
    addUser() {
      this.$store
        .dispatch("addUser", this.userPayload)
>>>>>>> f41bf7ec79861ee996164795fafce0133994f374
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
  },
  async submitUpdateForm() {
      this.errors = {};
      for (const [key, value] of Object.entries(this.userPayload)) {
        if (!value) {
          this.errors[key] = `${key} is required`;
        }
      }
      if (Object.keys(this.errors).length === 0) {
        await this.$store.dispatch('updateUser', {
          userID: this.userId,
          ...this.userPayload
        });
      } else {
        console.log(this.errors);
      }
},
async submitProductForm() {
      this.errors = {};
      for (const [key, value] of Object.entries(this.productPayload)) {
        if (!value) {
          this.errors[key] = `${key} is required`;
        }
      }
      if (Object.keys(this.errors).length === 0) {
        await this.$store.dispatch('addAProduct', this.productPayload);
        this.productPayload = {
          name: '',
          price: '',
          category: '',
          description: ''
        };
      } else {
        console.log(this.errors); // Handle errors appropriately
      }
<<<<<<< HEAD
    }
=======
    },
  },
  searchedProducts() {
    if (!this.searchQuery) return this.products;
    return this.products.filter(product => {
      const productName = product.prodName.toLowerCase();
      const searchQuery = this.searchQuery.toLowerCase();
      return productName.includes(searchQuery);
    });
  },
};
</script>

<style>
#newUserbtn{
  margin: 5em 48.5em;
}
#newProductbtn{
  margin: 5em 46.5em;
}
@media only screen and (min-width: 770px) {
  .btn {
    margin: 1em 10em;
    padding: 1px 3px;
>>>>>>> f41bf7ec79861ee996164795fafce0133994f374
  }
}

</script>

<style scoped>
.container-main {
  padding: 20px;
  background-color: #A47E3B; 
}

.btn {
  margin: 5px 0;
}

.table-container {
  width: 100%;
  overflow-x: auto; 
}

.table {
  width: 100%;
  margin-bottom: 1rem;
  color: #212529;
  border-collapse: collapse;
}

.table th,
.table td {
  padding: 0.75rem;
  vertical-align: top;
  border-top: 1px solid #dee2e6;
}

.table thead th {
  vertical-align: bottom;
  border-bottom: 2px solid #BF9742;
}

.table tbody + tbody {
  border-top: 2px solid #dee2e6;
}

@media (max-width: 768px) {
  .table th, .table td {
    display: block;
    width: 100%;
  }

  .table th {
    font-weight: bold;
    background-color: #e9ecef;
  }
 
  .modal-dialog {
    max-width: 100%;
    margin: 10px;
  }

  .btn {
    width: 100%; 
    margin-bottom: 10px;
  }

  .modal-content {
    width: 100%;
  }

  .admin-input input {
    width: 100%;
    margin-bottom: 10px;
  }
}


.delete-button {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #dc3545;
  color: white;
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 5px;
}

.delete-button .icon {
  margin-left: 5px;
}

.delete-button:hover {
  background-color: #c82333;
}

.delete-button svg {
  fill: white;
}
</style>
