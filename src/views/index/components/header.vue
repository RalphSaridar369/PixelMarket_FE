<template>
  <div class="header">
    <div class="header-left-side">
        <h1 class="logo">PixelMarket</h1>
    </div>
    <div class="header-right-side">
        <h3>Home</h3>
        <h3>About Us</h3>
        <h3>Pricing</h3>
        <h3>Contact Us</h3>
    </div>
  </div>

</template>

<style scoped>
.header{
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding:20px;
  background: #242424;
}

.header-right-side{
  display: flex;
  gap: 1rem;
}

.logo{
    color:#ffde1a
}

.header-right-side h3{
  color: white;
  cursor: pointer;
  transition: color ease-in-out 0.5s;
}

.header-right-side h3:hover{
    color:#ffde1a
}

</style>
