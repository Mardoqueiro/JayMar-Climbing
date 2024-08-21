<template>
    <div>
      <!-- <nav-bar-comp/> -->

      <h1>Admin</h1>


      <h2>Products Table</h2>
      <input type="text" placeholder="search">
      <br>
      <label for="button">Filter by Catergory</label>
      <button type="radio">FootWear</button>
      <br>
      <button type="radio">Gear</button>
      <br>
      <button type="radio">Accessories</button>
      <br>
      <button type="radio">Safety</button>
      <br>
      <div>
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
                              <input type="number" class="lot" :v-model="payload.prodID">
                              <input type="text" class="brand" :v-model="payload.prodName">
                              <input type="text" class="cat" :v-model="payload.category">
                              <input type="text" class="desc" :v-model="payload.quantity">
                              <input type="number" class="price" :v-model="payload.amount">
                              
                      </div>
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
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
            <tbody>
              <tr v-for="product in products" :key="product">
              <td>{{ product.prodID }}</td>
              <td>{{ product.prodName }}</td>
              <td>{{ product.category }}</td>
              <td>{{ product.quantity }}</td>
              <td>{{ product.amount }}</td>
              <td>
                <!-- Button trigger modal -->
              <button type="button" class="btn btn-primary" data-bs-toggle="modal" :data-bs-target="`#updateProductModal${product.prodID}`">Edit Product</button>

<!-- Modal -->
<div class="modal fade" :id="`updateProductModal${product.prodID}`" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
                  <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Update a product</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" v-on:click="console.log('modalclosed')"></button>
                  </div>
      <div class="modal-body">
        <div class="admin-input">
                <input type="number"  placeholder="" v-model="payload.prodID" value="Data">
                <input type="text"  placeholder="">
                <input type="text"  placeholder="">
                <input type="text"  placeholder="">
                <input type="number"  placeholder="">
                <input type="file">
            </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" v-on:click="console.log('closed')">Close</button>
        <button type="button"  @click.prevent="console.log('hey')">Save changes</button>
      </div>
    </div>
  </div>
</div>
<button v-on:click="console.log('hi')">delete</button></td>
           
            </tr>
            </tbody>
           
        </table>
        <table class="table table-striped">
          <thead>
            <tr>
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
           <tbody>
            <tr v-for="user in users" :key="user">
              <td>{{ user.firstName }}</td>
              <td>{{ user.lastName }}</td>
              <td>{{ user.userAge }}</td>
              <td>{{ user.Gender }}</td>
              <td>{{ user.userRole }}</td>
              <td>{{ user.emailAdd }}</td>
              <td>{{ user.userProfile }}</td>
              <td>
                <button class="btn btn-primary btn-sm" v-on:click="console.log('no')">edit</button>
                <button class="btn btn-danger btn-sm" v-on:click="console.log('hi')">delete</button>
              </td>
         

            </tr>
           </tbody>
            
</table>
        
      </div>
     


      <!-- <footer-comp/> -->
  </div>
</template>
<script>
// import NavBarComp from '@/components/NavBarComp.vue'
// import FooterComp from '@/components/FooterComp.vue'
export default {
    name: 'AdminView',
  components: {
    // NavBarComp,
    // FooterComp
  },
  data() {
    return {
      payload: {
        prodID: this.$store.state.products?.length + 1 || 1,
        prodName: '',
        category: '',
        quantity: 0,
        amount: 0
      }
    }
  },
  computed: {
    products() {
      return this.$store.state.products;
    },
    users(){
      return this.$store.state.users;
    },
    
  },
  mounted() {
    this.$store.dispatch("fetchProducts");
    this.$store.dispatch("fetchUsers");
    
},
methods:{
  addProduct() {
       console.log('added');
       
      // const newProduct = {
      //   prodID: this.products.length + 1,
      //   prodName: this.$refs.prodName.value,
      //   category: this.$refs.category.value,
      //   quantity: this.$refs.quantity.value,
      //   amount: this.$refs.amount.value
      // };
      // console.log('New product:', this.payload);
      this.$store.dispatch('addProduct', this.payload);
      // console.log('Product added to store!');
    }

}
}
</script>
<style>
@media only screen and (min-width: 770px) {
      .btn{
        margin: 1em 10em;
        padding: 1px 3px;

      }
}
    /* .table {
  border-collapse: collapse;
  width: 30%;
  margin: 0 auto;
} */

.table th, .table td {
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
  margin: 0 .5em;
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