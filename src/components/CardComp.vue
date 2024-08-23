<template>
    <div class="card">
        <div class="card-header">
            <slot name="cardHeader"></slot>
        </div>
        <div class="card-body">
            <slot name="cardBody"></slot>
        </div>
  </div>
    
</template>

<script>
export default {
    name: "CardComp"
}
</script>

<style scoped>
.card {
  width: 18rem;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px #61481C;
  background-color: #E6B325;
}

</style>